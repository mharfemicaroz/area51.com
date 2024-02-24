exports.ids = [202];
exports.modules = {

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-online-academy/FunFact.vue?vue&type=template&id=34a87e96
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "counterup-area-3 gap-bottom-equal"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.funFacts, function (counter, i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-sm-6\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("edu-counterup counterup-style-3", i % 3 === 0 && i !== 0 ? 'border-none' : undefined) + ">", "</div>", [_vm._ssrNode("<h2" + _vm._ssrClass("counter-item count-number", counter.class) + ">", "</h2>", [_c('FunFact', {
      attrs: {
        "number": counter.number,
        "decimal": counter.decimal,
        "suffix": counter.suffix
      }
    })], 1), _vm._ssrNode(" <h6 class=\"title\">" + _vm._ssrEscape(_vm._s(counter.title)) + "</h6>")], 2)]);
  }), 0)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-online-academy/FunFact.vue?vue&type=template&id=34a87e96

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-online-academy/FunFact.vue?vue&type=script&lang=js
/* harmony default export */ var FunFactvue_type_script_lang_js = ({
  components: {
    FunFact: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 96))
  },
  data() {
    return {
      funFacts: [{
        number: 30,
        decimal: 0,
        class: "primary-color",
        title: "PARTNERS",
        suffix: ""
      }, {
        number: 52,
        decimal: 0,
        class: "secondary-color",
        title: "CLIENTS",
        suffix: ""
      }, {
        number: 100,
        decimal: null,
        class: "extra02-color",
        title: "SATISFACTION RATE",
        suffix: "%"
      }, {
        number: 16,
        decimal: null,
        class: "extra05-color",
        title: "TOP SERVICES",
        suffix: "+"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/home-online-academy/FunFact.vue?vue&type=script&lang=js
 /* harmony default export */ var home_online_academy_FunFactvue_type_script_lang_js = (FunFactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-online-academy/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_online_academy_FunFactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b259da1"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FunFact: __webpack_require__(96).default})


/***/ })

};;
//# sourceMappingURL=202.js.map