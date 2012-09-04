// # testing async.js across all the browsers
// if using 0.6.x:
// <https://github.com/substack/http-browserify/issues/11>
// `$ npm -g install npm@1.1.41`
// then:
// `$ npm install testling`
var test = require('testling')
test('asynchronously load external script', function(t) {
  t.createWindow('http://niftylettuce.github.com/javascript-async-callback', { t: t }, function(window) {
    t.end()
  });
});
