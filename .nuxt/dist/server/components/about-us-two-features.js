exports.ids = [26];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_0__);

const parallaxAnimation = () => {
  let animatiedItem = document.querySelectorAll('.rellax');
  if (animatiedItem) {
    animatiedItem.forEach((item, _) => {
      new rellax__WEBPACK_IMPORTED_MODULE_0___default.a(item);
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (parallaxAnimation);

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-two/Features.vue?vue&type=template&id=cc0744aa
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "why-choose-area-3 edu-section-gap"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row row--45\"><div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"section-title-flex section-title\"><div class=\"left-content\"><h2 class=\"title\">We Providing The <br> Best <span class=\"color-secondary\">Quality Online </span> Courses</h2> <span class=\"shape-line\"><i class=\"icon-19\"></i></span></div> <div class=\"right-content\"><p>Lorem ipsum dolor sit amet cons etur adipisicing elit sed do eiusm aut tempor incididunt labore dolore magna aliqua quis nostrud ex ertation lamcolab oris aliquip.</p></div></div></div> <div class=\"row g-5\">" + _vm._ssrList(_vm.features, function (feature, index) {
    return "<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-4\"><div" + _vm._ssrClass("why-choose-box-2 features-box", feature.colorClass) + "><div class=\"icon\"><i" + _vm._ssrClass(null, feature.iconClass) + "></i></div> <div class=\"content\"><h4 class=\"title\">" + _vm._ssrEscape(_vm._s(feature.title)) + "</h4> <p>" + _vm._ssrEscape(_vm._s(feature.details)) + "</p></div></div></div>";
  }) + "</div></div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": ".8"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-2",
      "imgSrc": "/images/about/shape-13.png"
    }
  }), _vm._ssrNode(" <li class=\"shape-3\"><img data-rellax-speed=\"-1.3\" data-rellax-xs-speed=\"-1.3\" data-rellax-mobile-speed=\"-0.5\" data-rellax-tablet-speed=\"-0.5\" src=\"/images/faq/shape-12.png\" alt=\"shape\" class=\"rellax\"></li>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about-us-two/Features.vue?vue&type=template&id=cc0744aa

// EXTERNAL MODULE: ./common/parallaxAnimation.js
var parallaxAnimation = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-two/Features.vue?vue&type=script&lang=js

/* harmony default export */ var Featuresvue_type_script_lang_js = ({
  components: {
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  mounted() {
    Object(parallaxAnimation["a" /* default */])();
  },
  data() {
    return {
      features: [{
        title: "High Quality Courses",
        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
        iconClass: "icon-45",
        colorClass: "color-primary-style"
      }, {
        title: "Life Time Access",
        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
        iconClass: "icon-46",
        colorClass: "color-secondary-style"
      }, {
        title: "Expert Instructors",
        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
        iconClass: "icon-47",
        colorClass: "color-extra08-style"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/about-us-two/Features.vue?vue&type=script&lang=js
 /* harmony default export */ var about_us_two_Featuresvue_type_script_lang_js = (Featuresvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/about-us-two/Features.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_us_two_Featuresvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bd4fe6e"
  
)

/* harmony default export */ var Features = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us-two-features.js.map