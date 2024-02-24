exports.ids = [153,104];
exports.modules = {

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogPostList.vue?vue&type=template&id=15fb620d
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-blog blog-style-list"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/blog/blog-list/' + _vm.blogInfo.imgSrc,
      "alt": _vm.blogInfo.alt
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_vm._v(_vm._s(_vm.blogInfo.title))])], 1), _vm._ssrNode(" <ul class=\"blog-meta\"><li><i class=\"icon-27\"></i>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.date)) + "</li> <li><i class=\"icon-28\"></i>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.comment)) + "</li></ul> <p>" + _vm._ssrEscape(_vm._s(_vm.blogInfo.excerpt4)) + "</p> "), _vm._ssrNode("<div class=\"read-more-btn\">", "</div>", [_c('n-link', {
    staticClass: "edu-btn btn-border btn-medium",
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_vm._v("\n                    Learn More "), _c('i', {
    staticClass: "icon-4"
  })])], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog/BlogPostList.vue?vue&type=template&id=15fb620d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogPostList.vue?vue&type=script&lang=js
/* harmony default export */ var BlogPostListvue_type_script_lang_js = ({
  props: ['blogInfo']
});
// CONCATENATED MODULE: ./components/blog/BlogPostList.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_BlogPostListvue_type_script_lang_js = (BlogPostListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blog/BlogPostList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogPostListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "419ced2c"
  
)

/* harmony default export */ var BlogPostList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-list.vue?vue&type=template&id=64a39b5e
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
      "title": "Blog List"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"section-gap-equal\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row row--30\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [_vm._l(_vm.getItems, function (blog) {
    return _vm._ssrNode("<div class=\"blog-standard-each-item\">", "</div>", [_c('BlogPostList', {
      attrs: {
        "blogInfo": blog
      }
    })], 1);
  }), _vm._ssrNode(" "), _vm.getPaginateCount > 1 ? _vm._ssrNode("<div>", "</div>", [_c('pagination', {
    staticClass: "edublink-vue-pagination mt--70 align-left",
    attrs: {
      "per-page": _vm.perPage,
      "records": _vm.blogData.blogs.length,
      "page-count": _vm.getPaginateCount,
      "options": _vm.paginationOptions
    },
    on: {
      "paginate": _vm.paginateClickCallback
    },
    model: {
      value: _vm.currentPage,
      callback: function ($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-4\">", "</div>", [_c('BlogSidebarOne', {
    attrs: {
      "blogItems": _vm.blogData.blogs,
      "categories": _vm.blogData.categories,
      "archives": _vm.blogData.archives,
      "tags": _vm.blogData.tags
    }
  })], 1)], 2)])]), _vm._ssrNode(" "), _c('CTAOne'), _vm._ssrNode(" "), _c('FooterOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/blog-list.vue?vue&type=template&id=64a39b5e

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-list.vue?vue&type=script&lang=js

/* harmony default export */ var blog_listvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    BlogSidebarOne: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 337)),
    BlogPostList: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 155)),
    CTAOne: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 272)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  data() {
    return {
      blogData: blog,
      currentPage: 1,
      perPage: 7,
      paginationOptions: {
        texts: {
          nextPage: '',
          prevPage: ''
        }
      }
    };
  },
  computed: {
    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.blogData.blogs.slice(start, end);
    },
    getPaginateCount() {
      return Math.ceil(this.blogData.blogs.length / this.perPage);
    }
  },
  methods: {
    paginateClickCallback(page) {
      this.currentPage = Number(page);
    }
  },
  head() {
    return {
      title: 'Blog List'
    };
  }
});
// CONCATENATED MODULE: ./pages/blog/blog-list.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_blog_listvue_type_script_lang_js = (blog_listvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/blog-list.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blog_listvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b1718ff"
  
)

/* harmony default export */ var blog_list = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,BlogPostList: __webpack_require__(155).default,FooterOne: __webpack_require__(33).default})


/***/ }),

