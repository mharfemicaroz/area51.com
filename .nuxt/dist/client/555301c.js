(window.webpackJsonp=window.webpackJsonp||[]).push([[172,118],{444:function(t){t.exports=JSON.parse('{"events":[{"id":1,"imgSrc":"DNSC.jpg","title":"Davao Del Norte State College Event","date":"18","fullDate":"January 18, 2024","month":"JAN","time":"10:00AM-12:00PM","location":"Davao City, Philippines","excerpt":"A collaborative event between Davao Del Norte State College and international partners."},{"id":2,"imgSrc":"DICTXI.jpg","title":"DICT Partnership Meeting","date":"19","fullDate":"February 19, 2024","month":"FEB","time":"02:00PM-04:00PM","location":"DICT Office, Philippines","excerpt":"A strategic meeting focusing on future partnerships with the Department of Information and Communications Technology."},{"id":3,"imgSrc":"CBaaS Webinar.jpg","title":"CBaaS Innovation Webinar","date":"20","fullDate":"July 20, 2024","month":"JUL","time":"09:00AM-11:00AM","location":"Online Webinar","excerpt":"An insightful webinar on unlocking innovation for commercialization, featuring industry leaders from across the globe."},{"id":4,"imgSrc":"Unlocking Innovations.jpg","title":"Unlocking Innovations","date":"20","fullDate":"September 20, 2024","month":"SEP","time":"09:00AM-11:00AM","location":"Online Webinar","excerpt":"A thought-provoking webinar on harnessing innovation for commercialization, featuring global industry leaders."}]}')},505:function(t,e,n){"use strict";n.r(e);n(55);var r={props:["eventInfo"]},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-event-list event-list-2"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail"},[e("n-link",{attrs:{to:"/event/event-details"}},[e("img",{attrs:{src:"/images/event/"+t.eventInfo.imgSrc,alt:t.eventInfo.name+" Thumbnail"}})])],1),t._v(" "),e("div",{staticClass:"content"},[e("ul",{staticClass:"event-meta"},[e("li",[e("i",{staticClass:"icon-27"}),t._v(t._s(t.eventInfo.fullDate))]),t._v(" "),e("li",[e("i",{staticClass:"icon-33"}),t._v(t._s(t.eventInfo.time))])]),t._v(" "),e("h4",{staticClass:"title"},[e("n-link",{attrs:{to:"/event/event-details"}},[t._v(t._s(t.eventInfo.title))])],1),t._v(" "),e("span",{staticClass:"event-location"},[e("i",{staticClass:"icon-40"}),t._v(t._s(t.eventInfo.location))]),t._v(" "),e("p",[t._v(t._s(t.eventInfo.excerpt))]),t._v(" "),e("div",{staticClass:"read-more-btn"},[e("n-link",{staticClass:"edu-btn btn-medium btn-border",attrs:{to:"/event/event-details"}},[t._v("Learn More "),e("i",{staticClass:"icon-4"})])],1)])])])}),[],!1,null,null,null);e.default=component.exports},598:function(t,e,n){"use strict";n.r(e);n(66),n(171),n(17),n(30),n(31);var r=n(444),o={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,247))},BreadCrumbTwo:function(){return n.e(3).then(n.bind(null,608))},EventSidebar:function(){return n.e(99).then(n.bind(null,700))},EventList:function(){return Promise.resolve().then(n.bind(null,505))},FooterOne:function(){return Promise.resolve().then(n.bind(null,248))}},data:function(){return{eventData:r,currentPage:1,perPage:9,paginationOptions:{texts:{nextPage:"",prevPage:""}}}},computed:{getItems:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.eventData.events.slice(t,e)},getPaginateCount:function(){return Math.ceil(this.eventData.events.length/this.perPage)}},methods:{paginateClickCallback:function(t){this.currentPage=Number(t)}},head:function(){return{title:"Event List"}}},l=n(10),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderOne"),t._v(" "),e("BreadCrumbTwo",{attrs:{pageTitle:"Event List",title:"Event Page"}}),t._v(" "),e("div",{staticClass:"edu-event-area event-area-1 section-gap-equal"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-3 order-lg-2"},[e("EventSidebar")],1),t._v(" "),e("div",{staticClass:"col-lg-9 order-lg-1 col-pr--35"},[e("div",{staticClass:"row g-5"},t._l(t.getItems,(function(t){return e("div",{key:t.id,staticClass:"col-12",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("EventList",{attrs:{eventInfo:t}})],1)})),0)])]),t._v(" "),t.getPaginateCount>1?e("div",[e("pagination",{staticClass:"edublink-vue-pagination",attrs:{"per-page":t.perPage,records:t.eventData.events.length,"page-count":t.getPaginateCount,options:t.paginationOptions},on:{paginate:t.paginateClickCallback},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()])]),t._v(" "),e("FooterOne")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOne:n(247).default,EventList:n(505).default,FooterOne:n(248).default})}}]);