exports.ids = [142];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/instructor/InstructorThree.vue?vue&type=template&id=2bf6b23e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-team-grid team-style-3"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail-wrap\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/instructor/instructor-profile"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/team/team-02/' + _vm.instructor.imgSrc,
      "alt": _vm.instructor.name + ' Thumbnail'
    }
  })])], 1), _vm._ssrNode(" <ul class=\"team-share-info\">" + _vm._ssrList(_vm.instructor.socialLinks, function (social, key) {
    return "<li><a" + _vm._ssrAttr("aria-label", social.name) + _vm._ssrAttr("href", social.url) + "><i" + _vm._ssrClass(null, social.iconName) + "></i></a></li>";
  }) + "</ul>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/instructor/instructor-profile"
    }
  }, [_vm._v(_vm._s(_vm.instructor.name))])], 1), _vm._ssrNode(" <span class=\"designation\">" + _vm._ssrEscape(_vm._s(_vm.instructor.designation)) + "</span>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/instructor/InstructorThree.vue?vue&type=template&id=2bf6b23e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/instructor/InstructorThree.vue?vue&type=script&lang=js
/* harmony default export */ var InstructorThreevue_type_script_lang_js = ({
  props: ['instructor']
});
// CONCATENATED MODULE: ./components/instructor/InstructorThree.vue?vue&type=script&lang=js
 /* harmony default export */ var instructor_InstructorThreevue_type_script_lang_js = (InstructorThreevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/instructor/InstructorThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  instructor_InstructorThreevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11020a20"
  
)

/* harmony default export */ var InstructorThree = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=instructor-three.js.map