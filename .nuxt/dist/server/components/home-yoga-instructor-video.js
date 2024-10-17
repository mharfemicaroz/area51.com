exports.ids = [96];
exports.modules = {

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-yoga-instructor/Video.vue?vue&type=template&id=32b81c87
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"video-area-3\"><div class=\"container\"><div class=\"row justify-content-center\"><div class=\"col-lg-9\"><div class=\"video-gallery\"><div class=\"thumbnail\"><img src=\"/images/others/video-02.jpg\" alt=\"Thumb\"> " + _vm._ssrList(_vm.items, function (_, imageIndex) {
    return "<span><a class=\"video-play-btn video-popup-activation\"><i class=\"icon-18\"></i></a></span>";
  }) + "</div> <ul class=\"shape-group\"><li class=\"shape-1\"><img src=\"/images/about/shape-10.png\" alt=\"Shape\" class=\"rotateit\"></li> <li class=\"shape-2\"><img src=\"/images/about/shape-29.png\" alt=\"Shape\"></li> <li class=\"shape-3\"><img src=\"/images/about/shape-31.png\" alt=\"Shape\" class=\"rotateit\"></li></ul></div></div></div></div></div> "), _c('CoolLightBox', {
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

// CONCATENATED MODULE: ./components/home-yoga-instructor/Video.vue?vue&type=template&id=32b81c87

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-yoga-instructor/Video.vue?vue&type=script&lang=js
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
// CONCATENATED MODULE: ./components/home-yoga-instructor/Video.vue?vue&type=script&lang=js
 /* harmony default export */ var home_yoga_instructor_Videovue_type_script_lang_js = (Videovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-yoga-instructor/Video.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_yoga_instructor_Videovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f5b5fa9"
  
)

/* harmony default export */ var Video = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-yoga-instructor-video.js.map