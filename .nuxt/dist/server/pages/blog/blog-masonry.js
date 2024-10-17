exports.ids = [154,106];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogPostOne.vue?vue&type=template&id=462dd517
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-blog blog-style-1"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/blog/blog-one/' + _vm.blogInfo.imgSrc,
      "alt": _vm.blogInfo.alt
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content position-top\">", "</div>", [_vm._ssrNode("<div class=\"read-more-btn\">", "</div>", [_c('n-link', {
    staticClass: "btn-icon-round",
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_c('i', {
    staticClass: "icon-4"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"category-wrap\">", "</div>", [_c('n-link', {
    staticClass: "blog-category",
    attrs: {
      "to": "/blog/blog-masonry"
    }
  }, [_vm._v(_vm._s(_vm.blogInfo.category))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_vm._v(_vm._s(_vm.blogInfo.title))])], 1), _vm._ssrNode(" <ul class=\"blog-meta\"><li><i class=\"icon-27\"></i>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.date)) + "</li> <li><i class=\"icon-28\"></i>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.comment)) + "</li></ul> <p>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.excerpt)) + "</p>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog/BlogPostOne.vue?vue&type=template&id=462dd517

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogPostOne.vue?vue&type=script&lang=js
/* harmony default export */ var BlogPostOnevue_type_script_lang_js = ({
  props: ['blogInfo']
});
// CONCATENATED MODULE: ./components/blog/BlogPostOne.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_BlogPostOnevue_type_script_lang_js = (BlogPostOnevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blog/BlogPostOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogPostOnevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c95be48"
  
)

/* harmony default export */ var BlogPostOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-masonry.vue?vue&type=template&id=37a0772a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-wrapper",
    attrs: {
      "id": "main-wrapper"
    }
  }, [_c('HeaderOne'), _vm._ssrNode(" "), _c('BreadCrumbTwo', {
    attrs: {
      "title": "Blog Masonry"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"section-gap-equal\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div id=\"masonry-gallery\" class=\"row g-5\">", "</div>", [_c('masonry', {
    staticClass: "masonry-blog-items",
    attrs: {
      "cols": _vm.breakPoints
    }
  }, _vm._l(_vm.blogData.blogs, function (blog) {
    return _c('div', {
      key: blog.id,
      staticClass: "masonry-item",
      attrs: {
        "data-aos-delay": "100",
        "data-aos": "fade-up",
        "data-aos-duration": "800"
      }
    }, [_c('BlogPostOne', {
      attrs: {
        "blogInfo": blog
      }
    })], 1);
  }), 0)], 1), _vm._ssrNode(" "), _c('PaginationOne')], 2)]), _vm._ssrNode(" "), _c('CTAOne'), _vm._ssrNode(" "), _c('FooterOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/blog-masonry.vue?vue&type=template&id=37a0772a

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-masonry.vue?vue&type=script&lang=js

/* harmony default export */ var blog_masonryvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    BlogPostOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 104)),
    CTAOne: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 275)),
    PaginationOne: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 341)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  data() {
    return {
      blogData: blog,
      breakPoints: {
        default: 3,
        991: 2,
        767: 1
      }
    };
  },
  head() {
    return {
      title: 'Blog Masonry'
    };
  }
});
// CONCATENATED MODULE: ./pages/blog/blog-masonry.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_blog_masonryvue_type_script_lang_js = (blog_masonryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/blog-masonry.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blog_masonryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "da149e18"
  
)

/* harmony default export */ var blog_masonry = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,BlogPostOne: __webpack_require__(104).default,FooterOne: __webpack_require__(33).default})


/***/ }),

