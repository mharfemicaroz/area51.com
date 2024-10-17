exports.ids = [1];
exports.modules = {

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/SectionTitle.vue?vue&type=template&id=520fa216
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "section-title",
    class: _vm.alignment,
    attrs: {
      "data-aos-delay": "150",
      "data-aos": "fade-up",
      "data-aos-duration": "800"
    }
  }, [_vm._ssrNode((_vm.preTitle ? "<span" + _vm._ssrClass("pre-title", _vm.preTitleClass) + ">" + _vm._s(_vm.preTitle) + "</span>" : "<!---->") + " <h2 class=\"title\">" + _vm._s(_vm.title) + "</h2> " + (!_vm.disableMark ? "<span class=\"shape-line\"><i class=\"icon-19\"></i></span>" : "<!---->") + " " + (_vm.subTitle ? "<p>" + _vm._s(_vm.subTitle) + "</p>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/SectionTitle.vue?vue&type=template&id=520fa216

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/SectionTitle.vue?vue&type=script&lang=js
/* harmony default export */ var SectionTitlevue_type_script_lang_js = ({
  props: {
    preTitle: {
      type: String
    },
    preTitleClass: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String
    },
    alignment: {
      type: String
    },
    disableMark: {
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./components/common/SectionTitle.vue?vue&type=script&lang=js
 /* harmony default export */ var common_SectionTitlevue_type_script_lang_js = (SectionTitlevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_SectionTitlevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08d8cd54"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-section-title.js.map