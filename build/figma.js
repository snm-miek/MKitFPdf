/*! For license information please see figma.js.LICENSE.txt */
(()=>{var __webpack_modules__={9742:(t,e)=>{"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,o=f(t),s=o[0],u=o[1],a=new i(function(t,e,r){return 3*(e+r)/4-r}(0,s,u)),c=0,h=u>0?s-4:s;for(r=0;r<h;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=255&e;return 2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,a[c++]=255&e),1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,a[c++]=e>>8&255,a[c++]=255&e),a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=16383,f=0,a=n-i;f<a;f+=s)o.push(u(t,f,f+s>a?a:f+s));return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function u(t,e,n){for(var i,o,s=[],f=e;f<n;f+=3)i=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:(t,e,r)=>{"use strict";const n=r(9742),i=r(645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=u,e.INSPECT_MAX_BYTES=50;const s=2147483647;function f(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return a(t,e,r)}function a(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|d(t,e);let n=f(r);const i=n.write(t,e);return i!==r&&(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(H(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(H(t,ArrayBuffer)||t&&H(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(H(t,SharedArrayBuffer)||t&&H(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,e,r);const i=function(t){if(u.isBuffer(t)){const e=0|g(t.length),r=f(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||J(t.length)?f(0):l(t):"Buffer"===t.type&&Array.isArray(t.data)?l(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return c(t),f(t<0?0:0|g(t))}function l(t){const e=t.length<0?0:0|g(t.length),r=f(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,u.prototype),n}function g(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function d(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||H(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return Y(t).length;default:if(i)return n?-1:q(t).length;e=(""+e).toLowerCase(),i=!0}}function y(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return R(this,e,r);case"ascii":return P(this,e,r);case"latin1":case"binary":return U(this,e,r);case"base64":return v(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function _(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),J(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){let o,s=1,f=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,f/=2,u/=2,r/=2}function a(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let n=-1;for(o=r;o<f;o++)if(a(t,o)===a(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*s}else-1!==n&&(o-=o-n),n=-1}else for(r+u>f&&(r=f-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(a(t,o+n)!==a(e,n)){r=!1;break}if(r)return o}return-1}function E(t,e,r,n){r=Number(r)||0;const i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=e.length;let s;for(n>o/2&&(n=o/2),s=0;s<n;++s){const n=parseInt(e.substr(2*s,2),16);if(J(n))return s;t[r+s]=n}return s}function b(t,e,r,n){return V(q(e,t.length-r),t,r,n)}function B(t,e,r,n){return V(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return V(Y(e),t,r,n)}function I(t,e,r,n){return V(function(t,e){let r,n,i;const o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function v(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function R(t,e,r){r=Math.min(t.length,r);const n=[];let i=e;for(;i<r;){const e=t[i];let o=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=r){let r,n,f,u;switch(s){case 1:e<128&&(o=e);break;case 2:r=t[i+1],128==(192&r)&&(u=(31&e)<<6|63&r,u>127&&(o=u));break;case 3:r=t[i+1],n=t[i+2],128==(192&r)&&128==(192&n)&&(u=(15&e)<<12|(63&r)<<6|63&n,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:r=t[i+1],n=t[i+2],f=t[i+3],128==(192&r)&&128==(192&n)&&128==(192&f)&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&f,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(t){const e=t.length;if(e<=O)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=O));return r}(n)}u.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,e,r){return a(t,e,r)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,e,r){return function(t,e,r){return c(t),t<=0?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)}(t,e,r)},u.allocUnsafe=function(t){return h(t)},u.allocUnsafeSlow=function(t){return h(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,e){if(H(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),H(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=u.allocUnsafe(e);let i=0;for(r=0;r<t.length;++r){let e=t[r];if(H(e,Uint8Array))i+e.length>n.length?(u.isBuffer(e)||(e=u.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else{if(!u.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,i)}i+=e.length}return n},u.byteLength=d,u.prototype._isBuffer=!0,u.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)_(this,e,e+1);return this},u.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)_(this,e,e+3),_(this,e+1,e+2);return this},u.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)_(this,e,e+7),_(this,e+1,e+6),_(this,e+2,e+5),_(this,e+3,e+4);return this},u.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?R(this,0,t):y.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(t,e,r,n,i){if(H(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;let o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0);const f=Math.min(o,s),a=this.slice(n,i),c=t.slice(e,r);for(let t=0;t<f;++t)if(a[t]!==c[t]){o=a[t],s=c[t];break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return b(this,t,e,r);case"ascii":case"latin1":case"binary":return B(this,t,e,r);case"base64":return A(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const O=4096;function P(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function U(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function T(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=X[t[n]];return i}function x(t,e,r){const n=t.slice(e,r);let i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}function S(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function M(t,e,r,n,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function L(t,e,r,n,i){G(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function C(t,e,r,n,i){G(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function D(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function F(t,e,r,n,o){return e=+e,r>>>=0,o||D(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,o){return e=+e,r>>>=0,o||D(t,0,r,8),i.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||S(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||S(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||S(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||S(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||S(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readBigUInt64LE=Z((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||K(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),u.prototype.readBigUInt64BE=Z((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||K(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),u.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return t>>>=0,e||S(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||S(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){t>>>=0,e||S(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||S(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||S(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readBigInt64LE=Z((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||K(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),u.prototype.readBigInt64BE=Z((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||K(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),u.prototype.readFloatLE=function(t,e){return t>>>=0,e||S(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||S(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||S(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||S(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||M(this,t,e,r,Math.pow(2,8*r)-1,0);let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||M(this,t,e,r,Math.pow(2,8*r)-1,0);let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigUInt64LE=Z((function(t,e=0){return L(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeBigUInt64BE=Z((function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);M(this,t,e,r,n-1,-n)}let i=0,o=1,s=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);M(this,t,e,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigInt64LE=Z((function(t,e=0){return L(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeBigInt64BE=Z((function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeFloatLE=function(t,e,r){return F(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return F(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(!u.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{const o=u.isBuffer(t)?t:u.from(t,n),s=o.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%s]}return this};const k={};function $(t,e,r){k[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function j(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function G(t,e,r,n,i,o){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let i;throw i=o>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new k.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,r){W(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||K(e,t.length-(r+1))}(n,i,o)}function W(t,e){if("number"!=typeof t)throw new k.ERR_INVALID_ARG_TYPE(e,"number",t)}function K(t,e,r){if(Math.floor(t)!==t)throw W(t,r),new k.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new k.ERR_BUFFER_OUT_OF_BOUNDS;throw new k.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=j(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=j(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n}),RangeError);const z=/[^+/0-9A-Za-z-_]/g;function q(t,e){let r;e=e||1/0;const n=t.length;let i=null;const o=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function Y(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(z,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function H(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function J(t){return t!=t}const X=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function Z(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},645:(t,e)=>{e.read=function(t,e,r,n,i){var o,s,f=8*i-n-1,u=(1<<f)-1,a=u>>1,c=-7,h=r?i-1:0,l=r?-1:1,p=t[e+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=f;c>0;o=256*o+t[e+h],h+=l,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=l,c-=8);if(0===o)o=1-a;else{if(o===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=a}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,f,u,a=8*o-i-1,c=(1<<a)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+h>=1?l/u:l*Math.pow(2,1-h))*u>=2&&(s++,u/=2),s+h>=c?(f=0,s=c):s+h>=1?(f=(e*u-1)*Math.pow(2,i),s+=h):(f=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&f,p+=g,f/=256,i-=8);for(s=s<<i|f,a+=i;a>0;t[r+p]=255&s,p+=g,s/=256,a-=8);t[r+p-g]|=128*d}},5634:t=>{var e=function(t,e){var r,n,i=1,o=0,s=0,f=String.alphabet;function u(t,e,n){if(n){for(r=e;(n=u(t,r))<76&&n>65;)++r;return+t.slice(e-1,r)}return(n=f&&f.indexOf(t.charAt(e)))>-1?n+76:(n=t.charCodeAt(e)||0)<45||n>127?n:n<46?65:n<48?n-1:n<58?n+18:n<65?n-11:n<91?n+11:n<97?n-37:n<123?n+5:n-63}if((t+="")!=(e+=""))for(;i;)if(n=u(t,o++),i=u(e,s++),n<76&&i<76&&n>66&&i>66&&(n=u(t,o,o),i=u(e,s,o=r),s=r),n!=i)return n<i?-1:1;return 0};try{t.exports=e}catch(t){String.naturalCompare=e}},5496:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var utilities__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4002),Buffer=__webpack_require__(8764).Buffer,__awaiter=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function f(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,f)}u((n=n.apply(t,e||[])).next())}))};const apiKEY="1255146474787882010";function Encode2(t){const e=Buffer.from(t);let r="";for(const t of e)r+=t>=127?"&#"+t+";":String.fromCharCode(t);return r}function Encode(t){let e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);e+=n>=127?"&#"+n+";":String.fromCharCode(n)}return e}const getTextNodeInfo=(t,e)=>__awaiter(void 0,void 0,void 0,(function*(){figma&&t.componentPropertyReferences&&figma.currentPage;let r=Encode(t.name),n=null,i={x:0,y:0};return t.absoluteBoundingBox&&e.absoluteBoundingBox&&(n={x:t.absoluteBoundingBox.x-e.absoluteBoundingBox.x,y:t.absoluteBoundingBox.y-e.absoluteBoundingBox.y}),t.absoluteRenderBounds&&e.absoluteRenderBounds&&(i={x:t.absoluteRenderBounds.x-e.absoluteRenderBounds.x-t.x,y:t.absoluteRenderBounds.y-e.absoluteRenderBounds.y-t.y}),{id:t.id,name:r,visible:t.visible,x:t.x,y:t.y,renderOffset:i,offset:getParentFrameOffset(t.parent,e),offsetTop:n,absoluteBoundingBox:t.absoluteBoundingBox,width:t.width,height:t.height,textAutoResize:t.textAutoResize,textAlignHorizontal:t.textAlignHorizontal,textAlignVertical:t.textAlignVertical,leadingTrim:t.leadingTrim,rotation:t.rotation,paragraphIndent:t.paragraphIndent,paragraphSpacing:t.paragraphSpacing,opacity:t.opacity,stroke:{strokes:t.strokes,strokeAlign:t.strokeAlign,strokeCap:t.strokeCap,strokeJoin:t.strokeJoin,strokeWeight:t.strokeWeight},style:t.getStyledTextSegments(["fontSize","fontName","fontWeight","textDecoration","textCase","lineHeight","letterSpacing","fills","textStyleId","fillStyleId","listOptions","indentation","hyperlink"]),json:null,parentJson:null}})),getSvgNamesForNodes=(t,e)=>__awaiter(void 0,void 0,void 0,(function*(){let r={names:{},ids:{}},n={};const i=[],o=[];yield function t(e,s){return __awaiter(this,void 0,void 0,(function*(){if(e.visible){let f="";const u=e.name;n[u]?(f="_"+(n[u]+1),n[u]+=1):n[u]=1;const a=u+f;if(r.names[a]=""+e.id,r.names[Encode(a)]=""+e.id,r.names[Encode2(a)]=""+e.id,r.ids[""+e.id]=1,"TEXT"==e.type&&(i.push(e),e.componentPropertyReferences&&o.push(e)),e.children)for(const r of e.children)yield t(r,s)}}))}(t,t),t.parent;const s=figma.currentPage.selection;try{figma.currentPage.selection=o}catch(t){}for(const r of i)e.push(yield getTextNodeInfo(r,t));return figma.currentPage.selection=s,r}));function getParentFrameOffset(t,e){if(t.id==e.id)return{x:0,y:0};if(t.parent){let r=getParentFrameOffset(t.parent,e);if("FRAME"==t.type||"INSTANCE"==t.type||"COMPONENT"==t.type||"COMPONENT_SET"==t.type)return{x:t.x+r.x,y:t.y+r.y};if("GROUP"==t.type)return r}return{x:0,y:0}}function collectFrameInfo(t,e){return __awaiter(this,void 0,void 0,(function*(){let r="";if(!e.shortInfo)try{r=yield t.exportAsync({format:"SVG_STRING",svgIdAttribute:!0,svgOutlineText:!1})}catch(e){console.error("PDF_GENERATOR exportAsync ",e,t,t.name)}const n=[],i=e.shortInfo?{}:yield getSvgNamesForNodes(t,n);return{svg:r,textInfos:n,width:t.width,height:t.height,id:t.id,name:t.name,x:t.x,y:t.y,absoluteBoundingBox:t.absoluteBoundingBox,nodeNames:i.names}}))}function exportAllPages(t){return __awaiter(this,void 0,void 0,(function*(){const e=figma.root.getPluginData(apiKEY),r={name:figma.root.name,id:figma.root.id,pages:[],printFrames:[],pluginData:e};figma.skipInvisibleInstanceChildren=!0;const n=figma.root.findAllWithCriteria({types:["PAGE"]});for(const e of n){const n={name:e.name,id:e.id,frames:[]};for(const r of e.children)"FRAME"==r.type&&n.frames.push(yield collectFrameInfo(r,t));r.pages.push(n)}(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("PDF_GENERATOR_RESULT",r)}))}function exportFrame(t){return __awaiter(this,void 0,void 0,(function*(){const e=figma.root.getPluginData(apiKEY),r={name:figma.root.name,id:figma.root.id,pages:[],printFrames:[],pluginData:e};figma.skipInvisibleInstanceChildren=!0;const n=figma.root.findAllWithCriteria({types:["FRAME"]});for(const e of n)if(e.id==t){let t=null,n=e;for(;n;){if(n.parent&&"PAGE"==n.parent.type){t=n.parent;break}if(!n)break;n=null==n?void 0:n.parent}if(t){const n={name:t.name,id:t.id,frames:[]};n.frames.push(yield collectFrameInfo(e,{shortInfo:!1,showPreviews:!1,useAllFrames:!1})),r.pages.push(n)}break}(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("PDF_FRAME_RESULT",r)}))}function exportSelectPages(t){return __awaiter(this,void 0,void 0,(function*(){const e=figma.root.getPluginData(apiKEY),r={name:figma.root.name,id:figma.root.id,pages:[],printFrames:[],pluginData:e},n=figma.currentPage.selection;if(n.length>0){const e={};for(const t of n)if("FRAME"==t.type){let r=null,n=t;for(;n;){if(n.parent&&"PAGE"==n.parent.type){r=n.parent;break}if(!n)break;n=null==n?void 0:n.parent}r&&r.id&&(e[r.id]||(e[r.id]={page:r,frames:[]}),e[r.id].frames.push(t))}for(const n of Object.values(e)){const e={name:n.page.name,id:n.page.id,frames:[]};for(const r of n.frames)e.frames.push(yield collectFrameInfo(r,t));r.pages.push(e)}}(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("PDF_GENERATOR_RESULT",r)}))}function exportSelectFrames(){return __awaiter(this,void 0,void 0,(function*(){const t=figma.currentPage.selection;let e=[];for(const r of t)"FRAME"==r.type&&e.push(yield collectFrameInfo(r,{shortInfo:!1,showPreviews:!1,useAllFrames:!1}));return{state:"ok",type:"framedata",payload:e}}))}(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("GLOBAL_OPTION",(function(t){return __awaiter(this,void 0,void 0,(function*(){if(t)return void(yield figma.clientStorage.setAsync("GLOBAL_OPTION",t));const e=yield figma.clientStorage.getAsync("GLOBAL_OPTION");(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("GLOBAL_OPTION",e)}))})),(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("PLUGIN_DATA",(function(t){return __awaiter(this,void 0,void 0,(function*(){if(t)return void figma.root.setPluginData(apiKEY,t);const e=figma.root.getPluginData(apiKEY);(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("PLUGIN_DATA",e)}))})),(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("PDF_GENERATOR",(function(t){return __awaiter(this,void 0,void 0,(function*(){try{return t.useAllFrames?yield exportAllPages(t):yield exportSelectPages(t)}catch(t){console.log("PDF_GENERATOR exception ",t)}}))})),(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("PDF_FRAME",(function(t){return __awaiter(this,void 0,void 0,(function*(){try{return yield exportFrame(t.frameId)}catch(t){console.log("PDF_GENERATOR exception ",t)}}))})),figma.on("selectionchange",(()=>__awaiter(void 0,void 0,void 0,(function*(){const t=figma.currentPage.selection;let e=0;for(const r of t)"FRAME"==r.type&&e++;(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("FIGMA_SELECTIONCHANGE",{frames:e})})))),(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("USER_SCRIPT",(function(data){return __awaiter(this,void 0,void 0,(function*(){try{if(data.func)"exportSelectFrames"===data.func&&(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("USER_SCRIPT",yield exportSelectFrames());else{const result=eval(data.script);result&&result.then?result.then((t=>{(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("USER_SCRIPT",t)})):(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("USER_SCRIPT",result)}}catch(t){(0,utilities__WEBPACK_IMPORTED_MODULE_0__.j8)("USER_SCRIPT",{state:"FAILED",e:""+t})}}))}))},4002:(t,e,r)=>{"use strict";r.d(e,{j8:()=>a,on:()=>u});const n="a-f\\d",i=`#?[${n}]{3}[${n}]?`,o=`#?[${n}]{6}([${n}]{2})?`;new RegExp(`[^#${n}]`,"gi"),new RegExp(`^${i}$|^${o}$`,"i");const s={};let f=0;function u(t,e){const r=`${f}`;return f+=1,s[r]={handler:e,name:t},function(){delete s[r]}}const a="undefined"==typeof window?function(t,...e){figma.ui.postMessage([t,...e])}:function(t,...e){window!==window.parent&&window.parent.postMessage({pluginMessage:[t,...e]},"*")};function c(t,e){for(const r in s)s[r].name===t&&s[r].handler.apply(null,e)}"undefined"==typeof window?figma.ui.onmessage=function([t,...e]){c(t,e)}:window.onmessage=function(t){try{if(void 0===t.data.pluginMessage)return}catch(t){return}try{const[e,...r]=t.data.pluginMessage;c(e,r)}catch(t){console.error("onmessage:",""+t)}},r(5634)}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(t,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={};(()=>{"use strict";var t=__webpack_require__(4002);__webpack_require__(5496),function(t,e){if("undefined"==typeof __html__)throw new Error("No UI defined");const r=`<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${void 0===figma.command?"":figma.command}';const __SHOW_UI_DATA__=${JSON.stringify({})};<\/script><script>__FIGMA__MKITFPDF=true;<\/script>${__html__}`;figma.showUI(r,Object.assign(Object.assign({},{height:480,width:480}),{themeColors:!0}))}(),(0,t.on)("RESIZE_WINDOW",(function(t){const{width:e,height:r}=t;figma.ui.resize(e,r)})),figma.clientStorage.getAsync("size").then((t=>{t&&figma.ui.resize(t.w,t.h)})).catch((t=>{}))})()})();