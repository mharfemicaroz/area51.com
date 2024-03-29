exports.ids = [200];
exports.modules = {

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-landing-demo/FunFact.vue?vue&type=template&id=62be3810
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pv-demo-counterup"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"counterup-wrap\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.funFacts, function (counter, i) {
    return _vm._ssrNode("<div class=\"col-sm-4\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("edu-counterup counterup-style-1", counter.extraClass) + ">", "</div>", [_vm._ssrNode("<h2" + _vm._ssrClass("counter-item count-number", counter.class) + ">", "</h2>", [_c('FunFact', {
      attrs: {
        "number": counter.number,
        "decimal": counter.decimal,
        "suffix": counter.suffix
      }
    })], 1), _vm._ssrNode(" <span class=\"title\">" + _vm._ssrEscape(_vm._s(counter.title)) + "</span>")], 2)]);
  }), 0)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-landing-demo/FunFact.vue?vue&type=template&id=62be3810

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-landing-demo/FunFact.vue?vue&type=script&lang=js
/* harmony default export */ var FunFactvue_type_script_lang_js = ({
  components: {
    FunFact: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 96))
  },
  data() {
    return {
      funFacts: [{
        number: 7,
        decimal: null,
        class: 'primary-color',
        title: 'Home Pages',
        suffix: '+',
        extraClass: 'border-end'
      }, {
        number: 50,
        decimal: null,
        class: 'secondary-color',
        title: 'Inner Pages',
        suffix: '+',
        extraClass: 'border-end'
      }, {
        number: 260,
        decimal: null,
        class: 'extra02-color',
        title: 'UI Elements',
        suffix: '+'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/home-landing-demo/FunFact.vue?vue&type=script&lang=js
 /* harmony default export */ var home_landing_demo_FunFactvue_type_script_lang_js = (FunFactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-landing-demo/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_landing_demo_FunFactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c696388"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FunFact: __webpack_require__(96).default})


/***/ })

};;
//# sourceMappingURL=200.js.map