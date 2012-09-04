
# JavaScript Async Callback <sup>0.0.1</sup>

Load external scripts asynchronously with callbacks.

## Live Demo

View the <a href="http://niftylettuce.github.com/javascript-async-callback">live demo</a>.

## Quick Start

Add the script to the `<head>` of your document (or before all other scripts using `_async`):

```html
<script src="//raw.github.com/niftylettuce/javascript-async-callback/master/async.min.js"></script>
```

Then asynchronously load a script with a callback function:

```js
(function liveDemo() {
  var src = '//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js'
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
<th>FF</th>
<th>Chrome</th>
<th>Safari</th>
<th>Opera</th>
<th>iOS</th>
<th>Opera Mini</th>
<th>Android</th>
<th>Blackberry</th>
<th>Opera Mobile</th>
<th>Chrome Android</th>
<th>Firefox Android</th>
</thead>
<tbody>
<tr>
<td>5.5+ &#x2713;</td>
<td>2.0+ &#x2713;</td>
<td>4.0+ &#x2713;</td>
<td>3.1+ &#x2713;</td>
<td>9.0+ &#x2713;</td>
<td>3.2+ &#x2713;</td>
<td>5.0+ &#x2713;</td>
<td>2.1+ &#x2713;</td>
<td>7.0+ &#x2713;</td>
<td>10.0+ &#x2713;</td>
<td>18.0+ &#x2713;</td>
<td>15.0+ &#x2713;</td>
</tr>
</tbody>
</table>

## Contributors

* Nick Baugh <niftylettuce@gmail.com>

## License

MIT Licensed
