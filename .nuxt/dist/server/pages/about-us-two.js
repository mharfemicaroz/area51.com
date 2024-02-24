exports.ids = [151,125];
exports.modules = {

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us-two.vue?vue&type=template&id=3f0f67fc
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-wrapper",
    attrs: {
      "id": "main-wrapper"
    }
  }, [_c('HeaderOne'), _vm._ssrNode(" "), _c('BreadCrumbOne', {
    attrs: {
      "pageTitle": "About Us 2",
      "title": "A Large Range of Course Learning Paths"
    }
  }), _vm._ssrNode(" "), _c('Features'), _vm._ssrNode(" "), _c('VideoSection'), _vm._ssrNode(" "), _c('Logo'), _vm._ssrNode(" "), _c('Testimonial'), _vm._ssrNode(" "), _c('FunFact'), _vm._ssrNode(" "), _c('Instructor'), _vm._ssrNode(" "), _c('CTA', {
    attrs: {
      "addClassName": "university-cta-wrapper",
      "btnClass": "btn-secondary"
    }
  }), _vm._ssrNode(" "), _c('FooterOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about-us-two.vue?vue&type=template&id=3f0f67fc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us-two.vue?vue&type=script&lang=js
/* harmony default export */ var about_us_twovue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbOne: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 274)),
    Features: () => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, 267)),
    VideoSection: () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 271)),
    Logo: () => __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(null, 341)),
    Testimonial: () => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, 270)),
    FunFact: () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 268)),
    Instructor: () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, 269)),
    CTA: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 272)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  head() {
    return {
      title: 'About Us 2'
    };
  }
});
// CONCATENATED MODULE: ./pages/about-us-two.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_about_us_twovue_type_script_lang_js = (about_us_twovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about-us-two.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_about_us_twovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ab138ad"
  
)

/* harmony default export */ var about_us_two = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,FunFact: __webpack_require__(96).default,FooterOne: __webpack_require__(33).default})


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
//# sourceMappingURL=about-us-two.js.map