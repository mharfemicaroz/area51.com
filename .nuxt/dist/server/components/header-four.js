exports.ids = [127];
exports.modules = {

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderFour.vue?vue&type=template&id=0cfb3d76
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "edu-header header-style-4 header-fullwidth no-topbar"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("header-mainmenu", {
    'edu-sticky': _vm.isSticky
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"header-navbar\">", "</div>", [_vm._ssrNode("<div class=\"header-brand\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
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
  }) : _vm._e()])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-mainnav\">", "</div>", [_vm._ssrNode("<nav class=\"mainmenu-nav\">", "</nav>", [_c('Navigation')], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-right\">", "</div>", [_vm._ssrNode("<ul class=\"header-action\">", "</ul>", [_vm._ssrNode("<li class=\"search-bar\"><div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"> <button type=\"button\" class=\"search-btn\"><i class=\"icon-2\"></i></button></div></li> <li class=\"icon search-icon\"><button class=\"search-trigger\"><i class=\"icon-2\"></i></button></li> "), _vm._ssrNode("<li class=\"icon light-dark-icon\">", "</li>", [_c('ColorMode')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"header-btn\">", "</li>", [_c('n-link', {
    staticClass: "edu-btn btn-medium btn-curved",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Try for free "), _c('i', {
    staticClass: "icon-4"
  })])], 1), _vm._ssrNode(" <li class=\"mobile-menu-bar d-block d-xl-none\"><button class=\"hamberger-button\"><i class=\"icon-54\"></i></button></li>")], 2)])], 2)])]), _vm._ssrNode(" "), _c('SearchPopUp'), _vm._ssrNode(" "), _c('OffCanvasMobileMenuOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/HeaderFour.vue?vue&type=template&id=0cfb3d76

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/HeaderFour.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderFourvue_type_script_lang_js = ({
  components: {
    Navigation: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 340)),
    SearchPopUp: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 258)),
    ColorMode: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 259)),
    OffCanvasMobileMenuOne: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 260))
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
// CONCATENATED MODULE: ./components/header/HeaderFour.vue?vue&type=script&lang=js
 /* harmony default export */ var header_HeaderFourvue_type_script_lang_js = (HeaderFourvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/HeaderFour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_HeaderFourvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5261ea14"
  
)

/* harmony default export */ var HeaderFour = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-four.js.map