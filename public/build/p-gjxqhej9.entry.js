import{r as i,c as t,h as s}from"./p-f5b6b644.js";import"./p-19ec51eb.js";import"./p-811a61b7.js";import"./p-74149bb1.js";import{a as n}from"./p-5444f5ad.js";import{R as e}from"./p-9d127c97.js";import"./p-08706a58.js";import{A as a}from"./p-d2e35ecb.js";const o=class{constructor(s){i(this,s),this.isLoggedIn=!1,this.isAdmin=!1,this.loaded=!1,this.store=t(this,"store")}async componentWillLoad(){this.store.mapStateToProps(this,i=>({isLoggedIn:n.isLoggedIn(i),isAdmin:n.isAdmin(i)})),this.isLoggedIn?this.isAdmin||e.forward("/"):e.forward("/login");try{const i=await a.getApartment(this.apartmentId);i&&i.hasOwnProperty("id")&&i.id===this.apartmentId&&(this.item=i,this.loaded=!0)}catch(i){this.loaded=!0}}render(){return[s("admin-header",null),s("ion-content",{class:"page-admin-listing-edit"},s("section",{class:"section"},this.loaded&&this.item?s("listing-edit-form",{item:this.item}):null,this.loaded&&this.item?null:s("div",{class:"text-center"},s("ion-spinner",{name:"lines"}))))]}static get style(){return".page-admin-listing-edit>section{padding-bottom:32px}"}};export{o as page_admin_listing_edit};