"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{221:function(e,t,n){n.r(t);var r=n(861),u=n(439),i=n(757),c=n.n(i),a=n(87),o=n(689),s=n(791),l=n(184);t.default=function(){var e=(0,a.lr)(),t=(0,u.Z)(e,2),n=t[0],i=t[1],h=(0,s.useState)(n.get("query")||""),f=(0,u.Z)(h,2),d=f[0],p=f[1],v=(0,s.useState)("Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViMDFhN2ZiZmFlZTdjYWIwZTJiZDhmZDhmYzlmNCIsInN1YiI6IjY0YTk1N2ZkNjZhMGQzMDBhZGU3OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gTrA7E0aFwiAj4I4QiDPa4c-e38boHWSycRPAb_8LY"),m=(0,u.Z)(v,1)[0],Z=(0,s.useState)([]),j=(0,u.Z)(Z,2),x=j[0],y=j[1],I=(0,o.TH)(),g=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?query=".concat(d,"&include_adult=false&language=en-US&page=1"),e.prev=1,e.next=4,fetch(t,{headers:{Authorization:m}});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,y(r.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){g()}),[m]),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"text",value:d,onChange:function(e){if(""===e.currentTarget.value)return i({});p(e.currentTarget.value)}}),(0,l.jsx)("button",{type:"button",onClick:function(){i({query:d}),g()},children:"Search"}),(0,l.jsx)("ul",{children:x.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:I},children:e.original_title})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,u,i,c){try{var a=e[i](c),o=a.value}catch(s){return void n(s)}a.done?t(o):Promise.resolve(o).then(r,u)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(u,i){var c=e.apply(t,n);function a(e){r(c,u,i,a,o,"next",e)}function o(e){r(c,u,i,a,o,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return u}})}}]);
//# sourceMappingURL=221.eb6595ce.chunk.js.map