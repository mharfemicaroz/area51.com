(window.webpackJsonp=window.webpackJsonp||[]).push([[183,124,128,130,133],{435:function(t,e,n){"use strict";n.r(e);var r=n(436),l={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(r).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},436:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,l=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=l=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!l);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=l=l||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&l||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=l},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},465:function(t,e,n){"use strict";var r=n(1),l=n(466);r({target:"String",proto:!0,forced:n(467)("link")},{link:function(t){return l(this,"a","href",t)}})},466:function(t,e,n){"use strict";var r=n(4),l=n(32),o=n(11),c=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var m=o(l(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+d(o(r),c,"&quot;")+'"'),h+">"+m+"</"+e+">"}},467:function(t,e,n){"use strict";var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},492:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var r={components:{ColorMode:function(){return n.e(4).then(n.bind(null,610))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobileMenuOpen:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},mobileMenuClose:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"edu-header header-style-1 pv-header-style"},[e("div",{staticClass:"header-mainmenu",class:{"edu-sticky":t.isSticky}},[e("div",{staticClass:"container-custom"},[e("div",{staticClass:"header-navbar"},[e("div",{staticClass:"header-brand"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},["light"===t.$colorMode.value?e("img",{staticClass:"logo-light",attrs:{src:"/images/logo/logo-dark.png",alt:"Dark Logo"}}):t._e(),t._v(" "),"dark"===t.$colorMode.value?e("img",{staticClass:"logo-dark",attrs:{src:"/images/logo/logo-white.png",alt:"Light Logo"}}):t._e()])],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"header-right"},[e("ul",{staticClass:"header-action"},[t._m(1),t._v(" "),e("li",{staticClass:"mobile-menu-bar d-block d-xl-none"},[e("button",{staticClass:"hamberger-button",on:{click:function(e){return t.mobileMenuOpen("addClass","active")}}},[e("i",{staticClass:"icon-54"})])])])])])])]),t._v(" "),e("div",{staticClass:"edublink-vue-mobile-popup-menu",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"header-top"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},["light"===t.$colorMode.value?e("img",{staticClass:"logo-light",attrs:{src:"/images/logo/logo-dark.png",alt:"Dark Logo"}}):t._e(),t._v(" "),"dark"===t.$colorMode.value?e("img",{staticClass:"logo-dark",attrs:{src:"/images/logo/logo-white.png",alt:"Light Logo"}}):t._e()])],1),t._v(" "),e("div",{staticClass:"close-menu"},[e("button",{staticClass:"close-button",on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[e("i",{staticClass:"icon-73"})])])]),t._v(" "),e("ul",{staticClass:"edublink-mobile-menu mainmenu"},[e("li",[e("a",{attrs:{href:"#intro"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Intro")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#demos"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Demos")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#features"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Features")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.devsblink.com/edublink-vue",target:"_blank"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Documentation")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://devsblink.freshdesk.com/",target:"_blank"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Support")])]),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-mainnav"},[e("nav",{staticClass:"mainmenu-nav"},[e("ul",{staticClass:"mainmenu"},[e("li",[e("a",{attrs:{href:"#intro"}},[t._v("Intro")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#demos"}},[t._v("Demos")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#features"}},[t._v("Features")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.devsblink.com/edublink-vue",target:"_blank"}},[t._v("Documentation")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://devsblink.freshdesk.com/",target:"_blank"}},[t._v("Support")])])])])])},function(){var t=this._self._c;return t("li",{staticClass:"header-btn"},[t("a",{staticClass:"edu-btn btn-medium",attrs:{href:"#",target:"_blank"}},[this._v("Purchase Now")])])},function(){var t=this._self._c;return t("li",{staticClass:"header-btn"},[t("a",{staticClass:"edu-btn btn-medium",attrs:{href:"#",target:"_blank"}},[this._v("Purchase Now")])])}],!1,null,null,null);e.default=component.exports},493:function(t,e,n){"use strict";n.r(e);n(465),n(17),n(30),n(31);var r={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,624))}},data:function(){return{homeDemos:[{link:"/",imageSrc:"home-01.jpg",title:"EduBlink Education"},{link:"/distant-learning",imageSrc:"home-02.jpg",title:"Distant Learning"},{link:"/university",imageSrc:"home-03.jpg",title:"University"},{link:"/online-academy",imageSrc:"home-04.jpg",title:"Online Academy"},{link:"/kitchen-coach",imageSrc:"home-05.jpg",title:"Kitchen Coach"},{link:"/yoga-instructor",imageSrc:"home-06.jpg",title:"Yoga Instructor"},{link:"/kindergarten",imageSrc:"home-07.jpg",title:"Kindergarten"}]}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pv-demo-area",attrs:{id:"demos"}},[e("div",{staticClass:"container-custom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("SectionTitle",{attrs:{preTitle:"Unique Demos",title:"7+ Pre-Made Creative Online Course <br> Education Homepage",alignment:"section-center splash-title",disableMark:""}})],1)]),t._v(" "),e("div",{staticClass:"row row--30"},[t._l(t.homeDemos,(function(n,i){return e("div",{key:i,staticClass:"col-lg-4 col-md-6 col-sm-6 col-12",attrs:{"data-aos-delay":"100","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"single-demo"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail"},[e("n-link",{attrs:{to:n.link,target:"_blank"}},[e("img",{attrs:{src:"/images/preview/"+n.imageSrc,alt:"Previe Image"}})]),t._v(" "),e("div",{staticClass:"hover-action"},[e("n-link",{staticClass:"edu-btn btn-large",attrs:{to:n.link,target:"_blank"}},[t._v("View Demo "),e("i",{staticClass:"icon-4"})])],1)],1),t._v(" "),e("h5",{staticClass:"title"},[e("n-link",{attrs:{to:n.link,target:"_blank"}},[t._v(t._s(n.title))])],1)])])])})),t._v(" "),t._m(0),t._v(" "),t._m(1)],2)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 col-12",attrs:{"data-aos-delay":"100","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"single-demo coming-soon"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail"},[e("a",{staticClass:"thumbnail-link",attrs:{href:"#"}},[e("img",{attrs:{src:"/images/preview/coming-soon.png",alt:"Preview Images"}})])]),t._v(" "),e("h5",{staticClass:"title"},[e("a",{attrs:{href:"#"}},[t._v("Coming Soon")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 col-12",attrs:{"data-aos-delay":"100","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"single-demo coming-soon"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail"},[e("a",{staticClass:"thumbnail-link",attrs:{href:"#"}},[e("img",{attrs:{src:"/images/preview/coming-soon.png",alt:"Preview Images"}})])]),t._v(" "),e("h5",{staticClass:"title"},[e("a",{attrs:{href:"#"}},[t._v("Coming Soon")])])])])])}],!1,null,null,null);e.default=component.exports},494:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var r={components:{MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,561))}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"pv-cta-area bg-image"},[t._m(0),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2","data-sal-delay":"500","data-sal":"fade","data-sal-duration":"1000",imgSrc:"/images/counterup/shape-02.png"}}),t._v(" "),t._m(1),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-2","data-sal-delay":"500","data-sal":"fade","data-sal-duration":"1000",imgSrc:"/images/about/shape-07.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-4",dataDepth:"2.5","data-sal-delay":"500","data-sal":"fade","data-sal-duration":"1000"}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"cta-content"},[e("span",{staticClass:"subtitle",attrs:{"data-sal-delay":"100","data-sal":"slide-up","data-sal-duration":"1000"}},[t._v("Great Solutions for Smart People")]),t._v(" "),e("h2",{staticClass:"title",attrs:{"data-sal-delay":"100","data-sal":"slide-up","data-sal-duration":"1000"}},[t._v("Create Your Education Website "),e("br"),t._v(" Today with EduBlink")]),t._v(" "),e("div",{staticClass:"button-group",attrs:{"data-sal-delay":"400","data-sal":"slide-up","data-sal-duration":"1000"}},[e("a",{staticClass:"edu-btn",attrs:{href:"#",target:"_blank"}},[t._v("Download EduBlink "),e("i",{staticClass:"icon-4"})]),t._v(" "),e("a",{staticClass:"edu-btn btn-bg-white",attrs:{href:"#demos"}},[t._v("Demo Preview "),e("i",{staticClass:"icon-4"})])])])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-2",attrs:{"data-sal-delay":"500","data-sal":"fade","data-sal-duration":"1000"}},[t("img",{staticClass:"rotateit",attrs:{src:"/images/about/shape-35.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},574:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var r={components:{HeaderLanding:function(){return Promise.resolve().then(n.bind(null,492))},Banner:function(){return n.e(63).then(n.bind(null,645))},FunFact:function(){return n.e(205).then(n.bind(null,553))},HomeDemo:function(){return Promise.resolve().then(n.bind(null,493))},LearnWith:function(){return n.e(67).then(n.bind(null,649))},CourseLayout:function(){return n.e(64).then(n.bind(null,646))},ShopLayout:function(){return n.e(68).then(n.bind(null,650))},Features:function(){return n.e(65).then(n.bind(null,647))},InnerPages:function(){return n.e(66).then(n.bind(null,648))},FooterLanding:function(){return Promise.resolve().then(n.bind(null,494))}},head:function(){return{title:"Landing Demo"}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderLanding"),t._v(" "),e("Banner"),t._v(" "),e("FunFact"),t._v(" "),e("HomeDemo"),t._v(" "),e("LearnWith"),t._v(" "),e("CourseLayout"),t._v(" "),e("ShopLayout"),t._v(" "),e("Features"),t._v(" "),e("InnerPages"),t._v(" "),e("FooterLanding")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderLanding:n(492).default,FunFact:n(435).default,HomeDemo:n(493).default,FooterLanding:n(494).default})}}]);