/***/ 99:
/***/ (function(module) {

module.exports = JSON.parse("{\"blogs\":[{\"id\":1,\"title\":\"Become a Better Blogger: Content Planning\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-01.jpg\",\"thumbSrc\":\"small-post-01.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 10, 2022\",\"dateOnly\":\"10\",\"monthOnly\":\"Oct\",\"comment\":\"Com 09\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":2,\"title\":\"Fresh Inspiration For March And A Smashing Winner 2021\",\"category\":\"LECTURE\",\"imgSrc\":\"blog-02.jpg\",\"thumbSrc\":\"small-post-02.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 15, 2022\",\"dateOnly\":\"15\",\"monthOnly\":\"Oct\",\"comment\":\"Com 05\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"video\":[{\"src\":\"https://www.youtube.com/watch?v=PICj5tr9hcc\"}],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":3,\"title\":\"How to Developers Taking the Guess Work Generation of Business\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-03.jpg\",\"thumbSrc\":\"small-post-03.jpg\",\"alt\":\"blog image\",\"date\":\"Nov 11, 2022\",\"dateOnly\":\"11\",\"monthOnly\":\"Nov\",\"comment\":\"Com 04\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"slider\":[\"blog-06.jpg\",\"blog-08.jpg\",\"blog-09.jpg\"],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":4,\"title\":\"How to Become Computer Working Days Software Engineer?\",\"category\":\"LECTURE\",\"imgSrc\":\"blog-04.jpg\",\"thumbSrc\":\"small-post-04.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 21, 2022\",\"dateOnly\":\"21\",\"monthOnly\":\"Oct\",\"comment\":\"Com 17\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation. ullamco laboris, dolore mini idunt veniam nostrud ullamco\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":5,\"title\":\"4 Learning Management System Design Tips For Better eLearning\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-05.jpg\",\"thumbSrc\":\"small-post-05.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 05, 2022\",\"dateOnly\":\"05\",\"monthOnly\":\"Oct\",\"comment\":\"Com 08\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":6,\"title\":\"Ten Benefits Of Rentals That May Change Your Perspective\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-06.jpg\",\"thumbSrc\":\"small-post-06.jpg\",\"alt\":\"blog image\",\"date\":\"Jun 25, 2022\",\"dateOnly\":\"25\",\"monthOnly\":\"June\",\"comment\":\"Com 07\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua. mini idunt veniam nostrud.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"video\":[{\"src\":\"https://www.youtube.com/watch?v=KI4quRXzdDg\"}],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":7,\"title\":\"Learn How to Study Online From Your Home\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-07.jpg\",\"thumbSrc\":\"small-post-07.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 16, 2022\",\"dateOnly\":\"16\",\"monthOnly\":\"Oct\",\"comment\":\"Com 15\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":8,\"title\":\"Easily Create & Sell Courses Online\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-08.jpg\",\"thumbSrc\":\"small-post-08.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 19, 2022\",\"dateOnly\":\"19\",\"monthOnly\":\"Oct\",\"comment\":\"Com 03\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"slider\":[\"blog-03.jpg\",\"blog-04.jpg\",\"blog-05.jpg\"],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":9,\"title\":\"Brave for Others, Brave for Self\",\"category\":\"EDUCATION\",\"imgSrc\":\"blog-09.jpg\",\"thumbSrc\":\"small-post-09.jpg\",\"alt\":\"blog image\",\"date\":\"Dec 18, 2022\",\"dateOnly\":\"18\",\"monthOnly\":\"Dec\",\"comment\":\"Com 12\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":10,\"title\":\"Ten Benefits Of Rentals That May Change Your Perspective\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-10.jpg\",\"thumbSrc\":\"small-post-10.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 10, 2022\",\"dateOnly\":\"10\",\"monthOnly\":\"Oct\",\"comment\":\"Com 09\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":11,\"title\":\"Fresh Inspiration For March And A Smashing Winner 2021\",\"category\":\"LECTURE\",\"imgSrc\":\"blog-11.jpg\",\"thumbSrc\":\"small-post-11.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 15, 2022\",\"dateOnly\":\"15\",\"monthOnly\":\"Oct\",\"comment\":\"Com 05\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":12,\"title\":\"Learn How to Study Online From Your Home\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-12.jpg\",\"thumbSrc\":\"small-post-12.jpg\",\"alt\":\"blog image\",\"date\":\"Nov 11, 2022\",\"dateOnly\":\"11\",\"monthOnly\":\"Nov\",\"comment\":\"Com 04\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"}],\"kindergartenBlogs\":[{\"id\":1,\"title\":\"What Collecting Baseball Cards Taught Me\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-01.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 10, 2022\",\"comment\":\"Com 09\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\"},{\"id\":2,\"title\":\"Early History of the United States\",\"category\":\"HISTORY\",\"imgSrc\":\"blog-02.jpg\",\"alt\":\"blog image\",\"date\":\"Nov 28, 2022\",\"comment\":\"Com 09\",\"excerpt\":\"What I Learned From My Lemonade Stand.\"},{\"id\":3,\"title\":\"Do You Play Well With Other Children?\",\"category\":\"CHILDREN\",\"imgSrc\":\"blog-03.jpg\",\"alt\":\"blog image\",\"date\":\"Dec 18, 2022\",\"comment\":\"Com 09\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\"}],\"categories\":[{\"title\":\"Business Studies\",\"number\":3},{\"title\":\"Computer Engineering\",\"number\":7},{\"title\":\"Medical & Health\",\"number\":2},{\"title\":\"Software\",\"number\":1},{\"title\":\"Web Development\",\"number\":3},{\"title\":\"Uncategorized\",\"number\":9}],\"archives\":[{\"title\":\"2018 Nevember\",\"number\":9},{\"title\":\"2019 December\",\"number\":4},{\"title\":\"2020 January\",\"number\":6},{\"title\":\"2021 February\",\"number\":8},{\"title\":\"2022 March\",\"number\":3}],\"tags\":[\"Language\",\"eLearn\",\"Tips\",\"Course\",\"Motivation\"]}");

/***/ })

};;
//# sourceMappingURL=blog-masonry.js.map