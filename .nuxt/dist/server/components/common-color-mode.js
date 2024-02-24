exports.ids = [3];
exports.modules = {

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ColorMode.vue?vue&type=template&id=7278b7b6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "edublink-vue-light-dark-switcher",
    on: {
      "click": function ($event) {
        return _vm.toggleTheme();
      }
    }
  }, [_c('ColorScheme', {
    attrs: {
      "placeholder": ""
    }
  }, [_vm.$colorMode.value === 'dark' ? _c('span', [_c('inline-svg', {
    attrs: {
      "src": "/images/light-dark/sun.svg",
      "alt": "light icon"
    }
  })], 1) : _c('span', [_c('inline-svg', {
    attrs: {
      "src": "/images/light-dark/moon.svg",
      "alt": "dark icon"
    }
  })], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/ColorMode.vue?vue&type=template&id=7278b7b6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ColorMode.vue?vue&type=script&lang=js
/* harmony default export */ var ColorModevue_type_script_lang_js = ({
  methods: {
    toggleTheme() {
      this.$colorMode.preference = this.$colorMode.preference !== 'dark' ? 'dark' : 'light';
    }
  }
});
// CONCATENATED MODULE: ./components/common/ColorMode.vue?vue&type=script&lang=js
 /* harmony default export */ var common_ColorModevue_type_script_lang_js = (ColorModevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/ColorMode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_ColorModevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d428dd5a"
  
)

/* harmony default export */ var ColorMode = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-color-mode.js.map