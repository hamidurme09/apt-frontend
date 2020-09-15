System.register([],(function(t){"use strict";return{execute:function(){var e={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:false,hoverpause:true,keyboard:true,bound:false,swipeThreshold:80,dragThreshold:120,perTouch:false,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:true,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function n(t){console.error("[Glide warn]: "+t)}var i=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var r=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}return function(e,n,i){if(n)t(e.prototype,n);if(i)t(e,i);return e}}();var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n){if(Object.prototype.hasOwnProperty.call(n,i)){t[i]=n[i]}}}return t};var a=function t(e,n,i){if(e===null)e=Function.prototype;var r=Object.getOwnPropertyDescriptor(e,n);if(r===undefined){var s=Object.getPrototypeOf(e);if(s===null){return undefined}else{return t(s,n,i)}}else if("value"in r){return r.value}else{var o=r.get;if(o===undefined){return undefined}return o.call(i)}};var u=function(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof e)}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});if(e)Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e};var f=function(t,e){if(!t){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e&&(typeof e==="object"||typeof e==="function")?e:t};function l(t){return parseInt(t)}function c(t){return parseFloat(t)}function d(t){return typeof t==="string"}function v(t){var e=typeof t==="undefined"?"undefined":i(t);return e==="function"||e==="object"&&!!t}function h(t){return typeof t==="number"}function p(t){return typeof t==="function"}function m(t){return typeof t==="undefined"}function g(t){return t.constructor===Array}function y(t,e,i){var r={};for(var s in e){if(p(e[s])){r[s]=e[s](t,r,i)}else{n("Extension must be a function")}}for(var o in r){if(p(r[o].mount)){r[o].mount()}}return r}function b(t,e,n){Object.defineProperty(t,e,n)}function w(t){return Object.keys(t).sort().reduce((function(e,n){e[n]=t[n];return e}),{})}function _(t,e){var n=o({},t,e);if(e.hasOwnProperty("classes")){n.classes=o({},t.classes,e.classes);if(e.classes.hasOwnProperty("direction")){n.classes.direction=o({},t.classes.direction,e.classes.direction)}}if(e.hasOwnProperty("breakpoints")){n.breakpoints=o({},t.breakpoints,e.breakpoints)}return n}var k=function(){function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};r(this,t);this.events=e;this.hop=e.hasOwnProperty}s(t,[{key:"on",value:function t(e,n){if(g(e)){for(var i=0;i<e.length;i++){this.on(e[i],n)}}if(!this.hop.call(this.events,e)){this.events[e]=[]}var r=this.events[e].push(n)-1;return{remove:function t(){delete this.events[e][r]}}}},{key:"emit",value:function t(e,n){if(g(e)){for(var i=0;i<e.length;i++){this.emit(e[i],n)}}if(!this.hop.call(this.events,e)){return}this.events[e].forEach((function(t){t(n||{})}))}}]);return t}();var S=function(){function t(n){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};r(this,t);this._c={};this._t=[];this._e=new k;this.disabled=false;this.selector=n;this.settings=_(e,i);this.index=this.settings.startAt}s(t,[{key:"mount",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this._e.emit("mount.before");if(v(e)){this._c=y(this,e,this._e)}else{n("You need to provide a object on `mount()`")}this._e.emit("mount.after");return this}},{key:"mutate",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];if(g(e)){this._t=e}else{n("You need to provide a array on `mutate()`")}return this}},{key:"update",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.settings=_(this.settings,e);if(e.hasOwnProperty("startAt")){this.index=e.startAt}this._e.emit("update");return this}},{key:"go",value:function t(e){this._c.Run.make(e);return this}},{key:"move",value:function t(e){this._c.Transition.disable();this._c.Move.make(e);return this}},{key:"destroy",value:function t(){this._e.emit("destroy");return this}},{key:"play",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(e){this.settings.autoplay=e}this._e.emit("play");return this}},{key:"pause",value:function t(){this._e.emit("pause");return this}},{key:"disable",value:function t(){this.disabled=true;return this}},{key:"enable",value:function t(){this.disabled=false;return this}},{key:"on",value:function t(e,n){this._e.on(e,n);return this}},{key:"isType",value:function t(e){return this.settings.type===e}},{key:"settings",get:function t(){return this._o},set:function t(e){if(v(e)){this._o=e}else{n("Options must be an `object` instance.")}}},{key:"index",get:function t(){return this._i},set:function t(e){this._i=l(e)}},{key:"type",get:function t(){return this.settings.type}},{key:"disabled",get:function t(){return this._d},set:function t(e){this._d=!!e}}]);return t}();function H(t,e,i){var r={mount:function t(){this._o=false},make:function n(r){var s=this;if(!t.disabled){t.disable();this.move=r;i.emit("run.before",this.move);this.calculate();i.emit("run",this.move);e.Transition.after((function(){if(s.isStart()){i.emit("run.start",s.move)}if(s.isEnd()){i.emit("run.end",s.move)}if(s.isOffset("<")||s.isOffset(">")){s._o=false;i.emit("run.offset",s.move)}i.emit("run.after",s.move);t.enable()}))}},calculate:function e(){var i=this.move,r=this.length;var s=i.steps,o=i.direction;var a=h(l(s))&&l(s)!==0;switch(o){case">":if(s===">"){t.index=r}else if(this.isEnd()){if(!(t.isType("slider")&&!t.settings.rewind)){this._o=true;t.index=0}}else if(a){t.index+=Math.min(r-t.index,-l(s))}else{t.index++}break;case"<":if(s==="<"){t.index=0}else if(this.isStart()){if(!(t.isType("slider")&&!t.settings.rewind)){this._o=true;t.index=r}}else if(a){t.index-=Math.min(t.index,l(s))}else{t.index--}break;case"=":t.index=s;break;default:n("Invalid direction pattern ["+o+s+"] has been used");break}},isStart:function e(){return t.index===0},isEnd:function e(){return t.index===this.length},isOffset:function t(e){return this._o&&this.move.direction===e}};b(r,"move",{get:function t(){return this._m},set:function t(e){var n=e.substr(1);this._m={direction:e.substr(0,1),steps:n?l(n)?l(n):n:0}}});b(r,"length",{get:function n(){var i=t.settings;var r=e.Html.slides.length;if(t.isType("slider")&&i.focusAt!=="center"&&i.bound){return r-1-(l(i.perView)-1)+l(i.focusAt)}return r-1}});b(r,"offset",{get:function t(){return this._o}});return r}function T(){return(new Date).getTime()}function x(t,e,n){var i=void 0,r=void 0,s=void 0,o=void 0;var a=0;if(!n)n={};var u=function e(){a=n.leading===false?0:T();i=null;o=t.apply(r,s);if(!i)r=s=null};var f=function f(){var l=T();if(!a&&n.leading===false)a=l;var c=e-(l-a);r=this;s=arguments;if(c<=0||c>e){if(i){clearTimeout(i);i=null}a=l;o=t.apply(r,s);if(!i)r=s=null}else if(!i&&n.trailing!==false){i=setTimeout(u,c)}return o};f.cancel=function(){clearTimeout(i);a=0;i=r=s=null};return f}var O={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function A(t,e,n){var i={apply:function t(n){for(var i=0,r=n.length;i<r;i++){var s=n[i].style;var o=e.Direction.value;if(i!==0){s[O[o][0]]=this.value/2+"px"}else{s[O[o][0]]=""}if(i!==n.length-1){s[O[o][1]]=this.value/2+"px"}else{s[O[o][1]]=""}}},remove:function t(e){for(var n=0,i=e.length;n<i;n++){var r=e[n].style;r.marginLeft="";r.marginRight=""}}};b(i,"value",{get:function e(){return l(t.settings.gap)}});b(i,"grow",{get:function t(){return i.value*(e.Sizes.length-1)}});b(i,"reductor",{get:function e(){var n=t.settings.perView;return i.value*(n-1)/n}});n.on(["build.after","update"],x((function(){i.apply(e.Html.wrapper.children)}),30));n.on("destroy",(function(){i.remove(e.Html.wrapper.children)}));return i}function M(t){if(t&&t.parentNode){var e=t.parentNode.firstChild;var n=[];for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}return[]}function C(t){if(t&&t instanceof window.HTMLElement){return true}return false}var P='[data-glide-el="track"]';function L(t,e){var i={mount:function e(){this.root=t.selector;this.track=this.root.querySelector(P);this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.cloneSlide)}))}};b(i,"root",{get:function t(){return i._r},set:function t(e){if(d(e)){e=document.querySelector(e)}if(C(e)){i._r=e}else{n("Root element must be a existing Html node")}}});b(i,"track",{get:function t(){return i._t},set:function t(e){if(C(e)){i._t=e}else{n("Could not find track element. Please use "+P+" attribute.")}}});b(i,"wrapper",{get:function t(){return i.track.children[0]}});return i}function j(t,e,n){var i={mount:function e(){this.value=t.settings.peek}};b(i,"value",{get:function t(){return i._v},set:function t(e){if(v(e)){e.before=l(e.before);e.after=l(e.after)}else{e=l(e)}i._v=e}});b(i,"reductor",{get:function e(){var n=i.value;var r=t.settings.perView;if(v(n)){return n.before/r+n.after/r}return n*2/r}});n.on(["resize","update"],(function(){i.mount()}));return i}function z(t,e,n){var i={mount:function t(){this._o=0},make:function t(){var i=this;var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;this.offset=r;n.emit("move",{movement:this.value});e.Transition.after((function(){n.emit("move.after",{movement:i.value})}))}};b(i,"offset",{get:function t(){return i._o},set:function t(e){i._o=!m(e)?l(e):0}});b(i,"translate",{get:function n(){return e.Sizes.slideWidth*t.index}});b(i,"value",{get:function t(){var n=this.offset;var i=this.translate;if(e.Direction.is("rtl")){return i+n}return i-n}});n.on(["build.before","run"],(function(){i.make()}));return i}function D(t,e,n){var i={setupSlides:function t(){var n=this.slideWidth+"px";var i=e.Html.slides;for(var r=0;r<i.length;r++){i[r].style.width=n}},setupWrapper:function t(n){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function t(){var n=e.Html.slides;for(var i=0;i<n.length;i++){n[i].style.width=""}e.Html.wrapper.style.width=""}};b(i,"length",{get:function t(){return e.Html.slides.length}});b(i,"width",{get:function t(){return e.Html.root.offsetWidth}});b(i,"wrapperSize",{get:function t(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}});b(i,"slideWidth",{get:function n(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}});n.on(["build.before","resize","update"],(function(){i.setupSlides();i.setupWrapper()}));n.on("destroy",(function(){i.remove()}));return i}function E(t,e,n){var i={mount:function t(){n.emit("build.before");this.typeClass();this.activeClass();n.emit("build.after")},typeClass:function n(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function n(){var i=t.settings.classes;var r=e.Html.slides[t.index];if(r){r.classList.add(i.activeSlide);M(r).forEach((function(t){t.classList.remove(i.activeSlide)}))}},removeClasses:function n(){var i=t.settings.classes;e.Html.root.classList.remove(i[t.settings.type]);e.Html.slides.forEach((function(t){t.classList.remove(i.activeSlide)}))}};n.on(["destroy","update"],(function(){i.removeClasses()}));n.on(["resize","update"],(function(){i.mount()}));n.on("move.after",(function(){i.activeClass()}));return i}function R(t,e,n){var i={mount:function e(){this.items=[];if(t.isType("carousel")){this.items=this.collect()}},collect:function n(){var i=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var r=e.Html.slides;var s=t.settings,o=s.perView,a=s.classes;var u=+!!t.settings.peek;var f=o+u;var l=r.slice(0,f);var c=r.slice(-f);for(var d=0;d<Math.max(1,Math.floor(o/r.length));d++){for(var v=0;v<l.length;v++){var h=l[v].cloneNode(true);h.classList.add(a.cloneSlide);i.push(h)}for(var p=0;p<c.length;p++){var m=c[p].cloneNode(true);m.classList.add(a.cloneSlide);i.unshift(m)}}return i},append:function t(){var n=this.items;var i=e.Html,r=i.wrapper,s=i.slides;var o=Math.floor(n.length/2);var a=n.slice(0,o).reverse();var t=n.slice(o,n.length);var u=e.Sizes.slideWidth+"px";for(var f=0;f<t.length;f++){r.appendChild(t[f])}for(var l=0;l<a.length;l++){r.insertBefore(a[l],s[0])}for(var c=0;c<n.length;c++){n[c].style.width=u}},remove:function t(){var n=this.items;for(var i=0;i<n.length;i++){e.Html.wrapper.removeChild(n[i])}}};b(i,"grow",{get:function t(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}});n.on("update",(function(){i.remove();i.mount();i.append()}));n.on("build.before",(function(){if(t.isType("carousel")){i.append()}}));n.on("destroy",(function(){i.remove()}));return i}var W=function(){function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};r(this,t);this.listeners=e}s(t,[{key:"on",value:function t(e,n,i){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(d(e)){e=[e]}for(var s=0;s<e.length;s++){this.listeners[e[s]]=i;n.addEventListener(e[s],this.listeners[e[s]],r)}}},{key:"off",value:function t(e,n){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(d(e)){e=[e]}for(var r=0;r<e.length;r++){n.removeEventListener(e[r],this.listeners[e[r]],i)}}},{key:"destroy",value:function t(){delete this.listeners}}]);return t}();function G(t,e,n){var i=new W;var r={mount:function t(){this.bind()},bind:function e(){i.on("resize",window,x((function(){n.emit("resize")}),t.settings.throttle))},unbind:function t(){i.off("resize",window)}};n.on("destroy",(function(){r.unbind();i.destroy()}));return r}var B=["ltr","rtl"];var N={">":"<","<":">","=":"="};function q(t,e,i){var r={mount:function e(){this.value=t.settings.direction},resolve:function t(e){var n=e.slice(0,1);if(this.is("rtl")){return e.split(n).join(N[n])}return e},is:function t(e){return this.value===e},addClass:function n(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function n(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};b(r,"value",{get:function t(){return r._v},set:function t(e){if(B.indexOf(e)>-1){r._v=e}else{n("Direction value must be `ltr` or `rtl`")}}});i.on(["destroy","update"],(function(){r.removeClass()}));i.on("update",(function(){r.mount()}));i.on(["build.before","update"],(function(){r.addClass()}));return r}function I(t,e){return{modify:function t(n){if(e.Direction.is("rtl")){return-n}return n}}}function V(t,e){return{modify:function n(i){return i+e.Gaps.value*t.index}}}function F(t,e){return{modify:function t(n){return n+e.Clones.grow/2}}}function Y(t,e){return{modify:function n(i){if(t.settings.focusAt>=0){var r=e.Peek.value;if(v(r)){return i-r.before}return i-r}return i}}}function X(t,e){return{modify:function n(i){var r=e.Gaps.value;var s=e.Sizes.width;var o=t.settings.focusAt;var a=e.Sizes.slideWidth;if(o==="center"){return i-(s/2-a/2)}return i-a*o-r*o}}}function K(t,e,i){var r=[V,F,Y,X].concat(t._t,[I]);return{mutate:function s(o){for(var a=0;a<r.length;a++){var u=r[a];if(p(u)&&p(u().modify)){o=u(t,e,i).modify(o)}else{n("Transformer should be a function that returns an object with `modify()` method")}}return o}}}function J(t,e,n){var i={set:function n(i){var r=K(t,e).mutate(i);e.Html.wrapper.style.transform="translate3d("+-1*r+"px, 0px, 0px)"},remove:function t(){e.Html.wrapper.style.transform=""}};n.on("move",(function(r){var s=e.Gaps.value;var o=e.Sizes.length;var a=e.Sizes.slideWidth;if(t.isType("carousel")&&e.Run.isOffset("<")){e.Transition.after((function(){n.emit("translate.jump");i.set(a*(o-1))}));return i.set(-a-s*o)}if(t.isType("carousel")&&e.Run.isOffset(">")){e.Transition.after((function(){n.emit("translate.jump");i.set(0)}));return i.set(a*o+s*o)}return i.set(r.movement)}));n.on("destroy",(function(){i.remove()}));return i}function Q(t,e,n){var i=false;var r={compose:function e(n){var r=t.settings;if(!i){return n+" "+this.duration+"ms "+r.animationTimingFunc}return n+" 0ms "+r.animationTimingFunc},set:function t(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(n)},remove:function t(){e.Html.wrapper.style.transition=""},after:function t(e){setTimeout((function(){e()}),this.duration)},enable:function t(){i=false;this.set()},disable:function t(){i=true;this.set()}};b(r,"duration",{get:function n(){var i=t.settings;if(t.isType("slider")&&e.Run.offset){return i.rewindDuration}return i.animationDuration}});n.on("move",(function(){r.set()}));n.on(["build.before","resize","translate.jump"],(function(){r.disable()}));n.on("run",(function(){r.enable()}));n.on("destroy",(function(){r.remove()}));return r}var U=false;try{var Z=Object.defineProperty({},"passive",{get:function t(){U=true}});window.addEventListener("testPassive",null,Z);window.removeEventListener("testPassive",null,Z)}catch(t){}var $=U;var tt=["touchstart","mousedown"];var et=["touchmove","mousemove"];var nt=["touchend","touchcancel","mouseup","mouseleave"];var it=["mousedown","mousemove","mouseup","mouseleave"];function rt(t,e,n){var i=new W;var r=0;var s=0;var o=0;var a=false;var u=$?{passive:true}:false;var f={mount:function t(){this.bindSwipeStart()},start:function e(i){if(!a&&!t.disabled){this.disable();var u=this.touches(i);r=null;s=l(u.pageX);o=l(u.pageY);this.bindSwipeMove();this.bindSwipeEnd();n.emit("swipe.start")}},move:function i(a){if(!t.disabled){var u=t.settings,f=u.touchAngle,d=u.touchRatio,v=u.classes;var h=this.touches(a);var p=l(h.pageX)-s;var m=l(h.pageY)-o;var g=Math.abs(p<<2);var y=Math.abs(m<<2);var b=Math.sqrt(g+y);var w=Math.sqrt(y);r=Math.asin(w/b);if(r*180/Math.PI<f){a.stopPropagation();e.Move.make(p*c(d));e.Html.root.classList.add(v.dragging);n.emit("swipe.move")}else{return false}}},end:function i(o){if(!t.disabled){var a=t.settings;var u=this.touches(o);var f=this.threshold(o);var c=u.pageX-s;var d=r*180/Math.PI;var v=Math.round(c/e.Sizes.slideWidth);this.enable();if(c>f&&d<a.touchAngle){if(a.perTouch){v=Math.min(v,l(a.perTouch))}if(e.Direction.is("rtl")){v=-v}e.Run.make(e.Direction.resolve("<"+v))}else if(c<-f&&d<a.touchAngle){if(a.perTouch){v=Math.max(v,-l(a.perTouch))}if(e.Direction.is("rtl")){v=-v}e.Run.make(e.Direction.resolve(">"+v))}else{e.Move.make()}e.Html.root.classList.remove(a.classes.dragging);this.unbindSwipeMove();this.unbindSwipeEnd();n.emit("swipe.end")}},bindSwipeStart:function n(){var r=this;var s=t.settings;if(s.swipeThreshold){i.on(tt[0],e.Html.wrapper,(function(t){r.start(t)}),u)}if(s.dragThreshold){i.on(tt[1],e.Html.wrapper,(function(t){r.start(t)}),u)}},unbindSwipeStart:function t(){i.off(tt[0],e.Html.wrapper,u);i.off(tt[1],e.Html.wrapper,u)},bindSwipeMove:function n(){var r=this;i.on(et,e.Html.wrapper,x((function(t){r.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function t(){i.off(et,e.Html.wrapper,u)},bindSwipeEnd:function t(){var n=this;i.on(nt,e.Html.wrapper,(function(t){n.end(t)}))},unbindSwipeEnd:function t(){i.off(nt,e.Html.wrapper)},touches:function t(e){if(it.indexOf(e.type)>-1){return e}return e.touches[0]||e.changedTouches[0]},threshold:function e(n){var i=t.settings;if(it.indexOf(n.type)>-1){return i.dragThreshold}return i.swipeThreshold},enable:function t(){a=false;e.Transition.enable();return this},disable:function t(){a=true;e.Transition.disable();return this}};n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)}));n.on("destroy",(function(){f.unbindSwipeStart();f.unbindSwipeMove();f.unbindSwipeEnd();i.destroy()}));return f}function st(t,e,n){var i=new W;var r={mount:function t(){this.bind()},bind:function t(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function t(){i.off("dragstart",e.Html.wrapper)},dragstart:function t(e){e.preventDefault()}};n.on("destroy",(function(){r.unbind();i.destroy()}));return r}function ot(t,e,n){var i=new W;var r=false;var s=false;var o={mount:function t(){this._a=e.Html.wrapper.querySelectorAll("a");this.bind()},bind:function t(){i.on("click",e.Html.wrapper,this.click)},unbind:function t(){i.off("click",e.Html.wrapper)},click:function t(e){if(s){e.stopPropagation();e.preventDefault()}},detach:function t(){s=true;if(!r){for(var e=0;e<this.items.length;e++){this.items[e].draggable=false;this.items[e].setAttribute("data-href",this.items[e].getAttribute("href"));this.items[e].removeAttribute("href")}r=true}return this},attach:function t(){s=false;if(r){for(var e=0;e<this.items.length;e++){this.items[e].draggable=true;this.items[e].setAttribute("href",this.items[e].getAttribute("data-href"))}r=false}return this}};b(o,"items",{get:function t(){return o._a}});n.on("swipe.move",(function(){o.detach()}));n.on("swipe.end",(function(){e.Transition.after((function(){o.attach()}))}));n.on("destroy",(function(){o.attach();o.unbind();i.destroy()}));return o}var at='[data-glide-el="controls[nav]"]';var ut='[data-glide-el^="controls"]';function ft(t,e,n){var i=new W;var r=$?{passive:true}:false;var s={mount:function t(){this._n=e.Html.root.querySelectorAll(at);this._c=e.Html.root.querySelectorAll(ut);this.addBindings()},setActive:function t(){for(var e=0;e<this._n.length;e++){this.addClass(this._n[e].children)}},removeActive:function t(){for(var e=0;e<this._n.length;e++){this.removeClass(this._n[e].children)}},addClass:function e(n){var i=t.settings;var r=n[t.index];if(r){r.classList.add(i.classes.activeNav);M(r).forEach((function(t){t.classList.remove(i.classes.activeNav)}))}},removeClass:function e(n){var i=n[t.index];if(i){i.classList.remove(t.settings.classes.activeNav)}},addBindings:function t(){for(var e=0;e<this._c.length;e++){this.bind(this._c[e].children)}},removeBindings:function t(){for(var e=0;e<this._c.length;e++){this.unbind(this._c[e].children)}},bind:function t(e){for(var n=0;n<e.length;n++){i.on("click",e[n],this.click);i.on("touchstart",e[n],this.click,r)}},unbind:function t(e){for(var n=0;n<e.length;n++){i.off(["click","touchstart"],e[n])}},click:function t(n){n.preventDefault();e.Run.make(e.Direction.resolve(n.currentTarget.getAttribute("data-glide-dir")))}};b(s,"items",{get:function t(){return s._c}});n.on(["mount.after","move.after"],(function(){s.setActive()}));n.on("destroy",(function(){s.removeBindings();s.removeActive();i.destroy()}));return s}function lt(t,e,n){var i=new W;var r={mount:function e(){if(t.settings.keyboard){this.bind()}},bind:function t(){i.on("keyup",document,this.press)},unbind:function t(){i.off("keyup",document)},press:function t(n){if(n.keyCode===39){e.Run.make(e.Direction.resolve(">"))}if(n.keyCode===37){e.Run.make(e.Direction.resolve("<"))}}};n.on(["destroy","update"],(function(){r.unbind()}));n.on("update",(function(){r.mount()}));n.on("destroy",(function(){i.destroy()}));return r}function ct(t,e,n){var i=new W;var r={mount:function e(){this.start();if(t.settings.hoverpause){this.bind()}},start:function n(){var i=this;if(t.settings.autoplay){if(m(this._i)){this._i=setInterval((function(){i.stop();e.Run.make(">");i.start()}),this.time)}}},stop:function t(){this._i=clearInterval(this._i)},bind:function t(){var n=this;i.on("mouseover",e.Html.root,(function(){n.stop()}));i.on("mouseout",e.Html.root,(function(){n.start()}))},unbind:function t(){i.off(["mouseover","mouseout"],e.Html.root)}};b(r,"time",{get:function n(){var i=e.Html.slides[t.index].getAttribute("data-glide-autoplay");if(i){return l(i)}return l(t.settings.autoplay)}});n.on(["destroy","update"],(function(){r.unbind()}));n.on(["run.before","pause","destroy","swipe.start","update"],(function(){r.stop()}));n.on(["run.after","play","swipe.end"],(function(){r.start()}));n.on("update",(function(){r.mount()}));n.on("destroy",(function(){i.destroy()}));return r}function dt(t){if(v(t)){return w(t)}else{n("Breakpoints option must be an object")}return{}}function vt(t,e,n){var i=new W;var r=t.settings;var s=dt(r.breakpoints);var a=o({},r);var u={match:function t(e){if(typeof window.matchMedia!=="undefined"){for(var n in e){if(e.hasOwnProperty(n)){if(window.matchMedia("(max-width: "+n+"px)").matches){return e[n]}}}}return a}};o(r,u.match(s));i.on("resize",window,x((function(){t.settings=_(r,u.match(s))}),t.settings.throttle));n.on("update",(function(){s=dt(s);a=o({},r)}));n.on("destroy",(function(){i.off("resize",window)}));return u}var ht={Html:L,Translate:J,Transition:Q,Direction:q,Peek:j,Sizes:D,Gaps:A,Move:z,Clones:R,Resize:G,Build:E,Run:H,Swipe:rt,Images:st,Anchors:ot,Controls:ft,Keyboard:lt,Autoplay:ct,Breakpoints:vt};var pt=function(t){u(e,t);function e(){r(this,e);return f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}s(e,[{key:"mount",value:function t(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,o({},ht,n))}}]);return e}(S);t("G",pt)}}}));