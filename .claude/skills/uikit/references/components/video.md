# Video
> Display videos as animated images with precise autoplay control, and load them lazily or on click — even from YouTube.  ·  Media · JS

To apply this component, add the `uk-video` attribute to a `<video>` element. Autoplay is handled automatically, so the `autoplay` attribute is not required. The video continues playing when when it leaves the viewport but pauses if its visibility changes to hidden. Don't add any controls but the `playsinline`, `loop` and `muted` attributes instead to display the video as animated image.

## JS — attr `uk-video="…"` · api `UIkit.video(el, opts)`

| Option | Default | Description |
|---|---|---|
| `autoplay` | `true` | The video automatically plays/pauses as it's visible/hidden on the page. Additionally, the video can play when its in the viewport or hovered with the mouse (`inview`, `hover`). |
| `restart` | `false` | Video will seek to the beginning whenever video element's autoplay option pauses the video. |
| `hover-target` | `false` | The element that functions as hover toggle when autoplay option is set to `hover`. Defaults to the element itself. |

## Markup

```html
<video src="" width="" height="" playsinline loop muted uk-video></video>
```
