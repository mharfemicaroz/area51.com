(window.webpackJsonp=window.webpackJsonp||[]).push([[58,144],{438:function(t){t.exports=JSON.parse('{"instructors":[{"imgSrc":"2.png","name":"Sherlock Cunanan","designation":"Senior Engineer","excerpt":"Bringing years of engineering expertise to the forefront of technology innovation to drive forward-thinking solutions.","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"1.png","name":"Cloyd Cunanan","designation":"CEO, Senior Marketing Specialist","excerpt":"Leading with visionary marketing strategies and a passion for growth and innovation.","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"3.png","name":"Mharfe Micaroz","designation":"Senior Developer","excerpt":"Dedicated to crafting cutting-edge solutions and pushing the boundaries of technology.","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-04.jpg","name":"John Travolta","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-05.jpg","name":"Hilary Swank","designation":"Laravel Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-06.jpg","name":"Steve Martin","designation":"App Developer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-07.jpg","name":"Louis Vargas","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-08.jpg","name":"Tamara Wilson","designation":"Affiliate Markeer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}],"yogaInstructors":[{"imgSrc":"team-01.jpg","name":"Jane Seymour","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-02.jpg","name":"Edward Norton","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-03.jpg","name":"Penelope Cruz","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}]}')},449:function(t,e,n){"use strict";n.r(e);n(55);var o={props:["instructor"]},c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-team-grid team-style-3"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail-wrap"},[e("div",{staticClass:"thumbnail"},[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[e("img",{attrs:{src:"/images/team/team-02/"+t.instructor.imgSrc,alt:t.instructor.name+" Thumbnail"}})])],1),t._v(" "),e("ul",{staticClass:"team-share-info"},t._l(t.instructor.socialLinks,(function(t,n){return e("li",{key:n},[e("a",{attrs:{"aria-label":t.name,href:t.url}},[e("i",{class:t.iconName})])])})),0)]),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title"},[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t._v(t._s(t.instructor.name))])],1),t._v(" "),e("span",{staticClass:"designation"},[t._v(t._s(t.instructor.designation))])])])])}),[],!1,null,null,null);e.default=component.exports},636:function(t,e,n){"use strict";n.r(e);n(66),n(17),n(30),n(31);var o=n(438),c={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,624))},InstructorOne:function(){return n.e(18).then(n.bind(null,447))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,561))}},data:function(){return{instructorData:o}}},r=n(10),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-team-area team-area-3 edu-section-gap"},[e("div",{staticClass:"container"},[e("SectionTitle",{attrs:{preTitle:"Instructors",title:"Course Instructors",alignment:"section-center"}}),t._v(" "),e("div",{staticClass:"row g-5"},t._l(t.instructorData.instructors.slice(0,3),(function(t,n){return e("div",{key:n,staticClass:"col-lg-4 col-md-6",attrs:{"data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"800"}},[e("InstructorThree",{attrs:{instructor:t}})],1)})),0)],1),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"-2","data-aos-delay":"200","data-aos":"fade","data-aos-duration":"800",imgSrc:"/images/others/shape-26.png"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InstructorThree:n(449).default})}}]);