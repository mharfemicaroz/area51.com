exports.ids = [26];
exports.modules = {

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-two/FunFact.vue?vue&type=template&id=7603fb4c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "CounterUp1",
    staticClass: "counterup-area-7 section-gap-equal"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row g-5\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"counterup-content\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Fun Facts",
      "title": "The Learge <span class=\"color-secondary\">Number</span> of Counting",
      "subTitle": "Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.",
      "alignment": "section-left"
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"counterup-box-wrap\">", "</div>", [_vm._ssrNode("<div class=\"counterup-box\">", "</div>", [_vm._ssrNode("<div class=\"edu-counterup counterup-style-2\">", "</div>", [_vm._ssrNode("<h2 class=\"counter-item count-number primary-color\">", "</h2>", [_c('countTo', {
    ref: "Ref1",
    attrs: {
      "startVal": 0,
      "endVal": 19.3,
      "duration": 3000,
      "autoplay": true,
      "decimals": 1
    }
  }), _vm._ssrNode(" <span class=\"edu-vue-count-suffix\">K</span>")], 2), _vm._ssrNode(" <h6 class=\"title\">Student Enrolled</h6>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-counterup counterup-style-2\">", "</div>", [_vm._ssrNode("<h2 class=\"counter-item count-number secondary-color\">", "</h2>", [_c('countTo', {
    ref: "Ref2",
    attrs: {
      "startVal": 0,
      "endVal": 12.4,
      "duration": 3000,
      "autoplay": true,
      "decimals": 1
    }
  }), _vm._ssrNode(" <span class=\"edu-vue-count-suffix\">K</span>")], 2), _vm._ssrNode(" <h6 class=\"title\">Class Completed</h6>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-counterup counterup-style-2\">", "</div>", [_vm._ssrNode("<h2 class=\"counter-item count-number extra05-color\">", "</h2>", [_c('countTo', {
    ref: "Ref4",
    attrs: {
      "startVal": 0,
      "endVal": 300,
      "duration": 3000,
      "autoplay": true
    }
  }), _vm._ssrNode(" <span class=\"edu-vue-count-suffix\">+</span>")], 2), _vm._ssrNode(" <h6 class=\"title\">Top Instructors</h6>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-counterup counterup-style-2\">", "</div>", [_vm._ssrNode("<h2 class=\"counter-item count-number extra02-color\">", "</h2>", [_c('countTo', {
    ref: "Ref3",
    attrs: {
      "startVal": 0,
      "endVal": 100,
      "duration": 3000,
      "autoplay": true
    }
  }), _vm._ssrNode(" <span class=\"edu-vue-count-suffix\">%</span>")], 2), _vm._ssrNode(" <h6 class=\"title\">Satisfaction Rate</h6>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"shape-group\">", "</ul>", [_c('MouseMove', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "-1.6",
      "data-aos-delay": "100",
      "data-aos": "fade",
      "data-aos-duration": "100",
      "imgSrc": "/images/about/shape-13.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-3",
      "dataDepth": "1.6",
      "data-aos-delay": "100",
      "data-aos": "fade",
      "data-aos-duration": "100",
      "imgSrc": "/images/counterup/shape-04.png"
    }
  }), _vm._ssrNode(" "), _c('MouseMove', {
    attrs: {
      "addClassName": "shape-4",
      "dataDepth": "-1.6",
      "data-aos-delay": "100",
      "data-aos": "fade",
      "data-aos-duration": "100",
      "imgSrc": "images/counterup/shape-05.png"
    }
  }), _vm._ssrNode(" <li class=\"shape-2\"><img src=\"/images/counterup/shape-02.png\" alt=\"Shape\" class=\"rotateit\"></li>")], 2)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about-us-two/FunFact.vue?vue&type=template&id=7603fb4c

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(76);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about-us-two/FunFact.vue?vue&type=script&lang=js

/* harmony default export */ var FunFactvue_type_script_lang_js = ({
  components: {
    countTo: external_vue_count_to_default.a,
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 274)),
    MouseMove: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 209))
  },
  data() {
    return {
      countStart: false
    };
  },
  methods: {
    startCounter() {
      this.$refs.Ref1.start();
      this.$refs.Ref2.start();
      this.$refs.Ref3.start();
      this.$refs.Ref4.start();
      this.countStart = true;
    }
  },
  mounted() {
    let counterUpTrigger = this.$refs.CounterUp1;
    window.addEventListener('scroll', () => {
      if (counterUpTrigger && !this.countStart) {
        if (window.pageYOffset > counterUpTrigger.offsetTop - 300) {
          this.startCounter();
        }
      }
    });
  }
});
// CONCATENATED MODULE: ./components/about-us-two/FunFact.vue?vue&type=script&lang=js
 /* harmony default export */ var about_us_two_FunFactvue_type_script_lang_js = (FunFactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/about-us-two/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_us_two_FunFactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ab9006a"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us-two-fun-fact.js.map