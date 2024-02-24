exports.ids = [189,145];
exports.modules = {

/***/ 112:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Natural Science Project\",\"price\":\"70.00\",\"imgSrc\":\"product-01.jpg\",\"rating\":4.8},{\"id\":2,\"title\":\"The King of Drugs\",\"price\":\"45.00\",\"imgSrc\":\"product-02.jpg\",\"rating\":4.9},{\"id\":3,\"title\":\"The Silver Chair\",\"price\":\"95.00\",\"imgSrc\":\"product-03.jpg\",\"rating\":5},{\"id\":4,\"title\":\"Ray Brandbury\",\"price\":\"35.00\",\"imgSrc\":\"product-04.jpg\",\"rating\":4.7},{\"id\":5,\"title\":\"Educated A Memoir\",\"price\":\"80.00\",\"imgSrc\":\"product-05.jpg\",\"rating\":4.9},{\"id\":6,\"title\":\"Sing To It\",\"price\":\"55.00\",\"imgSrc\":\"product-06.jpg\",\"rating\":5},{\"id\":7,\"title\":\"Harry Potter\",\"price\":\"35.00\",\"imgSrc\":\"product-07.jpg\",\"rating\":4.6},{\"id\":8,\"title\":\"Code Breaker\",\"price\":\"90.00\",\"imgSrc\":\"product-08.jpg\",\"rating\":5},{\"id\":9,\"title\":\"Vanguard\",\"price\":\"45.00\",\"imgSrc\":\"product-09.jpg\",\"rating\":5},{\"id\":10,\"title\":\"Arctic Sea\",\"price\":\"60.00\",\"imgSrc\":\"product-10.jpg\",\"rating\":5},{\"id\":11,\"title\":\"Secret Sky\",\"price\":\"75.00\",\"imgSrc\":\"product-11.jpg\",\"rating\":4.9},{\"id\":12,\"title\":\"Women Who Launch\",\"price\":\"80.00\",\"imgSrc\":\"product-12.jpg\",\"rating\":5}]");

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductOne.vue?vue&type=template&id=1fc6e0a8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "edu-product",
    class: _vm.product.colorClass
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/shop/product-details"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/shop/' + _vm.product.imgSrc,
      "alt": _vm.product.title + ' Thumbnail'
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product-hover-info\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/shop/product-details",
      "role": "button"
    }
  }, [_c('i', {
    staticClass: "icon-2"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_c('i', {
    staticClass: "icon-22"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/shop/cart"
    }
  }, [_c('i', {
    staticClass: "icon-3"
  })])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h6 class=\"title\">", "</h6>", [_c('n-link', {
    attrs: {
      "to": "/shop/product-details"
    }
  }, [_vm._v(_vm._s(_vm.product.title))])], 1), _vm._ssrNode(" <div class=\"product-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">" + _vm._ssrEscape("(" + _vm._s(_vm.product.rating) + ")") + "</span></div> <div class=\"price\">" + _vm._ssrEscape("$" + _vm._s(_vm.product.price)) + "</div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductOne.vue?vue&type=template&id=1fc6e0a8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductOne.vue?vue&type=script&lang=js
/* harmony default export */ var ProductOnevue_type_script_lang_js = ({
  props: ['extraClass', 'product']
});
// CONCATENATED MODULE: ./components/product/ProductOne.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductOnevue_type_script_lang_js = (ProductOnevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/product/ProductOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductOnevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "17cad5a2"
  
)

/* harmony default export */ var ProductOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/index.vue?vue&type=template&id=62b6c4f0
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
      "pageTitle": "Shop Page",
      "title": "Shop"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"shop-page-area section-gap-equal\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"edu-sorting-area\"><div class=\"sorting-left\"><h6 class=\"showing-text\">We found <span>" + _vm._ssrEscape(_vm._s(_vm.productsData.length)) + "</span> books available for you</h6></div> <div class=\"sorting-right\"><div class=\"edu-sorting\"><div class=\"icon\"><i class=\"icon-55\"></i></div> <select class=\"edu-select\"><option>Filters</option> <option>Low To High</option> <option>High Low To</option> <option>Last Viewed</option></select></div></div></div> "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.productsData, function (product) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-sm-6\">", "</div>", [_c('ProductOne', {
      attrs: {
        "product": product
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _c('PaginationOne')], 2)]), _vm._ssrNode(" "), _c('FooterOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/shop/index.vue?vue&type=template&id=62b6c4f0

// EXTERNAL MODULE: ./data/products.json
var products = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/index.vue?vue&type=script&lang=js

/* harmony default export */ var shopvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    ProductOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 151)),
    PaginationOne: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 343)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  data() {
    return {
      productsData: products
    };
  },
  head() {
    return {
      title: 'Shop Page'
    };
  }
});
// CONCATENATED MODULE: ./pages/shop/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_shopvue_type_script_lang_js = (shopvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/shop/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_shopvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32cb6288"
  
)

/* harmony default export */ var shop = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,ProductOne: __webpack_require__(151).default,FooterOne: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=index.js.map