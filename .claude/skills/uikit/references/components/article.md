# Article
> Create articles within your page.  ·  Category: **Content**

<sub>Source: [getuikit.com/docs/article](https://getuikit.com/docs/article) · demo: `tests/article.html`</sub>

## Usage

The Article component consists of the article itself, a title and meta text.

Use the `.uk-text-lead` class from the [Text component](text.md) to create a leading paragraph.

## Classes & modifiers

| Class               | Description                                                                                                |
|---------------------|------------------------------------------------------------------------------------------------------------|
| `.uk-article`       | Add this class to define the Article component. Typically you would use an `<article>` element for this.   |
| `.uk-article-title` | Add this class to a heading to create an article title. Typically you would use a `<h1>` element for this. |
| `.uk-article-meta`  | Add this class to a paragraph that contains meta text about your article.                                  |

## Markup

```html
<article class="uk-article">
    <h1 class="uk-article-title"></h1>
    <p class="uk-article-meta"></p>
</article>
```

## See also

[text](text.md)
