/**
 * core-js 2.4.1
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2016 Denis Pushkarev
 */
!function(a,b,c){"use strict";!function(a){function __webpack_require__(c){if(b[c])return b[c].exports;var d=b[c]={exports:{},id:c,loaded:!1};return a[c].call(d.exports,d,d.exports,__webpack_require__),d.loaded=!0,d.exports}var b={};return __webpack_require__.m=a,__webpack_require__.c=b,__webpack_require__.p="",__webpack_require__(0)}([function(a,b,c){c(1),c(50),c(51),c(52),c(54),c(55),c(58),c(59),c(60),c(61),c(62),c(63),c(64),c(65),c(66),c(68),c(70),c(72),c(74),c(77),c(78),c(79),c(83),c(86),c(87),c(88),c(89),c(91),c(92),c(93),c(94),c(95),c(97),c(99),c(100),c(101),c(103),c(104),c(105),c(107),c(108),c(109),c(111),c(112),c(113),c(114),c(115),c(116),c(117),c(118),c(119),c(120),c(121),c(122),c(123),c(124),c(126),c(130),c(131),c(132),c(133),c(137),c(139),c(140),c(141),c(142),c(143),c(144),c(145),c(146),c(147),c(148),c(149),c(150),c(151),c(152),c(158),c(159),c(161),c(162),c(163),c(167),c(168),c(169),c(170),c(171),c(173),c(174),c(175),c(176),c(179),c(181),c(182),c(183),c(185),c(187),c(189),c(190),c(191),c(193),c(194),c(195),c(196),c(203),c(206),c(207),c(209),c(210),c(211),c(212),c(213),c(214),c(215),c(216),c(217),c(218),c(219),c(220),c(222),c(223),c(224),c(225),c(226),c(227),c(228),c(229),c(231),c(234),c(235),c(237),c(238),c(239),c(240),c(241),c(242),c(243),c(244),c(245),c(246),c(247),c(249),c(250),c(251),c(252),c(253),c(254),c(255),c(256),c(258),c(259),c(261),c(262),c(263),c(264),c(267),c(268),c(269),c(270),c(271),c(272),c(273),c(274),c(276),c(277),c(278),c(279),c(280),c(281),c(282),c(283),c(284),c(285),c(286),c(287),a.exports=c(288)},function(a,b,d){var e=d(2),f=d(3),g=d(4),h=d(6),i=d(16),j=d(20).KEY,k=d(5),l=d(21),m=d(22),n=d(17),o=d(23),p=d(24),q=d(25),r=d(27),s=d(40),t=d(43),u=d(10),v=d(30),w=d(14),x=d(15),y=d(44),z=d(47),A=d(49),B=d(9),C=d(28),D=A.f,E=B.f,F=z.f,G=e.Symbol,H=e.JSON,I=H&&H.stringify,J="prototype",K=o("_hidden"),L=o("toPrimitive"),M={}.propertyIsEnumerable,N=l("symbol-registry"),O=l("symbols"),P=l("op-symbols"),Q=Object[J],R="function"==typeof G,S=e.QObject,T=!S||!S[J]||!S[J].findChild,U=g&&k(function(){return 7!=y(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(a,b,c){var d=D(Q,b);d&&delete Q[b],E(a,b,c),d&&a!==Q&&E(Q,b,d)}:E,V=function(a){var b=O[a]=y(G[J]);return b._k=a,b},W=R&&"symbol"==typeof G.iterator?function(a){return"symbol"==typeof a}:function(a){return a instanceof G},X=function defineProperty(a,b,c){return a===Q&&X(P,b,c),u(a),b=w(b,!0),u(c),f(O,b)?(c.enumerable?(f(a,K)&&a[K][b]&&(a[K][b]=!1),c=y(c,{enumerable:x(0,!1)})):(f(a,K)||E(a,K,x(1,{})),a[K][b]=!0),U(a,b,c)):E(a,b,c)},Y=function defineProperties(a,b){u(a);for(var c,d=s(b=v(b)),e=0,f=d.length;f>e;)X(a,c=d[e++],b[c]);return a},Z=function create(a,b){return b===c?y(a):Y(y(a),b)},$=function propertyIsEnumerable(a){var b=M.call(this,a=w(a,!0));return!(this===Q&&f(O,a)&&!f(P,a))&&(!(b||!f(this,a)||!f(O,a)||f(this,K)&&this[K][a])||b)},_=function getOwnPropertyDescriptor(a,b){if(a=v(a),b=w(b,!0),a!==Q||!f(O,b)||f(P,b)){var c=D(a,b);return!c||!f(O,b)||f(a,K)&&a[K][b]||(c.enumerable=!0),c}},aa=function getOwnPropertyNames(a){for(var b,c=F(v(a)),d=[],e=0;c.length>e;)f(O,b=c[e++])||b==K||b==j||d.push(b);return d},ba=function getOwnPropertySymbols(a){for(var b,c=a===Q,d=F(c?P:v(a)),e=[],g=0;d.length>g;)!f(O,b=d[g++])||c&&!f(Q,b)||e.push(O[b]);return e};R||(G=function Symbol(){if(this instanceof G)throw TypeError("Symbol is not a constructor!");var a=n(arguments.length>0?arguments[0]:c),b=function(c){this===Q&&b.call(P,c),f(this,K)&&f(this[K],a)&&(this[K][a]=!1),U(this,a,x(1,c))};return g&&T&&U(Q,a,{configurable:!0,set:b}),V(a)},i(G[J],"toString",function toString(){return this._k}),A.f=_,B.f=X,d(48).f=z.f=aa,d(42).f=$,d(41).f=ba,g&&!d(26)&&i(Q,"propertyIsEnumerable",$,!0),p.f=function(a){return V(o(a))}),h(h.G+h.W+h.F*!R,{Symbol:G});for(var ca="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),da=0;ca.length>da;)o(ca[da++]);for(var ca=C(o.store),da=0;ca.length>da;)q(ca[da++]);h(h.S+h.F*!R,"Symbol",{"for":function(a){return f(N,a+="")?N[a]:N[a]=G(a)},keyFor:function keyFor(a){if(W(a))return r(N,a);throw TypeError(a+" is not a symbol!")},useSetter:function(){T=!0},useSimple:function(){T=!1}}),h(h.S+h.F*!R,"Object",{create:Z,defineProperty:X,defineProperties:Y,getOwnPropertyDescriptor:_,getOwnPropertyNames:aa,getOwnPropertySymbols:ba}),H&&h(h.S+h.F*(!R||k(function(){var a=G();return"[null]"!=I([a])||"{}"!=I({a:a})||"{}"!=I(Object(a))})),"JSON",{stringify:function stringify(a){if(a!==c&&!W(a)){for(var b,d,e=[a],f=1;arguments.length>f;)e.push(arguments[f++]);return b=e[1],"function"==typeof b&&(d=b),!d&&t(b)||(b=function(a,b){if(d&&(b=d.call(this,a,b)),!W(b))return b}),e[1]=b,I.apply(H,e)}}}),G[J][L]||d(8)(G[J],L,G[J].valueOf),m(G,"Symbol"),m(Math,"Math",!0),m(e.JSON,"JSON",!0)},function(a,c){var d=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof b&&(b=d)},function(a,b){var c={}.hasOwnProperty;a.exports=function(a,b){return c.call(a,b)}},function(a,b,c){a.exports=!c(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,d){var e=d(2),f=d(7),g=d(8),h=d(16),i=d(18),j="prototype",k=function(a,b,d){var l,m,n,o,p=a&k.F,q=a&k.G,r=a&k.S,s=a&k.P,t=a&k.B,u=q?e:r?e[b]||(e[b]={}):(e[b]||{})[j],v=q?f:f[b]||(f[b]={}),w=v[j]||(v[j]={});q&&(d=b);for(l in d)m=!p&&u&&u[l]!==c,n=(m?u:d)[l],o=t&&m?i(n,e):s&&"function"==typeof n?i(Function.call,n):n,u&&h(u,l,n,a&k.U),v[l]!=n&&g(v,l,o),s&&w[l]!=n&&(w[l]=n)};e.core=f,k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128,a.exports=k},function(b,c){var d=b.exports={version:"2.4.0"};"number"==typeof a&&(a=d)},function(a,b,c){var d=c(9),e=c(15);a.exports=c(4)?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},function(a,b,c){var d=c(10),e=c(12),f=c(14),g=Object.defineProperty;b.f=c(4)?Object.defineProperty:function defineProperty(a,b,c){if(d(a),b=f(b,!0),d(c),e)try{return g(a,b,c)}catch(h){}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(a[b]=c.value),a}},function(a,b,c){var d=c(11);a.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a}},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b,c){a.exports=!c(4)&&!c(5)(function(){return 7!=Object.defineProperty(c(13)("div"),"a",{get:function(){return 7}}).a})},function(a,b,c){var d=c(11),e=c(2).document,f=d(e)&&d(e.createElement);a.exports=function(a){return f?e.createElement(a):{}}},function(a,b,c){var d=c(11);a.exports=function(a,b){if(!d(a))return a;var c,e;if(b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;if("function"==typeof(c=a.valueOf)&&!d(e=c.call(a)))return e;if(!b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;throw TypeError("Can't convert object to primitive value")}},function(a,b){a.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},function(a,b,c){var d=c(2),e=c(8),f=c(3),g=c(17)("src"),h="toString",i=Function[h],j=(""+i).split(h);c(7).inspectSource=function(a){return i.call(a)},(a.exports=function(a,b,c,h){var i="function"==typeof c;i&&(f(c,"name")||e(c,"name",b)),a[b]!==c&&(i&&(f(c,g)||e(c,g,a[b]?""+a[b]:j.join(String(b)))),a===d?a[b]=c:h?a[b]?a[b]=c:e(a,b,c):(delete a[b],e(a,b,c)))})(Function.prototype,h,function toString(){return"function"==typeof this&&this[g]||i.call(this)})},function(a,b){var d=0,e=Math.random();a.exports=function(a){return"Symbol(".concat(a===c?"":a,")_",(++d+e).toString(36))}},function(a,b,d){var e=d(19);a.exports=function(a,b,d){if(e(a),b===c)return a;switch(d){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b,c){var d=c(17)("meta"),e=c(11),f=c(3),g=c(9).f,h=0,i=Object.isExtensible||function(){return!0},j=!c(5)(function(){return i(Object.preventExtensions({}))}),k=function(a){g(a,d,{value:{i:"O"+ ++h,w:{}}})},l=function(a,b){if(!e(a))return"symbol"==typeof a?a:("string"==typeof a?"S":"P")+a;if(!f(a,d)){if(!i(a))return"F";if(!b)return"E";k(a)}return a[d].i},m=function(a,b){if(!f(a,d)){if(!i(a))return!0;if(!b)return!1;k(a)}return a[d].w},n=function(a){return j&&o.NEED&&i(a)&&!f(a,d)&&k(a),a},o=a.exports={KEY:d,NEED:!1,fastKey:l,getWeak:m,onFreeze:n}},function(a,b,c){var d=c(2),e="__core-js_shared__",f=d[e]||(d[e]={});a.exports=function(a){return f[a]||(f[a]={})}},function(a,b,c){var d=c(9).f,e=c(3),f=c(23)("toStringTag");a.exports=function(a,b,c){a&&!e(a=c?a:a.prototype,f)&&d(a,f,{configurable:!0,value:b})}},function(a,b,c){var d=c(21)("wks"),e=c(17),f=c(2).Symbol,g="function"==typeof f,h=a.exports=function(a){return d[a]||(d[a]=g&&f[a]||(g?f:e)("Symbol."+a))};h.store=d},function(a,b,c){b.f=c(23)},function(a,b,c){var d=c(2),e=c(7),f=c(26),g=c(24),h=c(9).f;a.exports=function(a){var b=e.Symbol||(e.Symbol=f?{}:d.Symbol||{});"_"==a.charAt(0)||a in b||h(b,a,{value:g.f(a)})}},function(a,b){a.exports=!1},function(a,b,c){var d=c(28),e=c(30);a.exports=function(a,b){for(var c,f=e(a),g=d(f),h=g.length,i=0;h>i;)if(f[c=g[i++]]===b)return c}},function(a,b,c){var d=c(29),e=c(39);a.exports=Object.keys||function keys(a){return d(a,e)}},function(a,b,c){var d=c(3),e=c(30),f=c(34)(!1),g=c(38)("IE_PROTO");a.exports=function(a,b){var c,h=e(a),i=0,j=[];for(c in h)c!=g&&d(h,c)&&j.push(c);for(;b.length>i;)d(h,c=b[i++])&&(~f(j,c)||j.push(c));return j}},function(a,b,c){var d=c(31),e=c(33);a.exports=function(a){return d(e(a))}},function(a,b,c){var d=c(32);a.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==d(a)?a.split(""):Object(a)}},function(a,b){var c={}.toString;a.exports=function(a){return c.call(a).slice(8,-1)}},function(a,b){a.exports=function(a){if(a==c)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(30),e=c(35),f=c(37);a.exports=function(a){return function(b,c,g){var h,i=d(b),j=e(i.length),k=f(g,j);if(a&&c!=c){for(;j>k;)if(h=i[k++],h!=h)return!0}else for(;j>k;k++)if((a||k in i)&&i[k]===c)return a||k||0;return!a&&-1}}},function(a,b,c){var d=c(36),e=Math.min;a.exports=function(a){return a>0?e(d(a),9007199254740991):0}},function(a,b){var c=Math.ceil,d=Math.floor;a.exports=function(a){return isNaN(a=+a)?0:(a>0?d:c)(a)}},function(a,b,c){var d=c(36),e=Math.max,f=Math.min;a.exports=function(a,b){return a=d(a),a<0?e(a+b,0):f(a,b)}},function(a,b,c){var d=c(21)("keys"),e=c(17);a.exports=function(a){return d[a]||(d[a]=e(a))}},function(a,b){a.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(a,b,c){var d=c(28),e=c(41),f=c(42);a.exports=function(a){var b=d(a),c=e.f;if(c)for(var g,h=c(a),i=f.f,j=0;h.length>j;)i.call(a,g=h[j++])&&b.push(g);return b}},function(a,b){b.f=Object.getOwnPropertySymbols},function(a,b){b.f={}.propertyIsEnumerable},function(a,b,c){var d=c(32);a.exports=Array.isArray||function isArray(a){return"Array"==d(a)}},function(a,b,d){var e=d(10),f=d(45),g=d(39),h=d(38)("IE_PROTO"),i=function(){},j="prototype",k=function(){var a,b=d(13)("iframe"),c=g.length,e="<",f=">";for(b.style.display="none",d(46).appendChild(b),b.src="javascript:",a=b.contentWindow.document,a.open(),a.write(e+"script"+f+"document.F=Object"+e+"/script"+f),a.close(),k=a.F;c--;)delete k[j][g[c]];return k()};a.exports=Object.create||function create(a,b){var d;return null!==a?(i[j]=e(a),d=new i,i[j]=null,d[h]=a):d=k(),b===c?d:f(d,b)}},function(a,b,c){var d=c(9),e=c(10),f=c(28);a.exports=c(4)?Object.defineProperties:function defineProperties(a,b){e(a);for(var c,g=f(b),h=g.length,i=0;h>i;)d.f(a,c=g[i++],b[c]);return a}},function(a,b,c){a.exports=c(2).document&&document.documentElement},function(a,b,c){var d=c(30),e=c(48).f,f={}.toString,g="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h=function(a){try{return e(a)}catch(b){return g.slice()}};a.exports.f=function getOwnPropertyNames(a){return g&&"[object Window]"==f.call(a)?h(a):e(d(a))}},function(a,b,c){var d=c(29),e=c(39).concat("length","prototype");b.f=Object.getOwnPropertyNames||function getOwnPropertyNames(a){return d(a,e)}},function(a,b,c){var d=c(42),e=c(15),f=c(30),g=c(14),h=c(3),i=c(12),j=Object.getOwnPropertyDescriptor;b.f=c(4)?j:function getOwnPropertyDescriptor(a,b){if(a=f(a),b=g(b,!0),i)try{return j(a,b)}catch(c){}if(h(a,b))return e(!d.f.call(a,b),a[b])}},function(a,b,c){var d=c(6);d(d.S+d.F*!c(4),"Object",{defineProperty:c(9).f})},function(a,b,c){var d=c(6);d(d.S+d.F*!c(4),"Object",{defineProperties:c(45)})},function(a,b,c){var d=c(30),e=c(49).f;c(53)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(a,b){return e(d(a),b)}})},function(a,b,c){var d=c(6),e=c(7),f=c(5);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(6);d(d.S,"Object",{create:c(44)})},function(a,b,c){var d=c(56),e=c(57);c(53)("getPrototypeOf",function(){return function getPrototypeOf(a){return e(d(a))}})},function(a,b,c){var d=c(33);a.exports=function(a){return Object(d(a))}},function(a,b,c){var d=c(3),e=c(56),f=c(38)("IE_PROTO"),g=Object.prototype;a.exports=Object.getPrototypeOf||function(a){return a=e(a),d(a,f)?a[f]:"function"==typeof a.constructor&&a instanceof a.constructor?a.constructor.prototype:a instanceof Object?g:null}},function(a,b,c){var d=c(56),e=c(28);c(53)("keys",function(){return function keys(a){return e(d(a))}})},function(a,b,c){c(53)("getOwnPropertyNames",function(){return c(47).f})},function(a,b,c){var d=c(11),e=c(20).onFreeze;c(53)("freeze",function(a){return function freeze(b){return a&&d(b)?a(e(b)):b}})},function(a,b,c){var d=c(11),e=c(20).onFreeze;c(53)("seal",function(a){return function seal(b){return a&&d(b)?a(e(b)):b}})},function(a,b,c){var d=c(11),e=c(20).onFreeze;c(53)("preventExtensions",function(a){return function preventExtensions(b){return a&&d(b)?a(e(b)):b}})},function(a,b,c){var d=c(11);c(53)("isFrozen",function(a){return function isFrozen(b){return!d(b)||!!a&&a(b)}})},function(a,b,c){var d=c(11);c(53)("isSealed",function(a){return function isSealed(b){return!d(b)||!!a&&a(b)}})},function(a,b,c){var d=c(11);c(53)("isExtensible",function(a){return function isExtensible(b){return!!d(b)&&(!a||a(b))}})},function(a,b,c){var d=c(6);d(d.S+d.F,"Object",{assign:c(67)})},function(a,b,c){var d=c(28),e=c(41),f=c(42),g=c(56),h=c(31),i=Object.assign;a.exports=!i||c(5)(function(){var a={},b={},c=Symbol(),d="abcdefghijklmnopqrst";return a[c]=7,d.split("").forEach(function(a){b[a]=a}),7!=i({},a)[c]||Object.keys(i({},b)).join("")!=d})?function assign(a,b){for(var c=g(a),i=arguments.length,j=1,k=e.f,l=f.f;i>j;)for(var m,n=h(arguments[j++]),o=k?d(n).concat(k(n)):d(n),p=o.length,q=0;p>q;)l.call(n,m=o[q++])&&(c[m]=n[m]);return c}:i},function(a,b,c){var d=c(6);d(d.S,"Object",{is:c(69)})},function(a,b){a.exports=Object.is||function is(a,b){return a===b?0!==a||1/a===1/b:a!=a&&b!=b}},function(a,b,c){var d=c(6);d(d.S,"Object",{setPrototypeOf:c(71).set})},function(a,b,d){var e=d(11),f=d(10),g=function(a,b){if(f(a),!e(b)&&null!==b)throw TypeError(b+": can't set as prototype!")};a.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(a,b,c){try{c=d(18)(Function.call,d(49).f(Object.prototype,"__proto__").set,2),c(a,[]),b=!(a instanceof Array)}catch(e){b=!0}return function setPrototypeOf(a,d){return g(a,d),b?a.__proto__=d:c(a,d),a}}({},!1):c),check:g}},function(a,b,c){var d=c(73),e={};e[c(23)("toStringTag")]="z",e+""!="[object z]"&&c(16)(Object.prototype,"toString",function toString(){return"[object "+d(this)+"]"},!0)},function(a,b,d){var e=d(32),f=d(23)("toStringTag"),g="Arguments"==e(function(){return arguments}()),h=function(a,b){try{return a[b]}catch(c){}};a.exports=function(a){var b,d,i;return a===c?"Undefined":null===a?"Null":"string"==typeof(d=h(b=Object(a),f))?d:g?e(b):"Object"==(i=e(b))&&"function"==typeof b.callee?"Arguments":i}},function(a,b,c){var d=c(6);d(d.P,"Function",{bind:c(75)})},function(a,b,c){var d=c(19),e=c(11),f=c(76),g=[].slice,h={},i=function(a,b,c){if(!(b in h)){for(var d=[],e=0;e<b;e++)d[e]="a["+e+"]";h[b]=Function("F,a","return new F("+d.join(",")+")")}return h[b](a,c)};a.exports=Function.bind||function bind(a){var b=d(this),c=g.call(arguments,1),h=function(){var d=c.concat(g.call(arguments));return this instanceof h?i(b,d.length,d):f(b,d,a)};return e(b.prototype)&&(h.prototype=b.prototype),h}},function(a,b){a.exports=function(a,b,d){var e=d===c;switch(b.length){case 0:return e?a():a.call(d);case 1:return e?a(b[0]):a.call(d,b[0]);case 2:return e?a(b[0],b[1]):a.call(d,b[0],b[1]);case 3:return e?a(b[0],b[1],b[2]):a.call(d,b[0],b[1],b[2]);case 4:return e?a(b[0],b[1],b[2],b[3]):a.call(d,b[0],b[1],b[2],b[3])}return a.apply(d,b)}},function(a,b,c){var d=c(9).f,e=c(15),f=c(3),g=Function.prototype,h=/^\s*function ([^ (]*)/,i="name",j=Object.isExtensible||function(){return!0};i in g||c(4)&&d(g,i,{configurable:!0,get:function(){try{var a=this,b=(""+a).match(h)[1];return f(a,i)||!j(a)||d(a,i,e(5,b)),b}catch(c){return""}}})},function(a,b,c){var d=c(11),e=c(57),f=c(23)("hasInstance"),g=Function.prototype;f in g||c(9).f(g,f,{value:function(a){if("function"!=typeof this||!d(a))return!1;if(!d(this.prototype))return a instanceof this;for(;a=e(a);)if(this.prototype===a)return!0;return!1}})},function(a,b,c){var d=c(2),e=c(3),f=c(32),g=c(80),h=c(14),i=c(5),j=c(48).f,k=c(49).f,l=c(9).f,m=c(81).trim,n="Number",o=d[n],p=o,q=o.prototype,r=f(c(44)(q))==n,s="trim"in String.prototype,t=function(a){var b=h(a,!1);if("string"==typeof b&&b.length>2){b=s?b.trim():m(b,3);var c,d,e,f=b.charCodeAt(0);if(43===f||45===f){if(c=b.charCodeAt(2),88===c||120===c)return NaN}else if(48===f){switch(b.charCodeAt(1)){case 66:case 98:d=2,e=49;break;case 79:case 111:d=8,e=55;break;default:return+b}for(var g,i=b.slice(2),j=0,k=i.length;j<k;j++)if(g=i.charCodeAt(j),g<48||g>e)return NaN;return parseInt(i,d)}}return+b};if(!o(" 0o1")||!o("0b1")||o("+0x1")){o=function Number(a){var b=arguments.length<1?0:a,c=this;return c instanceof o&&(r?i(function(){q.valueOf.call(c)}):f(c)!=n)?g(new p(t(b)),c,o):t(b)};for(var u,v=c(4)?j(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;v.length>w;w++)e(p,u=v[w])&&!e(o,u)&&l(o,u,k(p,u));o.prototype=q,q.constructor=o,c(16)(d,n,o)}},function(a,b,c){var d=c(11),e=c(71).set;a.exports=function(a,b,c){var f,g=b.constructor;return g!==c&&"function"==typeof g&&(f=g.prototype)!==c.prototype&&d(f)&&e&&e(a,f),a}},function(a,b,c){var d=c(6),e=c(33),f=c(5),g=c(82),h="["+g+"]",i="​",j=RegExp("^"+h+h+"*"),k=RegExp(h+h+"*$"),l=function(a,b,c){var e={},h=f(function(){return!!g[a]()||i[a]()!=i}),j=e[a]=h?b(m):g[a];c&&(e[c]=j),d(d.P+d.F*h,"String",e)},m=l.trim=function(a,b){return a=String(e(a)),1&b&&(a=a.replace(j,"")),2&b&&(a=a.replace(k,"")),a};a.exports=l},function(a,b){a.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(a,b,c){var d=c(6),e=c(36),f=c(84),g=c(85),h=1..toFixed,i=Math.floor,j=[0,0,0,0,0,0],k="Number.toFixed: incorrect invocation!",l="0",m=function(a,b){for(var c=-1,d=b;++c<6;)d+=a*j[c],j[c]=d%1e7,d=i(d/1e7)},n=function(a){for(var b=6,c=0;--b>=0;)c+=j[b],j[b]=i(c/a),c=c%a*1e7},o=function(){for(var a=6,b="";--a>=0;)if(""!==b||0===a||0!==j[a]){var c=String(j[a]);b=""===b?c:b+g.call(l,7-c.length)+c}return b},p=function(a,b,c){return 0===b?c:b%2===1?p(a,b-1,c*a):p(a*a,b/2,c)},q=function(a){for(var b=0,c=a;c>=4096;)b+=12,c/=4096;for(;c>=2;)b+=1,c/=2;return b};d(d.P+d.F*(!!h&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c(5)(function(){h.call({})})),"Number",{toFixed:function toFixed(a){var b,c,d,h,i=f(this,k),j=e(a),r="",s=l;if(j<0||j>20)throw RangeError(k);if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(r="-",i=-i),i>1e-21)if(b=q(i*p(2,69,1))-69,c=b<0?i*p(2,-b,1):i/p(2,b,1),c*=4503599627370496,b=52-b,b>0){for(m(0,c),d=j;d>=7;)m(1e7,0),d-=7;for(m(p(10,d,1),0),d=b-1;d>=23;)n(1<<23),d-=23;n(1<<d),m(1,1),n(2),s=o()}else m(0,c),m(1<<-b,0),s=o()+g.call(l,j);return j>0?(h=s.length,s=r+(h<=j?"0."+g.call(l,j-h)+s:s.slice(0,h-j)+"."+s.slice(h-j))):s=r+s,s}})},function(a,b,c){var d=c(32);a.exports=function(a,b){if("number"!=typeof a&&"Number"!=d(a))throw TypeError(b);return+a}},function(a,b,c){var d=c(36),e=c(33);a.exports=function repeat(a){var b=String(e(this)),c="",f=d(a);if(f<0||f==1/0)throw RangeError("Count can't be negative");for(;f>0;(f>>>=1)&&(b+=b))1&f&&(c+=b);return c}},function(a,b,d){var e=d(6),f=d(5),g=d(84),h=1..toPrecision;e(e.P+e.F*(f(function(){return"1"!==h.call(1,c)})||!f(function(){h.call({})})),"Number",{toPrecision:function toPrecision(a){var b=g(this,"Number#toPrecision: incorrect invocation!");return a===c?h.call(b):h.call(b,a)}})},function(a,b,c){var d=c(6);d(d.S,"Number",{EPSILON:Math.pow(2,-52)})},function(a,b,c){var d=c(6),e=c(2).isFinite;d(d.S,"Number",{isFinite:function isFinite(a){return"number"==typeof a&&e(a)}})},function(a,b,c){var d=c(6);d(d.S,"Number",{isInteger:c(90)})},function(a,b,c){var d=c(11),e=Math.floor;a.exports=function isInteger(a){return!d(a)&&isFinite(a)&&e(a)===a}},function(a,b,c){var d=c(6);d(d.S,"Number",{isNaN:function isNaN(a){return a!=a}})},function(a,b,c){var d=c(6),e=c(90),f=Math.abs;d(d.S,"Number",{isSafeInteger:function isSafeInteger(a){return e(a)&&f(a)<=9007199254740991}})},function(a,b,c){var d=c(6);d(d.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(a,b,c){var d=c(6);d(d.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(a,b,c){var d=c(6),e=c(96);d(d.S+d.F*(Number.parseFloat!=e),"Number",{parseFloat:e})},function(a,b,c){var d=c(2).parseFloat,e=c(81).trim;a.exports=1/d(c(82)+"-0")!==-(1/0)?function parseFloat(a){var b=e(String(a),3),c=d(b);return 0===c&&"-"==b.charAt(0)?-0:c}:d},function(a,b,c){var d=c(6),e=c(98);d(d.S+d.F*(Number.parseInt!=e),"Number",{parseInt:e})},function(a,b,c){var d=c(2).parseInt,e=c(81).trim,f=c(82),g=/^[\-+]?0[xX]/;a.exports=8!==d(f+"08")||22!==d(f+"0x16")?function parseInt(a,b){var c=e(String(a),3);return d(c,b>>>0||(g.test(c)?16:10))}:d},function(a,b,c){var d=c(6),e=c(98);d(d.G+d.F*(parseInt!=e),{parseInt:e})},function(a,b,c){var d=c(6),e=c(96);d(d.G+d.F*(parseFloat!=e),{parseFloat:e})},function(a,b,c){var d=c(6),e=c(102),f=Math.sqrt,g=Math.acosh;d(d.S+d.F*!(g&&710==Math.floor(g(Number.MAX_VALUE))&&g(1/0)==1/0),"Math",{acosh:function acosh(a){return(a=+a)<1?NaN:a>94906265.62425156?Math.log(a)+Math.LN2:e(a-1+f(a-1)*f(a+1))}})},function(a,b){a.exports=Math.log1p||function log1p(a){return(a=+a)>-1e-8&&a<1e-8?a-a*a/2:Math.log(1+a)}},function(a,b,c){function asinh(a){return isFinite(a=+a)&&0!=a?a<0?-asinh(-a):Math.log(a+Math.sqrt(a*a+1)):a}var d=c(6),e=Math.asinh;d(d.S+d.F*!(e&&1/e(0)>0),"Math",{asinh:asinh})},function(a,b,c){var d=c(6),e=Math.atanh;d(d.S+d.F*!(e&&1/e(-0)<0),"Math",{atanh:function atanh(a){return 0==(a=+a)?a:Math.log((1+a)/(1-a))/2}})},function(a,b,c){var d=c(6),e=c(106);d(d.S,"Math",{cbrt:function cbrt(a){return e(a=+a)*Math.pow(Math.abs(a),1/3)}})},function(a,b){a.exports=Math.sign||function sign(a){return 0==(a=+a)||a!=a?a:a<0?-1:1}},function(a,b,c){var d=c(6);d(d.S,"Math",{clz32:function clz32(a){return(a>>>=0)?31-Math.floor(Math.log(a+.5)*Math.LOG2E):32}})},function(a,b,c){var d=c(6),e=Math.exp;d(d.S,"Math",{cosh:function cosh(a){return(e(a=+a)+e(-a))/2}})},function(a,b,c){var d=c(6),e=c(110);d(d.S+d.F*(e!=Math.expm1),"Math",{expm1:e})},function(a,b){var c=Math.expm1;a.exports=!c||c(10)>22025.465794806718||c(10)<22025.465794806718||c(-2e-17)!=-2e-17?function expm1(a){return 0==(a=+a)?a:a>-1e-6&&a<1e-6?a+a*a/2:Math.exp(a)-1}:c},function(a,b,c){var d=c(6),e=c(106),f=Math.pow,g=f(2,-52),h=f(2,-23),i=f(2,127)*(2-h),j=f(2,-126),k=function(a){return a+1/g-1/g};d(d.S,"Math",{fround:function fround(a){var b,c,d=Math.abs(a),f=e(a);return d<j?f*k(d/j/h)*j*h:(b=(1+h/g)*d,c=b-(b-d),c>i||c!=c?f*(1/0):f*c)}})},function(a,b,c){var d=c(6),e=Math.abs;d(d.S,"Math",{hypot:function hypot(a,b){for(var c,d,f=0,g=0,h=arguments.length,i=0;g<h;)c=e(arguments[g++]),i<c?(d=i/c,f=f*d*d+1,i=c):c>0?(d=c/i,f+=d*d):f+=c;return i===1/0?1/0:i*Math.sqrt(f)}})},function(a,b,c){var d=c(6),e=Math.imul;d(d.S+d.F*c(5)(function(){return e(4294967295,5)!=-5||2!=e.length}),"Math",{imul:function imul(a,b){var c=65535,d=+a,e=+b,f=c&d,g=c&e;return 0|f*g+((c&d>>>16)*g+f*(c&e>>>16)<<16>>>0)}})},function(a,b,c){var d=c(6);d(d.S,"Math",{log10:function log10(a){return Math.log(a)/Math.LN10}})},function(a,b,c){var d=c(6);d(d.S,"Math",{log1p:c(102)})},function(a,b,c){var d=c(6);d(d.S,"Math",{log2:function log2(a){return Math.log(a)/Math.LN2}})},function(a,b,c){var d=c(6);d(d.S,"Math",{sign:c(106)})},function(a,b,c){var d=c(6),e=c(110),f=Math.exp;d(d.S+d.F*c(5)(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function sinh(a){return Math.abs(a=+a)<1?(e(a)-e(-a))/2:(f(a-1)-f(-a-1))*(Math.E/2)}})},function(a,b,c){var d=c(6),e=c(110),f=Math.exp;d(d.S,"Math",{tanh:function tanh(a){var b=e(a=+a),c=e(-a);return b==1/0?1:c==1/0?-1:(b-c)/(f(a)+f(-a))}})},function(a,b,c){var d=c(6);d(d.S,"Math",{trunc:function trunc(a){return(a>0?Math.floor:Math.ceil)(a)}})},function(a,b,c){var d=c(6),e=c(37),f=String.fromCharCode,g=String.fromCodePoint;d(d.S+d.F*(!!g&&1!=g.length),"String",{fromCodePoint:function fromCodePoint(a){for(var b,c=[],d=arguments.length,g=0;d>g;){if(b=+arguments[g++],e(b,1114111)!==b)throw RangeError(b+" is not a valid code point");c.push(b<65536?f(b):f(((b-=65536)>>10)+55296,b%1024+56320))}return c.join("")}})},function(a,b,c){var d=c(6),e=c(30),f=c(35);d(d.S,"String",{raw:function raw(a){for(var b=e(a.raw),c=f(b.length),d=arguments.length,g=[],h=0;c>h;)g.push(String(b[h++])),h<d&&g.push(String(arguments[h]));return g.join("")}})},function(a,b,c){c(81)("trim",function(a){return function trim(){return a(this,3)}})},function(a,b,c){var d=c(6),e=c(125)(!1);d(d.P,"String",{codePointAt:function codePointAt(a){return e(this,a)}})},function(a,b,d){var e=d(36),f=d(33);a.exports=function(a){return function(b,d){var g,h,i=String(f(b)),j=e(d),k=i.length;return j<0||j>=k?a?"":c:(g=i.charCodeAt(j),g<55296||g>56319||j+1===k||(h=i.charCodeAt(j+1))<56320||h>57343?a?i.charAt(j):g:a?i.slice(j,j+2):(g-55296<<10)+(h-56320)+65536)}}},function(a,b,d){var e=d(6),f=d(35),g=d(127),h="endsWith",i=""[h];e(e.P+e.F*d(129)(h),"String",{endsWith:function endsWith(a){var b=g(this,a,h),d=arguments.length>1?arguments[1]:c,e=f(b.length),j=d===c?e:Math.min(f(d),e),k=String(a);return i?i.call(b,k,j):b.slice(j-k.length,j)===k}})},function(a,b,c){var d=c(128),e=c(33);a.exports=function(a,b,c){if(d(b))throw TypeError("String#"+c+" doesn't accept regex!");return String(e(a))}},function(a,b,d){var e=d(11),f=d(32),g=d(23)("match");a.exports=function(a){var b;return e(a)&&((b=a[g])!==c?!!b:"RegExp"==f(a))}},function(a,b,c){var d=c(23)("match");a.exports=function(a){var b=/./;try{"/./"[a](b)}catch(c){try{return b[d]=!1,!"/./"[a](b)}catch(e){}}return!0}},function(a,b,d){var e=d(6),f=d(127),g="includes";e(e.P+e.F*d(129)(g),"String",{includes:function includes(a){return!!~f(this,a,g).indexOf(a,arguments.length>1?arguments[1]:c)}})},function(a,b,c){var d=c(6);d(d.P,"String",{repeat:c(85)})},function(a,b,d){var e=d(6),f=d(35),g=d(127),h="startsWith",i=""[h];e(e.P+e.F*d(129)(h),"String",{startsWith:function startsWith(a){var b=g(this,a,h),d=f(Math.min(arguments.length>1?arguments[1]:c,b.length)),e=String(a);return i?i.call(b,e,d):b.slice(d,d+e.length)===e}})},function(a,b,d){var e=d(125)(!0);d(134)(String,"String",function(a){this._t=String(a),this._i=0},function(){var a,b=this._t,d=this._i;return d>=b.length?{value:c,done:!0}:(a=e(b,d),this._i+=a.length,{value:a,done:!1})})},function(a,b,d){var e=d(26),f=d(6),g=d(16),h=d(8),i=d(3),j=d(135),k=d(136),l=d(22),m=d(57),n=d(23)("iterator"),o=!([].keys&&"next"in[].keys()),p="@@iterator",q="keys",r="values",s=function(){return this};a.exports=function(a,b,d,t,u,v,w){k(d,b,t);var x,y,z,A=function(a){if(!o&&a in E)return E[a];switch(a){case q:return function keys(){return new d(this,a)};case r:return function values(){return new d(this,a)}}return function entries(){return new d(this,a)}},B=b+" Iterator",C=u==r,D=!1,E=a.prototype,F=E[n]||E[p]||u&&E[u],G=F||A(u),H=u?C?A("entries"):G:c,I="Array"==b?E.entries||F:F;if(I&&(z=m(I.call(new a)),z!==Object.prototype&&(l(z,B,!0),e||i(z,n)||h(z,n,s))),C&&F&&F.name!==r&&(D=!0,G=function values(){return F.call(this)}),e&&!w||!o&&!D&&E[n]||h(E,n,G),j[b]=G,j[B]=s,u)if(x={values:C?G:A(r),keys:v?G:A(q),entries:H},w)for(y in x)y in E||g(E,y,x[y]);else f(f.P+f.F*(o||D),b,x);return x}},function(a,b){a.exports={}},function(a,b,c){var d=c(44),e=c(15),f=c(22),g={};c(8)(g,c(23)("iterator"),function(){return this}),a.exports=function(a,b,c){a.prototype=d(g,{next:e(1,c)}),f(a,b+" Iterator")}},function(a,b,c){c(138)("anchor",function(a){return function anchor(b){return a(this,"a","name",b)}})},function(a,b,c){var d=c(6),e=c(5),f=c(33),g=/"/g,h=function(a,b,c,d){var e=String(f(a)),h="<"+b;return""!==c&&(h+=" "+c+'="'+String(d).replace(g,"&quot;")+'"'),h+">"+e+"</"+b+">"};a.exports=function(a,b){var c={};c[a]=b(h),d(d.P+d.F*e(function(){var b=""[a]('"');return b!==b.toLowerCase()||b.split('"').length>3}),"String",c)}},function(a,b,c){c(138)("big",function(a){return function big(){return a(this,"big","","")}})},function(a,b,c){c(138)("blink",function(a){return function blink(){return a(this,"blink","","")}})},function(a,b,c){c(138)("bold",function(a){return function bold(){return a(this,"b","","")}})},function(a,b,c){c(138)("fixed",function(a){return function fixed(){return a(this,"tt","","")}})},function(a,b,c){c(138)("fontcolor",function(a){return function fontcolor(b){return a(this,"font","color",b)}})},function(a,b,c){c(138)("fontsize",function(a){return function fontsize(b){return a(this,"font","size",b)}})},function(a,b,c){c(138)("italics",function(a){return function italics(){return a(this,"i","","")}})},function(a,b,c){c(138)("link",function(a){return function link(b){return a(this,"a","href",b)}})},function(a,b,c){c(138)("small",function(a){return function small(){return a(this,"small","","")}})},function(a,b,c){c(138)("strike",function(a){return function strike(){return a(this,"strike","","")}})},function(a,b,c){c(138)("sub",function(a){return function sub(){return a(this,"sub","","")}})},function(a,b,c){c(138)("sup",function(a){return function sup(){return a(this,"sup","","")}})},function(a,b,c){var d=c(6);d(d.S,"Array",{isArray:c(43)})},function(a,b,d){var e=d(18),f=d(6),g=d(56),h=d(153),i=d(154),j=d(35),k=d(155),l=d(156);f(f.S+f.F*!d(157)(function(a){Array.from(a)}),"Array",{from:function from(a){var b,d,f,m,n=g(a),o="function"==typeof this?this:Array,p=arguments.length,q=p>1?arguments[1]:c,r=q!==c,s=0,t=l(n);if(r&&(q=e(q,p>2?arguments[2]:c,2)),t==c||o==Array&&i(t))for(b=j(n.length),d=new o(b);b>s;s++)k(d,s,r?q(n[s],s):n[s]);else for(m=t.call(n),d=new o;!(f=m.next()).done;s++)k(d,s,r?h(m,q,[f.value,s],!0):f.value);return d.length=s,d}})},function(a,b,d){var e=d(10);a.exports=function(a,b,d,f){try{return f?b(e(d)[0],d[1]):b(d)}catch(g){var h=a["return"];throw h!==c&&e(h.call(a)),g}}},function(a,b,d){var e=d(135),f=d(23)("iterator"),g=Array.prototype;a.exports=function(a){return a!==c&&(e.Array===a||g[f]===a)}},function(a,b,c){var d=c(9),e=c(15);a.exports=function(a,b,c){b in a?d.f(a,b,e(0,c)):a[b]=c}},function(a,b,d){var e=d(73),f=d(23)("iterator"),g=d(135);a.exports=d(7).getIteratorMethod=function(a){if(a!=c)return a[f]||a["@@iterator"]||g[e(a)]}},function(a,b,c){var d=c(23)("iterator"),e=!1;
try{var f=[7][d]();f["return"]=function(){e=!0},Array.from(f,function(){throw 2})}catch(g){}a.exports=function(a,b){if(!b&&!e)return!1;var c=!1;try{var f=[7],g=f[d]();g.next=function(){return{done:c=!0}},f[d]=function(){return g},a(f)}catch(h){}return c}},function(a,b,c){var d=c(6),e=c(155);d(d.S+d.F*c(5)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var a=0,b=arguments.length,c=new("function"==typeof this?this:Array)(b);b>a;)e(c,a,arguments[a++]);return c.length=b,c}})},function(a,b,d){var e=d(6),f=d(30),g=[].join;e(e.P+e.F*(d(31)!=Object||!d(160)(g)),"Array",{join:function join(a){return g.call(f(this),a===c?",":a)}})},function(a,b,c){var d=c(5);a.exports=function(a,b){return!!a&&d(function(){b?a.call(null,function(){},1):a.call(null)})}},function(a,b,d){var e=d(6),f=d(46),g=d(32),h=d(37),i=d(35),j=[].slice;e(e.P+e.F*d(5)(function(){f&&j.call(f)}),"Array",{slice:function slice(a,b){var d=i(this.length),e=g(this);if(b=b===c?d:b,"Array"==e)return j.call(this,a,b);for(var f=h(a,d),k=h(b,d),l=i(k-f),m=Array(l),n=0;n<l;n++)m[n]="String"==e?this.charAt(f+n):this[f+n];return m}})},function(a,b,d){var e=d(6),f=d(19),g=d(56),h=d(5),i=[].sort,j=[1,2,3];e(e.P+e.F*(h(function(){j.sort(c)})||!h(function(){j.sort(null)})||!d(160)(i)),"Array",{sort:function sort(a){return a===c?i.call(g(this)):i.call(g(this),f(a))}})},function(a,b,c){var d=c(6),e=c(164)(0),f=c(160)([].forEach,!0);d(d.P+d.F*!f,"Array",{forEach:function forEach(a){return e(this,a,arguments[1])}})},function(a,b,d){var e=d(18),f=d(31),g=d(56),h=d(35),i=d(165);a.exports=function(a,b){var d=1==a,j=2==a,k=3==a,l=4==a,m=6==a,n=5==a||m,o=b||i;return function(b,i,p){for(var q,r,s=g(b),t=f(s),u=e(i,p,3),v=h(t.length),w=0,x=d?o(b,v):j?o(b,0):c;v>w;w++)if((n||w in t)&&(q=t[w],r=u(q,w,s),a))if(d)x[w]=r;else if(r)switch(a){case 3:return!0;case 5:return q;case 6:return w;case 2:x.push(q)}else if(l)return!1;return m?-1:k||l?l:x}}},function(a,b,c){var d=c(166);a.exports=function(a,b){return new(d(a))(b)}},function(a,b,d){var e=d(11),f=d(43),g=d(23)("species");a.exports=function(a){var b;return f(a)&&(b=a.constructor,"function"!=typeof b||b!==Array&&!f(b.prototype)||(b=c),e(b)&&(b=b[g],null===b&&(b=c))),b===c?Array:b}},function(a,b,c){var d=c(6),e=c(164)(1);d(d.P+d.F*!c(160)([].map,!0),"Array",{map:function map(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(164)(2);d(d.P+d.F*!c(160)([].filter,!0),"Array",{filter:function filter(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(164)(3);d(d.P+d.F*!c(160)([].some,!0),"Array",{some:function some(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(164)(4);d(d.P+d.F*!c(160)([].every,!0),"Array",{every:function every(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(172);d(d.P+d.F*!c(160)([].reduce,!0),"Array",{reduce:function reduce(a){return e(this,a,arguments.length,arguments[1],!1)}})},function(a,b,c){var d=c(19),e=c(56),f=c(31),g=c(35);a.exports=function(a,b,c,h,i){d(b);var j=e(a),k=f(j),l=g(j.length),m=i?l-1:0,n=i?-1:1;if(c<2)for(;;){if(m in k){h=k[m],m+=n;break}if(m+=n,i?m<0:l<=m)throw TypeError("Reduce of empty array with no initial value")}for(;i?m>=0:l>m;m+=n)m in k&&(h=b(h,k[m],m,j));return h}},function(a,b,c){var d=c(6),e=c(172);d(d.P+d.F*!c(160)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(a){return e(this,a,arguments.length,arguments[1],!0)}})},function(a,b,c){var d=c(6),e=c(34)(!1),f=[].indexOf,g=!!f&&1/[1].indexOf(1,-0)<0;d(d.P+d.F*(g||!c(160)(f)),"Array",{indexOf:function indexOf(a){return g?f.apply(this,arguments)||0:e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(30),f=c(36),g=c(35),h=[].lastIndexOf,i=!!h&&1/[1].lastIndexOf(1,-0)<0;d(d.P+d.F*(i||!c(160)(h)),"Array",{lastIndexOf:function lastIndexOf(a){if(i)return h.apply(this,arguments)||0;var b=e(this),c=g(b.length),d=c-1;for(arguments.length>1&&(d=Math.min(d,f(arguments[1]))),d<0&&(d=c+d);d>=0;d--)if(d in b&&b[d]===a)return d||0;return-1}})},function(a,b,c){var d=c(6);d(d.P,"Array",{copyWithin:c(177)}),c(178)("copyWithin")},function(a,b,d){var e=d(56),f=d(37),g=d(35);a.exports=[].copyWithin||function copyWithin(a,b){var d=e(this),h=g(d.length),i=f(a,h),j=f(b,h),k=arguments.length>2?arguments[2]:c,l=Math.min((k===c?h:f(k,h))-j,h-i),m=1;for(j<i&&i<j+l&&(m=-1,j+=l-1,i+=l-1);l-- >0;)j in d?d[i]=d[j]:delete d[i],i+=m,j+=m;return d}},function(a,b,d){var e=d(23)("unscopables"),f=Array.prototype;f[e]==c&&d(8)(f,e,{}),a.exports=function(a){f[e][a]=!0}},function(a,b,c){var d=c(6);d(d.P,"Array",{fill:c(180)}),c(178)("fill")},function(a,b,d){var e=d(56),f=d(37),g=d(35);a.exports=function fill(a){for(var b=e(this),d=g(b.length),h=arguments.length,i=f(h>1?arguments[1]:c,d),j=h>2?arguments[2]:c,k=j===c?d:f(j,d);k>i;)b[i++]=a;return b}},function(a,b,d){var e=d(6),f=d(164)(5),g="find",h=!0;g in[]&&Array(1)[g](function(){h=!1}),e(e.P+e.F*h,"Array",{find:function find(a){return f(this,a,arguments.length>1?arguments[1]:c)}}),d(178)(g)},function(a,b,d){var e=d(6),f=d(164)(6),g="findIndex",h=!0;g in[]&&Array(1)[g](function(){h=!1}),e(e.P+e.F*h,"Array",{findIndex:function findIndex(a){return f(this,a,arguments.length>1?arguments[1]:c)}}),d(178)(g)},function(a,b,d){var e=d(178),f=d(184),g=d(135),h=d(30);a.exports=d(134)(Array,"Array",function(a,b){this._t=h(a),this._i=0,this._k=b},function(){var a=this._t,b=this._k,d=this._i++;return!a||d>=a.length?(this._t=c,f(1)):"keys"==b?f(0,d):"values"==b?f(0,a[d]):f(0,[d,a[d]])},"values"),g.Arguments=g.Array,e("keys"),e("values"),e("entries")},function(a,b){a.exports=function(a,b){return{value:b,done:!!a}}},function(a,b,c){c(186)("Array")},function(a,b,c){var d=c(2),e=c(9),f=c(4),g=c(23)("species");a.exports=function(a){var b=d[a];f&&b&&!b[g]&&e.f(b,g,{configurable:!0,get:function(){return this}})}},function(a,b,d){var e=d(2),f=d(80),g=d(9).f,h=d(48).f,i=d(128),j=d(188),k=e.RegExp,l=k,m=k.prototype,n=/a/g,o=/a/g,p=new k(n)!==n;if(d(4)&&(!p||d(5)(function(){return o[d(23)("match")]=!1,k(n)!=n||k(o)==o||"/a/i"!=k(n,"i")}))){k=function RegExp(a,b){var d=this instanceof k,e=i(a),g=b===c;return!d&&e&&a.constructor===k&&g?a:f(p?new l(e&&!g?a.source:a,b):l((e=a instanceof k)?a.source:a,e&&g?j.call(a):b),d?this:m,k)};for(var q=(function(a){a in k||g(k,a,{configurable:!0,get:function(){return l[a]},set:function(b){l[a]=b}})}),r=h(l),s=0;r.length>s;)q(r[s++]);m.constructor=k,k.prototype=m,d(16)(e,"RegExp",k)}d(186)("RegExp")},function(a,b,c){var d=c(10);a.exports=function(){var a=d(this),b="";return a.global&&(b+="g"),a.ignoreCase&&(b+="i"),a.multiline&&(b+="m"),a.unicode&&(b+="u"),a.sticky&&(b+="y"),b}},function(a,b,d){d(190);var e=d(10),f=d(188),g=d(4),h="toString",i=/./[h],j=function(a){d(16)(RegExp.prototype,h,a,!0)};d(5)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?j(function toString(){var a=e(this);return"/".concat(a.source,"/","flags"in a?a.flags:!g&&a instanceof RegExp?f.call(a):c)}):i.name!=h&&j(function toString(){return i.call(this)})},function(a,b,c){c(4)&&"g"!=/./g.flags&&c(9).f(RegExp.prototype,"flags",{configurable:!0,get:c(188)})},function(a,b,d){d(192)("match",1,function(a,b,d){return[function match(d){var e=a(this),f=d==c?c:d[b];return f!==c?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(a,b,c){var d=c(8),e=c(16),f=c(5),g=c(33),h=c(23);a.exports=function(a,b,c){var i=h(a),j=c(g,i,""[a]),k=j[0],l=j[1];f(function(){var b={};return b[i]=function(){return 7},7!=""[a](b)})&&(e(String.prototype,a,k),d(RegExp.prototype,i,2==b?function(a,b){return l.call(a,this,b)}:function(a){return l.call(a,this)}))}},function(a,b,d){d(192)("replace",2,function(a,b,d){return[function replace(e,f){var g=a(this),h=e==c?c:e[b];return h!==c?h.call(e,g,f):d.call(String(g),e,f)},d]})},function(a,b,d){d(192)("search",1,function(a,b,d){return[function search(d){var e=a(this),f=d==c?c:d[b];return f!==c?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(a,b,d){d(192)("split",2,function(a,b,e){var f=d(128),g=e,h=[].push,i="split",j="length",k="lastIndex";if("c"=="abbc"[i](/(b)*/)[1]||4!="test"[i](/(?:)/,-1)[j]||2!="ab"[i](/(?:ab)*/)[j]||4!="."[i](/(.?)(.?)/)[j]||"."[i](/()()/)[j]>1||""[i](/.?/)[j]){var l=/()??/.exec("")[1]===c;e=function(a,b){var d=String(this);if(a===c&&0===b)return[];if(!f(a))return g.call(d,a,b);var e,i,m,n,o,p=[],q=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(a.sticky?"y":""),r=0,s=b===c?4294967295:b>>>0,t=new RegExp(a.source,q+"g");for(l||(e=new RegExp("^"+t.source+"$(?!\\s)",q));(i=t.exec(d))&&(m=i.index+i[0][j],!(m>r&&(p.push(d.slice(r,i.index)),!l&&i[j]>1&&i[0].replace(e,function(){for(o=1;o<arguments[j]-2;o++)arguments[o]===c&&(i[o]=c)}),i[j]>1&&i.index<d[j]&&h.apply(p,i.slice(1)),n=i[0][j],r=m,p[j]>=s)));)t[k]===i.index&&t[k]++;return r===d[j]?!n&&t.test("")||p.push(""):p.push(d.slice(r)),p[j]>s?p.slice(0,s):p}}else"0"[i](c,0)[j]&&(e=function(a,b){return a===c&&0===b?[]:g.call(this,a,b)});return[function split(d,f){var g=a(this),h=d==c?c:d[b];return h!==c?h.call(d,g,f):e.call(String(g),d,f)},e]})},function(a,b,d){var e,f,g,h=d(26),i=d(2),j=d(18),k=d(73),l=d(6),m=d(11),n=d(19),o=d(197),p=d(198),q=d(199),r=d(200).set,s=d(201)(),t="Promise",u=i.TypeError,v=i.process,w=i[t],v=i.process,x="process"==k(v),y=function(){},z=!!function(){try{var a=w.resolve(1),b=(a.constructor={})[d(23)("species")]=function(a){a(y,y)};return(x||"function"==typeof PromiseRejectionEvent)&&a.then(y)instanceof b}catch(c){}}(),A=function(a,b){return a===b||a===w&&b===g},B=function(a){var b;return!(!m(a)||"function"!=typeof(b=a.then))&&b},C=function(a){return A(w,a)?new D(a):new f(a)},D=f=function(a){var b,d;this.promise=new a(function(a,e){if(b!==c||d!==c)throw u("Bad Promise constructor");b=a,d=e}),this.resolve=n(b),this.reject=n(d)},E=function(a){try{a()}catch(b){return{error:b}}},F=function(a,b){if(!a._n){a._n=!0;var c=a._c;s(function(){for(var d=a._v,e=1==a._s,f=0,g=function(b){var c,f,g=e?b.ok:b.fail,h=b.resolve,i=b.reject,j=b.domain;try{g?(e||(2==a._h&&I(a),a._h=1),g===!0?c=d:(j&&j.enter(),c=g(d),j&&j.exit()),c===b.promise?i(u("Promise-chain cycle")):(f=B(c))?f.call(c,h,i):h(c)):i(d)}catch(k){i(k)}};c.length>f;)g(c[f++]);a._c=[],a._n=!1,b&&!a._h&&G(a)})}},G=function(a){r.call(i,function(){var b,d,e,f=a._v;if(H(a)&&(b=E(function(){x?v.emit("unhandledRejection",f,a):(d=i.onunhandledrejection)?d({promise:a,reason:f}):(e=i.console)&&e.error&&e.error("Unhandled promise rejection",f)}),a._h=x||H(a)?2:1),a._a=c,b)throw b.error})},H=function(a){if(1==a._h)return!1;for(var b,c=a._a||a._c,d=0;c.length>d;)if(b=c[d++],b.fail||!H(b.promise))return!1;return!0},I=function(a){r.call(i,function(){var b;x?v.emit("rejectionHandled",a):(b=i.onrejectionhandled)&&b({promise:a,reason:a._v})})},J=function(a){var b=this;b._d||(b._d=!0,b=b._w||b,b._v=a,b._s=2,b._a||(b._a=b._c.slice()),F(b,!0))},K=function(a){var b,c=this;if(!c._d){c._d=!0,c=c._w||c;try{if(c===a)throw u("Promise can't be resolved itself");(b=B(a))?s(function(){var d={_w:c,_d:!1};try{b.call(a,j(K,d,1),j(J,d,1))}catch(e){J.call(d,e)}}):(c._v=a,c._s=1,F(c,!1))}catch(d){J.call({_w:c,_d:!1},d)}}};z||(w=function Promise(a){o(this,w,t,"_h"),n(a),e.call(this);try{a(j(K,this,1),j(J,this,1))}catch(b){J.call(this,b)}},e=function Promise(a){this._c=[],this._a=c,this._s=0,this._d=!1,this._v=c,this._h=0,this._n=!1},e.prototype=d(202)(w.prototype,{then:function then(a,b){var d=C(q(this,w));return d.ok="function"!=typeof a||a,d.fail="function"==typeof b&&b,d.domain=x?v.domain:c,this._c.push(d),this._a&&this._a.push(d),this._s&&F(this,!1),d.promise},"catch":function(a){return this.then(c,a)}}),D=function(){var a=new e;this.promise=a,this.resolve=j(K,a,1),this.reject=j(J,a,1)}),l(l.G+l.W+l.F*!z,{Promise:w}),d(22)(w,t),d(186)(t),g=d(7)[t],l(l.S+l.F*!z,t,{reject:function reject(a){var b=C(this),c=b.reject;return c(a),b.promise}}),l(l.S+l.F*(h||!z),t,{resolve:function resolve(a){if(a instanceof w&&A(a.constructor,this))return a;var b=C(this),c=b.resolve;return c(a),b.promise}}),l(l.S+l.F*!(z&&d(157)(function(a){w.all(a)["catch"](y)})),t,{all:function all(a){var b=this,d=C(b),e=d.resolve,f=d.reject,g=E(function(){var d=[],g=0,h=1;p(a,!1,function(a){var i=g++,j=!1;d.push(c),h++,b.resolve(a).then(function(a){j||(j=!0,d[i]=a,--h||e(d))},f)}),--h||e(d)});return g&&f(g.error),d.promise},race:function race(a){var b=this,c=C(b),d=c.reject,e=E(function(){p(a,!1,function(a){b.resolve(a).then(c.resolve,d)})});return e&&d(e.error),c.promise}})},function(a,b){a.exports=function(a,b,d,e){if(!(a instanceof b)||e!==c&&e in a)throw TypeError(d+": incorrect invocation!");return a}},function(a,b,c){var d=c(18),e=c(153),f=c(154),g=c(10),h=c(35),i=c(156),j={},k={},b=a.exports=function(a,b,c,l,m){var n,o,p,q,r=m?function(){return a}:i(a),s=d(c,l,b?2:1),t=0;if("function"!=typeof r)throw TypeError(a+" is not iterable!");if(f(r)){for(n=h(a.length);n>t;t++)if(q=b?s(g(o=a[t])[0],o[1]):s(a[t]),q===j||q===k)return q}else for(p=r.call(a);!(o=p.next()).done;)if(q=e(p,s,o.value,b),q===j||q===k)return q};b.BREAK=j,b.RETURN=k},function(a,b,d){var e=d(10),f=d(19),g=d(23)("species");a.exports=function(a,b){var d,h=e(a).constructor;return h===c||(d=e(h)[g])==c?b:f(d)}},function(a,b,c){var d,e,f,g=c(18),h=c(76),i=c(46),j=c(13),k=c(2),l=k.process,m=k.setImmediate,n=k.clearImmediate,o=k.MessageChannel,p=0,q={},r="onreadystatechange",s=function(){var a=+this;if(q.hasOwnProperty(a)){var b=q[a];delete q[a],b()}},t=function(a){s.call(a.data)};m&&n||(m=function setImmediate(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return q[++p]=function(){h("function"==typeof a?a:Function(a),b)},d(p),p},n=function clearImmediate(a){delete q[a]},"process"==c(32)(l)?d=function(a){l.nextTick(g(s,a,1))}:o?(e=new o,f=e.port2,e.port1.onmessage=t,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",t,!1)):d=r in j("script")?function(a){i.appendChild(j("script"))[r]=function(){i.removeChild(this),s.call(a)}}:function(a){setTimeout(g(s,a,1),0)}),a.exports={set:m,clear:n}},function(a,b,d){var e=d(2),f=d(200).set,g=e.MutationObserver||e.WebKitMutationObserver,h=e.process,i=e.Promise,j="process"==d(32)(h);a.exports=function(){var a,b,d,k=function(){var e,f;for(j&&(e=h.domain)&&e.exit();a;){f=a.fn,a=a.next;try{f()}catch(g){throw a?d():b=c,g}}b=c,e&&e.enter()};if(j)d=function(){h.nextTick(k)};else if(g){var l=!0,m=document.createTextNode("");new g(k).observe(m,{characterData:!0}),d=function(){m.data=l=!l}}else if(i&&i.resolve){var n=i.resolve();d=function(){n.then(k)}}else d=function(){f.call(e,k)};return function(e){var f={fn:e,next:c};b&&(b.next=f),a||(a=f,d()),b=f}}},function(a,b,c){var d=c(16);a.exports=function(a,b,c){for(var e in b)d(a,e,b[e],c);return a}},function(a,b,d){var e=d(204);a.exports=d(205)("Map",function(a){return function Map(){return a(this,arguments.length>0?arguments[0]:c)}},{get:function get(a){var b=e.getEntry(this,a);return b&&b.v},set:function set(a,b){return e.def(this,0===a?0:a,b)}},e,!0)},function(a,b,d){var e=d(9).f,f=d(44),g=d(202),h=d(18),i=d(197),j=d(33),k=d(198),l=d(134),m=d(184),n=d(186),o=d(4),p=d(20).fastKey,q=o?"_s":"size",r=function(a,b){var c,d=p(b);if("F"!==d)return a._i[d];for(c=a._f;c;c=c.n)if(c.k==b)return c};a.exports={getConstructor:function(a,b,d,l){var m=a(function(a,e){i(a,m,b,"_i"),a._i=f(null),a._f=c,a._l=c,a[q]=0,e!=c&&k(e,d,a[l],a)});return g(m.prototype,{clear:function clear(){for(var a=this,b=a._i,d=a._f;d;d=d.n)d.r=!0,d.p&&(d.p=d.p.n=c),delete b[d.i];a._f=a._l=c,a[q]=0},"delete":function(a){var b=this,c=r(b,a);if(c){var d=c.n,e=c.p;delete b._i[c.i],c.r=!0,e&&(e.n=d),d&&(d.p=e),b._f==c&&(b._f=d),b._l==c&&(b._l=e),b[q]--}return!!c},forEach:function forEach(a){i(this,m,"forEach");for(var b,d=h(a,arguments.length>1?arguments[1]:c,3);b=b?b.n:this._f;)for(d(b.v,b.k,this);b&&b.r;)b=b.p},has:function has(a){return!!r(this,a)}}),o&&e(m.prototype,"size",{get:function(){return j(this[q])}}),m},def:function(a,b,d){var e,f,g=r(a,b);return g?g.v=d:(a._l=g={i:f=p(b,!0),k:b,v:d,p:e=a._l,n:c,r:!1},a._f||(a._f=g),e&&(e.n=g),a[q]++,"F"!==f&&(a._i[f]=g)),a},getEntry:r,setStrong:function(a,b,d){l(a,b,function(a,b){this._t=a,this._k=b,this._l=c},function(){for(var a=this,b=a._k,d=a._l;d&&d.r;)d=d.p;return a._t&&(a._l=d=d?d.n:a._t._f)?"keys"==b?m(0,d.k):"values"==b?m(0,d.v):m(0,[d.k,d.v]):(a._t=c,m(1))},d?"entries":"values",!d,!0),n(b)}}},function(a,b,d){var e=d(2),f=d(6),g=d(16),h=d(202),i=d(20),j=d(198),k=d(197),l=d(11),m=d(5),n=d(157),o=d(22),p=d(80);a.exports=function(a,b,d,q,r,s){var t=e[a],u=t,v=r?"set":"add",w=u&&u.prototype,x={},y=function(a){var b=w[a];g(w,a,"delete"==a?function(a){return!(s&&!l(a))&&b.call(this,0===a?0:a)}:"has"==a?function has(a){return!(s&&!l(a))&&b.call(this,0===a?0:a)}:"get"==a?function get(a){return s&&!l(a)?c:b.call(this,0===a?0:a)}:"add"==a?function add(a){return b.call(this,0===a?0:a),this}:function set(a,c){return b.call(this,0===a?0:a,c),this})};if("function"==typeof u&&(s||w.forEach&&!m(function(){(new u).entries().next()}))){var z=new u,A=z[v](s?{}:-0,1)!=z,B=m(function(){z.has(1)}),C=n(function(a){new u(a)}),D=!s&&m(function(){for(var a=new u,b=5;b--;)a[v](b,b);return!a.has(-0)});C||(u=b(function(b,d){k(b,u,a);var e=p(new t,b,u);return d!=c&&j(d,r,e[v],e),e}),u.prototype=w,w.constructor=u),(B||D)&&(y("delete"),y("has"),r&&y("get")),(D||A)&&y(v),s&&w.clear&&delete w.clear}else u=q.getConstructor(b,a,r,v),h(u.prototype,d),i.NEED=!0;return o(u,a),x[a]=u,f(f.G+f.W+f.F*(u!=t),x),s||q.setStrong(u,a,r),u}},function(a,b,d){var e=d(204);a.exports=d(205)("Set",function(a){return function Set(){return a(this,arguments.length>0?arguments[0]:c)}},{add:function add(a){return e.def(this,a=0===a?0:a,a)}},e)},function(a,b,d){var e,f=d(164)(0),g=d(16),h=d(20),i=d(67),j=d(208),k=d(11),l=h.getWeak,m=Object.isExtensible,n=j.ufstore,o={},p=function(a){return function WeakMap(){return a(this,arguments.length>0?arguments[0]:c)}},q={get:function get(a){if(k(a)){var b=l(a);return b===!0?n(this).get(a):b?b[this._i]:c}},set:function set(a,b){return j.def(this,a,b)}},r=a.exports=d(205)("WeakMap",p,q,j,!0,!0);7!=(new r).set((Object.freeze||Object)(o),7).get(o)&&(e=j.getConstructor(p),i(e.prototype,q),h.NEED=!0,f(["delete","has","get","set"],function(a){var b=r.prototype,c=b[a];g(b,a,function(b,d){if(k(b)&&!m(b)){this._f||(this._f=new e);var f=this._f[a](b,d);return"set"==a?this:f}return c.call(this,b,d)})}))},function(a,b,d){var e=d(202),f=d(20).getWeak,g=d(10),h=d(11),i=d(197),j=d(198),k=d(164),l=d(3),m=k(5),n=k(6),o=0,p=function(a){return a._l||(a._l=new q)},q=function(){this.a=[]},r=function(a,b){return m(a.a,function(a){return a[0]===b})};q.prototype={get:function(a){var b=r(this,a);if(b)return b[1]},has:function(a){return!!r(this,a)},set:function(a,b){var c=r(this,a);c?c[1]=b:this.a.push([a,b])},"delete":function(a){var b=n(this.a,function(b){return b[0]===a});return~b&&this.a.splice(b,1),!!~b}},a.exports={getConstructor:function(a,b,d,g){var k=a(function(a,e){i(a,k,b,"_i"),a._i=o++,a._l=c,e!=c&&j(e,d,a[g],a)});return e(k.prototype,{"delete":function(a){if(!h(a))return!1;var b=f(a);return b===!0?p(this)["delete"](a):b&&l(b,this._i)&&delete b[this._i]},has:function has(a){if(!h(a))return!1;var b=f(a);return b===!0?p(this).has(a):b&&l(b,this._i)}}),k},def:function(a,b,c){var d=f(g(b),!0);return d===!0?p(a).set(b,c):d[a._i]=c,a},ufstore:p}},function(a,b,d){var e=d(208);d(205)("WeakSet",function(a){return function WeakSet(){return a(this,arguments.length>0?arguments[0]:c)}},{add:function add(a){return e.def(this,a,!0)}},e,!1,!0)},function(a,b,c){var d=c(6),e=c(19),f=c(10),g=(c(2).Reflect||{}).apply,h=Function.apply;d(d.S+d.F*!c(5)(function(){g(function(){})}),"Reflect",{apply:function apply(a,b,c){var d=e(a),i=f(c);return g?g(d,b,i):h.call(d,b,i)}})},function(a,b,c){var d=c(6),e=c(44),f=c(19),g=c(10),h=c(11),i=c(5),j=c(75),k=(c(2).Reflect||{}).construct,l=i(function(){function F(){}return!(k(function(){},[],F)instanceof F)}),m=!i(function(){k(function(){})});d(d.S+d.F*(l||m),"Reflect",{construct:function construct(a,b){f(a),g(b);var c=arguments.length<3?a:f(arguments[2]);if(m&&!l)return k(a,b,c);if(a==c){switch(b.length){case 0:return new a;case 1:return new a(b[0]);case 2:return new a(b[0],b[1]);case 3:return new a(b[0],b[1],b[2]);case 4:return new a(b[0],b[1],b[2],b[3])}var d=[null];return d.push.apply(d,b),new(j.apply(a,d))}var i=c.prototype,n=e(h(i)?i:Object.prototype),o=Function.apply.call(a,n,b);return h(o)?o:n}})},function(a,b,c){var d=c(9),e=c(6),f=c(10),g=c(14);e(e.S+e.F*c(5)(function(){Reflect.defineProperty(d.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(a,b,c){f(a),b=g(b,!0),f(c);try{return d.f(a,b,c),!0}catch(e){return!1}}})},function(a,b,c){var d=c(6),e=c(49).f,f=c(10);d(d.S,"Reflect",{deleteProperty:function deleteProperty(a,b){var c=e(f(a),b);return!(c&&!c.configurable)&&delete a[b]}})},function(a,b,d){var e=d(6),f=d(10),g=function(a){this._t=f(a),this._i=0;var b,c=this._k=[];for(b in a)c.push(b)};d(136)(g,"Object",function(){var a,b=this,d=b._k;do if(b._i>=d.length)return{value:c,done:!0};while(!((a=d[b._i++])in b._t));return{value:a,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(a){return new g(a)}})},function(a,b,d){function get(a,b){var d,h,k=arguments.length<3?a:arguments[2];return j(a)===k?a[b]:(d=e.f(a,b))?g(d,"value")?d.value:d.get!==c?d.get.call(k):c:i(h=f(a))?get(h,b,k):void 0}var e=d(49),f=d(57),g=d(3),h=d(6),i=d(11),j=d(10);h(h.S,"Reflect",{get:get})},function(a,b,c){var d=c(49),e=c(6),f=c(10);e(e.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(a,b){return d.f(f(a),b)}})},function(a,b,c){var d=c(6),e=c(57),f=c(10);d(d.S,"Reflect",{getPrototypeOf:function getPrototypeOf(a){return e(f(a))}})},function(a,b,c){var d=c(6);d(d.S,"Reflect",{has:function has(a,b){return b in a}})},function(a,b,c){var d=c(6),e=c(10),f=Object.isExtensible;d(d.S,"Reflect",{isExtensible:function isExtensible(a){return e(a),!f||f(a)}})},function(a,b,c){var d=c(6);d(d.S,"Reflect",{ownKeys:c(221)})},function(a,b,c){var d=c(48),e=c(41),f=c(10),g=c(2).Reflect;a.exports=g&&g.ownKeys||function ownKeys(a){var b=d.f(f(a)),c=e.f;return c?b.concat(c(a)):b}},function(a,b,c){var d=c(6),e=c(10),f=Object.preventExtensions;d(d.S,"Reflect",{preventExtensions:function preventExtensions(a){e(a);try{return f&&f(a),!0}catch(b){return!1}}})},function(a,b,d){function set(a,b,d){var i,m,n=arguments.length<4?a:arguments[3],o=f.f(k(a),b);if(!o){if(l(m=g(a)))return set(m,b,d,n);o=j(0)}return h(o,"value")?!(o.writable===!1||!l(n))&&(i=f.f(n,b)||j(0),i.value=d,e.f(n,b,i),!0):o.set!==c&&(o.set.call(n,d),!0)}var e=d(9),f=d(49),g=d(57),h=d(3),i=d(6),j=d(15),k=d(10),l=d(11);i(i.S,"Reflect",{set:set})},function(a,b,c){var d=c(6),e=c(71);e&&d(d.S,"Reflect",{setPrototypeOf:function setPrototypeOf(a,b){e.check(a,b);try{return e.set(a,b),!0}catch(c){return!1}}})},function(a,b,c){var d=c(6);d(d.S,"Date",{now:function(){return(new Date).getTime()}})},function(a,b,c){var d=c(6),e=c(56),f=c(14);d(d.P+d.F*c(5)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(a){var b=e(this),c=f(b);return"number"!=typeof c||isFinite(c)?b.toISOString():null}})},function(a,b,c){var d=c(6),e=c(5),f=Date.prototype.getTime,g=function(a){return a>9?a:"0"+a};d(d.P+d.F*(e(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!e(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function toISOString(){if(!isFinite(f.call(this)))throw RangeError("Invalid time value");var a=this,b=a.getUTCFullYear(),c=a.getUTCMilliseconds(),d=b<0?"-":b>9999?"+":"";return d+("00000"+Math.abs(b)).slice(d?-6:-4)+"-"+g(a.getUTCMonth()+1)+"-"+g(a.getUTCDate())+"T"+g(a.getUTCHours())+":"+g(a.getUTCMinutes())+":"+g(a.getUTCSeconds())+"."+(c>99?c:"0"+g(c))+"Z"}})},function(a,b,c){var d=Date.prototype,e="Invalid Date",f="toString",g=d[f],h=d.getTime;new Date(NaN)+""!=e&&c(16)(d,f,function toString(){var a=h.call(this);return a===a?g.call(this):e})},function(a,b,c){var d=c(23)("toPrimitive"),e=Date.prototype;d in e||c(8)(e,d,c(230))},function(a,b,c){var d=c(10),e=c(14),f="number";a.exports=function(a){if("string"!==a&&a!==f&&"default"!==a)throw TypeError("Incorrect hint");return e(d(this),a!=f)}},function(a,b,d){var e=d(6),f=d(232),g=d(233),h=d(10),i=d(37),j=d(35),k=d(11),l=d(2).ArrayBuffer,m=d(199),n=g.ArrayBuffer,o=g.DataView,p=f.ABV&&l.isView,q=n.prototype.slice,r=f.VIEW,s="ArrayBuffer";e(e.G+e.W+e.F*(l!==n),{ArrayBuffer:n}),e(e.S+e.F*!f.CONSTR,s,{isView:function isView(a){return p&&p(a)||k(a)&&r in a}}),e(e.P+e.U+e.F*d(5)(function(){return!new n(2).slice(1,c).byteLength}),s,{slice:function slice(a,b){if(q!==c&&b===c)return q.call(h(this),a);for(var d=h(this).byteLength,e=i(a,d),f=i(b===c?d:b,d),g=new(m(this,n))(j(f-e)),k=new o(this),l=new o(g),p=0;e<f;)l.setUint8(p++,k.getUint8(e++));return g}}),d(186)(s)},function(a,b,c){for(var d,e=c(2),f=c(8),g=c(17),h=g("typed_array"),i=g("view"),j=!(!e.ArrayBuffer||!e.DataView),k=j,l=0,m=9,n="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<m;)(d=e[n[l++]])?(f(d.prototype,h,!0),f(d.prototype,i,!0)):k=!1;a.exports={ABV:j,CONSTR:k,TYPED:h,VIEW:i}},function(a,b,d){var e=d(2),f=d(4),g=d(26),h=d(232),i=d(8),j=d(202),k=d(5),l=d(197),m=d(36),n=d(35),o=d(48).f,p=d(9).f,q=d(180),r=d(22),s="ArrayBuffer",t="DataView",u="prototype",v="Wrong length!",w="Wrong index!",x=e[s],y=e[t],z=e.Math,A=e.RangeError,B=e.Infinity,C=x,D=z.abs,E=z.pow,F=z.floor,G=z.log,H=z.LN2,I="buffer",J="byteLength",K="byteOffset",L=f?"_b":I,M=f?"_l":J,N=f?"_o":K,O=function(a,b,c){var d,e,f,g=Array(c),h=8*c-b-1,i=(1<<h)-1,j=i>>1,k=23===b?E(2,-24)-E(2,-77):0,l=0,m=a<0||0===a&&1/a<0?1:0;for(a=D(a),a!=a||a===B?(e=a!=a?1:0,d=i):(d=F(G(a)/H),a*(f=E(2,-d))<1&&(d--,f*=2),a+=d+j>=1?k/f:k*E(2,1-j),a*f>=2&&(d++,f/=2),d+j>=i?(e=0,d=i):d+j>=1?(e=(a*f-1)*E(2,b),d+=j):(e=a*E(2,j-1)*E(2,b),d=0));b>=8;g[l++]=255&e,e/=256,b-=8);for(d=d<<b|e,h+=b;h>0;g[l++]=255&d,d/=256,h-=8);return g[--l]|=128*m,g},P=function(a,b,c){var d,e=8*c-b-1,f=(1<<e)-1,g=f>>1,h=e-7,i=c-1,j=a[i--],k=127&j;for(j>>=7;h>0;k=256*k+a[i],i--,h-=8);for(d=k&(1<<-h)-1,k>>=-h,h+=b;h>0;d=256*d+a[i],i--,h-=8);if(0===k)k=1-g;else{if(k===f)return d?NaN:j?-B:B;d+=E(2,b),k-=g}return(j?-1:1)*d*E(2,k-b)},Q=function(a){return a[3]<<24|a[2]<<16|a[1]<<8|a[0]},R=function(a){return[255&a]},S=function(a){return[255&a,a>>8&255]},T=function(a){return[255&a,a>>8&255,a>>16&255,a>>24&255]},U=function(a){return O(a,52,8)},V=function(a){return O(a,23,4)},W=function(a,b,c){p(a[u],b,{get:function(){return this[c]}})},X=function(a,b,c,d){var e=+c,f=m(e);if(e!=f||f<0||f+b>a[M])throw A(w);var g=a[L]._b,h=f+a[N],i=g.slice(h,h+b);return d?i:i.reverse()},Y=function(a,b,c,d,e,f){var g=+c,h=m(g);if(g!=h||h<0||h+b>a[M])throw A(w);for(var i=a[L]._b,j=h+a[N],k=d(+e),l=0;l<b;l++)i[j+l]=k[f?l:b-l-1]},Z=function(a,b){l(a,x,s);var c=+b,d=n(c);if(c!=d)throw A(v);return d};if(h.ABV){if(!k(function(){new x})||!k(function(){new x(.5)})){x=function ArrayBuffer(a){return new C(Z(this,a))};for(var $,_=x[u]=C[u],aa=o(C),ba=0;aa.length>ba;)($=aa[ba++])in x||i(x,$,C[$]);g||(_.constructor=x)}var ca=new y(new x(2)),da=y[u].setInt8;ca.setInt8(0,2147483648),ca.setInt8(1,2147483649),!ca.getInt8(0)&&ca.getInt8(1)||j(y[u],{setInt8:function setInt8(a,b){da.call(this,a,b<<24>>24)},setUint8:function setUint8(a,b){da.call(this,a,b<<24>>24)}},!0)}else x=function ArrayBuffer(a){var b=Z(this,a);this._b=q.call(Array(b),0),this[M]=b},y=function DataView(a,b,d){l(this,y,t),l(a,x,t);var e=a[M],f=m(b);if(f<0||f>e)throw A("Wrong offset!");if(d=d===c?e-f:n(d),f+d>e)throw A(v);this[L]=a,this[N]=f,this[M]=d},f&&(W(x,J,"_l"),W(y,I,"_b"),W(y,J,"_l"),W(y,K,"_o")),j(y[u],{getInt8:function getInt8(a){return X(this,1,a)[0]<<24>>24},getUint8:function getUint8(a){return X(this,1,a)[0]},getInt16:function getInt16(a){var b=X(this,2,a,arguments[1]);return(b[1]<<8|b[0])<<16>>16},getUint16:function getUint16(a){var b=X(this,2,a,arguments[1]);return b[1]<<8|b[0]},getInt32:function getInt32(a){return Q(X(this,4,a,arguments[1]))},getUint32:function getUint32(a){return Q(X(this,4,a,arguments[1]))>>>0},getFloat32:function getFloat32(a){return P(X(this,4,a,arguments[1]),23,4)},getFloat64:function getFloat64(a){return P(X(this,8,a,arguments[1]),52,8)},setInt8:function setInt8(a,b){Y(this,1,a,R,b)},setUint8:function setUint8(a,b){Y(this,1,a,R,b)},setInt16:function setInt16(a,b){Y(this,2,a,S,b,arguments[2])},setUint16:function setUint16(a,b){Y(this,2,a,S,b,arguments[2])},setInt32:function setInt32(a,b){Y(this,4,a,T,b,arguments[2])},setUint32:function setUint32(a,b){Y(this,4,a,T,b,arguments[2])},setFloat32:function setFloat32(a,b){Y(this,4,a,V,b,arguments[2])},setFloat64:function setFloat64(a,b){Y(this,8,a,U,b,arguments[2])}});r(x,s),r(y,t),i(y[u],h.VIEW,!0),b[s]=x,b[t]=y},function(a,b,c){var d=c(6);d(d.G+d.W+d.F*!c(232).ABV,{DataView:c(233).DataView})},function(a,b,c){c(236)("Int8",1,function(a){return function Int8Array(b,c,d){return a(this,b,c,d)}})},function(a,b,d){if(d(4)){var e=d(26),f=d(2),g=d(5),h=d(6),i=d(232),j=d(233),k=d(18),l=d(197),m=d(15),n=d(8),o=d(202),p=d(36),q=d(35),r=d(37),s=d(14),t=d(3),u=d(69),v=d(73),w=d(11),x=d(56),y=d(154),z=d(44),A=d(57),B=d(48).f,C=d(156),D=d(17),E=d(23),F=d(164),G=d(34),H=d(199),I=d(183),J=d(135),K=d(157),L=d(186),M=d(180),N=d(177),O=d(9),P=d(49),Q=O.f,R=P.f,S=f.RangeError,T=f.TypeError,U=f.Uint8Array,V="ArrayBuffer",W="Shared"+V,X="BYTES_PER_ELEMENT",Y="prototype",Z=Array[Y],$=j.ArrayBuffer,_=j.DataView,aa=F(0),ba=F(2),ca=F(3),da=F(4),ea=F(5),fa=F(6),ga=G(!0),ha=G(!1),ia=I.values,ja=I.keys,ka=I.entries,la=Z.lastIndexOf,ma=Z.reduce,na=Z.reduceRight,oa=Z.join,pa=Z.sort,qa=Z.slice,ra=Z.toString,sa=Z.toLocaleString,ta=E("iterator"),ua=E("toStringTag"),va=D("typed_constructor"),wa=D("def_constructor"),xa=i.CONSTR,ya=i.TYPED,za=i.VIEW,Aa="Wrong length!",Ba=F(1,function(a,b){return Ha(H(a,a[wa]),b)}),Ca=g(function(){return 1===new U(new Uint16Array([1]).buffer)[0]}),Da=!!U&&!!U[Y].set&&g(function(){new U(1).set({})}),Ea=function(a,b){if(a===c)throw T(Aa);var d=+a,e=q(a);if(b&&!u(d,e))throw S(Aa);return e},Fa=function(a,b){var c=p(a);if(c<0||c%b)throw S("Wrong offset!");return c},Ga=function(a){if(w(a)&&ya in a)return a;throw T(a+" is not a typed array!")},Ha=function(a,b){if(!(w(a)&&va in a))throw T("It is not a typed array constructor!");return new a(b)},Ia=function(a,b){return Ja(H(a,a[wa]),b)},Ja=function(a,b){for(var c=0,d=b.length,e=Ha(a,d);d>c;)e[c]=b[c++];return e},Ka=function(a,b,c){Q(a,b,{get:function(){return this._d[c]}})},La=function from(a){var b,d,e,f,g,h,i=x(a),j=arguments.length,l=j>1?arguments[1]:c,m=l!==c,n=C(i);if(n!=c&&!y(n)){for(h=n.call(i),e=[],b=0;!(g=h.next()).done;b++)e.push(g.value);i=e}for(m&&j>2&&(l=k(l,arguments[2],2)),b=0,d=q(i.length),f=Ha(this,d);d>b;b++)f[b]=m?l(i[b],b):i[b];return f},Ma=function of(){for(var a=0,b=arguments.length,c=Ha(this,b);b>a;)c[a]=arguments[a++];return c},Na=!!U&&g(function(){sa.call(new U(1))}),Oa=function toLocaleString(){return sa.apply(Na?qa.call(Ga(this)):Ga(this),arguments)},Pa={copyWithin:function copyWithin(a,b){return N.call(Ga(this),a,b,arguments.length>2?arguments[2]:c)},every:function every(a){return da(Ga(this),a,arguments.length>1?arguments[1]:c)},fill:function fill(a){return M.apply(Ga(this),arguments)},filter:function filter(a){return Ia(this,ba(Ga(this),a,arguments.length>1?arguments[1]:c))},find:function find(a){return ea(Ga(this),a,arguments.length>1?arguments[1]:c)},findIndex:function findIndex(a){return fa(Ga(this),a,arguments.length>1?arguments[1]:c)},forEach:function forEach(a){aa(Ga(this),a,arguments.length>1?arguments[1]:c)},indexOf:function indexOf(a){return ha(Ga(this),a,arguments.length>1?arguments[1]:c)},includes:function includes(a){return ga(Ga(this),a,arguments.length>1?arguments[1]:c)},join:function join(a){return oa.apply(Ga(this),arguments)},lastIndexOf:function lastIndexOf(a){
return la.apply(Ga(this),arguments)},map:function map(a){return Ba(Ga(this),a,arguments.length>1?arguments[1]:c)},reduce:function reduce(a){return ma.apply(Ga(this),arguments)},reduceRight:function reduceRight(a){return na.apply(Ga(this),arguments)},reverse:function reverse(){for(var a,b=this,c=Ga(b).length,d=Math.floor(c/2),e=0;e<d;)a=b[e],b[e++]=b[--c],b[c]=a;return b},some:function some(a){return ca(Ga(this),a,arguments.length>1?arguments[1]:c)},sort:function sort(a){return pa.call(Ga(this),a)},subarray:function subarray(a,b){var d=Ga(this),e=d.length,f=r(a,e);return new(H(d,d[wa]))(d.buffer,d.byteOffset+f*d.BYTES_PER_ELEMENT,q((b===c?e:r(b,e))-f))}},Qa=function slice(a,b){return Ia(this,qa.call(Ga(this),a,b))},Ra=function set(a){Ga(this);var b=Fa(arguments[1],1),c=this.length,d=x(a),e=q(d.length),f=0;if(e+b>c)throw S(Aa);for(;f<e;)this[b+f]=d[f++]},Sa={entries:function entries(){return ka.call(Ga(this))},keys:function keys(){return ja.call(Ga(this))},values:function values(){return ia.call(Ga(this))}},Ta=function(a,b){return w(a)&&a[ya]&&"symbol"!=typeof b&&b in a&&String(+b)==String(b)},Ua=function getOwnPropertyDescriptor(a,b){return Ta(a,b=s(b,!0))?m(2,a[b]):R(a,b)},Va=function defineProperty(a,b,c){return!(Ta(a,b=s(b,!0))&&w(c)&&t(c,"value"))||t(c,"get")||t(c,"set")||c.configurable||t(c,"writable")&&!c.writable||t(c,"enumerable")&&!c.enumerable?Q(a,b,c):(a[b]=c.value,a)};xa||(P.f=Ua,O.f=Va),h(h.S+h.F*!xa,"Object",{getOwnPropertyDescriptor:Ua,defineProperty:Va}),g(function(){ra.call({})})&&(ra=sa=function toString(){return oa.call(this)});var Wa=o({},Pa);o(Wa,Sa),n(Wa,ta,Sa.values),o(Wa,{slice:Qa,set:Ra,constructor:function(){},toString:ra,toLocaleString:Oa}),Ka(Wa,"buffer","b"),Ka(Wa,"byteOffset","o"),Ka(Wa,"byteLength","l"),Ka(Wa,"length","e"),Q(Wa,ua,{get:function(){return this[ya]}}),a.exports=function(a,b,d,j){j=!!j;var k=a+(j?"Clamped":"")+"Array",m="Uint8Array"!=k,o="get"+a,p="set"+a,r=f[k],s=r||{},t=r&&A(r),u=!r||!i.ABV,x={},y=r&&r[Y],C=function(a,c){var d=a._d;return d.v[o](c*b+d.o,Ca)},D=function(a,c,d){var e=a._d;j&&(d=(d=Math.round(d))<0?0:d>255?255:255&d),e.v[p](c*b+e.o,d,Ca)},E=function(a,b){Q(a,b,{get:function(){return C(this,b)},set:function(a){return D(this,b,a)},enumerable:!0})};u?(r=d(function(a,d,e,f){l(a,r,k,"_d");var g,h,i,j,m=0,o=0;if(w(d)){if(!(d instanceof $||(j=v(d))==V||j==W))return ya in d?Ja(r,d):La.call(r,d);g=d,o=Fa(e,b);var p=d.byteLength;if(f===c){if(p%b)throw S(Aa);if(h=p-o,h<0)throw S(Aa)}else if(h=q(f)*b,h+o>p)throw S(Aa);i=h/b}else i=Ea(d,!0),h=i*b,g=new $(h);for(n(a,"_d",{b:g,o:o,l:h,e:i,v:new _(g)});m<i;)E(a,m++)}),y=r[Y]=z(Wa),n(y,"constructor",r)):K(function(a){new r(null),new r(a)},!0)||(r=d(function(a,d,e,f){l(a,r,k);var g;return w(d)?d instanceof $||(g=v(d))==V||g==W?f!==c?new s(d,Fa(e,b),f):e!==c?new s(d,Fa(e,b)):new s(d):ya in d?Ja(r,d):La.call(r,d):new s(Ea(d,m))}),aa(t!==Function.prototype?B(s).concat(B(t)):B(s),function(a){a in r||n(r,a,s[a])}),r[Y]=y,e||(y.constructor=r));var F=y[ta],G=!!F&&("values"==F.name||F.name==c),H=Sa.values;n(r,va,!0),n(y,ya,k),n(y,za,!0),n(y,wa,r),(j?new r(1)[ua]==k:ua in y)||Q(y,ua,{get:function(){return k}}),x[k]=r,h(h.G+h.W+h.F*(r!=s),x),h(h.S,k,{BYTES_PER_ELEMENT:b,from:La,of:Ma}),X in y||n(y,X,b),h(h.P,k,Pa),L(k),h(h.P+h.F*Da,k,{set:Ra}),h(h.P+h.F*!G,k,Sa),h(h.P+h.F*(y.toString!=ra),k,{toString:ra}),h(h.P+h.F*g(function(){new r(1).slice()}),k,{slice:Qa}),h(h.P+h.F*(g(function(){return[1,2].toLocaleString()!=new r([1,2]).toLocaleString()})||!g(function(){y.toLocaleString.call([1,2])})),k,{toLocaleString:Oa}),J[k]=G?F:H,e||G||n(y,ta,H)}}else a.exports=function(){}},function(a,b,c){c(236)("Uint8",1,function(a){return function Uint8Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Uint8",1,function(a){return function Uint8ClampedArray(b,c,d){return a(this,b,c,d)}},!0)},function(a,b,c){c(236)("Int16",2,function(a){return function Int16Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Uint16",2,function(a){return function Uint16Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Int32",4,function(a){return function Int32Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Uint32",4,function(a){return function Uint32Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Float32",4,function(a){return function Float32Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Float64",8,function(a){return function Float64Array(b,c,d){return a(this,b,c,d)}})},function(a,b,d){var e=d(6),f=d(34)(!0);e(e.P,"Array",{includes:function includes(a){return f(this,a,arguments.length>1?arguments[1]:c)}}),d(178)("includes")},function(a,b,c){var d=c(6),e=c(125)(!0);d(d.P,"String",{at:function at(a){return e(this,a)}})},function(a,b,d){var e=d(6),f=d(248);e(e.P,"String",{padStart:function padStart(a){return f(this,a,arguments.length>1?arguments[1]:c,!0)}})},function(a,b,d){var e=d(35),f=d(85),g=d(33);a.exports=function(a,b,d,h){var i=String(g(a)),j=i.length,k=d===c?" ":String(d),l=e(b);if(l<=j||""==k)return i;var m=l-j,n=f.call(k,Math.ceil(m/k.length));return n.length>m&&(n=n.slice(0,m)),h?n+i:i+n}},function(a,b,d){var e=d(6),f=d(248);e(e.P,"String",{padEnd:function padEnd(a){return f(this,a,arguments.length>1?arguments[1]:c,!1)}})},function(a,b,c){c(81)("trimLeft",function(a){return function trimLeft(){return a(this,1)}},"trimStart")},function(a,b,c){c(81)("trimRight",function(a){return function trimRight(){return a(this,2)}},"trimEnd")},function(a,b,c){var d=c(6),e=c(33),f=c(35),g=c(128),h=c(188),i=RegExp.prototype,j=function(a,b){this._r=a,this._s=b};c(136)(j,"RegExp String",function next(){var a=this._r.exec(this._s);return{value:a,done:null===a}}),d(d.P,"String",{matchAll:function matchAll(a){if(e(this),!g(a))throw TypeError(a+" is not a regexp!");var b=String(this),c="flags"in i?String(a.flags):h.call(a),d=new RegExp(a.source,~c.indexOf("g")?c:"g"+c);return d.lastIndex=f(a.lastIndex),new j(d,b)}})},function(a,b,c){c(25)("asyncIterator")},function(a,b,c){c(25)("observable")},function(a,b,c){var d=c(6),e=c(221),f=c(30),g=c(49),h=c(155);d(d.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(a){for(var b,c=f(a),d=g.f,i=e(c),j={},k=0;i.length>k;)h(j,b=i[k++],d(c,b));return j}})},function(a,b,c){var d=c(6),e=c(257)(!1);d(d.S,"Object",{values:function values(a){return e(a)}})},function(a,b,c){var d=c(28),e=c(30),f=c(42).f;a.exports=function(a){return function(b){for(var c,g=e(b),h=d(g),i=h.length,j=0,k=[];i>j;)f.call(g,c=h[j++])&&k.push(a?[c,g[c]]:g[c]);return k}}},function(a,b,c){var d=c(6),e=c(257)(!0);d(d.S,"Object",{entries:function entries(a){return e(a)}})},function(a,b,c){var d=c(6),e=c(56),f=c(19),g=c(9);c(4)&&d(d.P+c(260),"Object",{__defineGetter__:function __defineGetter__(a,b){g.f(e(this),a,{get:f(b),enumerable:!0,configurable:!0})}})},function(a,b,c){a.exports=c(26)||!c(5)(function(){var a=Math.random();__defineSetter__.call(null,a,function(){}),delete c(2)[a]})},function(a,b,c){var d=c(6),e=c(56),f=c(19),g=c(9);c(4)&&d(d.P+c(260),"Object",{__defineSetter__:function __defineSetter__(a,b){g.f(e(this),a,{set:f(b),enumerable:!0,configurable:!0})}})},function(a,b,c){var d=c(6),e=c(56),f=c(14),g=c(57),h=c(49).f;c(4)&&d(d.P+c(260),"Object",{__lookupGetter__:function __lookupGetter__(a){var b,c=e(this),d=f(a,!0);do if(b=h(c,d))return b.get;while(c=g(c))}})},function(a,b,c){var d=c(6),e=c(56),f=c(14),g=c(57),h=c(49).f;c(4)&&d(d.P+c(260),"Object",{__lookupSetter__:function __lookupSetter__(a){var b,c=e(this),d=f(a,!0);do if(b=h(c,d))return b.set;while(c=g(c))}})},function(a,b,c){var d=c(6);d(d.P+d.R,"Map",{toJSON:c(265)("Map")})},function(a,b,c){var d=c(73),e=c(266);a.exports=function(a){return function toJSON(){if(d(this)!=a)throw TypeError(a+"#toJSON isn't generic");return e(this)}}},function(a,b,c){var d=c(198);a.exports=function(a,b){var c=[];return d(a,!1,c.push,c,b),c}},function(a,b,c){var d=c(6);d(d.P+d.R,"Set",{toJSON:c(265)("Set")})},function(a,b,c){var d=c(6);d(d.S,"System",{global:c(2)})},function(a,b,c){var d=c(6),e=c(32);d(d.S,"Error",{isError:function isError(a){return"Error"===e(a)}})},function(a,b,c){var d=c(6);d(d.S,"Math",{iaddh:function iaddh(a,b,c,d){var e=a>>>0,f=b>>>0,g=c>>>0;return f+(d>>>0)+((e&g|(e|g)&~(e+g>>>0))>>>31)|0}})},function(a,b,c){var d=c(6);d(d.S,"Math",{isubh:function isubh(a,b,c,d){var e=a>>>0,f=b>>>0,g=c>>>0;return f-(d>>>0)-((~e&g|~(e^g)&e-g>>>0)>>>31)|0}})},function(a,b,c){var d=c(6);d(d.S,"Math",{imulh:function imulh(a,b){var c=65535,d=+a,e=+b,f=d&c,g=e&c,h=d>>16,i=e>>16,j=(h*g>>>0)+(f*g>>>16);return h*i+(j>>16)+((f*i>>>0)+(j&c)>>16)}})},function(a,b,c){var d=c(6);d(d.S,"Math",{umulh:function umulh(a,b){var c=65535,d=+a,e=+b,f=d&c,g=e&c,h=d>>>16,i=e>>>16,j=(h*g>>>0)+(f*g>>>16);return h*i+(j>>>16)+((f*i>>>0)+(j&c)>>>16)}})},function(a,b,c){var d=c(275),e=c(10),f=d.key,g=d.set;d.exp({defineMetadata:function defineMetadata(a,b,c,d){g(a,b,e(c),f(d))}})},function(a,b,d){var e=d(203),f=d(6),g=d(21)("metadata"),h=g.store||(g.store=new(d(207))),i=function(a,b,d){var f=h.get(a);if(!f){if(!d)return c;h.set(a,f=new e)}var g=f.get(b);if(!g){if(!d)return c;f.set(b,g=new e)}return g},j=function(a,b,d){var e=i(b,d,!1);return e!==c&&e.has(a)},k=function(a,b,d){var e=i(b,d,!1);return e===c?c:e.get(a)},l=function(a,b,c,d){i(c,d,!0).set(a,b)},m=function(a,b){var c=i(a,b,!1),d=[];return c&&c.forEach(function(a,b){d.push(b)}),d},n=function(a){return a===c||"symbol"==typeof a?a:String(a)},o=function(a){f(f.S,"Reflect",a)};a.exports={store:h,map:i,has:j,get:k,set:l,keys:m,key:n,exp:o}},function(a,b,d){var e=d(275),f=d(10),g=e.key,h=e.map,i=e.store;e.exp({deleteMetadata:function deleteMetadata(a,b){var d=arguments.length<3?c:g(arguments[2]),e=h(f(b),d,!1);if(e===c||!e["delete"](a))return!1;if(e.size)return!0;var j=i.get(b);return j["delete"](d),!!j.size||i["delete"](b)}})},function(a,b,d){var e=d(275),f=d(10),g=d(57),h=e.has,i=e.get,j=e.key,k=function(a,b,d){var e=h(a,b,d);if(e)return i(a,b,d);var f=g(b);return null!==f?k(a,f,d):c};e.exp({getMetadata:function getMetadata(a,b){return k(a,f(b),arguments.length<3?c:j(arguments[2]))}})},function(a,b,d){var e=d(206),f=d(266),g=d(275),h=d(10),i=d(57),j=g.keys,k=g.key,l=function(a,b){var c=j(a,b),d=i(a);if(null===d)return c;var g=l(d,b);return g.length?c.length?f(new e(c.concat(g))):g:c};g.exp({getMetadataKeys:function getMetadataKeys(a){return l(h(a),arguments.length<2?c:k(arguments[1]))}})},function(a,b,d){var e=d(275),f=d(10),g=e.get,h=e.key;e.exp({getOwnMetadata:function getOwnMetadata(a,b){return g(a,f(b),arguments.length<3?c:h(arguments[2]))}})},function(a,b,d){var e=d(275),f=d(10),g=e.keys,h=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(a){return g(f(a),arguments.length<2?c:h(arguments[1]))}})},function(a,b,d){var e=d(275),f=d(10),g=d(57),h=e.has,i=e.key,j=function(a,b,c){var d=h(a,b,c);if(d)return!0;var e=g(b);return null!==e&&j(a,e,c)};e.exp({hasMetadata:function hasMetadata(a,b){return j(a,f(b),arguments.length<3?c:i(arguments[2]))}})},function(a,b,d){var e=d(275),f=d(10),g=e.has,h=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(a,b){return g(a,f(b),arguments.length<3?c:h(arguments[2]))}})},function(a,b,d){var e=d(275),f=d(10),g=d(19),h=e.key,i=e.set;e.exp({metadata:function metadata(a,b){return function decorator(d,e){i(a,b,(e!==c?f:g)(d),h(e))}}})},function(a,b,c){var d=c(6),e=c(201)(),f=c(2).process,g="process"==c(32)(f);d(d.G,{asap:function asap(a){var b=g&&f.domain;e(b?b.bind(a):a)}})},function(a,b,d){var e=d(6),f=d(2),g=d(7),h=d(201)(),i=d(23)("observable"),j=d(19),k=d(10),l=d(197),m=d(202),n=d(8),o=d(198),p=o.RETURN,q=function(a){return null==a?c:j(a)},r=function(a){var b=a._c;b&&(a._c=c,b())},s=function(a){return a._o===c},t=function(a){s(a)||(a._o=c,r(a))},u=function(a,b){k(a),this._c=c,this._o=a,a=new v(this);try{var d=b(a),e=d;null!=d&&("function"==typeof d.unsubscribe?d=function(){e.unsubscribe()}:j(d),this._c=d)}catch(f){return void a.error(f)}s(this)&&r(this)};u.prototype=m({},{unsubscribe:function unsubscribe(){t(this)}});var v=function(a){this._s=a};v.prototype=m({},{next:function next(a){var b=this._s;if(!s(b)){var c=b._o;try{var d=q(c.next);if(d)return d.call(c,a)}catch(e){try{t(b)}finally{throw e}}}},error:function error(a){var b=this._s;if(s(b))throw a;var d=b._o;b._o=c;try{var e=q(d.error);if(!e)throw a;a=e.call(d,a)}catch(f){try{r(b)}finally{throw f}}return r(b),a},complete:function complete(a){var b=this._s;if(!s(b)){var d=b._o;b._o=c;try{var e=q(d.complete);a=e?e.call(d,a):c}catch(f){try{r(b)}finally{throw f}}return r(b),a}}});var w=function Observable(a){l(this,w,"Observable","_f")._f=j(a)};m(w.prototype,{subscribe:function subscribe(a){return new u(a,this._f)},forEach:function forEach(a){var b=this;return new(g.Promise||f.Promise)(function(c,d){j(a);var e=b.subscribe({next:function(b){try{return a(b)}catch(c){d(c),e.unsubscribe()}},error:d,complete:c})})}}),m(w,{from:function from(a){var b="function"==typeof this?this:w,c=q(k(a)[i]);if(c){var d=k(c.call(a));return d.constructor===b?d:new b(function(a){return d.subscribe(a)})}return new b(function(b){var c=!1;return h(function(){if(!c){try{if(o(a,!1,function(a){if(b.next(a),c)return p})===p)return}catch(d){if(c)throw d;return void b.error(d)}b.complete()}}),function(){c=!0}})},of:function of(){for(var a=0,b=arguments.length,c=Array(b);a<b;)c[a]=arguments[a++];return new("function"==typeof this?this:w)(function(a){var b=!1;return h(function(){if(!b){for(var d=0;d<c.length;++d)if(a.next(c[d]),b)return;a.complete()}}),function(){b=!0}})}}),n(w.prototype,i,function(){return this}),e(e.G,{Observable:w}),d(186)("Observable")},function(a,b,c){var d=c(6),e=c(200);d(d.G+d.B,{setImmediate:e.set,clearImmediate:e.clear})},function(a,b,c){for(var d=c(183),e=c(16),f=c(2),g=c(8),h=c(135),i=c(23),j=i("iterator"),k=i("toStringTag"),l=h.Array,m=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],n=0;n<5;n++){var o,p=m[n],q=f[p],r=q&&q.prototype;if(r){r[j]||g(r,j,l),r[k]||g(r,k,p),h[p]=l;for(o in d)r[o]||e(r,o,d[o],!0)}}},function(a,b,c){var d=c(2),e=c(6),f=c(76),g=c(289),h=d.navigator,i=!!h&&/MSIE .\./.test(h.userAgent),j=function(a){return i?function(b,c){return a(f(g,[].slice.call(arguments,2),"function"==typeof b?b:Function(b)),c)}:a};e(e.G+e.B+e.F*i,{setTimeout:j(d.setTimeout),setInterval:j(d.setInterval)})},function(a,b,c){var d=c(290),e=c(76),f=c(19);a.exports=function(){for(var a=f(this),b=arguments.length,c=Array(b),g=0,h=d._,i=!1;b>g;)(c[g]=arguments[g++])===h&&(i=!0);return function(){var d,f=this,g=arguments.length,j=0,k=0;if(!i&&!g)return e(a,c,f);if(d=c.slice(),i)for(;b>j;j++)d[j]===h&&(d[j]=arguments[k++]);for(;g>k;)d.push(arguments[k++]);return e(a,d,f)}}},function(a,b,c){a.exports=c(2)}]),"undefined"!=typeof module&&module.exports?module.exports=a:"function"==typeof define&&define.amd?define(function(){return a}):b.core=a}(1,1);
//# sourceMappingURL=shim.min.js.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(this,function(){"use strict";function e(e,t){for(var n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=Zone.current.wrap(e[n],t+"_"+n));return e}function t(t,n){for(var r=t.constructor.name,o=function(o){var a=n[o],i=t[a];i&&(t[a]=function(t){return function(){return t.apply(this,e(arguments,r+"."+a))}}(i))},a=0;a<n.length;a++)o(a)}function n(e,t){var n=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0},r=Object.getOwnPropertyDescriptor(e,"original"+t);!r&&n.get&&Object.defineProperty(e,"original"+t,{enumerable:!1,configurable:!0,get:n.get}),delete n.writable,delete n.value;var o=t.substr(2),a="_"+t;n.set=function(e){if(this[a]&&this.removeEventListener(o,this[a]),"function"==typeof e){var t=function(t){var n;n=e.apply(this,arguments),void 0==n||n||t.preventDefault()};this[a]=t,this.addEventListener(o,t,!1)}else this[a]=null},n.get=function(){var r=this[a]||null;if(null===r){var o=Object.getOwnPropertyDescriptor(e,"original"+t);o&&o.get&&(r=o.get.apply(this,arguments),r&&(n.set.apply(this,[r]),this.removeAttribute(t)))}return this[a]||null},Object.defineProperty(e,t,n)}function r(e,t){var r=[];for(var o in e)"on"==o.substr(0,2)&&r.push(o);for(var a=0;a<r.length;a++)n(e,r[a]);if(t)for(var i=0;i<t.length;i++)n(e,"on"+t[i])}function o(e,t,n,r,o){var a=e[C];if(a)for(var i=0;i<a.length;i++){var s=a[i],u=s.data,c=u.handler;if((u.handler===t||c.listener===t)&&u.useCapturing===r&&u.eventName===n)return o&&a.splice(i,1),s}return null}function a(e,t,n){var r=e[C];r||(r=e[C]=[]),n?r.unshift(t):r.push(t)}function i(e,t,n,r,i,s){function u(e){var t=e.data;return a(t.target,e,i),t.invokeAddFunc(l,e)}function c(e){var t=e.data;return o(t.target,e.invoke,t.eventName,t.useCapturing,!0),t.invokeRemoveFunc(p,e)}void 0===n&&(n=!0),void 0===r&&(r=!1),void 0===i&&(i=!1),void 0===s&&(s=I);var l=E(e),p=E(t),f=!n&&void 0;return function(t,n){var a=s(t,n);a.useCapturing=a.useCapturing||f;var i=null;"function"==typeof a.handler?i=a.handler:a.handler&&a.handler.handleEvent&&(i=function(e){return a.handler.handleEvent(e)});var p=!1;try{p=a.handler&&"[object FunctionWrapper]"===a.handler.toString()}catch(h){return}if(!i||p)return a.invokeAddFunc(l,a.handler);if(!r){var d=o(a.target,a.handler,a.eventName,a.useCapturing,!1);if(d)return a.invokeAddFunc(l,d)}var k=Zone.current,v=a.target.constructor.name+"."+e+":"+a.eventName;k.scheduleEventTask(v,i,a,u,c)}}function s(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=I);var r=E(e),a=!t&&void 0;return function(e,t){var i=n(e,t);i.useCapturing=i.useCapturing||a;var s=o(i.target,i.handler,i.eventName,i.useCapturing,!0);s?s.zone.cancelTask(s):i.invokeRemoveFunc(r,i.handler)}}function u(e,t,n,r){return void 0===t&&(t=z),void 0===n&&(n=j),void 0===r&&(r=I),!(!e||!e[t])&&(p(e,t,function(){return i(t,n,!0,!1,!1,r)}),p(e,n,function(){return s(n,!0,r)}),!0)}function c(t){var n=D[t];if(n){D[t]=function(){var r=e(arguments,t);switch(r.length){case 0:this[L]=new n;break;case 1:this[L]=new n(r[0]);break;case 2:this[L]=new n(r[0],r[1]);break;case 3:this[L]=new n(r[0],r[1],r[2]);break;case 4:this[L]=new n(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}};var r,o=new n(function(){});for(r in o)"XMLHttpRequest"===t&&"responseBlob"===r||!function(e){"function"==typeof o[e]?D[t].prototype[e]=function(){return this[L][e].apply(this[L],arguments)}:Object.defineProperty(D[t].prototype,e,{set:function(n){"function"==typeof n?this[L][e]=Zone.current.wrap(n,t+"."+e):this[L][e]=n},get:function(){return this[L][e]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(D[t][r]=n[r])}}function l(e,t){try{return Function("f","return function "+e+"(){return f(this, arguments)}")(t)}catch(n){return function(){return t(this,arguments)}}}function p(e,t,n){for(var r=e;r&&Object.getOwnPropertyNames(r).indexOf(t)===-1;)r=Object.getPrototypeOf(r);!r&&e[t]&&(r=e);var o,a=E(t);return r&&!(o=r[a])&&(o=r[a]=r[t],r[t]=l(t,n(o,a,t))),o}function f(e,t,n,r){function o(t){var n=t.data;return n.args[0]=function(){t.invoke.apply(this,arguments),delete u[n.handleId]},n.handleId=i.apply(e,n.args),u[n.handleId]=t,t}function a(e){return delete u[e.data.handleId],s(e.data.handleId)}var i=null,s=null;t+=r,n+=r;var u={};i=p(e,t,function(n){return function(i,s){if("function"==typeof s[0]){var u=Zone.current,c={handleId:null,isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?s[1]||0:null,args:s},l=u.scheduleMacroTask(t,s[0],c,o,a);if(!l)return l;var p=l.data.handleId;return p.ref&&p.unref&&(l.ref=p.ref.bind(p),l.unref=p.unref.bind(p)),l}return n.apply(e,s)}}),s=p(e,n,function(t){return function(n,r){var o="number"==typeof r[0]?u[r[0]]:r[0];o&&"string"==typeof o.type?(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&o.zone.cancelTask(o):t.apply(e,r)}})}function h(){Object.defineProperty=function(e,t,n){if(k(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=v(e,t,n)),g(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=v(e,n,t[n])}),H(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=M(e,t);return k(e,t)&&(n.configurable=!1),n}}function d(e,t,n){var r=n.configurable;return n=v(e,t,n),g(e,t,n,r)}function k(e,t){return e&&e[R]&&e[R][t]}function v(e,t,n){return n.configurable=!0,n.configurable||(e[R]||F(e,R,{writable:!0,value:{}}),e[R][t]=!0),n}function g(e,t,n,r){try{return F(e,t,n)}catch(o){if(!n.configurable)throw o;"undefined"==typeof r?delete n.configurable:n.configurable=r;try{return F(e,t,n)}catch(o){var a=null;try{a=JSON.stringify(n)}catch(o){a=a.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+a+"' on object '"+e+"' and got error, giving up: "+o)}}}function y(e){var t=[],n=e.wtf;n?t=x.split(",").map(function(e){return"HTML"+e+"Element"}).concat(q):e[B]?t.push(B):t=q;for(var r=0;r<t.length;r++){var o=e[t[r]];u(o&&o.prototype)}}function m(e){var t=e.WebSocket;e.EventTarget||u(t.prototype),e.WebSocket=function(e,n){var o,a=arguments.length>1?new t(e,n):new t(e),i=Object.getOwnPropertyDescriptor(a,"onmessage");return i&&i.configurable===!1?(o=Object.create(a),["addEventListener","removeEventListener","send","close"].forEach(function(e){o[e]=function(){return a[e].apply(a,arguments)}})):o=a,r(o,["close","error","message","open"]),o};for(var n in t)e.WebSocket[n]=t[n]}function b(e){if(!Z){var t="undefined"!=typeof WebSocket;T()?(P&&r(HTMLElement.prototype,A),r(XMLHttpRequest.prototype,null),"undefined"!=typeof IDBIndex&&(r(IDBIndex.prototype,null),r(IDBRequest.prototype,null),r(IDBOpenDBRequest.prototype,null),r(IDBDatabase.prototype,null),r(IDBTransaction.prototype,null),r(IDBCursor.prototype,null)),t&&r(WebSocket.prototype,null)):(_(),c("XMLHttpRequest"),t&&m(e))}}function T(){if(P&&!Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=Object.getOwnPropertyDescriptor(Element.prototype,"onclick");if(e&&!e.configurable)return!1}Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{get:function(){return!0}});var t=new XMLHttpRequest,n=!!t.onreadystatechange;return Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{}),n}function _(){for(var e=function(e){var t=A[e],n="on"+t;self.addEventListener(t,function(e){var t,r,o=e.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][W]&&(t=Zone.current.wrap(o[n],r),t[W]=o[n],o[n]=t),o=o.parentElement},!0)},t=0;t<A.length;t++)e(t)}function w(e){if(P&&"registerElement"in e.document){var t=document.registerElement,n=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(e,r){return r&&r.prototype&&n.forEach(function(e){var t="Document.registerElement::"+e;if(r.prototype.hasOwnProperty(e)){var n=Object.getOwnPropertyDescriptor(r.prototype,e);n&&n.value?(n.value=Zone.current.wrap(n.value,t),d(r.prototype,e,n)):r.prototype[e]=Zone.current.wrap(r.prototype[e],t)}else r.prototype[e]&&(r.prototype[e]=Zone.current.wrap(r.prototype[e],t))}),t.apply(document,[e,r])}}}function S(e){function t(e){var t=e[J];return t}function n(e){self[$]=!1;var t=e.data,n=t.target[Y];n&&t.target.removeEventListener("readystatechange",n);var r=t.target[Y]=function(){t.target.readyState===t.target.DONE&&!t.aborted&&self[$]&&e.invoke()};t.target.addEventListener("readystatechange",r);var o=t.target[J];return o||(t.target[J]=e),i.apply(t.target,t.args),self[$]=!0,e}function r(){}function o(e){var t=e.data;return t.aborted=!0,s.apply(t.target,t.args)}var a=p(e.XMLHttpRequest.prototype,"open",function(){return function(e,t){return e[Q]=0==t[2],a.apply(e,t)}}),i=p(e.XMLHttpRequest.prototype,"send",function(){return function(e,t){var a=Zone.current;if(e[Q])return i.apply(e,t);var s={target:e,isPeriodic:!1,delay:null,args:t,aborted:!1};return a.scheduleMacroTask("XMLHttpRequest.send",r,s,n,o)}}),s=p(e.XMLHttpRequest.prototype,"abort",function(e){return function(e,n){var r=t(e);if(r&&"string"==typeof r.type){if(null==r.cancelFn)return;r.zone.cancelTask(r)}}})}var E=(function(e){function t(e){return"__zone_symbol__"+e}function n(){0===O&&0===S.length&&(e[b]?e[b].resolve(0)[T](a):e[m](a,0))}function r(e){n(),S.push(e)}function o(e){var t=e&&e.rejection;t&&console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0),console.error(e)}function a(){if(!E){for(E=!0;S.length;){var e=S;S=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){o(r)}}}for(;D.length;)for(var a=function(){var e=D.shift();try{e.zone.runGuarded(function(){throw e})}catch(t){o(t)}};D.length;)a();E=!1}}function i(e){return e&&e.then}function s(e){return e}function u(e){return F.reject(e)}function c(e,t){return function(n){l(e,t,n)}}function l(e,t,r){if(e[Z]===z)if(r instanceof F&&r.hasOwnProperty(Z)&&r.hasOwnProperty(P)&&r[Z]!==z)p(r),l(e,r[Z],r[P]);else if(i(r))r.then(c(e,t),c(e,!1));else{e[Z]=t;var o=e[P];e[P]=r;for(var a=0;a<o.length;)f(e,o[a++],o[a++],o[a++],o[a++]);if(0==o.length&&t==I){e[Z]=L;try{throw new Error("Uncaught (in promise): "+r+(r&&r.stack?"\n"+r.stack:""))}catch(s){var u=s;u.rejection=r,u.promise=e,u.zone=k.current,u.task=k.currentTask,D.push(u),n()}}}return e}function p(e){if(e[Z]===L){e[Z]=I;for(var t=0;t<D.length;t++)if(e===D[t].promise){D.splice(t,1);break}}}function f(e,t,n,r,o){p(e);var a=e[Z]?r||s:o||u;t.scheduleMicroTask(C,function(){try{l(n,!0,t.run(a,null,[e[P]]))}catch(r){l(n,!1,r)}})}function h(e){var n=e.prototype,r=n[t("then")]=n.then;n.then=function(e,t){var n=this;return new F(function(e,t){r.call(n,e,t)}).then(e,t)}}function d(){var e=B.apply(this,arguments);if(e.originalStack=e.stack,d[W]&&e.originalStack){for(var t=e.originalStack.split("\n"),n=_,r=0;t[r]!==q&&r<t.length;)r++;for(;r<t.length&&n;r++){var o=t[r];if(o.trim()){var a=A.hasOwnProperty(o)&&A[o];a===x.blackList?(t.splice(r,1),r--):a===x.transition?n.parent?(t[r]+=" ["+n.parent.zone.name+" => "+n.zone.name+"]",n=n.parent):n=null:t[r]+=" ["+n.zone.name+"]"}}e.stack=e.zoneAwareStack=t.join("\n")}return e}if(e.Zone)throw new Error("Zone already loaded.");var k=function(){function t(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,t)}return t.assertZonePatched=function(){if(e.Promise!==F)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(t,"current",{get:function(){return _.zone},enumerable:!0,configurable:!0}),Object.defineProperty(t,"currentTask",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),t.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},t.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},t.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},t.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},t.prototype.run=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null),_=new y(_,this);try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{_=_.parent}},t.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null),_=new y(_,this);try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(o){if(this._zoneDelegate.handleError(this,o))throw o}}finally{_=_.parent}},t.prototype.runTask=function(e,t,n){if(e.runCount++,e.zone!=this)throw new Error("A task can only be run in the zone which created it! (Creation: "+e.zone.name+"; Execution: "+this.name+")");var r=w;w=e,_=new y(_,this);try{"macroTask"==e.type&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(o){if(this._zoneDelegate.handleError(this,o))throw o}}finally{_=_.parent,w=r}},t.prototype.scheduleMicroTask=function(e,t,n,r){return this._zoneDelegate.scheduleTask(this,new g("microTask",this,e,t,n,r,null))},t.prototype.scheduleMacroTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new g("macroTask",this,e,t,n,r,o))},t.prototype.scheduleEventTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new g("eventTask",this,e,t,n,r,o))},t.prototype.cancelTask=function(e){var t=this._zoneDelegate.cancelTask(this,e);return e.runCount=-1,e.cancelFn=null,t},t}();k.__symbol__=t;var v=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:t.zone),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:t.zone),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:t.zone),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:t.zone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:t.zone),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:t.zone),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:t.zone),this._hasTaskZS=n&&(n.onHasTask?n:t._hasTaskZS),this._hasTaskDlgt=n&&(n.onHasTask?t:t._hasTaskDlgt),this._hasTaskCurrZone=n&&(n.onHasTask?this.zone:t.zone)}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new k(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)},e.prototype.scheduleTask=function(e,t){try{if(this._scheduleTaskZS)return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t);if(t.scheduleFn)t.scheduleFn(t);else{if("microTask"!=t.type)throw new Error("Task is missing scheduleFn.");r(t)}return t}finally{e==this.zone&&this._updateTaskCount(t.type,1)}},e.prototype.invokeTask=function(e,t,n,r){try{return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,n,r):t.callback.apply(n,r)}finally{e!=this.zone||"eventTask"==t.type||t.data&&t.data.isPeriodic||this._updateTaskCount(t.type,-1)}},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw new Error("Task does not support cancellation, or is already canceled.");n=t.cancelFn(t)}return e==this.zone&&this._updateTaskCount(t.type,-1),n},e.prototype.hasTask=function(e,t){return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var a={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};try{this.hasTask(this.zone,a)}finally{this._parentDelegate&&this._parentDelegate._updateTaskCount(e,t)}}},e}(),g=function(){function e(e,t,n,r,o,i,s){this.runCount=0,this.type=e,this.zone=t,this.source=n,this.data=o,this.scheduleFn=i,this.cancelFn=s,this.callback=r;var u=this;this.invoke=function(){O++;try{return t.runTask(u,this,arguments)}finally{1==O&&a(),O--}}}return e.prototype.toString=function(){return this.data&&"undefined"!=typeof this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},e}(),y=function(){function e(e,t){this.parent=e,this.zone=t}return e}(),m=t("setTimeout"),b=t("Promise"),T=t("then"),_=new y(null,new k(null,null)),w=null,S=[],E=!1,D=[],O=0,Z=t("state"),P=t("value"),C="Promise.then",z=null,j=!0,I=!1,L=0,F=function(){function e(t){var n=this;if(!(n instanceof e))throw new Error("Must be an instanceof Promise.");n[Z]=z,n[P]=[];try{t&&t(c(n,j),c(n,I))}catch(r){l(n,!1,r)}}return e.resolve=function(e){return l(new this(null),j,e)},e.reject=function(e){return l(new this(null),I,e)},e.race=function(e){function t(e){a&&(a=r(e))}function n(e){a&&(a=o(e))}for(var r,o,a=new this(function(e,t){n=[e,t],r=n[0],o=n[1];var n}),s=0,u=e;s<u.length;s++){var c=u[s];i(c)||(c=this.resolve(c)),c.then(t,n)}return a},e.all=function(e){for(var t,n,r=new this(function(e,r){t=e,n=r}),o=0,a=[],s=0,u=e;s<u.length;s++){var c=u[s];i(c)||(c=this.resolve(c)),c.then(function(e){return function(n){a[e]=n,o--,o||t(a)}}(o),n),o++}return o||t(a),r},e.prototype.then=function(e,t){var n=new this.constructor(null),r=k.current;return this[Z]==z?this[P].push(r,n,e,t):f(this,r,n,e,t),n},e.prototype["catch"]=function(e){return this.then(null,e)},e}();F.resolve=F.resolve,F.reject=F.reject,F.race=F.race,F.all=F.all;var M=e[t("Promise")]=e.Promise;if(e.Promise=F,M&&(h(M),"undefined"!=typeof e.fetch)){var H=void 0;try{H=e.fetch()}catch(R){H=e.fetch("about:blank")}H.then(function(){return null},function(){return null}),H.constructor!=M&&H.constructor!=F&&h(H.constructor)}Promise[k.__symbol__("uncaughtPromiseErrors")]=D;var x;!function(e){e[e.blackList=0]="blackList",e[e.transition=1]="transition"}(x||(x={}));var q,B=e[t("Error")]=e.Error,A={};e.Error=d;var W="stackRewrite";d.prototype=B.prototype,d[k.__symbol__("blacklistedStackFrames")]=A,d[W]=!1,B.hasOwnProperty("stackTraceLimit")&&(B.stackTraceLimit=Math.max(B.stackTraceLimit,15),Object.defineProperty(d,"stackTraceLimit",{get:function(){return B.stackTraceLimit},set:function(e){return B.stackTraceLimit=e}})),B.hasOwnProperty("captureStackTrace")&&Object.defineProperty(d,"captureStackTrace",{value:function(e,t){B.captureStackTrace(e,t)}}),Object.defineProperty(d,"prepareStackTrace",{get:function(){return B.prepareStackTrace},set:function(e){return B.prepareStackTrace=e}});var N=k.current.fork({name:"detect",onInvoke:function(e,t,n,r,o,a,i){return e.invoke(n,r,o,a,i)},onHandleError:function(e,t,n,r){if(r.originalStack&&Error===d)for(var o=r.originalStack.split(/\n/),a=!1,i=!1,s=!1;o.length;){var u=o.shift();if(/:\d+:\d+/.test(u)){var c=u.split("(")[0].split("@")[0],l=x.transition;if(c.indexOf("ZoneAwareError")!==-1&&(q=u),c.indexOf("runGuarded")!==-1?i=!0:c.indexOf("runTask")!==-1?s=!0:c.indexOf("run")!==-1?a=!0:l=x.blackList,A[u]=l,a&&i&&s){d[W]=!0;break}}}return!1}}),X=function(){N.run(function(){N.runGuarded(function(){throw new Error("blacklistStackFrames")})})};return N.runTask(N.scheduleMacroTask("detect",X,null,function(){return null},null)),e.Zone=k}("object"==typeof window&&window||"object"==typeof self&&self||global),function(e){return"__zone_symbol__"+e}),D="object"==typeof window&&window||"object"==typeof self&&self||global,O="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,Z=!("nw"in D)&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),P=!Z&&!O&&!("undefined"==typeof window||!window.HTMLElement),C=E("eventTasks"),z="addEventListener",j="removeEventListener",I=function(e,t){return{useCapturing:t[2],eventName:t[0],handler:t[1],target:e||D,name:t[0],invokeAddFunc:function(e,t){return t&&t.invoke?this.target[e](this.eventName,t.invoke,this.useCapturing):this.target[e](this.eventName,t,this.useCapturing)},invokeRemoveFunc:function(e,t){return t&&t.invoke?this.target[e](this.eventName,t.invoke,this.useCapturing):this.target[e](this.eventName,t,this.useCapturing)}}},L=(i(z,j),s(j),E("originalInstance")),F=Object[E("defineProperty")]=Object.defineProperty,M=Object[E("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,H=Object.create,R=E("unconfigurables"),x="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",q="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),B="EventTarget",A="copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror".split(" "),W=E("unbound"),N="set",X="clear",G=["alert","prompt","confirm"],U="object"==typeof window&&window||"object"==typeof self&&self||global;f(U,N,X,"Timeout"),f(U,N,X,"Interval"),f(U,N,X,"Immediate"),f(U,"request","cancel","AnimationFrame"),f(U,"mozRequest","mozCancel","AnimationFrame"),f(U,"webkitRequest","webkitCancel","AnimationFrame");for(var K=0;K<G.length;K++){var V=G[K];p(U,V,function(e,t,n){return function(t,r){return Zone.current.run(e,U,r,n)}})}y(U),b(U),c("MutationObserver"),c("WebKitMutationObserver"),c("FileReader"),h(),w(U),S(U);var J=E("xhrTask"),Q=E("xhrSync"),Y=E("xhrListener"),$=E("xhrScheduled");U.navigator&&U.navigator.geolocation&&t(U.navigator.geolocation,["getCurrentPosition","watchPosition"])});
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