exports.ids = [96];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_0__);

const parallaxAnimation = () => {
  let animatiedItem = document.querySelectorAll('.rellax');
  if (animatiedItem) {
    animatiedItem.forEach((item, _) => {
      new rellax__WEBPACK_IMPORTED_MODULE_0___default.a(item);
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (parallaxAnimation);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("23774842", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyChoose_vue_vue_type_style_index_0_id_09f729f0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyChoose_vue_vue_type_style_index_0_id_09f729f0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyChoose_vue_vue_type_style_index_0_id_09f729f0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyChoose_vue_vue_type_style_index_0_id_09f729f0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyChoose_vue_vue_type_style_index_0_id_09f729f0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--color-primary:#1ab69d;--color-secondary:#ee4a62;--color-textSecondary:#ff5b5c;--color-tertiary:#f8b81f;--color-dark:#111212;--color-heading:#181818;--dark-color-heading:#fff;--color-border:#e5e5e5;--dark-color-border:#282f3a;--color-body:grey;--gradient-primary:linear-gradient(-90deg,#31b978,#1ab69d);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#181818;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#bababa;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#3eb75e;--color-danger:#ff0003;--color-warning:#ff8f3c;--color-info:#1ba2db;--color-placeholder:grey;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:\"Poppins\",sans-serif;--font-secondary:\"Spartan\",sans-serif;--font-icomoon:\"icomoon\";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}@media only screen and (max-width:767px){.why-choose-gallery{padding-bottom:75px}}.why-choose-gallery .thumbnail.thumbnail-2{margin-top:-85px}.why-choose-gallery .shape-group li.shape-2{bottom:85px;right:65px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-yoga-instructor/WhyChoose.vue?vue&type=template&id=09f729f0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "why-choose-area-1 gap-top-text"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row g-5 row--45\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"why-choose-content\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Why Choose",
      "preTitleClass": "pre-textsecondary",
      "title": "Why Choose My Yoga Courses?",
      "subTitle": "Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur.",
      "alignment": "section-left"
    }
  }), _vm._ssrNode(" <div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"features-list\">" + _vm._ssrList(_vm.features, function (feature, i) {
    return "<div" + _vm._ssrClass("features-box", feature.class) + "><div class=\"icon\"><i" + _vm._ssrClass(null, feature.iconClass) + "></i></div> <div class=\"content\"><h5 class=\"title\">" + _vm._ssrEscape(_vm._s(feature.title)) + "</h5> <p>" + _vm._ssrEscape(_vm._s(feature.details)) + "</p></div></div>";
  }) + "</div>")], 2)]), _vm._ssrNode(" <div class=\"col-lg-6\"><div class=\"why-choose-gallery\"><div class=\"gallery-thumbnail\"><div class=\"thumbnail thumbnail-1\"><img src=\"/images/others/why-choose-01.jpg\" alt=\"Why Choose\"></div> <div data-rellax-speed=\"0.7\" data-rellax-xs-speed=\"0.7\" data-rellax-mobile-speed=\"0.5\" data-rellax-tablet-speed=\"0.5\" class=\"thumbnail thumbnail-2 rellax\"><img src=\"/images/others/why-choose-02.jpg\" alt=\"Why Choose\"></div></div> <ul class=\"shape-group\"><li data-aos-delay=\"500\" data-aos=\"fade\" data-aos-duration=\"200\" class=\"shape-1\"><img src=\"/images/about/shape-14.png\" alt=\"Shape Images\"></li> <li data-aos-delay=\"500\" data-aos=\"fade\" data-aos-duration=\"200\" class=\"shape-2\"><img src=\"/images/about/shape-10.png\" alt=\"Shape Images\"></li></ul></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-yoga-instructor/WhyChoose.vue?vue&type=template&id=09f729f0

// EXTERNAL MODULE: ./common/parallaxAnimation.js
var parallaxAnimation = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-yoga-instructor/WhyChoose.vue?vue&type=script&lang=js

/* harmony default export */ var WhyChoosevue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 276))
  },
  mounted() {
    Object(parallaxAnimation["a" /* default */])();
  },
  data() {
    return {
      features: [{
        class: 'color-secondary-style',
        iconClass: 'icon-81',
        title: 'Exclusive Program',
        details: 'Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris.'
      }, {
        class: 'color-primary-style',
        iconClass: 'icon-82',
        title: 'Online Training',
        details: 'Consectetur adipisicing elit, sed do eiusmod tempor ux incididunt ut labore et dolore.'
      }, {
        class: 'color-extra05-style',
        iconClass: 'icon-83',
        title: 'Individual Care',
        details: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/home-yoga-instructor/WhyChoose.vue?vue&type=script&lang=js
 /* harmony default export */ var home_yoga_instructor_WhyChoosevue_type_script_lang_js = (WhyChoosevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-yoga-instructor/WhyChoose.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_yoga_instructor_WhyChoosevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3339b3a6"
  
)

/* harmony default export */ var WhyChoose = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-yoga-instructor-why-choose.js.map