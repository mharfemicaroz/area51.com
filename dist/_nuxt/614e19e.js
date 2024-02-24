(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{457:function(e,t,o){"use strict";o(17),o(40);var r=o(458),n=o.n(r);t.a=function(){var e=document.querySelectorAll(".rellax");e&&e.forEach((function(e,t){new n.a(e)}))}},458:function(e,t,o){(function(o){var r,n,l;"undefined"!=typeof window&&window,n=[],void 0===(l="function"==typeof(r=function(){var e=function(t,o){"use strict";var r=Object.create(e.prototype),n=0,l=0,c=0,d=0,m=[],f=!0,x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},h=null,w=!1;try{var v=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("testPassive",null,v),window.removeEventListener("testPassive",null,v)}catch(e){}var y=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,A=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();function C(){if(3===r.options.breakpoints.length&&Array.isArray(r.options.breakpoints)){var e,t=!0,o=!0;if(r.options.breakpoints.forEach((function(i){"number"!=typeof i&&(o=!1),null!==e&&i<e&&(t=!1),e=i})),t&&o)return}r.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}r.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){r.options[e]=o[e]})),o&&o.breakpoints&&C(),t||(t=".rellax");var z="string"==typeof t?document.querySelectorAll(t):[t];if(z.length>0){if(r.elems=z,r.options.wrapper&&!r.options.wrapper.nodeType){var k=document.querySelector(r.options.wrapper);if(!k)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");r.options.wrapper=k}var T,S=function(e){var t=r.options.breakpoints;return e<t[0]?"xs":e>=t[0]&&e<t[1]?"sm":e>=t[1]&&e<t[2]?"md":"lg"},E=function(){for(var i=0;i<r.elems.length;i++){var e=_(r.elems[i]);m.push(e)}},L=function(){for(var i=0;i<m.length;i++)r.elems[i].style.cssText=m[i].style;m=[],l=window.innerHeight,d=window.innerWidth,T=S(d),O(),E(),animate(),f&&(window.addEventListener("resize",L),f=!1,X())},_=function(e){var t,o=e.getAttribute("data-rellax-percentage"),n=e.getAttribute("data-rellax-speed"),c=e.getAttribute("data-rellax-xs-speed"),m=e.getAttribute("data-rellax-mobile-speed"),f=e.getAttribute("data-rellax-tablet-speed"),x=e.getAttribute("data-rellax-desktop-speed"),h=e.getAttribute("data-rellax-vertical-speed"),w=e.getAttribute("data-rellax-horizontal-speed"),v=e.getAttribute("data-rellax-vertical-scroll-axis"),y=e.getAttribute("data-rellax-horizontal-scroll-axis"),A=e.getAttribute("data-rellax-zindex")||0,C=e.getAttribute("data-rellax-min"),z=e.getAttribute("data-rellax-max"),k=e.getAttribute("data-rellax-min-x"),S=e.getAttribute("data-rellax-max-x"),E=e.getAttribute("data-rellax-min-y"),L=e.getAttribute("data-rellax-max-y"),_=!0;c||m||f||x?t={xs:c,sm:m,md:f,lg:x}:_=!1;var O=r.options.wrapper?r.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;r.options.relativeToWrapper&&(O=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-r.options.wrapper.offsetTop);var W=r.options.vertical&&(o||r.options.center)?O:0,X=r.options.horizontal&&(o||r.options.center)?r.options.wrapper?r.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,H=W+e.getBoundingClientRect().top,M=e.clientHeight||e.offsetHeight||e.scrollHeight,R=X+e.getBoundingClientRect().left,j=e.clientWidth||e.offsetWidth||e.scrollWidth,F=o||(W-H+l)/(M+l),P=o||(X-R+d)/(j+d);r.options.center&&(P=.5,F=.5);var I=_&&null!==t[T]?Number(t[T]):n||r.options.speed,N=h||r.options.verticalSpeed,B=w||r.options.horizontalSpeed,J=v||r.options.verticalScrollAxis,D=y||r.options.horizontalScrollAxis,U=Y(P,F,I,N,B),style=e.style.cssText,G="",K=/transform\s*:/i.exec(style);if(K){var Q=K.index,V=style.slice(Q),Z=V.indexOf(";");G=Z?" "+V.slice(11,Z).replace(/\s/g,""):" "+V.slice(11).replace(/\s/g,"")}return{baseX:U.x,baseY:U.y,top:H,left:R,height:M,width:j,speed:I,verticalSpeed:N,horizontalSpeed:B,verticalScrollAxis:J,horizontalScrollAxis:D,style:style,transform:G,zindex:A,min:C,max:z,minX:k,maxX:S,minY:E,maxY:L}},O=function(){var e=n,t=c;if(n=r.options.wrapper?r.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,c=r.options.wrapper?r.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,r.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;n=o-r.options.wrapper.offsetTop}return!(e==n||!r.options.vertical)||!(t==c||!r.options.horizontal)},Y=function(e,t,o,n,l){var c={},d=(l||o)*(100*(1-e)),m=(n||o)*(100*(1-t));return c.x=r.options.round?Math.round(d):Math.round(100*d)/100,c.y=r.options.round?Math.round(m):Math.round(100*m)/100,c},W=function(){window.removeEventListener("resize",W),window.removeEventListener("orientationchange",W),(r.options.wrapper?r.options.wrapper:window).removeEventListener("scroll",W),(r.options.wrapper?r.options.wrapper:document).removeEventListener("touchmove",W),h=x(X)},X=function(){O()&&!1===f?(animate(),h=x(X)):(h=null,window.addEventListener("resize",W),window.addEventListener("orientationchange",W),(r.options.wrapper?r.options.wrapper:window).addEventListener("scroll",W,!!w&&{passive:!0}),(r.options.wrapper?r.options.wrapper:document).addEventListener("touchmove",W,!!w&&{passive:!0}))},animate=function(){for(var e,i=0;i<r.elems.length;i++){var t=m[i].verticalScrollAxis.toLowerCase(),o=m[i].horizontalScrollAxis.toLowerCase(),f=-1!=t.indexOf("x")?n:0,x=-1!=t.indexOf("y")?n:0,h=-1!=o.indexOf("x")?c:0,w=(x+(-1!=o.indexOf("y")?c:0)-m[i].top+l)/(m[i].height+l),v=(f+h-m[i].left+d)/(m[i].width+d),y=(e=Y(v,w,m[i].speed,m[i].verticalSpeed,m[i].horizontalSpeed)).y-m[i].baseY,C=e.x-m[i].baseX;null!==m[i].min&&(r.options.vertical&&!r.options.horizontal&&(y=y<=m[i].min?m[i].min:y),r.options.horizontal&&!r.options.vertical&&(C=C<=m[i].min?m[i].min:C)),null!=m[i].minY&&(y=y<=m[i].minY?m[i].minY:y),null!=m[i].minX&&(C=C<=m[i].minX?m[i].minX:C),null!==m[i].max&&(r.options.vertical&&!r.options.horizontal&&(y=y>=m[i].max?m[i].max:y),r.options.horizontal&&!r.options.vertical&&(C=C>=m[i].max?m[i].max:C)),null!=m[i].maxY&&(y=y>=m[i].maxY?m[i].maxY:y),null!=m[i].maxX&&(C=C>=m[i].maxX?m[i].maxX:C);var z=m[i].zindex,k="translate3d("+(r.options.horizontal?C:"0")+"px,"+(r.options.vertical?y:"0")+"px,"+z+"px) "+m[i].transform;r.elems[i].style[A]=k}r.options.callback(e)};return r.destroy=function(){for(var i=0;i<r.elems.length;i++)r.elems[i].style.cssText=m[i].style;f||(window.removeEventListener("resize",L),f=!0),y(h),h=null},L(),r.refresh=L,r}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?r.apply(t,n):r)||(e.exports=l)}).call(this,o(41))},489:function(e,t,o){var content=o(548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(57).default)("23774842",content,!0,{sourceMap:!1})},547:function(e,t,o){"use strict";o(489)},548:function(e,t,o){var r=o(56)((function(i){return i[1]}));r.push([e.i,':root{--color-primary:#1ab69d;--color-secondary:#ee4a62;--color-textSecondary:#ff5b5c;--color-tertiary:#f8b81f;--color-dark:#111212;--color-heading:#181818;--dark-color-heading:#fff;--color-border:#e5e5e5;--dark-color-border:#282f3a;--color-body:grey;--gradient-primary:linear-gradient(-90deg,#31b978,#1ab69d);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#181818;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#bababa;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#3eb75e;--color-danger:#ff0003;--color-warning:#ff8f3c;--color-info:#1ba2db;--color-placeholder:grey;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:"Poppins",sans-serif;--font-secondary:"Spartan",sans-serif;--font-icomoon:"icomoon";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}@media only screen and (max-width:767px){.why-choose-gallery{padding-bottom:75px}}.why-choose-gallery .thumbnail.thumbnail-2{margin-top:-85px}.why-choose-gallery .shape-group li.shape-2{bottom:85px;right:65px}',""]),r.locals={},e.exports=r},686:function(e,t,o){"use strict";o.r(t);o(17),o(30),o(31);var r=o(457),n={components:{SectionTitle:function(){return o.e(2).then(o.bind(null,624))}},mounted:function(){Object(r.a)()},data:function(){return{features:[{class:"color-secondary-style",iconClass:"icon-81",title:"Exclusive Program",details:"Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris."},{class:"color-primary-style",iconClass:"icon-82",title:"Online Training",details:"Consectetur adipisicing elit, sed do eiusmod tempor ux incididunt ut labore et dolore."},{class:"color-extra05-style",iconClass:"icon-83",title:"Individual Care",details:"Incididunt ut labore et dolore magna aliqua. Ut enim ad minim."}]}}},l=(o(547),o(10)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"why-choose-area-1 gap-top-text"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row g-5 row--45"},[t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"why-choose-content"},[t("SectionTitle",{attrs:{preTitle:"Why Choose",preTitleClass:"pre-textsecondary",title:"Why Choose My Yoga Courses?",subTitle:"Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur.",alignment:"section-left"}}),e._v(" "),t("div",{staticClass:"features-list",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},e._l(e.features,(function(o,i){return t("div",{key:i,staticClass:"features-box",class:o.class},[t("div",{staticClass:"icon"},[t("i",{class:o.iconClass})]),e._v(" "),t("div",{staticClass:"content"},[t("h5",{staticClass:"title"},[e._v(e._s(o.title))]),e._v(" "),t("p",[e._v(e._s(o.details))])])])})),0)],1)]),e._v(" "),e._m(0)])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"why-choose-gallery"},[t("div",{staticClass:"gallery-thumbnail"},[t("div",{staticClass:"thumbnail thumbnail-1"},[t("img",{attrs:{src:"/images/others/why-choose-01.jpg",alt:"Why Choose"}})]),e._v(" "),t("div",{staticClass:"thumbnail thumbnail-2 rellax",attrs:{"data-rellax-speed":"0.7","data-rellax-xs-speed":"0.7","data-rellax-mobile-speed":"0.5","data-rellax-tablet-speed":"0.5"}},[t("img",{attrs:{src:"/images/others/why-choose-02.jpg",alt:"Why Choose"}})])]),e._v(" "),t("ul",{staticClass:"shape-group"},[t("li",{staticClass:"shape-1",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("img",{attrs:{src:"/images/about/shape-14.png",alt:"Shape Images"}})]),e._v(" "),t("li",{staticClass:"shape-2",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("img",{attrs:{src:"/images/about/shape-10.png",alt:"Shape Images"}})])])])])}],!1,null,null,null);t.default=component.exports}}]);