exports.ids = [7];
exports.modules = {

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/SearchPopUp.vue?vue&type=template&id=4bb13e56
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-search-popup",
    attrs: {
      "id": "edu-search-popup"
    }
  }, [_vm._ssrNode("<div class=\"content-wrap\">", "</div>", [_vm._ssrNode("<div class=\"site-logo\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "logo-light",
    attrs: {
      "src": "/images/logo/logo-dark.png",
      "alt": "Dark Logo"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "logo-dark",
    attrs: {
      "src": "/images/logo/logo-white.png",
      "alt": "Light Logo"
    }
  })])], 1), _vm._ssrNode(" <div class=\"close-button\"><button class=\"close-trigger\"><i class=\"icon-73\"></i></button></div> <div class=\"inner\"><form action=\"#\" class=\"search-form\"><input type=\"text\" placeholder=\"Search Here...\" class=\"edublink-search-popup-field\"> <button class=\"submit-button\"><i class=\"icon-2\"></i></button></form></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/SearchPopUp.vue?vue&type=template&id=4bb13e56

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/SearchPopUp.vue?vue&type=script&lang=js
/* harmony default export */ var SearchPopUpvue_type_script_lang_js = ({
  methods: {
    // SearchPopUp Close
    searchPopUpClose(triggerRemoveClass, className) {
      const el = document.querySelector('#edu-search-popup');
      if (triggerRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/header/SearchPopUp.vue?vue&type=script&lang=js
 /* harmony default export */ var header_SearchPopUpvue_type_script_lang_js = (SearchPopUpvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/SearchPopUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_SearchPopUpvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "218a2213"
  
)

/* harmony default export */ var SearchPopUp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-search-pop-up.js.map