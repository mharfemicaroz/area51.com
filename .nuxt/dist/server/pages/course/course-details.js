exports.ids = [159,115];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/course/CourseTypeThree.vue?vue&type=template&id=77a78bdd
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-course course-style-5",
    class: _vm.extraClass
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/course/course-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/course/course-type-02/' + _vm.course.image,
      "alt": _vm.course.alt
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"course-price price-round\">" + _vm._ssrEscape("$" + _vm._s(Math.trunc(_vm.course.currentPrice))) + "</div> <span class=\"course-level\">" + _vm._ssrEscape(_vm._s(_vm.course.category)) + "</span> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/course/course-details"
    }
  }, [_vm._v(_vm._s(_vm.course.title))])], 1), _vm._ssrNode(" <div class=\"course-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">" + _vm._ssrEscape("(" + _vm._s(_vm.course.ratingAvarage) + ")") + "</span></div> <p>" + _vm._ssrEscape(_vm._s(_vm.course.excerpt3)) + "</p> <ul class=\"course-meta\"><li><i class=\"icon-24\"></i>" + _vm._ssrEscape(_vm._s(_vm.course.lessons) + " " + _vm._s(_vm.course.lessons > 1 ? 'Lessons' : 'Lesson')) + "</li> <li><i class=\"icon-25\"></i>" + _vm._ssrEscape(_vm._s(_vm.course.students) + " " + _vm._s(_vm.course.students ? 'Students' : 'Student')) + "</li></ul>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"hover-content-aside\">", "</div>", [_vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<span class=\"course-level\">" + _vm._ssrEscape(_vm._s(_vm.course.category)) + "</span> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/course/course-details"
    }
  }, [_vm._v(_vm._s(_vm.course.title))])], 1), _vm._ssrNode(" <div class=\"course-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">" + _vm._ssrEscape("(" + _vm._s(_vm.course.ratingAvarage) + ")") + "</span></div> <ul class=\"course-meta\"><li>" + _vm._ssrEscape(_vm._s(_vm.course.lessons) + " " + _vm._s(_vm.course.lessons + _vm.course.lessons > 1 ? 'Lessons' : 'Lesson')) + "</li> <li>" + _vm._ssrEscape(_vm._s(_vm.course.duration)) + "</li> <li>" + _vm._ssrEscape(_vm._s(_vm.course.level)) + "</li></ul> <div class=\"course-feature\"><h6 class=\"title\">What You’ll Learn?</h6> <ul>" + _vm._ssrList(_vm.course.features.slice(0, 3), function (feature, key) {
    return "<li>" + _vm._ssrEscape(_vm._s(feature)) + "</li>";
  }) + "</ul></div> <div class=\"button-group\"><a href=\"#\" class=\"edu-btn btn-medium\">Add to Cart</a> <a href=\"#\" class=\"wishlist-btn btn-outline-dark\"><i class=\"icon-22\"></i></a></div>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/course/CourseTypeThree.vue?vue&type=template&id=77a78bdd

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/course/CourseTypeThree.vue?vue&type=script&lang=js
/* harmony default export */ var CourseTypeThreevue_type_script_lang_js = ({
  props: ['extraClass', 'course']
});
// CONCATENATED MODULE: ./components/course/CourseTypeThree.vue?vue&type=script&lang=js
 /* harmony default export */ var course_CourseTypeThreevue_type_script_lang_js = (CourseTypeThreevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/course/CourseTypeThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  course_CourseTypeThreevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "eb147174"
  
)

/* harmony default export */ var CourseTypeThree = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/course/course-details.vue?vue&type=template&id=206f3ca6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-wrapper",
    attrs: {
      "id": "main-wrapper"
    }
  }, [_c('HeaderOne'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-breadcrumb-area breadcrumb-style-3\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"breadcrumb-inner\">", "</div>", [_vm._ssrNode("<ul class=\"edu-breadcrumb\">", "</ul>", [_vm._ssrNode("<li class=\"breadcrumb-item\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" <li class=\"separator\"><i class=\"icon-angle-right\"></i></li> "), _vm._ssrNode("<li class=\"breadcrumb-item\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/course/course-one"
    }
  }, [_vm._v("Courses")])], 1), _vm._ssrNode(" <li class=\"separator\"><i class=\"icon-angle-right\"></i></li> <li aria-current=\"page\" class=\"breadcrumb-item active\">Course Details</li>")], 2), _vm._ssrNode(" <div class=\"page-title\"><h1 class=\"title\">Global Education Fall Meeting for Everyone</h1></div> <ul class=\"course-meta\"><li><i class=\"icon-58\"></i>by Edward Norton</li> <li><i class=\"icon-59\"></i>English</li> <li class=\"course-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">(720 Rating)</span></li></ul>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_vm._ssrNode("<li class=\"shape-1\"><span></span></li> "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "2",
      "imgSrc": "/images/about/shape-13.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3",
      "dataDepth": "-2",
      "imgSrc": "/images/about/shape-15.png"
    }
  }), _vm._ssrNode(" <li class=\"shape-4\"><span></span></li> <li class=\"shape-5\"><img src=\"/images/about/shape-07.png\" alt=\"shape\"></li>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"edu-section-gap course-details-area\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row row--30\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\"><div class=\"course-details-content\"><ul id=\"myTab\" role=\"tablist\" class=\"nav nav-tabs\"><li role=\"presentation\" class=\"nav-item\"><button id=\"overview-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#overview\" type=\"button\" role=\"tab\" aria-controls=\"overview\" aria-selected=\"true\" class=\"nav-link active\">Overview</button></li> <li role=\"presentation\" class=\"nav-item\"><button id=\"carriculam-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#carriculam\" type=\"button\" role=\"tab\" aria-controls=\"carriculam\" aria-selected=\"false\" class=\"nav-link\">Carriculam</button></li> <li role=\"presentation\" class=\"nav-item\"><button id=\"instructor-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#instructor\" type=\"button\" role=\"tab\" aria-controls=\"instructor\" aria-selected=\"false\" class=\"nav-link\">Instructor</button></li> <li role=\"presentation\" class=\"nav-item\"><button id=\"review-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#review\" type=\"button\" role=\"tab\" aria-controls=\"review\" aria-selected=\"false\" class=\"nav-link\">Reviews</button></li></ul> <div id=\"myTabContent\" class=\"tab-content\"><div id=\"overview\" role=\"tabpanel\" aria-labelledby=\"overview-tab\" class=\"tab-pane fade show active\"><div class=\"course-tab-content\"><div class=\"course-overview\"><h3 class=\"heading-title\">Course Description</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.</p> <p class=\"mb--60\">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p> <h5 class=\"title\">What You’ll Learn?</h5> <ul class=\"mb--60\"><li>Learn to use Python professionally, learning both Python 2 &amp; Python 3!</li> <li>Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</li> <li>Understand the Theory behind Vue.js and use it in Real Projects</li> <li>Create responsive, accessible, and beautiful layouts</li></ul> <p>Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.</p></div></div></div> <div id=\"carriculam\" role=\"tabpanel\" aria-labelledby=\"carriculam-tab\" class=\"tab-pane fade\"><div class=\"course-tab-content\"><div class=\"course-curriculam\"><h3 class=\"heading-title\">Course Curriculum</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.</p> <div class=\"course-lesson\"><h5 class=\"title\">Week 1-4</h5> <p>Advanced story telling techniques for writers: Personas, Characters &amp; Plots</p> <ul><li><div class=\"text\"><i class=\"icon-65\"></i> Introduction</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Course Overview</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Local Development Environment Tools</div> <div class=\"badge-list\"><span class=\"badge badge-primary\">0 Question</span> <span class=\"badge badge-secondary\">10 Minutes</span></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Course Exercise / Reference Files</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Code Editor Installation (Optional if you have one)</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Embedding PHP in HTML</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li></ul></div> <div class=\"course-lesson\"><h5 class=\"title\">Week 5-8</h5> <p>Advanced story telling techniques for writers: Personas, Characters &amp; Plots</p> <ul><li><div class=\"text\"><i class=\"icon-65\"></i> Defining Functions</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i>Function Parameters</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Return Values From Functions</div> <div class=\"badge-list\"><span class=\"badge badge-primary\">0 Question</span> <span class=\"badge badge-secondary\">10 Minutes</span></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Global Variable and Scope</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i>Newer Way of creating a Constant</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li> <li><div class=\"text\"><i class=\"icon-65\"></i> Constants</div> <div class=\"icon\"><i class=\"icon-68\"></i></div></li></ul></div></div></div></div> <div id=\"instructor\" role=\"tabpanel\" aria-labelledby=\"instructor-tab\" class=\"tab-pane fade\"><div class=\"course-tab-content\"><div class=\"course-instructor\"><div class=\"thumbnail\"><img src=\"/images/course/author-01.png\" alt=\"Author Images\"></div> <div class=\"author-content\"><h6 class=\"title\">Edward Norton</h6> <span class=\"subtitle\">Founder &amp; CEO</span> <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.</p> <ul class=\"social-share\"><li><a href=\"#\"><i class=\"icon-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"icon-twitter\"></i></a></li> <li><a href=\"#\"><i class=\"icon-linkedin2\"></i></a></li> <li><a href=\"#\"><i class=\"icon-youtube\"></i></a></li></ul></div></div></div></div> <div id=\"review\" role=\"tabpanel\" aria-labelledby=\"review-tab\" class=\"tab-pane fade\"><div class=\"course-tab-content\"><div class=\"course-review\"><h3 class=\"heading-title\">Course Rating</h3> <p>5.00 average rating based on 7 rating</p> <div class=\"row g-0 align-items-center\"><div class=\"col-sm-4\"><div class=\"rating-box\"><div class=\"rating-number\">5.0</div> <div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span>(7 Review)</span></div></div> <div class=\"col-sm-8\"><div class=\"review-wrapper\"><div class=\"single-progress-bar\"><div class=\"rating-text\">\n                                                            5 <i class=\"icon-23\"></i></div> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\" style=\"width: 100%\"></div></div> <span class=\"rating-value\">7</span></div> <div class=\"single-progress-bar\"><div class=\"rating-text\">\n                                                            4 <i class=\"icon-23\"></i></div> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\" style=\"width: 0%\"></div></div> <span class=\"rating-value\">0</span></div> <div class=\"single-progress-bar\"><div class=\"rating-text\">\n                                                            4 <i class=\"icon-23\"></i></div> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\" style=\"width: 0%\"></div></div> <span class=\"rating-value\">0</span></div> <div class=\"single-progress-bar\"><div class=\"rating-text\">\n                                                            4 <i class=\"icon-23\"></i></div> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\" style=\"width: 0%\"></div></div> <span class=\"rating-value\">0</span></div> <div class=\"single-progress-bar\"><div class=\"rating-text\">\n                                                            4 <i class=\"icon-23\"></i></div> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\" style=\"width: 0%\"></div></div> <span class=\"rating-value\">0</span></div></div></div></div> <div class=\"comment-area\"><h3 class=\"heading-title\">Reviews</h3> <div class=\"comment-list-wrapper\"><div class=\"comment\"><div class=\"thumbnail\"><img src=\"/images/blog/comment-01.jpg\" alt=\"Comment Images\"></div> <div class=\"comment-content\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <h5 class=\"title\">Haley Bennet</h5> <span class=\"date\">Oct 10, 2021</span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div> <div class=\"comment\"><div class=\"thumbnail\"><img src=\"/images/blog/comment-02.jpg\" alt=\"Comment Images\"></div> <div class=\"comment-content\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <h5 class=\"title\">Simon Baker</h5> <span class=\"date\">Oct 10, 2021</span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div> <div class=\"comment\"><div class=\"thumbnail\"><img src=\"/images/blog/comment-03.jpg\" alt=\"Comment Images\"></div> <div class=\"comment-content\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <h6 class=\"title\">Richard Gere</h6> <span class=\"date\">Oct 10, 2021</span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div></div></div> <div class=\"comment-form-area\"><h3 class=\"heading-title\">Write a Review</h3> <div class=\"rating-icon\"><h6 class=\"title\">Rating Here</h6> <div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div></div> <form class=\"comment-form\"><div class=\"row g-5\"><div class=\"form-group col-lg-6\"><input type=\"text\" name=\"comm-title\" id=\"comm-title\" placeholder=\"Review Title\"></div> <div class=\"form-group col-lg-6\"><input type=\"text\" name=\"comm-name\" id=\"comm-name\" placeholder=\"Reviewer name\"></div> <div class=\"form-group col-12\"><input type=\"email\" name=\"comm-email\" id=\"comm-email\" placeholder=\"Reviewer email\"></div> <div class=\"form-group col-12\"><textarea name=\"comm-message\" id=\"comm-message\" cols=\"30\" rows=\"5\" placeholder=\"Review summary\"></textarea></div> <div class=\"form-group col-12\"><button type=\"submit\" class=\"edu-btn submit-btn\">Submit Review <i class=\"icon-4\"></i></button></div></div></form></div></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-4\">", "</div>", [_vm._ssrNode("<div class=\"course-sidebar-3 sidebar-top-position\">", "</div>", [_vm._ssrNode("<div class=\"edu-course-widget widget-course-summery\">", "</div>", [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\"><img src=\"/images/course/course-46.jpg\" alt=\"Courses\"> " + _vm._ssrList(_vm.items, function (_, imageIndex) {
    return "<span><a class=\"play-btn video-popup-activation\"><i class=\"icon-18\"></i></a></span>";
  }) + "</div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h4 class=\"widget-title\">Course Includes:</h4> "), _vm._ssrNode("<ul class=\"course-item\">", "</ul>", [_vm._ssrNode("<li><span class=\"label\"><i class=\"icon-60\"></i>Price:</span> <span class=\"value price\">$70.00</span></li> <li><span class=\"label\"><i class=\"icon-62\"></i>Instrutor:</span> <span class=\"value\">Edward Norton</span></li> <li><span class=\"label\"><i class=\"icon-61\"></i>Duration:</span> <span class=\"value\">3 weeks</span></li> "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"label\">", "</span>", [_c('inline-svg', {
    attrs: {
      "src": "/images/svg-icons/books.svg",
      "alt": "book icon"
    }
  }), _vm._ssrNode("\n                                                Lessons:")], 2), _vm._ssrNode(" <span class=\"value\">8</span>")], 2), _vm._ssrNode(" <li><span class=\"label\"><i class=\"icon-63\"></i>Enrolled:</span> <span class=\"value\">65 students</span></li> <li><span class=\"label\"><i class=\"icon-59\"></i>Language:</span> <span class=\"value\">English</span></li> <li><span class=\"label\"><i class=\"icon-64\"></i>Certificate:</span> <span class=\"value\">Yes</span></li>")], 2), _vm._ssrNode(" <div class=\"read-more-btn\"><a href=\"#\" class=\"edu-btn\">Start Now <i class=\"icon-4\"></i></a></div> <div class=\"share-area\"><h4 class=\"title\">Share On:</h4> <ul class=\"social-share\"><li><a href=\"#\"><i class=\"icon-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"icon-twitter\"></i></a></li> <li><a href=\"#\"><i class=\"icon-linkedin2\"></i></a></li> <li><a href=\"#\"><i class=\"icon-youtube\"></i></a></li></ul></div>")], 2)], 2)])])])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"gap-bottom-equal\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"section-title section-left\"><h3 class=\"title\">More Courses for You</h3></div> "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.courseData.courses.slice(0, 3), function (course, key) {
    return _vm._ssrNode("<div" + _vm._ssrClass("col-12 col-xl-4 col-lg-6 col-md-6", [(key + 1) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : undefined, (key + 1) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd']) + ">", "</div>", [_c('CourseTypeThree', {
      attrs: {
        "course": course
      }
    })], 1);
  }), 0)], 2)]), _vm._ssrNode(" "), _c('FooterOne'), _vm._ssrNode(" "), _c('CoolLightBox', {
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

// CONCATENATED MODULE: ./pages/course/course-details.vue?vue&type=template&id=206f3ca6

// EXTERNAL MODULE: ./data/course.json
var course = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/course/course-details.vue?vue&type=script&lang=js

/* harmony default export */ var course_detailsvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209)),
    CourseTypeThree: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 119)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  data() {
    return {
      courseData: course,
      items: [{
        src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
      }],
      index: null
    };
  },
  head() {
    return {
      title: 'Course Details'
    };
  }
});
// CONCATENATED MODULE: ./pages/course/course-details.vue?vue&type=script&lang=js
 /* harmony default export */ var course_course_detailsvue_type_script_lang_js = (course_detailsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/course/course-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  course_course_detailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0b88ec5e"
  
)

