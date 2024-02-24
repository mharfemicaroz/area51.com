exports.ids = [34];
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-distant-learning/About.vue?vue&type=template&id=b5f3cb16
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gap-bottom-equal edu-about-area about-style-2"
  }, [_vm._ssrNode("<div class=\"container edublink-animated-shape\">", "</div>", [_vm._ssrNode("<div class=\"row g-5 align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"about-image-gallery\">", "</div>", [_vm._ssrNode("<img src=\"/images/about/about-03.jpg\" alt=\"About Image\" class=\"main-img-1\"> <div data-rellax-speed=\"0.8\" data-rellax-xs-speed=\"0.8\" data-rellax-mobile-speed=\"0.5\" data-rellax-tablet-speed=\"0.5\" class=\"author-box rellax\"><div class=\"inner\"><div class=\"thumb\"><img src=\"/images/about/shape-03.png\" alt=\"Shape Image\"></div> <div class=\"content\"><h4 class=\"title\">Ray Sanchez</h4> <p>Minim veniam nostrud exer citation.</p></div></div></div> <div class=\"award-status bounce-slide\"><div class=\"inner\"><div class=\"icon\"><i class=\"icon-30\"></i></div> <div class=\"content\"><h6 class=\"title\">20K+</h6> <span class=\"subtitle\">Enrolled Learners</span></div></div></div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "2",
      "imgSrc": "/images/about/shape-38.png",
      "data-aos-delay": "500",
      "data-aos": "fade",
      "data-aos-duration": "200"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-2",
      "imgSrc": "/images/about/shape-37.png",
      "data-aos-delay": "500",
      "data-aos": "fade",
      "data-aos-duration": "200"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3",
      "dataDepth": "1.8",
      "imgSrc": "/images/about/shape-04.png",
      "data-aos-delay": "500",
      "data-aos": "fade",
      "data-aos-duration": "200"
    }
  })], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"about-content\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "About Us",
      "title": "Over 10 Years in <span class=\"color-secondary\">Distant learning</span> for Skill Development",
      "alignment": "section-left",
      "subTitle": "Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim."
    }
  }), _vm._ssrNode(" <ul data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"features-list\"><li>Expert Trainers</li> <li>Online Remote Learning</li> <li>Lifetime Access</li></ul>")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1 circle",
      "dataDepth": "-2.3",
      "data-aos-delay": "500",
      "data-aos": "fade",
      "data-aos-duration": "200"
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-distant-learning/About.vue?vue&type=template&id=b5f3cb16

// EXTERNAL MODULE: ./common/parallaxAnimation.js
var parallaxAnimation = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-distant-learning/About.vue?vue&type=script&lang=js

/* harmony default export */ var Aboutvue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 274)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  mounted() {
    Object(parallaxAnimation["a" /* default */])();
  }
});
// CONCATENATED MODULE: ./components/home-distant-learning/About.vue?vue&type=script&lang=js
 /* harmony default export */ var home_distant_learning_Aboutvue_type_script_lang_js = (Aboutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-distant-learning/About.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_distant_learning_Aboutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b7fde9b"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-distant-learning-about.js.map