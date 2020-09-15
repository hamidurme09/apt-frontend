System.register(["./p-c9001ae9.system.js","./p-69f5d316.system.js","./p-50f9a219.system.js","./p-c57ab675.system.js","./p-5ad401ce.system.js","./p-88563aa0.system.js"],(function(e){"use strict";var t,o,n,i,r,a,s,p;return{setters:[function(e){t=e.r;o=e.c;n=e.h;i=e.d},function(e){r=e.E},function(){},function(e){a=e.S},function(e){s=e.g},function(e){p=e.t}],execute:function(){var m=e("neighborhood_map",function(){function e(e){t(this,e);this.mapId="map-instance-"+s(8);this.map=null;this.mapRendered=false;this.neighborhoods=[];this.store=o(this,"store")}e.prototype.componentDidLoad=function(){this.store.mapStateToProps(this,(function(e){return{neighborhoods:p.getNeighborhoods(e)}}))};e.prototype.componentDidRender=function(){if(!this.mapRendered){this.initializeMap()}};e.prototype.initializeMap=function(){var e=this;if(this.map){this.map.remove();this.map=null}a.loadScript("mapbox","https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").then((function(){mapboxgl.accessToken=r.getInstance().get("MAPBOX_PUBLIC_TOKEN");e.map=new mapboxgl.Map({container:e.mapId,style:"mapbox://styles/mapbox/streets-v11",center:e.item.center,zoom:15,minZoom:10,maxZoom:17,scrollZoom:false});e.map.dragPan.disable();e.map.touchZoomRotate.disable();e.map.addControl(new mapboxgl.NavigationControl);e.map.on("load",(function(){e.mapRendered=true;e.map.addLayer({id:"neighborhood-outline-"+e.item.id,type:"line",source:{type:"geojson",data:{type:"Feature",geometry:{type:"Polygon",coordinates:e.item.perimeter_coordinates}}},layout:{},paint:{"line-color":"#000","line-opacity":.7,"line-width":2}});e.map.addLayer({id:"neighborhood-fill-"+e.item.id,type:"fill",source:{type:"geojson",data:{type:"Feature",geometry:{type:"Polygon",coordinates:e.item.perimeter_coordinates}}},layout:{},paint:{"fill-color":"#000","fill-opacity":.2}})}))}))};e.prototype.render=function(){return n("div",{class:"listing-map-component"},n("div",{id:this.mapId}))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".listing-map-component{width:100%;height:632px}.listing-map-component>div{width:100%;height:100%}.listing-map-component .listing-marker{font-size:26px;font-weight:700}.listing-map-component .mapboxgl-popup-content{border-radius:5px;-webkit-box-shadow:0 2px 7px 0 hsla(0,0%,74.1%,.5);box-shadow:0 2px 7px 0 hsla(0,0%,74.1%,.5);border:2px solid #747474;padding:10px}"},enumerable:true,configurable:true});return e}());var c=e("neighborhood_tags",function(){function e(e){t(this,e);this.items=[]}e.prototype.render=function(){return[n("div",{class:"neighborhood-tag-list"},n("div",{class:"tags"},this.items.map((function(e){return n("div",{class:"tag"},e)}))))]};Object.defineProperty(e,"style",{get:function(){return".neighborhood-tag-list{display:-ms-flexbox;display:flex;-ms-flex-wrap:no-wrap;flex-wrap:no-wrap;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}.neighborhood-tag-list .tags{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;display:-ms-flexbox;display:flex;-ms-flex-pack:left;justify-content:left;-ms-flex-wrap:wrap;flex-wrap:wrap}\@media (min-width:768px){.neighborhood-tag-list .tags{-ms-flex-pack:end;justify-content:flex-end}}.neighborhood-tag-list .tag{display:inline-block;background-color:#eaebf0;text-align:center;margin-right:16px;margin-bottom:16px;padding:7px 12px 7px 13px;font-size:16px;text-transform:uppercase}\@media (min-width:768px){.neighborhood-tag-list .tag{margin-right:0;margin-left:16px;margin-bottom:16px}}"},enumerable:true,configurable:true});return e}())}}}));