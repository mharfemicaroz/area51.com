exports.ids = [48,110];
exports.modules = {

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/course/CourseTypeFive.vue?vue&type=template&id=2d9b3fcb
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-course course-style-7",
    class: _vm.course.colorClass
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/course/course-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/course/course-type-05/' + _vm.course.image,
      "alt": _vm.course.alt
    }
  })]), _vm._ssrNode(" <div class=\"course-price price-round\">" + _vm._ssrEscape("$" + _vm._s(_vm.course.currentPrice)) + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<span class=\"course-level\">" + _vm._ssrEscape(_vm._s(_vm.course.category)) + "</span> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/course/course-details"
    }
  }, [_vm._v(_vm._s(_vm.course.title))])], 1), _vm._ssrNode(" <ul class=\"course-meta\"><li><i class=\"icon-24\"></i>" + _vm._ssrEscape(_vm._s(_vm.course.lessons) + " " + _vm._s(_vm.course.lessons > 1 ? 'Lessons' : 'Lesson')) + "</li> <li><i class=\"icon-25\"></i>" + _vm._ssrEscape(_vm._s(_vm.course.students) + " " + _vm._s(_vm.course.students ? 'Students' : 'Student')) + "</li></ul> <p>" + _vm._ssrEscape(_vm._s(_vm.course.excerpt)) + "</p>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/course/CourseTypeFive.vue?vue&type=template&id=2d9b3fcb

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/course/CourseTypeFive.vue?vue&type=script&lang=js
/* harmony default export */ var CourseTypeFivevue_type_script_lang_js = ({
  props: ['extraClass', 'course']
});
// CONCATENATED MODULE: ./components/course/CourseTypeFive.vue?vue&type=script&lang=js
 /* harmony default export */ var course_CourseTypeFivevue_type_script_lang_js = (CourseTypeFivevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/course/CourseTypeFive.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  course_CourseTypeFivevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ecf2df8c"
  
)

/* harmony default export */ var CourseTypeFive = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kindergarten/Course.vue?vue&type=template&id=cf7a0368
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-course-area course-area-7 svg-image--6"
  }, [_vm._ssrNode("<div class=\"container edublink-animated-shape\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Popular Courses",
      "preTitleClass": "pre-textsecondary",
      "title": "Pick A Course To Get Started",
      "alignment": "section-center"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.courseData.kindergartenCourses.slice(0, 3), function (course) {
    return _vm._ssrNode("<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-12 col-lg-4 col-md-6\">", "</div>", [_c('CourseTypeFive', {
      attrs: {
        "course": course
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "2",
      "imgSrc": "/images/banner/icon-3.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-2",
      "imgSrc": "/images/banner/icon-2.png"
    }
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-3",
      "dataDepth": "2",
      "imgSrc": "/images/banner/icon-4.png"
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-kindergarten/Course.vue?vue&type=template&id=cf7a0368

// EXTERNAL MODULE: ./data/course.json
var course = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kindergarten/Course.vue?vue&type=script&lang=js

/* harmony default export */ var Coursevue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 277)),
    CourseTypeFive: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 165)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  data() {
    return {
      courseData: course
    };
  }
});
// CONCATENATED MODULE: ./components/home-kindergarten/Course.vue?vue&type=script&lang=js
 /* harmony default export */ var home_kindergarten_Coursevue_type_script_lang_js = (Coursevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-kindergarten/Course.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_kindergarten_Coursevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "80f738be"
  
)

/* harmony default export */ var Course = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CourseTypeFive: __webpack_require__(165).default})


/***/ }),

