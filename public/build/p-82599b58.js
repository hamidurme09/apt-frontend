import{c as e,u as t}from"./p-74149bb1.js";var n=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r){return{configurable:!0,enumerable:r.enumerable,get:function(){return Object.defineProperty(this,n,{configurable:!0,enumerable:r.enumerable,value:u(r.value,e)}),this[n]}}}},t.debounce=u;var n=500;function u(e){var t=arguments.length<=1||void 0===arguments[1]?n:arguments[1],u=void 0;function r(){for(var n=this,o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];r.clear(),u=setTimeout((function(){u=null,e.apply(n,c)}),t)}return r.clear=function(){u&&(clearTimeout(u),u=null)},r}t.DEFAULT_DEBOUNCE_DURATION=n}));t(n);const u=t(e((function(e,t){function u(e,t){for(var n=Object.getOwnPropertyNames(t),u=0;u<n.length;u++){var r=n[u],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}Object.defineProperty(t,"__esModule",{value:!0});var r,o,c=(r=n)&&r.__esModule?r:{default:r};t.default=c.default,u(t,(delete(o=u({},n)).default,o))})));export{u as D};