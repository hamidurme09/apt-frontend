var __awaiter=this&&this.__awaiter||function(e,r,t,n){function s(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function i(e){try{u(n["throw"](e))}catch(e){o(e)}}function u(e){e.done?t(e.value):s(e.value).then(a,i)}u((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,s,o,a;return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(r){return u([e,r])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,s&&(o=a[0]&2?s["return"]:a[0]?s["throw"]||((o=s["return"])&&o.call(s),0):s.next)&&!(o=o.call(s,a[1])).done)return o;if(s=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;s=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1];o=a;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(a);break}if(o[2])t.ops.pop();t.trys.pop();continue}a=r.call(e,t)}catch(e){a=[6,e];s=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-32fd337e.system.js","./p-5ad401ce.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.A},function(e){t=e.a}],execute:function(){var n=function(){function e(){}e.prototype.getApartment=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(s){switch(s.label){case 0:s.trys.push([0,3,,4]);return[4,fetch(r.getAPIUrl()+"/apartments/"+e,{headers:r.getHeaders()})];case 1:t=s.sent();if(!t.ok){throw new Error(t.statusText)}return[4,t.json()];case 2:return[2,s.sent()];case 3:n=s.sent();throw new Error(n.message);case 4:return[2]}}))}))};e.prototype.getApartments=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,s;return __generator(this,(function(o){switch(o.label){case 0:t=e.map((function(e){return"ids[]="+e})).join("&");o.label=1;case 1:o.trys.push([1,4,,5]);return[4,fetch(r.getAPIUrl()+"/apartments/list?"+t,{headers:r.getHeaders()})];case 2:n=o.sent();if(!n.ok){throw new Error(n.statusText)}return[4,n.json()];case 3:return[2,o.sent()];case 4:s=o.sent();throw new Error(s.message);case 5:return[2]}}))}))};e.prototype.updateApt=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,s,o,a,i;return __generator(this,(function(u){switch(u.label){case 0:t=e.hasOwnProperty("id")&&e.id?"PATCH":"POST";n=e.hasOwnProperty("id")&&e.id?r.getAPIUrl()+"/apartments/"+e.id:r.getAPIUrl()+"/apartments";u.label=1;case 1:u.trys.push([1,4,,5]);return[4,fetch(n,{headers:r.getHeaders(),method:t,body:JSON.stringify(e)})];case 2:s=u.sent();return[4,s.json()];case 3:o=u.sent();if(!s.ok){if(o&&o.errors){a=[];Object.keys(o.errors).forEach((function(e){return a.push(o.errors[e][0])}));throw new Error(a.join("\n"))}if(o&&o.message){throw new Error(o.message)}throw new Error(s.statusText)}return[2,o];case 4:i=u.sent();throw new Error(i.message);case 5:return[2]}}))}))};e.prototype.deleteApt=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,s;return __generator(this,(function(o){switch(o.label){case 0:o.trys.push([0,3,,4]);return[4,fetch(r.getAPIUrl()+"/apartments/"+e,{headers:r.getHeaders(),method:"DELETE"})];case 1:t=o.sent();return[4,t.json()];case 2:n=o.sent();if(!t.ok){if(n&&n.errors){return[2,{success:false,errors:n.errors}]}if(n&&n.message){throw new Error(n.message)}throw new Error(t.statusText)}return[2,{success:true}];case 3:s=o.sent();throw new Error(s.message);case 4:return[2]}}))}))};e.prototype.getBookingDetails=function(e,n,s,o){return __awaiter(this,void 0,void 0,(function(){var a,i,u,c;return __generator(this,(function(h){switch(h.label){case 0:a="checkindate="+encodeURIComponent(t(n,"m/d/Y"))+"&checkoutdate="+encodeURIComponent(t(s,"m/d/Y"))+"&guests="+encodeURIComponent(o);h.label=1;case 1:h.trys.push([1,6,,7]);return[4,fetch(r.getAPIUrl()+("/apartments/booking_details/"+e+"?")+a,{headers:r.getHeaders()})];case 2:i=h.sent();if(!!i.ok)return[3,4];return[4,i.json()];case 3:u=h.sent();if(u&&u.error){throw new Error(u.error)}throw new Error(i.statusText);case 4:return[4,i.json()];case 5:return[2,h.sent()];case 6:c=h.sent();throw new Error(c.message);case 7:return[2]}}))}))};return e}();var s=e("A",new n)}}}));