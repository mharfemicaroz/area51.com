exports.ids = [56];
exports.modules = {

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kitchen-coach/Course.vue?vue&type=template&id=79ad5bf1
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-course-area course-area-5 gap-tb-text"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Popular Courses",
      "title": "Pick A Course To Get Started",
      "alignment": "section-center"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.courseData.kitchenCourses.slice(0, 3), function (course, key) {
    return _vm._ssrNode("<div" + _vm._ssrClass("col-12 col-xl-4 col-lg-6 col-md-6", [(key + 1) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : undefined, (key + 1) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd']) + ">", "</div>", [_vm._ssrNode("<div class=\"edu-course course-style-5\">", "</div>", [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
      attrs: {
        "to": "/course/course-details"
      }
    }, [_c('img', {
      attrs: {
        "src": '/images/course/course-type-03/' + course.image,
        "alt": course.alt
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"course-price price-round\">" + _vm._ssrEscape("$" + _vm._s(Math.trunc(course.currentPrice))) + "</div> <span class=\"course-level\">" + _vm._ssrEscape(_vm._s(course.category)) + "</span> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": "/course/course-details"
      }
    }, [_vm._v(_vm._s(course.title))])], 1), _vm._ssrNode(" <div class=\"course-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">" + _vm._ssrEscape("(" + _vm._s(course.ratingAvarage) + ")") + "</span></div> <p>" + _vm._ssrEscape(_vm._s(course.excerpt3)) + "</p> <ul class=\"course-meta\"><li><i class=\"icon-24\"></i>" + _vm._ssrEscape(_vm._s(course.lessons) + " " + _vm._s(course.lessons > 1 ? 'Lessons' : 'Lesson')) + "</li> <li><i class=\"icon-25\"></i>" + _vm._ssrEscape(_vm._s(course.students) + " " + _vm._s(course.students ? 'Students' : 'Student')) + "</li></ul>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"hover-content-aside\">", "</div>", [_vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<span class=\"course-level\">" + _vm._ssrEscape(_vm._s(course.category)) + "</span> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": "/course/course-details"
      }
    }, [_vm._v(_vm._s(course.title))])], 1), _vm._ssrNode(" <div class=\"course-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">" + _vm._ssrEscape("(" + _vm._s(course.ratingAvarage) + ")") + "</span></div> <ul class=\"course-meta\"><li>" + _vm._ssrEscape(_vm._s(course.lessons) + " " + _vm._s(course.lessons + course.lessons > 1 ? 'Lessons' : 'Lesson')) + "</li> <li>" + _vm._ssrEscape(_vm._s(course.duration)) + "</li> <li>" + _vm._ssrEscape(_vm._s(course.level)) + "</li></ul> <div class=\"course-feature\"><h6 class=\"title\">What You’ll Learn?</h6> <ul>" + _vm._ssrList(course.features.slice(0, 3), function (feature, key) {
      return "<li>" + _vm._ssrEscape(_vm._s(feature)) + "</li>";
    }) + "</ul></div> <div class=\"button-group\"><a href=\"#\" class=\"edu-btn btn-medium\">Add to Cart</a> <a href=\"#\" class=\"wishlist-btn btn-outline-dark\"><i class=\"icon-22\"></i></a></div>")], 2)])], 2)]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"course-view-all\">", "</div>", [_vm._ssrNode("<h5 class=\"view-text\">", "</h5>", [_vm._ssrNode("Get the Most Dedicated Kitchen Course from EduBlink. "), _c('n-link', {
    staticClass: "btn-transparent",
    attrs: {
      "to": "/course/course-one"
    }
  }, [_vm._v("All Courses "), _c('i', {
    staticClass: "icon-4"
  })])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-kitchen-coach/Course.vue?vue&type=template&id=79ad5bf1

// EXTERNAL MODULE: ./data/course.json
var course = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-kitchen-coach/Course.vue?vue&type=script&lang=js

/* harmony default export */ var Coursevue_type_script_lang_js = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 274))
  },
  data() {
    return {
      courseData: course
    };
  }
});
// CONCATENATED MODULE: ./components/home-kitchen-coach/Course.vue?vue&type=script&lang=js
 /* harmony default export */ var home_kitchen_coach_Coursevue_type_script_lang_js = (Coursevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-kitchen-coach/Course.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_kitchen_coach_Coursevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5c554266"
  
)