/***/ 97:
/***/ (function(module) {

module.exports = JSON.parse("{\"courses\":[{\"id\":1,\"title\":\"RFID Management System Integration\",\"image\":\"1.png\",\"alt\":\"RFID System Course Thumb\",\"duration\":\"6 Weeks\",\"level\":\"Intermediate\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"12\",\"currentPrice\":\"120.00\",\"lessons\":\"24\",\"students\":\"35\",\"category\":\"Technology\",\"type\":\"Online + Onsite\",\"excerpt\":\"Dive deep into RFID technology and learn how to integrate RFID management systems into business operations for enhanced tracking and security.\",\"instructor\":\"Alice Johnson\",\"language\":\"English\",\"certificate\":true},{\"id\":2,\"title\":\"University Information Management Systems\",\"image\":\"2.png\",\"alt\":\"University Information System Course Thumb\",\"duration\":\"8 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"15\",\"currentPrice\":\"150.00\",\"lessons\":\"30\",\"students\":\"42\",\"category\":\"Education Technology\",\"type\":\"Online Only\",\"excerpt\":\"Learn the fundamentals of designing and implementing robust information management systems for educational institutions.\",\"instructor\":\"Brian Smith\",\"language\":\"English\",\"certificate\":true},{\"id\":3,\"title\":\"Accounting and Billing Management Systems\",\"image\":\"3.png\",\"alt\":\"Accounting System Course Thumb\",\"duration\":\"5 Weeks\",\"level\":\"Beginner\",\"ratingAvarage\":\"4.7\",\"ratingTotal\":\"10\",\"currentPrice\":\"100.00\",\"lessons\":\"20\",\"students\":\"50\",\"category\":\"Business Technology\",\"type\":\"Online + Onsite\",\"excerpt\":\"Master the skills needed to deploy and manage accounting and billing systems, streamlining financial operations for businesses.\",\"instructor\":\"Claire Zhang\",\"language\":\"English\",\"certificate\":true},{\"id\":4,\"title\":\"Library Management System Development\",\"image\":\"4.png\",\"alt\":\"Library Management Course Thumb\",\"duration\":\"7 Weeks\",\"level\":\"Intermediate\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"11\",\"currentPrice\":\"110.00\",\"lessons\":\"22\",\"students\":\"38\",\"category\":\"Library Science\",\"type\":\"Online Only\",\"excerpt\":\"Explore the design and implementation of digital library management systems, including cataloging, search, and user interface design.\",\"instructor\":\"Mohammed Al Fayed\",\"language\":\"English\",\"certificate\":true},{\"id\":5,\"title\":\"Web-based Information System Deployment\",\"image\":\"web-info-system-course.jpg\",\"alt\":\"Web-based Info System Course Thumb\",\"duration\":\"9 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"13\",\"currentPrice\":\"130.00\",\"lessons\":\"27\",\"students\":\"45\",\"category\":\"Web Development\",\"type\":\"Online + Onsite\",\"excerpt\":\"Gain in-depth knowledge on developing and managing web-based information systems for seamless data access and distribution.\",\"instructor\":\"Samantha Lee\",\"language\":\"English\",\"certificate\":true},{\"id\":6,\"title\":\"Project and Billing Management Systems\",\"image\":\"project-billing-system-course.jpg\",\"alt\":\"Project Billing Management Course Thumb\",\"duration\":\"10 Weeks\",\"level\":\"All Levels\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"14\",\"currentPrice\":\"140.00\",\"lessons\":\"32\",\"students\":\"60\",\"category\":\"Project Management\",\"type\":\"Online Only\",\"excerpt\":\"Learn to streamline project workflows and financial tracking with integrated project and billing management solutions.\",\"instructor\":\"Daniel Martinez\",\"language\":\"English\",\"certificate\":true}],\"universityCourses\":[{\"id\":1,\"title\":\"Public Administration\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"8\",\"currentPrice\":\"49.00\",\"category\":\"Management\",\"type\":\"Onsite Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"title\":\"Major in Economics\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"9\",\"currentPrice\":\"39.00\",\"category\":\"Economics\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"title\":\"Business Studies\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"5\",\"currentPrice\":\"59.00\",\"category\":\"Business\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"kitchenCourses\":[{\"id\":1,\"title\":\"Healthy Sushi Roll - Japanese Popular Cooking Class\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"35 hrs\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.9\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Professional Japanese cooking from beginners to experts\",\"Will be able to cook authentic Italian recipes in their own kitchen\",\"Understand the HOW of cooking, before thinking of the WHAT to cook.\"]},{\"id\":2,\"title\":\"Nutrition Kitchen - Basics of Cooking for Busy People\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"29 hrs\",\"level\":\"Beginner\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Prepare a huge variety of simple, delicious, healthy recipes.\",\"Professional Indian cooking from beginners to experts\",\"Serve delicious and healthy meals for your loved ones.\"]},{\"id\":3,\"title\":\"Vegan Thai Cooking Classes Popular Vegan Recipes\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"14 hrs\",\"level\":\"Intermediate\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Cook much loved recipes like ravioli, pizza and pesto from scratch\",\"Cook better than restaurant Thai food at home\",\"Keep your food safe from harmful bacteria and disease.\"]}],\"kindergartenCourses\":[{\"id\":1,\"colorClass\":\"bg-color-extra02\",\"title\":\"The Ultimate Drawing Course - Beginner to Advanced\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Drawing\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"colorClass\":\"bg-color-secondary\",\"title\":\"Powerful Calming Techniques For Kids and Teens\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Techniques\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"colorClass\":\"bg-color-primary\",\"title\":\"Parenting Skills to Raise Responsible Children\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Parenting\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"yogaCourses\":[{\"id\":1,\"title\":\"Yoga for Back Pain Relief\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"15\",\"students\":\"31\",\"category\":\"Meditation\"},{\"id\":2,\"title\":\"Super Brain YOGA\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Power Yoga\"},{\"id\":3,\"title\":\"Chair Yoga for Seniors\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"35\",\"students\":\"16\",\"category\":\"Pranayama\"},{\"id\":4,\"title\":\"Online Yoga for Beginners\",\"image\":\"course-04.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"60\",\"lessons\":\"22\",\"students\":\"56\",\"category\":\"Power Yoga\"}]}");

/***/ })

};;
//# sourceMappingURL=home-kindergarten-course.js.map