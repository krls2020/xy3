# Comment
> Includes styles for comments, for example for a blog section on your site.  ·  Content

The Comment component consists of the comment itself, a comment header, including an avatar, a title and meta text, and a comment body.

## Classes

| Class | Description |
|---|---|
| `.uk-comment` | Add this class to define the Comment component. |
| `.uk-comment-body` | Add this class to create a comment body. |
| `.uk-comment-header` | Add this class to create a comment header. |
| `.uk-comment-title` | Add this class to a heading to create a comment title. |
| `.uk-comment-meta` | Add this class to create meta text about your comment, e.g. a [subnav](subnav.md). |
| `.uk-comment-avatar` | Add this class to an `<img>` element to create an avatar for the comment author. |

## Markup

```html
<article class="uk-comment">
    <header class="uk-comment-header">
        <img class="uk-comment-avatar" src="" width="" height="" alt="">
        <h4 class="uk-comment-title"></h4>
        <ul class="uk-comment-meta uk-subnav"></ul>
    </header>
    <div class="uk-comment-body"></div>
</article>
```
