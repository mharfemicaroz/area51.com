exports.ids = [14];
exports.modules = {

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/ScrollToTop.vue?vue&type=template&id=2e29efa6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rn-progress-parent"
  }, [_vm._ssrNode("<svg width=\"100%\" height=\"100%\" viewBox=\"-1 -1 102 102\" class=\"rn-back-circle svg-inner\"><path d=\"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98\"></path></svg>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footer/ScrollToTop.vue?vue&type=template&id=2e29efa6

// CONCATENATED MODULE: ./common/scrollToTop.js
const scrollToTop = () => {
  let progressPath = document.querySelector('.rn-progress-parent path');
  let pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  const updateProgress = function () {
    let scroll = window.pageYOffset;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - scroll * pathLength / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress);
  let progressWrap = document.querySelector('.rn-progress-parent');
  let offset = 150;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > offset) {
      progressWrap.classList.add('rn-backto-top-active');
    } else {
      document.querySelector('.rn-progress-parent').classList.remove('rn-backto-top-active');
    }
  });
  progressWrap.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return false;
  });
};
/* harmony default export */ var common_scrollToTop = (scrollToTop);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/ScrollToTop.vue?vue&type=script&lang=js

/* harmony default export */ var ScrollToTopvue_type_script_lang_js = ({
  mounted() {
    common_scrollToTop();
  }
});
// CONCATENATED MODULE: ./components/footer/ScrollToTop.vue?vue&type=script&lang=js
 /* harmony default export */ var footer_ScrollToTopvue_type_script_lang_js = (ScrollToTopvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footer/ScrollToTop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_ScrollToTopvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "55675aac"
  
)

/* harmony default export */ var ScrollToTop = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=footer-scroll-to-top.js.map