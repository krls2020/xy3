# Notification
> Create toggleable notifications that fade out automatically.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/notification](https://getuikit.com/docs/notification) · demo: `tests/notification.html`</sub>

## Usage

The notification will not fade out but remain visible when you hover the message until you stop hovering. You can also close the notification by clicking it. To show notifications, the component provides a simple JavaScript API. The following code snippet gets you started.

## JavaScript

Activate with the `uk-notification` attribute (no JS needed). Programmatic: `UIkit.notification(element, options)`.

**Component options** (set in the attribute, e.g. `uk-notification="option: value"`):

| Option     | Value  | Default      | Description                                                                                                   |
|------------|--------|--------------|---------------------------------------------------------------------------------------------------------------|
| `message ` | String | `false`      | Notification message to show.                                                                                 |
| `status`   | String | `null`       | Notification status color.                                                                                    |
| `timeout`  | Number | `5000`       | Visibility duration until a notification disappears. If set to `0`, notification will not hide automatically. |
| `group`    | String |              | Useful, if you want to close all notifications in a specific group.                                           |
| `pos`      | String | `top-center` | Display corner.                                                                                               |

## Markup

```html
<button class="demo uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Notification message'})">Click me</button>
```

