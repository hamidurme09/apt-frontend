System.register(["./p-c9001ae9.system.js"],(function(e){"use strict";var t,n,i;return{setters:[function(e){t=e.r;n=e.h;i=e.d}],execute:function(){var r=e("input_date_modal",function(){function e(e){t(this,e)}e.prototype.close=function(e){var t=this.el.closest("ion-modal");t.dismiss({value:e})};e.prototype.render=function(){var e=this;return n("div",{class:"input-date-modal-component"},this.label?n("label",{htmlFor:"input-date-modal-input"},this.label):null,n("apt212-datepicker",{id:"input-date-modal-input",size:1.4,onSelected:function(t){return e.close(t.detail)}}),this.helpText?n("div",{class:"help-text"},this.helpText):null)};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".input-date-modal-component{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-bottom:48px}.input-date-modal-component label{font-size:20px;font-weight:700;padding-bottom:16px}.input-date-modal-component .help-text{padding-top:16px;font-size:14px}"},enumerable:true,configurable:true});return e}())}}}));