/* harmony default export */ var course_details = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,CourseTypeThree: __webpack_require__(119).default,FooterOne: __webpack_require__(33).default})


/***/ }),

/***/ 97:
/***/ (function(module) {

module.exports = JSON.parse("{\"courses\":[{\"id\":1,\"title\":\"RFID Management System Integration\",\"image\":\"1.png\",\"alt\":\"RFID System Course Thumb\",\"duration\":\"6 Weeks\",\"level\":\"Intermediate\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"12\",\"currentPrice\":\"120.00\",\"lessons\":\"24\",\"students\":\"35\",\"category\":\"Technology\",\"type\":\"Online + Onsite\",\"excerpt\":\"Dive deep into RFID technology and learn how to integrate RFID management systems into business operations for enhanced tracking and security.\",\"instructor\":\"Alice Johnson\",\"language\":\"English\",\"certificate\":true},{\"id\":2,\"title\":\"University Information Management Systems\",\"image\":\"2.png\",\"alt\":\"University Information System Course Thumb\",\"duration\":\"8 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"15\",\"currentPrice\":\"150.00\",\"lessons\":\"30\",\"students\":\"42\",\"category\":\"Education Technology\",\"type\":\"Online Only\",\"excerpt\":\"Learn the fundamentals of designing and implementing robust information management systems for educational institutions.\",\"instructor\":\"Brian Smith\",\"language\":\"English\",\"certificate\":true},{\"id\":3,\"title\":\"Accounting and Billing Management Systems\",\"image\":\"3.png\",\"alt\":\"Accounting System Course Thumb\",\"duration\":\"5 Weeks\",\"level\":\"Beginner\",\"ratingAvarage\":\"4.7\",\"ratingTotal\":\"10\",\"currentPrice\":\"100.00\",\"lessons\":\"20\",\"students\":\"50\",\"category\":\"Business Technology\",\"type\":\"Online + Onsite\",\"excerpt\":\"Master the skills needed to deploy and manage accounting and billing systems, streamlining financial operations for businesses.\",\"instructor\":\"Claire Zhang\",\"language\":\"English\",\"certificate\":true},{\"id\":4,\"title\":\"Library Management System Development\",\"image\":\"4.png\",\"alt\":\"Library Management Course Thumb\",\"duration\":\"7 Weeks\",\"level\":\"Intermediate\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"11\",\"currentPrice\":\"110.00\",\"lessons\":\"22\",\"students\":\"38\",\"category\":\"Library Science\",\"type\":\"Online Only\",\"excerpt\":\"Explore the design and implementation of digital library management systems, including cataloging, search, and user interface design.\",\"instructor\":\"Mohammed Al Fayed\",\"language\":\"English\",\"certificate\":true},{\"id\":5,\"title\":\"Web-based Information System Deployment\",\"image\":\"web-info-system-course.jpg\",\"alt\":\"Web-based Info System Course Thumb\",\"duration\":\"9 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"13\",\"currentPrice\":\"130.00\",\"lessons\":\"27\",\"students\":\"45\",\"category\":\"Web Development\",\"type\":\"Online + Onsite\",\"excerpt\":\"Gain in-depth knowledge on developing and managing web-based information systems for seamless data access and distribution.\",\"instructor\":\"Samantha Lee\",\"language\":\"English\",\"certificate\":true},{\"id\":6,\"title\":\"Project and Billing Management Systems\",\"image\":\"project-billing-system-course.jpg\",\"alt\":\"Project Billing Management Course Thumb\",\"duration\":\"10 Weeks\",\"level\":\"All Levels\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"14\",\"currentPrice\":\"140.00\",\"lessons\":\"32\",\"students\":\"60\",\"category\":\"Project Management\",\"type\":\"Online Only\",\"excerpt\":\"Learn to streamline project workflows and financial tracking with integrated project and billing management solutions.\",\"instructor\":\"Daniel Martinez\",\"language\":\"English\",\"certificate\":true}],\"universityCourses\":[{\"id\":1,\"title\":\"Public Administration\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"8\",\"currentPrice\":\"49.00\",\"category\":\"Management\",\"type\":\"Onsite Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"title\":\"Major in Economics\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"9\",\"currentPrice\":\"39.00\",\"category\":\"Economics\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"title\":\"Business Studies\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"5\",\"currentPrice\":\"59.00\",\"category\":\"Business\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"kitchenCourses\":[{\"id\":1,\"title\":\"Healthy Sushi Roll - Japanese Popular Cooking Class\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"35 hrs\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.9\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Professional Japanese cooking from beginners to experts\",\"Will be able to cook authentic Italian recipes in their own kitchen\",\"Understand the HOW of cooking, before thinking of the WHAT to cook.\"]},{\"id\":2,\"title\":\"Nutrition Kitchen - Basics of Cooking for Busy People\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"29 hrs\",\"level\":\"Beginner\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Prepare a huge variety of simple, delicious, healthy recipes.\",\"Professional Indian cooking from beginners to experts\",\"Serve delicious and healthy meals for your loved ones.\"]},{\"id\":3,\"title\":\"Vegan Thai Cooking Classes Popular Vegan Recipes\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"14 hrs\",\"level\":\"Intermediate\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Cook much loved recipes like ravioli, pizza and pesto from scratch\",\"Cook better than restaurant Thai food at home\",\"Keep your food safe from harmful bacteria and disease.\"]}],\"kindergartenCourses\":[{\"id\":1,\"colorClass\":\"bg-color-extra02\",\"title\":\"The Ultimate Drawing Course - Beginner to Advanced\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Drawing\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"colorClass\":\"bg-color-secondary\",\"title\":\"Powerful Calming Techniques For Kids and Teens\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Techniques\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"colorClass\":\"bg-color-primary\",\"title\":\"Parenting Skills to Raise Responsible Children\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Parenting\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"yogaCourses\":[{\"id\":1,\"title\":\"Yoga for Back Pain Relief\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"15\",\"students\":\"31\",\"category\":\"Meditation\"},{\"id\":2,\"title\":\"Super Brain YOGA\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Power Yoga\"},{\"id\":3,\"title\":\"Chair Yoga for Seniors\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"35\",\"students\":\"16\",\"category\":\"Pranayama\"},{\"id\":4,\"title\":\"Online Yoga for Beginners\",\"image\":\"course-04.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"60\",\"lessons\":\"22\",\"students\":\"56\",\"category\":\"Power Yoga\"}]}");

/***/ })

};;
//# sourceMappingURL=course-details.js.map