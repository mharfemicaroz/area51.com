(window.webpackJsonp=window.webpackJsonp||[]).push([[14,119],{444:function(t){t.exports=JSON.parse('{"events":[{"id":1,"imgSrc":"DNSC.jpg","title":"Davao Del Norte State College Event","date":"18","fullDate":"January 18, 2024","month":"JAN","time":"10:00AM-12:00PM","location":"Davao City, Philippines","excerpt":"A collaborative event between Davao Del Norte State College and international partners."},{"id":2,"imgSrc":"DICTXI.jpg","title":"DICT Partnership Meeting","date":"19","fullDate":"February 19, 2024","month":"FEB","time":"02:00PM-04:00PM","location":"DICT Office, Philippines","excerpt":"A strategic meeting focusing on future partnerships with the Department of Information and Communications Technology."},{"id":3,"imgSrc":"CBaaS Webinar.jpg","title":"CBaaS Innovation Webinar","date":"20","fullDate":"July 20, 2024","month":"JUL","time":"09:00AM-11:00AM","location":"Online Webinar","excerpt":"An insightful webinar on unlocking innovation for commercialization, featuring industry leaders from across the globe."},{"id":4,"imgSrc":"Unlocking Innovations.jpg","title":"Unlocking Innovations","date":"20","fullDate":"September 20, 2024","month":"SEP","time":"09:00AM-11:00AM","location":"Online Webinar","excerpt":"A thought-provoking webinar on harnessing innovation for commercialization, featuring global industry leaders."}]}')},463:function(t,e,n){"use strict";n.r(e);n(55);var o={props:["eventInfo"]},l=n(10),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-event event-style-1"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail"},[e("n-link",{attrs:{to:"/event/event-details"}},[e("img",{staticStyle:{width:"512px !important",height:"360px !important"},attrs:{src:"/images/event/"+t.eventInfo.imgSrc,alt:t.eventInfo.name+" Thumbnail"}})])],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"event-date"},[e("span",{staticClass:"day"},[t._v(t._s(t.eventInfo.date))]),t._v(" "),e("span",{staticClass:"month"},[t._v(t._s(t.eventInfo.month))])]),t._v(" "),e("h5",{staticClass:"title"},[e("n-link",{attrs:{to:"/"}},[t._v(t._s(t.eventInfo.title))])],1),t._v(" "),e("p",[t._v(t._s(t.eventInfo.excerpt))]),t._v(" "),e("ul",{staticClass:"event-meta"},[e("li",[e("i",{staticClass:"icon-40"}),t._v(t._s(t.eventInfo.location))])])])])])}),[],!1,null,null,null);e.default=component.exports},624:function(t,e,n){"use strict";n.r(e);n(66),n(17),n(30),n(31);var o=n(444),l={props:["extraClass"],components:{SectionTitle:function(){return n.e(2).then(n.bind(null,627))},EventOne:function(){return Promise.resolve().then(n.bind(null,463))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,561))}},data:function(){return{eventData:o}}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-event-area",class:t.extraClass},[e("div",{staticClass:"container edublink-animated-shape"},[e("SectionTitle",{attrs:{preTitle:"Events & News",title:"Popular Events & News",alignment:"section-center"}}),t._v(" "),e("div",{staticClass:"row g-5"},t._l(t.eventData.events.slice(0,4),(function(t){return e("div",{key:t.id,staticClass:"col-lg-4 col-md-6",attrs:{"data-aos-delay":"100","data-aos":"fade-up","data-aos-duration":"800"}},[e("EventOne",{attrs:{eventInfo:t}})],1)})),0),t._v(" "),e("div",{staticClass:"event-view-all-btn",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"1200"}}),t._v(" "),e("ul",{staticClass:"shape-group"},[t._m(0),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:".9","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})],1)],1)])}),[function(){var t=this._self._c;return t("li",{staticClass:"shape-1",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("img",{staticClass:"rotateit",attrs:{src:"/images/about/shape-13.png",alt:"Shape"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{EventOne:n(463).default})}}]);