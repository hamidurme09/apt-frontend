import{g as r}from"./p-30f68cd2.js";var t=[],e=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,i=!1;function o(){i=!0;for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0,o=r.length;n<o;++n)t[n]=r[n],e[r.charCodeAt(n)]=n;e["-".charCodeAt(0)]=62,e["_".charCodeAt(0)]=63}function f(r,e,n){for(var i,o=[],f=e;f<n;f+=3)o.push(t[(i=(r[f]<<16)+(r[f+1]<<8)+r[f+2])>>18&63]+t[i>>12&63]+t[i>>6&63]+t[63&i]);return o.join("")}function u(r,t,e,n,i){var o,f,u=8*i-n-1,a=(1<<u)-1,s=a>>1,c=-7,h=e?i-1:0,l=e?-1:1,d=r[t+h];for(h+=l,o=d&(1<<-c)-1,d>>=-c,c+=u;c>0;o=256*o+r[t+h],h+=l,c-=8);for(f=o&(1<<-c)-1,o>>=-c,c+=n;c>0;f=256*f+r[t+h],h+=l,c-=8);if(0===o)o=1-s;else{if(o===a)return f?NaN:1/0*(d?-1:1);f+=Math.pow(2,n),o-=s}return(d?-1:1)*f*Math.pow(2,o-n)}function a(r,t,e,n,i,o){var f,u,a,s=8*o-i-1,c=(1<<s)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,w=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,f=c):(f=Math.floor(Math.log(t)/Math.LN2),t*(a=Math.pow(2,-f))<1&&(f--,a*=2),(t+=f+h>=1?l/a:l*Math.pow(2,1-h))*a>=2&&(f++,a/=2),f+h>=c?(u=0,f=c):f+h>=1?(u=(t*a-1)*Math.pow(2,i),f+=h):(u=t*Math.pow(2,h-1)*Math.pow(2,i),f=0));i>=8;r[e+d]=255&u,d+=w,u/=256,i-=8);for(f=f<<i|u,s+=i;s>0;r[e+d]=255&f,d+=w,f/=256,s-=8);r[e+d-w]|=128*v}var s={}.toString,c=Array.isArray||function(r){return"[object Array]"==s.call(r)};function h(){return d.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function l(r,t){if(h()<t)throw new RangeError("Invalid typed array length");return d.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(t)).__proto__=d.prototype:(null===r&&(r=new d(t)),r.length=t),r}function d(r,t,e){if(!(d.TYPED_ARRAY_SUPPORT||this instanceof d))return new d(r,t,e);if("number"==typeof r){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return b(this,r)}return w(this,r,t,e)}function w(r,t,e,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(r,t,e,n){if(e<0||t.byteLength<e)throw new RangeError("'offset' is out of bounds");if(t.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return t=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),d.TYPED_ARRAY_SUPPORT?(r=t).__proto__=d.prototype:r=g(r,t),r}(r,t,e,n):"string"==typeof t?function(r,t,e){if("string"==typeof e&&""!==e||(e="utf8"),!d.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|m(t,e),i=(r=l(r,n)).write(t,e);return i!==n&&(r=r.slice(0,i)),r}(r,t,e):function(r,t){if(y(t)){var e=0|p(t.length);return 0===(r=l(r,e)).length?r:(t.copy(r,0,0,e),r)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?l(r,0):g(r,t);if("Buffer"===t.type&&c(t.data))return g(r,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(r,t)}function v(r){if("number"!=typeof r)throw new TypeError('"size" argument must be a number');if(r<0)throw new RangeError('"size" argument must not be negative')}function b(r,t){if(v(t),r=l(r,t<0?0:0|p(t)),!d.TYPED_ARRAY_SUPPORT)for(var e=0;e<t;++e)r[e]=0;return r}function g(r,t){var e=t.length<0?0:0|p(t.length);r=l(r,e);for(var n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(r){if(r>=h())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+h().toString(16)+" bytes");return 0|r}function y(r){return!(null==r||!r._isBuffer)}function m(r,t){if(y(r))return r.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(r)||r instanceof ArrayBuffer))return r.byteLength;"string"!=typeof r&&(r=""+r);var e=r.length;if(0===e)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return V(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return $(r).length;default:if(n)return V(r).length;t=(""+t).toLowerCase(),n=!0}}function E(r,t,e){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(t>>>=0))return"";for(r||(r="utf8");;)switch(r){case"hex":return U(this,t,e);case"utf8":case"utf-8":return N(this,t,e);case"ascii":return L(this,t,e);case"latin1":case"binary":return I(this,t,e);case"base64":return F(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,e);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}function k(r,t,e){var n=r[t];r[t]=r[e],r[e]=n}function A(r,t,e,n,i){if(0===r.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:r.length-1),e<0&&(e=r.length+e),e>=r.length){if(i)return-1;e=r.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof t&&(t=d.from(t,n)),y(t))return 0===t.length?-1:x(r,t,e,n,i);if("number"==typeof t)return t&=255,d.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(r,t,e):Uint8Array.prototype.lastIndexOf.call(r,t,e):x(r,[t],e,n,i);throw new TypeError("val must be string, number or Buffer")}function x(r,t,e,n,i){var o,f=1,u=r.length,a=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(r.length<2||t.length<2)return-1;f=2,u/=2,a/=2,e/=2}function s(r,t){return 1===f?r[t]:r.readUInt16BE(t*f)}if(i){var c=-1;for(o=e;o<u;o++)if(s(r,o)===s(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===a)return c*f}else-1!==c&&(o-=o-c),c=-1}else for(e+a>u&&(e=u-a),o=e;o>=0;o--){for(var h=!0,l=0;l<a;l++)if(s(r,o+l)!==s(t,l)){h=!1;break}if(h)return o}return-1}function T(r,t,e,n){e=Number(e)||0;var i=r.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(t.substr(2*f,2),16);if(isNaN(u))return f;r[e+f]=u}return f}function S(r,t,e,n){return q(V(t,r.length-e),r,e,n)}function M(r,t,e,n){return q(function(r){for(var t=[],e=0;e<r.length;++e)t.push(255&r.charCodeAt(e));return t}(t),r,e,n)}function B(r,t,e,n){return M(r,t,e,n)}function R(r,t,e,n){return q($(t),r,e,n)}function D(r,t,e,n){return q(function(r,t){for(var e,n,i=[],o=0;o<r.length&&!((t-=2)<0);++o)n=(e=r.charCodeAt(o))>>8,i.push(e%256),i.push(n);return i}(t,r.length-e),r,e,n)}function F(r,e,n){return function(r){var e;i||o();for(var n=r.length,u=n%3,a="",s=[],c=0,h=n-u;c<h;c+=16383)s.push(f(r,c,c+16383>h?h:c+16383));return 1===u?(a+=t[(e=r[n-1])>>2],a+=t[e<<4&63],a+="=="):2===u&&(a+=t[(e=(r[n-2]<<8)+r[n-1])>>10],a+=t[e>>4&63],a+=t[e<<2&63],a+="="),s.push(a),s.join("")}(0===e&&n===r.length?r:r.slice(e,n))}function N(r,t,e){e=Math.min(r.length,e);for(var n=[],i=t;i<e;){var o,f,u,a,s=r[i],c=null,h=s>239?4:s>223?3:s>191?2:1;if(i+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(o=r[i+1]))&&(a=(31&s)<<6|63&o)>127&&(c=a);break;case 3:f=r[i+2],128==(192&(o=r[i+1]))&&128==(192&f)&&(a=(15&s)<<12|(63&o)<<6|63&f)>2047&&(a<55296||a>57343)&&(c=a);break;case 4:f=r[i+2],u=r[i+3],128==(192&(o=r[i+1]))&&128==(192&f)&&128==(192&u)&&(a=(15&s)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&a<1114112&&(c=a)}null===c?(c=65533,h=1):c>65535&&(n.push((c-=65536)>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return function(r){var t=r.length;if(t<=C)return String.fromCharCode.apply(String,r);for(var e="",n=0;n<t;)e+=String.fromCharCode.apply(String,r.slice(n,n+=C));return e}(n)}d.TYPED_ARRAY_SUPPORT=void 0===r.TYPED_ARRAY_SUPPORT||r.TYPED_ARRAY_SUPPORT,d.poolSize=8192,d._augment=function(r){return r.__proto__=d.prototype,r},d.from=function(r,t,e){return w(null,r,t,e)},d.TYPED_ARRAY_SUPPORT&&(d.prototype.__proto__=Uint8Array.prototype,d.__proto__=Uint8Array),d.alloc=function(r,t,e){return function(r,t,e,n){return v(t),t<=0?l(null,t):void 0!==e?"string"==typeof n?l(null,t).fill(e,n):l(null,t).fill(e):l(null,t)}(0,r,t,e)},d.allocUnsafe=function(r){return b(null,r)},d.allocUnsafeSlow=function(r){return b(null,r)},d.isBuffer=function(r){return null!=r&&(!!r._isBuffer||Z(r)||function(r){return"function"==typeof r.readFloatLE&&"function"==typeof r.slice&&Z(r.slice(0,0))}(r))},d.compare=function(r,t){if(!y(r)||!y(t))throw new TypeError("Arguments must be Buffers");if(r===t)return 0;for(var e=r.length,n=t.length,i=0,o=Math.min(e,n);i<o;++i)if(r[i]!==t[i]){e=r[i],n=t[i];break}return e<n?-1:n<e?1:0},d.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(r,t){if(!c(r))throw new TypeError('"list" argument must be an Array of Buffers');if(0===r.length)return d.alloc(0);var e;if(void 0===t)for(t=0,e=0;e<r.length;++e)t+=r[e].length;var n=d.allocUnsafe(t),i=0;for(e=0;e<r.length;++e){var o=r[e];if(!y(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},d.byteLength=m,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var r=this.length;if(r%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<r;t+=2)k(this,t,t+1);return this},d.prototype.swap32=function(){var r=this.length;if(r%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<r;t+=4)k(this,t,t+3),k(this,t+1,t+2);return this},d.prototype.swap64=function(){var r=this.length;if(r%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<r;t+=8)k(this,t,t+7),k(this,t+1,t+6),k(this,t+2,t+5),k(this,t+3,t+4);return this},d.prototype.toString=function(){var r=0|this.length;return 0===r?"":0===arguments.length?N(this,0,r):E.apply(this,arguments)},d.prototype.equals=function(r){if(!y(r))throw new TypeError("Argument must be a Buffer");return this===r||0===d.compare(this,r)},d.prototype.inspect=function(){var r="";return this.length>0&&(r=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(r+=" ... ")),"<Buffer "+r+">"},d.prototype.compare=function(r,t,e,n,i){if(!y(r))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===e&&(e=r?r.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||e>r.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=e)return 0;if(n>=i)return-1;if(t>=e)return 1;if(this===r)return 0;for(var o=(i>>>=0)-(n>>>=0),f=(e>>>=0)-(t>>>=0),u=Math.min(o,f),a=this.slice(n,i),s=r.slice(t,e),c=0;c<u;++c)if(a[c]!==s[c]){o=a[c],f=s[c];break}return o<f?-1:f<o?1:0},d.prototype.includes=function(r,t,e){return-1!==this.indexOf(r,t,e)},d.prototype.indexOf=function(r,t,e){return A(this,r,t,e,!0)},d.prototype.lastIndexOf=function(r,t,e){return A(this,r,t,e,!1)},d.prototype.write=function(r,t,e,n){if(void 0===t)n="utf8",e=this.length,t=0;else if(void 0===e&&"string"==typeof t)n=t,e=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-t;if((void 0===e||e>i)&&(e=i),r.length>0&&(e<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return T(this,r,t,e);case"utf8":case"utf-8":return S(this,r,t,e);case"ascii":return M(this,r,t,e);case"latin1":case"binary":return B(this,r,t,e);case"base64":return R(this,r,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,r,t,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var C=4096;function L(r,t,e){var n="";e=Math.min(r.length,e);for(var i=t;i<e;++i)n+=String.fromCharCode(127&r[i]);return n}function I(r,t,e){var n="";e=Math.min(r.length,e);for(var i=t;i<e;++i)n+=String.fromCharCode(r[i]);return n}function U(r,t,e){var n,i=r.length;(!t||t<0)&&(t=0),(!e||e<0||e>i)&&(e=i);for(var o="",f=t;f<e;++f)o+=(n=r[f])<16?"0"+n.toString(16):n.toString(16);return o}function P(r,t,e){for(var n=r.slice(t,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function j(r,t,e){if(r%1!=0||r<0)throw new RangeError("offset is not uint");if(r+t>e)throw new RangeError("Trying to access beyond buffer length")}function z(r,t,e,n,i,o){if(!y(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(e+n>r.length)throw new RangeError("Index out of range")}function Q(r,t,e,n){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(r.length-e,2);i<o;++i)r[e+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function W(r,t,e,n){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(r.length-e,4);i<o;++i)r[e+i]=t>>>8*(n?i:3-i)&255}function X(r,t,e,n){if(e+n>r.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function O(r,t,e,n,i){return i||X(r,0,e,4),a(r,t,e,n,23,4),e+4}function G(r,t,e,n,i){return i||X(r,0,e,8),a(r,t,e,n,52,8),e+8}d.prototype.slice=function(r,t){var e,n=this.length;if((r=~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<r&&(t=r),d.TYPED_ARRAY_SUPPORT)(e=this.subarray(r,t)).__proto__=d.prototype;else{var i=t-r;e=new d(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+r]}return e},d.prototype.readUIntLE=function(r,t,e){r|=0,t|=0,e||j(r,t,this.length);for(var n=this[r],i=1,o=0;++o<t&&(i*=256);)n+=this[r+o]*i;return n},d.prototype.readUIntBE=function(r,t,e){r|=0,t|=0,e||j(r,t,this.length);for(var n=this[r+--t],i=1;t>0&&(i*=256);)n+=this[r+--t]*i;return n},d.prototype.readUInt8=function(r,t){return t||j(r,1,this.length),this[r]},d.prototype.readUInt16LE=function(r,t){return t||j(r,2,this.length),this[r]|this[r+1]<<8},d.prototype.readUInt16BE=function(r,t){return t||j(r,2,this.length),this[r]<<8|this[r+1]},d.prototype.readUInt32LE=function(r,t){return t||j(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+16777216*this[r+3]},d.prototype.readUInt32BE=function(r,t){return t||j(r,4,this.length),16777216*this[r]+(this[r+1]<<16|this[r+2]<<8|this[r+3])},d.prototype.readIntLE=function(r,t,e){r|=0,t|=0,e||j(r,t,this.length);for(var n=this[r],i=1,o=0;++o<t&&(i*=256);)n+=this[r+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},d.prototype.readIntBE=function(r,t,e){r|=0,t|=0,e||j(r,t,this.length);for(var n=t,i=1,o=this[r+--n];n>0&&(i*=256);)o+=this[r+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},d.prototype.readInt8=function(r,t){return t||j(r,1,this.length),128&this[r]?-1*(255-this[r]+1):this[r]},d.prototype.readInt16LE=function(r,t){t||j(r,2,this.length);var e=this[r]|this[r+1]<<8;return 32768&e?4294901760|e:e},d.prototype.readInt16BE=function(r,t){t||j(r,2,this.length);var e=this[r+1]|this[r]<<8;return 32768&e?4294901760|e:e},d.prototype.readInt32LE=function(r,t){return t||j(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},d.prototype.readInt32BE=function(r,t){return t||j(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},d.prototype.readFloatLE=function(r,t){return t||j(r,4,this.length),u(this,r,!0,23,4)},d.prototype.readFloatBE=function(r,t){return t||j(r,4,this.length),u(this,r,!1,23,4)},d.prototype.readDoubleLE=function(r,t){return t||j(r,8,this.length),u(this,r,!0,52,8)},d.prototype.readDoubleBE=function(r,t){return t||j(r,8,this.length),u(this,r,!1,52,8)},d.prototype.writeUIntLE=function(r,t,e,n){r=+r,t|=0,e|=0,n||z(this,r,t,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[t]=255&r;++o<e&&(i*=256);)this[t+o]=r/i&255;return t+e},d.prototype.writeUIntBE=function(r,t,e,n){r=+r,t|=0,e|=0,n||z(this,r,t,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[t+i]=255&r;--i>=0&&(o*=256);)this[t+i]=r/o&255;return t+e},d.prototype.writeUInt8=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,1,255,0),d.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[t]=255&r,t+1},d.prototype.writeUInt16LE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8):Q(this,r,t,!0),t+2},d.prototype.writeUInt16BE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=r>>>8,this[t+1]=255&r):Q(this,r,t,!1),t+2},d.prototype.writeUInt32LE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=255&r):W(this,r,t,!0),t+4},d.prototype.writeUInt32BE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r):W(this,r,t,!1),t+4},d.prototype.writeIntLE=function(r,t,e,n){if(r=+r,t|=0,!n){var i=Math.pow(2,8*e-1);z(this,r,t,e,i-1,-i)}var o=0,f=1,u=0;for(this[t]=255&r;++o<e&&(f*=256);)r<0&&0===u&&0!==this[t+o-1]&&(u=1),this[t+o]=(r/f>>0)-u&255;return t+e},d.prototype.writeIntBE=function(r,t,e,n){if(r=+r,t|=0,!n){var i=Math.pow(2,8*e-1);z(this,r,t,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[t+o]=255&r;--o>=0&&(f*=256);)r<0&&0===u&&0!==this[t+o+1]&&(u=1),this[t+o]=(r/f>>0)-u&255;return t+e},d.prototype.writeInt8=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,1,127,-128),d.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[t]=255&r,t+1},d.prototype.writeInt16LE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8):Q(this,r,t,!0),t+2},d.prototype.writeInt16BE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=r>>>8,this[t+1]=255&r):Q(this,r,t,!1),t+2},d.prototype.writeInt32LE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,4,2147483647,-2147483648),d.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24):W(this,r,t,!0),t+4},d.prototype.writeInt32BE=function(r,t,e){return r=+r,t|=0,e||z(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),d.TYPED_ARRAY_SUPPORT?(this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r):W(this,r,t,!1),t+4},d.prototype.writeFloatLE=function(r,t,e){return O(this,r,t,!0,e)},d.prototype.writeFloatBE=function(r,t,e){return O(this,r,t,!1,e)},d.prototype.writeDoubleLE=function(r,t,e){return G(this,r,t,!0,e)},d.prototype.writeDoubleBE=function(r,t,e){return G(this,r,t,!1,e)},d.prototype.copy=function(r,t,e,n){if(e||(e=0),n||0===n||(n=this.length),t>=r.length&&(t=r.length),t||(t=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===r.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),r.length-t<n-e&&(n=r.length-t+e);var i,o=n-e;if(this===r&&e<t&&t<n)for(i=o-1;i>=0;--i)r[i+t]=this[i+e];else if(o<1e3||!d.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)r[i+t]=this[i+e];else Uint8Array.prototype.set.call(r,this.subarray(e,e+o),t);return o},d.prototype.fill=function(r,t,e,n){if("string"==typeof r){if("string"==typeof t?(n=t,t=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===r.length){var i=r.charCodeAt(0);i<256&&(r=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof r&&(r&=255);if(t<0||this.length<t||this.length<e)throw new RangeError("Out of range index");if(e<=t)return this;var o;if(t>>>=0,e=void 0===e?this.length:e>>>0,r||(r=0),"number"==typeof r)for(o=t;o<e;++o)this[o]=r;else{var f=y(r)?r:V(new d(r,n).toString()),u=f.length;for(o=0;o<e-t;++o)this[o+t]=f[o%u]}return this};var H=/[^+\/0-9A-Za-z-_]/g;function V(r,t){var e;t=t||1/0;for(var n=r.length,i=null,o=[],f=0;f<n;++f){if((e=r.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(t-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((t-=1)<0)break;o.push(e)}else if(e<2048){if((t-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((t-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function $(r){return function(r){var t,f,u,a,s,c;i||o();var h=r.length;if(h%4>0)throw new Error("Invalid string. Length must be a multiple of 4");c=new n(3*h/4-(s="="===r[h-2]?2:"="===r[h-1]?1:0)),u=s>0?h-4:h;var l=0;for(t=0,f=0;t<u;t+=4,f+=3)a=e[r.charCodeAt(t)]<<18|e[r.charCodeAt(t+1)]<<12|e[r.charCodeAt(t+2)]<<6|e[r.charCodeAt(t+3)],c[l++]=a>>16&255,c[l++]=a>>8&255,c[l++]=255&a;return 2===s?(a=e[r.charCodeAt(t)]<<2|e[r.charCodeAt(t+1)]>>4,c[l++]=255&a):1===s&&(a=e[r.charCodeAt(t)]<<10|e[r.charCodeAt(t+1)]<<4|e[r.charCodeAt(t+2)]>>2,c[l++]=a>>8&255,c[l++]=255&a),c}(function(r){if((r=function(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}(r).replace(H,"")).length<2)return"";for(;r.length%4!=0;)r+="=";return r}(r))}function q(r,t,e,n){for(var i=0;i<n&&!(i+e>=t.length||i>=r.length);++i)t[i+e]=r[i];return i}function Z(r){return!!r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r)}var _=2147483647,J=36,K=1,Y=26,rr=38,tr=700,er=72,nr=128,ir="-",or=/[^\x20-\x7E]/,fr=/[\x2E\u3002\uFF0E\uFF61]/g,ur={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ar=J-K,sr=Math.floor,cr=String.fromCharCode;function hr(r){throw new RangeError(ur[r])}function lr(r,t){for(var e=r.length,n=[];e--;)n[e]=t(r[e]);return n}function dr(r,t){var e=r.split("@"),n="";return e.length>1&&(n=e[0]+"@",r=e[1]),n+lr((r=r.replace(fr,".")).split("."),t).join(".")}function wr(r){for(var t,e,n=[],i=0,o=r.length;i<o;)(t=r.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(e=r.charCodeAt(i++)))?n.push(((1023&t)<<10)+(1023&e)+65536):(n.push(t),i--):n.push(t);return n}function vr(r,t){return r+22+75*(r<26)-((0!=t)<<5)}function br(r,t,e){var n=0;for(r=e?sr(r/tr):r>>1,r+=sr(r/t);r>ar*Y>>1;n+=J)r=sr(r/ar);return sr(n+(ar+1)*r/(r+rr))}function gr(r){var t,e,n,i,o,f,u,a,s,c,h,l,d,w,v,b=[];for(l=(r=wr(r)).length,t=nr,e=0,o=er,f=0;f<l;++f)(h=r[f])<128&&b.push(cr(h));for(n=i=b.length,i&&b.push(ir);n<l;){for(u=_,f=0;f<l;++f)(h=r[f])>=t&&h<u&&(u=h);for(u-t>sr((_-e)/(d=n+1))&&hr("overflow"),e+=(u-t)*d,t=u,f=0;f<l;++f)if((h=r[f])<t&&++e>_&&hr("overflow"),h==t){for(a=e,s=J;!(a<(c=s<=o?K:s>=o+Y?Y:s-o));s+=J)b.push(cr(vr(c+(v=a-c)%(w=J-c),0))),a=sr(v/w);b.push(cr(vr(a,0))),o=br(e,d,n==i),e=0,++n}++e,++t}return b.join("")}const pr=function(r){return dr(r,(function(r){return or.test(r)?"xn--"+gr(r):r}))},yr={hasOwn:Object.prototype.hasOwnProperty,indexOf:Array.prototype.indexOf,defaultThreshold:16,maxIPv6Groups:8,categories:{valid:1,dnsWarn:7,rfc5321:15,cfws:31,deprecated:63,rfc5322:127,error:255},diagnoses:{valid:0,rfc5321TLD:9,rfc5321TLDNumeric:10,rfc5321QuotedString:11,rfc5321AddressLiteral:12,cfwsComment:17,cfwsFWS:18,undesiredNonAscii:25,deprecatedLocalPart:33,deprecatedFWS:34,deprecatedQTEXT:35,deprecatedQP:36,deprecatedComment:37,deprecatedCTEXT:38,deprecatedIPv6:39,deprecatedCFWSNearAt:49,rfc5322Domain:65,rfc5322TooLong:66,rfc5322LocalTooLong:67,rfc5322DomainTooLong:68,rfc5322LabelTooLong:69,rfc5322DomainLiteral:70,rfc5322DomainLiteralOBSDText:71,rfc5322IPv6GroupCount:72,rfc5322IPv62x2xColon:73,rfc5322IPv6BadCharacter:74,rfc5322IPv6MaxGroups:75,rfc5322IPv6ColonStart:76,rfc5322IPv6ColonEnd:77,errExpectingDTEXT:129,errNoLocalPart:130,errNoDomain:131,errConsecutiveDots:132,errATEXTAfterCFWS:133,errATEXTAfterQS:134,errATEXTAfterDomainLiteral:135,errExpectingQPair:136,errExpectingATEXT:137,errExpectingQTEXT:138,errExpectingCTEXT:139,errBackslashEnd:140,errDotStart:141,errDotEnd:142,errDomainHyphenStart:143,errDomainHyphenEnd:144,errUnclosedQuotedString:145,errUnclosedComment:146,errUnclosedDomainLiteral:147,errFWSCRLFx2:148,errFWSCRLFEnd:149,errCRNoLF:150,errUnknownTLD:160,errDomainTooShort:161,errDotAfterDomainLiteral:162},components:{localpart:0,domain:1,literal:2,contextComment:3,contextFWS:4,contextQuotedString:5,contextQuotedPair:6}};yr.specials=function(){const r=new Array(256);r.fill(!1);for(let t=0;t<'()<>[]:;@\\,."'.length;++t)r['()<>[]:;@\\,."'.codePointAt(t)]=!0;return function(t){return r[t]}}(),yr.c0Controls=function(){const r=new Array(256);r.fill(!1);for(let t=0;t<33;++t)r[t]=!0;return function(t){return r[t]}}(),yr.c1Controls=function(){const r=new Array(256);r.fill(!1);for(let t=127;t<160;++t)r[t]=!0;return function(t){return r[t]}}(),yr.regex={ipV4:/\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipV6:/^[a-fA-F\d]{0,4}$/},yr.normalizeSupportsNul="\0"==="\0".normalize("NFC"),yr.nulNormalize=function(r){return r.split("\0").map(r=>r.normalize("NFC")).join("\0")},yr.normalize=function(r){return r.normalize("NFC")},yr.normalizeSupportsNul||(yr.normalize=function(r){return r.indexOf("\0")>=0?yr.nulNormalize(r):r.normalize("NFC")}),yr.checkIpV6=function(r){return r.every(r=>yr.regex.ipV6.test(r))},yr.isIterable=Array.isArray,"undefined"!=typeof Symbol&&(yr.isIterable=r=>Array.isArray(r)||!!r&&"object"==typeof r&&"function"==typeof r[Symbol.iterator]),yr._isSet=r=>r instanceof Set,yr._isMap=r=>r instanceof Map,yr.isSet=yr._isSet,yr.isMap=yr._isMap,yr.normalizeTable=function(r){return yr.isSet(r)||Array.isArray(r)?r:yr.isMap(r)?r.keys():Object.keys(r)},yr.canonicalizeAtom=function(r){return pr(r).toLowerCase()},yr.includesMapped=function(r,t,e){for(const n of r)if(e===t(n))return!0;return!1},yr.validDomain=function(r,t){const e=yr.canonicalizeAtom(r);return t.tldBlacklist?!yr.includesMapped(yr.normalizeTable(t.tldBlacklist),yr.canonicalizeAtom,e):yr.includesMapped(yr.normalizeTable(t.tldWhitelist),yr.canonicalizeAtom,e)},yr.hasDomainLiteralThenAtom=function(r){let t=!1;for(let e=0;e<r.length;++e)if("["===r[e][0])t=!0;else if(t)return!0;return!1};var mr={validate:yr.validate=function(r,t,e){if(t=t||{},"string"!=typeof r)throw new TypeError("expected string email");let n,i;if(r=yr.normalize(r),"function"==typeof t&&(e=t,t={}),"function"!=typeof e&&(e=null),"number"==typeof t.errorLevel?(n=!0,i=t.errorLevel):(n=!!t.errorLevel,i=yr.diagnoses.valid),t.tldWhitelist)if("string"==typeof t.tldWhitelist)t.tldWhitelist=[t.tldWhitelist];else if("object"!=typeof t.tldWhitelist)throw new TypeError("expected array or object tldWhitelist");if(t.tldBlacklist)if("string"==typeof t.tldBlacklist)t.tldBlacklist=[t.tldBlacklist];else if("object"!=typeof t.tldBlacklist)throw new TypeError("expected array or object tldBlacklist");if(t.minDomainAtoms&&(t.minDomainAtoms!==(0|+t.minDomainAtoms)||t.minDomainAtoms<0))throw new TypeError("expected positive integer minDomainAtoms");if(t.excludeDiagnoses){if(!yr.isIterable(t.excludeDiagnoses))throw new TypeError("expected iterable excludeDiagnoses");yr.isSet(t.excludeDiagnoses)||(t.excludeDiagnoses=new Set(t.excludeDiagnoses))}let o=yr.diagnoses.valid;const f=r=>{!(r>o)||t.excludeDiagnoses&&t.excludeDiagnoses.has(r)||(o=r)};void 0!==t.allowUnicode&&!t.allowUnicode&&/[^\x00-\x7f]/.test(r)&&f(yr.diagnoses.undesiredNonAscii);const u={now:yr.components.localpart,prev:yr.components.localpart,stack:[yr.components.localpart]};let a="";const s={local:"",domain:""},c={locals:[""],domains:[""]};let h,l=0,w=0,v=0,b=!1,g=!1;const p=r.length;let y;for(let t=0;t<p;t+=y.length){switch(y=String.fromCodePoint(r.codePointAt(t)),u.now){case yr.components.localpart:switch(y){case"(":0===w?f(0===l?yr.diagnoses.cfwsComment:yr.diagnoses.deprecatedComment):(f(yr.diagnoses.cfwsComment),g=!0),u.stack.push(u.now),u.now=yr.components.contextComment;break;case".":0===w?f(0===l?yr.diagnoses.errDotStart:yr.diagnoses.errConsecutiveDots):(g&&f(yr.diagnoses.deprecatedLocalPart),g=!1,w=0,++l,s.local+=y,c.locals[l]="");break;case'"':0===w?(f(0===l?yr.diagnoses.rfc5321QuotedString:yr.diagnoses.deprecatedLocalPart),s.local+=y,c.locals[l]+=y,w+=d.byteLength(y,"utf8"),g=!0,u.stack.push(u.now),u.now=yr.components.contextQuotedString):f(yr.diagnoses.errExpectingATEXT);break;case"\r":if(p===++t||"\n"!==r[t]){f(yr.diagnoses.errCRNoLF);break}case" ":case"\t":0===w?f(0===l?yr.diagnoses.cfwsFWS:yr.diagnoses.deprecatedFWS):g=!0,u.stack.push(u.now),u.now=yr.components.contextFWS,a=y;break;case"@":if(1!==u.stack.length)throw new Error("unexpected item on context stack");0===s.local.length?f(yr.diagnoses.errNoLocalPart):0===w?f(yr.diagnoses.errDotEnd):d.byteLength(s.local,"utf8")>64?f(yr.diagnoses.rfc5322LocalTooLong):u.prev!==yr.components.contextComment&&u.prev!==yr.components.contextFWS||f(yr.diagnoses.deprecatedCFWSNearAt),u.now=yr.components.domain,u.stack[0]=yr.components.domain,l=0,w=0,g=!1;break;default:if(g)switch(u.prev){case yr.components.contextComment:case yr.components.contextFWS:f(yr.diagnoses.errATEXTAfterCFWS);break;case yr.components.contextQuotedString:f(yr.diagnoses.errATEXTAfterQS);break;default:throw new Error("more atext found where none is allowed, but unrecognized prev context: "+u.prev)}else u.prev=u.now,h=y.codePointAt(0),(yr.specials(h)||yr.c0Controls(h)||yr.c1Controls(h))&&f(yr.diagnoses.errExpectingATEXT),s.local+=y,c.locals[l]+=y,w+=d.byteLength(y,"utf8")}break;case yr.components.domain:switch(y){case"(":0===w?f(0===l?yr.diagnoses.deprecatedCFWSNearAt:yr.diagnoses.deprecatedComment):(g=!0,f(yr.diagnoses.cfwsComment)),u.stack.push(u.now),u.now=yr.components.contextComment;break;case".":const e=pr(c.domains[l]).length;0===w?f(0===l?yr.diagnoses.errDotStart:yr.diagnoses.errConsecutiveDots):b?f(yr.diagnoses.errDomainHyphenEnd):e>63&&f(yr.diagnoses.rfc5322LabelTooLong),g=!1,w=0,c.domains[++l]="",s.domain+=y;break;case"[":0===c.domains[l].length?(s.domain.length&&f(yr.diagnoses.errDotAfterDomainLiteral),g=!0,w+=d.byteLength(y,"utf8"),u.stack.push(u.now),u.now=yr.components.literal,s.domain+=y,c.domains[l]+=y,s.literal=""):f(yr.diagnoses.errExpectingATEXT);break;case"\r":if(p===++t||"\n"!==r[t]){f(yr.diagnoses.errCRNoLF);break}case" ":case"\t":0===w?f(0===l?yr.diagnoses.deprecatedCFWSNearAt:yr.diagnoses.deprecatedFWS):(f(yr.diagnoses.cfwsFWS),g=!0),u.stack.push(u.now),u.now=yr.components.contextFWS,a=y;break;default:if(g)switch(u.prev){case yr.components.contextComment:case yr.components.contextFWS:f(yr.diagnoses.errATEXTAfterCFWS);break;case yr.components.literal:f(yr.diagnoses.errATEXTAfterDomainLiteral);break;default:throw new Error("more atext found where none is allowed, but unrecognized prev context: "+u.prev)}h=y.codePointAt(0),b=!1,yr.specials(h)||yr.c0Controls(h)||yr.c1Controls(h)?f(yr.diagnoses.errExpectingATEXT):"-"===y?(0===w&&f(yr.diagnoses.errDomainHyphenStart),b=!0):(h<48||h>122&&h<192||h>57&&h<65||h>90&&h<97)&&f(yr.diagnoses.rfc5322Domain),s.domain+=y,c.domains[l]+=y,w+=d.byteLength(y,"utf8")}break;case yr.components.literal:switch(y){case"]":if(o<yr.categories.deprecated){let r=-1,t=s.literal;const e=yr.regex.ipV4.exec(t);if(e&&0!==(r=e.index)&&(t=t.slice(0,r)+"0:0"),0===r)f(yr.diagnoses.rfc5321AddressLiteral);else if("ipv6:"!==t.slice(0,5).toLowerCase())f(yr.diagnoses.rfc5322DomainLiteral);else{const e=t.slice(5);let n=yr.maxIPv6Groups;const i=e.split(":");~(r=e.indexOf("::"))?r!==e.lastIndexOf("::")?f(yr.diagnoses.rfc5322IPv62x2xColon):(0!==r&&r!==e.length-2||++n,i.length>n?f(yr.diagnoses.rfc5322IPv6MaxGroups):i.length===n&&f(yr.diagnoses.deprecatedIPv6)):i.length!==n&&f(yr.diagnoses.rfc5322IPv6GroupCount),":"===e[0]&&":"!==e[1]?f(yr.diagnoses.rfc5322IPv6ColonStart):":"===e[e.length-1]&&":"!==e[e.length-2]?f(yr.diagnoses.rfc5322IPv6ColonEnd):yr.checkIpV6(i)?f(yr.diagnoses.rfc5321AddressLiteral):f(yr.diagnoses.rfc5322IPv6BadCharacter)}}else f(yr.diagnoses.rfc5322DomainLiteral);s.domain+=y,c.domains[l]+=y,w+=d.byteLength(y,"utf8"),u.prev=u.now,u.now=u.stack.pop();break;case"\\":f(yr.diagnoses.rfc5322DomainLiteralOBSDText),u.stack.push(u.now),u.now=yr.components.contextQuotedPair;break;case"\r":if(p===++t||"\n"!==r[t]){f(yr.diagnoses.errCRNoLF);break}case" ":case"\t":f(yr.diagnoses.cfwsFWS),u.stack.push(u.now),u.now=yr.components.contextFWS,a=y;break;default:if(127!==(h=y.codePointAt(0))&&yr.c1Controls(h)||0===h||"["===y){f(yr.diagnoses.errExpectingDTEXT);break}(yr.c0Controls(h)||127===h)&&f(yr.diagnoses.rfc5322DomainLiteralOBSDText),s.literal+=y,s.domain+=y,c.domains[l]+=y,w+=d.byteLength(y,"utf8")}break;case yr.components.contextQuotedString:switch(y){case"\\":u.stack.push(u.now),u.now=yr.components.contextQuotedPair;break;case"\r":if(p===++t||"\n"!==r[t]){f(yr.diagnoses.errCRNoLF);break}case"\t":s.local+=" ",c.locals[l]+=" ",w+=d.byteLength(y,"utf8"),f(yr.diagnoses.cfwsFWS),u.stack.push(u.now),u.now=yr.components.contextFWS,a=y;break;case'"':s.local+=y,c.locals[l]+=y,w+=d.byteLength(y,"utf8"),u.prev=u.now,u.now=u.stack.pop();break;default:127!==(h=y.codePointAt(0))&&yr.c1Controls(h)||0===h||10===h?f(yr.diagnoses.errExpectingQTEXT):(yr.c0Controls(h)||127===h)&&f(yr.diagnoses.deprecatedQTEXT),s.local+=y,c.locals[l]+=y,w+=d.byteLength(y,"utf8")}break;case yr.components.contextQuotedPair:127!==(h=y.codePointAt(0))&&yr.c1Controls(h)?f(yr.diagnoses.errExpectingQPair):(h<31&&9!==h||127===h)&&f(yr.diagnoses.deprecatedQP),u.prev=u.now,u.now=u.stack.pop();const e="\\"+y;switch(u.now){case yr.components.contextComment:break;case yr.components.contextQuotedString:s.local+=e,c.locals[l]+=e,w+=2;break;case yr.components.literal:s.domain+=e,c.domains[l]+=e,w+=2;break;default:throw new Error("quoted pair logic invoked in an invalid context: "+u.now)}break;case yr.components.contextComment:switch(y){case"(":u.stack.push(u.now),u.now=yr.components.contextComment;break;case")":u.prev=u.now,u.now=u.stack.pop();break;case"\\":u.stack.push(u.now),u.now=yr.components.contextQuotedPair;break;case"\r":if(p===++t||"\n"!==r[t]){f(yr.diagnoses.errCRNoLF);break}case" ":case"\t":f(yr.diagnoses.cfwsFWS),u.stack.push(u.now),u.now=yr.components.contextFWS,a=y;break;default:if(0===(h=y.codePointAt(0))||10===h||127!==h&&yr.c1Controls(h)){f(yr.diagnoses.errExpectingCTEXT);break}(yr.c0Controls(h)||127===h)&&f(yr.diagnoses.deprecatedCTEXT)}break;case yr.components.contextFWS:if("\r"===a){if("\r"===y){f(yr.diagnoses.errFWSCRLFx2);break}++v>1?f(yr.diagnoses.deprecatedFWS):v=1}switch(y){case"\r":p!==++t&&"\n"===r[t]||f(yr.diagnoses.errCRNoLF);break;case" ":case"\t":break;default:"\r"===a&&f(yr.diagnoses.errFWSCRLFEnd),v=0,u.prev=u.now,u.now=u.stack.pop(),--t}a=y;break;default:throw new Error("unknown context: "+u.now)}if(o>yr.categories.rfc5322)break}if(o<yr.categories.rfc5322){const r=pr(s.domain).length;u.now===yr.components.contextQuotedString?f(yr.diagnoses.errUnclosedQuotedString):u.now===yr.components.contextQuotedPair?f(yr.diagnoses.errBackslashEnd):u.now===yr.components.contextComment?f(yr.diagnoses.errUnclosedComment):u.now===yr.components.literal?f(yr.diagnoses.errUnclosedDomainLiteral):"\r"===y?f(yr.diagnoses.errFWSCRLFEnd):0===s.domain.length?f(yr.diagnoses.errNoDomain):0===w?f(yr.diagnoses.errDotEnd):b?f(yr.diagnoses.errDomainHyphenEnd):r>255?f(yr.diagnoses.rfc5322DomainTooLong):d.byteLength(s.local,"utf8")+r+1>254?f(yr.diagnoses.rfc5322TooLong):w>63?f(yr.diagnoses.rfc5322LabelTooLong):t.minDomainAtoms&&c.domains.length<t.minDomainAtoms&&(1!==c.domains.length||"["!==c.domains[0][0])?f(yr.diagnoses.errDomainTooShort):yr.hasDomainLiteralThenAtom(c.domains)?f(yr.diagnoses.errDotAfterDomainLiteral):(t.tldWhitelist||t.tldBlacklist)&&(yr.validDomain(c.domains[l],t)||f(yr.diagnoses.errUnknownTLD))}o<yr.categories.dnsWarn&&c.domains[l].codePointAt(0)<=57&&f(yr.diagnoses.rfc5321TLDNumeric),o<i&&(o=yr.diagnoses.valid);const m=n?o:o<yr.defaultThreshold;return e&&e(m),m},diagnoses:yr.validate.diagnoses=function(){const r={},t=Object.keys(yr.diagnoses);for(let e=0;e<t.length;++e){const n=t[e];r[n]=yr.diagnoses[n]}return r}(),normalize:yr.normalize};export{mr as I};