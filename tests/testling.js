
// # testing async.js across all the browsers

/*
curl -u xxx@xxx -sSNT testling.js 'testling.com?script=https://raw.github.com/niftylettuce/javascript-async-callback/master/async.min.js&browsers=iexplore/6.0,iexplore/7.0,iexplore/8.0,iexplore/9.0,chrome/4.0,chrome/5.0,chrome/6.0,chrome/7.0,chrome/8.0,chrome/9.0,chrome/10.0,chrome/11.0,chrome/12.0,chrome/13.0,chrome/14.0,chrome/15.0,chrome/16.0,chrome/17.0,chrome/18.0,chrome/19.0,chrome/20.0,firefox/3.0,firefox/3.5,firefox/3.6,firefox/4.0,firefox/5.0,firefox/6.0,firefox/7.0,firefox/8.0,firefox/9.0,firefox/10.0,firefox/11.0,firefox/12.0,firefox/13.0,opera/10.0,opera/10.5,opera/11.0,opera/11.5,opera/11.6,safari/5.0.5,safari/5.1,firefox/nightly,opera/next,chrome/canary&output=log > output.json'
*/

// if using 0.6.x:
// <https://github.com/substack/http-browserify/issues/11>
// `$ npm -g install npm@1.1.41`

// then:
// `$ npm install testling jsonify`

var test = require('testling')
  , json = require('jsonify')

test('asynchronously load external script', function(t) {
  try {
    (function liveDemo() {
      var src = 'http://cloudfront.loggly.com/js/loggly-0.2.1.js'
      function callback() {
        t.log(output)
        t.end()
      }
      _async.load(document, src, callback)
    }())
  } catch(e) {
    t.log(e)
    t.end()
  }
})
