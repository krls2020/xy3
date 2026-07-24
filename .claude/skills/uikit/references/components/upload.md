# Upload
> Upload files through a file input form element or a placeholder area.  ·  Category: **Forms**  ·  JS component

<sub>Source: [getuikit.com/docs/upload](https://getuikit.com/docs/upload) · demo: `tests/upload.html`</sub>

## Usage

This JavaScript component utilizes the latest XMLHttpRequest Level 2 specification and provides the ability to upload files via Ajax including tracking of the upload progress. The component provides two ways of uploading files: `select` and `drop`. While the `select` request can only be applied to `` elements, you can basically use any element with `drop`, which enables you to simply drag and drop files from your desktop into the specified element to upload them. Note that this component does not handle your file uploads on the server.

## JavaScript

Activate with the `uk-upload` attribute (no JS needed). Programmatic: `UIkit.upload(element, options)`.

**Component options** (set in the attribute, e.g. `uk-upload="option: value"`):

| Option             | Value    | Default                 | Description                                                                                   |
|--------------------|----------|-------------------------|-----------------------------------------------------------------------------------------------|
| `url`              | String   |                         | The request url.                                                                              |
| `multiple`         | Boolean  | `false`                 | Allow multiple files to be uploaded.                                                          |
| `name`             | String   | `files[]`               | The name parameter.                                                                           |
| `method`           | String   | `POST`                  | The request type.                                                                             |
| `params`           | Object   | `{}`                    | Additional parameters.                                                                        |
| `allow`            | String   | `false`                 | File name filter (eg. *.png). Separate multiple values with a pipe (*.png\|*.gif).            |
| `mime`             | String   | `false`                 | File MIME type filter (eg. image/*). Separate multiple values with a pipe (image/*\|video/*). |
| `maxSize`          | Number   | `0`                     | The maximum file size per file. (kB)                                                          |
| `concurrent`       | Number   | `1`                     | Number of files that will be uploaded simultaneously.                                         |
| `type`             | String   |                         | The expected response data type (xml, json, script, or html)                                  |
| `msg-invalid-mime` | String   | `Invalid File Type: %s` | Invalid MIME type message.                                                                    |
| `msg-invalid-name` | String   | `Invalid File Name: %s` | Invalid name message.                                                                         |
| `cls-dragover`     | String   | `uk-dragover`           | File name filter.                                                                             |
| `abort`            | Function |                         | The abort callback.                                                                           |
| `before-all`       | Function |                         | The beforeAll callback.                                                                       |
| `before-send`      | Function |                         | The beforeSend callback.                                                                      |
| `complete`         | Function |                         | The complete callback.                                                                        |
| `complete-all`     | Function |                         | The completeAll callback.                                                                     |
| `error`            | Function |                         | The error callback.                                                                           |
| `load`             | Function |                         | The load callback.                                                                            |
| `load-end`         | Function |                         | The loadEnd callback.                                                                         |
| `load-start`       | Function |                         | The loadStart callback.                                                                       |
| `progress`         | Function |                         | The progress callback.                                                                        |
| `fail`             | Function |                         | The fail callback. If the name or MIME type is invalid.                                       |

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

