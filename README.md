# markdown-js

Yet another Markdown parser, this time for JavaScript. There's a few
options that precede this project but they all treat Markdown to HTML
conversion as a single step process. You pass Markdown in and get HTML
out, end of story. We had some pretty particular views on how the
process should actually look, which include:

  * Produ


The basic interface is:
```js
md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
html_content = markdown.toHTML( md_content );
```

toHTML also accepts a dialect argument:

```js
md_content = "Vessel     | Captain\n-----------|-------------\nNCC-1701   | James T Kirk\nNCC-1701 A | James T Kirk\nNCC-1701 D | Picard";
html_content = markdown.toHTML( md_content, 'Maruku');
```

```js
var markdown = require( "markdown" ).markdown;
console.log( markdown.toHTML( "Hello *World*!" ) );
```

### ES6

```js
import {markdown} from 'markdown';
console.log( markdown.toHTML( "Hello *World*!" ) );
```

#### Older versions of node

We only officially support node >= 0.10 as the libraries we use for building
and testing don't work on older versions of node. That said since this module
is so simple and doesn't use any parts of the node API if you use the pre-built
version and find a bug let us know and we'll try and fix it.

### Browser

It also works in a browser; here is a complete example:

```html
<!DOCTYPE html>
<html>
  <body>
    <textarea id="text-input" oninput="this.editor.update()"
              rows="6" cols="60">Type **Markdown** here.</textarea>
    <div id="preview"> </div>
    <script src="lib/markdown.js"></script>
    <script>
      function Editor(input, preview) {
        this.update = function () {
          preview.innerHTML = markdown.toHTML(input.value);
        };
        input.editor = this;
        this.update();
      }
      var $ = function (id) { return document.getElementById(id); };
      new Editor($("text-input"), $("preview"));
    </script>
  </body>
</html>
```
