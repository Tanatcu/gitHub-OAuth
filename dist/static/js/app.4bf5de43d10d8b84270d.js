webpackJsonp([1],{103:function(t,e){},21:function(t,e,n){"use strict";function o(t){var e=t.commit;return!!c.a.storage.isExist("token")&&(e("loginUser"),!0)}function s(){window.location="https://github.com/login/oauth/authorize?client_id=406d2f8f932cc21dc3ce&state=ldkshgksjdhfghkdhfkjsghdfs"}function i(){var t=window.location.search.replace("?code=","");return new a.a(function(e,n){c.a.http.post("https://github.com/login/oauth/access_token",{client_id:"406d2f8f932cc21dc3ce",client_secret:"90422725a40a5b07ddfd82947ea1109c668dedf3",code:t,state:"ldkshgksjdhfghkdhfkjsghdfs"},{"content-type":"application/json"}).then(function(t){t.access_token||n(),e(t)})})}var r=n(50),a=n.n(r),c=n(2);e.a=o,e.c=s,e.b=i},35:function(t,e,n){"use strict";var o=n(2),s=new o.a,i={connect:function(t,e){s.$on(t,e)},disconnect:function(t,e){s.$off(t,e)},send:function(t,e,n){s.$emit(t,e,n)},toast:function(t,e,n){s.$emit("showToast",t,e,n)}};i.install=function(t){t.prototype.$event=i,t.event=i},e.a=i},36:function(t,e,n){"use strict";var o=n(2),s=n(99);o.a.use(s.a),o.a.http.options.root="https://api.github.com";var i={_request:function(t,e,n){switch(t){case"get":n={params:n};break;case"post":case"delete":n={body:n}}return o.a.http[t](e,n).then(function(t){return t.body}).catch(this.checkError)},get:function(t,e){return this._request("get",t,e)},post:function(t,e){return this._request("post",t,e)},put:function(t,e){return this._request("put",t,e)},patch:function(t,e){return this._request("patch",t,e)},remove:function(t,e){return this._request("delete",t,e)},checkError:function(t){o.a.event.toast("e",t.statusText||t.status)}};i.install=function(t){t.prototype.$api=i,t.api=i},e.a=i},37:function(t,e,n){"use strict";var o={getKey:function(){return window.localStorage.getItem("X-Access-Token")},setKey:function(t){window.localStorage.setItem("X-Access-Token",t)},isExistKey:function(){var t=getKey();return"string"==typeof t&&"null"!==t&&"undefined"!==t},removeKey:function(){window.localStorage.removeItem("X-Access-Token")},set:function(t,e){window.localStorage.setItem(t,e)},get:function(t){return window.localStorage.getItem(t)},isExist:function(t){var e=this.get(t);return"string"==typeof e&&"null"!==e&&"undefined"!==e},remove:function(t){window.localStorage.removeItem(t)},removeMore:function(t){var e=this;if(!t.length)return!1;t.map(function(t,n){e.remove(t)})},clear:function(){window.localStorage.clear()}};o.install=function(t){t.prototype.$storage=o,t.storage=o},e.a=o},38:function(t,e,n){"use strict";var o=n(2),s=n(100),i=n(48);o.a.use(s.a),e.a=new s.a({routes:i.a,mode:"history"})},39:function(t,e,n){"use strict";var o=n(2),s=n(102),i=n(49);o.a.use(s.a),e.a=new s.a.Store({state:{logged:!1,repositories:[]},mutations:{logged:function(t){t.logged=!0},setRepo:function(t,e){t.repositories=e}},modules:{Authorization:i.a}})},40:function(t,e){},41:function(t,e,n){n(88);var o=n(13)(n(43),n(96),null,null);t.exports=o.exports},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",mounted:function(){this.$refs.toastr.defaultTimeout=4e3,this.$event.connect("showToast",this.showToast)},beforeDestroy:function(){this.$event.disconnect("showToast")},methods:{showToast:function(t,e){this.$refs.toastr[t](e)}}}},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"BetweenPage",mounted:function(){var t=this;this.$store.dispatch("getAccessToken").then(function(e){t.$storage.set("token",e.access_token),t.$storage.set("type",e.token_type),t.$store.commit("logged"),t.$router.replace({name:"Repositories"})})}}},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginPage",methods:{login:function(){this.$store.dispatch("getCode")}}}},46:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Repositories",mounted:function(){this.getRepositories()},data:function(){return{repositories:[]}},methods:{getRepositories:function(){var t=this;this.$api.get("user/repos").then(function(e){t.repositories=e})}}}},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),s=n(42),i=n.n(s),r=n(39),a=n(21),c=n(36),u=n(35),f=n(37),l=n(41),p=n.n(l),d=n(38);n(40),o.a.use(i.a),o.a.use(c.a),o.a.use(u.a),o.a.use(f.a),o.a.component("vue-toastr",i.a),o.a.http.interceptors.push(function(t,e){var s=o.a.storage.get("token"),i=o.a.storage.get("type");n.i(a.a)(r.a)&&t.headers.set("Authorization",i+" "+s),t.headers.set("Accept","application/json"),t.headers.set("Content-Type","application/json"),e()}),d.a.beforeEach(function(t,e,o){var s=["LoginPage","BetweenPage"];n.i(a.a)(r.a)||-1!==s.indexOf(t.name)||o({name:"LoginPage"}),o()}),o.a.config.productionTip=!1,new o.a({el:"#app",router:d.a,store:r.a,render:function(t){return t(p.a)}})},48:function(t,e,n){"use strict";var o=n(93),s=n.n(o),i=n(92),r=n.n(i),a=n(94),c=n.n(a);e.a=[{path:"/",name:"LoginPage",component:s.a},{path:"/redirect",name:"BetweenPage",component:r.a},{path:"/my_repo",name:"Repositories",component:c.a}]},49:function(t,e,n){"use strict";var o=n(21),s={User:{isLogged:!1}};e.a={state:s,mutations:{loginUser:function(t){t.User.isLogged=!0}},actions:{getAccessToken:o.b,getCode:o.c}}},86:function(t,e){},87:function(t,e){},88:function(t,e){},91:function(t,e,n){t.exports=n.p+"static/img/git_logo.b2ffb3a.png"},92:function(t,e,n){var o=n(13)(n(44),n(98),null,null);t.exports=o.exports},93:function(t,e,n){n(87),n(86);var o=n(13)(n(45),n(95),"data-v-065190ad",null);t.exports=o.exports},94:function(t,e,n){var o=n(13)(n(46),n(97),null,null);t.exports=o.exports},95:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h2",[t._v("Please, login to system via GitHub")]),t._v(" "),t._m(0),t._v(" "),n("button",{staticClass:"login",on:{click:t.login}},[t._v("Login")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo_img"},[o("img",{attrs:{src:n(91),alt:"git logo"}})])}]}},96:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-toastr",{ref:"toastr"}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},97:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"repos"},[n("div",[t._v("List of repositories")]),t._v(" "),n("ul",t._l(t.repositories,function(e){return n("li",[t._v(t._s(e.name))])}))])},staticRenderFns:[]}},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}}},[47]);
//# sourceMappingURL=app.4bf5de43d10d8b84270d.js.map