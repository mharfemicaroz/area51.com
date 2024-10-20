exports.ids = [49,118];
exports.modules = {

/***/ 103:
/***/ (function(module) {

module.exports = JSON.parse("{\"events\":[{\"id\":1,\"imgSrc\":\"DNSC.jpg\",\"title\":\"Davao Del Norte State College Event\",\"date\":\"18\",\"fullDate\":\"January 18, 2024\",\"month\":\"JAN\",\"time\":\"10:00AM-12:00PM\",\"location\":\"Davao City, Philippines\",\"excerpt\":\"A collaborative event between Davao Del Norte State College and international partners.\"},{\"id\":2,\"imgSrc\":\"DICTXI.jpg\",\"title\":\"DICT Partnership Meeting\",\"date\":\"19\",\"fullDate\":\"February 19, 2024\",\"month\":\"FEB\",\"time\":\"02:00PM-04:00PM\",\"location\":\"DICT Office, Philippines\",\"excerpt\":\"A strategic meeting focusing on future partnerships with the Department of Information and Communications Technology.\"},{\"id\":3,\"imgSrc\":\"CBaaS Webinar.jpg\",\"title\":\"CBaaS Innovation Webinar\",\"date\":\"20\",\"fullDate\":\"July 20, 2024\",\"month\":\"JUL\",\"time\":\"09:00AM-11:00AM\",\"location\":\"Online Webinar\",\"excerpt\":\"An insightful webinar on unlocking innovation for commercialization, featuring industry leaders from across the globe.\"},{\"id\":4,\"imgSrc\":\"Unlocking Innovations.jpg\",\"title\":\"Unlocking Innovations\",\"date\":\"20\",\"fullDate\":\"September 20, 2024\",\"month\":\"SEP\",\"time\":\"09:00AM-11:00AM\",\"location\":\"Online Webinar\",\"excerpt\":\"A thought-provoking webinar on harnessing innovation for commercialization, featuring global industry leaders.\"}]}");

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0af12164", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/event/EventTwo.vue?vue&type=template&id=afc6e23a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-event-list event-list-3",
    class: _vm.eventInfo.colorClass
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/event/event-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/event/event-02/' + _vm.eventInfo.imgSrc,
      "alt": _vm.eventInfo.name + ' Thumbnail'
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<ul class=\"event-meta\"><li><i class=\"icon-27\"></i>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.date)) + "</li></ul> "), _vm._ssrNode("<h4 class=\"title\">", "</h4>", [_c('n-link', {
    attrs: {
      "to": "/event/event-details"
    }
  }, [_vm._v(_vm._s(_vm.eventInfo.title))])], 1), _vm._ssrNode(" <span class=\"event-location\"><i class=\"icon-40\"></i>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.location)) + "</span> <p>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.excerpt)) + "</p> "), _vm._ssrNode("<div class=\"read-more-btn\">", "</div>", [_c('n-link', {
    staticClass: "edu-btn btn-medium curved-medium",
    attrs: {
      "to": "/event/event-details"
    }
  }, [_vm._v("Attend "), _c('i', {
    staticClass: "icon-4"
  })])], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/event/EventTwo.vue?vue&type=template&id=afc6e23a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/event/EventTwo.vue?vue&type=script&lang=js
/* harmony default export */ var EventTwovue_type_script_lang_js = ({
  props: ['eventInfo']
});
// CONCATENATED MODULE: ./components/event/EventTwo.vue?vue&type=script&lang=js
 /* harmony default export */ var event_EventTwovue_type_script_lang_js = (EventTwovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/event/EventTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  event_EventTwovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7a4ce61c"
  
)

/* harmony default export */ var EventTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_ad441834_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_ad441834_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_ad441834_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_ad441834_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_ad441834_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--color-primary:#4a90e2;--color-secondary:#f5a623;--color-tertiary:#7ed321;--color-textSecondary:#d0021b;--color-dark:#4a4a4a;--color-heading:#8b572a;--dark-color-heading:#fff;--color-border:#b8e986;--dark-color-border:#4a4a4a;--color-body:#9b9b9b;--gradient-primary:linear-gradient(-90deg,#50e3c2,#4a90e2);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#8b572a;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#8b572a;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#7ed321;--color-danger:#d0021b;--color-warning:#f5a623;--color-info:#4a90e2;--color-placeholder:#9b9b9b;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:\"Poppins\",sans-serif;--font-secondary:\"Spartan\",sans-serif;--font-icomoon:\"icomoon\";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}.kindergarten-event{position:relative}.kindergarten-event .edublink-animated-shape{z-index:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kindergarten/Event.vue?vue&type=template&id=ad441834
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "kindergarten-event event-area-3 bg-image"
  }, [_vm._ssrNode("<div class=\"container edublink-animated-shape\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Discover Event",
      "preTitleClass": "pre-textsecondary",
      "title": "Join Our Upcoming Event",
      "alignment": "section-center"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.eventData.kindergartenEvents.slice(0, 4), function (event) {
    return _vm._ssrNode("<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-6 col-12\">", "</div>", [_c('EventTwo', {
      attrs: {
        "eventInfo": event
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "2",
      "imgSrc": "/images/banner/icon-2.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-2",
      "imgSrc": "/images/banner/icon-1.png"
    }
  })], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-kindergarten/Event.vue?vue&type=template&id=ad441834

// EXTERNAL MODULE: ./data/event.json
var data_event = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kindergarten/Event.vue?vue&type=script&lang=js

/* harmony default export */ var Eventvue_type_script_lang_js = ({
  props: ['extraClass'],
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 274)),
    EventTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 166)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  data() {
    return {
      eventData: data_event
    };
  }
});
// CONCATENATED MODULE: ./components/home-kindergarten/Event.vue?vue&type=script&lang=js
 /* harmony default export */ var home_kindergarten_Eventvue_type_script_lang_js = (Eventvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-kindergarten/Event.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_kindergarten_Eventvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b746c04"
  
)

/* harmony default export */ var Event = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EventTwo: __webpack_require__(166).default})


/***/ })

};;
//# sourceMappingURL=home-kindergarten-event.js.map