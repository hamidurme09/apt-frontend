System.register(["./p-c9001ae9.system.js","./p-57233c53.system.js","./p-a55517c8.system.js"],(function(t){"use strict";var n,i,e,s,o;return{setters:[function(t){n=t.r;i=t.c;e=t.h},function(t){s=t.a},function(t){o=t.R}],execute:function(){var r=t("page_admin_listing_add",function(){function t(t){n(this,t);this.isLoggedIn=false;this.isAdmin=false;this.store=i(this,"store")}t.prototype.componentWillLoad=function(){this.store.mapStateToProps(this,(function(t){return{isLoggedIn:s.isLoggedIn(t),isAdmin:s.isAdmin(t)}}));if(!this.isLoggedIn){o.forward("/login")}else{if(!this.isAdmin){o.forward("/")}}};t.prototype.onFormSuccess=function(t){o.forward("/listing/"+t.detail.id)};t.prototype.render=function(){var t=this;return[e("admin-header",null),e("ion-content",{class:"page-admin-listing-add"},e("section",{class:"section"},e("listing-edit-form",{onSuccess:function(n){return t.onFormSuccess(n)}})))]};Object.defineProperty(t,"style",{get:function(){return".page-admin-listing-add>section{padding-bottom:32px}"},enumerable:true,configurable:true});return t}())}}}));