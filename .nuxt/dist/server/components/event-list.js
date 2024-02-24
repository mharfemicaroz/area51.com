exports.ids = [115];
exports.modules = {

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/event/EventList.vue?vue&type=template&id=a4c4ff98
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-event-list event-list-2"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/event/event-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/event/' + _vm.eventInfo.imgSrc,
      "alt": _vm.eventInfo.name + ' Thumbnail'
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<ul class=\"event-meta\"><li><i class=\"icon-27\"></i>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.fullDate)) + "</li> <li><i class=\"icon-33\"></i>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.time)) + "</li></ul> "), _vm._ssrNode("<h4 class=\"title\">", "</h4>", [_c('n-link', {
    attrs: {
      "to": "/event/event-details"
    }
  }, [_vm._v(_vm._s(_vm.eventInfo.title))])], 1), _vm._ssrNode(" <span class=\"event-location\"><i class=\"icon-40\"></i>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.location)) + "</span> <p>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.excerpt)) + "</p> "), _vm._ssrNode("<div class=\"read-more-btn\">", "</div>", [_c('n-link', {
    staticClass: "edu-btn btn-medium btn-border",
    attrs: {
      "to": "/event/event-details"
    }
  }, [_vm._v("Learn More "), _c('i', {
    staticClass: "icon-4"
  })])], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/event/EventList.vue?vue&type=template&id=a4c4ff98

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/event/EventList.vue?vue&type=script&lang=js
/* harmony default export */ var EventListvue_type_script_lang_js = ({
  props: ['eventInfo']
});
// CONCATENATED MODULE: ./components/event/EventList.vue?vue&type=script&lang=js
 /* harmony default export */ var event_EventListvue_type_script_lang_js = (EventListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/event/EventList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  event_EventListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7f4487e8"
  
)

/* harmony default export */ var EventList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=event-list.js.map