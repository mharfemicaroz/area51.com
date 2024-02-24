exports.ids = [127];
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

/***/ })

};;
//# sourceMappingURL=header-landing.js.map