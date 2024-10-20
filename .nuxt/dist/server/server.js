module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		100: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"components/animation-mouse-move","1":"components/common-section-title","2":"components/common-bread-crumb-two","3":"components/common-color-mode","4":"components/cta-c-t-a-one","5":"components/common-bread-crumb-one","6":"components/header-navigation","7":"components/header-search-pop-up","8":"components/header-off-canvas-mobile-menu-one","9":"components/sidebar-blog-sidebar-one","10":"components/sidebar-page-sidebar-one","11":"components/common-pagination-one","12":"components/cta-c-t-a-one-alter","13":"components/event-section-one","14":"components/footer-scroll-to-top","15":"components/header-category","16":"components/header-mobile-menu","17":"components/home-university-video","18":"components/instructor-one","19":"components/sidebar-course-sidebar-one","20":"components/about-us-one-instructor","21":"components/about-us-one-why-choose","22":"components/about-us-three-contact-info","23":"components/about-us-three-instructor","24":"components/about-us-three-testimonial","25":"components/about-us-three-why-choose","26":"components/about-us-two-features","27":"components/about-us-two-fun-fact","28":"components/about-us-two-instructor","29":"components/about-us-two-logo","30":"components/about-us-two-testimonial","31":"components/about-us-two-video","32":"components/common-bread-crumb-three","33":"components/course-type-two","34":"components/header-off-canvas-mobile-menu-two","35":"components/header-two","36":"components/home-distant-learning-about","37":"components/home-distant-learning-banner","38":"components/home-distant-learning-blog","39":"components/home-distant-learning-categories","40":"components/home-distant-learning-course","41":"components/home-distant-learning-f-a-q","42":"components/home-distant-learning-logo","43":"components/home-distant-learning-video","44":"components/home-kindergarten-about","45":"components/home-kindergarten-activities","46":"components/home-kindergarten-banner","47":"components/home-kindergarten-blog","48":"components/home-kindergarten-course","49":"components/home-kindergarten-event","50":"components/home-kindergarten-f-a-q","51":"components/home-kindergarten-subscription-form","52":"components/home-kitchen-coach-about","53":"components/home-kitchen-coach-banner","54":"components/home-kitchen-coach-blog","55":"components/home-kitchen-coach-c-t-a","56":"components/home-kitchen-coach-course","57":"components/home-kitchen-coach-f-a-q","58":"components/home-kitchen-coach-features","59":"components/home-kitchen-coach-instagram","60":"components/home-kitchen-coach-instructor","61":"components/home-kitchen-coach-logo","62":"components/home-kitchen-coach-testimonial","63":"components/home-landing-demo-banner","64":"components/home-landing-demo-course-layout","65":"components/home-landing-demo-features","66":"components/home-landing-demo-inner-pages","67":"components/home-landing-demo-learn-with","68":"components/home-landing-demo-shop-layout","69":"components/home-main-about","70":"components/home-main-banner","71":"components/home-main-blog","72":"components/home-main-categories","73":"components/home-main-contact-info","74":"components/home-main-course","75":"components/home-main-features","76":"components/home-main-instructor","77":"components/home-online-academy-banner","78":"components/home-online-academy-blog","79":"components/home-online-academy-categories","80":"components/home-online-academy-contact-info","81":"components/home-online-academy-course","82":"components/home-online-academy-f-a-q","83":"components/home-online-academy-instructor","84":"components/home-university-about","85":"components/home-university-banner","86":"components/home-university-campus","87":"components/home-university-contact-info","88":"components/home-university-course","89":"components/home-university-features","90":"components/home-yoga-instructor","91":"components/home-yoga-instructor-about","92":"components/home-yoga-instructor-banner","93":"components/home-yoga-instructor-course","94":"components/home-yoga-instructor-instagram","95":"components/home-yoga-instructor-testimonial","96":"components/home-yoga-instructor-video","97":"components/home-yoga-instructor-why-choose","98":"components/logo-two","99":"components/sidebar-event-sidebar","101":"components/about","102":"components/about-us-one-fun-fact","103":"components/about-us-three-fun-fact","104":"components/accordion-one","105":"components/blog-post-list","106":"components/blog-post-one","107":"components/blog-post-standard","108":"components/blog-post-two","109":"components/course-type-eight","110":"components/course-type-five","111":"components/course-type-four","112":"components/course-type-one","113":"components/course-type-seven","114":"components/course-type-six","115":"components/course-type-three","116":"components/event-list","117":"components/event-one","118":"components/event-two","119":"components/footer-google-map-with-a-p-i","120":"components/footer-kindergarten","121":"components/footer-kitchen","122":"components/footer-landing","123":"components/footer-three","124":"components/footer-two","125":"components/footer-yoga","126":"components/fun-fact","127":"components/header-four","128":"components/header-landing","129":"components/header-three","130":"components/header-top-two","131":"components/home-demo","132":"components/home-distant-learning-fun-fact","133":"components/home-kitchen-coach-fun-fact","134":"components/home-landing-demo-fun-fact","135":"components/home-main-fun-fact","136":"components/home-online-academy-fun-fact","137":"components/home-university-fun-fact","138":"components/home-yoga-instructor-fun-fact","139":"components/instagram-post","140":"components/instructor-five","141":"components/instructor-four","142":"components/instructor-three","143":"components/instructor-two","144":"components/logo-one","145":"components/product-one","146":"components/testimonial-one","147":"components/testimonial-three","148":"components/testimonial-two","149":"pages/about-us-one","150":"pages/about-us-three","151":"pages/about-us-two","152":"pages/blog/blog-details","153":"pages/blog/blog-list","154":"pages/blog/blog-masonry","155":"pages/blog/blog-standard","156":"pages/coming-soon","157":"pages/contact-me","158":"pages/contact-us","159":"pages/course/course-details","160":"pages/course/course-details-2","161":"pages/course/course-details-3","162":"pages/course/course-five","163":"pages/course/course-four","164":"pages/course/course-one","165":"pages/course/course-three","166":"pages/course/course-two","167":"pages/distant-learning","168":"pages/event/event-details","169":"pages/event/event-grid","170":"pages/event/event-list","171":"pages/faq","172":"pages/gallery-grid","173":"pages/gallery-masonry","174":"pages/index","175":"pages/instructor/instructor-one","176":"pages/instructor/instructor-profile","177":"pages/instructor/instructor-three","178":"pages/instructor/instructor-two","179":"pages/kindergarten","180":"pages/kitchen-coach","181":"pages/landing-demo","182":"pages/my-account","183":"pages/online-academy","184":"pages/pricing-table","185":"pages/privacy-policy","186":"pages/purchase-guide","187":"pages/shop/cart","188":"pages/shop/checkout","189":"pages/shop/index","190":"pages/shop/product-details","191":"pages/shop/wishlist","192":"pages/terms-condition","193":"pages/university","194":"pages/yoga-instructor"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var mappedProps = options.mappedProps,
      name = options.name,
      ctr = options.ctr,
      ctrArgs = options.ctrArgs,
      events = options.events,
      beforeCreate = options.beforeCreate,
      afterCreate = options.afterCreate,
      props = options.props,
      rest = _objectWithoutProperties(options, ['mappedProps', 'name', 'ctr', 'ctrArgs', 'events', 'beforeCreate', 'afterCreate', 'props']);

  var promiseName = '$' + name + 'Promise';
  var instanceName = '$' + name + 'Object';

  assert(!(rest.props instanceof Array), '`props` should be an object, not Array');

  return _extends({}, typeof GENERATE_DOC !== 'undefined' ? { $vgmOptions: options } : {}, {
    mixins: [_mapElementMixin2.default],
    props: _extends({}, props, mappedPropsToVueProps(mappedProps)),
    render: function render() {
      return '';
    },
    provide: function provide() {
      var _this = this;

      var promise = this.$mapPromise.then(function (map) {
        // Infowindow needs this to be immediately available
        _this.$map = map;

        // Initialize the maps with the given options
        var options = _extends({}, _this.options, {
          map: map
        }, (0, _bindProps.getPropsValues)(_this, mappedProps));
        delete options.options; // delete the extra options

        if (beforeCreate) {
          var result = beforeCreate.bind(_this)(options);

          if (result instanceof Promise) {
            return result.then(function () {
              return { options: options };
            });
          }
        }
        return { options: options };
      }).then(function (_ref) {
        var _Function$prototype$b;

        var options = _ref.options;

        var ConstructorObject = ctr();
        // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
        _this[instanceName] = ctrArgs ? new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [ConstructorObject, null].concat(_toConsumableArray(ctrArgs(options, (0, _bindProps.getPropsValues)(_this, props || {}))))))() : new ConstructorObject(options);

        (0, _bindProps.bindProps)(_this, _this[instanceName], mappedProps);
        (0, _bindEvents2.default)(_this, _this[instanceName], events);

        if (afterCreate) {
          afterCreate.bind(_this)(_this[instanceName]);
        }
        return _this[instanceName];
      });
      this[promiseName] = promise;
      return _defineProperty({}, promiseName, promise);
    },
    destroyed: function destroyed() {
      // Note: not all Google Maps components support maps
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null);
      }
    }
  }, rest);
};

exports.mappedPropsToVueProps = mappedPropsToVueProps;

var _bindEvents = __webpack_require__(11);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(6);

var _mapElementMixin = __webpack_require__(18);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *
 * @param {Object} options
 * @param {Object} options.mappedProps - Definitions of props
 * @param {Object} options.mappedProps.PROP.type - Value type
 * @param {Boolean} options.mappedProps.PROP.twoWay
 *  - Whether the prop has a corresponding PROP_changed
 *   event
 * @param {Boolean} options.mappedProps.PROP.noBind
 *  - If true, do not apply the default bindProps / bindEvents.
 * However it will still be added to the list of component props
 * @param {Object} options.props - Regular Vue-style props.
 *  Note: must be in the Object form because it will be
 *  merged with the `mappedProps`
 *
 * @param {Object} options.events - Google Maps API events
 *  that are not bound to a corresponding prop
 * @param {String} options.name - e.g. `polyline`
 * @param {=> String} options.ctr - constructor, e.g.
 *  `google.maps.Polyline`. However, since this is not
 *  generally available during library load, this becomes
 *  a function instead, e.g. () => google.maps.Polyline
 *  which will be called only after the API has been loaded
 * @param {(MappedProps, OtherVueProps) => Array} options.ctrArgs -
 *   If the constructor in `ctr` needs to be called with
 *   arguments other than a single `options` object, e.g. for
 *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
 *   then pass in a function that returns the argument list as an array
 *
 * Otherwise, the constructor will be called with an `options` object,
 *   with property and values merged from:
 *
 *   1. the `options` property, if any
 *   2. a `map` property with the Google Maps
 *   3. all the properties passed to the component in `mappedProps`
 * @param {Object => Any} options.beforeCreate -
 *  Hook to modify the options passed to the initializer
 * @param {(options.ctr, Object) => Any} options.afterCreate -
 *  Hook called when
 *
 */


function assert(v, message) {
  if (!v) throw new Error(message);
}

/**
 * Strips out the extraneous properties we have in our
 * props definitions
 * @param {Object} props
 */
function mappedPropsToVueProps(mappedProps) {
  return Object.entries(mappedProps).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        prop = _ref4[1];

    var value = {};

    if ('type' in prop) value.type = prop.type;
    if ('default' in prop) value.default = prop.default;
    if ('required' in prop) value.required = prop.required;

    return [key, value];
  }).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    acc[key] = val;
    return acc;
  }, {});
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropsValues = getPropsValues;
exports.bindProps = bindProps;

var _WatchPrimitiveProperties = __webpack_require__(12);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPropsValues(vueInst, props) {
  return Object.keys(props).reduce(function (acc, prop) {
    if (vueInst[prop] !== undefined) {
      acc[prop] = vueInst[prop];
    }
    return acc;
  }, {});
}

/**
  * Binds the properties defined in props to the google maps instance.
  * If the prop is an Object type, and we wish to track the properties
  * of the object (e.g. the lat and lng of a LatLng), then we do a deep
  * watch. For deep watch, we also prevent the _changed event from being
  * emitted if the data source was external.
  */
function bindProps(vueInst, googleMapsInst, props) {
  var _loop = function (attribute) {
    var _props$attribute = props[attribute],
        twoWay = _props$attribute.twoWay,
        type = _props$attribute.type,
        trackProperties = _props$attribute.trackProperties,
        noBind = _props$attribute.noBind;


    if (noBind) return 'continue';

    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
    var getMethodName = 'get' + capitalizeFirstLetter(attribute);
    var eventName = attribute.toLowerCase() + '_changed';
    var initialValue = vueInst[attribute];

    if (typeof googleMapsInst[setMethodName] === 'undefined') {
      throw new Error(setMethodName + ' is not a method of (the Maps object corresponding to) ' + vueInst.$options._componentTag);
    }

    // We need to avoid an endless
    // propChanged -> event emitted -> propChanged -> event emitted loop
    // although this may really be the user's responsibility
    if (type !== Object || !trackProperties) {
      // Track the object deeply
      vueInst.$watch(attribute, function () {
        var attributeValue = vueInst[attribute];

        googleMapsInst[setMethodName](attributeValue);
      }, {
        immediate: typeof initialValue !== 'undefined',
        deep: type === Object
      });
    } else {
      (0, _WatchPrimitiveProperties2.default)(vueInst, trackProperties.map(function (prop) {
        return attribute + '.' + prop;
      }), function () {
        googleMapsInst[setMethodName](vueInst[attribute]);
      }, vueInst[attribute] !== undefined);
    }

    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName])) {
      googleMapsInst.addListener(eventName, function () {
        // eslint-disable-line no-unused-vars
        vueInst.$emit(eventName, googleMapsInst[getMethodName]());
      });
    }
  };

  for (var attribute in props) {
    var _ret = _loop(attribute);

    if (_ret === 'continue') continue;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindProps = __webpack_require__(6);

var _simulateArrowDown = __webpack_require__(22);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var props = {
  bounds: {
    type: Object
  },
  defaultPlace: {
    type: String,
    default: ''
  },
  componentRestrictions: {
    type: Object,
    default: null
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  placeholder: {
    required: false,
    type: String
  },
  className: {
    required: false,
    type: String
  },
  label: {
    required: false,
    type: String,
    default: null
  },
  selectFirstOnEnter: {
    require: false,
    type: Boolean,
    default: false
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    // Allow default place to be set
    input.value = this.defaultPlace;
    this.$watch('defaultPlace', function () {
      input.value = _this.defaultPlace;
    });

    this.$gmapApiPromiseLazy().then(function () {
      var options = (0, _bindProps.getPropsValues)(_this, props);
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      _this.autoCompleter = new google.maps.places.Autocomplete(_this.$refs.input, options);

      var placeholder = props.placeholder,
          place = props.place,
          defaultPlace = props.defaultPlace,
          className = props.className,
          label = props.label,
          selectFirstOnEnter = props.selectFirstOnEnter,
          rest = _objectWithoutProperties(props, ['placeholder', 'place', 'defaultPlace', 'className', 'label', 'selectFirstOnEnter']); // eslint-disable-line


      (0, _bindProps.bindProps)(_this, _this.autoCompleter, rest);

      _this.autoCompleter.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.autoCompleter.getPlace());
      });
    });
  },
  created: function created() {
    console.warn('The PlaceInput class is deprecated! Please consider using the Autocomplete input instead'); // eslint-disable-line no-console
  },

  props: props
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vueInst, googleMapsInst, events) {
  var _loop = function (eventName) {
    if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName]) {
      googleMapsInst.addListener(eventName, function (ev) {
        vueInst.$emit(eventName, ev);
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WatchPrimitiveProperties;
/**
 * Watch the individual properties of a PoD object, instead of the object
 * per se. This is different from a deep watch where both the reference
 * and the individual values are watched.
 *
 * In effect, it throttles the multiple $watch to execute at most once per tick.
 */
function WatchPrimitiveProperties(vueInst, propertiesToTrack, handler) {
  var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var isHandled = false;

  function requestHandle() {
    if (!isHandled) {
      isHandled = true;
      vueInst.$nextTick(function () {
        isHandled = false;
        handler();
      });
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propertiesToTrack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      vueInst.$watch(prop, requestHandle, { immediate: immediate });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
Mixin for objects that are mounted by Google Maps
Javascript API.

These are objects that are sensitive to element resize
operations so it exposes a property which accepts a bus

*/

exports.default = {
  props: ['resizeBus'],

  data: function data() {
    return {
      _actualResizeBus: null
    };
  },
  created: function created() {
    if (typeof this.resizeBus === 'undefined') {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
    } else {
      this.$data._actualResizeBus = this.resizeBus;
    }
  },


  methods: {
    _resizeCallback: function _resizeCallback() {
      this.resize();
    },
    _delayedResizeCallback: function _delayedResizeCallback() {
      var _this = this;

      this.$nextTick(function () {
        return _this._resizeCallback();
      });
    }
  },

  watch: {
    resizeBus: function resizeBus(newVal) {
      // eslint-disable-line no-unused-vars
      this.$data._actualResizeBus = newVal;
    },
    '$data._actualResizeBus': function $data_actualResizeBus(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off('resize', this._delayedResizeCallback);
      }
      if (newVal) {
        newVal.$on('resize', this._delayedResizeCallback);
      }
    }
  },

  destroyed: function destroyed() {
    if (this.$data._actualResizeBus) {
      this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('label', [_vm._ssrNode("<span>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</span> <input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrClass(null, _vm.className) + ">")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("709683a2", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class MapElementMixin
 *
 * Extends components to include the following fields:
 *
 * @property $map        The Google map (valid only after the promise returns)
 *
 *
 * */
exports.default = {
  inject: {
    '$mapPromise': { default: 'abcdef' }
  },

  provide: function provide() {
    var _this = this;

    // Note: although this mixin is not "providing" anything,
    // components' expect the `$map` property to be present on the component.
    // In order for that to happen, this mixin must intercept the $mapPromise
    // .then(() =>) first before its component does so.
    //
    // Since a provide() on a mixin is executed before a provide() on the
    // component, putting this code in provide() ensures that the $map is
    // already set by the time the
    // component's provide() is called.
    this.$mapPromise.then(function (map) {
      _this.$map = map;
    });

    return {};
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TwoWayBindingWrapper;
/**
 * When you have two-way bindings, but the actual bound value will not equal
 * the value you initially passed in, then to avoid an infinite loop you
 * need to increment a counter every time you pass in a value, decrement the
 * same counter every time the bound value changed, but only bubble up
 * the event when the counter is zero.
 *
Example:

Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
that, when given the name of an object (e.g. 'dog'), draws a dog.
But whenever the drawing on it changes, it also sends back its interpretation
of the image by way of the @newObjectRecognized event.

<input
  type="text"
  placeholder="an object, e.g. Dog, Cat, Frog"
  v-model="identifiedObject" />
<DrawingRecognitionCanvas
  :object="identifiedObject"
  @newObjectRecognized="identifiedObject = $event"
  />

new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
  this.$watch('identifiedObject', () => {
    // new object passed in
    increment()
  })
  this.$deepLearningBackend.on('drawingChanged', () => {
    recognizeObject(this.$deepLearningBackend)
      .then((object) => {
        decrement()
        if (shouldUpdate()) {
          this.$emit('newObjectRecognized', object.name)
        }
      })
  })
})
 */
function TwoWayBindingWrapper(fn) {
  var counter = 0;

  fn(function () {
    counter += 1;
  }, function () {
    counter = Math.max(0, counter - 1);
  }, function () {
    return counter === 0;
  });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e0e698d6", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("56933a4e", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by amirnissim and can be seen here
// http://stackoverflow.com/a/11703018/2694653
// This has been ported to Vanilla.js by GuillaumeLeclerc
exports.default = function (input) {
  var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;

  function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.
    if (type === 'keydown') {
      var origListener = listener;
      listener = function (event) {
        var suggestionSelected = document.getElementsByClassName('pac-item-selected').length > 0;
        if (event.which === 13 && !suggestionSelected) {
          var simulatedEvent = document.createEvent('Event');
          simulatedEvent.keyCode = 40;
          simulatedEvent.which = 40;
          origListener.apply(input, [simulatedEvent]);
        }
        origListener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  }

  input.addEventListener = addEventListenerWrapper;
  input.attachEvent = addEventListenerWrapper;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vue-cool-lightbox");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreetViewPanorama = exports.MountableMixin = exports.Autocomplete = exports.MapElementFactory = exports.MapElementMixin = exports.PlaceInput = exports.Map = exports.InfoWindow = exports.Rectangle = exports.Cluster = exports.Circle = exports.Polygon = exports.Polyline = exports.Marker = exports.loadGmapApi = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Vue component imports


exports.install = install;
exports.gmapApi = gmapApi;

var _lazyValue = __webpack_require__(54);

var _lazyValue2 = _interopRequireDefault(_lazyValue);

var _manager = __webpack_require__(55);

var _marker = __webpack_require__(56);

var _marker2 = _interopRequireDefault(_marker);

var _polyline = __webpack_require__(57);

var _polyline2 = _interopRequireDefault(_polyline);

var _polygon = __webpack_require__(58);

var _polygon2 = _interopRequireDefault(_polygon);

var _circle = __webpack_require__(59);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = __webpack_require__(60);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _infoWindow = __webpack_require__(71);

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _map = __webpack_require__(72);

var _map2 = _interopRequireDefault(_map);

var _streetViewPanorama = __webpack_require__(73);

var _streetViewPanorama2 = _interopRequireDefault(_streetViewPanorama);

var _placeInput = __webpack_require__(68);

var _placeInput2 = _interopRequireDefault(_placeInput);

var _autocomplete = __webpack_require__(74);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _mapElementMixin = __webpack_require__(18);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

var _mountableMixin = __webpack_require__(13);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HACK: Cluster should be loaded conditionally
// However in the web version, it's not possible to write
// `import 'vue2-google-maps/src/components/cluster'`, so we need to
// import it anyway (but we don't have to register it)
// Therefore we use babel-plugin-transform-inline-environment-variables to
// set BUILD_DEV to truthy / falsy
var Cluster = undefined;

var GmapApi = null;

// export everything
exports.loadGmapApi = _manager.loadGmapApi;
exports.Marker = _marker2.default;
exports.Polyline = _polyline2.default;
exports.Polygon = _polygon2.default;
exports.Circle = _circle2.default;
exports.Cluster = Cluster;
exports.Rectangle = _rectangle2.default;
exports.InfoWindow = _infoWindow2.default;
exports.Map = _map2.default;
exports.PlaceInput = _placeInput2.default;
exports.MapElementMixin = _mapElementMixin2.default;
exports.MapElementFactory = _mapElementFactory2.default;
exports.Autocomplete = _autocomplete2.default;
exports.MountableMixin = _mountableMixin2.default;
exports.StreetViewPanorama = _streetViewPanorama2.default;
function install(Vue, options) {
  // Set defaults
  options = _extends({
    installComponents: true,
    autobindAllEvents: false
  }, options);

  // Update the global `GmapApi`. This will allow
  // components to use the `google` global reactively
  // via:
  //   import {gmapApi} from 'vue2-google-maps'
  //   export default {  computed: { google: gmapApi }  }
  GmapApi = new Vue({ data: { gmapApi: null } });

  var defaultResizeBus = new Vue();

  // Use a lazy to only load the API when
  // a VGM component is loaded
  var gmapApiPromiseLazy = makeGmapApiPromiseLazy(options);

  Vue.mixin({
    created: function created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
      this.$gmapOptions = options;
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    }
  });
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;

  if (options.installComponents) {
    Vue.component('GmapMap', _map2.default);
    Vue.component('GmapMarker', _marker2.default);
    Vue.component('GmapInfoWindow', _infoWindow2.default);
    Vue.component('GmapPolyline', _polyline2.default);
    Vue.component('GmapPolygon', _polygon2.default);
    Vue.component('GmapCircle', _circle2.default);
    Vue.component('GmapRectangle', _rectangle2.default);
    Vue.component('GmapAutocomplete', _autocomplete2.default);
    Vue.component('GmapPlaceInput', _placeInput2.default);
    Vue.component('GmapStreetViewPanorama', _streetViewPanorama2.default);
  }
}

function makeGmapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GmapApi.gmapApi = {};
    return window.google;
  }

  if (options.load) {
    // If library should load the API
    return (0, _lazyValue2.default)(function () {
      // Load the
      // This will only be evaluated once
      if (typeof window === 'undefined') {
        // server side -- never resolve this promise
        return new Promise(function () {}).then(onApiLoaded);
      } else {
        return new Promise(function (resolve, reject) {
          try {
            window['vueGoogleMapsInit'] = resolve;
            (0, _manager.loadGmapApi)(options.load, options.loadCn);
          } catch (err) {
            reject(err);
          }
        }).then(onApiLoaded);
      }
    });
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    var promise = new Promise(function (resolve) {
      if (typeof window === 'undefined') {
        // Do nothing if run from server-side
        return;
      }
      window['vueGoogleMapsInit'] = resolve;
    }).then(onApiLoaded);

    return (0, _lazyValue2.default)(function () {
      return promise;
    });
  }
}

function gmapApi() {
  return GmapApi.gmapApi && window.google;
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vue-pagination-2");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-inline-svg");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-observe-visibility");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-masonry-css");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderOne.vue?vue&type=template&id=49de891c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "edu-header header-style-1 header-fullwidth no-topbar"
  }, [_vm.showHeaderTop ? _c('HeaderTopOne') : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("header-mainmenu", {
    'edu-sticky': _vm.isSticky
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"header-navbar\">", "</div>", [_vm._ssrNode("<div class=\"header-brand\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm.$colorMode.value === 'light' ? _c('img', {
    staticClass: "logo-light",
    attrs: {
      "src": "/images/logo/logo-dark.png",
      "alt": "Dark Logo"
    }
  }) : _vm._e(), _vm._v(" "), _vm.$colorMode.value === 'dark' ? _c('img', {
    staticClass: "logo-dark",
    attrs: {
      "src": "/images/logo/logo-white.png",
      "alt": "Light Logo"
    }
  }) : _vm._e()])], 1), _vm._ssrNode(" "), _c('Category')], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-mainnav\">", "</div>", [_vm._ssrNode("<nav class=\"mainmenu-nav\">", "</nav>", [_c('Navigation')], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-right\">", "</div>", [_vm._ssrNode("<ul class=\"header-action\">", "</ul>", [_vm._ssrNode("<li class=\"search-bar\"><div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"> <button type=\"button\" class=\"search-btn\"><i class=\"icon-2\"></i></button></div></li> <li class=\"icon search-icon\"><button class=\"search-trigger\"><i class=\"icon-2\"></i></button></li> "), _vm._ssrNode("<li class=\"icon light-dark-icon\">", "</li>", [_c('ColorMode')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"header-btn\">", "</li>", [_c('n-link', {
    staticClass: "edu-btn btn-medium",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Try for free "), _c('i', {
    staticClass: "icon-4"
  })])], 1), _vm._ssrNode(" <li class=\"mobile-menu-bar d-block d-xl-none\"><button class=\"hamberger-button\"><i class=\"icon-54\"></i></button></li>")], 2)])], 2)])]), _vm._ssrNode(" "), _c('SearchPopUp'), _vm._ssrNode(" "), _c('OffCanvasMobileMenuOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/HeaderOne.vue?vue&type=template&id=49de891c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderOne.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderOnevue_type_script_lang_js = ({
  components: {
    HeaderTopOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 75)),
    Category: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 338)),
    Navigation: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 339)),
    SearchPopUp: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 258)),
    ColorMode: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 259)),
    OffCanvasMobileMenuOne: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 260))
  },
  data() {
    return {
      isSticky: false
    };
  },
  props: ['showHeaderTop'],
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
  methods: {
    // Off-canvas Mobile Menu Open
    mobileMenuOpen(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');
      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    // search popup
    searchPopUpOpen(addRemoveClass, className) {
      const el = document.querySelector('#edu-search-popup');
      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/header/HeaderOne.vue?vue&type=script&lang=js
 /* harmony default export */ var header_HeaderOnevue_type_script_lang_js = (HeaderOnevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/HeaderOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_HeaderOnevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05568de8"
  
)

/* harmony default export */ var HeaderOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderTopOne: __webpack_require__(75).default})


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/FooterOne.vue?vue&type=template&id=6de45fbb
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "edu-footer footer-dark bg-image footer-style-2"
  }, [_vm._ssrNode("<div class=\"footer-top footer-top-2\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row g-5\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"edu-footer-widget\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "logo-dark",
    attrs: {
      "src": "/images/logo/logo-white.png",
      "alt": "Light Logo"
    }
  })])], 1), _vm._ssrNode(" <p class=\"description\">\n              Dedicated to providing top-tier IT support and solutions to\n              businesses across various sectors. Our mission is to ensure your\n              technology drives your business forward.\n            </p> <div class=\"widget-information\"><ul class=\"information-list\"><li><span>Add:</span>Door 2, Zamoras Building, Glodo St. San\n                  Francisco, Panabo City, Davao del Norte\n                </li> <li><span>Call:</span><a href=\"tel:+639177621021\">+639177621021</a></li> <li><span>Email:</span><a href=\"mailto:inquiry@area51.ph\" target=\"_blank\">inquiry@area51.ph</a></li></ul></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-3 col-sm-6\">", "</div>", [_vm._ssrNode("<div class=\"edu-footer-widget explore-widget\">", "</div>", [_vm._ssrNode("<h4 class=\"widget-title\">Online Platform</h4> "), _vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<ul class=\"footer-link link-hover\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("IT Services")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Solutions")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Case Studies")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Blog")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Contact Us")])], 1)], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 col-sm-6\">", "</div>", [_vm._ssrNode("<div class=\"edu-footer-widget quick-link-widget\">", "</div>", [_vm._ssrNode("<h4 class=\"widget-title\">Links</h4> "), _vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<ul class=\"footer-link link-hover\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("FAQ's")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Gallery")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("News & Articles")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Privacy Policy")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Sign In")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Contact Us")])], 1)], 2)])], 2)]), _vm._ssrNode(" <div class=\"col-lg-4 col-md-6\"><div class=\"edu-footer-widget\"><h4 class=\"widget-title\">Contacts</h4> <div class=\"inner\"><p class=\"description\">\n                Enter your email address to register to our newsletter\n                subscription\n              </p> <div class=\"input-group footer-subscription-form\"><input type=\"email\" placeholder=\"Your email\" class=\"form-control\"> <button type=\"button\" class=\"edu-btn btn-medium\">\n                  Subscribe <i class=\"icon-4\"></i></button></div> <ul class=\"social-share icon-transparent\"><li><a href=\"https://www.facebook.com/profile.php?id=61557188409279&sk=about\" target=\"_blank\" class=\"color-fb\"><i class=\"icon-facebook\"></i></a></li> <li><a href=\"https://linkedin.com/\" target=\"_blank\" class=\"color-linkd\"><i class=\"icon-linkedin2\"></i></a></li> <li><a href=\"https://instagram.com/\" target=\"_blank\" class=\"color-ig\"><i class=\"icon-instagram\"></i></a></li> <li><a href=\"https://twitter.com/\" target=\"_blank\" class=\"color-twitter\"><i class=\"icon-twitter\"></i></a></li> <li><a href=\"https://youtube.com/\" target=\"_blank\" class=\"color-yt\"><i class=\"icon-youtube\"></i></a></li></ul></div></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"copyright-area\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"inner text-center\"><p>" + _vm._ssrEscape("\n              Copyright " + _vm._s(new Date().getFullYear()) + "\n              ") + "<a href=\"#\">Area 51</a> Designed By\n              <a href=\"#\" target=\"_blank\">Area 51</a>. All Rights Reserved\n            </p></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footer/FooterOne.vue?vue&type=template&id=6de45fbb

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footer/FooterOne.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b539cb0"
  
)

/* harmony default export */ var FooterOne = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
module.exports = __webpack_require__(70);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("db8a3f08", content, true)

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(49);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#icomoon" });
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___, { hash: "#remixicon" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";/*!\n * Bootstrap v5.0.2 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))}*,:after,:before{box-sizing:border-box}@media(prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{color:#212529;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:1rem;line-height:1.5;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{background-color:currentColor;color:inherit;margin:1rem 0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-weight:500;line-height:1.2;margin-bottom:.5rem;margin-top:0}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media(min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media(min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media(min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media(min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-bottom:1rem;margin-top:0}abbr[data-bs-original-title],abbr[title]{cursor:help;-webkit-text-decoration:underline dotted;-moz-text-decoration:underline dotted;text-decoration:underline;text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit;margin-bottom:1rem}ol,ul{padding-left:2rem}dl,ol,ul{margin-bottom:1rem;margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{background-color:#fcf8e3;padding:.2em}sub,sup{font-size:.75em}a{color:#0d6efd;-webkit-text-decoration:underline;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;-webkit-text-decoration:none;text-decoration:none}code,kbd,pre,samp{direction:ltr;font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-family:var(--bs-font-monospace);font-size:1em;unicode-bidi:bidi-override}pre{display:block;font-size:.875em;margin-bottom:1rem;margin-top:0;overflow:auto}pre code{color:inherit;font-size:inherit;word-break:normal}code{color:#d63384;font-size:.875em;word-wrap:break-word}a>code{color:inherit}kbd{background-color:#212529;border-radius:.2rem;color:#fff;font-size:.875em;padding:.2rem .4rem}kbd kbd{font-size:1em;font-weight:700;padding:0}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{border-collapse:collapse;caption-side:bottom}caption{color:#6c757d;padding-bottom:.5rem;padding-top:.5rem;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]::-webkit-calendar-picker-indicator{display:none}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{border-style:none;padding:0}textarea{resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{float:left;font-size:calc(1.275rem + .3vw);line-height:inherit;margin-bottom:.5rem;width:100%}@media(min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}output{display:inline-block}iframe{border:0}summary{cursor:pointer;display:list-item}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media(min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media(min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media(min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media(min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media(min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media(min-width:1200px){.display-6{font-size:2.5rem}}.list-inline,.list-unstyled{list-style:none;padding-left:0}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{font-size:1.25rem;margin-bottom:1rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{color:#6c757d;font-size:.875em;margin-bottom:1rem;margin-top:-1rem}.blockquote-footer:before{content:\"— \"}.img-fluid,.img-thumbnail{height:auto;max-width:100%}.img-thumbnail{background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;padding:.25rem}.figure{display:inline-block}.figure-img{line-height:1;margin-bottom:.5rem}.figure-caption{color:#6c757d;font-size:.875em}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{margin-left:auto;margin-right:auto;padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);width:100%}@media(min-width:576px){.container,.container-sm{max-width:540px}}@media(min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media(min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media(min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media(min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1185px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-left:-.75rem;margin-left:calc(var(--bs-gutter-x)*-.5);margin-right:-.75rem;margin-right:calc(var(--bs-gutter-x)*-.5);margin-top:0;margin-top:calc(var(--bs-gutter-y)*-1)}.row>*{flex-shrink:0;margin-top:var(--bs-gutter-y);max-width:100%;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:calc(var(--bs-gutter-x)*.5);width:100%}.col{flex:1 0 0}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}@media(min-width:576px){.col-sm{flex:1 0 0}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}}@media(min-width:768px){.col-md{flex:1 0 0}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}}@media(min-width:992px){.col-lg{flex:1 0 0}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1200px){.col-xl{flex:1 0 0}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1400px){.col-xxl{flex:1 0 0}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:.25rem}.g-1,.gy-1{--bs-gutter-y:.25rem}.g-2,.gx-2{--bs-gutter-x:.5rem}.g-2,.gy-2{--bs-gutter-y:.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media(min-width:576px){.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media(min-width:768px){.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media(min-width:992px){.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media(min-width:1200px){.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media(min-width:1400px){.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0,0,0,.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0,0,0,.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0,0,0,.075);border-color:#dee2e6;color:#212529;margin-bottom:1rem;vertical-align:top;width:100%}.table>:not(caption)>*>*{background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg);padding:.5rem}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;border-color:#bacbe6;color:#000}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;border-color:#cbccce;color:#000}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;border-color:#bcd0c7;color:#000}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;border-color:#badce3;color:#000}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;border-color:#e6dbb9;color:#000}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;border-color:#dfc2c4;color:#000}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;border-color:#dfe0e1;color:#000}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;border-color:#373b3e;color:#fff}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media(max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{font-size:inherit;line-height:1.5;margin-bottom:0;padding-bottom:calc(.375rem + 1px);padding-top:calc(.375rem + 1px)}.col-form-label-lg{font-size:1.25rem;padding-bottom:calc(.5rem + 1px);padding-top:calc(.5rem + 1px)}.col-form-label-sm{font-size:.875rem;padding-bottom:calc(.25rem + 1px);padding-top:calc(.25rem + 1px)}.form-text{color:#6c757d;font-size:.875em;margin-top:.25rem}.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-clip:padding-box;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;color:#212529;display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media(prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{background-color:#fff;border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);color:#212529;outline:0}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;-webkit-margin-end:.75rem;-moz-margin-end:.75rem;background-color:#e9ecef;border-color:inherit;border-radius:0;border-style:solid;border-width:0 1px 0 0;color:#212529;margin:-.375rem .75rem -.375rem -.75rem;pointer-events:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;-webkit-margin-end:.75rem;background-color:#e9ecef;border-color:inherit;border-radius:0;border-style:solid;border-width:0 1px 0 0;color:#212529;margin:-.375rem .75rem -.375rem -.75rem;pointer-events:none;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{background-color:transparent;border:solid transparent;border-width:1px 0;color:#212529;display:block;line-height:1.5;margin-bottom:0;padding:.375rem 0;width:100%}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{border-radius:.2rem;font-size:.875rem;min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;-webkit-margin-end:.5rem;-moz-margin-end:.5rem;margin:-.25rem .5rem -.25rem -.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;-webkit-margin-end:.5rem;margin:-.25rem .5rem -.25rem -.5rem}.form-control-lg{border-radius:.3rem;font-size:1.25rem;min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;-webkit-margin-end:1rem;-moz-margin-end:1rem;margin:-.5rem 1rem -.5rem -1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;-webkit-margin-end:1rem;margin:-.5rem 1rem -.5rem -1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{height:auto;max-width:3rem;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border-radius:.25rem;height:1.5em}.form-control-color::-webkit-color-swatch{border-radius:.25rem;height:1.5em}.form-select{display:block;padding:.375rem 2.25rem .375rem .75rem;width:100%;-moz-padding-start:calc(.75rem - 3px);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\");background-position:right .75rem center;background-repeat:no-repeat;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;color:#212529;font-size:1rem;font-weight:400;line-height:1.5;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-select[multiple],.form-select[size]:not([size=\"1\"]){background-image:none;padding-right:.75rem}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{font-size:.875rem;padding-bottom:.25rem;padding-left:.5rem;padding-top:.25rem}.form-select-lg{font-size:1.25rem;padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}.form-check{display:block;margin-bottom:.125rem;min-height:1.5rem;padding-left:1.5em}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:contain;border:1px solid rgba(0,0,0,.25);height:1em;margin-top:.25em;-webkit-print-color-adjust:exact;vertical-align:top;width:1em;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E\");border-color:#0d6efd}.form-check-input:disabled{filter:none;opacity:.5;pointer-events:none}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E\");background-position:0;border-radius:2em;margin-left:-2.5em;transition:background-position .15s ease-in-out;width:2em}@media(prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2386b7fe'/%3E%3C/svg%3E\")}.form-switch .form-check-input:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");background-position:100%}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{filter:none;opacity:.65;pointer-events:none}.form-range{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:1.5rem;padding:0;width:100%}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;margin-top:-.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media(prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{background-color:#dee2e6;border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media(prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{background-color:#dee2e6;border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{border:1px solid transparent;height:100%;left:0;padding:1rem .75rem;pointer-events:none;position:absolute;top:0;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media(prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:-webkit-autofill{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-select{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.input-group{align-items:stretch;display:flex;flex-wrap:wrap;position:relative;width:100%}.input-group>.form-control,.input-group>.form-select{flex:1 1 auto;min-width:0;position:relative;width:1%}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{align-items:center;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem;color:#212529;display:flex;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;white-space:nowrap}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{border-radius:.3rem;font-size:1.25rem;padding:.5rem 1rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{border-radius:.2rem;font-size:.875rem;padding:.25rem .5rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-bottom-right-radius:0;border-top-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.valid-feedback{color:#198754;display:none;font-size:.875em;margin-top:.25rem;width:100%}.valid-tooltip{background-color:rgba(25,135,84,.9);border-radius:.25rem;color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#198754;padding-right:calc(1.5em + .75rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\"),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group .form-control.is-valid,.input-group .form-select.is-valid,.was-validated .input-group .form-control:valid,.was-validated .input-group .form-select:valid{z-index:1}.input-group .form-control.is-valid:focus,.input-group .form-select.is-valid:focus,.was-validated .input-group .form-control:valid:focus,.was-validated .input-group .form-select:valid:focus{z-index:3}.invalid-feedback{color:#dc3545;display:none;font-size:.875em;margin-top:.25rem;width:100%}.invalid-tooltip{background-color:rgba(220,53,69,.9);border-radius:.25rem;color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#dc3545;padding-right:calc(1.5em + .75rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\"),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group .form-control.is-invalid,.input-group .form-select.is-invalid,.was-validated .input-group .form-control:invalid,.was-validated .input-group .form-select:invalid{z-index:2}.input-group .form-control.is-invalid:focus,.input-group .form-select.is-invalid:focus,.was-validated .input-group .form-control:invalid:focus,.was-validated .input-group .form-select:invalid:focus{z-index:3}.btn{background-color:transparent;border:1px solid transparent;border-radius:.25rem;color:#212529;cursor:pointer;display:inline-block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}@media(prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.btn.disabled,.btn:disabled,fieldset:disabled .btn{opacity:.65;pointer-events:none}.btn-primary{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-check:focus+.btn-primary,.btn-primary:focus,.btn-primary:hover{background-color:#0b5ed7;border-color:#0a58ca;color:#fff}.btn-check:focus+.btn-primary,.btn-primary:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{background-color:#0a58ca;border-color:#0a53be;color:#fff}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-secondary{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-check:focus+.btn-secondary,.btn-secondary:focus,.btn-secondary:hover{background-color:#5c636a;border-color:#565e64;color:#fff}.btn-check:focus+.btn-secondary,.btn-secondary:focus{box-shadow:0 0 0 .25rem hsla(208,6%,54%,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{background-color:#565e64;border-color:#51585e;color:#fff}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem hsla(208,6%,54%,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-success{background-color:#198754;border-color:#198754;color:#fff}.btn-check:focus+.btn-success,.btn-success:focus,.btn-success:hover{background-color:#157347;border-color:#146c43;color:#fff}.btn-check:focus+.btn-success,.btn-success:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{background-color:#146c43;border-color:#13653f;color:#fff}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#198754;border-color:#198754;color:#fff}.btn-info{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-check:focus+.btn-info,.btn-info:focus,.btn-info:hover{background-color:#31d2f2;border-color:#25cff2;color:#000}.btn-check:focus+.btn-info,.btn-info:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{background-color:#3dd5f3;border-color:#25cff2;color:#000}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-warning{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-check:focus+.btn-warning,.btn-warning:focus,.btn-warning:hover{background-color:#ffca2c;border-color:#ffc720;color:#000}.btn-check:focus+.btn-warning,.btn-warning:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{background-color:#ffcd39;border-color:#ffc720;color:#000}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-danger{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-check:focus+.btn-danger,.btn-danger:focus,.btn-danger:hover{background-color:#bb2d3b;border-color:#b02a37;color:#fff}.btn-check:focus+.btn-danger,.btn-danger:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{background-color:#b02a37;border-color:#a52834;color:#fff}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-light{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-check:focus+.btn-light,.btn-light:focus,.btn-light:hover{background-color:#f9fafb;border-color:#f9fafb;color:#000}.btn-check:focus+.btn-light,.btn-light:focus{box-shadow:0 0 0 .25rem hsla(210,2%,83%,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{background-color:#f9fafb;border-color:#f9fafb;color:#000}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem hsla(210,2%,83%,.5)}.btn-light.disabled,.btn-light:disabled{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-dark{background-color:#212529;border-color:#212529;color:#fff}.btn-check:focus+.btn-dark,.btn-dark:focus,.btn-dark:hover{background-color:#1c1f23;border-color:#1a1e21;color:#fff}.btn-check:focus+.btn-dark,.btn-dark:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{background-color:#1a1e21;border-color:#191c1f;color:#fff}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{background-color:#212529;border-color:#212529;color:#fff}.btn-outline-primary{border-color:#0d6efd;color:#0d6efd}.btn-outline-primary:hover{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{background-color:transparent;color:#0d6efd}.btn-outline-secondary{border-color:#6c757d;color:#6c757d}.btn-outline-secondary:hover{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem hsla(208,7%,46%,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{box-shadow:0 0 0 .25rem hsla(208,7%,46%,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{background-color:transparent;color:#6c757d}.btn-outline-success{border-color:#198754;color:#198754}.btn-outline-success:hover{background-color:#198754;border-color:#198754;color:#fff}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{background-color:#198754;border-color:#198754;color:#fff}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{background-color:transparent;color:#198754}.btn-outline-info{border-color:#0dcaf0;color:#0dcaf0}.btn-outline-info:hover{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{background-color:transparent;color:#0dcaf0}.btn-outline-warning{border-color:#ffc107;color:#ffc107}.btn-outline-warning:hover{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{background-color:transparent;color:#ffc107}.btn-outline-danger{border-color:#dc3545;color:#dc3545}.btn-outline-danger:hover{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{background-color:transparent;color:#dc3545}.btn-outline-light{border-color:#f8f9fa;color:#f8f9fa}.btn-outline-light:hover{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{background-color:transparent;color:#f8f9fa}.btn-outline-dark{border-color:#212529;color:#212529}.btn-outline-dark:hover{background-color:#212529;border-color:#212529;color:#fff}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{background-color:#212529;border-color:#212529;color:#fff}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{background-color:transparent;color:#212529}.btn-link{color:#0d6efd;font-weight:400;-webkit-text-decoration:underline;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{border-radius:.3rem;font-size:1.25rem;padding:.5rem 1rem}.btn-group-sm>.btn,.btn-sm{border-radius:.2rem;font-size:.875rem;padding:.25rem .5rem}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{border-bottom:0;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:.3em solid;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;color:#212529;display:none;font-size:1rem;list-style:none;margin:0;min-width:10rem;padding:.5rem 0;position:absolute;text-align:left;z-index:1000}.dropdown-menu[data-bs-popper]{left:0;margin-top:.125rem;top:100%}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{left:auto;right:0}@media(min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{left:auto;right:0}}@media(min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{left:auto;right:0}}@media(min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{left:auto;right:0}}@media(min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{left:auto;right:0}}@media(min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{left:auto;right:0}}.dropup .dropdown-menu[data-bs-popper]{bottom:100%;margin-bottom:.125rem;margin-top:0;top:auto}.dropup .dropdown-toggle:after{border-bottom:.3em solid;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:0;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{left:100%;margin-left:.125rem;margin-top:0;right:auto;top:0}.dropend .dropdown-toggle:after{border-bottom:.3em solid transparent;border-left:.3em solid;border-right:0;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{left:auto;margin-right:.125rem;margin-top:0;right:100%;top:0}.dropstart .dropdown-toggle:after{content:\"\";display:inline-block;display:none;margin-left:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:before{border-bottom:.3em solid transparent;border-right:.3em solid;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-right:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{border-top:1px solid rgba(0,0,0,.15);height:0;margin:.5rem 0;overflow:hidden}.dropdown-item{background-color:transparent;border:0;clear:both;color:#212529;display:block;font-weight:400;padding:.25rem 1rem;text-align:inherit;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;width:100%}.dropdown-item:focus,.dropdown-item:hover{background-color:#e9ecef;color:#1e2125}.dropdown-item.active,.dropdown-item:active{background-color:#0d6efd;color:#fff;-webkit-text-decoration:none;text-decoration:none}.dropdown-item.disabled,.dropdown-item:disabled{background-color:transparent;color:#adb5bd;pointer-events:none}.dropdown-menu.show{display:block}.dropdown-header{color:#6c757d;display:block;font-size:.875rem;margin-bottom:0;padding:.5rem 1rem;white-space:nowrap}.dropdown-item-text{color:#212529;display:block;padding:.25rem 1rem}.dropdown-menu-dark{background-color:#343a40;border-color:rgba(0,0,0,.15);color:#dee2e6}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{background-color:hsla(0,0%,100%,.15);color:#fff}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{background-color:#0d6efd;color:#fff}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{display:inline-flex;position:relative;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{flex:1 1 auto;position:relative}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-bottom-left-radius:0;border-top-left-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{align-items:flex-start;flex-direction:column;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;list-style:none;margin-bottom:0;padding-left:0}.nav-link{color:#0d6efd;display:block;padding:.5rem 1rem;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media(prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:#0a58ca}.nav-link.disabled{color:#6c757d;cursor:default;pointer-events:none}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{background:0;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;margin-bottom:-1px}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{background-color:transparent;border-color:transparent;color:#6c757d}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{background-color:#fff;border-color:#dee2e6 #dee2e6 #fff;color:#495057}.nav-tabs .dropdown-menu{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}.nav-pills .nav-link{background:0;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background-color:#0d6efd;color:#fff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem;position:relative}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{align-items:center;display:flex;flex-wrap:inherit;justify-content:space-between}.navbar-brand{font-size:1.25rem;margin-right:1rem;padding-bottom:.3125rem;padding-top:.3125rem;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;list-style:none;margin-bottom:0;padding-left:0}.navbar-nav .nav-link{padding-left:0;padding-right:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-bottom:.5rem;padding-top:.5rem}.navbar-collapse{align-items:center;flex-basis:100%;flex-grow:1}.navbar-toggler{background-color:transparent;border:1px solid transparent;border-radius:.25rem;font-size:1.25rem;line-height:1;padding:.25rem .75rem;transition:box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:focus,.navbar-toggler:hover{-webkit-text-decoration:none;text-decoration:none}.navbar-toggler:focus{box-shadow:0 0 0 .25rem;outline:0}.navbar-toggler-icon{background-position:50%;background-repeat:no-repeat;background-size:100%;display:inline-block;height:1.5em;vertical-align:middle;width:1.5em}.navbar-nav-scroll{max-height:75vh;max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media(min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media(min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media(min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media(min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}@media(min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{border-color:rgba(0,0,0,.1);color:rgba(0,0,0,.55)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{border-color:hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{display:flex;flex-direction:column;min-width:0;position:relative;word-wrap:break-word;background-clip:border-box;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-left:0;margin-right:0}.card>.list-group{border-bottom:inherit;border-top:inherit}.card>.list-group:first-child{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px);border-top-width:0}.card>.list-group:last-child{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px);border-bottom-width:0}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{-webkit-text-decoration:none;text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125);margin-bottom:0;padding:.5rem 1rem}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125);padding:.5rem 1rem}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{border-bottom:0;margin-bottom:-.5rem}.card-header-pills,.card-header-tabs{margin-left:-.5rem;margin-right:-.5rem}.card-img-overlay{border-radius:calc(.25rem - 1px);bottom:0;left:0;padding:1rem;position:absolute;right:0;top:0}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media(min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0;margin-bottom:0}.card-group>.card+.card{border-left:0;margin-left:0}.card-group>.card:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion-button{align-items:center;background-color:#fff;border:0;border-radius:0;color:#212529;display:flex;font-size:1rem;overflow-anchor:none;padding:1rem 1.25rem;position:relative;text-align:left;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;width:100%}@media(prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){background-color:#e7f1ff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.125);color:#0c63e4}.accordion-button:not(.collapsed):after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230c63e4' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3E%3C/svg%3E\");transform:rotate(-180deg)}.accordion-button:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-size:1.25rem;content:\"\";flex-shrink:0;height:1.25rem;margin-left:auto;transition:transform .2s ease-in-out;width:1.25rem}@media(prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0;z-index:3}.accordion-header{margin-bottom:0}.accordion-item{background-color:#fff;border:1px solid rgba(0,0,0,.125)}.accordion-item:first-of-type{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:first-of-type .accordion-button{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.accordion-item:last-of-type .accordion-collapse{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-left:0;border-radius:0;border-right:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;list-style:none;margin-bottom:1rem;padding:0}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{color:#6c757d;content:\"/\";content:var(--bs-breadcrumb-divider,\"/\");float:left;padding-right:.5rem}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;list-style:none;padding-left:0}.page-link{background-color:#fff;border:1px solid #dee2e6;color:#0d6efd;display:block;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{border-color:#dee2e6;z-index:2}.page-link:focus,.page-link:hover{background-color:#e9ecef;color:#0a58ca}.page-link:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0;z-index:3}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{background-color:#0d6efd;border-color:#0d6efd;color:#fff;z-index:3}.page-item.disabled .page-link{background-color:#fff;border-color:#dee2e6;color:#6c757d;pointer-events:none}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.page-item:last-child .page-link{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.pagination-lg .page-link{font-size:1.25rem;padding:.75rem 1.5rem}.pagination-lg .page-item:first-child .page-link{border-bottom-left-radius:.3rem;border-top-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}.pagination-sm .page-link{font-size:.875rem;padding:.25rem .5rem}.pagination-sm .page-item:first-child .page-link{border-bottom-left-radius:.2rem;border-top-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-bottom-right-radius:.2rem;border-top-right-radius:.2rem}.badge{border-radius:.25rem;color:#fff;display:inline-block;font-size:.75em;font-weight:700;line-height:1;padding:.35em .65em;text-align:center;vertical-align:baseline;white-space:nowrap}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{border:1px solid transparent;border-radius:.25rem;margin-bottom:1rem;padding:1rem;position:relative}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{padding:1.25rem 1rem;position:absolute;right:0;top:0;z-index:2}.alert-primary{background-color:#cfe2ff;border-color:#b6d4fe;color:#084298}.alert-primary .alert-link{color:#06357a}.alert-secondary{background-color:#e2e3e5;border-color:#d3d6d8;color:#41464b}.alert-secondary .alert-link{color:#34383c}.alert-success{background-color:#d1e7dd;border-color:#badbcc;color:#0f5132}.alert-success .alert-link{color:#0c4128}.alert-info{background-color:#cff4fc;border-color:#b6effb;color:#055160}.alert-info .alert-link{color:#04414d}.alert-warning{background-color:#fff3cd;border-color:#ffecb5;color:#664d03}.alert-warning .alert-link{color:#523e02}.alert-danger{background-color:#f8d7da;border-color:#f5c2c7;color:#842029}.alert-danger .alert-link{color:#6a1a21}.alert-light{background-color:#fefefe;border-color:#fdfdfe;color:#636464}.alert-light .alert-link{color:#4f5050}.alert-dark{background-color:#d3d3d4;border-color:#bcbebf;color:#141619}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{background-color:#e9ecef;border-radius:.25rem;font-size:.75rem;height:1rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{background-color:#0d6efd;color:#fff;flex-direction:column;justify-content:center;text-align:center;transition:width .6s ease;white-space:nowrap}@media(prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media(prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{border-radius:.25rem;display:flex;flex-direction:column;margin-bottom:0;padding-left:0}.list-group-numbered{counter-reset:section;list-style-type:none}.list-group-numbered>li:before{content:counters(section,\".\") \". \";counter-increment:section}.list-group-item-action{color:#495057;text-align:inherit;width:100%}.list-group-item-action:focus,.list-group-item-action:hover{background-color:#f8f9fa;color:#495057;-webkit-text-decoration:none;text-decoration:none;z-index:1}.list-group-item-action:active{background-color:#e9ecef;color:#212529}.list-group-item{background-color:#fff;border:1px solid rgba(0,0,0,.125);color:#212529;display:block;padding:.5rem 1rem;position:relative;-webkit-text-decoration:none;text-decoration:none}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{background-color:#fff;color:#6c757d;pointer-events:none}.list-group-item.active{background-color:#0d6efd;border-color:#0d6efd;color:#fff;z-index:2}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{border-top-width:1px;margin-top:-1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}@media(min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media(min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-md>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media(min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media(min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media(min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{background-color:#cfe2ff;color:#084298}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{background-color:#bacbe6;color:#084298}.list-group-item-primary.list-group-item-action.active{background-color:#084298;border-color:#084298;color:#fff}.list-group-item-secondary{background-color:#e2e3e5;color:#41464b}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{background-color:#cbccce;color:#41464b}.list-group-item-secondary.list-group-item-action.active{background-color:#41464b;border-color:#41464b;color:#fff}.list-group-item-success{background-color:#d1e7dd;color:#0f5132}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{background-color:#bcd0c7;color:#0f5132}.list-group-item-success.list-group-item-action.active{background-color:#0f5132;border-color:#0f5132;color:#fff}.list-group-item-info{background-color:#cff4fc;color:#055160}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{background-color:#badce3;color:#055160}.list-group-item-info.list-group-item-action.active{background-color:#055160;border-color:#055160;color:#fff}.list-group-item-warning{background-color:#fff3cd;color:#664d03}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{background-color:#e6dbb9;color:#664d03}.list-group-item-warning.list-group-item-action.active{background-color:#664d03;border-color:#664d03;color:#fff}.list-group-item-danger{background-color:#f8d7da;color:#842029}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{background-color:#dfc2c4;color:#842029}.list-group-item-danger.list-group-item-action.active{background-color:#842029;border-color:#842029;color:#fff}.list-group-item-light{background-color:#fefefe;color:#636464}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{background-color:#e5e5e5;color:#636464}.list-group-item-light.list-group-item-action.active{background-color:#636464;border-color:#636464;color:#fff}.list-group-item-dark{background-color:#d3d3d4;color:#141619}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{background-color:#bebebf;color:#141619}.list-group-item-dark.list-group-item-action.active{background-color:#141619;border-color:#141619;color:#fff}.btn-close{background:transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3E%3C/svg%3E\") 50%/1em auto no-repeat;border:0;border-radius:.25rem;box-sizing:content-box;color:#000;height:1em;opacity:.5;padding:.25em;width:1em}.btn-close:hover{color:#000;opacity:.75;-webkit-text-decoration:none;text-decoration:none}.btn-close:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1;outline:0}.btn-close.disabled,.btn-close:disabled{opacity:.25;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{background-clip:padding-box;background-color:hsla(0,0%,100%,.85);border:1px solid rgba(0,0,0,.1);border-radius:.25rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.15);font-size:.875rem;max-width:100%;pointer-events:auto;width:350px}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{max-width:100%;pointer-events:none;width:-moz-max-content;width:max-content}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{align-items:center;background-clip:padding-box;background-color:hsla(0,0%,100%,.85);border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px);color:#6c757d;display:flex;padding:.5rem .75rem}.toast-header .btn-close{margin-left:.75rem;margin-right:-.375rem}.toast-body{padding:.75rem;word-wrap:break-word}.modal{display:none;height:100%;left:0;outline:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:1060}.modal-dialog{margin:.5rem;pointer-events:none;position:relative;width:auto}.modal.fade .modal-dialog{transform:translateY(-50px);transition:transform .3s ease-out}@media(prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{align-items:center;display:flex;min-height:calc(100% - 1rem)}.modal-content{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;display:flex;flex-direction:column;outline:0;pointer-events:auto;position:relative;width:100%}.modal-backdrop{background-color:#000;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1040}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{align-items:center;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);display:flex;flex-shrink:0;justify-content:space-between;padding:1rem}.modal-header .btn-close{margin:-.5rem -.5rem -.5rem auto;padding:.5rem}.modal-title{line-height:1.5;margin-bottom:0}.modal-body{flex:1 1 auto;padding:1rem;position:relative}.modal-footer{align-items:center;border-bottom-left-radius:calc(.3rem - 1px);border-bottom-right-radius:calc(.3rem - 1px);border-top:1px solid #dee2e6;display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;padding:.75rem}.modal-footer>*{margin:.25rem}@media(min-width:576px){.modal-dialog{margin:1.75rem auto;max-width:500px}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media(min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media(min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media(max-width:575.98px){.modal-fullscreen-sm-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-sm-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media(max-width:767.98px){.modal-fullscreen-md-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-md-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media(max-width:991.98px){.modal-fullscreen-lg-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-lg-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media(max-width:1199.98px){.modal-fullscreen-xl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media(max-width:1399.98px){.modal-fullscreen-xxl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xxl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:.875rem;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;margin:0;position:absolute;text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:1080;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{display:block;height:.4rem;position:absolute;width:.8rem}.tooltip .tooltip-arrow:before{border-color:transparent;border-style:solid;content:\"\";position:absolute}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{border-top-color:#000;border-width:.4rem .4rem 0;top:-1px}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{height:.8rem;left:0;width:.4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{border-right-color:#000;border-width:.4rem .4rem .4rem 0;right:-1px}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{border-bottom-color:#000;border-width:0 .4rem .4rem;bottom:-1px}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{height:.8rem;right:0;width:.4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{border-left-color:#000;border-width:.4rem 0 .4rem .4rem;left:-1px}.tooltip-inner{background-color:#000;border-radius:.25rem;color:#fff;max-width:200px;padding:.25rem .5rem;text-align:center}.popover{display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:.875rem;font-style:normal;font-weight:400;left:0;letter-spacing:normal;line-break:auto;line-height:1.5;max-width:276px;position:absolute;text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;top:0;white-space:normal;word-break:normal;word-spacing:normal;z-index:1070;word-wrap:break-word;background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .popover-arrow{display:block;height:.5rem;position:absolute;width:1rem}.popover .popover-arrow:after,.popover .popover-arrow:before{border-color:transparent;border-style:solid;content:\"\";display:block;position:absolute}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{border-top-color:rgba(0,0,0,.25);border-width:.5rem .5rem 0;bottom:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{border-top-color:#fff;border-width:.5rem .5rem 0;bottom:1px}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{height:1rem;left:calc(-.5rem - 1px);width:.5rem}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{border-right-color:rgba(0,0,0,.25);border-width:.5rem .5rem .5rem 0;left:0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{border-right-color:#fff;border-width:.5rem .5rem .5rem 0;left:1px}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{border-bottom-color:rgba(0,0,0,.25);border-width:0 .5rem .5rem;top:0}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{border-bottom-color:#fff;border-width:0 .5rem .5rem;top:1px}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{border-bottom:1px solid #f0f0f0;content:\"\";display:block;left:50%;margin-left:-.5rem;position:absolute;top:0;width:1rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{height:1rem;right:calc(-.5rem - 1px);width:.5rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{border-left-color:rgba(0,0,0,.25);border-width:.5rem 0 .5rem .5rem;right:0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{border-left-color:#fff;border-width:.5rem 0 .5rem .5rem;right:1px}.popover-header{background-color:#f0f0f0;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);font-size:1rem;margin-bottom:0;padding:.5rem 1rem}.popover-header:empty{display:none}.popover-body{color:#212529;padding:1rem}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{overflow:hidden;position:relative;width:100%}.carousel-inner:after{clear:both;content:\"\";display:block}.carousel-item{backface-visibility:hidden;display:none;float:left;margin-right:-100%;position:relative;transition:transform .6s ease-in-out;width:100%}@media(prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transform:none;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{opacity:1;z-index:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{opacity:0;transition:opacity 0s .6s;z-index:0}@media(prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{align-items:center;background:0;border:0;bottom:0;color:#fff;display:flex;justify-content:center;opacity:.5;padding:0;position:absolute;text-align:center;top:0;transition:opacity .15s ease;width:15%;z-index:1}@media(prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;opacity:.9;outline:0;-webkit-text-decoration:none;text-decoration:none}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;display:inline-block;height:2rem;width:2rem}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3E%3C/svg%3E\")}.carousel-indicators{bottom:0;display:flex;justify-content:center;left:0;list-style:none;margin-bottom:1rem;margin-left:15%;margin-right:15%;padding:0;position:absolute;right:0;z-index:2}.carousel-indicators [data-bs-target]{background-clip:padding-box;background-color:#fff;border:0;border-bottom:10px solid transparent;border-top:10px solid transparent;box-sizing:content-box;cursor:pointer;flex:0 1 auto;height:3px;margin-left:3px;margin-right:3px;opacity:.5;padding:0;text-indent:-999px;transition:opacity .6s ease;width:30px}@media(prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{bottom:1.25rem;color:#fff;left:15%;padding-bottom:1.25rem;padding-top:1.25rem;position:absolute;right:15%;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{animation:spinner-border .75s linear infinite;border:.25em solid;border-radius:50%;border-right:.25em solid transparent;display:inline-block;height:2rem;vertical-align:-.125em;width:2rem}.spinner-border-sm{border-width:.2em;height:1rem;width:1rem}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{animation:spinner-grow .75s linear infinite;background-color:currentColor;border-radius:50%;display:inline-block;height:2rem;opacity:0;vertical-align:-.125em;width:2rem}.spinner-grow-sm{height:1rem;width:1rem}@media(prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.offcanvas{background-clip:padding-box;background-color:#fff;bottom:0;display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:transform .3s ease-in-out;visibility:hidden;z-index:1050}@media(prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas-header{align-items:center;display:flex;justify-content:space-between;padding:1rem}.offcanvas-header .btn-close{margin-bottom:-.5rem;margin-right:-.5rem;margin-top:-.5rem;padding:.5rem}.offcanvas-title{line-height:1.5;margin-bottom:0}.offcanvas-body{flex-grow:1;overflow-y:auto;padding:1rem}.offcanvas-start{border-right:1px solid rgba(0,0,0,.2);left:0;top:0;transform:translateX(-100%);width:400px}.offcanvas-end{border-left:1px solid rgba(0,0,0,.2);right:0;top:0;transform:translateX(100%);width:400px}.offcanvas-top{border-bottom:1px solid rgba(0,0,0,.2);top:0;transform:translateY(-100%)}.offcanvas-bottom,.offcanvas-top{height:30vh;left:0;max-height:100%;right:0}.offcanvas-bottom{border-top:1px solid rgba(0,0,0,.2);transform:translateY(100%)}.offcanvas.show{transform:none}.clearfix:after{clear:both;content:\"\";display:block}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio:before{content:\"\";display:block;padding-top:var(--bs-aspect-ratio)}.ratio>*{height:100%;left:0;position:absolute;top:0;width:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.85714%}.fixed-top{top:0}.fixed-bottom,.fixed-top{left:0;position:fixed;right:0;z-index:1030}.fixed-bottom{bottom:0}.sticky-top{position:sticky;top:0;z-index:1020}@media(min-width:576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}}@media(min-width:768px){.sticky-md-top{position:sticky;top:0;z-index:1020}}@media(min-width:992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}}@media(min-width:1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}}@media(min-width:1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important;clip:rect(0,0,0,0)!important;border:0!important;white-space:nowrap!important}.stretched-link:after{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:1}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important}.border-start-0{border-left:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-left:0!important;margin-right:0!important}.mx-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:1rem!important;margin-right:1rem!important}.mx-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-5{margin-left:3rem!important;margin-right:3rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-0{margin-bottom:0!important;margin-top:0!important}.my-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-left:0!important;padding-right:0!important}.px-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-3{padding-left:1rem!important;padding-right:1rem!important}.px-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-5{padding-left:3rem!important;padding-right:3rem!important}.py-0{padding-bottom:0!important;padding-top:0!important}.py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.font-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important;font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{-webkit-text-decoration:none!important;text-decoration:none!important}.text-decoration-underline{-webkit-text-decoration:underline!important;text-decoration:underline!important}.text-decoration-line-through{-webkit-text-decoration:line-through!important;text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{color:#0d6efd!important}.text-secondary{color:#6c757d!important}.text-success{color:#198754!important}.text-info{color:#0dcaf0!important}.text-warning{color:#ffc107!important}.text-danger{color:#dc3545!important}.text-light{color:#f8f9fa!important}.text-dark{color:#212529!important}.text-white{color:#fff!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-reset{color:inherit!important}.bg-primary{background-color:#0d6efd!important}.bg-secondary{background-color:#6c757d!important}.bg-success{background-color:#198754!important}.bg-info{background-color:#0dcaf0!important}.bg-warning{background-color:#ffc107!important}.bg-danger{background-color:#dc3545!important}.bg-light{background-color:#f8f9fa!important}.bg-dark{background-color:#212529!important}.bg-body,.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.bg-gradient{background-image:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))!important;background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.25rem!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.2rem!important}.rounded-2{border-radius:.25rem!important}.rounded-3{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-end,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-end{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-start{border-bottom-left-radius:.25rem!important}.rounded-start{border-top-left-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media(min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-left:0!important;margin-right:0!important}.mx-sm-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-sm-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-sm-3{margin-left:1rem!important;margin-right:1rem!important}.mx-sm-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-sm-5{margin-left:3rem!important;margin-right:3rem!important}.mx-sm-auto{margin-left:auto!important;margin-right:auto!important}.my-sm-0{margin-bottom:0!important;margin-top:0!important}.my-sm-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-sm-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-sm-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-sm-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-sm-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-sm-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-left:0!important;padding-right:0!important}.px-sm-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-sm-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-sm-3{padding-left:1rem!important;padding-right:1rem!important}.px-sm-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-sm-5{padding-left:3rem!important;padding-right:3rem!important}.py-sm-0{padding-bottom:0!important;padding-top:0!important}.py-sm-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-sm-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-sm-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-sm-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-sm-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media(min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-left:0!important;margin-right:0!important}.mx-md-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-md-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-md-3{margin-left:1rem!important;margin-right:1rem!important}.mx-md-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-md-5{margin-left:3rem!important;margin-right:3rem!important}.mx-md-auto{margin-left:auto!important;margin-right:auto!important}.my-md-0{margin-bottom:0!important;margin-top:0!important}.my-md-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-md-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-md-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-md-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-md-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-md-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-left:0!important;padding-right:0!important}.px-md-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-md-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-md-3{padding-left:1rem!important;padding-right:1rem!important}.px-md-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-md-5{padding-left:3rem!important;padding-right:3rem!important}.py-md-0{padding-bottom:0!important;padding-top:0!important}.py-md-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-md-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-md-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-md-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-md-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media(min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-left:0!important;margin-right:0!important}.mx-lg-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-lg-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-lg-3{margin-left:1rem!important;margin-right:1rem!important}.mx-lg-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-lg-5{margin-left:3rem!important;margin-right:3rem!important}.mx-lg-auto{margin-left:auto!important;margin-right:auto!important}.my-lg-0{margin-bottom:0!important;margin-top:0!important}.my-lg-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-lg-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-lg-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-lg-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-lg-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-lg-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-left:0!important;padding-right:0!important}.px-lg-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-lg-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-lg-3{padding-left:1rem!important;padding-right:1rem!important}.px-lg-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-lg-5{padding-left:3rem!important;padding-right:3rem!important}.py-lg-0{padding-bottom:0!important;padding-top:0!important}.py-lg-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-lg-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-lg-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-lg-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-lg-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media(min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-left:0!important;margin-right:0!important}.mx-xl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xl-auto{margin-left:auto!important;margin-right:auto!important}.my-xl-0{margin-bottom:0!important;margin-top:0!important}.my-xl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-left:0!important;padding-right:0!important}.px-xl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xl-0{padding-bottom:0!important;padding-top:0!important}.py-xl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media(min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-left:0!important;margin-right:0!important}.mx-xxl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xxl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xxl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xxl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xxl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xxl-auto{margin-left:auto!important;margin-right:auto!important}.my-xxl-0{margin-bottom:0!important;margin-top:0!important}.my-xxl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xxl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xxl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xxl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xxl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xxl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-left:0!important;padding-right:0!important}.px-xxl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xxl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xxl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xxl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xxl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xxl-0{padding-bottom:0!important;padding-top:0!important}.py-xxl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xxl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xxl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xxl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xxl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media(min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}@font-face{font-display:block;font-family:\"icomoon\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\")}[class*=\" icon-\"],[class^=icon-]{font-family:\"icomoon\"!important;speak:never;font-feature-settings:normal;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-add:before{content:\"\\e95c\"}.icon-remove:before{content:\"\\e95d\"}.icon-east:before{content:\"\\e95a\"}.icon-west:before{content:\"\\e95b\"}.icon-envelope:before{content:\"\\f0e0\"}.icon-angle-left:before{content:\"\\f104\"}.icon-angle-right:before{content:\"\\f105\"}.icon-share-alt:before{content:\"\\f1e0\"}.icon-1:before{content:\"\\e900\"}.icon-2:before{content:\"\\e901\"}.icon-3:before{content:\"\\e902\"}.icon-4:before{content:\"\\e903\"}.icon-5:before{content:\"\\e904\"}.icon-6:before{content:\"\\e905\"}.icon-7:before{content:\"\\e906\"}.icon-8:before{content:\"\\e907\"}.icon-9:before{content:\"\\e908\"}.icon-10:before{content:\"\\e909\"}.icon-11:before{content:\"\\e90a\"}.icon-12:before{content:\"\\e90b\"}.icon-13:before{content:\"\\e90c\"}.icon-14:before{content:\"\\e90d\"}.icon-15:before{content:\"\\e90e\"}.icon-16:before{content:\"\\e90f\"}.icon-17:before{content:\"\\e910\"}.icon-18:before{content:\"\\e911\"}.icon-19:before{content:\"\\e912\"}.icon-20:before{content:\"\\e913\"}.icon-21:before{content:\"\\e914\"}.icon-22:before{content:\"\\e915\"}.icon-23:before{content:\"\\e916\"}.icon-24:before{content:\"\\e917\"}.icon-25:before{content:\"\\e918\"}.icon-26:before{content:\"\\e919\"}.icon-27:before{content:\"\\e91a\"}.icon-28:before{content:\"\\e91b\"}.icon-29:before{content:\"\\e91c\"}.icon-30:before{content:\"\\e91d\"}.icon-31:before{content:\"\\e91e\"}.icon-32:before{content:\"\\e91f\"}.icon-33:before{content:\"\\e920\"}.icon-34:before{content:\"\\e921\"}.icon-35:before{content:\"\\e922\"}.icon-36:before{content:\"\\e923\"}.icon-37:before{content:\"\\e924\"}.icon-38:before{content:\"\\e925\"}.icon-39:before{content:\"\\e926\"}.icon-40:before{content:\"\\e927\"}.icon-41:before{content:\"\\e928\"}.icon-42:before{content:\"\\e929\"}.icon-43:before{content:\"\\e92a\"}.icon-44:before{content:\"\\e92b\"}.icon-45:before{content:\"\\e92c\"}.icon-46:before{content:\"\\e92d\"}.icon-47:before{content:\"\\e92e\"}.icon-48:before{content:\"\\e92f\"}.icon-49:before{content:\"\\e930\"}.icon-50:before{content:\"\\e931\"}.icon-51:before{content:\"\\e932\"}.icon-52:before{content:\"\\e933\"}.icon-53:before{content:\"\\e934\"}.icon-54:before{content:\"\\e935\"}.icon-55:before{content:\"\\e936\"}.icon-56:before{content:\"\\e937\"}.icon-57:before{content:\"\\e938\"}.icon-58:before{content:\"\\e939\"}.icon-59:before{content:\"\\e93a\"}.icon-60:before{content:\"\\e93b\"}.icon-61:before{content:\"\\e93c\"}.icon-62:before{content:\"\\e93d\"}.icon-63:before{content:\"\\e93e\"}.icon-64:before{content:\"\\e93f\"}.icon-65:before{content:\"\\e940\"}.icon-66:before{content:\"\\e941\"}.icon-67:before{content:\"\\e942\"}.icon-68:before{content:\"\\e943\"}.icon-69:before{content:\"\\e944\"}.icon-70:before{content:\"\\e945\"}.icon-71:before{content:\"\\e946\"}.icon-72:before{content:\"\\e947\"}.icon-73:before{content:\"\\e948\"}.icon-74:before{content:\"\\e949\"}.icon-75:before{content:\"\\e94a\"}.icon-76:before{content:\"\\e94b\"}.icon-77:before{content:\"\\e94c\"}.icon-78:before{content:\"\\e94d\"}.icon-79:before{content:\"\\e94e\"}.icon-80:before{content:\"\\e94f\"}.icon-81:before{content:\"\\e950\"}.icon-82:before{content:\"\\e951\"}.icon-83:before{content:\"\\e952\"}.icon-84:before{content:\"\\e953\"}.icon-85:before{content:\"\\e954\"}.icon-86:before{content:\"\\e955\"}.icon-87:before{content:\"\\e956\"}.icon-88:before{content:\"\\e957\"}.icon-89:before{content:\"\\e958\"}.icon-phone:before{content:\"\\e959\"}.icon-star-empty:before{content:\"\\e9d7\"}.icon-star-half:before{content:\"\\e9d8\"}.icon-star-full:before{content:\"\\e9d9\"}.icon-minus:before{content:\"\\ea0b\"}.icon-share2:before{content:\"\\ea82\"}.icon-facebook:before{content:\"\\ea90\"}.icon-instagram:before{content:\"\\ea92\"}.icon-twitter:before{content:\"\\ea96\"}.icon-youtube:before{content:\"\\ea9d\"}.icon-linkedin2:before{content:\"\\eaca\"}.icon-pinterest:before{content:\"\\ead1\"}@font-face{font-display:swap;font-family:\"remixicon\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"svg\")}[class*=\" ri-\"],[class^=ri-]{font-family:\"remixicon\"!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ri-lg{font-size:1.3333em;line-height:.75em;vertical-align:-.0667em}.ri-xl{font-size:1.5em;line-height:.6666em;vertical-align:-.075em}.ri-xxs{font-size:.5em}.ri-xs{font-size:.75em}.ri-sm{font-size:.875em}.ri-1x{font-size:1em}.ri-2x{font-size:2em}.ri-3x{font-size:3em}.ri-4x{font-size:4em}.ri-5x{font-size:5em}.ri-6x{font-size:6em}.ri-7x{font-size:7em}.ri-8x{font-size:8em}.ri-9x{font-size:9em}.ri-10x{font-size:10em}.ri-fw{text-align:center;width:1.25em}.ri-24-hours-fill:before{content:\"\\ea01\"}.ri-24-hours-line:before{content:\"\\ea02\"}.ri-4k-fill:before{content:\"\\ea03\"}.ri-4k-line:before{content:\"\\ea04\"}.ri-a-b:before{content:\"\\ea05\"}.ri-account-box-fill:before{content:\"\\ea06\"}.ri-account-box-line:before{content:\"\\ea07\"}.ri-account-circle-fill:before{content:\"\\ea08\"}.ri-account-circle-line:before{content:\"\\ea09\"}.ri-account-pin-box-fill:before{content:\"\\ea0a\"}.ri-account-pin-box-line:before{content:\"\\ea0b\"}.ri-account-pin-circle-fill:before{content:\"\\ea0c\"}.ri-account-pin-circle-line:before{content:\"\\ea0d\"}.ri-add-box-fill:before{content:\"\\ea0e\"}.ri-add-box-line:before{content:\"\\ea0f\"}.ri-add-circle-fill:before{content:\"\\ea10\"}.ri-add-circle-line:before{content:\"\\ea11\"}.ri-add-fill:before{content:\"\\ea12\"}.ri-add-line:before{content:\"\\ea13\"}.ri-admin-fill:before{content:\"\\ea14\"}.ri-admin-line:before{content:\"\\ea15\"}.ri-advertisement-fill:before{content:\"\\ea16\"}.ri-advertisement-line:before{content:\"\\ea17\"}.ri-airplay-fill:before{content:\"\\ea18\"}.ri-airplay-line:before{content:\"\\ea19\"}.ri-alarm-fill:before{content:\"\\ea1a\"}.ri-alarm-line:before{content:\"\\ea1b\"}.ri-alarm-warning-fill:before{content:\"\\ea1c\"}.ri-alarm-warning-line:before{content:\"\\ea1d\"}.ri-album-fill:before{content:\"\\ea1e\"}.ri-album-line:before{content:\"\\ea1f\"}.ri-alert-fill:before{content:\"\\ea20\"}.ri-alert-line:before{content:\"\\ea21\"}.ri-aliens-fill:before{content:\"\\ea22\"}.ri-aliens-line:before{content:\"\\ea23\"}.ri-align-bottom:before{content:\"\\ea24\"}.ri-align-center:before{content:\"\\ea25\"}.ri-align-justify:before{content:\"\\ea26\"}.ri-align-left:before{content:\"\\ea27\"}.ri-align-right:before{content:\"\\ea28\"}.ri-align-top:before{content:\"\\ea29\"}.ri-align-vertically:before{content:\"\\ea2a\"}.ri-alipay-fill:before{content:\"\\ea2b\"}.ri-alipay-line:before{content:\"\\ea2c\"}.ri-amazon-fill:before{content:\"\\ea2d\"}.ri-amazon-line:before{content:\"\\ea2e\"}.ri-anchor-fill:before{content:\"\\ea2f\"}.ri-anchor-line:before{content:\"\\ea30\"}.ri-ancient-gate-fill:before{content:\"\\ea31\"}.ri-ancient-gate-line:before{content:\"\\ea32\"}.ri-ancient-pavilion-fill:before{content:\"\\ea33\"}.ri-ancient-pavilion-line:before{content:\"\\ea34\"}.ri-android-fill:before{content:\"\\ea35\"}.ri-android-line:before{content:\"\\ea36\"}.ri-angularjs-fill:before{content:\"\\ea37\"}.ri-angularjs-line:before{content:\"\\ea38\"}.ri-anticlockwise-2-fill:before{content:\"\\ea39\"}.ri-anticlockwise-2-line:before{content:\"\\ea3a\"}.ri-anticlockwise-fill:before{content:\"\\ea3b\"}.ri-anticlockwise-line:before{content:\"\\ea3c\"}.ri-app-store-fill:before{content:\"\\ea3d\"}.ri-app-store-line:before{content:\"\\ea3e\"}.ri-apple-fill:before{content:\"\\ea3f\"}.ri-apple-line:before{content:\"\\ea40\"}.ri-apps-2-fill:before{content:\"\\ea41\"}.ri-apps-2-line:before{content:\"\\ea42\"}.ri-apps-fill:before{content:\"\\ea43\"}.ri-apps-line:before{content:\"\\ea44\"}.ri-archive-drawer-fill:before{content:\"\\ea45\"}.ri-archive-drawer-line:before{content:\"\\ea46\"}.ri-archive-fill:before{content:\"\\ea47\"}.ri-archive-line:before{content:\"\\ea48\"}.ri-arrow-down-circle-fill:before{content:\"\\ea49\"}.ri-arrow-down-circle-line:before{content:\"\\ea4a\"}.ri-arrow-down-fill:before{content:\"\\ea4b\"}.ri-arrow-down-line:before{content:\"\\ea4c\"}.ri-arrow-down-s-fill:before{content:\"\\ea4d\"}.ri-arrow-down-s-line:before{content:\"\\ea4e\"}.ri-arrow-drop-down-fill:before{content:\"\\ea4f\"}.ri-arrow-drop-down-line:before{content:\"\\ea50\"}.ri-arrow-drop-left-fill:before{content:\"\\ea51\"}.ri-arrow-drop-left-line:before{content:\"\\ea52\"}.ri-arrow-drop-right-fill:before{content:\"\\ea53\"}.ri-arrow-drop-right-line:before{content:\"\\ea54\"}.ri-arrow-drop-up-fill:before{content:\"\\ea55\"}.ri-arrow-drop-up-line:before{content:\"\\ea56\"}.ri-arrow-go-back-fill:before{content:\"\\ea57\"}.ri-arrow-go-back-line:before{content:\"\\ea58\"}.ri-arrow-go-forward-fill:before{content:\"\\ea59\"}.ri-arrow-go-forward-line:before{content:\"\\ea5a\"}.ri-arrow-left-circle-fill:before{content:\"\\ea5b\"}.ri-arrow-left-circle-line:before{content:\"\\ea5c\"}.ri-arrow-left-down-fill:before{content:\"\\ea5d\"}.ri-arrow-left-down-line:before{content:\"\\ea5e\"}.ri-arrow-left-fill:before{content:\"\\ea5f\"}.ri-arrow-left-line:before{content:\"\\ea60\"}.ri-arrow-left-right-fill:before{content:\"\\ea61\"}.ri-arrow-left-right-line:before{content:\"\\ea62\"}.ri-arrow-left-s-fill:before{content:\"\\ea63\"}.ri-arrow-left-s-line:before{content:\"\\ea64\"}.ri-arrow-left-up-fill:before{content:\"\\ea65\"}.ri-arrow-left-up-line:before{content:\"\\ea66\"}.ri-arrow-right-circle-fill:before{content:\"\\ea67\"}.ri-arrow-right-circle-line:before{content:\"\\ea68\"}.ri-arrow-right-down-fill:before{content:\"\\ea69\"}.ri-arrow-right-down-line:before{content:\"\\ea6a\"}.ri-arrow-right-fill:before{content:\"\\ea6b\"}.ri-arrow-right-line:before{content:\"\\ea6c\"}.ri-arrow-right-s-fill:before{content:\"\\ea6d\"}.ri-arrow-right-s-line:before{content:\"\\ea6e\"}.ri-arrow-right-up-fill:before{content:\"\\ea6f\"}.ri-arrow-right-up-line:before{content:\"\\ea70\"}.ri-arrow-up-circle-fill:before{content:\"\\ea71\"}.ri-arrow-up-circle-line:before{content:\"\\ea72\"}.ri-arrow-up-down-fill:before{content:\"\\ea73\"}.ri-arrow-up-down-line:before{content:\"\\ea74\"}.ri-arrow-up-fill:before{content:\"\\ea75\"}.ri-arrow-up-line:before{content:\"\\ea76\"}.ri-arrow-up-s-fill:before{content:\"\\ea77\"}.ri-arrow-up-s-line:before{content:\"\\ea78\"}.ri-artboard-2-fill:before{content:\"\\ea79\"}.ri-artboard-2-line:before{content:\"\\ea7a\"}.ri-artboard-fill:before{content:\"\\ea7b\"}.ri-artboard-line:before{content:\"\\ea7c\"}.ri-article-fill:before{content:\"\\ea7d\"}.ri-article-line:before{content:\"\\ea7e\"}.ri-aspect-ratio-fill:before{content:\"\\ea7f\"}.ri-aspect-ratio-line:before{content:\"\\ea80\"}.ri-asterisk:before{content:\"\\ea81\"}.ri-at-fill:before{content:\"\\ea82\"}.ri-at-line:before{content:\"\\ea83\"}.ri-attachment-2:before{content:\"\\ea84\"}.ri-attachment-fill:before{content:\"\\ea85\"}.ri-attachment-line:before{content:\"\\ea86\"}.ri-auction-fill:before{content:\"\\ea87\"}.ri-auction-line:before{content:\"\\ea88\"}.ri-award-fill:before{content:\"\\ea89\"}.ri-award-line:before{content:\"\\ea8a\"}.ri-baidu-fill:before{content:\"\\ea8b\"}.ri-baidu-line:before{content:\"\\ea8c\"}.ri-ball-pen-fill:before{content:\"\\ea8d\"}.ri-ball-pen-line:before{content:\"\\ea8e\"}.ri-bank-card-2-fill:before{content:\"\\ea8f\"}.ri-bank-card-2-line:before{content:\"\\ea90\"}.ri-bank-card-fill:before{content:\"\\ea91\"}.ri-bank-card-line:before{content:\"\\ea92\"}.ri-bank-fill:before{content:\"\\ea93\"}.ri-bank-line:before{content:\"\\ea94\"}.ri-bar-chart-2-fill:before{content:\"\\ea95\"}.ri-bar-chart-2-line:before{content:\"\\ea96\"}.ri-bar-chart-box-fill:before{content:\"\\ea97\"}.ri-bar-chart-box-line:before{content:\"\\ea98\"}.ri-bar-chart-fill:before{content:\"\\ea99\"}.ri-bar-chart-grouped-fill:before{content:\"\\ea9a\"}.ri-bar-chart-grouped-line:before{content:\"\\ea9b\"}.ri-bar-chart-horizontal-fill:before{content:\"\\ea9c\"}.ri-bar-chart-horizontal-line:before{content:\"\\ea9d\"}.ri-bar-chart-line:before{content:\"\\ea9e\"}.ri-barcode-box-fill:before{content:\"\\ea9f\"}.ri-barcode-box-line:before{content:\"\\eaa0\"}.ri-barcode-fill:before{content:\"\\eaa1\"}.ri-barcode-line:before{content:\"\\eaa2\"}.ri-barricade-fill:before{content:\"\\eaa3\"}.ri-barricade-line:before{content:\"\\eaa4\"}.ri-base-station-fill:before{content:\"\\eaa5\"}.ri-base-station-line:before{content:\"\\eaa6\"}.ri-basketball-fill:before{content:\"\\eaa7\"}.ri-basketball-line:before{content:\"\\eaa8\"}.ri-battery-2-charge-fill:before{content:\"\\eaa9\"}.ri-battery-2-charge-line:before{content:\"\\eaaa\"}.ri-battery-2-fill:before{content:\"\\eaab\"}.ri-battery-2-line:before{content:\"\\eaac\"}.ri-battery-charge-fill:before{content:\"\\eaad\"}.ri-battery-charge-line:before{content:\"\\eaae\"}.ri-battery-fill:before{content:\"\\eaaf\"}.ri-battery-line:before{content:\"\\eab0\"}.ri-battery-low-fill:before{content:\"\\eab1\"}.ri-battery-low-line:before{content:\"\\eab2\"}.ri-battery-saver-fill:before{content:\"\\eab3\"}.ri-battery-saver-line:before{content:\"\\eab4\"}.ri-battery-share-fill:before{content:\"\\eab5\"}.ri-battery-share-line:before{content:\"\\eab6\"}.ri-bear-smile-fill:before{content:\"\\eab7\"}.ri-bear-smile-line:before{content:\"\\eab8\"}.ri-behance-fill:before{content:\"\\eab9\"}.ri-behance-line:before{content:\"\\eaba\"}.ri-bell-fill:before{content:\"\\eabb\"}.ri-bell-line:before{content:\"\\eabc\"}.ri-bike-fill:before{content:\"\\eabd\"}.ri-bike-line:before{content:\"\\eabe\"}.ri-bilibili-fill:before{content:\"\\eabf\"}.ri-bilibili-line:before{content:\"\\eac0\"}.ri-bill-fill:before{content:\"\\eac1\"}.ri-bill-line:before{content:\"\\eac2\"}.ri-billiards-fill:before{content:\"\\eac3\"}.ri-billiards-line:before{content:\"\\eac4\"}.ri-bit-coin-fill:before{content:\"\\eac5\"}.ri-bit-coin-line:before{content:\"\\eac6\"}.ri-blaze-fill:before{content:\"\\eac7\"}.ri-blaze-line:before{content:\"\\eac8\"}.ri-bluetooth-connect-fill:before{content:\"\\eac9\"}.ri-bluetooth-connect-line:before{content:\"\\eaca\"}.ri-bluetooth-fill:before{content:\"\\eacb\"}.ri-bluetooth-line:before{content:\"\\eacc\"}.ri-blur-off-fill:before{content:\"\\eacd\"}.ri-blur-off-line:before{content:\"\\eace\"}.ri-body-scan-fill:before{content:\"\\eacf\"}.ri-body-scan-line:before{content:\"\\ead0\"}.ri-bold:before{content:\"\\ead1\"}.ri-book-2-fill:before{content:\"\\ead2\"}.ri-book-2-line:before{content:\"\\ead3\"}.ri-book-3-fill:before{content:\"\\ead4\"}.ri-book-3-line:before{content:\"\\ead5\"}.ri-book-fill:before{content:\"\\ead6\"}.ri-book-line:before{content:\"\\ead7\"}.ri-book-mark-fill:before{content:\"\\ead8\"}.ri-book-mark-line:before{content:\"\\ead9\"}.ri-book-open-fill:before{content:\"\\eada\"}.ri-book-open-line:before{content:\"\\eadb\"}.ri-book-read-fill:before{content:\"\\eadc\"}.ri-book-read-line:before{content:\"\\eadd\"}.ri-booklet-fill:before{content:\"\\eade\"}.ri-booklet-line:before{content:\"\\eadf\"}.ri-bookmark-2-fill:before{content:\"\\eae0\"}.ri-bookmark-2-line:before{content:\"\\eae1\"}.ri-bookmark-3-fill:before{content:\"\\eae2\"}.ri-bookmark-3-line:before{content:\"\\eae3\"}.ri-bookmark-fill:before{content:\"\\eae4\"}.ri-bookmark-line:before{content:\"\\eae5\"}.ri-boxing-fill:before{content:\"\\eae6\"}.ri-boxing-line:before{content:\"\\eae7\"}.ri-braces-fill:before{content:\"\\eae8\"}.ri-braces-line:before{content:\"\\eae9\"}.ri-brackets-fill:before{content:\"\\eaea\"}.ri-brackets-line:before{content:\"\\eaeb\"}.ri-briefcase-2-fill:before{content:\"\\eaec\"}.ri-briefcase-2-line:before{content:\"\\eaed\"}.ri-briefcase-3-fill:before{content:\"\\eaee\"}.ri-briefcase-3-line:before{content:\"\\eaef\"}.ri-briefcase-4-fill:before{content:\"\\eaf0\"}.ri-briefcase-4-line:before{content:\"\\eaf1\"}.ri-briefcase-5-fill:before{content:\"\\eaf2\"}.ri-briefcase-5-line:before{content:\"\\eaf3\"}.ri-briefcase-fill:before{content:\"\\eaf4\"}.ri-briefcase-line:before{content:\"\\eaf5\"}.ri-bring-forward:before{content:\"\\eaf6\"}.ri-bring-to-front:before{content:\"\\eaf7\"}.ri-broadcast-fill:before{content:\"\\eaf8\"}.ri-broadcast-line:before{content:\"\\eaf9\"}.ri-brush-2-fill:before{content:\"\\eafa\"}.ri-brush-2-line:before{content:\"\\eafb\"}.ri-brush-3-fill:before{content:\"\\eafc\"}.ri-brush-3-line:before{content:\"\\eafd\"}.ri-brush-4-fill:before{content:\"\\eafe\"}.ri-brush-4-line:before{content:\"\\eaff\"}.ri-brush-fill:before{content:\"\\eb00\"}.ri-brush-line:before{content:\"\\eb01\"}.ri-bubble-chart-fill:before{content:\"\\eb02\"}.ri-bubble-chart-line:before{content:\"\\eb03\"}.ri-bug-2-fill:before{content:\"\\eb04\"}.ri-bug-2-line:before{content:\"\\eb05\"}.ri-bug-fill:before{content:\"\\eb06\"}.ri-bug-line:before{content:\"\\eb07\"}.ri-building-2-fill:before{content:\"\\eb08\"}.ri-building-2-line:before{content:\"\\eb09\"}.ri-building-3-fill:before{content:\"\\eb0a\"}.ri-building-3-line:before{content:\"\\eb0b\"}.ri-building-4-fill:before{content:\"\\eb0c\"}.ri-building-4-line:before{content:\"\\eb0d\"}.ri-building-fill:before{content:\"\\eb0e\"}.ri-building-line:before{content:\"\\eb0f\"}.ri-bus-2-fill:before{content:\"\\eb10\"}.ri-bus-2-line:before{content:\"\\eb11\"}.ri-bus-fill:before{content:\"\\eb12\"}.ri-bus-line:before{content:\"\\eb13\"}.ri-bus-wifi-fill:before{content:\"\\eb14\"}.ri-bus-wifi-line:before{content:\"\\eb15\"}.ri-cactus-fill:before{content:\"\\eb16\"}.ri-cactus-line:before{content:\"\\eb17\"}.ri-cake-2-fill:before{content:\"\\eb18\"}.ri-cake-2-line:before{content:\"\\eb19\"}.ri-cake-3-fill:before{content:\"\\eb1a\"}.ri-cake-3-line:before{content:\"\\eb1b\"}.ri-cake-fill:before{content:\"\\eb1c\"}.ri-cake-line:before{content:\"\\eb1d\"}.ri-calculator-fill:before{content:\"\\eb1e\"}.ri-calculator-line:before{content:\"\\eb1f\"}.ri-calendar-2-fill:before{content:\"\\eb20\"}.ri-calendar-2-line:before{content:\"\\eb21\"}.ri-calendar-check-fill:before{content:\"\\eb22\"}.ri-calendar-check-line:before{content:\"\\eb23\"}.ri-calendar-event-fill:before{content:\"\\eb24\"}.ri-calendar-event-line:before{content:\"\\eb25\"}.ri-calendar-fill:before{content:\"\\eb26\"}.ri-calendar-line:before{content:\"\\eb27\"}.ri-calendar-todo-fill:before{content:\"\\eb28\"}.ri-calendar-todo-line:before{content:\"\\eb29\"}.ri-camera-2-fill:before{content:\"\\eb2a\"}.ri-camera-2-line:before{content:\"\\eb2b\"}.ri-camera-3-fill:before{content:\"\\eb2c\"}.ri-camera-3-line:before{content:\"\\eb2d\"}.ri-camera-fill:before{content:\"\\eb2e\"}.ri-camera-lens-fill:before{content:\"\\eb2f\"}.ri-camera-lens-line:before{content:\"\\eb30\"}.ri-camera-line:before{content:\"\\eb31\"}.ri-camera-off-fill:before{content:\"\\eb32\"}.ri-camera-off-line:before{content:\"\\eb33\"}.ri-camera-switch-fill:before{content:\"\\eb34\"}.ri-camera-switch-line:before{content:\"\\eb35\"}.ri-capsule-fill:before{content:\"\\eb36\"}.ri-capsule-line:before{content:\"\\eb37\"}.ri-car-fill:before{content:\"\\eb38\"}.ri-car-line:before{content:\"\\eb39\"}.ri-car-washing-fill:before{content:\"\\eb3a\"}.ri-car-washing-line:before{content:\"\\eb3b\"}.ri-caravan-fill:before{content:\"\\eb3c\"}.ri-caravan-line:before{content:\"\\eb3d\"}.ri-cast-fill:before{content:\"\\eb3e\"}.ri-cast-line:before{content:\"\\eb3f\"}.ri-cellphone-fill:before{content:\"\\eb40\"}.ri-cellphone-line:before{content:\"\\eb41\"}.ri-celsius-fill:before{content:\"\\eb42\"}.ri-celsius-line:before{content:\"\\eb43\"}.ri-centos-fill:before{content:\"\\eb44\"}.ri-centos-line:before{content:\"\\eb45\"}.ri-character-recognition-fill:before{content:\"\\eb46\"}.ri-character-recognition-line:before{content:\"\\eb47\"}.ri-charging-pile-2-fill:before{content:\"\\eb48\"}.ri-charging-pile-2-line:before{content:\"\\eb49\"}.ri-charging-pile-fill:before{content:\"\\eb4a\"}.ri-charging-pile-line:before{content:\"\\eb4b\"}.ri-chat-1-fill:before{content:\"\\eb4c\"}.ri-chat-1-line:before{content:\"\\eb4d\"}.ri-chat-2-fill:before{content:\"\\eb4e\"}.ri-chat-2-line:before{content:\"\\eb4f\"}.ri-chat-3-fill:before{content:\"\\eb50\"}.ri-chat-3-line:before{content:\"\\eb51\"}.ri-chat-4-fill:before{content:\"\\eb52\"}.ri-chat-4-line:before{content:\"\\eb53\"}.ri-chat-check-fill:before{content:\"\\eb54\"}.ri-chat-check-line:before{content:\"\\eb55\"}.ri-chat-delete-fill:before{content:\"\\eb56\"}.ri-chat-delete-line:before{content:\"\\eb57\"}.ri-chat-download-fill:before{content:\"\\eb58\"}.ri-chat-download-line:before{content:\"\\eb59\"}.ri-chat-follow-up-fill:before{content:\"\\eb5a\"}.ri-chat-follow-up-line:before{content:\"\\eb5b\"}.ri-chat-forward-fill:before{content:\"\\eb5c\"}.ri-chat-forward-line:before{content:\"\\eb5d\"}.ri-chat-heart-fill:before{content:\"\\eb5e\"}.ri-chat-heart-line:before{content:\"\\eb5f\"}.ri-chat-history-fill:before{content:\"\\eb60\"}.ri-chat-history-line:before{content:\"\\eb61\"}.ri-chat-new-fill:before{content:\"\\eb62\"}.ri-chat-new-line:before{content:\"\\eb63\"}.ri-chat-off-fill:before{content:\"\\eb64\"}.ri-chat-off-line:before{content:\"\\eb65\"}.ri-chat-poll-fill:before{content:\"\\eb66\"}.ri-chat-poll-line:before{content:\"\\eb67\"}.ri-chat-private-fill:before{content:\"\\eb68\"}.ri-chat-private-line:before{content:\"\\eb69\"}.ri-chat-quote-fill:before{content:\"\\eb6a\"}.ri-chat-quote-line:before{content:\"\\eb6b\"}.ri-chat-settings-fill:before{content:\"\\eb6c\"}.ri-chat-settings-line:before{content:\"\\eb6d\"}.ri-chat-smile-2-fill:before{content:\"\\eb6e\"}.ri-chat-smile-2-line:before{content:\"\\eb6f\"}.ri-chat-smile-3-fill:before{content:\"\\eb70\"}.ri-chat-smile-3-line:before{content:\"\\eb71\"}.ri-chat-smile-fill:before{content:\"\\eb72\"}.ri-chat-smile-line:before{content:\"\\eb73\"}.ri-chat-upload-fill:before{content:\"\\eb74\"}.ri-chat-upload-line:before{content:\"\\eb75\"}.ri-chat-voice-fill:before{content:\"\\eb76\"}.ri-chat-voice-line:before{content:\"\\eb77\"}.ri-check-double-fill:before{content:\"\\eb78\"}.ri-check-double-line:before{content:\"\\eb79\"}.ri-check-fill:before{content:\"\\eb7a\"}.ri-check-line:before{content:\"\\eb7b\"}.ri-checkbox-blank-circle-fill:before{content:\"\\eb7c\"}.ri-checkbox-blank-circle-line:before{content:\"\\eb7d\"}.ri-checkbox-blank-fill:before{content:\"\\eb7e\"}.ri-checkbox-blank-line:before{content:\"\\eb7f\"}.ri-checkbox-circle-fill:before{content:\"\\eb80\"}.ri-checkbox-circle-line:before{content:\"\\eb81\"}.ri-checkbox-fill:before{content:\"\\eb82\"}.ri-checkbox-indeterminate-fill:before{content:\"\\eb83\"}.ri-checkbox-indeterminate-line:before{content:\"\\eb84\"}.ri-checkbox-line:before{content:\"\\eb85\"}.ri-checkbox-multiple-blank-fill:before{content:\"\\eb86\"}.ri-checkbox-multiple-blank-line:before{content:\"\\eb87\"}.ri-checkbox-multiple-fill:before{content:\"\\eb88\"}.ri-checkbox-multiple-line:before{content:\"\\eb89\"}.ri-china-railway-fill:before{content:\"\\eb8a\"}.ri-china-railway-line:before{content:\"\\eb8b\"}.ri-chrome-fill:before{content:\"\\eb8c\"}.ri-chrome-line:before{content:\"\\eb8d\"}.ri-clapperboard-fill:before{content:\"\\eb8e\"}.ri-clapperboard-line:before{content:\"\\eb8f\"}.ri-clipboard-fill:before{content:\"\\eb90\"}.ri-clipboard-line:before{content:\"\\eb91\"}.ri-clockwise-2-fill:before{content:\"\\eb92\"}.ri-clockwise-2-line:before{content:\"\\eb93\"}.ri-clockwise-fill:before{content:\"\\eb94\"}.ri-clockwise-line:before{content:\"\\eb95\"}.ri-close-circle-fill:before{content:\"\\eb96\"}.ri-close-circle-line:before{content:\"\\eb97\"}.ri-close-fill:before{content:\"\\eb98\"}.ri-close-line:before{content:\"\\eb99\"}.ri-closed-captioning-fill:before{content:\"\\eb9a\"}.ri-closed-captioning-line:before{content:\"\\eb9b\"}.ri-cloud-fill:before{content:\"\\eb9c\"}.ri-cloud-line:before{content:\"\\eb9d\"}.ri-cloud-off-fill:before{content:\"\\eb9e\"}.ri-cloud-off-line:before{content:\"\\eb9f\"}.ri-cloud-windy-fill:before{content:\"\\eba0\"}.ri-cloud-windy-line:before{content:\"\\eba1\"}.ri-cloudy-2-fill:before{content:\"\\eba2\"}.ri-cloudy-2-line:before{content:\"\\eba3\"}.ri-cloudy-fill:before{content:\"\\eba4\"}.ri-cloudy-line:before{content:\"\\eba5\"}.ri-code-box-fill:before{content:\"\\eba6\"}.ri-code-box-line:before{content:\"\\eba7\"}.ri-code-fill:before{content:\"\\eba8\"}.ri-code-line:before{content:\"\\eba9\"}.ri-code-s-fill:before{content:\"\\ebaa\"}.ri-code-s-line:before{content:\"\\ebab\"}.ri-code-s-slash-fill:before{content:\"\\ebac\"}.ri-code-s-slash-line:before{content:\"\\ebad\"}.ri-code-view:before{content:\"\\ebae\"}.ri-codepen-fill:before{content:\"\\ebaf\"}.ri-codepen-line:before{content:\"\\ebb0\"}.ri-coin-fill:before{content:\"\\ebb1\"}.ri-coin-line:before{content:\"\\ebb2\"}.ri-coins-fill:before{content:\"\\ebb3\"}.ri-coins-line:before{content:\"\\ebb4\"}.ri-collage-fill:before{content:\"\\ebb5\"}.ri-collage-line:before{content:\"\\ebb6\"}.ri-command-fill:before{content:\"\\ebb7\"}.ri-command-line:before{content:\"\\ebb8\"}.ri-community-fill:before{content:\"\\ebb9\"}.ri-community-line:before{content:\"\\ebba\"}.ri-compass-2-fill:before{content:\"\\ebbb\"}.ri-compass-2-line:before{content:\"\\ebbc\"}.ri-compass-3-fill:before{content:\"\\ebbd\"}.ri-compass-3-line:before{content:\"\\ebbe\"}.ri-compass-4-fill:before{content:\"\\ebbf\"}.ri-compass-4-line:before{content:\"\\ebc0\"}.ri-compass-discover-fill:before{content:\"\\ebc1\"}.ri-compass-discover-line:before{content:\"\\ebc2\"}.ri-compass-fill:before{content:\"\\ebc3\"}.ri-compass-line:before{content:\"\\ebc4\"}.ri-compasses-2-fill:before{content:\"\\ebc5\"}.ri-compasses-2-line:before{content:\"\\ebc6\"}.ri-compasses-fill:before{content:\"\\ebc7\"}.ri-compasses-line:before{content:\"\\ebc8\"}.ri-computer-fill:before{content:\"\\ebc9\"}.ri-computer-line:before{content:\"\\ebca\"}.ri-contacts-book-2-fill:before{content:\"\\ebcb\"}.ri-contacts-book-2-line:before{content:\"\\ebcc\"}.ri-contacts-book-fill:before{content:\"\\ebcd\"}.ri-contacts-book-line:before{content:\"\\ebce\"}.ri-contacts-book-upload-fill:before{content:\"\\ebcf\"}.ri-contacts-book-upload-line:before{content:\"\\ebd0\"}.ri-contacts-fill:before{content:\"\\ebd1\"}.ri-contacts-line:before{content:\"\\ebd2\"}.ri-contrast-2-fill:before{content:\"\\ebd3\"}.ri-contrast-2-line:before{content:\"\\ebd4\"}.ri-contrast-drop-2-fill:before{content:\"\\ebd5\"}.ri-contrast-drop-2-line:before{content:\"\\ebd6\"}.ri-contrast-drop-fill:before{content:\"\\ebd7\"}.ri-contrast-drop-line:before{content:\"\\ebd8\"}.ri-contrast-fill:before{content:\"\\ebd9\"}.ri-contrast-line:before{content:\"\\ebda\"}.ri-copper-coin-fill:before{content:\"\\ebdb\"}.ri-copper-coin-line:before{content:\"\\ebdc\"}.ri-copper-diamond-fill:before{content:\"\\ebdd\"}.ri-copper-diamond-line:before{content:\"\\ebde\"}.ri-copyleft-fill:before{content:\"\\ebdf\"}.ri-copyleft-line:before{content:\"\\ebe0\"}.ri-copyright-fill:before{content:\"\\ebe1\"}.ri-copyright-line:before{content:\"\\ebe2\"}.ri-coreos-fill:before{content:\"\\ebe3\"}.ri-coreos-line:before{content:\"\\ebe4\"}.ri-coupon-2-fill:before{content:\"\\ebe5\"}.ri-coupon-2-line:before{content:\"\\ebe6\"}.ri-coupon-3-fill:before{content:\"\\ebe7\"}.ri-coupon-3-line:before{content:\"\\ebe8\"}.ri-coupon-4-fill:before{content:\"\\ebe9\"}.ri-coupon-4-line:before{content:\"\\ebea\"}.ri-coupon-5-fill:before{content:\"\\ebeb\"}.ri-coupon-5-line:before{content:\"\\ebec\"}.ri-coupon-fill:before{content:\"\\ebed\"}.ri-coupon-line:before{content:\"\\ebee\"}.ri-cpu-fill:before{content:\"\\ebef\"}.ri-cpu-line:before{content:\"\\ebf0\"}.ri-creative-commons-by-fill:before{content:\"\\ebf1\"}.ri-creative-commons-by-line:before{content:\"\\ebf2\"}.ri-creative-commons-fill:before{content:\"\\ebf3\"}.ri-creative-commons-line:before{content:\"\\ebf4\"}.ri-creative-commons-nc-fill:before{content:\"\\ebf5\"}.ri-creative-commons-nc-line:before{content:\"\\ebf6\"}.ri-creative-commons-nd-fill:before{content:\"\\ebf7\"}.ri-creative-commons-nd-line:before{content:\"\\ebf8\"}.ri-creative-commons-sa-fill:before{content:\"\\ebf9\"}.ri-creative-commons-sa-line:before{content:\"\\ebfa\"}.ri-creative-commons-zero-fill:before{content:\"\\ebfb\"}.ri-creative-commons-zero-line:before{content:\"\\ebfc\"}.ri-criminal-fill:before{content:\"\\ebfd\"}.ri-criminal-line:before{content:\"\\ebfe\"}.ri-crop-2-fill:before{content:\"\\ebff\"}.ri-crop-2-line:before{content:\"\\ec00\"}.ri-crop-fill:before{content:\"\\ec01\"}.ri-crop-line:before{content:\"\\ec02\"}.ri-css3-fill:before{content:\"\\ec03\"}.ri-css3-line:before{content:\"\\ec04\"}.ri-cup-fill:before{content:\"\\ec05\"}.ri-cup-line:before{content:\"\\ec06\"}.ri-currency-fill:before{content:\"\\ec07\"}.ri-currency-line:before{content:\"\\ec08\"}.ri-cursor-fill:before{content:\"\\ec09\"}.ri-cursor-line:before{content:\"\\ec0a\"}.ri-customer-service-2-fill:before{content:\"\\ec0b\"}.ri-customer-service-2-line:before{content:\"\\ec0c\"}.ri-customer-service-fill:before{content:\"\\ec0d\"}.ri-customer-service-line:before{content:\"\\ec0e\"}.ri-dashboard-2-fill:before{content:\"\\ec0f\"}.ri-dashboard-2-line:before{content:\"\\ec10\"}.ri-dashboard-3-fill:before{content:\"\\ec11\"}.ri-dashboard-3-line:before{content:\"\\ec12\"}.ri-dashboard-fill:before{content:\"\\ec13\"}.ri-dashboard-line:before{content:\"\\ec14\"}.ri-database-2-fill:before{content:\"\\ec15\"}.ri-database-2-line:before{content:\"\\ec16\"}.ri-database-fill:before{content:\"\\ec17\"}.ri-database-line:before{content:\"\\ec18\"}.ri-delete-back-2-fill:before{content:\"\\ec19\"}.ri-delete-back-2-line:before{content:\"\\ec1a\"}.ri-delete-back-fill:before{content:\"\\ec1b\"}.ri-delete-back-line:before{content:\"\\ec1c\"}.ri-delete-bin-2-fill:before{content:\"\\ec1d\"}.ri-delete-bin-2-line:before{content:\"\\ec1e\"}.ri-delete-bin-3-fill:before{content:\"\\ec1f\"}.ri-delete-bin-3-line:before{content:\"\\ec20\"}.ri-delete-bin-4-fill:before{content:\"\\ec21\"}.ri-delete-bin-4-line:before{content:\"\\ec22\"}.ri-delete-bin-5-fill:before{content:\"\\ec23\"}.ri-delete-bin-5-line:before{content:\"\\ec24\"}.ri-delete-bin-6-fill:before{content:\"\\ec25\"}.ri-delete-bin-6-line:before{content:\"\\ec26\"}.ri-delete-bin-7-fill:before{content:\"\\ec27\"}.ri-delete-bin-7-line:before{content:\"\\ec28\"}.ri-delete-bin-fill:before{content:\"\\ec29\"}.ri-delete-bin-line:before{content:\"\\ec2a\"}.ri-delete-column:before{content:\"\\ec2b\"}.ri-delete-row:before{content:\"\\ec2c\"}.ri-device-fill:before{content:\"\\ec2d\"}.ri-device-line:before{content:\"\\ec2e\"}.ri-device-recover-fill:before{content:\"\\ec2f\"}.ri-device-recover-line:before{content:\"\\ec30\"}.ri-dingding-fill:before{content:\"\\ec31\"}.ri-dingding-line:before{content:\"\\ec32\"}.ri-direction-fill:before{content:\"\\ec33\"}.ri-direction-line:before{content:\"\\ec34\"}.ri-disc-fill:before{content:\"\\ec35\"}.ri-disc-line:before{content:\"\\ec36\"}.ri-discord-fill:before{content:\"\\ec37\"}.ri-discord-line:before{content:\"\\ec38\"}.ri-discuss-fill:before{content:\"\\ec39\"}.ri-discuss-line:before{content:\"\\ec3a\"}.ri-dislike-fill:before{content:\"\\ec3b\"}.ri-dislike-line:before{content:\"\\ec3c\"}.ri-disqus-fill:before{content:\"\\ec3d\"}.ri-disqus-line:before{content:\"\\ec3e\"}.ri-divide-fill:before{content:\"\\ec3f\"}.ri-divide-line:before{content:\"\\ec40\"}.ri-donut-chart-fill:before{content:\"\\ec41\"}.ri-donut-chart-line:before{content:\"\\ec42\"}.ri-door-closed-fill:before{content:\"\\ec43\"}.ri-door-closed-line:before{content:\"\\ec44\"}.ri-door-fill:before{content:\"\\ec45\"}.ri-door-line:before{content:\"\\ec46\"}.ri-door-lock-box-fill:before{content:\"\\ec47\"}.ri-door-lock-box-line:before{content:\"\\ec48\"}.ri-door-lock-fill:before{content:\"\\ec49\"}.ri-door-lock-line:before{content:\"\\ec4a\"}.ri-door-open-fill:before{content:\"\\ec4b\"}.ri-door-open-line:before{content:\"\\ec4c\"}.ri-dossier-fill:before{content:\"\\ec4d\"}.ri-dossier-line:before{content:\"\\ec4e\"}.ri-douban-fill:before{content:\"\\ec4f\"}.ri-douban-line:before{content:\"\\ec50\"}.ri-double-quotes-l:before{content:\"\\ec51\"}.ri-double-quotes-r:before{content:\"\\ec52\"}.ri-download-2-fill:before{content:\"\\ec53\"}.ri-download-2-line:before{content:\"\\ec54\"}.ri-download-cloud-2-fill:before{content:\"\\ec55\"}.ri-download-cloud-2-line:before{content:\"\\ec56\"}.ri-download-cloud-fill:before{content:\"\\ec57\"}.ri-download-cloud-line:before{content:\"\\ec58\"}.ri-download-fill:before{content:\"\\ec59\"}.ri-download-line:before{content:\"\\ec5a\"}.ri-draft-fill:before{content:\"\\ec5b\"}.ri-draft-line:before{content:\"\\ec5c\"}.ri-drag-drop-fill:before{content:\"\\ec5d\"}.ri-drag-drop-line:before{content:\"\\ec5e\"}.ri-drag-move-2-fill:before{content:\"\\ec5f\"}.ri-drag-move-2-line:before{content:\"\\ec60\"}.ri-drag-move-fill:before{content:\"\\ec61\"}.ri-drag-move-line:before{content:\"\\ec62\"}.ri-dribbble-fill:before{content:\"\\ec63\"}.ri-dribbble-line:before{content:\"\\ec64\"}.ri-drive-fill:before{content:\"\\ec65\"}.ri-drive-line:before{content:\"\\ec66\"}.ri-drizzle-fill:before{content:\"\\ec67\"}.ri-drizzle-line:before{content:\"\\ec68\"}.ri-drop-fill:before{content:\"\\ec69\"}.ri-drop-line:before{content:\"\\ec6a\"}.ri-dropbox-fill:before{content:\"\\ec6b\"}.ri-dropbox-line:before{content:\"\\ec6c\"}.ri-dual-sim-1-fill:before{content:\"\\ec6d\"}.ri-dual-sim-1-line:before{content:\"\\ec6e\"}.ri-dual-sim-2-fill:before{content:\"\\ec6f\"}.ri-dual-sim-2-line:before{content:\"\\ec70\"}.ri-dv-fill:before{content:\"\\ec71\"}.ri-dv-line:before{content:\"\\ec72\"}.ri-dvd-fill:before{content:\"\\ec73\"}.ri-dvd-line:before{content:\"\\ec74\"}.ri-e-bike-2-fill:before{content:\"\\ec75\"}.ri-e-bike-2-line:before{content:\"\\ec76\"}.ri-e-bike-fill:before{content:\"\\ec77\"}.ri-e-bike-line:before{content:\"\\ec78\"}.ri-earth-fill:before{content:\"\\ec79\"}.ri-earth-line:before{content:\"\\ec7a\"}.ri-earthquake-fill:before{content:\"\\ec7b\"}.ri-earthquake-line:before{content:\"\\ec7c\"}.ri-edge-fill:before{content:\"\\ec7d\"}.ri-edge-line:before{content:\"\\ec7e\"}.ri-edit-2-fill:before{content:\"\\ec7f\"}.ri-edit-2-line:before{content:\"\\ec80\"}.ri-edit-box-fill:before{content:\"\\ec81\"}.ri-edit-box-line:before{content:\"\\ec82\"}.ri-edit-circle-fill:before{content:\"\\ec83\"}.ri-edit-circle-line:before{content:\"\\ec84\"}.ri-edit-fill:before{content:\"\\ec85\"}.ri-edit-line:before{content:\"\\ec86\"}.ri-eject-fill:before{content:\"\\ec87\"}.ri-eject-line:before{content:\"\\ec88\"}.ri-emotion-2-fill:before{content:\"\\ec89\"}.ri-emotion-2-line:before{content:\"\\ec8a\"}.ri-emotion-fill:before{content:\"\\ec8b\"}.ri-emotion-happy-fill:before{content:\"\\ec8c\"}.ri-emotion-happy-line:before{content:\"\\ec8d\"}.ri-emotion-laugh-fill:before{content:\"\\ec8e\"}.ri-emotion-laugh-line:before{content:\"\\ec8f\"}.ri-emotion-line:before{content:\"\\ec90\"}.ri-emotion-normal-fill:before{content:\"\\ec91\"}.ri-emotion-normal-line:before{content:\"\\ec92\"}.ri-emotion-sad-fill:before{content:\"\\ec93\"}.ri-emotion-sad-line:before{content:\"\\ec94\"}.ri-emotion-unhappy-fill:before{content:\"\\ec95\"}.ri-emotion-unhappy-line:before{content:\"\\ec96\"}.ri-empathize-fill:before{content:\"\\ec97\"}.ri-empathize-line:before{content:\"\\ec98\"}.ri-emphasis-cn:before{content:\"\\ec99\"}.ri-emphasis:before{content:\"\\ec9a\"}.ri-english-input:before{content:\"\\ec9b\"}.ri-equalizer-fill:before{content:\"\\ec9c\"}.ri-equalizer-line:before{content:\"\\ec9d\"}.ri-eraser-fill:before{content:\"\\ec9e\"}.ri-eraser-line:before{content:\"\\ec9f\"}.ri-error-warning-fill:before{content:\"\\eca0\"}.ri-error-warning-line:before{content:\"\\eca1\"}.ri-evernote-fill:before{content:\"\\eca2\"}.ri-evernote-line:before{content:\"\\eca3\"}.ri-exchange-box-fill:before{content:\"\\eca4\"}.ri-exchange-box-line:before{content:\"\\eca5\"}.ri-exchange-cny-fill:before{content:\"\\eca6\"}.ri-exchange-cny-line:before{content:\"\\eca7\"}.ri-exchange-dollar-fill:before{content:\"\\eca8\"}.ri-exchange-dollar-line:before{content:\"\\eca9\"}.ri-exchange-fill:before{content:\"\\ecaa\"}.ri-exchange-funds-fill:before{content:\"\\ecab\"}.ri-exchange-funds-line:before{content:\"\\ecac\"}.ri-exchange-line:before{content:\"\\ecad\"}.ri-external-link-fill:before{content:\"\\ecae\"}.ri-external-link-line:before{content:\"\\ecaf\"}.ri-eye-2-fill:before{content:\"\\ecb0\"}.ri-eye-2-line:before{content:\"\\ecb1\"}.ri-eye-close-fill:before{content:\"\\ecb2\"}.ri-eye-close-line:before{content:\"\\ecb3\"}.ri-eye-fill:before{content:\"\\ecb4\"}.ri-eye-line:before{content:\"\\ecb5\"}.ri-eye-off-fill:before{content:\"\\ecb6\"}.ri-eye-off-line:before{content:\"\\ecb7\"}.ri-facebook-box-fill:before{content:\"\\ecb8\"}.ri-facebook-box-line:before{content:\"\\ecb9\"}.ri-facebook-circle-fill:before{content:\"\\ecba\"}.ri-facebook-circle-line:before{content:\"\\ecbb\"}.ri-facebook-fill:before{content:\"\\ecbc\"}.ri-facebook-line:before{content:\"\\ecbd\"}.ri-fahrenheit-fill:before{content:\"\\ecbe\"}.ri-fahrenheit-line:before{content:\"\\ecbf\"}.ri-feedback-fill:before{content:\"\\ecc0\"}.ri-feedback-line:before{content:\"\\ecc1\"}.ri-file-2-fill:before{content:\"\\ecc2\"}.ri-file-2-line:before{content:\"\\ecc3\"}.ri-file-3-fill:before{content:\"\\ecc4\"}.ri-file-3-line:before{content:\"\\ecc5\"}.ri-file-4-fill:before{content:\"\\ecc6\"}.ri-file-4-line:before{content:\"\\ecc7\"}.ri-file-add-fill:before{content:\"\\ecc8\"}.ri-file-add-line:before{content:\"\\ecc9\"}.ri-file-chart-2-fill:before{content:\"\\ecca\"}.ri-file-chart-2-line:before{content:\"\\eccb\"}.ri-file-chart-fill:before{content:\"\\eccc\"}.ri-file-chart-line:before{content:\"\\eccd\"}.ri-file-cloud-fill:before{content:\"\\ecce\"}.ri-file-cloud-line:before{content:\"\\eccf\"}.ri-file-code-fill:before{content:\"\\ecd0\"}.ri-file-code-line:before{content:\"\\ecd1\"}.ri-file-copy-2-fill:before{content:\"\\ecd2\"}.ri-file-copy-2-line:before{content:\"\\ecd3\"}.ri-file-copy-fill:before{content:\"\\ecd4\"}.ri-file-copy-line:before{content:\"\\ecd5\"}.ri-file-damage-fill:before{content:\"\\ecd6\"}.ri-file-damage-line:before{content:\"\\ecd7\"}.ri-file-download-fill:before{content:\"\\ecd8\"}.ri-file-download-line:before{content:\"\\ecd9\"}.ri-file-edit-fill:before{content:\"\\ecda\"}.ri-file-edit-line:before{content:\"\\ecdb\"}.ri-file-excel-2-fill:before{content:\"\\ecdc\"}.ri-file-excel-2-line:before{content:\"\\ecdd\"}.ri-file-excel-fill:before{content:\"\\ecde\"}.ri-file-excel-line:before{content:\"\\ecdf\"}.ri-file-fill:before{content:\"\\ece0\"}.ri-file-forbid-fill:before{content:\"\\ece1\"}.ri-file-forbid-line:before{content:\"\\ece2\"}.ri-file-gif-fill:before{content:\"\\ece3\"}.ri-file-gif-line:before{content:\"\\ece4\"}.ri-file-history-fill:before{content:\"\\ece5\"}.ri-file-history-line:before{content:\"\\ece6\"}.ri-file-hwp-fill:before{content:\"\\ece7\"}.ri-file-hwp-line:before{content:\"\\ece8\"}.ri-file-info-fill:before{content:\"\\ece9\"}.ri-file-info-line:before{content:\"\\ecea\"}.ri-file-line:before{content:\"\\eceb\"}.ri-file-list-2-fill:before{content:\"\\ecec\"}.ri-file-list-2-line:before{content:\"\\eced\"}.ri-file-list-3-fill:before{content:\"\\ecee\"}.ri-file-list-3-line:before{content:\"\\ecef\"}.ri-file-list-fill:before{content:\"\\ecf0\"}.ri-file-list-line:before{content:\"\\ecf1\"}.ri-file-lock-fill:before{content:\"\\ecf2\"}.ri-file-lock-line:before{content:\"\\ecf3\"}.ri-file-mark-fill:before{content:\"\\ecf4\"}.ri-file-mark-line:before{content:\"\\ecf5\"}.ri-file-music-fill:before{content:\"\\ecf6\"}.ri-file-music-line:before{content:\"\\ecf7\"}.ri-file-paper-2-fill:before{content:\"\\ecf8\"}.ri-file-paper-2-line:before{content:\"\\ecf9\"}.ri-file-paper-fill:before{content:\"\\ecfa\"}.ri-file-paper-line:before{content:\"\\ecfb\"}.ri-file-pdf-fill:before{content:\"\\ecfc\"}.ri-file-pdf-line:before{content:\"\\ecfd\"}.ri-file-ppt-2-fill:before{content:\"\\ecfe\"}.ri-file-ppt-2-line:before{content:\"\\ecff\"}.ri-file-ppt-fill:before{content:\"\\ed00\"}.ri-file-ppt-line:before{content:\"\\ed01\"}.ri-file-reduce-fill:before{content:\"\\ed02\"}.ri-file-reduce-line:before{content:\"\\ed03\"}.ri-file-search-fill:before{content:\"\\ed04\"}.ri-file-search-line:before{content:\"\\ed05\"}.ri-file-settings-fill:before{content:\"\\ed06\"}.ri-file-settings-line:before{content:\"\\ed07\"}.ri-file-shield-2-fill:before{content:\"\\ed08\"}.ri-file-shield-2-line:before{content:\"\\ed09\"}.ri-file-shield-fill:before{content:\"\\ed0a\"}.ri-file-shield-line:before{content:\"\\ed0b\"}.ri-file-shred-fill:before{content:\"\\ed0c\"}.ri-file-shred-line:before{content:\"\\ed0d\"}.ri-file-text-fill:before{content:\"\\ed0e\"}.ri-file-text-line:before{content:\"\\ed0f\"}.ri-file-transfer-fill:before{content:\"\\ed10\"}.ri-file-transfer-line:before{content:\"\\ed11\"}.ri-file-unknow-fill:before{content:\"\\ed12\"}.ri-file-unknow-line:before{content:\"\\ed13\"}.ri-file-upload-fill:before{content:\"\\ed14\"}.ri-file-upload-line:before{content:\"\\ed15\"}.ri-file-user-fill:before{content:\"\\ed16\"}.ri-file-user-line:before{content:\"\\ed17\"}.ri-file-warning-fill:before{content:\"\\ed18\"}.ri-file-warning-line:before{content:\"\\ed19\"}.ri-file-word-2-fill:before{content:\"\\ed1a\"}.ri-file-word-2-line:before{content:\"\\ed1b\"}.ri-file-word-fill:before{content:\"\\ed1c\"}.ri-file-word-line:before{content:\"\\ed1d\"}.ri-file-zip-fill:before{content:\"\\ed1e\"}.ri-file-zip-line:before{content:\"\\ed1f\"}.ri-film-fill:before{content:\"\\ed20\"}.ri-film-line:before{content:\"\\ed21\"}.ri-filter-2-fill:before{content:\"\\ed22\"}.ri-filter-2-line:before{content:\"\\ed23\"}.ri-filter-3-fill:before{content:\"\\ed24\"}.ri-filter-3-line:before{content:\"\\ed25\"}.ri-filter-fill:before{content:\"\\ed26\"}.ri-filter-line:before{content:\"\\ed27\"}.ri-filter-off-fill:before{content:\"\\ed28\"}.ri-filter-off-line:before{content:\"\\ed29\"}.ri-find-replace-fill:before{content:\"\\ed2a\"}.ri-find-replace-line:before{content:\"\\ed2b\"}.ri-finder-fill:before{content:\"\\ed2c\"}.ri-finder-line:before{content:\"\\ed2d\"}.ri-fingerprint-2-fill:before{content:\"\\ed2e\"}.ri-fingerprint-2-line:before{content:\"\\ed2f\"}.ri-fingerprint-fill:before{content:\"\\ed30\"}.ri-fingerprint-line:before{content:\"\\ed31\"}.ri-fire-fill:before{content:\"\\ed32\"}.ri-fire-line:before{content:\"\\ed33\"}.ri-firefox-fill:before{content:\"\\ed34\"}.ri-firefox-line:before{content:\"\\ed35\"}.ri-first-aid-kit-fill:before{content:\"\\ed36\"}.ri-first-aid-kit-line:before{content:\"\\ed37\"}.ri-flag-2-fill:before{content:\"\\ed38\"}.ri-flag-2-line:before{content:\"\\ed39\"}.ri-flag-fill:before{content:\"\\ed3a\"}.ri-flag-line:before{content:\"\\ed3b\"}.ri-flashlight-fill:before{content:\"\\ed3c\"}.ri-flashlight-line:before{content:\"\\ed3d\"}.ri-flask-fill:before{content:\"\\ed3e\"}.ri-flask-line:before{content:\"\\ed3f\"}.ri-flight-land-fill:before{content:\"\\ed40\"}.ri-flight-land-line:before{content:\"\\ed41\"}.ri-flight-takeoff-fill:before{content:\"\\ed42\"}.ri-flight-takeoff-line:before{content:\"\\ed43\"}.ri-flood-fill:before{content:\"\\ed44\"}.ri-flood-line:before{content:\"\\ed45\"}.ri-flow-chart:before{content:\"\\ed46\"}.ri-flutter-fill:before{content:\"\\ed47\"}.ri-flutter-line:before{content:\"\\ed48\"}.ri-focus-2-fill:before{content:\"\\ed49\"}.ri-focus-2-line:before{content:\"\\ed4a\"}.ri-focus-3-fill:before{content:\"\\ed4b\"}.ri-focus-3-line:before{content:\"\\ed4c\"}.ri-focus-fill:before{content:\"\\ed4d\"}.ri-focus-line:before{content:\"\\ed4e\"}.ri-foggy-fill:before{content:\"\\ed4f\"}.ri-foggy-line:before{content:\"\\ed50\"}.ri-folder-2-fill:before{content:\"\\ed51\"}.ri-folder-2-line:before{content:\"\\ed52\"}.ri-folder-3-fill:before{content:\"\\ed53\"}.ri-folder-3-line:before{content:\"\\ed54\"}.ri-folder-4-fill:before{content:\"\\ed55\"}.ri-folder-4-line:before{content:\"\\ed56\"}.ri-folder-5-fill:before{content:\"\\ed57\"}.ri-folder-5-line:before{content:\"\\ed58\"}.ri-folder-add-fill:before{content:\"\\ed59\"}.ri-folder-add-line:before{content:\"\\ed5a\"}.ri-folder-chart-2-fill:before{content:\"\\ed5b\"}.ri-folder-chart-2-line:before{content:\"\\ed5c\"}.ri-folder-chart-fill:before{content:\"\\ed5d\"}.ri-folder-chart-line:before{content:\"\\ed5e\"}.ri-folder-download-fill:before{content:\"\\ed5f\"}.ri-folder-download-line:before{content:\"\\ed60\"}.ri-folder-fill:before{content:\"\\ed61\"}.ri-folder-forbid-fill:before{content:\"\\ed62\"}.ri-folder-forbid-line:before{content:\"\\ed63\"}.ri-folder-history-fill:before{content:\"\\ed64\"}.ri-folder-history-line:before{content:\"\\ed65\"}.ri-folder-info-fill:before{content:\"\\ed66\"}.ri-folder-info-line:before{content:\"\\ed67\"}.ri-folder-keyhole-fill:before{content:\"\\ed68\"}.ri-folder-keyhole-line:before{content:\"\\ed69\"}.ri-folder-line:before{content:\"\\ed6a\"}.ri-folder-lock-fill:before{content:\"\\ed6b\"}.ri-folder-lock-line:before{content:\"\\ed6c\"}.ri-folder-music-fill:before{content:\"\\ed6d\"}.ri-folder-music-line:before{content:\"\\ed6e\"}.ri-folder-open-fill:before{content:\"\\ed6f\"}.ri-folder-open-line:before{content:\"\\ed70\"}.ri-folder-received-fill:before{content:\"\\ed71\"}.ri-folder-received-line:before{content:\"\\ed72\"}.ri-folder-reduce-fill:before{content:\"\\ed73\"}.ri-folder-reduce-line:before{content:\"\\ed74\"}.ri-folder-settings-fill:before{content:\"\\ed75\"}.ri-folder-settings-line:before{content:\"\\ed76\"}.ri-folder-shared-fill:before{content:\"\\ed77\"}.ri-folder-shared-line:before{content:\"\\ed78\"}.ri-folder-shield-2-fill:before{content:\"\\ed79\"}.ri-folder-shield-2-line:before{content:\"\\ed7a\"}.ri-folder-shield-fill:before{content:\"\\ed7b\"}.ri-folder-shield-line:before{content:\"\\ed7c\"}.ri-folder-transfer-fill:before{content:\"\\ed7d\"}.ri-folder-transfer-line:before{content:\"\\ed7e\"}.ri-folder-unknow-fill:before{content:\"\\ed7f\"}.ri-folder-unknow-line:before{content:\"\\ed80\"}.ri-folder-upload-fill:before{content:\"\\ed81\"}.ri-folder-upload-line:before{content:\"\\ed82\"}.ri-folder-user-fill:before{content:\"\\ed83\"}.ri-folder-user-line:before{content:\"\\ed84\"}.ri-folder-warning-fill:before{content:\"\\ed85\"}.ri-folder-warning-line:before{content:\"\\ed86\"}.ri-folder-zip-fill:before{content:\"\\ed87\"}.ri-folder-zip-line:before{content:\"\\ed88\"}.ri-folders-fill:before{content:\"\\ed89\"}.ri-folders-line:before{content:\"\\ed8a\"}.ri-font-color:before{content:\"\\ed8b\"}.ri-font-size-2:before{content:\"\\ed8c\"}.ri-font-size:before{content:\"\\ed8d\"}.ri-football-fill:before{content:\"\\ed8e\"}.ri-football-line:before{content:\"\\ed8f\"}.ri-footprint-fill:before{content:\"\\ed90\"}.ri-footprint-line:before{content:\"\\ed91\"}.ri-forbid-2-fill:before{content:\"\\ed92\"}.ri-forbid-2-line:before{content:\"\\ed93\"}.ri-forbid-fill:before{content:\"\\ed94\"}.ri-forbid-line:before{content:\"\\ed95\"}.ri-format-clear:before{content:\"\\ed96\"}.ri-fridge-fill:before{content:\"\\ed97\"}.ri-fridge-line:before{content:\"\\ed98\"}.ri-fullscreen-exit-fill:before{content:\"\\ed99\"}.ri-fullscreen-exit-line:before{content:\"\\ed9a\"}.ri-fullscreen-fill:before{content:\"\\ed9b\"}.ri-fullscreen-line:before{content:\"\\ed9c\"}.ri-function-fill:before{content:\"\\ed9d\"}.ri-function-line:before{content:\"\\ed9e\"}.ri-functions:before{content:\"\\ed9f\"}.ri-funds-box-fill:before{content:\"\\eda0\"}.ri-funds-box-line:before{content:\"\\eda1\"}.ri-funds-fill:before{content:\"\\eda2\"}.ri-funds-line:before{content:\"\\eda3\"}.ri-gallery-fill:before{content:\"\\eda4\"}.ri-gallery-line:before{content:\"\\eda5\"}.ri-gallery-upload-fill:before{content:\"\\eda6\"}.ri-gallery-upload-line:before{content:\"\\eda7\"}.ri-game-fill:before{content:\"\\eda8\"}.ri-game-line:before{content:\"\\eda9\"}.ri-gamepad-fill:before{content:\"\\edaa\"}.ri-gamepad-line:before{content:\"\\edab\"}.ri-gas-station-fill:before{content:\"\\edac\"}.ri-gas-station-line:before{content:\"\\edad\"}.ri-gatsby-fill:before{content:\"\\edae\"}.ri-gatsby-line:before{content:\"\\edaf\"}.ri-genderless-fill:before{content:\"\\edb0\"}.ri-genderless-line:before{content:\"\\edb1\"}.ri-ghost-2-fill:before{content:\"\\edb2\"}.ri-ghost-2-line:before{content:\"\\edb3\"}.ri-ghost-fill:before{content:\"\\edb4\"}.ri-ghost-line:before{content:\"\\edb5\"}.ri-ghost-smile-fill:before{content:\"\\edb6\"}.ri-ghost-smile-line:before{content:\"\\edb7\"}.ri-gift-2-fill:before{content:\"\\edb8\"}.ri-gift-2-line:before{content:\"\\edb9\"}.ri-gift-fill:before{content:\"\\edba\"}.ri-gift-line:before{content:\"\\edbb\"}.ri-git-branch-fill:before{content:\"\\edbc\"}.ri-git-branch-line:before{content:\"\\edbd\"}.ri-git-commit-fill:before{content:\"\\edbe\"}.ri-git-commit-line:before{content:\"\\edbf\"}.ri-git-merge-fill:before{content:\"\\edc0\"}.ri-git-merge-line:before{content:\"\\edc1\"}.ri-git-pull-request-fill:before{content:\"\\edc2\"}.ri-git-pull-request-line:before{content:\"\\edc3\"}.ri-git-repository-commits-fill:before{content:\"\\edc4\"}.ri-git-repository-commits-line:before{content:\"\\edc5\"}.ri-git-repository-fill:before{content:\"\\edc6\"}.ri-git-repository-line:before{content:\"\\edc7\"}.ri-git-repository-private-fill:before{content:\"\\edc8\"}.ri-git-repository-private-line:before{content:\"\\edc9\"}.ri-github-fill:before{content:\"\\edca\"}.ri-github-line:before{content:\"\\edcb\"}.ri-gitlab-fill:before{content:\"\\edcc\"}.ri-gitlab-line:before{content:\"\\edcd\"}.ri-global-fill:before{content:\"\\edce\"}.ri-global-line:before{content:\"\\edcf\"}.ri-globe-fill:before{content:\"\\edd0\"}.ri-globe-line:before{content:\"\\edd1\"}.ri-goblet-fill:before{content:\"\\edd2\"}.ri-goblet-line:before{content:\"\\edd3\"}.ri-google-fill:before{content:\"\\edd4\"}.ri-google-line:before{content:\"\\edd5\"}.ri-google-play-fill:before{content:\"\\edd6\"}.ri-google-play-line:before{content:\"\\edd7\"}.ri-government-fill:before{content:\"\\edd8\"}.ri-government-line:before{content:\"\\edd9\"}.ri-gps-fill:before{content:\"\\edda\"}.ri-gps-line:before{content:\"\\eddb\"}.ri-gradienter-fill:before{content:\"\\eddc\"}.ri-gradienter-line:before{content:\"\\eddd\"}.ri-grid-fill:before{content:\"\\edde\"}.ri-grid-line:before{content:\"\\eddf\"}.ri-group-2-fill:before{content:\"\\ede0\"}.ri-group-2-line:before{content:\"\\ede1\"}.ri-group-fill:before{content:\"\\ede2\"}.ri-group-line:before{content:\"\\ede3\"}.ri-guide-fill:before{content:\"\\ede4\"}.ri-guide-line:before{content:\"\\ede5\"}.ri-h-1:before{content:\"\\ede6\"}.ri-h-2:before{content:\"\\ede7\"}.ri-h-3:before{content:\"\\ede8\"}.ri-h-4:before{content:\"\\ede9\"}.ri-h-5:before{content:\"\\edea\"}.ri-h-6:before{content:\"\\edeb\"}.ri-hail-fill:before{content:\"\\edec\"}.ri-hail-line:before{content:\"\\eded\"}.ri-hammer-fill:before{content:\"\\edee\"}.ri-hammer-line:before{content:\"\\edef\"}.ri-hand-coin-fill:before{content:\"\\edf0\"}.ri-hand-coin-line:before{content:\"\\edf1\"}.ri-hand-heart-fill:before{content:\"\\edf2\"}.ri-hand-heart-line:before{content:\"\\edf3\"}.ri-hand-sanitizer-fill:before{content:\"\\edf4\"}.ri-hand-sanitizer-line:before{content:\"\\edf5\"}.ri-handbag-fill:before{content:\"\\edf6\"}.ri-handbag-line:before{content:\"\\edf7\"}.ri-hard-drive-2-fill:before{content:\"\\edf8\"}.ri-hard-drive-2-line:before{content:\"\\edf9\"}.ri-hard-drive-fill:before{content:\"\\edfa\"}.ri-hard-drive-line:before{content:\"\\edfb\"}.ri-hashtag:before{content:\"\\edfc\"}.ri-haze-2-fill:before{content:\"\\edfd\"}.ri-haze-2-line:before{content:\"\\edfe\"}.ri-haze-fill:before{content:\"\\edff\"}.ri-haze-line:before{content:\"\\ee00\"}.ri-hd-fill:before{content:\"\\ee01\"}.ri-hd-line:before{content:\"\\ee02\"}.ri-heading:before{content:\"\\ee03\"}.ri-headphone-fill:before{content:\"\\ee04\"}.ri-headphone-line:before{content:\"\\ee05\"}.ri-health-book-fill:before{content:\"\\ee06\"}.ri-health-book-line:before{content:\"\\ee07\"}.ri-heart-2-fill:before{content:\"\\ee08\"}.ri-heart-2-line:before{content:\"\\ee09\"}.ri-heart-3-fill:before{content:\"\\ee0a\"}.ri-heart-3-line:before{content:\"\\ee0b\"}.ri-heart-add-fill:before{content:\"\\ee0c\"}.ri-heart-add-line:before{content:\"\\ee0d\"}.ri-heart-fill:before{content:\"\\ee0e\"}.ri-heart-line:before{content:\"\\ee0f\"}.ri-heart-pulse-fill:before{content:\"\\ee10\"}.ri-heart-pulse-line:before{content:\"\\ee11\"}.ri-hearts-fill:before{content:\"\\ee12\"}.ri-hearts-line:before{content:\"\\ee13\"}.ri-heavy-showers-fill:before{content:\"\\ee14\"}.ri-heavy-showers-line:before{content:\"\\ee15\"}.ri-history-fill:before{content:\"\\ee16\"}.ri-history-line:before{content:\"\\ee17\"}.ri-home-2-fill:before{content:\"\\ee18\"}.ri-home-2-line:before{content:\"\\ee19\"}.ri-home-3-fill:before{content:\"\\ee1a\"}.ri-home-3-line:before{content:\"\\ee1b\"}.ri-home-4-fill:before{content:\"\\ee1c\"}.ri-home-4-line:before{content:\"\\ee1d\"}.ri-home-5-fill:before{content:\"\\ee1e\"}.ri-home-5-line:before{content:\"\\ee1f\"}.ri-home-6-fill:before{content:\"\\ee20\"}.ri-home-6-line:before{content:\"\\ee21\"}.ri-home-7-fill:before{content:\"\\ee22\"}.ri-home-7-line:before{content:\"\\ee23\"}.ri-home-8-fill:before{content:\"\\ee24\"}.ri-home-8-line:before{content:\"\\ee25\"}.ri-home-fill:before{content:\"\\ee26\"}.ri-home-gear-fill:before{content:\"\\ee27\"}.ri-home-gear-line:before{content:\"\\ee28\"}.ri-home-heart-fill:before{content:\"\\ee29\"}.ri-home-heart-line:before{content:\"\\ee2a\"}.ri-home-line:before{content:\"\\ee2b\"}.ri-home-smile-2-fill:before{content:\"\\ee2c\"}.ri-home-smile-2-line:before{content:\"\\ee2d\"}.ri-home-smile-fill:before{content:\"\\ee2e\"}.ri-home-smile-line:before{content:\"\\ee2f\"}.ri-home-wifi-fill:before{content:\"\\ee30\"}.ri-home-wifi-line:before{content:\"\\ee31\"}.ri-honor-of-kings-fill:before{content:\"\\ee32\"}.ri-honor-of-kings-line:before{content:\"\\ee33\"}.ri-honour-fill:before{content:\"\\ee34\"}.ri-honour-line:before{content:\"\\ee35\"}.ri-hospital-fill:before{content:\"\\ee36\"}.ri-hospital-line:before{content:\"\\ee37\"}.ri-hotel-bed-fill:before{content:\"\\ee38\"}.ri-hotel-bed-line:before{content:\"\\ee39\"}.ri-hotel-fill:before{content:\"\\ee3a\"}.ri-hotel-line:before{content:\"\\ee3b\"}.ri-hotspot-fill:before{content:\"\\ee3c\"}.ri-hotspot-line:before{content:\"\\ee3d\"}.ri-hq-fill:before{content:\"\\ee3e\"}.ri-hq-line:before{content:\"\\ee3f\"}.ri-html5-fill:before{content:\"\\ee40\"}.ri-html5-line:before{content:\"\\ee41\"}.ri-ie-fill:before{content:\"\\ee42\"}.ri-ie-line:before{content:\"\\ee43\"}.ri-image-2-fill:before{content:\"\\ee44\"}.ri-image-2-line:before{content:\"\\ee45\"}.ri-image-add-fill:before{content:\"\\ee46\"}.ri-image-add-line:before{content:\"\\ee47\"}.ri-image-edit-fill:before{content:\"\\ee48\"}.ri-image-edit-line:before{content:\"\\ee49\"}.ri-image-fill:before{content:\"\\ee4a\"}.ri-image-line:before{content:\"\\ee4b\"}.ri-inbox-archive-fill:before{content:\"\\ee4c\"}.ri-inbox-archive-line:before{content:\"\\ee4d\"}.ri-inbox-fill:before{content:\"\\ee4e\"}.ri-inbox-line:before{content:\"\\ee4f\"}.ri-inbox-unarchive-fill:before{content:\"\\ee50\"}.ri-inbox-unarchive-line:before{content:\"\\ee51\"}.ri-increase-decrease-fill:before{content:\"\\ee52\"}.ri-increase-decrease-line:before{content:\"\\ee53\"}.ri-indent-decrease:before{content:\"\\ee54\"}.ri-indent-increase:before{content:\"\\ee55\"}.ri-indeterminate-circle-fill:before{content:\"\\ee56\"}.ri-indeterminate-circle-line:before{content:\"\\ee57\"}.ri-information-fill:before{content:\"\\ee58\"}.ri-information-line:before{content:\"\\ee59\"}.ri-infrared-thermometer-fill:before{content:\"\\ee5a\"}.ri-infrared-thermometer-line:before{content:\"\\ee5b\"}.ri-ink-bottle-fill:before{content:\"\\ee5c\"}.ri-ink-bottle-line:before{content:\"\\ee5d\"}.ri-input-cursor-move:before{content:\"\\ee5e\"}.ri-input-method-fill:before{content:\"\\ee5f\"}.ri-input-method-line:before{content:\"\\ee60\"}.ri-insert-column-left:before{content:\"\\ee61\"}.ri-insert-column-right:before{content:\"\\ee62\"}.ri-insert-row-bottom:before{content:\"\\ee63\"}.ri-insert-row-top:before{content:\"\\ee64\"}.ri-instagram-fill:before{content:\"\\ee65\"}.ri-instagram-line:before{content:\"\\ee66\"}.ri-install-fill:before{content:\"\\ee67\"}.ri-install-line:before{content:\"\\ee68\"}.ri-invision-fill:before{content:\"\\ee69\"}.ri-invision-line:before{content:\"\\ee6a\"}.ri-italic:before{content:\"\\ee6b\"}.ri-kakao-talk-fill:before{content:\"\\ee6c\"}.ri-kakao-talk-line:before{content:\"\\ee6d\"}.ri-key-2-fill:before{content:\"\\ee6e\"}.ri-key-2-line:before{content:\"\\ee6f\"}.ri-key-fill:before{content:\"\\ee70\"}.ri-key-line:before{content:\"\\ee71\"}.ri-keyboard-box-fill:before{content:\"\\ee72\"}.ri-keyboard-box-line:before{content:\"\\ee73\"}.ri-keyboard-fill:before{content:\"\\ee74\"}.ri-keyboard-line:before{content:\"\\ee75\"}.ri-keynote-fill:before{content:\"\\ee76\"}.ri-keynote-line:before{content:\"\\ee77\"}.ri-knife-blood-fill:before{content:\"\\ee78\"}.ri-knife-blood-line:before{content:\"\\ee79\"}.ri-knife-fill:before{content:\"\\ee7a\"}.ri-knife-line:before{content:\"\\ee7b\"}.ri-landscape-fill:before{content:\"\\ee7c\"}.ri-landscape-line:before{content:\"\\ee7d\"}.ri-layout-2-fill:before{content:\"\\ee7e\"}.ri-layout-2-line:before{content:\"\\ee7f\"}.ri-layout-3-fill:before{content:\"\\ee80\"}.ri-layout-3-line:before{content:\"\\ee81\"}.ri-layout-4-fill:before{content:\"\\ee82\"}.ri-layout-4-line:before{content:\"\\ee83\"}.ri-layout-5-fill:before{content:\"\\ee84\"}.ri-layout-5-line:before{content:\"\\ee85\"}.ri-layout-6-fill:before{content:\"\\ee86\"}.ri-layout-6-line:before{content:\"\\ee87\"}.ri-layout-bottom-2-fill:before{content:\"\\ee88\"}.ri-layout-bottom-2-line:before{content:\"\\ee89\"}.ri-layout-bottom-fill:before{content:\"\\ee8a\"}.ri-layout-bottom-line:before{content:\"\\ee8b\"}.ri-layout-column-fill:before{content:\"\\ee8c\"}.ri-layout-column-line:before{content:\"\\ee8d\"}.ri-layout-fill:before{content:\"\\ee8e\"}.ri-layout-grid-fill:before{content:\"\\ee8f\"}.ri-layout-grid-line:before{content:\"\\ee90\"}.ri-layout-left-2-fill:before{content:\"\\ee91\"}.ri-layout-left-2-line:before{content:\"\\ee92\"}.ri-layout-left-fill:before{content:\"\\ee93\"}.ri-layout-left-line:before{content:\"\\ee94\"}.ri-layout-line:before{content:\"\\ee95\"}.ri-layout-masonry-fill:before{content:\"\\ee96\"}.ri-layout-masonry-line:before{content:\"\\ee97\"}.ri-layout-right-2-fill:before{content:\"\\ee98\"}.ri-layout-right-2-line:before{content:\"\\ee99\"}.ri-layout-right-fill:before{content:\"\\ee9a\"}.ri-layout-right-line:before{content:\"\\ee9b\"}.ri-layout-row-fill:before{content:\"\\ee9c\"}.ri-layout-row-line:before{content:\"\\ee9d\"}.ri-layout-top-2-fill:before{content:\"\\ee9e\"}.ri-layout-top-2-line:before{content:\"\\ee9f\"}.ri-layout-top-fill:before{content:\"\\eea0\"}.ri-layout-top-line:before{content:\"\\eea1\"}.ri-leaf-fill:before{content:\"\\eea2\"}.ri-leaf-line:before{content:\"\\eea3\"}.ri-lifebuoy-fill:before{content:\"\\eea4\"}.ri-lifebuoy-line:before{content:\"\\eea5\"}.ri-lightbulb-fill:before{content:\"\\eea6\"}.ri-lightbulb-flash-fill:before{content:\"\\eea7\"}.ri-lightbulb-flash-line:before{content:\"\\eea8\"}.ri-lightbulb-line:before{content:\"\\eea9\"}.ri-line-chart-fill:before{content:\"\\eeaa\"}.ri-line-chart-line:before{content:\"\\eeab\"}.ri-line-fill:before{content:\"\\eeac\"}.ri-line-height:before{content:\"\\eead\"}.ri-line-line:before{content:\"\\eeae\"}.ri-link-m:before{content:\"\\eeaf\"}.ri-link-unlink-m:before{content:\"\\eeb0\"}.ri-link-unlink:before{content:\"\\eeb1\"}.ri-link:before{content:\"\\eeb2\"}.ri-linkedin-box-fill:before{content:\"\\eeb3\"}.ri-linkedin-box-line:before{content:\"\\eeb4\"}.ri-linkedin-fill:before{content:\"\\eeb5\"}.ri-linkedin-line:before{content:\"\\eeb6\"}.ri-links-fill:before{content:\"\\eeb7\"}.ri-links-line:before{content:\"\\eeb8\"}.ri-list-check-2:before{content:\"\\eeb9\"}.ri-list-check:before{content:\"\\eeba\"}.ri-list-ordered:before{content:\"\\eebb\"}.ri-list-settings-fill:before{content:\"\\eebc\"}.ri-list-settings-line:before{content:\"\\eebd\"}.ri-list-unordered:before{content:\"\\eebe\"}.ri-live-fill:before{content:\"\\eebf\"}.ri-live-line:before{content:\"\\eec0\"}.ri-loader-2-fill:before{content:\"\\eec1\"}.ri-loader-2-line:before{content:\"\\eec2\"}.ri-loader-3-fill:before{content:\"\\eec3\"}.ri-loader-3-line:before{content:\"\\eec4\"}.ri-loader-4-fill:before{content:\"\\eec5\"}.ri-loader-4-line:before{content:\"\\eec6\"}.ri-loader-5-fill:before{content:\"\\eec7\"}.ri-loader-5-line:before{content:\"\\eec8\"}.ri-loader-fill:before{content:\"\\eec9\"}.ri-loader-line:before{content:\"\\eeca\"}.ri-lock-2-fill:before{content:\"\\eecb\"}.ri-lock-2-line:before{content:\"\\eecc\"}.ri-lock-fill:before{content:\"\\eecd\"}.ri-lock-line:before{content:\"\\eece\"}.ri-lock-password-fill:before{content:\"\\eecf\"}.ri-lock-password-line:before{content:\"\\eed0\"}.ri-lock-unlock-fill:before{content:\"\\eed1\"}.ri-lock-unlock-line:before{content:\"\\eed2\"}.ri-login-box-fill:before{content:\"\\eed3\"}.ri-login-box-line:before{content:\"\\eed4\"}.ri-login-circle-fill:before{content:\"\\eed5\"}.ri-login-circle-line:before{content:\"\\eed6\"}.ri-logout-box-fill:before{content:\"\\eed7\"}.ri-logout-box-line:before{content:\"\\eed8\"}.ri-logout-box-r-fill:before{content:\"\\eed9\"}.ri-logout-box-r-line:before{content:\"\\eeda\"}.ri-logout-circle-fill:before{content:\"\\eedb\"}.ri-logout-circle-line:before{content:\"\\eedc\"}.ri-logout-circle-r-fill:before{content:\"\\eedd\"}.ri-logout-circle-r-line:before{content:\"\\eede\"}.ri-luggage-cart-fill:before{content:\"\\eedf\"}.ri-luggage-cart-line:before{content:\"\\eee0\"}.ri-luggage-deposit-fill:before{content:\"\\eee1\"}.ri-luggage-deposit-line:before{content:\"\\eee2\"}.ri-lungs-fill:before{content:\"\\eee3\"}.ri-lungs-line:before{content:\"\\eee4\"}.ri-mac-fill:before{content:\"\\eee5\"}.ri-mac-line:before{content:\"\\eee6\"}.ri-macbook-fill:before{content:\"\\eee7\"}.ri-macbook-line:before{content:\"\\eee8\"}.ri-magic-fill:before{content:\"\\eee9\"}.ri-magic-line:before{content:\"\\eeea\"}.ri-mail-add-fill:before{content:\"\\eeeb\"}.ri-mail-add-line:before{content:\"\\eeec\"}.ri-mail-check-fill:before{content:\"\\eeed\"}.ri-mail-check-line:before{content:\"\\eeee\"}.ri-mail-close-fill:before{content:\"\\eeef\"}.ri-mail-close-line:before{content:\"\\eef0\"}.ri-mail-download-fill:before{content:\"\\eef1\"}.ri-mail-download-line:before{content:\"\\eef2\"}.ri-mail-fill:before{content:\"\\eef3\"}.ri-mail-forbid-fill:before{content:\"\\eef4\"}.ri-mail-forbid-line:before{content:\"\\eef5\"}.ri-mail-line:before{content:\"\\eef6\"}.ri-mail-lock-fill:before{content:\"\\eef7\"}.ri-mail-lock-line:before{content:\"\\eef8\"}.ri-mail-open-fill:before{content:\"\\eef9\"}.ri-mail-open-line:before{content:\"\\eefa\"}.ri-mail-send-fill:before{content:\"\\eefb\"}.ri-mail-send-line:before{content:\"\\eefc\"}.ri-mail-settings-fill:before{content:\"\\eefd\"}.ri-mail-settings-line:before{content:\"\\eefe\"}.ri-mail-star-fill:before{content:\"\\eeff\"}.ri-mail-star-line:before{content:\"\\ef00\"}.ri-mail-unread-fill:before{content:\"\\ef01\"}.ri-mail-unread-line:before{content:\"\\ef02\"}.ri-mail-volume-fill:before{content:\"\\ef03\"}.ri-mail-volume-line:before{content:\"\\ef04\"}.ri-map-2-fill:before{content:\"\\ef05\"}.ri-map-2-line:before{content:\"\\ef06\"}.ri-map-fill:before{content:\"\\ef07\"}.ri-map-line:before{content:\"\\ef08\"}.ri-map-pin-2-fill:before{content:\"\\ef09\"}.ri-map-pin-2-line:before{content:\"\\ef0a\"}.ri-map-pin-3-fill:before{content:\"\\ef0b\"}.ri-map-pin-3-line:before{content:\"\\ef0c\"}.ri-map-pin-4-fill:before{content:\"\\ef0d\"}.ri-map-pin-4-line:before{content:\"\\ef0e\"}.ri-map-pin-5-fill:before{content:\"\\ef0f\"}.ri-map-pin-5-line:before{content:\"\\ef10\"}.ri-map-pin-add-fill:before{content:\"\\ef11\"}.ri-map-pin-add-line:before{content:\"\\ef12\"}.ri-map-pin-fill:before{content:\"\\ef13\"}.ri-map-pin-line:before{content:\"\\ef14\"}.ri-map-pin-range-fill:before{content:\"\\ef15\"}.ri-map-pin-range-line:before{content:\"\\ef16\"}.ri-map-pin-time-fill:before{content:\"\\ef17\"}.ri-map-pin-time-line:before{content:\"\\ef18\"}.ri-map-pin-user-fill:before{content:\"\\ef19\"}.ri-map-pin-user-line:before{content:\"\\ef1a\"}.ri-mark-pen-fill:before{content:\"\\ef1b\"}.ri-mark-pen-line:before{content:\"\\ef1c\"}.ri-markdown-fill:before{content:\"\\ef1d\"}.ri-markdown-line:before{content:\"\\ef1e\"}.ri-markup-fill:before{content:\"\\ef1f\"}.ri-markup-line:before{content:\"\\ef20\"}.ri-mastercard-fill:before{content:\"\\ef21\"}.ri-mastercard-line:before{content:\"\\ef22\"}.ri-mastodon-fill:before{content:\"\\ef23\"}.ri-mastodon-line:before{content:\"\\ef24\"}.ri-medal-2-fill:before{content:\"\\ef25\"}.ri-medal-2-line:before{content:\"\\ef26\"}.ri-medal-fill:before{content:\"\\ef27\"}.ri-medal-line:before{content:\"\\ef28\"}.ri-medicine-bottle-fill:before{content:\"\\ef29\"}.ri-medicine-bottle-line:before{content:\"\\ef2a\"}.ri-medium-fill:before{content:\"\\ef2b\"}.ri-medium-line:before{content:\"\\ef2c\"}.ri-men-fill:before{content:\"\\ef2d\"}.ri-men-line:before{content:\"\\ef2e\"}.ri-mental-health-fill:before{content:\"\\ef2f\"}.ri-mental-health-line:before{content:\"\\ef30\"}.ri-menu-2-fill:before{content:\"\\ef31\"}.ri-menu-2-line:before{content:\"\\ef32\"}.ri-menu-3-fill:before{content:\"\\ef33\"}.ri-menu-3-line:before{content:\"\\ef34\"}.ri-menu-4-fill:before{content:\"\\ef35\"}.ri-menu-4-line:before{content:\"\\ef36\"}.ri-menu-5-fill:before{content:\"\\ef37\"}.ri-menu-5-line:before{content:\"\\ef38\"}.ri-menu-add-fill:before{content:\"\\ef39\"}.ri-menu-add-line:before{content:\"\\ef3a\"}.ri-menu-fill:before{content:\"\\ef3b\"}.ri-menu-fold-fill:before{content:\"\\ef3c\"}.ri-menu-fold-line:before{content:\"\\ef3d\"}.ri-menu-line:before{content:\"\\ef3e\"}.ri-menu-unfold-fill:before{content:\"\\ef3f\"}.ri-menu-unfold-line:before{content:\"\\ef40\"}.ri-merge-cells-horizontal:before{content:\"\\ef41\"}.ri-merge-cells-vertical:before{content:\"\\ef42\"}.ri-message-2-fill:before{content:\"\\ef43\"}.ri-message-2-line:before{content:\"\\ef44\"}.ri-message-3-fill:before{content:\"\\ef45\"}.ri-message-3-line:before{content:\"\\ef46\"}.ri-message-fill:before{content:\"\\ef47\"}.ri-message-line:before{content:\"\\ef48\"}.ri-messenger-fill:before{content:\"\\ef49\"}.ri-messenger-line:before{content:\"\\ef4a\"}.ri-meteor-fill:before{content:\"\\ef4b\"}.ri-meteor-line:before{content:\"\\ef4c\"}.ri-mic-2-fill:before{content:\"\\ef4d\"}.ri-mic-2-line:before{content:\"\\ef4e\"}.ri-mic-fill:before{content:\"\\ef4f\"}.ri-mic-line:before{content:\"\\ef50\"}.ri-mic-off-fill:before{content:\"\\ef51\"}.ri-mic-off-line:before{content:\"\\ef52\"}.ri-mickey-fill:before{content:\"\\ef53\"}.ri-mickey-line:before{content:\"\\ef54\"}.ri-microscope-fill:before{content:\"\\ef55\"}.ri-microscope-line:before{content:\"\\ef56\"}.ri-microsoft-fill:before{content:\"\\ef57\"}.ri-microsoft-line:before{content:\"\\ef58\"}.ri-mind-map:before{content:\"\\ef59\"}.ri-mini-program-fill:before{content:\"\\ef5a\"}.ri-mini-program-line:before{content:\"\\ef5b\"}.ri-mist-fill:before{content:\"\\ef5c\"}.ri-mist-line:before{content:\"\\ef5d\"}.ri-money-cny-box-fill:before{content:\"\\ef5e\"}.ri-money-cny-box-line:before{content:\"\\ef5f\"}.ri-money-cny-circle-fill:before{content:\"\\ef60\"}.ri-money-cny-circle-line:before{content:\"\\ef61\"}.ri-money-dollar-box-fill:before{content:\"\\ef62\"}.ri-money-dollar-box-line:before{content:\"\\ef63\"}.ri-money-dollar-circle-fill:before{content:\"\\ef64\"}.ri-money-dollar-circle-line:before{content:\"\\ef65\"}.ri-money-euro-box-fill:before{content:\"\\ef66\"}.ri-money-euro-box-line:before{content:\"\\ef67\"}.ri-money-euro-circle-fill:before{content:\"\\ef68\"}.ri-money-euro-circle-line:before{content:\"\\ef69\"}.ri-money-pound-box-fill:before{content:\"\\ef6a\"}.ri-money-pound-box-line:before{content:\"\\ef6b\"}.ri-money-pound-circle-fill:before{content:\"\\ef6c\"}.ri-money-pound-circle-line:before{content:\"\\ef6d\"}.ri-moon-clear-fill:before{content:\"\\ef6e\"}.ri-moon-clear-line:before{content:\"\\ef6f\"}.ri-moon-cloudy-fill:before{content:\"\\ef70\"}.ri-moon-cloudy-line:before{content:\"\\ef71\"}.ri-moon-fill:before{content:\"\\ef72\"}.ri-moon-foggy-fill:before{content:\"\\ef73\"}.ri-moon-foggy-line:before{content:\"\\ef74\"}.ri-moon-line:before{content:\"\\ef75\"}.ri-more-2-fill:before{content:\"\\ef76\"}.ri-more-2-line:before{content:\"\\ef77\"}.ri-more-fill:before{content:\"\\ef78\"}.ri-more-line:before{content:\"\\ef79\"}.ri-motorbike-fill:before{content:\"\\ef7a\"}.ri-motorbike-line:before{content:\"\\ef7b\"}.ri-mouse-fill:before{content:\"\\ef7c\"}.ri-mouse-line:before{content:\"\\ef7d\"}.ri-movie-2-fill:before{content:\"\\ef7e\"}.ri-movie-2-line:before{content:\"\\ef7f\"}.ri-movie-fill:before{content:\"\\ef80\"}.ri-movie-line:before{content:\"\\ef81\"}.ri-music-2-fill:before{content:\"\\ef82\"}.ri-music-2-line:before{content:\"\\ef83\"}.ri-music-fill:before{content:\"\\ef84\"}.ri-music-line:before{content:\"\\ef85\"}.ri-mv-fill:before{content:\"\\ef86\"}.ri-mv-line:before{content:\"\\ef87\"}.ri-navigation-fill:before{content:\"\\ef88\"}.ri-navigation-line:before{content:\"\\ef89\"}.ri-netease-cloud-music-fill:before{content:\"\\ef8a\"}.ri-netease-cloud-music-line:before{content:\"\\ef8b\"}.ri-netflix-fill:before{content:\"\\ef8c\"}.ri-netflix-line:before{content:\"\\ef8d\"}.ri-newspaper-fill:before{content:\"\\ef8e\"}.ri-newspaper-line:before{content:\"\\ef8f\"}.ri-node-tree:before{content:\"\\ef90\"}.ri-notification-2-fill:before{content:\"\\ef91\"}.ri-notification-2-line:before{content:\"\\ef92\"}.ri-notification-3-fill:before{content:\"\\ef93\"}.ri-notification-3-line:before{content:\"\\ef94\"}.ri-notification-4-fill:before{content:\"\\ef95\"}.ri-notification-4-line:before{content:\"\\ef96\"}.ri-notification-badge-fill:before{content:\"\\ef97\"}.ri-notification-badge-line:before{content:\"\\ef98\"}.ri-notification-fill:before{content:\"\\ef99\"}.ri-notification-line:before{content:\"\\ef9a\"}.ri-notification-off-fill:before{content:\"\\ef9b\"}.ri-notification-off-line:before{content:\"\\ef9c\"}.ri-npmjs-fill:before{content:\"\\ef9d\"}.ri-npmjs-line:before{content:\"\\ef9e\"}.ri-number-0:before{content:\"\\ef9f\"}.ri-number-1:before{content:\"\\efa0\"}.ri-number-2:before{content:\"\\efa1\"}.ri-number-3:before{content:\"\\efa2\"}.ri-number-4:before{content:\"\\efa3\"}.ri-number-5:before{content:\"\\efa4\"}.ri-number-6:before{content:\"\\efa5\"}.ri-number-7:before{content:\"\\efa6\"}.ri-number-8:before{content:\"\\efa7\"}.ri-number-9:before{content:\"\\efa8\"}.ri-numbers-fill:before{content:\"\\efa9\"}.ri-numbers-line:before{content:\"\\efaa\"}.ri-nurse-fill:before{content:\"\\efab\"}.ri-nurse-line:before{content:\"\\efac\"}.ri-oil-fill:before{content:\"\\efad\"}.ri-oil-line:before{content:\"\\efae\"}.ri-omega:before{content:\"\\efaf\"}.ri-open-arm-fill:before{content:\"\\efb0\"}.ri-open-arm-line:before{content:\"\\efb1\"}.ri-open-source-fill:before{content:\"\\efb2\"}.ri-open-source-line:before{content:\"\\efb3\"}.ri-opera-fill:before{content:\"\\efb4\"}.ri-opera-line:before{content:\"\\efb5\"}.ri-order-play-fill:before{content:\"\\efb6\"}.ri-order-play-line:before{content:\"\\efb7\"}.ri-organization-chart:before{content:\"\\efb8\"}.ri-outlet-2-fill:before{content:\"\\efb9\"}.ri-outlet-2-line:before{content:\"\\efba\"}.ri-outlet-fill:before{content:\"\\efbb\"}.ri-outlet-line:before{content:\"\\efbc\"}.ri-page-separator:before{content:\"\\efbd\"}.ri-pages-fill:before{content:\"\\efbe\"}.ri-pages-line:before{content:\"\\efbf\"}.ri-paint-brush-fill:before{content:\"\\efc0\"}.ri-paint-brush-line:before{content:\"\\efc1\"}.ri-paint-fill:before{content:\"\\efc2\"}.ri-paint-line:before{content:\"\\efc3\"}.ri-palette-fill:before{content:\"\\efc4\"}.ri-palette-line:before{content:\"\\efc5\"}.ri-pantone-fill:before{content:\"\\efc6\"}.ri-pantone-line:before{content:\"\\efc7\"}.ri-paragraph:before{content:\"\\efc8\"}.ri-parent-fill:before{content:\"\\efc9\"}.ri-parent-line:before{content:\"\\efca\"}.ri-parentheses-fill:before{content:\"\\efcb\"}.ri-parentheses-line:before{content:\"\\efcc\"}.ri-parking-box-fill:before{content:\"\\efcd\"}.ri-parking-box-line:before{content:\"\\efce\"}.ri-parking-fill:before{content:\"\\efcf\"}.ri-parking-line:before{content:\"\\efd0\"}.ri-passport-fill:before{content:\"\\efd1\"}.ri-passport-line:before{content:\"\\efd2\"}.ri-patreon-fill:before{content:\"\\efd3\"}.ri-patreon-line:before{content:\"\\efd4\"}.ri-pause-circle-fill:before{content:\"\\efd5\"}.ri-pause-circle-line:before{content:\"\\efd6\"}.ri-pause-fill:before{content:\"\\efd7\"}.ri-pause-line:before{content:\"\\efd8\"}.ri-pause-mini-fill:before{content:\"\\efd9\"}.ri-pause-mini-line:before{content:\"\\efda\"}.ri-paypal-fill:before{content:\"\\efdb\"}.ri-paypal-line:before{content:\"\\efdc\"}.ri-pen-nib-fill:before{content:\"\\efdd\"}.ri-pen-nib-line:before{content:\"\\efde\"}.ri-pencil-fill:before{content:\"\\efdf\"}.ri-pencil-line:before{content:\"\\efe0\"}.ri-pencil-ruler-2-fill:before{content:\"\\efe1\"}.ri-pencil-ruler-2-line:before{content:\"\\efe2\"}.ri-pencil-ruler-fill:before{content:\"\\efe3\"}.ri-pencil-ruler-line:before{content:\"\\efe4\"}.ri-percent-fill:before{content:\"\\efe5\"}.ri-percent-line:before{content:\"\\efe6\"}.ri-phone-camera-fill:before{content:\"\\efe7\"}.ri-phone-camera-line:before{content:\"\\efe8\"}.ri-phone-fill:before{content:\"\\efe9\"}.ri-phone-find-fill:before{content:\"\\efea\"}.ri-phone-find-line:before{content:\"\\efeb\"}.ri-phone-line:before{content:\"\\efec\"}.ri-phone-lock-fill:before{content:\"\\efed\"}.ri-phone-lock-line:before{content:\"\\efee\"}.ri-picture-in-picture-2-fill:before{content:\"\\efef\"}.ri-picture-in-picture-2-line:before{content:\"\\eff0\"}.ri-picture-in-picture-exit-fill:before{content:\"\\eff1\"}.ri-picture-in-picture-exit-line:before{content:\"\\eff2\"}.ri-picture-in-picture-fill:before{content:\"\\eff3\"}.ri-picture-in-picture-line:before{content:\"\\eff4\"}.ri-pie-chart-2-fill:before{content:\"\\eff5\"}.ri-pie-chart-2-line:before{content:\"\\eff6\"}.ri-pie-chart-box-fill:before{content:\"\\eff7\"}.ri-pie-chart-box-line:before{content:\"\\eff8\"}.ri-pie-chart-fill:before{content:\"\\eff9\"}.ri-pie-chart-line:before{content:\"\\effa\"}.ri-pin-distance-fill:before{content:\"\\effb\"}.ri-pin-distance-line:before{content:\"\\effc\"}.ri-ping-pong-fill:before{content:\"\\effd\"}.ri-ping-pong-line:before{content:\"\\effe\"}.ri-pinterest-fill:before{content:\"\\efff\"}.ri-pinterest-line:before{content:\"\\f000\"}.ri-pinyin-input:before{content:\"\\f001\"}.ri-pixelfed-fill:before{content:\"\\f002\"}.ri-pixelfed-line:before{content:\"\\f003\"}.ri-plane-fill:before{content:\"\\f004\"}.ri-plane-line:before{content:\"\\f005\"}.ri-plant-fill:before{content:\"\\f006\"}.ri-plant-line:before{content:\"\\f007\"}.ri-play-circle-fill:before{content:\"\\f008\"}.ri-play-circle-line:before{content:\"\\f009\"}.ri-play-fill:before{content:\"\\f00a\"}.ri-play-line:before{content:\"\\f00b\"}.ri-play-list-2-fill:before{content:\"\\f00c\"}.ri-play-list-2-line:before{content:\"\\f00d\"}.ri-play-list-add-fill:before{content:\"\\f00e\"}.ri-play-list-add-line:before{content:\"\\f00f\"}.ri-play-list-fill:before{content:\"\\f010\"}.ri-play-list-line:before{content:\"\\f011\"}.ri-play-mini-fill:before{content:\"\\f012\"}.ri-play-mini-line:before{content:\"\\f013\"}.ri-playstation-fill:before{content:\"\\f014\"}.ri-playstation-line:before{content:\"\\f015\"}.ri-plug-2-fill:before{content:\"\\f016\"}.ri-plug-2-line:before{content:\"\\f017\"}.ri-plug-fill:before{content:\"\\f018\"}.ri-plug-line:before{content:\"\\f019\"}.ri-polaroid-2-fill:before{content:\"\\f01a\"}.ri-polaroid-2-line:before{content:\"\\f01b\"}.ri-polaroid-fill:before{content:\"\\f01c\"}.ri-polaroid-line:before{content:\"\\f01d\"}.ri-police-car-fill:before{content:\"\\f01e\"}.ri-police-car-line:before{content:\"\\f01f\"}.ri-price-tag-2-fill:before{content:\"\\f020\"}.ri-price-tag-2-line:before{content:\"\\f021\"}.ri-price-tag-3-fill:before{content:\"\\f022\"}.ri-price-tag-3-line:before{content:\"\\f023\"}.ri-price-tag-fill:before{content:\"\\f024\"}.ri-price-tag-line:before{content:\"\\f025\"}.ri-printer-cloud-fill:before{content:\"\\f026\"}.ri-printer-cloud-line:before{content:\"\\f027\"}.ri-printer-fill:before{content:\"\\f028\"}.ri-printer-line:before{content:\"\\f029\"}.ri-product-hunt-fill:before{content:\"\\f02a\"}.ri-product-hunt-line:before{content:\"\\f02b\"}.ri-profile-fill:before{content:\"\\f02c\"}.ri-profile-line:before{content:\"\\f02d\"}.ri-projector-2-fill:before{content:\"\\f02e\"}.ri-projector-2-line:before{content:\"\\f02f\"}.ri-projector-fill:before{content:\"\\f030\"}.ri-projector-line:before{content:\"\\f031\"}.ri-psychotherapy-fill:before{content:\"\\f032\"}.ri-psychotherapy-line:before{content:\"\\f033\"}.ri-pulse-fill:before{content:\"\\f034\"}.ri-pulse-line:before{content:\"\\f035\"}.ri-pushpin-2-fill:before{content:\"\\f036\"}.ri-pushpin-2-line:before{content:\"\\f037\"}.ri-pushpin-fill:before{content:\"\\f038\"}.ri-pushpin-line:before{content:\"\\f039\"}.ri-qq-fill:before{content:\"\\f03a\"}.ri-qq-line:before{content:\"\\f03b\"}.ri-qr-code-fill:before{content:\"\\f03c\"}.ri-qr-code-line:before{content:\"\\f03d\"}.ri-qr-scan-2-fill:before{content:\"\\f03e\"}.ri-qr-scan-2-line:before{content:\"\\f03f\"}.ri-qr-scan-fill:before{content:\"\\f040\"}.ri-qr-scan-line:before{content:\"\\f041\"}.ri-question-answer-fill:before{content:\"\\f042\"}.ri-question-answer-line:before{content:\"\\f043\"}.ri-question-fill:before{content:\"\\f044\"}.ri-question-line:before{content:\"\\f045\"}.ri-question-mark:before{content:\"\\f046\"}.ri-questionnaire-fill:before{content:\"\\f047\"}.ri-questionnaire-line:before{content:\"\\f048\"}.ri-quill-pen-fill:before{content:\"\\f049\"}.ri-quill-pen-line:before{content:\"\\f04a\"}.ri-radar-fill:before{content:\"\\f04b\"}.ri-radar-line:before{content:\"\\f04c\"}.ri-radio-2-fill:before{content:\"\\f04d\"}.ri-radio-2-line:before{content:\"\\f04e\"}.ri-radio-button-fill:before{content:\"\\f04f\"}.ri-radio-button-line:before{content:\"\\f050\"}.ri-radio-fill:before{content:\"\\f051\"}.ri-radio-line:before{content:\"\\f052\"}.ri-devsblink-fill:before{content:\"\\f053\"}.ri-devsblink-line:before{content:\"\\f054\"}.ri-rainy-fill:before{content:\"\\f055\"}.ri-rainy-line:before{content:\"\\f056\"}.ri-reactjs-fill:before{content:\"\\f057\"}.ri-reactjs-line:before{content:\"\\f058\"}.ri-record-circle-fill:before{content:\"\\f059\"}.ri-record-circle-line:before{content:\"\\f05a\"}.ri-record-mail-fill:before{content:\"\\f05b\"}.ri-record-mail-line:before{content:\"\\f05c\"}.ri-recycle-fill:before{content:\"\\f05d\"}.ri-recycle-line:before{content:\"\\f05e\"}.ri-red-packet-fill:before{content:\"\\f05f\"}.ri-red-packet-line:before{content:\"\\f060\"}.ri-reddit-fill:before{content:\"\\f061\"}.ri-reddit-line:before{content:\"\\f062\"}.ri-refresh-fill:before{content:\"\\f063\"}.ri-refresh-line:before{content:\"\\f064\"}.ri-refund-2-fill:before{content:\"\\f065\"}.ri-refund-2-line:before{content:\"\\f066\"}.ri-refund-fill:before{content:\"\\f067\"}.ri-refund-line:before{content:\"\\f068\"}.ri-registered-fill:before{content:\"\\f069\"}.ri-registered-line:before{content:\"\\f06a\"}.ri-remixicon-fill:before{content:\"\\f06b\"}.ri-remixicon-line:before{content:\"\\f06c\"}.ri-remote-control-2-fill:before{content:\"\\f06d\"}.ri-remote-control-2-line:before{content:\"\\f06e\"}.ri-remote-control-fill:before{content:\"\\f06f\"}.ri-remote-control-line:before{content:\"\\f070\"}.ri-repeat-2-fill:before{content:\"\\f071\"}.ri-repeat-2-line:before{content:\"\\f072\"}.ri-repeat-fill:before{content:\"\\f073\"}.ri-repeat-line:before{content:\"\\f074\"}.ri-repeat-one-fill:before{content:\"\\f075\"}.ri-repeat-one-line:before{content:\"\\f076\"}.ri-reply-all-fill:before{content:\"\\f077\"}.ri-reply-all-line:before{content:\"\\f078\"}.ri-reply-fill:before{content:\"\\f079\"}.ri-reply-line:before{content:\"\\f07a\"}.ri-reserved-fill:before{content:\"\\f07b\"}.ri-reserved-line:before{content:\"\\f07c\"}.ri-rest-time-fill:before{content:\"\\f07d\"}.ri-rest-time-line:before{content:\"\\f07e\"}.ri-restart-fill:before{content:\"\\f07f\"}.ri-restart-line:before{content:\"\\f080\"}.ri-restaurant-2-fill:before{content:\"\\f081\"}.ri-restaurant-2-line:before{content:\"\\f082\"}.ri-restaurant-fill:before{content:\"\\f083\"}.ri-restaurant-line:before{content:\"\\f084\"}.ri-rewind-fill:before{content:\"\\f085\"}.ri-rewind-line:before{content:\"\\f086\"}.ri-rewind-mini-fill:before{content:\"\\f087\"}.ri-rewind-mini-line:before{content:\"\\f088\"}.ri-rhythm-fill:before{content:\"\\f089\"}.ri-rhythm-line:before{content:\"\\f08a\"}.ri-riding-fill:before{content:\"\\f08b\"}.ri-riding-line:before{content:\"\\f08c\"}.ri-road-map-fill:before{content:\"\\f08d\"}.ri-road-map-line:before{content:\"\\f08e\"}.ri-roadster-fill:before{content:\"\\f08f\"}.ri-roadster-line:before{content:\"\\f090\"}.ri-robot-fill:before{content:\"\\f091\"}.ri-robot-line:before{content:\"\\f092\"}.ri-rocket-2-fill:before{content:\"\\f093\"}.ri-rocket-2-line:before{content:\"\\f094\"}.ri-rocket-fill:before{content:\"\\f095\"}.ri-rocket-line:before{content:\"\\f096\"}.ri-rotate-lock-fill:before{content:\"\\f097\"}.ri-rotate-lock-line:before{content:\"\\f098\"}.ri-rounded-corner:before{content:\"\\f099\"}.ri-route-fill:before{content:\"\\f09a\"}.ri-route-line:before{content:\"\\f09b\"}.ri-router-fill:before{content:\"\\f09c\"}.ri-router-line:before{content:\"\\f09d\"}.ri-rss-fill:before{content:\"\\f09e\"}.ri-rss-line:before{content:\"\\f09f\"}.ri-ruler-2-fill:before{content:\"\\f0a0\"}.ri-ruler-2-line:before{content:\"\\f0a1\"}.ri-ruler-fill:before{content:\"\\f0a2\"}.ri-ruler-line:before{content:\"\\f0a3\"}.ri-run-fill:before{content:\"\\f0a4\"}.ri-run-line:before{content:\"\\f0a5\"}.ri-safari-fill:before{content:\"\\f0a6\"}.ri-safari-line:before{content:\"\\f0a7\"}.ri-safe-2-fill:before{content:\"\\f0a8\"}.ri-safe-2-line:before{content:\"\\f0a9\"}.ri-safe-fill:before{content:\"\\f0aa\"}.ri-safe-line:before{content:\"\\f0ab\"}.ri-sailboat-fill:before{content:\"\\f0ac\"}.ri-sailboat-line:before{content:\"\\f0ad\"}.ri-save-2-fill:before{content:\"\\f0ae\"}.ri-save-2-line:before{content:\"\\f0af\"}.ri-save-3-fill:before{content:\"\\f0b0\"}.ri-save-3-line:before{content:\"\\f0b1\"}.ri-save-fill:before{content:\"\\f0b2\"}.ri-save-line:before{content:\"\\f0b3\"}.ri-scales-2-fill:before{content:\"\\f0b4\"}.ri-scales-2-line:before{content:\"\\f0b5\"}.ri-scales-3-fill:before{content:\"\\f0b6\"}.ri-scales-3-line:before{content:\"\\f0b7\"}.ri-scales-fill:before{content:\"\\f0b8\"}.ri-scales-line:before{content:\"\\f0b9\"}.ri-scan-2-fill:before{content:\"\\f0ba\"}.ri-scan-2-line:before{content:\"\\f0bb\"}.ri-scan-fill:before{content:\"\\f0bc\"}.ri-scan-line:before{content:\"\\f0bd\"}.ri-scissors-2-fill:before{content:\"\\f0be\"}.ri-scissors-2-line:before{content:\"\\f0bf\"}.ri-scissors-cut-fill:before{content:\"\\f0c0\"}.ri-scissors-cut-line:before{content:\"\\f0c1\"}.ri-scissors-fill:before{content:\"\\f0c2\"}.ri-scissors-line:before{content:\"\\f0c3\"}.ri-screenshot-2-fill:before{content:\"\\f0c4\"}.ri-screenshot-2-line:before{content:\"\\f0c5\"}.ri-screenshot-fill:before{content:\"\\f0c6\"}.ri-screenshot-line:before{content:\"\\f0c7\"}.ri-sd-card-fill:before{content:\"\\f0c8\"}.ri-sd-card-line:before{content:\"\\f0c9\"}.ri-sd-card-mini-fill:before{content:\"\\f0ca\"}.ri-sd-card-mini-line:before{content:\"\\f0cb\"}.ri-search-2-fill:before{content:\"\\f0cc\"}.ri-search-2-line:before{content:\"\\f0cd\"}.ri-search-eye-fill:before{content:\"\\f0ce\"}.ri-search-eye-line:before{content:\"\\f0cf\"}.ri-search-fill:before{content:\"\\f0d0\"}.ri-search-line:before{content:\"\\f0d1\"}.ri-secure-payment-fill:before{content:\"\\f0d2\"}.ri-secure-payment-line:before{content:\"\\f0d3\"}.ri-seedling-fill:before{content:\"\\f0d4\"}.ri-seedling-line:before{content:\"\\f0d5\"}.ri-send-backward:before{content:\"\\f0d6\"}.ri-send-plane-2-fill:before{content:\"\\f0d7\"}.ri-send-plane-2-line:before{content:\"\\f0d8\"}.ri-send-plane-fill:before{content:\"\\f0d9\"}.ri-send-plane-line:before{content:\"\\f0da\"}.ri-send-to-back:before{content:\"\\f0db\"}.ri-sensor-fill:before{content:\"\\f0dc\"}.ri-sensor-line:before{content:\"\\f0dd\"}.ri-separator:before{content:\"\\f0de\"}.ri-server-fill:before{content:\"\\f0df\"}.ri-server-line:before{content:\"\\f0e0\"}.ri-service-fill:before{content:\"\\f0e1\"}.ri-service-line:before{content:\"\\f0e2\"}.ri-settings-2-fill:before{content:\"\\f0e3\"}.ri-settings-2-line:before{content:\"\\f0e4\"}.ri-settings-3-fill:before{content:\"\\f0e5\"}.ri-settings-3-line:before{content:\"\\f0e6\"}.ri-settings-4-fill:before{content:\"\\f0e7\"}.ri-settings-4-line:before{content:\"\\f0e8\"}.ri-settings-5-fill:before{content:\"\\f0e9\"}.ri-settings-5-line:before{content:\"\\f0ea\"}.ri-settings-6-fill:before{content:\"\\f0eb\"}.ri-settings-6-line:before{content:\"\\f0ec\"}.ri-settings-fill:before{content:\"\\f0ed\"}.ri-settings-line:before{content:\"\\f0ee\"}.ri-shape-2-fill:before{content:\"\\f0ef\"}.ri-shape-2-line:before{content:\"\\f0f0\"}.ri-shape-fill:before{content:\"\\f0f1\"}.ri-shape-line:before{content:\"\\f0f2\"}.ri-share-box-fill:before{content:\"\\f0f3\"}.ri-share-box-line:before{content:\"\\f0f4\"}.ri-share-circle-fill:before{content:\"\\f0f5\"}.ri-share-circle-line:before{content:\"\\f0f6\"}.ri-share-fill:before{content:\"\\f0f7\"}.ri-share-forward-2-fill:before{content:\"\\f0f8\"}.ri-share-forward-2-line:before{content:\"\\f0f9\"}.ri-share-forward-box-fill:before{content:\"\\f0fa\"}.ri-share-forward-box-line:before{content:\"\\f0fb\"}.ri-share-forward-fill:before{content:\"\\f0fc\"}.ri-share-forward-line:before{content:\"\\f0fd\"}.ri-share-line:before{content:\"\\f0fe\"}.ri-shield-check-fill:before{content:\"\\f0ff\"}.ri-shield-check-line:before{content:\"\\f100\"}.ri-shield-cross-fill:before{content:\"\\f101\"}.ri-shield-cross-line:before{content:\"\\f102\"}.ri-shield-fill:before{content:\"\\f103\"}.ri-shield-flash-fill:before{content:\"\\f104\"}.ri-shield-flash-line:before{content:\"\\f105\"}.ri-shield-keyhole-fill:before{content:\"\\f106\"}.ri-shield-keyhole-line:before{content:\"\\f107\"}.ri-shield-line:before{content:\"\\f108\"}.ri-shield-star-fill:before{content:\"\\f109\"}.ri-shield-star-line:before{content:\"\\f10a\"}.ri-shield-user-fill:before{content:\"\\f10b\"}.ri-shield-user-line:before{content:\"\\f10c\"}.ri-ship-2-fill:before{content:\"\\f10d\"}.ri-ship-2-line:before{content:\"\\f10e\"}.ri-ship-fill:before{content:\"\\f10f\"}.ri-ship-line:before{content:\"\\f110\"}.ri-shirt-fill:before{content:\"\\f111\"}.ri-shirt-line:before{content:\"\\f112\"}.ri-shopping-bag-2-fill:before{content:\"\\f113\"}.ri-shopping-bag-2-line:before{content:\"\\f114\"}.ri-shopping-bag-3-fill:before{content:\"\\f115\"}.ri-shopping-bag-3-line:before{content:\"\\f116\"}.ri-shopping-bag-fill:before{content:\"\\f117\"}.ri-shopping-bag-line:before{content:\"\\f118\"}.ri-shopping-basket-2-fill:before{content:\"\\f119\"}.ri-shopping-basket-2-line:before{content:\"\\f11a\"}.ri-shopping-basket-fill:before{content:\"\\f11b\"}.ri-shopping-basket-line:before{content:\"\\f11c\"}.ri-shopping-cart-2-fill:before{content:\"\\f11d\"}.ri-shopping-cart-2-line:before{content:\"\\f11e\"}.ri-shopping-cart-fill:before{content:\"\\f11f\"}.ri-shopping-cart-line:before{content:\"\\f120\"}.ri-showers-fill:before{content:\"\\f121\"}.ri-showers-line:before{content:\"\\f122\"}.ri-shuffle-fill:before{content:\"\\f123\"}.ri-shuffle-line:before{content:\"\\f124\"}.ri-shut-down-fill:before{content:\"\\f125\"}.ri-shut-down-line:before{content:\"\\f126\"}.ri-side-bar-fill:before{content:\"\\f127\"}.ri-side-bar-line:before{content:\"\\f128\"}.ri-signal-tower-fill:before{content:\"\\f129\"}.ri-signal-tower-line:before{content:\"\\f12a\"}.ri-signal-wifi-1-fill:before{content:\"\\f12b\"}.ri-signal-wifi-1-line:before{content:\"\\f12c\"}.ri-signal-wifi-2-fill:before{content:\"\\f12d\"}.ri-signal-wifi-2-line:before{content:\"\\f12e\"}.ri-signal-wifi-3-fill:before{content:\"\\f12f\"}.ri-signal-wifi-3-line:before{content:\"\\f130\"}.ri-signal-wifi-error-fill:before{content:\"\\f131\"}.ri-signal-wifi-error-line:before{content:\"\\f132\"}.ri-signal-wifi-fill:before{content:\"\\f133\"}.ri-signal-wifi-line:before{content:\"\\f134\"}.ri-signal-wifi-off-fill:before{content:\"\\f135\"}.ri-signal-wifi-off-line:before{content:\"\\f136\"}.ri-sim-card-2-fill:before{content:\"\\f137\"}.ri-sim-card-2-line:before{content:\"\\f138\"}.ri-sim-card-fill:before{content:\"\\f139\"}.ri-sim-card-line:before{content:\"\\f13a\"}.ri-single-quotes-l:before{content:\"\\f13b\"}.ri-single-quotes-r:before{content:\"\\f13c\"}.ri-sip-fill:before{content:\"\\f13d\"}.ri-sip-line:before{content:\"\\f13e\"}.ri-skip-back-fill:before{content:\"\\f13f\"}.ri-skip-back-line:before{content:\"\\f140\"}.ri-skip-back-mini-fill:before{content:\"\\f141\"}.ri-skip-back-mini-line:before{content:\"\\f142\"}.ri-skip-forward-fill:before{content:\"\\f143\"}.ri-skip-forward-line:before{content:\"\\f144\"}.ri-skip-forward-mini-fill:before{content:\"\\f145\"}.ri-skip-forward-mini-line:before{content:\"\\f146\"}.ri-skull-2-fill:before{content:\"\\f147\"}.ri-skull-2-line:before{content:\"\\f148\"}.ri-skull-fill:before{content:\"\\f149\"}.ri-skull-line:before{content:\"\\f14a\"}.ri-skype-fill:before{content:\"\\f14b\"}.ri-skype-line:before{content:\"\\f14c\"}.ri-slack-fill:before{content:\"\\f14d\"}.ri-slack-line:before{content:\"\\f14e\"}.ri-slice-fill:before{content:\"\\f14f\"}.ri-slice-line:before{content:\"\\f150\"}.ri-slideshow-2-fill:before{content:\"\\f151\"}.ri-slideshow-2-line:before{content:\"\\f152\"}.ri-slideshow-3-fill:before{content:\"\\f153\"}.ri-slideshow-3-line:before{content:\"\\f154\"}.ri-slideshow-4-fill:before{content:\"\\f155\"}.ri-slideshow-4-line:before{content:\"\\f156\"}.ri-slideshow-fill:before{content:\"\\f157\"}.ri-slideshow-line:before{content:\"\\f158\"}.ri-smartphone-fill:before{content:\"\\f159\"}.ri-smartphone-line:before{content:\"\\f15a\"}.ri-snapchat-fill:before{content:\"\\f15b\"}.ri-snapchat-line:before{content:\"\\f15c\"}.ri-snowy-fill:before{content:\"\\f15d\"}.ri-snowy-line:before{content:\"\\f15e\"}.ri-sort-asc:before{content:\"\\f15f\"}.ri-sort-desc:before{content:\"\\f160\"}.ri-sound-module-fill:before{content:\"\\f161\"}.ri-sound-module-line:before{content:\"\\f162\"}.ri-soundcloud-fill:before{content:\"\\f163\"}.ri-soundcloud-line:before{content:\"\\f164\"}.ri-space-ship-fill:before{content:\"\\f165\"}.ri-space-ship-line:before{content:\"\\f166\"}.ri-space:before{content:\"\\f167\"}.ri-spam-2-fill:before{content:\"\\f168\"}.ri-spam-2-line:before{content:\"\\f169\"}.ri-spam-3-fill:before{content:\"\\f16a\"}.ri-spam-3-line:before{content:\"\\f16b\"}.ri-spam-fill:before{content:\"\\f16c\"}.ri-spam-line:before{content:\"\\f16d\"}.ri-speaker-2-fill:before{content:\"\\f16e\"}.ri-speaker-2-line:before{content:\"\\f16f\"}.ri-speaker-3-fill:before{content:\"\\f170\"}.ri-speaker-3-line:before{content:\"\\f171\"}.ri-speaker-fill:before{content:\"\\f172\"}.ri-speaker-line:before{content:\"\\f173\"}.ri-spectrum-fill:before{content:\"\\f174\"}.ri-spectrum-line:before{content:\"\\f175\"}.ri-speed-fill:before{content:\"\\f176\"}.ri-speed-line:before{content:\"\\f177\"}.ri-speed-mini-fill:before{content:\"\\f178\"}.ri-speed-mini-line:before{content:\"\\f179\"}.ri-split-cells-horizontal:before{content:\"\\f17a\"}.ri-split-cells-vertical:before{content:\"\\f17b\"}.ri-spotify-fill:before{content:\"\\f17c\"}.ri-spotify-line:before{content:\"\\f17d\"}.ri-spy-fill:before{content:\"\\f17e\"}.ri-spy-line:before{content:\"\\f17f\"}.ri-stack-fill:before{content:\"\\f180\"}.ri-stack-line:before{content:\"\\f181\"}.ri-stack-overflow-fill:before{content:\"\\f182\"}.ri-stack-overflow-line:before{content:\"\\f183\"}.ri-stackshare-fill:before{content:\"\\f184\"}.ri-stackshare-line:before{content:\"\\f185\"}.ri-star-fill:before{content:\"\\f186\"}.ri-star-half-fill:before{content:\"\\f187\"}.ri-star-half-line:before{content:\"\\f188\"}.ri-star-half-s-fill:before{content:\"\\f189\"}.ri-star-half-s-line:before{content:\"\\f18a\"}.ri-star-line:before{content:\"\\f18b\"}.ri-star-s-fill:before{content:\"\\f18c\"}.ri-star-s-line:before{content:\"\\f18d\"}.ri-star-smile-fill:before{content:\"\\f18e\"}.ri-star-smile-line:before{content:\"\\f18f\"}.ri-steam-fill:before{content:\"\\f190\"}.ri-steam-line:before{content:\"\\f191\"}.ri-steering-2-fill:before{content:\"\\f192\"}.ri-steering-2-line:before{content:\"\\f193\"}.ri-steering-fill:before{content:\"\\f194\"}.ri-steering-line:before{content:\"\\f195\"}.ri-stethoscope-fill:before{content:\"\\f196\"}.ri-stethoscope-line:before{content:\"\\f197\"}.ri-sticky-note-2-fill:before{content:\"\\f198\"}.ri-sticky-note-2-line:before{content:\"\\f199\"}.ri-sticky-note-fill:before{content:\"\\f19a\"}.ri-sticky-note-line:before{content:\"\\f19b\"}.ri-stock-fill:before{content:\"\\f19c\"}.ri-stock-line:before{content:\"\\f19d\"}.ri-stop-circle-fill:before{content:\"\\f19e\"}.ri-stop-circle-line:before{content:\"\\f19f\"}.ri-stop-fill:before{content:\"\\f1a0\"}.ri-stop-line:before{content:\"\\f1a1\"}.ri-stop-mini-fill:before{content:\"\\f1a2\"}.ri-stop-mini-line:before{content:\"\\f1a3\"}.ri-store-2-fill:before{content:\"\\f1a4\"}.ri-store-2-line:before{content:\"\\f1a5\"}.ri-store-3-fill:before{content:\"\\f1a6\"}.ri-store-3-line:before{content:\"\\f1a7\"}.ri-store-fill:before{content:\"\\f1a8\"}.ri-store-line:before{content:\"\\f1a9\"}.ri-strikethrough-2:before{content:\"\\f1aa\"}.ri-strikethrough:before{content:\"\\f1ab\"}.ri-subscript-2:before{content:\"\\f1ac\"}.ri-subscript:before{content:\"\\f1ad\"}.ri-subtract-fill:before{content:\"\\f1ae\"}.ri-subtract-line:before{content:\"\\f1af\"}.ri-subway-fill:before{content:\"\\f1b0\"}.ri-subway-line:before{content:\"\\f1b1\"}.ri-subway-wifi-fill:before{content:\"\\f1b2\"}.ri-subway-wifi-line:before{content:\"\\f1b3\"}.ri-suitcase-2-fill:before{content:\"\\f1b4\"}.ri-suitcase-2-line:before{content:\"\\f1b5\"}.ri-suitcase-3-fill:before{content:\"\\f1b6\"}.ri-suitcase-3-line:before{content:\"\\f1b7\"}.ri-suitcase-fill:before{content:\"\\f1b8\"}.ri-suitcase-line:before{content:\"\\f1b9\"}.ri-sun-cloudy-fill:before{content:\"\\f1ba\"}.ri-sun-cloudy-line:before{content:\"\\f1bb\"}.ri-sun-fill:before{content:\"\\f1bc\"}.ri-sun-foggy-fill:before{content:\"\\f1bd\"}.ri-sun-foggy-line:before{content:\"\\f1be\"}.ri-sun-line:before{content:\"\\f1bf\"}.ri-superscript-2:before{content:\"\\f1c0\"}.ri-superscript:before{content:\"\\f1c1\"}.ri-surgical-mask-fill:before{content:\"\\f1c2\"}.ri-surgical-mask-line:before{content:\"\\f1c3\"}.ri-surround-sound-fill:before{content:\"\\f1c4\"}.ri-surround-sound-line:before{content:\"\\f1c5\"}.ri-survey-fill:before{content:\"\\f1c6\"}.ri-survey-line:before{content:\"\\f1c7\"}.ri-swap-box-fill:before{content:\"\\f1c8\"}.ri-swap-box-line:before{content:\"\\f1c9\"}.ri-swap-fill:before{content:\"\\f1ca\"}.ri-swap-line:before{content:\"\\f1cb\"}.ri-switch-fill:before{content:\"\\f1cc\"}.ri-switch-line:before{content:\"\\f1cd\"}.ri-sword-fill:before{content:\"\\f1ce\"}.ri-sword-line:before{content:\"\\f1cf\"}.ri-syringe-fill:before{content:\"\\f1d0\"}.ri-syringe-line:before{content:\"\\f1d1\"}.ri-t-box-fill:before{content:\"\\f1d2\"}.ri-t-box-line:before{content:\"\\f1d3\"}.ri-t-shirt-2-fill:before{content:\"\\f1d4\"}.ri-t-shirt-2-line:before{content:\"\\f1d5\"}.ri-t-shirt-air-fill:before{content:\"\\f1d6\"}.ri-t-shirt-air-line:before{content:\"\\f1d7\"}.ri-t-shirt-fill:before{content:\"\\f1d8\"}.ri-t-shirt-line:before{content:\"\\f1d9\"}.ri-table-2:before{content:\"\\f1da\"}.ri-table-alt-fill:before{content:\"\\f1db\"}.ri-table-alt-line:before{content:\"\\f1dc\"}.ri-table-fill:before{content:\"\\f1dd\"}.ri-table-line:before{content:\"\\f1de\"}.ri-tablet-fill:before{content:\"\\f1df\"}.ri-tablet-line:before{content:\"\\f1e0\"}.ri-takeaway-fill:before{content:\"\\f1e1\"}.ri-takeaway-line:before{content:\"\\f1e2\"}.ri-taobao-fill:before{content:\"\\f1e3\"}.ri-taobao-line:before{content:\"\\f1e4\"}.ri-tape-fill:before{content:\"\\f1e5\"}.ri-tape-line:before{content:\"\\f1e6\"}.ri-task-fill:before{content:\"\\f1e7\"}.ri-task-line:before{content:\"\\f1e8\"}.ri-taxi-fill:before{content:\"\\f1e9\"}.ri-taxi-line:before{content:\"\\f1ea\"}.ri-taxi-wifi-fill:before{content:\"\\f1eb\"}.ri-taxi-wifi-line:before{content:\"\\f1ec\"}.ri-team-fill:before{content:\"\\f1ed\"}.ri-team-line:before{content:\"\\f1ee\"}.ri-telegram-fill:before{content:\"\\f1ef\"}.ri-telegram-line:before{content:\"\\f1f0\"}.ri-temp-cold-fill:before{content:\"\\f1f1\"}.ri-temp-cold-line:before{content:\"\\f1f2\"}.ri-temp-hot-fill:before{content:\"\\f1f3\"}.ri-temp-hot-line:before{content:\"\\f1f4\"}.ri-terminal-box-fill:before{content:\"\\f1f5\"}.ri-terminal-box-line:before{content:\"\\f1f6\"}.ri-terminal-fill:before{content:\"\\f1f7\"}.ri-terminal-line:before{content:\"\\f1f8\"}.ri-terminal-window-fill:before{content:\"\\f1f9\"}.ri-terminal-window-line:before{content:\"\\f1fa\"}.ri-test-tube-fill:before{content:\"\\f1fb\"}.ri-test-tube-line:before{content:\"\\f1fc\"}.ri-text-direction-l:before{content:\"\\f1fd\"}.ri-text-direction-r:before{content:\"\\f1fe\"}.ri-text-spacing:before{content:\"\\f1ff\"}.ri-text-wrap:before{content:\"\\f200\"}.ri-text:before{content:\"\\f201\"}.ri-thermometer-fill:before{content:\"\\f202\"}.ri-thermometer-line:before{content:\"\\f203\"}.ri-thumb-down-fill:before{content:\"\\f204\"}.ri-thumb-down-line:before{content:\"\\f205\"}.ri-thumb-up-fill:before{content:\"\\f206\"}.ri-thumb-up-line:before{content:\"\\f207\"}.ri-thunderstorms-fill:before{content:\"\\f208\"}.ri-thunderstorms-line:before{content:\"\\f209\"}.ri-ticket-2-fill:before{content:\"\\f20a\"}.ri-ticket-2-line:before{content:\"\\f20b\"}.ri-ticket-fill:before{content:\"\\f20c\"}.ri-ticket-line:before{content:\"\\f20d\"}.ri-time-fill:before{content:\"\\f20e\"}.ri-time-line:before{content:\"\\f20f\"}.ri-timer-2-fill:before{content:\"\\f210\"}.ri-timer-2-line:before{content:\"\\f211\"}.ri-timer-fill:before{content:\"\\f212\"}.ri-timer-flash-fill:before{content:\"\\f213\"}.ri-timer-flash-line:before{content:\"\\f214\"}.ri-timer-line:before{content:\"\\f215\"}.ri-todo-fill:before{content:\"\\f216\"}.ri-todo-line:before{content:\"\\f217\"}.ri-toggle-fill:before{content:\"\\f218\"}.ri-toggle-line:before{content:\"\\f219\"}.ri-tools-fill:before{content:\"\\f21a\"}.ri-tools-line:before{content:\"\\f21b\"}.ri-tornado-fill:before{content:\"\\f21c\"}.ri-tornado-line:before{content:\"\\f21d\"}.ri-trademark-fill:before{content:\"\\f21e\"}.ri-trademark-line:before{content:\"\\f21f\"}.ri-traffic-light-fill:before{content:\"\\f220\"}.ri-traffic-light-line:before{content:\"\\f221\"}.ri-train-fill:before{content:\"\\f222\"}.ri-train-line:before{content:\"\\f223\"}.ri-train-wifi-fill:before{content:\"\\f224\"}.ri-train-wifi-line:before{content:\"\\f225\"}.ri-translate-2:before{content:\"\\f226\"}.ri-translate:before{content:\"\\f227\"}.ri-travesti-fill:before{content:\"\\f228\"}.ri-travesti-line:before{content:\"\\f229\"}.ri-treasure-map-fill:before{content:\"\\f22a\"}.ri-treasure-map-line:before{content:\"\\f22b\"}.ri-trello-fill:before{content:\"\\f22c\"}.ri-trello-line:before{content:\"\\f22d\"}.ri-trophy-fill:before{content:\"\\f22e\"}.ri-trophy-line:before{content:\"\\f22f\"}.ri-truck-fill:before{content:\"\\f230\"}.ri-truck-line:before{content:\"\\f231\"}.ri-tumblr-fill:before{content:\"\\f232\"}.ri-tumblr-line:before{content:\"\\f233\"}.ri-tv-2-fill:before{content:\"\\f234\"}.ri-tv-2-line:before{content:\"\\f235\"}.ri-tv-fill:before{content:\"\\f236\"}.ri-tv-line:before{content:\"\\f237\"}.ri-twitch-fill:before{content:\"\\f238\"}.ri-twitch-line:before{content:\"\\f239\"}.ri-twitter-fill:before{content:\"\\f23a\"}.ri-twitter-line:before{content:\"\\f23b\"}.ri-typhoon-fill:before{content:\"\\f23c\"}.ri-typhoon-line:before{content:\"\\f23d\"}.ri-u-disk-fill:before{content:\"\\f23e\"}.ri-u-disk-line:before{content:\"\\f23f\"}.ri-ubuntu-fill:before{content:\"\\f240\"}.ri-ubuntu-line:before{content:\"\\f241\"}.ri-umbrella-fill:before{content:\"\\f242\"}.ri-umbrella-line:before{content:\"\\f243\"}.ri-underline:before{content:\"\\f244\"}.ri-uninstall-fill:before{content:\"\\f245\"}.ri-uninstall-line:before{content:\"\\f246\"}.ri-unsplash-fill:before{content:\"\\f247\"}.ri-unsplash-line:before{content:\"\\f248\"}.ri-upload-2-fill:before{content:\"\\f249\"}.ri-upload-2-line:before{content:\"\\f24a\"}.ri-upload-cloud-2-fill:before{content:\"\\f24b\"}.ri-upload-cloud-2-line:before{content:\"\\f24c\"}.ri-upload-cloud-fill:before{content:\"\\f24d\"}.ri-upload-cloud-line:before{content:\"\\f24e\"}.ri-upload-fill:before{content:\"\\f24f\"}.ri-upload-line:before{content:\"\\f250\"}.ri-usb-fill:before{content:\"\\f251\"}.ri-usb-line:before{content:\"\\f252\"}.ri-user-2-fill:before{content:\"\\f253\"}.ri-user-2-line:before{content:\"\\f254\"}.ri-user-3-fill:before{content:\"\\f255\"}.ri-user-3-line:before{content:\"\\f256\"}.ri-user-4-fill:before{content:\"\\f257\"}.ri-user-4-line:before{content:\"\\f258\"}.ri-user-5-fill:before{content:\"\\f259\"}.ri-user-5-line:before{content:\"\\f25a\"}.ri-user-6-fill:before{content:\"\\f25b\"}.ri-user-6-line:before{content:\"\\f25c\"}.ri-user-add-fill:before{content:\"\\f25d\"}.ri-user-add-line:before{content:\"\\f25e\"}.ri-user-fill:before{content:\"\\f25f\"}.ri-user-follow-fill:before{content:\"\\f260\"}.ri-user-follow-line:before{content:\"\\f261\"}.ri-user-heart-fill:before{content:\"\\f262\"}.ri-user-heart-line:before{content:\"\\f263\"}.ri-user-line:before{content:\"\\f264\"}.ri-user-location-fill:before{content:\"\\f265\"}.ri-user-location-line:before{content:\"\\f266\"}.ri-user-received-2-fill:before{content:\"\\f267\"}.ri-user-received-2-line:before{content:\"\\f268\"}.ri-user-received-fill:before{content:\"\\f269\"}.ri-user-received-line:before{content:\"\\f26a\"}.ri-user-search-fill:before{content:\"\\f26b\"}.ri-user-search-line:before{content:\"\\f26c\"}.ri-user-settings-fill:before{content:\"\\f26d\"}.ri-user-settings-line:before{content:\"\\f26e\"}.ri-user-shared-2-fill:before{content:\"\\f26f\"}.ri-user-shared-2-line:before{content:\"\\f270\"}.ri-user-shared-fill:before{content:\"\\f271\"}.ri-user-shared-line:before{content:\"\\f272\"}.ri-user-smile-fill:before{content:\"\\f273\"}.ri-user-smile-line:before{content:\"\\f274\"}.ri-user-star-fill:before{content:\"\\f275\"}.ri-user-star-line:before{content:\"\\f276\"}.ri-user-unfollow-fill:before{content:\"\\f277\"}.ri-user-unfollow-line:before{content:\"\\f278\"}.ri-user-voice-fill:before{content:\"\\f279\"}.ri-user-voice-line:before{content:\"\\f27a\"}.ri-video-add-fill:before{content:\"\\f27b\"}.ri-video-add-line:before{content:\"\\f27c\"}.ri-video-chat-fill:before{content:\"\\f27d\"}.ri-video-chat-line:before{content:\"\\f27e\"}.ri-video-download-fill:before{content:\"\\f27f\"}.ri-video-download-line:before{content:\"\\f280\"}.ri-video-fill:before{content:\"\\f281\"}.ri-video-line:before{content:\"\\f282\"}.ri-video-upload-fill:before{content:\"\\f283\"}.ri-video-upload-line:before{content:\"\\f284\"}.ri-vidicon-2-fill:before{content:\"\\f285\"}.ri-vidicon-2-line:before{content:\"\\f286\"}.ri-vidicon-fill:before{content:\"\\f287\"}.ri-vidicon-line:before{content:\"\\f288\"}.ri-vimeo-fill:before{content:\"\\f289\"}.ri-vimeo-line:before{content:\"\\f28a\"}.ri-vip-crown-2-fill:before{content:\"\\f28b\"}.ri-vip-crown-2-line:before{content:\"\\f28c\"}.ri-vip-crown-fill:before{content:\"\\f28d\"}.ri-vip-crown-line:before{content:\"\\f28e\"}.ri-vip-diamond-fill:before{content:\"\\f28f\"}.ri-vip-diamond-line:before{content:\"\\f290\"}.ri-vip-fill:before{content:\"\\f291\"}.ri-vip-line:before{content:\"\\f292\"}.ri-virus-fill:before{content:\"\\f293\"}.ri-virus-line:before{content:\"\\f294\"}.ri-visa-fill:before{content:\"\\f295\"}.ri-visa-line:before{content:\"\\f296\"}.ri-voice-recognition-fill:before{content:\"\\f297\"}.ri-voice-recognition-line:before{content:\"\\f298\"}.ri-voiceprint-fill:before{content:\"\\f299\"}.ri-voiceprint-line:before{content:\"\\f29a\"}.ri-volume-down-fill:before{content:\"\\f29b\"}.ri-volume-down-line:before{content:\"\\f29c\"}.ri-volume-mute-fill:before{content:\"\\f29d\"}.ri-volume-mute-line:before{content:\"\\f29e\"}.ri-volume-off-vibrate-fill:before{content:\"\\f29f\"}.ri-volume-off-vibrate-line:before{content:\"\\f2a0\"}.ri-volume-up-fill:before{content:\"\\f2a1\"}.ri-volume-up-line:before{content:\"\\f2a2\"}.ri-volume-vibrate-fill:before{content:\"\\f2a3\"}.ri-volume-vibrate-line:before{content:\"\\f2a4\"}.ri-vuejs-fill:before{content:\"\\f2a5\"}.ri-vuejs-line:before{content:\"\\f2a6\"}.ri-walk-fill:before{content:\"\\f2a7\"}.ri-walk-line:before{content:\"\\f2a8\"}.ri-wallet-2-fill:before{content:\"\\f2a9\"}.ri-wallet-2-line:before{content:\"\\f2aa\"}.ri-wallet-3-fill:before{content:\"\\f2ab\"}.ri-wallet-3-line:before{content:\"\\f2ac\"}.ri-wallet-fill:before{content:\"\\f2ad\"}.ri-wallet-line:before{content:\"\\f2ae\"}.ri-water-flash-fill:before{content:\"\\f2af\"}.ri-water-flash-line:before{content:\"\\f2b0\"}.ri-webcam-fill:before{content:\"\\f2b1\"}.ri-webcam-line:before{content:\"\\f2b2\"}.ri-wechat-2-fill:before{content:\"\\f2b3\"}.ri-wechat-2-line:before{content:\"\\f2b4\"}.ri-wechat-fill:before{content:\"\\f2b5\"}.ri-wechat-line:before{content:\"\\f2b6\"}.ri-wechat-pay-fill:before{content:\"\\f2b7\"}.ri-wechat-pay-line:before{content:\"\\f2b8\"}.ri-weibo-fill:before{content:\"\\f2b9\"}.ri-weibo-line:before{content:\"\\f2ba\"}.ri-whatsapp-fill:before{content:\"\\f2bb\"}.ri-whatsapp-line:before{content:\"\\f2bc\"}.ri-wheelchair-fill:before{content:\"\\f2bd\"}.ri-wheelchair-line:before{content:\"\\f2be\"}.ri-wifi-fill:before{content:\"\\f2bf\"}.ri-wifi-line:before{content:\"\\f2c0\"}.ri-wifi-off-fill:before{content:\"\\f2c1\"}.ri-wifi-off-line:before{content:\"\\f2c2\"}.ri-window-2-fill:before{content:\"\\f2c3\"}.ri-window-2-line:before{content:\"\\f2c4\"}.ri-window-fill:before{content:\"\\f2c5\"}.ri-window-line:before{content:\"\\f2c6\"}.ri-windows-fill:before{content:\"\\f2c7\"}.ri-windows-line:before{content:\"\\f2c8\"}.ri-windy-fill:before{content:\"\\f2c9\"}.ri-windy-line:before{content:\"\\f2ca\"}.ri-wireless-charging-fill:before{content:\"\\f2cb\"}.ri-wireless-charging-line:before{content:\"\\f2cc\"}.ri-women-fill:before{content:\"\\f2cd\"}.ri-women-line:before{content:\"\\f2ce\"}.ri-wubi-input:before{content:\"\\f2cf\"}.ri-xbox-fill:before{content:\"\\f2d0\"}.ri-xbox-line:before{content:\"\\f2d1\"}.ri-xing-fill:before{content:\"\\f2d2\"}.ri-xing-line:before{content:\"\\f2d3\"}.ri-youtube-fill:before{content:\"\\f2d4\"}.ri-youtube-line:before{content:\"\\f2d5\"}.ri-zcool-fill:before{content:\"\\f2d6\"}.ri-zcool-line:before{content:\"\\f2d7\"}.ri-zhihu-fill:before{content:\"\\f2d8\"}.ri-zhihu-line:before{content:\"\\f2d9\"}.ri-zoom-in-fill:before{content:\"\\f2da\"}.ri-zoom-in-line:before{content:\"\\f2db\"}.ri-zoom-out-fill:before{content:\"\\f2dc\"}.ri-zoom-out-line:before{content:\"\\f2dd\"}.ri-zzz-fill:before{content:\"\\f2de\"}.ri-zzz-line:before{content:\"\\f2df\"}:root{--color-primary:#4a90e2;--color-secondary:#f5a623;--color-tertiary:#7ed321;--color-textSecondary:#d0021b;--color-dark:#4a4a4a;--color-heading:#8b572a;--dark-color-heading:#fff;--color-border:#b8e986;--dark-color-border:#4a4a4a;--color-body:#9b9b9b;--gradient-primary:linear-gradient(-90deg,#50e3c2,#4a90e2);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#8b572a;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#8b572a;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#7ed321;--color-danger:#d0021b;--color-warning:#f5a623;--color-info:#4a90e2;--color-placeholder:#9b9b9b;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:\"Poppins\",sans-serif;--font-secondary:\"Spartan\",sans-serif;--font-icomoon:\"icomoon\";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}.container-custom,.container-custom-1520{margin-left:auto;margin-right:auto;padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);width:100%}.container-custom{max-width:1710px}.container-custom-1520{max-width:1520px}@media only screen and (max-width:767px){.container,.container-custom,.container-custom-1520,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{padding-left:15px;padding-right:15px}}@media only screen and (min-width:1200px){.container{max-width:1185px}}.about-content .features-list,.about-image-gallery .shape-group li,.about-style-1 .shape-group,.about-style-2 .shape-group,.about-style-3 .about-image-gallery .shape-group,.about-style-3 .shape-group,.about-style-5 .shape-group,.account-page-area .shape-group,.blog-meta,.coming-soon-page-area .shape-group,.contact-form-area .shape-group,.contact-form.form-style-2 .shape-group,.contact-me .thumbnail .shape-group,.contact-us-info .address-list,.course-area-3 .shape-group,.course-area-7 .shape-group,.course-curriculam .course-lesson ul,.course-details-content .entry-content .course-meta,.course-layout-five-tooltip-content .content .course-feature ul,.course-layout-five-tooltip-content .content .course-meta,.cta-banner-2 .shape-group,.cta-banner-3 .shape-group,.edu-blog-area .shape-group,.edu-blog-widget.widget-categories .category-list,.edu-breadcrumb-area .course-meta,.edu-breadcrumb-area .edu-breadcrumb,.edu-breadcrumb-area .shape-group,.edu-course .content .course-meta,.edu-course .hover-content-aside .content .course-feature ul,.edu-course-widget.widget-course-summery .content .course-item,.edu-cta-banner .shape-group,.edu-cta-box .shape-group,.edu-error .thumbnail .shape-group,.edu-event .content .event-meta,.edu-event-area .shape-group,.edu-event-list .content .event-meta,.edu-faq-content .shape-group,.edu-faq-gallery .shape-group,.edu-footer .information-list,.edu-pagination,.edu-product .inner>.thumbnail .product-hover-info ul,.edu-sorting-area .sorting-right .layout-switcher .switcher-btn,.error-page-area>.shape-group,.event-details .details-content .event-meta,.faq-style-4 .faq-thumbnail .shape-group,.header-action,.header-top .header-info,.hero-banner .banner-content .shape-group,.hero-banner .banner-thumbnail .shape-group,.hero-banner.hero-style-2 .banner-gallery .shape-group,.hero-banner.hero-style-3 .shape-group,.hero-banner.hero-style-4 .shape-group,.hero-banner.hero-style-5 .shape-group,.hero-banner.hero-style-6 .shape-group,.hero-banner.hero-style-7 .shape-group,.pricing-table .pricing-body .list-item,.privacy-policy ul,.product-details-area .content .product-feature,.pv-cta-area .shape-group li,.pv-elementor-area .elementor-thumbnail .shape-group li,.pv-inner-page-area .shape-group li,.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li,.pv-zoom-demo-area .zoom-thumbnail .shape-group li,.shape-group,.team-area-3 .shape-group,.team-area-4 .shape-group,.team-area-5 .shape-group,.team-area-6 .shape-group,.team-details-content .contact-info ul,.team-details-content .main-info .team-meta,.team-share-info,.video-gallery .shape-group{list-style:none;margin:0;padding:0}.mainmenu-nav .mainmenu li.has-droupdown .submenu li a{transition:.3s;transition:var(--transition)}.bg-image,.bgImagePosition{background-position:50%;background-repeat:no-repeat;background-size:cover}.bg-image_fixed{background-attachment:fixed!important}.bg-image--1{background-image:url(/images/bg/bg-image-1.png)}.bg-image--2{background-image:url(/images/bg/bg-image-2.jpg)}.bg-image--9{background-image:url(/images/bg/bg-image-9.png)}.bg-image--14{background-image:url(/images/bg/bg-image-14.jpg)}.bg-image--17{background-image:url(/images/bg/bg-image-17.jpg)}.bg-image--19{background-image:url(/images/bg/bg-image-19.jpg)}.bg-image--21{background-image:url(/images/bg/bg-image-21.jpg)}.row--0{margin-left:0;margin-right:0}.row--0>[class*=col]{padding-left:0;padding-right:0}.row--5{margin-left:-5px;margin-right:-5px}.row--5>[class*=col]{padding-left:5px;padding-right:5px}.row--10{margin-left:-10px;margin-right:-10px}.row--10>[class*=col]{padding-left:10px;padding-right:10px}.row--15{margin-left:-15px;margin-right:-15px}.row--15>[class*=col]{padding-left:15px;padding-right:15px}.row--20{margin-left:-20px;margin-right:-20px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--20{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--20{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--20{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--20{margin-left:-15px!important;margin-right:-15px!important}}.row--20>[class*=col-],.row--20>[class*=col]{padding-left:20px;padding-right:20px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--20>[class*=col-],.row--20>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--20>[class*=col-],.row--20>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--20>[class*=col-],.row--20>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--20>[class*=col-],.row--20>[class*=col]{padding-left:15px!important;padding-right:15px!important}}.row--25{margin-left:-25px;margin-right:-25px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--25{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--25{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--25{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--25{margin-left:-15px!important;margin-right:-15px!important}}.row--25>[class*=col-],.row--25>[class*=col]{padding-left:25px;padding-right:25px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--25>[class*=col-],.row--25>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--25>[class*=col-],.row--25>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--25>[class*=col-],.row--25>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--25>[class*=col-],.row--25>[class*=col]{padding-left:15px!important;padding-right:15px!important}}.row--30{margin-left:-30px;margin-right:-30px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--30{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--30{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--30{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--30{margin-left:-15px!important;margin-right:-15px!important}}.row--30>[class*=col-],.row--30>[class*=col]{padding-left:30px;padding-right:30px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--30>[class*=col-],.row--30>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--30>[class*=col-],.row--30>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--30>[class*=col-],.row--30>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--30>[class*=col-],.row--30>[class*=col]{padding-left:15px!important;padding-right:15px!important}}.row--35{margin-left:-35px;margin-right:-35px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--35{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--35{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--35{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--35{margin-left:-15px!important;margin-right:-15px!important}}.row--35>[class*=col-],.row--35>[class*=col]{padding-left:35px;padding-right:35px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--35>[class*=col-],.row--35>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--35>[class*=col-],.row--35>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--35>[class*=col-],.row--35>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--35>[class*=col-],.row--35>[class*=col]{padding-left:15px!important;padding-right:15px!important}}.row--40{margin-left:-40px;margin-right:-40px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--40{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--40{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--40{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--40{margin-left:-15px!important;margin-right:-15px!important}}.row--40>[class*=col-],.row--40>[class*=col]{padding-left:40px;padding-right:40px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--40>[class*=col-],.row--40>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--40>[class*=col-],.row--40>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--40>[class*=col-],.row--40>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--40>[class*=col-],.row--40>[class*=col]{padding-left:15px!important;padding-right:15px!important}}.row--45{margin-left:-45px;margin-right:-45px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--45{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--45{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--45{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--45{margin-left:-15px!important;margin-right:-15px!important}}.row--45>[class*=col-],.row--45>[class*=col]{padding-left:45px;padding-right:45px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--45>[class*=col-],.row--45>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--45>[class*=col-],.row--45>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--45>[class*=col-],.row--45>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--45>[class*=col-],.row--45>[class*=col]{padding-left:15px!important;padding-right:15px!important}}.row--50{margin-left:-50px;margin-right:-50px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--50{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--50{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--50{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--50{margin-left:-15px!important;margin-right:-15px!important}}.row--50>[class*=col-],.row--50>[class*=col]{padding-left:50px;padding-right:50px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--50>[class*=col-],.row--50>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--50>[class*=col-],.row--50>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--50>[class*=col-],.row--50>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--50>[class*=col-],.row--50>[class*=col]{padding-left:15px!important;padding-right:15px!important}}.row--60{margin-left:-60px;margin-right:-60px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--60{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--60{margin-left:-15px;margin-right:-15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--60{margin-left:-15px;margin-right:-15px}}@media only screen and (max-width:767px){.row--60{margin-left:-15px!important;margin-right:-15px!important}}.row--60>[class*=col-],.row--60>[class*=col]{padding-left:60px;padding-right:60px}@media only screen and (min-width:1200px)and (max-width:1599px){.row--60>[class*=col-],.row--60>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:992px)and (max-width:1199px){.row--60>[class*=col-],.row--60>[class*=col]{padding-left:15px;padding-right:15px}}@media only screen and (min-width:768px)and (max-width:991px){.row--60>[class*=col-],.row--60>[class*=col]{padding-left:15px!important;padding-right:15px!important}}@media only screen and (max-width:767px){.row--60>[class*=col-],.row--60>[class*=col]{padding-left:15px!important;padding-right:15px!important}}#edublink-preloader{background-image:linear-gradient(20deg,#31b978,#1ab69d);height:100%;left:0;overflow:hidden;position:fixed;top:0;transition:all 1.5s ease-out;width:100%;z-index:99999999999999}#edublink-preloader.loaded .preloader-close-btn-wraper{bottom:200%}.preloader-close-btn-wraper{bottom:0;padding:30px;position:fixed;right:0;transition:all 1.5s ease-out}.preloader-close-btn-wraper .preloader-close-btn{background:#000;background:var(--color-black);border:0;border-radius:50px;color:#fff;color:var(--color-white);cursor:pointer;font-size:13px;font-weight:600;height:45px;line-height:35px;padding:4px 23px;text-transform:uppercase}.loading-spinner{height:40px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:40px}.preloader-spin-1,.preloader-spin-2{animation:edublink-preloader-bounce-animation 2s ease-in-out infinite;background-color:#fff;border-radius:50%;height:100%;left:0;opacity:.6;position:absolute;top:0;width:100%}.preloader-spin-2{animation-delay:-1s}@keyframes edublink-preloader-bounce-animation{0%,to{transform:scale(0)}50%{transform:scale(1)}}.shape-dark{visibility:hidden}.shape-light{visibility:visible}.dark-mode .shape-light{visibility:hidden}.dark-mode .shape-dark{visibility:visible}.d-none-shape-dark{display:none}*{box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}a{display:inline-block}a,a:active,a:focus,a:hover{outline:none;-webkit-text-decoration:none;text-decoration:none}a:active,a:focus,a:hover{color:#4a90e2;color:var(--color-primary)}a:focus{outline:none}address{margin:0 0 24px}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}mark{background:#4a90e2;background:var(--color-primary);color:#fff}code,kbd,pre,samp{color:#4a90e2;color:var(--color-primary);font-size:var(--font-size-b3);-webkit-hyphens:none;hyphens:none}ins,kbd{color:#fff}pre,pre.wp-block-code{font-family:\"Courier 10 Pitch\",Courier,monospace!important;font-size:15px!important;margin:40px 0!important;overflow:auto;padding:20px!important;white-space:pre!important;white-space:pre-wrap!important;word-wrap:break-word!important;background:var(--color-light);border-radius:4px;color:#9b9b9b!important;color:var(--color-body)!important}small{font-size:smaller}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}dl{margin-bottom:10px;margin-top:0}dt{color:#8b572a;color:var(--color-heading)}menu,ol,ul{margin:16px 0;padding:0 0 0 40px}nav ol,nav ul{list-style:none;list-style-image:none}li>ol,li>ul{margin:0}ol ul{margin-bottom:0}img{-ms-interpolation-mode:bicubic;border:0;height:auto;max-width:100%;vertical-align:middle}svg:not(:root){overflow:hidden}figure,form{margin:0}fieldset{border:1px solid #b8e986;border:1px solid var(--color-border);margin:0 2px;min-width:inherit;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal}button,input,select,textarea{font-size:100%;margin:0;max-width:100%;vertical-align:baseline}button,input{line-height:normal}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{padding:0}input[type=search]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;padding-right:2px;width:270px}input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}caption,td,th{font-weight:400}table thead th{font-weight:700}.wp-block-calendar tfoot td,td{border:1px solid #b8e986;border:1px solid var(--color-border);padding:7px 10px}del{color:#333}ins{background:rgba(56,88,246,.6);padding:0 5px;-webkit-text-decoration:none;text-decoration:none}hr{background-size:4px 4px;border:0;height:1px;margin:0 0 24px;opacity:.6}table a,table a:link,table a:visited{-webkit-text-decoration:underline;text-decoration:underline}dt{font-weight:700;margin-bottom:10px}dd{margin:0 15px 15px}caption{caption-side:top}kbd{background:var(--heading-color)}cite,dfn,em{font-style:italic}blockquote,q{-webkit-hyphens:none;hyphens:none;quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}blockquote blockquote{margin-right:0}blockquote cite,blockquote small{font-size:var(--font-size-b3);font-weight:400}blockquote b,blockquote strong{font-weight:700}html{font-size:10px;overflow:hidden;overflow-y:auto}body,html{margin:0;padding:0}body{font-size:15px;font-size:var(--font-size-b1);line-height:1.73;line-height:var(--line-height-b1);overflow:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#fff;background-color:var(--color-bg-body);color:#9b9b9b;color:var(--color-body);font-family:\"Poppins\",sans-serif;font-family:var(--font-primary);font-weight:400}body.modal-open{padding:0!important}.h1,.h2,.h3,.h4,.h5,.h6,address,blockquote,h1,h2,h3,h4,h5,h6,hr,menu,ol,p,pre,table,ul{margin:0 0 20px}.display-one{font-size:112px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);word-break:break-word}.h1,h1{font-size:50px;font-size:var(--h1);line-height:1.2;line-height:var(--h1-lineHeight)}.h2,h2{font-size:36px;font-size:var(--h2);line-height:1.39;line-height:var(--h2-lineHeight)}.h3,h3{font-size:28px;font-size:var(--h3);line-height:1.43;line-height:var(--h3-lineHeight)}.h4,h4{font-size:20px;font-size:var(--h4);line-height:1.4;line-height:var(--h4-lineHeight)}.h5,h5{font-size:18px;font-size:var(--h5);line-height:1.45;line-height:var(--h5-lineHeight)}.h6,h6{font-size:16px;font-size:var(--h6);line-height:1.62;line-height:var(--h6-lineHeight)}.h1 a,.h2 a,.h3 a,.h4 a,.h5 a,.h6 a,h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:inherit;transition:.5s}a{color:#8b572a;color:var(--color-heading);transition:.3s}@media only screen and (max-width:1199px){.h1,h1{font-size:44px}}@media only screen and (min-width:768px)and (max-width:991px){.h1,h1{font-size:38px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}}@media only screen and (max-width:767px){.h1,h1{font-size:34px}.h2,h2{font-size:26px}.h3,h3{font-size:22px}.h4,h4{font-size:18px}}.h1,.h2,.h3,h1,h2,h3{font-weight:700;font-weight:var(--p-bold)}.h4,.h5,.h6,h4,h5,h6{font-weight:600;font-weight:var(--p-semi-bold)}p{color:#9b9b9b;color:var(--color-body);font-size:15px;font-size:var(--font-size-b1);font-weight:400;line-height:1.73;line-height:var(--line-height-b1);margin:0 0 30px}@media only screen and (max-width:767px){p{margin:0 0 20px}}p.b1{font-size:15px;font-size:var(--font-size-b1);line-height:1.73;line-height:var(--line-height-b1)}p.b2{font-size:13px;font-size:var(--font-size-b2);line-height:1.85;line-height:var(--line-height-b2)}.b1{font-size:15px;font-size:var(--font-size-b1);line-height:1.73;line-height:var(--line-height-b1)}.b2{font-size:13px;font-size:var(--font-size-b2);line-height:1.85;line-height:var(--line-height-b2)}.table,table{border-collapse:collapse;border-spacing:0;margin:0 0 30px;width:100%}table a,table a:link,table a:visited{-webkit-text-decoration:none;text-decoration:none}.wp-block-pullquote cite,.wp-block-pullquote.is-style-solid-color blockquote cite,.wp-block-quote cite,cite{color:#8b572a;color:var(--color-heading)}var{font-family:\"Courier 10 Pitch\",Courier,monospace}ol,ul{padding-left:18px}ul{list-style:square;margin-bottom:30px;padding-left:20px}ul.liststyle.bullet li{color:#9b9b9b;color:var(--color-body);font-size:15px;font-size:var(--font-size-b1);line-height:1.73;line-height:var(--line-height-b1);padding-left:30px;position:relative}@media only screen and (max-width:767px){ul.liststyle.bullet li{padding-left:19px}}ul.liststyle.bullet li:before{background:#9b9b9b;background:var(--color-body);border-radius:100%;content:\"\";height:6px;left:0;position:absolute;top:10px;width:6px}ul.liststyle.bullet li+li{margin-top:8px}ul li{font-size:15px;font-size:var(--font-size-b1);line-height:1.73;line-height:var(--line-height-b1);margin-bottom:10px;margin-top:10px}ul li,ul li a{color:#9b9b9b;color:var(--color-body)}ul li a{-webkit-text-decoration:none;text-decoration:none;transition:.3s;transition:var(--transition)}ul li a:hover{color:#4a90e2;color:var(--color-primary)}ul ul{margin-bottom:0}ol{margin-bottom:30px}ol li{color:#9b9b9b;color:var(--color-body);font-size:15px;font-size:var(--font-size-b1);font-weight:400;line-height:1.73;line-height:var(--line-height-b1);margin-bottom:10px;margin-top:10px}ol li a{color:var(--heading-color);-webkit-text-decoration:none;text-decoration:none;transition:.3s;transition:var(--transition)}ol li a:hover{color:#4a90e2;color:var(--color-primary)}ol ul{padding-left:30px}hr{background:transparent;border-top:1px solid #b8e986;border-top:1px solid var(--color-border);display:block;height:0;margin:15px 0}kbd{background:#4a90e2;background:var(--color-primary)}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}input,select,textarea{transition:.3s;width:100%}input{height:60px}select{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:url(/images/icons/arrow-icon.png) 88% no-repeat transparent;background-color:#f0f4f5;background-color:var(--color-lighten01);border:0;border-radius:3px;color:#8b572a;color:var(--color-heading);cursor:pointer;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:15px;font-weight:600;height:50px;min-width:160px;outline:none;padding:10px 20px;transition:.3s}input[type=email],input[type=number],input[type=password],input[type=tel],input[type=text],textarea{background-color:#fff;background-color:var(--color-white);border:none;border-radius:5px;box-shadow:none;color:#8b572a;color:var(--color-heading);font-size:15px;outline:none;padding:0 25px}input[type=email]::-moz-placeholder,input[type=number]::-moz-placeholder,input[type=password]::-moz-placeholder,input[type=tel]::-moz-placeholder,input[type=text]::-moz-placeholder,textarea::-moz-placeholder{color:#9b9b9b;color:var(--color-placeholder);opacity:1}input[type=email]::placeholder,input[type=number]::placeholder,input[type=password]::placeholder,input[type=tel]::placeholder,input[type=text]::placeholder,textarea::placeholder{color:#9b9b9b;color:var(--color-placeholder);opacity:1}input[type=email]:-ms-input-placeholder,input[type=number]:-ms-input-placeholder,input[type=password]:-ms-input-placeholder,input[type=tel]:-ms-input-placeholder,input[type=text]:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9b9b9b;color:var(--color-placeholder);opacity:1}input[type=email]::-ms-input-placeholder,input[type=number]::-ms-input-placeholder,input[type=password]::-ms-input-placeholder,input[type=tel]::-ms-input-placeholder,input[type=text]::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#9b9b9b;color:var(--color-placeholder);opacity:1}input[type=email]:focus,input[type=number]:focus,input[type=password]:focus,input[type=tel]:focus,input[type=text]:focus,textarea:focus{border-color:#4a90e2;border-color:var(--color-primary)}textarea{padding:20px 25px}input[type=checkbox],input[type=radio]{opacity:0;position:absolute}input[type=checkbox]~label,input[type=radio]~label{color:#8b572a;color:var(--color-heading);cursor:pointer;font-size:15px;line-height:26px;margin-bottom:0;padding-left:32px;position:relative}input[type=checkbox]~label:before,input[type=radio]~label:before{border:1px solid #d2d5d6;border-radius:2px;content:\" \";height:17px;left:0;position:absolute;top:4px;transition:all .3s;width:17px}input[type=checkbox]~label:after,input[type=radio]~label:after{color:#fff;color:var(--color-white);content:\"\";font-family:\"icomoon\";font-family:var(--font-icomoon);font-size:10px;left:4px;opacity:0;position:absolute;top:0;transition:all .3s}input[type=checkbox]:checked~label:before,input[type=radio]:checked~label:before{background-color:#4a90e2;background-color:var(--color-primary);border-color:#4a90e2;border-color:var(--color-primary)}input[type=checkbox]:checked~label:after,input[type=radio]:checked~label:after{opacity:1}input[type=radio]~label{padding-left:30px}input[type=radio]~label:before{border:1px solid #dcdfe0;border-radius:50%}input[type=radio]~label:after{background-color:#4a90e2;background-color:var(--color-primary);border-radius:50%;content:\"\";height:7px;left:5px;top:9px;width:7px}input[type=radio]:checked~label:before{background-color:#fff;background-color:var(--color-white);border-color:#dcdfe0}.form-group{margin-bottom:20px}.form-group:last-child{margin-bottom:0}.form-group label{color:#8b572a;color:var(--color-heading);margin-bottom:8px}.form-group .submit-btn{padding:0 35px}.form-message{margin-bottom:0;text-align:center}.form-message.error{color:#f80707;margin-top:20px}.form-message.success{color:#0d8d2d;margin-top:20px}.color-fb{color:#1877f2!important;color:var(--color-facebook)!important}.color-ig{color:#c231a1!important;color:var(--color-instagram)!important}.color-twitter{color:#1da1f2!important;color:var(--color-twitter)!important}.color-yt{color:#cd201f!important;color:var(--color-youtube)!important}.color-linkd{color:#0a66c2!important;color:var(--color-linkedin)!important}.color-primary{color:#4a90e2;color:var(--color-primary)}.color-secondary{color:#f5a623;color:var(--color-secondary)}.bg-lighten01{background-color:#f0f4f5;background-color:var(--color-lighten01)}.bg-lighten02{background-color:#edf5f8;background-color:var(--color-lighten02)}.bg-lighten03{background-color:#f5f1eb;background-color:var(--color-lighten03)}.bg-lighten04{background-color:#f7f5f2;background-color:var(--color-lighten04)}.edublink-animated-shape{position:relative;z-index:9}.shape-group li{margin:0;position:absolute;z-index:-1}@media only screen and (max-width:1199px){.shape-group{display:none}}.z-10{z-index:10}.home-four-course{overflow:hidden;position:relative}.home-four-course:before{background-image:url(/images/bg/bg-image-3.jpg);background-size:cover;bottom:0;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.home-four-course .shape-group .shape-1{right:-88px;top:59px}.home-four-course .shape-group .shape-2{right:-406px;top:-263px;z-index:-1}.home-four-course .shape-group .shape-2 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:570px;width:570px}@keyframes headerSticky{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes rotateIt{to{transform:rotate(-1turn)}}@keyframes bounceSlide{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}.bounce-slide{animation-duration:2.5s;animation-fill-mode:both;animation-iteration-count:infinite;animation-name:bounceSlide}@keyframes line1{0%{bottom:0;opacity:1}30%{bottom:30%}50%{bottom:50%}70%{bottom:70%}to{bottom:100%;opacity:.5}}@keyframes line2{0%{opacity:1;top:0}30%{bottom:30%}50%{bottom:50%}70%{bottom:70%}to{opacity:.5;top:100%}}@keyframes line3{0%{opacity:1;top:500px}50%{top:50%}to{opacity:.5;top:100%}}@keyframes line4{0%{opacity:1;top:300px}50%{top:50%}to{opacity:.5;top:100%}}@keyframes line5{0%{bottom:400px;opacity:1}50%{bottom:50%}to{bottom:100%;opacity:.5}}@keyframes customOne{0%{transform:scale(1)}50%{transform:scale(.9)}to{transform:scale(1)}}@keyframes customTwo{0%{transform:translate(0)}50%{transform:translate(100px)}to{transform:translate(50px,50px)}}.customOne{animation:customOne 2s infinite}.rotateit{animation:rotateIt 11s linear infinite}@keyframes edublink-vsm-y-move{0%{transform:translateY(-30%)}to{transform:translateY(30%)}}@keyframes edublink-vsm-y-reverse-move{0%{transform:translateY(30%)}to{transform:translateY(-30%)}}@keyframes edublink-sm-x-move{0%{transform:translate(-50%)}to{transform:translate(50%)}}@keyframes edublink-sm-x-reverse-move{0%{transform:translate(50%)}to{transform:translate(-50%)}}@keyframes edublink-rotate-x{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes edublink-rotate-y{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@keyframes edublink-zoom2{0%{transform:scale(1)}to{transform:scale(1.5)}}@keyframes edublink-zoom1{0%{transform:scale(1)}to{transform:scale(1.25)}}@keyframes headerSlideDown{0%{margin-top:-100px}to{margin-top:0}}@keyframes slideFadeInUp{0%{opacity:0;transform:translate3d(0,20%,0)}to{opacity:1;transform:none}}.slideFadeInUp{animation-name:slideFadeInUp}@keyframes moveVertical{to{opacity:1;transform:translateY(0)}}@keyframes scrollDown{0%{opacity:0}10%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@keyframes ripple{0%{transform:scale(1)}75%{opacity:1;transform:scale(1.75)}to{opacity:0;transform:scale(2)}}@keyframes ripple_2{0%{transform:scale(1)}75%{opacity:1;transform:scale(3)}to{opacity:0;transform:scale(4)}}@keyframes ripple_3{0%{transform:scale(1)}50%{opacity:1;transform:scale(1.15)}to{opacity:0;transform:scale(1.3)}}@keyframes radiusChange{0%{border-radius:0 0 0 0}40%{border-radius:50px 0 100px 0}80%{border-radius:0 50px 0 100px}to{border-radius:0 0 0 0}}@keyframes radiusChange2{0%{border-radius:0 0 0 0}25%{border-radius:50px 0}50%{border-radius:0 0 0 0}75%{border-radius:0 50px}to{border-radius:50px 0}}.edu-accordion .accordion-item{border:1px solid #b8e986;border:1px solid var(--color-border);margin-bottom:30px}.edu-accordion .accordion-item:last-child{margin-bottom:0}.edu-accordion .accordion-item .accordion-button{background-color:transparent;border:none;box-shadow:none;color:#8b572a;color:var(--color-heading);font-size:18px;font-weight:600;font-weight:var(--p-semi-bold);padding:28px 30px}.edu-accordion .accordion-item .accordion-button:focus{border:none;box-shadow:none}.edu-accordion .accordion-item .accordion-button:after{background-image:none;content:\"\";font-family:\"icomoon\";font-family:var(--font-icomoon);font-size:22px;font-weight:500;height:auto;width:auto}.edu-accordion .accordion-item .accordion-button.collapsed:after{content:\"\"}.edu-accordion .accordion-body{padding:0}.edu-accordion .accordion-body .course-lesson{border:none;padding:0}.edu-accordion .accordion-body .course-lesson ul li{padding:14px 30px}.edu-accordion .accordion-body .course-lesson ul li:last-child{border-bottom:none}.paginacontainer{height:3000px}.rn-progress-parent{border-radius:50px;bottom:30px;box-shadow:inset 0 0 0 2px rgba(255,71,87,.2);cursor:pointer;display:block;height:46px;opacity:0;position:fixed;right:30px;transform:translateY(15px);transition:all .2s linear;visibility:hidden;width:46px;z-index:10000}.rn-progress-parent.rn-backto-top-active{opacity:1;transform:translateY(0);visibility:visible}.rn-progress-parent:after{content:\"\";cursor:pointer;display:block;font-family:\"remixicon\"!important;font-size:24px;height:46px;left:0;line-height:46px;position:absolute;text-align:center;top:0;transition:all .2s linear;width:46px;z-index:2}.rn-progress-parent:after,.rn-progress-parent:hover:after{color:#f5a623;color:var(--color-secondary)}.rn-progress-parent:hover:before{opacity:1}.rn-progress-parent svg path{fill:none}.rn-progress-parent svg.rn-back-circle path{stroke:#f5a623;stroke:var(--color-secondary);stroke-width:4;box-sizing:border-box;transition:all .2s linear}.edu-breadcrumb-area{background-color:#f5f9fa;overflow:hidden;padding:95px 0 85px;position:relative;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.edu-breadcrumb-area{padding:70px 0 60px}}@media only screen and (max-width:767px){.edu-breadcrumb-area{padding:55px 0 45px}}.edu-breadcrumb-area .breadcrumb-inner{text-align:center}.edu-breadcrumb-area .page-title .pre-title{display:block;letter-spacing:1px;margin-bottom:15px}.edu-breadcrumb-area .page-title .title{margin-bottom:12px}@media only screen and (max-width:767px){.edu-breadcrumb-area .page-title .title{font-size:30px}}@media only screen and (max-width:575px){.edu-breadcrumb-area .page-title .title{font-size:26px}}.edu-breadcrumb-area .edu-breadcrumb{align-items:center;display:flex;flex-wrap:wrap;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);justify-content:center}.edu-breadcrumb-area .edu-breadcrumb li.breadcrumb-item{color:#8b572a;color:var(--color-heading);font-size:16px;font-weight:500;font-weight:var(--p-medium)}.edu-breadcrumb-area .edu-breadcrumb li.breadcrumb-item a{color:#8b572a;color:var(--color-heading)}.edu-breadcrumb-area .edu-breadcrumb li.breadcrumb-item a:hover{color:#4a90e2;color:var(--color-primary)}.edu-breadcrumb-area .edu-breadcrumb li.breadcrumb-item.active{font-weight:600;font-weight:var(--p-semi-bold)}.edu-breadcrumb-area .edu-breadcrumb li.separator i{color:#8b572a;color:var(--color-heading);display:inline-block;font-size:16px;font-weight:700;font-weight:var(--p-bold);margin:0 10px;position:relative;top:2px}.edu-breadcrumb-area .course-meta{align-items:center;display:flex;justify-content:center;margin-left:-20px;margin-right:-20px}@media only screen and (max-width:767px){.edu-breadcrumb-area .course-meta{display:block;margin-top:20px}}.edu-breadcrumb-area .course-meta li{align-items:center;color:#8b572a;color:var(--color-heading);display:flex;font-weight:500;margin-left:20px;margin-right:20px;position:relative}.edu-breadcrumb-area .course-meta li:after{background-color:#dbdbdb;content:\"\";height:19px;position:absolute;right:-20px;top:4px;width:1px}@media only screen and (max-width:767px){.edu-breadcrumb-area .course-meta li:after{display:none}}.edu-breadcrumb-area .course-meta li:last-child:after{display:none}.edu-breadcrumb-area .course-meta li i{color:#4a90e2;color:var(--color-primary);font-size:24px;padding-right:14px}.edu-breadcrumb-area .course-meta .course-rating .rating{margin-right:8px}.edu-breadcrumb-area .course-meta .course-rating .rating i{color:#f8b81f;font-size:15px;padding:0}@media only screen and (max-width:991px){.edu-breadcrumb-area .shape-group{display:none}}.edu-breadcrumb-area .shape-group li{position:absolute;z-index:-1}.edu-breadcrumb-area .shape-group li.shape-1{left:-60px;top:-315px}.edu-breadcrumb-area .shape-group li.shape-2{left:11%;top:60px}.edu-breadcrumb-area .shape-group li.shape-3{bottom:120px;right:13%;z-index:1}.edu-breadcrumb-area .shape-group li.shape-4{right:-180px;top:30px}.edu-breadcrumb-area .shape-group li.shape-5{right:-88px;top:-70px}.edu-breadcrumb-area .shape-group li.shape-1,.edu-breadcrumb-area .shape-group li.shape-4{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;height:470px;width:470px}.breadcrumb-style-2{padding:190px 0 180px;position:relative;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.breadcrumb-style-2{padding:150px 0 140px}}@media only screen and (max-width:767px){.breadcrumb-style-2{padding:100px 0 90px}}@media only screen and (max-width:575px){.breadcrumb-style-2{padding:80px 0 70px}}.breadcrumb-style-2:before{background-color:rgba(0,0,0,.6);bottom:0;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.breadcrumb-style-2 .page-title{margin:0 auto;width:70%}@media only screen and (max-width:767px){.breadcrumb-style-2 .page-title{width:100%}}.breadcrumb-style-2 .edu-breadcrumb li.breadcrumb-item,.breadcrumb-style-2 .edu-breadcrumb li.breadcrumb-item a,.breadcrumb-style-2 .edu-breadcrumb li.separator i,.breadcrumb-style-2 .page-title .title{color:#fff;color:var(--color-white)}.breadcrumb-style-3{padding:5px 0 90px}@media only screen and (min-width:768px)and (max-width:991px){.breadcrumb-style-3{padding:5px 0 70px}}@media only screen and (max-width:767px){.breadcrumb-style-3{padding:5px 0 70px}}.breadcrumb-style-3 .breadcrumb-inner{text-align:left}.breadcrumb-style-3 .breadcrumb-inner .page-title{width:55%}@media only screen and (max-width:991px){.breadcrumb-style-3 .breadcrumb-inner .page-title{width:100%}}.breadcrumb-style-3 .breadcrumb-inner .page-title .title{font-size:36px;line-height:1.4;margin-bottom:4px}@media only screen and (max-width:767px){.breadcrumb-style-3 .breadcrumb-inner .page-title .title{font-size:30px}}@media only screen and (max-width:575px){.breadcrumb-style-3 .breadcrumb-inner .page-title .title{font-size:26px}}.breadcrumb-style-3 .breadcrumb-inner .edu-breadcrumb{justify-content:flex-start;margin-bottom:55px}@media only screen and (min-width:768px)and (max-width:991px){.breadcrumb-style-3 .breadcrumb-inner .edu-breadcrumb{margin-bottom:40px}}@media only screen and (max-width:767px){.breadcrumb-style-3 .breadcrumb-inner .edu-breadcrumb{margin-bottom:40px}}.breadcrumb-style-3 .breadcrumb-inner .course-meta{justify-content:flex-start}.breadcrumb-style-3 .shape-group li.shape-2{left:7%}.breadcrumb-style-3 .shape-group li.shape-2 img{width:160px}.breadcrumb-style-4{padding:110px 0 105px}@media only screen and (min-width:768px)and (max-width:991px){.breadcrumb-style-4{padding:80px 0}}@media only screen and (max-width:767px){.breadcrumb-style-4{padding:60px 0}}.breadcrumb-style-4 .page-title .title{margin:0 auto 5px;width:75%}.breadcrumb-style-4 .course-meta li{color:#9b9b9b;color:var(--color-body);font-weight:400}@media only screen and (max-width:767px){.breadcrumb-style-4 .course-meta li{justify-content:center}}.breadcrumb-style-4 .course-meta li i{font-size:18px}.breadcrumb-style-5{background:linear-gradient(-90deg,#f5f1eb,hsla(36,33%,94%,.3));padding:18px 0 0}.breadcrumb-style-5 .edu-breadcrumb{justify-content:flex-start;margin:-10px 0}a.btn-transparent,button.btn-transparent{color:#d0021b;color:var(--color-textSecondary);display:inline-block;font-size:18px;font-weight:600;line-height:28px;position:relative;transition:.3s}a.btn-transparent:after,button.btn-transparent:after{background:#4a90e2;background:var(--color-primary);bottom:0;content:\"\";height:2px;left:auto;position:absolute;right:0;transition:.3s;width:0}a.btn-transparent i,button.btn-transparent i{font-size:12px;padding-left:6px;position:relative;top:-1px}a.btn-transparent:hover,button.btn-transparent:hover{color:#4a90e2;color:var(--color-primary)}a.btn-transparent:hover:after,button.btn-transparent:hover:after{left:0;right:auto;width:100%}a.edu-btn,button.edu-btn{background:#4a90e2;background:var(--color-primary);border:0;border-radius:5px;color:#fff;color:var(--edu-btn-color);display:inline-block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:15px;font-weight:500;height:60px;line-height:62px;overflow:hidden;padding:0 30px;position:relative;text-align:center;transition:.4s;z-index:1}@media only screen and (max-width:767px){a.edu-btn,button.edu-btn{font-size:14px;height:50px;line-height:52px;padding:0 20px}}a.edu-btn:after,button.edu-btn:after{background:linear-gradient(-90deg,#31b978,#1ab69d);border-radius:5px;bottom:0;content:\"\";height:100%;position:absolute;right:0;top:0;transition:.4s;width:0;z-index:-1}a.edu-btn i,button.edu-btn i{font-size:11px;padding-left:6px;position:relative}@media only screen and (max-width:767px){a.edu-btn i,button.edu-btn i{font-size:9px}}a.edu-btn:hover:after,button.edu-btn:hover:after{left:0;width:100%}a.edu-btn.btn-large,button.edu-btn.btn-large{padding:0 40px}a.edu-btn.btn-large i,button.edu-btn.btn-large i{padding-left:10px;top:0}a.edu-btn.btn-medium,button.edu-btn.btn-medium{height:50px;line-height:51px;padding:0 25px}a.edu-btn.btn-small,button.edu-btn.btn-small{font-size:14px;height:40px;line-height:40px;padding:0 20px}a.edu-btn.left-icon i,button.edu-btn.left-icon i{padding-left:0;padding-right:10px}a.edu-btn.btn-curved,button.edu-btn.btn-curved{border-radius:30px 5px}a.edu-btn.btn-curved:hover,button.edu-btn.btn-curved:hover{border-radius:5px 30px}a.edu-btn.curved-medium,button.edu-btn.curved-medium{border-radius:20px 5px;padding:0 40px}a.edu-btn.curved-medium:hover,button.edu-btn.curved-medium:hover{border-radius:5px 25px}a.edu-btn.btn-secondary,button.edu-btn.btn-secondary{background:#f5a623;background:var(--color-secondary);color:#fff;color:var(--color-white)}a.edu-btn.btn-secondary:hover,button.edu-btn.btn-secondary:hover{background:#4a90e2;background:var(--color-primary);color:#fff;color:var(--color-white)}a.edu-btn.btn-border,button.edu-btn.btn-border{background-color:transparent;border:1px solid #b8e986;border:1px solid var(--color-border);color:#8b572a;color:var(--color-heading);padding:0 25px}a.edu-btn.btn-border:after,button.edu-btn.btn-border:after{display:none}a.edu-btn.btn-border:hover,button.edu-btn.btn-border:hover{background-color:#4a90e2;background-color:var(--color-primary);border-color:#4a90e2;border-color:var(--color-primary);color:#fff;color:var(--color-white)}.button-group{align-items:center;display:flex;margin:-5px}.button-group a{margin:5px}.wishlist-btn{background:hsla(0,0%,100%,.15);border:0;border-radius:50%;height:40px;line-height:45px;text-align:center;width:40px}.wishlist-btn,.wishlist-btn i{transition:.3s;transition:var(--transition)}.wishlist-btn i{color:#fff;color:var(--color-white);font-size:19px}.wishlist-btn:hover{background-color:#f5a623;background-color:var(--color-secondary)}.wishlist-btn.btn-outline-dark{border:1px solid #e5e5e5;height:50px;line-height:55px;pointer-events:all;width:50px}.wishlist-btn.btn-outline-dark,.wishlist-btn.btn-outline-dark i{color:#8b572a;color:var(--color-heading)}.wishlist-btn.btn-outline-dark:hover{border-color:#f5a623;border-color:var(--color-secondary)}.btn-icon-round,.wishlist-btn.btn-outline-dark:hover i{color:#fff;color:var(--color-white)}.btn-icon-round{background-color:#4a90e2;background-color:var(--color-primary);border-radius:50%;font-size:12px;height:60px;line-height:60px;text-align:center;width:60px}.btn-icon-round:hover{background-color:#f5a623;background-color:var(--color-secondary);color:#fff;color:var(--color-white)}.countdown{display:flex}.countdown .countdown-section{margin-right:10px;text-align:center}.countdown .countdown-section:last-child{margin-right:0}.countdown .countdown-number{border-radius:50%;font-size:20px;font-weight:600;font-weight:var(--p-semi-bold);height:60px;line-height:1;line-height:60px;margin-bottom:10px;text-align:center;width:60px}.countdown .countdown-number.day{background-color:rgba(26,182,157,.1);color:#4a90e2;color:var(--color-primary)}.countdown .countdown-number.hour{background-color:rgba(238,74,98,.1);color:#f5a623;color:var(--color-secondary)}.countdown .countdown-number.minute{background-color:rgba(142,86,255,.1);color:#8e56ff;color:var(--color-extra02)}.countdown .countdown-number.second{background-color:rgba(248,148,31,.1);color:#f8941f;color:var(--color-extra05)}.countdown .countdown-unit{color:#9b9b9b;color:var(--color-body);font-size:15px;font-weight:500;font-weight:var(--p-medium);line-height:1}.coming-countdown{align-items:center;display:flex;justify-content:center}.coming-countdown .countdown-section{margin:0 30px;min-width:80px;position:relative}.coming-countdown .countdown-section:after{color:#fff;color:var(--color-white);content:\":\";font-size:30px;font-weight:var(--s-bold);position:absolute;right:-30px;top:-9px}.coming-countdown .countdown-section:last-child:after{display:none}.coming-countdown .countdown-number{color:#fff;color:var(--color-white);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:50px;font-weight:700;font-weight:var(--p-bold);line-height:1;margin-bottom:0}.coming-countdown .countdown-unit{color:hsla(0,0%,100%,.6);font-size:15px;font-weight:500}.edu-course-widget{background-color:#f5f9fa;border-radius:5px;margin-bottom:50px;padding:38px 30px 20px}@media only screen and (min-width:992px)and (max-width:1199px){.edu-course-widget{padding:38px 20px 20px}}@media only screen and (max-width:991px){.edu-course-widget{margin-bottom:30px}}.edu-course-widget .widget-title,.edu-course-widget:last-child{margin-bottom:0}.edu-course-widget .widget-title.widget-toggle{cursor:pointer;position:relative}.edu-course-widget .widget-title.widget-toggle:after{content:\"\";font-family:\"icomoon\";font-family:var(--font-icomoon);font-size:6px;position:absolute;right:0;top:8px;transform:rotate(180deg);transition:.3s;transition:var(--transition)}.edu-course-widget .content{padding-top:10px}.edu-course-widget .content .edu-form-check{margin:20px 0;position:relative}.edu-course-widget .content .edu-form-check label span{margin-left:2px}.edu-course-widget.collapsed .widget-title.widget-toggle:after{transform:rotate(0deg)}.edu-course-widget.widget-rating .content .edu-form-check label i{color:#eda803}.edu-course-widget.widget-rating .content .edu-form-check label i.off{color:#c8cbcc}.edu-course-widget.widget-course-summery{padding:15px}.edu-course-widget.widget-course-summery .widget-title{margin-bottom:16px}.edu-course-widget.widget-course-summery .thumbnail{margin-bottom:10px;position:relative}.edu-course-widget.widget-course-summery .thumbnail:after{background-color:#000;background-color:var(--color-black);border-radius:5px;bottom:0;content:\"\";height:100%;left:0;opacity:.3;position:absolute;right:0;top:0;width:100%}.edu-course-widget.widget-course-summery .thumbnail img{border-radius:5px;width:100%}.edu-course-widget.widget-course-summery .thumbnail .play-btn{align-items:center;background:#fff;background:var(--color-white);border-radius:50%;color:#f5a623;color:var(--color-secondary);display:inline-block;display:flex;font-size:18px;height:70px;justify-content:center;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition:.3s;transition:var(--transition);width:70px;z-index:1}.edu-course-widget.widget-course-summery .thumbnail .play-btn i{margin-left:5px}.edu-course-widget.widget-course-summery .thumbnail .play-btn:hover{background-color:#4a90e2;background-color:var(--color-primary);color:#fff;color:var(--color-white)}.edu-course-widget.widget-course-summery .content{padding:30px 25px 25px}@media only screen and (min-width:992px)and (max-width:1199px){.edu-course-widget.widget-course-summery .content{padding:30px 10px 25px}}@media only screen and (max-width:479px){.edu-course-widget.widget-course-summery .content{padding:30px 10px 25px}}.edu-course-widget.widget-course-summery .content .course-item li{align-items:center;border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);color:#8b572a;color:var(--color-heading);display:flex;font-weight:500;justify-content:space-between;margin:0;padding:15px 0}.edu-course-widget.widget-course-summery .content .course-item li:last-child{border-bottom:none}.edu-course-widget.widget-course-summery .content .course-item li i{font-size:24px;max-width:35px;padding-right:15px}.edu-course-widget.widget-course-summery .content .course-item li svg{margin-right:15px;max-width:35px}.edu-course-widget.widget-course-summery .content .course-item li .label{align-items:center;display:flex;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary)}.edu-course-widget.widget-course-summery .content .course-item li .price{color:#f5a623;color:var(--color-secondary);font-size:20px;font-weight:600;font-weight:var(--p-semi-bold)}.edu-course-widget.widget-course-summery .content .read-more-btn{margin-bottom:30px;margin-top:24px}.edu-course-widget.widget-course-summery .content .read-more-btn .edu-btn{width:100%}.edu-course-widget.widget-course-summery .content .share-area .title{margin-bottom:15px}.edu-course-widget.widget-course-summery .content .share-area .social-share{margin:-8px}.edu-course-widget.widget-course-summery .content .share-area .social-share li{margin:8px}.edu-course-widget.widget-course-summery .content .share-area .social-share li a{height:40px;line-height:40px;width:40px}@media only screen and (min-width:768px)and (max-width:991px){.edu-course-sidebar{margin-bottom:50px}}@media only screen and (max-width:767px){.edu-course-sidebar{margin-bottom:50px}}.course-sidebar-2{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 0 40px 0 rgba(0,0,0,.07)}@media only screen and (min-width:768px)and (max-width:991px){.course-sidebar-2{margin-bottom:50px}}@media only screen and (max-width:767px){.course-sidebar-2{margin-bottom:50px}}.course-sidebar-2 .edu-course-widget{background-color:transparent;margin-bottom:0;padding-bottom:0}.course-sidebar-2 .edu-course-widget .inner{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);padding-bottom:15px}.course-sidebar-2 .edu-course-widget:last-child .inner{border-bottom:none}.course-sidebar-3 .edu-blog-widget,.course-sidebar-3 .edu-course-widget{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 10px 50px 0 rgba(26,46,85,.07);margin-bottom:30px}.course-sidebar-3 .edu-blog-widget:last-child,.course-sidebar-3 .edu-course-widget:last-child{margin-bottom:0}.course-sidebar-3 .edu-blog-widget{padding:40px}@media only screen and (min-width:992px)and (max-width:1199px){.course-sidebar-3 .edu-blog-widget{padding:40px 25px}}@media only screen and (max-width:479px){.course-sidebar-3 .edu-blog-widget{padding:40px 25px}}.course-sidebar-3 .edu-blog-widget .widget-title{margin-bottom:40px}@media only screen and (max-width:991px){.course-sidebar-3{margin-top:50px}}@media only screen and (min-width:992px){.sidebar-top-position{margin-top:-365px;position:relative;z-index:2}}.edu-pagination{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding-top:70px}.edu-pagination li{margin:0 2px}.edu-pagination li a{color:#8b572a;color:var(--color-heading);display:block;font-size:18px;font-weight:600;height:50px;line-height:50px;position:relative;text-align:center;width:50px;z-index:1}.edu-pagination li a,.edu-pagination li a:before{border-radius:50%;transition:.3s;transition:var(--transition)}.edu-pagination li a:before{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.edu-pagination li a i{font-weight:700;position:relative;top:2px}.edu-pagination li.active a,.edu-pagination li:hover a{color:#fff;color:var(--color-white)}.edu-pagination li.active a:before,.edu-pagination li:hover a:before{opacity:1}.edu-pagination li.more-next a{position:relative}.edu-pagination li.more-next a:after{content:\". . .\";font-size:18px;font-weight:700;left:50%;position:absolute;top:40%;transform:translateY(-50%) translateX(-50%)}.edu-pagination.top-space-30{padding-top:30px}.section-title{margin-bottom:44px}@media only screen and (max-width:767px){.section-title{margin-bottom:40px}}.section-title .pre-title{display:inline-block;font-weight:500;letter-spacing:1px;margin-bottom:14px;text-transform:uppercase}.section-title .pre-title.pre-textsecondary{color:#f5a623;color:var(--color-secondary)}.section-title .title{margin-bottom:4px}@media only screen and (max-width:767px){.section-title .title br{display:none}}.section-title .shape-line{color:#4a90e2;color:var(--color-primary);display:block}.section-title p{margin-bottom:24px;margin-top:15px}.section-title.section-left{text-align:left}.section-title.section-center{text-align:center}.section-title-flex{display:flex}@media only screen and (max-width:767px){.section-title-flex{display:block;text-align:center}}.section-title-flex .left-content{flex:1;margin-bottom:20px;margin-right:90px;position:relative;text-align:right}@media only screen and (max-width:767px){.section-title-flex .left-content{margin-right:0;text-align:center}}.section-title-flex .left-content:after{background-color:#e5e1dc;content:\"\";height:83px;position:absolute;right:-45px;top:5px;width:1px}@media only screen and (max-width:767px){.section-title-flex .left-content:after{display:none}}.section-title-flex .right-content{flex:1}.section-title-flex .right-content p{color:#8b572a;color:var(--color-heading);margin:0}.splash-title .number{background:#31b978;background:linear-gradient(270deg,#31b978 0,#1ab69d 76%);-webkit-background-clip:text;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:60px;font-weight:700;line-height:1;margin-bottom:5px;-webkit-text-fill-color:transparent}@media only screen and (min-width:768px)and (max-width:991px){.splash-title .number{font-size:50px}}@media only screen and (max-width:767px){.splash-title .number{font-size:40px}}.splash-title .pre-title{background:#31b978;background:linear-gradient(270deg,#31b978 0,#1ab69d 76%);-webkit-background-clip:text;font-size:16px;font-weight:700;-webkit-text-fill-color:transparent}.splash-title .title{font-size:40px}@media only screen and (min-width:768px)and (max-width:991px){.splash-title .title{font-size:36px}}@media only screen and (max-width:767px){.splash-title .title{font-size:30px}}.swiper-wrapper .swiper-slide{padding:0 15px}.swiper-navigation .swiper-btn-nxt,.swiper-navigation .swiper-btn-prv{background-color:#fff;background-color:var(--color-white);border-radius:50%;color:#8b572a;color:var(--color-heading);display:inline-block;font-size:24px;height:60px;line-height:60px;margin-right:10px;text-align:center;transition:.3s;transition:var(--transition);width:60px}@media only screen and (max-width:767px){.swiper-navigation .swiper-btn-nxt,.swiper-navigation .swiper-btn-prv{font-size:18px;height:45px;line-height:45px;width:45px}}.swiper-navigation .swiper-btn-nxt:hover,.swiper-navigation .swiper-btn-prv:hover{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);color:#fff;color:var(--color-white)}.blog-gallery-activation{position:relative}.blog-gallery-activation .swiper-navigation .swiper-btn-nxt,.blog-gallery-activation .swiper-navigation .swiper-btn-prv{position:absolute;top:45%;z-index:1}.blog-gallery-activation .swiper-navigation .swiper-btn-nxt{left:30px}.blog-gallery-activation .swiper-navigation .swiper-btn-prv{right:20px}.testimonial-area-4 .swiper-navigation .swiper-btn-nxt,.testimonial-area-4 .swiper-navigation .swiper-btn-prv{border:1px solid #b8e986;border:1px solid var(--color-border)}.social-share{display:flex;flex-wrap:wrap;list-style:none;margin:-10px;padding:0}.social-share li{margin:10px}.social-share li a{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;color:#9b9b9b;color:var(--color-body);display:inline-block;font-size:16px;height:46px;line-height:46px;text-align:center;transition:.3s;width:46px}.social-share li a:hover{background-color:#4a90e2;background-color:var(--color-primary);border-color:#4a90e2;border-color:var(--color-primary);color:#fff;color:var(--color-white)}.social-share.icon-transparent{margin:0 -15px}.social-share.icon-transparent li{margin:0 15px}.social-share.icon-transparent li a{border:none;border-radius:0;color:#9b9b9b;color:var(--color-body);font-size:18px;height:auto;line-height:normal;transition:.4s;width:auto}.social-share.icon-transparent li a:hover{background-color:transparent;color:#4a90e2;color:var(--color-primary)}.about-image-gallery{padding:90px 0 60px;position:relative}@media only screen and (min-width:768px)and (max-width:991px){.about-image-gallery{text-align:center}}.about-image-gallery img{border-radius:10px}.about-image-gallery .video-box{position:absolute;right:40px;top:0}@media only screen and (max-width:575px){.about-image-gallery .video-box{right:0;transform:scale(.7)}}.about-image-gallery .video-box .inner{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 40px 70px rgba(27,20,78,.1);padding:20px}.about-image-gallery .video-box .inner .thumb{position:relative;text-align:center}.about-image-gallery .video-box .inner .thumb img{border-radius:6px}.about-image-gallery .video-box .inner .thumb .popup-icon{background-color:#fff;background-color:var(--color-white);border-radius:50%;color:#f5a623;color:var(--color-secondary);cursor:pointer;font-size:18px;height:60px;left:0;line-height:62px;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);width:60px}.about-image-gallery .video-box .inner .thumb .popup-icon i{margin-left:5px}.about-image-gallery .video-box .inner .thumb .popup-icon:hover{background-color:#4a90e2;background-color:var(--color-primary);color:#fff;color:var(--color-white)}.about-image-gallery .video-box .inner .loading-bar{margin:-20px 0;padding-top:20px}.about-image-gallery .video-box .inner .loading-bar span{background-color:#eaf0f2;border-radius:10px;display:block;height:7px;margin:20px 0}.about-image-gallery .video-box .inner .loading-bar span:first-child{width:80%}.about-image-gallery .video-box .inner .loading-bar span:nth-child(2n){width:45%}.about-image-gallery .award-status{bottom:0;position:absolute;right:70px}@media only screen and (max-width:479px){.about-image-gallery .award-status{right:0}}.about-image-gallery .award-status .inner{align-items:center;background:#fff;border-radius:10px;box-shadow:0 40px 70px rgba(27,20,78,.1);display:flex;padding:22px 20px 18px 30px}.about-image-gallery .award-status .inner .icon{align-items:center;background:rgba(26,182,157,.1);border-radius:50%;color:#4a90e2;color:var(--color-primary);display:flex;font-size:30px;height:60px;justify-content:center;margin-right:15px;width:60px}.about-image-gallery .award-status .inner .content{text-align:left}.about-image-gallery .award-status .inner .content .title{color:#4a90e2;color:var(--color-primary);font-size:24px;line-height:1;margin-bottom:0}.about-image-gallery .shape-group li{position:absolute;z-index:-1}.about-image-gallery .shape-group li.shape-1{left:-100px;top:20px}@media only screen and (max-width:991px){.about-image-gallery .shape-group li.shape-1{left:0}}.about-image-gallery .shape-group li.shape-2{bottom:-30px;right:130px}.about-content{padding-left:30px}@media only screen and (max-width:991px){.about-content{padding-left:0}}.about-content .section-title{margin-bottom:20px}.about-content .features-list li{color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-weight:500;font-weight:var(--p-medium);margin-bottom:16px;margin-top:16px;padding-left:35px;position:relative}.about-content .features-list li:before{color:#7ed321;color:var(--color-tertiary);content:\"\";font-family:\"icomoon\";font-size:19px;left:0;position:absolute;top:-3px}.about-style-1,.about-style-2{position:relative}.about-style-1 .shape-group li,.about-style-2 .shape-group li{position:absolute;right:-210px;top:107px;z-index:-1}.about-style-1 .shape-group li.shape-1.circle span,.about-style-2 .shape-group li.shape-1.circle span{border:15px solid #7ed321;border:15px solid var(--color-tertiary);border-radius:50%;display:block;height:101px;width:101px}@media only screen and (max-width:1650px){.about-style-1 .shape-group li,.about-style-2 .shape-group li{right:-110px}}@media only screen and (min-width:1200px)and (max-width:1450px){.about-style-1 .shape-group li,.about-style-2 .shape-group li{right:-50px}}@media only screen and (max-width:991px){.about-style-1 .about-image-gallery .shape-group li{display:none}}.about-style-1 .about-image-gallery .shape-group li.shape-1{left:-100px;top:20px}.about-style-1 .about-image-gallery .shape-group li.shape-2{left:-50px;top:4px}.about-style-1 .about-image-gallery .shape-group li.shape-3{bottom:-33px;right:120px;top:inherit}.about-style-2 .about-image-gallery{padding:80px 0 60px 70px;position:relative}@media only screen and (max-width:767px){.about-style-2 .about-image-gallery{padding:0}}.about-style-2 .about-image-gallery .author-box{max-width:220px;position:absolute;right:0;top:15px}@media only screen and (max-width:767px){.about-style-2 .about-image-gallery .author-box{display:none}}.about-style-2 .about-image-gallery .author-box .inner{background-color:#fff;background-color:var(--color-white);border-radius:10px 40px 10px 80px;box-shadow:0 40px 70px rgba(15,11,44,.2);padding:40px 20px;text-align:center}.about-style-2 .about-image-gallery .author-box .inner .thumb{margin-bottom:20px}.about-style-2 .about-image-gallery .author-box .inner .content .title{margin-bottom:10px}.about-style-2 .about-image-gallery .author-box .inner .content p{margin-bottom:0}.about-style-2 .about-image-gallery .award-status{left:0;right:auto}.about-style-2 .about-image-gallery .award-status .inner{border-radius:30px 10px 50px 10px;box-shadow:0 40px 60px rgba(15,11,44,.15)}.about-style-2 .about-image-gallery .award-status .inner .icon{background:rgba(238,74,98,.1);color:#f5a623;color:var(--color-secondary)}.about-style-2 .about-image-gallery .award-status .inner .content .title{color:#f5a623;color:var(--color-secondary)}.about-style-2 .about-image-gallery .award-status .inner .content .subtitle{color:#8b572a;color:var(--color-heading)}.about-style-2 .about-image-gallery .shape-group li.shape-1{left:-55px;right:inherit;top:0}.about-style-2 .about-image-gallery .shape-group li.shape-2{bottom:inherit;left:0;right:inherit;top:0}.about-style-2 .about-image-gallery .shape-group li.shape-3{bottom:-15px;right:-5px;top:inherit}.about-style-2 .about-content{padding-left:80px}@media only screen and (max-width:1199px){.about-style-2 .about-content{padding-left:30px}}@media only screen and (max-width:991px){.about-style-2 .about-content{padding-left:0}}.about-style-3{padding:90px 0 120px;position:relative}@media only screen and (min-width:768px)and (max-width:991px){.about-style-3{padding:90px 0 100px}}@media only screen and (max-width:767px){.about-style-3{padding:80px 0}}.about-style-3 .about-content{padding-left:0;padding-right:30px}@media only screen and (max-width:575px){.about-style-3 .about-content{padding-right:0}}.about-style-3 .about-content .section-title{margin-bottom:34px}.about-style-3 .about-content .nav-tabs{border-bottom:none;margin:-8px -16px;padding-bottom:20px}.about-style-3 .about-content .nav-tabs .nav-item{margin:8px 16px;position:relative}.about-style-3 .about-content .nav-tabs .nav-item:after{background-color:#e5e5e5;content:\"\";height:14px;position:absolute;right:-18px;top:2px;width:2px}.about-style-3 .about-content .nav-tabs .nav-item:last-child:after{display:none}.about-style-3 .about-content .nav-tabs .nav-link{background-color:transparent;border:none;color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:17px;font-weight:600;font-weight:var(--p-semi-bold);padding:0 0 1px;position:relative}.about-style-3 .about-content .nav-tabs .nav-link:after{background-color:#f5a623;background-color:var(--color-secondary);bottom:0;content:\"\";height:2px;left:0;opacity:0;position:absolute;transition:.3s;transition:var(--transition);width:0}.about-style-3 .about-content .nav-tabs .nav-link.active,.about-style-3 .about-content .nav-tabs .nav-link:hover{color:#f5a623;color:var(--color-secondary)}.about-style-3 .about-content .nav-tabs .nav-link.active:after,.about-style-3 .about-content .nav-tabs .nav-link:hover:after{opacity:1;width:100%}.about-style-3 .about-content .tab-content p{margin-bottom:20px}.about-style-3 .about-content .tab-content .features-list li:before{color:#f5a623;color:var(--color-secondary)}.about-style-3 .about-image-gallery{padding:80px 0 65px 30px}@media only screen and (min-width:768px)and (max-width:991px){.about-style-3 .about-image-gallery{padding:20px 0 65px;text-align:left}}@media only screen and (max-width:767px){.about-style-3 .about-image-gallery{padding:20px 0 65px}}@media only screen and (max-width:479px){.about-style-3 .about-image-gallery{padding:0}}.about-style-3 .about-image-gallery .main-img-2{bottom:0;position:absolute;right:0}@media only screen and (min-width:768px)and (max-width:991px){.about-style-3 .about-image-gallery .main-img-2{right:115px}}@media only screen and (max-width:479px){.about-style-3 .about-image-gallery .main-img-2{display:none}}.about-style-3 .about-image-gallery .shape-group li{position:absolute;z-index:-1}.about-style-3 .about-image-gallery .shape-group li img{position:static}.about-style-3 .about-image-gallery .shape-group li.shape-1{left:inherit;right:95px;top:-15px}.about-style-3 .about-image-gallery .shape-group li.shape-2{bottom:inherit;left:inherit;right:39px;top:13px;z-index:-2}.about-style-3 .about-image-gallery .shape-group li.shape-3{bottom:33px;left:-2px;right:inherit;top:inherit}.about-style-3 .about-image-gallery .shape-group li.shape-4{bottom:-25px;right:40px;z-index:-1}.about-style-3 .about-image-gallery .shape-group li.shape-4 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:320px;width:320px}@media only screen and (max-width:767px){.about-style-3 .shape-group{display:none}}.about-style-3 .shape-group li{position:absolute;z-index:-1}.about-style-3 .shape-group li img{position:static}.about-style-3 .shape-group li.shape-1{left:110px;top:20px}@media only screen and (max-width:1650px){.about-style-3 .shape-group li.shape-1{left:0;top:0}}@media only screen and (min-width:1200px)and (max-width:1450px){.about-style-3 .shape-group li.shape-1{left:-90px}}.about-style-3 .shape-group li.shape-2{left:80px;top:-350px;z-index:-1}@media only screen and (max-width:1650px){.about-style-3 .shape-group li.shape-2{left:0}}@media only screen and (min-width:1200px)and (max-width:1450px){.about-style-3 .shape-group li.shape-2{left:-90px}}.about-style-4 .about-content{padding-left:30px;padding-right:0}.about-style-4 .about-content .section-title p{margin-top:26px}.about-style-4 .about-content .features-list{margin-bottom:35px}.about-style-4 .about-content .features-list li:before{color:#f5a623;color:var(--color-secondary)}.about-style-4 .about-image-gallery{margin-right:30px;padding:80px 0 65px}.about-style-4 .about-image-gallery .main-img-1{background-color:#fff;background-color:var(--color-white);border-radius:20px;box-shadow:0 20px 40px 0 rgba(42,11,88,.1);display:inline-block;padding:20px}.about-style-4 .about-image-gallery .main-img-2{bottom:0;position:absolute;right:0}.about-style-4 .about-image-gallery .shape-group .shape-1{left:inherit;right:85px;top:0}.about-style-4 .about-image-gallery .shape-group .shape-2{bottom:inherit;left:inherit;right:31px;top:32px;z-index:-2}.about-style-4 .about-image-gallery .shape-group .shape-3{bottom:32px;left:-32px;right:inherit}.about-style-4 .about-image-gallery .shape-group .shape-4{bottom:-25px;right:70px;z-index:-1}.about-style-4 .about-image-gallery .shape-group .shape-4 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:320px;width:320px}.about-style-5{position:relative}.about-style-5 .section-title{margin-bottom:60px}.about-style-5 .about-image-gallery{padding:0}@media only screen and (max-width:1199px){.about-style-5 .about-image-gallery .shape-group{display:block}}.about-style-5 .about-image-gallery .shape-group li.shape-1{bottom:inherit;left:inherit;right:-10px;top:-40px;z-index:1}.about-style-5 .about-image-gallery .shape-group li.shape-2{animation:rotateIt 10s linear infinite;bottom:-78px;left:-80px;right:auto}.about-style-5 .about-content .features-list{padding-bottom:18px}.about-style-5 .about-content .features-list li:before{color:#f5a623;color:var(--color-secondary)}.about-style-5 .shape-group li{position:absolute;z-index:-1}.about-style-5 .shape-group li.shape-1{bottom:80px;right:180px}.about-style-6{background-color:#fff;background-color:var(--color-white);padding:90px 0 50px;position:relative;z-index:2}@media only screen and (max-width:767px){.about-style-6{padding:50px 0}}@media only screen and (max-width:479px){.about-style-6{padding:20px 0 50px}}.about-style-6:after{content:url(/images/about/shape-32.png);left:0;position:absolute;right:0;top:-110px;z-index:2}.about-style-6 .about-content .section-title{margin-bottom:30px}.about-style-6 .about-content .section-title p{margin-top:25px}.about-style-6 .about-content .about-mission{margin-bottom:20px}.about-style-6 .about-content .about-mission .title{margin-bottom:14px}.about-style-6 .about-content .about-mission p{margin-bottom:25px}.about-style-6 .about-content .about-mission .features-list li:before{color:#f5a623;color:var(--color-secondary)}.about-style-6 .about-image-gallery{padding:0}.about-style-6 .about-image-gallery .main-img-2{margin-top:-240px;text-align:right}@media only screen and (max-width:575px){.about-style-6 .about-image-gallery .main-img-2{display:none}}.about-style-6 .about-image-gallery .shape-group .shape-1{left:auto;right:35px;top:130px}.about-style-6 .about-image-gallery .shape-group .shape-2{animation:rotateIt 10s linear infinite;bottom:240px;left:-15px;right:auto;z-index:1}.about-style-6 .about-image-gallery .shape-group .shape-3{bottom:110px;left:20px}.about-style-7{position:relative}.about-style-7 .about-image-gallery{padding:80px 0 0 70px;position:relative}@media only screen and (max-width:767px){.about-style-7 .about-image-gallery{padding:0}}.about-style-7 .about-image-gallery .main-img-2{position:absolute;right:0;top:15px}@media only screen and (max-width:767px){.about-style-7 .about-image-gallery .main-img-2,.about-style-7 .about-image-gallery .shape-group{display:none}}.about-style-7 .about-image-gallery .shape-group li{position:absolute;z-index:-1}.about-style-7 .about-image-gallery .shape-group li img{position:static}.about-style-7 .about-image-gallery .shape-group li.shape-1{left:-55px;top:0}.about-style-7 .about-image-gallery .shape-group li.shape-2{bottom:inherit;left:0;right:inherit;top:0}.about-style-7 .about-image-gallery .shape-group li.shape-3{bottom:-60px;right:-10px}.about-style-7 .about-image-gallery .shape-group li.shape-4{bottom:-80px;left:10px;z-index:1}.about-style-7 .about-content{padding-left:0;padding-right:80px}@media only screen and (max-width:1199px){.about-style-7 .about-content{padding-right:30px}}@media only screen and (max-width:991px){.about-style-7 .about-content{padding-right:0}}.about-style-7 .about-content .section-title p{margin-bottom:28px;margin-top:30px}.about-style-7>.shape-group>li{border:16px solid #f8b81f;border-radius:50%;height:100px;left:125px;position:absolute;top:75px;width:100px;z-index:-1}@media only screen and (max-width:1650px){.about-style-7>.shape-group>li{left:20px}}@media only screen and (min-width:1200px)and (max-width:1400px){.about-style-7>.shape-group>li{left:-20px;top:45px}}.about-style-8{position:relative}.about-style-8:before{background:linear-gradient(-90deg,#f5f1eb,hsla(36,33%,94%,.3));-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 90%);clip-path:polygon(0 0,100% 0,100% 100%,0 90%);content:\"\";height:1030px;left:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.about-style-8 .about-content{padding-left:0;padding-right:40px}@media only screen and (max-width:767px){.about-style-8 .about-content{padding-right:0}}.about-style-8 .about-content .section-title p{margin-top:30px}.about-style-8 .about-content .about-mission{align-items:center;display:flex;margin-top:45px}@media only screen and (max-width:575px){.about-style-8 .about-content .about-mission{display:block}}.about-style-8 .about-content .about-mission .single-item{flex:1;padding-right:50px}@media only screen and (max-width:575px){.about-style-8 .about-content .about-mission .single-item{margin-bottom:30px;padding-right:0}}.about-style-8 .about-content .about-mission .single-item:last-child{padding-right:0}.about-style-8 .about-content .about-mission .single-item .icon{font-size:50px;line-height:1;margin-bottom:25px}.about-style-8 .about-content .about-mission .single-item .icon.color-extra02{color:#8e56ff;color:var(--color-extra02)}.about-style-8 .about-content .about-mission .single-item .icon.color-extra06{color:#39c0fa;color:var(--color-extra06)}.about-style-8 .about-content .about-mission .single-item .title{margin-bottom:10px}.about-style-8 .about-image-gallery{padding:0}.about-style-8 .about-image-gallery .thumbnail img{width:100%}.about-style-8 .about-image-gallery .thumbnail-1{margin-top:40px;text-align:right}.about-style-8 .about-image-gallery .thumbnail-1 img{border-radius:70px 10px 10px 10px}.about-style-8 .about-image-gallery .thumbnail-2 img{border-radius:10px}.about-style-8 .about-image-gallery .thumbnail-3{text-align:right}.about-style-8 .about-image-gallery .thumbnail-3 img{border-radius:10px 10px 90px 10px}.about-style-8 .about-image-gallery .thumbnail-4 img{border-radius:10px}.about-style-8 .about-image-gallery .shape-group li img{position:static}.about-style-8 .about-image-gallery .shape-group li.shape-1{left:-90px;top:0}.about-style-8 .about-image-gallery .shape-group li.shape-2{bottom:inherit;left:25px;right:inherit;top:-20px}.about-style-8 .about-image-gallery .shape-group li.shape-3{bottom:20px;right:-70px}@media only screen and (max-width:991px){.about-style-8 .about-image-gallery .shape-group li.shape-3{display:none}}.about-style-8 .about-image-gallery .shape-group li.shape-4{bottom:-75px;right:-165px}.about-style-8 .about-image-gallery .shape-group li.shape-4 span{border:1px solid #e8e6e3;border-radius:50%;display:block;height:400px;width:400px}.about-style-8:after{border:1px solid #e8e6e3;border-radius:50%;content:\"\";height:600px;left:-70px;position:absolute;top:-175px;width:600px;z-index:-1}@media only screen and (max-width:1650px){.about-style-8:after{left:-195px}}@media only screen and (min-width:1200px)and (max-width:1400px){.about-style-8:after{left:-250px}}.brand-section-heading{padding-right:60px}@media only screen and (max-width:575px){.brand-section-heading{padding-right:0}}.brand-grid-wrap{display:grid;grid-template-columns:repeat(10,1fr);position:relative}.brand-grid-wrap:after{background-color:#f0f0f0;content:\"\";height:1px;left:0;position:absolute;right:0;top:50%;transform:translateY(-50%);width:100%}.brand-grid-wrap .brand-grid{border-right:1px solid #f0f0f0;padding:18px 5px;text-align:center;transition:.3s;transition:var(--transition)}.brand-grid-wrap .brand-grid:hover{box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker)}.brand-grid-wrap.brand-style-2{grid-template-columns:repeat(6,1fr)}@media only screen and (max-width:991px){.brand-grid-wrap.brand-style-2{grid-template-columns:repeat(3,1fr)}}@media only screen and (max-width:479px){.brand-grid-wrap.brand-style-2{grid-template-columns:repeat(2,1fr)}}.brand-grid-wrap.brand-style-2:after{display:none}.brand-grid-wrap.brand-style-2 .brand-grid{padding:10px 20px}.brand-grid-wrap.brand-style-2 .brand-grid:first-child{border-left:none}@media only screen and (max-width:479px){.brand-grid-wrap.brand-style-2 .brand-grid:nth-child(2n){border-right:none}}@media only screen and (max-width:991px){.brand-grid-wrap.brand-style-2 .brand-grid:nth-child(3n){border-right:none}}@media only screen and (max-width:479px){.brand-grid-wrap.brand-style-2 .brand-grid:nth-child(3n){border-right:1px solid #f0f0f0}}.brand-grid-wrap.brand-style-2 .brand-grid:nth-child(5n){border-left:none}.brand-grid-wrap.brand-style-2 .brand-grid:last-child{border-right:none}.brand-grid-wrap.brand-style-2 .brand-grid:hover{box-shadow:none}.brand-grid-wrap.brand-style-3{gap:10px;grid-template-columns:repeat(5,1fr)}@media only screen and (max-width:991px){.brand-grid-wrap.brand-style-3{grid-template-columns:repeat(3,1fr)}}@media only screen and (max-width:767px){.brand-grid-wrap.brand-style-3{grid-template-columns:repeat(2,1fr)}}@media only screen and (max-width:575px){.brand-grid-wrap.brand-style-3{grid-template-columns:repeat(1,1fr)}}.brand-grid-wrap.brand-style-3:after{display:none}.brand-grid-wrap.brand-style-3 .brand-grid{background-color:#f7f5f2;background-color:var(--color-lighten04);border:none;border-radius:5px;opacity:.4;padding:30px 0}.brand-grid-wrap.brand-style-3 .brand-grid:hover{box-shadow:none;opacity:1}.brand-area-2{background:#f9f7f4;overflow:hidden;padding:75px 0;position:relative}@media only screen and (max-width:575px){.brand-area-2{padding:50px 0}}.brand-area-2 .shape-group li{position:absolute;z-index:-1}.brand-area-2 .shape-group li.shape-1{bottom:-170px;left:-220px}.brand-area-2 .shape-group li.shape-2{right:-21px;top:-22px;z-index:1}@media only screen and (min-width:1200px)and (max-width:1599px){.brand-area-2 .shape-group li.shape-2{right:-70px;top:-60px}}@media only screen and (min-width:1200px)and (max-width:1400px){.brand-area-2 .shape-group li.shape-2{display:none}}.brand-area-5{background-position:bottom;padding:400px 0 120px;position:relative}.brand-area-5:before{background-image:url(/images/bg/bg-image-20.svg);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.brand-area-5:before svg{background:#f7f5f2;background:linear-gradient(-90deg,#f7f5f2,hsla(36,24%,96%,.302) 50%)}@media only screen and (min-width:768px)and (max-width:991px){.brand-area-5{padding:380px 0 100px}}@media only screen and (max-width:767px){.brand-area-5{margin-top:100px;padding:260px 0 80px}}@media only screen and (max-width:991px){.brand-area-5{background:none;background-color:#fcfbfa}}@media only screen and (max-width:575px){.brand-area-5{margin-top:80px;padding:80px 0}}.edu-cta-banner-area{background-color:#f0f4f5;padding:102px 0;position:relative}.edu-cta-banner-area:before{background-image:url(/images/cta/cta.svg);background-position:bottom;background-repeat:no-repeat;background-size:cover;bottom:0;content:\"\";filter:brightness(0) saturate(100%) invert(52%) sepia(75%) saturate(451%) hue-rotate(121deg) brightness(96%) contrast(90%);height:100%;left:0;position:absolute;width:100%}@media only screen and (min-width:768px)and (max-width:991px){.edu-cta-banner-area{padding:80px 0 70px}}@media only screen and (max-width:767px){.edu-cta-banner-area{padding:80px 0 70px}}@media only screen and (min-width:768px)and (max-width:991px){.edu-cta-banner-area .shape-group{display:none}}@media only screen and (max-width:767px){.edu-cta-banner-area .shape-group{display:none}}.cta-banner-2{background-color:#f7f5f2;overflow:hidden;position:relative;z-index:1}.cta-banner-2:before{display:none}.cta-banner-2 .shape-group li{margin:0;position:absolute;z-index:-1}.cta-banner-2 .shape-group li.shape-1{left:100px;top:30px}.cta-banner-2 .shape-group li.shape-2{bottom:-20px;left:17%}.cta-banner-2 .shape-group li.shape-3{bottom:60px;right:120px}.cta-banner-2 .shape-group li.shape-4{right:18%;top:10px}.cta-banner-2 .shape-group li.shape-5{bottom:-55px;left:50%;transform:translateX(-50%)}.cta-banner-2 .shape-group li.shape-5 img{opacity:1;transform:scaleX(1)}.cta-banner-3{background-color:transparent;padding:220px 0 130px;position:relative;z-index:1}.cta-banner-3:before{background-image:url(/images/bg/bg-image-4.svg);content:\"\";filter:brightness(0) saturate(100%) invert(93%) sepia(4%) saturate(983%) hue-rotate(324deg) brightness(104%) contrast(94%);height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (max-width:767px){.cta-banner-3{padding:150px 0 80px}}.cta-banner-3 .edu-cta-banner .section-title .title{margin-bottom:40px}.cta-banner-3 .edu-cta-banner .newsletter-form{margin:0 auto;width:82%}@media only screen and (max-width:767px){.cta-banner-3 .edu-cta-banner .newsletter-form{width:100%}}@media only screen and (max-width:1199px){.cta-banner-3 .shape-group{display:block}}@media only screen and (max-width:991px){.cta-banner-3 .shape-group{display:none}}.cta-banner-3 .shape-group li{margin:0;position:absolute;z-index:-1}.cta-banner-3 .shape-group li.shape-1{bottom:-70px;left:-290px;z-index:0}@media only screen and (max-width:1199px),only screen and (min-width:1200px)and (max-width:1599px){.cta-banner-3 .shape-group li.shape-1{left:-60px}.cta-banner-3 .shape-group li.shape-1 img{width:60%}}.cta-banner-3 .shape-group li.shape-2{bottom:-105px;right:-175px;z-index:0}@media only screen and (min-width:1200px)and (max-width:1599px){.cta-banner-3 .shape-group li.shape-2{bottom:-25px;right:-100px}}@media only screen and (max-width:1199px){.cta-banner-3 .shape-group li.shape-2{bottom:-25px;right:-130px}}@media only screen and (max-width:1199px),only screen and (min-width:1200px)and (max-width:1599px){.cta-banner-3 .shape-group li.shape-2 img{width:70%}}.cta-banner-3 .shape-group li.shape-3{left:119px;top:-70px}.cta-banner-3 .shape-group li.shape-3 img{opacity:.3}@media only screen and (max-width:1199px),only screen and (min-width:1200px)and (max-width:1599px){.cta-banner-3 .shape-group li.shape-3 img{width:70%}}.cta-banner-3 .shape-group li.shape-4{bottom:-115px;right:180px}.cta-banner-3 .shape-group li.shape-4 img{opacity:.3}@media only screen and (max-width:1199px),only screen and (min-width:1200px)and (max-width:1599px){.cta-banner-3 .shape-group li.shape-4 img{width:70%}}.edu-cta-banner{position:relative;z-index:1}.edu-cta-banner .section-title{margin-bottom:0}.edu-cta-banner .section-title .title{margin-bottom:28px}@media only screen and (max-width:767px){.edu-cta-banner .shape-group{display:none}}.edu-cta-banner .shape-group li{position:absolute;z-index:-1}.edu-cta-banner .shape-group li.shape-1{bottom:0;left:-130px}.edu-cta-banner .shape-group li.shape-2{right:-160px;top:-105px}.university-cta-wrapper{background-color:#f7f5f2}.university-cta-wrapper.edu-cta-banner-area:before{filter:brightness(0) saturate(100%) invert(90%) sepia(23%) saturate(5531%) hue-rotate(343deg) brightness(101%) contrast(94%)}.online-academy-cta-wrapper.edu-cta-banner-area{background-image:url(/images/cta/h-4-cta.png)}.online-academy-cta-wrapper.edu-cta-banner-area:before{background-image:url(/images/cta/h-4-cta.svg);background-repeat:no-repeat;background-size:cover;filter:brightness(0) saturate(100%) invert(99%) sepia(3%) saturate(10%) hue-rotate(90deg) brightness(105%) contrast(90%);-webkit-filter:brightness(0) saturate(100%) invert(99%) sepia(3%) saturate(10%) hue-rotate(90deg) brightness(105%) contrast(90%)}.home-one-cta-wrapper,.online-academy-cta-wrapper,.university-cta-wrapper{overflow:hidden}.home-one-cta-wrapper .edu-cta-banner .shape-group li.shape-01,.online-academy-cta-wrapper .edu-cta-banner .shape-group li.shape-01,.university-cta-wrapper .edu-cta-banner .shape-group li.shape-01{left:-68px;top:109px}.home-one-cta-wrapper .edu-cta-banner .shape-group li.shape-02,.online-academy-cta-wrapper .edu-cta-banner .shape-group li.shape-02,.university-cta-wrapper .edu-cta-banner .shape-group li.shape-02{bottom:29px;left:11px}.home-one-cta-wrapper .edu-cta-banner .shape-group li.shape-03,.online-academy-cta-wrapper .edu-cta-banner .shape-group li.shape-03,.university-cta-wrapper .edu-cta-banner .shape-group li.shape-03{right:-168px;top:-61px;z-index:0}.home-one-cta-wrapper .edu-cta-banner .shape-group li.shape-04,.online-academy-cta-wrapper .edu-cta-banner .shape-group li.shape-04,.university-cta-wrapper .edu-cta-banner .shape-group li.shape-04{right:-118px;top:-126px}.cta-area-2{margin-top:-70px;position:relative;z-index:1}.cta-area-2 .edu-cta-box:before{filter:brightness(0) saturate(100%) invert(56%) sepia(0) saturate(0) hue-rotate(221deg) brightness(90%) contrast(90%)}.edu-cta-box{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);border-radius:10px;padding:50px;position:relative}.edu-cta-box:before{background-image:url(/images/bg/cta-bg-imgae-07.png);background-repeat:no-repeat;background-size:cover;bottom:0;content:\"\";height:100%;left:0;position:absolute;width:100%}@media only screen and (max-width:767px){.edu-cta-box{padding:40px 30px}}.edu-cta-box.home-four-cta .title a:hover,.edu-cta-box.home-one-cta .title a:hover{color:hsla(0,0%,100%,.85)}.edu-cta-box.home-four-cta .shape-group li.shape-01,.edu-cta-box.home-one-cta .shape-group li.shape-01{left:-118px;top:-11px}.edu-cta-box.home-four-cta .shape-group li.shape-02,.edu-cta-box.home-one-cta .shape-group li.shape-02{left:-63px;top:-31px;z-index:-2}.edu-cta-box.home-four-cta .shape-group li.shape-03,.edu-cta-box.home-one-cta .shape-group li.shape-03{bottom:-50px;right:-45px}.edu-cta-box .inner{align-items:center;display:flex;justify-content:center;position:relative;z-index:12}@media only screen and (max-width:767px){.edu-cta-box .inner{flex-direction:column;text-align:center}}.edu-cta-box .inner .content{font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary)}.edu-cta-box .inner .content .subtitle{color:#fff;font-size:18px;font-weight:500;font-weight:var(--p-medium)}.edu-cta-box .inner .content .title{color:#fff;font-size:26px;margin-bottom:0}@media only screen and (max-width:767px){.edu-cta-box .inner .content .title{font-size:20px}}.edu-cta-box .inner .sparator{margin:0 30px}@media only screen and (max-width:767px){.edu-cta-box .inner .sparator{margin:15px 0}}.edu-cta-box .inner .sparator span{background-color:#fff;border:4px solid rgba(26,182,157,.2);border-radius:50%;color:#4a90e2;color:var(--color-primary);display:block;font-size:24px;font-weight:600;font-weight:var(--p-semi-bold);height:70px;line-height:60px;text-align:center;width:70px}.edu-cta-box .shape-group li{margin:0;position:absolute;z-index:-1}.edu-cta-box .shape-group li.shape-1{left:-118px;top:-31px}.edu-cta-box .shape-group li.shape-2{bottom:-50px;right:-45px}.edu-cta-box.cta-style-3{background:#f5a623;background:var(--color-secondary)}@media only screen and (max-width:767px){.edu-cta-box.cta-style-3{padding:40px 30px}}.edu-cta-box.cta-style-3 .inner .content .subtitle{color:#fff;color:var(--color-white)}.edu-cta-box.cta-style-3 .inner .content .title{color:#fff;color:var(--color-white);font-weight:600;font-weight:var(--p-semi-bold)}.edu-cta-box.cta-style-3 .inner .sparator span{border:4px solid rgba(238,74,98,.7);color:#f5a623;color:var(--color-secondary)}.edu-cta-box.cta-style-2{background:#7ed321;background:var(--color-tertiary)}.edu-cta-box.cta-style-2 .inner .content .subtitle,.edu-cta-box.cta-style-2 .inner .content .title a{color:#8b572a;color:var(--color-heading)}.edu-cta-box.cta-style-2 .inner .content .title a:hover{color:hsla(0,0%,9%,.75)}.edu-cta-box.cta-style-2 .inner .sparator span{border-color:rgba(20,20,23,.1);color:#000}@media only screen and (max-width:575px){.newsletter-form .input-group{display:block;text-align:left}}.newsletter-form .input-group .form-control{background-color:#fff;background-color:var(--color-white);border:none;border-radius:5px!important;color:#8b572a;color:var(--color-heading);height:60px;padding:0 40px}@media only screen and (max-width:767px){.newsletter-form .input-group .form-control{height:50px}}@media only screen and (max-width:575px){.newsletter-form .input-group .form-control{width:100%}}.newsletter-form .input-group .form-control::-moz-placeholder{color:#8b572a;color:var(--color-heading);opacity:1}.newsletter-form .input-group .form-control::placeholder{color:#8b572a;color:var(--color-heading);opacity:1}.newsletter-form .input-group .form-control:-ms-input-placeholder{color:#8b572a;color:var(--color-heading);opacity:1}.newsletter-form .input-group .form-control::-ms-input-placeholder{color:#8b572a;color:var(--color-heading);opacity:1}.newsletter-form .input-group .form-control:focus{box-shadow:none}.newsletter-form .input-group button{border-radius:30px 5px!important;margin-left:20px!important;padding:0 40px}@media only screen and (max-width:575px){.newsletter-form .input-group button{margin:20px 0 0!important}}.newsletter-form .input-group button:hover{border-radius:5px 30px!important}.campus-thumbnail .thumbnail img{border-radius:5px}@media only screen and (max-width:1199px){.campus-thumbnail .thumbnail img{width:100%}}.campus-content{background-color:#fff;background-color:var(--color-white);border-radius:0 5px 5px 5px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);margin-left:-120px;margin-top:90px;padding:60px 50px 60px 70px}@media only screen and (max-width:1199px){.campus-content{margin-left:0;margin-top:20px}}@media only screen and (max-width:575px){.campus-content{box-shadow:none;padding:0}}.campus-content .features-box{background-color:transparent;box-shadow:none;display:flex;margin-bottom:24px;padding:0;text-align:left}.campus-content .features-box:last-child{margin-bottom:0}.campus-content .features-box .icon{font-size:48px;margin-bottom:0;margin-right:20px}.campus-content .features-box .icon .fitness-icon{font-size:32px}.campus-content .features-box .content{flex:1}.campus-content .features-box .content .title{margin-bottom:12px}.campus-content .features-box .content p{color:#9b9b9b;color:var(--color-body)}.edu-campus-area,.edu-campus-area .campus-image-gallery{position:relative}.edu-campus-area .campus-image-gallery .shape-1{bottom:-220px;left:-235px;z-index:-1}.edu-campus-area .campus-image-gallery .shape-1 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:470px;width:470px}.edu-campus-area .campus-image-gallery .shape-2{bottom:-84px;left:-144px}.edu-campus-area .campus-image-gallery .shape-3{bottom:-118px;left:-85px}.edu-campus-area .campus-content{position:relative}.edu-campus-area .campus-content .shape-4{right:-158px;top:-140px;z-index:-1}.edu-campus-area .campus-content .shape-4 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:320px;width:320px}.edu-campus-area .campus-content .shape-5{right:-64px;top:-33px}.edu-campus-area .campus-content .shape-5 span{background:#f3f8fa;border-radius:100%;display:block;height:150px;width:150px}.edu-campus-area .campus-content .shape-6{right:-28px;top:-80px;z-index:0}.categorie-area-3{position:relative}.categorie-area-3:before{background-image:url(/images/bg/bg-image-4.jpg);background-size:cover;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.categorie-grid{border-radius:5px;padding:50px 30px;text-align:center}.categorie-grid,.categorie-grid .icon{transition:.3s;transition:var(--transition)}.categorie-grid .icon{align-items:center;border-radius:50%;display:flex;font-size:48px;height:80px;justify-content:center;margin:0 auto 28px;width:80px}.categorie-grid .content .title{margin-bottom:15px;transition:.3s;transition:var(--transition)}.categorie-grid .content p{color:#8b572a;color:var(--color-heading);margin-bottom:25px;transition:.3s;transition:var(--transition)}.categorie-grid .content .course-remain{border-radius:5px;display:inline-block;font-weight:500;padding:2px 18px;transition:.3s;transition:var(--transition)}.categorie-grid:hover .content .title,.categorie-grid:hover .content p{color:#fff;color:var(--color-white)}.categorie-grid:hover .icon svg path{stroke:#fff;stroke:var(--color-white)}.categorie-grid.color-primary-style{background-color:rgba(26,182,157,.07)}.categorie-grid.color-primary-style .course-remain,.categorie-grid.color-primary-style .icon{background-color:rgba(26,182,157,.1);color:#4a90e2;color:var(--color-primary)}.categorie-grid.color-primary-style:hover{background-color:#1ab69d}.categorie-grid.color-primary-style:hover .course-remain,.categorie-grid.color-primary-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-secondary-style{background-color:rgba(238,74,98,.07)}.categorie-grid.color-secondary-style .course-remain,.categorie-grid.color-secondary-style .icon{background-color:rgba(238,74,98,.1);color:#f5a623;color:var(--color-secondary)}.categorie-grid.color-secondary-style:hover{background-color:#ee4a62}.categorie-grid.color-secondary-style:hover .course-remain,.categorie-grid.color-secondary-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-tertiary-style{background-color:rgba(248,184,31,.07)}.categorie-grid.color-tertiary-style .course-remain,.categorie-grid.color-tertiary-style .icon{background-color:rgba(248,184,31,.1);color:#7ed321;color:var(--color-tertiary)}.categorie-grid.color-tertiary-style:hover{background-color:#f8b81f}.categorie-grid.color-tertiary-style:hover .course-remain,.categorie-grid.color-tertiary-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra01-style{background-color:rgba(14,205,115,.07)}.categorie-grid.color-extra01-style .course-remain,.categorie-grid.color-extra01-style .icon{background-color:rgba(14,205,115,.1);color:#0ecd73;color:var(--color-extra01)}.categorie-grid.color-extra01-style:hover{background-color:#0ecd73}.categorie-grid.color-extra01-style:hover .course-remain,.categorie-grid.color-extra01-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra02-style{background-color:rgba(142,86,255,.07)}.categorie-grid.color-extra02-style .course-remain,.categorie-grid.color-extra02-style .icon{background-color:rgba(142,86,255,.1);color:#8e56ff;color:var(--color-extra02)}.categorie-grid.color-extra02-style svg path{fill:#8e56ff!important;fill:var(--color-extra02)!important}.categorie-grid.color-extra02-style:hover{background-color:#8e56ff}.categorie-grid.color-extra02-style:hover .course-remain,.categorie-grid.color-extra02-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra02-style:hover svg path{fill:#fff!important;fill:var(--color-white)!important}.categorie-grid.color-extra03-style{background-color:rgba(249,37,150,.07)}.categorie-grid.color-extra03-style .course-remain,.categorie-grid.color-extra03-style .icon{background-color:rgba(249,37,150,.1);color:#f92596;color:var(--color-extra03)}.categorie-grid.color-extra03-style:hover{background-color:#f92596}.categorie-grid.color-extra03-style:hover .course-remain,.categorie-grid.color-extra03-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra04-style{background-color:rgba(88,102,235,.07)}.categorie-grid.color-extra04-style .course-remain,.categorie-grid.color-extra04-style .icon{background-color:rgba(88,102,235,.1);color:#5866eb;color:var(--color-extra04)}.categorie-grid.color-extra04-style:hover{background-color:#5866eb}.categorie-grid.color-extra04-style:hover .course-remain,.categorie-grid.color-extra04-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra05-style{background-color:rgba(248,148,31,.07)}.categorie-grid.color-extra05-style .course-remain,.categorie-grid.color-extra05-style .icon{background-color:rgba(248,148,31,.1);color:#f8941f;color:var(--color-extra05)}.categorie-grid.color-extra05-style:hover{background-color:#f8941f}.categorie-grid.color-extra05-style:hover .course-remain,.categorie-grid.color-extra05-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra06-style{background-color:rgba(57,192,250,.07)}.categorie-grid.color-extra06-style .course-remain,.categorie-grid.color-extra06-style .icon{background-color:rgba(57,192,250,.1);color:#39c0fa;color:var(--color-extra06)}.categorie-grid.color-extra06-style svg path{fill:#39c0fa!important;fill:var(--color-extra06)!important}.categorie-grid.color-extra06-style:hover{background-color:#39c0fa}.categorie-grid.color-extra06-style:hover .course-remain,.categorie-grid.color-extra06-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra06-style:hover svg path{fill:#fff!important;fill:var(--color-white)!important}.categorie-grid.color-extra07-style{background-color:rgba(218,4,248,.07)}.categorie-grid.color-extra07-style .course-remain,.categorie-grid.color-extra07-style .icon{background-color:rgba(218,4,248,.1);color:#da04f8;color:var(--color-extra07)}.categorie-grid.color-extra07-style:hover{background-color:#da04f8}.categorie-grid.color-extra07-style:hover .course-remain,.categorie-grid.color-extra07-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.color-extra08-style{background-color:rgba(70,100,228,.07)}.categorie-grid.color-extra08-style .course-remain,.categorie-grid.color-extra08-style .icon{background-color:rgba(70,100,228,.1);color:#4664e4;color:var(--color-extra08)}.categorie-grid.color-extra08-style:hover{background-color:#4664e4}.categorie-grid.color-extra08-style:hover .course-remain,.categorie-grid.color-extra08-style:hover .icon{background-color:hsla(0,0%,100%,.15);color:#fff;color:var(--color-white)}.categorie-grid.categorie-style-2{align-items:center;display:flex;min-height:80px;padding:16px 30px;text-align:left}.categorie-grid.categorie-style-2 .icon{background-color:transparent;height:auto;justify-content:flex-start;margin-bottom:0;min-width:84px;width:auto}.categorie-grid.categorie-style-2 .icon .art-design{font-size:45px}.categorie-grid.categorie-style-2 .icon .personal-development{font-size:44px}.categorie-grid.categorie-style-2 .icon .health-fitness{font-size:46px}.categorie-grid.categorie-style-2 .icon .data-science{font-size:41px}.categorie-grid.categorie-style-2 .icon .computer-science{font-size:33px}.categorie-grid.categorie-style-2 .icon .video-photography{font-size:37px}.categorie-grid.categorie-style-2 .content{flex:1}.categorie-grid.categorie-style-2 .content .title{font-size:15px;font-weight:600;font-weight:var(--p-semi-bold);margin-bottom:0}.categorie-grid.categorie-style-2:hover .icon{background-color:transparent}.categorie-grid.categorie-style-3{background-color:#fff;background-color:var(--color-white);box-shadow:0 0 15px 0 rgba(0,0,0,.05);padding:40px 20px 35px}.categorie-grid.categorie-style-3 .icon{font-size:40px}.categorie-grid.categorie-style-3 .icon.design-pencil-icon,.categorie-grid.categorie-style-3 .icon.laptop-icon{font-size:34px}.categorie-grid.categorie-style-3 .content .title{font-size:18px}.categorie-grid.categorie-style-3:hover{background-color:#fff;background-color:var(--color-white);box-shadow:0 10px 45px 0 rgba(0,0,0,.1)}.categorie-grid.categorie-style-3:hover .content .title{color:#8b572a;color:var(--color-heading)}.categorie-grid.categorie-style-3:hover.color-primary-style .icon{background-color:#4a90e2;background-color:var(--color-primary)}.categorie-grid.categorie-style-3:hover.color-secondary-style .icon{background-color:#f5a623;background-color:var(--color-secondary)}.categorie-grid.categorie-style-3:hover.color-extra01-style .icon{background-color:#0ecd73;background-color:var(--color-extra01)}.categorie-grid.categorie-style-3:hover.color-extra02-style .icon{background-color:#8e56ff;background-color:var(--color-extra02)}.categorie-grid.categorie-style-3:hover.color-extra03-style .icon{background-color:#f92596;background-color:var(--color-extra03)}.categorie-grid.categorie-style-3:hover.color-extra04-style .icon{background-color:#5866eb;background-color:var(--color-extra04)}.categorie-grid.categorie-style-3:hover.color-extra05-style .icon{background-color:#f8941f;background-color:var(--color-extra05)}.categorie-grid.categorie-style-3:hover.color-extra06-style .icon{background-color:#39c0fa;background-color:var(--color-extra06)}.categorie-grid.categorie-style-3:hover.color-extra07-style .icon{background-color:#da04f8;background-color:var(--color-extra07)}.categorie-grid.categorie-style-3:hover.color-tertiary-style .icon{background-color:#7ed321;background-color:var(--color-tertiary)}.contact-me .inner{align-items:center;display:flex}@media only screen and (max-width:767px){.contact-me .inner{display:block;text-align:center}}.contact-me .thumbnail{margin-right:130px;position:relative;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.contact-me .thumbnail{margin-right:50px}}@media only screen and (max-width:767px){.contact-me .thumbnail{margin-bottom:40px;margin-right:0}}.contact-me .thumbnail .thumb{border-radius:50%;box-shadow:0 20px 40px 0 rgba(42,11,88,.1)}@media only screen and (max-width:767px){.contact-me .thumbnail .thumb{display:inline-block}}.contact-me .thumbnail .thumb img{border-radius:50%}@media only screen and (max-width:767px){.contact-me .thumbnail .shape-group{display:none}}.contact-me .thumbnail .shape-group li{margin:0;position:absolute;z-index:-1}.contact-me .thumbnail .shape-group li.shape-1{right:30px;top:-45px}.contact-me .thumbnail .shape-group li.shape-2{right:-30px;top:-20px;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.contact-me .thumbnail .shape-group li.shape-2{display:none}}.contact-me .thumbnail .shape-group li.shape-3{bottom:-15px;left:-40px}.contact-me .contact-us-info{flex:1}.contact-us-info .heading-title{margin-bottom:26px}.contact-us-info .address-list li .title{margin-bottom:5px}.contact-us-info .address-list li p{margin-bottom:20px}.contact-us-info .social-share{padding-top:12px}@media only screen and (max-width:767px){.contact-me-area .contact-us-info .social-share{justify-content:center}}.contact-form-area{background-color:#f0f4f5;background-color:var(--color-lighten01);overflow:hidden;position:relative;z-index:1}@media only screen and (max-width:991px){.contact-form-area .shape-group{display:none}}.contact-form-area .shape-group li{position:absolute;z-index:-1}.contact-form-area .shape-group li.shape-1{left:13%;top:32%}.contact-form-area .shape-group li.shape-2{left:9%;top:32%}.contact-form-area .shape-group li.shape-3{right:-110px;top:-200px}.contact-form-area .shape-group li.shape-3 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:476px;width:476px}.contact-form-area .shape-group li.shape-4{right:135px;top:150px}.contact-form.form-style-2{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);margin-bottom:-80px;padding:70px;position:relative}@media only screen and (max-width:479px){.contact-form.form-style-2{padding:40px}}.contact-form.form-style-2 .section-title{margin-bottom:5px}.contact-form.form-style-2 .section-title p{margin-bottom:0;margin-top:10px}.contact-form.form-style-2 .form-group{margin-bottom:0}.contact-form.form-style-2 .form-group input,.contact-form.form-style-2 .form-group textarea{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);border-radius:0;padding:20px 0 10px}.contact-form.form-style-2 .form-group .edu-btn{margin-top:40px}@media only screen and (max-width:991px){.contact-form.form-style-2 .shape-group{display:none}}.contact-form.form-style-2 .shape-group li{position:absolute;z-index:-1}.contact-form.form-style-2 .shape-group li.shape-1{right:-90px;top:-60px}.contact-form.form-style-2 .shape-group li.shape-2{right:-10px;top:-80px;z-index:1}.contact-form .error-msg p,.contact-form .success-msg p{margin-bottom:0;margin-top:10px}.contact-us-area{padding:120px 0 0}@media only screen and (min-width:768px)and (max-width:991px){.contact-us-area{padding:100px 0 0}}@media only screen and (max-width:767px){.contact-us-area{padding:80px 0 0}}.google-map-area #gmap_canvas{height:600px;margin-bottom:-8px;width:100%}.edu-counterup{border-radius:10px;padding:38px 30px;text-align:center}@media only screen and (max-width:479px){.edu-counterup{padding:25px}}@media only screen and (max-width:767px){.edu-counterup .odometer.odometer-auto-theme .odometer-digit .odometer-value{line-height:1.2}}.edu-counterup .count-number{margin-bottom:5px}.edu-counterup .count-number em,.edu-counterup .count-number span{font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-weight:800;font-weight:var(--p-extra-bold)}.edu-counterup .count-number.primary-color{color:#4a90e2;color:var(--color-primary)}.edu-counterup .count-number.secondary-color{color:#f5a623;color:var(--color-secondary)}.edu-counterup .count-number.extra02-color{color:#8e56ff;color:var(--color-extra02)}.edu-counterup .count-number.extra05-color{color:#f8941f;color:var(--color-extra05)}.edu-counterup .title{font-size:13px;font-weight:500;font-weight:var(--p-medium);margin-bottom:0;text-transform:uppercase}.edu-counterup.counterup-style-1{box-shadow:0 10px 30px 6px rgba(0,0,0,.07)}.edu-counterup.counterup-style-3{border-radius:0;padding:0;position:relative}.edu-counterup.counterup-style-3:after{background-color:#b8e986;background-color:var(--color-border);content:\"\";height:100%;position:absolute;right:-15px;top:50%;transform:translateY(-50%);width:1px}@media only screen and (max-width:575px){.edu-counterup.counterup-style-3:after{display:none}}.edu-counterup.counterup-style-3.border-none:after{display:none}@media only screen and (min-width:768px)and (max-width:991px){.edu-counterup.counterup-style-3.border-none:after{display:block}}@media only screen and (max-width:767px){.edu-counterup.counterup-style-3.border-none:after{display:block}}@media only screen and (max-width:575px){.edu-counterup.counterup-style-3.border-none:after{display:none}}.edu-counterup.counterup-style-4{background-color:#fff;background-color:var(--color-white);border-radius:4px;box-shadow:0 30px 70px 0 rgba(16,12,47,.05)}.edu-counterup.counterup-style-4 .icon{border-radius:50%;font-size:50px;height:90px;line-height:95px;margin:0 auto 25px;text-align:center;width:90px}.edu-counterup.counterup-style-4 .icon.primary-color{background-color:rgba(26,182,157,.1);color:#4a90e2;color:var(--color-primary)}.edu-counterup.counterup-style-4 .icon.secondary-color{background-color:rgba(255,91,92,.1);color:#f5a623;color:var(--color-secondary)}.edu-counterup.counterup-style-4 .icon.extra08-color{background-color:rgba(70,100,228,.1);color:#4664e4;color:var(--color-extra08)}.edu-counterup.counterup-style-4 .icon.extra05-color{background-color:rgba(248,150,36,.1);color:#f8941f;color:var(--color-extra05)}.edu-counterup.counterup-style-4 .count-number span{font-weight:700;font-weight:var(--p-bold)}.edu-counterup.counterup-style-5.primary-color{background-color:rgba(26,182,157,.1)}.edu-counterup.counterup-style-5.primary-color .count-number{color:#4a90e2;color:var(--color-primary)}.edu-counterup.counterup-style-5.secondary-color{background-color:rgba(255,91,92,.1)}.edu-counterup.counterup-style-5.secondary-color .count-number{color:#f5a623;color:var(--color-secondary)}.edu-counterup.counterup-style-5.extra02-color{background-color:rgba(142,86,255,.1)}.edu-counterup.counterup-style-5.extra02-color .count-number{color:#8e56ff;color:var(--color-extra02)}.edu-counterup.counterup-style-5.extra05-color{background-color:rgba(248,150,36,.1)}.edu-counterup.counterup-style-5.extra05-color .count-number{color:#f8941f;color:var(--color-extra05)}.edu-counterup.counterup-style-6{padding:5px 0;position:relative}.edu-counterup.counterup-style-6:after{background-color:hsla(0,0%,100%,.2);content:\"\";height:100%;position:absolute;right:-15px;top:50%;transform:translateY(-50%);width:1px}.edu-counterup.counterup-style-6.border-none:after{display:none}.edu-counterup.counterup-style-6 .icon{color:#fff;color:var(--color-white);font-size:60px;line-height:1;margin-bottom:10px}.edu-counterup.counterup-style-6 .count-number,.edu-counterup.counterup-style-6 .title{color:#fff;color:var(--color-white)}.counterup-area-2{position:relative;z-index:1}.counterup-area-2:before{background-color:#f0f4f5;background-color:var(--color-lighten01);content:\"\";height:53%;left:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.counterup-area-2 .counterup-box-wrap{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 30px 70px 0 rgba(16,12,47,.08);padding:70px;position:relative}@media only screen and (max-width:767px){.counterup-area-2 .counterup-box-wrap{padding:40px}}@media only screen and (max-width:575px){.counterup-area-2 .counterup-box-wrap{padding:10px}}.counterup-area-2 .counterup-box-wrap .counterup-box{display:grid;grid-template-columns:repeat(2,1fr);position:relative}@media only screen and (max-width:479px){.counterup-area-2 .counterup-box-wrap .counterup-box{grid-template-columns:repeat(1,1fr)}}.counterup-area-2 .counterup-box-wrap .counterup-box:before{background-color:#b8e986;background-color:var(--color-border);content:\"\";height:100%;left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);width:.1px}@media only screen and (max-width:479px){.counterup-area-2 .counterup-box-wrap .counterup-box:before{display:none}}.counterup-area-2 .counterup-box-wrap .counterup-box:after{background-color:#b8e986;background-color:var(--color-border);content:\"\";height:.1px;left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);width:100%}@media only screen and (max-width:479px){.counterup-area-2 .counterup-box-wrap .counterup-box:after{display:none}}@media only screen and (max-width:991px){.counterup-area-2 .counterup-box-wrap .shape-group{display:none}}.counterup-area-2 .counterup-box-wrap .shape-group li{position:absolute;z-index:-1}.counterup-area-2 .counterup-box-wrap .shape-group li.shape-1{left:-90px;top:-80px}.counterup-area-2 .counterup-box-wrap .shape-group li.shape-2{left:-15px;top:-100px;z-index:1}.counterup-area-2 .counterup-box-wrap .shape-group li.shape-3{bottom:-60px;right:-70px}.counterup-area-2 .counterup-box-wrap .shape-group li.shape-4{bottom:-63px;right:30px}@media only screen and (max-width:991px){.counterup-area-3 :nth-child(2) .edu-counterup.counterup-style-3:after,.counterup-area-3 :nth-child(4) .edu-counterup.counterup-style-3:after{width:0}}.counterup-area-4{margin-top:-160px;position:relative}.counterup-area-6{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);padding:65px 0}@media only screen and (max-width:991px){.counterup-area-6 :nth-child(2) .counterup-style-6:after{width:0}}.counterup-area-7{background-color:#f7f5f2;background-color:var(--color-lighten04);position:relative;z-index:1}.counterup-area-7 .counterup-content{padding-right:80px;padding-top:30px}.counterup-area-7 .counterup-box-wrap{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 30px 70px 0 rgba(16,12,47,.08);padding:70px;position:relative}@media only screen and (max-width:767px){.counterup-area-7 .counterup-box-wrap{padding:40px}}@media only screen and (max-width:575px){.counterup-area-7 .counterup-box-wrap{padding:10px}}.counterup-area-7 .counterup-box-wrap .counterup-box{display:grid;grid-template-columns:repeat(2,1fr);position:relative}@media only screen and (max-width:479px){.counterup-area-7 .counterup-box-wrap .counterup-box{grid-template-columns:repeat(1,1fr)}}.counterup-area-7 .counterup-box-wrap .counterup-box:before{background-color:#b8e986;background-color:var(--color-border);content:\"\";height:100%;left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);width:.1px}@media only screen and (max-width:479px){.counterup-area-7 .counterup-box-wrap .counterup-box:before{display:none}}.counterup-area-7 .counterup-box-wrap .counterup-box:after{background-color:#b8e986;background-color:var(--color-border);content:\"\";height:.1px;left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);width:100%}@media only screen and (max-width:479px){.counterup-area-7 .counterup-box-wrap .counterup-box:after{display:none}}.counterup-area-7 .counterup-box-wrap .shape-group li{position:absolute;z-index:-1}@media only screen and (max-width:767px){.counterup-area-7 .counterup-box-wrap .shape-group li img{animation:none;transform:scale(.5)}}.counterup-area-7 .counterup-box-wrap .shape-group li.shape-1{left:-90px;top:-80px}.counterup-area-7 .counterup-box-wrap .shape-group li.shape-2{left:-15px;top:-100px;z-index:1}.counterup-area-7 .counterup-box-wrap .shape-group li.shape-3{bottom:-60px;right:-90px}.counterup-area-7 .counterup-box-wrap .shape-group li.shape-4{bottom:-63px;right:30px}.counterup-area-8{position:relative}.counterup-area-8 .shape-group li{position:absolute;z-index:-1}.counterup-area-8 .shape-group li img{opacity:.9}.counterup-area-8 .shape-group li.shape-1{bottom:-70px;left:50%;transform:translateX(-50%)}.counterup-area-9 .shape-group li.shape-1{bottom:-34px;right:-54px}.edu-course{background-color:#fff;background-color:var(--color-white);border-radius:5px;position:relative;transition:.3s;transition:var(--transition)}.edu-course.course-style-1,.edu-course.course-style-1 .course-hover-content,.edu-course.course-style-1 .course-hover-content-wrapper,.edu-course.course-style-1 .thumbnail,.edu-course.course-style-1 .thumbnail img,.edu-course.course-style-1 .thumbnail:after{transition:.5s;transition:var(--transition-2)}.edu-course.course-style-1 .course-hover-content p{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.edu-course .thumbnail{position:relative;transition:.3s;transition:var(--transition)}.edu-course .thumbnail a{border-radius:5px 5px 0 0;display:block;overflow:hidden}.edu-course .thumbnail a img{border-radius:5px 5px 0 0;transition:.4s;width:100%}.edu-course .thumbnail a:after{background-color:rgba(0,0,0,.2);border-radius:5px 5px 0 0;bottom:0;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);width:100%}.edu-course .thumbnail .time-top{position:absolute;right:10px;top:10px}.edu-course .thumbnail .duration{background-color:#f8b81f;border-radius:3px;color:#fff;color:var(--color-white);display:block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:13px;font-weight:500;padding:4px 8px}.edu-course .thumbnail .duration i{font-size:16px;margin-right:6px;position:relative;top:2px}.edu-course .content{padding:30px 20px 16px 30px}.edu-course .content .course-level{background-color:rgba(26,182,157,.15);border-radius:3px;color:#4a90e2;color:var(--color-primary);display:inline-block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:13px;font-weight:500;margin-bottom:15px;padding:1px 10px}.edu-course .content .title{margin-bottom:8px}.edu-course .content .title a{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.edu-course .content .course-rating{align-items:center;display:flex;margin-bottom:8px}.edu-course .content .course-rating .rating{color:#f8b81f;transition:.3s;transition:var(--transition)}.edu-course .content .course-rating .rating-count{color:#8b572a;color:var(--color-heading);font-size:14px;font-weight:500;margin-left:10px;transition:.3s;transition:var(--transition)}.edu-course .content .course-price{color:#f5a623;color:var(--color-secondary);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px;font-weight:600;font-weight:var(--p-semi-bold);margin-bottom:14px;transition:.3s;transition:var(--transition)}.edu-course .content .course-price.price-round{background-color:#4a90e2;background-color:var(--color-primary);border-radius:50%;color:#fff;color:var(--color-white);font-size:22px;font-weight:700;font-weight:var(--p-bold);height:80px;line-height:84px;text-align:center;width:80px}.edu-course .content .course-meta li{color:#8b572a;color:var(--color-heading);display:inline-block;font-size:13px;margin-right:25px;position:relative;transition:.3s;transition:var(--transition)}.edu-course .content .course-meta li:after{background-color:#e5e5e5;content:\"\";height:19px;position:absolute;right:-15px;top:1px;transition:.3s;transition:var(--transition);width:1px}.edu-course .content .course-meta li:last-child{margin-right:0}.edu-course .content .course-meta li:last-child:after{display:none}.edu-course .content .course-meta li i{color:#a7a7a7;font-size:14px;margin-right:7px;transition:.3s;transition:var(--transition)}.edu-course .course-hover-content-wrapper{background-color:#4a90e2;background-color:var(--color-primary);content:\"\";height:100%;left:0;opacity:0;position:absolute;top:0;transition:.3s;transition:var(--transition);width:100%}.edu-course .course-hover-content-wrapper button.wishlist-btn{background:hsla(0,0%,100%,.15);display:none;position:absolute;right:20px;top:20px}.edu-course .course-hover-content-wrapper button.wishlist-btn:hover{background:#f5a623;background:var(--color-secondary)}@media only screen and (max-width:1199px){.edu-course .course-hover-content-wrapper button.wishlist-btn{display:block}}.edu-course .course-hover-content{border-radius:4px;bottom:0;display:inline-table;left:0;opacity:0;padding:50px 20px 45px 30px;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:.3s;transition:var(--transition);visibility:hidden}.edu-course .course-hover-content .content{padding:0}.edu-course .course-hover-content .content .wishlist-btn{background:hsla(0,0%,100%,.15);position:absolute;right:10px;top:10px}.edu-course .course-hover-content .content .wishlist-btn:hover{background:#f5a623;background:var(--color-secondary)}@media only screen and (max-width:1199px){.edu-course .course-hover-content .content .wishlist-btn{display:none}}.edu-course .course-hover-content .content .course-level{background-color:#fff;background-color:var(--color-white);color:#8b572a;color:var(--color-heading)}.edu-course .course-hover-content .content .course-price,.edu-course .course-hover-content .content .course-rating .rating-count,.edu-course .course-hover-content .content .title,.edu-course .course-hover-content .content .title a:hover{color:#fff;color:var(--color-white)}.edu-course .course-hover-content .content p{color:#fff;color:var(--color-white);margin-bottom:15px}.edu-course .course-hover-content .content .course-meta{margin-bottom:16px}.edu-course .course-hover-content .content .course-meta li{color:#fff;color:var(--color-white)}.edu-course .course-hover-content .content .course-meta li:after{background-color:hsla(0,0%,100%,.25)}.edu-course .course-hover-content .content .course-meta li i{color:#fff;color:var(--color-white)}.edu-course .hover-content-aside{left:100%;opacity:0;padding-left:12px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%) translateX(-20px);transition:.3s;transition:var(--transition);visibility:hidden;width:344px;z-index:1}.edu-course .hover-content-aside .content{background-color:#fff;background-color:var(--color-white);border-radius:4px;box-shadow:0 0 50px 0 rgba(26,46,85,.2);padding:30px 30px 40px}.edu-course .hover-content-aside .content:before{border-bottom:12px solid transparent;border-right:13px solid #fff;border-right:13px solid var(--color-white);border-top:12px solid transparent;content:\"\";left:-13px;position:absolute;top:50%;transform:translateY(-50%)}.edu-course .hover-content-aside .content .course-rating{margin-bottom:0}.edu-course .hover-content-aside .content .course-meta{margin-bottom:5px}.edu-course .hover-content-aside .content .course-meta li{color:#9b9b9b;color:var(--color-body);font-size:15px;font-size:var(--font-size-b1)}.edu-course .hover-content-aside .content .course-meta li:after{background-color:#d1d1d1;border-radius:50%;height:5px;right:-17px;top:50%;transform:translateY(-50%);width:5px}.edu-course .hover-content-aside .content .course-feature{margin-bottom:25px}.edu-course .hover-content-aside .content .course-feature ul li{font-size:13px;padding-left:28px;position:relative}.edu-course .hover-content-aside .content .course-feature ul li:before{color:#8b572a;color:var(--color-heading);content:\"\";font-family:\"icomoon\";left:0;margin-right:15px;position:absolute;top:2px}.edu-course .hover-content-aside .content .button-group .edu-btn{flex:1}.edu-course .hover-content-aside.content-right{left:auto;padding-left:0;padding-right:12px;right:100%}.edu-course .hover-content-aside.content-right .content:before{left:auto;right:-12px;transform:scaleX(-1)}.edu-course:hover .course-hover-content-wrapper{opacity:1}.edu-course:hover .thumbnail a img{transform:scale(1.1)}.edu-course:hover .course-hover-content{opacity:1;visibility:visible}.edu-course:hover .hover-content-aside{opacity:1;pointer-events:all;transform:translateY(-50%) translateX(0);visibility:visible}.edu-course.course-style-2 .course-hover-content .content p{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.edu-course.course-style-3{background-color:transparent;padding-bottom:5px;z-index:1}.edu-course.course-style-3:before{background-color:#fff;background-color:var(--color-white);border-radius:0 0 4px 4px;bottom:0;content:\"\";height:10px;left:0;position:absolute;right:0;transition:.3s;transition:var(--transition);width:100%;z-index:-1}.edu-course.course-style-3 .thumbnail .time-top{left:10px;right:auto}.edu-course.course-style-3 .content{background-color:#fff;background-color:var(--color-white);border-radius:0 0 4px 4px;padding:30px;position:relative;transition:.3s;transition:var(--transition)}.edu-course.course-style-3 .content .course-level{background-color:rgba(238,74,98,.15);color:#f5a623;color:var(--color-secondary);margin-bottom:17px}.edu-course.course-style-3 .content .title{margin-bottom:14px}.edu-course.course-style-3 .content p{margin-bottom:20px}.edu-course.course-style-3 .content .course-rating{margin-bottom:0}.edu-course.course-style-3 .content .read-more-btn{margin-bottom:-50px;opacity:0;transition:.3s;transition:var(--transition);visibility:hidden}.edu-course.course-style-3:hover:before{background-color:rgba(255,91,92,.3)}.edu-course.course-style-3:hover .thumbnail{margin-bottom:-75px}.edu-course.course-style-3:hover .thumbnail a:after{background-color:rgba(0,0,0,.5)}.edu-course.course-style-3:hover .content .read-more-btn{margin-bottom:0;margin-top:24px;opacity:1;visibility:visible}.edu-course.course-style-4{box-shadow:0 10px 30px 0 rgba(0,0,0,.05);box-shadow:var(--shadow-darkest);padding:30px}.edu-course.course-style-4 .inner{align-items:center;display:flex}@media only screen and (max-width:575px){.edu-course.course-style-4 .inner{display:block}}.edu-course.course-style-4 .thumbnail{margin-right:30px}@media only screen and (max-width:575px){.edu-course.course-style-4 .thumbnail{margin-bottom:20px;margin-right:0}}.edu-course.course-style-4 .thumbnail a,.edu-course.course-style-4 .thumbnail a img{border-radius:4px}.edu-course.course-style-4 .thumbnail a:after{background-color:rgba(0,0,0,.1)}.edu-course.course-style-4 .thumbnail .time-top{left:10px;right:auto}.edu-course.course-style-4 .content{flex:1;padding:0}.edu-course.course-style-4 .content .course-price{font-size:16px;font-weight:700;font-weight:var(--p-bold);margin-bottom:10px}.edu-course.course-style-4 .content .course-rating{margin-bottom:14px}.edu-course.course-style-4:hover{background-color:#4a90e2;background-color:var(--color-primary)}.edu-course.course-style-4:hover .content .course-meta li,.edu-course.course-style-4:hover .content .course-meta li i,.edu-course.course-style-4:hover .content .course-price,.edu-course.course-style-4:hover .content .course-rating .rating-count,.edu-course.course-style-4:hover .content .title a{color:#fff;color:var(--color-white)}.edu-course.course-style-4:hover .content .course-meta li:after{background-color:hsla(0,0%,100%,.3)}.edu-course.course-style-5{background-color:#f7f5f2;background-color:var(--color-lighten04);border-radius:4px}.edu-course.course-style-5 .thumbnail a:after{background-color:transparent}.edu-course.course-style-5 .content{position:relative}.edu-course.course-style-5 .content .price-round{position:absolute;right:30px;top:-40px}.edu-course.course-style-5 .content .course-level{background-color:transparent;color:#f5a623;color:var(--color-secondary);font-size:15px;padding:0}.edu-course.course-style-5 .content .title a{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.edu-course.course-style-5 .content p{margin-bottom:12px}.edu-course.course-style-6{background-color:transparent}.edu-course.course-style-6 .thumbnail{margin-bottom:15px}.edu-course.course-style-6 .thumbnail a:after{background-color:transparent}.edu-course.course-style-6 .thumbnail .price-round{background-color:#4a90e2;background-color:var(--color-primary);border-radius:50%;color:#fff;color:var(--color-white);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:22px;font-weight:700;font-weight:var(--p-bold);height:80px;line-height:84px;position:absolute;right:20px;text-align:center;top:20px;width:80px}.edu-course.course-style-6 .content{background-color:#fff;background-color:var(--color-white);border-radius:0 0 4px 4px;padding:35px 40px 30px}.edu-course.course-style-6 .content .course-level{background-color:transparent;color:#f5a623;color:var(--color-secondary);font-size:15px;padding:0}.edu-course.course-style-6 .content .title{margin-bottom:15px}.edu-course.course-style-7{background-color:transparent;border-radius:10px;box-shadow:0 10px 30px 0 rgba(0,0,0,.05);box-shadow:var(--shadow-darkest)}.edu-course.course-style-7 .thumbnail{margin-bottom:-23px}.edu-course.course-style-7 .thumbnail a,.edu-course.course-style-7 .thumbnail a img{border-radius:10px 10px 0 0}.edu-course.course-style-7 .thumbnail a:after{background-color:transparent}.edu-course.course-style-7 .thumbnail .course-price{bottom:-40px;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);position:absolute;right:30px;transition:.3s;transition:var(--transition);z-index:1}@media only screen and (max-width:767px){.edu-course.course-style-7 .thumbnail .course-price{bottom:-18px}}.edu-course.course-style-7 .thumbnail .course-price.price-round{background-color:#fff;background-color:var(--color-white);border-radius:50%;color:#fff;color:var(--color-white);font-size:22px;font-weight:700;font-weight:var(--p-bold);height:80px;line-height:84px;text-align:center;width:80px}.edu-course.course-style-7 .content{border-radius:0 0 10px 10px;-webkit-mask-image:url(/images/others/mask-06.png);mask-image:url(/images/others/mask-06.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover;padding:50px 20px 10px 30px;position:relative}@media only screen and (max-width:767px){.edu-course.course-style-7 .content{-webkit-mask-image:none;mask-image:none}}.edu-course.course-style-7 .content .course-level{background-color:transparent;color:#fff;color:var(--color-white);font-size:15px;padding:0}.edu-course.course-style-7 .content .title{color:#fff;color:var(--color-white)}.edu-course.course-style-7 .content .title a:hover{color:hsla(0,0%,100%,.8)}.edu-course.course-style-7 .content .course-meta{margin-bottom:10px}.edu-course.course-style-7 .content .course-meta li,.edu-course.course-style-7 .content .course-meta li i,.edu-course.course-style-7 .content p{color:#fff;color:var(--color-white)}.edu-course.course-style-7.bg-color-extra02 .thumbnail .price-round{color:#8e56ff;color:var(--color-extra02)}.edu-course.course-style-7.bg-color-extra02 .content{background-color:#8e56ff;background-color:var(--color-extra02)}.edu-course.course-style-7.bg-color-secondary .thumbnail .price-round{color:#d0021b;color:var(--color-textSecondary)}.edu-course.course-style-7.bg-color-secondary .content{background-color:#d0021b;background-color:var(--color-textSecondary)}.edu-course.course-style-7.bg-color-primary .thumbnail .price-round{color:#4a90e2;color:var(--color-primary)}.edu-course.course-style-7.bg-color-primary .content{background-color:#4a90e2;background-color:var(--color-primary)}.edu-course.course-style-8{box-shadow:0 0 40px 0 rgba(0,0,0,.07);margin-bottom:50px}.edu-course.course-style-8:last-child{margin-bottom:0}.edu-course.course-style-8 .content .course-rating{margin-bottom:10px}.edu-course.course-style-8 .content p{margin-bottom:12px}.edu-course.course-style-8 .content .course-meta{margin:-10px 0}.edu-course.course-style-8 .hover-content-aside{left:50%;padding-top:12px;top:100%;transform:translateY(0) translateX(-50%);z-index:2}.edu-course.course-style-8 .hover-content-aside .content{padding:30px 30px 40px}.edu-course.course-style-8 .hover-content-aside .content:before{border-bottom:12px solid #fff;border-bottom:12px solid var(--color-white);border-left:11px solid transparent;border-right:11px solid transparent;border-top:none;left:50%;top:0;transform:translateY(0) translateX(-50%)}.edu-course.course-style-8 .hover-content-aside .content .course-level{background-color:transparent;color:#f5a623;color:var(--color-secondary);font-size:15px;margin-bottom:10px;padding:0}.edu-course.course-style-8 .hover-content-aside .content .course-meta{margin-bottom:2px}.edu-course.course-style-8:hover{background-color:#fff;background-color:var(--color-white)}.edu-course.course-style-8:hover .content .course-price{color:#f5a623;color:var(--color-secondary)}.edu-course.course-style-8:hover .content .title a{color:#8b572a;color:var(--color-heading)}.edu-course.course-style-8:hover .content .title a:hover{color:#4a90e2;color:var(--color-primary)}.edu-course.course-style-8:hover .content .course-meta li,.edu-course.course-style-8:hover .content .course-rating .rating-count{color:#8b572a;color:var(--color-heading)}.edu-course.course-style-8:hover .content .course-meta li:after{background-color:#e5e5e5}.edu-course.course-style-8:hover .content .course-meta li i{color:#a7a7a7}.edu-course.course-style-9{box-shadow:0 0 40px 0 rgba(0,0,0,.07);margin-bottom:50px;margin-left:105px}@media only screen and (max-width:575px){.edu-course.course-style-9{margin-left:0}}.edu-course.course-style-9:last-child{margin-bottom:0}.edu-course.course-style-9 .thumbnail{margin-left:-135px}@media only screen and (max-width:575px){.edu-course.course-style-9 .thumbnail{margin-left:0}}.edu-course.course-style-9 .thumbnail a,.edu-course.course-style-9 .thumbnail a img,.edu-course.course-style-9 .thumbnail a:after{border-radius:50%}.edu-course.course-style-9 .content .course-rating{margin-bottom:10px}.edu-course.course-style-9 .content p{margin-bottom:12px}.edu-course.course-style-9 .content .course-meta{margin:-10px 0}.edu-course.course-style-9 .hover-content-aside{left:50%;padding-top:12px;top:100%;transform:translateY(0) translateX(-50%);z-index:2}.edu-course.course-style-9 .hover-content-aside .content{padding:30px 30px 40px}.edu-course.course-style-9 .hover-content-aside .content:before{border-bottom:12px solid #fff;border-bottom:12px solid var(--color-white);border-left:11px solid transparent;border-right:11px solid transparent;border-top:none;left:50%;top:0;transform:translateY(0) translateX(-50%)}.edu-course.course-style-9 .hover-content-aside .content .course-level{background-color:transparent;color:#f5a623;color:var(--color-secondary);font-size:15px;margin-bottom:10px;padding:0}.edu-course.course-style-9 .hover-content-aside .content .course-meta{margin-bottom:2px}.edu-course.course-style-9:hover{background-color:#fff;background-color:var(--color-white)}.edu-course.course-style-9:hover .content .course-price{color:#f5a623;color:var(--color-secondary)}.edu-course.course-style-9:hover .content .title a{color:#8b572a;color:var(--color-heading)}.edu-course.course-style-9:hover .content .title a:hover{color:#4a90e2;color:var(--color-primary)}.edu-course.course-style-9:hover .content .course-meta li,.edu-course.course-style-9:hover .content .course-rating .rating-count{color:#8b572a;color:var(--color-heading)}.edu-course.course-style-9:hover .content .course-meta li:after{background-color:#e5e5e5}.edu-course.course-style-9:hover .content .course-meta li i{color:#a7a7a7}.edu-course.course-box-shadow{box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker)}.edu-course.course-style-1.hover-button-bg-white a.edu-btn.btn-secondary:hover,.edu-course.course-style-2.hover-button-bg-white a.edu-btn.btn-secondary:hover{background:#fff;color:#000;color:var(--color-black)}.edu-course.course-style-1.hover-button-bg-white a.edu-btn.btn-secondary:hover:after,.edu-course.course-style-2.hover-button-bg-white a.edu-btn.btn-secondary:hover:after{background:#fff}.edu-course.course-style-1.hover-button-bg-white a.edu-btn.btn-secondary:after,.edu-course.course-style-2.hover-button-bg-white a.edu-btn.btn-secondary:after{display:none}.edu-course-area{position:relative}.edu-course-area.course-area-6{padding-bottom:175px}@media only screen and (max-width:767px){.edu-course-area.course-area-6 .course-activation .swiper-wrapper .swiper-slide{padding:0}}.edu-course-area.course-area-6 .swiper-pagination-bullets.swiper-pagination-horizontal{bottom:110px;left:0;width:100%}@media only screen and (max-width:479px){.edu-course-area.course-area-6 .swiper-pagination-bullets.swiper-pagination-horizontal{bottom:90px}}.course-view-all{margin-top:60px;text-align:center}.course-view-all .view-text{margin-bottom:0}.course-layout-five-tooltip-content{pointer-events:none;width:344px;z-index:1}.course-layout-five-tooltip-content .content{border-radius:4px;padding:30px 30px 40px;position:relative}.course-layout-five-tooltip-content .content .price-round{position:absolute;right:30px;top:-40px}.course-layout-five-tooltip-content .content .course-level{background-color:transparent;color:#f5a623;color:var(--color-secondary);display:inline-block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:15px;font-weight:500;margin-bottom:15px;padding:0}.course-layout-five-tooltip-content .content .title{margin-bottom:8px;margin-top:0}.course-layout-five-tooltip-content .content .title a{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;pointer-events:all}.course-layout-five-tooltip-content .content .title a:hover{color:#4a90e2;color:var(--color-primary)}.course-layout-five-tooltip-content .content .course-rating{align-items:center;display:flex;margin-bottom:0}.course-layout-five-tooltip-content .content .course-rating .rating{color:#f8b81f;transition:.3s;transition:var(--transition)}.course-layout-five-tooltip-content .content .course-rating .rating-count{color:#8b572a;color:var(--color-heading);font-size:14px;font-weight:500;margin-left:10px;transition:.3s;transition:var(--transition)}.course-layout-five-tooltip-content .content .course-price{color:#f5a623;color:var(--color-secondary);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px;font-weight:600;font-weight:var(--p-semi-bold);margin-bottom:14px;transition:.3s;transition:var(--transition)}.course-layout-five-tooltip-content .content .course-price.price-round{background-color:#4a90e2;background-color:var(--color-primary);border-radius:50%;color:#fff;color:var(--color-white);font-size:22px;font-weight:700;font-weight:var(--p-bold);height:80px;line-height:84px;text-align:center;width:80px}.course-layout-five-tooltip-content .content .course-meta li{color:#9b9b9b;color:var(--color-body);display:inline-block;font-size:15px;font-size:var(--font-size-b1);margin-right:25px;position:relative;transition:.3s;transition:var(--transition)}.course-layout-five-tooltip-content .content .course-meta li:after{background-color:#d1d1d1;border-radius:50%;content:\"\";height:5px;position:absolute;right:-17px;top:50%;transform:translateY(-50%);width:5px}.course-layout-five-tooltip-content .content .course-meta li:last-child{margin-right:0}.course-layout-five-tooltip-content .content .course-meta li:last-child:after{display:none}.course-layout-five-tooltip-content .content .course-meta li i{color:#a7a7a7;font-size:14px;margin-right:7px;transition:.3s;transition:var(--transition)}.course-layout-five-tooltip-content .content .course-feature{margin-bottom:25px}.course-layout-five-tooltip-content .content .course-feature ul li{font-size:13px;padding-left:28px;position:relative}.course-layout-five-tooltip-content .content .course-feature ul li:before{color:#8b572a;color:var(--color-heading);content:\"\";font-family:\"icomoon\";left:0;margin-right:15px;position:absolute;top:2px}.course-layout-five-tooltip-content .content .button-group .edu-btn{color:#fff!important;color:var(--color-white)!important;flex:1;pointer-events:all}body .tpd-size-medium .tpd-content{font-size:inherit;line-height:inherit;padding:inherit}.tpd-tooltip .tpd-content-wrapper{overflow:visible;overflow:initial}@media only screen and (max-width:767px){.tpd-tooltip .tpd-content-wrapper{display:none}}.tpd-tooltip .tpd-content{font-size:var(--fontSize);line-height:inherit;padding:0}.tpd-tooltip .tpd-backgrounds,.tpd-tooltip .tpd-shift-stem-side,.tpd-tooltip .tpd-stem{display:none!important}.tpd-visible-frame-left .tpd-frame-left,.tpd-visible-frame-right .tpd-frame-left{position:relative}.tpd-visible-frame-left .tpd-frame-left:before,.tpd-visible-frame-right .tpd-frame-left:after,.tpd-visible-frame-right .tpd-frame-left:before{border-bottom:12px solid transparent;border-right:13px solid #fff;border-right:13px solid var(--color-white);border-top:12px solid transparent;content:\"\";left:-12px;position:absolute;top:50%;transform:translateY(-50%);z-index:9}.tpd-visible-frame-right .tpd-frame-right{list-style:none;position:relative}.tpd-visible-frame-right .tpd-frame-right:after{border-bottom:12px solid transparent;border-left:13px solid #fff;border-left:13px solid var(--color-white);border-top:12px solid transparent;content:\"\";left:inherit!important;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:9}.tpd-skin{left:12px}@media only screen and (max-width:767px){.tpd-skin{display:none}}.tpd-content-spacer{background:#fff;background:var(--color-white);border-radius:4px;box-shadow:0 0 50px 0 rgba(26,46,85,.2)}.tpd-skin.tpd-visible-frame-right{left:0}.tpd-skin-light a{color:inherit!important}.tpd-tooltip{z-index:9!important}.tpd-tooltip a,.tpd-tooltip a:hover{color:inherit!important;text-decoration:inherit!important}.load-more-btn{margin-top:70px;text-align:center}@media only screen and (max-width:767px){.load-more-btn{margin-top:50px}}.load-more-btn .edu-btn{padding:0 50px}@media only screen and (max-width:767px){.load-more-btn .edu-btn{padding:0 30px}}.load-more-btn .edu-btn i{font-size:20px;padding-left:10px;top:4px}@media only screen and (max-width:767px){.load-more-btn .edu-btn i{font-size:15px;top:2px}}.isotop-button{align-items:center;display:flex;justify-content:center;margin:-5px -5px 45px}@media only screen and (max-width:575px){.isotop-button{display:inline-block;text-align:center}}.isotop-button button{background-color:#ede8e1;border:none;border-radius:5px;color:#8b572a;color:var(--color-heading);font-size:14px;font-weight:500;font-weight:var(--p-medium);height:60px;margin:5px;padding:0 30px;position:relative;text-align:center;text-transform:uppercase;transition:.3s;transition:var(--transition);z-index:1}@media only screen and (max-width:575px){.isotop-button button{font-size:12px;height:50px;padding:0 25px}}.isotop-button button:after{border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #f5a623;border-top:10px solid var(--color-secondary);bottom:-5px;content:\"\";height:0;left:0;margin:0 auto;opacity:0;position:absolute;right:0;transition:.3s;transition:var(--transition);visibility:hidden;width:0;z-index:-1}@media only screen and (max-width:575px){.isotop-button button:after{display:none}}.isotop-button button.is-checked,.isotop-button button:hover{background-color:#f5a623;background-color:var(--color-secondary);color:#fff;color:var(--color-white)}.isotop-button button.is-checked:after,.isotop-button button:hover:after{bottom:-10px;opacity:1;visibility:visible}.isotop-button.button-transparent button{background-color:transparent;color:#9b9b9b;color:var(--color-body);font-size:16px;font-weight:500;font-weight:var(--p-medium);height:auto;padding:0 12px;text-align:center;text-transform:capitalize}.isotop-button.button-transparent button:after{background-color:#4a90e2;background-color:var(--color-primary);border:none;bottom:0;display:block;height:2px;width:0}.isotop-button.button-transparent button.is-checked:after,.isotop-button.button-transparent button:hover:after{opacity:1;visibility:visible;width:100%}.course-area-3{overflow:hidden;position:relative;z-index:1}@media only screen and (max-width:767px){.course-area-3 .shape-group{display:none}}.course-area-3 .shape-group li{position:absolute;z-index:-1}.course-area-3 .shape-group li.shape-1{right:-50px;top:-75px}.course-area-3 .shape-group li.shape-2{bottom:-65px;left:-155px}.course-area-7{padding:220px 0;position:relative;z-index:1}.course-area-7:before{background-image:url(/images/bg/bg-image-6.svg);background-repeat:no-repeat;background-size:cover;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (max-width:767px){.course-area-7{padding:150px 0}}.course-area-7 .shape-group li{position:absolute;z-index:-1}.course-area-7 .shape-group li img{opacity:.3}.course-area-7 .shape-group li.shape-1{left:-100px;top:64px}.course-area-7 .shape-group li.shape-2{bottom:-50px;right:-90px}.course-area-7 .shape-group li.shape-3{right:-25px;top:140px}.edu-sorting-area{align-items:center;display:flex;justify-content:space-between;margin-bottom:30px}@media only screen and (max-width:991px){.edu-sorting-area{display:block;text-align:center}}.edu-sorting-area .showing-text{margin-bottom:0}.edu-sorting-area .showing-text span{color:#4a90e2;color:var(--color-primary)}.edu-sorting-area .sorting-right{align-items:center;display:flex;flex-wrap:wrap}@media only screen and (max-width:991px){.edu-sorting-area .sorting-right{justify-content:center}}@media only screen and (max-width:479px){.edu-sorting-area .sorting-right{flex-direction:column}}.edu-sorting-area .sorting-right .layout-switcher{align-items:center;display:flex;margin-right:30px}@media only screen and (max-width:991px){.edu-sorting-area .sorting-right .layout-switcher{margin-top:20px}}@media only screen and (max-width:479px){.edu-sorting-area .sorting-right .layout-switcher{margin-right:0}}.edu-sorting-area .sorting-right .layout-switcher label{color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:16px;font-weight:600;margin-right:10px;margin-top:4px}.edu-sorting-area .sorting-right .layout-switcher .switcher-btn{align-items:center;display:flex;margin:-5px}.edu-sorting-area .sorting-right .layout-switcher .switcher-btn li{margin:5px}.edu-sorting-area .sorting-right .layout-switcher .switcher-btn li a{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:3px;color:#d1d1d1;font-size:16px;line-height:1;padding:8px;transition:.3s;transition:var(--transition)}.edu-sorting-area .sorting-right .layout-switcher .switcher-btn li a.active,.edu-sorting-area .sorting-right .layout-switcher .switcher-btn li a:hover{border-color:#4a90e2;border-color:var(--color-primary);color:#4a90e2;color:var(--color-primary)}.edu-sorting-area .sorting-right .edu-sorting{position:relative}@media only screen and (max-width:991px){.edu-sorting-area .sorting-right .edu-sorting{margin-top:20px}}.edu-sorting-area .sorting-right .edu-sorting .icon{color:#8b572a;color:var(--color-heading);font-size:10px;left:22px;position:absolute;top:50%;transform:translateY(-50%)}.edu-sorting-area .sorting-right .edu-sorting .edu-select{padding-left:50px;width:200px}.course-details-content{padding-right:10px}@media only screen and (max-width:991px){.course-details-content{padding-right:0}}.course-details-content .nav-tabs{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);justify-content:center}.course-details-content .nav-tabs .nav-item{margin:0 5px}.course-details-content .nav-tabs .nav-item .nav-link{background:transparent;border:0;color:#9b9b9b;color:var(--color-body);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:16px;font-weight:600;line-height:28px;padding:15px 25px;position:relative}.course-details-content .nav-tabs .nav-item .nav-link:after{background:#4a90e2;background:var(--color-primary);bottom:0;content:\"\";height:2px;left:0;opacity:0;position:absolute;transition:.4s;width:0}.course-details-content .nav-tabs .nav-item .nav-link.active,.course-details-content .nav-tabs .nav-item .nav-link:hover{color:#4a90e2;color:var(--color-primary)}.course-details-content .nav-tabs .nav-item .nav-link.active:after,.course-details-content .nav-tabs .nav-item .nav-link:hover:after{opacity:1;width:100%}.course-details-content .course-tab-content{margin-top:65px}@media only screen and (max-width:767px){.course-details-content .course-tab-content{margin-top:50px}}.course-details-content .entry-content .title{margin-bottom:4px}.course-details-content .entry-content .course-meta{align-items:center;display:flex;margin-left:-20px;margin-right:-20px}@media only screen and (max-width:767px){.course-details-content .entry-content .course-meta{display:block;margin-top:20px}}.course-details-content .entry-content .course-meta li{align-items:center;color:#8b572a;color:var(--color-heading);display:flex;font-weight:500;margin-left:20px;margin-right:20px;position:relative}.course-details-content .entry-content .course-meta li:after{background-color:#dbdbdb;content:\"\";height:19px;position:absolute;right:-20px;top:4px;width:1px}@media only screen and (max-width:767px){.course-details-content .entry-content .course-meta li:after{display:none}}.course-details-content .entry-content .course-meta li:last-child:after{display:none}.course-details-content .entry-content .course-meta li i{color:#4a90e2;color:var(--color-primary);font-size:24px;padding-right:14px}.course-details-content .entry-content .course-meta .course-rating .rating{margin-right:8px}.course-details-content .entry-content .course-meta .course-rating .rating i{color:#f8b81f;font-size:15px;padding:0}.course-details-content .entry-content .thumbnail{margin-top:60px;position:relative}@media only screen and (max-width:767px){.course-details-content .entry-content .thumbnail{margin-top:40px}}.course-details-content .entry-content .thumbnail img{border-radius:5px}.course-details-content .entry-content .thumbnail:after{background-color:rgba(0,0,0,.7);border-radius:5px;bottom:0;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;width:100%}.course-details-content .entry-content .thumbnail .video-play-btn{background-color:#fff;background-color:var(--color-white);border:0;border-radius:50%;color:#f5a623;color:var(--color-secondary);display:inline-block;font-size:20px;height:80px;left:50%;line-height:82px;margin:0 auto;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition:.3s;transition:var(--transition);width:80px;z-index:1}@media only screen and (max-width:575px){.course-details-content .entry-content .thumbnail .video-play-btn{height:60px;line-height:62px;width:60px}}.course-details-content .entry-content .thumbnail .video-play-btn i{margin-left:5px}.course-details-content .entry-content .thumbnail .video-play-btn:hover{background-color:#f5a623;background-color:var(--color-secondary);color:#fff;color:var(--color-white)}.course-details-content .course-enroll-box{background-color:#fff;background-color:var(--color-white);box-shadow:0 0 40px 0 rgba(0,0,0,.07);display:flex;margin-top:110px;padding:40px 0}@media only screen and (max-width:767px){.course-details-content .course-enroll-box{display:block;margin-top:80px;padding:10px 0}}.course-details-content .course-enroll-box .single-item{font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);padding:0 45px;position:relative;text-align:center}@media only screen and (min-width:992px)and (max-width:1199px){.course-details-content .course-enroll-box .single-item{padding:0 35px}}@media only screen and (max-width:767px){.course-details-content .course-enroll-box .single-item{padding:30px 35px}}.course-details-content .course-enroll-box .single-item:after{background-color:#b8e986;background-color:var(--color-border);content:\"\";height:140px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:1px}@media only screen and (max-width:767px){.course-details-content .course-enroll-box .single-item:after{bottom:0;height:1px;left:50%;top:auto;transform:translateX(-50%);width:100%}}.course-details-content .course-enroll-box .single-item:last-child:after{display:none}.course-details-content .course-enroll-box .single-item .enroll-status{background-color:rgba(70,100,228,.07);border-radius:5px;color:#4664e4;color:var(--color-extra08);display:block;font-size:14px;font-weight:500;padding:8px 28px}.course-details-content .course-enroll-box .single-item .price{color:#f5a623;color:var(--color-secondary);font-size:28px;font-weight:700}.course-details-content .course-enroll-box .single-item .login-btn{font-size:14px}.course-details-content .course-enroll-box .single-item .login-btn a{color:#8b572a;color:var(--color-heading);font-weight:500}.course-details-content .course-enroll-box .single-item .login-btn a:hover{color:#4a90e2;color:var(--color-primary)}.course-details-content .course-enroll-box .single-item.course-price{flex:1}.course-overview ul{list-style:none;margin:30px 0;padding:0}.course-overview ul li{margin-bottom:15px;margin-top:15px;padding-left:30px;position:relative}.course-overview ul li:after{color:#4a90e2;color:var(--color-primary);content:\"\";font-family:\"icomoon\";font-family:var(--font-icomoon);left:0;position:absolute;top:0;transition:.3s;transition:var(--transition)}.course-overview .border-box{border:1px solid #b8e986;border:1px solid var(--color-border);margin-bottom:90px;padding:40px 40px 30px}@media only screen and (max-width:575px){.course-overview .border-box{padding:40px 30px 30px}}.course-overview .border-box ul{margin:0}.course-curriculam .course-lesson{border:1px solid #b8e986;border:1px solid var(--color-border);margin-bottom:50px;padding:40px 50px 50px}@media only screen and (max-width:767px){.course-curriculam .course-lesson{padding:35px 20px 40px}}.course-curriculam .course-lesson .title{margin-bottom:6px}.course-curriculam .course-lesson:last-child{margin-bottom:0}.course-curriculam .course-lesson ul li{align-items:center;border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);color:#8b572a;color:var(--color-heading);display:flex;justify-content:space-between;line-height:26px;margin:0;padding:14px 0;transition:.3s;transition:var(--transition)}.course-curriculam .course-lesson ul li:first-child{border-top:1px solid #b8e986;border-top:1px solid var(--color-border)}.course-curriculam .course-lesson ul li i{font-size:16px;position:relative;top:1px}.course-curriculam .course-lesson ul li .text i{margin-right:8px}.course-curriculam .course-lesson ul li:hover{color:#4a90e2;color:var(--color-primary)}.course-curriculam .course-lesson .badge-list{margin:-3px;text-align:right}.course-curriculam .course-lesson .badge{border-radius:3px;font-size:13px;font-weight:500;margin:3px;padding:7px}.course-curriculam .course-lesson .badge.badge-primary{background-color:rgba(26,182,157,.07);color:#4a90e2;color:var(--color-primary);opacity:1}.course-curriculam .course-lesson .badge.badge-secondary{background-color:rgba(238,74,99,.07);color:#f5a623;color:var(--color-secondary);opacity:1}.course-instructor{display:flex;padding:0}.course-instructor .thumbnail{margin-right:30px;min-width:170px}@media only screen and (max-width:575px){.course-instructor .thumbnail{min-width:80px}}.course-instructor .thumbnail img{border-radius:5px;-o-object-fit:cover;object-fit:cover;width:100%}.course-instructor .author-content .title{font-size:20px;margin-bottom:0}.course-instructor .author-content .subtitle{display:block;margin-bottom:20px}.course-instructor .author-content p{margin-bottom:25px}.course-review .heading-title{margin-bottom:5px}.course-review .rating-box{align-items:center;background:#fff;border-radius:5px;box-shadow:0 0 40px 0 rgba(0,0,0,.07);display:flex;flex-direction:column;height:170px;justify-content:center;padding:20px 10px;text-align:center;width:170px}@media only screen and (max-width:575px){.course-review .rating-box{margin:0 auto}}.course-review .rating-box .rating{color:#f8b81f;margin-bottom:5px}.course-review .rating-box .rating-number{color:#f5a623;color:var(--color-secondary);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:28px;font-weight:700;line-height:1;margin-bottom:10px}.course-review .rating-box span{font-size:14px;line-height:26px}.course-review .review-wrapper{margin-top:-30px}@media only screen and (max-width:767px){.course-review .review-wrapper{margin-left:30px}}@media only screen and (max-width:575px){.course-review .review-wrapper{margin-left:0;margin-top:0}}.course-review .review-wrapper .single-progress-bar{position:relative}.course-review .review-wrapper .rating-text{color:#8b572a;color:var(--color-heading);display:inline-block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px;font-weight:500;position:relative;top:17px}.course-review .review-wrapper .rating-text i{color:#f8b81f;padding-left:12px}.course-review .review-wrapper .progress{background:#f2f2f2;height:6px;margin-left:70px;margin-right:38px}.course-review .review-wrapper .progress .progress-bar{background-color:#f8b81f}.course-review .review-wrapper span.rating-value{color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px;font-weight:500;position:absolute;right:0;top:55%}.course-review .comment-area{margin-top:70px}.course-review .comment-list-wrapper .comment .comment-content .rating{color:#f8b81f;margin-bottom:6px}.course-review .comment-list-wrapper .comment+.comment{margin-top:5px}.course-review .comment-form-area{margin-top:40px}.course-review .comment-form-area .heading-title{margin-bottom:25px}.course-review .comment-form-area .rating-icon{align-items:center;display:flex;margin-bottom:20px}.course-review .comment-form-area .rating-icon .title{margin-bottom:0;margin-right:22px}.course-review .comment-form-area .rating-icon .rating i{color:#e1e1e1}.course-review .comment-form-area .rating-icon .rating i:hover{color:#f8b81f}.course-review .border-box{border:1px solid #b8e986;border:1px solid var(--color-border);padding-bottom:10px}.course-review .border-box .rating-box{margin:30px 0 30px 30px}@media only screen and (max-width:991px){.course-review .border-box .rating-box{margin:30px auto}}.course-review .border-box .review-wrapper{margin-right:30px}@media only screen and (max-width:1199px){.course-review .border-box .review-wrapper{margin-left:30px}}@media only screen and (max-width:991px){.course-review .border-box .review-wrapper{margin-bottom:40px}}.course-review .border-box .comment-area{border-top:1px solid #b8e986;border-top:1px solid var(--color-border);margin-top:0;padding-top:30px}.course-review .border-box .comment-list-wrapper .comment{padding-left:30px;padding-right:30px}@media only screen and (max-width:575px){.course-review .border-box .comment-list-wrapper .comment{padding-left:20px;padding-right:20px}}.course-details-3 .nav-tabs{margin-top:80px}@media only screen and (max-width:767px){.course-details-3 .nav-tabs{margin-top:60px}}.course-details-3 .nav-tabs .nav-item .nav-link.active,.course-details-3 .nav-tabs .nav-item .nav-link:hover{color:#8b572a;color:var(--color-heading)}.course-details-3 .course-curriculam .heading-title{align-items:center;display:flex;justify-content:space-between}.course-details-3 .course-curriculam .heading-title .title{margin-bottom:0}.course-details-3 .course-curriculam .heading-title button i{font-size:6px;top:-2px}.course-details-3 .course-curriculam .edu-accordion .heading-title{margin-bottom:15px;margin-top:40px}.course-details-3 .course-curriculam .edu-accordion .accordion-item{margin-bottom:10px}.course-details-3 .course-curriculam .edu-accordion .accordion-item .accordion-button{display:block;padding:30px 50px 26px 65px}.course-details-3 .course-curriculam .edu-accordion .accordion-item .accordion-button:before{border:3px solid #b8e986;border:3px solid var(--color-border);border-radius:50%;content:\"\";height:20px;left:30px;position:absolute;top:28px;width:20px}.course-details-3 .course-curriculam .edu-accordion .accordion-item .accordion-button:after{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);border-radius:50%;color:#fff;color:var(--color-white);content:\"\";font-size:6px;font-weight:400;height:20px;line-height:20px;position:absolute;right:47px;text-align:center;top:30%;width:20px}.course-details-3 .course-curriculam .edu-accordion .accordion-item .accordion-button .topics{color:#9b9b9b;color:var(--color-body);display:block;font-family:\"Poppins\",sans-serif;font-family:var(--font-primary);font-size:15px;font-weight:500;margin-top:4px}.course-details-3 .course-curriculam .edu-accordion .accordion-item .accordion-button .expand{font-size:13px;position:absolute;right:30px;top:60%}.course-details-3 .course-curriculam .edu-accordion .accordion-item.no-collapsed .accordion-button:after{display:none}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status{align-items:center;background-color:#4a90e2;background-color:var(--color-primary);color:#fff;color:var(--color-white);display:flex;justify-content:space-between;padding:22px 30px 20px 70px}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .title{color:#fff;color:var(--color-white);display:flex;margin-bottom:0}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .title i{font-size:20px;margin-right:15px}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .complete-text{font-size:13px;font-weight:500}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .complete-text span{display:inline-block;margin-right:20px;position:relative}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .complete-text span:after{background-color:#fff;background-color:var(--color-white);content:\"\";height:13px;position:absolute;right:-12px;top:4px;width:1px}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .complete-text span:last-child{margin-right:0}.course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .complete-text span:last-child:after{display:none}.course-details-3 .course-curriculam .edu-accordion .course-lesson ul li{padding:14px 30px 14px 100px;position:relative}.course-details-3 .course-curriculam .edu-accordion .course-lesson ul li:before{border:3px solid #b8e986;border:3px solid var(--color-border);border-radius:50%;content:\"\";height:20px;left:70px;position:absolute;top:50%;transform:translateY(-50%);width:20px}.edu-event{box-shadow:0 10px 30px 0 rgba(0,0,0,.05);box-shadow:var(--shadow-darkest);position:relative}.edu-event .thumbnail{position:relative;transition:.3s;transition:var(--transition)}.edu-event .thumbnail a{border-radius:5px 5px 0 0;display:block;overflow:hidden;position:relative}.edu-event .thumbnail a:after{background-color:rgba(0,0,0,.5);bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);visibility:hidden;width:100%}.edu-event .thumbnail a img{border-radius:5px 5px 0 0;transition:.3s;transition:var(--transition);width:100%}.edu-event .thumbnail .event-time{left:10px;position:absolute;top:10px}.edu-event .thumbnail .event-time span{background-color:#f8941f;border-radius:4px;color:#fff;color:var(--color-white);display:block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:12px;font-weight:500;padding:4px 10px}.edu-event .thumbnail .event-time span i{font-size:18px;margin-right:5px;position:relative;top:2px}.edu-event .content{background-color:#f7f5f2;box-shadow:none;padding:40px 30px 45px;position:relative}.edu-event .content,.edu-event .content:after{border-radius:0 0 5px 5px;transition:.3s;transition:var(--transition)}.edu-event .content:after{background-color:rgba(255,91,92,.3);bottom:-5px;content:\"\";height:10px;left:0;opacity:0;position:absolute;right:0;visibility:hidden;width:100%;z-index:-1}.edu-event .content .event-date{align-items:center;background:#4a90e2;background:var(--color-primary);border-radius:50%;display:flex;flex-direction:column;height:80px;justify-content:center;position:absolute;right:30px;top:-40px;width:80px;z-index:1}.edu-event .content .event-date span{color:#fff;color:var(--color-white);display:block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:22px;font-weight:700;text-align:center}.edu-event .content .event-date span.day{line-height:1;margin-bottom:4px}.edu-event .content .event-date span.month{font-size:14px;font-weight:500;line-height:1}.edu-event .content .title{margin-bottom:16px}.edu-event .content .event-meta{margin:-5px -16px;padding-bottom:0;padding-top:14px}.edu-event .content .event-meta li{color:#9b9b9b;color:var(--color-body);margin:5px 16px}.edu-event .content .event-meta li i{color:#f5a623;color:var(--color-secondary);font-size:22px;padding-right:10px;position:relative;top:5px}.edu-event .content .read-more-btn{margin-bottom:-50px;opacity:0;transition:.3s;transition:var(--transition);visibility:hidden}.edu-event .content p{margin-bottom:0}.edu-event:hover .thumbnail{margin-bottom:-75px}.edu-event:hover .thumbnail a:after{opacity:1;visibility:visible}.edu-event:hover .thumbnail a img{transform:scale(1.1)}.edu-event:hover .content{background-color:#fff;background-color:var(--color-white);padding:40px 30px 35px}.edu-event:hover .content:after{opacity:1;visibility:visible}.edu-event:hover .content .read-more-btn{margin-bottom:0;margin-top:25px;opacity:1;visibility:visible}.edu-event.event-style-2 .content{padding:40px 30px 45px}.edu-event.event-style-2 .content:after{display:none}.edu-event.event-style-2:hover .thumbnail{margin-bottom:-70px}.edu-event-list{background-color:transparent;border-radius:10px;padding:30px;transition:.3s;transition:var(--transition)}@media only screen and (max-width:575px){.edu-event-list{padding:20px}}.edu-event-list .inner{display:flex}@media only screen and (max-width:575px){.edu-event-list .thumbnail{max-width:100px}}.edu-event-list .thumbnail a{display:block;-webkit-mask-image:url(/images/others/mask-05.png);mask-image:url(/images/others/mask-05.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover}.edu-event-list .content{flex:1;padding-left:28px;padding-top:12px}@media only screen and (max-width:575px){.edu-event-list .content{padding-left:15px}}.edu-event-list .content .event-meta{align-items:center;display:flex;flex-wrap:wrap;margin:-5px -10px;padding-bottom:10px}.edu-event-list .content .event-meta li{color:#9b9b9b;color:var(--color-body);margin:5px 10px;transition:.3s;transition:var(--transition)}.edu-event-list .content .event-meta li i{color:#f5a623;color:var(--color-secondary);font-size:16px;padding-right:10px;transition:.3s;transition:var(--transition)}.edu-event-list .content .title{margin-bottom:12px}.edu-event-list .content .event-location{align-items:center;color:#9b9b9b;color:var(--color-body);display:flex;padding-bottom:10px;transition:.3s;transition:var(--transition)}.edu-event-list .content .event-location i{color:#f5a623;color:var(--color-secondary);font-size:22px;padding-right:10px;position:relative;top:-1px;transition:.3s;transition:var(--transition)}.edu-event-list .content p{margin:5px 0 22px}.edu-event-list.event-list-2{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);border-radius:0;padding:0 0 30px}.edu-event-list.event-list-2 .inner{align-items:flex-start}@media only screen and (max-width:767px){.edu-event-list.event-list-2 .inner{display:block}}.edu-event-list.event-list-2 .thumbnail a{border-radius:10px;-webkit-mask-image:none;mask-image:none}.edu-event-list.event-list-2 .thumbnail a img{border-radius:10px}@media only screen and (max-width:767px){.edu-event-list.event-list-2 .thumbnail a img{width:100%}}.edu-event-list.event-list-2 .content{padding-left:40px;padding-top:6px}@media only screen and (max-width:767px){.edu-event-list.event-list-2 .content{padding-left:0;padding-top:30px}}.edu-event-list.event-list-2 .content .event-location i,.edu-event-list.event-list-2 .content .event-meta li i{color:#4a90e2;color:var(--color-primary)}.edu-event-list.event-list-3{background-color:#fff;background-color:var(--color-white)}.edu-event-list.event-list-3 .title a{transition:.3s;transition:var(--transition)}.edu-event-list.event-list-3.bg-style-extra02 .content .edu-btn,.edu-event-list.event-list-3.bg-style-extra02:hover{background-color:#8e56ff;background-color:var(--color-extra02)}.edu-event-list.event-list-3.bg-style-extra05 .content .edu-btn,.edu-event-list.event-list-3.bg-style-extra05:hover{background-color:#f8941f;background-color:var(--color-extra05)}.edu-event-list.event-list-3.bg-style-primary .content .edu-btn,.edu-event-list.event-list-3.bg-style-primary:hover{background-color:#4a90e2;background-color:var(--color-primary)}.edu-event-list.event-list-3.bg-style-primary .content .edu-btn:hover{background-color:#fff!important;background-color:var(--color-white)!important;color:#8b572a!important;color:var(--color-heading)!important}.edu-event-list.event-list-3.bg-style-primary .content .edu-btn:hover:after{background:#fff!important;background:var(--color-white)!important}.edu-event-list.event-list-3.bg-style-secondary .content .edu-btn,.edu-event-list.event-list-3.bg-style-secondary:hover{background-color:#f5a623;background-color:var(--color-secondary)}.edu-event-list.event-list-3:hover:not(.event-list-2) .content .title{color:#fff;color:var(--color-white)}.edu-event-list.event-list-3:hover:not(.event-list-2) .content .title a:hover{color:hsla(0,0%,100%,.8)}.edu-event-list.event-list-3:hover:not(.event-list-2) .content .event-location,.edu-event-list.event-list-3:hover:not(.event-list-2) .content .event-location i,.edu-event-list.event-list-3:hover:not(.event-list-2) .content .event-meta li,.edu-event-list.event-list-3:hover:not(.event-list-2) .content .event-meta li i,.edu-event-list.event-list-3:hover:not(.event-list-2) .content p{color:#fff;color:var(--color-white)}.edu-event-list.event-list-3:hover .content .edu-btn{background-color:#fff;background-color:var(--color-white);color:#8b572a;color:var(--color-heading)}.edu-event-list.event-list-3:hover .content .edu-btn:hover{background-color:transparent;color:#fff;color:var(--color-white)}.event-view-all-btn{margin-top:55px;text-align:center}.event-view-all-btn .view-text{font-size:18px;margin-bottom:0}.edu-event-area{position:relative}.edu-event-area .shape-group li{position:absolute;z-index:-1}.edu-event-area .shape-group li.shape-1{left:-81px;top:81px}.edu-event-area .shape-group li.shape-2{left:-190px;top:-44px;z-index:-1}.edu-event-area .shape-group li.shape-2 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:400px;width:400px}.event-area-2{padding:115px 0 120px}@media only screen and (min-width:768px)and (max-width:991px){.event-area-2{padding:55px 0 100px}}@media only screen and (max-width:767px){.event-area-2{padding:35px 0 80px}}.event-area-3{padding:220px 0 230px;z-index:1}.event-area-3:before{background-image:url(/images/bg/bg-image-5.svg);background-repeat:no-repeat;background-size:cover;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.event-area-3{padding:200px 0}}@media only screen and (max-width:767px){.event-area-3{padding:200px 0}}.event-area-3 .shape-group li{z-index:-1}.event-area-3 .shape-group li img{opacity:.3}.event-area-3 .shape-group li.shape-1{left:inherit;right:-77px;top:108px}.event-area-3 .shape-group li.shape-2{bottom:-71px;left:-90px;top:inherit}.event-details{margin-bottom:60px}.event-details .main-thumbnail{margin-bottom:70px}.event-details .main-thumbnail img{border-radius:10px}.event-details .details-content ul{list-style-type:disc;margin-bottom:60px}.event-details .details-content ul li{color:#8b572a;color:var(--color-heading)}.event-details .details-content .event-meta{align-items:center;display:flex;flex-wrap:wrap;margin:-10px -20px}.event-details .details-content .event-meta li{align-items:center;color:#8b572a;color:var(--color-heading);display:flex;margin-left:20px;margin-right:20px;position:relative}.event-details .details-content .event-meta li:after{background-color:#dbdbdb;content:\"\";height:19px;position:absolute;right:-20px;top:4px;width:1px}.event-details .details-content .event-meta li:last-child:after{display:none}.event-details .details-content .event-meta li i{color:#4a90e2;color:var(--color-primary);font-size:20px;padding-right:10px}.event-details .details-content .gmap_canvas{margin-top:40px}.event-details .details-content .gmap_canvas #gmap_canvas{border-radius:5px;height:370px;width:100%}.event-speaker .heading-title{margin-bottom:30px}.faq-accordion .accordion-item{border:none;border-radius:10px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);margin-bottom:30px}.faq-accordion .accordion-item:last-child{margin-bottom:0}.faq-accordion .accordion-item .accordion-header{padding:0;position:relative}.faq-accordion .accordion-item .accordion-button{background-color:#4a90e2;background-color:var(--color-primary);border:none;border-radius:10px 10px 0 0;box-shadow:none;color:#fff;color:var(--color-white);font-size:18px;font-weight:600;padding:20px 45px 20px 30px;transition:.3s;z-index:2}@media only screen and (max-width:575px){.faq-accordion .accordion-item .accordion-button{font-size:16px}}.faq-accordion .accordion-item .accordion-button:after{display:none}.faq-accordion .accordion-item .accordion-button:before{background-image:none;color:#fff;color:var(--color-white);content:\"\";font-family:\"icomoon\";font-size:6px;line-height:1;position:absolute;right:30px;top:22px;transform:rotate(180deg);transition:.3s}.faq-accordion .accordion-item .accordion-button.collapsed{background-color:transparent;color:#8b572a;color:var(--color-heading)}.faq-accordion .accordion-item .accordion-button.collapsed:before{color:#9b9b9b;color:var(--color-body);top:26px;transform:rotate(0deg)}.faq-accordion .accordion-item .accordion-body{padding:25px 30px 30px}.faq-accordion .accordion-item .accordion-body p{margin-bottom:0}.edu-faq-content{position:relative}.edu-faq-content .shape-group{margin:0}.edu-faq-content .shape-group li{position:absolute;z-index:-1}.edu-faq-content .shape-group li.shape-1{bottom:-115px;right:-145px}.edu-faq-content .shape-group li.shape-2{bottom:-95px;right:-165px}.edu-faq-content .shape-group li.shape-2 span{border:15px solid #f5a623;border:15px solid var(--color-secondary);border-radius:50%;display:block;height:101px;width:101px}.edu-faq-gallery{position:relative}.edu-faq-gallery .thumbnail-1{text-align:right}.edu-faq-gallery .thumbnail-1 img{border-radius:120px 120px 0 120px}.edu-faq-gallery .thumbnail-2{margin-top:70px}.edu-faq-gallery .thumbnail-2 img{border-radius:60px 0 100px}.edu-faq-gallery .thumbnail-3{margin-top:-30px;text-align:right}.edu-faq-gallery .thumbnail-3 img{border-radius:60px 0 100px}.edu-faq-gallery .thumbnail-4 img{border-radius:0 50px 120px 120px}.edu-faq-gallery .shape-group{margin:0}.edu-faq-gallery .shape-group li{margin:0;position:absolute;z-index:-1}.edu-faq-gallery .shape-group li.shape-1{left:44%;top:-45px}.edu-faq-gallery .shape-group li.shape-2{right:-10px;top:56px}.edu-faq-gallery .shape-group li.shape-3{bottom:-15px;left:-7px;z-index:1}@media only screen and (max-width:991px){.edu-faq-gallery .shape-group li.shape-3{display:none}}.edu-faq-gallery .shape-group li.shape-4{bottom:-45px;left:-45px}@media only screen and (max-width:991px){.edu-faq-gallery .shape-group li.shape-4{display:none}}.faq-style-1{padding:150px 0 120px}@media only screen and (min-width:768px)and (max-width:991px){.faq-style-1{padding:150px 0 100px}}@media only screen and (max-width:767px){.faq-style-1{padding:100px 0}}.faq-style-2{padding:120px 0 150px;position:relative}.faq-style-2:before{background-image:url(/images/bg/bg-image-10.png);background-size:cover;bottom:0;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}@media only screen and (min-width:768px)and (max-width:991px){.faq-style-2{padding:100px 0}}@media only screen and (max-width:767px){.faq-style-2{padding:80px 0 100px}}.faq-style-2 .edu-faq-gallery{z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.faq-style-2 .edu-faq-gallery{margin-top:50px}}@media only screen and (max-width:767px){.faq-style-2 .edu-faq-gallery{margin-top:20px}}.faq-style-2 .edu-faq-gallery .thumbnail-1{margin-top:35px}.faq-style-2 .edu-faq-gallery .thumbnail-1 img{border-radius:0 80px 0 80px}.faq-style-2 .edu-faq-gallery .thumbnail-2{margin-top:285px}@media only screen and (min-width:768px)and (max-width:991px){.faq-style-2 .edu-faq-gallery .thumbnail-2{margin-top:0}}@media only screen and (max-width:767px){.faq-style-2 .edu-faq-gallery .thumbnail-2{margin-top:0}}.faq-style-2 .edu-faq-gallery .thumbnail-2 img{border-radius:80px 0 80px 0}@media only screen and (max-width:991px){.faq-style-2 .edu-faq-gallery .shape-group{display:none}}.faq-style-2 .edu-faq-gallery .shape-group .shape-1{left:-35px;top:35px}.faq-style-2 .edu-faq-gallery .shape-group .shape-2{left:210px;right:auto;top:35px;z-index:1}.faq-style-2 .edu-faq-gallery .shape-group .shape-3{bottom:inherit;left:inherit;right:-22px;top:230px;z-index:-1}.faq-style-2 .edu-faq-gallery .shape-group .shape-4{bottom:inherit;left:inherit;right:-58px;top:270px}.faq-style-2 .edu-faq-gallery .shape-group .shape-5{bottom:110px;left:-50px}.faq-style-2 .edu-faq-gallery .shape-group .shape-6{bottom:35px;left:90px}.faq-style-3 .edu-faq-gallery{text-align:right}@media only screen and (max-width:991px){.faq-style-3 .edu-faq-gallery{text-align:center}}.faq-style-3 .edu-faq-gallery .thumbnail-1{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 20px 40px 0 rgba(42,11,88,.1);display:inline-block;padding:20px}@media only screen and (max-width:991px){.faq-style-3 .edu-faq-gallery .thumbnail-1{display:block}}.faq-style-3 .edu-faq-gallery .thumbnail-1 img{border-radius:0;width:100%}@media only screen and (max-width:767px){.faq-style-3 .edu-faq-gallery .shape-group{display:none}}.faq-style-3 .edu-faq-gallery .shape-group .shape-1{left:inherit;right:-50px;top:-30px}.faq-style-3 .edu-faq-gallery .shape-group .shape-2{right:-97px;top:70px;z-index:1}.faq-style-3 .edu-faq-gallery .shape-group .shape-3{bottom:-40px;left:-68px;z-index:-1}.faq-style-4{padding-bottom:100px}@media only screen and (max-width:767px){.faq-style-4{padding-bottom:50px}}.faq-style-4 .faq-accordion .accordion-item .accordion-button,.faq-style-4 .faq-accordion .accordion-item .accordion-button:before{color:#fff;color:var(--color-white)}.faq-style-4 .faq-accordion .accordion-item .accordion-button.style-extra02{background-color:#8e56ff;background-color:var(--color-extra02)}.faq-style-4 .faq-accordion .accordion-item .accordion-button.style-extra05{background-color:#f8941f;background-color:var(--color-extra05)}.faq-style-4 .faq-accordion .accordion-item .accordion-button.style-primary{background-color:#4a90e2;background-color:var(--color-primary)}.faq-style-4 .faq-accordion .accordion-item .accordion-button.collapsed{border-radius:10px}.faq-style-4 .faq-thumbnail{position:relative}.faq-style-4 .faq-thumbnail .thumbnail{-webkit-mask-image:url(/images/others/mask-09.png);mask-image:url(/images/others/mask-09.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;text-align:center}.faq-style-4 .faq-thumbnail .shape-group li{margin:0;position:absolute;z-index:-1}.faq-style-4 .faq-thumbnail .shape-group li.shape-1{right:115px;top:-78px;z-index:1}@media only screen and (max-width:991px){.faq-style-4 .faq-thumbnail .shape-group li.shape-1{z-index:-1}}.faq-style-4 .faq-thumbnail .shape-group li.shape-2{right:30px;top:0}.faq-style-4 .faq-thumbnail .shape-group li.shape-3{bottom:40px;left:10px}.faq-page-area{overflow:hidden}.faq-page-nav{padding-right:30px}@media only screen and (max-width:991px){.faq-page-nav{margin-bottom:40px;padding-right:0;text-align:center}}.faq-page-nav .title{margin-bottom:14px}.faq-page-nav .nav-tabs{border:none;display:block}.faq-page-nav .nav-tabs .nav-item{margin:18px 0}.faq-page-nav .nav-tabs .nav-link{background-color:transparent;border:none;color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-weight:600;padding:5px 0;position:relative;transition:.3s;transition:var(--transition)}@media only screen and (max-width:991px){.faq-page-nav .nav-tabs .nav-link{margin:0 auto}}.faq-page-nav .nav-tabs .nav-link:after{color:#4a90e2;color:var(--color-primary);content:\"\";font-family:\"icomoon\";font-family:var(--font-icomoon);font-size:20px;font-weight:400;left:-20px;opacity:0;position:absolute;top:1px;transition:.3s;transition:var(--transition);visibility:hidden}.faq-page-nav .nav-tabs .nav-link.active{color:#4a90e2;color:var(--color-primary);padding-left:30px}.faq-page-nav .nav-tabs .nav-link.active:after{font-size:20px;left:0;opacity:1;visibility:visible}.faq-page-tab-content{position:relative}.faq-page-tab-content:after{bottom:-90px;content:url(/images/others/map-shape-1.png);position:absolute;right:70px;z-index:-1}.features-area-1 .features-box svg{max-width:37px}.features-area-1 .features-box:hover .icon svg path{stroke:#fff;stroke:var(--color-white)}.features-box{background-color:#fff;background-color:var(--color-white);border-radius:4px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);padding:50px 30px;text-align:center}.features-box,.features-box .icon{transition:.3s;transition:var(--transition)}.features-box .icon{align-items:center;border-radius:50%;display:flex;font-size:32px;height:80px;justify-content:center;margin:0 auto 28px;width:80px}.features-box .content .title{margin-bottom:15px;transition:.3s;transition:var(--transition)}.features-box .content .title span{display:block}.features-box .content p{color:#8b572a;color:var(--color-heading);margin-bottom:0;transition:.3s;transition:var(--transition)}.features-box.color-primary-style .icon{background-color:rgba(26,182,157,.1);color:#4a90e2;color:var(--color-primary)}.features-box.color-primary-style .icon:after{background-color:#4a90e2;background-color:var(--color-primary)}.features-box.color-primary-style:hover .icon{background-color:#1ab69d;color:#fff;color:var(--color-white)}.features-box.color-secondary-style .icon{background-color:rgba(238,74,98,.1);color:#f5a623;color:var(--color-secondary)}.features-box.color-secondary-style .icon:after{background-color:#f5a623;background-color:var(--color-secondary)}.features-box.color-secondary-style:hover .icon{background-color:#ee4a62;color:#fff;color:var(--color-white)}.features-box.color-extra05-style .icon{background-color:rgba(248,148,31,.1);color:#f8941f;color:var(--color-extra05)}.features-box.color-extra05-style .icon:after{background-color:#f8941f;background-color:var(--color-extra05)}.features-box.color-extra05-style:hover .icon{background-color:#f8941f;color:#fff;color:var(--color-white)}.features-box.color-extra08-style .icon{background-color:rgba(70,100,228,.1);color:#4664e4;color:var(--color-extra08)}.features-box.color-extra08-style:hover .icon{background-color:#4664e4;color:#fff;color:var(--color-white)}.features-box.color-extra02-style .icon{background-color:rgba(142,86,255,.1);color:#8e56ff;color:var(--color-extra02)}.features-box.color-extra02-style .icon:after{background-color:#8e56ff;background-color:var(--color-extra02)}.features-box.color-extra02-style:hover .icon{background-color:#8e56ff;color:#fff;color:var(--color-white)}.features-box.color-extra03-style .icon{background-color:rgba(249,37,150,.1);color:#f92596;color:var(--color-extra03)}.features-box.color-extra03-style .icon:after{background-color:#f92596;background-color:var(--color-extra03)}.features-box.color-extra03-style:hover .icon{background-color:#f92596;color:#fff;color:var(--color-white)}.features-box.color-extra04-style .icon{background-color:rgba(88,102,235,.1);color:#5866eb;color:var(--color-extra04)}.features-box.color-extra04-style .icon:after{background-color:#5866eb;background-color:var(--color-extra04)}.features-box.color-extra04-style:hover .icon{background-color:#5866eb;color:#fff;color:var(--color-white)}.features-box.features-style-2{align-items:center;background-color:transparent;border-right:1px solid hsla(0,0%,100%,.15);box-shadow:none;display:flex;padding:30px 0 30px 40px;text-align:left}@media only screen and (max-width:1199px){.features-box.features-style-2{border-right:none;padding-left:0}}@media only screen and (min-width:768px)and (max-width:991px){.features-box.features-style-2{justify-content:center}}@media only screen and (max-width:767px){.features-box.features-style-2{justify-content:center}}@media only screen and (max-width:575px){.features-box.features-style-2{justify-content:flex-start}}.features-box.features-style-2 .edublink-svg-animate svg path{stroke:#fff!important;max-width:38px}.features-box.features-style-2:first-child{padding-left:0}.features-box.features-style-2:last-child{border-right:none}.features-box.features-style-2 .icon{background-color:hsla(0,0%,100%,.1);color:#fff;color:var(--color-white);margin:0}.features-box.features-style-2 .content{padding-left:20px}.features-box.features-style-2 .content .title{color:#fff;color:var(--color-white);font-weight:500;font-weight:var(--p-medium);margin-bottom:0}.features-box.features-style-3{align-items:flex-start;background-color:transparent;box-shadow:none;display:flex;padding:50px 25px 42px;text-align:left}@media only screen and (min-width:768px)and (max-width:991px){.features-box.features-style-3{padding:40px 50px}}@media only screen and (max-width:767px){.features-box.features-style-3{padding:30px 25px}}.features-box.features-style-3:first-child{padding-left:50px}@media only screen and (max-width:767px){.features-box.features-style-3:first-child{padding-left:25px}}.features-box.features-style-3 .icon{background-color:transparent;font-size:40px;height:auto;margin-bottom:0;margin-right:20px;margin-top:2px;min-width:50px;width:auto}.features-box.features-style-3 .content{flex:1}.features-box.features-style-3 .content p{color:#9b9b9b;color:var(--color-body)}.features-box.features-style-3:hover .icon{background-color:transparent;color:inherit}.features-box.features-style-3:hover.color-primary-style{background-color:rgba(26,182,157,.07)}.features-box.features-style-3:hover.color-primary-style:hover .icon{color:#4a90e2;color:var(--color-primary)}.features-box.features-style-3:hover.color-secondary-style:hover{background-color:rgba(238,74,98,.07)}.features-box.features-style-3:hover.color-secondary-style:hover .icon{color:#f5a623;color:var(--color-secondary)}.features-box.features-style-3:hover.color-extra02-style:hover{background-color:rgba(142,86,255,.07)}.features-box.features-style-3:hover.color-extra02-style:hover .icon{color:#8e56ff;color:var(--color-extra02)}.features-box.features-style-4{align-items:flex-start;background-color:transparent;box-shadow:none;display:flex;margin-bottom:50px;padding:0;text-align:left}.features-box.features-style-4 .icon{border-radius:0;font-size:40px;height:83px;margin-bottom:0;margin-right:30px;-webkit-mask-image:url(/images/others/mask-08.png);mask-image:url(/images/others/mask-08.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover;position:relative;width:109px}@media only screen and (max-width:575px){.features-box.features-style-4 .icon{margin-right:15px}}.features-box.features-style-4 .icon:after{bottom:0;content:\"\";left:0;-webkit-mask-image:url(/images/others/mask-07.png);mask-image:url(/images/others/mask-07.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;position:absolute;right:0;top:0}.features-box.features-style-4 .content{flex:1}.features-box.features-style-4 .content .title{font-weight:700;font-weight:var(--p-bold);margin-bottom:5px}.features-box.features-style-4 .content p{color:#9b9b9b;color:var(--color-body)}.features-grid-wrap{display:grid;grid-template-columns:repeat(4,1fr)}@media only screen and (min-width:768px)and (max-width:991px){.features-grid-wrap{grid-template-columns:repeat(2,1fr)}}@media only screen and (max-width:767px){.features-grid-wrap{grid-template-columns:repeat(2,1fr)}}@media only screen and (max-width:575px){.features-grid-wrap{grid-template-columns:repeat(1,1fr)}}.features-area-2{background:linear-gradient(-90deg,#31b978,#1ab69d)}.features-area-3 .features-grid-wrap{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 20px 40px 0 rgba(42,11,88,.1);grid-template-columns:repeat(3,1fr);margin-top:-120px;position:relative;z-index:2}@media only screen and (max-width:991px){.features-area-3 .features-grid-wrap{grid-template-columns:repeat(1,1fr)}}.features-area-4{padding:120px 0 90px}@media only screen and (max-width:1199px){.features-area-4{padding:100px 0 90px}}@media only screen and (min-width:768px)and (max-width:991px){.features-area-4{padding:60px 0 80px}}@media only screen and (max-width:767px){.features-area-4{padding:60px 0}}.edu-gallery-area .gallery-grid-wrap{margin:-15px}.edu-gallery-grid{display:block;padding:15px;position:relative;width:33.33%}@media only screen and (max-width:767px){.edu-gallery-grid{width:50%}}@media only screen and (max-width:479px){.edu-gallery-grid{width:100%}}.edu-gallery-grid .thumbnail{position:relative}.edu-gallery-grid .thumbnail img{border-radius:5px;width:100%}.edu-gallery-grid .thumbnail:before{background:linear-gradient(-145deg,#31b978,#1ab69d);border-radius:5px;content:\"\";height:100%;left:0;opacity:0;position:absolute;top:0;transition:.3s;width:100%}.edu-gallery-grid .zoom-icon{background-color:#fff;background-color:var(--color-white);border-radius:50%;color:#4a90e2;color:var(--color-primary);cursor:pointer;font-size:20px;height:70px;left:50%;line-height:70px;opacity:0;position:absolute;text-align:center;top:55%;transform:translate(-50%,-50%);transition:.3s;width:70px}@media only screen and (max-width:767px){.edu-gallery-grid .zoom-icon{font-size:16px;height:50px;line-height:52px;width:50px}}.edu-gallery-grid:hover .thumbnail:before{opacity:.9}.edu-gallery-grid:hover .zoom-icon{opacity:1;top:50%}.hero-banner{align-items:center;display:flex;min-height:660px}@media only screen and (max-width:1199px){.hero-banner{min-height:600px}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner{min-height:100%}}.hero-banner .banner-content{position:relative;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner .banner-content{margin-bottom:50px;text-align:center}}@media only screen and (max-width:767px){.hero-banner .banner-content{margin-bottom:40px;text-align:center}}.hero-banner .banner-content .subtitle{color:#7ed321;color:var(--color-tertiary);display:block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:16px;font-weight:700;font-weight:var(--p-bold);letter-spacing:2.6px;margin-bottom:20px;text-transform:uppercase}.hero-banner .banner-content .title{margin-bottom:18px}@media only screen and (max-width:1199px){.hero-banner .banner-content .title br{display:none}}.hero-banner .banner-content p{color:#8b572a;color:var(--color-heading);font-size:18px}.hero-banner .banner-content .shape-group li{margin:0;position:absolute;z-index:-1}.hero-banner .banner-content .shape-group li.shape-1{left:-90px;top:-75px}.hero-banner .banner-thumbnail{margin-right:-75px;position:relative;z-index:1}@media only screen and (max-width:1199px){.hero-banner .banner-thumbnail{margin-right:0}}.hero-banner .banner-thumbnail .thumbnail{text-align:right}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner .banner-thumbnail .thumbnail{text-align:center}}@media only screen and (max-width:767px){.hero-banner .banner-thumbnail .thumbnail{text-align:center}}.hero-banner .banner-thumbnail .instructor-info{bottom:70px;left:0;position:absolute}@media only screen and (max-width:767px){.hero-banner .banner-thumbnail .instructor-info{bottom:40px}}.hero-banner .banner-thumbnail .instructor-info .inner{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 20px 40px 0 rgba(0,0,0,.1);padding:26px 30px 16px}.hero-banner .banner-thumbnail .instructor-info .inner .title{margin-bottom:5px}.hero-banner .banner-thumbnail .instructor-info .inner .media{display:flex}.hero-banner .banner-thumbnail .instructor-info .inner .media .thumb{margin-left:-2px}.hero-banner .banner-thumbnail .instructor-info .inner .media .content{color:#8b572a;color:var(--color-heading);font-weight:500;line-height:1;margin-top:10px}.hero-banner .banner-thumbnail .instructor-info .inner .media .content span{color:#f5a623;color:var(--color-secondary);display:block;font-weight:700}.hero-banner .banner-thumbnail .shape-group li{margin:0;position:absolute;z-index:-1}.hero-banner .banner-thumbnail .shape-group li.shape-1{left:160px;top:50px}.hero-banner .banner-thumbnail .shape-group li.shape-2{left:170px;top:115px}.hero-banner .banner-thumbnail .shape-group li.shape-3{left:17%;top:45%}.hero-banner .banner-thumbnail .shape-group li.shape-3 span.circle-shape{background:#7ed321;background:var(--color-tertiary);border-radius:100%;height:41px;width:41px}.hero-banner .banner-thumbnail .shape-group li.shape-4{right:41px;top:114px;z-index:1}.hero-banner .banner-thumbnail .shape-group li.shape-5{bottom:100px;right:-50px}.hero-banner .banner-thumbnail .shape-group li.shape-6{bottom:132px;right:-98px}.hero-banner.presentation-hero-style{-webkit-clip-path:none;clip-path:none;flex-direction:column;justify-content:center;margin-top:-110px;min-height:745px;min-height:930px;position:relative;z-index:1}.hero-banner.presentation-hero-style:before{background-image:url(/images/bg/bg-image-27.png);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.presentation-hero-style{min-height:740px}}@media only screen and (max-width:767px){.hero-banner.presentation-hero-style{min-height:600px}}.hero-banner.presentation-hero-style .banner-content{padding-bottom:30px;text-align:center}@media only screen and (max-width:767px){.hero-banner.presentation-hero-style .banner-content{padding:160px 0}}.hero-banner.presentation-hero-style .banner-content .subtitle{background:#31b978;background:linear-gradient(270deg,#31b978 0,#1ab69d 76%);-webkit-background-clip:text;letter-spacing:1px;-webkit-text-fill-color:transparent;margin-bottom:40px}@media only screen and (max-width:767px){.hero-banner.presentation-hero-style .banner-content .subtitle{font-size:14px}}.hero-banner.presentation-hero-style .banner-content .title{margin-bottom:40px}.hero-banner.presentation-hero-style .banner-content:after,.hero-banner.presentation-hero-style .banner-content:before{border:1px solid #dae1e3;border-radius:50%;content:\"\";display:block;position:absolute;transition:.3s;transition:var(--transition);z-index:-1}@media only screen and (max-width:767px){.hero-banner.presentation-hero-style .banner-content:after,.hero-banner.presentation-hero-style .banner-content:before{display:none}}.hero-banner.presentation-hero-style .banner-content:before{animation:ripple_3 2.5s linear 1s infinite;height:570px;left:200px;top:-140px;width:570px}@media only screen and (max-width:1199px){.hero-banner.presentation-hero-style .banner-content:before{left:110px}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.presentation-hero-style .banner-content:before{height:400px;left:154px;top:-70px;width:400px}}.hero-banner.presentation-hero-style .banner-content:after{animation:ripple_3 2.5s linear infinite;height:370px;left:299px;top:-43px;width:370px}@media only screen and (max-width:1199px){.hero-banner.presentation-hero-style .banner-content:after{left:210px}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.presentation-hero-style .banner-content:after{height:300px;left:202px;top:-16px;width:300px}}.hero-banner.presentation-hero-style .banner-content p{margin:0 auto 30px;width:70%}@media only screen and (max-width:991px){.hero-banner.presentation-hero-style .banner-content p{width:100%}}.hero-banner.presentation-hero-style .banner-gallery{display:block;position:static}@media only screen and (max-width:991px){.hero-banner.presentation-hero-style .banner-gallery{display:none}}.hero-banner.presentation-hero-style .banner-gallery .thumbnail{position:absolute;z-index:2}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.presentation-hero-style .banner-gallery .thumbnail img{width:75%}}@media only screen and (max-width:1199px){.hero-banner.presentation-hero-style .banner-gallery .thumbnail img{width:65%}}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-1{left:0;top:225px}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-1 img{animation:none}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-2{bottom:158px;left:0;padding:0;right:inherit;top:inherit}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-3{right:0;top:195px}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-3 img{border-radius:0}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-4{bottom:180px;right:0}@media only screen and (max-width:1199px),only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-4{right:-115px}}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-5{border-radius:10px;left:325px;top:135px}.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-5 img{border-radius:10px;box-shadow:0 20px 50px 0 rgba(0,0,0,.04)}@media only screen and (max-width:767px){.hero-banner.presentation-hero-style .banner-gallery .thumbnail.thumbnail-5{display:none}}@media only screen and (max-width:991px){.hero-banner.presentation-hero-style .shape-group{display:none}}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.presentation-hero-style .shape-group li img{width:75%}}@media only screen and (max-width:1199px){.hero-banner.presentation-hero-style .shape-group li img{width:65%}}.hero-banner.presentation-hero-style .shape-group li.shape-1{bottom:37%;left:19%;top:auto}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.presentation-hero-style .shape-group li.shape-1{bottom:32%;left:19%}}.hero-banner.presentation-hero-style .shape-group li.shape-1 img{opacity:1}.hero-banner.presentation-hero-style .shape-group li.shape-2{bottom:29%;left:20%;top:auto;z-index:2}.hero-banner.presentation-hero-style .shape-group li.shape-3{bottom:auto;left:auto;right:13%;top:145px}.hero-banner.presentation-hero-style .shape-group li.shape-4{bottom:auto;left:auto;right:15%;top:29%;z-index:2}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.presentation-hero-style .shape-group li.shape-4{right:23%;top:19%}}.hero-banner.presentation-hero-style .shape-group li.shape-4 span{border:16px solid #7ed321;border:16px solid var(--color-tertiary);border-radius:50%;display:block;height:100px;width:100px}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.presentation-hero-style .shape-group li.shape-4 span{border:7px solid #7ed321;border:7px solid var(--color-tertiary);height:50px;width:50px}}.hero-banner.hero-style-1{align-items:flex-end;background-color:#eaf0f2;background-color:var(--bg-color);position:relative}.hero-banner.hero-style-1:before{background-image:url(/images/banner/BG-1.png);bottom:0;content:\"\";height:100%;left:0;position:absolute;width:100%}@media only screen and (max-width:991px){.hero-banner.hero-style-1:before{display:none}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-1{padding-top:95px}}@media only screen and (max-width:767px){.hero-banner.hero-style-1{padding-top:75px}}@media only screen and (max-width:1199px){.hero-banner.hero-style-1 .banner-content .shape-group,.hero-banner.hero-style-1 .banner-thumbnail .shape-group{display:none}}.hero-banner.hero-style-1 .banner-thumbnail .shape-group .shape-1{animation:edublink-sm-x-move 3.5s linear infinite alternate}.hero-banner.hero-style-1 .shape-7{position:absolute;right:-6px;top:13%;z-index:1}.hero-banner.hero-style-1 .shape-7 img{filter:opacity(.7);-webkit-filter:opacity(.7)}.hero-banner.hero-style-2{background-position:bottom;padding:143px 0 180px;position:relative}@media only screen and (max-width:1199px){.hero-banner.hero-style-2{padding:0}}.hero-banner.hero-style-2:before{background:url(/images/bg/bg-image-1.svg);background-position:50%;background-size:cover;content:\"\";filter:brightness(0) saturate(100%) invert(97%) sepia(7%) saturate(503%) hue-rotate(316deg) brightness(103%) contrast(92%);height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-2{padding:100px 0 150px}}@media only screen and (max-width:767px){.hero-banner.hero-style-2{padding:80px 0 150px}}.hero-banner.hero-style-2 .banner-gallery{display:grid;grid-template-columns:repeat(2,1fr);position:relative;text-align:right;z-index:1}.hero-banner.hero-style-2 .banner-gallery .thumbnail.thumbnail-1 img{border-radius:0 70px 0 110px}.hero-banner.hero-style-2 .banner-gallery .thumbnail.thumbnail-2{padding-left:30px;padding-top:120px}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-2 .banner-gallery .thumbnail.thumbnail-2{text-align:left}}@media only screen and (max-width:767px){.hero-banner.hero-style-2 .banner-gallery .thumbnail.thumbnail-2{padding-top:0;text-align:left}}.hero-banner.hero-style-2 .banner-gallery .thumbnail.thumbnail-2 img{border-radius:50px 0 90px 0}.hero-banner.hero-style-2 .banner-gallery .online-support{bottom:40px;left:50px;position:absolute}@media only screen and (max-width:767px){.hero-banner.hero-style-2 .banner-gallery .online-support{display:none}}.hero-banner.hero-style-2 .banner-gallery .online-support .inner{align-items:center;background:#fff;border-radius:50px 10px 50px 10px;box-shadow:0 20px 40px rgba(0,0,0,.1);display:flex;padding:30px}.hero-banner.hero-style-2 .banner-gallery .online-support .inner .icon{align-items:center;background:rgba(238,74,98,.1);border-radius:50%;color:#f5a623;color:var(--color-secondary);display:flex;font-size:22px;height:50px;justify-content:center;margin-right:15px;width:50px}.hero-banner.hero-style-2 .banner-gallery .online-support .inner .content{text-align:left}.hero-banner.hero-style-2 .banner-gallery .online-support .inner .content .subtitle{color:rgba(20,20,23,.5);display:block;font-size:13px;font-weight:700;font-weight:var(--p-bold);margin-bottom:5px;text-transform:uppercase}.hero-banner.hero-style-2 .banner-gallery .online-support .inner .content .title{font-weight:500;font-weight:var(--p-medium);line-height:1;margin-bottom:0}.hero-banner.hero-style-2 .banner-gallery .online-support .inner .content .title a{color:#f5a623;color:var(--color-secondary)}@media only screen and (max-width:767px){.hero-banner.hero-style-2 .banner-gallery .shape-group{display:none}}.hero-banner.hero-style-2 .banner-gallery .shape-group li{margin:0;position:absolute;z-index:-1}.hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-1{right:125px;top:-58px}.hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-2{right:-50px;top:85px}.hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-3{bottom:30px;right:-108px}.hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-4{bottom:-10px;left:-12px}.hero-banner.hero-style-3{-webkit-mask-image:url(/images/others/mask-01.png);mask-image:url(/images/others/mask-01.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover;min-height:715px;position:relative;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-3{min-height:100%;padding:100px 0 55px}}@media only screen and (max-width:767px){.hero-banner.hero-style-3{min-height:100%;padding:80px 0 35px}}.hero-banner.hero-style-3:before{background:linear-gradient(90deg,rgba(0,0,0,.8),transparent);bottom:0;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.hero-banner.hero-style-3 .banner-content{padding-bottom:110px}.hero-banner.hero-style-3 .banner-content .title{color:#fff;color:var(--color-white);font-weight:800;font-weight:var(--p-extra-bold)}.hero-banner.hero-style-3 .banner-content p{color:#fff;color:var(--color-white);font-size:18px}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-3 .shape-group{display:none}}@media only screen and (max-width:767px){.hero-banner.hero-style-3 .shape-group{display:none}}.hero-banner.hero-style-3 .shape-group li{margin:0;position:absolute;z-index:-1}.hero-banner.hero-style-3 .shape-group li.shape-1{left:-207px;top:-122px}.hero-banner.hero-style-3 .shape-group li.shape-2{left:142px;top:-108px}.hero-banner.hero-style-3 .shape-group li.shape-3{left:-516px;top:-410px}.hero-banner.hero-style-4{-webkit-clip-path:polygon(0 0,100% 0,100% 92%,0 100%);clip-path:polygon(0 0,100% 0,100% 92%,0 100%);flex-direction:column;justify-content:center;min-height:745px;position:relative;z-index:1}.hero-banner.hero-style-4:before{background-image:url(/images/bg/bg-image-18.png);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-4{-webkit-clip-path:polygon(0 0,100% 0,100% 92%,0 97%);clip-path:polygon(0 0,100% 0,100% 92%,0 97%)}}@media only screen and (max-width:767px){.hero-banner.hero-style-4{-webkit-clip-path:none;clip-path:none}}.hero-banner.hero-style-4 .banner-content{padding-bottom:30px;text-align:center}.hero-banner.hero-style-4 .banner-content p{margin:0 auto 30px;width:70%}@media only screen and (max-width:991px){.hero-banner.hero-style-4 .banner-content p{width:100%}}.hero-banner.hero-style-4 .banner-gallery{display:block;position:static}.hero-banner.hero-style-4 .banner-gallery .thumbnail{position:absolute}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.hero-style-4 .banner-gallery .thumbnail{width:17%}}@media only screen and (max-width:1199px){.hero-banner.hero-style-4 .banner-gallery .thumbnail{width:15%}}@media only screen and (max-width:575px){.hero-banner.hero-style-4 .banner-gallery .thumbnail{width:30%}}@media only screen and (max-width:991px){.hero-banner.hero-style-4 .banner-gallery .thumbnail{display:none}}.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-1{left:120px;top:140px}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-1{left:30px}}@media only screen and (max-width:1200px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-1{left:80px}}.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-1 img{animation:radiusChange 8s linear infinite;border-radius:0}.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-2{padding-top:0;right:120px;top:100px}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-2{right:40px}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-2{right:15px}}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-2{right:15px}}.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-2 img{animation:radiusChange2 5s linear;border-radius:50px 0}.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-3{bottom:160px;padding-top:0;right:310px}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-3{right:200px}}@media only screen and (max-width:1199px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-3{right:100px}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-3{right:15px}}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-3{right:15px}}.hero-banner.hero-style-4 .banner-gallery .thumbnail.thumbnail-3 img{border-radius:10px 40px}.hero-banner.hero-style-4 .banner-gallery .online-support{bottom:160px;left:240px;position:absolute}@media only screen and (max-width:1199px){.hero-banner.hero-style-4 .banner-gallery .online-support{bottom:100px;left:100px}}@media only screen and (max-width:991px){.hero-banner.hero-style-4 .banner-gallery .online-support{display:none}}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .banner-gallery .online-support{bottom:-40px;left:0}}.hero-banner.hero-style-4 .banner-gallery .online-support .inner{align-items:center;background:#fff;border-radius:50px 10px 50px 10px;box-shadow:0 20px 40px rgba(0,0,0,.1);display:flex;padding:30px}.hero-banner.hero-style-4 .banner-gallery .online-support .inner .icon{align-items:center;background:rgba(238,74,98,.1);border-radius:50%;color:#f5a623;color:var(--color-secondary);display:flex;font-size:22px;height:50px;justify-content:center;margin-right:15px;width:50px}.hero-banner.hero-style-4 .banner-gallery .online-support .inner .content{text-align:left}.hero-banner.hero-style-4 .banner-gallery .online-support .inner .content .subtitle{color:rgba(20,20,23,.5);display:block;font-size:13px;font-weight:700;font-weight:var(--p-bold);margin-bottom:5px;text-transform:uppercase}.hero-banner.hero-style-4 .banner-gallery .online-support .inner .content .title{color:#8b572a;color:var(--color-heading);font-weight:500;font-weight:var(--p-medium);line-height:1;margin-bottom:0}.hero-banner.hero-style-4 .scroll-down-btn{bottom:-75px;left:50%;position:absolute;transform:translateX(-50%)}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .scroll-down-btn{bottom:-10px;z-index:12}}.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn{background-color:hsla(0,0%,100%,.5);border-radius:50%;display:flex;height:200px;justify-content:center;position:relative;width:200px}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn{align-items:center;background-color:#fff;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);height:50px;width:50px}}.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn i{color:#4a90e2;color:var(--color-primary);font-size:26px;padding-top:40px}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn i{font-size:16px;padding-top:0}}.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:after,.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:before{border:1px solid #dfe7e9;border-radius:50%;bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);z-index:-1}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:after,.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:before{display:none}}.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:before{animation:ripple_2 3s linear infinite}.hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:after{animation:ripple_2 3s linear 1s infinite}.hero-banner.hero-style-4 .shape-group li{margin:0;position:absolute;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-4 .shape-group li{width:10%}}@media only screen and (max-width:767px){.hero-banner.hero-style-4 .shape-group li{width:10%}}.hero-banner.hero-style-4 .shape-group li.shape-1{left:195px;top:50px}.hero-banner.hero-style-4 .shape-group li.shape-1 img{opacity:.5}@media only screen and (max-width:1599px){.hero-banner.hero-style-4 .shape-group li.shape-1{left:161px}}.hero-banner.hero-style-4 .shape-group li.shape-2{left:335px;top:85px}.hero-banner.hero-style-4 .shape-group li.shape-2 img{width:130px}@media only screen and (max-width:1599px){.hero-banner.hero-style-4 .shape-group li.shape-2{left:215px}}.hero-banner.hero-style-4 .shape-group li.shape-3{bottom:200px;left:130px}.hero-banner.hero-style-4 .shape-group li.shape-4{bottom:220px;left:26%}.hero-banner.hero-style-4 .shape-group li.shape-5{right:24%;top:35px}.hero-banner.hero-style-4 .shape-group li.shape-6{right:88px;top:66px}@media only screen and (max-width:1599px){.hero-banner.hero-style-4 .shape-group li.shape-6{right:8px}}.hero-banner.hero-style-4 .shape-group li.shape-7{bottom:210px;right:60px}@media only screen and (max-width:1599px){.hero-banner.hero-style-4 .shape-group li.shape-7{bottom:220px;right:-50px}}.hero-banner.hero-style-4 .shape-group li.shape-7 img{opacity:.3}.hero-banner.hero-style-4 .shape-group li.shape-8{bottom:120px;left:-95px;z-index:-2}.hero-banner.hero-style-4 .shape-group li.shape-8 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:270px;width:270px}.hero-banner.hero-style-5{background-color:#f7f5f2;background-color:var(--color-lighten04);-webkit-mask-image:url(/images/others/mask-02.png);mask-image:url(/images/others/mask-02.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover;min-height:715px;position:relative}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-5{padding:100px 0}}@media only screen and (max-width:767px){.hero-banner.hero-style-5{padding:80px 0}}.hero-banner.hero-style-5 .banner-thumbnail{margin-right:0;padding:40px;text-align:right}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-5 .banner-thumbnail{text-align:center}}.hero-banner.hero-style-5 .banner-thumbnail .thumbnail{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);display:inline-block;padding:20px;position:relative}@media only screen and (min-width:992px)and (max-width:1199px){.hero-banner.hero-style-5 .banner-thumbnail .shape-group{display:block}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-5 .banner-thumbnail .shape-group li{width:100%}}.hero-banner.hero-style-5 .banner-thumbnail .shape-group img{transform:none}.hero-banner.hero-style-5 .banner-thumbnail .shape-group .shape-1{left:auto;right:0;top:0}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-5 .banner-thumbnail .shape-group .shape-1{left:0;right:0}}.hero-banner.hero-style-5 .banner-thumbnail .shape-group .shape-2{bottom:85px;left:52px;top:auto;z-index:1}.hero-banner.hero-style-5 .banner-thumbnail .shape-group .shape-3{left:auto;right:-45px;top:18px;z-index:-2}.hero-banner.hero-style-5 .banner-thumbnail .shape-group .shape-4{right:8px;top:-45px}@media only screen and (max-width:767px){.hero-banner.hero-style-5 .shape-group{display:none}}.hero-banner.hero-style-5 .shape-group li{margin:0;position:absolute;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-5 .shape-group li{width:15%}}.hero-banner.hero-style-5 .shape-group li.shape-1{left:70px;top:40px}.hero-banner.hero-style-5 .shape-group li.shape-2{bottom:28px;left:160px}.hero-banner.hero-style-5 .shape-group li.shape-3{left:46%;top:85px}.hero-banner.hero-style-5 .shape-group li.shape-4{bottom:70px;right:205px}.hero-banner.hero-style-5 .shape-group li.shape-5{right:75px;top:55px}.hero-banner.hero-style-6{min-height:710px;position:relative;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-6{padding:100px 0 0}}@media only screen and (max-width:767px){.hero-banner.hero-style-6{padding:80px 0 0}}.hero-banner.hero-style-6:before{background-color:#f0f4f5;background-color:var(--color-lighten01);bottom:0;content:\"\";height:100%;left:0;-webkit-mask-image:url(/images/others/mask-03.png);mask-image:url(/images/others/mask-03.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover;position:absolute;right:0;top:0;width:100%;z-index:-1}.hero-banner.hero-style-6 .banner-thumbnail{margin-bottom:-125px;margin-right:-15px;text-align:right}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-6 .banner-thumbnail{margin-bottom:0;margin-right:0;text-align:center}}@media only screen and (max-width:767px){.hero-banner.hero-style-6 .banner-thumbnail{margin-bottom:0;margin-right:0;text-align:center}}.hero-banner.hero-style-6 .banner-thumbnail .thumbnail{display:inline-block;position:relative}@media only screen and (max-width:1199px),only screen and (max-width:767px){.hero-banner.hero-style-6 .banner-thumbnail .shape-group{display:block}}.hero-banner.hero-style-6 .banner-thumbnail .shape-group img{opacity:1}.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-1{left:auto;right:15px;top:80px}@media only screen and (max-width:991px){.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-1{left:180px;right:inherit}}@media only screen and (max-width:767px){.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-1{left:60px}}.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-2{bottom:250px;left:80px;top:auto;z-index:1}@media only screen and (max-width:767px){.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-2{display:none}}.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-3{left:auto;right:-75px;top:80px;z-index:-2}.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-4{right:22px;top:26px}@media only screen and (max-width:767px){.hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-4,.hero-banner.hero-style-6 .shape-group{display:none}}.hero-banner.hero-style-6 .shape-group li{margin:0;position:absolute;z-index:-1}.hero-banner.hero-style-6 .shape-group li img{opacity:.2}.hero-banner.hero-style-6 .shape-group li.shape-1{left:250px;top:45px}.hero-banner.hero-style-6 .shape-group li.shape-2{bottom:26px;left:115px}.hero-banner.hero-style-6 .shape-group li.shape-3{right:0;top:25px;z-index:-1}.hero-banner.hero-style-7{background:linear-gradient(-90deg,rgba(49,185,120,.2),rgba(26,182,157,.2));flex-direction:column;justify-content:center;min-height:820px;overflow:hidden;position:relative}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-7{min-height:100%;padding:80px 0 100px}}@media only screen and (max-width:767px){.hero-banner.hero-style-7{min-height:100%;padding:60px 0 80px}}.hero-banner.hero-style-7 .banner-content{padding-top:30px;text-align:center;z-index:2}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-7 .banner-content{padding-top:0}}@media only screen and (max-width:767px){.hero-banner.hero-style-7 .banner-content{padding-top:0}}.hero-banner.hero-style-7 .banner-content p{margin:0 auto 30px;width:70%}@media only screen and (max-width:767px){.hero-banner.hero-style-7 .banner-content p{width:100%}}.hero-banner.hero-style-7 .banner-content .features-list{align-items:center;display:flex;justify-content:center;margin:0 -50px;padding-top:65px}@media only screen and (max-width:767px){.hero-banner.hero-style-7 .banner-content .features-list{margin:0 -20px;padding-top:50px}}@media only screen and (max-width:575px){.hero-banner.hero-style-7 .banner-content .features-list{margin:0 -5px}}.hero-banner.hero-style-7 .banner-content .features-box{background-color:transparent;box-shadow:none;margin:0 50px;padding:0}@media only screen and (max-width:767px){.hero-banner.hero-style-7 .banner-content .features-box{margin:0 20px}}@media only screen and (max-width:575px){.hero-banner.hero-style-7 .banner-content .features-box{margin:0 5px}}.hero-banner.hero-style-7 .banner-content .features-box .icon{color:#fff;color:var(--color-white)}@media only screen and (max-width:575px){.hero-banner.hero-style-7 .banner-content .features-box .content .title{font-size:14px}}.hero-banner.hero-style-7 .banner-content .features-box.color-extra02-style .icon{background-color:#8e56ff}.hero-banner.hero-style-7 .banner-content .features-box.color-secondary-style .icon{background-color:#ee4a62}.hero-banner.hero-style-7 .banner-content .features-box.color-primary-style .icon{background-color:#1ab69d}.hero-banner.hero-style-7 .banner-gallery{display:block;position:static}.hero-banner.hero-style-7 .banner-gallery .thumbnail{position:absolute}@media only screen and (min-width:1200px)and (max-width:1599px){.hero-banner.hero-style-7 .banner-gallery .thumbnail{width:20%}}@media only screen and (max-width:1199px){.hero-banner.hero-style-7 .banner-gallery .thumbnail{width:20%}}@media only screen and (max-width:767px){.hero-banner.hero-style-7 .banner-gallery .thumbnail{display:none}}.hero-banner.hero-style-7 .banner-gallery .thumbnail img{border-radius:0}.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-1{bottom:160px;left:130px}@media only screen and (max-width:1650px){.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-1{left:20px}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-1{bottom:50%}}@media only screen and (max-width:1199px){.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-1{bottom:50%}}.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-2{bottom:120px;padding-top:0;right:150px}@media only screen and (max-width:1650px){.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-2{right:20px}}@media only screen and (min-width:768px)and (max-width:991px){.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-2{bottom:50%}}@media only screen and (max-width:1199px){.hero-banner.hero-style-7 .banner-gallery .thumbnail.thumbnail-2{bottom:50%}}@media only screen and (max-width:767px){.hero-banner.hero-style-7 .shape-group{display:none}}.hero-banner.hero-style-7 .shape-group li{margin:0;position:absolute;z-index:-1}.hero-banner.hero-style-7 .shape-group li img{opacity:.3}.hero-banner.hero-style-7 .shape-group li.shape-1{left:82px;top:100px}.hero-banner.hero-style-7 .shape-group li.shape-2{left:24%;top:47%}.hero-banner.hero-style-7 .shape-group li.shape-3{bottom:0;left:44%}.hero-banner.hero-style-7 .shape-group li.shape-4{right:21%;top:220px}.hero-banner.hero-style-7 .shape-group li.shape-5{right:65px;top:135px}.hero-banner.hero-style-7 .shape-group li.shape-6{left:35%;top:-60px}.hero-banner.hero-style-7 .shape-group li.shape-6 img{opacity:1}.hero-banner.hero-style-7 .shape-group li.shape-7{bottom:-35px;right:21%}.hero-banner.hero-style-7 .shape-group li.shape-7 img{opacity:1}.instagram-grid{text-align:center}.instagram-grid a{border-radius:5px;display:block;overflow:hidden;position:relative}.instagram-grid a img,.instagram-grid a:after{border-radius:5px;transition:.3s;transition:var(--transition);width:100%}.instagram-grid a:after{background-color:#000;background-color:var(--color-black);bottom:0;content:\"\";height:100%;opacity:.5;top:0}.instagram-grid a .user-info,.instagram-grid a:after{left:0;opacity:0;position:absolute;right:0;visibility:hidden}.instagram-grid a .user-info{color:#fff;color:var(--color-white);top:50%;transform:translateY(-50%) scale(1.5);transition:.3s;transition:var(--transition);z-index:1}.instagram-grid a .user-info .icon{display:block;font-size:26px}.instagram-grid a .user-info .user-name{font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:18px;font-weight:600;font-weight:var(--p-semi-bold)}.instagram-grid:hover a img{transform:scale(1.1)}.instagram-grid:hover a:after{opacity:.5;visibility:visible}.instagram-grid:hover a .user-info{opacity:1;transform:translateY(-50%) scale(1);visibility:visible}.pricing-table{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);padding:50px 30px 45px;position:relative;text-align:center}.pricing-table .pricing-header{border-bottom:1px solid #e7e7e7;margin-bottom:35px;text-align:center}.pricing-table .pricing-header .price-wrap{font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);line-height:1;margin-bottom:20px}.pricing-table .pricing-header .price-wrap .amount{color:#8b572a;color:var(--color-heading);display:block;font-size:40px;font-weight:700;font-weight:var(--p-bold);margin-bottom:18px}.pricing-table .pricing-header .price-wrap .duration{color:#9b9b9b;color:var(--color-body);font-size:15px;font-weight:500;font-weight:var(--p-medium)}.pricing-table .pricing-header .title{color:#4a90e2;color:var(--color-primary);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:15px;font-weight:500;font-weight:var(--p-medium);margin-bottom:18px;text-transform:uppercase}.pricing-table .pricing-body{margin-bottom:40px}.pricing-table .pricing-body .list-item li{align-items:center;color:#8b572a;color:var(--color-heading);display:flex;justify-content:center;margin:0}.pricing-table .pricing-body .list-item li i{color:#4a90e2;color:var(--color-primary);margin-right:10px}.pricing-table .pricing-body .list-item li+li{margin-top:16px}.pricing-table .pricing-body .list-item li.item-off{color:#9b9b9b;color:var(--color-body)}.pricing-table .pricing-body .list-item li.item-off i{color:#9b9b9b;color:var(--color-body);opacity:.5}.pricing-table .edu-btn.btn-border{padding:0 30px}.pricing-table .edu-btn.btn-border i{font-size:15px;font-weight:600;padding-left:10px;top:2px}.pricing-table .edu-btn.btn-border:after{display:block}.pricing-table:hover .edu-btn{background-color:#4a90e2;background-color:var(--color-primary);border-color:#4a90e2;border-color:var(--color-primary);color:#fff;color:var(--color-white)}.privacy-policy-area{padding:120px 0 100px}@media only screen and (min-width:768px)and (max-width:991px){.privacy-policy-area{padding:100px 0}}@media only screen and (max-width:767px){.privacy-policy-area{padding:80px 0}}.privacy-policy{padding-right:50px}.privacy-policy h4.title{margin-bottom:25px}.privacy-policy p{margin-bottom:28px}.privacy-policy .text-block{margin-bottom:60px}@media only screen and (max-width:767px){.privacy-policy .text-block{margin-bottom:50px}}.privacy-policy .text-block:last-child{margin-bottom:0}.privacy-policy ul li{margin-bottom:15px;margin-top:15px;padding-left:30px;position:relative}.privacy-policy ul li:after{color:#4a90e2;color:var(--color-primary);content:\"\";font-family:\"icomoon\";font-family:var(--font-icomoon);left:0;position:absolute;top:0}.product-details-area{padding-bottom:95px}@media only screen and (min-width:768px)and (max-width:991px){.product-details-area{padding-bottom:70px}}@media only screen and (max-width:767px){.product-details-area{padding-bottom:50px}}.product-details-area .thumbnail{border:1px solid #b8e986;border:1px solid var(--color-border);text-align:center}.product-details-area .content .title{margin-bottom:12px}.product-details-area .content .product-rating{align-content:center;display:flex;margin-bottom:10px}.product-details-area .content .product-rating .rating{margin-right:5px}.product-details-area .content .product-rating .rating i{color:#f8b81f;font-size:14px;padding:0}.product-details-area .content .product-rating .rating-count{color:#8b572a;color:var(--color-heading);font-size:14px;font-weight:600}.product-details-area .content .price{color:#4a90e2;color:var(--color-primary);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:18px;font-weight:600}.product-details-area .content p{margin-bottom:34px;margin-top:22px}.product-details-area .content .product-action .add-to-cart-btn{align-items:center;display:flex;margin-top:40px}@media only screen and (max-width:575px){.product-details-area .content .product-action .add-to-cart-btn{margin-top:20px}}.product-details-area .content .product-action .add-to-cart-btn a{margin-right:10px}.product-details-area .content .product-action .add-to-cart-btn a:last-child{margin-right:0}.product-details-area .content .product-action .add-to-cart-btn .wishlist-btn{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:5px;height:50px;line-height:50px;width:50px}.product-details-area .content .product-action .add-to-cart-btn .wishlist-btn i{color:#8b572a;color:var(--color-heading);font-size:16px}.product-details-area .content .product-action .add-to-cart-btn .wishlist-btn:hover{border-color:#f5a623;border-color:var(--color-secondary)}.product-details-area .content .product-action .add-to-cart-btn .wishlist-btn:hover i{color:#fff;color:var(--color-white)}.product-details-area .content .product-feature{margin-top:32px}.product-details-area .content .product-feature li{font-size:16px;font-weight:400;margin:6px 0}.product-details-area .content .product-feature li span{color:#8b572a;color:var(--color-heading);font-weight:600}.product-details-area .content .product-feature li a{display:inline-block;position:relative}.product-details-area .content .product-feature li a:after{content:\",\";position:absolute;right:-3px}.product-details-area .content .product-feature li a:last-child:after{display:none}.product-description-nav{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);justify-content:center;margin-bottom:35px}.product-description-nav .nav-item{margin:0 5px}.product-description-nav .nav-item button.nav-link{background:transparent;border:0;color:#9b9b9b;color:var(--color-body);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:16px;font-weight:600;line-height:28px;padding:22px 25px;position:relative;transition:.3s}.product-description-nav .nav-item button.nav-link:after{background:#4a90e2;background:var(--color-primary);bottom:0;content:\"\";height:2px;left:0;position:absolute;transition:.4s;width:0}.product-description-nav .nav-item button.nav-link.active,.product-description-nav .nav-item button.nav-link:hover{color:#8b572a;color:var(--color-heading)}.product-description-nav .nav-item button.nav-link.active:after,.product-description-nav .nav-item button.nav-link:hover:after{width:100%}.product-description-content .comment-area{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);margin-top:0;padding-bottom:45px}.product-description-content .comment-area .heading-title{margin-bottom:40px}.product-description-content .comment-list-wrapper .comment .comment-content .title{align-items:center;display:flex}@media only screen and (max-width:479px){.product-description-content .comment-list-wrapper .comment .comment-content .title{display:block}}.product-description-content .comment-list-wrapper .comment .comment-content .date{color:#9b9b9b;color:var(--color-body);font-size:15px;font-weight:400;margin-bottom:0;margin-left:5px}@media only screen and (max-width:479px){.product-description-content .comment-list-wrapper .comment .comment-content .date{margin-left:0;margin-top:4px}}.product-description-content .comment-list-wrapper .comment .comment-content .rating{color:#ffc92e;font-size:13px;margin-bottom:16px}.product-description-content .comment-form-area{margin-top:70px}.product-description-content .comment-form .review-rating{align-items:center;display:flex;margin-bottom:15px}.product-description-content .comment-form .review-rating .title{margin-bottom:0;margin-right:15px}.product-description-content .comment-form .review-rating .rating{color:#ffc92e;font-size:14px}.product-description-content .comment-form .form-group label{color:#9b9b9b;color:var(--color-body);margin-bottom:5px}.product-description-content .comment-form .form-group input{height:50px}.product-description-content .comment-form .form-group input,.product-description-content .comment-form .form-group textarea{border:1px solid #b8e986;border:1px solid var(--color-border);box-shadow:none}.product-description-content .comment-form .form-group .edu-form-check label:before{background-color:transparent}.edu-product{margin-bottom:15px}.edu-product .inner{text-align:center}.edu-product .inner>.thumbnail{position:relative}.edu-product .inner>.thumbnail>a{border:1px solid #b8e986;border:1px solid var(--color-border);display:block;overflow:hidden}.edu-product .inner>.thumbnail>a img{transition:.3s;transition:var(--transition);width:100%}.edu-product .inner>.thumbnail .product-hover-info{left:0;opacity:0;position:absolute;right:0;text-align:center;top:55%;transform:translateY(-50%);transition:.3s;transition:var(--transition);visibility:hidden;z-index:1}.edu-product .inner>.thumbnail .product-hover-info ul li{margin:0;padding:7px;position:relative}.edu-product .inner>.thumbnail .product-hover-info ul li a{background-color:#fff;background-color:var(--color-white);border-radius:50%;box-shadow:0 10px 20px 0 rgba(0,0,0,.1);color:#000;color:var(--color-black);font-size:18px;height:36px;line-height:40px;text-align:center;width:36px}.edu-product .inner>.thumbnail .product-hover-info ul li a:hover{background-color:#4a90e2;background-color:var(--color-primary);color:#fff;color:var(--color-white)}.edu-product .inner .content{padding-top:26px}.edu-product .inner .content .title{font-size:16px;margin-bottom:8px}.edu-product .inner .content .product-rating{align-items:center;display:flex;justify-content:center;margin-bottom:8px}.edu-product .inner .content .product-rating .rating{color:#ffc92e;font-size:14px;transition:.3s;transition:var(--transition)}.edu-product .inner .content .product-rating .rating-count{color:#8b572a;color:var(--color-heading);font-size:14px;font-weight:500;margin-left:5px;transition:.3s;transition:var(--transition)}.edu-product .inner .content .price{color:#4a90e2;color:var(--color-primary);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px;font-weight:600;font-weight:var(--p-semi-bold)}.edu-product:hover .inner .thumbnail a{border-color:#fff;border-color:var(--color-white);box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker)}.edu-product:hover .inner .thumbnail a img{opacity:.3;transform:scale(1.1)}.edu-product:hover .inner .thumbnail .product-hover-info{opacity:1;top:50%;visibility:visible}.pro-qty{align-items:center;border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:5px;display:flex;height:55px;justify-content:space-between;padding:5px 18px;width:136px}@media only screen and (max-width:575px){.pro-qty{height:50px;width:110px}}.pro-qty input{background-color:transparent;border:none;color:#101010;float:left;font-size:15px;height:32px;line-height:30px;margin:0 12px;padding:0;text-align:center;width:28px}.pro-qty .qtybtn{color:#848484;cursor:pointer;display:block;float:left;font-size:20px;text-align:center;transition:.3s}.pro-qty .qtybtn:hover{color:#4a90e2;color:var(--color-primary)}.pro-qty input::-webkit-inner-spin-button,.pro-qty input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.pro-qty input[type=number]{-moz-appearance:textfield}.cart-table td,.cart-table th{border:none;border-bottom:1px solid #e6e6e6!important}@media only screen and (max-width:767px){.cart-table td:last-child,.cart-table th:last-child{border-bottom:none}.cart-table thead{display:none}}.cart-table thead th{color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:16px;font-weight:600;font-weight:var(--p-semi-bold);padding:18px 15px;text-transform:capitalize}@media only screen and (max-width:991px){.cart-table thead th{padding:20px 10px}}@media only screen and (max-width:767px){.cart-table tbody tr{border-bottom:1px solid var(--color-lighter);display:block;margin-bottom:30px;padding-left:120px;position:relative}.cart-table tbody tr:last-child{margin-bottom:0}}@media only screen and (max-width:575px){.cart-table tbody tr{padding-left:90px}}.cart-table tbody td{color:#222;font-size:15px;min-width:150px;padding:30px 15px;vertical-align:middle}@media only screen and (max-width:991px){.cart-table tbody td{font-size:18px;padding:20px 10px}}@media only screen and (max-width:767px){.cart-table tbody td{display:block;font-size:16px;padding:10px 0;position:relative;text-align:right}.cart-table tbody td:before{color:#000;color:var(--color-black);content:attr(data-title) \" :\";font-size:13px;left:0;position:absolute;top:50%;transform:translateY(-50%)}}.cart-table tbody td.product-remove{min-width:auto}@media only screen and (max-width:767px){.cart-table tbody td.product-remove{border-bottom:none!important;position:absolute;right:0;top:0;z-index:1}}.cart-table tbody td.product-remove .remove-wishlist{color:#000;color:var(--color-black);display:block;font-size:14px;height:32px;line-height:30px;text-align:center;transition:.3s;transition:var(--transition);width:32px}@media only screen and (max-width:767px){.cart-table tbody td.product-remove .remove-wishlist{font-size:10px}}.cart-table tbody td.product-remove .remove-wishlist:hover{color:#4a90e2;color:var(--color-primary)}.cart-table tbody td.product-remove:before{display:none}.cart-table tbody td.product-thumbnail{width:110px}@media only screen and (max-width:767px){.cart-table tbody td.product-thumbnail{border-bottom:none!important;left:0;position:absolute;text-align:left;top:0;width:80px}}.cart-table tbody td.product-thumbnail a{border:1px solid #b8e986;border:1px solid var(--color-border)}.cart-table tbody td.product-thumbnail a img{height:110px}@media only screen and (max-width:575px){.cart-table tbody td.product-thumbnail a img{height:85px}}.cart-table tbody td.product-thumbnail:before{display:none}.cart-table tbody td.product-title{color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:16px;font-weight:600;font-weight:var(--p-semi-bold);width:30%}@media only screen and (max-width:767px){.cart-table tbody td.product-title{padding-right:40px;text-align:left;width:100%}}.cart-table tbody td.product-title a{transition:.3s;transition:var(--transition)}.cart-table tbody td.product-title:before{display:none}.cart-table tbody td.product-quantity .pro-qty{margin:0 0 0 auto}.wishlist-table tbody td.product-add-cart:before{display:none}.cart-update-btn-area{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:30px;gap:30px}@media only screen and (max-width:575px){.cart-update-btn-area{display:block}}.cart-update-btn-area .product-cupon{border:1px solid #e6e6e6;border-radius:5px;flex-wrap:nowrap;height:50px;max-width:430px;padding:5px 5px 5px 20px}.cart-update-btn-area .product-cupon input{border:none;height:auto;padding:0 20px 0 0}.cart-update-btn-area .product-cupon .submit-btn{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);border:none;border-radius:5px!important;color:#fff;color:var(--color-white);font-size:12px;padding:5px 22px}.cart-update-btn-area .update-btn{text-align:right}@media only screen and (max-width:575px){.cart-update-btn-area .update-btn{margin-top:20px;text-align:left}}.cart-update-btn-area .update-btn .edu-btn.disabled{opacity:.5}.order-summery{margin-top:100px}@media only screen and (max-width:767px){.order-summery{margin-top:80px}}.order-summery .title{margin-bottom:24px}.order-summery .summery-table tbody td{border-color:#e6e6e6;color:#8b572a;color:var(--color-heading);font-size:16px;padding:14px 30px}.order-summery .summery-table tbody td:first-child{font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-weight:600;font-weight:var(--p-semi-bold);width:165px}.order-summery .summery-table tbody td:last-child{color:#848484;font-size:15px;text-align:right}.order-summery .summery-table .order-total td:last-child{color:#8b572a;color:var(--color-heading);font-weight:600;font-weight:var(--p-semi-bold)}.order-summery .checkout-btn{width:100%}.order-summery.checkout-summery{margin-top:0}@media only screen and (min-width:768px)and (max-width:991px){.order-summery.checkout-summery{margin-top:80px}}@media only screen and (max-width:767px){.order-summery.checkout-summery{margin-top:60px}}.order-summery.checkout-summery .summery-table-wrap{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:5px;padding:45px 50px 30px}@media only screen and (max-width:575px){.order-summery.checkout-summery .summery-table-wrap{padding:40px 20px 20px}}.order-summery.checkout-summery .summery-table-wrap .title{margin-bottom:18px}.order-summery.checkout-summery .summery-table-wrap table{margin-bottom:0}.order-summery.checkout-summery .summery-table-wrap table tr:last-child td{border-bottom:none}.order-summery.checkout-summery .summery-table-wrap table td{border:none;border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);color:#8b572a;color:var(--color-heading);padding:12px 0;width:auto}@media only screen and (max-width:575px){.order-summery.checkout-summery .summery-table-wrap table td{font-size:14px}}.order-summery.checkout-summery .summery-table-wrap table .order-subtotal td:last-child{color:#9b9b9b;color:var(--color-body);font-weight:500;font-weight:var(--p-medium)}.order-summery.checkout-summery .summery-table-wrap table .order-total td{font-weight:700;font-weight:var(--p-bold)}@media only screen and (min-width:768px)and (max-width:991px){.account-page-area .shape-group{display:none}}@media only screen and (max-width:767px){.account-page-area .shape-group{display:none}}.account-page-area .shape-group li{position:absolute;z-index:-1}.account-page-area .shape-group li.shape-1{bottom:-10px;left:60px}.account-page-area .shape-group li.shape-2{right:50px;top:-60px}.account-page-area .shape-group li.shape-3{right:0;top:-30px;z-index:1}.login-form-box{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 10px 40px 0 rgba(0,0,0,.08);padding:70px 50px}@media only screen and (max-width:767px){.login-form-box{padding:40px 30px}}.login-form-box .title{margin-bottom:5px}.login-form-box a{color:#4a90e2;color:var(--color-primary)}.login-form-box a:hover{color:#f5a623;color:var(--color-secondary)}.login-form-box p{color:#8b572a;color:var(--color-heading);margin-bottom:25px}.login-form-box .form-group{position:relative}.login-form-box .form-group input{border:1px solid #b8e986;border:1px solid var(--color-border);height:50px}.login-form-box .form-group .edu-btn{width:100%}.login-form-box .form-group .password-show{bottom:11px;color:#b2b2b2;cursor:pointer;font-size:13px;position:absolute;right:18px;transition:.3s;transition:var(--transition)}.login-form-box .form-group .password-show:hover{color:#4a90e2;color:var(--color-primary)}.login-form-box .chekbox-area{align-items:center;display:flex;justify-content:space-between;margin:25px 0}@media only screen and (max-width:479px){.login-form-box .chekbox-area{display:block}}.login-form-box .chekbox-area .edu-form-check{position:relative}.login-form-box .chekbox-area .edu-form-check label{padding-left:28px}.login-form-box .chekbox-area .edu-form-check label:before{background-color:#f7f7f7;border-color:#b8e986;border-color:var(--color-border)}.login-form-box .chekbox-area .edu-form-check input{height:auto}.login-form-box .chekbox-area .edu-form-check input:checked~label:before{background-color:#4a90e2;background-color:var(--color-primary);border-color:#4a90e2;border-color:var(--color-primary)}.login-form-box .chekbox-area .edu-form-check input:checked~label:after{opacity:1}.login-form-box .chekbox-area .password-reset{font-size:16px}@media only screen and (max-width:479px){.login-form-box .chekbox-area .password-reset{margin-top:5px;padding-left:30px}}.checkout-notice{margin-bottom:65px}.checkout-notice .coupn-box{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:5px;padding:0 30px}.checkout-notice .toggle-bar{margin-bottom:0;padding:18px 0}.checkout-notice .toggle-bar a{color:#4a90e2;color:var(--color-primary);transition:.3s;transition:var(--transition)}@media only screen and (max-width:479px){.checkout-notice .input-group{display:block}}.checkout-notice .input-group input{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:5px!important;height:50px;width:auto}.checkout-notice .input-group .apply-btn{margin-left:10px!important}@media only screen and (max-width:479px){.checkout-notice .input-group .apply-btn{margin-left:0!important;margin-top:15px}}.checkout-notice .toggle-open{display:none;margin-bottom:30px;margin-top:10px}.checkout-billing .title{margin-bottom:30px}.checkout-billing .form-group{margin-bottom:25px}.checkout-billing .form-group label{font-size:16px;margin-bottom:5px}.checkout-billing .form-group input{border:1px solid #e6e6e6;border-radius:5px;height:45px;margin-bottom:10px}.checkout-billing .form-group input:last-child{margin-bottom:0}.checkout-billing .form-group textarea{border:1px solid #e6e6e6;border-radius:5px}.checkout-billing .form-group select{background-color:transparent;background:url(/images/icons/arrow-icon.png) 92% no-repeat transparent;color:#9b9b9b;color:var(--color-body);font-weight:400;height:45px}.checkout-billing .form-group select,.order-payment{border:1px solid #b8e986;border:1px solid var(--color-border)}.order-payment{border-radius:5px;margin-top:50px;padding:50px 50px 42px}@media only screen and (max-width:575px){.order-payment{padding:40px 20px 30px}}.order-payment .title{margin-bottom:40px}.order-payment .payment-method{background-color:#f5f9fa;margin-bottom:30px;padding:30px 30px 45px}@media only screen and (max-width:575px){.order-payment .payment-method{padding:30px 20px}}.order-payment .form-group{border-bottom:1px solid #dce0e0;margin-bottom:22px;padding-bottom:22px;position:relative}.order-payment .form-group:last-child{margin-bottom:0;padding-bottom:0}.order-payment .form-group p{margin-bottom:0;margin-top:5px;padding-left:30px}.order-payment .form-group a{font-weight:500;margin-left:20px}.order-payment .form-group label{font-size:16px;font-weight:500}.order-payment .form-group:last-child{border-bottom:none}.order-payment .form-group input[type=checkbox],.order-payment .form-group input[type=radio]{width:auto}.pv-header-style.edu-header .header-mainmenu{background-color:transparent;box-shadow:none;z-index:5}.pv-header-style.edu-header .header-mainmenu.edu-sticky{box-shadow:0 6px 15px 0 rgba(0,0,0,.05)}.pv-header-style .mainmenu-nav{margin-right:30px}.pv-header-style .mainmenu-nav .mainmenu{justify-content:flex-end!important}.pv-header-style .mainmenu-nav .mainmenu li a{height:90px;line-height:90px;padding:0 20px}.pv-header-style .edublink-vue-mobile-popup-menu .mainmenu li.header-btn{padding-top:30px}.pv-header-style .edublink-vue-mobile-popup-menu .mainmenu li.header-btn .edu-btn{padding:0}.pv-header-style .edublink-vue-mobile-popup-menu .mainmenu li.header-btn .edu-btn:hover{color:#fff;color:var(--color-white)}.pv-demo-counterup{margin-top:-95px;position:relative;z-index:1}.pv-demo-counterup .counterup-wrap{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 20px 50px 0 rgba(0,0,0,.03);margin:0 auto;max-width:870px;padding:50px 0;width:100%}@media only screen and (max-width:767px){.pv-demo-counterup .counterup-wrap{padding:40px 0}}.pv-demo-counterup .counterup-wrap .edu-counterup{border-radius:0;box-shadow:none;padding:0 30px}@media only screen and (max-width:767px){.pv-demo-counterup .counterup-wrap .edu-counterup{padding:0 20px}}@media only screen and (max-width:575px){.pv-demo-counterup .counterup-wrap .edu-counterup{padding:20px}}.pv-demo-counterup .counterup-wrap .edu-counterup.border-end{border-color:#b8e986;border-color:var(--color-border)}@media only screen and (max-width:575px){.pv-demo-counterup .counterup-wrap .edu-counterup.border-end{border:none!important}}.pv-demo-counterup .counterup-wrap .edu-counterup .count-number{font-size:50px;margin-bottom:0}@media only screen and (min-width:768px)and (max-width:991px){.pv-demo-counterup .counterup-wrap .edu-counterup .count-number{font-size:40px}}@media only screen and (max-width:767px){.pv-demo-counterup .counterup-wrap .edu-counterup .count-number{font-size:30px}}.pv-demo-counterup .counterup-wrap .edu-counterup .title{color:#8b572a;color:var(--color-heading);font-size:17px;font-weight:600;text-transform:capitalize}.pv-demo-area{padding:140px 0 90px}@media only screen and (min-width:992px)and (max-width:1199px){.pv-demo-area{padding:110px 0 60px}}@media only screen and (min-width:768px)and (max-width:991px){.pv-demo-area{padding:90px 0 40px}}@media only screen and (max-width:767px){.pv-demo-area{padding:70px 0 20px}}.single-demo{margin-bottom:60px;text-align:center}.single-demo .inner{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 30px 60px rgba(0,0,0,.07);padding:15px;transition:.3s}.single-demo.coming-soon a{pointer-events:none}.single-demo .thumbnail{position:relative;text-align:center}.single-demo .thumbnail .thumbnail-link{display:block;position:relative}.single-demo .thumbnail .thumbnail-link:before{background:rgba(0,0,0,.35);border-radius:5px;bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;width:100%}.single-demo .thumbnail .thumbnail-link img{border-radius:5px;width:100%}.single-demo .thumbnail .hover-action{left:0;opacity:0;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:.3s;z-index:1}.single-demo .title{font-size:20px;font-weight:700;margin-bottom:10px;margin-top:28px}.single-demo:hover .inner{box-shadow:0 30px 70px rgba(0,0,0,.12);transform:translateY(-10px)}.single-demo:hover .thumbnail .hover-action,.single-demo:hover .thumbnail .thumbnail-link:before{opacity:1}.pv-elementor-area{padding:150px 0}@media only screen and (min-width:992px)and (max-width:1199px){.pv-elementor-area{padding:120px 0 100px}}@media only screen and (min-width:768px)and (max-width:991px){.pv-elementor-area{padding:100px 0 80px}}@media only screen and (max-width:767px){.pv-elementor-area{padding:80px 0 60px}}@media only screen and (max-width:1199px){.pv-elementor-area .elementor-content .splash-title{text-align:center}}.pv-elementor-area .elementor-content .splash-title img{margin-bottom:35px}.pv-elementor-area .elementor-content .splash-title p{width:60%}@media only screen and (max-width:1199px){.pv-elementor-area .elementor-content .splash-title p{width:100%}}.pv-elementor-area .elementor-thumbnail{position:relative;z-index:1}@media only screen and (max-width:1199px){.pv-elementor-area .elementor-thumbnail{text-align:center}}.pv-elementor-area .elementor-thumbnail img{border-radius:20px}@media only screen and (max-width:991px){.pv-elementor-area .elementor-thumbnail .shape-group{display:none}}.pv-elementor-area .elementor-thumbnail .shape-group li{position:absolute;z-index:-1}.pv-elementor-area .elementor-thumbnail .shape-group li.shape-1{left:-75px;top:-50px}.pv-elementor-area .elementor-thumbnail .shape-group li.shape-2{left:-14px;top:-82px;z-index:1}.pv-elementor-area .elementor-thumbnail .shape-group li.shape-3{bottom:-70px;right:50px}.pv-elementor-area .elementor-thumbnail .shape-group li.shape-4{bottom:-80px;right:-80px;z-index:-2}.pv-courses-demo{padding:150px 0 40px;position:relative}@media only screen and (min-width:992px)and (max-width:1199px){.pv-courses-demo{padding:120px 0 30px}}@media only screen and (min-width:768px)and (max-width:991px){.pv-courses-demo{padding:100px 0 20px}}@media only screen and (max-width:767px){.pv-courses-demo{padding:80px 0 10px}}.pv-courses-demo .splash-title.section-title{margin-bottom:80px}@media only screen and (max-width:991px){.pv-courses-demo .splash-title.section-title{margin-bottom:50px}}.pv-courses-demo .splash-title .shape-line{margin-bottom:28px}.pv-courses-demo .splash-title p{color:#8b572a;color:var(--color-heading);font-size:16px}.pv-courses-demo .margque-courses{background-image:url(/images/preview/courses.png);background-repeat:repeat-x;background-size:auto;height:460px;margin-top:-20px;position:relative;z-index:1}.pv-courses-demo .shape-group li.shape-1{right:140px;top:100px}@media only screen and (min-width:1200px)and (max-width:1400px){.pv-courses-demo .shape-group li.shape-1{right:30px;top:80px}}.pv-courses-demo .shape-group li.shape-2{left:40px;top:310px}@media only screen and (min-width:1200px)and (max-width:1599px){.pv-courses-demo .shape-group li.shape-2{display:none}}.pv-courses-demo .shape-group li.shape-3{left:165px;top:330px;z-index:1}@media only screen and (min-width:1200px)and (max-width:1599px){.pv-courses-demo .shape-group li.shape-3{display:none}}.pv-courses-demo .shape-group li.shape-4{left:15%;top:130px}.pv-courses-demo .shape-group li.shape-5{right:-111px;top:-252px;z-index:-2}@media only screen and (min-width:1200px)and (max-width:1400px){.pv-courses-demo .shape-group li.shape-5{right:-270px;top:-230px}}.pv-courses-demo .shape-group li.shape-5 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:470px;width:470px}.pv-course-details-area{padding:115px 0 135px;position:relative}.pv-course-details-area:before{background-image:url(/images/bg/preview-course-bg.jpg);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:992px)and (max-width:1199px){.pv-course-details-area{padding:120px 0 65px}}@media only screen and (min-width:768px)and (max-width:991px){.pv-course-details-area{padding:100px 0 20px}}@media only screen and (max-width:767px){.pv-course-details-area{padding:80px 0 40px}}.pv-course-details-area .course-content{max-width:460px}@media only screen and (max-width:1710px){.pv-course-details-area .course-content{padding-left:50px}}@media only screen and (min-width:992px)and (max-width:1199px){.pv-course-details-area .course-content{padding-left:0}}@media only screen and (max-width:991px){.pv-course-details-area .course-content{max-width:100%;padding-left:0}.pv-course-details-area .course-content .splash-title.section-title{margin-bottom:20px}.pv-course-details-area .course-content .splash-title{text-align:center}}.pv-course-details-area .course-content .splash-title img{margin-bottom:35px}.pv-course-details-area .course-thumbnail{position:relative;text-align:right;z-index:1}@media only screen and (max-width:991px){.pv-course-details-area .course-thumbnail{text-align:center}}.pv-course-details-area .course-thumbnail .course-instructor{content:\"\";left:-40px;position:absolute;top:150px}@media only screen and (max-width:1650px){.pv-course-details-area .course-thumbnail .course-instructor{left:-50px;max-width:320px}}@media only screen and (max-width:1199px){.pv-course-details-area .course-thumbnail .course-instructor{display:none}}@media only screen and (max-width:991px){.pv-course-details-area .course-thumbnail .shape-group{display:none}}.pv-course-details-area .course-thumbnail .shape-group li{position:absolute;z-index:-1}.pv-course-details-area .course-thumbnail .shape-group li.shape-1{left:60px;top:-30px}@media only screen and (max-width:1710px){.pv-course-details-area .course-thumbnail .shape-group li.shape-1{left:-10px;top:-30px}}.pv-course-details-area .course-thumbnail .shape-group li.shape-2{left:135px;top:-40px;z-index:1}@media only screen and (max-width:1710px){.pv-course-details-area .course-thumbnail .shape-group li.shape-2{left:65px;top:-40px}}.pv-course-details-area .course-thumbnail .shape-group li.shape-3{bottom:-10px;right:-30px}.pv-course-details-area .course-thumbnail .shape-group li.shape-4{bottom:7px;right:100px}.pv-shop-area{padding:125px 0 115px;position:relative}.pv-shop-area:before{background-image:url(/images/bg/bg-image-24.jpg);background-size:cover;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:992px)and (max-width:1199px){.pv-shop-area{padding:120px 0 65px}}@media only screen and (min-width:768px)and (max-width:991px){.pv-shop-area{padding:100px 0 20px}}@media only screen and (max-width:767px){.pv-shop-area{padding:80px 0 40px}}.pv-shop-area .shop-content{padding-left:145px}@media only screen and (min-width:1200px)and (max-width:1450px){.pv-shop-area .shop-content{padding-left:55px}}@media only screen and (max-width:1199px){.pv-shop-area .shop-content{padding-left:0}}@media only screen and (max-width:991px){.pv-shop-area .shop-content .splash-title.section-title{margin-bottom:20px}.pv-shop-area .shop-content .splash-title{text-align:center}}.pv-shop-area .shop-content .splash-title img{margin-bottom:35px}@media only screen and (max-width:991px){.pv-shop-area .shop-thumbnail{text-align:center}}.pv-shop-area .shop-thumbnail .shop-thumbnail-images{position:relative;z-index:1}.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shop-demo-left{content:\"\";left:-160px;position:absolute;top:150px}@media only screen and (min-width:1200px)and (max-width:1400px),only screen and (min-width:1401px)and (max-width:1750px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shop-demo-left{left:-50px;max-width:300px}}@media only screen and (max-width:1199px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shop-demo-left{display:none}}.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shop-demo-right{content:\"\";position:absolute;right:-50px;top:100px}@media only screen and (min-width:1401px)and (max-width:1750px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shop-demo-right{right:0}}@media only screen and (min-width:1200px)and (max-width:1400px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shop-demo-right{right:-30px}}@media only screen and (max-width:1199px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shop-demo-right{display:none}}@media only screen and (max-width:991px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group{display:none}}.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li{position:absolute;z-index:-1}.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li.shape-1{left:-35px;top:-55px}.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li.shape-2{bottom:-46px;right:160px}.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li.shape-3{left:130px;top:147px;z-index:0}@media only screen and (min-width:1200px)and (max-width:1400px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li.shape-3{left:154px;top:151px}}.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li.shape-3 span{border:16px solid #7ed321;border:16px solid var(--color-tertiary);border-radius:50%;display:block;height:100px;width:100px}@media only screen and (min-width:1200px)and (max-width:1400px){.pv-shop-area .shop-thumbnail .shop-thumbnail-images .shape-group li.shape-3 span{border:11px solid #7ed321;border:11px solid var(--color-tertiary);height:70px;width:70px}}.pv-features-area{padding:150px 0 100px}@media only screen and (min-width:992px)and (max-width:1199px){.pv-features-area{padding:120px 0 70px}}@media only screen and (min-width:768px)and (max-width:991px){.pv-features-area{padding:100px 0 50px}}@media only screen and (max-width:767px){.pv-features-area{padding:80px 0 30px}}.demo-feature{margin-bottom:45px}.demo-feature .inner{text-align:center}.demo-feature .inner .icon{align-items:center;background:#fff;border-radius:30px;box-shadow:0 15px 60px 0 rgba(0,0,0,.1);display:flex;height:202px;justify-content:center;margin:0 auto;width:100%}.demo-feature .inner .icon img{max-height:80px}.demo-feature .inner .title{font-weight:700;margin-bottom:0;margin-top:30px}.pv-inner-page-area{overflow:hidden;padding:150px 0 75px;position:relative;z-index:1}.pv-inner-page-area:before{background-image:url(/images/bg/bg-image-25.jpg);background-size:cover;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:992px)and (max-width:1199px){.pv-inner-page-area{padding:120px 0 45px}}@media only screen and (min-width:768px)and (max-width:991px){.pv-inner-page-area{padding:100px 0 30px}}@media only screen and (max-width:767px){.pv-inner-page-area{padding:80px 0 20px}}.pv-inner-page-area .splash-title .shape-line{margin-bottom:28px}.pv-inner-page-area .splash-title p{color:#8b572a;color:var(--color-heading);font-size:16px}.pv-inner-page-area .margque-inner-page{background-image:url(/images/preview/inner-demo.png);background-repeat:repeat-x;background-size:auto;height:650px;margin-top:-20px;position:relative;z-index:1}@media only screen and (max-width:991px){.pv-inner-page-area .shape-group{display:none}}.pv-inner-page-area .shape-group li{position:absolute;z-index:-1}.pv-inner-page-area .shape-group li.shape-1{left:-85px;top:-65px}.pv-inner-page-area .shape-group li.shape-2{left:152px;top:80px}.pv-inner-page-area .shape-group li.shape-3{right:18%;top:20%}.pv-inner-page-area .shape-group li.shape-3 span{border:15px solid #7ed321;border:15px solid var(--color-tertiary);border-radius:50%;display:block;height:100px;width:100px}.pv-zoom-demo-area{padding:85px 0 20px}@media only screen and (max-width:991px){.pv-zoom-demo-area .zoom-content .splash-title{text-align:center}}.pv-zoom-demo-area .zoom-content .splash-title img{margin-bottom:35px}.pv-zoom-demo-area .zoom-content .splash-title p{width:80%}@media only screen and (max-width:991px){.pv-zoom-demo-area .zoom-content .splash-title p{width:100%}}.pv-zoom-demo-area .zoom-thumbnail{margin-right:-60px;padding-right:15px;position:relative;z-index:1}@media only screen and (max-width:991px){.pv-zoom-demo-area .zoom-thumbnail{margin-right:0;padding-right:0}.pv-zoom-demo-area .zoom-thumbnail .shape-group{display:none}}.pv-zoom-demo-area .zoom-thumbnail .shape-group li{position:absolute;z-index:-1}.pv-zoom-demo-area .zoom-thumbnail .shape-group li.shape-1{right:175px;top:25px}.pv-zoom-demo-area .zoom-thumbnail .shape-group li.shape-2{right:308px;top:0}.pv-zoom-demo-area .zoom-thumbnail .shape-group li.shape-2 span{border:15px solid #7ed321;border:15px solid var(--color-tertiary);border-radius:50%;display:block;height:100px;width:100px}.pv-zoom-demo-area .zoom-thumbnail .shape-group li.shape-3{bottom:45px;left:130px}.pv-cta-area{background-color:#1b1c1c;padding:145px 0 120px;position:relative;z-index:1}.pv-cta-area:before{background-image:url(/images/bg/bg-image-26.png);background-size:cover;bottom:0;content:\"\";height:100%;left:0;position:absolute;width:100%;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.pv-cta-area{padding:120px 0 100px}}@media only screen and (max-width:767px){.pv-cta-area{padding:100px 0}}.pv-cta-area .cta-content{text-align:center}.pv-cta-area .cta-content .subtitle{color:#7ed321;color:var(--color-tertiary);display:block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:20px;font-weight:600;margin-bottom:30px}.pv-cta-area .cta-content .title{color:#fff;color:var(--color-white);font-size:40px;margin-bottom:55px}@media only screen and (min-width:768px)and (max-width:991px){.pv-cta-area .cta-content .title{font-size:36px}}@media only screen and (max-width:767px){.pv-cta-area .cta-content .title{font-size:30px}}.pv-cta-area .cta-content .button-group{justify-content:center;margin:-10px}@media only screen and (max-width:575px){.pv-cta-area .cta-content .button-group{display:block}}.pv-cta-area .cta-content .button-group a{margin:10px}.pv-cta-area .cta-content .button-group .btn-bg-white{background-color:#fff;background-color:var(--color-white);color:#8b572a;color:var(--color-heading)}.pv-cta-area .cta-content .button-group .btn-bg-white:hover{color:#fff;color:var(--color-white)}@media only screen and (max-width:1199px){.pv-cta-area .shape-group{display:block}}@media only screen and (max-width:991px){.pv-cta-area .shape-group{display:none}}.pv-cta-area .shape-group li{position:absolute;z-index:-1}.pv-cta-area .shape-group li.shape-1{left:7%;top:80px}@media only screen and (max-width:1199px){.pv-cta-area .shape-group li.shape-1{left:3%}}.pv-cta-area .shape-group li.shape-2{left:10%;top:90px;z-index:-1}@media only screen and (max-width:1199px){.pv-cta-area .shape-group li.shape-2{left:7%}}@media only screen and (min-width:1200px)and (max-width:1450px),only screen and (min-width:992px)and (max-width:1199px){.pv-cta-area .shape-group li.shape-2 img{width:85%}}.pv-cta-area .shape-group li.shape-3{right:11%;top:32%}@media only screen and (max-width:1199px){.pv-cta-area .shape-group li.shape-3{right:2%}}.pv-cta-area .shape-group li.shape-4{bottom:25%;right:14%}@media only screen and (max-width:1199px){.pv-cta-area .shape-group li.shape-4{right:2%}}.pv-cta-area .shape-group li.shape-4 span{border:16px solid #7ed321;border:16px solid var(--color-tertiary);border-radius:50%;display:block;height:135px;width:135px}.team-share-info{left:0;margin:-5px;position:absolute;right:0;text-align:center;top:50%;transform:translateY(-50%)}.team-share-info li{display:inline-block;margin:5px}.team-share-info li a{border:2px solid #fff;border:2px solid var(--color-white);border-radius:50%;color:#fff;color:var(--color-white);font-size:18px;height:40px;line-height:39px;text-align:center;transition:.3s;transition:var(--transition);width:40px}.team-share-info li a:hover{background:#fff;background:var(--color-white);color:#4a90e2;color:var(--color-primary)}.edu-team-grid .thumbnail-wrap{position:relative}.edu-team-grid .thumbnail{margin-bottom:25px}.edu-team-grid .thumbnail a{border-radius:10px;display:block;position:relative}.edu-team-grid .thumbnail a img{border-radius:10px;width:100%}.edu-team-grid .thumbnail a:after{background-color:rgba(26,182,157,.6);border-radius:10px;bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);visibility:hidden;width:100%}.edu-team-grid .content{text-align:center}.edu-team-grid .content .title{margin-bottom:4px}.edu-team-grid .content .designation{display:inline-block}.edu-team-grid .team-share-info li{opacity:0;transform:translateX(10px);transition:.3s;transition:var(--transition);visibility:hidden}.edu-team-grid:hover .thumbnail a:after{opacity:1;visibility:visible}.edu-team-grid:hover .team-share-info li{opacity:1;transform:translateX(0);visibility:visible}.edu-team-grid:hover .team-share-info li:nth-child(1n){transition-delay:.2s}.edu-team-grid:hover .team-share-info li:nth-child(2n){transition-delay:.3s}.edu-team-grid:hover .team-share-info li:nth-child(3n){transition-delay:.4s}.edu-team-grid:hover .team-share-info li:nth-child(4n){transition-delay:.5s}.edu-team-grid.team-style-1 .team-share-info{left:auto;margin:-10px 0;right:20px;top:20px;transform:translateY(0)}.edu-team-grid.team-style-1 .team-share-info li{display:block;margin:10px 0;transform:translateY(-10px)}.edu-team-grid.team-style-1 .team-share-info li:first-child{opacity:1;transform:translateY(0);visibility:visible}.edu-team-grid.team-style-1 .team-share-info li:first-child a{border-color:#4a90e2;border-color:var(--color-primary);color:#4a90e2;color:var(--color-primary)}.edu-team-grid.team-style-1:hover .team-share-info li{transform:translateY(0)}.edu-team-grid.team-style-1:hover .team-share-info li:first-child a{background-color:#fff;background-color:var(--color-white);border-color:#fff;border-color:var(--color-white);color:#4a90e2;color:var(--color-primary)}.edu-team-grid.team-style-2{padding:0 30px 36px;position:relative;z-index:1}.edu-team-grid.team-style-2:after{background-color:#fff;background-color:var(--color-white);border-radius:10px;bottom:0;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);content:\"\";height:75%;left:0;position:absolute;right:0;width:100%;z-index:-1}.edu-team-grid.team-style-2 .content .designation{margin-bottom:15px}.edu-team-grid.team-style-2 .content p{margin-bottom:0}.edu-team-grid.team-style-3{position:relative}.edu-team-grid.team-style-3 .thumbnail{margin-bottom:0}.edu-team-grid.team-style-3 .content{bottom:30px;left:30px;position:absolute;text-align:left}.edu-team-grid.team-style-3 .content .designation,.edu-team-grid.team-style-3 .content .title{background-color:#fff;background-color:var(--color-white);border-radius:4px;box-shadow:0 20px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker2)}.edu-team-grid.team-style-3 .content .title{font-size:20px;margin-bottom:10px;padding:11px 25px 9px}.edu-team-grid.team-style-3 .content .designation{font-size:16px;padding:4px 20px}.edu-team-grid.team-style-3 .team-share-info{top:35%}.edu-team-grid.team-style-4{position:relative}.edu-team-grid.team-style-4 .thumbnail{margin-bottom:0}.edu-team-grid.team-style-4 .thumbnail a:after{background:linear-gradient(-125deg,rgba(49,185,120,.8),rgba(26,182,157,.8))}.edu-team-grid.team-style-4 .content{display:inline-block;margin-left:30px;margin-top:-30px;position:relative;text-align:left}.edu-team-grid.team-style-4 .content .designation,.edu-team-grid.team-style-4 .content .title{background-color:#fff;background-color:var(--color-white);border-radius:4px;box-shadow:0 20px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker2)}.edu-team-grid.team-style-4 .content .title{font-size:20px;margin-bottom:10px;padding:16px 25px 15px}.edu-team-grid.team-style-4 .content .designation{font-size:16px;padding:4px 20px}.edu-team-grid.team-style-5 .thumbnail{margin-bottom:0}.edu-team-grid.team-style-5 .content{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 20px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker2);margin:-55px 30px 0;padding:30px 0 25px;position:relative}.team-area-3{position:relative}.team-area-3 .shape-group li{margin:0;position:absolute;z-index:-1}.team-area-3 .shape-group li.shape-1{bottom:-20px;left:135px}@media only screen and (max-width:1650px){.team-area-3 .shape-group li.shape-1{left:0}}@media only screen and (min-width:1200px)and (max-width:1450px){.team-area-3 .shape-group li.shape-1{left:-70px}}.team-area-4{background-color:#f0f4f5;background-color:var(--color-lighten01);-webkit-mask-image:url(/images/others/mask-04.png);mask-image:url(/images/others/mask-04.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover;padding:120px 0 390px;position:relative}.team-area-4 .shape-group li{margin:0;position:absolute;z-index:-1}.team-area-4 .shape-group li img{opacity:.2;transform:scaleX(-1)}.team-area-4 .shape-group li.shape-1{left:-10px;top:20px}.team-area-4 .shape-group li.shape-2{bottom:35%;right:130px}.team-area-4 .shape-group li.shape-3{right:240px;top:40px}.team-area-5{background-color:#f7f5f2;background-color:var(--color-lighten04);overflow:hidden;position:relative;z-index:1}@media only screen and (max-width:991px){.team-area-5 .shape-group{display:none}}.team-area-5 .shape-group li{position:absolute;z-index:-1}.team-area-5 .shape-group li.shape-1{right:-150px;top:-170px}.team-area-5 .shape-group li.shape-1 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:476px;width:476px}.team-area-5 .shape-group li.shape-2{right:8%;top:150px}.team-area-5 .shape-group li.shape-3{bottom:-110px;left:-200px}.team-area-5 .shape-group li.shape-3 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:476px;width:476px}.team-area-6{position:relative}.team-area-6 .shape-group li{margin:0;position:absolute;z-index:-1}.team-area-6 .shape-group li img{opacity:.6}.team-area-6 .shape-group li.shape-1{left:-90px;top:-165px}@media only screen and (max-width:991px){.team-area-6 .shape-group li.shape-1{display:none}}.team-area-6 .shape-group li.shape-2{right:-55px;top:-180px}.team-area-6 .shape-group li.shape-3{bottom:-150px;left:50%;transform:translateX(-50%)}@media only screen and (min-width:768px)and (max-width:991px){.team-details-thumb{margin-bottom:50px;text-align:center}}@media only screen and (max-width:767px){.team-details-thumb{margin-bottom:40px;text-align:center}}.team-details-thumb .thumbnail{margin-bottom:30px}.team-details-thumb .thumbnail img{border-radius:50%}.team-details-thumb .social-share{justify-content:center}@media only screen and (min-width:768px)and (max-width:991px){.team-details-content{text-align:center}}@media only screen and (max-width:767px){.team-details-content{text-align:center}}.team-details-content .main-info{margin-bottom:30px}.team-details-content .main-info .subtitle{color:#4a90e2;color:var(--color-primary);display:block;font-weight:500;font-weight:var(--p-medium);margin-bottom:6px;text-transform:uppercase}.team-details-content .main-info .title{margin-bottom:0}.team-details-content .main-info .team-meta{align-items:center;display:flex;flex-wrap:wrap;padding-top:10px}@media only screen and (min-width:768px)and (max-width:991px){.team-details-content .main-info .team-meta{justify-content:center}}@media only screen and (max-width:767px){.team-details-content .main-info .team-meta{justify-content:center}}.team-details-content .main-info .team-meta li{align-items:center;color:#8b572a;color:var(--color-heading);display:flex;margin-right:40px;position:relative;transition:.3s;transition:var(--transition)}.team-details-content .main-info .team-meta li:after{background-color:#e5e5e5;content:\"\";height:19px;position:absolute;right:-22px;top:3px;transition:.3s;transition:var(--transition);width:1px}.team-details-content .main-info .team-meta li:last-child{margin-right:0}.team-details-content .main-info .team-meta li:last-child:after{display:none}.team-details-content .main-info .team-meta li i{color:#a7a7a7;font-size:15px;margin-right:7px;transition:.3s;transition:var(--transition)}.team-details-content .main-info .team-meta li .rating{transition:.3s;transition:var(--transition)}.team-details-content .main-info .team-meta li .rating i{color:#f8b81f;margin-right:0}.team-details-content .main-info .team-meta li .rating-count{color:#8b572a;color:var(--color-heading);font-size:14px;font-weight:500;margin-left:10px;transition:.3s;transition:var(--transition)}.team-details-content .contact-info{margin-top:40px}.team-details-content .contact-info ul li span{color:#8b572a;color:var(--color-heading);display:inline-block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-weight:600;font-weight:var(--p-semi-bold);min-width:100px}.home-one-testimonial{margin-top:30px}@media only screen and (max-width:991px){.home-one-testimonial{margin-top:0}}.testimonial-heading-area{padding-right:50px}@media only screen and (max-width:479px){.testimonial-heading-area{padding-right:0}}.testimonial-grid{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);overflow:hidden;padding:60px 30px 50px;position:relative;z-index:1}.testimonial-grid:after{content:url(/images/testimonial/shape-1.png);position:absolute;right:-5px;top:-5px;z-index:-1}.testimonial-grid .thumbnail{display:inline-block;margin-bottom:35px;position:relative}.testimonial-grid .thumbnail img{border-radius:50%}.testimonial-grid .thumbnail .qoute-icon{background-color:#4a90e2;background-color:var(--color-primary);border:4px solid #fff;border:4px solid var(--color-white);border-radius:50%;bottom:-8px;color:#fff;color:var(--color-white);display:block;font-size:13px;height:34px;line-height:30px;position:absolute;right:-12px;text-align:center;width:34px}.testimonial-grid .content p{font-size:16px;margin-bottom:20px}.testimonial-grid .content .rating-icon{margin-bottom:6px}.testimonial-grid .content .rating-icon i{color:#f8b81f}.testimonial-grid .content .title{font-weight:500;font-weight:var(--p-medium);margin-bottom:2px}.testimonial-grid.testimonial-style-3{margin-bottom:40px;margin-top:30px;text-align:center}.testimonial-grid.testimonial-style-3:after{display:none}.testimonial-slide .content{background-color:#fff;background-color:var(--color-white);border-radius:4px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);margin-bottom:30px;margin-top:30px;padding:35px 28px 35px 40px}.testimonial-slide .content .logo{margin-bottom:22px}.testimonial-slide .content p{color:#8b572a;color:var(--color-heading);font-size:16px;margin-bottom:15px}.testimonial-slide .content .rating-icon i{color:#f8b81f}.testimonial-slide .author-info{align-items:center;display:flex}.testimonial-slide .author-info .thumb{margin-right:20px}.testimonial-slide .author-info .thumb img{border-radius:50%}.testimonial-slide .author-info .info{flex:1}.testimonial-slide .author-info .info .title{margin-bottom:0}.testimonial-slide.testimonial-style-2 .content{border-radius:5px;padding:45px 40px 50px 50px}@media only screen and (max-width:479px){.testimonial-slide.testimonial-style-2 .content{padding:40px 30px}}.testimonial-slide.testimonial-style-2 .content .rating-icon{margin-bottom:20px}.testimonial-slide.testimonial-style-2 .content p{margin-bottom:24px}.testimonial-slide.testimonial-style-3 .content{background-color:transparent;box-shadow:none;margin:0;padding:0}.testimonial-slide.testimonial-style-3 .content .rating-icon{margin-bottom:15px}.testimonial-slide.testimonial-style-3 .content p{margin-bottom:20px}.testimonial-area-2{position:relative}.testimonial-area-2 .testimonial-activation{margin:-30px -30px 50px;padding:0 30px}.testimonial-area-2 .testimonial-activation .swiper-slide{opacity:0;visibility:hidden}.testimonial-area-2 .testimonial-activation .swiper-slide.swiper-slide-active,.testimonial-area-2 .testimonial-activation .swiper-slide.swiper-slide-next,.testimonial-area-2 .testimonial-activation .swiper-slide.swiper-slide-next+.swiper-slide{opacity:1;visibility:visible}@media only screen and (max-width:991px){.testimonial-area-2 .testimonial-activation .swiper-slide.swiper-slide-next+.swiper-slide{opacity:0;visibility:hidden}}@media only screen and (max-width:767px){.testimonial-area-2 .testimonial-activation .swiper-slide.swiper-slide-next{opacity:0;visibility:hidden}}.testimonial-area-2 .swiper-pagination{bottom:-70px}.testimonial-area-2 .shape-group .shape-1{right:-75px;top:168px}.testimonial-area-2 .shape-group .shape-2{right:-106px;top:217px}.testimonial-area-2 .shape-group .shape-3{bottom:50px;left:45%;transform:translateX(-50%)}.testimonial-area-2.edu-section-gap .shape-group .shape-3{bottom:58px}.testimonial-area-3{background-color:#f7f5f2;background-color:var(--color-lighten04);-webkit-mask-image:url(/images/others/mask-04.png);mask-image:url(/images/others/mask-04.png);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:cover;padding:115px 0 250px;position:relative}@media only screen and (min-width:768px)and (max-width:991px){.testimonial-area-3{padding:95px 0 200px}}@media only screen and (max-width:767px){.testimonial-area-3{padding:75px 0 180px}}.testimonial-area-3 .testimonial-activation-2{margin:0 -45px;padding:0 30px}.testimonial-area-3 .testimonial-activation-2 .testimonial-slide .content{margin-bottom:50px;margin-top:0}.testimonial-area-3 .testimonial-activation-2 .swiper-wrapper .swiper-slide{opacity:0;visibility:hidden}.testimonial-area-3 .testimonial-activation-2 .swiper-wrapper .swiper-slide.swiper-slide-active,.testimonial-area-3 .testimonial-activation-2 .swiper-wrapper .swiper-slide.swiper-slide-next{opacity:1;visibility:visible}@media only screen and (max-width:991px){.testimonial-area-3 .testimonial-activation-2 .swiper-wrapper .swiper-slide.swiper-slide-next{opacity:0}}.testimonial-area-3 .swiper-pagination{bottom:235px}@media only screen and (max-width:991px){.testimonial-area-3 .swiper-pagination{bottom:170px}}@media only screen and (max-width:767px){.testimonial-area-3 .shape-group{display:none}}.testimonial-area-3 .shape-group li.shape-1{left:95px;top:95px}.testimonial-area-3 .shape-group li.shape-2{bottom:215px;left:245px}.testimonial-area-3 .shape-group li.shape-3{bottom:150px;right:170px}.testimonial-area-3 .shape-group li.shape-4{right:70px;top:120px}.testimonial-area-3 .shape-group li.shape-5{bottom:140px;left:50%;transform:translateX(-50%)}.testimonial-area-3 .shape-group li.shape-5 img{opacity:1;transform:scaleX(1)}.testimonial-area-4{padding:120px 0 70px;position:relative}@media only screen and (min-width:768px)and (max-width:991px){.testimonial-area-4{padding:100px 0 50px}}@media only screen and (max-width:991px){.testimonial-area-4 .testimonial-heading-area{padding-right:0}.testimonial-area-4 .testimonial-heading-area .section-title.section-left{text-align:center}}.testimonial-area-4 .testimonial-activation-3{margin:-30px -50px 10px;padding:0 30px}.testimonial-area-4 .testimonial-activation-3 .swiper-slide{opacity:0;visibility:hidden}.testimonial-area-4 .testimonial-activation-3 .swiper-slide.swiper-slide-active,.testimonial-area-4 .testimonial-activation-3 .swiper-slide.swiper-slide-next{opacity:1;visibility:visible}.testimonial-area-4 .shape-group li img{opacity:.2}.testimonial-area-4 .shape-group li.shape-1{bottom:60px;left:42%}.testimonial-area-4 .shape-group li.shape-2{bottom:35px;right:12%}.testimonial-area-4 .shape-group li.shape-2 img{opacity:.7}.testimonial-area-4 .swiper-navigation{text-align:left}@media only screen and (max-width:991px){.testimonial-area-4 .swiper-navigation{text-align:center}}.testimonial-coverflow{margin:-55px 0}.testimonial-coverflow .testimonial-grid{margin:55px 0;position:relative}@media only screen and (max-width:575px){.testimonial-coverflow .testimonial-grid{margin:55px 30px}}.testimonial-coverflow .testimonial-grid:before{background-color:#fff;background-color:var(--color-white);bottom:0;content:\"\";height:100%;left:0;opacity:.7;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);width:100%;z-index:1}.testimonial-coverflow .swiper-slide{padding:0}.swiper-testimonial-slider-wrapper .swiper-slide,.testimonial-coverflow .swiper-slide.swiper-slide-visible.swiper-slide-active .testimonial-grid:before{opacity:0}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-visible{opacity:1}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-visible.swiper-slide-prev .testimonial-grid{box-shadow:70px 0 50px 0 rgba(26,46,85,.1);margin-left:36px;padding:40px 30px 50px}@media only screen and (max-width:1199px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-visible.swiper-slide-prev .testimonial-grid{margin-left:0}}@media only screen and (min-width:768px)and (max-width:991px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-visible.swiper-slide-prev .testimonial-grid{margin-left:40px}}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-visible.swiper-slide-next .testimonial-grid{box-shadow:-40px 0 50px 0 rgba(26,46,85,.1);margin-left:40px;margin-right:36px;padding:40px 30px 50px}@media only screen and (max-width:1199px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-visible.swiper-slide-next .testimonial-grid{margin-left:0;margin-right:0}}@media only screen and (min-width:768px)and (max-width:991px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-visible.swiper-slide-next .testimonial-grid{margin-left:40px}}.testimonial-area-1{margin-bottom:-40px}@media only screen and (max-width:1199px){.testimonial-area-1{margin-top:0}}.testimonial-area-1 .home-one-testimonial-activator{margin:-20px -45px 0;padding:0 30px}.testimonial-area-1 .home-one-testimonial-activator .swiper-wrapper .swiper-slide{opacity:0;visibility:hidden}.testimonial-area-1 .home-one-testimonial-activator .swiper-wrapper .swiper-slide.swiper-slide-active,.testimonial-area-1 .home-one-testimonial-activator .swiper-wrapper .swiper-slide.swiper-slide-next{opacity:1;visibility:visible}.testimonial-area-1 .home-one-testimonial-activator .testimonial-grid{margin:30px 0 50px}.testimonial-area-6{position:relative}.testimonial-area-6:before{background:linear-gradient(-90deg,#f5f1eb,hsla(36,33%,94%,.3));bottom:0;-webkit-clip-path:polygon(0 10%,100% 0,100% 100%,0 100%);clip-path:polygon(0 10%,100% 0,100% 100%,0 100%);content:\"\";height:925px;left:0;position:absolute;right:0;width:100%;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.testimonial-area-6:before{height:55%}}@media only screen and (max-width:767px){.testimonial-area-6:before{height:55%}}.testimonial-area-6 .testimonial-activation-5 .swiper-wrapper .swiper-slide{padding:0}.testimonial-area-6 .swiper-pagination{bottom:30px;text-align:right}.testimonial-area-6 .shape-group li.shape-1{bottom:80px;left:-100px}.testimonial-area-6 .shape-group li.shape-2{right:-94px;top:-50px}.testimonial-area-6 .shape-group li.shape-3{right:-250px;top:-200px}.testimonial-area-6 .shape-group li.shape-3 span{border:1px solid #e8e6e3;border-radius:50%;display:block;height:400px;width:400px}.video-gallery{z-index:1}.video-gallery,.video-gallery .thumbnail{position:relative}.video-gallery .thumbnail img{border-radius:0 80px 0 120px}.video-gallery .thumbnail .video-play-btn{background:#f5a623;background:var(--color-secondary);border:0;border-radius:50%;color:#fff;color:var(--color-white);display:inline-block;font-size:24px;height:80px;left:50%;line-height:82px;margin:0 auto;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition:all 1s cubic-bezier(0,0,.2,1);width:80px}@media only screen and (max-width:575px){.video-gallery .thumbnail .video-play-btn{height:60px;line-height:62px;width:60px}}.video-gallery .thumbnail .video-play-btn i{margin-left:5px}.video-gallery .thumbnail .video-play-btn:before{animation:ripple 2s linear infinite}.video-gallery .thumbnail .video-play-btn:after,.video-gallery .thumbnail .video-play-btn:before{border:1px solid hsla(0,0%,100%,.3);border-radius:50%;bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);z-index:-1}.video-gallery .thumbnail .video-play-btn:after{animation:ripple 2s linear 1s infinite}.video-gallery .thumbnail:before{background-color:rgba(0,0,0,.3);border-radius:0 80px 0 120px;bottom:0;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;width:100%}.video-gallery .shape-group li{margin:0;position:absolute;z-index:-1}.video-gallery .shape-group li.shape-1{right:-70px;top:-70px}.video-gallery .shape-group li.shape-2{right:15px;top:-100px;z-index:1}@media only screen and (max-width:767px){.video-gallery .shape-group li.shape-2{display:none}}.video-gallery .shape-group li.shape-3{bottom:-40px;left:-130px}.video-area-1{position:relative}.video-area-1:before{background-image:url(/images/bg/bg-image-13.png);background-position:top;background-repeat:no-repeat;background-size:contain;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.video-area-2{padding:210px 0;position:relative;z-index:1}@media only screen and (min-width:768px)and (max-width:991px){.video-area-2{padding:150px 0 200px}}@media only screen and (max-width:767px){.video-area-2{padding:120px 0 150px}}.video-area-2:before{background-color:rgba(0,0,0,.6);bottom:0;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.video-banner-content{text-align:center}.video-banner-content .video-btn{margin-bottom:100px}@media only screen and (max-width:767px){.video-banner-content .video-btn{margin-bottom:70px}}.video-banner-content .video-play-btn{background:#f5a623;background:var(--color-secondary);border:0;border-radius:50%;color:#fff;color:var(--color-white);display:inline-block;font-size:24px;height:80px;line-height:82px;margin:0 auto;position:relative;text-align:center;transition:all 1s cubic-bezier(0,0,.2,1);width:80px}.video-banner-content .video-play-btn i{margin-left:5px}.video-banner-content .video-play-btn:before{animation:ripple 2s linear infinite}.video-banner-content .video-play-btn:after,.video-banner-content .video-play-btn:before{border:1px solid hsla(0,0%,100%,.3);border-radius:50%;bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);z-index:-1}.video-banner-content .video-play-btn:after{animation:ripple 2s linear 1s infinite}.video-banner-content .title{color:#fff;color:var(--color-white);margin-bottom:0}.video-area-3{margin-top:-270px}.video-area-3 .video-gallery .thumbnail img,.video-area-3 .video-gallery .thumbnail:before{border-radius:10px}.video-area-3 .video-gallery .shape-group li.shape-1{left:-70px;right:auto;top:-70px}.video-area-3 .video-gallery .shape-group li.shape-2{left:-110px;right:auto;top:-20px}.video-area-3 .video-gallery .shape-group li.shape-3{bottom:-40px;left:auto;right:-40px;z-index:1}.video-area-4 .video-gallery{margin-bottom:-275px}@media only screen and (max-width:575px){.video-area-4 .video-gallery{margin-bottom:0}}.video-gallery-5{margin-top:40px}.video-gallery-5 .thumbnail:before{border-radius:50px 10px 0 0}.video-gallery-5 .thumbnail img{border-radius:50px 10px 0 0;width:100%}.video-gallery-5 .content{background-color:#fff;background-color:var(--color-white);border-radius:0 0 10px 10px;box-shadow:0 10px 30px 0 rgba(0,0,0,.05);padding:22px 30px}.video-gallery-5 .content .title{margin-bottom:0;width:60%}@media only screen and (max-width:1199px){.video-gallery-5 .content .title{width:100%}}.why-choose-content .section-title{margin-bottom:32px}.why-choose-content .features-list .features-box{background-color:transparent;box-shadow:none;display:flex;margin-bottom:36px;padding:0;text-align:left}.why-choose-content .features-list .features-box .icon{background-color:transparent;margin-bottom:0;margin-right:30px}.why-choose-content .features-list .features-box .content{flex:1}.why-choose-content .features-list .features-box .content .title{margin-bottom:6px}.why-choose-content .features-list .features-box .content p{color:#9b9b9b;color:var(--color-body)}.why-choose-content .features-list .features-box.color-secondary-style .icon{border:1px solid rgba(238,74,98,.2)}.why-choose-content .features-list .features-box.color-secondary-style:hover .icon{background-color:#f5a623;background-color:var(--color-secondary)}.why-choose-content .features-list .features-box.color-primary-style .icon{border:1px solid rgba(26,182,157,.2)}.why-choose-content .features-list .features-box.color-primary-style:hover .icon{background-color:#4a90e2;background-color:var(--color-primary)}.why-choose-content .features-list .features-box.color-extra05-style .icon{border:1px solid rgba(248,148,31,.2)}.why-choose-content .features-list .features-box.color-extra05-style:hover .icon{background-color:#f8941f;background-color:var(--color-extra05)}.why-choose-gallery{position:relative;z-index:1}.why-choose-gallery .thumbnail img{border-radius:10px}.why-choose-gallery .thumbnail.thumbnail-1{text-align:right}@media only screen and (min-width:768px)and (max-width:991px){.why-choose-gallery .thumbnail.thumbnail-1{margin-right:80px}}.why-choose-gallery .thumbnail.thumbnail-2{margin-top:-230px}@media only screen and (max-width:767px){.why-choose-gallery .thumbnail.thumbnail-2{transform:none!important}}.why-choose-gallery .thumbnail.thumbnail-2 img{background-color:#fff;background-color:var(--color-white);box-shadow:0 30px 90px 0 rgba(26,46,85,.1);padding:10px}.why-choose-gallery .shape-group li.shape-1{left:30px;top:100px}.why-choose-gallery .shape-group li.shape-2{bottom:-35px;right:45px}.why-choose-gallery .shape-group li.shape-2 img{animation:rotateIt 10s linear infinite}.why-choose-area-2{background-color:#fff;background-color:var(--color-white);overflow:hidden;position:relative;z-index:2}.why-choose-area-2:before{background-color:#f7f5f2;background-color:var(--color-lighten04);-webkit-clip-path:polygon(0 0,100% 0,100% 84%,0 100%);clip-path:polygon(0 0,100% 0,100% 84%,0 100%);content:\"\";height:68%;left:0;position:absolute;right:0;top:0;width:100%;z-index:-1}@media only screen and (max-width:991px){.why-choose-area-2 .shape-group{display:none}}.why-choose-area-2 .shape-group li{position:absolute;z-index:-1}.why-choose-area-2 .shape-group li.shape-1{left:-50px;top:-310px}.why-choose-area-2 .shape-group li.shape-1 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:476px;width:476px}.why-choose-area-2 .shape-group li.shape-2{left:100px;top:80px}.why-choose-area-2 .shape-group li.shape-3{right:-20px;top:100px}.why-choose-area-2 .shape-group li.shape-3 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:476px;width:476px}.why-choose-area-2 .shape-group li.shape-4{right:10px;top:50px}.why-choose-area-2 .shape-group li.shape-5{bottom:-50px;right:-50px}.why-choose-area-2 .shape-group li.shape-5 span{border:16px solid #f8b81f;border-radius:50%;display:block;height:100px;width:100px}.why-choose-box.features-box{border-radius:5px;box-shadow:0 10px 30px 0 rgba(0,0,0,.05);padding:60px 50px 55px}.why-choose-box.features-box .icon{font-size:44px;height:90px;width:90px}.why-choose-box.features-box .content .title{margin-bottom:22px}.why-choose-box-2.features-box{border-radius:5px 50px 5px 70px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);padding:0 50px 55px}.why-choose-box-2.features-box .icon{color:#fff;color:var(--color-white);font-size:44px;height:90px;margin-bottom:-20px;margin-top:55px;transform:translateY(-55px);width:90px}.why-choose-box-2.features-box .content .title{margin-bottom:22px}.why-choose-box-2.features-box.color-primary-style .icon{background-color:#1ab69d}.why-choose-box-2.features-box.color-secondary-style .icon{background-color:#ee4a62}.why-choose-box-2.features-box.color-extra08-style .icon{background-color:#4664e4}.why-choose-box-3.features-box{border-radius:5px;box-shadow:0 10px 30px 0 rgba(0,0,0,.05);margin:0 auto;max-width:370px;padding:0}.why-choose-box-3.features-box .thumbnail img{border-radius:5px 5px 0 0}.why-choose-box-3.features-box .content{padding:0 40px 45px}.why-choose-box-3.features-box .icon{color:#fff;color:var(--color-white);font-size:44px;height:90px;margin-top:-40px;position:relative;width:90px}.why-choose-box-3.features-box .content .title{margin-bottom:22px}.why-choose-box-3.features-box.color-primary-style .icon{background-color:#1ab69d}.why-choose-box-3.features-box.color-secondary-style .icon{background-color:#ee4a62}.why-choose-box-3.features-box.color-extra08-style .icon{background-color:#4664e4}.why-choose-area-3{overflow:hidden;position:relative;z-index:2}@media only screen and (max-width:991px){.why-choose-area-3 .shape-group{display:none}}.why-choose-area-3 .shape-group li.shape-1{left:75px;top:-180px}@media only screen and (max-width:1650px){.why-choose-area-3 .shape-group li.shape-1{left:-100px}}.why-choose-area-3 .shape-group li.shape-1 span{border:1px solid #b8e986;border:1px solid var(--color-border);border-radius:50%;display:block;height:476px;width:476px}.why-choose-area-3 .shape-group li.shape-2{left:120px;top:195px}@media only screen and (max-width:1650px){.why-choose-area-3 .shape-group li.shape-2{left:60px}}@media only screen and (min-width:1200px)and (max-width:1450px){.why-choose-area-3 .shape-group li.shape-2{left:-60px;top:150px}}.why-choose-area-3 .shape-group li.shape-3{right:-60px;top:210px}.why-choose-area-4{position:relative;z-index:2}@media only screen and (max-width:991px){.why-choose-area-4 .shape-group{display:none}}.why-choose-area-4 .shape-group li{position:absolute;z-index:-1}.why-choose-area-4 .shape-group li.shape-1{left:-205px;top:-25px}@media only screen and (min-width:1200px)and (max-width:1450px){.why-choose-area-4 .shape-group li.shape-1{left:-165px;top:-35px}}.why-choose-area-4 .shape-group li.shape-2{right:-270px;top:10px}.why-choose-area-4 .shape-group li.shape-2 span{border:1px solid #e8e6e3;border-radius:50%;display:block;height:400px;width:400px}.error-page-area{position:relative}.error-page-area>.shape-group li{position:absolute;z-index:-1}.error-page-area>.shape-group li.shape-1{bottom:-12px;left:50%;opacity:.3;transform:translateX(-50%)}.edu-error{text-align:center}.edu-error .thumbnail{display:inline-block;margin-bottom:60px;position:relative}@media only screen and (max-width:575px){.edu-error .thumbnail{margin-bottom:50px}}@media only screen and (max-width:767px){.edu-error .thumbnail .shape-group{display:none}}.edu-error .thumbnail .shape-group li{position:absolute;z-index:-1}.edu-error .thumbnail .shape-group li.shape-1{left:-46px;opacity:.4;top:-5px}.edu-error .thumbnail .shape-group li.shape-2{left:50px;top:-15px}.edu-error .thumbnail .shape-group li.shape-3{opacity:.4;right:-46px;top:-25px}.edu-error .thumbnail .shape-group li.shape-4{right:-12px;top:40px;z-index:1}.edu-error .content .title{font-size:50px;margin-bottom:10px}@media only screen and (max-width:767px){.edu-error .content .title{font-size:40px}}@media only screen and (max-width:575px){.edu-error .content .title{font-size:30px}}.edu-error .content .subtitle{margin-bottom:65px}@media only screen and (max-width:575px){.edu-error .content .subtitle{margin-bottom:50px}}.edu-error .content .edu-btn i{font-size:16px;padding-right:10px;top:1px}.coming-soon-page-area{align-items:center;background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);background-position:50%;background-repeat:no-repeat;background-size:cover;display:flex;height:100vh;min-height:500px;overflow-y:auto;overflow-y:inherit;padding:50px 0;position:relative;width:100%;z-index:1}.coming-soon-page-area:before{background-image:url(/images/bg/bg-image-22.png);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.coming-soon-page-area .shape-group li{position:absolute;z-index:-1}.coming-soon-page-area .shape-group li.shape-1{left:155px;top:70px}@media only screen and (min-width:1200px)and (max-width:1599px){.coming-soon-page-area .shape-group li.shape-1{left:-55px}}.coming-soon-page-area .shape-group li.shape-2{left:360px;top:240px}@media only screen and (min-width:1200px)and (max-width:1599px){.coming-soon-page-area .shape-group li.shape-2{left:105px}}.coming-soon-page-area .shape-group li.shape-3{right:19%;top:170px}@media only screen and (min-width:1200px)and (max-width:1599px){.coming-soon-page-area .shape-group li.shape-3{right:0}}.coming-soon-page-area .shape-group li.shape-4{border:11px solid hsla(0,0%,100%,.2);border-radius:50%;height:71px;right:14%;top:50px;width:71px}.coming-soon-content{margin:0 auto;max-width:660px;text-align:center}.coming-soon-content .coming-countdown{flex-wrap:wrap}@media only screen and (max-width:767px){.coming-soon-content .coming-countdown .countdown-section{margin:0 15px 30px}.coming-soon-content .coming-countdown .countdown-section .countdown-number{font-size:35px}.coming-soon-content .coming-countdown .countdown-section:after{right:-20px;top:-14px}}.coming-soon-content .title{color:#fff;color:var(--color-white);font-size:90px;font-weight:800;font-weight:var(--p-extra-bold);margin-bottom:70px}@media only screen and (max-width:1199px){.coming-soon-content .title{font-size:75px;margin-bottom:60px}}@media only screen and (max-width:991px){.coming-soon-content .title{font-size:65px;margin-bottom:50px}}@media only screen and (max-width:767px){.coming-soon-content .title{font-size:50px;margin-bottom:40px}}@media only screen and (max-width:575px){.coming-soon-content .title{font-size:40px;margin-bottom:35px}}.coming-soon-content .input-group{align-items:center;background-color:#fff;background-color:var(--color-white);border-radius:5px;margin-top:70px;padding:10px}@media only screen and (max-width:767px){.coming-soon-content .input-group{margin-top:30px}}.coming-soon-content .input-group .form-control{background-color:transparent;height:50px}.coming-soon-content .input-group .form-control:focus{box-shadow:none}.coming-soon-content .input-group .edu-btn{border-radius:5px!important;padding:0 35px}@media only screen and (max-width:479px){.coming-soon-content .input-group .edu-btn{padding:0 15px}}.edu-header .header-mainmenu{background-color:#fff;background-color:var(--color-white);box-shadow:0 6px 15px 0 rgba(0,0,0,.05);position:relative}@media only screen and (max-width:1199px){.edu-header .header-mainmenu{padding-bottom:10px;padding-top:10px}}@media only screen and (max-width:767px){.edu-header .header-mainmenu{padding-bottom:12px;padding-top:12px}}.edu-header .header-mainmenu.edu-sticky{animation:headerSticky .95s ease forwards;background-color:#fff;background-color:var(--color-white);left:0;position:fixed;right:0;top:0;z-index:99}.edu-header .header-navbar{align-items:center;display:flex}@media only screen and (max-width:1199px){.edu-header .header-navbar{justify-content:space-between}}.edu-header .header-navbar .header-mainnav{flex:1}@media only screen and (max-width:1199px){.edu-header .header-navbar .header-mainnav{display:none}}.edu-header .header-brand{align-items:center;display:flex}.edu-header .header-brand img.logo-dark{display:none}.edu-header .header-brand img.logo-light{display:inline-block}.edu-header .header-brand .logo{margin-right:40px}@media only screen and (max-width:575px){.edu-header .header-brand .logo{margin-right:15px}}.edu-header .header-brand .logo a{display:block}.edu-header .header-category{border-left:1.5px solid #f2f2f2;border-right:1.5px solid #f2f2f2;margin-right:10px}@media only screen and (max-width:1350px){.edu-header .header-category{display:none}}.edu-header .header-category .mainmenu li.has-droupdown>a{padding:0 40px}.edu-header .header-category .mainmenu li.has-droupdown>a i{font-size:18px;padding-right:10px;position:relative;top:2px}.edu-header .header-category .mainmenu li.has-droupdown>a:after{display:none}.edu-header.header-fullwidth .header-mainmenu,.edu-header.header-fullwidth .header-top-bar{padding-left:62px;padding-right:62px}@media only screen and (max-width:1699px){.edu-header.header-fullwidth .header-mainmenu,.edu-header.header-fullwidth .header-top-bar{padding-left:22px;padding-right:22px}}@media only screen and (max-width:767px){.edu-header.header-fullwidth .header-mainmenu,.edu-header.header-fullwidth .header-top-bar{padding-left:0;padding-right:0}}@media only screen and (min-width:992px)and (max-width:1199px){.header-style-1 .header-top .header-top-left .header-notify{font-size:13px}}@media only screen and (min-width:768px)and (max-width:991px){.header-style-1 .header-top .header-top-left .header-notify{padding:15px 0 5px;text-align:center}}@media only screen and (max-width:767px){.header-style-1 .header-top .header-top-left .header-notify{padding:15px 0 5px;text-align:center}}@media only screen and (min-width:992px)and (max-width:1199px){.header-style-1 .header-top .header-info{margin:0 -20px}}@media only screen and (max-width:767px){.header-style-1 .header-top .header-info{margin:0 -10px}}@media only screen and (min-width:992px)and (max-width:1199px){.header-style-1 .header-top .header-info li{font-size:13px;padding:14px 15px 12px}}@media only screen and (max-width:767px){.header-style-1 .header-top .header-info li{padding:10px}}@media only screen and (min-width:768px)and (max-width:991px){.header-style-1 .header-top .header-info li:after{height:50%}}@media only screen and (max-width:767px){.header-style-1 .header-top .header-info li:after{display:none}}@media only screen and (max-width:1350px){.header-style-1 .header-top .header-info li.social-icon,.header-style-1 .header-top .header-info li:nth-last-child(2):after{display:none}.header-style-1 .header-mainnav .mainmenu-nav .mainmenu{justify-content:center}}.header-style-1 .header-action li.search-icon{display:none}@media only screen and (max-width:1699px){.header-style-1 .header-action li.search-icon{display:block}}.header-style-2 .header-mainmenu .header-right{margin-left:22px;padding-left:50px;position:relative}@media only screen and (max-width:479px){.header-style-2 .header-mainmenu .header-right{margin-left:0;padding-left:20px}}.header-style-2 .header-mainmenu .header-right:after{background-color:#f2f2f2;content:\"\";height:40px;left:0;position:absolute;top:50%;transform:translateY(-50%);width:2px}.header-style-2 .header-mainmenu .mainmenu{justify-content:flex-end}.header-style-2 .header-action{margin:0 -16px}.header-style-2 .header-action li{margin:0 16px}.header-style-2 .header-action li.icon a .count{background-color:#f5a623;background-color:var(--color-secondary)}.header-style-2 .header-action li.icon.cart-icon{margin-right:26px}.header-style-2 .header-top-bar{background-color:#f7f5f2;background-color:var(--color-lighten04)}.header-style-2 .header-top .header-info li{color:#8b572a;color:var(--color-heading);font-weight:500}.header-style-2 .header-top .header-info li:after{background-color:#e0ddd7;display:none;height:30px}.header-style-2 .header-top .header-info li:first-child:after{display:block}.header-style-2 .header-top .header-info li a{color:#8b572a;color:var(--color-heading)}.header-style-2 .header-top .header-info li i{color:#f5a623;color:var(--color-secondary)}.header-style-3 .header-mainmenu .header-right{margin-left:22px;padding-left:50px;position:relative}@media only screen and (max-width:479px){.header-style-3 .header-mainmenu .header-right{margin-left:0;padding-left:20px}}.header-style-3 .header-mainmenu .header-right:after{background-color:#f2f2f2;content:\"\";height:40px;left:0;position:absolute;top:50%;transform:translateY(-50%);width:2px}.header-style-3 .header-mainmenu .mainmenu{justify-content:flex-end}.header-style-3 .header-action{margin:0 -16px}.header-style-3 .header-action li{margin:0 16px}.header-style-3 .header-action li.icon.cart-icon{margin-right:26px}.header-style-3 .header-top-bar{background-color:#232323}.header-style-3 .header-top .header-info li{color:hsla(0,0%,100%,.7);font-weight:500}.header-style-3 .header-top .header-info li:after{background-color:hsla(0,0%,100%,.2);display:none;height:30px}.header-style-3 .header-top .header-info li:first-child:after{display:block}.header-style-3 .header-top .header-info li a{color:hsla(0,0%,100%,.7)}.header-style-3 .header-top .header-info li a:hover{color:#fff;color:var(--color-white)}.header-style-3 .header-top .header-info li i{color:#4a90e2;color:var(--color-primary)}.header-style-4{position:relative;z-index:5}.header-style-4:before{content:url(/images/others/shape-19.png);left:0;position:absolute;top:0}@media only screen and (max-width:1399px){.header-style-4:before{display:none}}.header-style-4:after{content:url(/images/others/shape-20.png);position:absolute;right:0;top:0;z-index:-1}@media only screen and (max-width:1399px){.header-style-4:after{display:none}}.header-style-4 .header-mainmenu{background:transparent;box-shadow:none;transition:.3s;transition:var(--transition)}.header-style-4 .header-mainmenu.edu-sticky{box-shadow:0 6px 15px 0 rgba(0,0,0,.05)}.header-style-4.header-fullwidth .header-mainmenu{padding-left:90px;padding-right:90px}@media only screen and (max-width:1350px){.header-style-4.header-fullwidth .header-mainmenu{padding-left:40px;padding-right:40px}}@media only screen and (max-width:767px){.header-style-4.header-fullwidth .header-mainmenu{padding-left:0;padding-right:0}}.header-style-4 .header-navbar .header-mainnav{margin-left:25px}@media only screen and (max-width:1350px){.header-style-4 .header-navbar .header-mainnav{margin-left:0}.header-style-4 .header-navbar .header-mainnav .mainmenu{justify-content:center}}.header-style-4 .header-action li.search-icon{display:none}@media only screen and (max-width:1699px){.header-style-4 .header-action li.search-icon{display:block}}.mainmenu-nav .mainmenu{display:flex;flex-wrap:wrap;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);margin:0;padding:0}.mainmenu-nav .mainmenu>li>a{color:#8b572a;color:var(--color-heading);display:block;font-size:15px;font-weight:600;height:90px;line-height:94px;padding:0 26px;transition:.3s}@media only screen and (min-width:992px)and (max-width:1199px){.mainmenu-nav .mainmenu>li>a{padding:0 17px}}@media only screen and (min-width:768px)and (max-width:991px){.mainmenu-nav .mainmenu>li>a{padding:0 12px}}.mainmenu-nav .mainmenu>li>a.active,.mainmenu-nav .mainmenu>li>a:hover{color:#4a90e2!important;color:var(--color-primary)!important}.mainmenu-nav .mainmenu li{margin-bottom:0;margin-top:0;position:relative}.mainmenu-nav .mainmenu li.has-droupdown>a{position:relative}.mainmenu-nav .mainmenu li.has-droupdown>a:after{content:\"\";font-family:\"icomoon\";font-size:6px;font-weight:400;position:absolute;right:8px;top:0}@media only screen and (min-width:992px)and (max-width:1199px){.mainmenu-nav .mainmenu li.has-droupdown>a:after{right:0}}.mainmenu-nav .mainmenu li.has-droupdown .submenu{background-color:#fff;background-color:var(--color-white);box-shadow:0 10px 40px rgba(0,0,0,.08);height:auto;left:0;min-width:270px;opacity:0;padding:20px 0 25px;pointer-events:none;position:absolute;text-align:left;top:90%;transition:.3s;visibility:hidden;z-index:8}.mainmenu-nav .mainmenu li.has-droupdown .submenu li{position:relative}.mainmenu-nav .mainmenu li.has-droupdown .submenu li a{color:#8b572a;color:var(--color-heading);display:block;font-size:15px;font-weight:600;padding:5px 30px}.mainmenu-nav .mainmenu li.has-droupdown .submenu li a.active,.mainmenu-nav .mainmenu li.has-droupdown .submenu li a:hover{background:var(--color-darker);color:#4a90e2!important;color:var(--color-primary)!important}.mainmenu-nav .mainmenu li.has-droupdown .submenu li.has-droupdown>a:after{right:40px;top:10px;transform:rotate(-90deg)}.mainmenu-nav .mainmenu li.has-droupdown .submenu li.has-droupdown .submenu{left:100%;opacity:0;position:absolute;top:90%;transition:.3s;visibility:hidden;z-index:90}.mainmenu-nav .mainmenu li.has-droupdown .submenu li.has-droupdown:hover .submenu{left:100%;opacity:1;top:0;visibility:visible;z-index:90}.mainmenu-nav .mainmenu li.has-droupdown:hover .mega-menu,.mainmenu-nav .mainmenu li.has-droupdown:hover>.submenu{opacity:1;pointer-events:auto;top:100%;visibility:visible}.mainmenu-nav .mainmenu li.has-droupdown:hover .mega-menu .submenu{pointer-events:auto}.mainmenu-nav .mainmenu li ul.mega-menu{background-color:#fff;background-color:var(--color-white);box-shadow:0 10px 40px rgba(0,0,0,.08);display:grid;grid-template-columns:repeat(3,1fr);height:auto;left:-324px;min-width:1170px;opacity:0;padding:70px 0;pointer-events:none;position:absolute;top:90%;transition:.3s;visibility:hidden;z-index:10}@media only screen and (min-width:1200px)and (max-width:1599px){.mainmenu-nav .mainmenu li ul.mega-menu{left:-524px}}@media only screen and (max-width:1350px){.mainmenu-nav .mainmenu li ul.mega-menu{left:-473px}}.mainmenu-nav .mainmenu li ul.mega-menu .menu-title{font-weight:700;margin-bottom:0;padding-left:100px}.mainmenu-nav .mainmenu li ul.mega-menu>li{border-right:1px solid #b8e986;border-right:1px solid var(--color-border)}.mainmenu-nav .mainmenu li ul.mega-menu>li:last-child{border-right:0}.mainmenu-nav .mainmenu li ul.mega-menu .submenu{box-shadow:none;opacity:1;padding:20px 0 0 70px;position:static;visibility:visible}.header-style-2 .mainmenu-nav .mainmenu li ul.mega-menu,.header-style-3 .mainmenu-nav .mainmenu li ul.mega-menu{left:auto;right:-397px}.header-top-bar{background-color:#1f2432}@media only screen and (max-width:991px){.header-top-bar{display:none}}.header-top{align-items:center;display:flex}@media only screen and (min-width:768px)and (max-width:991px){.header-top{display:block}}@media only screen and (max-width:767px){.header-top{display:block}}.header-top .header-top-left{margin-right:30px}@media only screen and (min-width:768px)and (max-width:991px){.header-top .header-top-left{margin-right:0}}@media only screen and (max-width:767px){.header-top .header-top-left{margin-right:0}}.header-top .header-top-right{flex:1;text-align:right}.header-top .header-notify{color:#fff;color:var(--color-white);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px}.header-top .header-notify a{color:#f5a623;color:var(--color-secondary);font-weight:500;-webkit-text-decoration:underline;text-decoration:underline}.header-top .header-notify a:hover{color:#4a90e2;color:var(--color-primary)}.header-top .header-info{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end;margin:0 -30px}@media only screen and (min-width:768px)and (max-width:991px){.header-top .header-info{justify-content:center}}@media only screen and (max-width:767px){.header-top .header-info{justify-content:center;margin:0 -15px}}.header-top .header-info li{color:#fff;color:var(--color-white);display:inline-block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px;margin:0;padding:14px 30px 12px;position:relative}@media only screen and (max-width:767px){.header-top .header-info li{padding:15px}}.header-top .header-info li:after{background-color:hsla(0,0%,100%,.1);content:\"\";height:100%;position:absolute;right:0;top:50%;transform:translateY(-50%);width:1px}.header-top .header-info li a{color:#fff;color:var(--color-white)}.header-top .header-info li a:hover,.header-top .header-info li i{color:#f5a623;color:var(--color-secondary)}.header-top .header-info li i{font-size:15px;padding-right:10px;position:relative;top:1px}.header-top .header-info li:last-child:after{display:none}.header-top .header-info li.social-icon{margin:0 -12px}.header-top .header-info li.social-icon a{padding:0 12px}.header-top .header-info li.social-icon a i{color:#fff;color:var(--color-white);padding:0;transition:.3s;transition:var(--transition)}.header-top .header-info li.social-icon a:hover i{color:#f5a623;color:var(--color-secondary)}.header-top .header-info li.header-btn{padding:0 30px 0 0}@media only screen and (max-width:991px){.header-top .header-info li.header-btn{padding:0}}.header-top .header-info li.header-btn .edu-btn{border-radius:0;color:#fff;color:var(--color-white);overflow:visible}.header-top .header-info li.header-btn .edu-btn i{color:#fff;color:var(--color-white);font-size:11px;padding-right:0;top:0}.header-top .header-info li.header-btn .edu-btn:after{border-radius:0}.header-action{align-items:center;display:flex;margin:0 -20px}@media only screen and (max-width:575px){.header-action{margin:0 -10px}}.header-action li{line-height:1;margin:0 20px}@media only screen and (max-width:575px){.header-action li{margin:0 10px}}.header-action li.icon a{color:#8b572a;color:var(--color-heading);font-size:22px;position:relative}.header-action li.icon a .count{background-color:#4a90e2;background-color:var(--color-primary);border-radius:50%;color:#fff;color:var(--color-white);display:block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:12px;font-weight:500;height:20px;line-height:23px;position:absolute;right:-10px;text-align:center;top:-9px;width:20px}.header-action li.icon a:hover{color:#4a90e2;color:var(--color-primary)}.header-action li.icon.cart-icon{margin-right:30px}@media only screen and (max-width:575px){.header-action li.icon.cart-icon{margin-right:20px}}@media only screen and (max-width:1699px){.header-action .search-bar{display:none}}.header-action .search-bar .input-group{border:1px solid #e5e5e5;border-radius:4px}.header-action .search-bar .input-group .form-control{border:none;color:#8b572a;color:var(--color-heading);font-size:15px;font-weight:400;height:50px;line-height:1;padding:0 0 0 20px}.header-action .search-bar .input-group .form-control:focus{box-shadow:none}.header-action .search-bar .input-group .search-btn{background-color:transparent;border:none;color:#8b572a;color:var(--color-heading);font-size:20px;padding:0 20px;transition:.3s;transition:var(--transition)}.header-action .search-bar .input-group .search-btn:hover{color:#4a90e2;color:var(--color-primary)}@media only screen and (max-width:767px){.header-action .header-btn{display:none}}.header-action .header-btn a{color:#fff;color:var(--color-white);display:block;padding:0 30px}.header-action .mobile-menu-bar .hamberger-button{background-color:transparent;border:none;color:#8b572a;color:var(--color-heading);font-size:15px;line-height:1;padding:0;transition:.3s;transition:var(--transition)}.header-action .mobile-menu-bar .hamberger-button:hover{color:#4a90e2;color:var(--color-primary)}.edublink-vue-mobile-popup-menu{height:100vh;left:0;opacity:0;position:fixed;top:0;transition:all .3s cubic-bezier(.645,.045,.355,1);visibility:hidden;width:100vw;z-index:99999}.edublink-vue-mobile-popup-menu .mobile-menu-overlay{background:rgba(0,0,0,.8);content:\"\";height:100%;left:0;position:absolute;top:0;transition:opacity .5s ease-out;width:100%}.edublink-vue-mobile-popup-menu .inner{background:#fff;box-shadow:0 10px 30px rgba(0,0,0,.06);display:flex;flex-direction:column;height:100%;height:100vh;left:-150px;opacity:0;position:absolute;transition:all .5s ease-out;width:305px;z-index:999}.edublink-vue-mobile-popup-menu .inner .header-top{align-items:center;border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);display:flex;justify-content:space-between;padding:15px 20px}.edublink-vue-mobile-popup-menu .inner .header-top .logo a img{max-height:45px}.edublink-vue-mobile-popup-menu .inner .header-top .close-menu .close-button{align-items:center;background:#fff;background:var(--color-white);border:0;border-radius:100%;box-shadow:0 10px 20px rgba(0,0,0,.12);color:#8b572a;color:var(--color-heading);display:flex;font-size:14px;height:40px;justify-content:center;transition:.3s;transition:var(--transition);width:40px}.edublink-vue-mobile-popup-menu .inner .header-top .close-menu .close-button:hover{background-color:#4a90e2;background-color:var(--color-primary);color:#fff;color:var(--color-white)}.edublink-vue-mobile-popup-menu.active{opacity:1;visibility:visible}.edublink-vue-mobile-popup-menu.active .inner{left:0;opacity:1;overflow-y:auto}.edublink-vue-mobile-popup-menu .mainmenu{list-style:none;margin:0;padding:15px 20px}.edublink-vue-mobile-popup-menu .mainmenu li{margin:0}.edublink-vue-mobile-popup-menu .mainmenu li a{display:block;font-size:16px;font-weight:500;padding:8px 0}.edublink-vue-mobile-popup-menu .mainmenu li a.active{color:#4a90e2!important;color:var(--color-primary)!important}.edublink-vue-mobile-popup-menu .mainmenu li+li{border-top:1px solid #b8e986;border-top:1px solid var(--color-border)}.edublink-vue-mobile-popup-menu .mainmenu .has-droupdown .submenu{display:none;list-style:none;max-width:100%;padding:0 0 0 14px}.edublink-vue-mobile-popup-menu .mainmenu .has-droupdown .submenu li a{font-size:15px}.edublink-vue-mobile-popup-menu .mainmenu .has-droupdown .submenu li a.active{color:#4a90e2!important;color:var(--color-primary)!important}.edublink-vue-mobile-popup-menu .mainmenu .has-droupdown>a{position:relative}.edublink-vue-mobile-popup-menu .mainmenu .has-droupdown>a:after{content:\"\";font-family:\"icomoon\"!important;font-size:12px;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:.4s}.edublink-vue-mobile-popup-menu .mainmenu .has-droupdown>a.open:after{content:\"\"}.edublink-vue-mobile-popup-menu .mainmenu .mega-menu{display:none;list-style:none;max-width:100%;padding:0 0 0 14px}.edublink-vue-mobile-popup-menu .mainmenu .mega-menu>li .menu-title{margin-bottom:5px;padding-top:15px}.edublink-vue-mobile-popup-menu .mainmenu .mega-menu .submenu{display:block;margin:0;padding:0}.edu-search-popup{left:0;position:fixed;right:0;top:0;transform:scaleY(0);transform-origin:top center;transition:transform .7s ease;width:100%;z-index:99}.edu-search-popup.open{height:100%;transform:scale(1);transform-origin:top center}.edu-search-popup .content-wrap{align-items:center;background-color:#fff;background-color:var(--color-white);box-shadow:0 10px 40px 0 rgba(0,0,0,.08);display:flex;justify-content:center;min-height:560px;padding:20px;position:relative;width:100%}@media only screen and (max-width:767px){.edu-search-popup .content-wrap{min-height:450px}}.edu-search-popup .site-logo{left:70px;position:absolute;top:60px}.edu-search-popup .site-logo img.logo-dark{display:none}.edu-search-popup .site-logo img.logo-light{display:inline-block}@media only screen and (max-width:1199px){.edu-search-popup .site-logo{left:20px;top:40px}}.edu-search-popup .close-button{position:absolute;right:62px;top:62px}@media only screen and (max-width:1199px){.edu-search-popup .close-button{right:15px;top:50px}}.edu-search-popup .close-button .close-trigger{background:transparent;border:none;color:#8b572a;color:var(--color-heading);font-size:22px;transition:.3s;transition:var(--transition)}.edu-search-popup .close-button .close-trigger:hover{color:#4a90e2;color:var(--color-primary)}.edu-search-popup .inner{margin:0 auto;max-width:1170px;width:100%}.edu-search-popup .inner .search-form{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);position:relative}.edu-search-popup .inner .search-form input{background:transparent;border:0;border-radius:5px;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:24px;font-weight:400;height:90px;padding:0 55px 0 0}@media only screen and (max-width:767px){.edu-search-popup .inner .search-form input{font-size:16px;height:60px}}.edu-search-popup .inner .search-form .submit-button{background:transparent;border:0;color:#8b572a;color:var(--color-heading);font-size:24px;margin:0;outline:none;padding:0;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:.3s;transition:var(--transition)}.edu-search-popup .inner .search-form .submit-button:hover{color:#4a90e2;color:var(--color-primary)}@media only screen and (max-width:767px){.edu-search-popup .inner .search-form .submit-button{font-size:20px}}.edu-search-popup:before{background-color:transparent;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.no-topbar .edu-search-popup{top:0}.edu-footer{position:relative}.edu-footer .footer-top{padding:100px 0 95px;position:relative}.edu-footer .footer-top:before{background-image:url(/images/bg/BG-3.png);background-repeat:no-repeat;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}@media only screen and (max-width:991px){.edu-footer .footer-top:before{display:none}}@media only screen and (min-width:768px)and (max-width:991px){.edu-footer .footer-top{padding:80px 0}}@media only screen and (max-width:767px){.edu-footer .footer-top{padding:60px 0}}.edu-footer.footer-style-1{background-color:#f0f4f5}.edu-footer.footer-style-1 .footer-top .edu-footer-widget .logo a img.logo-dark{display:none}.edu-footer.footer-style-2{background-color:#111212}.edu-footer.footer-style-2 .footer-top .edu-footer-widget .widget-title{color:#fff}.edu-footer.footer-style-3{background-color:#111212}.edu-footer .description{margin-bottom:20px;margin-top:20px}.edu-footer .information-list li{margin-bottom:0;margin-top:0}.edu-footer .information-list li span{font-weight:500;margin-right:5px}.edu-footer .information-list li a{transition:.3s}.edu-footer .information-list li+li{margin-top:5px}.edu-footer .information-list li:hover a{color:#4a90e2;color:var(--color-primary)}.edu-footer .edu-footer-widget{position:relative;z-index:1}.edu-footer .edu-footer-widget .logo a img.logo-light{display:inline-block}.edu-footer .edu-footer-widget .inner{margin-top:36px}@media only screen and (min-width:768px)and (max-width:991px){.edu-footer .edu-footer-widget .inner{margin-top:20px}}@media only screen and (max-width:767px){.edu-footer .edu-footer-widget .inner{margin-top:20px}}.edu-footer .edu-footer-widget .footer-link{list-style:none;margin-bottom:0;padding:0}.edu-footer .edu-footer-widget .footer-link li{margin-bottom:0;margin-top:0}.edu-footer .edu-footer-widget .footer-link li a{display:block;line-height:26px}.edu-footer .edu-footer-widget .footer-link li+li{margin-top:11px}.edu-footer .edu-footer-widget .footer-link li:hover a{color:#4a90e2;color:var(--color-primary)}.edu-footer .edu-footer-widget .input-group{margin-bottom:35px}.edu-footer .edu-footer-widget .input-group .form-control{background-color:#fff;background-color:var(--color-white);border:none;border-radius:5px!important;font-size:15px;font-size:var(--font-size-b1);font-weight:400;height:auto;padding:0 15px}.edu-footer .edu-footer-widget .input-group button{border-radius:5px!important;margin-left:10px!important}.edu-footer .edu-footer-widget.explore-widget{margin-left:65px}@media only screen and (min-width:992px)and (max-width:1199px){.edu-footer .edu-footer-widget.explore-widget{margin-left:0}}@media only screen and (min-width:768px)and (max-width:991px){.edu-footer .edu-footer-widget.explore-widget{margin-left:0}}@media only screen and (max-width:767px){.edu-footer .edu-footer-widget.explore-widget{margin-left:0}}@media only screen and (max-width:479px){.edu-footer .edu-footer-widget .input-group.footer-subscription-form{flex-direction:column}.edu-footer .edu-footer-widget .input-group.footer-subscription-form .form-control{height:50px;margin-bottom:20px;width:100%}.edu-footer .edu-footer-widget .input-group.footer-subscription-form button{margin-left:0!important}}.edu-footer.footer-dark .widget-title{color:#fff;color:var(--color-white)}.edu-footer.footer-dark a,.edu-footer.footer-dark li,.edu-footer.footer-dark p{color:#bababa}.edu-footer.footer-lighten .widget-title{font-weight:700;font-weight:var(--p-bold)}.edu-footer.footer-lighten a,.edu-footer.footer-lighten li,.edu-footer.footer-lighten p{color:#8b572a;color:var(--footer-text)}.edu-footer.footer-light a,.edu-footer.footer-light li,.edu-footer.footer-light p{color:#8b572a;color:var(--color-heading)}.edu-footer.footer-light .edu-footer-widget .input-group .form-control{background-color:#f7f5f2;background-color:var(--color-lighten04)}.edu-footer.footer-kindergarten{background-color:#111212}.edu-footer.footer-kindergarten .footer-top{padding:100px 0 40px}.edu-footer.footer-kindergarten .footer-top:before{display:none}.edu-footer.footer-kindergarten .edu-footer-widget .widget-information{margin-bottom:24px}.edu-footer.footer-kindergarten .widget-title{color:#fff;color:var(--color-white)}.edu-footer.footer-kindergarten a,.edu-footer.footer-kindergarten li,.edu-footer.footer-kindergarten p{color:#bababa}.edu-footer.footer-kindergarten .copyright-area{position:relative;z-index:1}.edu-footer.footer-kindergarten .copyright-area:before{background-image:url(/images/bg/bg-image-3.svg);background-repeat:no-repeat;background-size:cover;bottom:0;content:\"\";height:100%;left:0;position:absolute;width:100%;z-index:-1}.edu-footer.footer-kindergarten .copyright-area a{color:#4a90e2;color:var(--color-primary)}.edu-footer.footer-kindergarten .copyright-area a:hover{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.edu-footer.footer-for-kitchen .footer-top:before{display:none}.edu-footer.footer-for-kitchen .shape-group li.shape-1{left:6%;top:45px}@media only screen and (max-width:1650px),only screen and (min-width:1401px)and (max-width:1750px){.edu-footer.footer-for-kitchen .shape-group li.shape-1{left:0}}@media only screen and (min-width:1200px)and (max-width:1450px){.edu-footer.footer-for-kitchen .shape-group li.shape-1{left:-80px}}.edu-footer.footer-for-kitchen .shape-group li.shape-2{bottom:30px;left:40px}@media only screen and (max-width:1650px){.edu-footer.footer-for-kitchen .shape-group li.shape-2{left:0}}@media only screen and (min-width:1200px)and (max-width:1450px){.edu-footer.footer-for-kitchen .shape-group li.shape-2{left:-80px}}.edu-footer.footer-for-kitchen .shape-group li.shape-3{bottom:-50px;left:46%}.edu-footer.footer-for-kitchen .shape-group li.shape-4{bottom:-10px;right:40px}@media only screen and (max-width:1650px){.edu-footer.footer-for-kitchen .shape-group li.shape-4{right:0}}@media only screen and (min-width:1200px)and (max-width:1450px){.edu-footer.footer-for-kitchen .shape-group li.shape-4{right:-50px}}.edu-footer.footer-for-kitchen .shape-group li.shape-5{right:6%;top:50px}@media only screen and (max-width:1650px){.edu-footer.footer-for-kitchen .shape-group li.shape-5{right:0}}@media only screen and (min-width:1200px)and (max-width:1450px){.edu-footer.footer-for-kitchen .shape-group li.shape-5{right:-50px}}.edu-footer.footer-for-yoga .footer-top:before{display:none}.edu-footer.footer-for-yoga .shape-group li img{opacity:.3}.edu-footer.footer-for-yoga .shape-group li.shape-1{left:6%;top:45px}@media only screen and (max-width:1650px),only screen and (min-width:1401px)and (max-width:1750px){.edu-footer.footer-for-yoga .shape-group li.shape-1{left:0}}.edu-footer.footer-for-yoga .shape-group li.shape-2{bottom:30px;left:40px}@media only screen and (max-width:1650px){.edu-footer.footer-for-yoga .shape-group li.shape-2{left:0}}.edu-footer.footer-for-yoga .shape-group li.shape-2 img{opacity:.2}.edu-footer.footer-for-yoga .shape-group li.shape-3{bottom:-83px;left:46%}.edu-footer.footer-for-yoga .shape-group li.shape-3 img{opacity:.7}.edu-footer.footer-for-yoga .shape-group li.shape-4{bottom:-10px;right:40px}@media only screen and (max-width:1650px){.edu-footer.footer-for-yoga .shape-group li.shape-4{right:0}}.edu-footer.footer-for-yoga .shape-group li.shape-4 img{opacity:.2}.edu-footer.footer-for-yoga .shape-group li.shape-5{right:6%;top:50px}@media only screen and (max-width:1650px){.edu-footer.footer-for-yoga .shape-group li.shape-5{right:0}}.copyright-area{padding:32px 0}.copyright-area p{margin-bottom:0}.footer-dark .copyright-area{border-top:1px solid #1f2020}.footer-dark .copyright-area a{color:#4a90e2;color:var(--color-primary)}.footer-dark .copyright-area a:hover{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.footer-lighten .copyright-area{background-color:#ebeff0}.footer-lighten .copyright-area p{color:#000;color:var(--color-black)}.footer-lighten .copyright-area a{color:#4a90e2;color:var(--color-primary)}.footer-lighten .copyright-area a:hover{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.footer-light .copyright-area{background-color:#fff;background-color:var(--color-white);border-top:1px solid #e5e5e5}.footer-light .copyright-area p{color:#8b572a;color:var(--color-heading)}.footer-light .copyright-area a{color:#4a90e2;color:var(--color-primary)}.footer-light .copyright-area a:hover{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.footer-kindergarten .copyright-area{padding:105px 0 50px}.footer-kindergarten .copyright-area a{color:#4a90e2;color:var(--color-primary)}.footer-kindergarten .copyright-area a:hover{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.blog-meta{display:flex;flex-wrap:wrap;margin:-5px -16px;padding-bottom:18px}@media only screen and (max-width:1199px){.blog-meta{margin:-5px -10px}}.blog-meta li{color:#8b572a;color:var(--color-heading);margin:5px 16px;position:relative}@media only screen and (max-width:1199px){.blog-meta li{margin:5px 10px}}.blog-meta li:last-child:after{display:none}.blog-meta li:after{background-color:#dbdbdb;content:\"\";height:19px;position:absolute;right:-18px;top:3px;width:1px}@media only screen and (max-width:1199px){.blog-meta li:after{right:-12px}}.blog-meta li a{color:#8b572a;color:var(--color-heading)}.blog-meta li i,.blog-meta li img{color:#4a90e2;color:var(--color-primary);font-size:16px;padding-right:10px;position:relative;top:2px}.edu-blog,.edu-blog .thumbnail{position:relative}.edu-blog .thumbnail a{border-radius:10px;display:block;overflow:hidden;position:relative}.edu-blog .thumbnail a:after{background-color:rgba(0,0,0,.5);bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:.3s;transition:var(--transition);visibility:hidden;width:100%}.edu-blog .thumbnail a img{border-radius:10px;transition:.3s;transition:var(--transition);width:100%}.edu-blog .thumbnail .video-play-btn{background-color:#fff;background-color:var(--color-white);border-radius:50%!important;color:#4a90e2;color:var(--color-primary);font-size:18px;height:80px;left:50%;line-height:80px;position:absolute;text-align:center;top:50%;transform:translateY(-50%) translateX(-50%);width:80px;z-index:2}.edu-blog .thumbnail .video-play-btn:after{display:none}@media only screen and (max-width:575px){.edu-blog .thumbnail .video-play-btn{height:65px;line-height:65px;width:65px}}.edu-blog .content{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);padding:30px;position:relative}@media only screen and (max-width:1199px){.edu-blog .content{padding:30px 20px}}@media only screen and (max-width:479px){.edu-blog .content{padding:20px}}.edu-blog .content .blog-category{color:#9b9b9b;color:var(--color-body);margin-bottom:10px;text-transform:uppercase}.edu-blog .content .blog-category:hover{color:#4a90e2;color:var(--color-primary)}.edu-blog .content .title{margin-bottom:10px}.edu-blog .content p{margin-bottom:0}.edu-blog .content.position-top{margin-left:30px;margin-right:30px;margin-top:-175px}@media only screen and (min-width:992px)and (max-width:1199px){.edu-blog .content.position-top{margin-top:-125px}}@media only screen and (max-width:767px){.edu-blog .content.position-top{margin-top:-105px}}@media only screen and (max-width:1199px){.edu-blog .content.position-top{margin-left:15px;margin-right:15px}}@media only screen and (max-width:479px){.edu-blog .content.position-top{margin-left:15px;margin-right:15px}}.edu-blog .content.position-top .read-more-btn{opacity:0;position:absolute;right:30px;top:-40px;transition:.3s;transition:var(--transition);visibility:hidden}.edu-blog .content.position-top .read-more-btn .btn-icon-round{box-shadow:0 10px 30px 0 rgba(20,36,66,.15);box-shadow:var(--shadow-dark)}.edu-blog:hover .thumbnail a:after{opacity:1;visibility:visible}.edu-blog:hover .thumbnail a img{transform:scale(1.1)}.edu-blog:hover .position-top .read-more-btn{opacity:1;top:-30px;visibility:visible}.edu-blog.blog-style-2{margin-bottom:40px}.edu-blog.blog-style-2:last-child{margin-bottom:0}.edu-blog.blog-style-2 .inner{align-items:center;display:flex}@media only screen and (max-width:575px){.edu-blog.blog-style-2 .inner{display:block}}.edu-blog.blog-style-2 .thumbnail{margin-right:30px}@media only screen and (max-width:575px){.edu-blog.blog-style-2 .thumbnail{margin-bottom:20px;margin-right:0}}.edu-blog.blog-style-2 .thumbnail a:after{background-color:rgba(0,0,0,.3);opacity:1;visibility:visible}.edu-blog.blog-style-2 .thumbnail a img{width:100%}.edu-blog.blog-style-2 .content{box-shadow:none;flex:1;padding:0}.edu-blog.blog-style-2 .content .blog-meta{padding-bottom:0}.edu-blog.blog-style-2 .content .blog-meta i{color:#d0d0d1}.edu-blog.blog-style-2 .blog-date{align-items:center;background:#4a90e2;background:var(--color-primary);border-radius:60px 60px 14px 60px;bottom:0;display:flex;flex-direction:column;height:80px;justify-content:center;position:absolute;right:0;width:80px;z-index:1}.edu-blog.blog-style-2 .blog-date span{color:#fff;color:var(--color-white);display:block;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:22px;font-weight:700;text-align:center}.edu-blog.blog-style-2 .blog-date span.day{line-height:1;margin-bottom:4px}.edu-blog.blog-style-2 .blog-date span.month{font-size:14px;font-weight:500;line-height:1}@media only screen and (max-width:991px){.edu-blog.blog-style-2.first-large-blog{margin-bottom:20px}}.edu-blog.blog-style-2.first-large-blog .inner{display:block}.edu-blog.blog-style-2.first-large-blog .thumbnail{margin-bottom:20px;margin-right:0}.edu-blog.blog-style-2.first-large-blog .thumbnail a:after{display:none}.edu-blog.blog-style-2.first-large-blog .content{padding-left:110px}.edu-blog.blog-style-2.first-large-blog .content .blog-date{left:0;right:auto;top:6px}.edu-blog.blog-style-2.first-large-blog .content .title{margin-bottom:15px}.edu-blog.blog-style-2.first-large-blog .content .blog-meta{padding-top:20px}.edu-blog.blog-style-3 .thumbnail a,.edu-blog.blog-style-3 .thumbnail a img{border-radius:10px 10px 0 0}.edu-blog.blog-style-3 .thumbnail .read-more-btn{left:0;opacity:0;position:absolute;right:0;text-align:center;top:53%;transform:translateY(-50%);transition:.3s;transition:var(--transition);visibility:hidden}.edu-blog.blog-style-3 .thumbnail .read-more-btn a{border-radius:50%;display:inline-block}.edu-blog.blog-style-3 .thumbnail .read-more-btn a:after{display:none}.edu-blog.blog-style-3 .content{border-radius:0 0 10px 10px}.edu-blog.blog-style-3 .content:before{content:url(/images/blog/shape-01.png);left:0;overflow:hidden;position:absolute;right:0;top:-36px}@media only screen and (max-width:767px){.edu-blog.blog-style-3 .content:before{content:\"\"}}.edu-blog.blog-style-3 .content .title{font-weight:700;font-weight:var(--p-bold)}.edu-blog.blog-style-3:hover .thumbnail .read-more-btn{opacity:1;top:51%;visibility:visible}.edu-blog.blog-style-4{margin-bottom:70px}.edu-blog.blog-style-4 .thumbnail .blog-gallery-activation .swiper-wrapper .swiper-slide{padding:0}.edu-blog.blog-style-4 .inner .thumbnail a,.edu-blog.blog-style-4 .inner .thumbnail a img,.edu-blog.blog-style-4 .thumbnail .blog-gallery-activation .swiper-wrapper .swiper-slide a,.edu-blog.blog-style-4 .thumbnail .blog-gallery-activation .swiper-wrapper .swiper-slide a img{border-radius:10px 10px 0 0}.edu-blog.blog-style-4 .content{border-radius:0 0 10px 10px;padding:44px 50px}@media only screen and (max-width:575px){.edu-blog.blog-style-4 .content{padding:30px 25px}}.edu-blog.blog-style-4 .content .read-more-btn{margin-top:25px}.edu-blog.blog-style-5{margin-bottom:40px}.edu-blog.blog-style-list{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker);margin-bottom:40px;padding:40px 40px 30px}@media only screen and (max-width:575px){.edu-blog.blog-style-list{padding:30px 20px}}.edu-blog.blog-style-list .inner{display:flex}.edu-blog.blog-style-list .thumbnail{margin-right:40px}@media only screen and (min-width:992px)and (max-width:1199px){.edu-blog.blog-style-list .thumbnail{margin-right:30px;max-width:250px}}@media only screen and (max-width:575px){.edu-blog.blog-style-list .thumbnail{margin-right:20px}}.edu-blog.blog-style-list .content{background-color:transparent;box-shadow:none;flex:1;padding:0}@media only screen and (max-width:767px){.edu-blog.blog-style-list .content{flex:auto}}.edu-blog.blog-style-list .content .read-more-btn{margin-top:24px}.edu-blog.post-video .thumbnail a:after{background-color:rgba(0,0,0,.3);opacity:1;visibility:visible}.edu-blog.post-gallery .thumbnail a img{transform:none}.edu-blog.post-gallery .thumbnail a:after{display:none}.blog-view-all-btn{margin-top:55px;text-align:center}.blog-view-all-btn .view-text{font-size:18px;margin-bottom:0}.edu-blog-area{position:relative}@media only screen and (max-width:991px){.edu-blog-area .shape-group{display:none}}.edu-blog-area .shape-group li{position:absolute;z-index:-1}.edu-blog-area .shape-group li.shape-1{left:-117px;top:-70px}.edu-blog-area .shape-group li.shape-2{left:55px;top:99px}.edu-blog-area .shape-group li.shape-2 span{border:15px solid #f5a623;border:15px solid var(--color-secondary);border-radius:50%;display:block;height:101px;width:101px}.edu-blog-area .shape-group li.shape-3{bottom:90px;right:85px}.edu-blog-area.blog-area-2{padding-top:128px;position:relative}.edu-blog-area.blog-area-2:before{background-image:url(/images/bg/bg-image-2.svg);background-position:top;background-repeat:no-repeat;background-size:cover;content:\"\";filter:brightness(0) saturate(100%) invert(96%) sepia(2%) saturate(484%) hue-rotate(339deg) brightness(103%) contrast(95%);height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media only screen and (min-width:768px)and (max-width:991px){.edu-blog-area.blog-area-2{padding-top:120px}}@media only screen and (max-width:767px){.edu-blog-area.blog-area-2{padding-top:120px}}.edu-blog-area.blog-area-2 .shape-group li.shape-1{left:135px;top:30px;z-index:1}@media only screen and (max-width:1650px){.edu-blog-area.blog-area-2 .shape-group li.shape-1{left:0}}@media only screen and (min-width:768px)and (max-width:991px){.blog-area-4{padding:30px 0 60px!important}}@media only screen and (max-width:767px){.blog-area-4{padding:0 0 30px!important}}.blog-details-content{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);padding-bottom:70px}.blog-details-content .entry-content .category{display:block;letter-spacing:1px;margin-bottom:8px;text-transform:uppercase}.blog-details-content .entry-content .title{margin-bottom:5px}.blog-details-content .entry-content .thumbnail{margin:50px 0 65px}@media only screen and (max-width:767px){.blog-details-content .entry-content .thumbnail{margin:20px 0 30px}}.blog-details-content .entry-content .thumbnail img{border-radius:10px;width:100%}.blog-details-content>.title{margin-top:60px}.blog-details-content>p{margin-bottom:26px}.blog-details-content>ul{list-style:disc}.blog-details-content>ul li{color:#8b572a;color:var(--color-heading);margin-bottom:12px;margin-top:12px}.blog-details-content .features-image{margin:65px 0}@media only screen and (max-width:767px){.blog-details-content .features-image{margin:40px 0}}.blog-details-content .features-image .thumb img{border-radius:5px;width:100%}.blog-details-content blockquote{margin:65px 0 70px}@media only screen and (max-width:767px){.blog-details-content blockquote{margin:40px 0 30px}}.blog-details-content .blog-share-area{margin-top:65px}.blog-details-content .blog-share,.blog-details-content .blog-tags{align-items:center;display:flex}.blog-details-content .blog-share .title,.blog-details-content .blog-tags .title{margin-bottom:0;margin-right:12px}.blog-details-content .blog-share{justify-content:flex-end}@media only screen and (max-width:767px){.blog-details-content .blog-share{justify-content:flex-start;margin-top:30px}}.blog-details-content .blog-share .title{margin-right:25px}.blog-details-content .blog-share .social-share{margin:0 -12px}.blog-details-content .blog-share .social-share li{margin:0 12px}blockquote{background-color:#fff;background-color:var(--color-white);border-radius:10px;box-shadow:0 5px 50px 0 rgba(26,46,85,.1);padding:35px 40px 35px 120px;position:relative}@media only screen and (max-width:767px){blockquote{padding:35px 30px 35px 100px}}blockquote:after{color:#4a90e2;color:var(--color-primary);content:\"\";font-family:\"icomoon\";font-family:var(--font-icomoon);font-size:35px;left:40px;position:absolute;top:30px}@media only screen and (max-width:767px){blockquote:after{font-size:30px;left:30px}}blockquote p{font-size:17px;margin-bottom:8px}blockquote .author{font-weight:500;font-weight:var(--p-medium);margin-bottom:0}.blog-author{align-items:center;display:flex;padding:70px 0}@media only screen and (max-width:575px){.blog-author{display:block}}.blog-author .thumbnail{margin-right:30px}@media only screen and (max-width:767px){.blog-author .thumbnail{margin-right:20px}}@media only screen and (max-width:575px){.blog-author .thumbnail{margin-bottom:20px;margin-right:0}}.blog-author .thumbnail img{border-radius:50%}.blog-author .author-content{flex:1}.blog-author .author-content .title{margin-bottom:10px}.blog-author .author-content p{margin-bottom:15px}.blog-author .author-content .social-share.icon-transparent{margin:0 -10px}.blog-author .author-content .social-share.icon-transparent li{margin:0 10px}.blog-author .author-content .social-share.icon-transparent li a{font-size:18px}.blog-pagination-list{border:1px solid #e7e7e7;border-radius:5px;z-index:2}.blog-pagination-list,.blog-pagination-list a{position:relative;transition:.3s;transition:var(--transition)}.blog-pagination-list a{align-items:center;color:#8b572a;color:var(--color-heading);display:flex;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:18px;font-weight:600;font-weight:var(--p-semi-bold);line-height:26px;padding:25px 30px;z-index:1}.blog-pagination-list a i{font-size:20px;margin-right:20px;transition:.4s}.blog-pagination-list:hover{background-color:#f0f4f5;border-color:#f0f4f5}.blog-pagination-list.next-post{text-align:right}.blog-pagination-list.next-post a i{margin-left:20px;margin-right:0}.comment-area{margin-top:100px}.comment-area .heading-title{margin-bottom:30px}.comment-list-wrapper .comment{display:flex}.comment-list-wrapper .comment .thumbnail{border-radius:50%;margin-right:30px;max-height:80px;min-width:80px;width:80px}@media only screen and (max-width:575px){.comment-list-wrapper .comment .thumbnail{margin-right:20px;min-width:60px;width:60px}}.comment-list-wrapper .comment .thumbnail img{border-radius:50%;width:100%}.comment-list-wrapper .comment .comment-content .title{margin-bottom:2px}.comment-list-wrapper .comment .comment-content .date{display:block;margin-bottom:14px}.comment-list-wrapper .comment .comment-content p{margin-bottom:18px}.comment-list-wrapper .comment .comment-content .reply-btn{align-items:center;display:flex;font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:15px;font-weight:500;line-height:26px}.comment-list-wrapper .comment .comment-content .reply-btn i{margin-right:10px}.comment-list-wrapper .comment.comment-reply{margin-left:110px}@media only screen and (max-width:575px){.comment-list-wrapper .comment.comment-reply{margin-left:40px}}.comment-list-wrapper .comment+.comment{border-top:1px solid #b8e986;border-top:1px solid var(--color-border);margin-top:30px;padding-top:30px}.comment-form-area{margin-top:90px}.comment-form-area .heading-title{margin-bottom:30px}.comment-form .form-group{margin-bottom:0}.comment-form .form-group input,.comment-form .form-group textarea{box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker)}.comment-form .form-group .edu-form-check label{color:#9b9b9b;color:var(--color-body);padding-left:27px}.comment-form .form-group .edu-form-check label:before{background-color:#f7f7f7;border-color:#b8e986;border-color:var(--color-border);height:15px;top:5px;width:15px}.comment-form .form-group .edu-form-check label:after{left:3px}.comment-form .form-group .edu-form-check input:checked~label:before{background-color:#4a90e2;background-color:var(--color-primary);border-color:#4a90e2;border-color:var(--color-primary)}.comment-form .form-group .edu-form-check input:checked~label:after{opacity:1}.edu-blog-sidebar{background-color:#fff;background-color:var(--color-white);border-radius:5px;box-shadow:0 10px 50px 0 rgba(26,46,85,.07);padding:35px 0}@media only screen and (min-width:768px)and (max-width:991px){.edu-blog-sidebar{margin-top:70px}}@media only screen and (max-width:767px){.edu-blog-sidebar{margin-top:60px}}.edu-blog-widget{padding:35px 40px}@media only screen and (max-width:767px){.edu-blog-widget{padding:20px}}.edu-blog-widget .widget-title{margin-bottom:35px}.edu-blog-widget.widget-search .blog-search{position:relative}.edu-blog-widget.widget-search .blog-search .search-button{background-color:transparent;border:none;color:#9b9b9b;color:var(--color-placeholder);font-size:18px;left:30px;padding:0;position:absolute;top:50%;transform:translateY(-50%)}.edu-blog-widget.widget-search .blog-search input{border:1px solid #b8e986;border:1px solid var(--color-border);padding:0 20px 0 56px}.edu-blog-widget.widget-latest-post .latest-post{border-bottom:1px solid #b8e986;border-bottom:1px solid var(--color-border);display:flex;margin-bottom:20px;padding-bottom:20px;position:relative}.edu-blog-widget.widget-latest-post .latest-post:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}.edu-blog-widget.widget-latest-post .latest-post .thumbnail{margin-right:20px}@media only screen and (max-width:767px){.edu-blog-widget.widget-latest-post .latest-post .thumbnail{margin-right:10px}}.edu-blog-widget.widget-latest-post .latest-post .thumbnail a img{border-radius:5px;max-height:95px;-o-object-fit:cover;object-fit:cover}.edu-blog-widget.widget-latest-post .latest-post .post-content{flex:1}.edu-blog-widget.widget-latest-post .latest-post .post-content .title{margin-bottom:5px}.edu-blog-widget.widget-latest-post .latest-post .post-content .title a{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.edu-blog-widget.widget-latest-post .latest-post .post-content .blog-meta{padding-bottom:0}.edu-blog-widget.widget-categories .category-list{margin:-14px 0}.edu-blog-widget.widget-categories .category-list li{margin:14px 0}.edu-blog-widget.widget-categories .category-list li a{color:#8b572a;color:var(--color-heading);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-weight:500;font-weight:var(--p-medium)}.edu-blog-widget.widget-categories .category-list li a:hover{color:#4a90e2;color:var(--color-primary)}.edu-blog-widget.widget-action .inner{background-color:#f5f9fa;border-radius:10px;padding:40px 40px 90px;position:relative;text-align:center}.edu-blog-widget.widget-action .inner:before{background-image:url(/images/others/shape-21.png);background-position:50%;background-repeat:no-repeat;background-size:cover;content:\"\";filter:opacity(.3);-webkit-filter:opacity(.3);height:100%;left:0;position:absolute;top:0;width:100%}@media only screen and (max-width:1199px){.edu-blog-widget.widget-action .inner{padding:40px 25px 60px}}.edu-blog-widget.widget-action .inner .title{font-size:22px;margin-bottom:5px}.edu-blog-widget.widget-action .inner .title span{color:#f5a623;color:var(--color-secondary)}.edu-blog-widget.widget-action .inner .shape-line{color:#4a90e2;color:var(--color-primary);display:block;font-size:10px;margin-bottom:14px}.edu-blog-widget.widget-action .inner p{color:#8b572a;color:var(--color-heading);margin-bottom:20px}.tag-list{display:flex;flex:1;flex-wrap:wrap;margin:-5px}.tag-list a{border:1px solid #b8e986;border:1px solid var(--color-border);font-family:\"Spartan\",sans-serif;font-family:var(--font-secondary);font-size:14px;font-weight:500;height:40px;line-height:40px;margin:5px;padding:0 14px;position:relative;z-index:1}.tag-list a,.tag-list a:after{border-radius:5px;transition:.3s;transition:var(--transition)}.tag-list a:after{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.tag-list a:hover{border-color:transparent;color:#fff;color:var(--color-white)}.tag-list a:hover:after{opacity:1}.edu-section-gap{padding:115px 0 120px}@media only screen and (min-width:768px)and (max-width:991px){.edu-section-gap{padding:95px 0 100px}}@media only screen and (max-width:767px){.edu-section-gap{padding:75px 0 80px}}.gap-tb-text{padding:115px 0 112px}@media only screen and (min-width:768px)and (max-width:991px){.gap-tb-text{padding:95px 0 92px}}@media only screen and (max-width:767px){.gap-tb-text{padding:75px 0 72px}}.section-gap-equal{padding:120px 0}@media only screen and (min-width:768px)and (max-width:991px){.section-gap-equal{padding:100px 0}}@media only screen and (max-width:767px){.section-gap-equal{padding:80px 0}}.gap-top-text{padding-top:115px}@media only screen and (min-width:768px)and (max-width:991px){.gap-top-text{padding-top:95px}}@media only screen and (max-width:767px){.gap-top-text{padding-top:75px}}.gap-bottom-text{padding-bottom:112px}@media only screen and (min-width:768px)and (max-width:991px){.gap-bottom-text{padding-bottom:92px}}@media only screen and (max-width:767px){.gap-bottom-text{padding-bottom:72px}}.gap-top-equal{padding-top:120px}@media only screen and (min-width:768px)and (max-width:991px){.gap-top-equal{padding-top:100px}}@media only screen and (max-width:767px){.gap-top-equal{padding-top:80px}}.gap-bottom-equal{padding-bottom:120px}@media only screen and (min-width:768px)and (max-width:991px){.gap-bottom-equal{padding-bottom:100px}}@media only screen and (max-width:767px){.gap-bottom-equal{padding-bottom:80px}}.section-gap-large{padding:145px 0 150px}@media only screen and (min-width:992px)and (max-width:1199px){.section-gap-large{padding:115px 0 120px}}@media only screen and (min-width:768px)and (max-width:991px){.section-gap-large{padding:95px 0 100px}}@media only screen and (max-width:767px){.section-gap-large{padding:75px 0 80px}}.gap-large-text{padding:145px 0 142px}@media only screen and (min-width:992px)and (max-width:1199px){.gap-large-text{padding:115px 0 112px}}@media only screen and (min-width:768px)and (max-width:991px){.gap-large-text{padding:95px 0 92px}}@media only screen and (max-width:767px){.gap-large-text{padding:75px 0 72px}}.gap-large-equal{padding:150px 0}@media only screen and (min-width:992px)and (max-width:1199px){.gap-large-equal{padding:120px 0}}@media only screen and (min-width:768px)and (max-width:991px){.gap-large-equal{padding:100px 0}}@media only screen and (max-width:767px){.gap-large-equal{padding:80px 0}}.gap-lg-top-text{padding-top:145px}@media only screen and (min-width:992px)and (max-width:1199px){.gap-lg-top-text{padding-top:115px}}@media only screen and (min-width:768px)and (max-width:991px){.gap-lg-top-text{padding-top:95px}}@media only screen and (max-width:767px){.gap-lg-top-text{padding-top:75px}}.gap-lg-bottom-text{padding-bottom:142px}@media only screen and (min-width:992px)and (max-width:1199px){.gap-lg-bottom-text{padding-bottom:112px}}@media only screen and (min-width:768px)and (max-width:991px){.gap-lg-bottom-text{padding-bottom:92px}}@media only screen and (max-width:767px){.gap-lg-bottom-text{padding-bottom:72px}}.gap-lg-bottom-equal{padding-bottom:150px}@media only screen and (min-width:992px)and (max-width:1199px){.gap-lg-bottom-equal{padding-bottom:120px}}@media only screen and (min-width:768px)and (max-width:991px){.gap-lg-bottom-equal{padding-bottom:100px}}@media only screen and (max-width:767px){.gap-lg-bottom-equal{padding-bottom:80px}}.gap-lg-top-equal{padding-top:150px}@media only screen and (min-width:992px)and (max-width:1199px){.gap-lg-top-equal{padding-top:120px}}@media only screen and (min-width:768px)and (max-width:991px){.gap-lg-top-equal{padding-top:100px}}@media only screen and (max-width:767px){.gap-lg-top-equal{padding-top:80px}}.brand-section-gap{padding:85px 0}.mb--10{margin-bottom:10px}.mb--20{margin-bottom:20px}.mb--30{margin-bottom:30px}.mb--40{margin-bottom:40px}.mb--50{margin-bottom:50px!important}.mb--60{margin-bottom:60px!important}.mb--90{margin-bottom:90px!important}.mt--50{margin-top:50px}@media only screen and (min-width:1200px){.col-pl--35{padding-left:35px}.col-pr--35{padding-right:35px}}.pt--50{padding-top:50px}.dark-mode body{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .cta-banner-3 .newsletter-form .input-group .form-control::-moz-placeholder{color:#fff;color:var(--color-white)}.dark-mode .about-style-3 .about-content .nav-tabs .nav-link,.dark-mode .blog-details-content>ul li,.dark-mode .blog-meta li,.dark-mode .blog-meta li a,.dark-mode .cart-table tbody td.product-remove .remove-wishlist,.dark-mode .cart-table thead th,.dark-mode .course-details-3 .nav-tabs .nav-item .nav-link.active,.dark-mode .course-details-3 .nav-tabs .nav-item .nav-link:hover,.dark-mode .course-details-content .course-enroll-box .single-item .login-btn a,.dark-mode .course-details-content .entry-content .course-meta li,.dark-mode .course-layout-five-tooltip-content .content .course-feature ul li:before,.dark-mode .cta-banner-3 .newsletter-form .input-group .form-control,.dark-mode .cta-banner-3 .newsletter-form .input-group .form-control::placeholder,.dark-mode .edu-blog-widget.widget-categories .category-list li a,.dark-mode .edu-breadcrumb-area .course-meta li,.dark-mode .edu-breadcrumb-area .edu-breadcrumb li.breadcrumb-item,.dark-mode .edu-breadcrumb-area .edu-breadcrumb li.breadcrumb-item a,.dark-mode .edu-breadcrumb-area .edu-breadcrumb li.separator i,.dark-mode .edu-course .content .course-meta li,.dark-mode .edu-course .content .course-rating .rating-count,.dark-mode .edu-course .hover-content-aside .content .course-feature ul li:before,.dark-mode .edu-course-widget.widget-course-summery .content .course-item li,.dark-mode .edu-pagination li a,.dark-mode .edu-product .inner .content .product-rating .rating-count,.dark-mode .edu-product .inner>.thumbnail .product-hover-info ul li a,.dark-mode .edu-search-popup .close-button .close-trigger,.dark-mode .edu-search-popup .inner .search-form .submit-button,.dark-mode .edu-sorting-area .sorting-right .edu-sorting .icon,.dark-mode .edu-sorting-area .sorting-right .layout-switcher label,.dark-mode .edublink-vue-mobile-popup-menu .inner .header-top .close-menu .close-button,.dark-mode .event-details .details-content .event-meta li a,.dark-mode .event-details .details-content ul li,.dark-mode .faq-page-nav .nav-tabs .nav-link,.dark-mode .footer-light .copyright-area p,.dark-mode .form-group label,.dark-mode .header-action .mobile-menu-bar .hamberger-button,.dark-mode .header-action .search-bar .input-group .form-control,.dark-mode .header-action .search-bar .input-group .search-btn,.dark-mode .hero-banner .banner-content p,.dark-mode .isotop-button button,.dark-mode .order-summery .summery-table .order-total td:last-child,.dark-mode .order-summery .summery-table tbody td,.dark-mode .popup-mobile-menu .inner .header-top .close-menu .close-button,.dark-mode .pricing-table .pricing-body .list-item li,.dark-mode .pricing-table .pricing-header .price-wrap .amount,.dark-mode .product-description-nav .nav-item button.nav-link.active,.dark-mode .product-description-nav .nav-item button.nav-link:hover,.dark-mode .product-details-area .content .product-action .add-to-cart-btn .wishlist-btn i,.dark-mode .product-details-area .content .product-feature li span,.dark-mode .product-details-area .content .product-rating .rating-count,.dark-mode .pv-demo-counterup .counterup-wrap .edu-counterup .title,.dark-mode .tag-list a,.dark-mode .team-details-content .contact-info ul li span,.dark-mode .team-details-content .main-info .team-meta li,.dark-mode .team-details-content .main-info .team-meta li .rating-count,.dark-mode a,.dark-mode a.edu-btn.btn-border,.dark-mode a.edu-btn:hover,.dark-mode button.edu-btn.btn-border,.dark-mode button.edu-btn:hover,.dark-mode input[type=email],.dark-mode input[type=number],.dark-mode input[type=password],.dark-mode input[type=tel],.dark-mode input[type=text],.dark-mode select,.dark-mode textarea{color:#fff;color:var(--color-white)}.dark-mode .course-details-content .course-enroll-box .single-item .login-btn a:hover,.dark-mode .edu-blog-widget.widget-categories .category-list li a:hover,.dark-mode .edu-breadcrumb-area .edu-breadcrumb li.breadcrumb-item a:hover,.dark-mode .edu-course.course-style-4 .content .title a:hover,.dark-mode .edu-team-grid.team-style-3 .content .title a:hover,.dark-mode .faq-page-nav .nav-tabs .nav-link.active,.dark-mode .hero-banner.hero-style-2 .banner-gallery .online-support .inner .content .title a:hover,.dark-mode .hero-banner.hero-style-4 .banner-gallery .online-support .inner .content .title a:hover,.dark-mode .login-form-box a,.dark-mode .popup-mobile-menu .mainmenu li a:hover,.dark-mode .social-share.icon-transparent li a:hover,.dark-mode a.btn-transparent:hover,.dark-mode a:hover,.dark-mode button.btn-transparent:hover,.dark-mode ul li a:hover{color:#4a90e2;color:var(--color-primary)}.dark-mode .about-style-3 .about-content .nav-tabs .nav-link.active,.dark-mode .about-style-3 .about-content .nav-tabs .nav-link:hover,.dark-mode .login-form-box a:hover,.dark-mode .section-title .pre-title.pre-textsecondary{color:#f5a623;color:var(--color-secondary)}.dark-mode .edu-breadcrumb-area.breadcrumb-style-4 .course-meta li,.dark-mode .edu-course.course-style-5 .content .course-meta li,.dark-mode .pricing-table .pricing-body .list-item li.item-off,.dark-mode ul li a{color:#9b9b9b;color:var(--color-body)}.dark-mode .about-image-gallery .video-box .inner .thumb .popup-icon:hover,.dark-mode .edu-product .inner>.thumbnail .product-hover-info ul li a:hover,.dark-mode .popup-mobile-menu .inner .header-top .close-menu .close-button:hover{background-color:#4a90e2;background-color:var(--color-primary)}.dark-mode .product-details-area .content .product-action .add-to-cart-btn .wishlist-btn:hover{background-color:#f5a623;background-color:var(--color-secondary)}.dark-mode a.btn-transparent,.dark-mode button.btn-transparent{color:#d0021b;color:var(--color-textSecondary)}.dark-mode .bg-lighten01,.dark-mode .bg-lighten04,.dark-mode .contact-form-area,.dark-mode .counterup-area-2:before,.dark-mode .counterup-area-7,.dark-mode .hero-banner.hero-style-1,.dark-mode .hero-banner.hero-style-5,.dark-mode .hero-banner.hero-style-6:before,.dark-mode .team-area-4,.dark-mode .team-area-5,.dark-mode .testimonial-area-3,.dark-mode .why-choose-area-2:before{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .counterup-area-7 .counterup-box-wrap .counterup-box:after,.dark-mode .counterup-area-7 .counterup-box-wrap .counterup-box:before,.dark-mode .course-details-content .course-enroll-box .single-item:after,.dark-mode .edu-counterup.counterup-style-3:after{background-color:#4a4a4a;background-color:var(--dark-color-border)}.dark-mode .product-details-area .content .product-action .add-to-cart-btn .wishlist-btn:hover{border-color:#f5a623;border-color:var(--color-secondary)}.dark-mode .about-style-3 .about-image-gallery .shape-group li.shape-4 span,.dark-mode .about-style-4 .about-image-gallery .shape-group .shape-4 span,.dark-mode .blog-details-content,.dark-mode .checkout-billing .form-group select,.dark-mode .checkout-notice .coupn-box,.dark-mode .comment-list-wrapper .comment+.comment,.dark-mode .contact-form-area .shape-group li.shape-3 span,.dark-mode .contact-form.form-style-2 .form-group input,.dark-mode .contact-form.form-style-2 .form-group textarea,.dark-mode .course-curriculam .course-lesson,.dark-mode .course-curriculam .course-lesson ul li,.dark-mode .course-curriculam .course-lesson ul li:first-child,.dark-mode .course-details-content .nav-tabs,.dark-mode .course-overview .border-box,.dark-mode .course-review .border-box,.dark-mode .course-review .border-box .comment-area,.dark-mode .course-sidebar-2 .edu-course-widget .inner,.dark-mode .edu-accordion .accordion-item,.dark-mode .edu-blog-widget.widget-latest-post .latest-post,.dark-mode .edu-blog-widget.widget-search .blog-search input,.dark-mode .edu-breadcrumb-area .shape-group li.shape-1,.dark-mode .edu-breadcrumb-area .shape-group li.shape-4,.dark-mode .edu-campus-area .campus-content .shape-4 span,.dark-mode .edu-campus-area .campus-image-gallery .shape-1 span,.dark-mode .edu-course-widget.widget-course-summery .content .course-item li,.dark-mode .edu-event-area .shape-group li.shape-2 span,.dark-mode .edu-event-list.event-list-2,.dark-mode .edu-product:hover .inner .thumbnail a,.dark-mode .edublink-vue-mobile-popup-menu .inner .header-top,.dark-mode .edublink-vue-mobile-popup-menu .mainmenu li+li,.dark-mode .footer-dark .copyright-area,.dark-mode .hero-banner.hero-style-4 .shape-group li.shape-8 span,.dark-mode .home-four-course .shape-group .shape-2 span,.dark-mode .login-form-box .form-group input,.dark-mode .order-payment,.dark-mode .order-summery.checkout-summery .summery-table-wrap,.dark-mode .popup-mobile-menu .inner .header-top,.dark-mode .pro-qty,.dark-mode .product-description-content .comment-area,.dark-mode .product-description-nav,.dark-mode .product-details-area .content .product-action .add-to-cart-btn .wishlist-btn,.dark-mode .product-details-area .thumbnail,.dark-mode .pv-courses-demo .shape-group li.shape-5 span,.dark-mode .social-share li a,.dark-mode .tag-list a,.dark-mode .team-area-5 .shape-group li.shape-1 span,.dark-mode .team-area-5 .shape-group li.shape-3 span,.dark-mode .testimonial-area-4 .swiper-navigation .swiper-btn-nxt,.dark-mode .testimonial-area-4 .swiper-navigation .swiper-btn-prv,.dark-mode .why-choose-area-2 .shape-group li.shape-1 span,.dark-mode .why-choose-area-2 .shape-group li.shape-3 span,.dark-mode .why-choose-area-3 .shape-group li.shape-1 span,.dark-mode a.edu-btn.btn-border,.dark-mode button.edu-btn.btn-border{border-color:#4a4a4a;border-color:var(--dark-color-border)}.dark-mode .pv-demo-counterup .counterup-wrap .edu-counterup.border-end{border-color:#4a4a4a!important;border-color:var(--dark-color-border)!important}.dark-mode .tpd-visible-frame-left .tpd-frame-left:before,.dark-mode .tpd-visible-frame-right .tpd-frame-left:after,.dark-mode .tpd-visible-frame-right .tpd-frame-left:before{border-right:13px solid #000;border-right:13px solid var(--color-black)}.dark-mode .tpd-visible-frame-right .tpd-frame-right:after{border-left:13px solid #000;border-left:13px solid var(--color-black)}.dark-mode p{color:#8b572a;color:var(--color-title)}.dark-mode .edu-pagination li:hover a,.dark-mode .h1,.dark-mode .h2,.dark-mode .h3,.dark-mode .h4,.dark-mode .h5,.dark-mode .h6,.dark-mode h1,.dark-mode h2,.dark-mode h3,.dark-mode h4,.dark-mode h5,.dark-mode h6{color:#fff;color:var(--color-white)}.dark-mode #edublink-preloader{background:#020b17;background:var(--dark-bg-color)}.dark-mode #edublink-preloader .preloader-close-btn-wraper .preloader-close-btn{background:#1c252f;color:#fff;color:var(--color-white)}.dark-mode .d-none-shape-dark{display:block}.dark-mode .d-block-shape-light{display:none}.dark-mode .about-image-gallery .video-box .inner,.dark-mode .about-image-gallery .video-box .inner .thumb .popup-icon{background-color:#fff;background-color:var(--color-white)}.dark-mode .about-style-1 .about-image-gallery .shape-group li.shape-1 img,.dark-mode .about-style-2 .about-image-gallery .shape-group li.shape-1 img,.dark-mode .about-style-7 .about-image-gallery .shape-group li.shape-1 img{filter:opacity(.06)}.dark-mode .about-style-4 .about-image-gallery .main-img-1{background-color:#fff;background-color:var(--color-white)}.dark-mode .about-style-3 .about-image-gallery .shape-group li.shape-2 img,.dark-mode .about-style-4 .about-image-gallery .shape-group .shape-2 img{filter:opacity(.06)}.dark-mode .about-style-3 .about-content .nav-tabs .nav-item:after{background-color:#525151;background-color:var(--color-extra09)}.dark-mode .about-style-6{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .about-style-6:after{filter:brightness(0) saturate(100%) invert(6%) sepia(8%) saturate(3633%) hue-rotate(174deg) brightness(95%) contrast(93%)}.dark-mode .about-style-2 .about-image-gallery .author-box .inner{background-color:#fff;background-color:var(--color-white)}.dark-mode .about-style-2 .about-image-gallery .author-box .inner .title,.dark-mode .about-style-2 .about-image-gallery .award-status .inner .content .subtitle{color:#000;color:var(--color-black)}.dark-mode .about-style-8:before{background:#020b17;background:var(--dark-bg-color)}.dark-mode .about-style-8:after{border:1px solid #404040;border:1px solid var(--color-extra10)}.dark-mode .about-style-8 .about-image-gallery .shape-group li.shape-1 img{filter:opacity(.06)}.dark-mode .about-style-8 .about-image-gallery .shape-group li.shape-4 span{border:1px solid #404040;border:1px solid var(--color-extra10)}.dark-mode .about-content .features-list li{color:#8b572a;color:var(--color-title)}.dark-mode .breadcrumb-style-2 .edu-breadcrumb li,.dark-mode .breadcrumb-style-2 .edu-breadcrumb li.breadcrumb-item a,.dark-mode .breadcrumb-style-2 .edu-breadcrumb li.separator i,.dark-mode .breadcrumb-style-2 .page-title .title{color:#fff;color:var(--color-white)}.dark-mode .breadcrumb-style-5{background:#020b17;background:var(--dark-bg-color)}.dark-mode .edu-breadcrumb-area{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .edu-breadcrumb-area .course-meta li:after{background-color:#404040;background-color:var(--color-extra10)}.dark-mode .why-choose-box-2.features-box,.dark-mode .why-choose-box.features-box{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .why-choose-box-2.features-box{box-shadow:none}.dark-mode .why-choose-box-2.features-box .icon,.dark-mode .why-choose-box-2.features-box.color-extra08-style:hover .icon{color:#fff;color:var(--color-white)}.dark-mode .brand-grid-wrap:after{background-color:#22272e;background-color:var(--color-extra11)}.dark-mode .brand-grid-wrap .brand-grid{border-right:1px solid #22272e;border-right:1px solid var(--color-extra11)}.dark-mode .brand-grid-wrap .brand-grid:hover{background-color:#232c38;box-shadow:0 10px 50px 0 rgba(26,46,85,.1)}.dark-mode .brand-grid-wrap .brand-grid:first-child{border-left:none}@media only screen and (max-width:479px){.dark-mode .brand-grid-wrap .brand-grid:nth-child(2n){border-right:none}}@media only screen and (max-width:991px){.dark-mode .brand-grid-wrap .brand-grid:nth-child(3n){border-right:none}}@media only screen and (max-width:479px){.dark-mode .brand-grid-wrap .brand-grid:nth-child(3n){border-right:1px solid #22272e;border-right:1px solid var(--color-extra11)}}.dark-mode .brand-grid-wrap .brand-grid:nth-child(5n){border-left:none}.dark-mode .brand-grid-wrap .brand-grid:last-child{border-right:none}.dark-mode .brand-grid-wrap .brand-grid:hover{box-shadow:none}.dark-mode .brand-area-1 .brand-grid-wrap .brand-grid:hover{background-color:#232c38}.dark-mode .brand-area-2{background:#020b17;background:var(--dark-bg-color)}.dark-mode .brand-area-3 .brand-grid-wrap .brand-grid{border-right:none}.dark-mode .brand-area-3 .brand-grid-wrap.brand-style-3 .brand-grid{background-color:#1c242f;background-color:var(--bg-color-2);opacity:1}.dark-mode .brand-area-3 .brand-grid-wrap.brand-style-3 .brand-grid img{filter:brightness(0) saturate(100%) invert(73%) sepia(0) saturate(4982%) hue-rotate(288deg) brightness(90%) contrast(90%)}.dark-mode .brand-area-3 .brand-grid-wrap.brand-style-3 .brand-grid:hover img{filter:brightness(0) saturate(100%) invert(99%) sepia(71%) saturate(0) hue-rotate(333deg) brightness(106%) contrast(100%)}.dark-mode .brand-area-5:before{background-image:url(/images/bg/dark-bg-image-20.svg)}@media only screen and (max-width:991px){.dark-mode .brand-area-5:before{background:#020b17;background:var(--dark-bg-color)}}.dark-mode .edu-blog .content{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}.dark-mode .edu-blog.blog-style-3 .content:before{filter:brightness(0) saturate(100%) invert(11%) sepia(21%) saturate(912%) hue-rotate(174deg) brightness(83%) contrast(92%)}.dark-mode .edu-blog.blog-style-list{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-blog .thumbnail .video-play-btn{background-color:#fff;background-color:var(--color-white)}.dark-mode .blog-meta li:after{background-color:#525151;background-color:var(--color-extra09)}.dark-mode .edu-blog-area.blog-area-2:before{filter:brightness(0) saturate(100%) invert(4%) sepia(14%) saturate(3862%) hue-rotate(182deg) brightness(105%) contrast(102%)}.dark-mode .edu-blog-area.blog-area-3 .blog-style-2 .content{background-color:transparent}.dark-mode .edu-blog-area.blog-area-3 .blog-style-2 .content .blog-date span{color:#fff;color:var(--color-white)}.dark-mode .edu-blog-area.blog-area-3 .blog-style-2 .content .blog-meta i{color:#8b572a;color:var(--color-title)}.dark-mode .edu-blog-area.blog-area-3 .blog-style-2 .inner .thumbnail .blog-date span{color:#fff;color:var(--color-white)}.dark-mode .edu-blog-sidebar{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .blog-pagination-list{border:1px solid #4a4a4a;border:1px solid var(--dark-color-border)}.dark-mode .blog-pagination-list:hover{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-cta-banner-area{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .edu-cta-banner-area:before{filter:brightness(0) saturate(101%) invert(36%) sepia(57%) saturate(374%) hue-rotate(121deg) brightness(86%) contrast(74%)}.dark-mode .university-cta-wrapper.edu-cta-banner-area:before{filter:brightness(0) saturate(101%) invert(36%) sepia(57%) saturate(374%) hue-rotate(121deg) brightness(86%) contrast(74%)!important}.dark-mode .online-academy-cta-wrapper{background-color:#020b17;background-color:var(--dark-bg-color);background-image:none}.dark-mode .online-academy-cta-wrapper:before{background-image:url(/images/cta/h-4-cta.svg);background-repeat:no-repeat;background-size:cover;filter:brightness(0) saturate(100%) invert(6%) sepia(18%) saturate(1959%) hue-rotate(173deg) brightness(98%) contrast(97%)}.dark-mode .cta-banner-2{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .cta-banner-2:before{display:none}.dark-mode .cta-banner-2 .shape-group li.shape-5{bottom:0}.dark-mode .cta-banner-3{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .cta-banner-3:before{filter:brightness(0) saturate(100%) invert(4%) sepia(22%) saturate(4302%) hue-rotate(194deg) brightness(91%) contrast(101%)}.dark-mode .cta-banner-3 .newsletter-form .input-group .form-control{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .cta-banner-3 .shape-group li.shape-3 img,.dark-mode .cta-banner-3 .shape-group li.shape-4 img{opacity:.65}.dark-mode .cta-area-1 .cta-style-3 .inner .content .subtitle,.dark-mode .cta-area-1 .cta-style-3 .inner .content .title{color:#fff;color:var(--color-white)}.dark-mode .cta-area-1 .cta-style-3 .shape-group li.shape-02 img,.dark-mode .cta-area-1 .home-one-cta .shape-group li.shape-02 img{filter:opacity(.06)}.dark-mode .cta-area-2 .cta-style-2 .inner .content .subtitle,.dark-mode .cta-area-2 .cta-style-2 .inner .content .title a{color:#000;color:var(--color-black)}.dark-mode .cta-area-2 .cta-style-2 .inner .content .title a:hover{color:hsla(0,0%,9%,.75)}.dark-mode .categorie-grid{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .categorie-grid .content p{color:#8b572a;color:var(--color-title)}.dark-mode .categorie-grid:hover .content .title,.dark-mode .categorie-grid:hover .content p,.dark-mode .categorie-grid:hover .icon{color:#fff;color:var(--color-white)}.dark-mode .categorie-grid:hover .icon svg path{stroke:#fff;stroke:var(--color-white)}.dark-mode .categorie-grid.color-extra01-style:hover .course-remain,.dark-mode .categorie-grid.color-extra01-style:hover .icon,.dark-mode .categorie-grid.color-extra02-style:hover .course-remain,.dark-mode .categorie-grid.color-extra02-style:hover .icon,.dark-mode .categorie-grid.color-extra03-style:hover .course-remain,.dark-mode .categorie-grid.color-extra03-style:hover .icon,.dark-mode .categorie-grid.color-extra04-style:hover .course-remain,.dark-mode .categorie-grid.color-extra04-style:hover .icon,.dark-mode .categorie-grid.color-extra05-style:hover .course-remain,.dark-mode .categorie-grid.color-extra05-style:hover .icon,.dark-mode .categorie-grid.color-extra06-style:hover .course-remain,.dark-mode .categorie-grid.color-extra06-style:hover .icon,.dark-mode .categorie-grid.color-extra07-style:hover .course-remain,.dark-mode .categorie-grid.color-extra07-style:hover .icon,.dark-mode .categorie-grid.color-extra08-style:hover .course-remain,.dark-mode .categorie-grid.color-extra08-style:hover .icon,.dark-mode .categorie-grid.color-primary-style:hover .course-remain,.dark-mode .categorie-grid.color-primary-style:hover .icon,.dark-mode .categorie-grid.color-secondary-style:hover .course-remain,.dark-mode .categorie-grid.color-secondary-style:hover .icon,.dark-mode .categorie-grid.color-tertiary-style:hover .course-remain,.dark-mode .categorie-grid.color-tertiary-style:hover .icon{color:#fff;color:var(--color-white)}.dark-mode .categorie-grid.categorie-style-3{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .categorie-area-3{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .categorie-area-3:before,.dark-mode .home-four-course:before{display:none}.dark-mode .counterup-area-1 .counterup-style-1,.dark-mode .edu-counterup.counterup-style-5{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .counterup-area-1 .counterup-style-1{box-shadow:none}.dark-mode .counterup-area-2 .counterup-box-wrap{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:inherit}.dark-mode .counterup-area-2 .counterup-box-wrap .counterup-box:after,.dark-mode .counterup-area-2 .counterup-box-wrap .counterup-box:before{background-color:#4a4a4a;background-color:var(--dark-color-border)}.dark-mode .course-area-3 .isotop-button button{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .course-area-3 .isotop-button button.is-checked,.dark-mode .course-area-3 .isotop-button button:hover{background-color:#f5a623;background-color:var(--color-secondary)}.dark-mode .counterup-area-7 .counterup-box-wrap{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .counterup-area-8 .shape-group li.shape-1 img{filter:brightness(0) saturate(100%) invert(96%) sepia(0) saturate(7500%) hue-rotate(155deg) brightness(104%) contrast(101%)}.dark-mode .counterup-style-4{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}.dark-mode .counterup-style-6 .count-number,.dark-mode .counterup-style-6 .icon,.dark-mode .counterup-style-6 .title{color:#fff;color:var(--color-white)}.dark-mode .edu-course,.dark-mode .pv-demo-area .single-demo .inner,.dark-mode .pv-demo-counterup .counterup-wrap{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-course .thumbnail .duration{color:#fff;color:var(--color-white)}.dark-mode .edu-course .inner .content .course-meta li:after{background-color:#525151;background-color:var(--color-extra09)}.dark-mode .edu-course .course-hover-content .content .course-level{background-color:#fff;background-color:var(--color-white);color:#000;color:var(--color-black)}.dark-mode .edu-course .course-hover-content .content .btn-secondary,.dark-mode .edu-course .course-hover-content .content .course-meta li,.dark-mode .edu-course .course-hover-content .content .course-meta li i,.dark-mode .edu-course .course-hover-content .content .course-price,.dark-mode .edu-course .course-hover-content .content .course-rating .rating-count,.dark-mode .edu-course .course-hover-content .content .title,.dark-mode .edu-course .course-hover-content .content p{color:#fff;color:var(--color-white)}.dark-mode .edu-course .course-hover-content .content .btn-secondary:hover{color:#000!important;color:var(--color-black)!important}.dark-mode .edu-course.course-style-3 .inner .content,.dark-mode .edu-course.course-style-3:before{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-course.course-style-4:hover .content .course-meta li,.dark-mode .edu-course.course-style-4:hover .content .course-price,.dark-mode .edu-course.course-style-4:hover .content .course-rating .rating-count,.dark-mode .edu-course.course-style-4:hover .content .title a{color:#fff;color:var(--color-white)}.dark-mode .edu-course.course-style-4:hover .content .course-meta li:after{background-color:#8b572a;background-color:var(--color-title)}.dark-mode .edu-course.course-style-4:hover .content .course-meta li i,.dark-mode .edu-course.course-style-5 .inner .content .price-round{color:#fff;color:var(--color-white)}.dark-mode .edu-course.course-style-6{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .edu-course.course-style-6 .content{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-course.course-style-6 .thumbnail .price-round{color:#fff;color:var(--color-white)}.dark-mode .edu-course.course-style-7 .thumbnail .course-price.price-round{background-color:#fff;background-color:var(--color-white)}.dark-mode .edu-course.course-style-7 .content .course-level,.dark-mode .edu-course.course-style-7 .content .course-meta li,.dark-mode .edu-course.course-style-7 .content .title{color:#fff;color:var(--color-white)}.dark-mode .edu-course.course-style-7 .content .course-meta li:after{background-color:#a19c9c}.dark-mode .edu-course.course-style-7 .content .course-meta li i,.dark-mode .edu-course.course-style-7 .content p{color:#fff;color:var(--color-white)}.dark-mode .edu-course.course-style-4:hover,.dark-mode .edu-course.course-style-8:hover{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-course.course-style-4:hover .content .course-price,.dark-mode .edu-course.course-style-8:hover .content .course-price{color:#f5a623;color:var(--color-secondary)}.dark-mode .edu-course.course-style-4 .hover-content-aside .content:before,.dark-mode .edu-course.course-style-8 .hover-content-aside .content:before{border-bottom:13px solid #020b17;border-bottom:13px solid var(--dark-bg-color);border-left:11px solid transparent;border-right:11px solid transparent}.dark-mode .edu-course.course-style-9:hover{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-course .hover-content-aside .content{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .edu-course .hover-content-aside .content:before{border-right:13px solid #020b17;border-right:13px solid var(--dark-bg-color)}.dark-mode .bg-lighten03,.dark-mode .tpd-tooltip .tpd-content-relative-padder{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .tpd-tooltip .tpd-content-relative-padder .content .button-group .edu-btn{color:#fff!important;color:var(--color-white)!important}.dark-mode .course-area-1 .edu-course-widget{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .course-area-4{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .course-area-7:before{filter:brightness(0) saturate(100%) invert(4%) sepia(22%) saturate(4302%) hue-rotate(194deg) brightness(91%) contrast(101%)}.dark-mode .course-area-7 .shape-group li img{opacity:.65}.dark-mode .pv-course-details-area{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .pv-course-details-area:before{display:none}.dark-mode .pv-courses-demo .shape-group li.shape-2 img{filter:opacity(.06)}.dark-mode .course-sidebar-2{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .course-sidebar-3 .edu-course-widget{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .course-sidebar-3 .edu-course-widget.widget-course-summery .thumbnail .play-btn{background-color:#fff;background-color:var(--color-white)}.dark-mode .course-sidebar-3 .edu-course-widget.widget-course-summery .thumbnail .play-btn:hover{color:#f5a623;color:var(--color-secondary)}.dark-mode .course-sidebar-3 .edu-blog-widget,.dark-mode .edu-course-widget{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .course-curriculam .course-lesson ul li{background-color:#111822;background-color:var(--dark-color-bg-body);color:#fff;color:var(--color-white)}.dark-mode .course-curriculam .course-lesson ul li:hover{color:#4a90e2;color:var(--color-primary)}.dark-mode .course-review .rating-box{background:#1c242f;background:var(--bg-color-2)}.dark-mode .course-review .review-wrapper .progress{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .course-review .comment-form-area .rating-icon .rating i{color:grey;color:var(--dark-footer-text)}.dark-mode .course-details-area .entry-content .thumbnail .video-play-btn{background-color:#fff;background-color:var(--color-white);color:#f5a623;color:var(--color-secondary)}.dark-mode .course-details-area .entry-content .thumbnail .video-play-btn:hover{background-color:#f5a623;background-color:var(--color-secondary);color:#fff;color:var(--color-white)}.dark-mode .course-details-content .course-enroll-box{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .course-details-content .entry-content .course-meta li:after{background-color:#404040;background-color:var(--color-extra10)}.dark-mode .tag-list a:Hover{color:#fff;color:var(--color-white)}.dark-mode .edu-blog-widget.widget-action .inner{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .edu-blog-widget.widget-action .inner:before{background-image:url(/images/others/dark-shape-21.png)}.dark-mode .course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .complete-text span,.dark-mode .course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .title{color:#fff;color:var(--color-white)}.dark-mode .course-details-3 .course-curriculam .edu-accordion .course-lesson .reading-status .complete-text span:after{background-color:#fff;background-color:var(--color-white)}.dark-mode .course-details-3 .course-curriculam .edu-accordion .accordion-item{border:1px solid #4a4a4a;border:1px solid var(--dark-color-border)}.dark-mode .course-details-3 .course-curriculam .edu-accordion .accordion-item .accordion-button:after{color:#fff;color:var(--color-white)}.dark-mode .edu-campus-area .campus-image-gallery .shape-2 img{filter:opacity(.06)}.dark-mode .edu-campus-area .campus-content{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}@media only screen and (max-width:575px){.dark-mode .edu-campus-area .campus-content{background-color:transparent}}.dark-mode .edu-campus-area .campus-content .shape-5 span{opacity:.1}.dark-mode .footer-lighten .copyright-area{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .footer-lighten .copyright-area a{color:#4a90e2;color:var(--color-primary)}.dark-mode .footer-lighten a,.dark-mode .footer-lighten li,.dark-mode .footer-lighten p{color:#8b572a;color:var(--color-title)}.dark-mode .edu-event .inner .content{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .event-area-3:before{filter:brightness(0) saturate(100%) invert(4%) sepia(22%) saturate(4302%) hue-rotate(194deg) brightness(91%) contrast(101%)}.dark-mode .event-area-3 .edu-event-list{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .title{color:#fff;color:var(--color-white)}.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .title a:hover{color:hsla(0,0%,100%,.8)}.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .event-location,.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .event-location i,.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .event-meta li,.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .event-meta li i,.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content p{color:#fff;color:var(--color-white)}.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .edu-btn{background-color:#fff;background-color:var(--color-white);color:#8b572a;color:var(--color-heading)}.dark-mode .event-area-3 .edu-event-list:hover:not(.event-list-2) .content .edu-btn:hover{color:#fff;color:var(--color-white)}.dark-mode .event-area-3 .edu-event-list.bg-style-primary .content .edu-btn:hover{background-color:#fff;background-color:var(--color-white);color:#000;color:var(--color-black)}.dark-mode .event-area-3 .shape-group li img{opacity:.65}.dark-mode .edu-event-list{background-color:transparent}.dark-mode .features-box .content p{color:#8b572a;color:var(--color-title)}.dark-mode .features-box.color-extra02-style:hover .icon,.dark-mode .features-box.color-extra03-style:hover .icon,.dark-mode .features-box.color-extra04-style:hover .icon,.dark-mode .features-box.color-extra05-style:hover .icon,.dark-mode .features-box.color-extra08-style:hover .icon,.dark-mode .features-box.color-primary-style:hover .icon,.dark-mode .features-box.color-secondary-style:hover .icon,.dark-mode .features-box.features-style-2 .content .title,.dark-mode .features-box.features-style-4:hover .icon{color:#fff;color:var(--color-white)}.dark-mode .features-area-1 .features-box{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}.dark-mode .features-area-1 .features-box:hover .icon svg path{stroke:#fff;stroke:var(--color-white)}.dark-mode .features-area-1 .features-box .content p{color:#8b572a;color:var(--color-title)}.dark-mode .features-area-3 .features-grid-wrap{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}.dark-mode .faq-accordion .accordion-item{background-color:#1c242f;background-color:var(--bg-color-2);color:#fff;color:var(--color-white)}.dark-mode .faq-accordion .accordion-item .accordion-button,.dark-mode .faq-accordion .accordion-item .accordion-button.collapsed,.dark-mode .faq-accordion .accordion-item .accordion-button.collapsed:before,.dark-mode .faq-accordion .accordion-item .accordion-button:before{color:#fff;color:var(--color-white)}.dark-mode .faq-accordion .accordion-item .accordion-body{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-faq-gallery .shape-group li.shape-4 img{filter:opacity(.06)}.dark-mode .faq-style-2{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .faq-style-2:before{display:none}.dark-mode .faq-style-2 .edu-faq-gallery .shape-group .shape-3 img,.dark-mode .faq-style-2 .edu-faq-gallery .shape-group .shape-5 img{filter:opacity(.08)}.dark-mode .faq-style-2 .edu-faq-gallery .shape-group .shape-6 img{filter:brightness(0) saturate(100%) invert(99%) sepia(0) saturate(2%) hue-rotate(310deg) brightness(54%) contrast(36%)}.dark-mode .faq-style-3 .edu-faq-gallery .thumbnail-1{background-color:#fff;background-color:var(--color-white)}.dark-mode .faq-style-4 .faq-accordion .accordion-item .accordion-button,.dark-mode .faq-style-4 .faq-accordion .accordion-item .accordion-button:before{color:#fff;color:var(--color-white)}.dark-mode .faq-page-tab-content:after{filter:brightness(0) saturate(100%) invert(96%) sepia(0) saturate(7500%) hue-rotate(155deg) brightness(104%) contrast(101%)}.dark-mode .edu-footer .footer-dark .widget-title{color:#fff;color:var(--color-white)}.dark-mode .edu-footer.footer-style-1{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-footer.footer-style-1 .footer-top .edu-footer-widget .logo a img.logo-light{display:none}.dark-mode .edu-footer.footer-style-1 .footer-top .edu-footer-widget .logo a img.logo-dark{display:inline-block}.dark-mode .edu-footer.footer-style-1 .copyright-area{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .edu-footer.footer-style-2{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-footer.footer-style-2 .footer-top .edu-footer-widget .logo a img.logo-light{display:inline-block}.dark-mode .edu-footer.footer-style-3{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .edu-footer.footer-style-3 .edu-footer-widget .logo a img.logo-light{display:inline-block}.dark-mode .edu-footer.footer-style-3 .edu-footer-widget .widget-title{color:#fff;color:var(--color-white)}.dark-mode .edu-footer.footer-style-6{background:#111822;background:var(--dark-color-bg-body)}.dark-mode .edu-footer.footer-style-6 .footer-top .edu-footer-widget .widget-title{color:#fff;color:var(--color-white)}.dark-mode .edu-footer .edu-footer-widget .footer-link li a{color:#8b572a;color:var(--color-title)}.dark-mode .edu-footer .edu-footer-widget .footer-link li a:hover{color:#4a90e2;color:var(--color-primary)}.dark-mode .edu-footer .edu-footer-widget .logo a img.logo-light{display:none}.dark-mode .edu-footer .edu-footer-widget .logo a img.logo-dark{display:inline-block}.dark-mode .edu-footer .edu-footer-widget .input-group .form-control{background-color:#4a4a4a;background-color:var(--dark-color-border);color:#fff;color:var(--color-white)}.dark-mode .edu-footer .edu-footer-widget .inner .input-group .btn-secondary{color:#fff;color:var(--color-white)}.dark-mode .edu-footer.footer-kindergarten .copyright-area:before{filter:brightness(0) saturate(100%) invert(14%) sepia(8%) saturate(2142%) hue-rotate(173deg) brightness(95%) contrast(89%)}.dark-mode .footer-for-kitchen .edu-footer-widget .inner .description,.dark-mode .footer-for-kitchen .edu-footer-widget .inner .widget-information ul li,.dark-mode .footer-for-yoga .edu-footer-widget .inner .description,.dark-mode .footer-for-yoga .edu-footer-widget .inner .widget-information ul li{color:#8b572a;color:var(--color-title)}.dark-mode .footer-for-kitchen .edu-footer-widget .inner .widget-information ul li span,.dark-mode .footer-for-yoga .edu-footer-widget .inner .widget-information ul li span{color:#fff;color:var(--color-white)}.dark-mode .footer-for-kitchen .edu-footer-widget .inner .widget-information ul li a,.dark-mode .footer-for-yoga .edu-footer-widget .inner .widget-information ul li a{color:#8b572a;color:var(--color-title)}.dark-mode .footer-for-kitchen .edu-footer-widget .inner .widget-information ul li a:hover,.dark-mode .footer-for-yoga .edu-footer-widget .inner .widget-information ul li a:hover{color:#4a90e2;color:var(--color-primary)}.dark-mode .footer-for-kitchen .edu-footer-widget .inner li a,.dark-mode .footer-for-yoga .edu-footer-widget .inner li a{color:#8b572a;color:var(--color-title)}.dark-mode .footer-for-kitchen .edu-footer-widget .inner li a:hover,.dark-mode .footer-for-yoga .edu-footer-widget .inner li a:hover{color:#4a90e2;color:var(--color-primary)}.dark-mode .footer-for-kitchen .copyright-area,.dark-mode .footer-for-yoga .copyright-area{background-color:#111822;background-color:var(--dark-color-bg-body);border-top:1px solid #262626}.dark-mode .header-action .header-btn a,.dark-mode .header-action li.icon a .count,.dark-mode .header-action li.icon a.cart-icon,.dark-mode .header-action li.icon a.search-trigger,.dark-mode .header-action li.icon button.search-trigger{color:#fff;color:var(--color-white)}.dark-mode .header-action .search-bar .input-group{border:1px solid #333a44}.dark-mode .header-action .search-bar .input-group .form-control{background:transparent}.dark-mode .header-style-2 .header-top .header-info li:after{background-color:#30302f}.dark-mode .header-style-2 .header-top .header-info li a{color:#fff;color:var(--color-white)}.dark-mode .header-style-2 .header-mainmenu .header-right:after{background-color:#4a4a4a;background-color:var(--dark-color-border)}.dark-mode .header-style-3 .header-top-bar{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .header-style-3 .header-mainmenu .header-right:after{background-color:#525151;background-color:var(--color-extra09)}.dark-mode .header-style-3 .header-top .header-info li a:hover{color:#f5a623;color:var(--color-secondary)}.dark-mode .header-style-3 .header-top .header-info li a.edu-btn:hover{color:#fff;color:var(--color-white)}.dark-mode .edu-header.header-style-4:after,.dark-mode .edu-header.header-style-4:before{filter:brightness(0) saturate(100%) invert(4%) sepia(55%) saturate(1345%) hue-rotate(186deg) brightness(89%) contrast(95%)}.dark-mode .edu-header.header-style-4 .header-mainmenu{background-color:transparent}.dark-mode .edu-header.header-style-4 .header-mainmenu.edu-sticky{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-header.header-style-4 .header-mainmenu .header-navbar .header-right .header-action .search-bar .input-group input[type=text]{background:transparent}.dark-mode .edu-header .header-mainmenu{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-header.pv-header-style .header-mainmenu{background-color:transparent}.dark-mode .edu-header.pv-header-style .header-mainmenu.edu-sticky{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-header .header-category{border-left:1.5px solid #4a4a4a;border-left:1.5px solid var(--dark-color-border);border-right:1.5px solid #4a4a4a;border-right:1.5px solid var(--dark-color-border)}.dark-mode .edu-header .header-brand img.logo-light{display:none}.dark-mode .edu-header .header-brand img.logo-dark{display:inline-block}.dark-mode .header-top-bar{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .header-top .header-info li a,.dark-mode .header-top .header-notify{color:#fff;color:var(--color-white)}.dark-mode .header-top .header-info li a:hover{color:#f5a623;color:var(--color-secondary)}.dark-mode .header-top .header-info .social-icon a i,.dark-mode .header-top .header-info li.header-btn .edu-btn,.dark-mode .header-top .header-info li.header-btn .edu-btn i,.dark-mode .popup-mobile-menu .mainmenu li a{color:#fff;color:var(--color-white)}.dark-mode .popup-mobile-menu .mainmenu li+li{border-top:1px solid #4a4a4a;border-top:1px solid var(--dark-color-border)}.dark-mode .popup-mobile-menu .inner{background:#111822;background:var(--dark-color-bg-body)}.dark-mode .popup-mobile-menu .inner .header-top{border-bottom:1px solid #4a4a4a;border-bottom:1px solid var(--dark-color-border)}.dark-mode .popup-mobile-menu .inner .header-top .logo a img.logo-light{display:none}.dark-mode .popup-mobile-menu .inner .header-top .logo a img.logo-dark{display:inline-block}.dark-mode .popup-mobile-menu .inner .header-top .close-menu .close-button{background:#4a4a4a;background:var(--dark-color-border)}.dark-mode .mainmenu-nav .mainmenu>li>a{color:#fff;color:var(--color-white)}.dark-mode .mainmenu-nav .mainmenu li.has-droupdown .submenu{background-color:#02060d}.dark-mode .mainmenu-nav .mainmenu li.has-droupdown .submenu li a{color:#8b572a;color:var(--color-title)}.dark-mode .mainmenu-nav .mainmenu li.has-droupdown ul{box-shadow:0 10px 50px 0 rgba(26,46,85,.1);box-shadow:var(--shadow-darker)}.dark-mode .mainmenu-nav .mainmenu li.has-droupdown .mega-sub-menu-01{box-shadow:none}.dark-mode .mainmenu-nav .mainmenu li ul.mega-menu{background-color:#02060d}.dark-mode .mainmenu-nav .mainmenu li ul.mega-menu>li{border-right:1px solid #191d22}.dark-mode .edu-search-popup .content-wrap{background-color:#282f3a}.dark-mode .edu-search-popup .content-wrap .search-form{border-bottom:1px solid #646465}.dark-mode .edu-search-popup .site-logo img.logo-light{display:none}.dark-mode .edu-search-popup .site-logo img.logo-dark{display:inline-block}.dark-mode .edu-search-popup .inner .search-form input{background:transparent}.dark-mode .hero-banner .banner-thumbnail .instructor-info .inner{background-color:#fff;background-color:var(--color-white);box-shadow:0 20px 40px 0 rgba(0,0,0,.1)}.dark-mode .hero-banner .banner-thumbnail .instructor-info .inner .media .content,.dark-mode .hero-banner .banner-thumbnail .instructor-info .inner .title{color:#000;color:var(--color-black)}.dark-mode .hero-banner.presentation-hero-style:before{background-image:url(/images/bg/dark-bg-image-27.png)}.dark-mode .hero-banner.presentation-hero-style .banner-content:after,.dark-mode .hero-banner.presentation-hero-style .banner-content:before{border:1px solid #242424}.dark-mode .hero-banner.hero-style-1:before{filter:opacity(.1)}.dark-mode .hero-banner.hero-style-2:before{filter:brightness(0) saturate(100%) invert(4%) sepia(14%) saturate(3862%) hue-rotate(182deg) brightness(105%) contrast(102%)}.dark-mode .hero-banner.hero-style-3 .banner-content .title,.dark-mode .hero-banner.hero-style-3 .banner-content p{color:#fff;color:var(--color-white)}.dark-mode .hero-banner.hero-style-4{background:#020b17;background:var(--dark-bg-color);-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}.dark-mode .hero-banner.hero-style-4 .scroll-down-btn{bottom:-100px}@media only screen and (max-width:767px){.dark-mode .hero-banner.hero-style-4 .scroll-down-btn{bottom:-10px}}.dark-mode .hero-banner.hero-style-4 .scroll-down-btn .scroll-btn{background-color:hsla(0,0%,100%,.05)}.dark-mode .hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:after,.dark-mode .hero-banner.hero-style-4 .scroll-down-btn .scroll-btn:before{border:1px solid hsla(0,0%,100%,.05)}.dark-mode .hero-banner.hero-style-4:before{display:none}.dark-mode .hero-banner.hero-style-4 .shape-group li.shape-1 img{filter:opacity(.06)}.dark-mode .hero-banner.hero-style-4 .shape-group li.shape-7 img{filter:opacity(.05)}.dark-mode .hero-banner.hero-style-4 .shape-group li.shape-3 img,.dark-mode .hero-banner.hero-style-4 .shape-group li.shape-5 img{filter:brightness(0) saturate(100%) invert(99%) sepia(3%) saturate(0) hue-rotate(313deg) brightness(59%) contrast(36%)}.dark-mode .hero-banner.hero-style-4 .banner-gallery .online-support .inner .content .title a{color:#000;color:var(--color-black)}.dark-mode .hero-banner.hero-style-5 .banner-thumbnail .thumbnail{background-color:#fff;background-color:var(--color-white)}.dark-mode .hero-banner.hero-style-5 .banner-thumbnail .shape-group .shape-1 img,.dark-mode .hero-banner.hero-style-6 .banner-thumbnail .shape-group .shape-1 img{filter:opacity(.08)}.dark-mode .hero-banner.hero-style-7{background:#020b17;background:var(--dark-bg-color)}.dark-mode .hero-banner.hero-style-7 .shape-group{z-index:1}.dark-mode .hero-banner.hero-style-7 .shape-group li img{opacity:.65}.dark-mode .instagram-grid a:after{background-color:#000;background-color:var(--color-black)}.dark-mode .instagram-grid a .user-info{color:#fff;color:var(--color-white)}.dark-mode .pv-shop-area{background-color:#020b17;background-color:var(--dark-bg-color)}.dark-mode .pv-shop-area:before{display:none}.dark-mode .pv-inner-page-area{background:#020b17;background:var(--dark-bg-color)}.dark-mode .pv-inner-page-area:before{display:none}.dark-mode .pv-cta-area{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .pv-cta-area:before{background-image:url(/images/bg/dark-bg-imgae-26.png)}.dark-mode .pv-cta-area .cta-content .title,.dark-mode .team-share-info li a{color:#fff;color:var(--color-white)}.dark-mode .team-share-info li a{border:2px solid #fff;border:2px solid var(--color-white)}.dark-mode .team-share-info li a:hover{background:#fff;background:var(--color-white);color:#4a90e2;color:var(--color-primary)}.dark-mode .edu-team-grid.team-style-1:hover .team-share-info li:first-child a{background-color:#fff;background-color:var(--color-white);border-color:transparent}.dark-mode .edu-team-grid.team-style-2:after{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}.dark-mode .edu-team-grid.team-style-3 .content .title a{color:#8b572a;color:var(--color-heading)}.dark-mode .edu-team-grid.team-style-4 .content .designation,.dark-mode .edu-team-grid.team-style-4 .content .title{background-color:#1c242f;background-color:var(--bg-color-2);color:#fff;color:var(--color-white)}.dark-mode .edu-team-grid.team-style-5 .content{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}.dark-mode .edu-team-grid.team-style-5 .content .title{color:#fff;color:var(--color-white)}.dark-mode .team-area-6 .shape-group .shape-1 img,.dark-mode .team-area-6 .shape-group .shape-2 img,.dark-mode .team-area-6 .shape-group .shape-3 img{filter:brightness(0) saturate(100%) invert(96%) sepia(0) saturate(7500%) hue-rotate(155deg) brightness(104%) contrast(101%)}.dark-mode .edu-team-details-area .team-details-content .main-info .team-meta li:after{background-color:#6a6a6a}.dark-mode .testimonial-grid{background-color:#1c242f;background-color:var(--bg-color-2);box-shadow:none}.dark-mode .testimonial-grid p{color:#8b572a;color:var(--color-title)}.dark-mode .testimonial-grid .thumbnail .qoute-icon{border:4px solid #fff;border:4px solid var(--color-white);color:#fff;color:var(--color-white)}.dark-mode .testimonial-area-2 .testimonial-slide .content{box-shadow:none}.dark-mode .testimonial-area-2 .shape-group .shape-1 img{filter:opacity(.06)}.dark-mode .testimonial-area-2.edu-section-gap .shape-group .shape-3 img{filter:brightness(0) saturate(100%) invert(96%) sepia(0) saturate(7500%) hue-rotate(155deg) brightness(104%) contrast(101%)}.dark-mode .testimonial-area-3 .shape-group li.shape-5{bottom:150px}.dark-mode .testimonial-area-3 .shape-group li.shape-5 img{filter:brightness(0) saturate(100%) invert(100%) sepia(0) saturate(7494%) hue-rotate(344deg) brightness(100%) contrast(104%)}.dark-mode .testimonial-slide .content{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .testimonial-slide .content p{color:#8b572a;color:var(--color-title)}.dark-mode .testimonial-area-4 .shape-group li.shape-2 img{filter:brightness(0) saturate(100%) invert(96%) sepia(0) saturate(7500%) hue-rotate(155deg) brightness(104%) contrast(101%)}.dark-mode .testimonial-area-4 .slick-arrow-nav .slick-arrow:hover{color:#fff;color:var(--color-white)}.dark-mode .testimonial-area-6:before{background:#020b17;background:var(--dark-bg-color)}.dark-mode .testimonial-area-6 .testimonial-slide .content{background-color:transparent}.dark-mode .testimonial-area-6 .shape-group li.shape-3 span{border:1px solid #404040;border:1px solid var(--color-extra10)}.dark-mode .testimonial-coverflow .testimonial-grid:before{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .video-area-1:before{filter:brightness(0) saturate(100%) invert(4%) sepia(83%) saturate(1113%) hue-rotate(182deg) brightness(92%) contrast(101%)}.dark-mode .video-banner-content .title,.dark-mode .video-banner-content .video-play-btn i,.dark-mode .video-gallery .thumbnail .video-play-btn i{color:#fff;color:var(--color-white)}.dark-mode .video-gallery .content{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .why-choose-area-1 .thumbnail.thumbnail-2 img{background-color:#fff;background-color:var(--color-white)}.dark-mode .why-choose-area-1 .why-choose-content .features-list .features-box.color-extra05-style:hover .icon,.dark-mode .why-choose-area-1 .why-choose-content .features-list .features-box.color-primary-style:hover .icon,.dark-mode .why-choose-area-1 .why-choose-content .features-list .features-box.color-secondary-style:hover .icon{color:#fff;color:var(--color-white)}.dark-mode .why-choose-area-2{background-color:#111822;background-color:var(--dark-color-bg-body)}.dark-mode .why-choose-area-4 .shape-group li.shape-2 span{border:1px solid #404040;border:1px solid var(--color-extra10)}.dark-mode .why-choose-box-3.features-box .icon{color:#fff;color:var(--color-white)}.dark-mode .why-choose-box-3.features-box .content{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .coming-soon-page-area{background:#020b17;background:var(--dark-bg-color)}.dark-mode .coming-soon-page-area:before{filter:opacity(.2)}.dark-mode .coming-soon-page-area .coming-soon-content .title{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.dark-mode .coming-soon-page-area .coming-soon-content .input-group{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .coming-soon-page-area .coming-countdown .countdown-number,.dark-mode .coming-soon-page-area .coming-countdown .countdown-section:after,.dark-mode .coming-soon-page-area .coming-soon-content .input-group .form-control{color:#fff;color:var(--color-white)}.dark-mode .coming-soon-page-area .shape-group li.shape-1 img,.dark-mode .coming-soon-page-area .shape-group li.shape-2 img{filter:opacity(.5)}.dark-mode .edu-gallery-grid .zoom-icon{background-color:#fff;background-color:var(--color-white)}.dark-mode .edu-pagination li.active a{color:#fff;color:var(--color-white)}.dark-mode .section-title .pre-title,.dark-mode .section-title p{color:#8b572a;color:var(--color-title)}.dark-mode .section-title-flex .left-content:after{background-color:#404040;background-color:var(--color-extra10)}.dark-mode .social-share li a,.dark-mode .social-share li a:hover{color:#fff;color:var(--color-white)}.dark-mode .pricing-table{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .pricing-table .pricing-header{border-bottom:1px solid #4a4a4a!important;border-bottom:1px solid var(--dark-color-border)!important}.dark-mode .login-form-box{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode select{background:url(/images/icons/Down-Arrow.png) 88% no-repeat transparent;border:1px solid #4a4a4a;border:1px solid var(--dark-color-border)}.dark-mode .edu-product .inner>.thumbnail .product-hover-info ul li a{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .edu-product .inner>.thumbnail .product-hover-info ul li a:hover,.dark-mode .pro-qty input,.dark-mode .product-details-area .content .product-action .add-to-cart-btn .wishlist-btn:hover i{color:#fff;color:var(--color-white)}.dark-mode .cart-table td,.dark-mode .cart-table th{border-bottom:1px solid #4a4a4a!important;border-bottom:1px solid var(--dark-color-border)!important}.dark-mode .cart-table tbody td{color:#8b572a;color:var(--color-title)}.dark-mode .cart-update-btn-area .product-cupon{border:1px solid #4a4a4a;border:1px solid var(--dark-color-border)}.dark-mode .cart-update-btn-area .product-cupon .submit-btn{color:#fff;color:var(--color-white)}.dark-mode .cart-update-btn-area input[type=text]{background-color:transparent}.dark-mode .cart-update-btn-area .update-btn .edu-btn.disabled{opacity:1}.dark-mode .order-summery tbody td{border-color:#4a4a4a!important;border-color:var(--dark-color-border)!important}.dark-mode .checkout-billing .form-group input,.dark-mode .checkout-billing .form-group textarea{background-color:transparent;border-color:#4a4a4a;border-color:var(--dark-color-border)}.dark-mode .checkout-billing .form-group select{background:url(/images/icons/Down-Arrow.png) 88% no-repeat transparent}.dark-mode .order-payment .payment-method{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .order-payment .form-group{border-bottom:1px solid #4a4a4a;border-bottom:1px solid var(--dark-color-border)}.dark-mode .order-payment .form-group:last-child{border-bottom:none}.dark-mode .cls-1{fill:#fff;fill:var(--color-white)}.dark-mode .edu-accordion .accordion-item .accordion-button{background-color:#111822;background-color:var(--dark-color-bg-body);color:#fff;color:var(--color-white)}.dark-mode .contact-form.form-style-2,.dark-mode blockquote{background-color:#1c242f;background-color:var(--bg-color-2)}.dark-mode .contact-form.form-style-2{box-shadow:none}.dark-mode .event-details .details-content .event-meta li:after{background-color:#4a4a4a;background-color:var(--dark-color-border)}.dark-mode .error-page-area .shape-group .shape-1 img{filter:brightness(0) saturate(100%) invert(96%) sepia(0) saturate(7500%) hue-rotate(155deg) brightness(104%) contrast(101%)}.dark-mode .course-overview ul li,.dark-mode .privacy-policy ul li{color:#8b572a;color:var(--color-title)}.dark-mode .product-description-content .comment-form .form-group input,.dark-mode .product-description-content .comment-form .form-group textarea{background:transparent}.dark-mode .comment-form .form-group input,.dark-mode .comment-form .form-group textarea{background:transparent;border:1px solid #4a4a4a;border:1px solid var(--dark-color-border);box-shadow:none}.dark-mode .comment-form .form-group .edu-form-check label:before{background-color:transparent}.dark-mode .wishlist-btn{background:transparent}.dark-mode .wishlist-btn.btn-outline-dark{border:1px solid #4a4a4a;border:1px solid var(--dark-color-border)}.dark-mode .wishlist-btn.btn-outline-dark:hover{background-color:#f5a623;background-color:var(--color-secondary);border-color:#f5a623;border-color:var(--color-secondary);color:#fff;color:var(--color-white)}.dark-mode .btn-icon-round,.dark-mode .btn-icon-round:hover,.dark-mode .isotop-button button.is-checked,.dark-mode .isotop-button button:hover,.dark-mode .wishlist-btn i,.dark-mode a.edu-btn.btn-border:hover,.dark-mode a.edu-btn.btn-secondary,.dark-mode a.edu-btn.btn-secondary:hover{color:#fff;color:var(--color-white)}.dark-mode input[type=email],.dark-mode input[type=number],.dark-mode input[type=password],.dark-mode input[type=tel],.dark-mode input[type=text],.dark-mode textarea{background-color:transparent}.dark-mode .contact-form-area input[type=email],.dark-mode .contact-form-area input[type=number],.dark-mode .contact-form-area input[type=password],.dark-mode .contact-form-area input[type=tel],.dark-mode .contact-form-area input[type=text],.dark-mode .contact-form-area textarea{border:1px solid #4a4a4a;border:1px solid var(--dark-color-border)}.dark-mode input[type=checkbox]~label,.dark-mode input[type=radio]~label{color:#8b572a;color:var(--color-title)}.dark-mode input[type=checkbox]~label:before,.dark-mode input[type=radio]~label:before{border:1px solid #4a4a4a;border:1px solid var(--dark-color-border);color:#fff;color:var(--color-white)}.dark-mode input[type=checkbox]~label:after,.dark-mode input[type=radio]~label:after{color:#fff;color:var(--color-white)}.dark-mode input[type=checkbox]:checked~label:before,.dark-mode input[type=radio]:checked~label:before{background-color:#4a90e2;background-color:var(--color-primary);border-color:#4a90e2;border-color:var(--color-primary)}.dark-mode .login-form-box .chekbox-area .edu-form-check label:before{background-color:transparent}.dark-mode .swiper-navigation .swiper-btn-nxt,.dark-mode .swiper-navigation .swiper-btn-prv{background-color:transparent;color:#fff;color:var(--color-white)}.dark-mode .swiper-navigation .swiper-btn-nxt:hover,.dark-mode .swiper-navigation .swiper-btn-prv:hover{color:#fff;color:var(--color-white)}.dark-mode .blog-style-4 .swiper-navigation .swiper-btn-nxt,.dark-mode .blog-style-4 .swiper-navigation .swiper-btn-prv{background-color:#1c242f;background-color:var(--bg-color-2);color:#fff;color:var(--color-white)}.dark-mode .blog-style-4 .swiper-navigation .swiper-btn-nxt:hover,.dark-mode .blog-style-4 .swiper-navigation .swiper-btn-prv:hover{color:#fff;color:var(--color-white)}.edublink-mobile-menu.mainmenu li{position:relative}.edublink-mobile-menu.mainmenu li:not(:last-child){margin-bottom:5px}.edublink-mobile-menu.mainmenu li a.scrollactive-item.is-active{color:#4a90e2;color:var(--color-primary)}.edublink-mobile-menu.mainmenu .submenu-wrapper{display:none;list-style:none;max-width:100%;padding:0 0 0 14px}.edublink-mobile-menu.mainmenu .submenu-wrapper li{margin-bottom:5px}.edublink-mobile-menu.mainmenu .submenu-wrapper li .submenu-wrapper li a{font-weight:400;line-height:25px}.edublink-mobile-menu.mainmenu .submenu-wrapper.active{display:block}.edublink-mobile-menu.mainmenu .submenu-toggle{background-color:#f3f3f3;cursor:pointer;display:inline-block;font-size:22px;height:30px;position:absolute;right:0;text-align:center;top:9px;width:30px}.edublink-mobile-menu.mainmenu .submenu-toggle i{line-height:32px;transition:.3s}.edublink-mobile-menu.mainmenu .submenu-toggle i:before{content:\"\";font-family:\"remixicon\"}.mainmenu-nav .mainmenu li.has-droupdown .submenu li a.nuxt-link-exact-active,.mainmenu-nav a.scrollactive-item.is-active{color:#4a90e2;color:var(--color-primary)}.header-action li.icon button.search-trigger{color:#8b572a;color:var(--color-heading);font-size:22px;position:relative}.dark-mode .mainmenu-nav .mainmenu li.has-droupdown .mega-menu .submenu{box-shadow:inherit!important}.dark-mode .header-action li.icon.light-dark-icon .edublink-vue-light-dark-switcher svg{color:#fff;color:var(--color-white)}.dark-mode .header-action li.icon.light-dark-icon .edublink-vue-light-dark-switcher svg path{color:#fff;color:var(--color-white);fill:#fff;fill:var(--color-white)}.dark-mode .edublink-vue-mobile-popup-menu .inner{background:#111822;background:var(--dark-color-bg-body)}.dark-mode .edublink-vue-mobile-popup-menu .mainmenu li a{color:#fff;color:var(--color-white)}.dark-mode .edublink-vue-mobile-popup-menu .mainmenu li a:hover{color:#4a90e2;color:var(--color-primary)}.dark-mode .edublink-vue-mobile-popup-menu .edublink-mobile-menu.mainmenu .submenu-toggle{background-color:#1c242f;background-color:var(--bg-color-2);color:#fff}.dark-mode .edublink-vue-mobile-popup-menu .inner .header-top .close-menu .close-button{background:#4a4a4a;background:var(--dark-color-border)}.dark-mode .edublink-vue-mobile-popup-menu .inner .header-top .close-menu .close-button:hover{background:#4a90e2;background:var(--color-primary);color:#fff;color:var(--color-white)}.search-trigger{background:transparent;border:0;margin:0;padding:0}.swiper-pagination{display:block;line-height:1;margin-top:25px;position:static;transform:translateZ(0);transition:opacity .3s}.swiper-pagination .swiper-pagination-bullet{background-color:rgba(26,182,157,.3);border-radius:50%;cursor:pointer;display:inline-block;height:7px;margin:0 8px!important;opacity:1;outline:none;width:7px}.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{background-color:#1ab69d}@media only screen and (max-width:767px){[data-aos^=fade]{opacity:1!important;transform:none!important}}.edu-vue-count-suffix{margin-left:-8px}a.play-btn,a.video-play-btn.video-popup-activation{cursor:pointer}.edu-course-six-each-item:not(:last-child){margin-bottom:50px}.edu-course-six-each-item .edu-course.course-style-8{margin-bottom:0}.edu-course .hover-content-aside{width:350px}@media only screen and (max-width:1880px){.course-style-3-third-item .edu-course .hover-content-aside{left:auto;padding-left:0;padding-right:12px;right:100%}.course-style-3-third-item .edu-course .hover-content-aside .content:before{left:auto;right:-12px;transform:scaleX(-1)}}@media only screen and (max-width:767px){.course-style-3-third-item .edu-course .hover-content-aside{display:none}}@media only screen and (max-width:1199px){.course-style-3-third-item.course-style-3-even .hover-content-aside{left:auto;padding-left:0;padding-right:12px;right:100%}.course-style-3-third-item.course-style-3-even .hover-content-aside .content:before{left:auto;right:-12px;transform:scaleX(-1)}}@media only screen and (max-width:767px){.course-style-3-third-item.course-style-3-even .hover-content-aside{display:none}}@media only screen and (max-width:1199px){.course-style-3-third-item.course-style-3-odd .edu-course .hover-content-aside{left:100%;padding-left:12px;padding-right:0;right:inherit}.course-style-3-third-item.course-style-3-odd .edu-course .hover-content-aside .content:before{left:-13px;right:inherit;transform:translateY(-50%)}}@media only screen and (max-width:767px){.course-style-3-third-item.course-style-3-odd .edu-course .hover-content-aside{display:none}}@media only screen and (max-width:1199px){.course-style-3-even .hover-content-aside{left:auto;padding-left:0;padding-right:12px;right:100%}.course-style-3-even .hover-content-aside .content:before{left:auto;right:-12px;transform:scaleX(-1)}}@media only screen and (max-width:767px){.course-style-3-even .hover-content-aside,.course-style-3-odd .hover-content-aside{display:none}}.edublink-vue-gallery-masonry .edu-gallery-grid{width:100%}.masonry-blog-items .masonry-item{margin-bottom:65px;padding:0 15px}.blog-style-1 .title a,.blog-style-2 .title a{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.edu-event.event-style-1{box-shadow:none}.edu-event-list .event-list-2 .thumbnail img{height:250px;-o-object-fit:cover;object-fit:cover;width:320px}.event-details .details-content .event-meta li a{color:#8b572a;color:var(--color-heading)}.event-details .details-content .event-meta li a:hover{color:#4a90e2;color:var(--color-primary)}.edublink-vue-product-btn button{background:transparent;border:0;margin:0;padding:0}.checkout-page-vue-coupon-form-toggle{cursor:pointer}.checkout-page-vue-coupon-form.collapsing{transition:height .05s ease}.checkout-page-vue-coupon-form{margin-bottom:30px;margin-top:10px}.edublink-vue-pagination{display:flex;justify-content:center;margin-top:70px;text-align:center}.edublink-vue-pagination.mt--0{margin-top:0}.edublink-vue-pagination.mt--70{margin-top:70px}.edublink-vue-pagination.align-left{justify-content:flex-start}@media only screen and (max-width:767px){.edublink-vue-pagination{margin-top:40px}.edublink-vue-pagination.mt--0{margin-top:0}}.edublink-vue-pagination .pagination{margin-bottom:0;padding-bottom:0}.edublink-vue-pagination .page-item{display:inline-block;margin:0 7px;z-index:0}.edublink-vue-pagination .page-item .page-link{border:none;border-radius:100%;box-shadow:0 0 12px .8px rgba(0,0,0,.1);color:#000;color:var(--color-black);cursor:pointer;display:block;font-size:18px;font-weight:600;height:50px;line-height:50px;padding:0;text-align:center;width:50px}.edublink-vue-pagination .page-item .page-link:hover{color:#fff;color:var(--color-white)}.edublink-vue-pagination .page-item.active .page-link,.edublink-vue-pagination .page-item:hover .page-link{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);color:#fff;color:var(--color-white)}.edublink-vue-pagination .page-item.active .page-link{cursor:auto}.edublink-vue-pagination .page-item.disabled .page-link{cursor:not-allowed}.edublink-vue-pagination .page-item.disabled:hover .page-link{background:linear-gradient(-90deg,#50e3c2,#4a90e2);background:var(--gradient-primary);color:#fff;color:var(--color-white)}.edublink-vue-pagination .VuePagination__count,.edublink-vue-pagination .VuePagination__pagination-item-next-chunk,.edublink-vue-pagination .VuePagination__pagination-item-prev-chunk,.edublink-vue-pagination .page-item:first-child,.edublink-vue-pagination .page-item:last-child{display:none}.edublink-vue-pagination .VuePagination__pagination-item-prev-page{position:relative}.edublink-vue-pagination .VuePagination__pagination-item-prev-page :before{content:\"\";font-family:\"icomoon\"!important}.edublink-vue-pagination .VuePagination__pagination-item-next-page{position:relative}.edublink-vue-pagination .VuePagination__pagination-item-next-page :before{content:\"\";font-family:\"icomoon\"!important}.dark-mode .edublink-vue-pagination .page-item .page-link{color:#000;color:var(--color-black)}.dark-mode .edublink-vue-pagination .page-item .page-link:hover,.dark-mode .edublink-vue-pagination .page-item.active .page-link,.dark-mode .edublink-vue-pagination .page-item.disabled:hover .page-link{color:#fff;color:var(--color-white)}.edublink-vue-light-dark-switcher{background:transparent;border:0;margin:-3px 0 0;padding:0}.edublink-vue-light-dark-switcher svg.edublink-moon-icon{max-width:23px}.edublink-vue-light-dark-switcher svg path{color:#8b572a;color:var(--color-heading)}@keyframes edublink-marque-animation{0%{background-position:0}to{background-position:5440px}}.background-marque{animation:edublink-marque-animation 50s linear infinite reverse;pointer-events:none}@media only screen and (max-width:991px){.edublink-svg-animate svg path{stroke-dashoffset:0!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.f17ada7.eot";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.8bbbadd.ttf";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.adba97d.woff";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icomoon.054c8ec.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/remixicon.5cb99e6.eot";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/remixicon.90668f6.woff2";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/remixicon.8d09fa1.woff";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/remixicon.f2616f5.ttf";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/remixicon.71d1508.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("683ca686", content, true)

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--color-primary:#4a90e2;--color-secondary:#f5a623;--color-tertiary:#7ed321;--color-textSecondary:#d0021b;--color-dark:#4a4a4a;--color-heading:#8b572a;--dark-color-heading:#fff;--color-border:#b8e986;--dark-color-border:#4a4a4a;--color-body:#9b9b9b;--gradient-primary:linear-gradient(-90deg,#50e3c2,#4a90e2);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#8b572a;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#8b572a;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#7ed321;--color-danger:#d0021b;--color-warning:#f5a623;--color-info:#4a90e2;--color-placeholder:#9b9b9b;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:\"Poppins\",sans-serif;--font-secondary:\"Spartan\",sans-serif;--font-icomoon:\"icomoon\";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62;--swiper-theme-color:#007aff}@font-face{font-family:\"swiper-icons\";font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\")}.swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-slide{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("4245134b", content, true)

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cool-lightbox{bottom:0;left:0;position:fixed;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;right:0;-webkit-transition:all .3s ease;transition:all .3s ease}.cool-lightbox,.cool-lightbox .cool-lightbox-zoom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cool-lightbox .cool-lightbox-zoom{background-color:hsla(0,0%,6%,.8);border-radius:8px;bottom:15px;left:50%;padding:0 12px;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:99999}.cool-lightbox .cool-lightbox-zoom input[type=range]{-webkit-appearance:none;background:0 0;margin:10px 0;width:105px}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus{outline:0}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-runnable-track{cursor:pointer;height:4px;width:100%;animate:.2s;background:#e6e6e6;border:0 solid #000;border-radius:11px;-webkit-box-shadow:0 0 0 #000;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border:1px solid #000;border-radius:13px;-webkit-box-shadow:1px 1px 1px #000;box-shadow:1px 1px 1px #000;cursor:pointer;height:12px;margin-top:-4.5px;width:12px}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-webkit-slider-runnable-track{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-track{cursor:pointer;height:4px;width:100%;animate:.2s;background:#e6e6e6;border:0 solid #000;border-radius:11px;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-thumb{background:#fff;border:1px solid #000;border-radius:13px;box-shadow:1px 1px 1px #000;cursor:pointer;height:12px;width:12px}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-track{cursor:pointer;height:4px;width:100%;animate:.2s;background:0 0;border-color:transparent;color:transparent}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-lower,.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-upper{background:#e6e6e6;border:0 solid #000;border-radius:22px;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-thumb{background:#fff;border:1px solid #000;border-radius:13px;box-shadow:1px 1px 1px #000;cursor:pointer;height:12px;width:12px}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-lower,.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-upper{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon{color:#fff;height:15px;width:15px}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:first-of-type{margin-right:10px}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:last-of-type{margin-left:10px}.cool-lightbox .cool-lightbox-thumbs{background-color:#ddd;height:100vh;overflow-x:hidden;overflow-y:auto;position:absolute;right:-102px;scrollbar-color:#fa4242 hsla(0,0%,69%,.9);scrollbar-width:thin;top:0;-webkit-transition:none;transition:none;width:102px}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar{height:6px;width:6px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-button{height:0;width:0}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb{background:#fa4242;border:0 #fff;border-radius:50px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:hover{background:#fff}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:active{background:#000}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track{background:#e1e1e1;border:0 #fff;border-radius:8px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:hover{background:#666}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:active{background:#333}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-corner{background:0 0}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{right:-212px;width:212px}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:2px 0 2px 2px}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{background-color:#000;display:block;height:75px;margin-bottom:2px;margin-right:2px;position:relative;width:100%}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:calc(50% - 2px)}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:before{border:3px solid #fa4242;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:hidden;z-index:150}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon{height:25px;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:25px;z-index:100}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon path{fill:#fff}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video:after{background:rgba(0,0,0,.6);bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:50}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.active:before,.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:hover:before{opacity:1;visibility:visible}.cool-lightbox .cool-lightbox__inner{bottom:0;left:0;overflow:hidden;padding:60px 0;position:absolute;right:0;top:0;-webkit-transition:none;transition:none}@media (min-width:767px){.cool-lightbox .cool-lightbox__inner{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox__progressbar{display:block;height:2px;left:0;position:absolute;right:0;top:0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0;transform-origin:0;-webkit-transition:-webkit-transform 3s linear;transition:-webkit-transform 3s linear;transition:transform 3s linear;transition:transform 3s linear,-webkit-transform 3s linear;z-index:500}.cool-lightbox.cool-lightbox--is-swipping{cursor:-webkit-grabbing;cursor:grabbing}.cool-lightbox.cool-lightbox--is-swipping iframe{pointer-events:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide{-webkit-transition:none;transition:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide.cool-lightbox__slide--hide{display:-webkit-box;display:-ms-flexbox;display:flex;z-index:50}.cool-lightbox.cool-lightbox--zoom-disabled .cool-lightbox__slide .cool-lightbox__slide__img{-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.cool-lightbox.cool-lightbox--can-zoom .cool-lightbox__slide img{cursor:-webkit-zoom-in;cursor:zoom-in}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox__slide img{cursor:move;cursor:grab;cursor:-webkit-grab}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox-caption{opacity:0}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:102px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:212px}}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox-thumbs{right:0}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{bottom:-70px;height:70px;left:0;overflow:auto;right:0;top:auto;width:100%}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{bottom:-79px;height:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list{-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:100px;-ms-flex-negative:0;flex-shrink:0;height:65px;margin-bottom:0}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{height:75px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:70px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox-thumbs{bottom:0}.cool-lightbox *{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}.cool-lightbox button{background:0 0;border:none;cursor:pointer;outline:0}.cool-lightbox svg path,.cool-lightbox svg rect{fill:currentColor}.cool-lightbox .cool-lightbox-button{color:#ccc;height:100px;opacity:1;padding:21px 16px 21px 4px;position:absolute;top:calc(50% - 50px);-webkit-transition:all .3s ease;transition:all .3s ease;visibility:visible;width:54px;z-index:800}@media (min-width:767px){.cool-lightbox .cool-lightbox-button{padding:31px 26px 31px 6px;width:70px}}.cool-lightbox .cool-lightbox-button.hidden{opacity:0;visibility:hidden}.cool-lightbox .cool-lightbox-button:hover{color:#fff}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon{display:-webkit-box;display:-ms-flexbox;display:flex;padding:7px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;background:rgba(30,30,30,.6);justify-content:center}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon>svg{height:100%;width:100%}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--prev{left:0}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{padding:21px 4px 21px 16px;right:0}@media (min-width:767px){.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{padding:31px 6px 31px 26px}}.cool-lightbox .cool-lightbox-pdf{max-width:100%}.cool-lightbox .cool-lightbox__iframe{display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;top:50%;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transform:translate3d(-50%,-50%,0) scaleX(1);transform:translate3d(-50%,-50%,0) scaleX(1)}.cool-lightbox .cool-lightbox__iframe iframe{height:100%;width:100%}@media (min-width:767px){.cool-lightbox .cool-lightbox__iframe iframe{max-height:80vh;max-width:80vw}}.cool-lightbox .cool-lightbox__wrapper{height:100%;position:relative;width:100%}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide{-ms-flex-negative:0;display:-webkit-box;display:-ms-flexbox;display:flex;flex-shrink:0;height:100%;opacity:.4;position:relative;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide.cool-lightbox__slide--current{opacity:1}.cool-lightbox .cool-lightbox__slide{bottom:0;display:none;left:0;margin-right:30px;position:absolute;right:0;top:0;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;width:100%;z-index:100}.cool-lightbox .cool-lightbox__slide:last-of-type{margin-right:0}.cool-lightbox .cool-lightbox__slide.cool-lightbox__slide--current{display:-webkit-box;display:-ms-flexbox;display:flex}.cool-lightbox .cool-lightbox__slide .cool-lightbox__slide__img{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;left:50%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0) scaleX(1);transform:translate3d(-50%,-50%,0) scaleX(1);-webkit-transition:all .3s ease;transition:all .3s ease;width:100%}.cool-lightbox .cool-lightbox__slide img{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-box-shadow:0 0 1.5rem rgba(0,0,0,.45);box-shadow:0 0 1.5rem rgba(0,0,0,.45);margin:auto;max-height:100%;max-width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:9999}.cool-lightbox .cool-lightbox__slide picture{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;height:100%;justify-content:center;margin:auto;max-height:100%;z-index:9999}.cool-lightbox-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;opacity:1;position:absolute;right:0;top:0;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:visible}.cool-lightbox-toolbar.hidden{opacity:0;visibility:hidden}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{background:rgba(30,30,30,.6);border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#ccc;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:40px;margin:0;padding:9px;position:relative;-webkit-transition:color .2s;transition:color .2s;vertical-align:top;visibility:inherit;width:40px}@media (min-width:767px){.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{height:44px;padding:10px;width:44px}}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn>svg{height:100%;width:100%}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn:hover{color:#fff}.cool-lightbox-caption{background:-webkit-gradient(linear,left bottom,left top,color-stop(0,rgba(0,0,0,.75)),color-stop(50%,rgba(0,0,0,.3)),color-stop(65%,rgba(0,0,0,.15)),color-stop(75.5%,rgba(0,0,0,.075)),color-stop(82.85%,rgba(0,0,0,.037)),color-stop(88%,rgba(0,0,0,.019)),to(transparent));background:linear-gradient(0deg,rgba(0,0,0,.75),rgba(0,0,0,.3) 50%,rgba(0,0,0,.15) 65%,rgba(0,0,0,.075) 75.5%,rgba(0,0,0,.037) 82.85%,rgba(0,0,0,.019) 88%,transparent);bottom:0;color:#eee;direction:ltr;font-size:14px;font-weight:400;left:0;line-height:1.5;opacity:1;padding:18px 28px 16px 24px;position:absolute;right:0;text-align:center;-webkit-transition:opacity .25s ease,visibility 0s ease .25s;transition:opacity .25s ease,visibility 0s ease .25s;z-index:99997}@media (min-width:767px){.cool-lightbox-caption{padding:22px 30px 23px}}.cool-lightbox-caption a{color:#eee;-webkit-text-decoration:underline;text-decoration:underline}.cool-lightbox-caption h6{font-size:14px;line-height:130%;margin:0 0 6px}@media (min-width:767px){.cool-lightbox-caption h6{font-size:16px;margin:0 0 6px}}.cool-lightbox-caption p{color:#ccc;font-size:13px;line-height:130%}@media (min-width:767px){.cool-lightbox-caption p{font-size:15px}}.cool-lightbox-caption p a{color:#ccc}.cool-lightbox-caption p a:hover{color:#eee}.cool-lightbox-modal-enter-active,.cool-lightbox-modal-leave-active{-webkit-transition:opacity .35s;transition:opacity .35s}.cool-lightbox-modal-enter,.cool-lightbox-modal-leave-to{opacity:0}.cool-lightbox-slide-change-enter-active,.cool-lightbox-slide-change-leave-active{-webkit-transition:opacity .27s;transition:opacity .27s}.cool-lightbox-slide-change-enter,.cool-lightbox-slide-change-leave-to{opacity:0}.cool-lightbox-loading-wrapper{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cool-lightbox-loading-wrapper .cool-lightbox-loading{-webkit-animation:cool-lightbox-rotate 1s linear infinite;animation:cool-lightbox-rotate 1s linear infinite;background:0 0;border:4px solid;border-color:#888 #888 #fff;border-radius:50%;height:50px;opacity:.7;padding:0;width:50px;z-index:500}@-webkit-keyframes cool-lightbox-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cool-lightbox-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by sindresorhus and can be seen here
// https://github.com/sindresorhus/lazy-value/blob/master/index.js

exports.default = function (fn) {
  var called = false;
  var ret = void 0;

  return function () {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isApiSetUp = false;

/**
 * @param apiKey    API Key, or object with the URL parameters. For example
 *                  to use Google Maps Premium API, pass
 *                    `{ client: <YOUR-CLIENT-ID> }`.
 *                  You may pass the libraries and/or version (as `v`) parameter into
 *                  this parameter and skip the next two parameters
 * @param version   Google Maps version
 * @param libraries Libraries to load (@see
 *                  https://developers.google.com/maps/documentation/javascript/libraries)
 * @param loadCn    Boolean. If set to true, the map will be loaded from google maps China
 *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
 *
 * Example:
 * ```
 *      import {load} from 'vue-google-maps'
 *
 *      load(<YOUR-API-KEY>)
 *
 *      load({
 *              key: <YOUR-API-KEY>,
 *      })
 *
 *      load({
 *              client: <YOUR-CLIENT-ID>,
 *              channel: <YOUR CHANNEL>
 *      })
 * ```
 */
var loadGmapApi = exports.loadGmapApi = function (options, loadCn) {
  if (typeof document === 'undefined') {
    // Do nothing if run from server-side
    return;
  }
  if (!isApiSetUp) {
    isApiSetUp = true;

    var googleMapScript = document.createElement('SCRIPT');

    // Allow options to be an object.
    // This is to support more esoteric means of loading Google Maps,
    // such as Google for business
    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      throw new Error('options should  be an object');
    }

    // libraries
    if (Array.prototype.isPrototypeOf(options.libraries)) {
      options.libraries = options.libraries.join(',');
    }
    options['callback'] = 'vueGoogleMapsInit';

    var baseUrl = 'https://maps.googleapis.com/';

    if (typeof loadCn === 'boolean' && loadCn === true) {
      baseUrl = 'https://maps.google.cn/';
    }

    var url = baseUrl + 'maps/api/js?' + Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
    }).join('&');

    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.head.appendChild(googleMapScript);
  } else {
    throw new Error('You already started the loading of google maps');
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  animation: {
    twoWay: true,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true
  },
  cursor: {
    type: String,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false
  },
  icon: {
    twoWay: true
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: true
  },
  shape: {
    type: Object,
    twoWay: true
  },
  title: {
    type: String,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  },
  visible: {
    twoWay: true,
    default: true
  }
};

var events = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];

/**
 * @class Marker
 *
 * Marker class with extra support for
 *
 * - Embedded info windows
 * - Clustered markers
 *
 * Support for clustered markers is for backward-compatability
 * reasons. Otherwise we should use a cluster-marker mixin or
 * subclass.
 */
exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'marker',
  ctr: function ctr() {
    return google.maps.Marker;
  },

  inject: {
    '$clusterPromise': {
      default: null
    }
  },

  render: function render(h) {
    if (!this.$slots.default || this.$slots.default.length === 0) {
      return '';
    } else if (this.$slots.default.length === 1) {
      // So that infowindows can have a marker parent
      return this.$slots.default[0];
    } else {
      return h('div', this.$slots.default);
    }
  },
  destroyed: function destroyed() {
    if (!this.$markerObject) {
      return;
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true);
    } else {
      this.$markerObject.setMap(null);
    }
  },
  beforeCreate: function beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null;
    }

    return this.$clusterPromise;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    if (this.$clusterPromise) {
      this.$clusterPromise.then(function (co) {
        co.addMarker(inst);
        _this.$clusterObject = co;
      });
    }
  }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,

  name: 'polyline',
  ctr: function ctr() {
    return google.maps.Polyline;
  },

  afterCreate: function afterCreate() {
    var _this = this;

    var clearEvents = function () {};

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        _this.$polylineObject.setPath(path);

        var mvcPath = _this.$polylineObject.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', _this.$polylineObject.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,
  mappedProps: props,
  name: 'polygon',
  ctr: function ctr() {
    return google.maps.Polygon;
  },

  beforeCreate: function beforeCreate(options) {
    if (!options.path) delete options.path;
    if (!options.paths) delete options.paths;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    var clearEvents = function () {};

    // Watch paths, on our own, because we do not want to set either when it is
    // empty
    this.$watch('paths', function (paths) {
      if (paths) {
        clearEvents();

        inst.setPaths(paths);

        var updatePaths = function () {
          _this.$emit('paths_changed', inst.getPaths());
        };
        var eventListeners = [];

        var mvcArray = inst.getPaths();
        for (var i = 0; i < mvcArray.getLength(); i++) {
          var mvcPath = mvcArray.getAt(i);
          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
        }
        eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        inst.setPaths(path);

        var mvcPath = inst.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', inst.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                obj = _ref4[0],
                listenerHandle = _ref4[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    type: Object,
    twoWay: true,
    required: true
  },
  radius: {
    type: Number,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'circle',
  ctr: function ctr() {
    return google.maps.Circle;
  },
  events: events
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  bounds: {
    type: Object,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'rectangle',
  ctr: function ctr() {
    return google.maps.Rectangle;
  },
  events: events
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  options: {
    type: Object,
    required: false,
    default: function _default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  }
};

var events = ['domready', 'closeclick', 'content_changed'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'infoWindow',
  ctr: function ctr() {
    return google.maps.InfoWindow;
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },

  inject: {
    '$markerPromise': {
      default: null
    }
  },

  mounted: function mounted() {
    var el = this.$refs.flyaway;
    el.parentNode.removeChild(el);
  },
  beforeCreate: function beforeCreate(options) {
    var _this = this;

    options.content = this.$refs.flyaway;

    if (this.$markerPromise) {
      delete options.position;
      return this.$markerPromise.then(function (mo) {
        _this.$markerObject = mo;
        return mo;
      });
    }
  },


  methods: {
    _openInfoWindow: function _openInfoWindow() {
      if (this.opened) {
        if (this.$markerObject !== null) {
          this.$infoWindowObject.open(this.$map, this.$markerObject);
        } else {
          this.$infoWindowObject.open(this.$map);
        }
      } else {
        this.$infoWindowObject.close();
      }
    }
  },

  afterCreate: function afterCreate() {
    var _this2 = this;

    this._openInfoWindow();
    this.$watch('opened', function () {
      _this2._openInfoWindow();
    });
  }
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(11);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(6);

var _mountableMixin = __webpack_require__(13);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(19);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(12);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    required: true,
    twoWay: true,
    type: Object,
    noBind: true
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  heading: {
    type: Number,
    twoWay: true
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  tilt: {
    twoWay: true,
    type: Number
  },
  options: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['bounds_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];

// Plain Google Maps methods exposed here for convenience
var linkedMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'].reduce(function (all, methodName) {
  all[methodName] = function () {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
    }
  };
  return all;
}, {});

// Other convenience methods exposed by Vue Google Maps
var customMethods = {
  resize: function resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize');
    }
  },
  resizePreserveCenter: function resizePreserveCenter() {
    if (!this.$mapObject) {
      return;
    }

    var oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, 'resize');
    this.$mapObject.setCenter(oldCenter);
  },


  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback: function _resizeCallback() {
    this.resizePreserveCenter();
  }
};

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),

  provide: function provide() {
    var _this = this;

    this.$mapPromise = new Promise(function (resolve, reject) {
      _this.$mapPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$mapPromise': this.$mapPromise
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.center && typeof this.center.lat === 'function' ? this.center.lat() : this.center.lat;
    },
    finalLng: function finalLng() {
      return this.center && typeof this.center.lng === 'function' ? this.center.lng() : this.center.lng;
    },
    finalLatLng: function finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-map'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;
      _this2.$mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$mapObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$mapObject, events);

      // manually trigger center and zoom
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        _this2.$mapObject.addListener('center_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('center_changed', _this2.$mapObject.getCenter());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$mapObject.setCenter(_this2.finalLatLng);
        });
      });
      _this2.$mapObject.addListener('zoom_changed', function () {
        _this2.$emit('zoom_changed', _this2.$mapObject.getZoom());
      });
      _this2.$mapObject.addListener('bounds_changed', function () {
        _this2.$emit('bounds_changed', _this2.$mapObject.getBounds());
      });

      _this2.$mapPromiseDeferred.resolve(_this2.$mapObject);

      return _this2.$mapObject;
    }).catch(function (error) {
      throw error;
    });
  },

  methods: _extends({}, customMethods, linkedMethods)
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_6839df3e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_6839df3e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_6839df3e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_6839df3e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_6839df3e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-map-container{position:relative}.vue-map-container .vue-map{bottom:0;left:0;position:absolute;right:0;top:0}.vue-map-hidden{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(11);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(6);

var _mountableMixin = __webpack_require__(13);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(19);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(12);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zoom: {
    twoWay: true,
    type: Number
  },
  pov: {
    twoWay: true,
    type: Object,
    trackProperties: ['pitch', 'heading']
  },
  position: {
    twoWay: true,
    type: Object,
    noBind: true
  },
  pano: {
    twoWay: true,
    type: String
  },
  motionTracking: {
    twoWay: false,
    type: Boolean
  },
  visible: {
    twoWay: true,
    type: Boolean,
    default: true
  },
  options: {
    twoWay: false,
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['closeclick', 'status_changed'];

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),
  replace: false, // necessary for css styles
  methods: {
    resize: function resize() {
      if (this.$panoObject) {
        google.maps.event.trigger(this.$panoObject, 'resize');
      }
    }
  },

  provide: function provide() {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      _this.$panoPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$panoPromise': promise,
      '$mapPromise': promise // so that we can use it with markers
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.position && typeof this.position.lat === 'function' ? this.position.lat() : this.position.lat;
    },
    finalLng: function finalLng() {
      return this.position && typeof this.position.lng === 'function' ? this.position.lng() : this.position.lng;
    },
    finalLatLng: function finalLatLng() {
      return {
        lat: this.finalLat,
        lng: this.finalLng
      };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$panoObject) {
        this.$panoObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-street-view-pano'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;

      _this2.$panoObject = new google.maps.StreetViewPanorama(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$panoObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$panoObject, events);

      // manually trigger position
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        // Panos take a while to load
        increment();

        _this2.$panoObject.addListener('position_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('position_changed', _this2.$panoObject.getPosition());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$panoObject.setPosition(_this2.finalLatLng);
        });
      });

      _this2.$panoPromiseDeferred.resolve(_this2.$panoObject);

      return _this2.$panoPromise;
    }).catch(function (error) {
      throw error;
    });
  }
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_id_50f7f8d6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_id_50f7f8d6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_id_50f7f8d6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_id_50f7f8d6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_id_50f7f8d6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-street-view-pano-container{position:relative}.vue-street-view-pano-container .vue-street-view-pano{bottom:0;left:0;position:absolute;right:0;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInput_vue_vue_type_template_id_13bfbbee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _placeInputImpl_js_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_1__["default"],
  _placeInput_vue_vue_type_template_id_13bfbbee__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _placeInput_vue_vue_type_template_id_13bfbbee__WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "0e24ed4b"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindProps = __webpack_require__(6);

var _simulateArrowDown = __webpack_require__(22);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

var _mapElementFactory = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: true
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  }
};

var props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false
  },
  options: {
    type: Object
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$gmapApiPromiseLazy().then(function () {
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      /* eslint-disable no-unused-vars */
      var finalOptions = _extends({}, (0, _bindProps.getPropsValues)(_this, mappedProps), _this.options);

      _this.$autocomplete = new google.maps.places.Autocomplete(_this.$refs.input, finalOptions);
      (0, _bindProps.bindProps)(_this, _this.$autocomplete, mappedProps);

      _this.$watch('componentRestrictions', function (v) {
        if (v !== undefined) {
          _this.$autocomplete.setComponentRestrictions(v);
        }
      });

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      _this.$autocomplete.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.$autocomplete.getPlace());
      });
    });
  },

  props: _extends({}, (0, _mapElementFactory.mappedPropsToVueProps)(mappedProps), props)
};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AccordionOne", function() { return AccordionOne; });
__webpack_require__.d(components_namespaceObject, "FunFact", function() { return FunFact; });
__webpack_require__.d(components_namespaceObject, "InstagramPost", function() { return InstagramPost; });
__webpack_require__.d(components_namespaceObject, "About", function() { return About; });
__webpack_require__.d(components_namespaceObject, "AboutUsOneFunFact", function() { return AboutUsOneFunFact; });
__webpack_require__.d(components_namespaceObject, "AboutUsOneInstructor", function() { return AboutUsOneInstructor; });
__webpack_require__.d(components_namespaceObject, "AboutUsOneWhyChoose", function() { return AboutUsOneWhyChoose; });
__webpack_require__.d(components_namespaceObject, "AboutUsThreeContactInfo", function() { return AboutUsThreeContactInfo; });
__webpack_require__.d(components_namespaceObject, "AboutUsThreeFunFact", function() { return AboutUsThreeFunFact; });
__webpack_require__.d(components_namespaceObject, "AboutUsThreeInstructor", function() { return AboutUsThreeInstructor; });
__webpack_require__.d(components_namespaceObject, "AboutUsThreeTestimonial", function() { return AboutUsThreeTestimonial; });
__webpack_require__.d(components_namespaceObject, "AboutUsThreeWhyChoose", function() { return AboutUsThreeWhyChoose; });
__webpack_require__.d(components_namespaceObject, "AboutUsTwoFeatures", function() { return AboutUsTwoFeatures; });
__webpack_require__.d(components_namespaceObject, "AboutUsTwoFunFact", function() { return AboutUsTwoFunFact; });
__webpack_require__.d(components_namespaceObject, "AboutUsTwoInstructor", function() { return AboutUsTwoInstructor; });
__webpack_require__.d(components_namespaceObject, "AboutUsTwoLogo", function() { return AboutUsTwoLogo; });
__webpack_require__.d(components_namespaceObject, "AboutUsTwoTestimonial", function() { return AboutUsTwoTestimonial; });
__webpack_require__.d(components_namespaceObject, "AboutUsTwoVideo", function() { return AboutUsTwoVideo; });
__webpack_require__.d(components_namespaceObject, "AnimationMouseMove", function() { return AnimationMouseMove; });
__webpack_require__.d(components_namespaceObject, "BlogPostList", function() { return BlogPostList; });
__webpack_require__.d(components_namespaceObject, "BlogPostOne", function() { return BlogPostOne; });
__webpack_require__.d(components_namespaceObject, "BlogPostStandard", function() { return BlogPostStandard; });
__webpack_require__.d(components_namespaceObject, "BlogPostTwo", function() { return BlogPostTwo; });
__webpack_require__.d(components_namespaceObject, "CommonBreadCrumbOne", function() { return CommonBreadCrumbOne; });
__webpack_require__.d(components_namespaceObject, "CommonBreadCrumbThree", function() { return CommonBreadCrumbThree; });
__webpack_require__.d(components_namespaceObject, "CommonBreadCrumbTwo", function() { return CommonBreadCrumbTwo; });
__webpack_require__.d(components_namespaceObject, "CommonColorMode", function() { return CommonColorMode; });
__webpack_require__.d(components_namespaceObject, "CommonPaginationOne", function() { return CommonPaginationOne; });
__webpack_require__.d(components_namespaceObject, "CommonSectionTitle", function() { return CommonSectionTitle; });
__webpack_require__.d(components_namespaceObject, "CourseTypeEight", function() { return CourseTypeEight; });
__webpack_require__.d(components_namespaceObject, "CourseTypeFive", function() { return CourseTypeFive; });
__webpack_require__.d(components_namespaceObject, "CourseTypeFour", function() { return CourseTypeFour; });
__webpack_require__.d(components_namespaceObject, "CourseTypeOne", function() { return CourseTypeOne; });
__webpack_require__.d(components_namespaceObject, "CourseTypeSeven", function() { return CourseTypeSeven; });
__webpack_require__.d(components_namespaceObject, "CourseTypeSix", function() { return CourseTypeSix; });
__webpack_require__.d(components_namespaceObject, "CourseTypeThree", function() { return CourseTypeThree; });
__webpack_require__.d(components_namespaceObject, "CourseTypeTwo", function() { return CourseTypeTwo; });
__webpack_require__.d(components_namespaceObject, "CtaCTAOne", function() { return CtaCTAOne; });
__webpack_require__.d(components_namespaceObject, "CtaCTAOneAlter", function() { return CtaCTAOneAlter; });
__webpack_require__.d(components_namespaceObject, "EventList", function() { return EventList; });
__webpack_require__.d(components_namespaceObject, "EventOne", function() { return EventOne; });
__webpack_require__.d(components_namespaceObject, "EventSectionOne", function() { return EventSectionOne; });
__webpack_require__.d(components_namespaceObject, "EventTwo", function() { return EventTwo; });
__webpack_require__.d(components_namespaceObject, "HeaderCategory", function() { return HeaderCategory; });
__webpack_require__.d(components_namespaceObject, "HeaderFour", function() { return HeaderFour; });
__webpack_require__.d(components_namespaceObject, "HeaderLanding", function() { return HeaderLanding; });
__webpack_require__.d(components_namespaceObject, "HeaderOne", function() { return HeaderOne; });
__webpack_require__.d(components_namespaceObject, "HeaderThree", function() { return HeaderThree; });
__webpack_require__.d(components_namespaceObject, "HeaderTopOne", function() { return HeaderTopOne; });
__webpack_require__.d(components_namespaceObject, "HeaderTopTwo", function() { return HeaderTopTwo; });
__webpack_require__.d(components_namespaceObject, "HeaderTwo", function() { return HeaderTwo; });
__webpack_require__.d(components_namespaceObject, "HeaderMobileMenu", function() { return HeaderMobileMenu; });
__webpack_require__.d(components_namespaceObject, "HeaderNavigation", function() { return HeaderNavigation; });
__webpack_require__.d(components_namespaceObject, "HeaderOffCanvasMobileMenuOne", function() { return HeaderOffCanvasMobileMenuOne; });
__webpack_require__.d(components_namespaceObject, "HeaderOffCanvasMobileMenuTwo", function() { return HeaderOffCanvasMobileMenuTwo; });
__webpack_require__.d(components_namespaceObject, "HeaderSearchPopUp", function() { return HeaderSearchPopUp; });
__webpack_require__.d(components_namespaceObject, "FooterKindergarten", function() { return FooterKindergarten; });
__webpack_require__.d(components_namespaceObject, "FooterKitchen", function() { return FooterKitchen; });
__webpack_require__.d(components_namespaceObject, "FooterLanding", function() { return FooterLanding; });
__webpack_require__.d(components_namespaceObject, "FooterOne", function() { return FooterOne; });
__webpack_require__.d(components_namespaceObject, "FooterThree", function() { return FooterThree; });
__webpack_require__.d(components_namespaceObject, "FooterTwo", function() { return FooterTwo; });
__webpack_require__.d(components_namespaceObject, "FooterYoga", function() { return FooterYoga; });
__webpack_require__.d(components_namespaceObject, "FooterGoogleMapWithAPI", function() { return FooterGoogleMapWithAPI; });
__webpack_require__.d(components_namespaceObject, "FooterScrollToTop", function() { return FooterScrollToTop; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningAbout", function() { return HomeDistantLearningAbout; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningBanner", function() { return HomeDistantLearningBanner; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningBlog", function() { return HomeDistantLearningBlog; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningCategories", function() { return HomeDistantLearningCategories; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningCourse", function() { return HomeDistantLearningCourse; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningFAQ", function() { return HomeDistantLearningFAQ; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningFunFact", function() { return HomeDistantLearningFunFact; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningLogo", function() { return HomeDistantLearningLogo; });
__webpack_require__.d(components_namespaceObject, "HomeDistantLearningVideo", function() { return HomeDistantLearningVideo; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachAbout", function() { return HomeKitchenCoachAbout; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachBanner", function() { return HomeKitchenCoachBanner; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachBlog", function() { return HomeKitchenCoachBlog; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachCourse", function() { return HomeKitchenCoachCourse; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachCTA", function() { return HomeKitchenCoachCTA; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachFAQ", function() { return HomeKitchenCoachFAQ; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachFeatures", function() { return HomeKitchenCoachFeatures; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachFunFact", function() { return HomeKitchenCoachFunFact; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachInstagram", function() { return HomeKitchenCoachInstagram; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachInstructor", function() { return HomeKitchenCoachInstructor; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachLogo", function() { return HomeKitchenCoachLogo; });
__webpack_require__.d(components_namespaceObject, "HomeKitchenCoachTestimonial", function() { return HomeKitchenCoachTestimonial; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenAbout", function() { return HomeKindergartenAbout; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenActivities", function() { return HomeKindergartenActivities; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenBanner", function() { return HomeKindergartenBanner; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenBlog", function() { return HomeKindergartenBlog; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenCourse", function() { return HomeKindergartenCourse; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenEvent", function() { return HomeKindergartenEvent; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenFAQ", function() { return HomeKindergartenFAQ; });
__webpack_require__.d(components_namespaceObject, "HomeKindergartenSubscriptionForm", function() { return HomeKindergartenSubscriptionForm; });
__webpack_require__.d(components_namespaceObject, "HomeLandingDemoBanner", function() { return HomeLandingDemoBanner; });
__webpack_require__.d(components_namespaceObject, "HomeLandingDemoCourseLayout", function() { return HomeLandingDemoCourseLayout; });
__webpack_require__.d(components_namespaceObject, "HomeLandingDemoFeatures", function() { return HomeLandingDemoFeatures; });
__webpack_require__.d(components_namespaceObject, "HomeLandingDemoFunFact", function() { return HomeLandingDemoFunFact; });
__webpack_require__.d(components_namespaceObject, "HomeDemo", function() { return HomeDemo; });
__webpack_require__.d(components_namespaceObject, "HomeLandingDemoInnerPages", function() { return HomeLandingDemoInnerPages; });
__webpack_require__.d(components_namespaceObject, "HomeLandingDemoLearnWith", function() { return HomeLandingDemoLearnWith; });
__webpack_require__.d(components_namespaceObject, "HomeLandingDemoShopLayout", function() { return HomeLandingDemoShopLayout; });
__webpack_require__.d(components_namespaceObject, "HomeMainAbout", function() { return HomeMainAbout; });
__webpack_require__.d(components_namespaceObject, "HomeMainBanner", function() { return HomeMainBanner; });
__webpack_require__.d(components_namespaceObject, "HomeMainBlog", function() { return HomeMainBlog; });
__webpack_require__.d(components_namespaceObject, "HomeMainCategories", function() { return HomeMainCategories; });
__webpack_require__.d(components_namespaceObject, "HomeMainContactInfo", function() { return HomeMainContactInfo; });
__webpack_require__.d(components_namespaceObject, "HomeMainCourse", function() { return HomeMainCourse; });
__webpack_require__.d(components_namespaceObject, "HomeMainFeatures", function() { return HomeMainFeatures; });
__webpack_require__.d(components_namespaceObject, "HomeMainFunFact", function() { return HomeMainFunFact; });
__webpack_require__.d(components_namespaceObject, "HomeMainInstructor", function() { return HomeMainInstructor; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyBanner", function() { return HomeOnlineAcademyBanner; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyBlog", function() { return HomeOnlineAcademyBlog; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyCategories", function() { return HomeOnlineAcademyCategories; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyContactInfo", function() { return HomeOnlineAcademyContactInfo; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyCourse", function() { return HomeOnlineAcademyCourse; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyFAQ", function() { return HomeOnlineAcademyFAQ; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyFunFact", function() { return HomeOnlineAcademyFunFact; });
__webpack_require__.d(components_namespaceObject, "HomeOnlineAcademyInstructor", function() { return HomeOnlineAcademyInstructor; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityAbout", function() { return HomeUniversityAbout; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityBanner", function() { return HomeUniversityBanner; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityCampus", function() { return HomeUniversityCampus; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityContactInfo", function() { return HomeUniversityContactInfo; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityCourse", function() { return HomeUniversityCourse; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityFeatures", function() { return HomeUniversityFeatures; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityFunFact", function() { return HomeUniversityFunFact; });
__webpack_require__.d(components_namespaceObject, "HomeUniversityVideo", function() { return HomeUniversityVideo; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorAbout", function() { return HomeYogaInstructorAbout; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorBanner", function() { return HomeYogaInstructorBanner; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorCourse", function() { return HomeYogaInstructorCourse; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorFunFact", function() { return HomeYogaInstructorFunFact; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorInstagram", function() { return HomeYogaInstructorInstagram; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructor", function() { return HomeYogaInstructor; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorTestimonial", function() { return HomeYogaInstructorTestimonial; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorVideo", function() { return HomeYogaInstructorVideo; });
__webpack_require__.d(components_namespaceObject, "HomeYogaInstructorWhyChoose", function() { return HomeYogaInstructorWhyChoose; });
__webpack_require__.d(components_namespaceObject, "InstructorFive", function() { return InstructorFive; });
__webpack_require__.d(components_namespaceObject, "InstructorFour", function() { return InstructorFour; });
__webpack_require__.d(components_namespaceObject, "InstructorOne", function() { return InstructorOne; });
__webpack_require__.d(components_namespaceObject, "InstructorThree", function() { return InstructorThree; });
__webpack_require__.d(components_namespaceObject, "InstructorTwo", function() { return InstructorTwo; });
__webpack_require__.d(components_namespaceObject, "LogoOne", function() { return LogoOne; });
__webpack_require__.d(components_namespaceObject, "LogoTwo", function() { return LogoTwo; });
__webpack_require__.d(components_namespaceObject, "TestimonialOne", function() { return TestimonialOne; });
__webpack_require__.d(components_namespaceObject, "TestimonialThree", function() { return TestimonialThree; });
__webpack_require__.d(components_namespaceObject, "TestimonialTwo", function() { return TestimonialTwo; });
__webpack_require__.d(components_namespaceObject, "SidebarBlogSidebarOne", function() { return SidebarBlogSidebarOne; });
__webpack_require__.d(components_namespaceObject, "SidebarCourseSidebarOne", function() { return SidebarCourseSidebarOne; });
__webpack_require__.d(components_namespaceObject, "SidebarEventSidebar", function() { return SidebarEventSidebar; });
__webpack_require__.d(components_namespaceObject, "SidebarPageSidebarOne", function() { return SidebarPageSidebarOne; });
__webpack_require__.d(components_namespaceObject, "ProductOne", function() { return ProductOne; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(23);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(24);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(14);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(15);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _fa379dd6 = () => interopDefault(__webpack_require__.e(/* import() | pages/about-us-one */ 149).then(__webpack_require__.bind(null, 211)));
const _45b13ae6 = () => interopDefault(__webpack_require__.e(/* import() | pages/about-us-three */ 150).then(__webpack_require__.bind(null, 212)));
const _c9683c0a = () => interopDefault(__webpack_require__.e(/* import() | pages/about-us-two */ 151).then(__webpack_require__.bind(null, 213)));
const _6b326bce = () => interopDefault(__webpack_require__.e(/* import() | pages/coming-soon */ 156).then(__webpack_require__.bind(null, 214)));
const _22b6bdfa = () => interopDefault(__webpack_require__.e(/* import() | pages/contact-me */ 157).then(__webpack_require__.bind(null, 215)));
const _05dea1ee = () => interopDefault(__webpack_require__.e(/* import() | pages/contact-us */ 158).then(__webpack_require__.bind(null, 216)));
const _b3699ef0 = () => interopDefault(__webpack_require__.e(/* import() | pages/distant-learning */ 167).then(__webpack_require__.bind(null, 217)));
const _72ee3a30 = () => interopDefault(__webpack_require__.e(/* import() | pages/faq */ 171).then(__webpack_require__.bind(null, 218)));
const _7e0ad3ff = () => interopDefault(__webpack_require__.e(/* import() | pages/gallery-grid */ 172).then(__webpack_require__.bind(null, 219)));
const _66c5bd9c = () => interopDefault(__webpack_require__.e(/* import() | pages/gallery-masonry */ 173).then(__webpack_require__.bind(null, 220)));
const _247efd38 = () => interopDefault(__webpack_require__.e(/* import() | pages/kindergarten */ 179).then(__webpack_require__.bind(null, 221)));
const _43b9f703 = () => interopDefault(__webpack_require__.e(/* import() | pages/kitchen-coach */ 180).then(__webpack_require__.bind(null, 222)));
const _18a98a12 = () => interopDefault(__webpack_require__.e(/* import() | pages/landing-demo */ 181).then(__webpack_require__.bind(null, 223)));
const _546333ac = () => interopDefault(__webpack_require__.e(/* import() | pages/my-account */ 182).then(__webpack_require__.bind(null, 224)));
const _0f79b690 = () => interopDefault(__webpack_require__.e(/* import() | pages/online-academy */ 183).then(__webpack_require__.bind(null, 225)));
const _7891f9d9 = () => interopDefault(__webpack_require__.e(/* import() | pages/pricing-table */ 184).then(__webpack_require__.bind(null, 226)));
const _3c2c09b5 = () => interopDefault(__webpack_require__.e(/* import() | pages/privacy-policy */ 185).then(__webpack_require__.bind(null, 227)));
const _3b12c14e = () => interopDefault(__webpack_require__.e(/* import() | pages/purchase-guide */ 186).then(__webpack_require__.bind(null, 228)));
const _8e23c724 = () => interopDefault(__webpack_require__.e(/* import() | pages/shop/index */ 189).then(__webpack_require__.bind(null, 229)));
const _537494b2 = () => interopDefault(__webpack_require__.e(/* import() | pages/terms-condition */ 192).then(__webpack_require__.bind(null, 230)));
const _7153b0ac = () => interopDefault(__webpack_require__.e(/* import() | pages/university */ 193).then(__webpack_require__.bind(null, 231)));
const _674c16ec = () => interopDefault(__webpack_require__.e(/* import() | pages/yoga-instructor */ 194).then(__webpack_require__.bind(null, 232)));
const _2a080d57 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-details */ 152).then(__webpack_require__.bind(null, 233)));
const _5e1e43d9 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-list */ 153).then(__webpack_require__.bind(null, 234)));
const _7bed404c = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-masonry */ 154).then(__webpack_require__.bind(null, 235)));
const _5da800f8 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-standard */ 155).then(__webpack_require__.bind(null, 236)));
const _1a42926e = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-details */ 159).then(__webpack_require__.bind(null, 237)));
const _9f0dcca4 = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-details-2 */ 160).then(__webpack_require__.bind(null, 238)));
const _9ef19da2 = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-details-3 */ 161).then(__webpack_require__.bind(null, 239)));
const _4861088a = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-five */ 162).then(__webpack_require__.bind(null, 240)));
const _1837382f = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-four */ 163).then(__webpack_require__.bind(null, 241)));
const _9e3cdf26 = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-one */ 164).then(__webpack_require__.bind(null, 242)));
const _fd6b6836 = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-three */ 165).then(__webpack_require__.bind(null, 243)));
const _6d6d7d5a = () => interopDefault(__webpack_require__.e(/* import() | pages/course/course-two */ 166).then(__webpack_require__.bind(null, 244)));
const _6dcce3d3 = () => interopDefault(__webpack_require__.e(/* import() | pages/event/event-details */ 168).then(__webpack_require__.bind(null, 245)));
const _6281a585 = () => interopDefault(__webpack_require__.e(/* import() | pages/event/event-grid */ 169).then(__webpack_require__.bind(null, 246)));
const _c07d4246 = () => interopDefault(__webpack_require__.e(/* import() | pages/event/event-list */ 170).then(__webpack_require__.bind(null, 247)));
const _7772621e = () => interopDefault(__webpack_require__.e(/* import() | pages/instructor/instructor-one */ 175).then(__webpack_require__.bind(null, 248)));
const _7f12c198 = () => interopDefault(__webpack_require__.e(/* import() | pages/instructor/instructor-profile */ 176).then(__webpack_require__.bind(null, 249)));
const _5059f969 = () => interopDefault(__webpack_require__.e(/* import() | pages/instructor/instructor-three */ 177).then(__webpack_require__.bind(null, 250)));
const _46a30052 = () => interopDefault(__webpack_require__.e(/* import() | pages/instructor/instructor-two */ 178).then(__webpack_require__.bind(null, 251)));
const _49e85334 = () => interopDefault(__webpack_require__.e(/* import() | pages/shop/cart */ 187).then(__webpack_require__.bind(null, 252)));
const _68b6f74c = () => interopDefault(__webpack_require__.e(/* import() | pages/shop/checkout */ 188).then(__webpack_require__.bind(null, 253)));
const _b8562e00 = () => interopDefault(__webpack_require__.e(/* import() | pages/shop/product-details */ 190).then(__webpack_require__.bind(null, 254)));
const _62d69559 = () => interopDefault(__webpack_require__.e(/* import() | pages/shop/wishlist */ 191).then(__webpack_require__.bind(null, 255)));
const _0d83c7b8 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 174).then(__webpack_require__.bind(null, 256)));
const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about-us-one",
    component: _fa379dd6,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _45b13ae6,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _c9683c0a,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _6b326bce,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _22b6bdfa,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _05dea1ee,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _b3699ef0,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _72ee3a30,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _7e0ad3ff,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _66c5bd9c,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _247efd38,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _43b9f703,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _18a98a12,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _546333ac,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _0f79b690,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _7891f9d9,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _3c2c09b5,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _3b12c14e,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _8e23c724,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _537494b2,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _7153b0ac,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _674c16ec,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _2a080d57,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _5e1e43d9,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _7bed404c,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _5da800f8,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _1a42926e,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _9f0dcca4,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _9ef19da2,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _4861088a,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _1837382f,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _9e3cdf26,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _fd6b6836,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _6d6d7d5a,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _6dcce3d3,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _6281a585,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _c07d4246,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _7772621e,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _7f12c198,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _5059f969,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _46a30052,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _49e85334,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _68b6f74c,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _b8562e00,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _62d69559,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _0d83c7b8,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=3487ee10
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-wrapper",
    attrs: {
      "id": "main-wrapper"
    }
  }, [_c('HeaderOne'), _vm._ssrNode(" "), _c('BreadCrumbTwo', {
    attrs: {
      "title": "Error-404"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"section-gap-equal error-page-area\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"edu-error\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_vm._ssrNode("<img src=\"/images/others/404.png\" alt=\"404 Error\"> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "2",
      "imgSrc": "/images/about/shape-25.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-2",
      "imgSrc": "/images/about/shape-15.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3",
      "dataDepth": "2",
      "imgSrc": "/images/about/shape-13.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-4",
      "dataDepth": "-2",
      "imgSrc": "/images/counterup/shape-02.png"
    }
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h2 class=\"title\">404 - Page Not Found</h2> <h4 class=\"subtitle\">The page you are looking for does not exist.</h4> "), _c('n-link', {
    staticClass: "edu-btn",
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "icon-west"
  }), _vm._v("Back to Homepage")])], 2)], 2)]), _vm._ssrNode(" <ul class=\"shape-group\"><li class=\"shape-1\"><img src=\"/images/others/map-shape-2.png\" alt=\"Shape\"></li></ul>")], 2), _vm._ssrNode(" "), _c('FooterOne'), _vm._ssrNode(" "), _c('ScrollToTop')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=3487ee10

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js
/* harmony default export */ var errorvue_type_script_lang_js = ({
  components: {
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    ScrollToTop: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 208)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  head() {
    return {
      title: '404 Not Found'
    };
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_errorvue_type_script_lang_js = (errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cc1a4f26"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);

/* nuxt-component-imports */
installComponents(error_component, {HeaderOne: __webpack_require__(32).default,FooterOne: __webpack_require__(33).default})

// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "61a61645"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/scss/app.scss
var scss_app = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=2e33b2b3
var defaultvue_type_template_id_2e33b2b3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Nuxt'), _vm._ssrNode(" "), _c('ScrollToTop')], 2);
};
var defaultvue_type_template_id_2e33b2b3_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=2e33b2b3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js
/* harmony default export */ var defaultvue_type_script_lang_js = ({
  components: {
    ScrollToTop: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 208))
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js = (defaultvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js,
  defaultvue_type_template_id_2e33b2b3_render,
  defaultvue_type_template_id_2e33b2b3_staticRenderFns,
  false,
  null,
  null,
  "52bc58e6"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (layouts_error.options || layouts_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AccordionOne = () => __webpack_require__.e(/* import() | components/accordion-one */ 104).then(__webpack_require__.bind(null, 109)).then(c => wrapFunctional(c.default || c));
const FunFact = () => __webpack_require__.e(/* import() | components/fun-fact */ 126).then(__webpack_require__.bind(null, 96)).then(c => wrapFunctional(c.default || c));
const InstagramPost = () => __webpack_require__.e(/* import() | components/instagram-post */ 139).then(__webpack_require__.bind(null, 122)).then(c => wrapFunctional(c.default || c));
const About = () => __webpack_require__.e(/* import() | components/about */ 101).then(__webpack_require__.bind(null, 100)).then(c => wrapFunctional(c.default || c));
const AboutUsOneFunFact = () => __webpack_require__.e(/* import() | components/about-us-one-fun-fact */ 102).then(__webpack_require__.bind(null, 199)).then(c => wrapFunctional(c.default || c));
const AboutUsOneInstructor = () => __webpack_require__.e(/* import() | components/about-us-one-instructor */ 20).then(__webpack_require__.bind(null, 261)).then(c => wrapFunctional(c.default || c));
const AboutUsOneWhyChoose = () => __webpack_require__.e(/* import() | components/about-us-one-why-choose */ 21).then(__webpack_require__.bind(null, 262)).then(c => wrapFunctional(c.default || c));
const AboutUsThreeContactInfo = () => __webpack_require__.e(/* import() | components/about-us-three-contact-info */ 22).then(__webpack_require__.bind(null, 263)).then(c => wrapFunctional(c.default || c));
const AboutUsThreeFunFact = () => __webpack_require__.e(/* import() | components/about-us-three-fun-fact */ 103).then(__webpack_require__.bind(null, 200)).then(c => wrapFunctional(c.default || c));
const AboutUsThreeInstructor = () => __webpack_require__.e(/* import() | components/about-us-three-instructor */ 23).then(__webpack_require__.bind(null, 264)).then(c => wrapFunctional(c.default || c));
const AboutUsThreeTestimonial = () => __webpack_require__.e(/* import() | components/about-us-three-testimonial */ 24).then(__webpack_require__.bind(null, 265)).then(c => wrapFunctional(c.default || c));
const AboutUsThreeWhyChoose = () => __webpack_require__.e(/* import() | components/about-us-three-why-choose */ 25).then(__webpack_require__.bind(null, 266)).then(c => wrapFunctional(c.default || c));
const AboutUsTwoFeatures = () => __webpack_require__.e(/* import() | components/about-us-two-features */ 26).then(__webpack_require__.bind(null, 267)).then(c => wrapFunctional(c.default || c));
const AboutUsTwoFunFact = () => __webpack_require__.e(/* import() | components/about-us-two-fun-fact */ 27).then(__webpack_require__.bind(null, 268)).then(c => wrapFunctional(c.default || c));
const AboutUsTwoInstructor = () => __webpack_require__.e(/* import() | components/about-us-two-instructor */ 28).then(__webpack_require__.bind(null, 269)).then(c => wrapFunctional(c.default || c));
const AboutUsTwoLogo = () => __webpack_require__.e(/* import() | components/about-us-two-logo */ 29).then(__webpack_require__.bind(null, 340)).then(c => wrapFunctional(c.default || c));
const AboutUsTwoTestimonial = () => __webpack_require__.e(/* import() | components/about-us-two-testimonial */ 30).then(__webpack_require__.bind(null, 270)).then(c => wrapFunctional(c.default || c));
const AboutUsTwoVideo = () => __webpack_require__.e(/* import() | components/about-us-two-video */ 31).then(__webpack_require__.bind(null, 271)).then(c => wrapFunctional(c.default || c));
const AnimationMouseMove = () => __webpack_require__.e(/* import() | components/animation-mouse-move */ 0).then(__webpack_require__.bind(null, 209)).then(c => wrapFunctional(c.default || c));
const BlogPostList = () => __webpack_require__.e(/* import() | components/blog-post-list */ 105).then(__webpack_require__.bind(null, 155)).then(c => wrapFunctional(c.default || c));
const BlogPostOne = () => __webpack_require__.e(/* import() | components/blog-post-one */ 106).then(__webpack_require__.bind(null, 104)).then(c => wrapFunctional(c.default || c));
const BlogPostStandard = () => __webpack_require__.e(/* import() | components/blog-post-standard */ 107).then(__webpack_require__.bind(null, 156)).then(c => wrapFunctional(c.default || c));
const BlogPostTwo = () => __webpack_require__.e(/* import() | components/blog-post-two */ 108).then(__webpack_require__.bind(null, 162)).then(c => wrapFunctional(c.default || c));
const CommonBreadCrumbOne = () => __webpack_require__.e(/* import() | components/common-bread-crumb-one */ 5).then(__webpack_require__.bind(null, 272)).then(c => wrapFunctional(c.default || c));
const CommonBreadCrumbThree = () => __webpack_require__.e(/* import() | components/common-bread-crumb-three */ 32).then(__webpack_require__.bind(null, 273)).then(c => wrapFunctional(c.default || c));
const CommonBreadCrumbTwo = () => __webpack_require__.e(/* import() | components/common-bread-crumb-two */ 2).then(__webpack_require__.bind(null, 257)).then(c => wrapFunctional(c.default || c));
const CommonColorMode = () => __webpack_require__.e(/* import() | components/common-color-mode */ 3).then(__webpack_require__.bind(null, 259)).then(c => wrapFunctional(c.default || c));
const CommonPaginationOne = () => __webpack_require__.e(/* import() | components/common-pagination-one */ 11).then(__webpack_require__.bind(null, 341)).then(c => wrapFunctional(c.default || c));
const CommonSectionTitle = () => __webpack_require__.e(/* import() | components/common-section-title */ 1).then(__webpack_require__.bind(null, 274)).then(c => wrapFunctional(c.default || c));
const CourseTypeEight = () => __webpack_require__.e(/* import() | components/course-type-eight */ 109).then(__webpack_require__.bind(null, 163)).then(c => wrapFunctional(c.default || c));
const CourseTypeFive = () => __webpack_require__.e(/* import() | components/course-type-five */ 110).then(__webpack_require__.bind(null, 164)).then(c => wrapFunctional(c.default || c));
const CourseTypeFour = () => __webpack_require__.e(/* import() | components/course-type-four */ 111).then(__webpack_require__.bind(null, 165)).then(c => wrapFunctional(c.default || c));
const CourseTypeOne = () => __webpack_require__.e(/* import() | components/course-type-one */ 112).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c));
const CourseTypeSeven = () => __webpack_require__.e(/* import() | components/course-type-seven */ 113).then(__webpack_require__.bind(null, 157)).then(c => wrapFunctional(c.default || c));
const CourseTypeSix = () => __webpack_require__.e(/* import() | components/course-type-six */ 114).then(__webpack_require__.bind(null, 158)).then(c => wrapFunctional(c.default || c));
const CourseTypeThree = () => __webpack_require__.e(/* import() | components/course-type-three */ 115).then(__webpack_require__.bind(null, 119)).then(c => wrapFunctional(c.default || c));
const CourseTypeTwo = () => __webpack_require__.e(/* import() | components/course-type-two */ 33).then(__webpack_require__.bind(null, 120)).then(c => wrapFunctional(c.default || c));
const CtaCTAOne = () => __webpack_require__.e(/* import() | components/cta-c-t-a-one */ 4).then(__webpack_require__.bind(null, 275)).then(c => wrapFunctional(c.default || c));
const CtaCTAOneAlter = () => __webpack_require__.e(/* import() | components/cta-c-t-a-one-alter */ 12).then(__webpack_require__.bind(null, 276)).then(c => wrapFunctional(c.default || c));
const EventList = () => __webpack_require__.e(/* import() | components/event-list */ 116).then(__webpack_require__.bind(null, 159)).then(c => wrapFunctional(c.default || c));
const EventOne = () => __webpack_require__.e(/* import() | components/event-one */ 117).then(__webpack_require__.bind(null, 121)).then(c => wrapFunctional(c.default || c));
const EventSectionOne = () => __webpack_require__.e(/* import() | components/event-section-one */ 13).then(__webpack_require__.bind(null, 277)).then(c => wrapFunctional(c.default || c));
const EventTwo = () => __webpack_require__.e(/* import() | components/event-two */ 118).then(__webpack_require__.bind(null, 166)).then(c => wrapFunctional(c.default || c));
const HeaderCategory = () => __webpack_require__.e(/* import() | components/header-category */ 15).then(__webpack_require__.bind(null, 338)).then(c => wrapFunctional(c.default || c));
const HeaderFour = () => __webpack_require__.e(/* import() | components/header-four */ 127).then(__webpack_require__.bind(null, 144)).then(c => wrapFunctional(c.default || c));
const HeaderLanding = () => __webpack_require__.e(/* import() | components/header-landing */ 128).then(__webpack_require__.bind(null, 146)).then(c => wrapFunctional(c.default || c));
const HeaderOne = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c));
const HeaderThree = () => __webpack_require__.e(/* import() | components/header-three */ 129).then(__webpack_require__.bind(null, 160)).then(c => wrapFunctional(c.default || c));
const HeaderTopOne = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 75)).then(c => wrapFunctional(c.default || c));
const HeaderTopTwo = () => __webpack_require__.e(/* import() | components/header-top-two */ 130).then(__webpack_require__.bind(null, 102)).then(c => wrapFunctional(c.default || c));
const HeaderTwo = () => __webpack_require__.e(/* import() | components/header-two */ 35).then(__webpack_require__.bind(null, 152)).then(c => wrapFunctional(c.default || c));
const HeaderMobileMenu = () => __webpack_require__.e(/* import() | components/header-mobile-menu */ 16).then(__webpack_require__.bind(null, 210)).then(c => wrapFunctional(c.default || c));
const HeaderNavigation = () => __webpack_require__.e(/* import() | components/header-navigation */ 6).then(__webpack_require__.bind(null, 339)).then(c => wrapFunctional(c.default || c));
const HeaderOffCanvasMobileMenuOne = () => __webpack_require__.e(/* import() | components/header-off-canvas-mobile-menu-one */ 8).then(__webpack_require__.bind(null, 260)).then(c => wrapFunctional(c.default || c));
const HeaderOffCanvasMobileMenuTwo = () => __webpack_require__.e(/* import() | components/header-off-canvas-mobile-menu-two */ 34).then(__webpack_require__.bind(null, 278)).then(c => wrapFunctional(c.default || c));
const HeaderSearchPopUp = () => __webpack_require__.e(/* import() | components/header-search-pop-up */ 7).then(__webpack_require__.bind(null, 258)).then(c => wrapFunctional(c.default || c));
const FooterKindergarten = () => __webpack_require__.e(/* import() | components/footer-kindergarten */ 120).then(__webpack_require__.bind(null, 169)).then(c => wrapFunctional(c.default || c));
const FooterKitchen = () => __webpack_require__.e(/* import() | components/footer-kitchen */ 121).then(__webpack_require__.bind(null, 145)).then(c => wrapFunctional(c.default || c));
const FooterLanding = () => __webpack_require__.e(/* import() | components/footer-landing */ 122).then(__webpack_require__.bind(null, 148)).then(c => wrapFunctional(c.default || c));
const FooterOne = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)).then(c => wrapFunctional(c.default || c));
const FooterThree = () => __webpack_require__.e(/* import() | components/footer-three */ 123).then(__webpack_require__.bind(null, 170)).then(c => wrapFunctional(c.default || c));
const FooterTwo = () => __webpack_require__.e(/* import() | components/footer-two */ 124).then(__webpack_require__.bind(null, 150)).then(c => wrapFunctional(c.default || c));
const FooterYoga = () => __webpack_require__.e(/* import() | components/footer-yoga */ 125).then(__webpack_require__.bind(null, 154)).then(c => wrapFunctional(c.default || c));
const FooterGoogleMapWithAPI = () => __webpack_require__.e(/* import() | components/footer-google-map-with-a-p-i */ 119).then(__webpack_require__.bind(null, 342)).then(c => wrapFunctional(c.default || c));
const FooterScrollToTop = () => __webpack_require__.e(/* import() | components/footer-scroll-to-top */ 14).then(__webpack_require__.bind(null, 208)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningAbout = () => __webpack_require__.e(/* import() | components/home-distant-learning-about */ 36).then(__webpack_require__.bind(null, 279)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningBanner = () => __webpack_require__.e(/* import() | components/home-distant-learning-banner */ 37).then(__webpack_require__.bind(null, 280)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningBlog = () => __webpack_require__.e(/* import() | components/home-distant-learning-blog */ 38).then(__webpack_require__.bind(null, 281)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningCategories = () => __webpack_require__.e(/* import() | components/home-distant-learning-categories */ 39).then(__webpack_require__.bind(null, 282)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningCourse = () => __webpack_require__.e(/* import() | components/home-distant-learning-course */ 40).then(__webpack_require__.bind(null, 283)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningFAQ = () => __webpack_require__.e(/* import() | components/home-distant-learning-f-a-q */ 41).then(__webpack_require__.bind(null, 284)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningFunFact = () => __webpack_require__.e(/* import() | components/home-distant-learning-fun-fact */ 132).then(__webpack_require__.bind(null, 201)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningLogo = () => __webpack_require__.e(/* import() | components/home-distant-learning-logo */ 42).then(__webpack_require__.bind(null, 285)).then(c => wrapFunctional(c.default || c));
const HomeDistantLearningVideo = () => __webpack_require__.e(/* import() | components/home-distant-learning-video */ 43).then(__webpack_require__.bind(null, 286)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachAbout = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-about */ 52).then(__webpack_require__.bind(null, 287)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachBanner = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-banner */ 53).then(__webpack_require__.bind(null, 288)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachBlog = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-blog */ 54).then(__webpack_require__.bind(null, 289)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachCourse = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-course */ 56).then(__webpack_require__.bind(null, 290)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachCTA = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-c-t-a */ 55).then(__webpack_require__.bind(null, 291)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachFAQ = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-f-a-q */ 57).then(__webpack_require__.bind(null, 292)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachFeatures = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-features */ 58).then(__webpack_require__.bind(null, 343)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachFunFact = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-fun-fact */ 133).then(__webpack_require__.bind(null, 202)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachInstagram = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-instagram */ 59).then(__webpack_require__.bind(null, 293)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachInstructor = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-instructor */ 60).then(__webpack_require__.bind(null, 294)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachLogo = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-logo */ 61).then(__webpack_require__.bind(null, 344)).then(c => wrapFunctional(c.default || c));
const HomeKitchenCoachTestimonial = () => __webpack_require__.e(/* import() | components/home-kitchen-coach-testimonial */ 62).then(__webpack_require__.bind(null, 295)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenAbout = () => __webpack_require__.e(/* import() | components/home-kindergarten-about */ 44).then(__webpack_require__.bind(null, 296)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenActivities = () => __webpack_require__.e(/* import() | components/home-kindergarten-activities */ 45).then(__webpack_require__.bind(null, 297)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenBanner = () => __webpack_require__.e(/* import() | components/home-kindergarten-banner */ 46).then(__webpack_require__.bind(null, 298)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenBlog = () => __webpack_require__.e(/* import() | components/home-kindergarten-blog */ 47).then(__webpack_require__.bind(null, 299)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenCourse = () => __webpack_require__.e(/* import() | components/home-kindergarten-course */ 48).then(__webpack_require__.bind(null, 300)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenEvent = () => __webpack_require__.e(/* import() | components/home-kindergarten-event */ 49).then(__webpack_require__.bind(null, 301)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenFAQ = () => __webpack_require__.e(/* import() | components/home-kindergarten-f-a-q */ 50).then(__webpack_require__.bind(null, 302)).then(c => wrapFunctional(c.default || c));
const HomeKindergartenSubscriptionForm = () => __webpack_require__.e(/* import() | components/home-kindergarten-subscription-form */ 51).then(__webpack_require__.bind(null, 303)).then(c => wrapFunctional(c.default || c));
const HomeLandingDemoBanner = () => __webpack_require__.e(/* import() | components/home-landing-demo-banner */ 63).then(__webpack_require__.bind(null, 304)).then(c => wrapFunctional(c.default || c));
const HomeLandingDemoCourseLayout = () => __webpack_require__.e(/* import() | components/home-landing-demo-course-layout */ 64).then(__webpack_require__.bind(null, 305)).then(c => wrapFunctional(c.default || c));
const HomeLandingDemoFeatures = () => __webpack_require__.e(/* import() | components/home-landing-demo-features */ 65).then(__webpack_require__.bind(null, 306)).then(c => wrapFunctional(c.default || c));
const HomeLandingDemoFunFact = () => __webpack_require__.e(/* import() | components/home-landing-demo-fun-fact */ 134).then(__webpack_require__.bind(null, 203)).then(c => wrapFunctional(c.default || c));
const HomeDemo = () => __webpack_require__.e(/* import() | components/home-demo */ 131).then(__webpack_require__.bind(null, 147)).then(c => wrapFunctional(c.default || c));
const HomeLandingDemoInnerPages = () => __webpack_require__.e(/* import() | components/home-landing-demo-inner-pages */ 66).then(__webpack_require__.bind(null, 307)).then(c => wrapFunctional(c.default || c));
const HomeLandingDemoLearnWith = () => __webpack_require__.e(/* import() | components/home-landing-demo-learn-with */ 67).then(__webpack_require__.bind(null, 308)).then(c => wrapFunctional(c.default || c));
const HomeLandingDemoShopLayout = () => __webpack_require__.e(/* import() | components/home-landing-demo-shop-layout */ 68).then(__webpack_require__.bind(null, 309)).then(c => wrapFunctional(c.default || c));
const HomeMainAbout = () => __webpack_require__.e(/* import() | components/home-main-about */ 69).then(__webpack_require__.bind(null, 310)).then(c => wrapFunctional(c.default || c));
const HomeMainBanner = () => __webpack_require__.e(/* import() | components/home-main-banner */ 70).then(__webpack_require__.bind(null, 311)).then(c => wrapFunctional(c.default || c));
const HomeMainBlog = () => __webpack_require__.e(/* import() | components/home-main-blog */ 71).then(__webpack_require__.bind(null, 312)).then(c => wrapFunctional(c.default || c));
const HomeMainCategories = () => __webpack_require__.e(/* import() | components/home-main-categories */ 72).then(__webpack_require__.bind(null, 313)).then(c => wrapFunctional(c.default || c));
const HomeMainContactInfo = () => __webpack_require__.e(/* import() | components/home-main-contact-info */ 73).then(__webpack_require__.bind(null, 314)).then(c => wrapFunctional(c.default || c));
const HomeMainCourse = () => __webpack_require__.e(/* import() | components/home-main-course */ 74).then(__webpack_require__.bind(null, 315)).then(c => wrapFunctional(c.default || c));
const HomeMainFeatures = () => __webpack_require__.e(/* import() | components/home-main-features */ 75).then(__webpack_require__.bind(null, 345)).then(c => wrapFunctional(c.default || c));
const HomeMainFunFact = () => __webpack_require__.e(/* import() | components/home-main-fun-fact */ 135).then(__webpack_require__.bind(null, 204)).then(c => wrapFunctional(c.default || c));
const HomeMainInstructor = () => __webpack_require__.e(/* import() | components/home-main-instructor */ 76).then(__webpack_require__.bind(null, 316)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyBanner = () => __webpack_require__.e(/* import() | components/home-online-academy-banner */ 77).then(__webpack_require__.bind(null, 317)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyBlog = () => __webpack_require__.e(/* import() | components/home-online-academy-blog */ 78).then(__webpack_require__.bind(null, 318)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyCategories = () => __webpack_require__.e(/* import() | components/home-online-academy-categories */ 79).then(__webpack_require__.bind(null, 319)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyContactInfo = () => __webpack_require__.e(/* import() | components/home-online-academy-contact-info */ 80).then(__webpack_require__.bind(null, 346)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyCourse = () => __webpack_require__.e(/* import() | components/home-online-academy-course */ 81).then(__webpack_require__.bind(null, 320)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyFAQ = () => __webpack_require__.e(/* import() | components/home-online-academy-f-a-q */ 82).then(__webpack_require__.bind(null, 321)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyFunFact = () => __webpack_require__.e(/* import() | components/home-online-academy-fun-fact */ 136).then(__webpack_require__.bind(null, 205)).then(c => wrapFunctional(c.default || c));
const HomeOnlineAcademyInstructor = () => __webpack_require__.e(/* import() | components/home-online-academy-instructor */ 83).then(__webpack_require__.bind(null, 322)).then(c => wrapFunctional(c.default || c));
const HomeUniversityAbout = () => __webpack_require__.e(/* import() | components/home-university-about */ 84).then(__webpack_require__.bind(null, 323)).then(c => wrapFunctional(c.default || c));
const HomeUniversityBanner = () => __webpack_require__.e(/* import() | components/home-university-banner */ 85).then(__webpack_require__.bind(null, 324)).then(c => wrapFunctional(c.default || c));
const HomeUniversityCampus = () => __webpack_require__.e(/* import() | components/home-university-campus */ 86).then(__webpack_require__.bind(null, 325)).then(c => wrapFunctional(c.default || c));
const HomeUniversityContactInfo = () => __webpack_require__.e(/* import() | components/home-university-contact-info */ 87).then(__webpack_require__.bind(null, 347)).then(c => wrapFunctional(c.default || c));
const HomeUniversityCourse = () => __webpack_require__.e(/* import() | components/home-university-course */ 88).then(__webpack_require__.bind(null, 326)).then(c => wrapFunctional(c.default || c));
const HomeUniversityFeatures = () => __webpack_require__.e(/* import() | components/home-university-features */ 89).then(__webpack_require__.bind(null, 348)).then(c => wrapFunctional(c.default || c));
const HomeUniversityFunFact = () => __webpack_require__.e(/* import() | components/home-university-fun-fact */ 137).then(__webpack_require__.bind(null, 206)).then(c => wrapFunctional(c.default || c));
const HomeUniversityVideo = () => __webpack_require__.e(/* import() | components/home-university-video */ 17).then(__webpack_require__.bind(null, 327)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorAbout = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-about */ 91).then(__webpack_require__.bind(null, 328)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorBanner = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-banner */ 92).then(__webpack_require__.bind(null, 329)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorCourse = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-course */ 93).then(__webpack_require__.bind(null, 330)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorFunFact = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-fun-fact */ 138).then(__webpack_require__.bind(null, 207)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorInstagram = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-instagram */ 94).then(__webpack_require__.bind(null, 331)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructor = () => __webpack_require__.e(/* import() | components/home-yoga-instructor */ 90).then(__webpack_require__.bind(null, 332)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorTestimonial = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-testimonial */ 95).then(__webpack_require__.bind(null, 333)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorVideo = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-video */ 96).then(__webpack_require__.bind(null, 334)).then(c => wrapFunctional(c.default || c));
const HomeYogaInstructorWhyChoose = () => __webpack_require__.e(/* import() | components/home-yoga-instructor-why-choose */ 97).then(__webpack_require__.bind(null, 335)).then(c => wrapFunctional(c.default || c));
const InstructorFive = () => __webpack_require__.e(/* import() | components/instructor-five */ 140).then(__webpack_require__.bind(null, 161)).then(c => wrapFunctional(c.default || c));
const InstructorFour = () => __webpack_require__.e(/* import() | components/instructor-four */ 141).then(__webpack_require__.bind(null, 167)).then(c => wrapFunctional(c.default || c));
const InstructorOne = () => __webpack_require__.e(/* import() | components/instructor-one */ 18).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c));
const InstructorThree = () => __webpack_require__.e(/* import() | components/instructor-three */ 142).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c));
const InstructorTwo = () => __webpack_require__.e(/* import() | components/instructor-two */ 143).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c));
const LogoOne = () => __webpack_require__.e(/* import() | components/logo-one */ 144).then(__webpack_require__.bind(null, 118)).then(c => wrapFunctional(c.default || c));
const LogoTwo = () => __webpack_require__.e(/* import() | components/logo-two */ 98).then(__webpack_require__.bind(null, 168)).then(c => wrapFunctional(c.default || c));
const TestimonialOne = () => __webpack_require__.e(/* import() | components/testimonial-one */ 146).then(__webpack_require__.bind(null, 149)).then(c => wrapFunctional(c.default || c));
const TestimonialThree = () => __webpack_require__.e(/* import() | components/testimonial-three */ 147).then(__webpack_require__.bind(null, 153)).then(c => wrapFunctional(c.default || c));
const TestimonialTwo = () => __webpack_require__.e(/* import() | components/testimonial-two */ 148).then(__webpack_require__.bind(null, 117)).then(c => wrapFunctional(c.default || c));
const SidebarBlogSidebarOne = () => __webpack_require__.e(/* import() | components/sidebar-blog-sidebar-one */ 9).then(__webpack_require__.bind(null, 336)).then(c => wrapFunctional(c.default || c));
const SidebarCourseSidebarOne = () => __webpack_require__.e(/* import() | components/sidebar-course-sidebar-one */ 19).then(__webpack_require__.bind(null, 349)).then(c => wrapFunctional(c.default || c));
const SidebarEventSidebar = () => __webpack_require__.e(/* import() | components/sidebar-event-sidebar */ 99).then(__webpack_require__.bind(null, 350)).then(c => wrapFunctional(c.default || c));
const SidebarPageSidebarOne = () => __webpack_require__.e(/* import() | components/sidebar-page-sidebar-one */ 10).then(__webpack_require__.bind(null, 351)).then(c => wrapFunctional(c.default || c));
const ProductOne = () => __webpack_require__.e(/* import() | components/product-one */ 145).then(__webpack_require__.bind(null, 151)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// CONCATENATED MODULE: ./.nuxt/color-mode/color-scheme.js
/* harmony default export */ var color_scheme = ({
  name: 'ColorScheme',
  functional: true,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: 'span'
    }
  },
  render(createElement, {
    parent,
    data,
    props,
    children
  }) {
    // transform props for <client-only>
    props = {
      placeholder: props.placeholder,
      placeholderTag: props.tag
    };
    return createElement('client-only', {
      ...data,
      props
    }, children);
  }
});
// CONCATENATED MODULE: ./.nuxt/color-mode/plugin.server.js


external_vue_default.a.component('ColorScheme', color_scheme);
const script = {
  hid: 'nuxt-color-mode-script',
  innerHTML: `!function(){"use strict";var e=window,s=document,o=s.documentElement,a=["dark","light"],t=window.localStorage.getItem("nuxt-color-mode")||"system",c="system"===t?l():t,i=s.body.getAttribute("data-color-mode-forced");function r(e){var s=""+e+"-mode";o.classList?o.classList.add(s):o.className+=" "+s}function n(s){return e.matchMedia("(prefers-color-scheme"+s+")")}function l(){if(e.matchMedia&&"not all"!==n("").media)for(var s of a)if(n(":"+s).matches)return s;return"light"}i&&(c=i),r(c),e["__NUXT_COLOR_MODE__"]={preference:t,value:c,getColorScheme:l,addClass:r,removeClass:function(e){var s=""+e+"-mode";o.classList?o.classList.remove(s):o.className=o.className.replace(new RegExp(s,"g"),"")}}}();
`,
  pbody: true
};
const addScript = head => {
  head.script = head.script || [];
  head.script.push(script);
  const serializeProp = '__dangerouslyDisableSanitizersByTagID';
  head[serializeProp] = head[serializeProp] || {};
  head[serializeProp]['nuxt-color-mode-script'] = ['innerHTML'];
};
/* harmony default export */ var plugin_server = (function (ctx, inject) {
  if (typeof ctx.app.head === 'function') {
    const originalHead = ctx.app.head;
    ctx.app.head = function () {
      const head = originalHead.call(this) || {};
      addScript(head);
      return head;
    };
  } else {
    addScript(ctx.app.head);
  }
  const preference = 'system';
  const colorMode = {
    preference,
    value: preference,
    unknown: true,
    forced: false
  };
  if (ctx.route.matched[0]) {
    const pageColorMode = ctx.route.matched[0].components.default.options.colorMode;
    if (pageColorMode && pageColorMode !== 'system') {
      colorMode.value = pageColorMode;
      colorMode.forced = true;
      ctx.app.head.bodyAttrs = ctx.app.head.bodyAttrs || {};
      ctx.app.head.bodyAttrs['data-color-mode-forced'] = pageColorMode;
    } else if (pageColorMode === 'system') {
      console.warn('You cannot force the colorMode to system at the page level.');
    }
  }
  ctx.beforeNuxtRender(({
    nuxtState
  }) => {
    nuxtState.colorMode = colorMode;
  });
  inject('colorMode', colorMode);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(10);

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(25);
var external_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(external_vue_awesome_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/swiper.scss
var swiper = __webpack_require__(50);

// CONCATENATED MODULE: ./plugins/vue-awesome-swiper.js



external_vue_default.a.use(external_vue_awesome_swiper_default.a);
// EXTERNAL MODULE: external "vue-cool-lightbox"
var external_vue_cool_lightbox_ = __webpack_require__(26);
var external_vue_cool_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_cool_lightbox_);

// EXTERNAL MODULE: ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css
var vue_cool_lightbox_min = __webpack_require__(52);

// CONCATENATED MODULE: ./plugins/vue-cool-lightbox.js



external_vue_default.a.use(external_vue_cool_lightbox_default.a);
// EXTERNAL MODULE: ./node_modules/vue2-google-maps/dist/main.js
var main = __webpack_require__(27);

// CONCATENATED MODULE: ./plugins/vue2-google-maps.js


external_vue_default.a.use(main, {
  load: {
    key: 'AIzaSyDPzbTIM3WV8njIqWnGQH47umIP92dfUdY'
  }
});
// EXTERNAL MODULE: external "vue-pagination-2"
var external_vue_pagination_2_ = __webpack_require__(28);
var external_vue_pagination_2_default = /*#__PURE__*/__webpack_require__.n(external_vue_pagination_2_);

// CONCATENATED MODULE: ./plugins/vue-pagination.js


external_vue_default.a.component('pagination', external_vue_pagination_2_default.a);
// EXTERNAL MODULE: external "vue-inline-svg"
var external_vue_inline_svg_ = __webpack_require__(29);

// CONCATENATED MODULE: ./plugins/vue-inline-svg.js


external_vue_default.a.use(external_vue_inline_svg_["InlineSvgPlugin"]);
// EXTERNAL MODULE: external "vue-observe-visibility"
var external_vue_observe_visibility_ = __webpack_require__(30);
var external_vue_observe_visibility_default = /*#__PURE__*/__webpack_require__.n(external_vue_observe_visibility_);

// CONCATENATED MODULE: ./plugins/observe-visibility.js


external_vue_default.a.use(external_vue_observe_visibility_default.a);
// EXTERNAL MODULE: external "vue-masonry-css"
var external_vue_masonry_css_ = __webpack_require__(31);
var external_vue_masonry_css_default = /*#__PURE__*/__webpack_require__.n(external_vue_masonry_css_);

// CONCATENATED MODULE: ./plugins/vue-masonry-css.js


external_vue_default.a.use(external_vue_masonry_css_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\color-mode\\plugin.server.js (mode: 'server')
 // Source: .\\color-mode\\plugin.client.js (mode: 'client')
 // Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'all')
 // Source: ..\\plugins\\vue-cool-lightbox.js (mode: 'all')
 // Source: ..\\plugins\\vue2-google-maps.js (mode: 'all')
 // Source: ..\\plugins\\vue-pagination.js (mode: 'all')
 // Source: ..\\plugins\\vue-inline-svg.js (mode: 'all')
 // Source: ..\\plugins\\observe-visibility.js (mode: 'all')
 // Source: ..\\plugins\\vue-masonry-css.js (mode: 'all')
 // Source: ..\\plugins\\bootstrap.bundle.min.js (mode: 'client')
 // Source: ..\\plugins\\aos (mode: 'client')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Area51 Portal",
      "titleTemplate": "Area 51 Solutions Technology - Portal",
      "htmlAttrs": {
        "lang": "zxx"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.png"
      }],
      "script": [{
        "src": "\u002Fjs\u002Fpace.min.js"
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  }
  if (false) {}
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-cool-lightbox.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-cool-lightbox.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-pagination.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-pagination.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-inline-svg.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-inline-svg.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/observe-visibility.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/observe-visibility.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-masonry-css.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-masonry-css.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (false) {}

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', [_vm._ssrNode("<div>", "</div>", [_vm._t("default")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js
/* harmony default export */ var infoWindowvue_type_script_lang_js = ((function (x) {
  return x.default || x;
})(__webpack_require__(61)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js
 /* harmony default export */ var components_infoWindowvue_type_script_lang_js = (infoWindowvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_infoWindowvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f211a1f4"
  
)

/* harmony default export */ var infoWindow = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "vue-map-container"
  }, [_vm._ssrNode("<div class=\"vue-map\"></div> "), _vm._ssrNode("<div class=\"vue-map-hidden\">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" "), _vm._t("visible")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js
/* harmony default export */ var mapvue_type_script_lang_js = ((function (x) {
  return x.default || x;
})(__webpack_require__(62)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js
 /* harmony default export */ var components_mapvue_type_script_lang_js = (mapvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mapvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d5c23278"
  
)

/* harmony default export */ var map = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "vue-street-view-pano-container"
  }, [_vm._ssrNode("<div class=\"vue-street-view-pano\"></div> "), _vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js
/* harmony default export */ var streetViewPanoramavue_type_script_lang_js = ((function (x) {
  return x.default || x;
})(__webpack_require__(65)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js
 /* harmony default export */ var components_streetViewPanoramavue_type_script_lang_js = (streetViewPanoramavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_streetViewPanoramavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "02592d25"
  
)

/* harmony default export */ var streetViewPanorama = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('input', _vm._g(_vm._b({
    ref: "input"
  }, 'input', _vm.$attrs, false), _vm.$listeners), []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js
/* harmony default export */ var autocompletevue_type_script_lang_js = ((function (x) {
  return x.default || x;
})(__webpack_require__(69)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js
 /* harmony default export */ var components_autocompletevue_type_script_lang_js = (autocompletevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_autocompletevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "70b588a0"
  
)

/* harmony default export */ var autocomplete = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderTopOne.vue?vue&type=template&id=b386210a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header-top-bar"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"header-top\">", "</div>", [_vm._ssrNode("<div class=\"header-top-left\">", "</div>", [_vm._ssrNode("<div class=\"header-notify\">", "</div>", [_vm._ssrNode("\n                    First 20 students get 50% discount. "), _c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Hurry up!")])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-top-right\">", "</div>", [_vm._ssrNode("<ul class=\"header-info\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/my-account"
    }
  }, [_vm._v("Login")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/my-account"
    }
  }, [_vm._v("Register")])], 1), _vm._ssrNode(" <li><a href=\"tel:+011235641231\"><i class=\"icon-phone\"></i>Call: 123 4561 5523</a></li> <li><a href=\"mailto:info@edublink.com\" target=\"_blank\"><i class=\"icon-envelope\"></i>Email: info@edublink.com</a></li> <li class=\"social-icon\"><a href=\"https://facebook.com/\"><i class=\"icon-facebook\"></i></a> <a href=\"https://instagram.com/\"><i class=\"icon-instagram\"></i></a> <a href=\"https://twitter.com/\"><i class=\"icon-twitter\"></i></a> <a href=\"https://linkedin.com/\"><i class=\"icon-linkedin2\"></i></a></li>")], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/HeaderTopOne.vue?vue&type=template&id=b386210a

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/HeaderTopOne.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "724aea82"
  
)

/* harmony default export */ var HeaderTopOne = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("vue-count-to");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("rellax");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("parallax-js");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map