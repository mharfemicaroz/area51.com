exports.ids = [130,129];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderTopTwo.vue?vue&type=template&id=1ce9e924
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header-top-bar"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"header-top\">", "</div>", [_vm._ssrNode("<div class=\"header-top-left\"><ul class=\"header-info\"><li><a href=\"tel:+6399177621021\"><i class=\"icon-phone\"></i>Call: +6399177621021</a></li> <li><a href=\"mailto:cloydcunanan@gmail.com\" target=\"_blank\"><i class=\"icon-envelope\"></i>Email: cloydcunanan@gmail.com</a></li></ul></div> "), _vm._ssrNode("<div class=\"header-top-right\">", "</div>", [_vm._ssrNode("<ul class=\"header-info\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Login")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Register")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"header-btn\">", "</li>", [_c('n-link', {
    staticClass: "edu-btn btn-secondary btn-medium",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Contact Us Now "), _c('i', {
    staticClass: "icon-4"
  })])], 1)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/HeaderTopTwo.vue?vue&type=template&id=1ce9e924

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/HeaderTopTwo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "417b88b6"
  
)

/* harmony default export */ var HeaderTopTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderTwo.vue?vue&type=template&id=bc3ae7ae
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "edu-header header-style-2"
  }, [_vm.showHeaderTop ? _c('HeaderTopTwo') : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("header-mainmenu", {
    'edu-sticky': _vm.isSticky
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"header-navbar\">", "</div>", [_vm._ssrNode("<div class=\"header-brand\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm.$colorMode.value === 'light' ? _c('img', {
    staticClass: "logo-light",
    attrs: {
      "src": "/images/logo/logo-dark-2.png",
      "alt": "Dark Logo"
    }
  }) : _vm._e(), _vm._v(" "), _vm.$colorMode.value === 'dark' ? _c('img', {
    staticClass: "logo-dark",
    attrs: {
      "src": "/images/logo/logo-light-2.png",
      "alt": "Light Logo"
    }
  }) : _vm._e()])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-mainnav\">", "</div>", [_vm._ssrNode("<nav class=\"mainmenu-nav\">", "</nav>", [_c('Navigation')], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-right\">", "</div>", [_vm._ssrNode("<ul class=\"header-action\">", "</ul>", [_vm._ssrNode("<li class=\"icon search-icon\"><button class=\"search-trigger\"><i class=\"icon-2\"></i></button></li> "), _vm._ssrNode("<li class=\"icon light-dark-icon\">", "</li>", [_c('ColorMode')], 1), _vm._ssrNode(" <li class=\"mobile-menu-bar d-block d-xl-none\"><button class=\"hamberger-button\"><i class=\"icon-54\"></i></button></li>")], 2)])], 2)])]), _vm._ssrNode(" "), _c('SearchPopUp'), _vm._ssrNode(" "), _c('OffCanvasMobileMenuTwo')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/HeaderTwo.vue?vue&type=template&id=bc3ae7ae

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderTwo.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderTwovue_type_script_lang_js = ({
  components: {
    HeaderTopTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 102)),
    Navigation: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 340)),
    SearchPopUp: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 258)),
    ColorMode: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 259)),
    OffCanvasMobileMenuTwo: () => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, 286))
  },
  data() {
    return {
      isSticky: false
    };
  },
  props: ['showHeaderTop'],
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
    // search popup
    searchPopUpOpen(addRemoveClass, className) {
      const el = document.querySelector('#edu-search-popup');
      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/header/HeaderTwo.vue?vue&type=script&lang=js
 /* harmony default export */ var header_HeaderTwovue_type_script_lang_js = (HeaderTwovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/HeaderTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_HeaderTwovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1dbe3ece"
  
)

/* harmony default export */ var HeaderTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderTopTwo: __webpack_require__(102).default})


/***/ })

};;
//# sourceMappingURL=header-two.js.map