var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r["throw"](e))}catch(e){o(e)}}function u(e){e.done?n(e.value):i(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-c9001ae9.system.js","./p-57233c53.system.js","./p-a55517c8.system.js"],(function(e){"use strict";var t,n,r,i,o;return{setters:[function(e){t=e.r;n=e.c;r=e.h},function(e){i=e.a},function(e){o=e.R}],execute:function(){var a=e("page_admin_owner",function(){function e(e){t(this,e);this.isLoggedIn=false;this.isAdmin=false;this.store=n(this,"store")}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.store.mapStateToProps(this,(function(e){return{isLoggedIn:i.isLoggedIn(e),isAdmin:i.isAdmin(e)}}));if(!this.isLoggedIn){o.forward("/login")}else{if(!this.isAdmin){o.forward("/")}}return[2]}))}))};e.prototype.render=function(){return[r("admin-header",null),r("ion-content",{class:"page-admin-owner"},r("section",{class:"section"},r("owner-global-form",null)))]};Object.defineProperty(e,"style",{get:function(){return".page-admin-owner>section{padding-bottom:32px}"},enumerable:true,configurable:true});return e}())}}}));