var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n["throw"](e))}catch(e){o(e)}}function c(e){e.done?r(e.value):i(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-c9001ae9.system.js","./p-53678cca.system.js","./p-69f5d316.system.js","./p-32fd337e.system.js","./p-50f9a219.system.js","./p-de762d09.system.js","./p-5ad401ce.system.js","./p-91aa36d2.system.js","./p-d452a515.system.js","./p-e4524d85.system.js","./p-bcb23973.system.js"],(function(e){"use strict";var t,r,n,i,o,s,a,c,l;return{setters:[function(e){t=e.r;r=e.c;n=e.h;i=e.d},function(){},function(){},function(){},function(){},function(e){o=e.D},function(){},function(e){s=e.a;a=e.s},function(){},function(e){c=e.a},function(e){l=e.n}],execute:function(){var p=undefined&&undefined.__decorate||function(e,t,r,n){var i=arguments.length,o=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)if(s=e[a])o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o;return i>3&&o&&Object.defineProperty(t,r,o),o};var u=e("page_search",function(){function e(e){t(this,e);this.prefetching=false;this.size="phone-only";this.view="map";this.searchResults=[];this.searchResultsCount=0;this.selectedListings=[];this._lastSearchFilters={};this.rendered=false;this.headerObserver=null;this.footerOpen=false;this.store=r(this,"store")}e.prototype.componentWillLoad=function(){if(this.prefetching){return}this.store.mapStateToProps(this,(function(e){var t=e.screenSize,r=t.size,n=t.width;return{size:r,width:n,neighborhoods:l.getNeighborhoods(e),location:s.getLocations(e),searchFilters:s.getAllFilters(e),loading:a.getLoading(e),searchResultsCount:a.getListingsCount(e),searchResults:a.getListings(e),selectedListings:a.getSelectedListings(e)}}));this.store.mapDispatchToProps(this,{performSearchAction:c})};e.prototype.componentDidLoad=function(){var e=this;if(this.prefetching){return}if(window.MutationObserver){this.headerObserver=new MutationObserver((function(){return e.headerResized()}));var t={attributes:false,childList:true,subtree:true};var r=document.querySelector("app-header");this.headerObserver.observe(r,t)}var n={beds:["1"]};var i=new URLSearchParams(window.location.search);{if(i.has("rooms")){this.performSearchAction(n)}else{this.performSearchAction(this.searchFilters)}}};e.prototype.componentDidRender=function(){if(this.prefetching){return}this.rendered=true;var e=this.el.querySelector("search-map");e.init();var t=document.querySelector("ion-router");t.addEventListener("ionRouteDidChange",(function(){e.resize()}))};e.prototype.viewChanged=function(){setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",true,false);window.dispatchEvent(e)}),25)};e.prototype.headerResized=function(){if(!this.rendered){return}var e=document.querySelector("app-header");var t=this.el.querySelector(".results-wrapper");var r=this.el.querySelector(".map-wrapper");var n=this.el.querySelector(".view-filters");var i=this.el.querySelector("search-map");var o=e?e.clientHeight:0;var s=n?n.clientHeight:0;if(this.size.includes("desktop")){t.style.maxHeight=null;r.style.height=null}else{t.style.maxHeight="calc(100vh - ("+o+"px + "+s+"px))";r.style.height="calc(100vh - ("+o+"px + "+s+"px))"}i.resize()};e.prototype.performSearch=function(){if(JSON.stringify(this.searchFilters)===JSON.stringify(this._lastSearchFilters)){return}this._lastSearchFilters=Object.assign({},this.searchFilters);this.performSearchAction(this.searchFilters)};e.prototype.getViewClass=function(){var e={"page-search":true};e[this.view]=true;if(!this.searchResults.length&&!this.loading){e["no-results"]=true}if(this.loading){e["loading"]=true}return e};e.prototype.openSortBy=function(e){var t=document.querySelector("apt212-popover.search-sortby");if(t){return}var r=Object.assign(document.createElement("apt212-popover"),{component:"search-sortby-dropdown",target:e.currentTarget,styleOverride:{marginTop:"-1px",transform:"none"},animateSrc:"top center"});r.classList.add("search-sortby");document.body.appendChild(r)};e.prototype.openSelectedMenu=function(e){if(!this.selectedListings.length){return}var t=document.querySelector("apt212-popover.search-share");if(t){return}var r=Object.assign(document.createElement("apt212-popover"),{component:"search-shareselected-dropdown",target:e.currentTarget,styleOverride:{marginTop:"-1px",transform:"none"},bindTo:{target:this.width>450?"bottom left":"bottom right",popover:this.width>450?"top left":"top right"},animateSrc:"top center"});r.classList.add("search-share");document.body.appendChild(r)};e.prototype.infiniteScroll=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.performSearchAction(this.searchFilters,this.searchResults.length)];case 1:t.sent();e.target.complete();return[2]}}))}))};e.prototype.render=function(){var e=this;if(this.prefetching){return null}var t=[];this.searchResults.forEach((function(e){t.push(n("div",{class:"card-wrapper"},n("search-listing-card",{item:e,contentPadding:true})))}));return[n("app-header",{"hide-search-button":true}),n("ion-content",{class:this.getViewClass()},n("section",{class:"section main"},n("div",{class:"search-wrapper"},n("div",{class:"search-results"},n("div",{class:"view-filters",slot:"view-filters"},n("button",{"aria-label":"Map View",class:{"view-nav":true,active:this.view==="map"},onClick:function(){e.view="map"}},n("svg",{width:"22px",height:"17px",viewBox:"0 0 22 17",version:"1.1"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("path",{d:"M6.44693757,1.03946443 C6.7521634,0.92314383 7,1.07269915 7,1.3732543 L7,13.3434138 C7,13.6446884 6.75375471,13.9820849 6.44693757,14.099125 L1.55385803,15.9601514 C1.24783655,16.0771933 1,15.9276399 1,15.6263612 L1,3.65694337 C1,3.35566874 1.24624523,3.01827223 1.55385803,2.90123215 L6.44693757,1.03946443 Z M20.4461419,1.03984861 C20.7521634,0.922806667 21,1.07236016 21,1.37363852 L21,13.3430576 C21,13.6443323 20.7537547,13.9817289 20.4461419,14.0987689 L15.5530624,15.9605356 C15.2478366,16.0768562 15,15.9273008 15,15.6267451 L15,3.65658431 C15,3.35530965 15.2462453,3.0179131 15.5530624,2.90087301 L20.4461419,1.03984861 Z M8.55378464,1.03984861 C8.24780374,0.922806667 8,1.07236016 8,1.37363852 L8,13.3430576 C8,13.6443323 8.24621264,13.9817289 8.55378464,14.0987689 L13.4462154,15.9605356 C13.7521963,16.0768562 14,15.9273008 14,15.6267451 L14,3.65658431 C14,3.35530965 13.7537874,3.0179131 13.4462154,2.90087301 L8.55378464,1.03984861 Z",id:"Fill-1",fill:"#000000"})))),n("button",{"aria-label":"Grid View",class:{"view-nav":true,active:this.view==="grid"},onClick:function(){e.view="grid"}},n("svg",{width:"18px",height:"17px",viewBox:"0 0 18 17",version:"1.1"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{transform:"translate(1.000000, 0.000000)",fill:"#000000"},n("polygon",{points:"0 3.55555556 3.55555556 3.55555556 3.55555556 0 0 0"}),n("polygon",{points:"6.22266667 3.55555556 9.77822222 3.55555556 9.77822222 0 6.22266667 0"}),n("polygon",{points:"12.4444444 3.55555556 16 3.55555556 16 0 12.4444444 0"}),n("polygon",{points:"0 16 3.55555556 16 3.55555556 12.4444444 0 12.4444444"}),n("polygon",{points:"6.22222222 16 9.77777778 16 9.77777778 12.4444444 6.22222222 12.4444444"}),n("polygon",{points:"12.4444444 16 16 16 16 12.4444444 12.4444444 12.4444444"}),n("polygon",{points:"12.4444444 9.77777778 16 9.77777778 16 6.22222222 12.4444444 6.22222222"}),n("polygon",{points:"6.22222222 9.77777778 9.77777778 9.77777778 9.77777778 6.22222222 6.22222222 6.22222222"}),n("polygon",{points:"0 9.77777778 3.55555556 9.77777778 3.55555556 6.22222222 0 6.22222222"}))))),n("button",{"aria-label":"List View",class:{"view-nav":true,active:this.view==="list"},onClick:function(){e.view="list"}},n("svg",{width:"22px",height:"17px",viewBox:"0 0 22 17",version:"1.1"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{transform:"translate(2.000000, 0.000000)",fill:"#000000"},n("polygon",{points:"0 3.55555556 3.55555556 3.55555556 3.55555556 0 0 0"}),n("polygon",{points:"6.22266667 3.55555556 17.2226667 3.55555556 17.2226667 0 6.22266667 0"}),n("polygon",{points:"0 16 3.55555556 16 3.55555556 12.4444444 0 12.4444444"}),n("polygon",{points:"6.22222222 16 17.2222222 16 17.2222222 12.4444444 6.22222222 12.4444444"}),n("polygon",{points:"6.22222222 9.77777778 17.2222222 9.77777778 17.2222222 6.22222222 6.22222222 6.22222222"}),n("polygon",{points:"0 9.77777778 3.55555556 9.77777778 3.55555556 6.22222222 0 6.22222222"}))))),n("div",{class:"results-count"},this.searchResultsCount," Results"),n("button",{class:"button-reset has-icon dropdown",onClick:function(t){return e.openSortBy(t)}},"Sort By",n("ion-icon",{mode:"md",name:"md-arrow-dropdown"})),n("button",{class:"button-reset has-icon dropdown",onClick:function(t){return e.openSelectedMenu(t)}},this.selectedListings.length," Selected",this.selectedListings.length?n("ion-icon",{mode:"md",name:"md-arrow-dropdown"}):null)),n("div",{class:"results-wrapper"},n("div",{class:"results-grid"},t),n("div",{class:"results-list"},n("listing-table",{items:this.searchResults})),n("div",{class:"empty-state"},n("search-state-empty",null)),n("div",{class:"loading-state"},n("ion-spinner",{name:"lines"}),"Search in progress...")),n("ion-infinite-scroll",{threshold:"100px",onIonInfinite:function(t){return e.infiniteScroll(t)}},n("ion-infinite-scroll-content",{"loading-spinner":"lines"}))),n("div",{class:{"search-map":true,"mobile-map":this.view==="map"}},n("div",{class:"map-wrapper"},n("search-map",{onMapLoaded:function(e){var t=e.target;t.resize()}}))))),n("div",{class:{"search-footer":true,"footer-open":this.footerOpen,"footer-closed":!this.footerOpen}},n("div",{class:"section toggle-footer-wrapper"},n("button",{class:"button-reset toggle-footer","aria-label":"Open/Close Footer",onClick:function(){return e.footerOpen=!e.footerOpen}},n("span",{class:"closed"},"Open Footer"),n("ion-icon",{mode:"md",name:"md-arrow-dropup",class:"closed"}),n("span",{class:"open"},"Close Footer"),n("ion-icon",{mode:"md",name:"md-arrow-dropdown",class:"open"}))),n("div",{class:"footer-wrapper"},n("app-footer",{"no-margin":true}))))]};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{view:["viewChanged"],width:["headerResized"],searchFilters:["performSearch"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".page-search .section.main{padding:0}\@media (min-width:1200px){.page-search .section.main{padding:0 0 0 1.5rem}}\@media (min-width:1200px){.page-search .search-wrapper{display:-ms-flexbox;display:flex}}.page-search .search-wrapper .search-results{position:relative;width:100%}.page-search .search-wrapper .search-results .card-wrapper{border:1px solid #cbcbcb}.page-search .search-wrapper .search-results .view-filters{display:-ms-flexbox;display:flex;position:-webkit-sticky;position:sticky;top:0;-ms-flex-align:center;align-items:center;background:#fff;z-index:1;height:48px;width:100%;-webkit-box-shadow:inset 0 -1px 0 0 #e5e5e5,inset 0 1px 0 0 #e5e5e5;box-shadow:inset 0 -1px 0 0 #e5e5e5,inset 0 1px 0 0 #e5e5e5;overflow:hidden;z-index:2}.page-search .search-wrapper .search-results .view-filters button.view-nav{background:transparent;height:100%;width:48px;margin-top:-1px;outline:0}.page-search .search-wrapper .search-results .view-filters button.view-nav svg{width:20px}.page-search .search-wrapper .search-results .view-filters button.view-nav.active{background:#000}.page-search .search-wrapper .search-results .view-filters button.view-nav.active svg *{fill:#fff}.page-search .search-wrapper .search-results .view-filters label{display:none}\@media (min-width:1200px){.page-search .search-wrapper .search-results .view-filters label{display:inline-block;padding-left:1rem}}.page-search .search-wrapper .search-results .view-filters select{height:32px;border:1px solid #dfdfdf;font-size:12px;margin-left:1rem}.page-search .search-wrapper .search-results .view-filters .results-count{display:none;padding-left:1rem}\@media (min-width:1200px){.page-search .search-wrapper .search-results .view-filters .results-count{display:inline-block}}.page-search .search-wrapper .search-results .view-filters button.dropdown{margin-left:2rem;font-size:14px;height:48px}.page-search .search-wrapper .search-results .view-filters button.dropdown ion-icon{margin-left:.25rem}\@media (min-width:1200px){.page-search .search-wrapper .search-results .view-filters button.dropdown{font-size:16px}.page-search .search-wrapper .search-results .view-filters button.dropdown ion-icon{margin-left:.5rem}}\@media (min-width:1200px){.page-search .search-wrapper .search-results{width:50%}}\@media (max-width:1199px){.page-search .search-wrapper .search-results{max-height:calc(100vh - 75px - 56px)}}.page-search .search-wrapper .search-map{position:relative;width:100%}\@media (min-width:1200px){.page-search .search-wrapper .search-map{width:50%;padding-top:0}}.page-search .search-wrapper .search-map .map-wrapper{display:block;position:-webkit-sticky;position:sticky;overflow:hidden;top:0;width:100%;height:calc(100vh - (56px + 48px + 75px))}\@media (min-width:1200px){.page-search .search-wrapper .search-map .map-wrapper{width:100%;height:calc(100vh - (56px + 112px))}}\@media (max-width:1199px){.page-search .search-wrapper .results-wrapper{max-height:calc(100vh - (56px + 48px + 75px));overflow:hidden;overflow-y:scroll}.page-search .search-wrapper .mobile-map{position:fixed;width:100%}}.page-search .search-wrapper .results-list{padding:0 1.5rem 1rem 0;display:none}.page-search .empty-state,.page-search .loading-state{display:none;height:calc(100vh - (56px + 112px + 48px))}\@media (min-width:1200px){.page-search .empty-state,.page-search .loading-state{height:calc(100vh - (56px + 112px + 48px))}}.page-search.no-results .empty-state{display:block}.page-search.no-results .results-wrapper>div:not(.empty-state),.page-search.no-results .search-map{display:none}\@media (min-width:1200px){.page-search.no-results .search-map{display:block}}.page-search.loading .loading-state{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;justify-items:center;-ms-flex-pack:center;justify-content:center;text-align:center}.page-search.loading .results-wrapper>div:not(.loading-state),.page-search.loading .search-map{display:none}\@media (min-width:1200px){.page-search.loading .search-map{display:block}}.page-search.grid .search-results{width:100%}.page-search.grid .search-results .results-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:1.5rem 2rem 1.5rem}\@media (max-width:767px){.page-search.grid .search-results .results-grid{grid-template-columns:1fr}}\@media (min-width:768px){.page-search.grid .search-results .results-grid{grid-template-columns:1fr 1fr}}\@media (min-width:900px){.page-search.grid .search-results .results-grid{grid-template-columns:1fr 1fr 1fr}}\@media (min-width:1200px){.page-search.grid .search-results .results-grid{padding:1.5rem 1.5rem 1rem 0;grid-template-columns:1fr 1fr 1fr 1fr}}.page-search.grid .search-map,.page-search.grid .search-results .results-list{display:none}.page-search.list .search-results{width:100%}.page-search.list .search-results .results-grid{display:none}.page-search.list .search-results .results-list{display:block;padding:1.5rem 0 1.5rem 0}\@media (min-width:1200px){.page-search.list .search-results .results-list{padding:1.5rem 1.5rem 1rem 0}}.page-search.list .search-map{display:none}\@media (min-width:1200px){.page-search.map .search-results{padding-top:0}}.page-search.map .search-results .results-grid{display:none}\@media (min-width:1200px){.page-search.map .search-results .results-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:1.5rem 1.5rem 1rem 0}}.page-search.map ion-infinite-scroll{display:none}\@media (min-width:1200px){.page-search.map ion-infinite-scroll{display:block}}.page-search .search-footer{display:none;z-index:2}\@media (min-width:1200px){.page-search .search-footer{display:block;position:fixed;bottom:0;width:100%}.page-search .search-footer .toggle-footer-wrapper{position:relative}.page-search .search-footer .toggle-footer{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:-48px;right:52px;width:190px;height:48px;background:rgba(0,0,0,.8);color:#fff;text-transform:uppercase;display:-ms-inline-flexbox;display:inline-flex;font-size:12px;font-weight:700;padding:0 1rem}.page-search .search-footer .toggle-footer span{text-align:left;-ms-flex-positive:1;flex-grow:1}.page-search .search-footer .footer-wrapper{max-height:0;-webkit-transition:all .2s ease-in;transition:all .2s ease-in}}.page-search .search-footer.footer-open .closed{display:none}\@media (min-width:1200px){.page-search .search-footer.footer-open .footer-wrapper{max-height:620px}}.page-search .search-footer.footer-closed .open{display:none}"},enumerable:true,configurable:true});return e}());p([o(250)],u.prototype,"performSearch",null)}}}));