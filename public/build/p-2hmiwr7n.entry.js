import{r as s,c as i,h as t}from"./p-f5b6b644.js";import"./p-1ba263c2.js";import"./p-5628850f.js";import"./p-74149bb1.js";import{f as r}from"./p-08706a58.js";import{g as o}from"./p-15e55934.js";import{t as a}from"./p-7295e390.js";import{r as e}from"./p-2e71a8a9.js";const h=class{constructor(t){s(this,t),this.neighborhoods=[],this.bedroomTypes=[],this.buildingTypes=[],this.store=i(this,"store")}componentWillLoad(){this.store.mapStateToProps(this,s=>({neighborhoods:a.getNeighborhoods(s),bedroomTypes:a.getBedroomTypes(s),buildingTypes:a.getBuildingTypes(s)})),this.store.mapDispatchToProps(this,{removeFromWishlist:e})}getImageURL(){return console.log(this.item.images),this.item.images.length?this.item.images[0].medium:"/assets/images/placeholder/apt1.jpeg"}removeWishlist(){this.removeFromWishlist([this.item.id])}render(){let s=a.getNeighborhoodById(this.item.neighborhood_ids[0],this.neighborhoods);s||(s={name:"Unknown Neighborhood"});const i=a.getBedroomTypeById(this.item.bedroom_type_id,this.bedroomTypes),e=a.getBuildingTypeById(this.item.building_type_id,this.buildingTypes);let h;return h=0===this.item.images.length?[{src:this.getImageURL(),alt:this.item.street_address}]:this.item.images.map((s,i)=>({src:s.small,alt:`${this.item.street_address} image ${i+1}`})),t("div",{class:"wishlist-card-component"},h.length?t("div",{class:"gallery"},t("maintain-ratio",{width:377,height:251},t("inline-gallery",{images:h}))):null,t("div",{class:"info"},t("h4",{class:"listing-title"},t("ion-router-link",{href:this.item.url_path},this.item.cross_streets)),t("div",{class:"neighborhood"},t("ion-router-link",{href:this.item.url_path},s.name)),t("div",{class:"price"},t("ion-router-link",{href:this.item.url_path},r(this.item.rate)," /month")),t("div",{class:"bed-bath"},t("div",null,t("lazy-image",{src:"/assets/images/icons/bedroom.svg",class:"bedrooms",alt:"bedroom"})," ",o(i)),t("div",{class:"divider"},"|"),t("div",null,t("lazy-image",{src:"/assets/images/icons/bathroom.svg",class:"bathrooms",alt:"bathroom"})," ",this.item.bathrooms," Bathroom")),t("div",{class:"rating-amenities"},t("div",{class:"amenities"},e.name),t("star-rating",{stars:5,size:18,rating:e.rating,readonly:!0})),t("ion-router-link",{class:"button-dark view-apt",href:this.item.url_path},"VIEW APARTMENT"),t("ion-router-link",{class:"button-dark view-apt",onClick:()=>this.removeWishlist()},"REMOVE FROM WISHLIST")))}static get style(){return"\@media (min-width:1200px){.wishlist-card-component{padding:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}}.wishlist-card-component .gallery{width:100%;--inline-gallery-controls-bottom:20px;--inline-gallery-controls-right:20px}\@media (min-width:1200px){.wishlist-card-component .gallery{width:377px;height:251px;margin-right:36px}}\@media (min-width:1200px){.wishlist-card-component .info{width:340px}}.wishlist-card-component .listing-title{margin-top:10px;padding-top:0;margin-bottom:5px;height:28px;position:relative}\@media (min-width:1200px){.wishlist-card-component .listing-title{margin-top:-10px}}.wishlist-card-component .listing-title ion-router-link{position:absolute;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:26px;text-transform:none}.wishlist-card-component .neighborhood{margin-bottom:10px;font-size:16px}.wishlist-card-component .available,.wishlist-card-component .price{font-size:16px;padding-bottom:4px}.wishlist-card-component .bed-bath{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:16px;padding-bottom:4px}\@media (min-width:1200px){.wishlist-card-component .bed-bath{font-size:16px}}.wishlist-card-component .bed-bath>div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;white-space:nowrap}.wishlist-card-component .bed-bath .divider{padding:0 1rem}\@media (min-width:1200px){.wishlist-card-component .bed-bath .divider{padding:0 .5rem}}.wishlist-card-component .bathrooms,.wishlist-card-component .bedrooms{width:1rem;height:1rem;margin-right:.5rem}.wishlist-card-component .rating-amenities{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:16px}\@media (min-width:1200px){.wishlist-card-component .rating-amenities{font-size:16px}}.wishlist-card-component .rating-amenities .amenities{padding-right:.5rem;padding-bottom:4px}.wishlist-card-component .view-apt{display:-ms-flexbox;display:flex;height:44px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0;font-size:12px;margin-top:16px;cursor:pointer}"}};export{h as wishlist_card};