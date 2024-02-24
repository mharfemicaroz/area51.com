exports.ids = [35];
exports.modules = {

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
  add("5dbd0367", content, true, context)
};

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_e1bb3294_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_e1bb3294_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_e1bb3294_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_e1bb3294_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_e1bb3294_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-1-for-dark{right:125px;top:-58px;visibility:hidden}.dark-mode .hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-1-for-dark{visibility:visible}.dark-mode .hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-1.for-light{visibility:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-distant-learning/Banner.vue?vue&type=template&id=e1bb3294
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "hero-banner hero-style-2 bg-image"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row row--45 align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"banner-content\">", "</div>", [_vm._ssrNode("<h1 class=\"title\">The Best <br> Program to <span class=\"color-secondary\">Enroll</span> for Exchange</h1> <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p> "), _vm._ssrNode("<div class=\"banner-btn\">", "</div>", [_c('n-link', {
    staticClass: "edu-btn",
    attrs: {
      "to": "/course/course-one"
    }
  }, [_vm._v("Find courses "), _c('i', {
    staticClass: "icon-4"
  })])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"banner-gallery\">", "</div>", [_vm._ssrNode("<div data-aos-delay=\"500\" data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"thumbnail thumbnail-1\"><img src=\"/images/banner/girl-2.jpg\" alt=\"Girl Image\"></div> <div data-aos-delay=\"500\" data-aos=\"fade-down\" data-aos-duration=\"1000\" class=\"thumbnail thumbnail-2\"><img src=\"/images/banner/man-1.jpg\" alt=\"Girl Image\"></div> <div data-aos-delay=\"600\" data-aos=\"fade-right\" data-aos-duration=\"1000\" class=\"online-support\"><div class=\"inner\"><div class=\"icon\"><i class=\"icon-29\"></i></div> <div class=\"content\"><span class=\"subtitle\">Online Support </span> <h4 class=\"title\"><a href=\"tel:+0123456789\">+012 (345) 6789</a></h4></div></div></div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1 shape-light",
      "dataDepth": "2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/faq/shape-13.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-1 shape-dark",
      "dataDepth": "2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/faq/dark-shape-13.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/faq/shape-12.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3 shape-light",
      "dataDepth": "2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/faq/shape-09.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3 shape-dark",
      "dataDepth": "2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/faq/dark-shape-09.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-4",
      "dataDepth": "-2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/cta/shape-04.png"
    }
  })], 2)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-distant-learning/Banner.vue?vue&type=template&id=e1bb3294

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-distant-learning/Banner.vue?vue&type=script&lang=js
/* harmony default export */ var Bannervue_type_script_lang_js = ({
  components: {
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209)),
    ColorMode: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 259))
  }
});
// CONCATENATED MODULE: ./components/home-distant-learning/Banner.vue?vue&type=script&lang=js
 /* harmony default export */ var home_distant_learning_Bannervue_type_script_lang_js = (Bannervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-distant-learning/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_distant_learning_Bannervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "974df8e4"
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-distant-learning-banner.js.map