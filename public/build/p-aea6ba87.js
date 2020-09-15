var n=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};var r={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},t="{",i="}",e={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",o="@media",s="@";function f(n,r,t){n.lastIndex=0;var i=r.substring(t).match(n);if(i){var e=t+i.index;return{start:e,end:e+i[0].length}}return null}var a=/\bvar\(/,c=/\B--[\w-]+\s*:/,v=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,h=/^[\t ]+\n/gm;function l(n,r,t){var i=function(n,r){var t=f(a,n,r);if(!t)return null;var i=function(n,r){for(var t=0,i=r;i<n.length;i++){var e=n[i];if("("===e)t++;else if(")"===e&&--t<=0)return i+1}return i}(n,t.start),e=n.substring(t.end,i-1).split(","),u=e[0],o=e.slice(1);return{start:t.start,end:i,propName:u.trim(),fallback:o.length>0?o.join(",").trim():void 0}}(n,t);if(!i)return r.push(n.substring(t,n.length)),n.length;var e=i.propName,u=null!=i.fallback?g(i.fallback):void 0;return r.push(n.substring(t,i.start),(function(n){return function(n,r,t){return n[r]?n[r]:t?m(t,n):""}(n,e,u)})),i.end}function m(n,r){for(var t="",i=0;i<n.length;i++){var e=n[i];t+="string"==typeof e?e:e(r)}return t}function p(n,r){for(var t=!1,i=!1,e=r;e<n.length;e++){var u=n[e];if(t)i&&'"'===u&&(t=!1),i||"'"!==u||(t=!1);else if('"'===u)t=!0,i=!0;else if("'"===u)t=!0,i=!1;else{if(";"===u)return e+1;if("}"===u)return e}}return e}function g(n){var r=0;n=function(n){for(var r="",t=0;;){var i=f(c,n,t),e=i?i.start:n.length;if(r+=n.substring(t,e),!i)break;t=p(n,e)}return r}(n=n.replace(v,"")).replace(h,"");for(var t=[];r<n.length;)r=l(n,t,r);return t}function d(n){var r={};n.forEach((function(n){n.declarations.forEach((function(n){r[n.prop]=n.value}))}));for(var t={},i=Object.entries(r),e=function(){var n=!1;if(i.forEach((function(r){var i=r[0],e=m(r[1],t);e!==t[i]&&(t[i]=e,n=!0)})),!n)return"break"},u=0;u<10&&"break"!==e();u++);return t}function y(n,t){if(void 0===t&&(t=0),!n.rules)return[];var i=[];return n.rules.filter((function(n){return n.type===r.STYLE_RULE})).forEach((function(n){var r=function(n){for(var r,t=[];r=b.exec(n.trim());){var i=E(r[2]),e=i.value,u=i.important;t.push({prop:r[1].trim(),value:g(e),important:u})}return t}(n.cssText);r.length>0&&n.parsedSelector.split(",").forEach((function(n){n=n.trim(),i.push({selector:n,declarations:r,specificity:1,nu:t})})),t++})),i}var w="!important",b=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function E(n){var r=(n=n.replace(/\s+/gim," ").trim()).endsWith(w);return r&&(n=n.substr(0,n.length-w.length).trim()),{value:n,important:r}}function k(n){var r=[];return n.forEach((function(n){r.push.apply(r,n.selectors)})),r}function R(f){var a,c=function n(t,i){var f=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=f.trim(),t.parent){f=(f=(f=function(n){return n.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var n=arguments[1],r=6-n.length;r--;)n="0"+n;return"\\"+n}))}(f=i.substring(t.previous?t.previous.end:t.parent.start,t.start-1))).replace(e.multipleSpaces," ")).substring(f.lastIndexOf(";")+1);var a=t.parsedSelector=t.selector=f.trim();t.atRule=0===a.indexOf(s),t.atRule?0===a.indexOf(o)?t.type=r.MEDIA_RULE:a.match(e.keyframesRule)&&(t.type=r.KEYFRAMES_RULE,t.keyframesName=t.selector.split(e.multipleSpaces).pop()):t.type=0===a.indexOf(u)?r.MIXIN_RULE:r.STYLE_RULE}var c=t.rules;if(c)for(var v=0,h=c.length,l=void 0;v<h&&(l=c[v]);v++)n(l,i);return t}(function(r){var e=new n;e.start=0,e.end=r.length;for(var u=e,o=0,s=r.length;o<s;o++)if(r[o]===t){u.rules||(u.rules=[]);var f=u,a=f.rules[f.rules.length-1]||null;(u=new n).start=o+1,u.parent=f,u.previous=a,f.rules.push(u)}else r[o]===i&&(u.end=o+1,u=u.parent||e);return e}(a=(a=f).replace(e.comments,"").replace(e.port,"")),a),v=g(f);return{original:f,template:v,selectors:y(c),usesCssVars:v.length>1}}function M(n,r){var t=R(r.innerHTML);t.styleEl=r,n.push(t)}function $(n,r,t){var i;return i="."+t,n.replace(new RegExp("\\."+r,"g"),i)}function j(n,r,t){var i=t.href;return fetch(i).then((function(n){return n.text()})).then((function(e){if(((o=e).indexOf("var(")>-1||A.test(o))&&t.parentNode){(function(n){return L.lastIndex=0,L.test(n)})(e)&&(e=function(n,r){var t=r.replace(/[^/]*$/,"");return n.replace(L,(function(n,r){return n.replace(r,t+r)}))}(e,i));var u=n.createElement("style");u.setAttribute("data-styles",""),u.innerHTML=e,M(r,u),t.parentNode.insertBefore(u,t),t.remove()}var o})).catch((function(n){console.error(n)}))}var A=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,L=/url[\s]*\([\s]*['"]?(?![http|/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,O=function(){function n(n,r){this.win=n,this.doc=r,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map}return n.prototype.initShim=function(){var n=this;return new Promise((function(r){n.win.requestAnimationFrame((function(){var t,i;(t=n.doc,i=n.globalScopes,function(n,r){for(var t=n.querySelectorAll("style:not([data-styles])"),i=0;i<t.length;i++)M(r,t[i])}(t,i),function(n,r){for(var t=[],i=n.querySelectorAll('link[rel="stylesheet"][href]'),e=0;e<i.length;e++)t.push(j(n,r,i[e]));return Promise.all(t)}(t,i)).then((function(){return r()}))}))}))},n.prototype.addLink=function(n){var r=this;return j(this.doc,this.globalScopes,n).then((function(){r.updateGlobal()}))},n.prototype.addGlobalStyle=function(n){M(this.globalScopes,n),this.updateGlobal()},n.prototype.createHostStyle=function(n,r,t,i){if(this.hostScopeMap.has(n))throw new Error("host style already created");var e,u,o,s,f=this.registerHostTemplate(t,r,i),a=this.doc.createElement("style");return f.usesCssVars?i?(a["s-sc"]=r=f.scopeId+"-"+this.count,a.innerHTML="/*needs update*/",this.hostStyleMap.set(n,a),this.hostScopeMap.set(n,(u=r,o=(e=f).template.map((function(n){return"string"==typeof n?$(n,e.scopeId,u):n})),s=e.selectors.map((function(n){return Object.assign(Object.assign({},n),{selector:$(n.selector,e.scopeId,u)})})),Object.assign(Object.assign({},e),{template:o,selectors:s,scopeId:u}))),this.count++):(f.styleEl=a,f.usesCssVars||(a.innerHTML=m(f.template,{})),this.globalScopes.push(f),this.updateGlobal(),this.hostScopeMap.set(n,f)):a.innerHTML=t,a},n.prototype.removeHost=function(n){var r=this.hostStyleMap.get(n);r&&r.remove(),this.hostStyleMap.delete(n),this.hostScopeMap.delete(n)},n.prototype.updateHost=function(n){var r=this.hostScopeMap.get(n);if(r&&r.usesCssVars&&r.isScoped){var t=this.hostStyleMap.get(n);if(t){var i=d(function(n,r,t){var i,e=[],u=function(n,r){for(var t=[];r;){var i=n.get(r);i&&t.push(i),r=r.parentElement}return t}(r,n);return t.forEach((function(n){return e.push(n)})),u.forEach((function(n){return e.push(n)})),(i=k(e).filter((function(r){return function(n,r){return":root"===r||"html"===r||n.matches(r)}(n,r.selector)}))).sort((function(n,r){return n.specificity===r.specificity?n.nu-r.nu:n.specificity-r.specificity})),i}(n,this.hostScopeMap,this.globalScopes));t.innerHTML=m(r.template,i)}}},n.prototype.updateGlobal=function(){var n,r;r=d(k(n=this.globalScopes)),n.forEach((function(n){n.usesCssVars&&(n.styleEl.innerHTML=m(n.template,r))}))},n.prototype.registerHostTemplate=function(n,r,t){var i=this.scopesMap.get(r);return i||((i=R(n)).scopeId=r,i.isScoped=t,this.scopesMap.set(r,i)),i},n}(),I=window;I.__stencil_cssshim||I.CSS&&I.CSS.supports&&I.CSS.supports("color","var(--c)")||(I.__stencil_cssshim=new O(I,document));