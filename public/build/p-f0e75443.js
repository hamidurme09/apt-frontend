import{c as t}from"./p-39c54535.js";const n=()=>t().easing("cubic-bezier(0.0, 0.0, 0.2, 1)").duration(300),r=r=>{let a,e;const s=r.width+8,i=t(),o=t();return r.isEndSide?(a=s+"px",e="0px"):(a=-s+"px",e="0px"),i.addElement(r.menuInnerEl).fromTo("transform",`translateX(${a})`,`translateX(${e})`),o.addElement(r.backdropEl).fromTo("opacity",.01,.32),n().addAnimation([i,o])},a=r=>{let a,e;const s=r.width;r.isEndSide?(a=-s+"px",e=s+"px"):(a=s+"px",e=-s+"px");const i=t().addElement(r.menuInnerEl).fromTo("transform",`translateX(${e})`,"translateX(0px)"),o=t().addElement(r.contentEl).fromTo("transform","translateX(0px)",`translateX(${a})`),c=t().addElement(r.backdropEl).fromTo("opacity",.01,.32);return n().addAnimation([i,c,o])},e=r=>{const a=r.width*(r.isEndSide?-1:1)+"px",e=t().addElement(r.contentEl).fromTo("transform","translateX(0px)",`translateX(${a})`);return n().addAnimation(e)},s=(()=>{const t=new Map,n=[],s=async t=>{if(await w(),"start"===t||"end"===t){return l(n=>n.side===t&&!n.disabled)||l(n=>n.side===t)}if(null!=t)return l(n=>n.menuId===t);return l(t=>!t.disabled)||(n.length>0?n[0].el:void 0)},i=async()=>(await w(),u()),o=(n,r)=>{t.set(n,r)},c=t=>{const r=t.side;n.filter(n=>n.side===r&&n!==t).forEach(t=>t.disabled=!0)},u=()=>l(t=>t._isOpen),p=()=>n.some(t=>t.isAnimating),l=t=>{const r=n.find(t);if(void 0!==r)return r.el},w=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()));return o("reveal",e),o("push",a),o("overlay",r),{registerAnimation:o,get:s,getMenus:async()=>(await w(),(()=>n.map(t=>t.el))()),getOpen:i,isEnabled:async t=>{const n=await s(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const r=await s(n);return r&&(r.swipeGesture=t),r},isAnimating:async()=>(await w(),p()),isOpen:async t=>{if(null!=t){const n=await s(t);return void 0!==n&&n.isOpen()}return void 0!==await i()},enable:async(t,n)=>{const r=await s(n);return r&&(r.disabled=!t),r},toggle:async t=>{const n=await s(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?s(t):i());return void 0!==n&&n.close()},open:async t=>{const n=await s(t);return!!n&&n.open()},_getOpenSync:u,_createAnimation:(n,r)=>{const a=t.get(n);if(!a)throw new Error("animation not registered");return a(r)},_register:t=>{n.indexOf(t)<0&&(t.disabled||c(t),n.push(t))},_unregister:t=>{const r=n.indexOf(t);r>-1&&n.splice(r,1)},_setOpen:async(t,n,r)=>{if(p())return!1;if(n){const n=await i();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,r)},_setActiveMenu:c}})();export{s as m};