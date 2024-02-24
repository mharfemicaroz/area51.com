import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fa379dd6 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _45b13ae6 = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _c9683c0a = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _6b326bce = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _22b6bdfa = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _05dea1ee = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _b3699ef0 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _72ee3a30 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _7e0ad3ff = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _66c5bd9c = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _247efd38 = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _43b9f703 = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _18a98a12 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _546333ac = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _0f79b690 = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _7891f9d9 = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _3c2c09b5 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _3b12c14e = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _8e23c724 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _537494b2 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _7153b0ac = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _674c16ec = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _2a080d57 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _5e1e43d9 = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _7bed404c = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _5da800f8 = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _1a42926e = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _9f0dcca4 = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _9ef19da2 = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _4861088a = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _1837382f = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _9e3cdf26 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _fd6b6836 = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _6d6d7d5a = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _6dcce3d3 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _6281a585 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _c07d4246 = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _7772621e = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _7f12c198 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _5059f969 = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _46a30052 = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _49e85334 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _68b6f74c = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _b8562e00 = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _62d69559 = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _0d83c7b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us-one",
    component: _fa379dd6,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _45b13ae6,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _c9683c0a,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _6b326bce,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _22b6bdfa,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _05dea1ee,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _b3699ef0,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _72ee3a30,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _7e0ad3ff,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _66c5bd9c,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _247efd38,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _43b9f703,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _18a98a12,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _546333ac,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _0f79b690,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _7891f9d9,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _3c2c09b5,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _3b12c14e,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _8e23c724,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _537494b2,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _7153b0ac,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _674c16ec,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _2a080d57,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _5e1e43d9,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _7bed404c,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _5da800f8,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _1a42926e,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _9f0dcca4,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _9ef19da2,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _4861088a,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _1837382f,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _9e3cdf26,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _fd6b6836,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _6d6d7d5a,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _6dcce3d3,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _6281a585,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _c07d4246,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _7772621e,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _7f12c198,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _5059f969,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _46a30052,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _49e85334,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _68b6f74c,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _b8562e00,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _62d69559,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _0d83c7b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