/* harmony default export */ var Course = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module) {

module.exports = JSON.parse("{\"courses\":[{\"id\":1,\"title\":\"RFID Management System Integration\",\"image\":\"1.png\",\"alt\":\"RFID System Course Thumb\",\"duration\":\"6 Weeks\",\"level\":\"Intermediate\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"12\",\"currentPrice\":\"120.00\",\"lessons\":\"24\",\"students\":\"35\",\"category\":\"Technology\",\"type\":\"Online + Onsite\",\"excerpt\":\"Dive deep into RFID technology and learn how to integrate RFID management systems into business operations for enhanced tracking and security.\",\"instructor\":\"Alice Johnson\",\"language\":\"English\",\"certificate\":true},{\"id\":2,\"title\":\"University Information Management Systems\",\"image\":\"2.png\",\"alt\":\"University Information System Course Thumb\",\"duration\":\"8 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"15\",\"currentPrice\":\"150.00\",\"lessons\":\"30\",\"students\":\"42\",\"category\":\"Education Technology\",\"type\":\"Online Only\",\"excerpt\":\"Learn the fundamentals of designing and implementing robust information management systems for educational institutions.\",\"instructor\":\"Brian Smith\",\"language\":\"English\",\"certificate\":true},{\"id\":3,\"title\":\"Accounting and Billing Management Systems\",\"image\":\"3.png\",\"alt\":\"Accounting System Course Thumb\",\"duration\":\"5 Weeks\",\"level\":\"Beginner\",\"ratingAvarage\":\"4.7\",\"ratingTotal\":\"10\",\"currentPrice\":\"100.00\",\"lessons\":\"20\",\"students\":\"50\",\"category\":\"Business Technology\",\"type\":\"Online + Onsite\",\"excerpt\":\"Master the skills needed to deploy and manage accounting and billing systems, streamlining financial operations for businesses.\",\"instructor\":\"Claire Zhang\",\"language\":\"English\",\"certificate\":true},{\"id\":4,\"title\":\"Library Management System Development\",\"image\":\"4.png\",\"alt\":\"Library Management Course Thumb\",\"duration\":\"7 Weeks\",\"level\":\"Intermediate\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"11\",\"currentPrice\":\"110.00\",\"lessons\":\"22\",\"students\":\"38\",\"category\":\"Library Science\",\"type\":\"Online Only\",\"excerpt\":\"Explore the design and implementation of digital library management systems, including cataloging, search, and user interface design.\",\"instructor\":\"Mohammed Al Fayed\",\"language\":\"English\",\"certificate\":true},{\"id\":5,\"title\":\"Web-based Information System Deployment\",\"image\":\"web-info-system-course.jpg\",\"alt\":\"Web-based Info System Course Thumb\",\"duration\":\"9 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"13\",\"currentPrice\":\"130.00\",\"lessons\":\"27\",\"students\":\"45\",\"category\":\"Web Development\",\"type\":\"Online + Onsite\",\"excerpt\":\"Gain in-depth knowledge on developing and managing web-based information systems for seamless data access and distribution.\",\"instructor\":\"Samantha Lee\",\"language\":\"English\",\"certificate\":true},{\"id\":6,\"title\":\"Project and Billing Management Systems\",\"image\":\"project-billing-system-course.jpg\",\"alt\":\"Project Billing Management Course Thumb\",\"duration\":\"10 Weeks\",\"level\":\"All Levels\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"14\",\"currentPrice\":\"140.00\",\"lessons\":\"32\",\"students\":\"60\",\"category\":\"Project Management\",\"type\":\"Online Only\",\"excerpt\":\"Learn to streamline project workflows and financial tracking with integrated project and billing management solutions.\",\"instructor\":\"Daniel Martinez\",\"language\":\"English\",\"certificate\":true}],\"universityCourses\":[{\"id\":1,\"title\":\"Public Administration\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"8\",\"currentPrice\":\"49.00\",\"category\":\"Management\",\"type\":\"Onsite Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"title\":\"Major in Economics\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"9\",\"currentPrice\":\"39.00\",\"category\":\"Economics\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"title\":\"Business Studies\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"5\",\"currentPrice\":\"59.00\",\"category\":\"Business\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"kitchenCourses\":[{\"id\":1,\"title\":\"Healthy Sushi Roll - Japanese Popular Cooking Class\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"35 hrs\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.9\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Professional Japanese cooking from beginners to experts\",\"Will be able to cook authentic Italian recipes in their own kitchen\",\"Understand the HOW of cooking, before thinking of the WHAT to cook.\"]},{\"id\":2,\"title\":\"Nutrition Kitchen - Basics of Cooking for Busy People\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"29 hrs\",\"level\":\"Beginner\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Prepare a huge variety of simple, delicious, healthy recipes.\",\"Professional Indian cooking from beginners to experts\",\"Serve delicious and healthy meals for your loved ones.\"]},{\"id\":3,\"title\":\"Vegan Thai Cooking Classes Popular Vegan Recipes\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"14 hrs\",\"level\":\"Intermediate\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Cook much loved recipes like ravioli, pizza and pesto from scratch\",\"Cook better than restaurant Thai food at home\",\"Keep your food safe from harmful bacteria and disease.\"]}],\"kindergartenCourses\":[{\"id\":1,\"colorClass\":\"bg-color-extra02\",\"title\":\"The Ultimate Drawing Course - Beginner to Advanced\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Drawing\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"colorClass\":\"bg-color-secondary\",\"title\":\"Powerful Calming Techniques For Kids and Teens\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Techniques\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"colorClass\":\"bg-color-primary\",\"title\":\"Parenting Skills to Raise Responsible Children\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Parenting\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"yogaCourses\":[{\"id\":1,\"title\":\"Yoga for Back Pain Relief\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"15\",\"students\":\"31\",\"category\":\"Meditation\"},{\"id\":2,\"title\":\"Super Brain YOGA\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Power Yoga\"},{\"id\":3,\"title\":\"Chair Yoga for Seniors\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"35\",\"students\":\"16\",\"category\":\"Pranayama\"},{\"id\":4,\"title\":\"Online Yoga for Beginners\",\"image\":\"course-04.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"60\",\"lessons\":\"22\",\"students\":\"56\",\"category\":\"Power Yoga\"}]}");

/***/ })

};;
//# sourceMappingURL=home-kitchen-coach-course.js.map