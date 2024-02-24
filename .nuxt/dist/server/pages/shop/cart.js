exports.ids = [187];
exports.modules = {

/***/ 112:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Natural Science Project\",\"price\":\"70.00\",\"imgSrc\":\"product-01.jpg\",\"rating\":4.8},{\"id\":2,\"title\":\"The King of Drugs\",\"price\":\"45.00\",\"imgSrc\":\"product-02.jpg\",\"rating\":4.9},{\"id\":3,\"title\":\"The Silver Chair\",\"price\":\"95.00\",\"imgSrc\":\"product-03.jpg\",\"rating\":5},{\"id\":4,\"title\":\"Ray Brandbury\",\"price\":\"35.00\",\"imgSrc\":\"product-04.jpg\",\"rating\":4.7},{\"id\":5,\"title\":\"Educated A Memoir\",\"price\":\"80.00\",\"imgSrc\":\"product-05.jpg\",\"rating\":4.9},{\"id\":6,\"title\":\"Sing To It\",\"price\":\"55.00\",\"imgSrc\":\"product-06.jpg\",\"rating\":5},{\"id\":7,\"title\":\"Harry Potter\",\"price\":\"35.00\",\"imgSrc\":\"product-07.jpg\",\"rating\":4.6},{\"id\":8,\"title\":\"Code Breaker\",\"price\":\"90.00\",\"imgSrc\":\"product-08.jpg\",\"rating\":5},{\"id\":9,\"title\":\"Vanguard\",\"price\":\"45.00\",\"imgSrc\":\"product-09.jpg\",\"rating\":5},{\"id\":10,\"title\":\"Arctic Sea\",\"price\":\"60.00\",\"imgSrc\":\"product-10.jpg\",\"rating\":5},{\"id\":11,\"title\":\"Secret Sky\",\"price\":\"75.00\",\"imgSrc\":\"product-11.jpg\",\"rating\":4.9},{\"id\":12,\"title\":\"Women Who Launch\",\"price\":\"80.00\",\"imgSrc\":\"product-12.jpg\",\"rating\":5}]");

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/cart.vue?vue&type=template&id=5910a3fa
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
      "title": "Cart Page"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"cart-page-area edu-section-gap\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"table-responsive\">", "</div>", [_vm._ssrNode("<table class=\"table cart-table\">", "</table>", [_vm._ssrNode("<thead><tr><th scope=\"col\" class=\"product-remove\"></th> <th scope=\"col\" class=\"product-thumbnail\"></th> <th scope=\"col\" class=\"product-title\">Product Name</th> <th scope=\"col\" class=\"product-price\">Price</th> <th scope=\"col\" class=\"product-quantity\">Quantity</th> <th scope=\"col\" class=\"product-subtotal\">Subtotal</th></tr></thead> "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.productsData.slice(0, 3), function (product) {
    return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td class=\"product-remove\"><a href=\"#\" class=\"remove-wishlist\"><i class=\"icon-73\"></i></a></td> "), _vm._ssrNode("<td class=\"product-thumbnail\">", "</td>", [_c('n-link', {
      attrs: {
        "to": "/shop/product-details"
      }
    }, [_c('img', {
      attrs: {
        "src": '/images/shop/' + product.imgSrc,
        "alt": product.title + ' Thumbnail'
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<td class=\"product-title\">", "</td>", [_c('n-link', {
      attrs: {
        "to": "/shop/product-details"
      }
    }, [_vm._v(_vm._s(product.title))])], 1), _vm._ssrNode(" <td data-title=\"Price\" class=\"product-price\"><span class=\"currency-symbol\">$</span>70.30</td> <td data-title=\"Qty\" class=\"product-quantity\"><div class=\"edu-quantity-btn edublink-vue-product-btn\"><div class=\"pro-qty\"><button class=\"dec qtybtn\">-</button> <input type=\"text\"" + _vm._ssrAttr("value", 1) + "> <button class=\"inc qtybtn\">+</button></div></div></td> <td data-title=\"Subtotal\" class=\"product-subtotal\"><span class=\"currency-symbol\">$</span>" + _vm._ssrEscape(_vm._s(product.price)) + "</td>")], 2);
  }), 0)], 2)]), _vm._ssrNode(" <div class=\"cart-update-btn-area\"><div class=\"input-group product-cupon\"><input placeholder=\"Coupon code...\" type=\"text\"> <button type=\"submit\" class=\"submit-btn\"><i class=\"icon-4\"></i></button></div> <div class=\"update-btn\"><a href=\"#\" class=\"edu-btn btn-border btn-medium disabled\">Update Cart <i class=\"icon-4\"></i></a></div></div> <div class=\"row\"><div class=\"col-xl-5 col-lg-7 offset-xl-7 offset-lg-5\"><div class=\"order-summery\"><h4 class=\"title\">Cart Totals</h4> <table class=\"table summery-table\"><tbody><tr class=\"order-subtotal\"><td>Subtotal</td> <td>$210.90</td></tr> <tr class=\"order-total\"><td>Order Total</td> <td>$210.90</td></tr></tbody></table> <a href=\"checkout.html\" class=\"edu-btn btn-medium checkout-btn\">Process to Checkout <i class=\"icon-4\"></i></a></div></div></div>")], 2)]), _vm._ssrNode(" "), _c('FooterOne')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/shop/cart.vue?vue&type=template&id=5910a3fa

// EXTERNAL MODULE: ./data/products.json
var products = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/cart.vue?vue&type=script&lang=js

/* harmony default export */ var cartvue_type_script_lang_js = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 257)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },
  data() {
    return {
      productsData: products
    };
  },
  head() {
    return {
      title: 'Cart Page'
    };
  }
});
// CONCATENATED MODULE: ./pages/shop/cart.vue?vue&type=script&lang=js
 /* harmony default export */ var shop_cartvue_type_script_lang_js = (cartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/shop/cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shop_cartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5be59f26"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,FooterOne: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=cart.js.map