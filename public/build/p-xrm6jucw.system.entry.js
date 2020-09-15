System.register(["./p-c9001ae9.system.js","./p-53678cca.system.js","./p-69f5d316.system.js","./p-32fd337e.system.js","./p-57233c53.system.js","./p-a55517c8.system.js","./p-5b18349f.system.js"],(function(e){"use strict";var n,o,t,r,i,s;return{setters:[function(e){n=e.r;o=e.c;t=e.h},function(){},function(){},function(){},function(e){r=e.a},function(e){i=e.R},function(e){s=e.l}],execute:function(){var u=e("app_menu_mobile",function(){function e(e){n(this,e);this.expandPages=false;this.isLoggedIn=false;this.store=o(this,"store")}e.prototype.componentWillRender=function(){this.store.mapStateToProps(this,(function(e){return{isLoggedIn:r.isLoggedIn(e)}}));this.store.mapDispatchToProps(this,{logout:s})};e.prototype.closeMenu=function(){var e=document.querySelector("ion-modal.site-menu");var n=document.querySelector("apt212-slideover.site-menu");if(e){e.dismiss()}if(n){n.dismiss()}};e.prototype.render=function(){var e=this;return[t("div",{class:"app-menu-mobile"},t("div",{class:"main-menu"},t("ion-router-link",{href:i.getRoute("search"),onClick:function(){return e.closeMenu()}},"Furnished Apartments"),t("ion-router-link",{href:"/coming-soon",onClick:function(){return e.closeMenu()}},"Rentals"),t("ion-router-link",{href:"/coming-soon",onClick:function(){return e.closeMenu()}},"Sales"),t("ion-router-link",{href:"/coming-soon",onClick:function(){return e.closeMenu()}},"Investments"),t("div",{class:"separator"}),t("ion-router-link",{href:i.getRoute("referral"),onClick:function(){return e.closeMenu()}},"Referrals"),t("ion-router-link",{href:"/agent",onClick:function(){return e.closeMenu()}},"Agents"),t("ion-router-link",{href:i.getRoute("booking"),onClick:function(){return e.closeMenu()}},"Booking"),t("ion-router-link",{href:i.getRoute("faq"),onClick:function(){return e.closeMenu()}},"FAQ"),t("button",{class:"reset expandable",onClick:function(){return e.expandPages=!e.expandPages}},"More Pages",t("ion-icon",{mode:"md",name:"md-arrow-dropdown",class:{"expand-indicator":true,expanded:this.expandPages}})),this.expandPages?t("div",{class:"subsection"},t("ion-router-link",{href:i.getRoute("neighborhoods"),onClick:function(){return e.closeMenu()}},"Neighborhoods Guide"),t("ion-router-link",{href:i.getRoute("private-rooms"),onClick:function(){return e.closeMenu()}},"Private Rooms"),t("ion-router-link",{href:i.getRoute("corporate-rooms"),onClick:function(){return e.closeMenu()}},"Corporate Accounts"),t("ion-router-link",{href:i.getRoute("blog"),onClick:function(){return e.closeMenu()}},"APT212 Blog")):null,this.isLoggedIn?t("ion-router-link",{href:"/",onClick:function(){e.logout();e.closeMenu()}},"Log Out"):null))]};Object.defineProperty(e,"style",{get:function(){return".app-menu-mobile .main-menu{position:relative;padding-top:1rem;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;justify-items:center;-ms-flex-pack:center;justify-content:center;text-align:right;font-size:16px}.app-menu-mobile .main-menu button.expandable,.app-menu-mobile .main-menu ion-router-link{position:relative;font-weight:600;padding:0 0 .25rem 0;margin-bottom:1.25rem;text-transform:capitalize;border-bottom:4px solid transparent;background:transparent;font-size:12px}\@media (min-width:768px){.app-menu-mobile .main-menu button.expandable,.app-menu-mobile .main-menu ion-router-link{font-size:16px}}.app-menu-mobile .main-menu button.expandable:after,.app-menu-mobile .main-menu ion-router-link:after{content:\"\";position:absolute;width:100%;height:3px;bottom:-2px;left:0;background-color:#000;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}.app-menu-mobile .main-menu button.expandable:hover:after,.app-menu-mobile .main-menu ion-router-link:hover:after{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}.app-menu-mobile .main-menu button.expandable:last-child,.app-menu-mobile .main-menu ion-router-link:last-child{margin-bottom:.5rem}.app-menu-mobile .main-menu button.expandable:focus,.app-menu-mobile .main-menu ion-router-link:focus{outline:none}.app-menu-mobile .main-menu ion-button{min-height:48px}.app-menu-mobile .separator{border-top:1px solid #000;margin-bottom:1.75rem;width:40%}.app-menu-mobile .subsection{padding:16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;margin-bottom:.5rem}.app-menu-mobile .expand-indicator{margin-left:6px;font-size:18px;margin-bottom:-4px}.app-menu-mobile .expand-indicator.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}"},enumerable:true,configurable:true});return e}())}}}));