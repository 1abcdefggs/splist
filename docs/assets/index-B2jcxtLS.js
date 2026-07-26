const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-markdown-m92MCvHz.js","./lib-actehevX.js","./remark-gfm-zDqDfnnT.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Xe,Ye=Math.log,O=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Ye(e)/O|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function k(e){e[Ct]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return je.call(Ft,e)?!0:je.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=m({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=m({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(m({},In,{dataTransfer:0})),zn=On(m({},jn,{relatedTarget:0})),Bn=On(m({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(m({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(m({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(m({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(m({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(m({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(m({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(m({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(m({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=_i(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=_i(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=_i(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Je(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Qi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=he(null),ea=null,ta=null;function na(e,t,n){D($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,E($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(i(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=w.S;w.S=function(e,t){tu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=he(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?D(Ta,Ta.current):D(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case ie:return t=Fa(t),f(e,t,n)}if(de(t)||ce(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Fa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Fa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Fa(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===S)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=he(null),oo=he(0);function so(e,t){e=Gl,D(oo,e),D(ao,t),Gl=e|t.baseLanes}function co(){D(oo,Gl),D(ao,ao.current)}function lo(){Gl=oo.current,E(ao),E(oo)}var uo=he(null),fo=null;function po(e){var t=e.alternate;D(N,N.current&1),D(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){D(N,N.current),D(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(D(N,N.current),D(uo,e),fo===null&&(fo=e)):go(e)}function go(){D(N,N.current),D(uo,uo.current)}function _o(e){E(uo),fo===e&&(fo=null),E(N)}var N=he(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){w.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,a=R(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,z=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,zs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,fe,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=rc(e.stateNode,r,a),$a(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(z||oa(e,t,n,!1),a=(n&e.childLanes)!==0,z||a){if(r=G,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,M,r),r!==o.cache&&aa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Qi(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),k(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Hi=t,Wi=!0,a=A,Zd(t.type)?(lf=a,A=cf(r.firstChild)):A=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ca(t),a=la(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(a=Ea(),a===null&&(a=G,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),na(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=ge.current,Yi(t)?qi(t,e):(e=ff(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=ge.current,Yi(t))qi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(E(N),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return D(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>nu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return B(t),null}else 2*Ie()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=N.current,D(N,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(N),null;case 4:return xe(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&E(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:E(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&E(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,k(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,k(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||a,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ie(),10<a)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Ie():(a&4194048)===a?tu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,w.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=w.H;return w.H=Us,e===null?Us:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ie()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,w.H=r,w.A=a,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Pe();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,st(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,T.p=a,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ie()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=fi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),ft(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),k(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);k(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),k(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,k(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),k(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,k(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),k(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,k(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),k(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,k(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),k(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`First section text starts here.
v
Second section text ends here.
`,x=`Part 1
✂️
Part 2
CUT
Part 3
v
Part 4
v
Part 5
`,ee=`This file validates physical splitting with a user-defined custom marker.
===
The "===" line above acts as the cut boundary.
===
Useful for log files, CSVs, or any text format with a natural delimiter.
`,S=`This file validates the trailing-text retention feature.
V Chapter 1: The Beginning
This becomes the body of the new file.
v Chapter 2: The Journey
This also becomes its own file.
`,C=`Physical cut without sequential numbering (un option).
v
Output files carry no leading number prefix.
v
Useful when alphabetical ordering by title is preferred.
`,te=`Physical cut with automatic TOC generation (-toc option).
v
Each split destination appears as a relative link in 00_TOC.md.
v
The TOC file is opened automatically after splitting.
`,ne=`Section A
✂️
✂️
Section B — two consecutive markers in a row.
SPLIST detects the empty chunk between them and silently skips it,
preventing zero-byte garbage files from being created.
`,re=`✂️
This file begins with a cut marker on line 1.
The resulting first output would be an empty file, so it is safely skipped.
`,ie=`This file ends with a cut marker.
The trailing empty chunk is silently dropped — no zero-byte file is produced.
✂️
`,ae=`Inline scissors ✂️ mid-sentence are ignored — never treated as a cut point.
Only a marker that occupies its own entire line triggers a split.
✂️
This line-start marker above is the real cut point.
`,oe=`This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read.

Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen.

Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components.
(No cut markers anywhere in this file — SPLIST exits cleanly without splitting.)
`,se=`The "sp" command ignores Markdown structure entirely — this test proves it.
\`\`\`javascript
const a = 1;
✂️
const b = 2;
\`\`\`
Even inside a code block, the marker triggers a physical split.
`,ce=`File-system forbidden characters in content: \\/:*?"<>|
✂️
\\/:*?"<>|【Forbidden character stress test】
These characters are automatically sanitised and the title is trimmed to 50 chars.
`,le=`Physical-cut high-volume stress test.
✂️
[HIGH LOAD STRESS TEST DUMMY DATA]
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump. 
This is a massive, dense block of raw text. It represents a user's brain dump.
`,ue=`This is text ✂️ and more text on the same line.
The cut marker must occupy its own independent line — inline markers are ignored.
`,de=`# Monday Meeting Minutes
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read.
# Tuesday Meeting Minutes
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen.
# Wednesday Meeting Minutes
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components.
`,w=`# Chapter 1: Basics
This is the overview.
## Introduction
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read.
## Installation
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen.
# Chapter 2: Advanced
## Deep Dive
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read.
`,T=`# Project Reports
## Week 01 Status
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read. 
This is a massive, dense block of raw text. It represents a user's brain dump, a long unformatted article, or a messy draft. It just keeps going on and on without any breaks, creating a heavy wall of text that is hard to read.
## Week 02 Status
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen. 
Here is another extremely long paragraph. In a real-world scenario, a user might want to extract this specific part, or simply divide the document to make it more manageable. The text continues to flow heavily across the screen.
## Week 03 Status
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components. 
Finally, this is the last chunk of dense information. By using this tool, what was once a chaotic and overwhelming text file is instantly transformed into beautifully separated and organized components.
`,fe=`v Typing-assist proof: this line becomes the parent folder name!
Prefix a line with lowercase "v " (v + space) and it is treated as "# " (H1) at runtime.
vv Speed-typing smart key substitution
Prefix "vv " and it becomes "## " (H2).
vv Folder expansion without leaving home row
At execution the document is split just like a normally-written heading structure.
`,pe=`v Parent folder
vv Child file
vvv Grandchild level via typing-assist
A line starting with "vvv " is automatically expanded to "### " (H3).
This drastically reduces how often you need to press Shift+3.
`,me=`# Recipe Book
## Breakfast Menu (normally a split point, but skipped this run)
### Morning Hot Sandwich
This H3 section is extracted as its own file when "###" is passed as the depth argument.
### Morning Smoothie
Passing "###" targets H3 splits instead of the default H2.
`,he=`# My Notes
## Heading hierarchy preservation
Normally, heading levels are promoted after splitting (## → #).
With the "keep" option the original heading depth is preserved as-is.
`,E=`# Dictionary
## Apple
Apple is a fruit.
## Banana
Banana is a fruit.
## Cherry
Cherry is a fruit.
(The "un" option removes the leading sequential number from all output file names.)
`,D=`# Project Specification
## Overview
System overview content.
## Requirements
Functional and environment requirements.
(The -toc option places a 00_TOC.md with relative links to every split file.)
`,ge=`# Original Document Title
## First Section
Split files normally have their headings promoted by one level (## → #).
This ensures that each child file reads naturally as a self-contained document.
`,_e=`# Main Title
This introductory text appears before the first H2.
SPLIST detects it automatically and saves it as "00_Overview.md".
## First Section
Normal H2 content starts here.
`,ve=`# Heading Safety Test
## 1. Forbidden characters auto-sanitised \\/:*?"<>|
Heading text containing OS-forbidden characters is cleaned before use as a filename.
## 2. Surrogate-pair emoji 👨‍👩‍👧‍👦 preserved accurately
Complex emoji and ligatures survive the round-trip without corruption.
## 3. This is an intentionally very long heading that exceeds fifty Unicode code points to verify the automatic trimming safeguard
Headings longer than 50 chars are trimmed to 50; no crash, no data loss.
`,ye=`# Level 1
## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
Even six levels of nesting are handled without corrupting the folder/file structure.
`,be=`# Duplicate heading collision avoidance
## Sub-section
Content A.
## Sub-section
Identical heading names do not overwrite each other — a unique suffix is applied automatically.
`,xe=`# Bullets and headings mixed
* A bullet point
* Not a heading
## Valid heading
- Hyphen list item
The heading parser must not misidentify list markers as headings.
`,Se=`# Valid Heading 1
\`\`\`markdown
# Fake heading inside code block
## These must be ignored
\`\`\`
## Closing real heading
Fake headings inside code fences must never generate folders or files.
`,Ce=`---
title: Test Document
tags: [test, play]
---
# Actual Heading
YAML front matter (--- delimited) at the top must not be mistaken for a heading or HR.
`,we=`---
title: Exclude Front Matter Test
tags: [test, fmex]
---
# Heading A
This front matter should be completely excluded from the output.
`,Te=`---
title: Extract Front Matter Test
tags: [test, fm01]
---
# Heading B
This front matter should be extracted into 01_FrontMatter.md.
`,Ee=`---
title: Prepend Front Matter Test
tags: [test, fm00]
---
# Heading C
This front matter should be prepended to the first output file (default logic, explicitly requested).
`,De=`#NoSpaceHeading
##  Heading with excess leading space
#
### Empty heading body
Malformed markdown edge cases must not crash the process.
`,Oe=`# Large-Volume Parse Stress Test
## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.

## Repeated Section
Content that accumulates heavily below.
`,ke=`#NoSpaceHere
No space after "#" means this is NOT parsed as a heading.
## Valid heading with space
This one is recognised correctly.
`,Ae=`# Valid Heading 1
\`\`\`javascript
const a = 1;
// Code block is never closed before the next heading

# Valid Heading 2
Any heading inside an unclosed code fence is treated as code — not a split point.
`,je=`# Duplicate-resolution test
## Default behaviour
Re-running on the same file auto-creates _v02, _v03 … folders without overwriting.
`,Me=`# Duplicate-resolution test
## Date suffix option
The -d flag appends today's date (e.g. _20260718) to the output folder name.
`,Ne=`# Duplicate-resolution test
## Datetime suffix option
The -t flag appends date + current time (e.g. _20260718_153000) to the folder name.
`,Pe=`# Duplicate-resolution test
## Skip option
The -s flag silently skips execution when the output folder already exists.
`,Fe=`# Duplicate-resolution test
## Force-overwrite option
The -f flag deletes the existing folder first, then writes fresh output.
`,Ie=`# README title

## SECTION001
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION002
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION003
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION004
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION005
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION006
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION007
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION008
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION009
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION010
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION011
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION012
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION013
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION014
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION015
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION016
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION017
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION018
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION019
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION020
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION021
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION022
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION023
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION024
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION025
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION026
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION027
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION028
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION029
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION030
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION031
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION032
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION033
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION034
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION035
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION036
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION037
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION038
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION039
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION040
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION041
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION042
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION043
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION044
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION045
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION046
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION047
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION048
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION049
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION050
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION051
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION052
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION053
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION054
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION055
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION056
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION057
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION058
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION059
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION060
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION061
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION062
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION063
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION064
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION065
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION066
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION067
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION068
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION069
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION070
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION071
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION072
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION073
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION074
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION075
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION076
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION077
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION078
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION079
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION080
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION081
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION082
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION083
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION084
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION085
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION086
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION087
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION088
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION089
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION090
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION091
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION092
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION093
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION094
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION095
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION096
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION097
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION098
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION099
texttexttexttexttexttext
texttexttexttexttexttext

## SECTION100
texttexttexttexttexttext
texttexttexttexttexttext

`,Le=`# Color Theme Integration
## Workbench Colors
- activityBar.background: #202020
- sideBar.background: #181818
- editor.background: #1e1e1e

## Syntax Colors
- comment: #6a9955
- keyword: #569cd6
- string: #ce9178
`,Re=`# ✂️ SPLIST (Overview & Installation)\r
\r
✨ **Try SPLIST instantly in your browser:** [https://splists.github.io/](https://splists.github.io/)\r
\r
## Welcome to SPLIST\r
\r
An ultra-fast, zero-dependency CLI toolset to split a single Markdown or text file into multiple beautifully organized files and automatically generate a dynamic Table of Contents (TOC).\r
\r
Optimized for rapid documentation, editing, and seamless integration with **VS Code**.\r
\r
## 🛠️ Installation & Execution Guide\r
\r
There are two main approaches: **A. Execute Directly (without installing)** and **B. Install (npm install / npm link)**.\r
\r
### 💡 Prerequisite: Difference between npm and npx\r
Before choosing a command, it is helpful to understand the difference between these two roles.\r
\r
- **\`npm\` (Node Package Manager)**\r
  - **M** stands for **Manager**.\r
  - **Role**: A dedicated tool for **"saving and placing"** packages on your PC (or folder).\r
  - *Note: To execute them, you must call them manually in the terminal or use another mechanism.*\r
- **\`npx\` (Node Package Execute)**\r
  - **X** stands for **Execute** (derived from "executable").\r
  - **Role**: A dedicated tool for **"executing"** packages.\r
  - *Note: Even if not installed on your PC, it temporarily downloads the tool from the internet, "executes it immediately", and leaves no garbage behind. It can also find and "execute" locally saved tools.*\r
\r
Choose the best command for your environment and purpose from the options below.\r
\r
---\r
\r
## A. Execute Directly (Without installing)\r
\r
### Try it once immediately without polluting your environment\r
(For those who want to try it or always use the latest version)\r
\r
**【No Installation Required】**\r
\`\`\`bash\r
npx @splists/splist <file>\r
\`\`\`\r
- Always runs the latest version and never pollutes your PC environment.\r
- The command is slightly longer each time (\`npx ~\`).\r
\r
---\r
\r
## B. Install (Install and use)\r
\r
### Use it smoothly every day\r
(For IDE users and personal use)\r
\r
**【Available System-wide (OS)】**\r
\`\`\`bash\r
npm install -g @splists/splist\r
\`\`\`\r
- Installs to a common area across your entire PC.\r
- The short \`splist\` command can be used from anywhere, whether you open a VS Code terminal, Windows Command Prompt (cmd) on your Desktop, or Mac Terminal.\r
\r
### Integrate into your own project\r
(For team development and automation)\r
\r
**【Limited to Current Folder】**\r
\`\`\`bash\r
npm install @splists/splist\r
\`\`\`\r
- This is the basic command displayed on the official npm website.\r
- \`npm i @splists/splist\` (\`i\` is short for \`install\`. It means \`npm install @splists/splist\`.)\r
- Installs only inside the folder you currently have open in VS Code, etc. (\`node_modules\`).\r
- In other cases, if you just type \`splist\` in the terminal, it cannot find it and **results in a "command not found" error**.\r
- **Execution Method 1**: Prefix it with npx: \`npx splist\` (npx will automatically search inside the folder).\r
- **Execution Method 2**: Register it in your \`package.json\` scripts and call it with \`npm run\`.\r
\r
### Try unreleased latest features as fast as possible\r
(For Early Adopters)\r
\r
\`\`\`bash\r
npm install -g github:splists/splist\r
\`\`\`\r
- By replacing the \`@splists/splist\` part of the above command with \`github:splists/splist\`, you can directly install the latest code on GitHub before it is released on npm.\r
\r
### Develop and extend the source code\r
(For Contributors)\r
\r
\`\`\`bash\r
npm link\r
\`\`\`\r
*(Execute inside the source code folder)*\r
- You must download (clone or fork) the repository from GitHub in advance.\r
  \`git clone https://github.com/1abcdefggs/splist.git\`\r
  \`cd splist\`\r
- When you run \`npm link\` inside the above folder, any code changes will immediately reflect in your local \`splist\` command without reinstalling (for developers only).\r
\r
## 🔄 Migration Guide (v1 to v2)\r
\r
SPLIST has been updated to v2, evolving into a more intuitive and smarter command structure!\r
\r
\`\`\`diff\r
- v1 old spec: splist list memo.md\r
+ v2 new spec: splist memo.md list\r
\`\`\`\r
\r
💡 **Incredibly Convenient "Smart Defaults" Feature**\r
From v2, if the target file is **\`.md\`**, omitting the command will automatically execute \`list\` (logical organization).\r
Conversely, if the file is **\`.txt\`**, it will automatically execute \`sp\` (physical cut).\r
In other words, simply typing \`splist memo.md\` will initiate the perfect split!\r
\r
---\r
\r
## 🎯 The Ultimate Tutorial: Split This Manual!\r
\r
Want to see the magic right now? **Run the \`splist\` command on this very \`USAGE.md\` (or \`README.md\`) file!**\r
\r
\`\`\`bash\r
splist USAGE.md\r
# or\r
splist README.md\r
\`\`\`\r
\r
When you do this, SPLIST will automatically extract the complete text into beautiful folders and files. Try it now!\r
\r
---\r
\r
## 📖 Terminology and Worldview\r
\r
SPLIST provides the experience of "magically organizing" massive text data, not just merely splitting files. We have unique terminology to express this worldview.\r
\r
* **Raw:** Massive, hard-to-read text data before it has been processed by SPLIST.\r
* **Splisted:** The completed state where data has been beautifully split, organized, and "magically transformed" by SPLIST. Just like saying "Googled" for searching on Google, the terminal will display a celebratory message **\`🎉 Splisted!\`** upon successful completion as the ultimate result.\r
* **Output Folder Icons:**\r
  * **\`✂️\` (Scissors):** Attached to folders that were "physically cut" using the \`sp\` command.\r
  * **\`🔢\` (Numbers):** Attached to folders that were "logically organized and sequentially numbered" using the \`list\` command.\r
\r
---\r
\r
# What This Tool Can Do\r
\r
## Overview\r
\r
💡 **Quick Tip:** If you're opening this file in VS Code, press \`Ctrl + Shift + V\` (Mac: \`Cmd + Shift + V\`) right now to read the manual in a beautiful preview screen!\r
\r
Welcome to the magical experience of SPLIST!\r
SPLIST is a powerful CLI tool that instantly reconstructs massive, hard-to-read text data and Markdown files into beautiful structures that anyone can read intuitively.\r
\r
**Have you ever experienced this?**\r
* A single document is so long it feels like scrolling hell.\r
* You hastily copy-pasted info into Notepad to organize later, but now it's too long to find anything.\r
* You're tired of manually repeating "select range, copy, create new file, paste, save as...".\r
* While writing a massive Markdown document, you want to focus on fleshing out one specific chapter at a time.\r
\r
**"I just want to split this long text into pieces to work on and manage it!"**\r
This tool was born from the developer's own intense frustration with this exact problem. If your document is cleanly written with Markdown headings, you can split it beautifully with a single command.\r
\r
## Forcibly Cut at Specific Locations with Scissors\r
\r
When you have a clear place where you want to "sever the text before and after"—such as system logs with no Markdown structure, scene changes in a novel, or exported chat logs—the forced physical cut feature shines.\r
Just place \`✂️\` or a custom marker at the beginning of a line, and the file will be cleanly severed at that exact boundary.\r
\r
## Split Beautifully by Markdown Headings\r
\r
**Are you amazed by the beautiful folder structure of this manual?**\r
\r
Actually, the "hierarchical manual" you are currently looking at in your Explorer (or IDE) is a live example (demo) proving the power of SPLIST.\r
Originally, it was just a single, long, hard-to-read text file. But SPLIST automatically detected \`#\` (H1) as folders and \`##\` (H2) as files in the text, instantly constructing this beautiful tree structure.\r
\r
# 💻 COMMAND\r
\r
## ✂️ splist Targetfilename sp\r
\r
The command to execute a "Forced Physical Cut".\r
Regardless of heading structure, it severs the text before and after at locations marked with the scissors symbol (\`✂️\`), \`cut\`, or a custom marker (e.g., \`===\`) written in the file.\r
**※ Collision avoidance options like \`-d\` and \`-s\` can be fully utilized with this command just like \`splist Targetfilename list\`!**\r
\r
### 💡 Features and Usage (Validation Demo Links)\r
- **Basic single split using standard markers (✂️, V, v, cut)**: Validation File [[01_sp_showcase_single_cut_default.md](file:///c:/splist/demo_cases/success_cases/01_sp_showcase_single_cut_default.md)]\r
- **Simultaneous split with different standard markers at multiple locations**: Validation File [[02_sp_showcase_multi_cut_default.md](file:///c:/splist/demo_cases/success_cases/02_sp_showcase_multi_cut_default.md)]\r
- **Split using a user-specified custom marker**: Validation File [[03_sp_showcase_custom_marker_opt.md](file:///c:/splist/demo_cases/success_cases/03_sp_showcase_custom_marker_opt.md)]\r
- **Feature to keep trailing text after the marker at the top of the next file**: Validation File [[04_sp_showcase_marker_trailing_text_default.md](file:///c:/splist/demo_cases/success_cases/04_sp_showcase_marker_trailing_text_default.md)]\r
- **Split without sequential numbers using the un option**: Validation File [[05_sp_option_un_opt.md](file:///c:/splist/demo_cases/success_cases/05_sp_option_un_opt.md)]\r
- **Auto-generate TOC using the -toc option**: Validation File [[06_sp_option_toc_opt.md](file:///c:/splist/demo_cases/success_cases/06_sp_option_toc_opt.md)]\r
\r
### ✂️ Physical Cut Image\r
\r
Even for text without Markdown headings like system logs or novels, you can cleanly sever them at any marker location.\r
\r
\`\`\`text\r
(Original File: target_file.txt)\r
This will be the first file.\r
Prologue text...\r
✂️\r
This will be the second file.\r
Chapter 1 text...\r
cut\r
This will be the third file.\r
Chapter 2 text...\r
\`\`\`\r
\r
#### 📂 Output Files (Image)\r
\r
\`\`\`text\r
📂 Output Folder/\r
├── 📄 01_Part.txt  (First block)\r
├── 📄 02_Part.txt  (Second block)\r
└── 📄 03_Part.txt  (Third block)\r
\`\`\`\r
\r
💡 **Specifying Custom Markers**\r
By specifying a symbol at the end like \`splist target.txt sp "==="\`, you can split using that custom symbol instead of the standard scissors. You can even chain options like \`splist target.txt sp "===" -d\`.\r
\r
## 💻 splist Targetfilename list (or omit)\r
\r
The command to execute "Smart Logical Organization".\r
It reads the target Markdown file and automatically splits it into folders and files according to the \`#\` and \`##\` heading structure.\r
\r
### 💡 Features and Usage (Validation Demo Links)\r
- **Basic split for a flat structure with only H1s**: Validation File [[16_list_showcase_flat_h1_default.md](file:///c:/splist/demo_cases/success_cases/16_list_showcase_flat_h1_default.md)]\r
- **Standard nested configuration of # (Folder) and ## (File)**: Validation File [[17_list_showcase_nested_standard_default.md](file:///c:/splist/demo_cases/success_cases/17_list_showcase_nested_standard_default.md)]\r
- **Cases with multiple H2s under a single H1**: Validation File [[18_list_showcase_nested_single_default.md](file:///c:/splist/demo_cases/success_cases/18_list_showcase_nested_single_default.md)]\r
- **Typing support conversion for v (H1) / vv (H2)**: Validation File [[19_list_showcase_typing_support_default.md](file:///c:/splist/demo_cases/success_cases/19_list_showcase_typing_support_default.md)]\r
- **Typing support conversion for vvv (H3)**: Validation File [[20_list_showcase_typing_support_vvv_default.md](file:///c:/splist/demo_cases/success_cases/20_list_showcase_typing_support_vvv_default.md)]\r
- **Split specifying custom depths like "###"**: Validation File [[21_list_option_custom_depth_opt.md](file:///c:/splist/demo_cases/success_cases/21_list_option_custom_depth_opt.md)]\r
- **keep option (maintain heading levels)**: Validation File [[22_list_option_keep_opt.md](file:///c:/splist/demo_cases/success_cases/22_list_option_keep_opt.md)]\r
- **Split without sequential numbers using the un option**: Validation File [[23_list_option_un_opt.md](file:///c:/splist/demo_cases/success_cases/23_list_option_un_opt.md)]\r
- **Auto-generate a structural TOC file using the -toc option**: Validation File [[24_list_option_toc_opt.md](file:///c:/splist/demo_cases/success_cases/24_list_option_toc_opt.md)]\r
- **Correction feature where H2 automatically promotes to H1 after splitting**: Validation File [[25_list_option_heading_promotion_default.md](file:///c:/splist/demo_cases/success_cases/25_list_option_heading_promotion_default.md)]\r
- **Exclude YAML Front Matter using the -fmex option**: Validation File [[32a_list_option_front_matter_fmex.md](file:///c:/splist/demo_cases/success_cases/32a_list_option_front_matter_fmex.md)]\r
- **Extract YAML Front Matter independently (start from 01) using the -fm01 option**: Validation File [[32b_list_option_front_matter_fm01.md](file:///c:/splist/demo_cases/success_cases/32b_list_option_front_matter_fm01.md)]\r
- **Extract YAML Front Matter rationally (start from 00 / Default) using the -fm00 option**: Validation File [[32c_list_option_front_matter_fm00.md](file:///c:/splist/demo_cases/success_cases/32c_list_option_front_matter_fm00.md)]\r
\r
💡 **Execution is Fastest and Surest via Drag & Drop!**\r
Manually typing an absolute file path (\`C:\\...\`) on the keyboard is highly prone to typos and missing spaces, making it very tedious.\r
From the VS Code Explorer (left sidebar), **drag & drop (D&D) the file you want to split directly into the terminal**. The exact file path will be auto-populated instantly!\r
\r
### 📂 Collision Avoidance and Versioning (New Feature!)\r
\r
SPLIST comes standard with **"safe version control per directory (folder)"**. No matter how many times you split the same file, existing files will never be overwritten and lost!\r
\r
By appending the following options at the end of the command, you can freely control the behavior:\r
* **(No specify)**: Safely creates new folders with sequential suffixes like \`_v02\`, \`_v03\`. Validation File [[37_common_option_conflict_default_default.md](file:///c:/splist/demo_cases/success_cases/37_common_option_conflict_default_default.md)]\r
* **\`-d\` (Date)**: Adds today's date to the folder name (e.g., \`_20260716\`). Validation File [[38_common_option_conflict_date_opt.md](file:///c:/splist/demo_cases/success_cases/38_common_option_conflict_date_opt.md)]\r
* **\`-t\` (Time)**: Adds the current time to the folder name (e.g., \`_20260716_153000\`). Validation File [[39_common_option_conflict_time_opt.md](file:///c:/splist/demo_cases/success_cases/39_common_option_conflict_time_opt.md)]\r
* **\`-s\` (Skip)**: If the folder already exists, it safely skips without overwriting. Validation File [[40_common_option_conflict_skip_opt.md](file:///c:/splist/demo_cases/success_cases/40_common_option_conflict_skip_opt.md)]\r
* **\`-f\` (Force)**: [WARNING] Forcibly overwrites (resets) existing folders. Validation File [[41_common_option_conflict_force_opt.md](file:///c:/splist/demo_cases/success_cases/41_common_option_conflict_force_opt.md)]\r
\r
### 📝 Front Matter Processing Options\r
\r
You can control how the YAML Front Matter (metadata enclosed by \`---\`) at the top of a Markdown file is processed.\r
\r
* **(No specify) or \`-fm00\`**: Extracts the Front Matter independently as \`00_FrontMatter.md\`. H1 and intro text will become \`01_\`, resulting in rational classification.\r
* **\`-fm01\`**: Extracts the Front Matter as \`01_FrontMatter.md\`, making the start of the body text \`02_\`.\r
* **\`-fmex\`**: Completely excludes (Exclude) the Front Matter and outputs only the body text.\r
\r
### 📂 Output Management Philosophy: Switching Between Safety and Efficiency\r
\r
By default, SPLIST is designed with a **Safety-First architecture** that utilizes "version control (adding sequential numbers)" to prevent accidentally erasing existing files. However, depending on your development cycle or preferences, there may be times you want to customize this behavior.\r
\r
Choose from the following 3 management strategies based on your use case:\r
\r
#### 1. [Standard] Keep History (Default)\r
When you run \`splist target.md list\` (or simply \`splist target.md\`), it assigns sequential suffixes like \`_v02\` or \`_v03\` to prevent conflicting with existing folders.\r
*   **Use Case:** When you want to retain past backups as needed.\r
*   **Command:** \`splist target.md\`\r
\r
#### 2. [Safe] Protect Existing (Skip)\r
If a folder already exists, **SPLIST does nothing.** This completely eliminates the risk of accidentally overwriting files you have already hand-tweaked.\r
*   **Use Case:** When you've already made fine adjustments manually and want to prevent auto-generated output from destroying your work.\r
*   **Command:** \`splist target.md -s\`\r
\r
#### 3. [Aggressive] Destructive Overwrite (Force)\r
Forcibly overwrites the folder if it exists. Previous files will be permanently deleted.\r
*   **Use Case:** During extreme trial-and-error where you modify the Raw data, split, check the output, delete it, and try again over and over.\r
*   **Command:** \`splist target.md -f\` (Use with caution)\r
\r
### 📑 Image of Heading Structure\r
\r
You are likely familiar with text written with hashtags (\`#\`) in Markdown files. They serve the same role as \`h1\` through \`h6\` tags in normal websites (HTML).\r
\r
\`\`\`markdown\r
# Title\r
\r
## Heading h2\r
Body text body text body text\r
Body text body text body text\r
\r
## Heading h2\r
Body text body text body text\r
\`\`\`\r
\r
#### 📂 Split Folder Tree (Image)\r
\r
\`\`\`text\r
📂 01_Title/\r
├── 📄 01_Heading_h2.md\r
├── 📄 02_Heading_h2.md   ← (※ "### Heading h3" will be preserved inside this)\r
└── 📄 03_Heading_h2.md\r
\`\`\`\r
\r
In standard Markdown, H1 (\`#\`) corresponds to the article title, so it's typically used only once.\r
Therefore, each section within the body usually uses headings up to \`##\` or \`###\`.\r
However, **this tool splits at the \`##\` (H2) unit by default**. Splitting down to \`###\` could result in pieces that are too fragmented.\r
\r
💡 **Over 50 Experimental Playground Files to Try**\r
The SPLIST repository includes 53 practical test data cases covering extreme conditions and convenient usages. Running \`npm run demo\` in the root directory generates all demo files into \`demo_cases/demo_cases_raw/\`. Drag & drop these files directly into your VS Code terminal and experience the magic of splitting right now!\r
\r
# When You Want to Forcibly Sever by Specified Symbols\r
\r
## Cut with the Standard Scissors Symbol\r
\r
Simply writing \`✂️\` or \`cut\` at the beginning of a line establishes a boundary to split the file before and after it.\r
The resulting split files are automatically assigned sequential numbers like \`01_Part.md\`. Unnecessary blank lines before and after are cleanly trimmed, and the scissors symbol itself is neatly removed from the output files.\r
\r
## Cut by Specifying Custom Characters or Symbols\r
\r
When you want to use a "custom symbol" as the cut criteria—such as for scene transitions in a novel, chat logs, or system output data—you can specify a custom marker.\r
\r
For instance, specifying \`===\` will detect every location where a line starts with \`===\` and forcefully split there. You can specify any string you like, including patterns common in novels like \`***\` or \`◆◆◆\`, log files' \`[EOF]\`, or chat logs' \`[Date/Time]\`.\r
\r
**Execution Example:** \`splist target_file.txt sp "==="\`\r
\r
## 🛠️ Secret Trick: Hardcoding Your Default Cut Symbol\r
\r
For heavy users who find it tedious to specify \`"==="\` or \`"◆◆◆"\` as an option argument every time, there is a secret trick to make your own custom scissors the default.\r
\r
Open SPLIST's core logic file \`src/commands/sp_default.js\`, directly edit the constant for the regex cut marker at the beginning of lines to your preferred symbol, and save. Simply by running \`splist target.txt\` without arguments (thanks to the \`.txt\` smart default), you'll be able to tear through texts with your very own custom marker anytime.\r
\r
# When You Want to Organize Using Heading Structure\r
\r
## The Classic Pattern Split\r
\r
The most fundamental usage is splitting meeting minutes or manuals composed of \`#\` and \`##\`.\r
When executed, the tool creates a "Parent Folder" from the topmost \`#\` (H1), carves out files for each \`##\` (H2) within it, and tucks them neatly inside the folder.\r
Furthermore, it automatically prepends sequential numbers like \`01_\` to all files and folders so they naturally line up in the order of the original text.\r
\r
### 🌟 Real-World Data Split Example\r
\r
As a practical validation, when the authentic VS Code official documentation draft \`vscode-docs/color-theme.md\` (published by Microsoft) was fed into SPLIST, it instantly reconstructed into the following magical hierarchical structure.\r
\r
**Folder Tree After SPLIST Execution:**\r
\r
\`\`\`text\r
📂 🔢color-theme/\r
└── 📁 03_Color Theme/\r
    ├── 📄 00_Overview.md                               (Intro text right below heading)\r
    ├── 📄 01_Workbench colors.md                       (Each section is individually)\r
    ├── 📄 02_Syntax colors.md                          (carved into independent files)\r
    ├── 📄 03_Semantic colors.md\r
    └── 📄 04_Create a new Color Theme.md ... (continues)\r
\`\`\`\r
\r
No more endless, manual copying, pasting, and saving new files. Raw technical documents are instantly reborn as beautiful assets.\r
\r
## Maintaining Deep Hierarchies and Complex Structures\r
\r
**Auto-Correction of Markdown Syntax and Bypassing It (\`keep\` Option)**\r
\r
Generally, in Markdown, \`#\` (H1) is used as the overall title, and \`##\` (H2) as the heading for each section. When SPLIST carves out \`##\` sections into separate files, leaving them as-is would result in "files without an H1 (grammatically unnatural)". Therefore, SPLIST has a default **correction feature that automatically converts (promotes) \`##\` to \`#\` when saving**.\r
\r
**Execution Example:** \`splist target.md keep\`\r
※ If you specify \`keep\`, auto-promotion is disabled, and the extraction remains pure, fully maintaining the original \`##\` or \`###\` hierarchies.\r
\r
## Removing Sequential Numbers / Extracting Specific Hierarchies\r
\r
You can fine-tune SPLIST's behavior even further to match your goals.\r
\r
### 🔢 1. Remove Sequential Numbers (\`un\` Option)\r
\r
Disables the sequential numbers like \`01_\` that are prepended by default.\r
Perfect for splitting "dictionary data to be sorted alphabetically" or "API documentation where you want filenames to match function names exactly."\r
\r
**Execution Example:** \`splist dictionary.md un\`\r
\r
### 🔍 2. Split at Arbitrary Depth (\`"###"\` Option)\r
\r
The default splitting criteria is \`##\` (H2), but you can target deeper hierarchies.\r
For example, by specifying \`"###"\`, you can finely dice the files down to the third-tier subheading level.\r
\r
## 💡 Typing Support to Accelerate Writing\r
\r
Typing \`#\`—the staple of Markdown—on a PC keyboard requires stretching fingers (like Shift + 3), which is a significant typing burden.\r
Thus, SPLIST comes standard with smart input shortcuts designed to skyrocket your document writing speed. If you place the following at the beginning of a line while writing, they will automatically be converted to correct Markdown symbols upon processing.\r
\r
* Type \`v \` (lowercase v + half-width space) at start of line = **\`# \` (H1)**\r
* Type \`vv \` at start of line = **\`## \` (H2)**\r
\r
With hardly any movement from the home position, you can blast through building heading structures just by gliding over the keyboard.\r
\r
# Edge Cases and Limit Test Results\r
\r
## Safe Design of Forced Cut (\`sp\`) and Empirical Results\r
\r
Because it handles text without a structure like Markdown, powerful guardrails are implemented to prevent unexpected misfires.\r
\r
- **Does not process files with zero markers**: Validation File [[11_sp_safety_no_cuts_default.md](file:///c:/splist/demo_cases/success_cases/11_sp_safety_no_cuts_default.md)]\r
- **Does not process even if line 1 is a marker**: Validation File [[08_sp_safety_start_with_cut_default.md](file:///c:/splist/demo_cases/success_cases/08_sp_safety_start_with_cut_default.md)]\r
- **Does not process even if the last line is a marker**: Validation File [[09_sp_safety_end_with_cut_default.md](file:///c:/splist/demo_cases/success_cases/09_sp_safety_end_with_cut_default.md)]\r
- **Ignores consecutive markers**: Validation File [[07_sp_safety_consecutive_cuts_default.md](file:///c:/splist/demo_cases/success_cases/07_sp_safety_consecutive_cuts_default.md)]\r
- **Ignores markers mid-sentence**: Validation File [[10_sp_safety_false_scissors_default.md](file:///c:/splist/demo_cases/success_cases/10_sp_safety_false_scissors_default.md)]\r
- **Processes markers inside code blocks**: Validation File [[12_sp_safety_cut_in_codeblock_default.md](file:///c:/splist/demo_cases/success_cases/12_sp_safety_cut_in_codeblock_default.md)]\r
- **Removes invalid characters / Trims overly long headings to 50 chars**: Validation File [[13_sp_safety_long_and_invalid_chars_default.md](file:///c:/splist/demo_cases/success_cases/13_sp_safety_long_and_invalid_chars_default.md)]\r
\r
### 1. Ignoring Cut Marks Mid-Sentence (Inline)\r
\r
It absolutely will not split at \`===\` or \`✂️\` accidentally used mid-sentence in a chat log or conversation. To prevent misfires, a safety check ensures it triggers ONLY when placed independently at the "start of a line."\r
Validation Anti-Pattern [[15_sp_warn_inline_cut_default.md](file:///c:/splist/demo_cases/success_cases/15_sp_warn_inline_cut_default.md)]\r
\r
### 2. Preventing Consecutive Markers and Empty File Generation\r
\r
If scissors symbols or \`cut\`s are placed consecutively over multiple lines, or if there are useless markers at the very beginning or end of a file, the tool automatically detects and smartly skips them. This prevents polluting the disk by mass-generating empty "0-byte garbage files."\r
\r
---\r
## Safe Design of Logical Organize (\`list\`) and Empirical Results\r
\r
To prevent data destruction or errors unintended by the user, a robust safety design has cleared limit tests utilizing various edge cases and raw real-world data.\r
\r
- **Carves out document intros before the first H2 into an Overview**: Validation File [[26_list_safety_overview_logic_default.md](file:///c:/splist/demo_cases/success_cases/26_list_safety_overview_logic_default.md)]\r
- **Auto-cleanses invalid chars, preserves surrogate pair emojis, trims at 50 chars**: Validation File [[27_list_safety_naming_limit_default.md](file:///c:/splist/demo_cases/success_cases/27_list_safety_naming_limit_default.md)]\r
- **Validates deep nesting up to H6 level remains intact on output**: Validation File [[28_list_safety_deep_nesting_default.md](file:///c:/splist/demo_cases/success_cases/28_list_safety_deep_nesting_default.md)]\r
- **Collision avoidance for identical heading names (safe save via renaming)**: Validation File [[29_list_safety_duplicate_headings_default.md](file:///c:/splist/demo_cases/success_cases/29_list_safety_duplicate_headings_default.md)]\r
- **Validates list bullets and other Markdown elements do not disrupt the heading parser**: Validation File [[30_list_safety_mixed_markers_default.md](file:///c:/splist/demo_cases/success_cases/30_list_safety_mixed_markers_default.md)]\r
- **Validates completely ignoring fake headings inside code blocks**: Validation File [[31_list_safety_codeblock_trap_default.md](file:///c:/splist/demo_cases/success_cases/31_list_safety_codeblock_trap_default.md)]\r
- **Validates ignoring YAML Front Matter (---)**: Validation File [[32_list_safety_front_matter_default.md](file:///c:/splist/demo_cases/success_cases/32_list_safety_front_matter_default.md)]\r
- **Safe fallback processing for invalid markdown space headings, etc.**: Validation File [[33_list_safety_bad_markdown_default.md](file:///c:/splist/demo_cases/success_cases/33_list_safety_bad_markdown_default.md)]\r
- **Structural parsing load test on massive volume Markdown**: Validation File [[34_list_safety_massive_volume_default.md](file:///c:/splist/demo_cases/success_cases/34_list_safety_massive_volume_default.md)]\r
- **Warning Case: Ignores headings missing a space**: Validation File [[35_list_warn_no_space_heading_default.md](file:///c:/splist/demo_cases/success_cases/35_list_warn_no_space_heading_default.md)]\r
- **Warning Case: Prevents heading loss caused by unclosed code blocks**: Validation File [[36_list_warn_unclosed_codeblock_default.md](file:///c:/splist/demo_cases/success_cases/36_list_warn_unclosed_codeblock_default.md)]\r
\r
### 1. Completely Ignoring "Fake Headings" Inside Code Blocks\r
\r
Prevents erroneously generating folders by mistaking \`# Comments\` or \`## Samples\` written within program source code or Markdown tutorials as structural headings. Anything inside a code block wrapped by triple backticks is treated as a total safe zone and parsing is skipped.\r
\r
### 2. Auto-Cleansing of Invalid Characters in Filenames\r
\r
Even if a heading contains forbidden NG characters that OSes reject as filenames like \`\\ / : * ? " < > |\`, the system will not crash. It automatically removes/replaces them, generating and saving a safe filename.\r
\r
### 3. Emoji Support and Character Limit\r
\r
Even if special surrogate-pair Kanji or complex emojis exist in a heading, it accurately determines character boundaries to prevent garbling, smartly cutting at a safe maximum of 50 characters to avoid exceeding OS limits.\r
\r
### 💡 Integration Cases\r
- **Structural parsing proof on VS Code official specs (mixed YAML/code block data)**: Validation File [[42_integration_vscode_color_theme_default.md](file:///c:/splist/demo_cases/success_cases/42_integration_vscode_color_theme_default.md)]\r
- **Self-build split proof on SPLIST Official Manual**: Validation File [[43_integration_official_manual_default.md](file:///c:/splist/demo_cases/success_cases/43_integration_official_manual_default.md)]\r
\r
### 💡 Operations Become Dramatically Easier\r
\r
Now that you have these independent Markdown files, you can open them directly in VS Code, enjoying a comfortable writing and editing experience while viewing previews.\r
Once you've finished tweaking the text, just toss the file directly into the \`splist\` engine via the terminal, and your usual beautiful hierarchical folders will be completed instantly.\r
\r
\r
\r
\r
\r
* **Empirical Record:** During the validation of the aforementioned VS Code official documentation (\`color-theme.md\`), it brilliantly ignored all hashtag headings inside the massive amount of Markdown code samples (\`\`\`markdown ...\`\`\`) contained within, succeeding in extracting 100% accurately ONLY the true table of contents structure of the document itself.`,ze=`# Open UI Charter
### Background
Since the beginning, web browsers have provided form controls.
### Mission
Our mission is to standardise UI components.
`,Be=`# Sentinel Title
Welcome to Microsoft Sentinel.
# Sentinel Resources
* Documentation link
# Sentinel Contribution guidelines
This project welcomes contributions.
## Add contributions
How to contribute.
`,Ve=`# Extension Guide
This is an overview.
## [API Reference](https://code.visualstudio.com/api)
Link inside heading.
## The \`config\` object
Code quotes inside heading.
## **Bold** and *Italic*
Formatting inside heading.
`,He=`This is a document without any headings.
It just contains some plain text.
And maybe some lists or code blocks.
`,Ue=`#### [ Main Header Banner ]
# Open Brand Spec
Define the brand spec.
## Design specs
Dimensions and sizes.
`,We=`## v8
This version is skipped.
## 7.3.8
A big thanks to contributors.
### @mui/material@7.3.8
Details here.
`,Ge=`# SPLIST (split & list) \r
[![Org](https://img.shields.io/badge/Org-splists-93C5FD?style=flat-square&logo=github&logoColor=black&labelColor=white)](https://github.com/splists)\r
[![Repo](https://img.shields.io/badge/Repo-splists%2Fsplist-D1D5DB?style=flat-square&labelColor=white)](https://github.com/splists/splist)\r
[![Ver](https://img.shields.io/github/v/release/splists/splist.svg?label=Ver&color=D1D5DB&style=flat-square&labelColor=white)](https://github.com/splists/splist/releases)\r
![License: MIT](https://img.shields.io/badge/License-MIT-FDE047?style=flat-square&labelColor=white)\r
[![GitHub Created At](https://img.shields.io/github/created-at/splists/splist.svg?color=D1D5DB&style=flat-square&labelColor=white)](https://github.com/splists/splist)[![GitHub Release Date](https://img.shields.io/github/release-date/splists/splist.svg?color=D1D5DB&style=flat-square&labelColor=white)](https://github.com/splists/splist/releases)\r
\r
SPLIST splits long documents into separate files and reconstructs them.🌐 Split output results https://splists.github.io\r
\r
[![npm version](https://img.shields.io/npm/v/@splists/splist.svg?color=93C5FD&style=flat-square&logo=npm&logoColor=black&labelColor=white)](https://www.npmjs.com/package/@splists/splist)\r
[![npm downloads](https://img.shields.io/npm/dt/@splists/splist.svg?color=86EFAC&style=flat-square&logo=npm&logoColor=black&labelColor=white)](https://www.npmjs.com/package/@splists/splist)\r
[![Node.js](https://img.shields.io/node/v/@splists/splist.svg?color=86EFAC&style=flat-square&logo=nodedotjs&logoColor=black&labelColor=white)](https://www.npmjs.com/package/@splists/splist)\r
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-86EFAC?style=flat-square&labelColor=white)\r
[![Included Files](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Funpkg.com%2F%40splists%2Fsplist%2Fpackage.json&query=%24.files.length&label=Included%20Files&color=93C5FD&style=flat-square&logo=npm&logoColor=black&labelColor=white)](https://unpkg.com/@splists/splist/package.json)\r
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@splists/splist.svg?color=93C5FD&style=flat-square&labelColor=white)](https://bundlephobia.com/package/@splists/splist)\r
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/@splists/splist.svg?color=93C5FD&style=flat-square&logo=npm&logoColor=black&labelColor=white)](https://www.npmjs.com/package/@splists/splist)\r
\r
\`\`\`bash\r
npm i @splists/splist \r
\`\`\`\r
\r
> 📖 **[Official Manual (USAGE.md)](https://github.com/splists/splist/blob/main/USAGE.md)** - *Detailed specifications and commands*\r
\r
## Overview\r
Splitting large Markdown or text files into a table of contents.\r
\r
<p align="left">\r
  <img src="assets/splist_demo-001.png" alt="Long Document Example" height="280" style="margin-right: 15px;">\r
  <img src="assets/splist-gif.gif" alt="Splist Demo" height="280">\r
</p>\r
\r
It takes documents that have fallen into "scrolling hell" and safely, instantaneously carves them into separate files based on headings (\`#\`) or dividing emojis (\`✂️\`).\r
\r
### Before: A single massive file (Raw)\r
\r
Before: A single massive file (Raw). Divided into ## units using a typical Markdown structure.\r
\r
\`\`\`markdown\r
  # My Project\r
  ## SECTION001\r
  ~(long text)~\r
  ## SECTION099\r
  ## SECTION100\r
\`\`\`\r
\r
### After: Auto-organized folders (Splisted!)\r
\r
- The original file name with a \`✂️\` prefix becomes the output directory name (e.g., \`✂️My_Project\`).\r
- The heading in the original text becomes the file name.\r
- A sequential number is added to the prefix of the file name.\r
\r
\`\`\`text\r
✂️My_Project/\r
├── 01_SECTION001.md\r
├── ...\r
├── 09_SECTION099.md\r
└── 10_SECTION100.md\r
\`\`\`\r
\r
### 🤖 LLM Prompt (Copy & Paste)\r
You can also copy the prompt below and paste it into your LLM to use with an AI assistant.\r
<details>\r
<summary>Please click here to open it.</summary>\r
\r
\`\`\`text\r
I want to split a long document into smaller, organized files. \r
Please use the \`splist\` CLI tool available in my workspace.\r
\r
Here are the basic commands:\r
- \`splist <file.md> list\` : Automatically split the Markdown file by its headings (H1, H2, etc.) into sequential files inside a new folder.\r
- \`splist <file.md> sp\` : Split the file physically using custom cut markers (e.g. ✂️, CUT, V) placed in the document.\r
\r
Please read the target file, decide the best splitting strategy (list or sp), and run the \`splist\` command for me.\r
\`\`\`\r
</details>\r
\r
---\r
Chat example is here.\r
\r
<img src="assets/splist-demo-ai.png" alt="AI Agent Demo" width="30%">\r
\r
## 🛠️ Installation & Execution Guide\r
\r
There are two main approaches: **A. Execute Directly (without installing)** and **B. Install (npm install / npm link)**.\r
\r
### 💡 Prerequisite: Difference between npm and npx\r
Before choosing a command, it is helpful to understand the difference between these two roles.\r
\r
- **\`npm\` (Node Package Manager)**\r
  - **M** stands for **Manager**.\r
  - **Role**: A dedicated tool for **"saving and placing"** packages on your PC (or folder).\r
  - *Note: To execute them, you must call them manually in the terminal or use another mechanism.*\r
- **\`npx\` (Node Package Execute)**\r
  - **X** stands for **Execute** (derived from "executable").\r
  - **Role**: A dedicated tool for **"executing"** packages.\r
  - *Note: Even if not installed on your PC, it temporarily downloads the tool from the internet, "executes it immediately", and leaves no garbage behind. It can also find and "execute" locally saved tools.*\r
\r
Choose the best command for your environment and purpose from the options below.\r
\r
---\r
\r
## A. Execute Directly (Without installing)\r
\r
### Try it once immediately without polluting your environment\r
(For those who want to try it or always use the latest version)\r
\r
**【No Installation Required】**\r
\`\`\`bash\r
npx @splists/splist <file>\r
\`\`\`\r
- Always runs the latest version and never pollutes your PC environment.\r
- The command is slightly longer each time (\`npx ~\`).\r
\r
---\r
\r
## B. Install (Install and use)\r
\r
### Use it smoothly every day\r
(For IDE users and personal use)\r
\r
**【Available System-wide (OS)】**\r
\`\`\`bash\r
npm install -g @splists/splist\r
\`\`\`\r
- Installs to a common area across your entire PC.\r
- The short \`splist\` command can be used from anywhere, whether you open a VS Code terminal, Windows Command Prompt (cmd) on your Desktop, or Mac Terminal.\r
- *Note: This package is dual-published and also available via GitHub Packages (\`npm.pkg.github.com\`) if preferred.*\r
\r
### Integrate into your own project\r
(For team development and automation)\r
\r
**【Limited to Current Folder】**\r
\`\`\`bash\r
npm install @splists/splist\r
\`\`\`\r
- This is the basic command displayed on the official npm website.\r
- \`npm i @splists/splist\` (\`i\` is short for \`install\`. It means \`npm install @splists/splist\`.)\r
- Installs only inside the folder you currently have open in VS Code, etc. (\`node_modules\`).\r
- In other cases, if you just type \`splist\` in the terminal, it cannot find it and **results in a "command not found" error**.\r
- **Execution Method 1**: Prefix it with npx: \`npx splist\` (npx will automatically search inside the folder).\r
- **Execution Method 2**: Register it in your \`package.json\` scripts and call it with \`npm run\`.\r
\r
### Try unreleased latest features as fast as possible\r
(For Early Adopters)\r
\r
\`\`\`bash\r
npm install -g github:splists/splist\r
\`\`\`\r
- By replacing the \`@splists/splist\` part of the above command with \`github:splists/splist\`, you can directly install the latest code on GitHub before it is released on npm.\r
\r
### Develop and extend the source code\r
(For Contributors)\r
\r
\`\`\`bash\r
npm link\r
\`\`\`\r
*(Execute inside the source code folder)*\r
- You must download (clone or fork) the repository from GitHub in advance.\r
  \`git clone https://github.com/1abcdefggs/splist.git\`\r
  \`cd splist\`\r
- When you run \`npm link\` inside the above folder, any code changes will immediately reflect in your local \`splist\` command without reinstalling (for developers only).\r
\r
Setup is now complete!\r
\r
---\r
\r
## 🌐 Web / Explorer Version (Browser GUI)\r
\r
Prefer a graphical interface over the command line? SPLIST offers a zero-dependency Web Application that runs entirely in your browser!\r
\r
### Running Locally:\r
1. Start the local development server:\r
   \`\`\`bash\r
   npm --prefix react run dev\r
   \`\`\`\r
2. Open your browser at the displayed local URL (e.g., \`http://localhost:5173\`).\r
\r
### Features in the Web App:\r
* **Drag & Drop**: Simply drop your \`.md\` or \`.txt\` file into the browser window.\r
* **Interactive Preview**: Instantly preview how the document will be split into folders and files before downloading.\r
* **Markdown Rendering**: Toggle between raw code and a rendered Markdown preview (VS Code style).\r
* **Zero Server Uploads**: Processing happens 100% locally in your browser using Virtual File System mocks—your private documents never leave your machine!\r
* **ZIP Download**: Download all split folders and files cleanly in a single \`.zip\` file.\r
\r
---\r
\r
## Quick Start (Try splitting now)\r
\r
Once installed, let's immediately do a split test on this very \`README.md\` itself. (*The original README file remains untouched, and a new directory is safely created.*)\r
\r
\`\`\`bash\r
  # Automatically split according to Markdown heading structure (#)\r
  splist README.md list\r
\`\`\`\r
*(Note: With the v2 smart default, just typing \`splist README.md\` will also execute \`list\` automatically!)*\r
\r
### SPLIST's Powerful Default Features\r
\r
Even without specifying special options, the following features work safely by default:\r
\r
* **Auto Sequential Numbering:** Prepends sequential numbers like \`01_\` to split filenames, maintaining the original order.\r
* **Safe Versioning:** If you run the command again on the same file, it automatically creates a new directory like \`_v02\` to avoid overwriting.\r
* **Appropriate Hierarchical Split:** By default, it splits based on the \`##\` (H2 heading) hierarchy.\r
\r
For full feature details and a complete list of options, please see the **[Official Manual (USAGE.md)](USAGE.md)**.\r
\r
---\r
\r
## Operation Tests (Demos and Feature Showcase)\r
\r
SPLIST comes bundled with demo data designed to test complex documents and extreme conditions.\r
First, generate the demo data using the following command:\r
\r
\`\`\`bash\r
# Batch generate demo files\r
npm run demo\r
\`\`\`\r
\r
By trying the following commands on the generated files in the \`demo_cases/demo_cases_raw\` folder, you can experience the true value of SPLIST.\r
\r
### 1. The Overwhelming Freedom of Physical Cut (sp)\r
\r
An engine that cleaves text completely in half exactly where dividing characters (markers) are located.\r
\r
* **Basic Multiple Cut**\r
  * **Test File:** \`01_sp_showcase_single_cut_default.md\`\r
  * **Overview:** Slices through a long text file where different markers like \`✂️\`, \`CUT\`, and \`cut\` are mixed together.\r
  * **Command:** \`splist demo_cases/demo_cases_raw/01_sp_showcase_single_cut_default.md sp\`\r
\r
* **Cut with Custom Dividing Characters (Option)**\r
  * **Test File:** \`03_sp_showcase_custom_marker_opt.md\`\r
  * **Overview:** Splits chat logs or system export data by specifying arbitrary dividing lines (e.g., \`===\`).\r
  * **Command:** \`splist demo_cases/demo_cases_raw/03_sp_showcase_custom_marker_opt.md sp -m "==="\`\r
\r
\r
### 2. Logical Organization (list) and Smart Replacement\r
\r
An engine that parses Markdown structure (H1, H2 headings) to build beautiful hierarchical folders.\r
\r
* **Magical Lightning-Fast Typing Support**\r
  * **Test File:** \`19_list_showcase_typing_support_default.md\`\r
  * **Overview:** Instead of \`#\`, if a document is written with \`v \` or \`vv \` at the start of a line, it auto-replaces them with headings and splits them into folders.\r
  * **Command:** \`splist demo_cases/demo_cases_raw/19_list_showcase_typing_support_default.md list\`\r
\r
* **Auto-Extraction of Intro Text (00_Overview)**\r
  * **Test File:** \`26_list_safety_overview_logic_default.md\`\r
  * **Overview:** Auto-detects the "overview text" before the first H2 heading begins, and beautifully extracts it independently as \`00_Overview.md\`.\r
  * **Command:** \`splist demo_cases/demo_cases_raw/26_list_safety_overview_logic_default.md list\`\r
\r
\r
### 3. Collision Avoidance and Versioning (-d, -t, -s, -f)\r
\r
Safety features ensuring that no matter how many times you run the same split, your past work is never overwritten and lost.\r
\r
\`\`\`bash\r
# 1. Append today's date stamp to the end of the folder name (e.g., _20260716)\r
splist demo_cases/demo_cases_raw/38_common_option_conflict_date_opt.md list -d\r
\r
# 2. If the folder already exists, "safely skip" processing without overwriting\r
splist demo_cases/demo_cases_raw/40_common_option_conflict_skip_opt.md sp -s\r
\r
# 3. Clean up by "forcibly overwriting" the existing folder\r
splist demo_cases/demo_cases_raw/41_common_option_conflict_force_opt.md list -f\r
\`\`\`\r
\r
### 4. Survival Test for OS Forbidden Chars, Emojis, and Length Limits\r
\r
Even if malicious data or non-standard long texts arrive, it absolutely protects the system and cleanses the data.\r
\r
* **Safe Auto-Cleansing of Headings**\r
  * **Test File:** \`27_list_safety_naming_limit_default.md\`\r
  * **Overview:** Simultaneously tests auto-removal of OS forbidden characters (\`\\/:*?"<>|\`), prevention of garbled surrogate-pair emojis (\`👨‍👩‍👧‍👦\`), and safe auto-trimming of overly long headings.\r
  * **Command:** \`splist demo_cases/demo_cases_raw/27_list_safety_naming_limit_default.md list\`\r
\r
---\r
\r
## CLI Command Reference\r
\r
Commands are executed in the format \`splist <target file> <subcommand> [options]\`.\r
Options (flags) can be written **in any order**.\r
*(In v2, if the target file has a \`.md\` or \`.txt\` extension, the subcommand can be omitted thanks to Smart Defaults!)*\r
\r
### \`splist <file> list\` Command\r
\r
Parses Markdown heading hierarchy and splits it logically.\r
\r
\`splist <file> list [options]\`\r
\r
* **\`<file>\`**: Target Markdown file to split (Required)\r
* **Options**:\r
  * \`-m, --mode <type>\`: Split mode (\`or\`: add sequential numbers (default), \`un\`: no sequential numbers)\r
  * \`-h, --header <level>\`: Heading level to base the split on (e.g., \`"###"\`)\r
  * \`-k, --keep\`: Keeps the header hierarchy of the output files as-is without auto-promoting them\r
  * \`-ext, --extension <ext>\`: Force the output file extension (e.g., \`txt\` or \`.txt\`)\r
  * \`-o, --out, --output <dir>\`: Custom output folder path\r
  * \`-toc\`: Auto-generate Table of Contents (\`00_TOC.md\`)\r
  * \`-fmex, -fm00, -fm01\`: Frontmatter handling (\`fmex\`: exclude, \`fm00\`: separate file, \`fm01\`: keep in 1st chunk)\r
  * \`--conflict <option>\`: Collision avoidance rules (\`v\`: versioning, \`d\`: date, \`t\`: time, \`s\`: skip, \`f\`: force)\r
\r
\r
### \`splist <file> sp\` Command\r
\r
Physically cuts using dividing markers (specified strings).\r
\r
\`splist <file> sp [options]\`\r
\r
* **\`<file>\`**: Target text/Markdown file to split (Required)\r
* **Options**:\r
  * \`-m, --marker <string>\`: Custom marker (e.g., \`"==="\`). When unspecified, \`✂️\`, \`CUT\`, and \`cut\` are applied.\r
  * \`-ext, --extension <ext>\`: Force the output file extension (e.g., \`md\` or \`.md\`)\r
  * \`-o, --out, --output <dir>\`: Custom output folder path\r
  * \`-toc\`: Auto-generate Table of Contents (\`00_TOC.md\`)\r
  * \`--conflict <option>\`: Collision avoidance rules (\`v\`: versioning, \`d\`: date, \`t\`: time, \`s\`: skip, \`f\`: force)\r
\r
\r
---\r
\r
### Collision Avoidance Options (Common)\r
\r
Can be appended and used with either \`list\` or \`sp\` commands. If unspecified, sequential folders like \`_v02\` are created automatically.\r
\r
* \`-d\`: Appends current date to output folder name (e.g., \`_20260718\`)\r
* \`-t\`: Appends current time to output folder name (e.g., \`_153045\`)\r
* \`-s\`: Skips processing on collision (Safety First)\r
* \`-f\`: Forcibly overwrites on collision (Clean up)\r
\r
---\r
\r
> For even more detailed specifications and troubleshooting, please read the **[Official Manual (USAGE.md)](https://github.com/splists/splist/blob/main/USAGE.md)**.\r
\r
## 🧠 Architecture & Future Roadmap (For Contributors)\r
\r
\`splist\` is designed with a highly modular 4-phase pipeline (Input → Vesseling → Rules → Output). If you're interested in the internal architecture or want to contribute to future extensions, please explore our design documents:\r
\r
- [Design Rationale (DESIGN_RATIONALE.md)](DESIGN_RATIONALE.md) - The philosophy behind all design decisions.\r
- [Constitution (CONSTITUTION.md)](CONSTITUTION.md) - The unbreakable rules of \`splist\` development.\r
- **Phase Pipeline & Future Extensions**:\r
  - [Phase 1: Input & Cleansing](DEVELOPS/options_docs/phase1.md)\r
  - [Phase 2: Vesseling](DEVELOPS/options_docs/phase2.md)\r
  - [Phase 3: Rules & Naming](DEVELOPS/options_docs/phase3.md)\r
  - [Phase 4: Output & Finishing](DEVELOPS/options_docs/phase4.md)\r
`,Ke=`# ✂️ SPLIST (Overview & Installation)\r
\r
✨ **Try SPLIST instantly in your browser:** [https://splists.github.io/](https://splists.github.io/)\r
\r
## Welcome to SPLIST\r
\r
An ultra-fast, zero-dependency CLI toolset to split a single Markdown or text file into multiple beautifully organized files and automatically generate a dynamic Table of Contents (TOC).\r
\r
Optimized for rapid documentation, editing, and seamless integration with **VS Code**.\r
\r
## 🛠️ Installation & Execution Guide\r
\r
There are two main approaches: **A. Execute Directly (without installing)** and **B. Install (npm install / npm link)**.\r
\r
### 💡 Prerequisite: Difference between npm and npx\r
Before choosing a command, it is helpful to understand the difference between these two roles.\r
\r
- **\`npm\` (Node Package Manager)**\r
  - **M** stands for **Manager**.\r
  - **Role**: A dedicated tool for **"saving and placing"** packages on your PC (or folder).\r
  - *Note: To execute them, you must call them manually in the terminal or use another mechanism.*\r
- **\`npx\` (Node Package Execute)**\r
  - **X** stands for **Execute** (derived from "executable").\r
  - **Role**: A dedicated tool for **"executing"** packages.\r
  - *Note: Even if not installed on your PC, it temporarily downloads the tool from the internet, "executes it immediately", and leaves no garbage behind. It can also find and "execute" locally saved tools.*\r
\r
Choose the best command for your environment and purpose from the options below.\r
\r
---\r
\r
## A. Execute Directly (Without installing)\r
\r
### Try it once immediately without polluting your environment\r
(For those who want to try it or always use the latest version)\r
\r
**【No Installation Required】**\r
\`\`\`bash\r
npx @splists/splist <file>\r
\`\`\`\r
- Always runs the latest version and never pollutes your PC environment.\r
- The command is slightly longer each time (\`npx ~\`).\r
\r
---\r
\r
## B. Install (Install and use)\r
\r
### Use it smoothly every day\r
(For IDE users and personal use)\r
\r
**【Available System-wide (OS)】**\r
\`\`\`bash\r
npm install -g @splists/splist\r
\`\`\`\r
- Installs to a common area across your entire PC.\r
- The short \`splist\` command can be used from anywhere, whether you open a VS Code terminal, Windows Command Prompt (cmd) on your Desktop, or Mac Terminal.\r
\r
### Integrate into your own project\r
(For team development and automation)\r
\r
**【Limited to Current Folder】**\r
\`\`\`bash\r
npm install @splists/splist\r
\`\`\`\r
- This is the basic command displayed on the official npm website.\r
- \`npm i @splists/splist\` (\`i\` is short for \`install\`. It means \`npm install @splists/splist\`.)\r
- Installs only inside the folder you currently have open in VS Code, etc. (\`node_modules\`).\r
- In other cases, if you just type \`splist\` in the terminal, it cannot find it and **results in a "command not found" error**.\r
- **Execution Method 1**: Prefix it with npx: \`npx splist\` (npx will automatically search inside the folder).\r
- **Execution Method 2**: Register it in your \`package.json\` scripts and call it with \`npm run\`.\r
\r
### Try unreleased latest features as fast as possible\r
(For Early Adopters)\r
\r
\`\`\`bash\r
npm install -g github:splists/splist\r
\`\`\`\r
- By replacing the \`@splists/splist\` part of the above command with \`github:splists/splist\`, you can directly install the latest code on GitHub before it is released on npm.\r
\r
### Develop and extend the source code\r
(For Contributors)\r
\r
\`\`\`bash\r
npm link\r
\`\`\`\r
*(Execute inside the source code folder)*\r
- You must download (clone or fork) the repository from GitHub in advance.\r
  \`git clone https://github.com/1abcdefggs/splist.git\`\r
  \`cd splist\`\r
- When you run \`npm link\` inside the above folder, any code changes will immediately reflect in your local \`splist\` command without reinstalling (for developers only).\r
\r
## 🔄 Migration Guide (v1 to v2)\r
\r
SPLIST has been updated to v2, evolving into a more intuitive and smarter command structure!\r
\r
\`\`\`diff\r
- v1 old spec: splist list memo.md\r
+ v2 new spec: splist memo.md list\r
\`\`\`\r
\r
💡 **Incredibly Convenient "Smart Defaults" Feature**\r
From v2, if the target file is **\`.md\`**, omitting the command will automatically execute \`list\` (logical organization).\r
Conversely, if the file is **\`.txt\`**, it will automatically execute \`sp\` (physical cut).\r
In other words, simply typing \`splist memo.md\` will initiate the perfect split!\r
\r
---\r
\r
## 🎯 The Ultimate Tutorial: Split This Manual!\r
\r
Want to see the magic right now? **Run the \`splist\` command on this very \`USAGE.md\` (or \`README.md\`) file!**\r
\r
\`\`\`bash\r
splist USAGE.md\r
# or\r
splist README.md\r
\`\`\`\r
\r
When you do this, SPLIST will automatically extract the complete text into beautiful folders and files. Try it now!\r
\r
---\r
\r
## 📖 Terminology and Worldview\r
\r
SPLIST provides the experience of "magically organizing" massive text data, not just merely splitting files. We have unique terminology to express this worldview.\r
\r
* **Raw:** Massive, hard-to-read text data before it has been processed by SPLIST.\r
* **Splisted:** The completed state where data has been beautifully split, organized, and "magically transformed" by SPLIST. Just like saying "Googled" for searching on Google, the terminal will display a celebratory message **\`🎉 Splisted!\`** upon successful completion as the ultimate result.\r
* **Output Folder Icons:**\r
  * **\`✂️\` (Scissors):** Attached to folders that were "physically cut" using the \`sp\` command.\r
  * **\`🔢\` (Numbers):** Attached to folders that were "logically organized and sequentially numbered" using the \`list\` command.\r
\r
---\r
\r
# What This Tool Can Do\r
\r
## Overview\r
\r
💡 **Quick Tip:** If you're opening this file in VS Code, press \`Ctrl + Shift + V\` (Mac: \`Cmd + Shift + V\`) right now to read the manual in a beautiful preview screen!\r
\r
Welcome to the magical experience of SPLIST!\r
SPLIST is a powerful CLI tool that instantly reconstructs massive, hard-to-read text data and Markdown files into beautiful structures that anyone can read intuitively.\r
\r
**Have you ever experienced this?**\r
* A single document is so long it feels like scrolling hell.\r
* You hastily copy-pasted info into Notepad to organize later, but now it's too long to find anything.\r
* You're tired of manually repeating "select range, copy, create new file, paste, save as...".\r
* While writing a massive Markdown document, you want to focus on fleshing out one specific chapter at a time.\r
\r
**"I just want to split this long text into pieces to work on and manage it!"**\r
This tool was born from the developer's own intense frustration with this exact problem. If your document is cleanly written with Markdown headings, you can split it beautifully with a single command.\r
\r
## Forcibly Cut at Specific Locations with Scissors\r
\r
When you have a clear place where you want to "sever the text before and after"—such as system logs with no Markdown structure, scene changes in a novel, or exported chat logs—the forced physical cut feature shines.\r
Just place \`✂️\` or a custom marker at the beginning of a line, and the file will be cleanly severed at that exact boundary.\r
\r
## Split Beautifully by Markdown Headings\r
\r
**Are you amazed by the beautiful folder structure of this manual?**\r
\r
Actually, the "hierarchical manual" you are currently looking at in your Explorer (or IDE) is a live example (demo) proving the power of SPLIST.\r
Originally, it was just a single, long, hard-to-read text file. But SPLIST automatically detected \`#\` (H1) as folders and \`##\` (H2) as files in the text, instantly constructing this beautiful tree structure.\r
\r
# 💻 COMMAND\r
\r
## ✂️ splist Targetfilename sp\r
\r
The command to execute a "Forced Physical Cut".\r
Regardless of heading structure, it severs the text before and after at locations marked with the scissors symbol (\`✂️\`), \`cut\`, or a custom marker (e.g., \`===\`) written in the file.\r
**※ Collision avoidance options like \`-d\` and \`-s\` can be fully utilized with this command just like \`splist Targetfilename list\`!**\r
\r
### 💡 Features and Usage (Validation Demo Links)\r
- **Basic single split using standard markers (✂️, V, v, cut)**: Validation File [[01_sp_showcase_single_cut_default.md](file:///c:/splist/demo_cases/success_cases/01_sp_showcase_single_cut_default.md)]\r
- **Simultaneous split with different standard markers at multiple locations**: Validation File [[02_sp_showcase_multi_cut_default.md](file:///c:/splist/demo_cases/success_cases/02_sp_showcase_multi_cut_default.md)]\r
- **Split using a user-specified custom marker**: Validation File [[03_sp_showcase_custom_marker_opt.md](file:///c:/splist/demo_cases/success_cases/03_sp_showcase_custom_marker_opt.md)]\r
- **Feature to keep trailing text after the marker at the top of the next file**: Validation File [[04_sp_showcase_marker_trailing_text_default.md](file:///c:/splist/demo_cases/success_cases/04_sp_showcase_marker_trailing_text_default.md)]\r
- **Split without sequential numbers using the un option**: Validation File [[05_sp_option_un_opt.md](file:///c:/splist/demo_cases/success_cases/05_sp_option_un_opt.md)]\r
- **Auto-generate TOC using the -toc option**: Validation File [[06_sp_option_toc_opt.md](file:///c:/splist/demo_cases/success_cases/06_sp_option_toc_opt.md)]\r
\r
### ✂️ Physical Cut Image\r
\r
Even for text without Markdown headings like system logs or novels, you can cleanly sever them at any marker location.\r
\r
\`\`\`text\r
(Original File: target_file.txt)\r
This will be the first file.\r
Prologue text...\r
✂️\r
This will be the second file.\r
Chapter 1 text...\r
cut\r
This will be the third file.\r
Chapter 2 text...\r
\`\`\`\r
\r
#### 📂 Output Files (Image)\r
\r
\`\`\`text\r
📂 Output Folder/\r
├── 📄 01_Part.txt  (First block)\r
├── 📄 02_Part.txt  (Second block)\r
└── 📄 03_Part.txt  (Third block)\r
\`\`\`\r
\r
💡 **Specifying Custom Markers**\r
By specifying a symbol at the end like \`splist target.txt sp "==="\`, you can split using that custom symbol instead of the standard scissors. You can even chain options like \`splist target.txt sp "===" -d\`.\r
\r
## 💻 splist Targetfilename list (or omit)\r
\r
The command to execute "Smart Logical Organization".\r
It reads the target Markdown file and automatically splits it into folders and files according to the \`#\` and \`##\` heading structure.\r
\r
### 💡 Features and Usage (Validation Demo Links)\r
- **Basic split for a flat structure with only H1s**: Validation File [[16_list_showcase_flat_h1_default.md](file:///c:/splist/demo_cases/success_cases/16_list_showcase_flat_h1_default.md)]\r
- **Standard nested configuration of # (Folder) and ## (File)**: Validation File [[17_list_showcase_nested_standard_default.md](file:///c:/splist/demo_cases/success_cases/17_list_showcase_nested_standard_default.md)]\r
- **Cases with multiple H2s under a single H1**: Validation File [[18_list_showcase_nested_single_default.md](file:///c:/splist/demo_cases/success_cases/18_list_showcase_nested_single_default.md)]\r
- **Typing support conversion for v (H1) / vv (H2)**: Validation File [[19_list_showcase_typing_support_default.md](file:///c:/splist/demo_cases/success_cases/19_list_showcase_typing_support_default.md)]\r
- **Typing support conversion for vvv (H3)**: Validation File [[20_list_showcase_typing_support_vvv_default.md](file:///c:/splist/demo_cases/success_cases/20_list_showcase_typing_support_vvv_default.md)]\r
- **Split specifying custom depths like "###"**: Validation File [[21_list_option_custom_depth_opt.md](file:///c:/splist/demo_cases/success_cases/21_list_option_custom_depth_opt.md)]\r
- **keep option (maintain heading levels)**: Validation File [[22_list_option_keep_opt.md](file:///c:/splist/demo_cases/success_cases/22_list_option_keep_opt.md)]\r
- **Split without sequential numbers using the un option**: Validation File [[23_list_option_un_opt.md](file:///c:/splist/demo_cases/success_cases/23_list_option_un_opt.md)]\r
- **Auto-generate a structural TOC file using the -toc option**: Validation File [[24_list_option_toc_opt.md](file:///c:/splist/demo_cases/success_cases/24_list_option_toc_opt.md)]\r
- **Correction feature where H2 automatically promotes to H1 after splitting**: Validation File [[25_list_option_heading_promotion_default.md](file:///c:/splist/demo_cases/success_cases/25_list_option_heading_promotion_default.md)]\r
- **Exclude YAML Front Matter using the -fmex option**: Validation File [[32a_list_option_front_matter_fmex.md](file:///c:/splist/demo_cases/success_cases/32a_list_option_front_matter_fmex.md)]\r
- **Extract YAML Front Matter independently (start from 01) using the -fm01 option**: Validation File [[32b_list_option_front_matter_fm01.md](file:///c:/splist/demo_cases/success_cases/32b_list_option_front_matter_fm01.md)]\r
- **Extract YAML Front Matter rationally (start from 00 / Default) using the -fm00 option**: Validation File [[32c_list_option_front_matter_fm00.md](file:///c:/splist/demo_cases/success_cases/32c_list_option_front_matter_fm00.md)]\r
\r
💡 **Execution is Fastest and Surest via Drag & Drop!**\r
Manually typing an absolute file path (\`C:\\...\`) on the keyboard is highly prone to typos and missing spaces, making it very tedious.\r
From the VS Code Explorer (left sidebar), **drag & drop (D&D) the file you want to split directly into the terminal**. The exact file path will be auto-populated instantly!\r
\r
### 📂 Collision Avoidance and Versioning (New Feature!)\r
\r
SPLIST comes standard with **"safe version control per directory (folder)"**. No matter how many times you split the same file, existing files will never be overwritten and lost!\r
\r
By appending the following options at the end of the command, you can freely control the behavior:\r
* **(No specify)**: Safely creates new folders with sequential suffixes like \`_v02\`, \`_v03\`. Validation File [[37_common_option_conflict_default_default.md](file:///c:/splist/demo_cases/success_cases/37_common_option_conflict_default_default.md)]\r
* **\`-d\` (Date)**: Adds today's date to the folder name (e.g., \`_20260716\`). Validation File [[38_common_option_conflict_date_opt.md](file:///c:/splist/demo_cases/success_cases/38_common_option_conflict_date_opt.md)]\r
* **\`-t\` (Time)**: Adds the current time to the folder name (e.g., \`_20260716_153000\`). Validation File [[39_common_option_conflict_time_opt.md](file:///c:/splist/demo_cases/success_cases/39_common_option_conflict_time_opt.md)]\r
* **\`-s\` (Skip)**: If the folder already exists, it safely skips without overwriting. Validation File [[40_common_option_conflict_skip_opt.md](file:///c:/splist/demo_cases/success_cases/40_common_option_conflict_skip_opt.md)]\r
* **\`-f\` (Force)**: [WARNING] Forcibly overwrites (resets) existing folders. Validation File [[41_common_option_conflict_force_opt.md](file:///c:/splist/demo_cases/success_cases/41_common_option_conflict_force_opt.md)]\r
\r
### 📝 Front Matter Processing Options\r
\r
You can control how the YAML Front Matter (metadata enclosed by \`---\`) at the top of a Markdown file is processed.\r
\r
* **(No specify) or \`-fm00\`**: Extracts the Front Matter independently as \`00_FrontMatter.md\`. H1 and intro text will become \`01_\`, resulting in rational classification.\r
* **\`-fm01\`**: Extracts the Front Matter as \`01_FrontMatter.md\`, making the start of the body text \`02_\`.\r
* **\`-fmex\`**: Completely excludes (Exclude) the Front Matter and outputs only the body text.\r
\r
### 📂 Output Management Philosophy: Switching Between Safety and Efficiency\r
\r
By default, SPLIST is designed with a **Safety-First architecture** that utilizes "version control (adding sequential numbers)" to prevent accidentally erasing existing files. However, depending on your development cycle or preferences, there may be times you want to customize this behavior.\r
\r
Choose from the following 3 management strategies based on your use case:\r
\r
#### 1. [Standard] Keep History (Default)\r
When you run \`splist target.md list\` (or simply \`splist target.md\`), it assigns sequential suffixes like \`_v02\` or \`_v03\` to prevent conflicting with existing folders.\r
*   **Use Case:** When you want to retain past backups as needed.\r
*   **Command:** \`splist target.md\`\r
\r
#### 2. [Safe] Protect Existing (Skip)\r
If a folder already exists, **SPLIST does nothing.** This completely eliminates the risk of accidentally overwriting files you have already hand-tweaked.\r
*   **Use Case:** When you've already made fine adjustments manually and want to prevent auto-generated output from destroying your work.\r
*   **Command:** \`splist target.md -s\`\r
\r
#### 3. [Aggressive] Destructive Overwrite (Force)\r
Forcibly overwrites the folder if it exists. Previous files will be permanently deleted.\r
*   **Use Case:** During extreme trial-and-error where you modify the Raw data, split, check the output, delete it, and try again over and over.\r
*   **Command:** \`splist target.md -f\` (Use with caution)\r
\r
### 📑 Image of Heading Structure\r
\r
You are likely familiar with text written with hashtags (\`#\`) in Markdown files. They serve the same role as \`h1\` through \`h6\` tags in normal websites (HTML).\r
\r
\`\`\`markdown\r
# Title\r
\r
## Heading h2\r
Body text body text body text\r
Body text body text body text\r
\r
## Heading h2\r
Body text body text body text\r
\`\`\`\r
\r
#### 📂 Split Folder Tree (Image)\r
\r
\`\`\`text\r
📂 01_Title/\r
├── 📄 01_Heading_h2.md\r
├── 📄 02_Heading_h2.md   ← (※ "### Heading h3" will be preserved inside this)\r
└── 📄 03_Heading_h2.md\r
\`\`\`\r
\r
In standard Markdown, H1 (\`#\`) corresponds to the article title, so it's typically used only once.\r
Therefore, each section within the body usually uses headings up to \`##\` or \`###\`.\r
However, **this tool splits at the \`##\` (H2) unit by default**. Splitting down to \`###\` could result in pieces that are too fragmented.\r
\r
💡 **Over 50 Experimental Playground Files to Try**\r
The SPLIST repository includes 53 practical test data cases covering extreme conditions and convenient usages. Running \`npm run demo\` in the root directory generates all demo files into \`demo_cases/demo_cases_raw/\`. Drag & drop these files directly into your VS Code terminal and experience the magic of splitting right now!\r
\r
# When You Want to Forcibly Sever by Specified Symbols\r
\r
## Cut with the Standard Scissors Symbol\r
\r
Simply writing \`✂️\` or \`cut\` at the beginning of a line establishes a boundary to split the file before and after it.\r
The resulting split files are automatically assigned sequential numbers like \`01_Part.md\`. Unnecessary blank lines before and after are cleanly trimmed, and the scissors symbol itself is neatly removed from the output files.\r
\r
## Cut by Specifying Custom Characters or Symbols\r
\r
When you want to use a "custom symbol" as the cut criteria—such as for scene transitions in a novel, chat logs, or system output data—you can specify a custom marker.\r
\r
For instance, specifying \`===\` will detect every location where a line starts with \`===\` and forcefully split there. You can specify any string you like, including patterns common in novels like \`***\` or \`◆◆◆\`, log files' \`[EOF]\`, or chat logs' \`[Date/Time]\`.\r
\r
**Execution Example:** \`splist target_file.txt sp "==="\`\r
\r
## 🛠️ Secret Trick: Hardcoding Your Default Cut Symbol\r
\r
For heavy users who find it tedious to specify \`"==="\` or \`"◆◆◆"\` as an option argument every time, there is a secret trick to make your own custom scissors the default.\r
\r
Open SPLIST's core logic file \`src/commands/sp_default.js\`, directly edit the constant for the regex cut marker at the beginning of lines to your preferred symbol, and save. Simply by running \`splist target.txt\` without arguments (thanks to the \`.txt\` smart default), you'll be able to tear through texts with your very own custom marker anytime.\r
\r
# When You Want to Organize Using Heading Structure\r
\r
## The Classic Pattern Split\r
\r
The most fundamental usage is splitting meeting minutes or manuals composed of \`#\` and \`##\`.\r
When executed, the tool creates a "Parent Folder" from the topmost \`#\` (H1), carves out files for each \`##\` (H2) within it, and tucks them neatly inside the folder.\r
Furthermore, it automatically prepends sequential numbers like \`01_\` to all files and folders so they naturally line up in the order of the original text.\r
\r
### 🌟 Real-World Data Split Example\r
\r
As a practical validation, when the authentic VS Code official documentation draft \`vscode-docs/color-theme.md\` (published by Microsoft) was fed into SPLIST, it instantly reconstructed into the following magical hierarchical structure.\r
\r
**Folder Tree After SPLIST Execution:**\r
\r
\`\`\`text\r
📂 🔢color-theme/\r
└── 📁 03_Color Theme/\r
    ├── 📄 00_Overview.md                               (Intro text right below heading)\r
    ├── 📄 01_Workbench colors.md                       (Each section is individually)\r
    ├── 📄 02_Syntax colors.md                          (carved into independent files)\r
    ├── 📄 03_Semantic colors.md\r
    └── 📄 04_Create a new Color Theme.md ... (continues)\r
\`\`\`\r
\r
No more endless, manual copying, pasting, and saving new files. Raw technical documents are instantly reborn as beautiful assets.\r
\r
## Maintaining Deep Hierarchies and Complex Structures\r
\r
**Auto-Correction of Markdown Syntax and Bypassing It (\`keep\` Option)**\r
\r
Generally, in Markdown, \`#\` (H1) is used as the overall title, and \`##\` (H2) as the heading for each section. When SPLIST carves out \`##\` sections into separate files, leaving them as-is would result in "files without an H1 (grammatically unnatural)". Therefore, SPLIST has a default **correction feature that automatically converts (promotes) \`##\` to \`#\` when saving**.\r
\r
**Execution Example:** \`splist target.md keep\`\r
※ If you specify \`keep\`, auto-promotion is disabled, and the extraction remains pure, fully maintaining the original \`##\` or \`###\` hierarchies.\r
\r
## Removing Sequential Numbers / Extracting Specific Hierarchies\r
\r
You can fine-tune SPLIST's behavior even further to match your goals.\r
\r
### 🔢 1. Remove Sequential Numbers (\`un\` Option)\r
\r
Disables the sequential numbers like \`01_\` that are prepended by default.\r
Perfect for splitting "dictionary data to be sorted alphabetically" or "API documentation where you want filenames to match function names exactly."\r
\r
**Execution Example:** \`splist dictionary.md un\`\r
\r
### 🔍 2. Split at Arbitrary Depth (\`"###"\` Option)\r
\r
The default splitting criteria is \`##\` (H2), but you can target deeper hierarchies.\r
For example, by specifying \`"###"\`, you can finely dice the files down to the third-tier subheading level.\r
\r
## 💡 Typing Support to Accelerate Writing\r
\r
Typing \`#\`—the staple of Markdown—on a PC keyboard requires stretching fingers (like Shift + 3), which is a significant typing burden.\r
Thus, SPLIST comes standard with smart input shortcuts designed to skyrocket your document writing speed. If you place the following at the beginning of a line while writing, they will automatically be converted to correct Markdown symbols upon processing.\r
\r
* Type \`v \` (lowercase v + half-width space) at start of line = **\`# \` (H1)**\r
* Type \`vv \` at start of line = **\`## \` (H2)**\r
\r
With hardly any movement from the home position, you can blast through building heading structures just by gliding over the keyboard.\r
\r
# Edge Cases and Limit Test Results\r
\r
## Safe Design of Forced Cut (\`sp\`) and Empirical Results\r
\r
Because it handles text without a structure like Markdown, powerful guardrails are implemented to prevent unexpected misfires.\r
\r
- **Does not process files with zero markers**: Validation File [[11_sp_safety_no_cuts_default.md](file:///c:/splist/demo_cases/success_cases/11_sp_safety_no_cuts_default.md)]\r
- **Does not process even if line 1 is a marker**: Validation File [[08_sp_safety_start_with_cut_default.md](file:///c:/splist/demo_cases/success_cases/08_sp_safety_start_with_cut_default.md)]\r
- **Does not process even if the last line is a marker**: Validation File [[09_sp_safety_end_with_cut_default.md](file:///c:/splist/demo_cases/success_cases/09_sp_safety_end_with_cut_default.md)]\r
- **Ignores consecutive markers**: Validation File [[07_sp_safety_consecutive_cuts_default.md](file:///c:/splist/demo_cases/success_cases/07_sp_safety_consecutive_cuts_default.md)]\r
- **Ignores markers mid-sentence**: Validation File [[10_sp_safety_false_scissors_default.md](file:///c:/splist/demo_cases/success_cases/10_sp_safety_false_scissors_default.md)]\r
- **Processes markers inside code blocks**: Validation File [[12_sp_safety_cut_in_codeblock_default.md](file:///c:/splist/demo_cases/success_cases/12_sp_safety_cut_in_codeblock_default.md)]\r
- **Removes invalid characters / Trims overly long headings to 50 chars**: Validation File [[13_sp_safety_long_and_invalid_chars_default.md](file:///c:/splist/demo_cases/success_cases/13_sp_safety_long_and_invalid_chars_default.md)]\r
\r
### 1. Ignoring Cut Marks Mid-Sentence (Inline)\r
\r
It absolutely will not split at \`===\` or \`✂️\` accidentally used mid-sentence in a chat log or conversation. To prevent misfires, a safety check ensures it triggers ONLY when placed independently at the "start of a line."\r
Validation Anti-Pattern [[15_sp_warn_inline_cut_default.md](file:///c:/splist/demo_cases/success_cases/15_sp_warn_inline_cut_default.md)]\r
\r
### 2. Preventing Consecutive Markers and Empty File Generation\r
\r
If scissors symbols or \`cut\`s are placed consecutively over multiple lines, or if there are useless markers at the very beginning or end of a file, the tool automatically detects and smartly skips them. This prevents polluting the disk by mass-generating empty "0-byte garbage files."\r
\r
---\r
## Safe Design of Logical Organize (\`list\`) and Empirical Results\r
\r
To prevent data destruction or errors unintended by the user, a robust safety design has cleared limit tests utilizing various edge cases and raw real-world data.\r
\r
- **Carves out document intros before the first H2 into an Overview**: Validation File [[26_list_safety_overview_logic_default.md](file:///c:/splist/demo_cases/success_cases/26_list_safety_overview_logic_default.md)]\r
- **Auto-cleanses invalid chars, preserves surrogate pair emojis, trims at 50 chars**: Validation File [[27_list_safety_naming_limit_default.md](file:///c:/splist/demo_cases/success_cases/27_list_safety_naming_limit_default.md)]\r
- **Validates deep nesting up to H6 level remains intact on output**: Validation File [[28_list_safety_deep_nesting_default.md](file:///c:/splist/demo_cases/success_cases/28_list_safety_deep_nesting_default.md)]\r
- **Collision avoidance for identical heading names (safe save via renaming)**: Validation File [[29_list_safety_duplicate_headings_default.md](file:///c:/splist/demo_cases/success_cases/29_list_safety_duplicate_headings_default.md)]\r
- **Validates list bullets and other Markdown elements do not disrupt the heading parser**: Validation File [[30_list_safety_mixed_markers_default.md](file:///c:/splist/demo_cases/success_cases/30_list_safety_mixed_markers_default.md)]\r
- **Validates completely ignoring fake headings inside code blocks**: Validation File [[31_list_safety_codeblock_trap_default.md](file:///c:/splist/demo_cases/success_cases/31_list_safety_codeblock_trap_default.md)]\r
- **Validates ignoring YAML Front Matter (---)**: Validation File [[32_list_safety_front_matter_default.md](file:///c:/splist/demo_cases/success_cases/32_list_safety_front_matter_default.md)]\r
- **Safe fallback processing for invalid markdown space headings, etc.**: Validation File [[33_list_safety_bad_markdown_default.md](file:///c:/splist/demo_cases/success_cases/33_list_safety_bad_markdown_default.md)]\r
- **Structural parsing load test on massive volume Markdown**: Validation File [[34_list_safety_massive_volume_default.md](file:///c:/splist/demo_cases/success_cases/34_list_safety_massive_volume_default.md)]\r
- **Warning Case: Ignores headings missing a space**: Validation File [[35_list_warn_no_space_heading_default.md](file:///c:/splist/demo_cases/success_cases/35_list_warn_no_space_heading_default.md)]\r
- **Warning Case: Prevents heading loss caused by unclosed code blocks**: Validation File [[36_list_warn_unclosed_codeblock_default.md](file:///c:/splist/demo_cases/success_cases/36_list_warn_unclosed_codeblock_default.md)]\r
\r
### 1. Completely Ignoring "Fake Headings" Inside Code Blocks\r
\r
Prevents erroneously generating folders by mistaking \`# Comments\` or \`## Samples\` written within program source code or Markdown tutorials as structural headings. Anything inside a code block wrapped by triple backticks is treated as a total safe zone and parsing is skipped.\r
\r
### 2. Auto-Cleansing of Invalid Characters in Filenames\r
\r
Even if a heading contains forbidden NG characters that OSes reject as filenames like \`\\ / : * ? " < > |\`, the system will not crash. It automatically removes/replaces them, generating and saving a safe filename.\r
\r
### 3. Emoji Support and Character Limit\r
\r
Even if special surrogate-pair Kanji or complex emojis exist in a heading, it accurately determines character boundaries to prevent garbling, smartly cutting at a safe maximum of 50 characters to avoid exceeding OS limits.\r
\r
### 💡 Integration Cases\r
- **Structural parsing proof on VS Code official specs (mixed YAML/code block data)**: Validation File [[42_integration_vscode_color_theme_default.md](file:///c:/splist/demo_cases/success_cases/42_integration_vscode_color_theme_default.md)]\r
- **Self-build split proof on SPLIST Official Manual**: Validation File [[43_integration_official_manual_default.md](file:///c:/splist/demo_cases/success_cases/43_integration_official_manual_default.md)]\r
\r
### 💡 Operations Become Dramatically Easier\r
\r
Now that you have these independent Markdown files, you can open them directly in VS Code, enjoying a comfortable writing and editing experience while viewing previews.\r
Once you've finished tweaking the text, just toss the file directly into the \`splist\` engine via the terminal, and your usual beautiful hierarchical folders will be completed instantly.\r
\r
\r
\r
\r
\r
* **Empirical Record:** During the validation of the aforementioned VS Code official documentation (\`color-theme.md\`), it brilliantly ignored all hashtag headings inside the massive amount of Markdown code samples (\`\`\`markdown ...\`\`\`) contained within, succeeding in extracting 100% accurately ONLY the true table of contents structure of the document itself.`,qe={name:`@splists/splist`,version:`2.1.8`,description:`Split massive Markdown and text files into manageable chunks with an auto-generated TOC. A powerful CLI and local Web GUI utility for text processing.`,main:`src/core/splist/splist.js`,bin:{splist:`src/cli/cli.js`},scripts:{demo:`node demo_cases/demo_cases_gen.js && node demo_cases/demo_cases_raw/demo_cases_run.js`,test:`node demo_cases/demo_cases_raw/demo_cases_run.js`,"build:manual":`node src/cli/cli.js USAGE.md -f`,"build:web":`npm --prefix react run build`},repository:{type:`git`,url:`git+https://github.com/splists/splist.git`},homepage:`https://splists.github.io/`,bugs:{url:`https://github.com/splists/splist/issues`},files:[`src`],keywords:[`split`,`list`,`markdown`,`md`,`chunk`,`heading`,`table-of-contents`,`toc`,`text-processing`,`documentation`,`docs`,`doc`,`cli`,`command`,`terminal`,`console`,`utility`,`backend`,`zero-dependency`],author:`1abcdefggs`,engines:{node:`>=16.0.0`},license:`MIT`,type:`commonjs`},Je=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ye=o(((e,t)=>{t.exports=Je()})),O=Ye();function Xe({onOpenDocs:e}){return(0,O.jsxs)(`header`,{className:`app-header vscode-titlebar`,children:[(0,O.jsxs)(`div`,{className:`titlebar-left`,children:[(0,O.jsx)(`img`,{src:`/favicon.png`,alt:`Splist Logo`,className:`app-logo-icon`,style:{width:`24px`,height:`24px`,borderRadius:`4px`}}),(0,O.jsxs)(`h1`,{className:`app-title`,children:[`SPLIST `,(0,O.jsx)(`span`,{children:`BROWSER`})]}),(0,O.jsxs)(`span`,{className:`badge version-badge`,children:[`V`,qe.version.toUpperCase()]}),(0,O.jsx)(`a`,{href:`https://www.npmjs.com/package/@splists/splist`,target:`_blank`,rel:`noopener noreferrer`,className:`npm-link-btn`,title:`View on npm`,style:{marginLeft:`10px`},children:(0,O.jsx)(`span`,{style:{fontWeight:`bold`},children:`npm @splists/splist`})})]}),(0,O.jsx)(`div`,{className:`titlebar-center`,children:(0,O.jsx)(`span`,{className:`app-tagline`,children:`ULTRA-FAST FILE SPLITTER & STRUCTURER`})}),(0,O.jsxs)(`div`,{className:`titlebar-right`,children:[(0,O.jsx)(`button`,{onClick:e,className:`docs-btn`,title:`View Documentation`,children:`📖 DOCS`}),(0,O.jsxs)(`a`,{href:`https://github.com/splists/splist`,target:`_blank`,rel:`noopener noreferrer`,className:`github-link-btn`,title:`View source on GitHub`,children:[(0,O.jsx)(`svg`,{className:`github-icon`,viewBox:`0 0 16 16`,width:`16`,height:`16`,fill:`currentColor`,children:(0,O.jsx)(`path`,{d:`M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z`})}),(0,O.jsx)(`span`,{children:`GITHUB`})]})]})]})}var Ze=`modulepreload`,Qe=function(e,t){return new URL(e,t).href},$e={},et=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Qe(t,n),t=s(t),t in $e)return;$e[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ze,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},tt=(0,v.lazy)(async()=>{let[e,t]=await Promise.all([et(()=>import(`./react-markdown-m92MCvHz.js`),__vite__mapDeps([0,1]),import.meta.url),et(()=>import(`./remark-gfm-zDqDfnnT.js`),__vite__mapDeps([2,1]),import.meta.url)]),n=e.default,r=t.default;return{default:({children:e})=>(0,O.jsx)(n,{remarkPlugins:[r],children:e})}});function nt({inputText:e,setInputText:t,inputFileName:n,splitMode:r,setSplitMode:i,generateToc:a,setGenerateToc:o,isDragging:s,setIsDragging:c,onSplit:l,onLoadSample:u,onClear:d,selectedFile:f,onSelectInput:p,onFileDrop:m}){let h=!f||f.isInput,[g,_]=(0,v.useState)(`preview`);return(0,v.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&e.key===`Enter`&&(e.preventDefault(),l())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[l]),(0,O.jsxs)(`section`,{className:`panel editor-main-panel`,children:[(0,O.jsxs)(`div`,{className:`editor-tabs-bar`,children:[(0,O.jsxs)(`div`,{className:`editor-tab-item ${h?`active`:``}`,onClick:p,children:[(0,O.jsxs)(`svg`,{className:`file-icon-svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,O.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,O.jsx)(`polyline`,{points:`14 2 14 8 20 8`})]}),(0,O.jsx)(`span`,{className:`tab-title`,children:n||`input.md`}),(0,O.jsx)(`span`,{className:`tab-badge`,children:`EDITING`})]}),!h&&f&&(0,O.jsxs)(`div`,{className:`editor-tab-item active output-preview-tab`,children:[(0,O.jsxs)(`svg`,{className:`file-icon-svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,O.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,O.jsx)(`polyline`,{points:`14 2 14 8 20 8`})]}),(0,O.jsx)(`span`,{className:`tab-title`,children:f.name}),(0,O.jsx)(`span`,{className:`tab-badge preview-tag`,children:`OUTPUT PREVIEW`})]})]}),(0,O.jsxs)(`div`,{className:`panel-header editor-header-controls`,children:[(0,O.jsxs)(`div`,{className:`mode-selector`,children:[(0,O.jsxs)(`label`,{className:`radio-label`,title:`Split by custom markers (✂️)`,children:[(0,O.jsx)(`input`,{type:`radio`,name:`splitMode`,value:`sp`,checked:r===`sp`,onChange:e=>{i(e.target.value),e.target.value===`sp`&&_(`code`)}}),(0,O.jsx)(`span`,{className:`radio-btn ${r===`sp`?`is-active`:``}`,children:r===`sp`?`✓ SP (MARKERS)`:`SP (MARKERS)`})]}),(0,O.jsxs)(`label`,{className:`radio-label`,title:`Split by Markdown H1/H2 Headings`,children:[(0,O.jsx)(`input`,{type:`radio`,name:`splitMode`,value:`list`,checked:r===`list`,onChange:e=>i(e.target.value)}),(0,O.jsx)(`span`,{className:`radio-btn ${r===`list`?`is-active`:``}`,children:r===`list`?`✓ LIST (# HEADINGS)`:`LIST (# HEADINGS)`})]})]}),(0,O.jsxs)(`div`,{className:`input-file-actions`,style:{display:`flex`,alignItems:`center`,gap:`15px`},children:[(0,O.jsxs)(`div`,{className:`view-mode-toggle`,style:{display:`flex`,borderRadius:`4px`,overflow:`hidden`,border:`1px solid var(--border-light)`},children:[(0,O.jsx)(`button`,{className:`quick-action-btn ${g===`code`?`active-view`:``}`,onClick:()=>_(`code`),style:{borderRadius:0,border:`none`,background:g===`code`?`var(--accent)`:`transparent`,padding:`4px 8px`},children:g===`code`?`✓ Code`:`Code`}),(0,O.jsx)(`button`,{className:`quick-action-btn ${g===`preview`?`active-view`:``}`,onClick:()=>_(`preview`),style:{borderRadius:0,border:`none`,background:g===`preview`?`var(--accent)`:`transparent`,padding:`4px 8px`},children:g===`preview`?`✓ Preview`:`Preview`})]}),(0,O.jsxs)(`label`,{className:`toggle`,title:`Add index file (00_TOC.md) inside output`,children:[(0,O.jsx)(`input`,{type:`checkbox`,checked:a,onChange:e=>o(e.target.checked)}),(0,O.jsx)(`span`,{className:`slider`}),(0,O.jsx)(`span`,{className:`label-text`,style:{fontSize:`0.9rem`,fontWeight:`bold`},children:`+ 00_TOC.MD`})]}),(0,O.jsx)(`button`,{className:`quick-action-btn sample-btn`,onClick:u,title:`Load Sample README.md`,children:`README SAMPLE`}),e&&(0,O.jsx)(`button`,{className:`quick-action-btn clear-btn`,onClick:d,title:`Clear editor text`,children:`CLEAR`})]})]}),h?(0,O.jsxs)(`div`,{className:`editor-container ${s?`drag-over`:``}`,onDragEnter:()=>c(!0),onDragOver:()=>c(!0),onDragLeave:()=>c(!1),onDrop:e=>{if(c(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0){let t=e.dataTransfer.files[0],n=new FileReader;n.onload=e=>{e.target?.result&&m(t.name,e.target.result.toString())},n.readAsText(t)}else{let t=e.dataTransfer.getData(`text`);t&&m(`pasted_input.md`,t)}},style:{position:`relative`,overflowY:g===`preview`?`auto`:`hidden`},children:[g===`code`?(0,O.jsxs)(O.Fragment,{children:[e&&!s&&(0,O.jsx)(`div`,{style:{position:`absolute`,top:`10px`,right:`15px`,fontSize:`0.75rem`,color:`#6a9955`,pointerEvents:`none`,fontStyle:`italic`},children:`💡 Drag & Drop your own .md file here to split it!`}),(0,O.jsx)(`textarea`,{value:e,onChange:e=>t(e.target.value),placeholder:`Drag & Drop your Markdown file here, or paste text to split...`}),!e&&!s&&(0,O.jsxs)(`div`,{className:`empty-dropzone-watermark`,onClick:()=>document.querySelector(`textarea`)?.focus(),children:[(0,O.jsxs)(`svg`,{className:`watermark-icon-svg`,width:`48`,height:`48`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,O.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,O.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,O.jsx)(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]}),(0,O.jsx)(`div`,{className:`watermark-title`,children:`DRAG & DROP MARKDOWN FILE HERE`}),(0,O.jsx)(`div`,{className:`watermark-sub`,children:`OR PASTE TEXT DIRECTLY INTO THIS EDITOR`})]})]}):(0,O.jsx)(`div`,{className:`markdown-preview-container`,children:(0,O.jsx)(v.Suspense,{fallback:(0,O.jsx)(`div`,{style:{padding:`20px`,color:`#858585`},children:`Loading Preview Engine...`}),children:(0,O.jsx)(tt,{children:e||`*No content to preview*`})})}),s&&(0,O.jsx)(`div`,{className:`overlay-msg`,children:`DROP FILE TO LOAD`})]}):(0,O.jsxs)(`div`,{className:`editor-output-preview`,style:{overflowY:g===`preview`?`auto`:`hidden`},children:[(0,O.jsxs)(`div`,{className:`preview-banner`,children:[(0,O.jsxs)(`span`,{children:[`PREVIEWING SPLISTED GENERATED FILE: `,(0,O.jsx)(`strong`,{children:f?.name})]}),(0,O.jsx)(`button`,{className:`back-to-edit-btn`,onClick:p,children:`✏️ Back to Edit Input Document`})]}),g===`code`?(0,O.jsx)(`pre`,{className:`output-preview-code`,children:(0,O.jsx)(`code`,{children:f?.content})}):(0,O.jsx)(`div`,{className:`markdown-preview-container`,style:{padding:`15px`},children:(0,O.jsx)(v.Suspense,{fallback:(0,O.jsx)(`div`,{style:{padding:`20px`,color:`#858585`},children:`Loading Preview Engine...`}),children:(0,O.jsx)(tt,{children:f?.content||``})})})]})]})}function rt({splitMode:e,generateToc:t,totalFiles:n}){return(0,O.jsxs)(`footer`,{className:`vscode-statusbar`,children:[(0,O.jsxs)(`div`,{className:`statusbar-left`,children:[(0,O.jsx)(`span`,{className:`statusbar-item statusbar-brand`,children:`⚡ SPLIST V2.0.0`}),(0,O.jsxs)(`span`,{className:`statusbar-item`,children:[`MODE: `,e===`sp`?`SP (✂️ MARKERS)`:`LIST (# HEADINGS)`]}),(0,O.jsx)(`span`,{className:`statusbar-item`,children:t?`TOC: 00_TOC.MD`:`TOC: OFF`})]}),(0,O.jsxs)(`div`,{className:`statusbar-right`,children:[(0,O.jsx)(`span`,{className:`statusbar-item`,children:n>0?`SPLISTED: ${n} FILES`:`READY`}),(0,O.jsx)(`span`,{className:`statusbar-item`,children:`UTF-8`}),(0,O.jsx)(`span`,{className:`statusbar-item`,children:`MARKDOWN`})]})]})}var it='# 📖 Design Rationale\r\n\r\nThis document is a comprehensive rationale recording the **intent (why it was designed this way)** behind all "specifications, naming conventions, and behaviors" in SPLIST.\r\nIn future development and refactoring, it is strictly prohibited to make superficial code optimizations or changes without understanding the "meaning" documented here.\r\n\r\n## 0. Origin and Focus on Markdown\r\n\r\n- **Where it all began: Notepad and the ✂️ (Scissors) Emoji**\r\n  - **Rationale**: The true origin of this tool was a developer\'s everyday frustration: "I pasted about 5 pieces of information into Notepad, saved it, and later forgot what was in it." Trying to manually split the text into separate files via copy-paste was overwhelmingly tedious. The idea to "insert a `✂️` (scissors emoji) where I want to divide the text, and have it automatically split into separate files at those points" was the birth of SPLIST (the origin of the `sp` command).\r\n- **The Core of "Splitting" and the "Preferences" of Options (Birth of Bone and Flesh)**\r\n  - **Rationale**: The essence of the tool is simply "to split text." However, *how* to split it and *what to do after* (e.g., whether to add sequential numbers) is a matter of user "preference". Therefore, we established what the developer considered the most rational default (though it might not be perfect for everyone) as the "Smart Default", while separating the inevitably opposing preferences (like not adding numbers) into "Options". If someone wants yet another preference, they can simply write a new Option. This is the very simple, human reason behind the philosophy of "Complete Separation of Core and Option (Article 3)".\r\n- **From Plain Text to Markdown: Why Hashtags Became the Main Focus**\r\n  - **Rationale**: Although we started with the origin mentioned above, in modern code development and documentation (like READMEs), Markdown is the most natural way for humans to structure and record organized text. Furthermore, **Markdown is the "Lingua Franca (common language) between Humans and AI", where AI (LLMs) excel at accurately interpreting meaning.** A Markdown heading (hashtag `#`) is the **most logical break**, where the author explicitly declares, "this is a semantic boundary." Realizing that maximizing this beautiful structure provides the most rational hint for splitting (the Aha! moment), hashtags became the paramount core specification for logical splitting (`list`).\r\n\r\n## 1. Philosophy of Tool Name and Command Structure\r\n\r\n- **Reason for the name `splist`**\r\n  - **Rationale**: A coined word that succinctly represents the two core features: "split" and "list" (organize/categorize).\r\n- **Reason for explaining `sp` before `list` in documentation**\r\n  - **Rationale**: `sp` (physical cut) is the intuitive, primitive, basic feature, while `list` (logical organization) is its applied and advanced form. This is a UX design choice to teach the primitive feature with lower learning cost first.\r\n- **Reason for abbreviating `split` to `sp`**\r\n  - **Rationale**: To relentlessly minimize user typing cost. Frequently used commands must be executable with the fewest possible characters.\r\n- **Reason for the completion message being the coined verb `🎉 Splisted!`**\r\n  - **Rationale**: Just as we say "Googled" for searching on Google or "Photoshopped" for editing an image, using the tool name as a past participle (verb) establishes a powerful brand identity. It also replaces sterile, lengthy logs with a refined output.\r\n- **Reason for contrasting input as `raw` and output as `splisted`**\r\n  - **Rationale**: To emphasize the contrast between the "raw, unprocessed data" before splitting and the "beautifully organized, completed state (Splisted)" after, thereby giving the user a sense of accomplishment (UX).\r\n- **Reason for changing standalone `list` or `sp` commands to `splist list` / `splist sp`**\r\n  - **Rationale**: To completely prevent conflicts with global commands (namespaces) of the OS or other tools (like UNIX `ls` or `split`), thereby guaranteeing safety.\r\n  - **🚀 [v2 Update] Evolution of Command Order (`splist <filename> <command>`)**\r\n    - From v2, the order was changed from `splist sp memo.md` to `splist memo.md sp`. The reason is the realization that a user\'s cognitive model is Object-Oriented UI (OOUI): "first select the target file (Object), then decide what to do with it (Action)."\r\n    - **Achieving Smart Defaults**: This reordering enabled the ultimate zero-configuration (Smart Default): "If the filename ends in `.md`, it automatically defaults to `list` mode even if the command is omitted." Combined with extension inheritance, this dramatically improved UX.\r\n- **Why exist two approaches: `sp` and `list`?**\r\n  - **Rationale**: Human thought has two distinct desires: a sensory desire of "I want to physically cut it here (marker)" and a logical desire of "I want to organize it according to the heading structure (structure)." A single approach cannot handle all real-world data.\r\n- **Why `✂️` (scissors emoji) is the default marker for physical cut (`sp`)**\r\n  - **Rationale**: It is the ultimate affordance (visual cue) that intuitively conveys the physical action of "cutting here" across language barriers. Also, the probability of accidentally typing `✂️` in normal text is extremely low, providing a robust reason to naturally prevent misfires (unintended splits).\r\n- **Why allow `cut` and uppercase `CUT` in addition to `✂️` as markers**\r\n  - **Rationale**: Two reasons. First, when placing markers in massive text blocks, an uppercase `CUT` has overwhelmingly **higher visibility** than a lowercase `cut`, allowing users to see at a glance where splits will occur while scrolling. Second, to implement a "forgiving parser" that absorbs user input variations (like accidental Caps Lock), eliminating cognitive load from unnecessary errors.\r\n- **Why force markers (`✂️` or `CUT`) to be on a standalone line for `sp`**\r\n  - **Rationale**: For "preservation of context" and "aesthetics." If markers were allowed mid-sentence, files could be unnaturally severed in the middle of words or sentences, destroying the semantic integrity of the text data. By requiring an independent line (line break), we guarantee safe cuts at paragraph boundaries. Visually, this also beautifully clarifies "section changes" even in the pre-split plain text.\r\n\r\n## 2. Development Philosophy in the AI Era\r\n\r\n- **Why build a "tool" when you can just ask AI in a chat to "split this text"?**\r\n  - **Rationale**: Because AI (LLMs) are notoriously bad at "processing long texts 100% perfectly without omission" (they tend to get lazy or halt due to token limits). A robust, deterministic program that never drops a single character must handle the processing, while the AI is utilized to "operate" it (operational assistance)—a necessary division of labor placing the right tool in the right spot.\r\n- **Why design it to be executable by Agents (Agentic Workflow)?**\r\n  - **Rationale**: Black terminal screens (CLI) and argument rules are intimidating to non-engineers. By designing a UX intended for interactive execution via AI agents (showing previews before acting), we make the tool safe and accessible to everyone.\r\n- **Why create a dedicated CLI tool when engineers can just use `awk`, `split`, or `csplit`?**\r\n  - **Rationale**: While traditional Unix tools are powerful, they are structurally blind. `split` cuts mechanically by line count, severing text mid-sentence. `awk` and `csplit` can split by patterns (like `## `), but they require complex one-liners, generate meaningless sequential filenames (like `xx00`), and cannot protect "fake headings" inside code blocks. SPLIST was created to bridge this gap: it understands Markdown structure natively, generates meaningful filenames extracted directly from the headings, and features robust safety guards (like ignoring code blocks), providing a fail-safe, out-of-the-box solution that typical Unix commands cannot achieve.\r\n- **Response to: "Why \'physically split\' files when you can just use a TOC to navigate inside?"**\r\n  - **Rationale**: A TOC is merely a "jump within one giant file" and does not solve the root problems. The reasons are multifold:\r\n    1. **Editor Performance Degradation**: Placing a massive TOC at the top of a super-long file slows down rendering and file loading in editors like VS Code, making them sluggish.\r\n    2. **Maintenance Pain**: Every time you change or add a heading while writing, you have the tedious chore of manually regenerating/updating the TOC.\r\n    3. **AI and Human Cognitive Limits**: It creates scrolling hell for humans. **For AI (LLMs), a single massive file induces context loss and degrades information extraction accuracy (laziness).**\r\n    By physically splitting files at the OS level, editors open instantly, and the OS Explorer (tree view) itself acts as an "auto-updating, ultimate TOC", freeing you from all these stresses.\r\n\r\n## 3. Naming Conventions and Option UX\r\n\r\n- **Why adopt `v` and `vv` for typing support (auto-conversion to `#` and `##`) instead of other keys?**\r\n  - **Rationale**: Ergonomics and misfire prevention. The hashtag `#` requires `Shift + 3`, which slows down writing. We analyzed single-handed typing speed and standard OS shortcuts (like `Ctrl + F/S/A/C`). While keys like `f`, `s`, and `a` are on the home row, they appear too frequently at the start of English words ("for", "so", "a"), leading to massive misfires (unintended heading conversions). The letter `v` is positioned perfectly for the left index finger (zero-distance), and words rarely start with a standalone `v ` on a new line, ensuring safety. Furthermore, `v [Heading Text]` enables a "dual-wielding" input where a single keystroke acts as both a structural marker and title, fulfilling the ultimate criteria of being "One-handed, Fastest, and Safest".\r\n- **Why prefix output directories (parent folders) with emojis like `✂️` (for sp) or `🔢` (for list)?**\r\n  - **Rationale**: For "overwhelming visibility (affordance) in the file tree" and "explicit indication that it is generated content." In an Explorer full of text-only folders, emojis instantly and intuitively indicate "this folder was auto-generated by SPLIST" and "whether it was generated by physical cut (✂️) or logical organization (🔢)." This is a safety design to prevent users from panicking by confusing them with their precious original folders.\r\n- **Why prefix generated files with sequential numbers?**\r\n  - **Rationale**: To automatically preserve the original "sequence (context)" of the split text under the file system\'s default sort order (alphabetical).\r\n- **Why commands work whether OPTIONs have hyphens (`-`) or not**\r\n  - **Rationale**: To implement a "forgiving parser." Even if users forget strict CLI grammar (`-` or `--`), the system grasps their intent and continues processing without throwing errors.\r\n- **Why allow arbitrary permutation (order) of OPTIONs**\r\n  - **Rationale**: Because humans may think of the "target file" or the "option" first depending on the situation. By not forcing a typing order, we lower cognitive load.\r\n- **Why unify prefixes like `-fmex` instead of `exfm`**\r\n  - **Rationale**: By grouping front-matter related options starting with `fm`, it helps user memory retention and aligns with the natural typing thought sequence (Category → Specific Action).\r\n\r\n## 4. File System and Safety Design\r\n\r\n- **Why append versions like `_v02` instead of overwriting when executing the same file, and why not use dates as default?**\r\n  - **Rationale**: First, to absolutely guarantee we never destroy (overwrite) user assets. Second, defaulting to dates (e.g., `_20260719`) makes names too long and lowers visibility. For rapid, repeated trial executions, short suffixes like `_v02`, `_v03` provide vastly superior UX. (Dates are separated into the `-d` option).\r\n- **Why intentionally omit a hard limit (like `_v99` error) on version sequences (YAGNI Principle)**\r\n  - **Rationale**: This tool is strictly a single-shot (One-Shot) execution process; structural bugs causing infinite loops do not exist within the tool. If a file were to multiply infinitely up to `_v1000`, it would only be due to an "external shell script logic error written by the user," such as:\r\n    ```bash\r\n    # Example of a user script error (unintended infinite loop)\r\n    while true; do\r\n      splist README.md list\r\n    done\r\n    ```\r\n    Building overprotective safety mechanisms into the Core to prevent "user shell script errors" (which are out of scope) is Over-Engineering (YAGNI). It violates Article 3 ("Purity of Core") and Article 1 ("Reduce cognitive load / keep code simple"). Thus, no upper limit is set.\r\n- **Why zero-pad numbers to two digits (e.g., `01_` or `_v02`)?**\r\n  - **Rationale**: Due to standard OS file sorting behavior (lexicographical/alphabetical). If single digits like `1_` were used, passing 10 would result in sorting like `1_`, `10_`, `11_`, `2_`, breaking the sequence. Zero-padding (`01`) guarantees they line up beautifully and sequentially (natural sort) on the OS.\r\n- **Why allow the tool to split its own README (Dogfooding)?**\r\n  - **Rationale**: To provide the "ultimate onboarding (Quick Start)" experience, allowing users to immediately witness the tool\'s power right after installation without needing to prepare extra sample files.\r\n\r\n## 5. Structure Preservation and Cleansing in Logical Split (`list`)\r\n\r\n- **Why H2 (`##`) is the default target hierarchy for logical split (`list`)**\r\n  - **Rationale**: In typical Markdown documents, H1 (`#`) often exists solely as the "Document Title." Splitting by H1 would just output one giant file, defeating the purpose of splitting. Conversely, defaulting to H3 or H4 shreds the file too finely. Since H2 is the most perfectly balanced unit humans recognize as "Chapters/Sections", it is adopted as the configuration-free "Smart Default".\r\n- **Why Single-Folder Output (not splitting folders per heading)**\r\n  - **Rationale**: Because scattering a swarm of generated files across the current directory induces user panic. Files must always be encapsulated within a single parent folder.\r\n- **Why extract Front Matter independently (`-fm00`)**\r\n  - **Rationale**: Body text and metadata are fundamentally different types of information. Blindly merging them breaks the data structure, so it is rationally detached as an independent `00_FrontMatter.md`.\r\n- **Why auto-cleanse headings (remove Markdown decorations)**\r\n  - **Rationale**: Forbidden characters or decorations in filenames trigger OS errors. However, forcing users to "write clean headings" is system negligence. The system must take on the dirty work of cleansing.\r\n- **Why keep the dividing heading (e.g., H1) at the top of the split file instead of discarding it**\r\n  - **Rationale**: Because the heading itself is a critical piece of the document data. Discarding it destroys the semantic structure of the document.\r\n- **Why auto-fallback to H3 if H2 is missing**\r\n  - **Rationale**: Real-world Markdown isn\'t always written beautifully by the book; users often skip heading levels. Rather than throwing errors or destroying structure, the tool infers the user\'s "true intent" and auto-adapts (acting as a forgiving parser).\r\n- **Why wait for the first top-level heading (Pre-Heading Guard)**\r\n  - **Rationale**: In real-world documents, "warnings" or "metadata (H4, etc.)" often precede the actual title. Blindly parsing an early H4 as the parent folder results in a nonsensical structure. This flexibility delays parent folder determination until the first top-level heading (H1) appears.\r\n- **Why fallback to the original "Filename" as the parent folder if no headings exist**\r\n  - **Rationale**: Even if a file like `CHANGELOG.md` (which often starts at H2) or plain text with zero headings is input, the system must not crash or scatter files chaotically in the root directory. Instead, it beautifully encapsulates them in a safe "quarantine folder" named after the file.\r\n\r\n## 6. Codebase Architecture and Modification Boundaries\r\n\r\n- **Why `splist.js` contains no logic and is just an entry point**\r\n  - **Rationale**: To completely separate the OS (Node.js) invocation point from the actual application logic. `splist.js` merely passes arguments, while `cli.js` handles all traffic control. This ensures testability for future test code or direct programmatic invocation.\r\n  - **🚀 [v2 Update] Architectural Evolution (Pipeline and Outer Shell Separation)**\r\n    - In v2, `splist.js` evolved from a mere entry point to a **Pipeline Orchestrator** managing "Input → Directory Creation → Rule Determination → Output". Instead, `cli.js` was positioned as the new "Outer Shell (entryway)" of the project.\r\n    - This separation allows the pure pipeline processing (`splist.js`) to be reused unscathed when invoked not just from the "CLI (black screen)" but also from "VS Code Extensions" or "Web Apps", by simply detaching the argument parser (`cli.js`).\r\n- **Why `cli.js` (Router) exists**\r\n  - **Rationale**: To prevent tight coupling between user input parsing (arguments/options) and execution of actual logic (sp / list). With `cli.js` solely responsible for validation and routing, command modules can focus on "pure processing," resulting in a robust design.\r\n- **The true reason for eliminating third-party dependencies (Zero-Dependency)**\r\n  - **Rationale**: The adage "don\'t reinvent the wheel" applies when building complex systems like AST parsers from scratch. The logic this tool performs—"finding options from arguments" or "splitting strings by `---` or `#`"—are trivial, standard JavaScript string operations (a few regex lines), not even qualifying as reinvention. In reality, introducing a standard CLI parser (e.g., `commander`) or YAML parser (e.g., `js-yaml`) balloons the footprint to **100KB–300KB+ (tens of thousands of lines)** including dependencies. In contrast, this tool\'s custom parsing is just dozens of lines, weighing **a few hundred bytes (~1/1000th the size)**. Bringing in a massive, maintenance-heavy, security-risk-prone "electric chainsaw" just to cut paper is an anti-pattern that pollutes the system. We eliminate external dependencies to preserve this overwhelming lightness and simplicity.\r\n- **Why we don\'t implement complex class designs or plugin systems for future extensions (YAGNI)**\r\n  - **Rationale**: The fear that "if we have 50 Options later, it will become spaghetti code" is based on the overbearing premise that the tool author must centrally manage everything. In this tool, Options (flesh) are simply "added locally (as scripts or forks) by the people who need them, when they need them." Pre-building massive plugin managers or OOP interfaces into the Core for unseen Options is severe Over-Engineering (YAGNI). Maintaining a procedural, rudimentary codebase that allows anyone to quickly bolt on their own logic is the design that maximizes hackability and user freedom.\r\n- **Why opportunities to modify the Core engine (`core/`) are heavily restricted**\r\n  - **Rationale**: Based on Article 3 (Separation of Bone and Flesh), all new or convenience features must be added as Options (flesh). Modifying Core code is strictly limited to these 3 "Engine Tuning (sharpening)" scenarios:\r\n    1. **Extreme Performance Optimization**: (e.g., Processing 100MB files faster and with less memory via Streams).\r\n    2. **Bolstering Defense Against the Unknown Chaos**: (e.g., Preventing crashes from exotic text encodings or hidden characters).\r\n    3. **Adapting to OS/File System Changes**: (e.g., Enhancing sanitization to avoid file creation errors in specific environments).\r\n    In short, Core modifications are never for "adding new features," but only to make it "faster and unbreakable."\r\n- **🚀 [v2 Update] Why error handling in Core was delegated from `process.exit(1)` to `throw new Error()`**\r\n  - **Rationale**: To completely decouple the Core engine (`core/`) from the CLI execution environment, making it a true "Pure Module". If `process.exit(1)` were called inside the Core, embedding SPLIST into a "VS Code Extension" or "Web App" in the future would cause the entire parent application process to crash over a minor SPLIST error. By placing the final responsibility for error termination on the outermost shell (`cli.js`), we achieve a perfect separation of concerns.\r\n- **🚀 [v2 Update] Why the Core engine was consolidated into a single async generator (`async function*`)**\r\n  - **Rationale**: To evolve the processing from "accumulating everything into an array before returning" to a Stream architecture that "reads line-by-line and `yield`s chunks as they form." This realizes extreme performance optimization and memory conservation, ensuring that even if massive multi-GB log files are input in the future, it will never cause an Out-Of-Memory (OOM) panic.\r\n- **🚀 [v2 Update] Why the pipeline was explicitly split into `phase1.js` ~ `phase4.js` files**\r\n  - **Rationale**: To provide procedural clarity, so users wanting to add extensions (Options) can intuitively understand at a glance "where to insert their logic (hooks)." While avoiding over-engineering (YAGNI), laying down clear boundaries—"Input/Protection(1)", "Vessel Creation(2)", "Rules/Naming(3)", and "Output/Finishing(4)"—maximizes maintainability and hackability.\r\n- **🚀 [v2 Update] Why option matching in `argsParser.js` uses `switch` instead of `if-else if` with `[...].includes()`**\r\n  - **Rationale**: \r\n    1. **Elimination of Temporary Array Allocation**: Modern JS engines allocate temporary array instances on every `[\'d\', \'date\'].includes(opt)` evaluation inside argument loops. Replacing this with `switch` cases avoids unnecessary heap allocations.\r\n    2. **V8 Engine Branch Optimization**: A `switch` statement enables JavaScript engines (V8) to construct jump tables for constant-time branch evaluation.\r\n    3. **Prioritized Frequency & Code Clarity**: Placing high-frequency options (such as output directory `-o / -out / -output`) at the top of the `switch` ensures early matching for typical usage patterns while keeping the code clean, modern, and zero-dependency.\r\n- **Why the CLI is integrated via `package.json` (bin) and a Shebang**\r\n  - **Rationale**: To instantly transform a standard JavaScript file into a cross-platform executable CLI command without relying on global path hacks or third-party wrappers. The `bin` field in `package.json` registers the command globally upon installation (`npm link`), while the Shebang (`#!/usr/bin/env node`) at the top of `cli.js` instructs the host OS to execute the script using the Node.js engine. This native approach ensures seamless installation and zero-dependency execution across Windows, Mac, and Linux environments.\r\n- **🚀 [v2 Update] Why `build-web.cjs` bundles core logic into a zero-dependency `splist-core.js` for Web / Browser environments**\r\n  - **Rationale**: The Core engine (`src/core/`) was designed as pure JavaScript logic decoupled from OS-specific Node.js calls (e.g. replacing `process.exit(1)` with `throw`, and mocking file system/path operations in a virtual file system). `build-web.cjs` leverages this purity to bundle the core modules into a single `splist-core.js` script with an in-memory Virtual File System (`window.VFS`). This allows the exact same splitting engine to run natively inside web browsers (such as the React Web App) without a backend server or heavy external bundlers, preserving the Zero-Dependency Oath while extending accessibility to non-terminal users.\r\n',at=(0,v.lazy)(async()=>{let[e,t]=await Promise.all([et(()=>import(`./react-markdown-m92MCvHz.js`),__vite__mapDeps([0,1]),import.meta.url),et(()=>import(`./remark-gfm-zDqDfnnT.js`),__vite__mapDeps([2,1]),import.meta.url)]),n=e.default,r=t.default;return{default:({children:e})=>(0,O.jsx)(n,{remarkPlugins:[r],children:e})}});function ot({isOpen:e,onClose:t}){let[n,r]=(0,v.useState)(`readme`);return(0,v.useEffect)(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[e]),e?(0,O.jsx)(`div`,{className:`modal-overlay`,onClick:t,style:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(0, 0, 0, 0.75)`,backdropFilter:`blur(4px)`,zIndex:1e3,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,O.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{backgroundColor:`#1e1e1e`,border:`1px solid #3c3c3c`,borderRadius:`8px`,width:`90%`,maxWidth:`1000px`,height:`85vh`,display:`flex`,flexDirection:`column`,boxShadow:`0 20px 40px rgba(0,0,0,0.5)`},children:[(0,O.jsxs)(`div`,{className:`modal-header`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,borderBottom:`1px solid #3c3c3c`,padding:`15px 20px`,backgroundColor:`#252526`,borderTopLeftRadius:`8px`,borderTopRightRadius:`8px`},children:[(0,O.jsxs)(`div`,{className:`tabs`,style:{display:`flex`,gap:`15px`},children:[(0,O.jsx)(`button`,{className:`tab-btn ${n===`readme`?`active`:``}`,onClick:()=>r(`readme`),style:{background:`none`,border:`none`,color:n===`readme`?`#007acc`:`#a0a0a0`,cursor:`pointer`,fontSize:`14px`,fontWeight:n===`readme`?`bold`:`normal`,padding:`5px 0`,borderBottom:n===`readme`?`2px solid #007acc`:`2px solid transparent`},children:`📝 README (Overview)`}),(0,O.jsx)(`button`,{className:`tab-btn ${n===`usage`?`active`:``}`,onClick:()=>r(`usage`),style:{background:`none`,border:`none`,color:n===`usage`?`#007acc`:`#a0a0a0`,cursor:`pointer`,fontSize:`14px`,fontWeight:n===`usage`?`bold`:`normal`,padding:`5px 0`,borderBottom:n===`usage`?`2px solid #007acc`:`2px solid transparent`},children:`📖 USAGE (Manual)`}),(0,O.jsx)(`button`,{className:`tab-btn ${n===`design`?`active`:``}`,onClick:()=>r(`design`),style:{background:`none`,border:`none`,color:n===`design`?`#007acc`:`#a0a0a0`,cursor:`pointer`,fontSize:`14px`,fontWeight:n===`design`?`bold`:`normal`,padding:`5px 0`,borderBottom:n===`design`?`2px solid #007acc`:`2px solid transparent`},children:`🧠 DESIGN RATIONALE`})]}),(0,O.jsx)(`button`,{className:`close-btn`,onClick:t,style:{background:`none`,border:`none`,color:`#c5c5c5`,cursor:`pointer`,fontSize:`20px`},children:`×`})]}),(0,O.jsx)(`div`,{className:`modal-body`,style:{flex:1,overflowY:`auto`,padding:`10px`},children:(()=>{let e=``;switch(n){case`readme`:e=Ge;break;case`usage`:e=Ke;break;case`design`:e=it;break}return(0,O.jsx)(`div`,{className:`markdown-body`,style:{padding:`20px`,lineHeight:`1.6`,color:`#e0e0e0`},children:(0,O.jsx)(v.Suspense,{fallback:(0,O.jsx)(`div`,{style:{color:`#858585`},children:`Loading...`}),children:(0,O.jsx)(at,{children:e})})})})()})]})}):null}function st({activeView:e,setActiveView:t,onOpenDocs:n}){return(0,O.jsxs)(`aside`,{className:`vscode-activity-bar`,children:[(0,O.jsxs)(`div`,{className:`activity-top`,children:[(0,O.jsxs)(`button`,{className:`activity-icon-btn ${e===`explorer`?`active`:``}`,onClick:()=>t(`explorer`),title:`Explorer (Files & Results)`,children:[(0,O.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,O.jsx)(`path`,{d:`M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z`}),(0,O.jsx)(`polyline`,{points:`13 2 13 9 20 9`})]}),(0,O.jsx)(`span`,{className:`activity-label`,children:`FILES`})]}),(0,O.jsxs)(`button`,{className:`activity-icon-btn ${e===`demo`?`active`:``}`,onClick:()=>t(`demo`),title:`Demo Test Cases Gallery`,children:[(0,O.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,O.jsx)(`polygon`,{points:`12 2 2 7 12 12 22 7 12 2`}),(0,O.jsx)(`polyline`,{points:`2 17 12 22 22 17`}),(0,O.jsx)(`polyline`,{points:`2 12 12 17 22 12`})]}),(0,O.jsx)(`span`,{className:`activity-label`,children:`DEMOS`})]}),(0,O.jsxs)(`button`,{className:`activity-icon-btn ${e===`docs`?`active`:``}`,onClick:()=>{t(`docs`),n()},title:`Documentation Manuals (README/USAGE)`,children:[(0,O.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,O.jsx)(`path`,{d:`M4 19.5A2.5 2.5 0 0 1 6.5 17H20`}),(0,O.jsx)(`path`,{d:`M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z`})]}),(0,O.jsx)(`span`,{className:`activity-label`,children:`DOCS`})]})]}),(0,O.jsx)(`div`,{className:`activity-bottom`,children:(0,O.jsx)(`a`,{href:`https://github.com/splists/splist`,target:`_blank`,rel:`noopener noreferrer`,className:`activity-icon-btn`,title:`GitHub Repository`,children:(0,O.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`20`,height:`20`,fill:`currentColor`,children:(0,O.jsx)(`path`,{d:`M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z`})})})})]})}function ct({availableInputs:e,results:t,errorMsg:n,selectedFile:r,onSelectInput:i,onSelectOutput:a,demoCaseNames:o,onSelectDemo:s,onLoadSample:c}){let[l,u]=(0,v.useState)({}),d={};t.forEach(e=>{let t=e.filepath.split(`/`),n=t.pop()||`unknown.md`,r=t.length>0?t[t.length-1]:`Output`;d[r]||(d[r]=[]),d[r].push({name:n,data:e.data})});let f=e=>{u(t=>({...t,[e]:t[e]!==void 0&&!t[e]}))},p=async(e,t,n)=>{if(e.stopPropagation(),window.JSZip===void 0){alert(`JSZip library is not loaded. Cannot create ZIP.`);return}let r=new window.JSZip;n.forEach(e=>{r.file(e.name,e.data)});try{let e=await r.generateAsync({type:`blob`}),n=URL.createObjectURL(e),i=document.createElement(`a`);i.href=n,i.download=`${t}.zip`,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}catch(e){console.error(`ZIP generation failed:`,e),alert(`Failed to generate ZIP file.`)}},m=(e,t,n)=>{e.stopPropagation();let r=new Blob([n],{type:`text/markdown;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,a.style.display=`none`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},h=Object.keys(d);return(0,O.jsxs)(`aside`,{className:`vscode-sidebar-explorer`,children:[(0,O.jsx)(`div`,{className:`sidebar-section-header`,children:(0,O.jsx)(`span`,{children:`EXPLORER`})}),(0,O.jsxs)(`div`,{className:`sidebar-tree-group`,children:[(0,O.jsx)(`div`,{className:`sidebar-group-title`,children:(0,O.jsx)(`span`,{children:`DOCUMENT INPUT`})}),e.map(e=>(0,O.jsxs)(`div`,{className:`sidebar-tree-item ${r?.name===e.name&&r?.isInput?`active`:``}`,onClick:()=>i(e.name,e.content),children:[(0,O.jsxs)(`svg`,{className:`file-icon-svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,O.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,O.jsx)(`polyline`,{points:`14 2 14 8 20 8`})]}),(0,O.jsx)(`span`,{className:`tree-item-name`,children:e.name})]},e.name))]}),o.length>0&&(0,O.jsxs)(`div`,{className:`sidebar-tree-group`,children:[(0,O.jsx)(`div`,{className:`sidebar-group-title`,children:(0,O.jsx)(`span`,{children:`DEMO TEST CASES`})}),(0,O.jsx)(`div`,{className:`sidebar-demo-picker`,children:(0,O.jsxs)(`select`,{className:`sidebar-select-input`,onChange:e=>s(e.target.value),defaultValue:``,children:[(0,O.jsx)(`option`,{value:``,disabled:!0,children:`📁 Pick a Test Case...`}),o.map(e=>(0,O.jsx)(`option`,{value:e,children:e},e))]})})]}),(0,O.jsxs)(`div`,{className:`sidebar-tree-group output-group`,children:[(0,O.jsx)(`div`,{className:`sidebar-group-title`,children:(0,O.jsxs)(`span`,{children:[`SPLISTED OUTPUT (`,t.length,`)`]})}),n&&(0,O.jsxs)(`div`,{className:`sidebar-error-msg`,children:[`⚠️ `,n]}),t.length===0&&!n&&(0,O.jsxs)(`div`,{className:`sidebar-empty-hint`,children:[`Run `,(0,O.jsx)(`strong`,{children:`SPLIST`}),` to generate split folders here.`]}),h.map(e=>{let t=d[e],n=l[e]!==!1;return(0,O.jsxs)(`div`,{className:`sidebar-folder-node`,children:[(0,O.jsxs)(`div`,{className:`sidebar-folder-row`,onClick:()=>f(e),children:[(0,O.jsx)(`span`,{className:`chevron-icon`,children:n?`▼`:`▶`}),(0,O.jsx)(`svg`,{className:`folder-icon-svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,O.jsx)(`path`,{d:`M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z`})}),(0,O.jsx)(`span`,{className:`folder-title-text`,children:e}),(0,O.jsx)(`button`,{className:`sidebar-action-btn zip-btn`,onClick:n=>p(n,e,t),title:`Download Folder ZIP`,children:(0,O.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,O.jsx)(`path`,{d:`M21 8v13H3V8`}),(0,O.jsx)(`path`,{d:`M1 3h22v5H1z`})]})})]}),n&&(0,O.jsx)(`div`,{className:`sidebar-folder-children`,children:t.map(e=>(0,O.jsxs)(`div`,{className:`sidebar-tree-item child-item ${r?.name===e.name&&!r?.isInput?`active`:``}`,onClick:()=>a(e.name,e.data),children:[(0,O.jsxs)(`svg`,{className:`file-icon-svg`,width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,O.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,O.jsx)(`polyline`,{points:`14 2 14 8 20 8`})]}),(0,O.jsx)(`span`,{className:`tree-item-name`,children:e.name}),(0,O.jsx)(`button`,{className:`sidebar-action-btn file-dl-btn`,onClick:t=>m(t,e.name,e.data),title:`Download File`,children:(0,O.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,O.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,O.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,O.jsx)(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]})})]},e.name))})]},e)})]})]})}function lt({inputFileName:e,splitMode:t,generateToc:n,resultsCount:r,errorMsg:i,hasInput:a,onSplit:o}){let[s,c]=(0,v.useState)(!1),l=n?` -toc`:``,u=`splist ${e||`input.md`} ${t}${l}`;return(0,v.useEffect)(()=>{e===`README.md`&&r>0&&c(!0)},[e,r]),(0,O.jsxs)(`div`,{className:`vscode-terminal-panel`,children:[(0,O.jsxs)(`div`,{className:`terminal-header`,children:[(0,O.jsxs)(`div`,{className:`terminal-tabs`,children:[(0,O.jsx)(`span`,{className:`terminal-tab active`,children:`TERMINAL`}),(0,O.jsx)(`span`,{className:`terminal-tab`,children:`OUTPUT`}),(0,O.jsx)(`span`,{className:`terminal-tab`,children:`PROBLEMS`})]}),(0,O.jsxs)(`div`,{className:`terminal-status-info`,children:[`CLI EQUIVALENT: `,(0,O.jsx)(`code`,{className:`cmd-badge`,children:u})]})]}),(0,O.jsxs)(`div`,{className:`terminal-body`,children:[s&&e!==`README.md`&&(0,O.jsxs)(`div`,{className:`terminal-history-block`,style:{marginBottom:`16px`,opacity:.8},children:[(0,O.jsx)(`div`,{className:`terminal-line prompt-line`,style:{display:`flex`,alignItems:`center`,gap:`8px`},children:(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{className:`prompt-path`,children:`PS C:\\splist>`}),` `,(0,O.jsxs)(`span`,{className:`prompt-cmd`,children:[`splist README.md `,t,l]})]})}),(0,O.jsx)(`div`,{className:`terminal-line success-line`,children:`🎉 Splisted! Successfully processed README.md`}),(0,O.jsx)(`div`,{className:`terminal-line hint-line`,style:{color:`#ffd700`,marginTop:`4px`},children:`💡 readme.md has been split. Please select usage.md and click "Run".`})]}),(0,O.jsxs)(`div`,{className:`terminal-line prompt-line`,style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{className:`prompt-path`,children:`PS C:\\splist>`}),` `,(0,O.jsx)(`span`,{className:`prompt-cmd`,children:u})]}),(0,O.jsxs)(`button`,{className:`terminal-run-btn ${a&&r===0?`glow-pulse`:``}`,onClick:o,title:`Execute command`,children:[(0,O.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,O.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})}),`RUN (Enter)`]})]}),i?(0,O.jsxs)(`div`,{className:`terminal-line error-line`,children:[`❌ Error: `,i]}):r>0?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`div`,{className:`terminal-line success-line`,children:[`🎉 Splisted! Successfully processed `,e||`input.md`]}),(0,O.jsxs)(`div`,{className:`terminal-line info-line`,children:[`📁 Created `,r,` structured files in virtual output directory.`]}),e===`README.md`&&(0,O.jsx)(`div`,{className:`terminal-line hint-line`,style:{color:`#ffd700`,marginTop:`8px`},children:`💡 readme.md has been split. Please select usage.md and click "Run".`})]}):(0,O.jsx)(`div`,{className:`terminal-line hint-line`,children:`💡 Press the RUN button above or Ctrl+Enter to execute splist.`})]})]})}var ut=Object.assign({"../../demo_cases/demo_cases_raw/01_sp_showcase_single_cut_default.md":b,"../../demo_cases/demo_cases_raw/02_sp_showcase_multi_cut_default.md":x,"../../demo_cases/demo_cases_raw/03_sp_showcase_custom_marker_opt.md":ee,"../../demo_cases/demo_cases_raw/04_sp_showcase_marker_trailing_text_default.md":S,"../../demo_cases/demo_cases_raw/05_sp_option_un_opt.md":C,"../../demo_cases/demo_cases_raw/06_sp_option_toc_opt.md":te,"../../demo_cases/demo_cases_raw/07_sp_safety_consecutive_cuts_default.md":ne,"../../demo_cases/demo_cases_raw/08_sp_safety_start_with_cut_default.md":re,"../../demo_cases/demo_cases_raw/09_sp_safety_end_with_cut_default.md":ie,"../../demo_cases/demo_cases_raw/10_sp_safety_false_scissors_default.md":ae,"../../demo_cases/demo_cases_raw/11_sp_safety_no_cuts_default.md":oe,"../../demo_cases/demo_cases_raw/12_sp_safety_cut_in_codeblock_default.md":se,"../../demo_cases/demo_cases_raw/13_sp_safety_long_and_invalid_chars_default.md":ce,"../../demo_cases/demo_cases_raw/14_sp_safety_massive_volume_default.md":le,"../../demo_cases/demo_cases_raw/15_sp_warn_inline_cut_default.md":ue,"../../demo_cases/demo_cases_raw/16_list_showcase_flat_h1_default.md":de,"../../demo_cases/demo_cases_raw/17_list_showcase_nested_standard_default.md":w,"../../demo_cases/demo_cases_raw/18_list_showcase_nested_single_default.md":T,"../../demo_cases/demo_cases_raw/19_list_showcase_typing_support_default.md":fe,"../../demo_cases/demo_cases_raw/20_list_showcase_typing_support_vvv_default.md":pe,"../../demo_cases/demo_cases_raw/21_list_option_custom_depth_opt.md":me,"../../demo_cases/demo_cases_raw/22_list_option_keep_opt.md":he,"../../demo_cases/demo_cases_raw/23_list_option_un_opt.md":E,"../../demo_cases/demo_cases_raw/24_list_option_toc_opt.md":D,"../../demo_cases/demo_cases_raw/25_list_option_heading_promotion_default.md":ge,"../../demo_cases/demo_cases_raw/26_list_safety_overview_logic_default.md":_e,"../../demo_cases/demo_cases_raw/27_list_safety_naming_limit_default.md":ve,"../../demo_cases/demo_cases_raw/28_list_safety_deep_nesting_default.md":ye,"../../demo_cases/demo_cases_raw/29_list_safety_duplicate_headings_default.md":be,"../../demo_cases/demo_cases_raw/30_list_safety_mixed_markers_default.md":xe,"../../demo_cases/demo_cases_raw/31_list_safety_codeblock_trap_default.md":Se,"../../demo_cases/demo_cases_raw/32_list_safety_front_matter_default.md":Ce,"../../demo_cases/demo_cases_raw/33_list_option_front_matter_fmex_opt.md":we,"../../demo_cases/demo_cases_raw/34_list_option_front_matter_fm01_opt.md":Te,"../../demo_cases/demo_cases_raw/35_list_option_front_matter_fm00_opt.md":Ee,"../../demo_cases/demo_cases_raw/36_list_safety_bad_markdown_default.md":De,"../../demo_cases/demo_cases_raw/37_list_safety_massive_volume_default.md":Oe,"../../demo_cases/demo_cases_raw/38_list_warn_no_space_heading_default.md":ke,"../../demo_cases/demo_cases_raw/39_list_warn_unclosed_codeblock_default.md":Ae,"../../demo_cases/demo_cases_raw/40_common_option_conflict_default_default.md":je,"../../demo_cases/demo_cases_raw/41_common_option_conflict_date_opt.md":Me,"../../demo_cases/demo_cases_raw/42_common_option_conflict_time_opt.md":Ne,"../../demo_cases/demo_cases_raw/43_common_option_conflict_skip_opt.md":Pe,"../../demo_cases/demo_cases_raw/44_common_option_conflict_force_opt.md":Fe,"../../demo_cases/demo_cases_raw/45_list_massive_100_sections_default.md":Ie,"../../demo_cases/demo_cases_raw/46_integration_vscode_color_theme_default.md":Le,"../../demo_cases/demo_cases_raw/47_integration_official_manual_default.md":Re,"../../demo_cases/demo_cases_raw/48_integration_no_h2_only_h3_default.md":ze,"../../demo_cases/demo_cases_raw/49_integration_multi_h1_sentinel_default.md":Be,"../../demo_cases/demo_cases_raw/50_integration_markdown_formatting_in_heading_default.md":Ve,"../../demo_cases/demo_cases_raw/51_integration_no_headings_default.md":He,"../../demo_cases/demo_cases_raw/52_integration_open_brand_h1_preceding_default.md":Ue,"../../demo_cases/demo_cases_raw/53_integration_mui_changelog_no_h1_default.md":We}),dt=Object.keys(ut).map(e=>{let t=e.split(`/`);return t[t.length-1]}).sort();function ft(){let[e,t]=(0,v.useState)(Ge),[n,r]=(0,v.useState)(`README.md`),[i,a]=(0,v.useState)(`list`),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)([]),[u,d]=(0,v.useState)(``),[f,p]=(0,v.useState)(!1),[m,h]=(0,v.useState)(!1),[g,_]=(0,v.useState)(`explorer`),[y,b]=(0,v.useState)([{name:`README.md`,content:Ge},{name:`USAGE.md`,content:Ke}]),[x,ee]=(0,v.useState)({name:`README.md`,content:Ge,isInput:!0}),S=async(e,t,n,r)=>{if(!e){l([]);return}let i={conflictMode:`v`,generateToc:r,customMarker:n===`sp`?`✂️`:null,frontmatterMode:`extract00`,outDir:null,mode:n},a=t||`input.md`;window.VFS=window.VFS||{},window.VFS[a]=e,window.SPLIST_OUTPUT=[];try{if(window.SplistAPI&&window.SplistAPI.runSplist){let e={fs:window.SplistAPI.fsMock,path:window.SplistAPI.pathMock};await window.SplistAPI.runSplist(a,i,{},e),l([...window.SPLIST_OUTPUT]),d(``)}else d(`SplistAPI is not loaded.`)}catch(e){console.error(e),d(e.message||`Unknown error`)}};(0,v.useEffect)(()=>{let e=setTimeout(()=>{window.SplistAPI&&S(Ge,`README.md`,`list`,!1)},200);return()=>clearTimeout(e)},[]),(0,v.useEffect)(()=>{let e=e=>{e.preventDefault(),e.stopPropagation()};return[`dragenter`,`dragover`,`dragleave`,`drop`].forEach(t=>{document.body.addEventListener(t,e,!1)}),()=>{[`dragenter`,`dragover`,`dragleave`,`drop`].forEach(t=>{document.body.removeEventListener(t,e,!1)})}},[]);let C=()=>{S(e,n,i,o)},te=()=>{t(Ge),r(`README.md`),ee({name:`README.md`,content:Ge,isInput:!0}),S(Ge,`README.md`,i,o)},ne=()=>{t(``),r(`input.md`),ee({name:`input.md`,content:``,isInput:!0}),l([]),d(``)},re=(i,a)=>{let o=i||n||`input.md`,s=a===void 0?e:a;o!==n&&l([]),r(o),t(s),ee({name:o,content:s,isInput:!0})};return(0,O.jsxs)(`div`,{className:`app-container`,children:[(0,O.jsx)(Xe,{onOpenDocs:()=>h(!0)}),(0,O.jsx)(ot,{isOpen:m,onClose:()=>h(!1)}),(0,O.jsxs)(`div`,{className:`ide-layout-body`,children:[(0,O.jsx)(st,{activeView:g,setActiveView:_,onOpenDocs:()=>h(!0)}),(0,O.jsx)(ct,{availableInputs:y,results:c,errorMsg:u,selectedFile:x,onSelectInput:re,onSelectOutput:(e,t)=>{ee({name:e,content:t,isInput:!1})},demoCaseNames:dt,onSelectDemo:e=>{let n=Object.keys(ut).find(t=>t.endsWith(e));if(n&&ut[n]){let i=ut[n];r(e),t(i),ee({name:e,content:i,isInput:!0}),l([])}},onLoadSample:te}),(0,O.jsxs)(`main`,{className:`workspace-container`,children:[(0,O.jsx)(`div`,{className:`workspace single-editor-mode`,children:(0,O.jsx)(nt,{inputText:e,setInputText:t,inputFileName:n,splitMode:i,setSplitMode:a,generateToc:o,setGenerateToc:s,isDragging:f,setIsDragging:p,onSplit:C,onLoadSample:te,onClear:ne,selectedFile:x,onSelectInput:re,onFileDrop:(e,n)=>{b(t=>t.some(t=>t.name===e)?t.map(t=>t.name===e?{...t,content:n}:t):[{name:e,content:n},...t]),r(e),t(n),ee({name:e,content:n,isInput:!0}),l([])}})}),(0,O.jsx)(lt,{inputFileName:n,splitMode:i,generateToc:o,resultsCount:c.length,errorMsg:u,hasInput:!!e,onSplit:C})]})]}),(0,O.jsx)(rt,{splitMode:i,generateToc:o,totalFiles:c.length})]})}(0,y.createRoot)(document.getElementById(`root`)).render((0,O.jsx)(v.StrictMode,{children:(0,O.jsx)(ft,{})}));export{l as a,s as i,d as n,o as r,Ye as t};