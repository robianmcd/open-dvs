/**
 * core-js 2.6.9
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev
 */
!function(e,i,Jt){"use strict";!function(r){var e={};function __webpack_require__(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=r,__webpack_require__.c=e,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=129)}([function(t,n,r){var v=r(2),g=r(26),y=r(11),d=r(12),b=r(18),S="prototype",_=function(t,n,r){var e,i,o,u,c=t&_.F,a=t&_.G,f=t&_.P,s=t&_.B,l=a?v:t&_.S?v[n]||(v[n]={}):(v[n]||{})[S],h=a?g:g[n]||(g[n]={}),p=h[S]||(h[S]={});for(e in a&&(r=n),r)o=((i=!c&&l&&l[e]!==Jt)?l:r)[e],u=s&&i?b(o,v):f&&"function"==typeof o?b(Function.call,o):o,l&&d(l,e,o,t&_.U),h[e]!=o&&y(h,e,u),f&&p[e]!=o&&(p[e]=o)};v.core=g,_.F=1,_.G=2,_.S=4,_.P=8,_.B=16,_.W=32,_.U=64,_.R=128,t.exports=_},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof i&&(i=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(47)("wks"),i=r(33),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(20),i=Math.min;t.exports=function(t){return 0<t?i(e(t),9007199254740991):0}},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var i=r(1),o=r(93),u=r(22),c=Object.defineProperty;n.f=r(7)?Object.defineProperty:function defineProperty(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(23);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(8),i=r(32);t.exports=r(7)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var o=r(2),u=r(11),c=r(14),a=r(33)("src"),e=r(131),i="toString",f=(""+e).split(i);r(26).inspectSource=function(t){return e.call(t)},(t.exports=function(t,n,r,e){var i="function"==typeof r;i&&(c(r,"name")||u(r,"name",n)),t[n]!==r&&(i&&(c(r,a)||u(r,a,t[n]?""+t[n]:f.join(String(n)))),t===o?t[n]=r:e?t[n]?t[n]=r:u(t,n,r):(delete t[n],u(t,n,r)))})(Function.prototype,i,function toString(){return"function"==typeof this&&this[a]||e.call(this)})},function(t,n,r){var e=r(0),i=r(3),u=r(23),c=/"/g,o=function(t,n,r,e){var i=String(u(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(e).replace(c,"&quot;")+'"'),o+">"+i+"</"+n+">"};t.exports=function(n,t){var r={};r[n]=t(o),e(e.P+e.F*i(function(){var t=""[n]('"');return t!==t.toLowerCase()||3<t.split('"').length}),"String",r)}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(48),i=r(23);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(49),i=r(32),o=r(15),u=r(22),c=r(14),a=r(93),f=Object.getOwnPropertyDescriptor;n.f=r(7)?f:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(14),i=r(9),o=r(68)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var o=r(10);t.exports=function(e,i,t){if(o(e),i===Jt)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var i=r(4);t.exports=function(t,n){if(!i(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!i(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(t==Jt)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var i=r(0),o=r(26),u=r(3);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],e={};e[t]=n(r),i(i.S+i.F*u(function(){r(1)}),"Object",e)}},function(t,n,r){var S=r(18),_=r(48),x=r(9),m=r(6),e=r(84);t.exports=function(l,t){var h=1==l,p=2==l,v=3==l,g=4==l,y=6==l,d=5==l||y,b=t||e;return function(t,n,r){for(var e,i,o=x(t),u=_(o),c=S(n,r,3),a=m(u.length),f=0,s=h?b(t,a):p?b(t,0):Jt;f<a;f++)if((d||f in u)&&(i=c(e=u[f],f,o),l))if(h)s[f]=i;else if(i)switch(l){case 3:return!0;case 5:return e;case 6:return f;case 2:s.push(e)}else if(g)return!1;return y?-1:v||g?g:s}}},function(t,n){var r=t.exports={version:"2.6.9"};"number"==typeof e&&(e=r)},function(t,n,r){if(r(7)){var y=r(29),d=r(2),b=r(3),S=r(0),_=r(62),e=r(92),h=r(18),x=r(39),i=r(32),m=r(11),o=r(41),u=r(20),w=r(6),E=r(122),c=r(35),a=r(22),f=r(14),O=r(44),M=r(4),p=r(9),v=r(81),I=r(36),P=r(17),F=r(37).f,g=r(83),s=r(33),l=r(5),A=r(25),k=r(52),N=r(51),j=r(86),R=r(46),T=r(57),L=r(38),D=r(85),C=r(110),U=r(8),W=r(16),G=U.f,V=W.f,B=d.RangeError,z=d.TypeError,q=d.Uint8Array,K="ArrayBuffer",J="Shared"+K,Y="BYTES_PER_ELEMENT",$="prototype",X=Array[$],H=e.ArrayBuffer,Z=e.DataView,Q=A(0),tt=A(2),nt=A(3),rt=A(4),et=A(5),it=A(6),ot=k(!0),ut=k(!1),ct=j.values,at=j.keys,ft=j.entries,st=X.lastIndexOf,lt=X.reduce,ht=X.reduceRight,pt=X.join,vt=X.sort,gt=X.slice,yt=X.toString,dt=X.toLocaleString,bt=l("iterator"),St=l("toStringTag"),_t=s("typed_constructor"),xt=s("def_constructor"),mt=_.CONSTR,wt=_.TYPED,Et=_.VIEW,Ot="Wrong length!",Mt=A(1,function(t,n){return kt(N(t,t[xt]),n)}),It=b(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),Pt=!!q&&!!q[$].set&&b(function(){new q(1).set({})}),Ft=function(t,n){var r=u(t);if(r<0||r%n)throw B("Wrong offset!");return r},At=function(t){if(M(t)&&wt in t)return t;throw z(t+" is not a typed array!")},kt=function(t,n){if(!(M(t)&&_t in t))throw z("It is not a typed array constructor!");return new t(n)},Nt=function(t,n){return jt(N(t,t[xt]),n)},jt=function(t,n){for(var r=0,e=n.length,i=kt(t,e);r<e;)i[r]=n[r++];return i},Rt=function(t,n,r){G(t,n,{get:function(){return this._d[r]}})},Tt=function from(t){var n,r,e,i,o,u,c=p(t),a=arguments.length,f=1<a?arguments[1]:Jt,s=f!==Jt,l=g(c);if(l!=Jt&&!v(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(s&&2<a&&(f=h(f,arguments[2],2)),n=0,r=w(c.length),i=kt(this,r);n<r;n++)i[n]=s?f(c[n],n):c[n];return i},Lt=function of(){for(var t=0,n=arguments.length,r=kt(this,n);t<n;)r[t]=arguments[t++];return r},Dt=!!q&&b(function(){dt.call(new q(1))}),Ct=function toLocaleString(){return dt.apply(Dt?gt.call(At(this)):At(this),arguments)},Ut={copyWithin:function copyWithin(t,n){return C.call(At(this),t,n,2<arguments.length?arguments[2]:Jt)},every:function every(t){return rt(At(this),t,1<arguments.length?arguments[1]:Jt)},fill:function fill(t){return D.apply(At(this),arguments)},filter:function filter(t){return Nt(this,tt(At(this),t,1<arguments.length?arguments[1]:Jt))},find:function find(t){return et(At(this),t,1<arguments.length?arguments[1]:Jt)},findIndex:function findIndex(t){return it(At(this),t,1<arguments.length?arguments[1]:Jt)},forEach:function forEach(t){Q(At(this),t,1<arguments.length?arguments[1]:Jt)},indexOf:function indexOf(t){return ut(At(this),t,1<arguments.length?arguments[1]:Jt)},includes:function includes(t){return ot(At(this),t,1<arguments.length?arguments[1]:Jt)},join:function join(t){return pt.apply(At(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(At(this),arguments)},map:function map(t){return Mt(At(this),t,1<arguments.length?arguments[1]:Jt)},reduce:function reduce(t){return lt.apply(At(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(At(this),arguments)},reverse:function reverse(){for(var t,n=this,r=At(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(At(this),t,1<arguments.length?arguments[1]:Jt)},sort:function sort(t){return vt.call(At(this),t)},subarray:function subarray(t,n){var r=At(this),e=r.length,i=c(t,e);return new(N(r,r[xt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,w((n===Jt?e:c(n,e))-i))}},Wt=function slice(t,n){return Nt(this,gt.call(At(this),t,n))},Gt=function set(t){At(this);var n=Ft(arguments[1],1),r=this.length,e=p(t),i=w(e.length),o=0;if(r<i+n)throw B(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return ft.call(At(this))},keys:function keys(){return at.call(At(this))},values:function values(){return ct.call(At(this))}},Bt=function(t,n){return M(t)&&t[wt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},zt=function getOwnPropertyDescriptor(t,n){return Bt(t,n=a(n,!0))?i(2,t[n]):V(t,n)},qt=function defineProperty(t,n,r){return!(Bt(t,n=a(n,!0))&&M(r)&&f(r,"value"))||f(r,"get")||f(r,"set")||r.configurable||f(r,"writable")&&!r.writable||f(r,"enumerable")&&!r.enumerable?G(t,n,r):(t[n]=r.value,t)};mt||(W.f=zt,U.f=qt),S(S.S+S.F*!mt,"Object",{getOwnPropertyDescriptor:zt,defineProperty:qt}),b(function(){yt.call({})})&&(yt=dt=function toString(){return pt.call(this)});var Kt=o({},Ut);o(Kt,Vt),m(Kt,bt,Vt.values),o(Kt,{slice:Wt,set:Gt,constructor:function(){},toString:yt,toLocaleString:Ct}),Rt(Kt,"buffer","b"),Rt(Kt,"byteOffset","o"),Rt(Kt,"byteLength","l"),Rt(Kt,"length","e"),G(Kt,St,{get:function(){return this[wt]}}),t.exports=function(t,l,n,o){var h=t+((o=!!o)?"Clamped":"")+"Array",r="get"+t,u="set"+t,p=d[h],c=p||{},e=p&&P(p),i={},a=p&&p[$],v=function(t,i){G(t,i,{get:function(){return(t=this._d).v[r](i*l+t.o,It);var t},set:function(t){return n=i,r=t,e=this._d,o&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void e.v[u](n*l+e.o,r,It);var n,r,e},enumerable:!0})};!p||!_.ABV?(p=n(function(t,n,r,e){x(t,p,h,"_d");var i,o,u,c,a=0,f=0;if(M(n)){if(!(n instanceof H||(c=O(n))==K||c==J))return wt in n?jt(p,n):Tt.call(p,n);i=n,f=Ft(r,l);var s=n.byteLength;if(e===Jt){if(s%l)throw B(Ot);if((o=s-f)<0)throw B(Ot)}else if(s<(o=w(e)*l)+f)throw B(Ot);u=o/l}else u=E(n),i=new H(o=u*l);for(m(t,"_d",{b:i,o:f,l:o,e:u,v:new Z(i)});a<u;)v(t,a++)}),a=p[$]=I(Kt),m(a,"constructor",p)):b(function(){p(1)})&&b(function(){new p(-1)})&&T(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=n(function(t,n,r,e){var i;return x(t,p,h),M(n)?n instanceof H||(i=O(n))==K||i==J?e!==Jt?new c(n,Ft(r,l),e):r!==Jt?new c(n,Ft(r,l)):new c(n):wt in n?jt(p,n):Tt.call(p,n):new c(E(n))}),Q(e!==Function.prototype?F(c).concat(F(e)):F(c),function(t){t in p||m(p,t,c[t])}),p[$]=a,y||(a.constructor=p));var f=a[bt],s=!!f&&("values"==f.name||f.name==Jt),g=Vt.values;m(p,_t,!0),m(a,wt,h),m(a,Et,!0),m(a,xt,p),(o?new p(1)[St]==h:St in a)||G(a,St,{get:function(){return h}}),S(S.G+S.W+S.F*((i[h]=p)!=c),i),S(S.S,h,{BYTES_PER_ELEMENT:l}),S(S.S+S.F*b(function(){c.of.call(p,1)}),h,{from:Tt,of:Lt}),Y in a||m(a,Y,l),S(S.P,h,Ut),L(h),S(S.P+S.F*Pt,h,{set:Gt}),S(S.P+S.F*!s,h,Vt),y||a.toString==yt||(a.toString=yt),S(S.P+S.F*b(function(){new p(1).slice()}),h,{slice:Wt}),S(S.P+S.F*(b(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!b(function(){a.toLocaleString.call([1,2])})),h,{toLocaleString:Ct}),R[h]=s?f:g,y||s||m(a,bt,g)}}else t.exports=function(){}},function(t,n,r){var o=r(116),e=r(0),i=r(47)("metadata"),u=i.store||(i.store=new(r(119))),c=function(t,n,r){var e=u.get(t);if(!e){if(!r)return Jt;u.set(t,e=new o)}var i=e.get(n);if(!i){if(!r)return Jt;e.set(n,i=new o)}return i};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return e!==Jt&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return e===Jt?Jt:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return t===Jt||"symbol"==typeof t?t:String(t)},exp:function(t){e(e.S,"Reflect",t)}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(33)("meta"),i=r(4),o=r(14),u=r(8).f,c=0,a=Object.isExtensible||function(){return!0},f=!r(3)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!o(t,e)&&s(t),t}}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;i[e]==Jt&&r(11)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(t===Jt?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(95),i=r(69);t.exports=Object.keys||function keys(t){return e(t,i)}},function(t,n,r){var e=r(20),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var i=e(1),o=e(96),u=e(69),c=e(68)("IE_PROTO"),a=function(){},f="prototype",s=function(){var t,n=e(66)("iframe"),r=u.length;for(n.style.display="none",e(70).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[f][u[r]];return s()};t.exports=Object.create||function create(t,n){var r;return null!==t?(a[f]=i(t),r=new a,a[f]=null,r[c]=t):r=s(),n===Jt?r:o(r,n)}},function(t,n,r){var e=r(95),i=r(69).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},function(t,n,r){var e=r(2),i=r(8),o=r(7),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||e!==Jt&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var h=r(18),p=r(108),v=r(81),g=r(1),y=r(6),d=r(83),b={},S={};(n=t.exports=function(t,n,r,e,i){var o,u,c,a,f=i?function(){return t}:d(t),s=h(r,e,n?2:1),l=0;if("function"!=typeof f)throw TypeError(t+" is not iterable!");if(v(f)){for(o=y(t.length);l<o;l++)if((a=n?s(g(u=t[l])[0],u[1]):s(t[l]))===b||a===S)return a}else for(c=f.call(t);!(u=c.next()).done;)if((a=p(c,s,u.value,n))===b||a===S)return a}).BREAK=b,n.RETURN=S},function(t,n,r){var i=r(12);t.exports=function(t,n,r){for(var e in n)i(t,e,n[e],r);return t}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(8).f,i=r(14),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var i=r(19),o=r(5)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=function(t){var n,r,e;return t===Jt?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),o))?r:u?i(n):"Object"==(e=i(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var u=r(0),e=r(23),c=r(3),a=r(73),i="["+a+"]",o=RegExp("^"+i+i+"*"),f=RegExp(i+i+"*$"),s=function(t,n,r){var e={},i=c(function(){return!!a[t]()||"​"!="​"[t]()}),o=e[t]=i?n(l):a[t];r&&(e[r]=o),u(u.P+u.F*i,"String",e)},l=s.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n){t.exports={}},function(t,n,r){var e=r(26),i=r(2),o="__core-js_shared__",u=i[o]||(i[o]={});(t.exports=function(t,n){return u[t]||(u[t]=n!==Jt?n:{})})("versions",[]).push({version:e.version,mode:r(29)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var i=r(1),o=r(10),u=r(5)("species");t.exports=function(t,n){var r,e=i(t).constructor;return e===Jt||(r=i(e)[u])==Jt?n:o(r)}},function(t,n,r){var a=r(15),f=r(6),s=r(35);t.exports=function(c){return function(t,n,r){var e,i=a(t),o=f(i.length),u=s(r,o);if(c&&n!=n){for(;u<o;)if((e=i[u++])!=e)return!0}else for(;u<o;u++)if((c||u in i)&&i[u]===n)return c||u||0;return!c&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(19);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,n,r){var a=r(20),f=r(23);t.exports=function(c){return function(t,n){var r,e,i=String(f(t)),o=a(n),u=i.length;return o<0||u<=o?c?"":Jt:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?c?i.charAt(o):r:c?i.slice(o,o+2):e-56320+(r-55296<<10)+65536}}},function(t,n,r){var e=r(4),i=r(19),o=r(5)("match");t.exports=function(t){var n;return e(t)&&((n=t[o])!==Jt?!!n:"RegExp"==i(t))}},function(t,n,r){var o=r(5)("iterator"),u=!1;try{var e=[7][o]();e["return"]=function(){u=!0},Array.from(e,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!u)return!1;var r=!1;try{var e=[7],i=e[o]();i.next=function(){return{done:r=!0}},e[o]=function(){return i},t(e)}catch(c){}return r}},function(t,n,r){var i=r(44),o=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var e=r.call(t,n);if("object"!=typeof e)throw new TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){r(112);var f=r(12),s=r(11),l=r(3),h=r(23),p=r(5),v=r(87),g=p("species"),y=!l(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(r,t,n){var e=p(r),o=!l(function(){var t={};return t[e]=function(){return 7},7!=""[r](t)}),i=o?!l(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===r&&(n.constructor={},n.constructor[g]=function(){return n}),n[e](""),!t}):Jt;if(!o||!i||"replace"===r&&!y||"split"===r&&!d){var u=/./[e],c=n(h,e,""[r],function maybeCallNative(t,n,r,e,i){return n.exec===v?o&&!i?{done:!0,value:u.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),a=c[1];f(String.prototype,r,c[0]),s(RegExp.prototype,e,2==t?function(t,n){return a.call(t,this,n)}:function(t){return a.call(t,this)})}}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var d=r(2),b=r(0),S=r(12),_=r(41),x=r(30),m=r(40),w=r(39),E=r(4),O=r(3),M=r(57),I=r(43),P=r(72);t.exports=function(e,t,n,r,i,o){var u=d[e],c=u,a=i?"set":"add",f=c&&c.prototype,s={},l=function(t){var r=f[t];S(f,t,"delete"==t?function(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"has"==t?function has(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"get"==t?function get(t){return o&&!E(t)?Jt:r.call(this,0===t?0:t)}:"add"==t?function add(t){return r.call(this,0===t?0:t),this}:function set(t,n){return r.call(this,0===t?0:t,n),this})};if("function"==typeof c&&(o||f.forEach&&!O(function(){(new c).entries().next()}))){var h=new c,p=h[a](o?{}:-0,1)!=h,v=O(function(){h.has(1)}),g=M(function(t){new c(t)}),y=!o&&O(function(){for(var t=new c,n=5;n--;)t[a](n,n);return!t.has(-0)});g||(((c=t(function(t,n){w(t,c,e);var r=P(new u,t,c);return n!=Jt&&m(n,i,r[a],r),r})).prototype=f).constructor=c),(v||y)&&(l("delete"),l("has"),i&&l("get")),(y||p)&&l(a),o&&f.clear&&delete f.clear}else c=r.getConstructor(t,e,i,a),_(c.prototype,n),x.NEED=!0;return I(c,e),b(b.G+b.W+b.F*((s[e]=c)!=u),s),o||r.setStrong(c,e,i),c}},function(t,n,r){for(var e,i=r(2),o=r(11),u=r(33),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},function(t,n,r){t.exports=r(29)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){var e=r(0);t.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){var e=r(0),u=r(10),c=r(18),a=r(40);t.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,i,o=arguments[1];return u(this),(n=o!==Jt)&&u(o),t==Jt?new this:(r=[],n?(e=0,i=c(o,arguments[2],2),a(t,!1,function(t){r.push(i(t,e++))})):a(t,!1,r.push,r),new this(r))}})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(2),i=r(26),o=r(29),u=r(94),c=r(8).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(47)("keys"),i=r(33);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,i){var r=i(4),e=i(1),o=function(t,n){if(e(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=i(18)(Function.call,i(16).f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):Jt),check:o}},function(t,n,r){var o=r(4),u=r(71).set;t.exports=function(t,n,r){var e,i=n.constructor;return i!==r&&"function"==typeof i&&(e=i.prototype)!==r.prototype&&o(e)&&u&&u(t,e),t}},function(t,n){t.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var i=r(20),o=r(23);t.exports=function repeat(t){var n=String(o(this)),r="",e=i(t);if(e<0||e==Infinity)throw RangeError("Count can't be negative");for(;0<e;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||22025.465794806718<r(10)||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function expm1(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var e=r(56),i=r(23);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var i=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[i]=!1,!"/./"[t](n)}catch(e){}}return!0}},function(t,n,r){var S=r(29),_=r(0),x=r(12),m=r(11),w=r(46),E=r(80),O=r(43),M=r(17),I=r(5)("iterator"),P=!([].keys&&"next"in[].keys()),F="values",A=function(){return this};t.exports=function(t,n,r,e,i,o,u){E(r,n,e);var c,a,f,s=function(t){if(!P&&t in v)return v[t];switch(t){case"keys":return function keys(){return new r(this,t)};case F:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},l=n+" Iterator",h=i==F,p=!1,v=t.prototype,g=v[I]||v["@@iterator"]||i&&v[i],y=g||s(i),d=i?h?s("entries"):y:Jt,b="Array"==n&&v.entries||g;if(b&&(f=M(b.call(new t)))!==Object.prototype&&f.next&&(O(f,l,!0),S||"function"==typeof f[I]||m(f,I,A)),h&&g&&g.name!==F&&(p=!0,y=function values(){return g.call(this)}),S&&!u||!P&&!p&&v[I]||m(v,I,y),w[n]=y,w[l]=A,i)if(c={values:h?y:s(F),keys:o?y:s("keys"),entries:d},u)for(a in c)a in v||x(v,a,c[a]);else _(_.P+_.F*(P||p),n,c);return c}},function(t,n,r){var e=r(36),i=r(32),o=r(43),u={};r(11)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var e=r(46),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return t!==Jt&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(8),i=r(32);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(44),i=r(5)("iterator"),o=r(46);t.exports=r(26).getIteratorMethod=function(t){if(t!=Jt)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(213);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var c=r(9),a=r(35),f=r(6);t.exports=function fill(t){for(var n=c(this),r=f(n.length),e=arguments.length,i=a(1<e?arguments[1]:Jt,r),o=2<e?arguments[2]:Jt,u=o===Jt?r:a(o,r);i<u;)n[i++]=t;return n}},function(t,n,r){var e=r(31),i=r(111),o=r(46),u=r(15);t.exports=r(79)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||t.length<=r?(this._t=Jt,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e,i,u=r(50),c=RegExp.prototype.exec,a=String.prototype.replace,o=c,f="lastIndex",s=(i=/b*/g,c.call(e=/a/,"a"),c.call(i,"a"),0!==e[f]||0!==i[f]),l=/()??/.exec("")[1]!==Jt;(s||l)&&(o=function exec(t){var n,r,e,i,o=this;return l&&(r=new RegExp("^"+o.source+"$(?!\\s)",u.call(o))),s&&(n=o[f]),e=c.call(o,t),s&&e&&(o[f]=o.global?e.index+e[0].length:n),l&&e&&1<e.length&&a.call(e[0],r,function(){for(i=1;i<arguments.length-2;i++)arguments[i]===Jt&&(e[i]=Jt)}),e}),t.exports=o},function(t,n,r){var e=r(55)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e,i,o,u=r(18),c=r(101),a=r(70),f=r(66),s=r(2),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,g=s.Dispatch,y=0,d={},b="onreadystatechange",S=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},_=function(t){S.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);return d[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function clearImmediate(t){delete d[t]},"process"==r(19)(l)?e=function(t){l.nextTick(u(S,t,1))}:g&&g.now?e=function(t){g.now(u(S,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=_,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",_,!1)):e=b in f("script")?function(t){a.appendChild(f("script"))[b]=function(){a.removeChild(this),S.call(t)}}:function(t){setTimeout(u(S,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,r){var c=r(2),a=r(89).set,f=c.MutationObserver||c.WebKitMutationObserver,s=c.process,l=c.Promise,h="process"==r(19)(s);t.exports=function(){var e,i,o,t=function(){var t,n;for(h&&(t=s.domain)&&t.exit();e;){n=e.fn,e=e.next;try{n()}catch(r){throw e?o():i=Jt,r}}i=Jt,t&&t.enter()};if(h)o=function(){s.nextTick(t)};else if(!f||c.navigator&&c.navigator.standalone)if(l&&l.resolve){var n=l.resolve(Jt);o=function(){n.then(t)}}else o=function(){a.call(c,t)};else{var r=!0,u=document.createTextNode("");new f(t).observe(u,{characterData:!0}),o=function(){u.data=r=!r}}return function(t){var n={fn:t,next:Jt};i&&(i.next=n),e||(e=n,o()),i=n}}},function(t,n,r){var i=r(10);function PromiseCapability(t){var r,e;this.promise=new t(function(t,n){if(r!==Jt||e!==Jt)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=i(r),this.reject=i(e)}t.exports.f=function(t){return new PromiseCapability(t)}},function(t,n,r){var e=r(2),i=r(7),o=r(29),u=r(62),c=r(11),a=r(41),f=r(3),s=r(39),l=r(20),h=r(6),p=r(122),v=r(37).f,g=r(8).f,y=r(85),d=r(43),b="ArrayBuffer",S="DataView",_="prototype",x="Wrong index!",m=e[b],w=e[S],E=e.Math,O=e.RangeError,M=e.Infinity,I=m,P=E.abs,F=E.pow,A=E.floor,k=E.log,N=E.LN2,j="byteLength",R="byteOffset",T=i?"_b":"buffer",L=i?"_l":j,D=i?"_o":R;function packIEEE754(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?F(2,-24)-F(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=P(t))!=t||t===M?(i=t!=t?1:0,e=a):(e=A(k(t)/N),t*(o=F(2,-e))<1&&(e--,o*=2),2<=(t+=1<=e+f?s/o:s*F(2,1-f))*o&&(e++,o/=2),a<=e+f?(i=0,e=a):1<=e+f?(i=(t*o-1)*F(2,n),e+=f):(i=t*F(2,f-1)*F(2,n),e=0));8<=n;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;0<c;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;0<c;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;0<c;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-M:M;e+=F(2,n),s-=u}return(f?-1:1)*e*F(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){g(t[_],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=p(+r);if(t[L]<i+n)throw O(x);var o=i+t[D],u=t[T]._b.slice(o,o+n);return e?u:u.reverse()}function set(t,n,r,e,i,o){var u=p(+r);if(t[L]<u+n)throw O(x);for(var c=t[T]._b,a=u+t[D],f=e(+i),s=0;s<n;s++)c[a+s]=f[o?s:n-s-1]}if(u.ABV){if(!f(function(){m(1)})||!f(function(){new m(-1)})||f(function(){return new m,new m(1.5),new m(NaN),m.name!=b})){for(var C,U=(m=function ArrayBuffer(t){return s(this,m),new I(p(t))})[_]=I[_],W=v(I),G=0;G<W.length;)(C=W[G++])in m||c(m,C,I[C]);o||(U.constructor=m)}var V=new w(new m(2)),B=w[_].setInt8;V.setInt8(0,2147483648),V.setInt8(1,2147483649),!V.getInt8(0)&&V.getInt8(1)||a(w[_],{setInt8:function setInt8(t,n){B.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){B.call(this,t,n<<24>>24)}},!0)}else m=function ArrayBuffer(t){s(this,m,b);var n=p(t);this._b=y.call(new Array(n),0),this[L]=n},w=function DataView(t,n,r){s(this,w,S),s(t,m,S);var e=t[L],i=l(n);if(i<0||e<i)throw O("Wrong offset!");if(e<i+(r=r===Jt?e-i:h(r)))throw O("Wrong length!");this[T]=t,this[D]=i,this[L]=r},i&&(addGetter(m,j,"_l"),addGetter(w,"buffer","_b"),addGetter(w,j,"_l"),addGetter(w,R,"_o")),a(w[_],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},
setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});d(m,b),d(w,S),c(w[_],u.VIEW,!0),n[b]=m,n[S]=w},function(t,n,r){t.exports=!r(7)&&!r(3)(function(){return 7!=Object.defineProperty(r(66)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var u=r(14),c=r(15),a=r(52)(!1),f=r(68)("IE_PROTO");t.exports=function(t,n){var r,e=c(t),i=0,o=[];for(r in e)r!=f&&u(e,r)&&o.push(r);for(;i<n.length;)u(e,r=n[i++])&&(~a(o,r)||o.push(r));return o}},function(t,n,r){var u=r(8),c=r(1),a=r(34);t.exports=r(7)?Object.defineProperties:function defineProperties(t,n){c(t);for(var r,e=a(n),i=e.length,o=0;o<i;)u.f(t,r=e[o++],n[r]);return t}},function(t,n,r){var e=r(15),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(n){return u.slice()}}(t):i(e(t))}},function(t,n,r){var h=r(7),p=r(34),v=r(53),g=r(49),y=r(9),d=r(48),i=Object.assign;t.exports=!i||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=i({},t)[r]||Object.keys(i({},n)).join("")!=e})?function assign(t,n){for(var r=y(t),e=arguments.length,i=1,o=v.f,u=g.f;i<e;)for(var c,a=d(arguments[i++]),f=o?p(a).concat(o(a)):p(a),s=f.length,l=0;l<s;)c=f[l++],h&&!u.call(a,c)||(r[c]=a[c]);return r}:i},function(t,n){t.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var o=r(10),u=r(4),c=r(101),a=[].slice,f={};t.exports=Function.bind||function bind(n){var r=o(this),e=a.call(arguments,1),i=function(){var t=e.concat(a.call(arguments));return this instanceof i?function(t,n,r){if(!(n in f)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";f[n]=Function("F,a","return new F("+e.join(",")+")")}return f[n](t,r)}(r,t.length,t):c(r,t,n)};return u(r.prototype)&&(i.prototype=r.prototype),i}},function(t,n){t.exports=function(t,n,r){var e=r===Jt;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(19);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(2).parseFloat,i=r(45).trim;t.exports=1/e(r(73)+"-0")!=-Infinity?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(45).trim,o=r(73),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=Math.log1p||function log1p(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var o=r(75),e=Math.pow,u=e(2,-52),c=e(2,-23),a=e(2,127)*(2-c),f=e(2,-126);t.exports=Math.fround||function fround(t){var n,r,e=Math.abs(t),i=o(t);return e<f?i*(e/f/c+1/u-1/u)*f*c:a<(r=(n=(1+c/u)*e)-(n-e))||r!=r?i*Infinity:i*r}},function(t,n,r){var u=r(1);t.exports=function(t,n,r,e){try{return e?n(u(r)[0],r[1]):n(r)}catch(o){var i=t["return"];throw i!==Jt&&u(i.call(t)),o}}},function(t,n,r){var s=r(10),l=r(9),h=r(48),p=r(6);t.exports=function(t,n,r,e,i){s(n);var o=l(t),u=h(o),c=p(o.length),a=i?c-1:0,f=i?-1:1;if(r<2)for(;;){if(a in u){e=u[a],a+=f;break}if(a+=f,i?a<0:c<=a)throw TypeError("Reduce of empty array with no initial value")}for(;i?0<=a:a<c;a+=f)a in u&&(e=n(e,u[a],a,o));return e}},function(t,n,r){var f=r(9),s=r(35),l=r(6);t.exports=[].copyWithin||function copyWithin(t,n){var r=f(this),e=l(r.length),i=s(t,e),o=s(n,e),u=2<arguments.length?arguments[2]:Jt,c=Math.min((u===Jt?e:s(u,e))-o,e-i),a=1;for(o<i&&i<o+c&&(a=-1,o+=c-1,i+=c-1);0<c--;)o in r?r[i]=r[o]:delete r[i],i+=a,o+=a;return r}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){var e=r(87);r(0)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(t,n,r){r(7)&&"g"!=/./g.flags&&r(8).f(RegExp.prototype,"flags",{configurable:!0,get:r(50)})},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,r){var e=r(1),i=r(4),o=r(91);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(117),i=r(42);t.exports=r(61)("Map",function(t){return function Map(){return t(this,0<arguments.length?arguments[0]:Jt)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var u=r(8).f,c=r(36),a=r(41),f=r(18),s=r(39),l=r(40),e=r(79),i=r(111),o=r(38),h=r(7),p=r(30).fastKey,v=r(42),g=h?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,o,r,e){var i=t(function(t,n){s(t,i,o,"_i"),t._t=o,t._i=c(null),t._f=Jt,t._l=Jt,t[g]=0,n!=Jt&&l(n,r,t[e],t)});return a(i.prototype,{clear:function clear(){for(var t=v(this,o),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=Jt),delete n[r.i];t._f=t._l=Jt,t[g]=0},"delete":function(t){var n=v(this,o),r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[g]--}return!!r},forEach:function forEach(t){v(this,o);for(var n,r=f(t,1<arguments.length?arguments[1]:Jt,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!y(v(this,o),t)}}),h&&u(i.prototype,"size",{get:function(){return v(this,o)[g]}}),i},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:Jt,r:!1},t._f||(t._f=o),e&&(e.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,r,n){e(t,r,function(t,n){this._t=v(t,r),this._k=n,this._l=Jt},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?i(0,"keys"==n?r.k:"values"==n?r.v:[r.k,r.v]):(t._t=Jt,i(1))},n?"entries":"values",!n,!0),o(r)}}},function(t,n,r){var e=r(117),i=r(42);t.exports=r(61)("Set",function(t){return function Set(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){var o,e=r(2),i=r(25)(0),u=r(12),c=r(30),a=r(98),f=r(120),s=r(4),l=r(42),h=r(42),p=!e.ActiveXObject&&"ActiveXObject"in e,v="WeakMap",g=c.getWeak,y=Object.isExtensible,d=f.ufstore,b=function(t){return function WeakMap(){return t(this,0<arguments.length?arguments[0]:Jt)}},S={get:function get(t){if(s(t)){var n=g(t);return!0===n?d(l(this,v)).get(t):n?n[this._i]:Jt}},set:function set(t,n){return f.def(l(this,v),t,n)}},_=t.exports=r(61)(v,b,S,f,!0,!0);h&&p&&(a((o=f.getConstructor(b,v)).prototype,S),c.NEED=!0,i(["delete","has","get","set"],function(e){var t=_.prototype,i=t[e];u(t,e,function(t,n){if(s(t)&&!y(t)){this._f||(this._f=new o);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)})}))},function(t,n,r){var u=r(41),c=r(30).getWeak,i=r(1),a=r(4),f=r(39),s=r(40),e=r(25),l=r(14),h=r(42),o=e(5),p=e(6),v=0,g=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},d=function(t,n){return o(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=d(this,t);if(n)return n[1]},has:function(t){return!!d(this,t)},set:function(t,n){var r=d(this,t);r?r[1]=n:this.a.push([t,n])},"delete":function(n){var t=p(this.a,function(t){return t[0]===n});return~t&&this.a.splice(t,1),!!~t}},t.exports={getConstructor:function(t,r,e,i){var o=t(function(t,n){f(t,o,r,"_i"),t._t=r,t._i=v++,n!=(t._l=Jt)&&s(n,e,t[i],t)});return u(o.prototype,{"delete":function(t){if(!a(t))return!1;var n=c(t);return!0===n?g(h(this,r))["delete"](t):n&&l(n,this._i)&&delete n[this._i]},has:function has(t){if(!a(t))return!1;var n=c(t);return!0===n?g(h(this,r)).has(t):n&&l(n,this._i)}}),o},def:function(t,n,r){var e=c(i(n),!0);return!0===e?g(t).set(n,r):e[t._i]=r,t},ufstore:g}},function(t,n,r){var e=r(37),i=r(53),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(20),i=r(6);t.exports=function(t){if(t===Jt)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var p=r(54),v=r(4),g=r(6),y=r(18),d=r(5)("isConcatSpreadable");t.exports=function flattenIntoArray(t,n,r,e,i,o,u,c){for(var a,f,s=i,l=0,h=!!u&&y(u,c,3);l<e;){if(l in r){if(a=h?h(r[l],l,n):r[l],f=!1,v(a)&&(f=(f=a[d])!==Jt?!!f:p(a)),f&&0<o)s=flattenIntoArray(t,n,a,g(a.length),s,o-1)-1;else{if(9007199254740991<=s)throw TypeError();t[s]=a}s++}l++}return s}},function(t,n,r){var s=r(6),l=r(74),h=r(23);t.exports=function(t,n,r,e){var i=String(h(t)),o=i.length,u=r===Jt?" ":String(r),c=s(n);if(c<=o||""==u)return i;var a=c-o,f=l.call(u,Math.ceil(a/u.length));return a<f.length&&(f=f.slice(0,a)),e?f+i:i+f}},function(t,n,r){var a=r(7),f=r(34),s=r(15),l=r(49).f;t.exports=function(c){return function(t){for(var n,r=s(t),e=f(r),i=e.length,o=0,u=[];o<i;)n=e[o++],a&&!l.call(r,n)||u.push(c?[n,r[n]]:r[n]);return u}}},function(t,n,r){var e=r(44),i=r(127);t.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===Infinity||t===-Infinity?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){r(130),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(86),r(226),r(227),r(112),r(228),r(113),r(229),r(230),r(231),r(232),r(233),r(116),r(118),r(119),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(253),r(254),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),t.exports=r(325)},function(t,n,r){var e=r(2),u=r(14),i=r(7),o=r(0),c=r(12),a=r(30).KEY,f=r(3),s=r(47),l=r(43),h=r(33),p=r(5),v=r(94),g=r(67),y=r(132),d=r(54),b=r(1),S=r(4),_=r(9),x=r(15),m=r(22),w=r(32),E=r(36),O=r(97),M=r(16),I=r(53),P=r(8),F=r(34),A=M.f,k=P.f,N=O.f,j=e.Symbol,R=e.JSON,T=R&&R.stringify,L="prototype",D=p("_hidden"),C=p("toPrimitive"),U={}.propertyIsEnumerable,W=s("symbol-registry"),G=s("symbols"),V=s("op-symbols"),B=Object[L],z="function"==typeof j&&!!I.f,q=e.QObject,K=!q||!q[L]||!q[L].findChild,J=i&&f(function(){return 7!=E(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=A(B,n);e&&delete B[n],k(t,n,r),e&&t!==B&&k(B,n,e)}:k,Y=function(t){var n=G[t]=E(j[L]);return n._k=t,n},$=z&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},X=function defineProperty(t,n,r){return t===B&&X(V,n,r),b(t),n=m(n,!0),b(r),u(G,n)?(r.enumerable?(u(t,D)&&t[D][n]&&(t[D][n]=!1),r=E(r,{enumerable:w(0,!1)})):(u(t,D)||k(t,D,w(1,{})),t[D][n]=!0),J(t,n,r)):k(t,n,r)},H=function defineProperties(t,n){b(t);for(var r,e=y(n=x(n)),i=0,o=e.length;i<o;)X(t,r=e[i++],n[r]);return t},Z=function propertyIsEnumerable(t){var n=U.call(this,t=m(t,!0));return!(this===B&&u(G,t)&&!u(V,t))&&(!(n||!u(this,t)||!u(G,t)||u(this,D)&&this[D][t])||n)},Q=function getOwnPropertyDescriptor(t,n){if(t=x(t),n=m(n,!0),t!==B||!u(G,n)||u(V,n)){var r=A(t,n);return!r||!u(G,n)||u(t,D)&&t[D][n]||(r.enumerable=!0),r}},tt=function getOwnPropertyNames(t){for(var n,r=N(x(t)),e=[],i=0;i<r.length;)u(G,n=r[i++])||n==D||n==a||e.push(n);return e},nt=function getOwnPropertySymbols(t){for(var n,r=t===B,e=N(r?V:x(t)),i=[],o=0;o<e.length;)!u(G,n=e[o++])||r&&!u(B,n)||i.push(G[n]);return i};z||(c((j=function Symbol(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var n=h(0<arguments.length?arguments[0]:Jt),r=function(t){this===B&&r.call(V,t),u(this,D)&&u(this[D],n)&&(this[D][n]=!1),J(this,n,w(1,t))};return i&&K&&J(B,n,{configurable:!0,set:r}),Y(n)})[L],"toString",function toString(){return this._k}),M.f=Q,P.f=X,r(37).f=O.f=tt,r(49).f=Z,I.f=nt,i&&!r(29)&&c(B,"propertyIsEnumerable",Z,!0),v.f=function(t){return Y(p(t))}),o(o.G+o.W+o.F*!z,{Symbol:j});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;et<rt.length;)p(rt[et++]);for(var it=F(p.store),ot=0;ot<it.length;)g(it[ot++]);o(o.S+o.F*!z,"Symbol",{"for":function(t){return u(W,t+="")?W[t]:W[t]=j(t)},keyFor:function keyFor(t){if(!$(t))throw TypeError(t+" is not a symbol!");for(var n in W)if(W[n]===t)return n},useSetter:function(){K=!0},useSimple:function(){K=!1}}),o(o.S+o.F*!z,"Object",{create:function create(t,n){return n===Jt?E(t):H(E(t),n)},defineProperty:X,defineProperties:H,getOwnPropertyDescriptor:Q,getOwnPropertyNames:tt,getOwnPropertySymbols:nt});var ut=f(function(){I.f(1)});o(o.S+o.F*ut,"Object",{getOwnPropertySymbols:function getOwnPropertySymbols(t){return I.f(_(t))}}),R&&o(o.S+o.F*(!z||f(function(){var t=j();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function stringify(t){for(var n,r,e=[t],i=1;i<arguments.length;)e.push(arguments[i++]);if(r=n=e[1],(S(n)||t!==Jt)&&!$(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!$(n))return n}),e[1]=n,T.apply(R,e)}}),j[L][C]||r(11)(j[L],C,j[L].valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){t.exports=r(47)("native-function-to-string",Function.toString)},function(t,n,r){var c=r(34),a=r(53),f=r(49);t.exports=function(t){var n=c(t),r=a.f;if(r)for(var e,i=r(t),o=f.f,u=0;u<i.length;)o.call(t,e=i[u++])&&n.push(e);return n}},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperty:r(8).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperties:r(96)})},function(t,n,r){var e=r(15),i=r(16).f;r(24)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(36)})},function(t,n,r){var e=r(9),i=r(17);r(24)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(34);r(24)("keys",function(){return function keys(t){return i(e(t))}})},function(t,n,r){r(24)("getOwnPropertyNames",function(){return r(97).f})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("freeze",function(n){return function freeze(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("seal",function(n){return function seal(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("preventExtensions",function(n){return function preventExtensions(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4);r(24)("isFrozen",function(n){return function isFrozen(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isSealed",function(n){return function isSealed(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isExtensible",function(n){return function isExtensible(t){return!!e(t)&&(!n||n(t))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(98)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(99)})},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(71).set})},function(t,n,r){var e=r(44),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(12)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(100)})},function(t,n,r){var e=r(8).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(7)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(4),i=r(17),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(8).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(2),i=r(14),o=r(19),u=r(72),s=r(22),c=r(3),a=r(37).f,f=r(16).f,l=r(8).f,h=r(45).trim,p="Number",v=e[p],g=v,y=v.prototype,d=o(r(36)(y))==p,b="trim"in String.prototype,S=function(t){var n=s(t,!1);if("string"==typeof n&&2<n.length){var r,e,i,o=(n=b?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,c=n.slice(2),a=0,f=c.length;a<f;a++)if((u=c.charCodeAt(a))<48||i<u)return NaN;return parseInt(c,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(d?c(function(){y.valueOf.call(r)}):o(r)!=p)?u(new g(S(n)),r,v):S(n)};for(var _,x=r(7)?a(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;m<x.length;m++)i(g,_=x[m])&&!i(v,_)&&l(v,_,f(g,_));(v.prototype=y).constructor=v,r(12)(e,p,v)}},function(t,n,r){var e=r(0),f=r(20),s=r(102),l=r(74),i=1..toFixed,o=Math.floor,u=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",p=function(t,n){for(var r=-1,e=n;++r<6;)u[r]=(e+=t*u[r])%1e7,e=o(e/1e7)},v=function(t){for(var n=6,r=0;0<=--n;)u[n]=o((r+=u[n])/t),r=r%t*1e7},g=function(){for(var t=6,n="";0<=--t;)if(""!==n||0===t||0!==u[t]){var r=String(u[t]);n=""===n?r:n+l.call("0",7-r.length)+r}return n},y=function(t,n,r){return 0===n?r:n%2==1?y(t,n-1,r*t):y(t*t,n/2,r)};e(e.P+e.F*(!!i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){i.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,i,o=s(this,h),u=f(t),c="",a="0";if(u<0||20<u)throw RangeError(h);if(o!=o)return"NaN";if(o<=-1e21||1e21<=o)return String(o);if(o<0&&(c="-",o=-o),1e-21<o)if(r=(n=function(t){for(var n=0,r=t;4096<=r;)n+=12,r/=4096;for(;2<=r;)n+=1,r/=2;return n}(o*y(2,69,1))-69)<0?o*y(2,-n,1):o/y(2,n,1),r*=4503599627370496,0<(n=52-n)){for(p(0,r),e=u;7<=e;)p(1e7,0),e-=7;for(p(y(10,e,1),0),e=n-1;23<=e;)v(1<<23),e-=23;v(1<<e),p(1,1),v(2),a=g()}else p(0,r),p(1<<-n,0),a=g()+l.call("0",u);return a=0<u?c+((i=a.length)<=u?"0."+l.call("0",u-i)+a:a.slice(0,i-u)+"."+a.slice(i-u)):c+a}})},function(t,n,r){var e=r(0),i=r(3),o=r(102),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,Jt)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return t===Jt?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(103)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(103),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(104);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(105);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(105);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(104);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(106),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(Infinity)==Infinity),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:94906265.62425156<t?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&0<1/i(0)),"Math",{asinh:function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(75);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(76);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(107)})},function(t,n,r){var e=r(0),a=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,i=0,o=0,u=arguments.length,c=0;o<u;)c<(r=a(arguments[o++]))?(i=i*(e=c/r)*e+1,c=r):i+=0<r?(e=r/c)*e:r;return c===Infinity?Infinity:c*Math.sqrt(i)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(106)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(75)})},function(t,n,r){var e=r(0),i=r(76),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(76),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==Infinity?1:r==Infinity?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function trunc(t){return(0<t?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),o=r(35),u=String.fromCharCode,i=String.fromCodePoint;e(e.S+e.F*(!!i&&1!=i.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,i=0;i<e;){if(n=+arguments[i++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?u(n):u(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),u=r(15),c=r(6);e(e.S,"String",{raw:function raw(t){for(var n=u(t.raw),r=c(n.length),e=arguments.length,i=[],o=0;o<r;)i.push(String(n[o++])),o<e&&i.push(String(arguments[o]));return i.join("")}})},function(t,n,r){r(45)("trim",function(t){return function trim(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(55)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,n,r){var e=r(0),u=r(6),c=r(77),a="endsWith",f=""[a];e(e.P+e.F*r(78)(a),"String",{endsWith:function endsWith(t){var n=c(this,t,a),r=1<arguments.length?arguments[1]:Jt,e=u(n.length),i=r===Jt?e:Math.min(u(r),e),o=String(t);return f?f.call(n,o,i):n.slice(i-o.length,i)===o}})},function(t,n,r){var e=r(0),i=r(77),o="includes";e(e.P+e.F*r(78)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,1<arguments.length?arguments[1]:Jt)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(74)})},function(t,n,r){var e=r(0),i=r(6),o=r(77),u="startsWith",c=""[u];e(e.P+e.F*r(78)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(1<arguments.length?arguments[1]:Jt,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(55)(!0);r(79)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return n.length<=r?{value:Jt,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(13)("anchor",function(n){return function anchor(t){return n(this,"a","name",t)}})},function(t,n,r){r(13)("big",function(t){return function big(){return t(this,"big","","")}})},function(t,n,r){r(13)("blink",function(t){return function blink(){return t(this,"blink","","")}})},function(t,n,r){r(13)("bold",function(t){return function bold(){return t(this,"b","","")}})},function(t,n,r){r(13)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},function(t,n,r){r(13)("fontcolor",function(n){return function fontcolor(t){return n(this,"font","color",t)}})},function(t,n,r){r(13)("fontsize",function(n){return function fontsize(t){return n(this,"font","size",t)}})},function(t,n,r){r(13)("italics",function(t){return function italics(){return t(this,"i","","")}})},function(t,n,r){r(13)("link",function(n){return function link(t){return n(this,"a","href",t)}})},function(t,n,r){r(13)("small",function(t){return function small(){return t(this,"small","","")}})},function(t,n,r){r(13)("strike",function(t){return function strike(){return t(this,"strike","","")}})},function(t,n,r){r(13)("sub",function(t){return function sub(){return t(this,"sub","","")}})},function(t,n,r){r(13)("sup",function(t){return function sup(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(54)})},function(t,n,r){var h=r(18),e=r(0),p=r(9),v=r(108),g=r(81),y=r(6),d=r(82),b=r(83);e(e.S+e.F*!r(57)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,e,i,o=p(t),u="function"==typeof this?this:Array,c=arguments.length,a=1<c?arguments[1]:Jt,f=a!==Jt,s=0,l=b(o);if(f&&(a=h(a,2<c?arguments[2]:Jt,2)),l==Jt||u==Array&&g(l))for(r=new u(n=y(o.length));s<n;s++)d(r,s,f?a(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)d(r,s,f?v(i,a,[e.value,s],!0):e.value);return r.length=s,r}})},function(t,n,r){var e=r(0),i=r(82);e(e.S+e.F*r(3)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);t<n;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){var e=r(0),i=r(15),o=[].join;e(e.P+e.F*(r(48)!=Object||!r(21)(o)),"Array",{join:function join(t){return o.call(i(this),t===Jt?",":t)}})},function(t,n,r){var e=r(0),i=r(70),f=r(19),s=r(35),l=r(6),h=[].slice;e(e.P+e.F*r(3)(function(){i&&h.call(i)}),"Array",{slice:function slice(t,n){var r=l(this.length),e=f(this);if(n=n===Jt?r:n,"Array"==e)return h.call(this,t,n);for(var i=s(t,r),o=s(n,r),u=l(o-i),c=new Array(u),a=0;a<u;a++)c[a]="String"==e?this.charAt(i+a):this[i+a];return c}})},function(t,n,r){var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(Jt)})||!u(function(){a.sort(null)})||!r(21)(c)),"Array",{sort:function sort(t){return t===Jt?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){var e=r(0),i=r(25)(0),o=r(21)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(54),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=Jt),e(n)&&null===(n=n[o])&&(n=Jt)),n===Jt?Array:n}},function(t,n,r){var e=r(0),i=r(25)(1);e(e.P+e.F*!r(21)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(2);e(e.P+e.F*!r(21)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(3);e(e.P+e.F*!r(21)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(4);e(e.P+e.F*!r(21)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(109);e(e.P+e.F*!r(21)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){var e=r(0),i=r(109);e(e.P+e.F*!r(21)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){var e=r(0),i=r(52)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(21)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(15),o=r(20),u=r(6),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!r(21)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(1<arguments.length&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);0<=e;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(110)}),r(31)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(85)}),r(31)("fill")},function(t,n,r){var e=r(0),i=r(25)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){var e=r(0),i=r(25)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){r(38)("Array")},function(t,n,r){var e=r(2),o=r(72),i=r(8).f,u=r(37).f,c=r(56),a=r(50),f=e.RegExp,s=f,l=f.prototype,h=/a/g,p=/a/g,v=new f(h)!==h;if(r(7)&&(!v||r(3)(function(){return p[r(5)("match")]=!1,f(h)!=h||f(p)==p||"/a/i"!=f(h,"i")}))){f=function RegExp(t,n){var r=this instanceof f,e=c(t),i=n===Jt;return!r&&e&&t.constructor===f&&i?t:o(v?new s(e&&!i?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&i?a.call(t):n),r?this:l,f)};for(var g=function(n){n in f||i(f,n,{configurable:!0,get:function(){return s[n]},set:function(t){s[n]=t}})},y=u(s),d=0;d<y.length;)g(y[d++]);(l.constructor=f).prototype=l,r(12)(e,"RegExp",f)}r(38)("RegExp")},function(t,n,r){r(113);var e=r(1),i=r(50),o=r(7),u="toString",c=/./[u],a=function(t){r(12)(RegExp.prototype,u,t,!0)};r(3)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?a(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):Jt)}):c.name!=u&&a(function toString(){return c.call(this)})},function(t,n,r){var l=r(1),h=r(6),p=r(88),v=r(58);r(59)("match",1,function(e,i,f,s){return[function match(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=s(f,t,this);if(n.done)return n.value;var r=l(t),e=String(this);if(!r.global)return v(r,e);for(var i,o=r.unicode,u=[],c=r.lastIndex=0;null!==(i=v(r,e));){var a=String(i[0]);""===(u[c]=a)&&(r.lastIndex=p(e,h(r.lastIndex),o)),c++}return 0===c?null:u}]})},function(t,n,r){var w=r(1),e=r(9),E=r(6),O=r(20),M=r(88),I=r(58),P=Math.max,F=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;r(59)("replace",2,function(i,o,x,m){return[function replace(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):x.call(String(r),t,n)},function(t,n){var r=m(x,t,this,n);if(r.done)return r.value;var e=w(t),i=String(this),o="function"==typeof n;o||(n=String(n));var u=e.global;if(u){var c=e.unicode;e.lastIndex=0}for(var a=[];;){var f=I(e,i);if(
null===f)break;if(a.push(f),!u)break;""===String(f[0])&&(e.lastIndex=M(i,E(e.lastIndex),c))}for(var s,l="",h=0,p=0;p<a.length;p++){f=a[p];for(var v=String(f[0]),g=P(F(O(f.index),i.length),0),y=[],d=1;d<f.length;d++)y.push((s=f[d])===Jt?s:String(s));var b=f.groups;if(o){var S=[v].concat(y,g,i);b!==Jt&&S.push(b);var _=String(n.apply(Jt,S))}else _=getSubstitution(v,i,g,y,b,n);h<=g&&(l+=i.slice(h,g)+_,h=g+v.length)}return l+i.slice(h)}];function getSubstitution(o,u,c,a,f,t){var s=c+o.length,l=a.length,n=v;return f!==Jt&&(f=e(f),n=p),x.call(t,n,function(t,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return o;case"`":return u.slice(0,c);case"'":return u.slice(s);case"<":r=f[n.slice(1,-1)];break;default:var e=+n;if(0===e)return t;if(l<e){var i=h(e/10);return 0===i?t:i<=l?a[i-1]===Jt?n.charAt(1):a[i-1]+n.charAt(1):t}r=a[e-1]}return r===Jt?"":r})}})},function(t,n,r){var a=r(1),f=r(99),s=r(58);r(59)("search",1,function(e,i,u,c){return[function search(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=c(u,t,this);if(n.done)return n.value;var r=a(t),e=String(this),i=r.lastIndex;f(i,0)||(r.lastIndex=0);var o=s(r,e);return f(r.lastIndex,i)||(r.lastIndex=i),null===o?-1:o.index}]})},function(t,n,r){var s=r(56),b=r(1),S=r(51),_=r(88),x=r(6),m=r(58),l=r(87),e=r(3),w=Math.min,h=[].push,u="split",p="length",v="lastIndex",E=4294967295,O=!e(function(){RegExp(E,"y")});r(59)("split",2,function(i,o,g,y){var d;return d="c"=="abbc"[u](/(b)*/)[1]||4!="test"[u](/(?:)/,-1)[p]||2!="ab"[u](/(?:ab)*/)[p]||4!="."[u](/(.?)(.?)/)[p]||1<"."[u](/()()/)[p]||""[u](/.?/)[p]?function(t,n){var r=String(this);if(t===Jt&&0===n)return[];if(!s(t))return g.call(r,t,n);for(var e,i,o,u=[],c=0,a=n===Jt?E:n>>>0,f=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(e=l.call(f,r))&&!(c<(i=f[v])&&(u.push(r.slice(c,e.index)),1<e[p]&&e.index<r[p]&&h.apply(u,e.slice(1)),o=e[0][p],c=i,a<=u[p]));)f[v]===e.index&&f[v]++;return c===r[p]?!o&&f.test("")||u.push(""):u.push(r.slice(c)),a<u[p]?u.slice(0,a):u}:"0"[u](Jt,0)[p]?function(t,n){return t===Jt&&0===n?[]:g.call(this,t,n)}:g,[function split(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):d.call(String(r),t,n)},function(t,n){var r=y(d,t,this,n,d!==g);if(r.done)return r.value;var e=b(t),i=String(this),o=S(e,RegExp),u=e.unicode,c=new o(O?e:"^(?:"+e.source+")",(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(O?"y":"g")),a=n===Jt?E:n>>>0;if(0===a)return[];if(0===i.length)return null===m(c,i)?[i]:[];for(var f=0,s=0,l=[];s<i.length;){c.lastIndex=O?s:0;var h,p=m(c,O?i:i.slice(s));if(null===p||(h=w(x(c.lastIndex+(O?0:s)),i.length))===f)s=_(i,s,u);else{if(l.push(i.slice(f,s)),l.length===a)return l;for(var v=1;v<=p.length-1;v++)if(l.push(p[v]),l.length===a)return l;s=f=h}}return l.push(i.slice(f)),l}]})},function(t,n,e){var r,i,o,u,c=e(29),a=e(2),f=e(18),s=e(44),l=e(0),h=e(4),p=e(10),v=e(39),g=e(40),y=e(51),d=e(89).set,b=e(90)(),S=e(91),_=e(114),x=e(60),m=e(115),w="Promise",E=a.TypeError,O=a.process,M=O&&O.versions,I=M&&M.v8||"",P=a[w],F="process"==s(O),A=function(){},k=i=S.f,N=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(A,A)};return(F||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==I.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(r){}}(),j=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},R=function(l,r){if(!l._n){l._n=!0;var e=l._c;b(function(){for(var f=l._v,s=1==l._s,t=0,n=function(t){var n,r,e,i=s?t.ok:t.fail,o=t.resolve,u=t.reject,c=t.domain;try{i?(s||(2==l._h&&D(l),l._h=1),!0===i?n=f:(c&&c.enter(),n=i(f),c&&(c.exit(),e=!0)),n===t.promise?u(E("Promise-chain cycle")):(r=j(n))?r.call(n,o,u):o(n)):u(f)}catch(a){c&&!e&&c.exit(),u(a)}};t<e.length;)n(e[t++]);l._c=[],l._n=!1,r&&!l._h&&T(l)})}},T=function(o){d.call(a,function(){var t,n,r,e=o._v,i=L(o);if(i&&(t=_(function(){F?O.emit("unhandledRejection",e,o):(n=a.onunhandledrejection)?n({promise:o,reason:e}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=F||L(o)?2:1),o._a=Jt,i&&t.e)throw t.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(n){d.call(a,function(){var t;F?O.emit("rejectionHandled",n):(t=a.onrejectionhandled)&&t({promise:n,reason:n._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},U=function(r){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===r)throw E("Promise can't be resolved itself");(e=j(r))?b(function(){var t={_w:i,_d:!1};try{e.call(r,f(U,t,1),f(C,t,1))}catch(n){C.call(t,n)}}):(i._v=r,i._s=1,R(i,!1))}catch(t){C.call({_w:i,_d:!1},t)}}};N||(P=function Promise(t){v(this,P,w,"_h"),p(t),r.call(this);try{t(f(U,this,1),f(C,this,1))}catch(n){C.call(this,n)}},(r=function Promise(t){this._c=[],this._a=Jt,this._s=0,this._d=!1,this._v=Jt,this._h=0,this._n=!1}).prototype=e(41)(P.prototype,{then:function then(t,n){var r=k(y(this,P));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=F?O.domain:Jt,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(t){return this.then(Jt,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=f(U,t,1),this.reject=f(C,t,1)},S.f=k=function(t){return t===P||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!N,{Promise:P}),e(43)(P,w),e(38)(w),u=e(26)[w],l(l.S+l.F*!N,w,{reject:function reject(t){var n=k(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!N),w,{resolve:function resolve(t){return m(c&&this===u?P:this,t)}}),l(l.S+l.F*!(N&&e(57)(function(t){P.all(t)["catch"](A)})),w,{all:function all(t){var u=this,n=k(u),c=n.resolve,a=n.reject,r=_(function(){var e=[],i=0,o=1;g(t,!1,function(t){var n=i++,r=!1;e.push(Jt),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||c(e))},a)}),--o||c(e)});return r.e&&a(r.v),n.promise},race:function race(t){var n=this,r=k(n),e=r.reject,i=_(function(){g(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){var e=r(120),i=r(42),o="WeakSet";r(61)(o,function(t){return function WeakSet(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,o),t,!0)}},e,!1,!0)},function(t,n,r){var e=r(0),o=r(10),u=r(1),c=(r(2).Reflect||{}).apply,a=Function.apply;e(e.S+e.F*!r(3)(function(){c(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=o(t),i=u(r);return c?c(e,n,i):a.call(e,n,i)}})},function(t,n,r){var e=r(0),c=r(36),a=r(10),f=r(1),s=r(4),i=r(3),l=r(100),h=(r(2).Reflect||{}).construct,p=i(function(){function F(){}return!(h(function(){},[],F)instanceof F)}),v=!i(function(){h(function(){})});e(e.S+e.F*(p||v),"Reflect",{construct:function construct(t,n){a(t),f(n);var r=arguments.length<3?t:a(arguments[2]);if(v&&!p)return h(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(l.apply(t,e))}var i=r.prototype,o=c(s(i)?i:Object.prototype),u=Function.apply.call(t,o,n);return s(u)?u:o}})},function(t,n,r){var i=r(8),e=r(0),o=r(1),u=r(22);e(e.S+e.F*r(3)(function(){Reflect.defineProperty(i.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return i.f(t,n,r),!0}catch(e){return!1}}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(80)(o,"Object",function(){var t,n=this._k;do{if(n.length<=this._i)return{value:Jt,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},function(t,n,r){var o=r(16),u=r(17),c=r(14),e=r(0),a=r(4),f=r(1);e(e.S,"Reflect",{get:function get(t,n){var r,e,i=arguments.length<3?t:arguments[2];return f(t)===i?t[n]:(r=o.f(t,n))?c(r,"value")?r.value:r.get!==Jt?r.get.call(i):Jt:a(e=u(t))?get(e,n,i):void 0}})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(17),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(121)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(n){return!1}}})},function(t,n,r){var c=r(8),a=r(16),f=r(17),s=r(14),e=r(0),l=r(32),h=r(1),p=r(4);e(e.S,"Reflect",{set:function set(t,n,r){var e,i,o=arguments.length<4?t:arguments[3],u=a.f(h(t),n);if(!u){if(p(i=f(t)))return set(i,n,r,o);u=l(0)}if(s(u,"value")){if(!1===u.writable||!p(o))return!1;if(e=a.f(o,n)){if(e.get||e.set||!1===e.writable)return!1;e.value=r,c.f(o,n,e)}else c.f(o,n,l(0,r));return!0}return u.set!==Jt&&(u.set.call(o,r),!0)}})},function(t,n,r){var e=r(0),i=r(71);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(r){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){var e=r(0),i=r(9),o=r(22);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(252);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return 9<t?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":9999<n?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(99<r?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&r(12)(e,o,function toString(){var t=c.call(this);return t==t?u.call(this):i})},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(11)(i,e,r(255))},function(t,n,r){var e=r(1),i=r(22);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(0),i=r(62),o=r(92),f=r(1),s=r(35),l=r(6),u=r(4),c=r(2).ArrayBuffer,h=r(51),p=o.ArrayBuffer,v=o.DataView,a=i.ABV&&c.isView,g=p.prototype.slice,y=i.VIEW,d="ArrayBuffer";e(e.G+e.W+e.F*(c!==p),{ArrayBuffer:p}),e(e.S+e.F*!i.CONSTR,d,{isView:function isView(t){return a&&a(t)||u(t)&&y in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new p(2).slice(1,Jt).byteLength}),d,{slice:function slice(t,n){if(g!==Jt&&n===Jt)return g.call(f(this),t);for(var r=f(this).byteLength,e=s(t,r),i=s(n===Jt?r:n,r),o=new(h(this,p))(l(i-e)),u=new v(this),c=new v(o),a=0;e<i;)c.setUint8(a++,u.getUint8(e++));return o}}),r(38)(d)},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(62).ABV,{DataView:r(92).DataView})},function(t,n,r){r(27)("Int8",1,function(e){return function Int8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8ClampedArray(t,n,r){return e(this,t,n,r)}},!0)},function(t,n,r){r(27)("Int16",2,function(e){return function Int16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint16",2,function(e){return function Uint16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Int32",4,function(e){return function Int32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint32",4,function(e){return function Uint32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float32",4,function(e){return function Float32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float64",8,function(e){return function Float64Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){var e=r(0),i=r(52)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)("includes")},function(t,n,r){var e=r(0),i=r(123),o=r(9),u=r(6),c=r(10),a=r(84);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(31)("flatMap")},function(t,n,r){var e=r(0),i=r(123),o=r(9),u=r(6),c=r(20),a=r(84);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,t===Jt?1:c(t)),e}}),r(31)("flatten")},function(t,n,r){var e=r(0),i=r(55)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},function(t,n,r){var e=r(0),i=r(124),o=r(60),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padStart:function padStart(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!0)}})},function(t,n,r){var e=r(0),i=r(124),o=r(60),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padEnd:function padEnd(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!1)}})},function(t,n,r){r(45)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},function(t,n,r){r(45)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},function(t,n,r){var e=r(0),i=r(23),o=r(6),u=r(56),c=r(50),a=RegExp.prototype,f=function(t,n){this._r=t,this._s=n};r(80)(f,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new f(e,n)}})},function(t,n,r){r(67)("asyncIterator")},function(t,n,r){r(67)("observable")},function(t,n,r){var e=r(0),a=r(121),f=r(15),s=r(16),l=r(82);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=f(t),i=s.f,o=a(e),u={},c=0;c<o.length;)(r=i(e,n=o[c++]))!==Jt&&l(u,n,r);return u}})},function(t,n,r){var e=r(0),i=r(125)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(125)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(63),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(63),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(7)&&e(e.P+r(63),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(7)&&e(e.P+r(63),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(126)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(126)("Set")})},function(t,n,r){r(64)("Map")},function(t,n,r){r(64)("Set")},function(t,n,r){r(64)("WeakMap")},function(t,n,r){r(64)("WeakSet")},function(t,n,r){r(65)("Map")},function(t,n,r){r(65)("Set")},function(t,n,r){r(65)("WeakMap")},function(t,n,r){r(65)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(19);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},function(t,n,r){var e=r(0),o=r(128),u=r(107);e(e.S,"Math",{fscale:function fscale(t,n,r,e,i){return u(o(t,n,r,e,i))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(128)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:0<t}})},function(t,n,r){var e=r(0),i=r(26),o=r(2),u=r(51),c=r(115);e(e.P+e.R,"Promise",{"finally":function(n){var r=u(this,i.Promise||o.Promise),t="function"==typeof n;return this.then(t?function(t){return c(r,n()).then(function(){return t})}:n,t?function(t){return c(r,n()).then(function(){throw t})}:n)}})},function(t,n,r){var e=r(0),i=r(91),o=r(114);e(e.S,"Promise",{"try":function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){var e=r(28),o=r(1),u=e.key,c=e.map,a=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?Jt:u(arguments[2]),e=c(o(n),r,!1);if(e===Jt||!e["delete"](t))return!1;if(e.size)return!0;var i=a.get(n);return i["delete"](r),!!i.size||a["delete"](n)}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.get,a=e.key,f=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?f(t,e,r):Jt};e.exp({getMetadata:function getMetadata(t,n){return f(t,i(n),arguments.length<3?Jt:a(arguments[2]))}})},function(t,n,r){var o=r(118),u=r(127),e=r(28),i=r(1),c=r(17),a=e.keys,f=e.key,s=function(t,n){var r=a(t,n),e=c(t);if(null===e)return r;var i=s(e,n);return i.length?r.length?u(new o(r.concat(i))):i:r};e.exp({getMetadataKeys:function getMetadataKeys(t){return s(i(t),arguments.length<2?Jt:f(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?Jt:u(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return a(t,i(n),arguments.length<3?Jt:c(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function metadata(r,e){return function decorator(t,n){c(r,e,(n!==Jt?i:o)(t),u(n))}}})},function(t,n,r){var e=r(0),i=r(90)(),o=r(2).process,u="process"==r(19)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(0),o=r(2),u=r(26),i=r(90)(),c=r(5)("observable"),a=r(10),f=r(1),s=r(39),l=r(41),h=r(11),p=r(40),v=p.RETURN,g=function(t){return null==t?Jt:a(t)},y=function(t){var n=t._c;n&&(t._c=Jt,n())},d=function(t){return t._o===Jt},b=function(t){d(t)||(t._o=Jt,y(t))},S=function(t,n){f(t),this._c=Jt,this._o=t,t=new _(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(i){return void t.error(i)}d(this)&&y(this)};S.prototype=l({},{unsubscribe:function unsubscribe(){b(this)}});var _=function(t){this._s=t};_.prototype=l({},{next:function next(t){var n=this._s;if(!d(n)){var r=n._o;try{var e=g(r.next);if(e)return e.call(r,t)}catch(i){try{b(n)}finally{throw i}}}},error:function error(t){var n=this._s;if(d(n))throw t;var r=n._o;n._o=Jt;try{var e=g(r.error);if(!e)throw t;t=e.call(r,t)}catch(i){try{y(n)}finally{throw i}}return y(n),t},complete:function complete(t){var n=this._s;if(!d(n)){var r=n._o;n._o=Jt;try{var e=g(r.complete);t=e?e.call(r,t):Jt}catch(i){try{y(n)}finally{throw i}}return y(n),t}}});var x=function Observable(t){s(this,x,"Observable","_f")._f=a(t)};l(x.prototype,{subscribe:function subscribe(t){return new S(t,this._f)},forEach:function forEach(i){var n=this;return new(u.Promise||o.Promise)(function(t,r){a(i);var e=n.subscribe({next:function(t){try{return i(t)}catch(n){r(n),e.unsubscribe()}},error:r,complete:t})})}}),l(x,{from:function from(e){var t="function"==typeof this?this:x,n=g(f(e)[c]);if(n){var r=f(n.call(e));return r.constructor===t?r:new t(function(t){return r.subscribe(t)})}return new t(function(n){var r=!1;return i(function(){if(!r){try{if(p(e,!1,function(t){if(n.next(t),r)return v})===v)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,e=new Array(n);t<n;)e[t]=arguments[t++];return new("function"==typeof this?this:x)(function(n){var r=!1;return i(function(){if(!r){for(var t=0;t<e.length;++t)if(n.next(e[t]),r)return;n.complete()}}),function(){r=!0}})}}),h(x.prototype,c,function(){return this}),e(e.G,{Observable:x}),r(38)("Observable")},function(t,n,r){var e=r(0),i=r(89);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(86),i=r(34),o=r(12),u=r(2),c=r(11),a=r(46),f=r(5),s=f("iterator"),l=f("toStringTag"),h=a.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),g=0;g<v.length;g++){var y,d=v[g],b=p[d],S=u[d],_=S&&S.prototype;if(_&&(_[s]||c(_,s,h),_[l]||c(_,l,d),a[d]=h,b))for(y in e)_[y]||o(_,y,e[y],!0)}},function(t,n,r){var e=r(2),i=r(0),o=r(60),u=[].slice,c=/MSIE .\./.test(o),a=function(i){return function(t,n){var r=2<arguments.length,e=!!r&&u.call(arguments,2);return i(r?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,n)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})}]),"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):i.core=e}(1,1);
//# sourceMappingURL=shim.min.js.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(this,function(){"use strict";function e(e,t){return Zone.current.wrap(e,t)}function t(e,t,n,r,o){return Zone.current.scheduleMacroTask(e,t,n,r,o)}function n(t,n){for(var r=t.length-1;r>=0;r--)"function"==typeof t[r]&&(t[r]=e(t[r],n+"_"+r));return t}function r(e,t){for(var r=e.constructor.name,a=function(a){var i=t[a],s=e[i];if(s){var c=L(e,i);if(!o(c))return"continue";e[i]=function(e){var t=function(){return e.apply(this,n(arguments,r+"."+i))};return f(t,e),t}(s)}},i=0;i<t.length;i++)a(i)}function o(e){return!e||e.writable!==!1&&!("function"==typeof e.get&&"undefined"==typeof e.set)}function a(e,t,n){var r=L(e,t);if(!r&&n){var o=L(n,t);o&&(r={enumerable:!0,configurable:!0})}if(r&&r.configurable){var a=U("on"+t+"patched");if(!e.hasOwnProperty(a)||!e[a]){delete r.writable,delete r.value;var i=r.get,s=r.set,c=t.substr(2),u=re[c];u||(u=re[c]=U("ON_PROPERTY"+c)),r.set=function(t){var n=this;if(n||e!==J||(n=J),n){var r=n[u];r&&n.removeEventListener(c,oe),s&&s.apply(n,Q),"function"==typeof t?(n[u]=t,n.addEventListener(c,oe,!1)):n[u]=null}},r.get=function(){var n=this;if(n||e!==J||(n=J),!n)return null;var o=n[u];if(o)return o;if(i){var a=i&&i.call(this);if(a)return r.set.call(this,a),"function"==typeof n[Y]&&n.removeAttribute(t),a}return null},x(e,t,r),e[a]=!0}}}function i(e,t,n){if(t)for(var r=0;r<t.length;r++)a(e,"on"+t[r],n);else{var o=[];for(var i in e)"on"==i.substr(0,2)&&o.push(i);for(var s=0;s<o.length;s++)a(e,o[s],n)}}function s(t){var r=J[t];if(r){J[U(t)]=r,J[t]=function(){var e=n(arguments,t);switch(e.length){case 0:this[ae]=new r;break;case 1:this[ae]=new r(e[0]);break;case 2:this[ae]=new r(e[0],e[1]);break;case 3:this[ae]=new r(e[0],e[1],e[2]);break;case 4:this[ae]=new r(e[0],e[1],e[2],e[3]);break;default:throw new Error("Arg list too long.")}},f(J[t],r);var o,a=new r(function(){});for(o in a)"XMLHttpRequest"===t&&"responseBlob"===o||!function(n){"function"==typeof a[n]?J[t].prototype[n]=function(){return this[ae][n].apply(this[ae],arguments)}:x(J[t].prototype,n,{set:function(r){"function"==typeof r?(this[ae][n]=e(r,t+"."+n),f(this[ae][n],r)):this[ae][n]=r},get:function(){return this[ae][n]}})}(o);for(o in r)"prototype"!==o&&r.hasOwnProperty(o)&&(J[t][o]=r[o])}}function c(e,t){if("function"==typeof Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);n.forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){(!r||r.writable&&"function"==typeof r.set)&&(e[n]=t)},enumerable:!r||r.enumerable,configurable:!r||r.configurable})})}}function u(e,t,n){for(var r=e;r&&!r.hasOwnProperty(t);)r=R(r);!r&&e[t]&&(r=e);var a=U(t),i=null;if(r&&!(i=r[a])){i=r[a]=r[t];var s=r&&L(r,t);if(o(s)){var u=n(i,a,t);r[t]=function(){return u(this,arguments)},f(r[t],i),ie&&c(i,r[t])}}return i}function l(e,n,r){function o(e){var t=e.data;return t.args[t.cbIdx]=function(){e.invoke.apply(this,arguments)},a.apply(t.target,t.args),e}var a=null;a=u(e,n,function(e){return function(n,a){var i=r(n,a);return i.cbIdx>=0&&"function"==typeof a[i.cbIdx]?t(i.name,a[i.cbIdx],i,o):e.apply(n,a)}})}function f(e,t){e[U("OriginalDelegate")]=t}function p(){try{var e=K.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch(t){}return!1}function h(){if(se)return ce;se=!0;try{var e=K.navigator.userAgent;return e.indexOf("MSIE ")===-1&&e.indexOf("Trident/")===-1&&e.indexOf("Edge/")===-1||(ce=!0),ce}catch(t){}}function d(e,t,n){function r(t,n){function r(e){ue||"boolean"==typeof w.options||"undefined"==typeof w.options||null===w.options||(e.options=!!w.options.capture,w.options=e.options)}if(!t)return!1;var h=!0;n&&void 0!==n.useG&&(h=n.useG);var y=n&&n.vh,m=!0;n&&void 0!==n.chkDup&&(m=n.chkDup);var k=!1;n&&void 0!==n.rt&&(k=n.rt);for(var _=t;_&&!_.hasOwnProperty(o);)_=R(_);if(!_&&t[o]&&(_=t),!_)return!1;if(_[c])return!1;var b,T=n&&n.eventNameToString,w={},E=_[c]=_[o],S=_[U(a)]=_[a],D=_[U(i)]=_[i],Z=_[U(s)]=_[s];n&&n.prepend&&(b=_[U(n.prepend)]=_[n.prepend]);var z=function(e){if(!w.isExisting)return r(e),E.call(w.target,w.eventName,w.capture?g:d,w.options)},O=function(e){if(!e.isRemoved){var t=he[e.eventName],n=void 0;t&&(n=t[e.capture?W:X]);var r=n&&e.target[n];if(r)for(var o=0;o<r.length;o++){var a=r[o];if(a===e){r.splice(o,1),e.isRemoved=!0,0===r.length&&(e.allRemoved=!0,e.target[n]=null);break}}}if(e.allRemoved)return S.call(e.target,e.eventName,e.capture?g:d,e.options)},P=function(e){return r(e),E.call(w.target,w.eventName,e.invoke,w.options)},C=function(e){return b.call(w.target,w.eventName,e.invoke,w.options)},j=function(e){return S.call(e.target,e.eventName,e.invoke,e.options)},I=h?z:P,M=h?O:j,L=function(e,t){var n=typeof t;return"function"===n&&e.callback===t||"object"===n&&e.originalDelegate===t},x=n&&n.diff?n.diff:L,H=Zone[Zone.__symbol__("BLACK_LISTED_EVENTS")],F=function(t,n,r,o,a,i){return void 0===a&&(a=!1),void 0===i&&(i=!1),function(){var s=this||e,c=arguments[0],u=arguments[1];if(!u)return t.apply(this,arguments);if(ee&&"uncaughtException"===c)return t.apply(this,arguments);var l=!1;if("function"!=typeof u){if(!u.handleEvent)return t.apply(this,arguments);l=!0}if(!y||y(t,u,s,arguments)){var f=arguments[2];if(H)for(var p=0;p<H.length;p++)if(c===H[p])return t.apply(this,arguments);var d,v=!1;void 0===f?d=!1:f===!0?d=!0:f===!1?d=!1:(d=!!f&&!!f.capture,v=!!f&&!!f.once);var g,k=Zone.current,_=he[c];if(_)g=_[d?W:X];else{var b=(T?T(c):c)+X,E=(T?T(c):c)+W,S=G+b,D=G+E;he[c]={},he[c][X]=S,he[c][W]=D,g=d?D:S}var Z=s[g],z=!1;if(Z){if(z=!0,m)for(var p=0;p<Z.length;p++)if(x(Z[p],u))return}else Z=s[g]=[];var O,P=s.constructor.name,C=de[P];C&&(O=C[c]),O||(O=P+n+(T?T(c):c)),w.options=f,v&&(w.options.once=!1),w.target=s,w.capture=d,w.eventName=c,w.isExisting=z;var j=h?pe:void 0;j&&(j.taskData=w);var I=k.scheduleEventTask(O,u,j,r,o);return w.target=null,j&&(j.taskData=null),v&&(f.once=!0),(ue||"boolean"!=typeof I.options)&&(I.options=f),I.target=s,I.capture=d,I.eventName=c,l&&(I.originalDelegate=u),i?Z.unshift(I):Z.push(I),a?s:void 0}}};return _[o]=F(E,u,I,M,k),b&&(_[l]=F(b,p,C,M,k,!0)),_[a]=function(){var t,n=this||e,r=arguments[0],o=arguments[2];t=void 0!==o&&(o===!0||o!==!1&&(!!o&&!!o.capture));var a=arguments[1];if(!a)return S.apply(this,arguments);if(!y||y(S,a,n,arguments)){var i,s=he[r];s&&(i=s[t?W:X]);var c=i&&n[i];if(c)for(var u=0;u<c.length;u++){var l=c[u];if(x(l,a)){if(c.splice(u,1),l.isRemoved=!0,0===c.length&&(l.allRemoved=!0,n[i]=null),l.zone.cancelTask(l),k)return n;return}}return S.apply(this,arguments)}},_[i]=function(){for(var t=this||e,n=arguments[0],r=[],o=v(t,T?T(n):n),a=0;a<o.length;a++){var i=o[a],s=i.originalDelegate?i.originalDelegate:i.callback;r.push(s)}return r},_[s]=function(){var t=this||e,n=arguments[0];if(n){var r=he[n];if(r){var o=r[X],i=r[W],c=t[o],u=t[i];if(c)for(var l=c.slice(),f=0;f<l.length;f++){var p=l[f],h=p.originalDelegate?p.originalDelegate:p.callback;this[a].call(this,n,h,p.options)}if(u)for(var l=u.slice(),f=0;f<l.length;f++){var p=l[f],h=p.originalDelegate?p.originalDelegate:p.callback;this[a].call(this,n,h,p.options)}}}else{for(var d=Object.keys(t),f=0;f<d.length;f++){var v=d[f],g=ve.exec(v),y=g&&g[1];y&&"removeListener"!==y&&this[s].call(this,y)}this[s].call(this,"removeListener")}if(k)return this},f(_[o],E),f(_[a],S),Z&&f(_[s],Z),D&&f(_[i],D),!0}for(var o=n&&n.add||A,a=n&&n.rm||B,i=n&&n.listeners||"eventListeners",s=n&&n.rmAll||"removeAllListeners",c=U(o),u="."+o+":",l="prependListener",p="."+l+":",h=function(e,t,n){if(!e.isRemoved){var r=e.callback;"object"==typeof r&&r.handleEvent&&(e.callback=function(e){return r.handleEvent(e)},e.originalDelegate=r),e.invoke(e,t,[n]);var o=e.options;if(o&&"object"==typeof o&&o.once){var i=e.originalDelegate?e.originalDelegate:e.callback;t[a].call(t,n.type,i,o)}}},d=function(t){if(t=t||e.event){var n=this||t.target||e,r=n[he[t.type][X]];if(r)if(1===r.length)h(r[0],n,t);else for(var o=r.slice(),a=0;a<o.length&&(!t||t[ge]!==!0);a++)h(o[a],n,t)}},g=function(t){if(t=t||e.event){var n=this||t.target||e,r=n[he[t.type][W]];if(r)if(1===r.length)h(r[0],n,t);else for(var o=r.slice(),a=0;a<o.length&&(!t||t[ge]!==!0);a++)h(o[a],n,t)}},y=[],m=0;m<t.length;m++)y[m]=r(t[m],n);return y}function v(e,t){var n=[];for(var r in e){var o=ve.exec(r),a=o&&o[1];if(a&&(!t||a===t)){var i=e[r];if(i)for(var s=0;s<i.length;s++)n.push(i[s])}}return n}function g(e,t){var n=e.Event;n&&n.prototype&&t.patchMethod(n.prototype,"stopImmediatePropagation",function(e){return function(t,n){t[ge]=!0,e&&e.apply(t,n)}})}function y(e,n,r,o){function a(t){function n(){try{t.invoke.apply(this,arguments)}finally{t.data&&t.data.isPeriodic||("number"==typeof r.handleId?delete l[r.handleId]:r.handleId&&(r.handleId[ye]=null))}}var r=t.data;return r.args[0]=n,r.handleId=s.apply(e,r.args),t}function i(e){return c(e.data.handleId)}var s=null,c=null;n+=o,r+=o;var l={};s=u(e,n,function(r){return function(s,c){if("function"==typeof c[0]){var u={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?c[1]||0:void 0,args:c},f=t(n,c[0],u,a,i);if(!f)return f;var p=f.data.handleId;return"number"==typeof p?l[p]=f:p&&(p[ye]=f),p&&p.ref&&p.unref&&"function"==typeof p.ref&&"function"==typeof p.unref&&(f.ref=p.ref.bind(p),f.unref=p.unref.bind(p)),"number"==typeof p||p?p:f}return r.apply(e,c)}}),c=u(e,r,function(t){return function(n,r){var o,a=r[0];"number"==typeof a?o=l[a]:(o=a&&a[ye],o||(o=a)),o&&"string"==typeof o.type?"notScheduled"!==o.state&&(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&("number"==typeof a?delete l[a]:a&&(a[ye]=null),o.zone.cancelTask(o)):t.apply(e,r)}})}function m(){Object.defineProperty=function(e,t,n){if(_(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=b(e,t,n)),T(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=b(e,n,t[n])}),_e(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=ke(e,t);return n&&_(e,t)&&(n.configurable=!1),n}}function k(e,t,n){var r=n.configurable;return n=b(e,t,n),T(e,t,n,r)}function _(e,t){return e&&e[be]&&e[be][t]}function b(e,t,n){return Object.isFrozen(n)||(n.configurable=!0),n.configurable||(e[be]||Object.isFrozen(e)||me(e,be,{writable:!0,value:{}}),e[be]&&(e[be][t]=!0)),n}function T(e,t,n,r){try{return me(e,t,n)}catch(o){if(!n.configurable)throw o;"undefined"==typeof r?delete n.configurable:n.configurable=r;try{return me(e,t,n)}catch(o){var a=null;try{a=JSON.stringify(n)}catch(o){a=n.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+a+"' on object '"+e+"' and got error, giving up: "+o)}}}function w(e,t){var n=t.WebSocket;t.EventTarget||d(t,[n.prototype]),t.WebSocket=function(e,t){var r,o,a=arguments.length>1?new n(e,t):new n(e),s=L(a,"onmessage");return s&&s.configurable===!1?(r=H(a),o=a,[A,B,"send","close"].forEach(function(e){r[e]=function(){var t=F.call(arguments);if(e===A||e===B){var n=t.length>0?t[0]:void 0;if(n){var o=Zone.__symbol__("ON_PROPERTY"+n);a[o]=r[o]}}return a[e].apply(a,t)}})):r=a,i(r,["close","error","message","open"],o),r};var r=t.WebSocket;for(var o in n)r[o]=n[o]}function E(e,t,n){if(!n||0===n.length)return t;var r=n.filter(function(t){return t.target===e});if(!r||0===r.length)return t;var o=r[0].ignoreProperties;return t.filter(function(e){return o.indexOf(e)===-1})}function S(e,t,n,r){if(e){var o=E(e,t,n);i(e,o,r)}}function D(e,t){if(!ee||ne){var n="undefined"!=typeof WebSocket;if(Z()){var r=t.__Zone_ignore_on_properties;if(te){var o=window,a=p?[{target:o,ignoreProperties:["error"]}]:[];S(o,He.concat(["messageerror"]),r?r.concat(a):r,R(o)),S(Document.prototype,He,r),"undefined"!=typeof o.SVGElement&&S(o.SVGElement.prototype,He,r),S(Element.prototype,He,r),S(HTMLElement.prototype,He,r),S(HTMLMediaElement.prototype,De,r),S(HTMLFrameSetElement.prototype,Ee.concat(je),r),S(HTMLBodyElement.prototype,Ee.concat(je),r),S(HTMLFrameElement.prototype,Ce,r),S(HTMLIFrameElement.prototype,Ce,r);var i=o.HTMLMarqueeElement;i&&S(i.prototype,Ie,r);var c=o.Worker;c&&S(c.prototype,Re,r)}S(XMLHttpRequest.prototype,Me,r);var u=t.XMLHttpRequestEventTarget;u&&S(u&&u.prototype,Me,r),"undefined"!=typeof IDBIndex&&(S(IDBIndex.prototype,Le,r),S(IDBRequest.prototype,Le,r),S(IDBOpenDBRequest.prototype,Le,r),S(IDBDatabase.prototype,Le,r),S(IDBTransaction.prototype,Le,r),S(IDBCursor.prototype,Le,r)),n&&S(WebSocket.prototype,xe,r)}else z(),s("XMLHttpRequest"),n&&w(e,t)}}function Z(){if((te||ne)&&!L(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=L(Element.prototype,"onclick");if(e&&!e.configurable)return!1}var t="onreadystatechange",n=XMLHttpRequest.prototype,r=L(n,t);if(r){x(n,t,{enumerable:!0,configurable:!0,get:function(){return!0}});var o=new XMLHttpRequest,a=!!o.onreadystatechange;return x(n,t,r||{}),a}var i=U("fake");x(n,t,{enumerable:!0,configurable:!0,get:function(){return this[i]},set:function(e){this[i]=e}});var o=new XMLHttpRequest,s=function(){};o.onreadystatechange=s;var a=o[i]===s;return o.onreadystatechange=null,a}function z(){for(var t=function(t){var n=He[t],r="on"+n;self.addEventListener(n,function(t){var n,o,a=t.target;for(o=a?a.constructor.name+"."+r:"unknown."+r;a;)a[r]&&!a[r][Fe]&&(n=e(a[r],o),n[Fe]=a[r],a[r]=n),a=a.parentElement},!0)},n=0;n<He.length;n++)t(n)}function O(e,t){var n="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",r="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),o="EventTarget",a=[],i=e.wtf,s=n.split(",");i?a=s.map(function(e){return"HTML"+e+"Element"}).concat(r):e[o]?a.push(o):a=r;for(var c=e.__Zone_disable_IE_check||!1,u=e.__Zone_enable_cross_context_check||!1,l=h(),f=".addEventListener:",p="[object FunctionWrapper]",v="function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",g=0;g<He.length;g++){var y=He[g],m=y+X,k=y+W,_=G+m,b=G+k;he[y]={},he[y][X]=_,he[y][W]=b}for(var g=0;g<n.length;g++)for(var T=s[g],w=de[T]={},E=0;E<He.length;E++){var y=He[E];w[y]=T+f+y}for(var S=function(e,t,n,r){if(!c&&l)if(u)try{var o=t.toString();if(o===p||o==v)return e.apply(n,r),!1}catch(a){return e.apply(n,r),!1}else{var o=t.toString();if(o===p||o==v)return e.apply(n,r),!1}else if(u)try{t.toString()}catch(a){return e.apply(n,r),!1}return!0},D=[],g=0;g<a.length;g++){var Z=e[a[g]];D.push(Z&&Z.prototype)}return d(e,D,{vh:S}),t.patchEventTarget=d,!0}function P(e,t){g(e,t)}function C(t,n,r,o){var a=Zone.__symbol__(r);if(!t[a]){var i=t[a]=t[r];t[r]=function(a,s,c){return s&&s.prototype&&o.forEach(function(t){var o=n+"."+r+"::"+t,a=s.prototype;if(a.hasOwnProperty(t)){var i=L(a,t);i&&i.value?(i.value=e(i.value,o),k(s.prototype,t,i)):a[t]&&(a[t]=e(a[t],o))}else a[t]&&(a[t]=e(a[t],o))}),i.call(t,a,s,c)},f(t[r],i)}}function j(e){if((te||ne)&&"registerElement"in e.document){var t=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];C(document,"Document","registerElement",t)}}function I(e){if((te||ne)&&"customElements"in e){var t=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];C(e.customElements,"customElements","define",t)}}var M=(function(e){function t(e){s&&s.mark&&s.mark(e)}function n(e,t){s&&s.measure&&s.measure(e,t)}function r(t){if(0===I&&0===y.length)if(u||e[v]&&(u=e[v].resolve(0)),u){var n=u[g];n||(n=u.then),n.call(u,o)}else e[d](o,0);t&&y.push(t)}function o(){if(!m){for(m=!0;y.length;){var e=y;y=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){P.onUnhandledError(r)}}}P.microtaskDrainDone(),m=!1}}function a(){}function i(e){return"__zone_symbol__"+e}var s=e.performance;t("Zone");var c=e.__zone_symbol__forceDuplicateZoneCheck===!0;if(e.Zone){if(c||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}var u,l=function(){function r(e,t){this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new p(this,this._parent&&this._parent._zoneDelegate,t)}return r.assertZonePatched=function(){if(e.Promise!==O.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(r,"root",{get:function(){for(var e=r.current;e.parent;)e=e.parent;return e},enumerable:!0,configurable:!0}),Object.defineProperty(r,"current",{get:function(){return C.zone},enumerable:!0,configurable:!0}),Object.defineProperty(r,"currentTask",{get:function(){return j},enumerable:!0,configurable:!0}),r.__load_patch=function(o,a){if(O.hasOwnProperty(o)){if(c)throw Error("Already loaded patch: "+o)}else if(!e["__Zone_disable_"+o]){var i="Zone:"+o;t(i),O[o]=a(e,r,P),n(i,i)}},Object.defineProperty(r.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),r.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},r.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},r.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},r.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},r.prototype.run=function(e,t,n,r){C={parent:C,zone:this};try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{C=C.parent}},r.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),C={parent:C,zone:this};try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(o){if(this._zoneDelegate.handleError(this,o))throw o}}finally{C=C.parent}},r.prototype.runTask=function(e,t,n){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||k).name+"; Execution: "+this.name+")");if(e.state!==_||e.type!==z&&e.type!==Z){var r=e.state!=w;r&&e._transitionTo(w,T),e.runCount++;var o=j;j=e,C={parent:C,zone:this};try{e.type==Z&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{e.state!==_&&e.state!==S&&(e.type==z||e.data&&e.data.isPeriodic?r&&e._transitionTo(T,w):(e.runCount=0,this._updateTaskCount(e,-1),r&&e._transitionTo(_,w,_))),C=C.parent,j=o}}},r.prototype.scheduleTask=function(e){if(e.zone&&e.zone!==this)for(var t=this;t;){if(t===e.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+e.zone.name);t=t.parent}e._transitionTo(b,_);var n=[];e._zoneDelegates=n,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(r){throw e._transitionTo(S,b,_),this._zoneDelegate.handleError(this,r),r}return e._zoneDelegates===n&&this._updateTaskCount(e,1),e.state==b&&e._transitionTo(T,b),e},r.prototype.scheduleMicroTask=function(e,t,n,r){return this.scheduleTask(new h(D,e,t,n,r,(void 0)))},r.prototype.scheduleMacroTask=function(e,t,n,r,o){return this.scheduleTask(new h(Z,e,t,n,r,o))},r.prototype.scheduleEventTask=function(e,t,n,r,o){return this.scheduleTask(new h(z,e,t,n,r,o))},r.prototype.cancelTask=function(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||k).name+"; Execution: "+this.name+")");e._transitionTo(E,T,w);try{this._zoneDelegate.cancelTask(this,e)}catch(t){throw e._transitionTo(S,E),this._zoneDelegate.handleError(this,t),t}return this._updateTaskCount(e,-1),e._transitionTo(_,E),e.runCount=0,e},r.prototype._updateTaskCount=function(e,t){var n=e._zoneDelegates;t==-1&&(e._zoneDelegates=null);for(var r=0;r<n.length;r++)n[r]._updateTaskCount(e.type,t)},r.__symbol__=i,r}(),f={name:"",onHasTask:function(e,t,n,r){return e.hasTask(n,r)},onScheduleTask:function(e,t,n,r){return e.scheduleTask(n,r)},onInvokeTask:function(e,t,n,r,o,a){return e.invokeTask(n,r,o,a)},onCancelTask:function(e,t,n,r){return e.cancelTask(n,r)}},p=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:t.zone),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:t.zone),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:t.zone),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:t.zone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:t.zone),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:t.zone),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:t.zone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var r=n&&n.onHasTask,o=t&&t._hasTaskZS;(r||o)&&(this._hasTaskZS=r?n:f,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=e,n.onScheduleTask||(this._scheduleTaskZS=f,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),n.onInvokeTask||(this._invokeTaskZS=f,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),n.onCancelTask||(this._cancelTaskZS=f,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new l(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)},e.prototype.scheduleTask=function(e,t){var n=t;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t),n||(n=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=D)throw new Error("Task is missing scheduleFn.");r(t)}return n},e.prototype.invokeTask=function(e,t,n,r){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,n,r):t.callback.apply(n,r)},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");n=t.cancelFn(t)}return n},e.prototype.hasTask=function(e,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)}catch(n){this.handleError(e,n)}},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var a={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};this.hasTask(this.zone,a)}},e}(),h=function(){function t(n,r,o,a,i,s){this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=n,this.source=r,this.data=a,this.scheduleFn=i,this.cancelFn=s,this.callback=o;var c=this;n===z&&a&&a.useG?this.invoke=t.invokeTask:this.invoke=function(){return t.invokeTask.call(e,c,this,arguments)}}return t.invokeTask=function(e,t,n){e||(e=this),I++;try{return e.runCount++,e.zone.runTask(e,t,n)}finally{1==I&&o(),I--}},Object.defineProperty(t.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),t.prototype.cancelScheduleRequest=function(){this._transitionTo(_,b)},t.prototype._transitionTo=function(e,t,n){if(this._state!==t&&this._state!==n)throw new Error(this.type+" '"+this.source+"': can not transition to '"+e+"', expecting state '"+t+"'"+(n?" or '"+n+"'":"")+", was '"+this._state+"'.");this._state=e,e==_&&(this._zoneDelegates=null)},t.prototype.toString=function(){return this.data&&"undefined"!=typeof this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)},t.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},t}(),d=i("setTimeout"),v=i("Promise"),g=i("then"),y=[],m=!1,k={name:"NO ZONE"},_="notScheduled",b="scheduling",T="scheduled",w="running",E="canceling",S="unknown",D="microTask",Z="macroTask",z="eventTask",O={},P={symbol:i,currentZoneFrame:function(){return C},onUnhandledError:a,microtaskDrainDone:a,scheduleMicroTask:r,showUncaughtError:function(){return!l[i("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:a,patchMethod:function(){return a},bindArguments:function(){return[]},patchThen:function(){return a},setNativePromise:function(e){e&&"function"==typeof e.resolve&&(u=e.resolve(0))}},C={parent:null,zone:new l(null,null)},j=null,I=0;return n("Zone","Zone"),e.Zone=l}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global),function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}});Zone.__load_patch("ZoneAwarePromise",function(e,t,n){function r(e){if(e&&e.toString===Object.prototype.toString){var t=e.constructor&&e.constructor.name;return(t?t:"")+": "+JSON.stringify(e)}return e?e.toString():Object.prototype.toString.call(e)}function o(e){n.onUnhandledError(e);try{var r=t[_];r&&"function"==typeof r&&r.call(this,e)}catch(o){}}function a(e){return e&&e.then}function i(e){return e}function s(e){return R.reject(e)}function c(e,t){return function(n){try{u(e,t,n)}catch(r){u(e,!1,r)}}}function u(e,o,a){var i=C();if(e===a)throw new TypeError(j);if(e[b]===Z){var s=null;try{"object"!=typeof a&&"function"!=typeof a||(s=a&&a.then)}catch(p){return i(function(){u(e,!1,p)})(),e}if(o!==O&&a instanceof R&&a.hasOwnProperty(b)&&a.hasOwnProperty(T)&&a[b]!==Z)l(a),u(e,a[b],a[T]);else if(o!==O&&"function"==typeof s)try{s.call(a,i(c(e,o)),i(c(e,!1)))}catch(p){i(function(){u(e,!1,p)})()}else{e[b]=o;var h=e[T];if(e[T]=a,e[w]===w&&o===z&&(e[b]=e[S],e[T]=e[E]),o===O&&a instanceof Error){var v=t.currentTask&&t.currentTask.data&&t.currentTask.data[k];v&&d(a,I,{configurable:!0,enumerable:!1,writable:!0,value:v})}for(var y=0;y<h.length;)f(e,h[y++],h[y++],h[y++],h[y++]);if(0==h.length&&o==O){e[b]=P;try{throw new Error("Uncaught (in promise): "+r(a)+(a&&a.stack?"\n"+a.stack:""))}catch(p){var m=p;m.rejection=a,m.promise=e,m.zone=t.current,m.task=t.currentTask,g.push(m),n.scheduleMicroTask()}}}}return e}function l(e){if(e[b]===P){try{var n=t[L];n&&"function"==typeof n&&n.call(this,{rejection:e[T],promise:e})}catch(r){}e[b]=O;for(var o=0;o<g.length;o++)e===g[o].promise&&g.splice(o,1)}}function f(e,t,n,r,o){l(e);var a=e[b],c=a?"function"==typeof r?r:i:"function"==typeof o?o:s;t.scheduleMicroTask(D,function(){try{var r=e[T],o=n&&w===n[w];o&&(n[E]=r,n[S]=a);var l=t.run(c,void 0,o&&c!==s&&c!==i?[]:[r]);u(n,!0,l)}catch(f){u(n,!1,f)}},n)}function p(e){var t=e.prototype,n=h(t,"then");if(!n||n.writable!==!1&&n.configurable){var r=t.then;t[m]=r,e.prototype.then=function(e,t){var n=this,o=new R(function(e,t){r.call(n,e,t)});return o.then(e,t)},e[B]=!0}}var h=Object.getOwnPropertyDescriptor,d=Object.defineProperty,v=n.symbol,g=[],y=v("Promise"),m=v("then"),k="__creationTrace__";n.onUnhandledError=function(e){if(n.showUncaughtError()){var t=e&&e.rejection;t?console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0):console.error(e)}},n.microtaskDrainDone=function(){for(;g.length;)for(var e=function(){var e=g.shift();try{e.zone.runGuarded(function(){throw e})}catch(t){o(t)}};g.length;)e()};var _=v("unhandledPromiseRejectionHandler"),b=v("state"),T=v("value"),w=v("finally"),E=v("parentPromiseValue"),S=v("parentPromiseState"),D="Promise.then",Z=null,z=!0,O=!1,P=0,C=function(){var e=!1;return function(t){return function(){e||(e=!0,t.apply(null,arguments))}}},j="Promise resolved with itself",I=v("currentTaskTrace"),L=v("rejectionHandledHandler"),x="function ZoneAwarePromise() { [native code] }",R=function(){function e(t){var n=this;if(!(n instanceof e))throw new Error("Must be an instanceof Promise.");n[b]=Z,n[T]=[];try{t&&t(c(n,z),c(n,O))}catch(r){u(n,!1,r)}}return e.toString=function(){return x},e.resolve=function(e){return u(new this(null),z,e)},e.reject=function(e){return u(new this(null),O,e)},e.race=function(e){function t(e){c&&(c=i(e))}function n(e){c&&(c=s(e))}var r,o,i,s,c=new this(function(e,t){i=e,s=t});try{for(var u=M(e),l=u.next();!l.done;l=u.next()){var f=l.value;a(f)||(f=this.resolve(f)),f.then(t,n)}}catch(p){r={error:p}}finally{try{l&&!l.done&&(o=u["return"])&&o.call(u)}finally{if(r)throw r.error}}return c},e.all=function(e){var t,n,r,o,i=new this(function(e,t){r=e,o=t}),s=2,c=0,u=[],l=function(e){a(e)||(e=f.resolve(e));var t=c;e.then(function(e){u[t]=e,s--,0===s&&r(u)},o),s++,c++},f=this;try{for(var p=M(e),h=p.next();!h.done;h=p.next()){var d=h.value;l(d)}}catch(v){t={error:v}}finally{try{h&&!h.done&&(n=p["return"])&&n.call(p)}finally{if(t)throw t.error}}return s-=2,0===s&&r(u),i},e.prototype.then=function(e,n){var r=new this.constructor(null),o=t.current;return this[b]==Z?this[T].push(o,r,e,n):f(this,o,r,e,n),r},e.prototype["catch"]=function(e){return this.then(null,e)},e.prototype["finally"]=function(e){var n=new this.constructor(null);n[w]=w;var r=t.current;return this[b]==Z?this[T].push(r,n,e,e):f(this,r,n,e,e),n},e}();R.resolve=R.resolve,R.reject=R.reject,R.race=R.race,R.all=R.all;var H=e[y]=e.Promise,F=t.__symbol__("ZoneAwarePromise"),A=h(e,"Promise");A&&!A.configurable||(A&&delete A.writable,A&&delete A.value,A||(A={configurable:!0,enumerable:!0}),A.get=function(){return e[F]?e[F]:e[y]},A.set=function(t){t===R?e[F]=t:(e[y]=t,t.prototype[m]||p(t),n.setNativePromise(t))},d(e,"Promise",A)),e.Promise=R;var B=v("thenPatched");return n.patchThen=p,H&&p(H),Promise[t.__symbol__("uncaughtPromiseErrors")]=g,R}),Zone.__load_patch("fetch",function(e,t,n){var r=e.fetch,o=e.Promise,a=n.symbol("thenPatched"),i=n.symbol("fetchTaskScheduling"),s=n.symbol("fetchTaskAborting");
if("function"==typeof r){var c=e.AbortController,u="function"==typeof c,l=null;u&&(e.AbortController=function(){var e=new c,t=e.signal;return t.abortController=e,e},l=n.patchMethod(c.prototype,"abort",function(e){return function(t,n){return t.task?t.task.zone.cancelTask(t.task):e.apply(t,n)}}));var f=function(){};e.fetch=function(){var e=this,c=Array.prototype.slice.call(arguments),p=c.length>1?c[1]:null,h=p&&p.signal;return new Promise(function(p,d){var v=t.current.scheduleMacroTask("fetch",f,c,function(){var s,u=t.current;try{u[i]=!0,s=r.apply(e,c)}catch(l){return void d(l)}finally{u[i]=!1}if(!(s instanceof o)){var f=s.constructor;f[a]||n.patchThen(f)}s.then(function(e){"notScheduled"!==v.state&&v.invoke(),p(e)},function(e){"notScheduled"!==v.state&&v.invoke(),d(e)})},function(){if(!u)return void d("No AbortController supported, can not cancel fetch");if(h&&h.abortController&&!h.aborted&&"function"==typeof h.abortController.abort&&l)try{t.current[s]=!0,l.call(h.abortController)}finally{t.current[s]=!1}else d("cancel fetch need a AbortController.signal")});h&&h.abortController&&(h.abortController.task=v)})}}});var L=Object.getOwnPropertyDescriptor,x=Object.defineProperty,R=Object.getPrototypeOf,H=Object.create,F=Array.prototype.slice,A="addEventListener",B="removeEventListener",q=Zone.__symbol__(A),N=Zone.__symbol__(B),W="true",X="false",G="__zone_symbol__",U=Zone.__symbol__,V="undefined"!=typeof window,K=V?window:void 0,J=V&&K||"object"==typeof self&&self||global,Y="removeAttribute",Q=[null],$="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,ee=!("nw"in J)&&"undefined"!=typeof J.process&&"[object process]"==={}.toString.call(J.process),te=!ee&&!$&&!(!V||!K.HTMLElement),ne="undefined"!=typeof J.process&&"[object process]"==={}.toString.call(J.process)&&!$&&!(!V||!K.HTMLElement),re={},oe=function(e){if(e=e||J.event){var t=re[e.type];t||(t=re[e.type]=U("ON_PROPERTY"+e.type));var n,r=this||e.target||J,o=r[t];if(te&&r===K&&"error"===e.type){var a=e;n=o&&o.call(this,a.message,a.filename,a.lineno,a.colno,a.error),n===!0&&e.preventDefault()}else n=o&&o.apply(this,arguments),void 0==n||n||e.preventDefault();return n}},ae=U("originalInstance"),ie=!1,se=!1,ce=!1;Zone.__load_patch("toString",function(e){var t=Function.prototype.toString,n=U("OriginalDelegate"),r=U("Promise"),o=U("Error"),a=function(){if("function"==typeof this){var a=this[n];if(a)return"function"==typeof a?t.apply(this[n],arguments):Object.prototype.toString.call(a);if(this===Promise){var i=e[r];if(i)return t.apply(i,arguments)}if(this===Error){var s=e[o];if(s)return t.apply(s,arguments)}}return t.apply(this,arguments)};a[n]=t,Function.prototype.toString=a;var i=Object.prototype.toString,s="[object Promise]";Object.prototype.toString=function(){return this instanceof Promise?s:i.apply(this,arguments)}});var ue=!1;if("undefined"!=typeof window)try{var le=Object.defineProperty({},"passive",{get:function(){ue=!0}});window.addEventListener("test",le,le),window.removeEventListener("test",le,le)}catch(fe){ue=!1}var pe={useG:!0},he={},de={},ve=/^__zone_symbol__(\w+)(true|false)$/,ge="__zone_symbol__propagationStopped",ye=U("zoneTask"),me=Object[U("defineProperty")]=Object.defineProperty,ke=Object[U("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,_e=Object.create,be=U("unconfigurables"),Te=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"],we=["afterscriptexecute","beforescriptexecute","DOMContentLoaded","freeze","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange","resume"],Ee=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplyconnected","vrdisplaydisconnected","vrdisplaypresentchange"],Se=["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],De=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],Ze=["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"],ze=["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],Oe=["autocomplete","autocompleteerror"],Pe=["toggle"],Ce=["load"],je=["blur","error","focus","load","resize","scroll","messageerror"],Ie=["bounce","finish","start"],Me=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],Le=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],xe=["close","error","open","message"],Re=["error","message"],He=Te.concat(ze,Oe,Pe,we,Ee,Se,Ze),Fe=U("unbound");Zone.__load_patch("util",function(e,t,r){r.patchOnProperties=i,r.patchMethod=u,r.bindArguments=n}),Zone.__load_patch("timers",function(e){var t="set",n="clear";y(e,t,n,"Timeout"),y(e,t,n,"Interval"),y(e,t,n,"Immediate")}),Zone.__load_patch("requestAnimationFrame",function(e){y(e,"request","cancel","AnimationFrame"),y(e,"mozRequest","mozCancel","AnimationFrame"),y(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(e,t){for(var n=["alert","prompt","confirm"],r=0;r<n.length;r++){var o=n[r];u(e,o,function(n,r,o){return function(r,a){return t.current.run(n,e,a,o)}})}}),Zone.__load_patch("EventTarget",function(e,t,n){var r=t.__symbol__("BLACK_LISTED_EVENTS");e[r]&&(t[r]=e[r]),P(e,n),O(e,n);var o=e.XMLHttpRequestEventTarget;o&&o.prototype&&n.patchEventTarget(e,[o.prototype]),s("MutationObserver"),s("WebKitMutationObserver"),s("IntersectionObserver"),s("FileReader")}),Zone.__load_patch("on_property",function(e,t,n){D(n,e),m()}),Zone.__load_patch("customElements",function(e,t,n){j(e),I(e)}),Zone.__load_patch("canvas",function(e){var t=e.HTMLCanvasElement;"undefined"!=typeof t&&t.prototype&&t.prototype.toBlob&&l(t.prototype,"toBlob",function(e,t){return{name:"HTMLCanvasElement.toBlob",target:e,cbIdx:0,args:t}})}),Zone.__load_patch("XHR",function(e,n){function r(e){function r(e){return e[o]}function f(e){var t=e.data,n=t.target;n[s]=!1,n[l]=!1;var r=n[i];v||(v=n[q],g=n[N]),r&&g.call(n,k,r);var a=n[i]=function(){if(n.readyState===n.DONE)if(!t.aborted&&n[s]&&e.state===_){var r=n.__zone_symbol__loadfalse;if(r&&r.length>0){var o=e.invoke;e.invoke=function(){for(var r=n.__zone_symbol__loadfalse,a=0;a<r.length;a++)r[a]===e&&r.splice(a,1);t.aborted||e.state!==_||o.call(e)},r.push(e)}else e.invoke()}else t.aborted||n[s]!==!1||(n[l]=!0)};v.call(n,k,a);var c=n[o];return c||(n[o]=e),S.apply(n,t.args),n[s]=!0,e}function p(){}function h(e){var t=e.data;return t.aborted=!0,D.apply(t.target,t.args)}var d=XMLHttpRequest.prototype,v=d[q],g=d[N];if(!v){var y=e.XMLHttpRequestEventTarget;if(y){var m=y.prototype;v=m[q],g=m[N]}}var k="readystatechange",_="scheduled",b=u(d,"open",function(){return function(e,t){return e[a]=0==t[2],e[c]=t[1],b.apply(e,t)}}),T="XMLHttpRequest.send",w=U("fetchTaskAborting"),E=U("fetchTaskScheduling"),S=u(d,"send",function(){return function(e,r){if(n.current[E]===!0)return S.apply(e,r);if(e[a])return S.apply(e,r);var o={target:e,url:e[c],isPeriodic:!1,args:r,aborted:!1},i=t(T,p,o,f,h);e&&e[l]===!0&&!o.aborted&&i.state===_&&i.invoke()}}),D=u(d,"abort",function(){return function(e,t){var o=r(e);if(o&&"string"==typeof o.type){if(null==o.cancelFn||o.data&&o.data.aborted)return;o.zone.cancelTask(o)}else if(n.current[w]===!0)return D.apply(e,t)}})}r(e);var o=U("xhrTask"),a=U("xhrSync"),i=U("xhrListener"),s=U("xhrScheduled"),c=U("xhrURL"),l=U("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",function(e){e.navigator&&e.navigator.geolocation&&r(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(e,t){function n(t){return function(n){var r=v(e,t);r.forEach(function(r){var o=e.PromiseRejectionEvent;if(o){var a=new o(t,{promise:n.promise,reason:n.rejection});r.invoke(a)}})}}e.PromiseRejectionEvent&&(t[U("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),t[U("rejectionHandledHandler")]=n("rejectionhandled"))})});
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');

(function(v){"object"===typeof exports&&"undefined"!==typeof module?module.exports=v():"function"===typeof define&&define.amd?define([],v):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).jsmediatags=v()})(function(){return function f(l,m,h){function k(a,b){if(!m[a]){if(!l[a]){var e="function"==typeof require&&require;if(!b&&e)return e(a,!0);if(d)return d(a,!0);e=Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e;}e=m[a]=
    {exports:{}};l[a][0].call(e.exports,function(b){var e=l[a][1][b];return k(e?e:b)},e,e.exports,f,l,m,h)}return m[a].exports}for(var d="function"==typeof require&&require,c=0;c<h.length;c++)k(h[c]);return k}({1:[function(f,l,m){},{}],2:[function(f,l,m){l.exports=XMLHttpRequest},{}],3:[function(f,l,m){function h(d,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,
    enumerable:!1,writable:!0,configurable:!0}});c&&(Object.setPrototypeOf?Object.setPrototypeOf(d,c):d.__proto__=c)}var k=function(){function d(c,a){for(var b=0;b<a.length;b++){var e=a[b];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(c,e.key,e)}}return function(c,a,b){a&&d(c.prototype,a);b&&d(c,b);return c}}();f=function(d){function c(a){if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");var b;b=Object.getPrototypeOf(c).call(this);
    if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");b=!b||"object"!==typeof b&&"function"!==typeof b?this:b;b._array=a;b._size=a.length;b._isInitialized=!0;return b}h(c,d);k(c,[{key:"init",value:function(a){setTimeout(a.onSuccess,0)}},{key:"loadRange",value:function(a,b){setTimeout(b.onSuccess,0)}},{key:"getByteAt",value:function(a){return this._array[a]}}],[{key:"canReadFile",value:function(a){return Array.isArray(a)||"function"===typeof Buffer&&Buffer.isBuffer(a)}}]);
    return c}(f("./MediaFileReader"));l.exports=f},{"./MediaFileReader":10}],4:[function(f,l,m){function h(c,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);c.prototype=Object.create(a&&a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(c,a):c.__proto__=a)}var k=function(){function c(a,b){for(var e=0;e<b.length;e++){var g=b[e];g.enumerable=g.enumerable||
    !1;g.configurable=!0;"value"in g&&(g.writable=!0);Object.defineProperty(a,g.key,g)}}return function(a,b,e){b&&c(a.prototype,b);e&&c(a,e);return a}}(),d=f("./ChunkedFileData");f=function(c){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");var e;e=Object.getPrototypeOf(a).call(this);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");e=!e||"object"!==typeof e&&"function"!==typeof e?this:e;e._blob=b;e._fileData=
    new d;return e}h(a,c);k(a,[{key:"_init",value:function(b){this._size=this._blob.size;setTimeout(b.onSuccess,1)}},{key:"loadRange",value:function(b,a){var g=this,c=(this._blob.slice||this._blob.mozSlice||this._blob.webkitSlice).call(this._blob,b[0],b[1]+1),d=new FileReader;d.onloadend=function(c){c=new Uint8Array(d.result);g._fileData.addData(b[0],c);a.onSuccess()};d.onerror=d.onabort=function(b){if(a.onError)a.onError({type:"blob",info:d.error})};d.readAsArrayBuffer(c)}},{key:"getByteAt",value:function(b){return this._fileData.getByteAt(b)}}],
    [{key:"canReadFile",value:function(b){return"undefined"!==typeof Blob&&b instanceof Blob||"undefined"!==typeof File&&b instanceof File}}]);return a}(f("./MediaFileReader"));l.exports=f},{"./ChunkedFileData":5,"./MediaFileReader":10}],5:[function(f,l,m){var h=function(){function f(d,c){for(var a=0;a<c.length;a++){var b=c[a];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(d,b.key,b)}}return function(d,c,a){c&&f(d.prototype,c);a&&f(d,a);return d}}();
    f=function(){function f(){if(!(this instanceof f))throw new TypeError("Cannot call a class as a function");this._fileData=[]}h(f,null,[{key:"NOT_FOUND",get:function(){return-1}}]);h(f,[{key:"addData",value:function(d,c){var a=d+c.length-1,b=this._getChunkRange(d,a);if(-1===b.startIx)this._fileData.splice(b.insertIx||0,0,{offset:d,data:c});else{var e=this._fileData[b.startIx],g=this._fileData[b.endIx],a=a<g.offset+g.data.length-1,p={offset:Math.min(d,e.offset),data:c};d>e.offset&&(e=this._sliceData(e.data,
        0,d-e.offset),p.data=this._concatData(e,c));a&&(e=this._sliceData(p.data,0,g.offset-p.offset),p.data=this._concatData(e,g.data));this._fileData.splice(b.startIx,b.endIx-b.startIx+1,p)}}},{key:"_concatData",value:function(d,c){if("undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView(d)){var a=new d.constructor(d.length+c.length);a.set(d,0);a.set(c,d.length);return a}return d.concat(c)}},{key:"_sliceData",value:function(d,c,a){return d.slice?d.slice(c,a):d.subarray(c,a)}},{key:"_getChunkRange",value:function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       c){for(var a=-1,b=-1,e=0,g=0;g<this._fileData.length;g++,e=g){var p=this._fileData[g].offset,q=p+this._fileData[g].data.length;if(c<p-1)break;if(d<=q+1&&c>=p-1){a=g;break}}if(-1===a)return{startIx:-1,endIx:-1,insertIx:e};for(g=a;g<this._fileData.length&&!(p=this._fileData[g].offset,q=p+this._fileData[g].data.length,c>=p-1&&(b=g),c<=q+1);g++);-1===b&&(b=a);return{startIx:a,endIx:b}}},{key:"hasDataRange",value:function(d,c){for(var a=0;a<this._fileData.length;a++){var b=this._fileData[a];if(c<b.offset)break;
        if(d>=b.offset&&c<b.offset+b.data.length)return!0}return!1}},{key:"getByteAt",value:function(d){for(var c,a=0;a<this._fileData.length;a++){var b=this._fileData[a].offset,e=b+this._fileData[a].data.length-1;if(d>=b&&d<=e){c=this._fileData[a];break}}if(c)return c.data[d-c.offset];throw Error("Offset "+d+" hasn't been loaded yet.");}}]);return f}();l.exports=f},{}],6:[function(f,l,m){function h(c,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+
    typeof a);c.prototype=Object.create(a&&a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(c,a):c.__proto__=a)}var k=function(){function c(a,b){for(var e=0;e<b.length;e++){var g=b[e];g.enumerable=g.enumerable||!1;g.configurable=!0;"value"in g&&(g.writable=!0);Object.defineProperty(a,g.key,g)}}return function(a,b,e){b&&c(a.prototype,b);e&&c(a,e);return a}}();m=f("./MediaTagReader");f("./MediaFileReader");f=function(c){function a(){if(!(this instanceof
    a))throw new TypeError("Cannot call a class as a function");var b=Object.getPrototypeOf(a).apply(this,arguments);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!==typeof b&&"function"!==typeof b?this:b}h(a,c);k(a,[{key:"_loadData",value:function(b,a){var g=b.getSize();b.loadRange([g-128,g-1],a)}},{key:"_parseData",value:function(b,a){var g=b.getSize()-128,c=b.getStringWithCharsetAt(g+3,30).toString(),q=b.getStringWithCharsetAt(g+33,
    30).toString(),r=b.getStringWithCharsetAt(g+63,30).toString(),f=b.getStringWithCharsetAt(g+93,4).toString(),u=b.getByteAt(g+97+28),n=b.getByteAt(g+97+29);if(0==u&&0!=n)var u="1.1",x=b.getStringWithCharsetAt(g+97,28).toString();else u="1.0",x=b.getStringWithCharsetAt(g+97,30).toString(),n=0;g=b.getByteAt(g+97+30);c={type:"ID3",version:u,tags:{title:c,artist:q,album:r,year:f,comment:x,genre:255>g?d[g]:""}};n&&(c.tags.track=n);return c}}],[{key:"getTagIdentifierByteRange",value:function(){return{offset:-128,
    length:128}}},{key:"canReadTagFormat",value:function(b){return"TAG"===String.fromCharCode.apply(String,b.slice(0,3))}}]);return a}(m);var d="Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
    l.exports=f},{"./MediaFileReader":10,"./MediaTagReader":11}],7:[function(f,l,m){function h(a){var b;switch(a){case 0:b="iso-8859-1";break;case 1:b="utf-16";break;case 2:b="utf-16be";break;case 3:b="utf-8"}return b}function k(a,b,e,g){g=e.getStringWithCharsetAt(a+1,b-1,g);a=e.getStringWithCharsetAt(a+1+g.bytesReadCount,b-1-g.bytesReadCount);return{user_description:g.toString(),data:a.toString()}}f("./MediaFileReader");var d={APIC:function(a,b,e,g,p){p=p||"3";g=a;var d=h(e.getByteAt(a));switch(p){case "2":p=
    e.getStringAt(a+1,3);a+=4;break;case "3":case "4":p=e.getStringWithCharsetAt(a+1,b-1);a+=1+p.bytesReadCount;break;default:throw Error("Couldn't read ID3v2 major version.");}var r=e.getByteAt(a,1),r=c[r],d=e.getStringWithCharsetAt(a+1,b-(a-g)-1,d);a+=1+d.bytesReadCount;return{format:p.toString(),type:r,description:d.toString(),data:e.getBytesAt(a,g+b-a)}},COMM:function(a,b,e,g,c){var d=a,r=h(e.getByteAt(a));g=e.getStringAt(a+1,3);c=e.getStringWithCharsetAt(a+4,b-4,r);a+=4+c.bytesReadCount;a=e.getStringWithCharsetAt(a,
    d+b-a,r);return{language:g,short_description:c.toString(),text:a.toString()}}};d.COM=d.COMM;d.PIC=function(a,b,e,g,c){return d.APIC(a,b,e,g,"2")};d.PCNT=function(a,b,e,g,c){return e.getLongAt(a,!1)};d.CNT=d.PCNT;d["T*"]=function(a,b,e,g,c){g=h(e.getByteAt(a));return e.getStringWithCharsetAt(a+1,b-1,g).toString()};d.TXXX=function(a,b,e,g,c){g=h(e.getByteAt(a));return k(a,b,e,g)};d["W*"]=function(a,b,e,g,c){g=h(e.getByteAt(a));return void 0!==g?k(a,b,e,g):e.getStringWithCharsetAt(a,b,g).toString()};
    d.TCON=function(a,b,e,g){return d["T*"].apply(this,arguments).replace(/^\(\d+\)/,"")};d.TCO=d.TCON;d.USLT=function(a,b,e,g,c){var d=a,r=h(e.getByteAt(a));g=e.getStringAt(a+1,3);c=e.getStringWithCharsetAt(a+4,b-4,r);a+=4+c.bytesReadCount;a=e.getStringWithCharsetAt(a,d+b-a,r);return{language:g,descriptor:c.toString(),lyrics:a.toString()}};d.ULT=d.USLT;var c="Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
    l.exports={getFrameReaderFunction:function(a){return a in d?d[a]:"T"===a[0]?d["T*"]:"W"===a[0]?d["W*"]:null}}},{"./MediaFileReader":10}],8:[function(f,l,m){function h(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}var k=function(){function b(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e){for(var c=0;c<e.length;c++){var d=e[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(a,c,d){c&&b(a.prototype,c);d&&b(a,d);return a}}();m=f("./MediaTagReader");f("./MediaFileReader");var d=f("./ArrayFileReader"),c=f("./ID3v2FrameReader");f=function(e){function g(){if(!(this instanceof g))throw new TypeError("Cannot call a class as a function");var b=Object.getPrototypeOf(g).apply(this,arguments);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return!b||"object"!==typeof b&&"function"!==typeof b?this:b}h(g,e);k(g,[{key:"_loadData",value:function(b,a){b.loadRange([6,9],{onSuccess:function(){b.loadRange([0,10+b.getSynchsafeInteger32At(6)-1],a)},onError:a.onError})}},{key:"_parseData",value:function(a,e){var c=0,g=a.getByteAt(c+3);if(4<g)return{type:"ID3",version:">2.4",tags:{}};var d=a.getByteAt(c+4),n=a.isBitSetAt(c+5,7),f=a.isBitSetAt(c+5,6),k=a.isBitSetAt(c+5,5),t=a.getSynchsafeInteger32At(c+6),c=c+10;if(f)var h=a.getLongAt(c,!0),c=c+
    (h+4);var g={type:"ID3",version:"2."+g+"."+d,major:g,revision:d,flags:{unsynchronisation:n,extended_header:f,experimental_indicator:k,footer_present:!1},size:t,tags:{}},c=this._readFrames(c,t-10,a,g,e),l;for(l in b)b.hasOwnProperty(l)&&(t=this._getFrameData(c,b[l]))&&(g.tags[l]=t);for(var m in c)c.hasOwnProperty(m)&&(g.tags[m]=c[m]);return g}},{key:"_getUnsyncFileReader",value:function(b,a,c){b=b.getBytesAt(a,c);for(a=0;a<b.length-1;a++)255===b[a]&&0===b[a+1]&&b.splice(a+1,1);return new d(b)}},{key:"_readFrames",
    value:function(b,a,e,g,d){var n={};for(d&&(d=this._expandShortcutTags(d));b<a;){var f=this._readFrameHeader(e,b,g),k=f.id;if(0===f.size)break;if(!k)break;var t=f.flags,l=f.size,h=b+f.headerSize,m=e;b+=f.headerSize+f.size;if(!d||-1!==d.indexOf(k)){if(g.flags.unsynchronisation||t&&t.format.unsynchronisation)m=this._getUnsyncFileReader(m,h,l),h=0,l=m.getSize();t&&t.format.data_length_indicator&&(h+=4,l-=4);t=(f=c.getFrameReaderFunction(k))?f(h,l,m,t):null;h=this._getFrameDescription(k);l={id:k,size:l,
        description:h,data:t};k in n?(n[k].id&&(n[k]=[n[k]]),n[k].push(l)):n[k]=l}}return n}},{key:"_readFrameHeader",value:function(b,a,c){c=c.major;var e=null;switch(c){case 2:var g=b.getStringAt(a,3),d=b.getInteger24At(a+3,!0),f=6;break;case 3:g=b.getStringAt(a,4);d=b.getLongAt(a+4,!0);f=10;break;case 4:g=b.getStringAt(a,4),d=b.getSynchsafeInteger32At(a+4),f=10}g&&2<c&&(e=this._readFrameFlags(b,a+8));return{id:g||"",size:d||0,headerSize:f||0,flags:e}}},{key:"_readFrameFlags",value:function(b,a){return{message:{tag_alter_preservation:b.isBitSetAt(a,
    6),file_alter_preservation:b.isBitSetAt(a,5),read_only:b.isBitSetAt(a,4)},format:{grouping_identity:b.isBitSetAt(a+1,7),compression:b.isBitSetAt(a+1,3),encryption:b.isBitSetAt(a+1,2),unsynchronisation:b.isBitSetAt(a+1,1),data_length_indicator:b.isBitSetAt(a+1,0)}}}},{key:"_getFrameData",value:function(b,a){for(var c=0,e;e=a[c];c++)if(e in b)return b[e].data}},{key:"_getFrameDescription",value:function(b){return b in a?a[b]:"Unknown"}},{key:"getShortcuts",value:function(){return b}}],[{key:"getTagIdentifierByteRange",
    value:function(){return{offset:0,length:10}}},{key:"canReadTagFormat",value:function(b){return"ID3"===String.fromCharCode.apply(String,b.slice(0,3))}}]);return g}(m);var a={BUF:"Recommended buffer size",CNT:"Play counter",COM:"Comments",CRA:"Audio encryption",CRM:"Encrypted meta frame",ETC:"Event timing codes",EQU:"Equalization",GEO:"General encapsulated object",IPL:"Involved people list",LNK:"Linked information",MCI:"Music CD Identifier",MLL:"MPEG location lookup table",PIC:"Attached picture",POP:"Popularimeter",
    REV:"Reverb",RVA:"Relative volume adjustment",SLT:"Synchronized lyric/text",STC:"Synced tempo codes",TAL:"Album/Movie/Show title",TBP:"BPM (Beats Per Minute)",TCM:"Composer",TCO:"Content type",TCR:"Copyright message",TDA:"Date",TDY:"Playlist delay",TEN:"Encoded by",TFT:"File type",TIM:"Time",TKE:"Initial key",TLA:"Language(s)",TLE:"Length",TMT:"Media type",TOA:"Original artist(s)/performer(s)",TOF:"Original filename",TOL:"Original Lyricist(s)/text writer(s)",TOR:"Original release year",TOT:"Original album/Movie/Show title",
    TP1:"Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",TP2:"Band/Orchestra/Accompaniment",TP3:"Conductor/Performer refinement",TP4:"Interpreted, remixed, or otherwise modified by",TPA:"Part of a set",TPB:"Publisher",TRC:"ISRC (International Standard Recording Code)",TRD:"Recording dates",TRK:"Track number/Position in set",TSI:"Size",TSS:"Software/hardware and settings used for encoding",TT1:"Content group description",TT2:"Title/Songname/Content description",TT3:"Subtitle/Description refinement",
    TXT:"Lyricist/text writer",TXX:"User defined text information frame",TYE:"Year",UFI:"Unique file identifier",ULT:"Unsychronized lyric/text transcription",WAF:"Official audio file webpage",WAR:"Official artist/performer webpage",WAS:"Official audio source webpage",WCM:"Commercial information",WCP:"Copyright/Legal information",WPB:"Publishers official webpage",WXX:"User defined URL link frame",AENC:"Audio encryption",APIC:"Attached picture",ASPI:"Audio seek point index",COMM:"Comments",COMR:"Commercial frame",
    ENCR:"Encryption method registration",EQU2:"Equalisation (2)",EQUA:"Equalization",ETCO:"Event timing codes",GEOB:"General encapsulated object",GRID:"Group identification registration",IPLS:"Involved people list",LINK:"Linked information",MCDI:"Music CD identifier",MLLT:"MPEG location lookup table",OWNE:"Ownership frame",PRIV:"Private frame",PCNT:"Play counter",POPM:"Popularimeter",POSS:"Position synchronisation frame",RBUF:"Recommended buffer size",RVA2:"Relative volume adjustment (2)",RVAD:"Relative volume adjustment",
    RVRB:"Reverb",SEEK:"Seek frame",SYLT:"Synchronized lyric/text",SYTC:"Synchronized tempo codes",TALB:"Album/Movie/Show title",TBPM:"BPM (beats per minute)",TCOM:"Composer",TCON:"Content type",TCOP:"Copyright message",TDAT:"Date",TDLY:"Playlist delay",TDRC:"Recording time",TDRL:"Release time",TDTG:"Tagging time",TENC:"Encoded by",TEXT:"Lyricist/Text writer",TFLT:"File type",TIME:"Time",TIPL:"Involved people list",TIT1:"Content group description",TIT2:"Title/songname/content description",TIT3:"Subtitle/Description refinement",
    TKEY:"Initial key",TLAN:"Language(s)",TLEN:"Length",TMCL:"Musician credits list",TMED:"Media type",TMOO:"Mood",TOAL:"Original album/movie/show title",TOFN:"Original filename",TOLY:"Original lyricist(s)/text writer(s)",TOPE:"Original artist(s)/performer(s)",TORY:"Original release year",TOWN:"File owner/licensee",TPE1:"Lead performer(s)/Soloist(s)",TPE2:"Band/orchestra/accompaniment",TPE3:"Conductor/performer refinement",TPE4:"Interpreted, remixed, or otherwise modified by",TPOS:"Part of a set",TPRO:"Produced notice",
    TPUB:"Publisher",TRCK:"Track number/Position in set",TRDA:"Recording dates",TRSN:"Internet radio station name",TRSO:"Internet radio station owner",TSOA:"Album sort order",TSOP:"Performer sort order",TSOT:"Title sort order",TSIZ:"Size",TSRC:"ISRC (international standard recording code)",TSSE:"Software/Hardware and settings used for encoding",TSST:"Set subtitle",TYER:"Year",TXXX:"User defined text information frame",UFID:"Unique file identifier",USER:"Terms of use",USLT:"Unsychronized lyric/text transcription",
    WCOM:"Commercial information",WCOP:"Copyright/Legal information",WOAF:"Official audio file webpage",WOAR:"Official artist/performer webpage",WOAS:"Official audio source webpage",WORS:"Official internet radio station homepage",WPAY:"Payment",WPUB:"Publishers official webpage",WXXX:"User defined URL link frame"},b={title:["TIT2","TT2"],artist:["TPE1","TP1"],album:["TALB","TAL"],year:["TYER","TYE"],comment:["COMM","COM"],track:["TRCK","TRK"],genre:["TCON","TCO"],picture:["APIC","PIC"],lyrics:["USLT",
    "ULT"]};l.exports=f},{"./ArrayFileReader":3,"./ID3v2FrameReader":7,"./MediaFileReader":10,"./MediaTagReader":11}],9:[function(f,l,m){function h(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}var k=function(){function b(b,a){for(var c=0;c<a.length;c++){var d=
    a[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(b,d.key,d)}}return function(a,c,d){c&&b(a.prototype,c);d&&b(a,d);return a}}();m=f("./MediaTagReader");f("./MediaFileReader");f=function(b){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");var b=Object.getPrototypeOf(e).apply(this,arguments);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!==
typeof b&&"function"!==typeof b?this:b}h(e,b);k(e,[{key:"_loadData",value:function(b,a){var c=this;b.loadRange([0,16],{onSuccess:function(){c._loadAtom(b,0,"",a)},onError:a.onError})}},{key:"_loadAtom",value:function(b,a,c,e){if(a>=b.getSize())e.onSuccess();else{var d=this,f=b.getLongAt(a,!0);if(0==f||isNaN(f))e.onSuccess();else{var n=b.getStringAt(a+4,4);if(this._isContainerAtom(n)){"meta"==n&&(a+=4);var k=(c?c+".":"")+n;"moov.udta.meta.ilst"===k?b.loadRange([a,a+f],e):b.loadRange([a+8,a+8+8],{onSuccess:function(){d._loadAtom(b,
        a+8,k,e)},onError:e.onError})}else b.loadRange([a+f,a+f+8],{onSuccess:function(){d._loadAtom(b,a+f,c,e)},onError:e.onError})}}}},{key:"_isContainerAtom",value:function(b){return 0<=["moov","udta","meta","ilst"].indexOf(b)}},{key:"_canReadAtom",value:function(b){return"----"!==b}},{key:"_parseData",value:function(b,c){var e={};c=this._expandShortcutTags(c);this._readAtom(e,b,0,b.getSize(),c);for(var d in a)if(a.hasOwnProperty(d)){var f=e[a[d]];f&&(e[d]="track"===d?f.data.track:f.data)}return{type:"MP4",
    ftyp:b.getStringAt(8,4),version:b.getLongAt(12,!0),tags:e}}},{key:"_readAtom",value:function(b,a,c,e,d,f,n){n=void 0===n?"":n+"  ";for(var k=c;k<c+e;){var l=a.getLongAt(k,!0);if(0==l)break;var h=a.getStringAt(k+4,4);if(this._isContainerAtom(h)){"meta"==h&&(k+=4);this._readAtom(b,a,k+8,l-8,d,(f?f+".":"")+h,n);break}(!d||0<=d.indexOf(h))&&"moov.udta.meta.ilst"===f&&this._canReadAtom(h)&&(b[h]=this._readMetadataAtom(a,k));k+=l}}},{key:"_readMetadataAtom",value:function(b,a){var e=b.getLongAt(a,!0),f=
    b.getStringAt(a+4,4),k=b.getInteger24At(a+16+1,!0),k=d[k],h;if("trkn"==f)h={track:b.getByteAt(a+16+11),total:b.getByteAt(a+16+13)};else{var n=a+24,l=e-24;"covr"===f&&"uint8"===k&&(k="jpeg");switch(k){case "text":h=b.getStringWithCharsetAt(n,l,"utf-8").toString();break;case "uint8":h=b.getShortAt(n,!1);break;case "jpeg":case "png":h={format:"image/"+k,data:b.getBytesAt(n,l)}}}return{id:f,size:e,description:c[f]||"Unknown",data:h}}},{key:"getShortcuts",value:function(){return a}}],[{key:"getTagIdentifierByteRange",
    value:function(){return{offset:0,length:16}}},{key:"canReadTagFormat",value:function(b){return"ftyp"===String.fromCharCode.apply(String,b.slice(4,8))}}]);return e}(m);var d={0:"uint8",1:"text",13:"jpeg",14:"png",21:"uint8"},c={"\u00a9alb":"Album","\u00a9ART":"Artist",aART:"Album Artist","\u00a9day":"Release Date","\u00a9nam":"Title","\u00a9gen":"Genre",gnre:"Genre",trkn:"Track Number","\u00a9wrt":"Composer","\u00a9too":"Encoding Tool","\u00a9enc":"Encoded By",cprt:"Copyright",covr:"Cover Art","\u00a9grp":"Grouping",
    keyw:"Keywords","\u00a9lyr":"Lyrics","\u00a9cmt":"Comment",tmpo:"Tempo",cpil:"Compilation",disk:"Disc Number",tvsh:"TV Show Name",tven:"TV Episode ID",tvsn:"TV Season",tves:"TV Episode",tvnn:"TV Network",desc:"Description",ldes:"Long Description",sonm:"Sort Name",soar:"Sort Artist",soaa:"Sort Album",soco:"Sort Composer",sosn:"Sort Show",purd:"Purchase Date",pcst:"Podcast",purl:"Podcast URL",catg:"Category",hdvd:"HD Video",stik:"Media Type",rtng:"Content Rating",pgap:"Gapless Playback",apID:"Purchase Account",
    sfID:"Country Code"},a={title:"\u00a9nam",artist:"\u00a9ART",album:"\u00a9alb",year:"\u00a9day",comment:"\u00a9cmt",track:"trkn",genre:"\u00a9gen",picture:"covr",lyrics:"\u00a9lyr"};l.exports=f},{"./MediaFileReader":10,"./MediaTagReader":11}],10:[function(f,l,m){var h=function(){function d(c,a){for(var b=0;b<a.length;b++){var e=a[b];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(c,e.key,e)}}return function(c,a,b){a&&d(c.prototype,a);b&&d(c,b);return c}}(),
    k=f("./StringUtils");f=function(){function d(){if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");this._isInitialized=!1;this._size=0}h(d,[{key:"init",value:function(c){var a=this;if(this._isInitialized)setTimeout(c.onSuccess,1);else return this._init({onSuccess:function(){a._isInitialized=!0;c.onSuccess()},onError:c.onError})}},{key:"_init",value:function(c){throw Error("Must implement init function");}},{key:"loadRange",value:function(c,a){throw Error("Must implement loadRange function");
}},{key:"getSize",value:function(){if(!this._isInitialized)throw Error("init() must be called first.");return this._size}},{key:"getByteAt",value:function(c){throw Error("Must implement getByteAt function");}},{key:"getBytesAt",value:function(c,a){for(var b=Array(a),e=0;e<a;e++)b[e]=this.getByteAt(c+e);return b}},{key:"isBitSetAt",value:function(c,a){return 0!=(this.getByteAt(c)&1<<a)}},{key:"getSByteAt",value:function(c){c=this.getByteAt(c);return 127<c?c-256:c}},{key:"getShortAt",value:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      a){var b=a?(this.getByteAt(c)<<8)+this.getByteAt(c+1):(this.getByteAt(c+1)<<8)+this.getByteAt(c);0>b&&(b+=65536);return b}},{key:"getSShortAt",value:function(c,a){var b=this.getShortAt(c,a);return 32767<b?b-65536:b}},{key:"getLongAt",value:function(c,a){var b=this.getByteAt(c),e=this.getByteAt(c+1),d=this.getByteAt(c+2),f=this.getByteAt(c+3),b=a?(((b<<8)+e<<8)+d<<8)+f:(((f<<8)+d<<8)+e<<8)+b;0>b&&(b+=4294967296);return b}},{key:"getSLongAt",value:function(c,a){var b=this.getLongAt(c,a);return 2147483647<
b?b-4294967296:b}},{key:"getInteger24At",value:function(c,a){var b=this.getByteAt(c),e=this.getByteAt(c+1),d=this.getByteAt(c+2),b=a?((b<<8)+e<<8)+d:((d<<8)+e<<8)+b;0>b&&(b+=16777216);return b}},{key:"getStringAt",value:function(c,a){for(var b=[],e=c,d=0;e<c+a;e++,d++)b[d]=String.fromCharCode(this.getByteAt(e));return b.join("")}},{key:"getStringWithCharsetAt",value:function(c,a,b){c=this.getBytesAt(c,a);switch((b||"").toLowerCase()){case "utf-16":case "utf-16le":case "utf-16be":b=k.readUTF16String(c,
    "utf-16be"===b);break;case "utf-8":b=k.readUTF8String(c);break;default:b=k.readNullTerminatedString(c)}return b}},{key:"getCharAt",value:function(c){return String.fromCharCode(this.getByteAt(c))}},{key:"getSynchsafeInteger32At",value:function(c){var a=this.getByteAt(c),b=this.getByteAt(c+1),e=this.getByteAt(c+2);return this.getByteAt(c+3)&127|(e&127)<<7|(b&127)<<14|(a&127)<<21}}],[{key:"canReadFile",value:function(c){throw Error("Must implement canReadFile function");}}]);return d}();l.exports=f},
    {"./StringUtils":12}],11:[function(f,l,m){var h=function(){function f(d,c){for(var a=0;a<c.length;a++){var b=c[a];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(d,b.key,b)}}return function(d,c,a){c&&f(d.prototype,c);a&&f(d,a);return d}}();f("./MediaFileReader");f=function(){function f(d){if(!(this instanceof f))throw new TypeError("Cannot call a class as a function");this._mediaFileReader=d;this._tags=null}h(f,[{key:"setTagsToRead",value:function(d){this._tags=
    d;return this}},{key:"read",value:function(d){var c=this;this._mediaFileReader.init({onSuccess:function(){c._loadData(c._mediaFileReader,{onSuccess:function(){var a=c._parseData(c._mediaFileReader,c._tags);d.onSuccess(a)},onError:d.onError})},onError:d.onError})}},{key:"getShortcuts",value:function(){return{}}},{key:"_loadData",value:function(d,c){throw Error("Must implement _loadData function");}},{key:"_parseData",value:function(d,c){throw Error("Must implement _parseData function");}},{key:"_expandShortcutTags",
    value:function(d){if(!d)return null;for(var c=[],a=this.getShortcuts(),b=0,e;e=d[b];b++)c=c.concat(a[e]||[e]);return c}}],[{key:"getTagIdentifierByteRange",value:function(){throw Error("Must implement");}},{key:"canReadTagFormat",value:function(d){throw Error("Must implement");}}]);return f}();l.exports=f},{"./MediaFileReader":10}],12:[function(f,l,m){var h=function(){function d(c,a){for(var b=0;b<a.length;b++){var e=a[b];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);
    Object.defineProperty(c,e.key,e)}}return function(c,a,b){a&&d(c.prototype,a);b&&d(c,b);return c}}(),k=function(){function d(c,a){if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");this._value=c;this.bytesReadCount=a;this.length=c.length}h(d,[{key:"toString",value:function(){return this._value}}]);return d}();l.exports={readUTF16String:function(d,c,a){var b=0,e=1,g=0;a=Math.min(a||d.length,d.length);254==d[0]&&255==d[1]?(c=!0,b=2):255==d[0]&&254==d[1]&&(c=!1,b=2);c&&(e=
    0,g=1);c=[];for(var f=0;b<a;f++){var h=d[b+e],l=(h<<8)+d[b+g],b=b+2;if(0==l)break;else 216>h||224<=h?c[f]=String.fromCharCode(l):(h=(d[b+e]<<8)+d[b+g],b+=2,c[f]=String.fromCharCode(l,h))}return new k(c.join(""),b)},readUTF8String:function(d,c){var a=0;c=Math.min(c||d.length,d.length);239==d[0]&&187==d[1]&&191==d[2]&&(a=3);for(var b=[],e=0;a<c;e++){var g=d[a++];if(0==g)break;else if(128>g)b[e]=String.fromCharCode(g);else if(194<=g&&224>g){var f=d[a++];b[e]=String.fromCharCode(((g&31)<<6)+(f&63))}else if(224<=
    g&&240>g){var f=d[a++],h=d[a++];b[e]=String.fromCharCode(((g&255)<<12)+((f&63)<<6)+(h&63))}else if(240<=g&&245>g){var f=d[a++],h=d[a++],l=d[a++],g=((g&7)<<18)+((f&63)<<12)+((h&63)<<6)+(l&63)-65536;b[e]=String.fromCharCode((g>>10)+55296,(g&1023)+56320)}}return new k(b.join(""),a)},readNullTerminatedString:function(d,c){var a=[];c=c||d.length;for(var b=0;b<c;){var e=d[b++];if(0==e)break;a[b-1]=String.fromCharCode(e)}return new k(a.join(""),b)}}},{}],13:[function(f,l,m){function h(c,a){if("function"!==
    typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);c.prototype=Object.create(a&&a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(c,a):c.__proto__=a)}var k=function(){function c(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(a,b,e){b&&c(a.prototype,
    b);e&&c(a,e);return a}}(),d=f("./ChunkedFileData");m=function(c){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");var c;c=Object.getPrototypeOf(a).call(this);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");c=!c||"object"!==typeof c&&"function"!==typeof c?this:c;c._url=b;c._fileData=new d;return c}h(a,c);k(a,[{key:"_init",value:function(b){a._config.avoidHeadRequests?this._fetchSizeWithGetRequest(b):this._fetchSizeWithHeadRequest(b)}},
    {key:"_fetchSizeWithHeadRequest",value:function(b){var a=this;this._makeXHRRequest("HEAD",null,{onSuccess:function(c){(c=a._parseContentLength(c))?(a._size=c,b.onSuccess()):a._fetchSizeWithGetRequest(b)},onError:b.onError})}},{key:"_fetchSizeWithGetRequest",value:function(b){var a=this,c=this._roundRangeToChunkMultiple([0,0]);this._makeXHRRequest("GET",c,{onSuccess:function(c){var d=a._parseContentRange(c);c=a._getXhrResponseContent(c);if(d){if(null==d.instanceLength){a._fetchEntireFile(b);return}a._size=
        d.instanceLength}else a._size=c.length;a._fileData.addData(0,c);b.onSuccess()},onError:b.onError})}},{key:"_fetchEntireFile",value:function(b){var a=this;this._makeXHRRequest("GET",null,{onSuccess:function(c){c=a._getXhrResponseContent(c);a._size=c.length;a._fileData.addData(0,c);b.onSuccess()},onError:b.onError})}},{key:"_getXhrResponseContent",value:function(b){return b.responseBody||b.responseText||""}},{key:"_parseContentLength",value:function(b){b=this._getResponseHeader(b,"Content-Length");
        return null==b?b:parseInt(b,10)}},{key:"_parseContentRange",value:function(b){if(b=this._getResponseHeader(b,"Content-Range")){var a=b.match(/bytes (\d+)-(\d+)\/(?:(\d+)|\*)/i);if(!a)throw Error("FIXME: Unknown Content-Range syntax: ",b);return{firstBytePosition:parseInt(a[1],10),lastBytePosition:parseInt(a[2],10),instanceLength:a[3]?parseInt(a[3],10):null}}return null}},{key:"loadRange",value:function(b,a){var c=this;c._fileData.hasDataRange(b[0],Math.min(c._size,b[1]))?setTimeout(a.onSuccess,1):
        (b=this._roundRangeToChunkMultiple(b),b[1]=Math.min(c._size,b[1]),this._makeXHRRequest("GET",b,{onSuccess:function(d){d=c._getXhrResponseContent(d);c._fileData.addData(b[0],d);a.onSuccess()},onError:a.onError}))}},{key:"_roundRangeToChunkMultiple",value:function(b){return[b[0],b[0]+1024*Math.ceil((b[1]-b[0]+1)/1024)-1]}},{key:"_makeXHRRequest",value:function(b,c,d){var f=this._createXHRObject(),h=function(){if(200===f.status||206===f.status)d.onSuccess(f);else if(d.onError)d.onError({type:"xhr",info:"Unexpected HTTP status "+
    f.status+".",xhr:f});f=null};"undefined"!==typeof f.onload?(f.onload=h,f.onerror=function(){if(d.onError)d.onError({type:"xhr",info:"Generic XHR error, check xhr object.",xhr:f})}):f.onreadystatechange=function(){4===f.readyState&&h()};a._config.timeoutInSec&&(f.timeout=1E3*a._config.timeoutInSec,f.ontimeout=function(){if(d.onError)d.onError({type:"xhr",info:"Timeout after "+f.timeout/1E3+"s. Use jsmediatags.Config.setXhrTimeout to override.",xhr:f})});f.open(b,this._url);f.overrideMimeType("text/plain; charset=x-user-defined");
        c&&this._setRequestHeader(f,"Range","bytes="+c[0]+"-"+c[1]);this._setRequestHeader(f,"If-Modified-Since","Sat, 01 Jan 1970 00:00:00 GMT");f.send(null)}},{key:"_setRequestHeader",value:function(b,c,d){0>a._config.disallowedXhrHeaders.indexOf(c.toLowerCase())&&b.setRequestHeader(c,d)}},{key:"_hasResponseHeader",value:function(b,a){var c=b.getAllResponseHeaders();if(!c)return!1;for(var c=c.split("\r\n"),d=[],f=0;f<c.length;f++)d[f]=c[f].split(":")[0].toLowerCase();return 0<=d.indexOf(a.toLowerCase())}},
    {key:"_getResponseHeader",value:function(b,a){return this._hasResponseHeader(b,a)?b.getResponseHeader(a):null}},{key:"getByteAt",value:function(b){return this._fileData.getByteAt(b).charCodeAt(0)&255}},{key:"_createXHRObject",value:function(){if("undefined"===typeof window)return new (f("xhr2").XMLHttpRequest);if(window.XMLHttpRequest)return new window.XMLHttpRequest;throw Error("XMLHttpRequest is not supported");}}],[{key:"canReadFile",value:function(b){return"string"===typeof b&&/^[a-z]+:\/\//i.test(b)}},
    {key:"setConfig",value:function(b){for(var a in b)b.hasOwnProperty(a)&&(this._config[a]=b[a]);b=this._config.disallowedXhrHeaders;for(a=0;a<b.length;a++)b[a]=b[a].toLowerCase()}}]);return a}(f("./MediaFileReader"));m._config={avoidHeadRequests:!1,disallowedXhrHeaders:[],timeoutInSec:30};l.exports=m},{"./ChunkedFileData":5,"./MediaFileReader":10,xhr2:2}],14:[function(f,l,m){function h(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function");}function k(a,b){var c=0>a.offset&&
    (-a.offset>b||0<a.offset+a.length);return!(0<=a.offset&&a.offset+a.length>=b||c)}var d=function(){function a(b,c){for(var d=0;d<c.length;d++){var e=c[d];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(b,e.key,e)}}return function(b,c,d){c&&a(b.prototype,c);d&&a(b,d);return b}}();f("./MediaFileReader");m=f("./NodeFileReader");var c=f("./XhrFileReader"),a=f("./BlobFileReader"),b=f("./ArrayFileReader");f("./MediaTagReader");var e=f("./ID3v1TagReader"),
    g=f("./ID3v2TagReader");f=f("./MP4TagReader");var p=[],q=[],r=function(){function a(b){h(this,a);this._file=b}d(a,[{key:"setTagsToRead",value:function(a){this._tagsToRead=a;return this}},{key:"setFileReader",value:function(a){this._fileReader=a;return this}},{key:"setTagReader",value:function(a){this._tagReader=a;return this}},{key:"read",value:function(a){var b=new (this._getFileReader())(this._file),c=this;b.init({onSuccess:function(){c._getTagReader(b,{onSuccess:function(d){(new d(b)).setTagsToRead(c._tagsToRead).read(a)},
    onError:a.onError})},onError:a.onError})}},{key:"_getFileReader",value:function(){return this._fileReader?this._fileReader:this._findFileReader()}},{key:"_findFileReader",value:function(){for(var a=0;a<p.length;a++)if(p[a].canReadFile(this._file))return p[a];throw Error("No suitable file reader found for ",this._file);}},{key:"_getTagReader",value:function(a,b){if(this._tagReader){var c=this._tagReader;setTimeout(function(){b.onSuccess(c)},1)}else this._findTagReader(a,b)}},{key:"_findTagReader",
    value:function(a,b){for(var c=[],d=[],e=a.getSize(),f=0;f<q.length;f++){var g=q[f].getTagIdentifierByteRange();k(g,e)&&(0<=g.offset&&g.offset<e/2||0>g.offset&&g.offset<-e/2?c.push(q[f]):d.push(q[f]))}var h=!1,f={onSuccess:function(){if(h){for(var c=0;c<q.length;c++){var d=q[c].getTagIdentifierByteRange();if(k(d,e)&&(d=a.getBytesAt(0<=d.offset?d.offset:d.offset+e,d.length),q[c].canReadTagFormat(d))){b.onSuccess(q[c]);return}}if(b.onError)b.onError({type:"tagFormat",info:"No suitable tag reader found"})}else h=
        !0},onError:b.onError};this._loadTagIdentifierRanges(a,c,f);this._loadTagIdentifierRanges(a,d,f)}},{key:"_loadTagIdentifierRanges",value:function(a,b,c){if(0===b.length)setTimeout(c.onSuccess,1);else{for(var d=[Number.MAX_VALUE,0],e=a.getSize(),f=0;f<b.length;f++){var g=b[f].getTagIdentifierByteRange(),h=0<=g.offset?g.offset:g.offset+e,g=h+g.length-1;d[0]=Math.min(h,d[0]);d[1]=Math.max(g,d[1])}a.loadRange(d,c)}}}]);return a}(),w=function(){function a(){h(this,a)}d(a,null,[{key:"addFileReader",value:function(b){p.push(b);
    return a}},{key:"addTagReader",value:function(b){q.push(b);return a}},{key:"removeTagReader",value:function(b){b=q.indexOf(b);0<=b&&q.splice(b,1);return a}},{key:"EXPERIMENTAL_avoidHeadRequests",value:function(){c.setConfig({avoidHeadRequests:!0})}},{key:"setDisallowedXhrHeaders",value:function(a){c.setConfig({disallowedXhrHeaders:a})}},{key:"setXhrTimeoutInSec",value:function(a){c.setConfig({timeoutInSec:a})}}]);return a}();w.addFileReader(c).addFileReader(a).addFileReader(b).addTagReader(g).addTagReader(e).addTagReader(f);
    "undefined"!==typeof process&&w.addFileReader(m);l.exports={read:function(a,b){(new r(a)).read(b)},Reader:r,Config:w}},{"./ArrayFileReader":3,"./BlobFileReader":4,"./ID3v1TagReader":6,"./ID3v2TagReader":8,"./MP4TagReader":9,"./MediaFileReader":10,"./MediaTagReader":11,"./NodeFileReader":1,"./XhrFileReader":13}]},{},[14])(14)});