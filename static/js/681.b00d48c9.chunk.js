"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(e,n,t){t.r(n);var r=t(861),i=t(439),c=t(757),a=t.n(c),o=t(689),u=t(791),s=t(184);n.default=function(){var e=(0,o.UO)().movie,n=(0,u.useState)("Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViMDFhN2ZiZmFlZTdjYWIwZTJiZDhmZDhmYzlmNCIsInN1YiI6IjY0YTk1N2ZkNjZhMGQzMDBhZGU3OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gTrA7E0aFwiAj4I4QiDPa4c-e38boHWSycRPAb_8LY"),t=(0,i.Z)(n,1)[0],c=(0,u.useState)("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1")),h=(0,i.Z)(c,1)[0],f=(0,u.useState)([]),l=(0,i.Z)(f,2),v=l[0],d=l[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h,{headers:{Authorization:t}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,d(r.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[h,t]),(0,s.jsx)("div",{children:v.length>0?v.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h4",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("span",{children:"We don't have any reviews"})})}},861:function(e,n,t){function r(e,n,t,r,i,c,a){try{var o=e[c](a),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var a=e.apply(n,t);function o(e){r(a,i,c,o,u,"next",e)}function u(e){r(a,i,c,o,u,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=681.b00d48c9.chunk.js.map