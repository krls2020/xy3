# Notification
> Create toggleable notifications that fade out automatically.  ·  Interactive · JS

The notification will not fade out but remain visible when you hover the message until you stop hovering. You can also close the notification by clicking it. To show notifications, the component provides a simple JavaScript API. The following code snippet gets you started.

## JS — programmatic: `UIkit.notification(message, status|opts)`

| Option | Default | Description |
|---|---|---|
| `message ` | `false` | Notification message to show. |
| `status` | `null` | Notification status color. |
| `timeout` | `5000` | Visibility duration until a notification disappears. If set to `0`, notification will not hide automatically. |
| `group` |  | Useful, if you want to close all notifications in a specific group. |
| `pos` | `top-center` | Display corner. |

## Markup

```html
<button class="demo uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Notification message'})">Click me</button>
```
