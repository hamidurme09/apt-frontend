var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{u(i.next(t))}catch(t){s(t)}}function a(t){try{u(i["throw"](t))}catch(t){s(t)}}function u(t){t.done?n(t.value):r(t.value).then(o,a)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];r=0}finally{i=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-c9001ae9.system.js","./p-69f5d316.system.js","./p-32fd337e.system.js","./p-50f9a219.system.js","./p-57233c53.system.js","./p-a55517c8.system.js","./p-5ad401ce.system.js","./p-5927ec0e.system.js"],(function(t){"use strict";var e,n,i,r,s,o;return{setters:[function(t){e=t.r;n=t.c;i=t.h},function(){},function(){},function(){},function(t){r=t.a},function(t){s=t.R},function(){},function(t){o=t.A}],execute:function(){var a=t("page_admin_listing_edit",function(){function t(t){e(this,t);this.isLoggedIn=false;this.isAdmin=false;this.loaded=false;this.store=n(this,"store")}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){switch(n.label){case 0:this.store.mapStateToProps(this,(function(t){return{isLoggedIn:r.isLoggedIn(t),isAdmin:r.isAdmin(t)}}));if(!this.isLoggedIn){s.forward("/login")}else{if(!this.isAdmin){s.forward("/")}}n.label=1;case 1:n.trys.push([1,3,,4]);return[4,o.getApartment(this.apartmentId)];case 2:t=n.sent();if(t&&t.hasOwnProperty("id")&&t.id===this.apartmentId){this.item=t;this.loaded=true}return[3,4];case 3:e=n.sent();this.loaded=true;return[3,4];case 4:return[2]}}))}))};t.prototype.render=function(){return[i("admin-header",null),i("ion-content",{class:"page-admin-listing-edit"},i("section",{class:"section"},this.loaded&&this.item?i("listing-edit-form",{item:this.item}):null,!this.loaded||!this.item?i("div",{class:"text-center"},i("ion-spinner",{name:"lines"})):null))]};Object.defineProperty(t,"style",{get:function(){return".page-admin-listing-edit>section{padding-bottom:32px}"},enumerable:true,configurable:true});return t}())}}}));