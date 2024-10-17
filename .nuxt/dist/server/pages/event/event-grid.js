exports.ids = [169,117];
exports.modules = {

/***/ 103:
/***/ (function(module) {

module.exports = JSON.parse("{\"events\":[{\"id\":1,\"imgSrc\":\"DNSC.jpg\",\"title\":\"Davao Del Norte State College Event\",\"date\":\"18\",\"fullDate\":\"January 18, 2024\",\"month\":\"JAN\",\"time\":\"10:00AM-12:00PM\",\"location\":\"Davao City, Philippines\",\"excerpt\":\"A collaborative event between Davao Del Norte State College and international partners.\"},{\"id\":2,\"imgSrc\":\"DICTXI.jpg\",\"title\":\"DICT Partnership Meeting\",\"date\":\"19\",\"fullDate\":\"February 19, 2024\",\"month\":\"FEB\",\"time\":\"02:00PM-04:00PM\",\"location\":\"DICT Office, Philippines\",\"excerpt\":\"A strategic meeting focusing on future partnerships with the Department of Information and Communications Technology.\"},{\"id\":3,\"imgSrc\":\"CBaaS Webinar.jpg\",\"title\":\"CBaaS Innovation Webinar\",\"date\":\"20\",\"fullDate\":\"July 20, 2024\",\"month\":\"JUL\",\"time\":\"09:00AM-11:00AM\",\"location\":\"Online Webinar\",\"excerpt\":\"An insightful webinar on unlocking innovation for commercialization, featuring industry leaders from across the globe.\"},{\"id\":4,\"imgSrc\":\"Unlocking Innovations.jpg\",\"title\":\"Unlocking Innovations\",\"date\":\"20\",\"fullDate\":\"September 20, 2024\",\"month\":\"SEP\",\"time\":\"09:00AM-11:00AM\",\"location\":\"Online Webinar\",\"excerpt\":\"A thought-provoking webinar on harnessing innovation for commercialization, featuring global industry leaders.\"}]}");

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/event/EventOne.vue?vue&type=template&id=af559cc6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-event event-style-1"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/event/event-details"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "512px !important",
      "height": "360px !important"
    },
    attrs: {
      "src": '/images/event/' + _vm.eventInfo.imgSrc,
      "alt": _vm.eventInfo.name + ' Thumbnail'
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"event-date\"><span class=\"day\">" + _vm._ssrEscape(_vm._s(_vm.eventInfo.date)) + "</span> <span class=\"month\">" + _vm._ssrEscape(_vm._s(_vm.eventInfo.month)) + "</span></div> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v(_vm._s(_vm.eventInfo.title))])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.excerpt)) + "</p> <ul class=\"event-meta\"><li><i class=\"icon-40\"></i>" + _vm._ssrEscape(_vm._s(_vm.eventInfo.location)) + "</li></ul>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/event/EventOne.vue?vue&type=template&id=af559cc6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/event/EventOne.vue?vue&type=script&lang=js
/* harmony default export */ var EventOnevue_type_script_lang_js = ({
  props: ["eventInfo"]
});
// CONCATENATED MODULE: ./components/event/EventOne.vue?vue&type=script&lang=js
 /* harmony default export */ var event_EventOnevue_type_script_lang_js = (EventOnevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/event/EventOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  event_EventOnevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ab1c47e8"
  
)

/* harmony default export */ var EventOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/event/event-grid.vue?vue&type=template&id=2717e5aa
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
      "pageTitle": "Event Grid",
      "title": "Event Page"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-event-area event-area-1 section-gap-equal\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.getItems, function (event) {
    return _vm._ssrNode("<div data-aos-delay=\"100\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-4 col-md-6\">", "</div>", [_c('EventOne', {
      attrs: {
        "eventInfo": event
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.getPaginateCount > 1 ? _vm._ssrNode("<div>", "</div>", [_c('pagination', {
    staticClass: "edublink-vue-pagination",
    attrs: {
      "per-page": _vm.perPage,
      "records": _vm.eventData.events.length,
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
  })], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _c('FooterOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/event/event-grid.vue?vue&type=template&id=2717e5aa

// EXTERNAL MODULE: ./data/event.json
var data_event = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/event/event-grid.vue?vue&type=script&lang=js

/* harmony default export */ var event_gridvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    EventOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  data() {
    return {
      eventData: data_event,
      currentPage: 1,
      perPage: 9,
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
      return this.eventData.events.slice(start, end);
    },
    getPaginateCount() {
      return Math.ceil(this.eventData.events.length / this.perPage);
    }
  },
  methods: {
    paginateClickCallback(page) {
      this.currentPage = Number(page);
    }
  },
  head() {
    return {
      title: 'Event Grid'
    };
  }
});
// CONCATENATED MODULE: ./pages/event/event-grid.vue?vue&type=script&lang=js
 /* harmony default export */ var event_event_gridvue_type_script_lang_js = (event_gridvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/event/event-grid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  event_event_gridvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2766b9eb"
  
)

/* harmony default export */ var event_grid = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,EventOne: __webpack_require__(121).default,FooterOne: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=event-grid.js.map