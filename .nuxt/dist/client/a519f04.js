(window.webpackJsonp=window.webpackJsonp||[]).push([[169,101,127,150],{435:function(t,e,n){"use strict";n.r(e);var r=n(436),o={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(r).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},l=n(10),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},436:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},440:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var r={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,624))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,561))}}},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-gap-large edu-about-area about-style-7"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5 align-items-center"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"about-content"},[e("SectionTitle",{attrs:{preTitle:"About Us",title:'We Providing The <span class="color-secondary">Best Quality</span> Online Courses.',subTitle:"Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.",alignment:"section-left"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"about-image-gallery"},[e("img",{staticClass:"main-img-1",attrs:{src:"/images/about/about-11.jpg",alt:"About Image"}}),t._v(" "),e("img",{staticClass:"main-img-2",attrs:{src:"/images/about/about-12.jpg","data-aos-delay":"150","data-aos":"fade-down","data-aos-duration":"800",alt:"About Image"}}),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-38.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-37.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-1.8",imgSrc:"/images/about/shape-04.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),t._m(1)],1)])])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"features-list",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("li",[t._v("Flexible Classes")]),t._v(" "),e("li",[t._v("Offline Classe Mode")]),t._v(" "),e("li",[t._v("Educator Support")])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-4 scene",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("img",{attrs:{src:"/images/counterup/shape-02.png",alt:"Shape"}})])},function(){var t=this._self._c;return t("ul",{staticClass:"shape-group"},[t("li",{staticClass:"shape-1",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})])}],!1,null,null,null);e.default=component.exports},441:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("63b74add",content,!0,{sourceMap:!1})},451:function(t,e,n){"use strict";n(441)},452:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,':root{--color-primary:#1ab69d;--color-secondary:#ee4a62;--color-textSecondary:#ff5b5c;--color-tertiary:#f8b81f;--color-dark:#111212;--color-heading:#181818;--dark-color-heading:#fff;--color-border:#e5e5e5;--dark-color-border:#282f3a;--color-body:grey;--gradient-primary:linear-gradient(-90deg,#31b978,#1ab69d);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#181818;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#bababa;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#3eb75e;--color-danger:#ff0003;--color-warning:#ff8f3c;--color-info:#1ba2db;--color-placeholder:grey;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:"Poppins",sans-serif;--font-secondary:"Spartan",sans-serif;--font-icomoon:"icomoon";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}.swiper-testimonial-slider-wrapper .swiper-slide{opacity:0}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-active,.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next,.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev{opacity:1}@media only screen and (max-width:575px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next,.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev{opacity:0}}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev .testimonial-grid{box-shadow:70px 0 50px 0 rgba(26,46,85,.1);margin-left:36px;padding:40px 30px 50px}@media only screen and (max-width:1199px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev .testimonial-grid{margin-left:0}}@media only screen and (min-width:768px)and (max-width:991px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev .testimonial-grid{margin-left:40px}}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next .testimonial-grid{box-shadow:-40px 0 50px 0 rgba(26,46,85,.1);margin-left:40px;margin-right:36px;padding:40px 30px 50px}@media only screen and (max-width:1199px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next .testimonial-grid{margin-left:0;margin-right:0}}@media only screen and (min-width:768px)and (max-width:991px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next .testimonial-grid{margin-left:40px}}.swiper-testimonial-slider-wrapper.testimonial-coverflow .swiper-slide.swiper-slide-active .testimonial-grid:before{opacity:0}',""]),r.locals={},t.exports=r},459:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{swiperOptions:{loop:!0,speed:500,slidesPerView:1,centeredSlides:!0,effect:"coverflow",autoplay:{delay:4e3},breakpoints:{575:{slidesPerView:2}},coverflowEffect:{rotate:0,slideShadows:!1,depth:180,stretch:80},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}}}},o=(n(451),n(10)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"testimonial-area-5 gap-lg-bottom-equal"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-lg-5"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"testimonial-heading-area"},[e("div",{staticClass:"section-title section-left",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("span",{staticClass:"pre-title"},[t._v("Testimonials")]),t._v(" "),e("h2",{staticClass:"title"},[t._v("What Our Students Have To Say")]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.")]),t._v(" "),e("n-link",{staticClass:"edu-btn btn-large",attrs:{to:"#"}},[t._v("View All"),e("i",{staticClass:"icon-4"})])],1)])]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("swiper",{staticClass:"swiper-testimonial-slider-wrapper swiper testimonial-coverflow",attrs:{options:t.swiperOptions}},[e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-01.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Ray Sanchez")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Student")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-02.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Amber Page")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Designer")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-03.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Amber Page")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Designer")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-02.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Amber Page")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Designer")])])])])]),t._v(" "),e("div",{staticClass:"swiper-pagination text-center"})],1)])])])}),[function(){var t=this._self._c;return t("span",{staticClass:"shape-line"},[t("i",{staticClass:"icon-19"})])}],!1,null,null,null);e.default=component.exports},569:function(t,e,n){"use strict";n.r(e);n(17),n(30),n(31);var r={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,247))},Banner:function(){return n.e(35).then(n.bind(null,630))},Categories:function(){return n.e(37).then(n.bind(null,632))},About:function(){return n.e(34).then(n.bind(null,629))},Course:function(){return n.e(38).then(n.bind(null,633))},VideoSection:function(){return n.e(41).then(n.bind(null,636))},FunFact:function(){return n.e(203).then(n.bind(null,552))},TestimonialTwo:function(){return Promise.resolve().then(n.bind(null,459))},Logo:function(){return n.e(40).then(n.bind(null,635))},FAQ:function(){return n.e(39).then(n.bind(null,634))},Blog:function(){return n.e(36).then(n.bind(null,631))},FooterOne:function(){return Promise.resolve().then(n.bind(null,248))}},head:function(){return{title:"Distant Learning"}}},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderOne"),t._v(" "),e("Banner"),t._v(" "),e("Categories"),t._v(" "),e("About"),t._v(" "),e("Course"),t._v(" "),e("VideoSection"),t._v(" "),e("FunFact"),t._v(" "),e("TestimonialTwo"),t._v(" "),e("Logo"),t._v(" "),e("FAQ"),t._v(" "),e("Blog"),t._v(" "),e("FooterOne")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOne:n(247).default,About:n(440).default,FunFact:n(435).default,TestimonialTwo:n(459).default,FooterOne:n(248).default})}}]);