import{w as i}from"./p-f5b6b644.js";const a="ionViewWillLeave",n="ionViewDidLeave",e="ionViewWillUnload",o=a=>new Promise((n,e)=>{i(()=>{s(a),t(a).then(i=>{i.animation&&i.animation.destroy(),c(a),n(i)},i=>{c(a),e(i)})})}),s=i=>{const a=i.enteringEl,n=i.leavingEl;g(a,n,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),y(a,!1),n&&y(n,!1)},t=async i=>{const a=await r(i);return a?p(a,i):w(i)},c=i=>{const a=i.leavingEl;i.enteringEl.classList.remove("ion-page-invisible"),void 0!==a&&a.classList.remove("ion-page-invisible")},r=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await(()=>__sc_import_app("./p-ccd913c1.js"))()).iosTransitionAnimation:(await(()=>__sc_import_app("./p-d40fb3ef.js"))()).mdTransitionAnimation},p=async(i,a)=>{let n;await d(a,!0);try{const e=await __sc_import_app("./p-559f1738.js");n=await e.create(i,a.baseEl,a)}catch(e){n=i(a.baseEl,a)}m(a.enteringEl,a.leavingEl);const e=await b(n,a);return a.progressCallback&&a.progressCallback(void 0),e&&u(a.enteringEl,a.leavingEl),{hasCompleted:e,animation:n}},w=async i=>{const a=i.enteringEl,n=i.leavingEl;return await d(i,!1),m(a,n),u(a,n),{hasCompleted:!0}},d=async(i,a)=>{const n=(void 0!==i.deepWait?i.deepWait:a)?[f(i.enteringEl),f(i.leavingEl)]:[_(i.enteringEl),_(i.leavingEl)];await Promise.all(n),await l(i.viewIsReady,i.enteringEl)},l=async(i,a)=>{i&&await i(a)},b=(i,a)=>{const n=a.progressCallback,e=new Promise(a=>{i.onFinish(n=>{"number"==typeof n?a(1===n):void 0!==i.hasCompleted&&a(i.hasCompleted)})});return n?(i.progressStart(!0),n(i)):i.play(),e},m=(i,a)=>{v(a,"ionViewWillLeave"),v(i,"ionViewWillEnter")},u=(i,a)=>{v(i,"ionViewDidEnter"),v(a,"ionViewDidLeave")},v=(i,a)=>{if(i){const n=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},_=i=>i&&i.componentOnReady?i.componentOnReady():Promise.resolve(),f=async i=>{const a=i;if(a){if(null!=a.componentOnReady&&null!=await a.componentOnReady())return;await Promise.all(Array.from(a.children).map(f))}},y=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},g=(i,a,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==a&&(a.style.zIndex="100")},h=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{e as L,a,n as b,f as d,h as g,v as l,y as s,o as t};