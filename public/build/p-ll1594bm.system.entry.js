System.register(["./p-c9001ae9.system.js"],(function(t){"use strict";var e,o,n;return{setters:[function(t){e=t.r;o=t.j;n=t.h}],execute:function(){var s=t("apt212_accordion",function(){function t(t){e(this,t);this.toggle=false;this.onToggle=o(this,"onToggle",7)}t.prototype.toggleComponent=function(){this.toggle=!this.toggle;this.onToggle.emit({visible:this.toggle})};t.prototype.render=function(){var t=this;return n("div",null,n("button",{id:this.questionID,class:"accordion",onClick:function(){return t.toggleComponent()}},this.label,this.toggle?n("ion-icon",{class:"chevron",src:"assets/images/icons/chevron_down.svg"}):n("ion-icon",{class:"chevron",src:"assets/images/icons/chevron_up.svg"})),n("div",{class:"content-box "+(this.toggle?"open-question":"close-question")},n("p",null,this.description)))};Object.defineProperty(t,"style",{get:function(){return"button{border:none}.accordion{cursor:pointer;padding:22px 0;width:100%;border-bottom:1px solid #ddd;text-align:left;outline:0;background-color:#fff;font-size:16px;font-family:proxima-nova,sans-serif}.accordion .chevron{float:right}.open-question{display:block;height:auto;padding:22px 0}.close-question{display:none}"},enumerable:true,configurable:true});return t}())}}}));