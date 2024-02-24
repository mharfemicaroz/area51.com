exports.ids = [57,139];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPost.vue?vue&type=template&id=140ffffe
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "instagram-grid"
  }, [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.instagram.imgSrc,
      "alt": _vm.instagram.imgAlt
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "user-info"
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "icon-instagram"
  })]), _vm._v(" "), _c('span', {
    staticClass: "user-name"
  }, [_vm._v(_vm._s(_vm.instagram.title))])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/InstagramPost.vue?vue&type=template&id=140ffffe

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPost.vue?vue&type=script&lang=js
/* harmony default export */ var InstagramPostvue_type_script_lang_js = ({
  props: ['instagram']
});
// CONCATENATED MODULE: ./components/InstagramPost.vue?vue&type=script&lang=js
 /* harmony default export */ var components_InstagramPostvue_type_script_lang_js = (InstagramPostvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InstagramPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstagramPostvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4db1c844"
  
)

/* harmony default export */ var InstagramPost = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 129:
/***/ (function(module) {

module.exports = JSON.parse("{\"kitchenPosts\":[{\"imgSrc\":\"/images/instagram/instagram-01.jpg\",\"title\":\"@EduBlink.Cooking\",\"imgAlt\":\"Kitchen Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-02.jpg\",\"title\":\"@EduBlink.Cooking\",\"imgAlt\":\"Kitchen Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-03.jpg\",\"title\":\"@EduBlink.Cooking\",\"imgAlt\":\"Kitchen Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-04.jpg\",\"title\":\"@EduBlink.Cooking\",\"imgAlt\":\"Kitchen Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-05.jpg\",\"title\":\"@EduBlink.Cooking\",\"imgAlt\":\"Kitchen Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-06.jpg\",\"title\":\"@EduBlink.Cooking\",\"imgAlt\":\"Kitchen Instagram\"}],\"yogaPosts\":[{\"imgSrc\":\"/images/instagram/instagram-07.jpg\",\"title\":\"@EduBlink.Yoga\",\"imgAlt\":\"Yoga Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-08.jpg\",\"title\":\"@EduBlink.Yoga\",\"imgAlt\":\"Yoga Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-09.jpg\",\"title\":\"@EduBlink.Yoga\",\"imgAlt\":\"Yoga Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-10.jpg\",\"title\":\"@EduBlink.Yoga\",\"imgAlt\":\"Yoga Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-11.jpg\",\"title\":\"@EduBlink.Yoga\",\"imgAlt\":\"Yoga Instagram\"},{\"imgSrc\":\"/images/instagram/instagram-12.jpg\",\"title\":\"@EduBlink.Yoga\",\"imgAlt\":\"Yoga Instagram\"}]}");

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kitchen-coach/Instagram.vue?vue&type=template&id=4d955c87
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-instagram-area instagram-area-1"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Instructors",
      "preTitleClass": "pre-textsecondary",
      "title": "Follow Me On Instagram",
      "alignment": "section-center"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row g-3\">", "</div>", _vm._l(_vm.InstagramData.kitchenPosts, function (instagram, index) {
    return _vm._ssrNode("<div class=\"col-xl-2 col-md-4 col-sm-6\">", "</div>", [_c('InstagramPost', {
      attrs: {
        "instagram": instagram
      }
    })], 1);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-kitchen-coach/Instagram.vue?vue&type=template&id=4d955c87

// EXTERNAL MODULE: ./data/instagram.json
var instagram = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kitchen-coach/Instagram.vue?vue&type=script&lang=js

/* harmony default export */ var Instagramvue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 274)),
    InstagramPost: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122))
  },
  data() {
    return {
      InstagramData: instagram
    };
  }
});
// CONCATENATED MODULE: ./components/home-kitchen-coach/Instagram.vue?vue&type=script&lang=js
 /* harmony default export */ var home_kitchen_coach_Instagramvue_type_script_lang_js = (Instagramvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-kitchen-coach/Instagram.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_kitchen_coach_Instagramvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7fa06b37"
  
)

/* harmony default export */ var Instagram = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InstagramPost: __webpack_require__(122).default})


/***/ })

};;
//# sourceMappingURL=home-kitchen-coach-instagram.js.map