(window.webpackJsonp=window.webpackJsonp||[]).push([[132,131],{442:function(t,e,n){"use strict";n.r(e);var o=n(10),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-bar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header-top"},[t._m(0),t._v(" "),e("div",{staticClass:"header-top-right"},[e("ul",{staticClass:"header-info"},[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Login")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Register")])],1),t._v(" "),e("li",{staticClass:"header-btn"},[e("n-link",{staticClass:"edu-btn btn-secondary btn-medium",attrs:{to:"/contact-us"}},[t._v("Contact Us Now "),e("i",{staticClass:"icon-4"})])],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-left"},[e("ul",{staticClass:"header-info"},[e("li",[e("a",{attrs:{href:"tel:+6399177621021"}},[e("i",{staticClass:"icon-phone"}),t._v("Call: +6399177621021")])]),t._v(" "),e("li",[e("a",{attrs:{href:"mailto:cloydcunanan@gmail.com",target:"_blank"}},[e("i",{staticClass:"icon-envelope"}),t._v("Email: cloydcunanan@gmail.com")])])])])}],!1,null,null,null);e.default=component.exports},498:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var o={components:{HeaderTopTwo:function(){return Promise.resolve().then(n.bind(null,442))},Navigation:function(){return n.e(7).then(n.bind(null,690))},SearchPopUp:function(){return n.e(8).then(n.bind(null,609))},ColorMode:function(){return n.e(4).then(n.bind(null,610))},OffCanvasMobileMenuTwo:function(){return n.e(33).then(n.bind(null,627))}},data:function(){return{isSticky:!1}},props:["showHeaderTop"],mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobileMenuOpen:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},searchPopUpOpen:function(t,e){var n=document.querySelector("#edu-search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(10),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"edu-header header-style-2"},[t.showHeaderTop?e("HeaderTopTwo"):t._e(),t._v(" "),e("div",{staticClass:"header-mainmenu",class:{"edu-sticky":t.isSticky}},[e("div",{staticClass:"container"},[e("div",{staticClass:"header-navbar"},[e("div",{staticClass:"header-brand"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},["light"===t.$colorMode.value?e("img",{staticClass:"logo-light",attrs:{src:"/images/logo/logo-dark-2.png",alt:"Dark Logo"}}):t._e(),t._v(" "),"dark"===t.$colorMode.value?e("img",{staticClass:"logo-dark",attrs:{src:"/images/logo/logo-light-2.png",alt:"Light Logo"}}):t._e()])],1)]),t._v(" "),e("div",{staticClass:"header-mainnav"},[e("nav",{staticClass:"mainmenu-nav"},[e("Navigation")],1)]),t._v(" "),e("div",{staticClass:"header-right"},[e("ul",{staticClass:"header-action"},[e("li",{staticClass:"icon search-icon"},[e("button",{staticClass:"search-trigger",on:{click:function(e){return t.searchPopUpOpen("addClass","open")}}},[e("i",{staticClass:"icon-2"})])]),t._v(" "),e("li",{staticClass:"icon light-dark-icon"},[e("ColorMode")],1),t._v(" "),e("li",{staticClass:"mobile-menu-bar d-block d-xl-none"},[e("button",{staticClass:"hamberger-button",on:{click:function(e){return t.mobileMenuOpen("addClass","active")}}},[e("i",{staticClass:"icon-54"})])])])])])])]),t._v(" "),e("SearchPopUp"),t._v(" "),e("OffCanvasMobileMenuTwo")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderTopTwo:n(442).default})}}]);