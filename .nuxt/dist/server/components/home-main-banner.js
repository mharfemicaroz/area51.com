exports.ids = [68];
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
  add("4825f0a0", content, true, context)
};

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_10b72172_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_10b72172_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_10b72172_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_10b72172_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_10b72172_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero-style-1 .banner-thumbnail .shape-group li.shape-3.circle-shape{background:var(--color-tertiary);border-radius:100%;height:41px;width:41px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-main/Banner.vue?vue&type=template&id=10b72172
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "hero-banner hero-style-1 bg-image bg-image--11"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"banner-content\">", "</div>", [_vm._ssrNode("<h1 class=\"title\">Get <span class=\"color-secondary\">2500+</span> <br>Best Online Courses From EduBlink</h1> <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p> "), _vm._ssrNode("<div class=\"banner-btn\">", "</div>", [_c('n-link', {
    staticClass: "edu-btn",
    attrs: {
      "to": "/course/course-one"
    }
  }, [_vm._v("\n                            Find courses "), _c('i', {
    staticClass: "icon-4"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/about/shape-13.png"
    }
  })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"banner-thumbnail\">", "</div>", [_vm._ssrNode("<div data-aos-delay=\"500\" data-aos=\"fade-left\" data-aos-duration=\"1000\" class=\"thumbnail\"><img src=\"/images/banner/girl-1.png\" alt=\"Girl Image\"></div> <div data-aos-delay=\"200\" data-aos=\"fade-up\" data-aos-duration=\"500\" class=\"instructor-info\"><div class=\"inner\"><h5 class=\"title\">Instrunctor</h5> <div class=\"media\"><div class=\"thumb\"><img src=\"/images/banner/author-1.png\" alt=\"Images\"></div> <div class=\"content\"><span>200+</span> Instactors\n                                </div></div></div></div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_vm._ssrNode("<li data-aos-delay=\"1000\" data-aos=\"fade\" data-aos-duration=\"1000\" class=\"shape-1\"><img src=\"/images/about/shape-15.png\" alt=\"Shape\"></li> <li data-aos-delay=\"1000\" data-aos=\"fade\" data-aos-duration=\"1000\" class=\"shape-4\"><img src=\"/images/counterup/shape-02.png\" alt=\"Shape\"></li> "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-1.5",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/about/shape-16.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3 circle-shape",
      "dataDepth": "3",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-5",
      "dataDepth": "1.5",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/about/shape-13.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-6",
      "dataDepth": "-2",
      "data-aos-delay": "1000",
      "data-aos": "fade",
      "data-aos-duration": "1000",
      "imgSrc": "/images/about/shape-18.png"
    }
  })], 2)], 2)])], 2)]), _vm._ssrNode(" <div class=\"shape-7\"><img src=\"/images/about/h-1-shape-01.png\" alt=\"Shape\"></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-main/Banner.vue?vue&type=template&id=10b72172

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-main/Banner.vue?vue&type=script&lang=js
/* harmony default export */ var Bannervue_type_script_lang_js = ({
  components: {
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  }
});
// CONCATENATED MODULE: ./components/home-main/Banner.vue?vue&type=script&lang=js
 /* harmony default export */ var home_main_Bannervue_type_script_lang_js = (Bannervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-main/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_main_Bannervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0f9ac142"
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-main-banner.js.map