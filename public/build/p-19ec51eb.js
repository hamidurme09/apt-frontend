class t{constructor(){this.init()}static getInstance(){return t.instance||(t.instance=new t),t.instance}init(){if(!window)return;const t=window;this.m=new Map(Object.entries(t.StencilApp.config))}get(t,n){const s=this.m.get(t);return void 0!==s?s:n}}export{t as E};