var e=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,n=/(\[[^\[\]]*\])/g;function i(e,r,i){if(r.match(n))!function e(r,n,i){if(0===n.length)return i;var t=n.shift(),o=t.match(/^\[(.+?)\]$/);if("[]"===t)return r=r||[],Array.isArray(r)?r.push(e(null,n,i)):(r._values=r._values||[],r._values.push(e(null,n,i))),r;if(o){var a=o[1],u=+a;isNaN(u)?(r=r||{})[a]=e(r[a],n,i):(r=r||[])[u]=e(r[u],n,i)}else r[t]=e(r[t],n,i);return r}(e,function(e){var r=[],i=new RegExp(n),t=/^([^\[\]]*)/.exec(e);for(t[1]&&r.push(t[1]);null!==(t=i.exec(e));)r.push(t[1]);return r}(r),i);else{var t=e[r];t?(Array.isArray(t)||(e[r]=[t]),e[r].push(i)):e[r]=i}return e}function t(e,r,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(r)+"="+n}var o=function(n,o){"object"!=typeof o?o={hash:!!o}:void 0===o.hash&&(o.hash=!0);for(var a=o.hash?{}:"",u=o.serializer||(o.hash?i:t),f=n&&n.elements?n.elements:[],l=Object.create(null),c=0;c<f.length;++c){var v=f[c];if((o.disabled||!v.disabled)&&v.name&&r.test(v.nodeName)&&!e.test(v.type)){var s=v.name,d=v.value;if("checkbox"!==v.type&&"radio"!==v.type||v.checked||(d=void 0),o.empty){if("checkbox"!==v.type||v.checked||(d=""),"radio"===v.type&&(l[v.name]||v.checked?v.checked&&(l[v.name]=!0):l[v.name]=!1),null==d&&"radio"==v.type)continue}else if(!d)continue;if("select-multiple"!==v.type)a=u(a,s,d);else{d=[];for(var p=v.options,b=!1,g=0;g<p.length;++g){var m=p[g];m.selected&&(m.value||o.empty&&!m.value)&&(b=!0,a=o.hash&&"[]"!==s.slice(s.length-2)?u(a,s+"[]",m.value):u(a,s,m.value))}!b&&o.empty&&(a=u(a,s,""))}}}if(o.empty)for(var s in l)l[s]||(a=u(a,s,""));return a};export{o as s};