exports.ids = [106];
exports.modules = {

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("73d045ec", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostStandard_vue_vue_type_style_index_0_id_b387392c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostStandard_vue_vue_type_style_index_0_id_b387392c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostStandard_vue_vue_type_style_index_0_id_b387392c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostStandard_vue_vue_type_style_index_0_id_b387392c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostStandard_vue_vue_type_style_index_0_id_b387392c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog-gallery-activation{position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogPostStandard.vue?vue&type=template&id=b387392c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-blog blog-style-4"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_vm.blogInfo.slider ? _vm._ssrNode("<div class=\"blog-gallery-activation\">", "</div>", [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "options": _vm.swiperOptions
    }
  }, _vm._l(_vm.blogInfo.slider, function (sliderThumb, i) {
    return _c('div', {
      key: i,
      staticClass: "swiper-slide"
    }, [_c('n-link', {
      attrs: {
        "to": "/blog/blog-details"
      }
    }, [_c('img', {
      attrs: {
        "src": '/images/blog/blog-standard/' + sliderThumb,
        "alt": _vm.blogInfo.alt
      }
    })])], 1);
  }), 0), _vm._ssrNode(" <div class=\"swiper-navigation\"><div class=\"swiper-btn-nxt\"><i class=\"icon-west\"></i></div> <div class=\"swiper-btn-prv\"><i class=\"icon-east\"></i></div></div>")], 2) : _c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/blog/blog-standard/' + _vm.blogInfo.imgSrc,
      "alt": _vm.blogInfo.alt
    }
  })]), _vm._ssrNode(" " + _vm._ssrList(_vm.blogInfo.video, function (_, imageIndex) {
    return "<span><a class=\"video-play-btn video-popup-activation\"><i class=\"icon-18\"></i></a></span>";
  }))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"category-wrap\">", "</div>", [_c('n-link', {
    staticClass: "blog-category",
    attrs: {
      "to": "/blog/blog-masonry"
    }
  }, [_vm._v(_vm._s(_vm.blogInfo.category))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<h3 class=\"title\">", "</h3>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_vm._v(_vm._s(_vm.blogInfo.title))])], 1), _vm._ssrNode(" <ul class=\"blog-meta\"><li><i class=\"icon-27\"></i>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.date)) + "</li> <li><i class=\"icon-28\"></i>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.comment)) + "</li></ul> <p>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.excerpt3)) + "</p> "), _vm._ssrNode("<div class=\"read-more-btn\">", "</div>", [_c('n-link', {
    staticClass: "edu-btn btn-border btn-medium",
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_vm._v("\n                    Learn More "), _c('i', {
    staticClass: "icon-4"
  })])], 1)], 2)], 2), _vm._ssrNode(" "), _c('CoolLightBox', {
    attrs: {
      "items": _vm.blogInfo.video !== undefined ? _vm.blogInfo.video : [],
      "index": _vm.index
    },
    on: {
      "close": function ($event) {
        _vm.index = null;
      }
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog/BlogPostStandard.vue?vue&type=template&id=b387392c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogPostStandard.vue?vue&type=script&lang=js
/* harmony default export */ var BlogPostStandardvue_type_script_lang_js = ({
  props: ['blogInfo'],
  data() {
    return {
      index: null,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: false,
        grabCursor: true,
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        navigation: {
          nextEl: ".swiper-btn-nxt",
          prevEl: ".swiper-btn-prv"
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/blog/BlogPostStandard.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_BlogPostStandardvue_type_script_lang_js = (BlogPostStandardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blog/BlogPostStandard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogPostStandardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b7886e6a"
  
)

/* harmony default export */ var BlogPostStandard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-post-standard.js.map