exports.ids = [31];
exports.modules = {

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-two/Video.vue?vue&type=template&id=15a75a39
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"video-area-4\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-9\">", "</div>", [_vm._ssrNode("<div class=\"video-gallery\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\"><img src=\"/images/others/video-01.jpg\" alt=\"Thumb\"> " + _vm._ssrList(_vm.items, function (_, imageIndex) {
    return "<span><a class=\"video-play-btn video-popup-activation\"><i class=\"icon-18\"></i></a></span>";
  }) + "</div> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_vm._ssrNode("<li class=\"shape-1\"><img src=\"/images/about/shape-25.png\" alt=\"Shape\" class=\"rotateit\"></li> <li class=\"shape-2\"><img src=\"/images/faq/shape-04.png\" alt=\"Shape\"></li> "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3 shape-light",
      "dataDepth": "2",
      "imgSrc": "/images/faq/shape-14.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3 shape-dark",
      "dataDepth": "2",
      "imgSrc": "/images/faq/dark-shape-14.png"
    }
  })], 2)], 2)])])])]), _vm._ssrNode(" "), _c('CoolLightBox', {
    attrs: {
      "items": _vm.items,
      "index": _vm.index
    },
    on: {
      "close": function ($event) {
        _vm.index = null;
      }
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about-us-two/Video.vue?vue&type=template&id=15a75a39

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-two/Video.vue?vue&type=script&lang=js
/* harmony default export */ var Videovue_type_script_lang_js = ({
  components: {
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
      }],
      index: null
    };
  }
});
// CONCATENATED MODULE: ./components/about-us-two/Video.vue?vue&type=script&lang=js
 /* harmony default export */ var about_us_two_Videovue_type_script_lang_js = (Videovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/about-us-two/Video.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_us_two_Videovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e6da21a"
  
)

/* harmony default export */ var Video = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us-two-video.js.map