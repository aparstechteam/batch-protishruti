(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"35302230","chunk-083eb8de":"a876f928","chunk-0c79306a":"661f55f7","chunk-26efc7b8":"88f98071","chunk-31141042":"1ab929db","chunk-3ae2651d":"d3654706","chunk-5d983de7":"e89d3ae0","chunk-60bd7ef9":"dd2ea651"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-083eb8de":1,"chunk-0c79306a":1,"chunk-26efc7b8":1,"chunk-31141042":1,"chunk-3ae2651d":1,"chunk-5d983de7":1,"chunk-60bd7ef9":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-083eb8de":"0527c49e","chunk-0c79306a":"ef84a7c6","chunk-26efc7b8":"1f99a8f5","chunk-31141042":"7bf40930","chunk-3ae2651d":"bc07efae","chunk-5d983de7":"5714264e","chunk-60bd7ef9":"3bcd9782"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/batch-protishruti/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"150b":function(e,t,n){},"4ee7":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("260b"),a=(n("ea7b"),{apiKey:"AIzaSyD5kCYUdPte6Q_KSAwa7pPHOZsVZ4_YeFs",authDomain:"batchprotisruti-3acd6.firebaseapp.com",projectId:"batchprotisruti-3acd6",storageBucket:"batchprotisruti-3acd6.appspot.com",messagingSenderId:"1091741305599",appId:"1:1091741305599:web:8a9749766d9533eab99aca",measurementId:"G-SXGEZ3HLTN"}),o=(r["a"].initializeApp(a),r["a"].auth())},"52de":function(e,t,n){},"555f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    w-24\n    h-24\n    animate-spin\n    border-4 border-gray-400\n    loader\n    mx-auto\n    rounded-full\n  "})},a=[],o={},u=o,i=(n("be44"),n("2877")),c=Object(i["a"])(u,r,a,!1,null,"444879e2",null);t["default"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"min-h-screen bg-gradient-to-br from-blue-400 to-blue-500 mainscreen"},[n("Navbar"),n("div",{staticClass:"pb-10"},[n("router-view")],1)],1)},o=[],u=(n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return"Auth"!=e.$route.name?r("div",{staticClass:"justify-center pt-4"},[r("img",{staticClass:"h-24 mb-5 bg-gray-50 p-2 rounded mx-auto",attrs:{src:n("cf05"),alt:"Site Logo"}}),r("div",{staticClass:"\n      mx-3\n      my-5\n      p-5\n      md:w-3/4\n      md:mx-auto\n      flex flex-wrap\n      items-center\n      justify-center\n      gap-4\n    "},[r("router-link",{staticClass:"inline-block px-6 py-2 primary_btn",attrs:{to:"/","exact-active-class":"border-b-4 border-gray-50"}},[e._v("Routine & Classes")]),r("router-link",{staticClass:"inline-block px-6 py-2 primary_btn",attrs:{to:"/exams","active-class":"border-b-4 border-gray-50"}},[e._v("Exam & Ranking")])],1)]):e._e()}),i=[],c={},s=c,l=n("2877"),d=Object(l["a"])(s,u,i,!1,null,"67866ed3",null),f=d.exports,p={components:{Navbar:f},methods:{navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath()}},b=p,h=Object(l["a"])(b,a,o,!1,null,null,null),m=h.exports,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(g["a"]);var v=[{path:"/login",name:"Auth",component:function(){return n.e("chunk-31141042").then(n.bind(null,"2fef"))}},{path:"/resetpass",name:"ResetPass",component:function(){return n.e("chunk-083eb8de").then(n.bind(null,"fae4"))}},{path:"/qna",name:"QnA",component:function(){return n.e("chunk-26efc7b8").then(n.bind(null,"b5ae"))},meta:{requiresAuth:!0}},{path:"/",name:"Routine",component:function(){return n.e("chunk-3ae2651d").then(n.bind(null,"8eb4"))},meta:{requiresAuth:!0}},{path:"/exams",name:"Exam",component:function(){return n.e("chunk-5d983de7").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/exam/:id",name:"ExamQuestion",meta:{requiresAuth:!0},component:function(){return n.e("chunk-60bd7ef9").then(n.bind(null,"3589"))}},{path:"/ranking/:id",name:"Ranking",meta:{requiresAuth:!0},component:function(){return n.e("chunk-0c79306a").then(n.bind(null,"a936"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=new g["a"]({mode:"history",base:"/batch-protishruti/",routes:v});k.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth})),a=localStorage.getItem("bpstudent");r?a?n():n({path:"/login"}):n()}));var y=k,_=n("2f62"),x=n("4ee7");r["a"].use(_["a"]);var E=new _["a"].Store({state:{user:{roll:null},error:"",loading:!1},mutations:{SET_USER:function(e,t){e.user=t},SET_ERROR:function(e,t){e.error=t},SET_LOADING:function(e,t){e.loading=t},SET_INITIALSTATE:function(e,t){e.initialState=t}},actions:{userLogin:function(e,t){var n=e.commit;n("SET_ERROR",""),n("SET_LOADING",!0),console.log("login"),x["a"].signInWithEmailAndPassword(t.cred,t.password).then((function(){var e=x["a"].currentUser;n("SET_USER",e),y.replace("/"),n("SET_LOADING",!1)})).catch((function(e){n("SET_ERROR",e),n("SET_LOADING",!1)}))},logOut:function(e){var t=e.commit;t("SET_LOADING",!0),x["a"].signOut().then((function(){y.push("/login")}))}},getters:{loginstatus:function(e){return null!==e.user&&void 0!==e.user},getUser:function(e){return e.user}}}),S=(n("ba8c"),n("150b"),n("2ead")),w=n.n(S),O=n("2ef0"),A=n.n(O),T=n("9955"),C=n.n(T),j=n("14ba"),I=n.n(j),P=n("3b2f"),R=n.n(P),L=(n("be0f"),n("a753"),n("953d")),N=n.n(L),q=n("fc6b"),D=n.n(q);r["a"].config.productionTip=!1,r["a"].use(w.a),r["a"].moment().locale("en"),r["a"].use(C.a,{lodash:A.a}),r["a"].use(I.a),r["a"].use(R.a),window.katex=R.a,r["a"].use(N.a),r["a"].component("tbtn",n("b209").default),r["a"].component("rbtn",n("ce19").default),r["a"].component("loader",n("555f").default),r["a"].component("VueTailwindModal",D.a),new r["a"]({router:y,store:E,render:function(e){return e(m)}}).$mount("#app")},"5a9b":function(e,t,n){"use strict";n("52de")},b209:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"\n    px-5\n    py-3\n    bg-gradient-to-r\n    from-red-400\n    to-red-600\n    font-semibold\n    text-white\n    rounded\n    flex\n  ",attrs:{type:"submit"}},[e.loading?n("div",{staticClass:"\n      w-6\n      h-6\n      mx-1\n      border-4 border-t-4 border-white\n      rounded-full\n      animate-spin\n      loader_btn\n    "}):e._e(),e._v(" "+e._s(e.loading?"Loading...":e.text)+" ")])},a=[],o={props:{text:{type:String},loading:{type:Boolean,default:!1}},watch:{loading:function(e,t){return e!=t?e:t}}},u=o,i=(n("5a9b"),n("2877")),c=Object(i["a"])(u,r,a,!1,null,"0079994c",null);t["default"]=c.exports},ba8c:function(e,t,n){},be44:function(e,t,n){"use strict";n("d9dc")},ce19:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.link?n("router-link",{staticClass:"\n    px-5\n    py-3\n    bg-gradient-to-r\n    from-green-400\n    to-green-600\n    font-semibold\n    text-white\n    rounded\n  ",attrs:{to:e.link}},[e._v(" "+e._s(e.text)+" ")]):e._e()},a=[],o={props:{text:{type:String},link:{type:String}}},u=o,i=n("2877"),c=Object(i["a"])(u,r,a,!1,null,"7b6d0526",null);t["default"]=c.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.5bbcb933.png"},d9dc:function(e,t,n){}});