
//     JavaScript Async Callback
//     Copyright (c) 2012 Nick Baugh <niftylettuce@gmail.com>
//     MIT Licensed
//     v0.0.1

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/javascript-async-callback>
// * Inspired By: <http://stackoverflow.com/a/4249346>
// * Credit: Dean Edwards, Matthias Miller, John Resig

// # _async

var _async = {
    queue : []
  , ready : false
  , done  : false
  , timer : 0
}

_async.check = function(el, cb) {
  var that = this
  return function() {
    if (that.ready) cb()
    else that.queue.push(cb)
    // clean up for ie/opera
    el.onload = null
    el.onreadystatechange = null
  }
}

_async.load = function(d, src, cb) {
  var el    = d.createElement('script')
  el.async  = true
  el.src    = src
  el.onload = el.onreadystatechange = this.check(el, cb)
  document.getElementsByTagName('head')[0].appendChild(el)
}

_async.run = function() {
  this.ready = true
  for(var i=0; i<this.queue.length; i+=1) {
    this.queue[i]()
  }
  this.queue = []
}

_async.init = function() {
  // prevent from running multiple times
  if (_async.done) return;
  _async.done = true
  // kill timer
  if (_async.timer) window.clearInterval(_async.timer)
  // run queue
  _async.run()
}

_async.clock = function() {
  if (/loaded|complete/.test(document.readyState)) this.init()
}

(function(d, w) {
  // mozilla/opera v9
  if (d.addEventListener)
    d.addEventListener('DOMContentLoaded', _async.init, false)
  // for internet explorer
  // <http://msdn.microsoft.com/en-us/library/8ka90k2e(v=vs.94).aspx>
  // <http://msdn.microsoft.com/en-us/library/7142yyxw(v=vs.71).aspx>
  //
  /*@cc_on @*/
  /*@if (@_win64 || @_win32 || @_win16)
  document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
  var script = document.getElementById("__ie_onload");
  script.onreadystatechange = function() {
    if (this.readyState == "complete") {
      init(); // call the onload handler
    }
  };
  @end @*/
  // for safari
  if (/Webkit/i.test(navigator.userAgent))
    _async.timer = w.setInterval(_async.clock, 10)
  // for other browsers
  w.onload = _async.init
}(document, window))
