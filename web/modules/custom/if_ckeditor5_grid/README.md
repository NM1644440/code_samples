## IF CKEditor 5 grid plugins

Based on the [CKEditor 5 block plugin tutorial](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-a-block-widget.html)
but with additional documentation and minor changes for better integration
with Drupal.

Plugin source should be added to
`js/ckeditor5_plugins/{pluginNameDirectory}/src` and the build tools expect this
directory to include an `index.js` file that exports one or more CKEditor 5
plugins. Note that requiring `index.js` to be inside
`{pluginNameDirectory}/src` is not a fixed requirement of CKEditor 5 or Drupal,
but a requirement of this starter template that can be changed in
`webpack.config.js` as needed.

In the module directory, run `lando npm install` to set up the necessary assets.
The initial run of `install` may take a few minutes, but subsequent builds will
be faster.

After installing dependencies, plugins can be built with `npm run build` or`npm
run watch`. They will be built to `js/build/{pluginNameDirectory}.js`.
