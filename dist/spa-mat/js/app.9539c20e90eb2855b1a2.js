webpackJsonp([8],{"+nwc":function(t,e){},0:function(t,e,n){t.exports=n("nplA")},"3Puz":function(t,e){},N12Q:function(t,e){},R58i:function(t,e){},YhSc:function(t,e){},nplA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};n.d(o,"isAuthenticated",function(){return A});var r={};n.d(r,"login",function(){return y}),n.d(r,"logout",function(){return w});var a={};n.d(a,"register",function(){return C}),n.d(a,"verify",function(){return S}),n.d(a,"login",function(){return x}),n.d(a,"logout",function(){return I});var i=n("Dd8w"),u=n.n(i),c=n("/5sW"),s=n("7109");c.a.use(s.K,{components:{QLayout:s.t,QLayoutHeader:s.v,QLayoutDrawer:s.u,QPageContainer:s.z,QPage:s.y,QPopover:s.A,QToolbar:s.G,QTable:s.C,QTh:s.F,QTr:s.I,QTd:s.E,QTableColumns:s.D,QToolbarTitle:s.H,QBtn:s.e,QIcon:s.m,QList:s.w,QListHeader:s.x,QItem:s.p,QItemTile:s.s,QItemMain:s.q,QItemSide:s.r,QField:s.l,QInput:s.o,QCard:s.f,QCardTitle:s.k,QCardMain:s.h,QCardMedia:s.i,QCardSeparator:s.j,QCardActions:s.g,QInnerLoading:s.n,QSpinnerGears:s.B},directives:{Ripple:s.J,CloseOverlay:s.a},plugins:{Notify:s.d,Loading:s.b,LocalStorage:s.c}});n("L4dm"),n("hAPP"),n("3Puz"),n("N12Q");var l=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},p=[];l._withStripped=!0;var d=n("XyMi"),f=!1;var m=function(t){f||n("YhSc")},h=Object(d.a)({name:"App"},l,p,!1,m,null,null);h.options.__file="src/App.vue";var g=h.exports,Q=n("/ocq"),v=[{path:"/",component:function(){return n.e(4).then(n.bind(null,"lwem"))},meta:{auth:!0},children:[{path:"",name:"index",component:function(){return n.e(5).then(n.bind(null,"2NXm"))},meta:{title:"Home"}},{path:"articles",name:"articles",component:function(){return n.e(2).then(n.bind(null,"AG16"))},meta:{title:"Articles"}}]},{path:"/auth",redirect:"/auth/login",meta:{guest:!0},component:function(){return n.e(3).then(n.bind(null,"fKyl"))},children:[{path:"login",name:"login",component:function(){return n.e(0).then(n.bind(null,"Ls0E"))},meta:{title:"Login"}},{path:"register",name:"register",component:function(){return n.e(1).then(n.bind(null,"M/F+"))},meta:{title:"Register"}}]},{path:"*",component:function(){return n.e(6).then(n.bind(null,"c5Mg"))}}];c.a.use(Q.a);var k=new Q.a({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:v}),b=n("NYxO"),A=function(t){return null!==t.token&&null!==t.user},y=function(t,e){var n=e.token,o=e.user;t.token=n,t.user=o},w=function(t){t.user=t.token=null},L=n("mtWM"),T=n.n(L);function C(t,e){var n=t.commit;return T.a.post("api/auth/register",e).then(function(t){n("login",{token:t.data.token,user:t.data.user}),s.c.set("token",t.data.token),M(t.data.token)})}function S(t){var e=t.commit,n=s.c.get.item("token");if(n)return M(n),T.a.get("api/auth/user").then(function(t){e("login",{token:n,user:t.data})}).catch(function(){s.c.clear()})}function x(t,e){var n=t.commit;return T.a.post("api/auth/login",e).then(function(t){n("login",{token:t.data.token,user:t.data.user}),s.c.set("token",t.data.token),M(t.data.token)})}function I(t){(0,t.commit)("logout"),s.c.clear()}function M(t){T.a.defaults.headers.common.Authorization="Bearer "+t}var P={namespaced:!0,state:{token:null,user:null},getters:o,mutations:r,actions:a};c.a.use(b.a);var E=new b.a.Store({modules:{session:P}}),_=n("ESwS"),N=n.n(_);c.a.config.productionTip=!1;var V=u()({el:"#q-app",router:k,store:E},g),q=[];q.push(function(t){t.app,t.router;t.Vue.prototype.$axios=T.a}),q.push(function(t){t.Vue.use(N.a)}),q.push(function(t){t.app;var e=t.router;t.Vue;e.beforeEach(function(t,e,n){document.title=t.meta.title+" | Quasar App",n()})}),q.push(function(t){var e=t.app,n=t.router;t.Vue;e.store.getters["session/isAuthenticated"]||e.store.dispatch("session/verify").then(function(){n.push({name:"index"})}),n.beforeEach(function(t,n,o){t.matched.some(function(t){return t.meta.auth})&&!e.store.getters["session/isAuthenticated"]?o({name:"login"}):t.matched.some(function(t){return t.meta.guest})&&e.store.getters["session/isAuthenticated"]?o({name:"index"}):o()})}),q.forEach(function(t){return t({app:V,router:k,store:E,Vue:c.a})}),new c.a(V)}},[0]);