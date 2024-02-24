exports.ids = [147];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0bf22319", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestimonialThree_vue_vue_type_style_index_0_id_0a3bf4dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestimonialThree_vue_vue_type_style_index_0_id_0a3bf4dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestimonialThree_vue_vue_type_style_index_0_id_0a3bf4dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestimonialThree_vue_vue_type_style_index_0_id_0a3bf4dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestimonialThree_vue_vue_type_style_index_0_id_0a3bf4dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--color-primary:#1ab69d;--color-secondary:#ee4a62;--color-textSecondary:#ff5b5c;--color-tertiary:#f8b81f;--color-dark:#111212;--color-heading:#181818;--dark-color-heading:#fff;--color-border:#e5e5e5;--dark-color-border:#282f3a;--color-body:grey;--gradient-primary:linear-gradient(-90deg,#31b978,#1ab69d);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#181818;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#bababa;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#3eb75e;--color-danger:#ff0003;--color-warning:#ff8f3c;--color-info:#1ba2db;--color-placeholder:grey;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:\"Poppins\",sans-serif;--font-secondary:\"Spartan\",sans-serif;--font-icomoon:\"icomoon\";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}.testimonial-area-2 .swiper-pagination{text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/testimonial/TestimonialThree.vue?vue&type=template&id=0a3bf4dc
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "testimonial-area-2 section-gap-large"
  }, [_vm._ssrNode("<div class=\"container edublink-animated-shape\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Testimonials",
      "title": "What Our Students <br> Have To Say",
      "subTitle": "Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incidid unt labore dolore magna aliquaenim minim.",
      "alignment": "section-center"
    }
  })], 1)]), _vm._ssrNode(" "), _c('swiper', {
    staticClass: "testimonial-activation swiper",
    attrs: {
      "options": _vm.swiperOptions
    }
  }, [_c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "testimonial-slide"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/logo-01.png",
      "alt": "Logo"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]), _vm._v(" "), _c('div', {
    staticClass: "rating-icon"
  }, [_c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "author-info"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/testimonial-01.png",
      "alt": "Testimonial"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('h5', {
    staticClass: "title"
  }, [_vm._v("Ray Sanchez")]), _vm._v(" "), _c('span', {
    staticClass: "subtitle"
  }, [_vm._v("Student")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "testimonial-slide"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/logo-02.png",
      "alt": "Logo"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]), _vm._v(" "), _c('div', {
    staticClass: "rating-icon"
  }, [_c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "author-info"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/testimonial-02.png",
      "alt": "Testimonial"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('h5', {
    staticClass: "title"
  }, [_vm._v("Thomas Lopez")]), _vm._v(" "), _c('span', {
    staticClass: "subtitle"
  }, [_vm._v("Designer")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "testimonial-slide"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/logo-03.png",
      "alt": "Logo"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]), _vm._v(" "), _c('div', {
    staticClass: "rating-icon"
  }, [_c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "author-info"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/testimonial-03.png",
      "alt": "Testimonial"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('h5', {
    staticClass: "title"
  }, [_vm._v("Amber Page")]), _vm._v(" "), _c('span', {
    staticClass: "subtitle"
  }, [_vm._v("Developer")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "testimonial-slide"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/logo-02.png",
      "alt": "Logo"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]), _vm._v(" "), _c('div', {
    staticClass: "rating-icon"
  }, [_c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon-23"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "author-info"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    attrs: {
      "src": "/images/testimonial/testimonial-04.png",
      "alt": "Testimonial"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('h5', {
    staticClass: "title"
  }, [_vm._v("Robert Tapp")]), _vm._v(" "), _c('span', {
    staticClass: "subtitle"
  }, [_vm._v("Content Creator")])])])])])]), _vm._ssrNode(" <div class=\"swiper-pagination\"></div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "1.4",
      "imgSrc": "/images/about/shape-30.png",
      "data-aos-delay": "200",
      "data-aos": "fade",
      "data-aos-duration": "1000"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-1.4",
      "imgSrc": "/images/about/shape-25.png",
      "data-aos-delay": "200",
      "data-aos": "fade",
      "data-aos-duration": "1000"
    }
  })], 2)], 2), _vm._ssrNode(" <ul class=\"shape-group\"><li class=\"shape-3\"><img data-depth=\"2\" src=\"/images/others/map-shape-3.png\" alt=\"Shape\" class=\"d-block-shape-light\"> <img data-depth=\"2\" src=\"/images/others/dark-map-2-shape-3.png\" alt=\"Shape\" class=\"d-none-shape-dark\"></li></ul>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/testimonial/TestimonialThree.vue?vue&type=template&id=0a3bf4dc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/testimonial/TestimonialThree.vue?vue&type=script&lang=js
/* harmony default export */ var TestimonialThreevue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 276)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/testimonial/TestimonialThree.vue?vue&type=script&lang=js
 /* harmony default export */ var testimonial_TestimonialThreevue_type_script_lang_js = (TestimonialThreevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/testimonial/TestimonialThree.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(123)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  testimonial_TestimonialThreevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3ac7100c"
  
)

/* harmony default export */ var TestimonialThree = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testimonial-three.js.map