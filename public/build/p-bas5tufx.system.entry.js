System.register(["./p-c9001ae9.system.js","./p-43b2f790.system.js"],(function(e){"use strict";var t,i,s,a;return{setters:[function(e){t=e.r;i=e.c;s=e.h},function(e){a=e.M}],execute:function(){var n=e("page_agent",function(){function e(e){t(this,e);this.size="phone-only";this.isMobile=true;this.store=i(this,"store")}e.prototype.componentWillLoad=function(){this.store.mapStateToProps(this,(function(e){var t=e.screenSize,i=t.size,s=t.isMobile;return{size:i,isMobile:s}}))};e.prototype.render=function(){return[s("ion-content",{class:"page-agent"},s("app-header-home",{"hide-search-button":true}),s("section",{class:"section"},s("div",{class:"section-agent"},s("div",{class:"agent-left"},s("lazy-image",{src:"/assets/images/agent-page/business-woman.png",alt:"background image",class:"imageAgent"}),this.size!=="phone-only"?s("ion-button",{color:"#fff"},"Watch Video",s("svg",{class:"watch-icon",xmlns:"http://www.w3.org/2000/svg",width:"17",height:"20",viewBox:"0 0 17 20"},s("g",{fill:"none","fill-rule":"evenodd"},s("g",{fill:"#131414"},s("g",null,s("g",null,s("path",{d:"M110 0L118.539 4.96 127 9.999 118.539 14.96 110 20z",transform:"translate(-447 -587) translate(100 552) translate(237 35)"}))))))):""),s("div",{class:"agent-right"},s("div",{class:"agent-right-person"},s("h2",null,"Sophia William"),s("p",null,"Licensed Real Estate Sales Person")),s("div",{class:"agent-right-descriptionTop"},s("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),s("p",null,"text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populari")),this.size=="phone-only"?s("ion-button",{color:"#fff"},"Watch Video",s("svg",{class:"watch-icon",xmlns:"http://www.w3.org/2000/svg",width:"17",height:"20",viewBox:"0 0 17 20"},s("g",{fill:"none","fill-rule":"evenodd"},s("g",{fill:"#131414"},s("g",null,s("g",null,s("path",{d:"M110 0L118.539 4.96 127 9.999 118.539 14.96 110 20z",transform:"translate(-447 -587) translate(100 552) translate(237 35)"}))))))):"",s("div",{class:"workButton"},s("button",{"aria-label":"Work With Sophia",class:"workBtn",onClick:function(){return a.WorkWithAgent()}},"Work With Sophia"))))),s("section",{class:"section"},s("h2",{class:"agent-card-header"},"Sophia William’s Listings"),s("div",null,s("h2",{class:"agent-card-title"},"Sales Listings"),this.isMobile?s("agent-slider",{items:[1,2,3,4,5,6,7,8]}):s("agent-list",{items:[1,2,3,4,5,6,7,8]})),s("div",{class:"agent-card-mt"},s("h2",{class:"agent-card-title"},"Rentals Listings"),this.isMobile?s("agent-slider",{items:[1,2,3,4,5,6,7,8]}):s("agent-list",{items:[1,2,3,4,5,6,7,8]})),s("div",{class:"agent-card-mt"},s("h2",{class:"agent-card-title"},"Furnished Apartments Listings"),this.isMobile?s("agent-slider",{items:[1,2,3,4,5,6,7,8]}):s("agent-list",{items:[1,2,3,4,5,6,7,8]}))),s("h2",{class:"agent-card-recentTransaction"},"Sophia William’s Recent Transactions"),s("section",{class:"section"},this.isMobile?s("agent-slider",{items:[1,2,3,4,5,6,7,8]}):s("agent-list",{items:[1,2,3,4,5,6,7,8]}),s("div",{class:"workButton"},s("button",{"aria-label":"Work With Sophia",class:"workBtn",onClick:function(){return a.WorkWithAgent()}},"Work With Sophia"))),s("section",{class:"section section-rating-review"},s("div",{class:"rating-review"},s("h2",{class:"rating-review-header"},"Ratings & Reviews"),s("p",{class:"all-review"},"All Reviews"),[1,2].map((function(e){return s("div",{class:"review"},s("div",{class:"star-date"},s("div",{class:"star-rating"},s("star-rating",{stars:5,size:25,rating:4,readonly:true,color:"#131414"})),s("p",{class:"date"},"June 7, 2020")),s("h2",{class:"recommend"},"Highly ",s("span",null,"recommend")),s("p",{class:"comment"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. –",s("span",{class:"commenter"},"R.Kedmi. ")))})),s("div",{class:"load-more"},s("p",null,"Load More Reviews "),s("img",{src:"/assets/images/icons/arrow-right.png",alt:"arrow-right",class:"arrow-right"})),s("div",{class:"review-btn"},s("ion-button",{color:"#fff"},"Write a Review")))),s("app-footer",null))]};Object.defineProperty(e,"style",{get:function(){return".page-agent h2,.page-agent p{margin:0}.page-agent h2{font-size:20px;color:#131414;text-transform:capitalize}\@media (min-width:768px){.page-agent h2{font-size:28px}}.page-agent .section-agent{padding:50px 0 40px 0;display:grid}\@media (min-width:768px){.page-agent .section-agent{grid-gap:136px;grid-template-columns:repeat(auto-fill,minmax(500px,1fr));padding:50px 20px 100px 20px}}.page-agent .section-agent .agent-left .imageAgent{width:90%;height:185px;padding:0 18px}\@media (min-width:768px){.page-agent .section-agent .agent-left .imageAgent{height:360px;width:100%;padding:0}}.page-agent .section-agent .agent-left ion-button{width:100%;height:90px;color:#131414;font-size:16px;font-weight:700;margin-top:32px;text-transform:capitalize;border:1px solid #131414;cursor:pointer}.page-agent .section-agent .agent-left .watch-icon{margin-left:10px}.page-agent .section-agent .agent-right .agent-right-person{width:90%;padding:0 18px}.page-agent .section-agent .agent-right .agent-right-person h2{padding-bottom:8px;padding-top:16px}.page-agent .section-agent .agent-right .agent-right-person p{padding-bottom:8px}\@media (min-width:768px){.page-agent .section-agent .agent-right .agent-right-person{width:100%;padding:0}.page-agent .section-agent .agent-right .agent-right-person h2{padding:0;padding-bottom:8px}.page-agent .section-agent .agent-right .agent-right-person p{font-size:20px;padding-bottom:40px}}.page-agent .section-agent .agent-right .agent-right-descriptionTop p{padding-bottom:25px}.page-agent .section-agent .agent-right ion-button{width:100%;height:55px;color:#131414;font-size:16px;font-weight:700;text-transform:capitalize;border:1px solid #131414;cursor:pointer}.page-agent .section-agent .agent-right .watch-icon{margin-left:10px}.page-agent .section-agent .agent-right .workButton{text-align:center;margin-top:15px}\@media (min-width:768px){.page-agent .section-agent .agent-right .workButton{margin-top:7px}}.page-agent .section-agent .agent-right .workButton .workBtn{width:100%;height:55px;background-color:#131414;font-size:16px;color:#f5f5f7;border-radius:0;font-weight:700;text-align:center;text-transform:capitalize}\@media (min-width:768px){.page-agent .section-agent .agent-right .workButton .workBtn{width:182px;height:50px}}.page-agent .agent-card-header,.page-agent .rating-review-header{text-align:center;margin-bottom:16px;text-transform:capitalize}\@media (min-width:768px){.page-agent .agent-card-header,.page-agent .rating-review-header{margin-bottom:32px}}.page-agent .agent-card-title{text-transform:capitalize}\@media (min-width:768px){.page-agent .agent-card-title{margin-bottom:22px}}\@media (min-width:768px){.page-agent .agent-card-mt{margin-top:60px}}.page-agent .agent-card-recentTransaction{text-align:center;text-transform:capitalize;background-color:#f0f0f0;padding:6px 10px;margin-top:0;margin-bottom:0}\@media (min-width:768px){.page-agent .agent-card-recentTransaction{padding:43px 0;margin-top:80px;margin-bottom:32px}}.page-agent .workButton{text-align:center}\@media (min-width:768px){.page-agent .workButton{margin-top:32px}}.page-agent .workButton .workBtn{width:100%;height:55px;background-color:#131414;font-size:16px;color:#f5f5f7;border-radius:0;font-weight:700;text-align:center;text-transform:capitalize}\@media (min-width:768px){.page-agent .workButton .workBtn{width:182px;height:50px}}.page-agent .section-rating-review .rating-review{max-width:780px;margin:40px auto 0 auto}\@media (min-width:768px){.page-agent .section-rating-review .rating-review{margin:100px auto 0 auto}}.page-agent .section-rating-review .rating-review-header{margin-bottom:24px}\@media (min-width:768px){.page-agent .section-rating-review .rating-review-header{margin-bottom:40px}}.page-agent .section-rating-review .all-review{font-weight:700;font-size:16px;margin-bottom:16px}\@media (min-width:768px){.page-agent .section-rating-review .all-review{font-size:20px;margin-bottom:30px}}.page-agent .section-rating-review .review{margin-bottom:40px}.page-agent .section-rating-review .review:last-of-type{margin-bottom:0}\@media (min-width:768px){.page-agent .section-rating-review .review{margin-bottom:80px}}.page-agent .section-rating-review .star-date{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:16px}\@media (min-width:768px){.page-agent .section-rating-review .star-date{margin-bottom:25px}}.page-agent .section-rating-review .star-rating{display:inline-block;white-space:nowrap}.page-agent .section-rating-review .date{color:#9a9a9c}.page-agent .section-rating-review .recommend{margin-bottom:16px}.page-agent .section-rating-review .recommend span{text-transform:lowercase}.page-agent .section-rating-review .commenter{font-weight:700}.page-agent .section-rating-review .load-more{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:700;cursor:pointer;margin-top:-25px}\@media (min-width:768px){.page-agent .section-rating-review .load-more{margin-top:-45px}}.page-agent .section-rating-review .arrow-right{margin-top:3px;margin-left:7px}.page-agent .section-rating-review .review-btn{text-align:center}.page-agent .section-rating-review .review-btn ion-button{height:50px;width:100%;margin-top:16px;color:#131414;font-size:16px;font-weight:700;text-transform:capitalize;border:1px solid #131414;cursor:pointer}\@media (min-width:768px){.page-agent .section-rating-review .review-btn ion-button{width:155px;margin-top:32px}}"},enumerable:true,configurable:true});return e}())}}}));