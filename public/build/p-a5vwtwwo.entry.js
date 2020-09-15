import{r as s,c as t,h as i}from"./p-f5b6b644.js";import"./p-1ba263c2.js";import"./p-19ec51eb.js";import"./p-811a61b7.js";import"./p-5628850f.js";import"./p-74149bb1.js";import{R as e}from"./p-9d127c97.js";import"./p-08706a58.js";import{w as r}from"./p-a98ad3e7.js";import{r as l}from"./p-2e71a8a9.js";import{A as h}from"./p-d2e35ecb.js";const a=class{constructor(i){s(this,i),this.wishlist=[],this.loaded=!1,this.apartments=[],this.hasLoaded=!1,this.store=t(this,"store")}componentWillLoad(){this.store.mapStateToProps(this,s=>({wishlist:r.getWishlist(s)})),this.store.mapDispatchToProps(this,{removeFromWishlist:l})}async componentDidLoad(){await this.syncWishlist(),this.loaded=!0}wishlistChanged(){this.loaded&&this.syncWishlist()}async syncWishlist(){if(this.wishlist.length)try{const s=await h.getApartments(this.wishlist),t=this.wishlist.filter(t=>!s.find(s=>s.id===t));t.length&&this.removeFromWishlist(t),this.apartments=s}catch(s){console.log(s)}else this.apartments=[]}render(){return[i("ion-content",null,i("app-header",null),i("div",{class:"page-wishlist"},i("section",{class:"section"},i("h1",{class:"title text-center"},"Wishlist"),i("h2",{class:"subtitle text-center desktop-only"},"These are your selected apartments"),i("h2",{class:"subtitle text-center mobile-only"},"This is your wishlist"),this.loaded?null:i("div",{class:"text-center"},i("ion-spinner",{name:"lines"})),this.loaded&&!this.apartments.length?i("div",{class:"text-center"},"Your wishlist is empty.",i("br",null),i("br",null),"Search for listings that match your criteria, then add them to your wishlist.",i("br",null),i("br",null),i("ion-router-link",{href:e.getRoute("search"),class:"button-dark"},"SEARCH")):null,this.loaded&&this.apartments.length?i("div",{class:"wishlist"},this.apartments.map(s=>i("wishlist-card",{item:s}))):null)),i("app-footer",null))]}static get watchers(){return{wishlist:["wishlistChanged"]}}static get style(){return".page-wishlist .title{font-family:proxima-nova,sans-serif;font-size:32px;font-weight:600;text-transform:none}\@media (min-width:1200px){.page-wishlist .title{font-size:42px}}.page-wishlist .subtitle{font-size:16px;font-weight:400;text-transform:none;margin-bottom:2rem}\@media (min-width:1200px){.page-wishlist .subtitle{font-size:24px}}\@media (min-width:1200px){.page-wishlist .wishlist{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}}.page-wishlist .wishlist wishlist-card:not(:first-child){display:block;margin-top:12px}\@media (min-width:1200px){.page-wishlist .wishlist wishlist-card:not(:first-child){margin-top:36px}}\@media (min-width:1200px){.page-wishlist .mobile-only{display:none}}.page-wishlist .desktop-only{display:none}\@media (min-width:1200px){.page-wishlist .desktop-only{display:block}}"}};export{a as page_wishlist};