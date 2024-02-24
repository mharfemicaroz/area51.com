exports.ids = [156];
exports.modules = {

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c7f3ed88", content, true, context)
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_a985ff24_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_a985ff24_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_a985ff24_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_a985ff24_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_a985ff24_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".coming-soon-page-area{overflow-y:inherit}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coming-soon.vue?vue&type=template&id=a985ff24
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "coming-soon-page-area bg-image--22"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"coming-soon-content\"><h1 class=\"title\">Coming Soon</h1> <div class=\"coming-countdown\"><div class=\"countdown-section\"><div><div id=\"days\" class=\"countdown-number day\"></div> <div class=\"countdown-unit\">Days</div></div></div> <div class=\"countdown-section\"><div><div id=\"hours\" class=\"countdown-number hour\"></div> <div class=\"countdown-unit\">Hours</div></div></div> <div class=\"countdown-section\"><div><div id=\"minutes\" class=\"countdown-number minute\"></div> <div class=\"countdown-unit\">Minutes</div></div></div> <div class=\"countdown-section\"><div><div id=\"seconds\" class=\"countdown-number second\"></div> <div class=\"countdown-unit\">Seconds</div></div></div></div> <div class=\"input-group\"><input type=\"email\" placeholder=\"Enter your email address\" class=\"form-control\"> <button type=\"button\" class=\"edu-btn btn-medium\">Subscribe <i class=\"icon-4\"></i></button></div></div></div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "2",
      "imgSrc": "/images/others/shape-22.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-2",
      "imgSrc": "/images/others/shape-23.png"
    }
  }), _vm._ssrNode(" <li class=\"shape-3\"><img src=\"/images/others/shape-24.png\" alt=\"Shape\" class=\"rotateit\"></li> <li class=\"shape-4\"></li>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/coming-soon.vue?vue&type=template&id=a985ff24

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coming-soon.vue?vue&type=script&lang=js
/* harmony default export */ var coming_soonvue_type_script_lang_js = ({
  components: {
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  mounted() {
    const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day = hour * 24;
    const end = new Date('Dec 31, 2022 00:00:00').getTime();
    const int = setInterval(() => {
      const current = new Date().getTime();
      const remaining = end - current;
      const day2 = Math.floor(remaining / day);
      const hour2 = Math.floor(remaining % day / hour);
      const minute = Math.floor(remaining % hour / min);
      const second = Math.floor(remaining % min / sec);
      document.getElementById('days').innerText = day2 > 9 ? day2 : `0${day2}`;
      document.getElementById('hours').innerText = hour2 > 9 ? hour2 : `0${hour2}`;
      document.getElementById('minutes').innerText = minute > 9 ? minute : `0${minute}`;
      document.getElementById('seconds').innerText = second > 9 ? second : `0${second}`;
    }, 1000);
  }
});
// CONCATENATED MODULE: ./pages/coming-soon.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_coming_soonvue_type_script_lang_js = (coming_soonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/coming-soon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_coming_soonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6e82d527"
  
)

/* harmony default export */ var coming_soon = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=coming-soon.js.map