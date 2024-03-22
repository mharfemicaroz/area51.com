exports.ids = [172];
exports.modules = {

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery-grid.vue?vue&type=template&id=404df98c
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
      "pageTitle": "Gallery Grid",
      "title": "Gallery"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-gallery-area edu-section-gap\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"isotope-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"isotop-button button-transparent isotop-filter\">" + _vm._ssrList(_vm.filterCategory, function (cat, index) {
    return "<button" + _vm._ssrClass("filter-selector-item", {
      'is-checked': cat === _vm.selectedCategory
    }) + "><span>" + _vm._ssrEscape(_vm._s(cat)) + "</span></button>";
  }) + "</div> "), _vm._ssrNode("<div id=\"masonry-gallery\" class=\"edublink-vue-gallery-masonry gallery-grid-wrap\">", "</div>", [_c('masonry', {
    attrs: {
      "cols": _vm.breakPoints
    }
  }, _vm._l(_vm.filterData, function (item, key) {
    return _c('a', {
      key: key,
      staticClass: "edu-gallery-grid masonry-item items",
      on: {
        "click": function ($event) {
          _vm.index = key;
        }
      }
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('img', {
      attrs: {
        "src": item.thumb,
        "alt": "Gallery Image"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "zoom-icon"
    }, [_c('i', {
      staticClass: "icon-69"
    })])]);
  }), 0)], 1)], 2)])]), _vm._ssrNode(" "), _c('CTAOneAlter'), _vm._ssrNode(" "), _c('FooterOne'), _vm._ssrNode(" "), _c('CoolLightBox', {
    attrs: {
      "items": _vm.filterData,
      "index": _vm.index,
      "fullScreen": true,
      "effect": 'fade'
    },
    on: {
      "close": function ($event) {
        _vm.index = null;
      }
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gallery-grid.vue?vue&type=template&id=404df98c

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(79);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(80);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(81);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(82);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(83);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(84);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(85);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(86);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(87);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(88);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(89);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(90);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(91);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery-grid.vue?vue&type=script&lang=js
















/* harmony default export */ var gallery_gridvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    CTAOneAlter: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 276)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  data() {
    return {
      index: null,
      breakPoints: {
        default: 3,
        991: 2,
        767: 1
      },
      filterData: [],
      selectedCategory: 'all',
      items: [{
        thumb: '/images/gallery/gallery-01.jpg',
        src: '/images/gallery/gallery-01.jpg',
        category: ['education']
      }, {
        thumb: '/images/gallery/gallery-02.jpg',
        src: '/images/gallery/gallery-02.jpg',
        category: ['marketing']
      }, {
        thumb: '/images/gallery/gallery-03.jpg',
        src: '/images/gallery/gallery-03.jpg',
        category: ['development', 'education']
      }, {
        thumb: '/images/gallery/gallery-04.jpg',
        src: '/images/gallery/gallery-04.jpg',
        category: ['health']
      }, {
        thumb: '/images/gallery/gallery-05.jpg',
        src: '/images/gallery/gallery-05.jpg',
        category: ['marketing']
      }, {
        thumb: '/images/gallery/gallery-06.jpg',
        src: '/images/gallery/gallery-06.jpg',
        category: ['health', 'development']
      }, {
        thumb: '/images/gallery/gallery-07.jpg',
        src: '/images/gallery/gallery-07.jpg',
        category: ['education']
      }, {
        thumb: '/images/gallery/gallery-08.jpg',
        src: '/images/gallery/gallery-08.jpg',
        category: ['marketing']
      }, {
        thumb: '/images/gallery/gallery-09.jpg',
        src: '/images/gallery/gallery-09.jpg',
        category: ['health']
      }]
    };
  },
  computed: {
    filterCategory() {
      return ['all', ...new Set(this.items.map(elem => elem.category).flat())];
    }
  },
  methods: {
    filterHandler(cat) {
      this.selectedCategory = cat;
      if (this.selectedCategory === 'all') {
        this.filterData = this.items;
      } else {
        let filterResult = this.items.filter(item => item.category.includes(cat));
        this.filterData = [];
        this.filterData.push(...filterResult);
      }
    }
  },
  mounted() {
    this.filterData.push(...this.items);
  },
  head() {
    return {
      title: 'Gallery Grid'
    };
  }
});
// CONCATENATED MODULE: ./pages/gallery-grid.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_gallery_gridvue_type_script_lang_js = (gallery_gridvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/gallery-grid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gallery_gridvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d702ab1"
  
)

/* harmony default export */ var gallery_grid = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,FooterOne: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=gallery-grid.js.map