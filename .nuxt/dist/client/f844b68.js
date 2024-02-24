(window.webpackJsonp=window.webpackJsonp||[]).push([[182,101,122,127],{435:function(t,e,n){"use strict";n.r(e);var o=n(436),r={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(o).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},436:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),o=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=o=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=o=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!o||!r);u++)s=a[u],e.requestAnimationFrame=o=o||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];o&&r||(e.requestAnimationFrame=o=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=o,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,i,n){var a,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},440:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var o={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,624))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,561))}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-section-gap edu-about-area about-style-8"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-content"},[e("SectionTitle",{attrs:{preTitle:"About Us",title:'We Provide Best <span class="color-secondary">Education</span> Services For You.',subTitle:"Magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt labore.",alignment:"section-left"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-image-gallery"},[t._m(1),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-33.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-25.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-2",imgSrc:"/images/about/shape-13.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-4",dataDepth:".8","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-mission"},[e("div",{staticClass:"single-item",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"icon color-extra02"},[e("i",{staticClass:"icon-51"})]),t._v(" "),e("div",{staticClass:"content"},[e("h4",{staticClass:"title"},[t._v("Our Mission")]),t._v(" "),e("p",[t._v("Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.")])])]),t._v(" "),e("div",{staticClass:"single-item",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"icon color-extra06"},[e("i",{staticClass:"icon-52"})]),t._v(" "),e("div",{staticClass:"content"},[e("h4",{staticClass:"title"},[t._v("Our Vision")]),t._v(" "),e("p",[t._v("Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-6 masonry-item"},[e("div",{staticClass:"thumbnail thumbnail-1 mb--30",attrs:{"data-aos-delay":"50","data-aos":"fade-down","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-13.jpg",alt:"About Images"}})]),t._v(" "),e("div",{staticClass:"thumbnail thumbnail-4",attrs:{"data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-15.jpg",alt:"About Images"}})])]),t._v(" "),e("div",{staticClass:"col-6 masonry-item"},[e("div",{staticClass:"thumbnail thumbnail-2 mb--30",attrs:{alt:"About Images","data-aos-delay":"50","data-aos":"fade-down","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-14.jpg"}})]),t._v(" "),e("div",{staticClass:"thumbnail thumbnail-4",attrs:{alt:"About Images","data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-16.jpg",alt:"About Images"}})])])])}],!1,null,null,null);e.default=component.exports},491:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var o={components:{MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,561))}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"edu-footer footer-light footer-for-kitchen footer-style-4"},[e("div",{staticClass:"footer-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"edu-footer-widget explore-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Online Platform")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/about-us-one"}},[t._v("About")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/course/course-one"}},[t._v("Courses")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/pricing-table"}},[t._v("Pricing Plan")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/instructor/instructor-one"}},[t._v("Instructor")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/event/event-grid"}},[t._v("Events")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t._v("Instructor Profile")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"edu-footer-widget quick-link-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Links")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/faq"}},[t._v("FAQ's")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/gallery-grid"}},[t._v("Gallery")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-standard"}},[t._v("News & Articles")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/my-account"}},[t._v("Sign In")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])]),t._v(" "),t._m(1)])]),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"-2","data-aos-delay":"100","data-aos":"fade","data-aos-duration":"1000",imgSrc:"/images/others/shape-01-01.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"2","data-aos-delay":"100","data-aos":"fade","data-aos-duration":"1000",imgSrc:"/images/others/shape-02-01.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-4",dataDepth:"-2","data-aos-delay":"100","data-aos":"fade","data-aos-duration":"1000",imgSrc:"/images/others/shape-04-01.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-5",dataDepth:"2","data-aos-delay":"100","data-aos":"fade","data-aos-duration":"1000",imgSrc:"/images/others/shape-05-01.png"}}),t._v(" "),t._m(2)],1)]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Address")]),t._v(" "),e("div",{staticClass:"inner"},[e("p",{staticClass:"description"},[t._v("Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.")]),t._v(" "),e("div",{staticClass:"widget-information"},[e("ul",{staticClass:"information-list"},[e("li",[e("span",[t._v("Add:")]),t._v("70-80 Upper St Norwich NR2")]),t._v(" "),e("li",[e("span",[t._v("Call:")]),e("a",{attrs:{href:"tel:+011235641231"}},[t._v("+01 123 5641 231")])]),t._v(" "),e("li",[e("span",[t._v("Email:")]),e("a",{attrs:{href:"mailto:info@edublink.com",target:"_blank"}},[t._v("info@edublink.com")])])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Contacts")]),t._v(" "),e("div",{staticClass:"inner"},[e("p",{staticClass:"description"},[t._v("Enter your email address to register to our newsletter subscription")]),t._v(" "),e("div",{staticClass:"input-group footer-subscription-form"},[e("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Your email"}}),t._v(" "),e("button",{staticClass:"edu-btn btn-medium",attrs:{type:"button"}},[t._v("Subscribe "),e("i",{staticClass:"icon-4"})])]),t._v(" "),e("ul",{staticClass:"social-share icon-transparent"},[e("li",[e("a",{staticClass:"color-fb",attrs:{href:"https://facebook.com/",target:"_blank"}},[e("i",{staticClass:"icon-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-linkd",attrs:{href:"https://linkedin.com/",target:"_blank"}},[e("i",{staticClass:"icon-linkedin2"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-ig",attrs:{href:"https://instagram.com/",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-yt",attrs:{href:"https://youtube.com/",target:"_blank"}},[e("i",{staticClass:"icon-youtube"})])])])])])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-3",attrs:{"data-aos-delay":"100","data-aos":"fade","data-aos-duration":"1000"}},[t("img",{attrs:{src:"/images/others/shape-03-01.png",alt:"shape"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"inner text-center"},[e("p",[t._v("Copyright 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("EduBlink")]),t._v(" Designed By "),e("a",{attrs:{href:"https://1.envato.market/YgGJbj",target:"_blank"}},[t._v("DevsBlink")]),t._v(". All Rights Reserved")])])])])])])}],!1,null,null,null);e.default=component.exports},573:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var o={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,247))},Banner:function(){return n.e(51).then(n.bind(null,630))},Features:function(){return n.e(56).then(n.bind(null,694))},About:function(){return n.e(50).then(n.bind(null,629))},Logo:function(){return n.e(59).then(n.bind(null,695))},Course:function(){return n.e(54).then(n.bind(null,632))},Testimonial:function(){return n.e(60).then(n.bind(null,637))},FunFact:function(){return n.e(204).then(n.bind(null,552))},Instructor:function(){return n.e(58).then(n.bind(null,636))},FAQ:function(){return n.e(55).then(n.bind(null,634))},CTA:function(){return n.e(53).then(n.bind(null,633))},Blog:function(){return n.e(52).then(n.bind(null,631))},Instagram:function(){return n.e(57).then(n.bind(null,635))},FooterKitchen:function(){return Promise.resolve().then(n.bind(null,491))}},head:function(){return{title:"Kitchen Coach"}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderOne",{attrs:{showHeaderTop:"true"}}),t._v(" "),e("Banner"),t._v(" "),e("Features"),t._v(" "),e("About"),t._v(" "),e("Logo"),t._v(" "),e("Course"),t._v(" "),e("Testimonial"),t._v(" "),e("FunFact"),t._v(" "),e("Instructor"),t._v(" "),e("FAQ"),t._v(" "),e("CTA"),t._v(" "),e("Blog"),t._v(" "),e("Instagram"),t._v(" "),e("FooterKitchen")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOne:n(247).default,About:n(440).default,FunFact:n(435).default,FooterKitchen:n(491).default})}}]);