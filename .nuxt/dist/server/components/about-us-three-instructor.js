exports.ids = [22,142];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/instructor/InstructorThree.vue?vue&type=template&id=2bf6b23e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-team-grid team-style-3"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail-wrap\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/instructor/instructor-profile"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/team/team-02/' + _vm.instructor.imgSrc,
      "alt": _vm.instructor.name + ' Thumbnail'
    }
  })])], 1), _vm._ssrNode(" <ul class=\"team-share-info\">" + _vm._ssrList(_vm.instructor.socialLinks, function (social, key) {
    return "<li><a" + _vm._ssrAttr("aria-label", social.name) + _vm._ssrAttr("href", social.url) + "><i" + _vm._ssrClass(null, social.iconName) + "></i></a></li>";
  }) + "</ul>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/instructor/instructor-profile"
    }
  }, [_vm._v(_vm._s(_vm.instructor.name))])], 1), _vm._ssrNode(" <span class=\"designation\">" + _vm._ssrEscape(_vm._s(_vm.instructor.designation)) + "</span>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/instructor/InstructorThree.vue?vue&type=template&id=2bf6b23e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/instructor/InstructorThree.vue?vue&type=script&lang=js
/* harmony default export */ var InstructorThreevue_type_script_lang_js = ({
  props: ['instructor']
});
// CONCATENATED MODULE: ./components/instructor/InstructorThree.vue?vue&type=script&lang=js
 /* harmony default export */ var instructor_InstructorThreevue_type_script_lang_js = (InstructorThreevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/instructor/InstructorThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  instructor_InstructorThreevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11020a20"
  
)

/* harmony default export */ var InstructorThree = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-three/Instructor.vue?vue&type=template&id=58aa24e6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-team-area team-area-3 edu-section-gap z-10"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Instructors",
      "title": "Course Instructors",
      "alignment": "section-center"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.instructorData.instructors.slice(0, 3), function (instructor, key) {
    return _vm._ssrNode("<div data-aos-delay=\"50\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-4 col-md-6\">", "</div>", [_c('InstructorThree', {
      attrs: {
        "instructor": instructor
      }
    })], 1);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about-us-three/Instructor.vue?vue&type=template&id=58aa24e6

// EXTERNAL MODULE: ./data/instructor.json
var instructor = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-three/Instructor.vue?vue&type=script&lang=js

/* harmony default export */ var Instructorvue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 276)),
    InstructorOne: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 106))
  },
  data() {
    return {
      instructorData: instructor
    };
  }
});
// CONCATENATED MODULE: ./components/about-us-three/Instructor.vue?vue&type=script&lang=js
 /* harmony default export */ var about_us_three_Instructorvue_type_script_lang_js = (Instructorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/about-us-three/Instructor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_us_three_Instructorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "570940bc"
  
)

/* harmony default export */ var Instructor = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InstructorThree: __webpack_require__(108).default})


/***/ }),

/***/ 98:
/***/ (function(module) {

module.exports = JSON.parse("{\"instructors\":[{\"imgSrc\":\"2.png\",\"name\":\"Sherlock Cunanan\",\"designation\":\"Senior Engineer\",\"excerpt\":\"Bringing years of engineering expertise to the forefront of technology innovation to drive forward-thinking solutions.\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"1.png\",\"name\":\"Cloyd Cunanan\",\"designation\":\"CEO, Senior Marketing Specialist\",\"excerpt\":\"Leading with visionary marketing strategies and a passion for growth and innovation.\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"3.png\",\"name\":\"Mharfe Micaroz\",\"designation\":\"Senior Developer\",\"excerpt\":\"Dedicated to crafting cutting-edge solutions and pushing the boundaries of technology.\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-04.jpg\",\"name\":\"John Travolta\",\"designation\":\"WordPress Expert\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-05.jpg\",\"name\":\"Hilary Swank\",\"designation\":\"Laravel Expert\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-06.jpg\",\"name\":\"Steve Martin\",\"designation\":\"App Developer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-07.jpg\",\"name\":\"Louis Vargas\",\"designation\":\"WordPress Expert\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-08.jpg\",\"name\":\"Tamara Wilson\",\"designation\":\"Affiliate Markeer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]}],\"yogaInstructors\":[{\"imgSrc\":\"team-01.jpg\",\"name\":\"Jane Seymour\",\"designation\":\"Yoga Trainer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-02.jpg\",\"name\":\"Edward Norton\",\"designation\":\"Yoga Trainer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-03.jpg\",\"name\":\"Penelope Cruz\",\"designation\":\"Yoga Trainer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]}]}");

/***/ })

};;
//# sourceMappingURL=about-us-three-instructor.js.map