
# JavaScript Async Callback <sup>0.0.1</sup>

Load external scripts asynchronously with callbacks.

## Live Demo

View the <a href="https://niftylettuce.github.com/javascript-async-callback">live demo</a>.

## Quick Start

Add the script to the `<head>` of your document (or before all other scripts using `_async`):

```html
<script src="//raw.github.com/niftylettuce/javascript-async-callback/master/async.min.js"></script>
```

Then asynchronously load a script with a callback function:

```js
(function liveDemo() {
  var src = 'http://cloudfront.loggly.com/js/loggly-0.2.1.js'
  function callback() {
    alert('It works!')
  }
  _async.load(document, src, callback)
}())
```

... and you're done!

## Compatibility

<table>
<thead>
<th>IE</th>
<th>Firefox</th>
<th>Chrome</th>
<th>Safari</th>
<th>Opera</th>
<th>iOS Safari</th>
<th>Opera Mini</th>
<th>Android Browser</th>
<th>Blackberry Browser</th>
<th>Opera Mobile</th>
<th>Chrome for Android</th>
<th>Firefox for Android</th>
</thead>
<tbody>
<tr>
<td>5.5+ (not tested)</td>
<td>2.0+ (not tested)</td>
<td>4.0+ (not tested)</td>
<td>3.1+ (not tested)</td>
<td>9.0+ (not tested)</td>
<td>3.2+ (not tested)</td>
<td>5.0+ (not tested)</td>
<td>2.1+ (not tested)</td>
<td>7.0+ (not tested)</td>
<td>10.0+ (not tested)</td>
<td>18.0+ (not tested)</td>
<td>15.0+ (not tested)</td>
</tr>
</tbody>
</table>

## Contributors

* Nick Baugh <niftylettuce@gmail.com>

## License

MIT Licensed
