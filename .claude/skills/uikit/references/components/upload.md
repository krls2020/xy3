# Upload
> Upload files through a file input form element or a placeholder area.  ·  Forms · JS

This JavaScript component utilizes the latest XMLHttpRequest Level 2 specification and provides the ability to upload files via Ajax including tracking of the upload progress. The component provides two ways of uploading files: `select` and `drop`. While the `select` request can only be applied to `<input type="file">` elements, you can basically use any element with `drop`, which enables you to simply drag and drop files from your desktop into the specified element to upload them. Note that this component does not handle your file uploads on the server.

## JS — programmatic: `UIkit.upload(el, opts)`

| Option | Default | Description |
|---|---|---|
| `url` |  | The request url. |
| `multiple` | `false` | Allow multiple files to be uploaded. |
| `name` | `files[]` | The name parameter. |
| `method` | `POST` | The request type. |
| `params` | `{}` | Additional parameters. |
| `allow` | `false` | File name filter (eg. *.png). Separate multiple values with a pipe (*.png\ |
| `mime` | `false` | File MIME type filter (eg. image/*). Separate multiple values with a pipe (image/*\ |
| `maxSize` | `0` | The maximum file size per file. (kB) |
| `concurrent` | `1` | Number of files that will be uploaded simultaneously. |
| `type` |  | The expected response data type (xml, json, script, or html) |
| `msg-invalid-mime` | `Invalid File Type: %s` | Invalid MIME type message. |
| `msg-invalid-name` | `Invalid File Name: %s` | Invalid name message. |
| `cls-dragover` | `uk-dragover` | File name filter. |
| `abort` |  | The abort callback. |
| `before-all` |  | The beforeAll callback. |
| `before-send` |  | The beforeSend callback. |
| `complete` |  | The complete callback. |
| `complete-all` |  | The completeAll callback. |
| `error` |  | The error callback. |
| `load` |  | The load callback. |
| `load-end` |  | The loadEnd callback. |
| `load-start` |  | The loadStart callback. |
| `progress` |  | The progress callback. |
| `fail` |  | The fail callback. If the name or MIME type is invalid. |

## Markup

```html
<script>

    var bar = document.getElementById('js-progressbar');

    UIkit.upload('.js-upload', {

        url: '',
        multiple: true,

        beforeSend: function (environment) {
            console.log('beforeSend', arguments);

            // The environment object can still be modified here.
            // var {data, method, headers, xhr, responseType} = environment;

        },
        beforeAll: function () {
            console.log('beforeAll', arguments);
        },
        load: function () {
            console.log('load', arguments);
        },
        error: function () {
            console.log('error', arguments);
        },
        complete: function () {
            console.log('complete', arguments);
        },

        loadStart: function (e) {
            console.log('loadStart', arguments);

            bar.removeAttribute('hidden');
            bar.max = e.total;
            bar.value = e.loaded;
        },

        progress: function (e) {
            console.log('progress', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
        },

        loadEnd: function (e) {
            console.log('loadEnd', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
        },

        completeAll: function () {
            console.log('completeAll', arguments);

            setTimeout(function () {
                bar.setAttribute('hidden', 'hidden');
            }, 1000);

            alert('Upload Completed');
        }

    });

</script>
```