/***/ 99:
/***/ (function(module) {

module.exports = JSON.parse("{\"blogs\":[{\"id\":1,\"title\":\"Become a Better Blogger: Content Planning\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-01.jpg\",\"thumbSrc\":\"small-post-01.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 10, 2022\",\"dateOnly\":\"10\",\"monthOnly\":\"Oct\",\"comment\":\"Com 09\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":2,\"title\":\"Fresh Inspiration For March And A Smashing Winner 2021\",\"category\":\"LECTURE\",\"imgSrc\":\"blog-02.jpg\",\"thumbSrc\":\"small-post-02.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 15, 2022\",\"dateOnly\":\"15\",\"monthOnly\":\"Oct\",\"comment\":\"Com 05\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"video\":[{\"src\":\"https://www.youtube.com/watch?v=PICj5tr9hcc\"}],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":3,\"title\":\"How to Developers Taking the Guess Work Generation of Business\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-03.jpg\",\"thumbSrc\":\"small-post-03.jpg\",\"alt\":\"blog image\",\"date\":\"Nov 11, 2022\",\"dateOnly\":\"11\",\"monthOnly\":\"Nov\",\"comment\":\"Com 04\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"slider\":[\"blog-06.jpg\",\"blog-08.jpg\",\"blog-09.jpg\"],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":4,\"title\":\"How to Become Computer Working Days Software Engineer?\",\"category\":\"LECTURE\",\"imgSrc\":\"blog-04.jpg\",\"thumbSrc\":\"small-post-04.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 21, 2022\",\"dateOnly\":\"21\",\"monthOnly\":\"Oct\",\"comment\":\"Com 17\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation. ullamco laboris, dolore mini idunt veniam nostrud ullamco\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":5,\"title\":\"4 Learning Management System Design Tips For Better eLearning\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-05.jpg\",\"thumbSrc\":\"small-post-05.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 05, 2022\",\"dateOnly\":\"05\",\"monthOnly\":\"Oct\",\"comment\":\"Com 08\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":6,\"title\":\"Ten Benefits Of Rentals That May Change Your Perspective\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-06.jpg\",\"thumbSrc\":\"small-post-06.jpg\",\"alt\":\"blog image\",\"date\":\"Jun 25, 2022\",\"dateOnly\":\"25\",\"monthOnly\":\"June\",\"comment\":\"Com 07\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua. mini idunt veniam nostrud.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"video\":[{\"src\":\"https://www.youtube.com/watch?v=KI4quRXzdDg\"}],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":7,\"title\":\"Learn How to Study Online From Your Home\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-07.jpg\",\"thumbSrc\":\"small-post-07.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 16, 2022\",\"dateOnly\":\"16\",\"monthOnly\":\"Oct\",\"comment\":\"Com 15\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":8,\"title\":\"Easily Create & Sell Courses Online\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-08.jpg\",\"thumbSrc\":\"small-post-08.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 19, 2022\",\"dateOnly\":\"19\",\"monthOnly\":\"Oct\",\"comment\":\"Com 03\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"slider\":[\"blog-03.jpg\",\"blog-04.jpg\",\"blog-05.jpg\"],\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":9,\"title\":\"Brave for Others, Brave for Self\",\"category\":\"EDUCATION\",\"imgSrc\":\"blog-09.jpg\",\"thumbSrc\":\"small-post-09.jpg\",\"alt\":\"blog image\",\"date\":\"Dec 18, 2022\",\"dateOnly\":\"18\",\"monthOnly\":\"Dec\",\"comment\":\"Com 12\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":10,\"title\":\"Ten Benefits Of Rentals That May Change Your Perspective\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-10.jpg\",\"thumbSrc\":\"small-post-10.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 10, 2022\",\"dateOnly\":\"10\",\"monthOnly\":\"Oct\",\"comment\":\"Com 09\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":11,\"title\":\"Fresh Inspiration For March And A Smashing Winner 2021\",\"category\":\"LECTURE\",\"imgSrc\":\"blog-11.jpg\",\"thumbSrc\":\"small-post-11.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 15, 2022\",\"dateOnly\":\"15\",\"monthOnly\":\"Oct\",\"comment\":\"Com 05\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"},{\"id\":12,\"title\":\"Learn How to Study Online From Your Home\",\"category\":\"BUSINESS\",\"imgSrc\":\"blog-12.jpg\",\"thumbSrc\":\"small-post-12.jpg\",\"alt\":\"blog image\",\"date\":\"Nov 11, 2022\",\"dateOnly\":\"11\",\"monthOnly\":\"Nov\",\"comment\":\"Com 04\",\"author\":\"Edward\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.\",\"excerpt3\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.\",\"excerpt4\":\"Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.\"}],\"kindergartenBlogs\":[{\"id\":1,\"title\":\"What Collecting Baseball Cards Taught Me\",\"category\":\"ONLINE\",\"imgSrc\":\"blog-01.jpg\",\"alt\":\"blog image\",\"date\":\"Oct 10, 2022\",\"comment\":\"Com 09\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\"},{\"id\":2,\"title\":\"Early History of the United States\",\"category\":\"HISTORY\",\"imgSrc\":\"blog-02.jpg\",\"alt\":\"blog image\",\"date\":\"Nov 28, 2022\",\"comment\":\"Com 09\",\"excerpt\":\"What I Learned From My Lemonade Stand.\"},{\"id\":3,\"title\":\"Do You Play Well With Other Children?\",\"category\":\"CHILDREN\",\"imgSrc\":\"blog-03.jpg\",\"alt\":\"blog image\",\"date\":\"Dec 18, 2022\",\"comment\":\"Com 09\",\"excerpt\":\"Lorem ipsum dolor sit amet cons tetur adipisicing sed.\"}],\"categories\":[{\"title\":\"Business Studies\",\"number\":3},{\"title\":\"Computer Engineering\",\"number\":7},{\"title\":\"Medical & Health\",\"number\":2},{\"title\":\"Software\",\"number\":1},{\"title\":\"Web Development\",\"number\":3},{\"title\":\"Uncategorized\",\"number\":9}],\"archives\":[{\"title\":\"2018 Nevember\",\"number\":9},{\"title\":\"2019 December\",\"number\":4},{\"title\":\"2020 January\",\"number\":6},{\"title\":\"2021 February\",\"number\":8},{\"title\":\"2022 March\",\"number\":3}],\"tags\":[\"Language\",\"eLearn\",\"Tips\",\"Course\",\"Motivation\"]}");

/***/ })

};;
//# sourceMappingURL=blog-list.js.map