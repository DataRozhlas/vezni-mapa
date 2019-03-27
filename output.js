/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unveil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unveil.js */ \"./js/unveil.js\");\n/* harmony import */ var _unveil_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unveil_js__WEBPACK_IMPORTED_MODULE_0__);\n\nmapboxgl.accessToken = 'pk.eyJ1IjoidG9jaXQiLCJhIjoiY2pzczY0bWh5MWJ3cDN6bzZieGl6ZzB1eSJ9.QuIC52CEfSwa5JI8yNVCtw';\nvar map = new mapboxgl.Map({\n  container: 'map',\n  style: 'mapbox://styles/tocit/cjtl5cjaq60lh1fpw28zddqpv',\n  center: [15.4730, 49.8175],\n  zoom: 6\n});\nmap.on('load', function () {\n  //legenda\n  var i;\n  var colors = ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'];\n  var layers = ['< 0,09 % obyvatel', '0,9–0,31 %', '0,31–0,71 %', '0,71–1,64 %', '1,64–3,08 %'];\n\n  for (i = 0; i < layers.length; i++) {\n    var layer = layers[i];\n    var color = colors[i];\n    var item = document.createElement('div');\n    var key = document.createElement('span');\n    key.className = 'legend-key';\n    key.style.backgroundColor = color;\n    var value = document.createElement('span');\n    value.innerHTML = layer;\n    item.appendChild(key);\n    item.appendChild(value);\n    legend.appendChild(item);\n  } //tooltip\n\n\n  map.on('mousemove', function (e) {\n    var obce = map.queryRenderedFeatures(e.point, {\n      layers: ['vezniobcespojene']\n    });\n\n    if (obce.length > 0) {\n      document.getElementById('pd').innerHTML = '<p><strong>' + obce[0].properties.n + '</strong>, okres ' + obce[0].properties.okres + ': <strong>' + obce[0].properties.pct + ' % obyvatel ve vězení</strong><br>' + obce[0].properties.pocobyv + ' obyvatel | ' + obce[0].properties.veznu + ' ve vězení, z toho ' + obce[0].properties.muzu + ' mužů a ' + obce[0].properties.zen + ' žen | ' + obce[0].properties.trest + ' ve výkonu trestu, ' + obce[0].properties.vazba + ' ve vazbě a ' + obce[0].properties.dete + ' v detenci</p>';\n    } else {\n      document.getElementById('pd').innerHTML = '<p>Vyberte obec na mapě!</p>';\n    }\n  }); //geocoder\n\n  map.addControl(new MapboxGeocoder({\n    accessToken: mapboxgl.accessToken,\n    countries: 'cz',\n    placeholder: 'Hledej'\n  }));\n  map.getCanvas().style.cursor = 'default';\n  map.fitBounds([[12.09, 51.06], [18.87, 48.55]]); // zoom myší teprve až po interakci s mapou\n\n  map.scrollZoom.disable();\n  map.on(\"click\", function (e) {\n    map.scrollZoom.enable();\n  });\n  map.addControl(new mapboxgl.NavigationControl(), \"top-left\"); // buttonky pro zoom a rotaci\n}); // grafy\n\n$(document).ready(function () {\n  for (var index = 0; index < 35; index++) {\n    $(\"#vazba\").append(\"<div><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' data-src='https://data.irozhlas.cz/vezni-mapa/svg/vazba_\" + (\"0\" + (index + 1)).slice(-2) + \".svg' width='100%' /></div>\");\n    $(\"#zeny\").append(\"<div><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' data-src='https://data.irozhlas.cz/vezni-mapa/svg/zeny_\" + (\"0\" + (index + 1)).slice(-2) + \".svg' width='100%' /></div>\");\n    $(\"#cizinci\").append(\"<div><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' data-src='https://data.irozhlas.cz/vezni-mapa/svg/cizinci_\" + (\"0\" + (index + 1)).slice(-2) + \".svg' width='100%' /></div>\");\n  }\n\n  $('.slider').slick({\n    mobileFirst: true\n  });\n});\n$(document).ready(function () {\n  $(\"img\").unveil();\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/unveil.js":
/*!**********************!*\
  !*** ./js/unveil.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * jQuery Unveil\n * A very lightweight jQuery plugin to lazy load images\n * http://luis-almeida.github.com/unveil\n *\n * Licensed under the MIT license.\n * Copyright 2013 Luís Almeida\n * https://github.com/luis-almeida\n */\n;\n\n(function ($) {\n  $.fn.unveil = function (threshold, callback) {\n    var $w = $(window),\n        th = threshold || 0,\n        retina = window.devicePixelRatio > 1,\n        attrib = retina ? \"data-src-retina\" : \"data-src\",\n        images = this,\n        loaded;\n    this.one(\"unveil\", function () {\n      var source = this.getAttribute(attrib);\n      source = source || this.getAttribute(\"data-src\");\n\n      if (source) {\n        this.setAttribute(\"src\", source);\n        if (typeof callback === \"function\") callback.call(this);\n      }\n    });\n\n    function unveil() {\n      var inview = images.filter(function () {\n        var $e = $(this);\n        if ($e.is(\":hidden\")) return;\n        var wt = $w.scrollTop(),\n            wb = wt + $w.height(),\n            et = $e.offset().top,\n            eb = et + $e.height();\n        return eb >= wt - th && et <= wb + th;\n      });\n      loaded = inview.trigger(\"unveil\");\n      images = images.not(loaded);\n    }\n\n    $w.on(\"scroll.unveil resize.unveil lookup.unveil\", unveil);\n    unveil();\n    return this;\n  };\n})(window.jQuery || window.Zepto);\n\n//# sourceURL=webpack:///./js/unveil.js?");

/***/ })

/******/ });