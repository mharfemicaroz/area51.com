exports.ids = [181,122,126,128,131];
exports.modules = {

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderLanding.vue?vue&type=template&id=673c0251
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "edu-header header-style-1 pv-header-style"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("header-mainmenu", {
    'edu-sticky': _vm.isSticky
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"container-custom\">", "</div>", [_vm._ssrNode("<div class=\"header-navbar\">", "</div>", [_vm._ssrNode("<div class=\"header-brand\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
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
  }) : _vm._e()])], 1)]), _vm._ssrNode(" <div class=\"header-mainnav\"><nav class=\"mainmenu-nav\"><ul class=\"mainmenu\"><li><a href=\"#intro\">Intro</a></li> <li><a href=\"#demos\">Demos</a></li> <li><a href=\"#features\">Features</a></li> <li><a href=\"https://docs.devsblink.com/edublink-vue\" target=\"_blank\">Documentation</a></li> <li><a href=\"https://devsblink.freshdesk.com/\" target=\"_blank\">Support</a></li></ul></nav></div> <div class=\"header-right\"><ul class=\"header-action\"><li class=\"header-btn\"><a href=\"#\" target=\"_blank\" class=\"edu-btn btn-medium\">Purchase Now</a></li> <li class=\"mobile-menu-bar d-block d-xl-none\"><button class=\"hamberger-button\"><i class=\"icon-54\"></i></button></li></ul></div>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"offcanvas-menu\" class=\"edublink-vue-mobile-popup-menu\">", "</div>", [_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "), _vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"header-top\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
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
  }) : _vm._e()])], 1), _vm._ssrNode(" <div class=\"close-menu\"><button class=\"close-button\"><i class=\"icon-73\"></i></button></div>")], 2), _vm._ssrNode(" <ul class=\"edublink-mobile-menu mainmenu\"><li><a href=\"#intro\">Intro</a></li> <li><a href=\"#demos\">Demos</a></li> <li><a href=\"#features\">Features</a></li> <li><a href=\"https://docs.devsblink.com/edublink-vue\" target=\"_blank\">Documentation</a></li> <li><a href=\"https://devsblink.freshdesk.com/\" target=\"_blank\">Support</a></li> <li class=\"header-btn\"><a href=\"#\" target=\"_blank\" class=\"edu-btn btn-medium\">Purchase Now</a></li></ul>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/HeaderLanding.vue?vue&type=template&id=673c0251

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderLanding.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderLandingvue_type_script_lang_js = ({
  components: {
    ColorMode: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 259))
  },
  data() {
    return {
      isSticky: false
    };
  },
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
    // Off-canvas Mobile Menu Close
    mobileMenuClose(triggerRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');
      if (triggerRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/header/HeaderLanding.vue?vue&type=script&lang=js
 /* harmony default export */ var header_HeaderLandingvue_type_script_lang_js = (HeaderLandingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/HeaderLanding.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_HeaderLandingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "781bd419"
  
)

/* harmony default export */ var HeaderLanding = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-landing-demo/HomeDemo.vue?vue&type=template&id=3338cad9
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pv-demo-area",
    attrs: {
      "id": "demos"
    }
  }, [_vm._ssrNode("<div class=\"container-custom\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Unique Demos",
      "title": "7+ Pre-Made Creative Online Course <br> Education Homepage",
      "alignment": "section-center splash-title",
      "disableMark": ""
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row row--30\">", "</div>", [_vm._l(_vm.homeDemos, function (demo, i) {
    return _vm._ssrNode("<div data-aos-delay=\"100\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-4 col-md-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"single-demo\">", "</div>", [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
      attrs: {
        "to": demo.link,
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": '/images/preview/' + demo.imageSrc,
        "alt": "Previe Image"
      }
    })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"hover-action\">", "</div>", [_c('n-link', {
      staticClass: "edu-btn btn-large",
      attrs: {
        "to": demo.link,
        "target": "_blank"
      }
    }, [_vm._v("View Demo "), _c('i', {
      staticClass: "icon-4"
    })])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": demo.link,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(demo.title))])], 1)], 2)])]);
  }), _vm._ssrNode(" <div data-aos-delay=\"100\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-4 col-md-6 col-sm-6 col-12\"><div class=\"single-demo coming-soon\"><div class=\"inner\"><div class=\"thumbnail\"><a href=\"#\" class=\"thumbnail-link\"><img src=\"/images/preview/coming-soon.png\" alt=\"Preview Images\"></a></div> <h5 class=\"title\"><a href=\"#\">Coming Soon</a></h5></div></div></div> <div data-aos-delay=\"100\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-4 col-md-6 col-sm-6 col-12\"><div class=\"single-demo coming-soon\"><div class=\"inner\"><div class=\"thumbnail\"><a href=\"#\" class=\"thumbnail-link\"><img src=\"/images/preview/coming-soon.png\" alt=\"Preview Images\"></a></div> <h5 class=\"title\"><a href=\"#\">Coming Soon</a></h5></div></div></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-landing-demo/HomeDemo.vue?vue&type=template&id=3338cad9

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-landing-demo/HomeDemo.vue?vue&type=script&lang=js
/* harmony default export */ var HomeDemovue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 274))
  },
  data() {
    return {
      homeDemos: [{
        link: '/',
        imageSrc: 'home-01.jpg',
        title: 'EduBlink Education'
      }, {
        link: '/distant-learning',
        imageSrc: 'home-02.jpg',
        title: 'Distant Learning'
      }, {
        link: '/university',
        imageSrc: 'home-03.jpg',
        title: 'University'
      }, {
        link: '/online-academy',
        imageSrc: 'home-04.jpg',
        title: 'Online Academy'
      }, {
        link: '/kitchen-coach',
        imageSrc: 'home-05.jpg',
        title: 'Kitchen Coach'
      }, {
        link: '/yoga-instructor',
        imageSrc: 'home-06.jpg',
        title: 'Yoga Instructor'
      }, {
        link: '/kindergarten',
        imageSrc: 'home-07.jpg',
        title: 'Kindergarten'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/home-landing-demo/HomeDemo.vue?vue&type=script&lang=js
 /* harmony default export */ var home_landing_demo_HomeDemovue_type_script_lang_js = (HomeDemovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-landing-demo/HomeDemo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_landing_demo_HomeDemovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c0d44096"
  
)

/* harmony default export */ var HomeDemo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/FooterLanding.vue?vue&type=template&id=459941a6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "pv-cta-area bg-image"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"cta-content\"><span data-sal-delay=\"100\" data-sal=\"slide-up\" data-sal-duration=\"1000\" class=\"subtitle\">Great Solutions for Smart People</span> <h2 data-sal-delay=\"100\" data-sal=\"slide-up\" data-sal-duration=\"1000\" class=\"title\">Create Your Education Website <br> Today with EduBlink</h2> <div data-sal-delay=\"400\" data-sal=\"slide-up\" data-sal-duration=\"1000\" class=\"button-group\"><a href=\"#\" target=\"_blank\" class=\"edu-btn\">Download EduBlink <i class=\"icon-4\"></i></a> <a href=\"#demos\" class=\"edu-btn btn-bg-white\">Demo Preview <i class=\"icon-4\"></i></a></div></div></div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "2",
      "data-sal-delay": "500",
      "data-sal": "fade",
      "data-sal-duration": "1000",
      "imgSrc": "/images/counterup/shape-02.png"
    }
  }), _vm._ssrNode(" <li data-sal-delay=\"500\" data-sal=\"fade\" data-sal-duration=\"1000\" class=\"shape-2\"><img src=\"/images/about/shape-35.png\" alt=\"shape\" class=\"rotateit\"></li> "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3",
      "dataDepth": "-2",
      "data-sal-delay": "500",
      "data-sal": "fade",
      "data-sal-duration": "1000",
      "imgSrc": "/images/about/shape-07.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-4",
      "dataDepth": "2.5",
      "data-sal-delay": "500",
      "data-sal": "fade",
      "data-sal-duration": "1000"
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footer/FooterLanding.vue?vue&type=template&id=459941a6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/FooterLanding.vue?vue&type=script&lang=js
/* harmony default export */ var FooterLandingvue_type_script_lang_js = ({
  components: {
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  }
});
// CONCATENATED MODULE: ./components/footer/FooterLanding.vue?vue&type=script&lang=js
 /* harmony default export */ var footer_FooterLandingvue_type_script_lang_js = (FooterLandingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footer/FooterLanding.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_FooterLandingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7db8d04e"
  
)

/* harmony default export */ var FooterLanding = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/landing-demo.vue?vue&type=template&id=584f125b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-wrapper",
    attrs: {
      "id": "main-wrapper"
    }
  }, [_c('HeaderLanding'), _vm._ssrNode(" "), _c('Banner'), _vm._ssrNode(" "), _c('FunFact'), _vm._ssrNode(" "), _c('HomeDemo'), _vm._ssrNode(" "), _c('LearnWith'), _vm._ssrNode(" "), _c('CourseLayout'), _vm._ssrNode(" "), _c('ShopLayout'), _vm._ssrNode(" "), _c('Features'), _vm._ssrNode(" "), _c('InnerPages'), _vm._ssrNode(" "), _c('FooterLanding')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/landing-demo.vue?vue&type=template&id=584f125b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/landing-demo.vue?vue&type=script&lang=js
/* harmony default export */ var landing_demovue_type_script_lang_js = ({
  components: {
    HeaderLanding: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 146)),
    Banner: () => __webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(null, 304)),
    FunFact: () => __webpack_require__.e(/* import() */ 200).then(__webpack_require__.bind(null, 203)),
    HomeDemo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 147)),
    LearnWith: () => __webpack_require__.e(/* import() */ 66).then(__webpack_require__.bind(null, 308)),
    CourseLayout: () => __webpack_require__.e(/* import() */ 63).then(__webpack_require__.bind(null, 305)),
    ShopLayout: () => __webpack_require__.e(/* import() */ 67).then(__webpack_require__.bind(null, 309)),
    Features: () => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(null, 306)),
    InnerPages: () => __webpack_require__.e(/* import() */ 65).then(__webpack_require__.bind(null, 307)),
    FooterLanding: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 148))
  },
  head() {
    return {
      title: 'Landing Demo'
    };
  }
});
// CONCATENATED MODULE: ./pages/landing-demo.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_landing_demovue_type_script_lang_js = (landing_demovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/landing-demo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_landing_demovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59dedcae"
  
)

/* harmony default export */ var landing_demo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderLanding: __webpack_require__(146).default,FunFact: __webpack_require__(96).default,HomeDemo: __webpack_require__(147).default,FooterLanding: __webpack_require__(148).default})


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFact.vue?vue&type=template&id=0e88467f
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }]
  }, [_vm.isVisible ? _c('countTo', {
    attrs: {
      "startVal": _vm.startVal ? _vm.startVal : 0,
      "endVal": _vm.number,
      "duration": _vm.duration ? _vm.duration : 3000,
      "autoplay": true,
      "decimals": _vm.decimal ? _vm.decimal : null
    }
  }) : _vm._e(), _vm._ssrNode(" " + (_vm.suffix ? "<span class=\"edu-vue-count-suffix\">" + _vm._ssrEscape(_vm._s(_vm.suffix)) + "</span>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=template&id=0e88467f

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(76);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFact.vue?vue&type=script&lang=js

/* harmony default export */ var FunFactvue_type_script_lang_js = ({
  props: ['number', 'decimal', 'suffix', 'duration', 'startVal'],
  components: {
    countTo: external_vue_count_to_default.a
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }
  }
});
// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FunFactvue_type_script_lang_js = (FunFactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7f4f1c5d"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-demo.js.map