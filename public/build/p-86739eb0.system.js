var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r["throw"](e))}catch(e){a(e)}}function c(e){e.done?n(e.value):o(e.value).then(i,u)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(t){return c([e,t])}}function c(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;o=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){n.label=i[1];break}if(i[0]===6&&n.label<a[1]){n.label=a[1];a=i;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(i);break}if(a[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(e){i=[6,e];o=0}finally{r=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register([],(function(e){"use strict";return{execute:function(){var t=function(){function e(){}e.prototype.confirm=function(e,t,n){var r=this;return new Promise((function(o){return __awaiter(r,void 0,void 0,(function(){var r,a;return __generator(this,(function(i){r=[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){o(false)}},{text:"Okay",handler:function(){o(true)}}];a=Object.assign(document.createElement("ion-modal"),{component:"apt212-alert",cssClass:"apt212-alert",componentProps:{header:t,subheader:n,message:e,buttons:r}});document.body.appendChild(a);a.present();return[2]}))}))}))};e.prototype.alert=function(e,t,n){return new Promise((function(r){var o=[{text:"Okay",handler:function(){r(true)}}];var a=Object.assign(document.createElement("ion-modal"),{component:"apt212-alert",cssClass:"apt212-alert",componentProps:{header:t,subheader:n,message:e,buttons:o}});document.body.appendChild(a);return a.present()}))};return e}();var n=e("A",new t)}}}));