(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fog = undefined;

var _fog = require('./fog/fog');

exports.Fog = _fog.Fog;

},{"./fog/fog":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fog = exports.Fog = function () {
  function Fog(name) {
    _classCallCheck(this, Fog);

    this.name = name;
  }

  _createClass(Fog, [{
    key: 'say',
    value: function say(msg) {
      console.log(this.name + ' says: ' + msg);
    }
  }]);

  return Fog;
}();

},{}],3:[function(require,module,exports){
'use strict';

var _components = require('./components/components');

var karl = new _components.Fog('Karl'); // import $ from 'jquery'
// import slick from 'slick-carousel'

karl.say('I love SF!!');

},{"./components/components":1}]},{},[3])


//# sourceMappingURL=main.js.map
