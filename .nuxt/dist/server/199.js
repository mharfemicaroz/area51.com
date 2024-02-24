exports.ids = [199];
exports.modules = {

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kitchen-coach/FunFact.vue?vue&type=template&id=72be1148
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "counterup-area-4"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.funFacts, function (counter, i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-sm-6\">", "</div>", [_vm._ssrNode("<div class=\"edu-counterup counterup-style-4\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("icon", counter.class) + "><i" + _vm._ssrClass(null, counter.iconClass) + "></i></div> "), _vm._ssrNode("<h2 class=\"counter-item count-number\">", "</h2>", [_c('FunFact', {
      attrs: {
        "number": counter.number,
        "decimal": counter.decimal,
        "suffix": counter.suffix
      }
    })], 1), _vm._ssrNode(" <h6 class=\"title\">" + _vm._ssrEscape(_vm._s(counter.title)) + "</h6>")], 2)]);
  }), 0)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-kitchen-coach/FunFact.vue?vue&type=template&id=72be1148

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kitchen-coach/FunFact.vue?vue&type=script&lang=js
/* harmony default export */ var FunFactvue_type_script_lang_js = ({
  components: {
    FunFact: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 96))
  },
  data() {
    return {
      funFacts: [{
        number: 29.3,
        decimal: 1,
        iconClass: 'icon-48',
        class: 'primary-color',
        title: 'STUDENT ENROLLED',
        suffix: 'K'
      }, {
        number: 32.4,
        decimal: 1,
        iconClass: 'icon-47',
        class: 'secondary-color',
        title: 'CLASS COMPLETED',
        suffix: 'K'
      }, {
        number: 100,
        decimal: null,
        iconClass: 'icon-49',
        class: 'extra08-color',
        title: 'SATISFACTION RATE',
        suffix: '%'
      }, {
        number: 354,
        decimal: null,
        iconClass: 'icon-50',
        class: 'extra05-color',
        title: 'TOP INSTRUCTORS',
        suffix: '+'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/home-kitchen-coach/FunFact.vue?vue&type=script&lang=js
 /* harmony default export */ var home_kitchen_coach_FunFactvue_type_script_lang_js = (FunFactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-kitchen-coach/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_kitchen_coach_FunFactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0646e6d0"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FunFact: __webpack_require__(96).default})


/***/ })

};;
//# sourceMappingURL=199.js.map