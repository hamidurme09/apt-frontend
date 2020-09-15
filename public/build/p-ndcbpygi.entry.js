import{r as o,c as i,h as e}from"./p-f5b6b644.js";import"./p-1ba263c2.js";import"./p-19ec51eb.js";import"./p-811a61b7.js";import{a as n}from"./p-5444f5ad.js";import{R as r}from"./p-9d127c97.js";import{l as s}from"./p-01abdf5a.js";const t=class{constructor(e){o(this,e),this.expandPages=!1,this.isLoggedIn=!1,this.store=i(this,"store")}componentWillRender(){this.store.mapStateToProps(this,o=>({isLoggedIn:n.isLoggedIn(o)})),this.store.mapDispatchToProps(this,{logout:s})}closeMenu(){const o=document.querySelector("ion-modal.site-menu"),i=document.querySelector("apt212-slideover.site-menu");o&&o.dismiss(),i&&i.dismiss()}render(){return[e("div",{class:"app-menu-mobile"},e("div",{class:"main-menu"},e("ion-router-link",{href:r.getRoute("search"),onClick:()=>this.closeMenu()},"Furnished Apartments"),e("ion-router-link",{href:"/coming-soon",onClick:()=>this.closeMenu()},"Rentals"),e("ion-router-link",{href:"/coming-soon",onClick:()=>this.closeMenu()},"Sales"),e("ion-router-link",{href:"/coming-soon",onClick:()=>this.closeMenu()},"Investments"),e("div",{class:"separator"}),e("ion-router-link",{href:r.getRoute("referral"),onClick:()=>this.closeMenu()},"Referrals"),e("ion-router-link",{href:"/agent",onClick:()=>this.closeMenu()},"Agents"),e("ion-router-link",{href:r.getRoute("booking"),onClick:()=>this.closeMenu()},"Booking"),e("ion-router-link",{href:r.getRoute("faq"),onClick:()=>this.closeMenu()},"FAQ"),e("button",{class:"reset expandable",onClick:()=>this.expandPages=!this.expandPages},"More Pages",e("ion-icon",{mode:"md",name:"md-arrow-dropdown",class:{"expand-indicator":!0,expanded:this.expandPages}})),this.expandPages?e("div",{class:"subsection"},e("ion-router-link",{href:r.getRoute("neighborhoods"),onClick:()=>this.closeMenu()},"Neighborhoods Guide"),e("ion-router-link",{href:r.getRoute("private-rooms"),onClick:()=>this.closeMenu()},"Private Rooms"),e("ion-router-link",{href:r.getRoute("corporate-rooms"),onClick:()=>this.closeMenu()},"Corporate Accounts"),e("ion-router-link",{href:r.getRoute("blog"),onClick:()=>this.closeMenu()},"APT212 Blog")):null,this.isLoggedIn?e("ion-router-link",{href:"/",onClick:()=>{this.logout(),this.closeMenu()}},"Log Out"):null))]}static get style(){return".app-menu-mobile .main-menu{position:relative;padding-top:1rem;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;justify-items:center;-ms-flex-pack:center;justify-content:center;text-align:right;font-size:16px}.app-menu-mobile .main-menu button.expandable,.app-menu-mobile .main-menu ion-router-link{position:relative;font-weight:600;padding:0 0 .25rem 0;margin-bottom:1.25rem;text-transform:capitalize;border-bottom:4px solid transparent;background:transparent;font-size:12px}\@media (min-width:768px){.app-menu-mobile .main-menu button.expandable,.app-menu-mobile .main-menu ion-router-link{font-size:16px}}.app-menu-mobile .main-menu button.expandable:after,.app-menu-mobile .main-menu ion-router-link:after{content:\"\";position:absolute;width:100%;height:3px;bottom:-2px;left:0;background-color:#000;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}.app-menu-mobile .main-menu button.expandable:hover:after,.app-menu-mobile .main-menu ion-router-link:hover:after{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}.app-menu-mobile .main-menu button.expandable:last-child,.app-menu-mobile .main-menu ion-router-link:last-child{margin-bottom:.5rem}.app-menu-mobile .main-menu button.expandable:focus,.app-menu-mobile .main-menu ion-router-link:focus{outline:none}.app-menu-mobile .main-menu ion-button{min-height:48px}.app-menu-mobile .separator{border-top:1px solid #000;margin-bottom:1.75rem;width:40%}.app-menu-mobile .subsection{padding:16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;margin-bottom:.5rem}.app-menu-mobile .expand-indicator{margin-left:6px;font-size:18px;margin-bottom:-4px}.app-menu-mobile .expand-indicator.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}"}};export{t as app_menu_mobile};