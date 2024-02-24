exports.ids = [56];
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
  add("02f008e5", content, true, context)
};

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_5ad8ec58_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_5ad8ec58_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_5ad8ec58_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_5ad8ec58_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_5ad8ec58_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--color-primary:#1ab69d;--color-secondary:#ee4a62;--color-textSecondary:#ff5b5c;--color-tertiary:#f8b81f;--color-dark:#111212;--color-heading:#181818;--dark-color-heading:#fff;--color-border:#e5e5e5;--dark-color-border:#282f3a;--color-body:grey;--gradient-primary:linear-gradient(-90deg,#31b978,#1ab69d);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#181818;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#bababa;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#3eb75e;--color-danger:#ff0003;--color-warning:#ff8f3c;--color-info:#1ba2db;--color-placeholder:grey;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:\"Poppins\",sans-serif;--font-secondary:\"Spartan\",sans-serif;--font-icomoon:\"icomoon\";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}.kitchen-skilled-instructor-svg .st0,.kitchen-skilled-instructor-svg .st1,.kitchen-skilled-instructor-svg .st2{fill:none;stroke:#1ab69d;stroke:var(--color-primary);stroke-width:2;stroke-miterlimit:10}.kitchen-skilled-instructor-svg .st1{stroke-linecap:round}.kitchen-skilled-instructor-svg .st2{stroke-linecap:round;stroke-linejoin:round}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kitchen-coach/Features.vue?vue&type=template&id=5ad8ec58
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area-1 gap-top-equal"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row g-5\"><div data-aos-delay=\"50\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-3\"><div class=\"features-box color-primary-style edublink-svg-animate\"><div class=\"icon\"><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 44 44\" xml:space=\"preserve\" class=\"svgInject kitchen-skilled-instructor-svg\" style=\"enable-background:new 0 0 44 44;\"><g><circle cx=\"11.88\" cy=\"6.09\" r=\"4.09\" class=\"st0\"></circle> <path d=\"M8.95,14.04l0.79,0.58c1.23,0.91,2.94,0.79,4.03-0.3l0,0c0.58-0.58,1.37-0.9,2.19-0.9h0\n                                    c2.19,0,4.3,0.87,5.85,2.42l0.83,0.83c0.29,0.29,0.68,0.45,1.08,0.45h3.34c1.41,0,2.55,1.14,2.55,2.55v0\n                                    c0,1.41-1.14,2.55-2.55,2.55h-4.83c-0.76,0-1.49-0.3-2.02-0.84l-1.83-1.83c-0.64-0.64-1.73-0.19-1.73,0.72V42h-4.76H7.07V31.56\n                                    c0-1.47-1.2-2.67-2.67-2.67h0c-1.11,0-2.02-0.9-2.02-2.02v-8.72c0-2.62,2.12-4.73,4.74-4.73h0C7.78,13.43,8.42,13.64,8.95,14.04z\" class=\"st0\"></path> <line x1=\"11.81\" y1=\"41.19\" x2=\"11.81\" y2=\"27.07\" class=\"st1\"></line> <path d=\"M19.21,2h20.76c1.16,0,2.11,0.94,2.11,2.11v21.56c0,1.16-0.94,2.11-2.11,2.11H20.76\" class=\"st2\"></path> <line x1=\"23.29\" y1=\"6.85\" x2=\"34.96\" y2=\"6.85\" class=\"st2\"></line> <line x1=\"23.29\" y1=\"11.67\" x2=\"28.83\" y2=\"11.67\" class=\"st2\"></line> <line x1=\"34.61\" y1=\"11.49\" x2=\"28.97\" y2=\"17.13\" class=\"st2\"></line> <line x1=\"1.93\" y1=\"42\" x2=\"34.46\" y2=\"42\" class=\"st1\"></line></g></svg></div> <div class=\"content\"><h5 class=\"title\"><span>Skilled </span>Lecturers</h5> <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p></div></div></div> <div data-aos-delay=\"100\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-3\"><div class=\"features-box color-secondary-style edublink-svg-animate\"><div class=\"icon\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svgInject\"><path d=\"M3.51448 30.4573C0.0954334 27.0383 0.0954334 21.4954 3.51448 18.0764L18.0764 3.51448C21.4954 0.0954334 27.0383 0.0954334 30.4573 3.51448C33.8764 6.93353 33.8764 12.4764 30.4573 15.8954L15.8954 30.4573C12.4764 33.8764 6.93353 33.8764 3.51448 30.4573Z\" stroke=\"#ee4a62\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path> <path d=\"M31.3715 39.0477C35.6109 39.0477 39.0477 35.6109 39.0477 31.3715C39.0477 27.1321 35.6109 23.6953 31.3715 23.6953C27.1321 23.6953 23.6953 27.1321 23.6953 31.3715C23.6953 35.6109 27.1321 39.0477 31.3715 39.0477Z\" stroke=\"#ee4a62\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path> <path d=\"M10.7905 10.791L23.1715 23.172\" stroke=\"#ee4a62\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path> <path d=\"M25.9619 36.781L36.781 25.9619\" stroke=\"#ee4a62\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path> <path d=\"M19.5337 9.57139L21.9527 7.15234\" stroke=\"#ee4a62\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path></svg></div> <div class=\"content\"><h5 class=\"title\"><span>Distance</span> Programs</h5> <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p></div></div></div> <div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-3\"><div class=\"features-box color-extra08-style edublink-svg-animate\"><div class=\"icon\"><svg width=\"37\" viewBox=\"0 0 48 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svgInject\"><path d=\"M29.1048 32.5521H2.67293C1.72721 32.5521 0.964844 31.7998 0.964844 30.8664V2.63786C0.964844 1.70453 1.72721 0.952148 2.67293 0.952148H45.3267C46.2724 0.952148 47.0348 1.70453 47.0348 2.63786V30.8664C47.0348 31.7998 46.2724 32.5521 45.3267 32.5521H41.8044\" fill=\"none\" stroke=\"#4664e4\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path> <path d=\"M8.31836 9.33301H40.6658\" fill=\"none\" stroke=\"#4664e4\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M8.31836 16.752H22.369\" fill=\"none\" stroke=\"#4664e4\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M35.4355 28.2858C39.001 28.2858 41.8914 25.4332 41.8914 21.9144C41.8914 18.3956 39.001 15.543 35.4355 15.543C31.8699 15.543 28.9795 18.3956 28.9795 21.9144C28.9795 25.4332 31.8699 28.2858 35.4355 28.2858Z\" fill=\"none\" stroke=\"#4664e4\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path> <path d=\"M30.5523 26.0762L28.0626 38.6286C28.0047 38.9238 28.3231 39.1428 28.5837 39L34.5668 35.619C35.0975 35.3143 35.7538 35.3143 36.2942 35.619L42.2773 39C42.5378 39.1524 42.8563 38.9238 42.7984 38.6286L40.3086 26.0762\" fill=\"none\" stroke=\"#4664e4\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path></svg></div> <div class=\"content\"><h5 class=\"title\"><span>Online</span>Certifications</h5> <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p></div></div></div> <div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-3\"><div class=\"features-box color-extra05-style edublink-svg-animate\"><div class=\"icon\"><svg width=\"38\" height=\"40\" viewBox=\"0 0 45 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svgInject\"><path d=\"M22.5004 20.4568C26.6355 20.4568 29.9876 17.1309 29.9876 13.0282C29.9876 8.92549 26.6355 5.59961 22.5004 5.59961C18.3653 5.59961 15.0132 8.92549 15.0132 13.0282C15.0132 17.1309 18.3653 20.4568 22.5004 20.4568Z\" stroke=\"#f8941f\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path> <path d=\"M32.7999 39.0468H12.2005C11.6821 39.0468 11.2598 38.6277 11.2598 38.1134V31.6182C11.2598 25.4563 16.2896 20.4658 22.5002 20.4658C28.7107 20.4658 33.7406 25.4563 33.7406 31.6182V38.123C33.7406 38.6277 33.3182 39.0468 32.7999 39.0468Z\" stroke=\"#f8941f\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path> <path d=\"M25.6772 6.06643C26.6563 3.09501 29.4784 0.952148 32.7997 0.952148C36.9368 0.952148 40.2869 4.27596 40.2869 8.38072C40.2869 12.4855 36.9368 15.8093 32.7997 15.8093C31.6862 15.8093 30.6303 15.5712 29.68 15.1331\" stroke=\"#f8941f\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path> <path d=\"M29.1714 16.4088C30.3137 16.0279 31.5327 15.8184 32.7998 15.8184C39.0103 15.8184 44.0402 20.8088 44.0402 26.9707V33.4755C44.0402 33.9898 43.6178 34.4088 43.0995 34.4088H33.9133\" stroke=\"#f8941f\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path> <path d=\"M19.3229 6.06643C18.3342 3.09501 15.5217 0.952148 12.2004 0.952148C8.06325 0.952148 4.70361 4.27596 4.70361 8.38072C4.70361 12.4855 8.05366 15.8093 12.1908 15.8093C13.3043 15.8093 14.3602 15.5712 15.3105 15.1331\" stroke=\"#f8941f\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path> <path d=\"M15.8288 16.4088C14.6865 16.0279 13.4674 15.8184 12.2004 15.8184C5.98982 15.8184 0.959961 20.8088 0.959961 26.9707V33.4755C0.959961 33.9898 1.38232 34.4088 1.90066 34.4088H11.0869\" stroke=\"#f8941f\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path></svg></div> <div class=\"content\"><h5 class=\"title\"><span>6000</span>Members</h5> <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-kitchen-coach/Features.vue?vue&type=template&id=5ad8ec58

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-kitchen-coach/Features.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5bf83670"
  
)

/* harmony default export */ var Features = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-kitchen-coach-features.js.map