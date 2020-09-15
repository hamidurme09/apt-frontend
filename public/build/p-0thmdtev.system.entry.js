var __awaiter=this&&this.__awaiter||function(e,s,t,r){function i(e){return e instanceof t?e:new t((function(s){s(e)}))}return new(t||(t=Promise))((function(t,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r["throw"](e))}catch(e){n(e)}}function l(e){e.done?t(e.value):i(e.value).then(o,a)}l((r=r.apply(e,s||[])).next())}))};var __generator=this&&this.__generator||function(e,s){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,i,n,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(s){return l([e,s])}}function l(o){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(n=o[0]&2?i["return"]:o[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;if(i=0,n)o=[o[0]&2,n.value];switch(o[0]){case 0:case 1:n=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;i=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(n=t.trys,n=n.length>0&&n[n.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!n||o[1]>n[0]&&o[1]<n[3])){t.label=o[1];break}if(o[0]===6&&t.label<n[1]){t.label=n[1];n=o;break}if(n&&t.label<n[2]){t.label=n[2];t.ops.push(o);break}if(n[2])t.ops.pop();t.trys.pop();continue}o=s.call(e,t)}catch(e){o=[6,e];i=0}finally{r=n=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,s=0,t=arguments.length;s<t;s++)e+=arguments[s].length;for(var r=Array(e),i=0,s=0;s<t;s++)for(var n=arguments[s],o=0,a=n.length;o<a;o++,i++)r[i]=n[o];return r};System.register(["./p-c9001ae9.system.js","./p-53678cca.system.js","./p-69f5d316.system.js","./p-32fd337e.system.js","./p-50f9a219.system.js","./p-a55517c8.system.js","./p-5ad401ce.system.js","./p-91aa36d2.system.js","./p-88563aa0.system.js","./p-d452a515.system.js","./p-e4524d85.system.js","./p-bcb23973.system.js"],(function(e){"use strict";var s,t,r,i,n,o,a,l,c;return{setters:[function(e){s=e.r;t=e.c;r=e.h},function(){},function(){},function(){},function(){},function(e){i=e.R},function(){},function(e){n=e.a},function(e){o=e.t},function(){},function(e){a=e.t;l=e.g},function(e){c=e.n}],execute:function(){var u=e("page_home",function(){function e(e){s(this,e);this.prefetching=false;this.size="phone-only";this.isMobile=true;this.luxuryList=[];this.uniqueList=[];this.privateRoomList=[];this.neighborhoods=[];this.neighborhoodsLoaded=false;this.store=t(this,"store")}e.prototype.componentWillLoad=function(){if(this.prefetching){return}this.store.mapStateToProps(this,(function(e){var s=e.screenSize,t=s.size,r=s.isMobile;return{size:t,isMobile:r,displayFilter:n.getDisplayFilter(e),neighborhoods:o.getFeaturedNeighborhoods(e),neighborhoodsLoaded:c.getNeighborhoodsLoaded(e)}}));this.store.mapDispatchToProps(this,{toggleSearchFilterDisplay:a,getNamedSearch:l})};e.prototype.componentDidLoad=function(){var e=this;if(this.prefetching){return}{this.getNamedSearch("homePageInit",{count:8}).then((function(s){e.uniqueList=s.uniqueList;e.privateRoomList=s.privateRoomList;e.luxuryList=s.luxuryList})).catch((function(e){return console.log(e)}))}};e.prototype.launchMobileFilterMenu=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(s){e=Object.assign(document.createElement("ion-modal"),{component:"mobile-filter-menu",cssClass:"app-menu"});document.body.appendChild(e);return[2,e.present()]}))}))};e.prototype.neighborhoodsSlider=function(e){if(e===0){return __spreadArrays(this.neighborhoods)}var s=Math.round(this.neighborhoods.length/2);if(e===1){return this.neighborhoods.slice(0,s)}return this.neighborhoods.slice(s+1)};e.prototype.render=function(){if(this.prefetching){return null}var e="New York City Neighborhoods";var s="Furnished Apartments";if(this.size==="phone-only"){e="Neighborhoods";s="Furnished"}return[r("ion-content",{class:"page-home"},r("app-header-home",{"hide-search-button":true}),r("section",{class:"home-hero"},r("div",{class:"section"},r("div",{class:"hero"},r("div",{class:"hero-child"},r("video",{playsinline:true,autoplay:true,muted:true,loop:true,style:{"max-width":"100%"}},r("source",{src:"/assets/video/home-animation.mp4",type:"video/mp4"}))),r("div",{class:"hero-child info"},r("button",{class:"button-reset market-tab",onClick:function(){return i.forward(i.getRoute("search"))}},s),r("button",{class:"button-reset market-tab",onClick:function(){return i.forward("/coming-soon")}},"Rentals"),r("button",{class:"button-reset market-tab",onClick:function(){return i.forward("/coming-soon")}},"Sales"),r("div",{class:"home-search-wrapper"},r("input",{type:"text",class:"home-search",placeholder:"Search Apartments",onClick:function(){return i.forward(i.getRoute("search"))}}),r("button",{class:"button-reset search-icon"},r("svg",{class:"feather feather-search",viewBox:"0 0 25 24",version:"1.1"},r("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},r("path",{d:"M24,21.1886008 L18.6803754,15.9186997 C19.949079,14.3099652 20.6588954,12.3179013 20.6588954,10.238277 C20.6588954,5.14393658 16.472729,1 11.3303363,1 C6.18621089,1 2,5.14393658 2,10.238277 C2,15.3308573 6.18616646,19.4765539 11.3303363,19.4765539 C13.3071236,19.4765539 15.2318387,18.8457674 16.8196842,17.7010588 L22.1704099,23 L24,21.1886008 Z M11.3302919,16.9140717 C7.61273046,16.9140717 4.58934605,13.9182757 4.58934605,10.238365 C4.58934605,6.55849823 7.61268603,3.56265825 11.3302919,3.56265825 C15.0461205,3.56265825 18.0694605,6.55845423 18.0694605,10.238365 C18.0694605,12.2063608 17.1982293,14.0643123 15.6796059,15.3379854 C14.4664401,16.3537734 12.9218251,16.9140717 11.3302919,16.9140717 Z",fill:"#f5f5f7"}))))))))),r("section",{class:"section no-padding"},r("div",{class:"markets-grid"},r("div",{class:"module"},r("div",{class:"markets-card"},r("lazy-image",{src:"/assets/images/market-furnished.jpg",class:"markets-feature-image"}),r("div",{class:"markets-description"},r("h4",{class:"markets-title"},"Furnished Apartments"),r("p",null,"New York City marketplace for furnished apartments, sublets and short-term rentals. We offer a fresh, simple solution"),r("ion-router-link",{href:i.getRoute("coming-soon"),class:"learn-more"},"Learn More",r("img",{src:"/assets/images/icons/arrow.svg",alt:"",class:"arrow-right"}))))),r("div",{class:"module"},r("div",{class:"markets-card"},r("lazy-image",{src:"/assets/images/market-rentals.jpg",class:"markets-feature-image"}),r("div",{class:"markets-description"},r("h4",{class:"markets-title"},"Rentals"),r("p",null,"New York City marketplace for furnished apartments, sublets and short-term rentals. We offer a fresh, simple solution"),r("ion-router-link",{href:i.getRoute("coming-soon"),class:"learn-more"},"Learn More",r("img",{src:"/assets/images/icons/arrow.svg",alt:"",class:"arrow-right"}))))),r("div",{class:"module"},r("div",{class:"markets-card"},r("lazy-image",{src:"/assets/images/market-sales.jpg",class:"markets-feature-image"}),r("div",{class:"markets-description"},r("h4",{class:"markets-title"},"Sales"),r("p",null,"New York City marketplace for furnished apartments, sublets and short-term rentals. We offer a fresh, simple solution"),r("ion-router-link",{href:i.getRoute("coming-soon"),class:"learn-more"},"Learn More",r("img",{src:"/assets/images/icons/arrow.svg",alt:"",class:"arrow-right"}))))),r("div",{class:"module"},r("div",{class:"markets-card"},r("lazy-image",{src:"/assets/images/market-investments.jpg"}),r("div",{class:"markets-description"},r("h4",{class:"markets-title"},"Investments"),r("p",null,"New York City marketplace for furnished apartments, sublets and short-term rentals. We offer a fresh, simple solution"),r("ion-router-link",{href:i.getRoute("coming-soon"),class:"learn-more"},"Learn More",r("img",{src:"/assets/images/icons/arrow.svg",alt:"",class:"arrow-right"}))))))),r("section",{class:"section"},r("div",{class:"home-about-wrapper"},r("div",{class:"about"},r("div",null,r("h2",null,"What is APT212?"),r("p",null,"APT212 is a New York City marketplace for furnished apartments, sublets and short-term rentals.",r("br",null),r("br",null),"We offer a fresh, simple solution to finding the perfect temporary housing, from private rooms in shared apartments to furnished luxury, high-end rentals."),r("ion-button",{"aria-label":"Find an Agent",class:"static-button last",onClick:function(){i.reload(i.getRoute("coming-soon"))}},"Find an Agent",r("img",{src:"/assets/images/icons/arrow-white.svg",alt:"",class:"arrow-right"})))),r("div",{class:"phone"},r("lazy-image",{src:"/assets/images/phone-home.jpg",class:"markets-feature-image"}))),r("media-logos",null),this.luxuryList.length&&this.neighborhoodsLoaded?r("div",{class:"predefined-search"},r("h2",null,"Sales"),this.isMobile?r("listing-slider",{items:this.luxuryList}):r("listing-list",{items:this.luxuryList})):null,this.uniqueList.length&&this.neighborhoodsLoaded?r("div",{class:"predefined-search"},r("h2",null,"Furnished Apartments"),this.isMobile?r("listing-slider",{items:this.uniqueList}):r("listing-list",{items:this.uniqueList})):null,this.privateRoomList.length&&this.neighborhoodsLoaded?r("div",{class:"predefined-search"},r("h2",null,"Rentals"),this.isMobile?r("listing-slider",{items:this.privateRoomList}):r("listing-list",{items:this.privateRoomList})):null,this.neighborhoods.length&&this.neighborhoodsLoaded?r("div",{class:"predefined-search"},r("h2",null,e),r("div",null,r("neighborhood-slider",{items:this.neighborhoodsSlider(0)}))):null),r("section",{class:"agent-cta"},r("div",{class:"section cta-wrapper"},r("div",{class:"hexagons"},r("lazy-image",{src:"/assets/images/hexagons.jpg",class:"desktop-only"}),r("lazy-image",{src:"/assets/images/hexagons-mobile.jpg",class:"mobile-only"})),r("div",{class:"cta"},r("h3",null,"Work with an Agent"),r("p",null,"APT212 is a New York City marketplace for furnished apartments, sublets and short-term rentals.",r("br",null),r("br",null),"We offer a fresh, simple solution to finding the perfect temporary housing, from private rooms in shared apartments to furnished luxury, high-end rentals."),r("ion-button",{"aria-label":"Find an Agent",class:"static-button last",onClick:function(){i.reload(i.getRoute("coming-soon"))}},"Find an Agent",r("img",{src:"/assets/images/icons/arrow-white.svg",alt:"",class:"arrow-right"}))))),r("app-footer",null))]};Object.defineProperty(e,"style",{get:function(){return".page-home .hero,.page-home .home-hero{background-color:#131414}.page-home .hero{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:80px 0;-ms-flex-align:center;align-items:center}\@media (min-width:1200px){.page-home .hero{-ms-flex-direction:row;flex-direction:row;padding:105px 0}}.page-home .hero .hero-child{position:relative;max-width:540px;max-height:540px}.page-home .hero .hero-child.info{max-width:none;max-height:none;width:100%;-ms-flex-positive:1;flex-grow:1;padding-top:16px}\@media (min-width:1200px){.page-home .hero .hero-child.info{width:auto;padding-top:0;padding-left:129px}}.page-home .hero .market-tab{font-size:20px;color:#f5f5f7;font-weight:400;padding:16px 14px;margin-bottom:-3px}.page-home .hero .market-tab:hover{color:#131414;background:#f5f5f7}.page-home .hero .market-tab:hover~.home-search-wrapper input{background-color:#f5f5f7}.page-home .hero .market-tab:hover~.home-search-wrapper svg *{fill:#131414}.page-home .home-search-wrapper{position:relative}.page-home .home-search-wrapper:hover .home-search{color:#131414;background-color:#f5f5f7}.page-home .home-search-wrapper:hover svg *{fill:#131414}.page-home .home-search-wrapper .search-icon{position:absolute;top:16px;left:16px;width:26px;height:26px}.page-home .home-search{-ms-flex:1;flex:1;width:100%;height:55px;border:2px solid #f5f5f7;background-color:#131414;margin-top:0;padding-left:66px;font-size:18px;color:#f5f5f7}\@media (min-width:1200px){.page-home .home-search{margin-bottom:100px}}.page-home .home-search:focus{outline:none}.page-home .static-button{width:100%;height:50px;font-size:16px;text-transform:none}\@media (min-width:1200px){.page-home .static-button{width:190px}}.page-home .search-dark{background-color:#000;color:#fff;font-weight:700;text-align:center;text-transform:uppercase;width:100%;height:3rem;border-radius:0;margin-top:3rem}.page-home .home-about-wrapper{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}\@media (min-width:1200px){.page-home .home-about-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:center;align-items:center}}.page-home .home-about-wrapper .phone{position:relative;width:192px;margin:0 auto 50px;text-align:center}\@media (min-width:768px){.page-home .home-about-wrapper .phone{width:100%}}\@media (min-width:1200px){.page-home .home-about-wrapper .phone{width:640px;margin-bottom:0}}.page-home .home-about-wrapper .about{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}\@media (min-width:1200px){.page-home .home-about-wrapper .about>div{max-width:471px}}.page-home .home-about-wrapper .about h2{font-family:Proxima Nova W01 Extrabold;font-size:28px;padding-bottom:1rem;text-transform:none;margin:0}.page-home .home-about-wrapper .about p{font-family:Proxima Nova W01 Regular}.page-home .predefined-search{padding-top:0}.page-home .predefined-search h2{margin-bottom:20px}\@media (min-width:1200px){.page-home .predefined-search{padding-top:70px}.page-home .predefined-search h2{margin-bottom:40px}}.page-home .mt-24{margin-top:24px}.page-home .faq{position:relative;margin-top:5rem;height:544px;color:#fff}.page-home .faq .faq-bg{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.page-home .faq .faq-mask{background-color:rgba(0,0,0,.5)}.page-home .faq .faq-content-wrapper,.page-home .faq .faq-mask{position:absolute;top:0;width:100%;height:100%}.page-home .faq .faq-content{display:block;width:100%;height:100%;padding:33px 0}.page-home .faq .faq-content>:first-child{display:none}\@media (min-width:1200px){.page-home .faq .faq-content{display:-ms-flexbox;display:flex;padding:50px 0}.page-home .faq .faq-content>:first-child{display:initial}}.page-home .faq .button-light{font-size:12px}.page-home .faq .title{font-size:48px}.page-home .home-features{padding-top:5rem;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}\@media (min-width:768px){.page-home .home-features{display:grid;grid-gap:40px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}}\@media (min-width:1200px){.page-home .home-features{grid-template-columns:repeat(auto-fill,minmax(400px,1fr))}}.page-home .home-features .home-feature{display:-ms-flexbox;display:flex;padding-bottom:2rem}.page-home .home-features .home-feature lazy-image{min-width:23px;width:23px;height:23px;margin-right:1.5rem}\@media (min-width:1200px){.page-home .home-features .home-feature lazy-image{min-width:36px;width:36px;height:36px}}.page-home .home-features .home-feature .feature-content{max-width:250px}.page-home .home-features .home-feature .feature-content h2{font-size:16px}\@media (min-width:1200px){.page-home .home-features .home-feature .feature-content h2{font-size:24px}}.page-home .markets-grid{padding:0 12px;margin:24px 0 50px}\@media (min-width:768px){.page-home .markets-grid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;justify-items:center;margin:80px 0 80px}}.page-home .module{background:#eaeaea;display:block;margin:0 auto 24px;min-height:368px;max-width:296px;width:100%}\@media (min-width:340px){.page-home .module{max-width:325px}}\@media (min-width:768px){.page-home .module{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:325px;height:368px;max-width:325px;margin-left:5px;margin-right:5px;margin-bottom:200px;-ms-flex:1 1 325px;flex:1 1 325px}}.page-home .markets-card{position:relative;overflow:hidden;height:529px;-webkit-box-shadow:1px 1px 12px 0 rgba(92,92,92,.5);box-shadow:1px 1px 12px 0 rgba(92,92,92,.5);background-color:#fff}\@media (min-width:768px){.page-home .markets-card{max-width:325px;height:529px}}.page-home .markets-card .markets-description{padding:0 14px}.page-home .markets-card .markets-description p{font-family:Proxima Nova W01 Regular}.page-home .markets-card .markets-title{font-family:Proxima Nova W01 Extrabold;width:100%;font-size:20px;font-weight:800;text-transform:none}\@media (min-width:1200px){.page-home .markets-card .markets-title{font-size:24px;font-weight:800;bottom:20px;text-transform:none}}.page-home .markets-card .markets-feature-image{max-width:325px;width:100%;-o-object-fit:cover;object-fit:cover}.page-home .markets-card .learn-more{font-weight:900}.page-home .agent-cta{margin-top:40px}\@media (min-width:320px){.page-home .agent-cta{background-size:320px auto}}\@media (min-width:1200px){.page-home .agent-cta{-ms-flex-align:center;align-items:center;margin:100px 0;min-height:839px}}\@media (min-width:1200px){.page-home .agent-cta,.page-home .agent-cta .cta-wrapper{display:-ms-flexbox;display:flex}}.page-home .agent-cta .hexagons{-ms-flex-positive:1;flex-grow:1;text-align:center}\@media (min-width:1200px){.page-home .agent-cta .hexagons{text-align:left}}.page-home .agent-cta .cta{text-align:left;-ms-flex-item-align:center;align-self:center}\@media (min-width:1200px){.page-home .agent-cta .cta{max-width:513px}}\@media (min-width:1200px){.page-home .agent-cta .mobile-only{display:none}}.page-home .agent-cta .desktop-only{display:none}\@media (min-width:1200px){.page-home .agent-cta .desktop-only{display:block}}.page-home .arrow-right{-webkit-transform:rotate(180deg);transform:rotate(180deg);vertical-align:middle;padding-right:5px}.page-home h2,.page-home h3,.page-home h4{text-transform:none}"},enumerable:true,configurable:true});return e}())}}}));