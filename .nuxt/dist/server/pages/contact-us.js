exports.ids = [158];
exports.modules = {

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=template&id=61211c31
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
      "title": "Contact Us"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"contact-us-area\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row g-5\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-4 col-lg-6\"><div class=\"contact-us-info\"><h3 class=\"heading-title\">We're Always Eager to Hear From You!</h3> <ul class=\"address-list\"><li><h5 class=\"title\">Address</h5> <p>Studio 76d, Riley Ford, North Michael chester, CF99 6QQ</p></li> <li><h5 class=\"title\">Email</h5> <p><a href=\"mailto:edublink@example.com\" target=\"_blank\">edublink@example.com</a></p></li> <li><h5 class=\"title\">Phone</h5> <p><a href=\"tel:+0914135548598\">(+091) 413 554 8598</a></p></li></ul> <ul class=\"social-share\"><li><a href=\"#\"><i class=\"icon-share-alt\"></i></a></li> <li><a href=\"#\"><i class=\"icon-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"icon-twitter\"></i></a></li> <li><a href=\"#\"><i class=\"icon-linkedin2\"></i></a></li></ul></div></div> "), _vm._ssrNode("<div class=\"offset-xl-2 col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"contact-form form-style-2\">", "</div>", [_vm._ssrNode("<div class=\"section-title\"><h4 class=\"title\">Get In Touch</h4> <p>Fill out this form for booking a consultant advising session.</p></div> <form class=\"rnt-contact-form rwt-dynamic-form\"><div class=\"row row--10\"><div class=\"form-group col-12\"><input type=\"text\" name=\"fullname\" placeholder=\"Your name\"></div> <div class=\"form-group col-12\"><input type=\"email\" name=\"email\" placeholder=\"Enter your email\"></div> <div class=\"form-group col-12\"><input type=\"tel\" name=\"phone\" placeholder=\"Phone number\"></div> <div class=\"form-group col-12\"><textarea name=\"message\" cols=\"30\" rows=\"4\" placeholder=\"Your message\"></textarea></div> <div class=\"form-group col-12\"><button name=\"submit\" type=\"submit\" class=\"rn-btn edu-btn btn-medium submit-btn\">Submit Message <i class=\"icon-4\"></i></button> " + (_vm.showResult ? "<div class=\"col-12 success-msg\"><p>" + _vm._ssrEscape(_vm._s(_vm.resultText)) + "</p></div>" : "<!---->") + "</div></div></form> "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "1",
      "imgSrc": "/images/about/shape-13.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-2",
      "dataDepth": "-1",
      "imgSrc": "/images/counterup/shape-02.png"
    }
  })], 2)], 2)])], 2)])]), _vm._ssrNode(" <div class=\"google-map-area\"><div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=melbourne,%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe></div></div></div> "), _c('FooterOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=template&id=61211c31

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__(78);
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=script&lang=js

/* harmony default export */ var contact_usvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  data() {
    return {
      resultText: '',
      showResult: false
    };
  },
  methods: {
    sendEmail(e) {
      external_emailjs_com_default.a.sendForm('service_bxh6md3', 'template_1g7v07n', this.$refs.form, 'user_8Lx0gfI1ktOoeEN8DTV10').then(result => {
        this.showResult = true;
        this.resultText = 'Your message has been sent successfully. We will contact you soon.';
        setTimeout(() => {
          this.showResult = false;
        }, 5000);
        e.target.reset();
        console.log('SUCCESS!', result.text);
      }, error => {
        this.showResult = true;
        this.resultText = error.text;
        setTimeout(() => {
          this.showResult = false;
        }, 5000);
        console.log('FAILED...', error.text);
      });
    }
  },
  head() {
    return {
      title: 'Contact Us'
    };
  }
});
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js = (contact_usvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12e00a3b"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,FooterOne: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=contact-us.js.map