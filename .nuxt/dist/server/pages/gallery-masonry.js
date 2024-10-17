exports.ids = [173];
exports.modules = {

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery-masonry.vue?vue&type=template&id=2030e192
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
      "pageTitle": "Gallery Masonry",
      "title": "Gallery"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-gallery-area edu-section-gap\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div id=\"masonry-gallery\" class=\"edublink-vue-gallery-masonry gallery-grid-wrap\">", "</div>", [_c('masonry', {
    attrs: {
      "cols": _vm.breakPoints
    }
  }, _vm._l(_vm.items, function (item, key) {
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
  }), 0)], 1)])]), _vm._ssrNode(" "), _c('CTAOneAlter'), _vm._ssrNode(" "), _c('FooterOne'), _vm._ssrNode(" "), _c('CoolLightBox', {
    attrs: {
      "items": _vm.items,
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

// CONCATENATED MODULE: ./pages/gallery-masonry.vue?vue&type=template&id=2030e192

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery-masonry.vue?vue&type=script&lang=js
/* harmony default export */ var gallery_masonryvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    CTAOneAlter: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 273)),
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
      items: [{
        thumb: '/images/gallery/gallery-10.jpg',
        src: '/images/gallery/gallery-10.jpg'
      }, {
        thumb: '/images/gallery/gallery-01.jpg',
        src: '/images/gallery/gallery-01.jpg'
      }, {
        thumb: '/images/gallery/gallery-06.jpg',
        src: '/images/gallery/gallery-06.jpg'
      }, {
        thumb: '/images/gallery/gallery-04.jpg',
        src: '/images/gallery/gallery-04.jpg'
      }, {
        thumb: '/images/gallery/gallery-05.jpg',
        src: '/images/gallery/gallery-05.jpg'
      }, {
        thumb: '/images/gallery/gallery-08.jpg',
        src: '/images/gallery/gallery-08.jpg'
      }, {
        thumb: '/images/gallery/gallery-07.jpg',
        src: '/images/gallery/gallery-07.jpg'
      }, {
        thumb: '/images/gallery/gallery-11.jpg',
        src: '/images/gallery/gallery-11.jpg'
      }, {
        thumb: '/images/gallery/gallery-09.jpg',
        src: '/images/gallery/gallery-09.jpg'
      }]
    };
  },
  head() {
    return {
      title: 'Gallery Masonry'
    };
  }
});
// CONCATENATED MODULE: ./pages/gallery-masonry.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_gallery_masonryvue_type_script_lang_js = (gallery_masonryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/gallery-masonry.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gallery_masonryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "38a991aa"
  
)

/* harmony default export */ var gallery_masonry = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,FooterOne: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=gallery-masonry.js.map