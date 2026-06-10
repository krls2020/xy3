/**
 * Weather Dashboard — Bun.serve
 *
 * Serves an HTML dashboard plus a JSON API that pulls live data from
 * Open-Meteo (free, no API key): geocoding to resolve a city name to
 * coordinates, then the forecast endpoint for current + daily weather.
 */

const PORT = Number(process.env.PORT ?? 3000);

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// WMO weather interpretation codes → label + emoji
const WMO: Record<number, { label: string; icon: string }> = {
  0: { label: "Jasno", icon: "☀️" },
  1: { label: "Převážně jasno", icon: "🌤️" },
  2: { label: "Polojasno", icon: "⛅" },
  3: { label: "Zataženo", icon: "☁️" },
  45: { label: "Mlha", icon: "🌫️" },
  48: { label: "Námrazová mlha", icon: "🌫️" },
  51: { label: "Mrholení (slabé)", icon: "🌦️" },
  53: { label: "Mrholení", icon: "🌦️" },
  55: { label: "Mrholení (silné)", icon: "🌧️" },
  56: { label: "Mrznoucí mrholení", icon: "🌧️" },
  57: { label: "Mrznoucí mrholení", icon: "🌧️" },
  61: { label: "Slabý déšť", icon: "🌧️" },
  63: { label: "Déšť", icon: "🌧️" },
  65: { label: "Silný déšť", icon: "🌧️" },
  66: { label: "Mrznoucí déšť", icon: "🌧️" },
  67: { label: "Mrznoucí déšť", icon: "🌧️" },
  71: { label: "Slabé sněžení", icon: "🌨️" },
  73: { label: "Sněžení", icon: "🌨️" },
  75: { label: "Silné sněžení", icon: "❄️" },
  77: { label: "Sněhové krupky", icon: "🌨️" },
  80: { label: "Přeháňky", icon: "🌦️" },
  81: { label: "Přeháňky", icon: "🌧️" },
  82: { label: "Silné přeháňky", icon: "⛈️" },
  85: { label: "Sněhové přeháňky", icon: "🌨️" },
  86: { label: "Sněhové přeháňky", icon: "❄️" },
  95: { label: "Bouřka", icon: "⛈️" },
  96: { label: "Bouřka s kroupami", icon: "⛈️" },
  99: { label: "Silná bouřka s kroupami", icon: "⛈️" },
};

function describe(code: number) {
  return WMO[code] ?? { label: "Neznámo", icon: "❓" };
}

type WeatherPayload = {
  location: { name: string; country: string; latitude: number; longitude: number };
  current: {
    temperature: number;
    apparent: number;
    humidity: number;
    windSpeed: number;
    code: number;
    label: string;
    icon: string;
    isDay: boolean;
    time: string;
  };
  daily: Array<{
    date: string;
    code: number;
    label: string;
    icon: string;
    tMax: number;
    tMin: number;
    precip: number;
  }>;
};

async function getWeather(city: string): Promise<WeatherPayload> {
  // 1) Geocode the city name
  const geoRes = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=cs&format=json`,
  );
  if (!geoRes.ok) throw new Error(`Geocoding selhalo (${geoRes.status})`);
  const geo = (await geoRes.json()) as any;
  if (!geo.results || geo.results.length === 0) {
    throw new Error(`Město "${city}" nebylo nalezeno`);
  }
  const place = geo.results[0];

  // 2) Fetch forecast for the resolved coordinates
  const params = new URLSearchParams({
    latitude: String(place.latitude),
    longitude: String(place.longitude),
    current:
      "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum",
    timezone: "auto",
    forecast_days: "5",
  });
  const fcRes = await fetch(`${FORECAST_URL}?${params}`);
  if (!fcRes.ok) throw new Error(`Předpověď selhala (${fcRes.status})`);
  const fc = (await fcRes.json()) as any;

  const c = fc.current;
  const cur = describe(c.weather_code);

  const daily: WeatherPayload["daily"] = fc.daily.time.map((date: string, i: number) => {
    const d = describe(fc.daily.weather_code[i]);
    return {
      date,
      code: fc.daily.weather_code[i],
      label: d.label,
      icon: d.icon,
      tMax: fc.daily.temperature_2m_max[i],
      tMin: fc.daily.temperature_2m_min[i],
      precip: fc.daily.precipitation_sum[i],
    };
  });

  return {
    location: {
      name: place.name,
      country: place.country ?? "",
      latitude: place.latitude,
      longitude: place.longitude,
    },
    current: {
      temperature: c.temperature_2m,
      apparent: c.apparent_temperature,
      humidity: c.relative_humidity_2m,
      windSpeed: c.wind_speed_10m,
      code: c.weather_code,
      label: cur.label,
      icon: cur.icon,
      isDay: c.is_day === 1,
      time: c.time,
    },
    daily,
  };
}

const HTML = await Bun.file(new URL("./index.html", import.meta.url)).text();

const server = Bun.serve({
  port: PORT,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/health" || url.pathname === "/status") {
      return Response.json({ status: "ok", time: new Date().toISOString() });
    }

    if (url.pathname === "/api/weather") {
      const city = url.searchParams.get("city")?.trim();
      if (!city) {
        return Response.json({ error: "Chybí parametr ?city=" }, { status: 400 });
      }
      try {
        const data = await getWeather(city);
        return Response.json(data);
      } catch (err) {
        return Response.json(
          { error: err instanceof Error ? err.message : "Neznámá chyba" },
          { status: 502 },
        );
      }
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`Weather dashboard běží na http://0.0.0.0:${server.port}`);
