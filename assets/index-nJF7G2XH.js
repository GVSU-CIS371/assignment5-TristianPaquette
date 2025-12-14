(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},qr=[],$t=()=>{},sd=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jc=t=>t.startsWith("onUpdate:"),lt=Object.assign,Xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},g_=Object.prototype.hasOwnProperty,Te=(t,e)=>g_.call(t,e),re=Array.isArray,Hr=t=>mi(t)==="[object Map]",id=t=>mi(t)==="[object Set]",Qu=t=>mi(t)==="[object Date]",le=t=>typeof t=="function",Be=t=>typeof t=="string",Nt=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",od=t=>(Re(t)||le(t))&&le(t.then)&&le(t.catch),ad=Object.prototype.toString,mi=t=>ad.call(t),m_=t=>mi(t).slice(8,-1),cd=t=>mi(t)==="[object Object]",Xo=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},__=/-\w/g,Hn=Yo(t=>t.replace(__,e=>e.slice(1).toUpperCase())),y_=/\B([A-Z])/g,br=Yo(t=>t.replace(y_,"-$1").toLowerCase()),ld=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=Yo(t=>t?`on${ld(t)}`:""),Ln=(t,e)=>!Object.is(t,e),io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ud=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Yc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ju;const Zo=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function as(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?I_(r):as(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Re(t))return t}const v_=/;(?![^(]*\))/g,E_=/:([^]+)/,T_=/\/\*[^]*?\*\//g;function I_(t){const e={};return t.replace(T_,"").split(v_).forEach(n=>{if(n){const r=n.split(E_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zc(t){let e="";if(Be(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Zc(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const w_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",A_=Qc(w_);function hd(t){return!!t||t===""}function b_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=To(t[r],e[r]);return n}function To(t,e){if(t===e)return!0;let n=Qu(t),r=Qu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Nt(t),r=Nt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?b_(t,e):!1;if(n=Re(t),r=Re(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!To(t[a],e[a]))return!1}}return String(t)===String(e)}const fd=t=>!!(t&&t.__v_isRef===!0),ar=t=>Be(t)?t:t==null?"":re(t)||Re(t)&&(t.toString===ad||!le(t.toString))?fd(t)?ar(t.value):JSON.stringify(t,dd,2):String(t),dd=(t,e)=>fd(e)?dd(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qa(r,i)+" =>"]=s,n),{})}:id(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qa(n))}:Nt(e)?qa(e):Re(e)&&!re(e)&&!cd(e)?String(e):e,qa=(t,e="")=>{var n;return Nt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class pd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){++this._on===1&&(this.prevScope=st,st=this)}off(){this._on>0&&--this._on===0&&(st=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gd(t){return new pd(t)}function md(){return st}function S_(t,e=!1){st&&st.cleanups.push(t)}let Se;const Ha=new WeakSet;class _d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&st.active&&st.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ha.has(this)&&(Ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xu(this),Ed(this);const e=Se,n=Dt;Se=this,Dt=!0;try{return this.fn()}finally{Td(this),Se=e,Dt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nl(e);this.deps=this.depsTail=void 0,Xu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fc(this)&&this.run()}get dirty(){return fc(this)}}let yd=0,$s,qs;function vd(t,e=!1){if(t.flags|=8,e){t.next=qs,qs=t;return}t.next=$s,$s=t}function el(){yd++}function tl(){if(--yd>0)return;if(qs){let e=qs;for(qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$s;){let e=$s;for($s=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ed(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Td(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),nl(r),R_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function fc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Id(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Id(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ti)||(t.globalVersion=ti,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fc(t))))return;t.flags|=2;const e=t.dep,n=Se,r=Dt;Se=t,Dt=!0;try{Ed(t);const s=t.fn(t._value);(e.version===0||Ln(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=n,Dt=r,Td(t),t.flags&=-3}}function nl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)nl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function R_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dt=!0;const wd=[];function dn(){wd.push(Dt),Dt=!1}function pn(){const t=wd.pop();Dt=t===void 0?!0:t}function Xu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Se;Se=void 0;try{e()}finally{Se=n}}}let ti=0;class C_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!Dt||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new C_(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,Ad(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=r)}return n}trigger(e){this.version++,ti++,this.notify(e)}notify(e){el();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{tl()}}}function Ad(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ad(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Io=new WeakMap,pr=Symbol(""),dc=Symbol(""),ni=Symbol("");function ot(t,e,n){if(Dt&&Se){let r=Io.get(t);r||Io.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new rl),s.map=r,s.key=n),s.track()}}function on(t,e,n,r,s,i){const a=Io.get(t);if(!a){ti++;return}const c=l=>{l&&l.trigger()};if(el(),e==="clear")a.forEach(c);else{const l=re(t),h=l&&Xo(n);if(l&&n==="length"){const d=Number(r);a.forEach((g,y)=>{(y==="length"||y===ni||!Nt(y)&&y>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(ni)),e){case"add":l?h&&c(a.get("length")):(c(a.get(pr)),Hr(t)&&c(a.get(dc)));break;case"delete":l||(c(a.get(pr)),Hr(t)&&c(a.get(dc)));break;case"set":Hr(t)&&c(a.get(pr));break}}tl()}function P_(t,e){const n=Io.get(t);return n&&n.get(e)}function Mr(t){const e=ye(t);return e===t?e:(ot(e,"iterate",ni),Tt(t)?e:e.map(xt))}function ea(t){return ot(t=ye(t),"iterate",ni),t}function Pn(t,e){return gn(t)?hn(t)?Yr(xt(e)):Yr(e):xt(e)}const V_={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,t=>Pn(this,t))},concat(...t){return Mr(this).concat(...t.map(e=>re(e)?Mr(e):e))},entries(){return za(this,"entries",t=>(t[1]=Pn(this,t[1]),t))},every(t,e){return nn(this,"every",t,e,void 0,arguments)},filter(t,e){return nn(this,"filter",t,e,n=>n.map(r=>Pn(this,r)),arguments)},find(t,e){return nn(this,"find",t,e,n=>Pn(this,n),arguments)},findIndex(t,e){return nn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nn(this,"findLast",t,e,n=>Pn(this,n),arguments)},findLastIndex(t,e){return nn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wa(this,"includes",t)},indexOf(...t){return Wa(this,"indexOf",t)},join(t){return Mr(this).join(t)},lastIndexOf(...t){return Wa(this,"lastIndexOf",t)},map(t,e){return nn(this,"map",t,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...t){return Vs(this,"push",t)},reduce(t,...e){return Yu(this,"reduce",t,e)},reduceRight(t,...e){return Yu(this,"reduceRight",t,e)},shift(){return Vs(this,"shift")},some(t,e){return nn(this,"some",t,e,void 0,arguments)},splice(...t){return Vs(this,"splice",t)},toReversed(){return Mr(this).toReversed()},toSorted(t){return Mr(this).toSorted(t)},toSpliced(...t){return Mr(this).toSpliced(...t)},unshift(...t){return Vs(this,"unshift",t)},values(){return za(this,"values",t=>Pn(this,t))}};function za(t,e,n){const r=ea(t),s=r[e]();return r!==t&&!Tt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const k_=Array.prototype;function nn(t,e,n,r,s,i){const a=ea(t),c=a!==t&&!Tt(t),l=a[e];if(l!==k_[e]){const g=l.apply(t,i);return c?xt(g):g}let h=n;a!==t&&(c?h=function(g,y){return n.call(this,Pn(t,g),y,t)}:n.length>2&&(h=function(g,y){return n.call(this,g,y,t)}));const d=l.call(a,h,r);return c&&s?s(d):d}function Yu(t,e,n,r){const s=ea(t);let i=n;return s!==t&&(Tt(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,Pn(t,c),l,t)}),s[e](i,...r)}function Wa(t,e,n){const r=ye(t);ot(r,"iterate",ni);const s=r[e](...n);return(s===-1||s===!1)&&na(n[0])?(n[0]=ye(n[0]),r[e](...n)):s}function Vs(t,e,n=[]){dn(),el();const r=ye(t)[e].apply(t,n);return tl(),pn(),r}const D_=Qc("__proto__,__v_isRef,__isVue"),bd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nt));function O_(t){Nt(t)||(t=String(t));const e=ye(this);return ot(e,"has",t),e.hasOwnProperty(t)}class Sd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?q_:Vd:i?Pd:Cd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=V_[n]))return l;if(n==="hasOwnProperty")return O_}const c=Reflect.get(e,n,xe(e)?e:r);if((Nt(n)?bd.has(n):D_(n))||(s||ot(e,"get",n),i))return c;if(xe(c)){const l=a&&Xo(n)?c:c.value;return s&&Re(l)?gc(l):l}return Re(c)?s?gc(c):ta(c):c}}class Rd extends Sd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=re(e)&&Xo(n);if(!this._isShallow){const h=gn(i);if(!Tt(r)&&!gn(r)&&(i=ye(i),r=ye(r)),!a&&xe(i)&&!xe(r))return h||(i.value=r),!0}const c=a?Number(n)<e.length:Te(e,n),l=Reflect.set(e,n,r,xe(e)?e:s);return e===ye(s)&&(c?Ln(r,i)&&on(e,"set",n,r):on(e,"add",n,r)),l}deleteProperty(e,n){const r=Te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&on(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nt(n)||!bd.has(n))&&ot(e,"has",n),r}ownKeys(e){return ot(e,"iterate",re(e)?"length":pr),Reflect.ownKeys(e)}}class N_ extends Sd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const x_=new Rd,M_=new N_,L_=new Rd(!0);const pc=t=>t,Qi=t=>Reflect.getPrototypeOf(t);function F_(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),a=Hr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?pc:e?Yr:xt;return!e&&ot(i,"iterate",l?dc:pr),{next(){const{value:g,done:y}=h.next();return y?{value:g,done:y}:{value:c?[d(g[0]),d(g[1])]:d(g),done:y}},[Symbol.iterator](){return this}}}}function Ji(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function U_(t,e){const n={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);t||(Ln(s,c)&&ot(a,"get",s),ot(a,"get",c));const{has:l}=Qi(a),h=e?pc:t?Yr:xt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ot(ye(s),"iterate",pr),s.size},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return t||(Ln(s,c)&&ot(a,"has",s),ot(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?pc:t?Yr:xt;return!t&&ot(l,"iterate",pr),c.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return lt(n,t?{add:Ji("add"),set:Ji("set"),delete:Ji("delete"),clear:Ji("clear")}:{add(s){!e&&!Tt(s)&&!gn(s)&&(s=ye(s));const i=ye(this);return Qi(i).has.call(i,s)||(i.add(s),on(i,"add",s,s)),this},set(s,i){!e&&!Tt(i)&&!gn(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Qi(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Ln(i,d)&&on(a,"set",s,i):on(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=Qi(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&on(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&on(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=F_(s,t,e)}),n}function sl(t,e){const n=U_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const B_={get:sl(!1,!1)},j_={get:sl(!1,!0)},$_={get:sl(!0,!1)};const Cd=new WeakMap,Pd=new WeakMap,Vd=new WeakMap,q_=new WeakMap;function H_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function z_(t){return t.__v_skip||!Object.isExtensible(t)?0:H_(m_(t))}function ta(t){return gn(t)?t:il(t,!1,x_,B_,Cd)}function W_(t){return il(t,!1,L_,j_,Pd)}function gc(t){return il(t,!0,M_,$_,Vd)}function il(t,e,n,r,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=z_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function hn(t){return gn(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Tt(t){return!!(t&&t.__v_isShallow)}function na(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function ol(t){return!Te(t,"__v_skip")&&Object.isExtensible(t)&&ud(t,"__v_skip",!0),t}const xt=t=>Re(t)?ta(t):t,Yr=t=>Re(t)?gc(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function kd(t){return K_(t,!1)}function K_(t,e){return xe(t)?t:new G_(t,e)}class G_{constructor(e,n){this.dep=new rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:xt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Tt(e)||gn(e);e=r?e:ye(e),Ln(e,n)&&(this._rawValue=e,this._value=r?e:xt(e),this.dep.trigger())}}function Ee(t){return xe(t)?t.value:t}const Q_={get:(t,e,n)=>e==="__v_raw"?t:Ee(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dd(t){return hn(t)?t:new Proxy(t,Q_)}function J_(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=Y_(t,n);return e}class X_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ye(e);let s=!0,i=e;if(!re(e)||!Xo(String(n)))do s=!na(i)||Tt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Ee(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xe(this._raw[this._key])){const n=this._object[this._key];if(xe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return P_(this._raw,this._key)}}function Y_(t,e,n){return new X_(t,e,n)}class Z_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return vd(this,!0),!0}get value(){const e=this.dep.track();return Id(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ey(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new Z_(r,s,n)}const Xi={},wo=new WeakMap;let cr;function ty(t,e=!1,n=cr){if(n){let r=wo.get(n);r||wo.set(n,r=[]),r.push(t)}}function ny(t,e,n=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=H=>s?H:Tt(H)||s===!1||s===0?an(H,1):an(H);let d,g,y,b,V=!1,M=!1;if(xe(t)?(g=()=>t.value,V=Tt(t)):hn(t)?(g=()=>h(t),V=!0):re(t)?(M=!0,V=t.some(H=>hn(H)||Tt(H)),g=()=>t.map(H=>{if(xe(H))return H.value;if(hn(H))return h(H);if(le(H))return l?l(H,2):H()})):le(t)?e?g=l?()=>l(t,2):t:g=()=>{if(y){dn();try{y()}finally{pn()}}const H=cr;cr=d;try{return l?l(t,3,[b]):t(b)}finally{cr=H}}:g=$t,e&&s){const H=g,oe=s===!0?1/0:s;g=()=>an(H(),oe)}const L=md(),z=()=>{d.stop(),L&&L.active&&Xc(L.effects,d)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),z()}}let K=M?new Array(t.length).fill(Xi):Xi;const G=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||V||(M?oe.some((ve,I)=>Ln(ve,K[I])):Ln(oe,K))){y&&y();const ve=cr;cr=d;try{const I=[oe,K===Xi?void 0:M&&K[0]===Xi?[]:K,b];K=oe,l?l(e,3,I):e(...I)}finally{cr=ve}}}else d.run()};return c&&c(G),d=new _d(g),d.scheduler=a?()=>a(G,!1):G,b=H=>ty(H,!1,d),y=d.onStop=()=>{const H=wo.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();wo.delete(d)}},e?r?G(!0):K=d.run():a?a(G.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function an(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,xe(t))an(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)an(t[r],e,n);else if(id(t)||Hr(t))t.forEach(r=>{an(r,e,n)});else if(cd(t)){for(const r in t)an(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&an(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _i(t,e,n,r){try{return r?t(...r):t()}catch(s){ra(s,e,n)}}function Gt(t,e,n,r){if(le(t)){const s=_i(t,e,n,r);return s&&od(s)&&s.catch(i=>{ra(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}}function ra(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,l,h)===!1)return}c=c.parent}if(i){dn(),_i(i,null,10,[t,l,h]),pn();return}}ry(t,n,s,r,a)}function ry(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pt=[];let Ut=-1;const zr=[];let Vn=null,Fr=0;const Od=Promise.resolve();let Ao=null;function Nd(t){const e=Ao||Od;return t?e.then(this?t.bind(this):t):e}function sy(t){let e=Ut+1,n=pt.length;for(;e<n;){const r=e+n>>>1,s=pt[r],i=ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function al(t){if(!(t.flags&1)){const e=ri(t),n=pt[pt.length-1];!n||!(t.flags&2)&&e>=ri(n)?pt.push(t):pt.splice(sy(e),0,t),t.flags|=1,xd()}}function xd(){Ao||(Ao=Od.then(Ld))}function iy(t){re(t)?zr.push(...t):Vn&&t.id===-1?Vn.splice(Fr+1,0,t):t.flags&1||(zr.push(t),t.flags|=1),xd()}function Zu(t,e,n=Ut+1){for(;n<pt.length;n++){const r=pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Md(t){if(zr.length){const e=[...new Set(zr)].sort((n,r)=>ri(n)-ri(r));if(zr.length=0,Vn){Vn.push(...e);return}for(Vn=e,Fr=0;Fr<Vn.length;Fr++){const n=Vn[Fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vn=null,Fr=0}}const ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ld(t){try{for(Ut=0;Ut<pt.length;Ut++){const e=pt[Ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ut<pt.length;Ut++){const e=pt[Ut];e&&(e.flags&=-2)}Ut=-1,pt.length=0,Md(),Ao=null,(pt.length||zr.length)&&Ld()}}let ct=null,Fd=null;function bo(t){const e=ct;return ct=t,Fd=t&&t.type.__scopeId||null,e}function xs(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lh(-1);const i=bo(e);let a;try{a=t(...s)}finally{bo(i),r._d&&lh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ks(t,e){if(ct===null)return t;const n=aa(ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=be]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&an(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(dn(),Gt(l,n,8,[t.el,c,t,e]),pn())}}const oy=Symbol("_vte"),ay=t=>t.__isTeleport,cy=Symbol("_leaveCb");function cl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,cl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yi(t,e){return le(t)?lt({name:t.name},e,{setup:t}):t}function Ud(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const So=new WeakMap;function Hs(t,e,n,r,s=!1){if(re(t)){t.forEach((V,M)=>Hs(V,e&&(re(e)?e[M]:e),n,r,s));return}if(Wr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?aa(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===be?c.refs={}:c.refs,g=c.setupState,y=ye(g),b=g===be?sd:V=>Te(y,V);if(h!=null&&h!==l){if(eh(e),Be(h))d[h]=null,b(h)&&(g[h]=null);else if(xe(h)){h.value=null;const V=e;V.k&&(d[V.k]=null)}}if(le(l))_i(l,c,12,[a,d]);else{const V=Be(l),M=xe(l);if(V||M){const L=()=>{if(t.f){const z=V?b(l)?g[l]:d[l]:l.value;if(s)re(z)&&Xc(z,i);else if(re(z))z.includes(i)||z.push(i);else if(V)d[l]=[i],b(l)&&(g[l]=d[l]);else{const K=[i];l.value=K,t.k&&(d[t.k]=K)}}else V?(d[l]=a,b(l)&&(g[l]=a)):M&&(l.value=a,t.k&&(d[t.k]=a))};if(a){const z=()=>{L(),So.delete(t)};z.id=-1,So.set(t,z),vt(z,n)}else eh(t),L()}}}function eh(t){const e=So.get(t);e&&(e.flags|=8,So.delete(t))}Zo().requestIdleCallback;Zo().cancelIdleCallback;const Wr=t=>!!t.type.__asyncLoader,Bd=t=>t.type.__isKeepAlive;function ly(t,e){jd(t,"a",e)}function uy(t,e){jd(t,"da",e)}function jd(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bd(s.parent.vnode)&&hy(r,e,n,s),s=s.parent}}function hy(t,e,n,r){const s=sa(e,t,r,!0);qd(()=>{Xc(r[e],s)},n)}function sa(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{dn();const c=vi(n),l=Gt(e,n,t,a);return c(),pn(),l});return r?s.unshift(i):s.push(i),i}}const Tn=t=>(e,n=gt)=>{(!oi||t==="sp")&&sa(t,(...r)=>e(...r),n)},fy=Tn("bm"),$d=Tn("m"),dy=Tn("bu"),py=Tn("u"),gy=Tn("bum"),qd=Tn("um"),my=Tn("sp"),_y=Tn("rtg"),yy=Tn("rtc");function vy(t,e=gt){sa("ec",t,e)}const Ey=Symbol.for("v-ndc");function Dn(t,e,n,r){let s;const i=n,a=re(t);if(a||Be(t)){const c=a&&hn(t);let l=!1,h=!1;c&&(l=!Tt(t),h=gn(t),t=ea(t)),s=new Array(t.length);for(let d=0,g=t.length;d<g;d++)s[d]=e(l?h?Yr(xt(t[d])):xt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Re(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function oo(t,e,n={},r,s){if(ct.ce||ct.parent&&Wr(ct.parent)&&ct.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ge(),sn(Fe,null,[It("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),ge();const a=i&&Hd(i(n)),c=n.key||a&&a.key,l=sn(Fe,{key:(c&&!Nt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Hd(t){return t.some(e=>hl(e)?!(e.type===mn||e.type===Fe&&!Hd(e.children)):!0)?t:null}const mc=t=>t?hp(t)?aa(t):mc(t.parent):null,zs=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mc(t.parent),$root:t=>mc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wd(t),$forceUpdate:t=>t.f||(t.f=()=>{al(t.update)}),$nextTick:t=>t.n||(t.n=Nd.bind(t.proxy)),$watch:t=>Oy.bind(t)}),Ka=(t,e)=>t!==be&&!t.__isScriptSetup&&Te(t,e),Ty={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ka(r,e))return a[e]=1,r[e];if(s!==be&&Te(s,e))return a[e]=2,s[e];if(Te(i,e))return a[e]=3,i[e];if(n!==be&&Te(n,e))return a[e]=4,n[e];_c&&(a[e]=0)}}const h=zs[e];let d,g;if(h)return e==="$attrs"&&ot(t.attrs,"get",""),h(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==be&&Te(n,e))return a[e]=4,n[e];if(g=l.config.globalProperties,Te(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ka(s,e)?(s[e]=n,!0):r!==be&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(n[c]||t!==be&&c[0]!=="$"&&Te(t,c)||Ka(e,c)||Te(i,c)||Te(r,c)||Te(zs,c)||Te(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function th(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _c=!0;function Iy(t){const e=Wd(t),n=t.proxy,r=t.ctx;_c=!1,e.beforeCreate&&nh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:g,mounted:y,beforeUpdate:b,updated:V,activated:M,deactivated:L,beforeDestroy:z,beforeUnmount:K,destroyed:G,unmounted:H,render:oe,renderTracked:ve,renderTriggered:I,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:w,components:S,directives:E,filters:ht}=e;if(h&&wy(h,r,null),a)for(const ae in a){const me=a[ae];le(me)&&(r[ae]=me.bind(n))}if(s){const ae=s.call(n,n);Re(ae)&&(t.data=ta(ae))}if(_c=!0,i)for(const ae in i){const me=i[ae],Rt=le(me)?me.bind(n,n):le(me.get)?me.get.bind(n,n):$t,Yn=!le(me)&&le(me.set)?me.set.bind(n):$t,Yt=Ei({get:Rt,set:Yn});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:je=>Yt.value=je})}if(c)for(const ae in c)zd(c[ae],r,n,ae);if(l){const ae=le(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(me=>{Py(me,ae[me])})}d&&nh(d,t,"c");function De(ae,me){re(me)?me.forEach(Rt=>ae(Rt.bind(n))):me&&ae(me.bind(n))}if(De(fy,g),De($d,y),De(dy,b),De(py,V),De(ly,M),De(uy,L),De(vy,m),De(yy,ve),De(_y,I),De(gy,K),De(qd,H),De(my,_),re(T))if(T.length){const ae=t.exposed||(t.exposed={});T.forEach(me=>{Object.defineProperty(ae,me,{get:()=>n[me],set:Rt=>n[me]=Rt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===$t&&(t.render=oe),w!=null&&(t.inheritAttrs=w),S&&(t.components=S),E&&(t.directives=E),_&&Ud(t)}function wy(t,e,n=$t){re(t)&&(t=yc(t));for(const r in t){const s=t[r];let i;Re(s)?"default"in s?i=Ws(s.from||r,s.default,!0):i=Ws(s.from||r):i=Ws(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function nh(t,e,n){Gt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zd(t,e,n,r){let s=r.includes(".")?Qd(n,r):()=>n[r];if(Be(t)){const i=e[t];le(i)&&ao(s,i)}else if(le(t))ao(s,t.bind(n));else if(Re(t))if(re(t))t.forEach(i=>zd(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&ao(s,i,t)}}function Wd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ro(l,h,a,!0)),Ro(l,e,a)),Re(e)&&i.set(e,l),l}function Ro(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ro(t,i,n,!0),s&&s.forEach(a=>Ro(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Ay[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Ay={data:rh,props:sh,emits:sh,methods:Ms,computed:Ms,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Ms,directives:Ms,watch:Sy,provide:rh,inject:by};function rh(t,e){return e?t?function(){return lt(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function by(t,e){return Ms(yc(t),yc(e))}function yc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?lt(Object.create(null),t,e):e}function sh(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:lt(Object.create(null),th(t),th(e??{})):e}function Sy(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function Kd(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ry=0;function Cy(t,e){return function(r,s=null){le(r)||(r=lt({},r)),s!=null&&!Re(s)&&(s=null);const i=Kd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Ry++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uv,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...g)):le(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,y){if(!l){const b=h._ceVNode||It(r,s);return b.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(b,d,y),l=!0,h._container=d,d.__vue_app__=h,aa(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Gt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=gr;gr=h;try{return d()}finally{gr=g}}};return h}}let gr=null;function Py(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function Ws(t,e,n=!1){const r=up();if(r||gr){let s=gr?gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}function Vy(){return!!(up()||gr)}const ky=Symbol.for("v-scx"),Dy=()=>Ws(ky);function ao(t,e,n){return Gd(t,e,n)}function Gd(t,e,n=be){const{immediate:r,deep:s,flush:i,once:a}=n,c=lt({},n),l=e&&r||!e&&i!=="post";let h;if(oi){if(i==="sync"){const b=Dy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=$t,b.resume=$t,b.pause=$t,b}}const d=gt;c.call=(b,V,M)=>Gt(b,d,V,M);let g=!1;i==="post"?c.scheduler=b=>{vt(b,d&&d.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(b,V)=>{V?b():al(b)}),c.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const y=ny(t,e,c);return oi&&(h?h.push(y):l&&y()),y}function Oy(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Qd(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const a=vi(this),c=Gd(s,i.bind(r),n);return a(),c}function Qd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ny=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Hn(e)}Modifiers`]||t[`${br(e)}Modifiers`];function xy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),a=i&&Ny(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Be(d)?d.trim():d)),a.number&&(s=n.map(Yc)));let c,l=r[c=$a(e)]||r[c=$a(Hn(e))];!l&&i&&(l=r[c=$a(br(e))]),l&&Gt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Gt(h,t,6,s)}}const My=new WeakMap;function Jd(t,e,n=!1){const r=n?My:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!le(t)){const l=h=>{const d=Jd(h,e,!0);d&&(c=!0,lt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Re(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):lt(a,i),Re(t)&&r.set(t,a),a)}function ia(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,br(e))||Te(t,e))}function ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:g,data:y,setupState:b,ctx:V,inheritAttrs:M}=t,L=bo(t);let z,K;try{if(n.shapeFlag&4){const H=s||r,oe=H;z=jt(h.call(oe,H,d,g,b,y,V)),K=c}else{const H=e;z=jt(H.length>1?H(g,{attrs:c,slots:a,emit:l}):H(g,null)),K=e.props?c:Ly(c)}}catch(H){Ks.length=0,ra(H,t,1),z=It(mn)}let G=z;if(K&&M!==!1){const H=Object.keys(K),{shapeFlag:oe}=G;H.length&&oe&7&&(i&&H.some(Jc)&&(K=Fy(K,i)),G=Zr(G,K,!1,!0))}return n.dirs&&(G=Zr(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&cl(G,n.transition),z=G,bo(L),z}const Ly=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},Fy=(t,e)=>{const n={};for(const r in t)(!Jc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Uy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?oh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const y=d[g];if(a[y]!==r[y]&&!ia(h,y))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?oh(r,a,h):!0:!!a;return!1}function oh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ia(n,i))return!0}return!1}function By({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xd={},Yd=()=>Object.create(Xd),Zd=t=>Object.getPrototypeOf(t)===Xd;function jy(t,e,n,r=!1){const s={},i=Yd();t.propsDefaults=Object.create(null),ep(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:W_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $y(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=ye(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let y=d[g];if(ia(t.emitsOptions,y))continue;const b=e[y];if(l)if(Te(i,y))b!==i[y]&&(i[y]=b,h=!0);else{const V=Hn(y);s[V]=vc(l,c,V,b,t,!1)}else b!==i[y]&&(i[y]=b,h=!0)}}}else{ep(t,e,s,i)&&(h=!0);let d;for(const g in c)(!e||!Te(e,g)&&((d=br(g))===g||!Te(e,d)))&&(l?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=vc(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!Te(e,g))&&(delete i[g],h=!0)}h&&on(t.attrs,"set","")}function ep(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(js(l))continue;const h=e[l];let d;s&&Te(s,d=Hn(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ia(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(n),h=c||be;for(let d=0;d<i.length;d++){const g=i[d];n[g]=vc(s,l,g,h[g],t,!Te(h,g))}}return a}function vc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=vi(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===br(n))&&(r=!0))}return r}const qy=new WeakMap;function tp(t,e,n=!1){const r=n?qy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!le(t)){const d=g=>{l=!0;const[y,b]=tp(g,e,!0);lt(a,y),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Re(t)&&r.set(t,qr),qr;if(re(i))for(let d=0;d<i.length;d++){const g=Hn(i[d]);ah(g)&&(a[g]=be)}else if(i)for(const d in i){const g=Hn(d);if(ah(g)){const y=i[d],b=a[g]=re(y)||le(y)?{type:y}:lt({},y),V=b.type;let M=!1,L=!0;if(re(V))for(let z=0;z<V.length;++z){const K=V[z],G=le(K)&&K.name;if(G==="Boolean"){M=!0;break}else G==="String"&&(L=!1)}else M=le(V)&&V.name==="Boolean";b[0]=M,b[1]=L,(M||Te(b,"default"))&&c.push(g)}}const h=[a,c];return Re(t)&&r.set(t,h),h}function ah(t){return t[0]!=="$"&&!js(t)}const ll=t=>t==="_"||t==="_ctx"||t==="$stable",ul=t=>re(t)?t.map(jt):[jt(t)],Hy=(t,e,n)=>{if(e._n)return e;const r=xs((...s)=>ul(e(...s)),n);return r._c=!1,r},np=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ll(s))continue;const i=t[s];if(le(i))e[s]=Hy(s,i,r);else if(i!=null){const a=ul(i);e[s]=()=>a}}},rp=(t,e)=>{const n=ul(e);t.slots.default=()=>n},sp=(t,e,n)=>{for(const r in e)(n||!ll(r))&&(t[r]=e[r])},zy=(t,e,n)=>{const r=t.slots=Yd();if(t.vnode.shapeFlag&32){const s=e._;s?(sp(r,e,n),n&&ud(r,"_",s,!0)):np(e,r)}else e&&rp(t,e)},Wy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=be;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:sp(s,e,n):(i=!e.$stable,np(e,s)),a=e}else e&&(rp(t,e),a={default:1});if(i)for(const c in s)!ll(c)&&a[c]==null&&delete s[c]},vt=Xy;function Ky(t){return Gy(t)}function Gy(t,e){const n=Zo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:g,nextSibling:y,setScopeId:b=$t,insertStaticContent:V}=t,M=(v,A,P,F=null,O=null,N=null,$=void 0,B=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!Ds(v,A)&&(F=Zt(v),je(v,O,N,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:q}=A;switch(x){case oa:L(v,A,P,F);break;case mn:z(v,A,P,F);break;case Qa:v==null&&K(A,P,F,$);break;case Fe:S(v,A,P,F,O,N,$,B,U);break;default:q&1?oe(v,A,P,F,O,N,$,B,U):q&6?E(v,A,P,F,O,N,$,B,U):(q&64||q&128)&&x.process(v,A,P,F,O,N,$,B,U,Lt)}Y!=null&&O?Hs(Y,v&&v.ref,N,A||v,!A):Y==null&&v&&v.ref!=null&&Hs(v.ref,null,N,v,!0)},L=(v,A,P,F)=>{if(v==null)r(A.el=c(A.children),P,F);else{const O=A.el=v.el;A.children!==v.children&&h(O,A.children)}},z=(v,A,P,F)=>{v==null?r(A.el=l(A.children||""),P,F):A.el=v.el},K=(v,A,P,F)=>{[v.el,v.anchor]=V(v.children,A,P,F,v.el,v.anchor)},G=({el:v,anchor:A},P,F)=>{let O;for(;v&&v!==A;)O=y(v),r(v,P,F),v=O;r(A,P,F)},H=({el:v,anchor:A})=>{let P;for(;v&&v!==A;)P=y(v),s(v),v=P;s(A)},oe=(v,A,P,F,O,N,$,B,U)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),v==null)ve(A,P,F,O,N,$,B,U);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),_(v,A,O,N,$,B,U)}finally{x&&x._endPatch()}}},ve=(v,A,P,F,O,N,$,B)=>{let U,x;const{props:Y,shapeFlag:q,transition:J,dirs:te}=v;if(U=v.el=a(v.type,N,Y&&Y.is,Y),q&8?d(U,v.children):q&16&&m(v.children,U,null,F,O,Ga(v,N),$,B),te&&ir(v,null,F,"created"),I(U,v,v.scopeId,$,F),Y){for(const ce in Y)ce!=="value"&&!js(ce)&&i(U,ce,null,Y[ce],N,F);"value"in Y&&i(U,"value",null,Y.value,N),(x=Y.onVnodeBeforeMount)&&Ft(x,F,v)}te&&ir(v,null,F,"beforeMount");const Z=Qy(O,J);Z&&J.beforeEnter(U),r(U,A,P),((x=Y&&Y.onVnodeMounted)||Z||te)&&vt(()=>{x&&Ft(x,F,v),Z&&J.enter(U),te&&ir(v,null,F,"mounted")},O)},I=(v,A,P,F,O)=>{if(P&&b(v,P),F)for(let N=0;N<F.length;N++)b(v,F[N]);if(O){let N=O.subTree;if(A===N||ap(N.type)&&(N.ssContent===A||N.ssFallback===A)){const $=O.vnode;I(v,$,$.scopeId,$.slotScopeIds,O.parent)}}},m=(v,A,P,F,O,N,$,B,U=0)=>{for(let x=U;x<v.length;x++){const Y=v[x]=B?kn(v[x]):jt(v[x]);M(null,Y,A,P,F,O,N,$,B)}},_=(v,A,P,F,O,N,$)=>{const B=A.el=v.el;let{patchFlag:U,dynamicChildren:x,dirs:Y}=A;U|=v.patchFlag&16;const q=v.props||be,J=A.props||be;let te;if(P&&or(P,!1),(te=J.onVnodeBeforeUpdate)&&Ft(te,P,A,v),Y&&ir(A,v,P,"beforeUpdate"),P&&or(P,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(B,""),x?T(v.dynamicChildren,x,B,P,F,Ga(A,O),N):$||me(v,A,B,null,P,F,Ga(A,O),N,!1),U>0){if(U&16)w(B,q,J,P,O);else if(U&2&&q.class!==J.class&&i(B,"class",null,J.class,O),U&4&&i(B,"style",q.style,J.style,O),U&8){const Z=A.dynamicProps;for(let ce=0;ce<Z.length;ce++){const de=Z[ce],Ke=q[de],Ge=J[de];(Ge!==Ke||de==="value")&&i(B,de,Ke,Ge,O,P)}}U&1&&v.children!==A.children&&d(B,A.children)}else!$&&x==null&&w(B,q,J,P,O);((te=J.onVnodeUpdated)||Y)&&vt(()=>{te&&Ft(te,P,A,v),Y&&ir(A,v,P,"updated")},F)},T=(v,A,P,F,O,N,$)=>{for(let B=0;B<A.length;B++){const U=v[B],x=A[B],Y=U.el&&(U.type===Fe||!Ds(U,x)||U.shapeFlag&198)?g(U.el):P;M(U,x,Y,null,F,O,N,$,!0)}},w=(v,A,P,F,O)=>{if(A!==P){if(A!==be)for(const N in A)!js(N)&&!(N in P)&&i(v,N,A[N],null,O,F);for(const N in P){if(js(N))continue;const $=P[N],B=A[N];$!==B&&N!=="value"&&i(v,N,B,$,O,F)}"value"in P&&i(v,"value",A.value,P.value,O)}},S=(v,A,P,F,O,N,$,B,U)=>{const x=A.el=v?v.el:c(""),Y=A.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:te}=A;te&&(B=B?B.concat(te):te),v==null?(r(x,P,F),r(Y,P,F),m(A.children||[],P,Y,O,N,$,B,U)):q>0&&q&64&&J&&v.dynamicChildren?(T(v.dynamicChildren,J,P,O,N,$,B),(A.key!=null||O&&A===O.subTree)&&ip(v,A,!0)):me(v,A,P,Y,O,N,$,B,U)},E=(v,A,P,F,O,N,$,B,U)=>{A.slotScopeIds=B,v==null?A.shapeFlag&512?O.ctx.activate(A,P,F,$,U):ht(A,P,F,O,N,$,U):Mt(v,A,U)},ht=(v,A,P,F,O,N,$)=>{const B=v.component=sv(v,F,O);if(Bd(v)&&(B.ctx.renderer=Lt),iv(B,!1,$),B.asyncDep){if(O&&O.registerDep(B,De,$),!v.el){const U=B.subTree=It(mn);z(null,U,A,P),v.placeholder=U.el}}else De(B,v,A,P,O,N,$)},Mt=(v,A,P)=>{const F=A.component=v.component;if(Uy(v,A,P))if(F.asyncDep&&!F.asyncResolved){ae(F,A,P);return}else F.next=A,F.update();else A.el=v.el,F.vnode=A},De=(v,A,P,F,O,N,$)=>{const B=()=>{if(v.isMounted){let{next:q,bu:J,u:te,parent:Z,vnode:ce}=v;{const et=op(v);if(et){q&&(q.el=ce.el,ae(v,q,$)),et.asyncDep.then(()=>{v.isUnmounted||B()});return}}let de=q,Ke;or(v,!1),q?(q.el=ce.el,ae(v,q,$)):q=ce,J&&io(J),(Ke=q.props&&q.props.onVnodeBeforeUpdate)&&Ft(Ke,Z,q,ce),or(v,!0);const Ge=ih(v),wt=v.subTree;v.subTree=Ge,M(wt,Ge,g(wt.el),Zt(wt),v,O,N),q.el=Ge.el,de===null&&By(v,Ge.el),te&&vt(te,O),(Ke=q.props&&q.props.onVnodeUpdated)&&vt(()=>Ft(Ke,Z,q,ce),O)}else{let q;const{el:J,props:te}=A,{bm:Z,m:ce,parent:de,root:Ke,type:Ge}=v,wt=Wr(A);or(v,!1),Z&&io(Z),!wt&&(q=te&&te.onVnodeBeforeMount)&&Ft(q,de,A),or(v,!0);{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(Ge);const et=v.subTree=ih(v);M(null,et,P,F,v,O,N),A.el=et.el}if(ce&&vt(ce,O),!wt&&(q=te&&te.onVnodeMounted)){const et=A;vt(()=>Ft(q,de,et),O)}(A.shapeFlag&256||de&&Wr(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&vt(v.a,O),v.isMounted=!0,A=P=F=null}};v.scope.on();const U=v.effect=new _d(B);v.scope.off();const x=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>al(Y),or(v,!0),x()},ae=(v,A,P)=>{A.component=v;const F=v.vnode.props;v.vnode=A,v.next=null,$y(v,A.props,F,P),Wy(v,A.children,P),dn(),Zu(v),pn()},me=(v,A,P,F,O,N,$,B,U=!1)=>{const x=v&&v.children,Y=v?v.shapeFlag:0,q=A.children,{patchFlag:J,shapeFlag:te}=A;if(J>0){if(J&128){Yn(x,q,P,F,O,N,$,B,U);return}else if(J&256){Rt(x,q,P,F,O,N,$,B,U);return}}te&8?(Y&16&&er(x,O,N),q!==x&&d(P,q)):Y&16?te&16?Yn(x,q,P,F,O,N,$,B,U):er(x,O,N,!0):(Y&8&&d(P,""),te&16&&m(q,P,F,O,N,$,B,U))},Rt=(v,A,P,F,O,N,$,B,U)=>{v=v||qr,A=A||qr;const x=v.length,Y=A.length,q=Math.min(x,Y);let J;for(J=0;J<q;J++){const te=A[J]=U?kn(A[J]):jt(A[J]);M(v[J],te,P,null,O,N,$,B,U)}x>Y?er(v,O,N,!0,!1,q):m(A,P,F,O,N,$,B,U,q)},Yn=(v,A,P,F,O,N,$,B,U)=>{let x=0;const Y=A.length;let q=v.length-1,J=Y-1;for(;x<=q&&x<=J;){const te=v[x],Z=A[x]=U?kn(A[x]):jt(A[x]);if(Ds(te,Z))M(te,Z,P,null,O,N,$,B,U);else break;x++}for(;x<=q&&x<=J;){const te=v[q],Z=A[J]=U?kn(A[J]):jt(A[J]);if(Ds(te,Z))M(te,Z,P,null,O,N,$,B,U);else break;q--,J--}if(x>q){if(x<=J){const te=J+1,Z=te<Y?A[te].el:F;for(;x<=J;)M(null,A[x]=U?kn(A[x]):jt(A[x]),P,Z,O,N,$,B,U),x++}}else if(x>J)for(;x<=q;)je(v[x],O,N,!0),x++;else{const te=x,Z=x,ce=new Map;for(x=Z;x<=J;x++){const Qe=A[x]=U?kn(A[x]):jt(A[x]);Qe.key!=null&&ce.set(Qe.key,x)}let de,Ke=0;const Ge=J-Z+1;let wt=!1,et=0;const wn=new Array(Ge);for(x=0;x<Ge;x++)wn[x]=0;for(x=te;x<=q;x++){const Qe=v[x];if(Ke>=Ge){je(Qe,O,N,!0);continue}let At;if(Qe.key!=null)At=ce.get(Qe.key);else for(de=Z;de<=J;de++)if(wn[de-Z]===0&&Ds(Qe,A[de])){At=de;break}At===void 0?je(Qe,O,N,!0):(wn[At-Z]=x+1,At>=et?et=At:wt=!0,M(Qe,A[At],P,null,O,N,$,B,U),Ke++)}const _s=wt?Jy(wn):qr;for(de=_s.length-1,x=Ge-1;x>=0;x--){const Qe=Z+x,At=A[Qe],Oi=A[Qe+1],kr=Qe+1<Y?Oi.el||Oi.placeholder:F;wn[x]===0?M(null,At,P,kr,O,N,$,B,U):wt&&(de<0||x!==_s[de]?Yt(At,P,kr,2):de--)}}},Yt=(v,A,P,F,O=null)=>{const{el:N,type:$,transition:B,children:U,shapeFlag:x}=v;if(x&6){Yt(v.component.subTree,A,P,F);return}if(x&128){v.suspense.move(A,P,F);return}if(x&64){$.move(v,A,P,Lt);return}if($===Fe){r(N,A,P);for(let q=0;q<U.length;q++)Yt(U[q],A,P,F);r(v.anchor,A,P);return}if($===Qa){G(v,A,P);return}if(F!==2&&x&1&&B)if(F===0)B.beforeEnter(N),r(N,A,P),vt(()=>B.enter(N),O);else{const{leave:q,delayLeave:J,afterLeave:te}=B,Z=()=>{v.ctx.isUnmounted?s(N):r(N,A,P)},ce=()=>{N._isLeaving&&N[cy](!0),q(N,()=>{Z(),te&&te()})};J?J(N,Z,ce):ce()}else r(N,A,P)},je=(v,A,P,F=!1,O=!1)=>{const{type:N,props:$,ref:B,children:U,dynamicChildren:x,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:te}=v;if(q===-2&&(O=!1),B!=null&&(dn(),Hs(B,null,P,v,!0),pn()),te!=null&&(A.renderCache[te]=void 0),Y&256){A.ctx.deactivate(v);return}const Z=Y&1&&J,ce=!Wr(v);let de;if(ce&&(de=$&&$.onVnodeBeforeUnmount)&&Ft(de,A,v),Y&6)Zn(v.component,P,F);else{if(Y&128){v.suspense.unmount(P,F);return}Z&&ir(v,null,A,"beforeUnmount"),Y&64?v.type.remove(v,A,P,Lt,F):x&&!x.hasOnce&&(N!==Fe||q>0&&q&64)?er(x,A,P,!1,!0):(N===Fe&&q&384||!O&&Y&16)&&er(U,A,P),F&&$e(v)}(ce&&(de=$&&$.onVnodeUnmounted)||Z)&&vt(()=>{de&&Ft(de,A,v),Z&&ir(v,null,A,"unmounted")},P)},$e=v=>{const{type:A,el:P,anchor:F,transition:O}=v;if(A===Fe){Ra(P,F);return}if(A===Qa){H(v);return}const N=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:$,delayLeave:B}=O,U=()=>$(P,N);B?B(v.el,N,U):U()}else N()},Ra=(v,A)=>{let P;for(;v!==A;)P=y(v),s(v),v=P;s(A)},Zn=(v,A,P)=>{const{bum:F,scope:O,job:N,subTree:$,um:B,m:U,a:x}=v;ch(U),ch(x),F&&io(F),O.stop(),N&&(N.flags|=8,je($,v,A,P)),B&&vt(B,A),vt(()=>{v.isUnmounted=!0},A)},er=(v,A,P,F=!1,O=!1,N=0)=>{for(let $=N;$<v.length;$++)je(v[$],A,P,F,O)},Zt=v=>{if(v.shapeFlag&6)return Zt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=y(v.anchor||v.el),P=A&&A[oy];return P?y(P):A};let gs=!1;const Di=(v,A,P)=>{v==null?A._vnode&&je(A._vnode,null,null,!0):M(A._vnode||null,v,A,null,null,null,P),A._vnode=v,gs||(gs=!0,Zu(),Md(),gs=!1)},Lt={p:M,um:je,m:Yt,r:$e,mt:ht,mc:m,pc:me,pbc:T,n:Zt,o:t};return{render:Di,hydrate:void 0,createApp:Cy(Di)}}function Ga({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ip(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=kn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&ip(a,c)),c.type===oa&&c.patchFlag!==-1&&(c.el=a.el),c.type===mn&&!c.el&&(c.el=a.el)}}function Jy(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:op(e)}function ch(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ap=t=>t.__isSuspense;function Xy(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):iy(t)}const Fe=Symbol.for("v-fgt"),oa=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),Ks=[];let Et=null;function ge(t=!1){Ks.push(Et=t?null:[])}function Yy(){Ks.pop(),Et=Ks[Ks.length-1]||null}let si=1;function lh(t,e=!1){si+=t,t<0&&Et&&e&&(Et.hasOnce=!0)}function cp(t){return t.dynamicChildren=si>0?Et||qr:null,Yy(),si>0&&Et&&Et.push(t),t}function ke(t,e,n,r,s,i){return cp(Ae(t,e,n,r,s,i,!0))}function sn(t,e,n,r,s){return cp(It(t,e,n,r,s,!0))}function hl(t){return t?t.__v_isVNode===!0:!1}function Ds(t,e){return t.type===e.type&&t.key===e.key}const lp=({key:t})=>t??null,co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||xe(t)||le(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function Ae(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lp(e),ref:e&&co(e),scopeId:Fd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return c?(fl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),si>0&&!a&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const It=Zy;function Zy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ey)&&(t=mn),hl(t)){const c=Zr(t,e,!0);return n&&fl(c,n),si>0&&!i&&Et&&(c.shapeFlag&6?Et[Et.indexOf(t)]=c:Et.push(c)),c.patchFlag=-2,c}if(lv(t)&&(t=t.__vccOpts),e){e=ev(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=Zc(c)),Re(l)&&(na(l)&&!re(l)&&(l=lt({},l)),e.style=as(l))}const a=Be(t)?1:ap(t)?128:ay(t)?64:Re(t)?4:le(t)?2:0;return Ae(t,e,n,r,s,a,i,!0)}function ev(t){return t?na(t)||Zd(t)?lt({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?tv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&lp(h),ref:e&&e.ref?n&&i?re(i)?i.concat(co(e)):[i,co(e)]:co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&cl(d,l.clone(d)),d}function lr(t=" ",e=0){return It(oa,null,t,e)}function ii(t="",e=!1){return e?(ge(),sn(mn,null,t)):It(mn,null,t)}function jt(t){return t==null||typeof t=="boolean"?It(mn):re(t)?It(Fe,null,t.slice()):hl(t)?kn(t):It(oa,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function fl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Zd(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[lr(e)]):n=8);t.children=e,t.shapeFlag|=n}function tv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zc([e.class,r.class]));else if(s==="style")e.style=as([e.style,r.style]);else if(Jo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){Gt(t,e,7,[n,r])}const nv=Kd();let rv=0;function sv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nv,i={uid:rv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tp(r,s),emitsOptions:Jd(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xy.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const up=()=>gt||ct;let Co,Ec;{const t=Zo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Co=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Ec=e("__VUE_SSR_SETTERS__",n=>oi=n)}const vi=t=>{const e=gt;return Co(t),t.scope.on(),()=>{t.scope.off(),Co(e)}},uh=()=>{gt&&gt.scope.off(),Co(null)};function hp(t){return t.vnode.shapeFlag&4}let oi=!1;function iv(t,e=!1,n=!1){e&&Ec(e);const{props:r,children:s}=t.vnode,i=hp(t);jy(t,r,i,e),zy(t,s,n||e);const a=i?ov(t,e):void 0;return e&&Ec(!1),a}function ov(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ty);const{setup:r}=n;if(r){dn();const s=t.setupContext=r.length>1?cv(t):null,i=vi(t),a=_i(r,t,0,[t.props,s]),c=od(a);if(pn(),i(),(c||t.sp)&&!Wr(t)&&Ud(t),c){if(a.then(uh,uh),e)return a.then(l=>{hh(t,l)}).catch(l=>{ra(l,t,0)});t.asyncDep=a}else hh(t,a)}else fp(t)}function hh(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Dd(e)),fp(t)}function fp(t,e,n){const r=t.type;t.render||(t.render=r.render||$t);{const s=vi(t);dn();try{Iy(t)}finally{pn(),s()}}}const av={get(t,e){return ot(t,"get",""),t[e]}};function cv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,av),slots:t.slots,emit:t.emit,expose:e}}function aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dd(ol(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zs)return zs[n](t)},has(e,n){return n in e||n in zs}})):t.proxy}function lv(t){return le(t)&&"__vccOpts"in t}const Ei=(t,e)=>ey(t,e,oi),uv="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const fh=typeof window<"u"&&window.trustedTypes;if(fh)try{Tc=fh.createPolicy("vue",{createHTML:t=>t})}catch{}const dp=Tc?t=>Tc.createHTML(t):t=>t,hv="http://www.w3.org/2000/svg",fv="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,dh=rn&&rn.createElement("template"),dv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?rn.createElementNS(hv,t):e==="mathml"?rn.createElementNS(fv,t):n?rn.createElement(t,{is:n}):rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dh.innerHTML=dp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=dh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pv=Symbol("_vtc");function gv(t,e,n){const r=t[pv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ph=Symbol("_vod"),mv=Symbol("_vsh"),_v=Symbol(""),yv=/(?:^|;)\s*display\s*:/;function vv(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&lo(r,c,"")}else for(const a in e)n[a]==null&&lo(r,a,"");for(const a in n)a==="display"&&(i=!0),lo(r,a,n[a])}else if(s){if(e!==n){const a=r[_v];a&&(n+=";"+a),r.cssText=n,i=yv.test(n)}}else e&&t.removeAttribute("style");ph in t&&(t[ph]=i?r.display:"",t[mv]&&(r.display="none"))}const gh=/\s*!important$/;function lo(t,e,n){if(re(n))n.forEach(r=>lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ev(t,e);gh.test(n)?t.setProperty(br(r),n.replace(gh,""),"important"):t[r]=n}}const mh=["Webkit","Moz","ms"],Ja={};function Ev(t,e){const n=Ja[e];if(n)return n;let r=Hn(e);if(r!=="filter"&&r in t)return Ja[e]=r;r=ld(r);for(let s=0;s<mh.length;s++){const i=mh[s]+r;if(i in t)return Ja[e]=i}return e}const _h="http://www.w3.org/1999/xlink";function yh(t,e,n,r,s,i=A_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_h,e.slice(6,e.length)):t.setAttributeNS(_h,e,n):n==null||i&&!hd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Nt(n)?String(n):n)}function vh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function hr(t,e,n,r){t.addEventListener(e,n,r)}function Tv(t,e,n,r){t.removeEventListener(e,n,r)}const Eh=Symbol("_vei");function Iv(t,e,n,r,s=null){const i=t[Eh]||(t[Eh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=wv(e);if(r){const h=i[e]=Sv(r,s);hr(t,c,h,l)}else a&&(Tv(t,c,a,l),i[e]=void 0)}}const Th=/(?:Once|Passive|Capture)$/;function wv(t){let e;if(Th.test(t)){e={};let r;for(;r=t.match(Th);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let Xa=0;const Av=Promise.resolve(),bv=()=>Xa||(Av.then(()=>Xa=0),Xa=Date.now());function Sv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(Rv(r,n.value),e,5,[r])};return n.value=t,n.attached=bv(),n}function Rv(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ih=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?gv(t,r,a):e==="style"?vv(t,n,r):Jo(e)?Jc(e)||Iv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pv(t,e,r,a))?(vh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?vh(t,Hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yh(t,e,r,a))};function Pv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ih(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ih(e)&&Be(n)?!1:e in t}const Po=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>io(e,n):e};function Vv(t){t.target.composing=!0}function wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kr=Symbol("_assign");function Ah(t,e,n){return e&&(t=t.trim()),n&&(t=Yc(t)),t}const kv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kr]=Po(s);const i=r||s.props&&s.props.type==="number";hr(t,e?"change":"input",a=>{a.target.composing||t[Kr](Ah(t.value,n,i))}),(n||i)&&hr(t,"change",()=>{t.value=Ah(t.value,n,i)}),e||(hr(t,"compositionstart",Vv),hr(t,"compositionend",wh),hr(t,"change",wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Kr]=Po(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Yc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Yi={created(t,{value:e},n){t.checked=To(e,n.props.value),t[Kr]=Po(n),hr(t,"change",()=>{t[Kr](Dv(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Kr]=Po(r),e!==n&&(t.checked=To(e,r.props.value))}};function Dv(t){return"_value"in t?t._value:t.value}const Ov=lt({patchProp:Cv},dv);let bh;function Nv(){return bh||(bh=Ky(Ov))}const xv=((...t)=>{const e=Nv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Lv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lv(t){return Be(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pp;const ca=t=>pp=t,gp=Symbol();function Ic(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Gs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gs||(Gs={}));function Fv(){const t=gd(!0),e=t.run(()=>kd({}));let n=[],r=[];const s=ol({install(i){ca(s),s._a=i,i.provide(gp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mp=()=>{};function Sh(t,e,n,r=mp){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&md()&&S_(s),s}function Lr(t,...e){t.forEach(n=>{n(...e)})}const Uv=t=>t(),Rh=Symbol(),Ya=Symbol();function wc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ic(s)&&Ic(r)&&t.hasOwnProperty(n)&&!xe(r)&&!hn(r)?t[n]=wc(s,r):t[n]=r}return t}const Bv=Symbol();function jv(t){return!Ic(t)||!Object.prototype.hasOwnProperty.call(t,Bv)}const{assign:Cn}=Object;function $v(t){return!!(xe(t)&&t.effect)}function qv(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=J_(n.state.value[t]);return Cn(d,i,Object.keys(a||{}).reduce((g,y)=>(g[y]=ol(Ei(()=>{ca(n);const b=n._s.get(t);return a[y].call(b,b)})),g),{}))}return l=_p(t,h,e,n,r,!0),l}function _p(t,e,n={},r,s,i){let a;const c=Cn({actions:{}},n),l={deep:!0};let h,d,g=new Set,y=new Set,b;const V=r.state.value[t];!i&&!V&&(r.state.value[t]={}),kd({});let M;function L(m){let _;h=d=!1,typeof m=="function"?(m(r.state.value[t]),_={type:Gs.patchFunction,storeId:t,events:b}):(wc(r.state.value[t],m),_={type:Gs.patchObject,payload:m,storeId:t,events:b});const T=M=Symbol();Nd().then(()=>{M===T&&(h=!0)}),d=!0,Lr(g,_,r.state.value[t])}const z=i?function(){const{state:_}=n,T=_?_():{};this.$patch(w=>{Cn(w,T)})}:mp;function K(){a.stop(),g.clear(),y.clear(),r._s.delete(t)}const G=(m,_="")=>{if(Rh in m)return m[Ya]=_,m;const T=function(){ca(r);const w=Array.from(arguments),S=new Set,E=new Set;function ht(ae){S.add(ae)}function Mt(ae){E.add(ae)}Lr(y,{args:w,name:T[Ya],store:oe,after:ht,onError:Mt});let De;try{De=m.apply(this&&this.$id===t?this:oe,w)}catch(ae){throw Lr(E,ae),ae}return De instanceof Promise?De.then(ae=>(Lr(S,ae),ae)).catch(ae=>(Lr(E,ae),Promise.reject(ae))):(Lr(S,De),De)};return T[Rh]=!0,T[Ya]=_,T},H={_p:r,$id:t,$onAction:Sh.bind(null,y),$patch:L,$reset:z,$subscribe(m,_={}){const T=Sh(g,m,_.detached,()=>w()),w=a.run(()=>ao(()=>r.state.value[t],S=>{(_.flush==="sync"?d:h)&&m({storeId:t,type:Gs.direct,events:b},S)},Cn({},l,_)));return T},$dispose:K},oe=ta(H);r._s.set(t,oe);const I=(r._a&&r._a.runWithContext||Uv)(()=>r._e.run(()=>(a=gd()).run(()=>e({action:G}))));for(const m in I){const _=I[m];if(xe(_)&&!$v(_)||hn(_))i||(V&&jv(_)&&(xe(_)?_.value=V[m]:wc(_,V[m])),r.state.value[t][m]=_);else if(typeof _=="function"){const T=G(_,m);I[m]=T,c.actions[m]=_}}return Cn(oe,I),Cn(ye(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:m=>{L(_=>{Cn(_,m)})}}),r._p.forEach(m=>{Cn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&n.hydrate&&n.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function Hv(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=Vy();return a=a||(l?Ws(gp,null):null),a&&ca(a),a=pp,a._s.has(t)||(s?_p(t,e,r,a):qv(t,r,a)),a._s.get(t)}return i.$id=t,i}function zv(t,e){if(t==null)return;let n=t;for(let r=0;r<e.length;r++){if(n===void 0||n[e[r]]===void 0)return;if(n===null||n[e[r]]===null)return null;n=n[e[r]]}return n}function dl(t,e,n){if(n.length===0)return e;const r=n[0];return n.length>1&&(e=dl(typeof t!="object"||t===null||!Object.prototype.hasOwnProperty.call(t,r)?Number.isInteger(Number(n[1]))?[]:{}:t[r],e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function yp(t,e){if(t==null||e.length===0)return t;if(e.length===1){if(t==null)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const r in t)n[r]=t[r];return delete n[e[0]],n}if(t[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const r in t)n[r]=t[r];return n}return dl(t,yp(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function vp(t,e){return e.map(n=>n.split(".")).map(n=>[n,zv(t,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>dl(n,r[1],r[0]),{})}function Ep(t,e){return e.map(n=>n.split(".")).reduce((n,r)=>yp(n,r),t)}function Ch(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const g=e.getItem(r);if(g){const y=n.deserialize(g),b=i?vp(y,i):y,V=a?Ep(b,a):b;t.$patch(V)}d&&(l==null||l(h))}catch(g){s&&console.error("[pinia-plugin-persistedstate]",g)}}function Ph(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a}){try{const c=i?vp(t,i):t,l=a?Ep(c,a):c,h=n.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function Wv(t,e){return typeof t=="function"?t(e):typeof t=="string"?t:e}function Kv(t,e,n){const{pinia:r,store:s,options:{persist:i=n}}=t;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Ch(s,l,t,c)})},s.$persist=()=>{a.forEach(c=>{Ph(s.$state,c)})},a.forEach(c=>{Ch(s,c,t),s.$subscribe((l,h)=>Ph(h,c),{detached:!0})})}function Gv(t={}){return function(e){Kv(e,n=>{const r=Wv(n.key,e.store.$id);return{key:(t.key?t.key:s=>s)(r),debug:n.debug??t.debug??!1,serializer:n.serializer??t.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:n.storage??t.storage??window.localStorage,beforeHydrate:n.beforeHydrate??t.beforeHydrate,afterHydrate:n.afterHydrate??t.afterHydrate,pick:n.pick,omit:n.omit}},t.auto??!1)}}var Qv=Gv();const Sr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Jv={},Xv={class:"mug"};function Yv(t,e){return ge(),ke("div",Xv,[oo(t.$slots,"default")])}const Zv=Sr(Jv,[["render",Yv]]),eE={},tE={id:"condensation"},nE={class:"flake"};function rE(t,e){return ge(),ke("div",tE,[(ge(),ke(Fe,null,Dn(3,()=>Ae("div",nE)),64))])}const sE=Sr(eE,[["render",rE]]),iE={},oE={id:"steam"},aE={class:"stream"};function cE(t,e){return ge(),ke("div",oE,[(ge(),ke(Fe,null,Dn(3,()=>Ae("div",aE)),64))])}const lE=Sr(iE,[["render",cE]]),uE={},hE={class:"carafe"};function fE(t,e){return ge(),ke("div",hE,[oo(t.$slots,"top",{},void 0,!0),oo(t.$slots,"mid",{},void 0,!0),oo(t.$slots,"bottom",{},void 0,!0)])}const dE=Sr(uE,[["render",fE],["__scopeId","data-v-43d2bfc5"]]),pE=()=>{};var Vh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(y=64)),r.push(n[d],n[g],n[y],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new mE;const y=i<<2|c>>4;if(r.push(y),h!==64){const b=c<<4&240|h>>2;if(r.push(b),g!==64){const V=h<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _E=function(t){const e=Tp(t);return Ip.encodeByteArray(e,!0)},Vo=function(t){return _E(t).replace(/\./g,"")},wp=function(t){try{return Ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=()=>yE().__FIREBASE_DEFAULTS__,EE=()=>{if(typeof process>"u"||typeof Vh>"u")return;const t=Vh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wp(t[1]);return e&&JSON.parse(e)},la=()=>{try{return pE()||vE()||EE()||TE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ap=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},IE=t=>{const e=Ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bp=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},Sp=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(a)),""].join(".")}const Qs={};function bE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Qs))Qs[e]?t.emulator.push(e):t.prod.push(e);return t}function SE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let kh=!1;function Cp(t,e){if(typeof window>"u"||typeof document>"u"||!cs(window.location.host)||Qs[t]===e||Qs[t]||kh)return;Qs[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=bE().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function l(y,b){y.setAttribute("width","24"),y.setAttribute("id",b),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{kh=!0,a()},y}function d(y,b){y.setAttribute("id",b),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=SE(r),b=n("text"),V=document.getElementById(b)||document.createElement("span"),M=n("learnmore"),L=document.getElementById(M)||document.createElement("a"),z=n("preprendIcon"),K=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const G=y.element;c(G),d(L,M);const H=h();l(K,z),G.append(K,V,L,H),document.body.appendChild(G)}i?(V.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function CE(){var t;const e=(t=la())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DE(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OE(){return!CE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NE(){try{return typeof indexedDB=="object"}catch{return!1}}function xE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ME,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?LE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new In(s,c,r)}}function LE(t,e){return t.replace(FE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const FE=/\{\$([^}]+)}/g;function UE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Dh(i)&&Dh(a)){if(!Er(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function BE(t,e){const n=new jE(t,e);return n.subscribe.bind(n)}class jE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$E(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $E(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zE(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HE(t){return t===ur?void 0:t}function zE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const KE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},GE=he.INFO,QE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},JE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=QE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=GE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const XE=(t,e)=>e.some(n=>t instanceof n);let Oh,Nh;function YE(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return Nh||(Nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pp=new WeakMap,Ac=new WeakMap,Vp=new WeakMap,ec=new WeakMap,gl=new WeakMap;function eT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Fn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Pp.set(n,t)}).catch(()=>{}),gl.set(e,t),e}function tT(t){if(Ac.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Ac.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nT(t){bc=t(bc)}function rT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tc(this),e,...n);return Vp.set(r,e.sort?e.sort():[e]),Fn(r)}:ZE().includes(t)?function(...e){return t.apply(tc(this),e),Fn(Pp.get(this))}:function(...e){return Fn(t.apply(tc(this),e))}}function sT(t){return typeof t=="function"?rT(t):(t instanceof IDBTransaction&&tT(t),XE(t,YE())?new Proxy(t,bc):t)}function Fn(t){if(t instanceof IDBRequest)return eT(t);if(ec.has(t))return ec.get(t);const e=sT(t);return e!==t&&(ec.set(t,e),gl.set(e,t)),e}const tc=t=>gl.get(t);function iT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Fn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Fn(a.result),l.oldVersion,l.newVersion,Fn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const oT=["get","getKey","getAll","getAllKeys","count"],aT=["put","add","delete","clear"],nc=new Map;function xh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=aT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oT.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return nc.set(e,i),i}nT(t=>({...t,get:(e,n,r)=>xh(e,n)||t.get(e,n,r),has:(e,n)=>!!xh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sc="@firebase/app",Mh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new pl("@firebase/app"),uT="@firebase/app-compat",hT="@firebase/analytics-compat",fT="@firebase/analytics",dT="@firebase/app-check-compat",pT="@firebase/app-check",gT="@firebase/auth",mT="@firebase/auth-compat",_T="@firebase/database",yT="@firebase/data-connect",vT="@firebase/database-compat",ET="@firebase/functions",TT="@firebase/functions-compat",IT="@firebase/installations",wT="@firebase/installations-compat",AT="@firebase/messaging",bT="@firebase/messaging-compat",ST="@firebase/performance",RT="@firebase/performance-compat",CT="@firebase/remote-config",PT="@firebase/remote-config-compat",VT="@firebase/storage",kT="@firebase/storage-compat",DT="@firebase/firestore",OT="@firebase/ai",NT="@firebase/firestore-compat",xT="firebase",MT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="[DEFAULT]",LT={[Sc]:"fire-core",[uT]:"fire-core-compat",[fT]:"fire-analytics",[hT]:"fire-analytics-compat",[pT]:"fire-app-check",[dT]:"fire-app-check-compat",[gT]:"fire-auth",[mT]:"fire-auth-compat",[_T]:"fire-rtdb",[yT]:"fire-data-connect",[vT]:"fire-rtdb-compat",[ET]:"fire-fn",[TT]:"fire-fn-compat",[IT]:"fire-iid",[wT]:"fire-iid-compat",[AT]:"fire-fcm",[bT]:"fire-fcm-compat",[ST]:"fire-perf",[RT]:"fire-perf-compat",[CT]:"fire-rc",[PT]:"fire-rc-compat",[VT]:"fire-gcs",[kT]:"fire-gcs-compat",[DT]:"fire-fst",[NT]:"fire-fst-compat",[OT]:"fire-vertex","fire-js":"fire-js",[xT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,FT=new Map,Cc=new Map;function Lh(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Cc.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of ko.values())Lh(n,t);for(const n of FT.values())Lh(n,t);return!0}function ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new Ti("app","Firebase",UT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=MT;function kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=bp()),!n)throw Un.create("no-options");const i=ko.get(s);if(i){if(Er(n,i.options)&&Er(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const a=new WE(s);for(const l of Cc.values())a.addComponent(l);const c=new BT(n,r,a);return ko.set(s,c),c}function Dp(t=Rc){const e=ko.get(t);if(!e&&t===Rc&&bp())return kp();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=LT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(c.join(" "));return}es(new Tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="firebase-heartbeat-database",$T=1,ai="firebase-heartbeat-store";let rc=null;function Op(){return rc||(rc=iT(jT,$T,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),rc}async function qT(t){try{const n=(await Op()).transaction(ai),r=await n.objectStore(ai).get(Np(t));return await n.done,r}catch(e){if(e instanceof In)_n.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Fh(t,e){try{const r=(await Op()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,Np(t)),await r.done}catch(n){if(n instanceof In)_n.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function Np(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=1024,zT=30;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>zT){const a=QT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uh(),{heartbeatsToSend:r,unsentEntries:s}=KT(this._heartbeatsCache.heartbeats),i=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return _n.warn(n),""}}}function Uh(){return new Date().toISOString().substring(0,10)}function KT(t,e=HT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NE()?xE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bh(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}function QT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){es(new Tr("platform-logger",e=>new cT(e),"PRIVATE")),es(new Tr("heartbeat",e=>new WT(e),"PRIVATE")),Bn(Sc,Mh,t),Bn(Sc,Mh,"esm2017"),Bn("fire-js","")}JT("");var jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,xp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,w,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[w].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(w=0;16>w;++w)T[w]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],w=I.g[2];var S=I.g[3],E=m+(S^_&(w^S))+T[0]+3614090360&4294967295;m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[2]+606105819&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[3]+3250441966&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(S^_&(w^S))+T[4]+4118548399&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[6]+2821735955&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[7]+4249261313&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(S^_&(w^S))+T[8]+1770035416&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[10]+4294925233&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[11]+2304563134&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(S^_&(w^S))+T[12]+1804603682&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[14]+2792965006&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[15]+1236535329&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(w^S&(_^w))+T[1]+4129170786&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[11]+643717713&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[0]+3921069994&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(_^w))+T[5]+3593408605&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[15]+3634488961&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[4]+3889429448&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(_^w))+T[9]+568446438&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[3]+4107603335&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[8]+1163531501&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(_^w))+T[13]+2850285829&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[7]+1735328473&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[12]+2368359562&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(_^w^S)+T[5]+4294588738&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[11]+1839030562&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[14]+4259657740&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^S)+T[1]+2763975236&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[7]+4139469664&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[10]+3200236656&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^S)+T[13]+681279174&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[3]+3572445317&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[6]+76029189&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^S)+T[9]+3654602809&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[15]+530742520&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[2]+3299628645&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(w^(_|~S))+T[0]+4096336452&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[14]+2878612391&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[5]+4237533241&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~S))+T[12]+1700485571&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[10]+4293915773&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[1]+2240044497&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~S))+T[8]+1873313359&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[6]+2734768916&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[13]+1309151649&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~S))+T[4]+4149444226&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[2]+718787259&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,T=this.B,w=this.h,S=0;S<m;){if(w==0)for(;S<=_;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[w++]=I.charCodeAt(S++),w==this.blockSize){s(this,T),w=0;break}}else for(;S<m;)if(T[w++]=I[S++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)I[_++]=this.g[m]>>>T&255;return I};function i(I,m){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],T=!0,w=I.length-1;0<=w;w--){var S=I[w]|0;T&&S==m||(_[w]=S,T=!1)}this.g=_}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return L(h(-I));for(var m=[],_=1,T=0;I>=_;T++)m[T]=I/_|0,_*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return L(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=g,w=0;w<I.length;w+=8){var S=Math.min(8,I.length-w),E=parseInt(I.substring(w,w+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(_),T=T.add(h(E)))}return T}var g=l(0),y=l(1),b=l(16777216);t=a.prototype,t.m=function(){if(M(this))return-L(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(M(this))return"-"+L(this).toString(I);for(var m=h(Math.pow(I,6)),_=this,T="";;){var w=H(_,m).g;_=z(_,w.j(m));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=w,V(_))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function M(I){return I.h==-1}t.l=function(I){return I=z(this,I),M(I)?-1:V(I)?0:1};function L(I){for(var m=I.g.length,_=[],T=0;T<m;T++)_[T]=~I.g[T];return new a(_,~I.h).add(y)}t.abs=function(){return M(this)?L(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0,w=0;w<=m;w++){var S=T+(this.i(w)&65535)+(I.i(w)&65535),E=(S>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);T=E>>>16,S&=65535,E&=65535,_[w]=E<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(I,m){return I.add(L(m))}t.j=function(I){if(V(this)||V(I))return g;if(M(this))return M(I)?L(this).j(L(I)):L(L(this).j(I));if(M(I))return L(this.j(L(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<I.g.length;w++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=I.i(w)>>>16,Mt=I.i(w)&65535;_[2*T+2*w]+=E*Mt,K(_,2*T+2*w),_[2*T+2*w+1]+=S*Mt,K(_,2*T+2*w+1),_[2*T+2*w+1]+=E*ht,K(_,2*T+2*w+1),_[2*T+2*w+2]+=S*ht,K(_,2*T+2*w+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function K(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function H(I,m){if(V(m))throw Error("division by zero");if(V(I))return new G(g,g);if(M(I))return m=H(L(I),m),new G(L(m.g),L(m.h));if(M(m))return m=H(I,L(m)),new G(L(m.g),m.h);if(30<I.g.length){if(M(I)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=m;0>=T.l(I);)_=oe(_),T=oe(T);var w=ve(_,1),S=ve(T,1);for(T=ve(T,2),_=ve(_,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(w=w.add(_),S=E),T=ve(T,1),_=ve(_,1)}return m=z(I,w.j(m)),new G(w,m)}for(w=g;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(_),E=S.j(m);M(E)||0<E.l(I);)_-=T,S=h(_),E=S.j(m);V(S)&&(S=y),w=w.add(S),I=z(I,E)}return new G(w,I)}t.A=function(I){return H(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&I.i(T);return new a(_,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|I.i(T);return new a(_,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^I.i(T);return new a(_,this.h^I.h)};function oe(I){for(var m=I.g.length+1,_=[],T=0;T<m;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(_,I.h)}function ve(I,m){var _=m>>5;m%=32;for(var T=I.g.length-_,w=[],S=0;S<T;S++)w[S]=0<m?I.i(S+_)>>>m|I.i(S+_+1)<<32-m:I.i(S+_);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,jn=a}).apply(typeof jh<"u"?jh:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mp,Ls,Lp,uo,Pc,Fp,Up,Bp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function y(o,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,y.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,C){for(var j=Array(arguments.length-2),we=2;we<arguments.length;we++)j[we-2]=arguments[we];return u.prototype[R].apply(p,j)}}function M(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const R=o.length||0,C=p.length||0;o.length=R+C;for(let j=0;j<C;j++)o[R+j]=p[j]}else o.push(p)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ve(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let C=0;C<_.length;C++)f=_[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function w(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const p=Mt.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Mt=new z(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,me=!1,Rt=new ht,Yn=()=>{const o=c.Promise.resolve(void 0);ae=()=>{o.then(Yt)}};var Yt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Mt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Ra=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function Zn(o,u){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:er[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zn.aa.h.call(this)}}V(Zn,$e);var er={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),gs=0;function Di(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++gs,this.da=this.fa=!1}function Lt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ms(o){this.src=o,this.g={},this.h=0}ms.prototype.add=function(o,u,f,p,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var j=A(o,u,p,R);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new Di(u,this.src,C,!!p,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(Lt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,p){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==p)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),F={};function O(o,u,f,p,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(o,u[C],f,p,R);return null}return f=te(f),o&&o[Zt]?o.K(u,f,h(p)?!!p.capture:!1,R):N(o,u,f,!1,p,R)}function N(o,u,f,p,R,C){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,we=q(o);if(we||(o[P]=we=new ms(o)),f=we.add(u,f,p,j,C),f.proxy)return f;if(p=$(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)Ra||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(x(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function B(o,u,f,p,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)B(o,u[C],f,p,R);else p=h(p)?!!p.capture:!!p,f=te(f),o&&o[Zt]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=A(C,f,p,R),-1<f&&(Lt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,p,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Zt])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(x(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=q(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):Lt(o)}}}function x(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new Zn(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&U(o),o=f.call(p,u)}return o}function q(o){return o=o[P],o instanceof ms?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){je.call(this),this.i=new ms(this),this.M=this,this.F=null}V(Z,je),Z.prototype[Zt]=!0,Z.prototype.removeEventListener=function(o,u,f,p){B(this,o,u,f,p)};function ce(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new $e(u,o);else if(u instanceof $e)u.target=u.target||o;else{var R=u;u=new $e(p,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var j=u.g=f[C];R=de(j,p,!0,u)&&R}if(j=u.g=o,R=de(j,p,!0,u)&&R,R=de(j,p,!1,u)&&R,f)for(C=0;C<f.length;C++)j=u.g=f[C],R=de(j,p,!1,u)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)Lt(f[p]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},Z.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function de(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==f){var we=j.listener,Je=j.ha||j.src;j.fa&&v(o.i,j),R=we.call(Je,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ke(o,u,f){if(typeof o=="function")f&&(o=y(o,f));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ge(o){o.g=Ke(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class wt extends je{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(o){je.call(this),this.h=o,this.g={}}V(et,je);var wn=[];function _s(o){ve(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}et.prototype.N=function(){et.aa.N.call(this),_s(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,At=c.JSON.parse,Oi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function kr(){}kr.prototype.h=null;function su(o){return o.h||(o.h=o.i())}function iu(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ca(){$e.call(this,"d")}V(Ca,$e);function Pa(){$e.call(this,"c")}V(Pa,$e);var tr={},ou=null;function Ni(){return ou=ou||new Z}tr.La="serverreachability";function au(o){$e.call(this,tr.La,o)}V(au,$e);function vs(o){const u=Ni();ce(u,new au(u))}tr.STAT_EVENT="statevent";function cu(o,u){$e.call(this,tr.STAT_EVENT,o),this.stat=u}V(cu,$e);function ft(o){const u=Ni();ce(u,new cu(u,o))}tr.Ma="timingevent";function lu(o,u){$e.call(this,tr.Ma,o),this.size=u}V(lu,$e);function Es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function Wm(o,u,f,p,R,C){o.info(function(){if(o.g)if(C)for(var j="",we=C.split("&"),Je=0;Je<we.length;Je++){var _e=we[Je].split("=");if(1<_e.length){var tt=_e[0];_e=_e[1];var nt=tt.split("_");j=2<=nt.length&&nt[1]=="type"?j+(tt+"="+_e+"&"):j+(tt+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function Km(o,u,f,p,R,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+j})}function Dr(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Qm(o,f)+(p?" "+p:"")})}function Gm(o,u){o.info(function(){return"TIMEOUT: "+u})}Ts.prototype.info=function(){};function Qm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Qe(f)}catch{return u}}var xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function Mi(){}V(Mi,kr),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Va=new Mi;function An(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hu}function hu(){this.i=null,this.g="",this.h=!1}var fu={},ka={};function Da(o,u,f){o.L=1,o.v=Bi(en(u)),o.m=f,o.P=!0,du(o,null)}function du(o,u){o.F=Date.now(),Li(o),o.A=en(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ru(f.i,"t",p),o.C=0,f=o.j.J,o.h=new hu,o.g=zu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new wt(y(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(wn[0]=R.toString()),R=wn);for(var C=0;C<R.length;C++){var j=O(f,R[C],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),vs(),Wm(o.i,o.u,o.A,o.l,o.R,o.m)}An.prototype.ca=function(o){o=o.target;const u=this.M;u&&tn(o)==3?u.j():this.Y(o)},An.prototype.Y=function(o){try{if(o==this.g)e:{const nt=tn(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Nu(this.g)))){this.J||nt!=4||u==7||(u==8||0>=xr?vs(3):vs(2)),Oa(this);var f=this.g.Z();this.X=f;t:if(pu(this)){var p=Nu(this.g);o="";var R=p.length,C=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),Is(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,Km(this.i,this.u,this.A,this.l,this.R,nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Je=this.g;if((we=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(we)){var _e=we;break t}}_e=null}if(f=_e)Dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,f);else{this.o=!1,this.s=3,ft(12),nr(this),Is(this);break e}}if(this.P){f=!0;let Ct;for(;!this.J&&this.C<j.length;)if(Ct=Jm(this,j),Ct==ka){nt==4&&(this.s=4,ft(14),f=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==fu){this.s=4,ft(15),Dr(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Dr(this.i,this.l,Ct,null),Na(this,Ct);if(pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||j.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Dr(this.i,this.l,j,"[Invalid Chunked Response]"),nr(this),Is(this);else if(0<j.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ba(tt),tt.M=!0,ft(11))}}else Dr(this.i,this.l,j,null),Na(this,j);nt==4&&nr(this),this.o&&!this.J&&(nt==4?ju(this.j,this):(this.o=!1,Li(this)))}else d_(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),nr(this),Is(this)}}}catch{}finally{}};function pu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Jm(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?ka:(f=Number(u.substring(f,p)),isNaN(f)?fu:(p+=1,p+f>u.length?ka:(u=u.slice(p,p+f),o.C=p+f,u)))}An.prototype.cancel=function(){this.J=!0,nr(this)};function Li(o){o.S=Date.now()+o.I,gu(o,o.I)}function gu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Es(y(o.ba,o),u)}function Oa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}An.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Gm(this.i,this.A),this.L!=2&&(vs(),ft(17)),nr(this),this.s=2,Is(this)):gu(this,this.S-o)};function Is(o){o.j.G==0||o.J||ju(o.j,o)}function nr(o){Oa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,_s(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Na(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||xa(f.h,o))){if(!o.K&&xa(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Wi(f),Hi(f);else break e;Ua(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Es(y(f.Za,f),6e3));if(1>=yu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else sr(f,11)}else if((o.K||f.g==o)&&Wi(f),!K(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const tt=_e[3];tt!=null&&(f.la=tt,f.j.info("VER="+f.la));const nt=_e[4];nt!=null&&(f.Aa=nt,f.j.info("SVER="+f.Aa));const xr=_e[5];xr!=null&&typeof xr=="number"&&0<xr&&(p=1.5*xr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Ct=o.g;if(Ct){const Gi=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var C=p.h;C.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ma(C,C.h),C.h=null))}if(p.D){const ja=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ja&&(p.ya=ja,Ce(p.I,p.D,ja))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var j=o;if(p.qa=Hu(p,p.J?p.ia:null,p.W),j.K){vu(p.h,j);var we=j,Je=p.L;Je&&(we.I=Je),we.B&&(Oa(we),Li(we)),p.g=j}else Uu(p);0<f.i.length&&zi(f)}else _e[0]!="stop"&&_e[0]!="close"||sr(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?sr(f,7):Fa(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}vs(4)}catch{}}var Xm=class{constructor(o,u){this.g=o,this.map=u}};function mu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _u(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function yu(o){return o.h?1:o.g?o.g.size:0}function xa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ma(o,u){o.g?o.g.add(u):o.h=u}function vu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}mu.prototype.cancel=function(){if(this.i=Eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Eu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return M(o.i)}function Ym(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function Zm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function Tu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Zm(o),p=Ym(o),R=p.length,C=0;C<R;C++)u.call(void 0,p[C],f&&f[C],o)}var Iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var C=o[f].substring(0,p);R=o[f].substring(p+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rr){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var u=o.i,f=new bs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),wu(this,f),this.m=o.m}else o&&(u=String(o).match(Iu))?(this.h=!1,Fi(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),Ui(this,u[4]),this.l=ws(u[5]||"",!0),wu(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}rr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(As(u,Au,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,Au,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(As(f,f.charAt(0)=="/"?r_:n_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",As(f,i_)),o.join("")};function en(o){return new rr(o)}function Fi(o,u,f){o.j=f?ws(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function wu(o,u,f){u instanceof bs?(o.i=u,o_(o.i,o.h)):(f||(u=As(u,s_)),o.i=new bs(u,o.h))}function Ce(o,u,f){o.i.set(u,f)}function Bi(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ws(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,t_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function t_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Au=/[#\/\?@]/g,n_=/[#\?:]/g,r_=/[#\?]/g,s_=/[#\?@]/g,i_=/#/g;function bs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function bn(o){o.g||(o.g=new Map,o.h=0,o.i&&e_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=bs.prototype,t.add=function(o,u){bn(this),this.i=null,o=Or(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function bu(o,u){bn(o),u=Or(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Su(o,u){return bn(o),u=Or(o,u),o.g.has(u)}t.forEach=function(o,u){bn(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)},t.na=function(){bn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=o[p];for(let C=0;C<R.length;C++)f.push(u[p])}return f},t.V=function(o){bn(this);let u=[];if(typeof o=="string")Su(this,o)&&(u=u.concat(this.g.get(Or(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return bn(this),this.i=null,o=Or(this,o),Su(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ru(o,u,f){bu(o,u),0<f.length&&(o.i=null,o.g.set(Or(o,u),M(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const C=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var R=C;j[p]!==""&&(R+="="+encodeURIComponent(String(j[p]))),o.push(R)}}return this.i=o.join("&")};function Or(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function o_(o,u){u&&!o.j&&(bn(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(bu(this,p),Ru(this,R,f))},o)),o.j=u}function a_(o,u){const f=new Ts;if(c.Image){const p=new Image;p.onload=b(Sn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=b(Sn,f,"TestLoadImage: error",!1,u,p),p.onabort=b(Sn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(Sn,f,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function c_(o,u){const f=new Ts,p=new AbortController,R=setTimeout(()=>{p.abort(),Sn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?Sn(f,"TestPingServer: ok",!0,u):Sn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Sn(f,"TestPingServer: error",!1,u)})}function Sn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function l_(){this.g=new Oi}function u_(o,u,f){const p=f||"";try{Tu(o,function(R,C){let j=R;h(R)&&(j=Qe(R)),u.push(p+C+"="+encodeURIComponent(j))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}V(ji,kr),ji.prototype.g=function(){return new $i(this.l,this.j)},ji.prototype.i=(function(o){return function(){return o}})({});function $i(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V($i,Z),t=$i.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Rs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):Rs(this),this.readyState==3&&Cu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},t.Qa=function(o){this.g&&(this.response=o,Ss(this))},t.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Rs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pu(o){let u="";return ve(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function La(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Pu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ce(o,u,f))}function Ne(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ne,Z);var h_=/^https?$/i,f_=["POST","PUT"];t=Ne.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?su(this.o):su(Va),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Vu(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(f_,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of f)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ou(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Vu(this,C)}};function Vu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,ku(o),qi(o)}function ku(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Du(this):this.bb())},t.bb=function(){Du(this)};function Du(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tn(o)!=4||o.Z()!=2)){if(o.u&&tn(o)==4)Ke(o.Ea,0,o);else if(ce(o,"readystatechange"),tn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=j===0){var R=String(o.D).match(Iu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!h_.test(R?R.toLowerCase():"")}f=p}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var C=2<tn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",ku(o)}}finally{qi(o)}}}}function qi(o,u){if(o.g){Ou(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=p}catch{}}}function Ou(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function tn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),At(u)}};function Nu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function d_(o){const u={};o=(o.g&&2<=tn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(K(o[p]))continue;var f=w(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function xu(o){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,o),this.cb=Cs("retryDelaySeedMs",1e4,o),this.Wa=Cs("forwardChannelMaxRetries",2,o),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new mu(o&&o.concurrentRequestLimit),this.Da=new l_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,p){ft(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Hu(this,null,this.W),zi(this)};function Fa(o){if(Mu(o),o.G==3){var u=o.U++,f=en(o.I);if(Ce(f,"SID",o.K),Ce(f,"RID",u),Ce(f,"TYPE","terminate"),Ps(o,f),u=new An(o,o.j,u),u.L=2,u.v=Bi(en(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=zu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}qu(o)}function Hi(o){o.g&&(Ba(o),o.g.cancel(),o.g=null)}function Mu(o){Hi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function zi(o){if(!_u(o.h)&&!o.s){o.s=!0;var u=o.Ga;ae||Yn(),me||(ae(),me=!0),Rt.add(u,o),o.B=0}}function p_(o,u){return yu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Es(y(o.Ga,o,u),$u(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new An(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Fu(this,R,u),f=en(this.I),Ce(f,"RID",o),Ce(f,"CVER",22),this.D&&Ce(f,"X-HTTP-Session-Id",this.D),Ps(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Pu(C)))+"&"+u:this.m&&La(f,this.m,C)),Ma(this.h,R),this.Ua&&Ce(f,"TYPE","init"),this.P?(Ce(f,"$req",u),Ce(f,"SID","null"),R.T=!0,Da(R,f,null)):Da(R,f,u),this.G=2}}else this.G==3&&(o?Lu(this,o):this.i.length==0||_u(this.h)||Lu(this))};function Lu(o,u){var f;u?f=u.l:f=o.U++;const p=en(o.I);Ce(p,"SID",o.K),Ce(p,"RID",f),Ce(p,"AID",o.T),Ps(o,p),o.m&&o.o&&La(p,o.m,o.o),f=new An(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Fu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ma(o.h,f),Da(f,p,u)}function Ps(o,u){o.H&&ve(o.H,function(f,p){Ce(u,p,f)}),o.l&&Tu({},function(f,p){Ce(u,p,f)})}function Fu(o,u,f){f=Math.min(o.i.length,f);var p=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const j=["count="+f];C==-1?0<f?(C=R[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let we=!0;for(let Je=0;Je<f;Je++){let _e=R[Je].g;const tt=R[Je].map;if(_e-=C,0>_e)C=Math.max(0,R[Je].g-100),we=!1;else try{u_(tt,j,"req"+_e+"_")}catch{p&&p(tt)}}if(we){p=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Uu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ae||Yn(),me||(ae(),me=!0),Rt.add(u,o),o.v=0}}function Ua(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Es(y(o.Fa,o),$u(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Bu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Es(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Hi(this),Bu(this))};function Ba(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Bu(o){o.g=new An(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=en(o.qa);Ce(u,"RID","rpc"),Ce(u,"SID",o.K),Ce(u,"AID",o.T),Ce(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(u,"TO",o.ja),Ce(u,"TYPE","xmlhttp"),Ps(o,u),o.m&&o.o&&La(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Bi(en(u)),f.m=null,f.P=!0,du(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Hi(this),Ua(this),ft(19))};function Wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ju(o,u){var f=null;if(o.g==u){Wi(o),Ba(o),o.g=null;var p=2}else if(xa(o.h,u))f=u.D,vu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Ni(),ce(p,new lu(p,f)),zi(o)}else Uu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&p_(o,u)||p==2&&Ua(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function $u(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var f=y(o.fb,o),p=o.Xa;const R=!p;p=new rr(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fi(p,"https"),Bi(p),R?a_(p.toString(),f):c_(p.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),qu(o),Mu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function qu(o){if(o.G=0,o.ka=[],o.l){const u=Eu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function Hu(o,u,f){var p=f instanceof rr?en(f):new rr(f);if(p.g!="")u&&(p.g=u+"."+p.g),Ui(p,p.s);else{var R=c.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new rr(null);p&&Fi(C,p),u&&(C.g=u),R&&Ui(C,R),f&&(C.l=f),p=C}return f=o.D,u=o.ya,f&&u&&Ce(p,f,u),Ce(p,"VER",o.la),Ps(o,p),p}function zu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ne(new ji({eb:f})):new Ne(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wu(){}t=Wu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new yt(o,u)};function yt(o,u){Z.call(this),this.g=new xu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}V(yt,Z),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Fa(this.g)},yt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new Xm(u.Ya++,o)),u.G==3&&zi(u)},yt.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,yt.aa.N.call(this)};function Ku(o){Ca.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Ku,Ca);function Gu(){Pa.call(this),this.status=1}V(Gu,Pa);function Nr(o){this.g=o}V(Nr,Wu),Nr.prototype.ua=function(){ce(this.g,"a")},Nr.prototype.ta=function(o){ce(this.g,new Ku(o))},Nr.prototype.sa=function(o){ce(this.g,new Gu)},Nr.prototype.ra=function(){ce(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,Bp=function(){return new Ki},Up=function(){return Ni()},Fp=tr,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,uo=xi,uu.COMPLETE="complete",Lp=uu,iu.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Ls=iu,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Mp=Ne}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const $h="@firebase/firestore",qh="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new pl("@firebase/firestore");function Ur(){return Ir.logLevel}function W(t,...e){if(Ir.logLevel<=he.DEBUG){const n=e.map(_l);Ir.debug(`Firestore (${us}): ${t}`,...n)}}function yn(t,...e){if(Ir.logLevel<=he.ERROR){const n=e.map(_l);Ir.error(`Firestore (${us}): ${t}`,...n)}}function zn(t,...e){if(Ir.logLevel<=he.WARN){const n=e.map(_l);Ir.warn(`Firestore (${us}): ${t}`,...n)}}function _l(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jp(t,r,n)}function jp(t,e,n){let r=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yn(r),new Error(r)}function Ie(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||jp(e,s,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(it.UNAUTHENTICATED)))}shutdown(){}}class YT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class ZT{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new $p(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class eI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new eI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(it.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Hh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=rI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Vc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=qp(),a=sI(i.encode(zh(t,n)),i.encode(zh(e,n)));return a!==0?a:ue(r,s)}}n+=r>65535?2:1}return ue(t.length,e.length)}function zh(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function sI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ue(t[n],e[n]);return ue(t.length,e.length)}function ts(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="__name__";class Bt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Bt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ue(e.length,n.length)}static compareSegments(e,n){const r=Bt.isNumericId(e),s=Bt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Bt.extractNumericId(e).compare(Bt.extractNumericId(n)):Vc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jn.fromString(e.substring(4,e.length-2))}}class Pe extends Bt{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Pe(n)}static emptyPath(){return new Pe([])}}const iI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Bt{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return iI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wh}static keyField(){return new Ye([Wh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Pe.fromString(e))}static fromName(e){return new X(Pe.fromString(e).popFirst(5))}static empty(){return new X(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e,n){if(!n)throw new Q(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oI(t,e,n,r){if(e===!0&&r===!0)throw new Q(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kh(t){if(!X.isDocumentKey(t))throw new Q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gh(t){if(X.isDocumentKey(t))throw new Q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zp(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function mr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new Q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function wi(t,e){if(!zp(t))throw new Q(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=-62135596800,Jh=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Jh);return new Ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qh)throw new Q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jh}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wi(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Ue("string",Ve._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ve(0,0))}static max(){return new se(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=-1;function aI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Wn(s,X.empty(),e)}function cI(t){return new Wn(t.readTime,t.key,ci)}class Wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(se.min(),X.empty(),ci)}static max(){return new Wn(se.max(),X.empty(),ci)}}function lI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==uI)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):k.reject(n)}static resolve(e){return new k(((n,r)=>{n(e)}))}static reject(e){return new k(((n,r)=>{r(e)}))}static waitFor(e){return new k(((n,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(l=>r(l)))})),a=!0,i===s&&n()}))}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next((s=>s?k.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new k(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new k(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function fI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ua.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=-1;function ha(t){return t==null}function Do(t){return t===0&&1/t==-1/0}function dI(t){return typeof t=="number"&&Number.isInteger(t)&&!Do(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="";function pI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xh(e)),e=gI(t.get(n),e);return Xh(e)}function gI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Wp:n+="";break;default:n+=i}}return n}function Xh(t){return t+Wp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zh(this.data.getIterator())}getIteratorFrom(e){return new Zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new He(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gp("Invalid base64 string: "+i):i}})(e);return new Ze(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const mI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Ie(!!t,39018),typeof t=="string"){let e=0;const n=mI.exec(t);if(Ie(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gn(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="server_timestamp",Jp="__type__",Xp="__previous_value__",Yp="__local_write_time__";function Tl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Jp])===null||n===void 0?void 0:n.stringValue)===Qp}function fa(t){const e=t.mapValue.fields[Xp];return Tl(e)?fa(e):e}function li(t){const e=Kn(t.mapValue.fields[Yp].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Oo="(default)";class ui{constructor(e,n){this.projectId=e,this.database=n||Oo}static empty(){return new ui("","")}get isDefaultDatabase(){return this.database===Oo}isEqual(e){return e instanceof ui&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="__type__",yI="__max__",to={mapValue:{}},eg="__vector__",No="value";function Qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tl(t)?4:EI(t)?9007199254740991:vI(t)?10:11:ee(28295,{value:t})}function Qt(t,e){if(t===e)return!0;const n=Qn(t);if(n!==Qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return li(t).isEqual(li(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Kn(s.timestampValue),c=Kn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Gn(s.bytesValue).isEqual(Gn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?Do(a)===Do(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Yh(a)!==Yh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Qt(a[l],c[l])))return!1;return!0})(t,e);default:return ee(52216,{left:t})}}function hi(t,e){return(t.values||[]).find((n=>Qt(n,e)))!==void 0}function ns(t,e){if(t===e)return 0;const n=Qn(t),r=Qn(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Me(i.integerValue||i.doubleValue),l=Me(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(li(t),li(e));case 5:return Vc(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=Gn(i),l=Gn(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Me(i.latitude),Me(a.latitude));return c!==0?c:ue(Me(i.longitude),Me(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return tf(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const g=i.fields||{},y=a.fields||{},b=(c=g[No])===null||c===void 0?void 0:c.arrayValue,V=(l=y[No])===null||l===void 0?void 0:l.arrayValue,M=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return M!==0?M:tf(b,V)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===to.mapValue&&a===to.mapValue)return 0;if(i===to.mapValue)return 1;if(a===to.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let g=0;g<l.length&&g<d.length;++g){const y=Vc(l[g],d[g]);if(y!==0)return y;const b=ns(c[l[g]],h[d[g]]);if(b!==0)return b}return ue(l.length,d.length)})(t.mapValue,e.mapValue);default:throw ee(23264,{le:n})}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Kn(t),r=Kn(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function tf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ns(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function rs(t){return kc(t)}function kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Gn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return X.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${kc(n.fields[a])}`;return s+"}"})(t.mapValue):ee(61005,{value:t})}function ho(t){switch(Qn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fa(t);return e?16+ho(e):16;case 5:return 2*t.stringValue.length;case 6:return Gn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ho(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Rr(r.fields,((i,a)=>{s+=i.length+ho(a)})),s})(t.mapValue);default:throw ee(13486,{value:t})}}function Dc(t){return!!t&&"integerValue"in t}function Il(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function rf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fo(t){return!!t&&"mapValue"in t}function vI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zp])===null||n===void 0?void 0:n.stringValue)===eg}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Js(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Js(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new bt(Js(this.value))}}function tg(t){const e=[];return Rr(t.fields,((n,r)=>{const s=new Ye([n]);if(fo(r)){const i=tg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new at(e,0,se.min(),se.min(),se.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,se.min(),se.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,se.min(),se.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.position=e,this.inclusive=n}}function sf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=ns(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function TI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{}class qe extends ng{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wI(e,n,r):n==="array-contains"?new SI(e,r):n==="in"?new RI(e,r):n==="not-in"?new CI(e,r):n==="array-contains-any"?new PI(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AI(e,r):new bI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ns(n,this.value)):n!==null&&Qn(this.value)===Qn(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends ng{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Jt(e,n)}matches(e){return rg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function rg(t){return t.op==="and"}function sg(t){return II(t)&&rg(t)}function II(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Oc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(sg(t))return t.filters.map((e=>Oc(e))).join(",");{const e=t.filters.map((n=>Oc(n))).join(",");return`${t.op}(${e})`}}function ig(t,e){return t instanceof qe?(function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)})(t,e):t instanceof Jt?(function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&ig(a,s.filters[c])),!0):!1})(t,e):void ee(19439)}function og(t){return t instanceof qe?(function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`})(t):t instanceof Jt?(function(n){return n.op.toString()+" {"+n.getFilters().map(og).join(" ,")+"}"})(t):"Filter"}class wI extends qe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class AI extends qe{constructor(e,n){super(e,"in",n),this.keys=ag("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class bI extends qe{constructor(e,n){super(e,"not-in",n),this.keys=ag("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function ag(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>X.fromName(r.referenceValue)))}class SI extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Il(n)&&hi(n.arrayValue,this.value)}}class RI extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hi(this.value.arrayValue,n)}}class CI extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!hi(this.value.arrayValue,n)}}class PI extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Il(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>hi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function af(t,e=null,n=[],r=[],s=null,i=null,a=null){return new VI(t,e,n,r,s,i,a)}function wl(t){const e=ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Oc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>rs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>rs(r))).join(",")),e.Pe=n}return e.Pe}function Al(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ig(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!of(t.startAt,e.startAt)&&of(t.endAt,e.endAt)}function Nc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kI(t,e,n,r,s,i,a,c){return new da(t,e,n,r,s,i,a,c)}function bl(t){return new da(t)}function cf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DI(t){return t.collectionGroup!==null}function Xs(t){const e=ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new He(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Mo(i,r))})),n.has(Ye.keyField().canonicalString())||e.Te.push(new Mo(Ye.keyField(),r))}return e.Te}function qt(t){const e=ie(t);return e.Ie||(e.Ie=OI(e,Xs(t))),e.Ie}function OI(t,e){if(t.limitType==="F")return af(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Mo(s.field,i)}));const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;return af(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xc(t,e,n){return new da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return Al(qt(t),qt(e))&&t.limitType===e.limitType}function cg(t){return`${wl(qt(t))}|lt:${t.limitType}`}function Br(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>og(s))).join(", ")}]`),ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>rs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>rs(s))).join(",")),`Target(${r})`})(qt(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=sf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Xs(r),s)||r.endAt&&!(function(a,c,l){const h=sf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Xs(r),s))})(t,e)}function NI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lg(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=xI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xI(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ns(l,h):ee(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Kp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Oe(X.comparator);function vn(){return MI}const ug=new Oe(X.comparator);function Fs(...t){let e=ug;for(const n of t)e=e.insert(n.key,n);return e}function hg(t){let e=ug;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function fr(){return Ys()}function fg(){return Ys()}function Ys(){return new Cr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const LI=new Oe(X.comparator),FI=new He(X.comparator);function fe(...t){let e=FI;for(const n of t)e=e.add(n);return e}const UI=new He(ue);function BI(){return UI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function dg(t){return{integerValue:""+t}}function jI(t,e){return dI(e)?dg(e):Sl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this._=void 0}}function $I(t,e,n){return t instanceof Lo?(function(s,i){const a={fields:{[Jp]:{stringValue:Qp},[Yp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tl(i)&&(i=fa(i)),i&&(a.fields[Xp]=i),{mapValue:a}})(n,e):t instanceof fi?gg(t,e):t instanceof di?mg(t,e):(function(s,i){const a=pg(s,i),c=lf(a)+lf(s.Ee);return Dc(a)&&Dc(s.Ee)?dg(c):Sl(s.serializer,c)})(t,e)}function qI(t,e,n){return t instanceof fi?gg(t,e):t instanceof di?mg(t,e):n}function pg(t,e){return t instanceof Fo?(function(r){return Dc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Lo extends ma{}class fi extends ma{constructor(e){super(),this.elements=e}}function gg(t,e){const n=_g(e);for(const r of t.elements)n.some((s=>Qt(s,r)))||n.push(r);return{arrayValue:{values:n}}}class di extends ma{constructor(e){super(),this.elements=e}}function mg(t,e){let n=_g(e);for(const r of t.elements)n=n.filter((s=>!Qt(s,r)));return{arrayValue:{values:n}}}class Fo extends ma{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function lf(t){return Me(t.integerValue||t.doubleValue)}function _g(t){return Il(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function HI(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof fi&&s instanceof fi||r instanceof di&&s instanceof di?ts(r.elements,s.elements,Qt):r instanceof Fo&&s instanceof Fo?Qt(r.Ee,s.Ee):r instanceof Lo&&s instanceof Lo})(t.transform,e.transform)}class zI{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Eg(t.key,fn.none()):new Ai(t.key,t.data,fn.none());{const n=t.data,r=bt.empty();let s=new He(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Pr(t.key,r,new Vt(s.toArray()),fn.none())}}function WI(t,e,n){t instanceof Ai?(function(s,i,a){const c=s.value.clone(),l=hf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Pr?(function(s,i,a){if(!po(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=hf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(vg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function Zs(t,e,n,r){return t instanceof Ai?(function(i,a,c,l){if(!po(i.precondition,a))return c;const h=i.value.clone(),d=ff(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Pr?(function(i,a,c,l){if(!po(i.precondition,a))return c;const h=ff(i.fieldTransforms,l,a),d=a.data;return d.setAll(vg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(t,e,n,r):(function(i,a,c){return po(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function KI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=pg(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ts(r,s,((i,a)=>HI(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ai extends _a{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends _a{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function hf(t,e,n){const r=new Map;Ie(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,qI(a,c,n[s]))}return r}function ff(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,$I(i,a,e))}return r}class Eg extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=yg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),fe())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,((n,r)=>uf(n,r)))&&ts(this.baseMutations,e.baseMutations,((n,r)=>uf(n,r)))}}class Rl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return LI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Rl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,pe;function YI(t){switch(t){case D.OK:return ee(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function Tg(t){if(t===void 0)return yn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Le.OK:return D.OK;case Le.CANCELLED:return D.CANCELLED;case Le.UNKNOWN:return D.UNKNOWN;case Le.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Le.INTERNAL:return D.INTERNAL;case Le.UNAVAILABLE:return D.UNAVAILABLE;case Le.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Le.NOT_FOUND:return D.NOT_FOUND;case Le.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Le.ABORTED:return D.ABORTED;case Le.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Le.DATA_LOSS:return D.DATA_LOSS;default:return ee(39323,{code:t})}}(pe=Le||(Le={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new jn([4294967295,4294967295],0);function df(t){const e=qp().encode(t),n=new xp;return n.update(e),new Uint8Array(n.digest())}function pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jn([n,r],0),new jn([s,i],0)]}class Cl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Us(`Invalid padding: ${n}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Us(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=jn.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(jn.fromNumber(r)));return s.compare(ZI)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=df(e),[r,s]=pf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Cl(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const n=df(e),[r,s]=pf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(se.min(),s,new Oe(ue),vn(),fe())}}class bi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bi(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Ig{constructor(e,n){this.targetId=e,this.De=n}}class wg{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gf{constructor(){this.ve=0,this.Ce=mf(),this.Fe=Ze.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),n=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new bi(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=mf()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ew{constructor(e){this.We=e,this.Ge=new Map,this.ze=vn(),this.je=no(),this.Je=no(),this.He=new Oe(ue)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Nc(i))if(r===0){const a=new X(i.path);this.Xe(n,a,at.newNoDocument(a,se.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Gn(r).toUint8Array()}catch(l){if(l instanceof Gp)return zn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Cl(a,s,i)}catch(l){return zn(l instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Nc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,at.newNoDocument(l,e))}i.Ne&&(n.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new ya(e,n,this.He,this.ze,r);return this.ze=vn(),this.je=no(),this.Je=no(),this.He=new Oe(ue),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new gf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new He(ue),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new He(ue),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new gf),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function no(){return new Oe(X.comparator)}function mf(){return new Oe(X.comparator)}const tw={asc:"ASCENDING",desc:"DESCENDING"},nw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rw={and:"AND",or:"OR"};class sw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||ha(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ag(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iw(t,e){return Uo(t,e.toTimestamp())}function Ht(t){return Ie(!!t,49232),se.fromTimestamp((function(n){const r=Kn(n);return new Ve(r.seconds,r.nanos)})(t))}function Pl(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=(function(s){return new Pe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function bg(t){const e=Pe.fromString(t);return Ie(Vg(e),10190,{key:e.toString()}),e}function Fc(t,e){return Pl(t.databaseId,e.path)}function sc(t,e){const n=bg(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Rg(n))}function Sg(t,e){return Pl(t.databaseId,e)}function ow(t){const e=bg(t);return e.length===4?Pe.emptyPath():Rg(e)}function Uc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rg(t){return Ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function _f(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function aw(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),Ze.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ze.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?D.UNKNOWN:Tg(h.code);return new Q(d,h.message||"")})(a);n=new wg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sc(t,r.document.name),i=Ht(r.document.updateTime),a=r.document.createTime?Ht(r.document.createTime):se.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=at.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new go(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sc(t,r.document),i=r.readTime?Ht(r.readTime):se.min(),a=at.newNoDocument(s,i),c=r.removedTargetIds||[];n=new go([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sc(t,r.document),i=r.removedTargetIds||[];n=new go([],i,s,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new XI(s,i),c=r.targetId;n=new Ig(c,a)}}return n}function cw(t,e){let n;if(e instanceof Ai)n={update:_f(t,e.key,e.value)};else if(e instanceof Eg)n={delete:Fc(t,e.key)};else if(e instanceof Pr)n={update:_f(t,e.key,e.data),updateMask:_w(e.fieldMask)};else{if(!(e instanceof GI))return ee(16599,{Rt:e.type});n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Lo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof di)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:iw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(t,e.precondition)),n}function lw(t,e){return t&&t.length>0?(Ie(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?Ht(s.updateTime):Ht(i);return a.isEqual(se.min())&&(a=Ht(i)),new zI(a,s.transformResults||[])})(n,e)))):[]}function uw(t,e){return{documents:[Sg(t,e.path)]}}function hw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sg(t,s);const i=(function(h){if(h.length!==0)return Pg(Jt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(y){return{field:jr(y.field),direction:pw(y.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Mc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:s}}function fw(t){let e=ow(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(g){const y=Cg(g);return y instanceof Jt&&sg(y)?y.getFilters():[y]})(n.where));let a=[];n.orderBy&&(a=(function(g){return g.map((y=>(function(V){return new Mo($r(V.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(y)))})(n.orderBy));let c=null;n.limit&&(c=(function(g){let y;return y=typeof g=="object"?g.value:g,ha(y)?null:y})(n.limit));let l=null;n.startAt&&(l=(function(g){const y=!!g.before,b=g.values||[];return new xo(b,y)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const y=!g.before,b=g.values||[];return new xo(b,y)})(n.endAt)),kI(e,s,a,i,c,"F",l,h)}function dw(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$r(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$r(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$r(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$r(n.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(t):t.fieldFilter!==void 0?(function(n){return qe.create($r(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Jt.create(n.compositeFilter.filters.map((r=>Cg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(n.compositeFilter.op))})(t):ee(30097,{filter:t})}function pw(t){return tw[t]}function gw(t){return nw[t]}function mw(t){return rw[t]}function jr(t){return{fieldPath:t.canonicalString()}}function $r(t){return Ye.fromServerFormat(t.fieldPath)}function Pg(t){return t instanceof qe?(function(n){if(n.op==="=="){if(rf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NAN"}};if(nf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NAN"}};if(nf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(n.field),op:gw(n.op),value:n.value}}})(t):t instanceof Jt?(function(n){const r=n.getFilters().map((s=>Pg(s)));return r.length===1?r[0]:{compositeFilter:{op:mw(n.op),filters:r}}})(t):ee(54877,{filter:t})}function _w(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Vg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,s,i=se.min(),a=se.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.gt=e}}function vw(t){const e=fw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.Dn=new Tw}addToCollectionParentIndex(e,n){return this.Dn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Wn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class Tw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kg=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(kg,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ss(0)}static ur(){return new ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="LruGarbageCollector",Iw=1048576;function Ef([t,e],[n,r]){const s=ue(t,n);return s===0?ue(e,r):s}class ww{constructor(e){this.Tr=e,this.buffer=new He(Ef),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ef(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Aw{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(vf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fs(n)?W(vf,"Ignoring IndexedDB error during garbage collection: ",n):await hs(n)}await this.Rr(3e5)}))}}class bw{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return k.resolve(ua.ue);const r=new ww(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(yf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yf):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(e,r,n)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),Ur()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Sw(t,e){return new bw(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.changes=new Cr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Zs(r.mutation,s,Vt.empty(),Ve.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=fe()){const s=fr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=Fs();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,fe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,r,s){let i=vn();const a=Ys(),c=(function(){return Ys()})();return n.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Pr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Zs(d.mutation,h,d.mutation.getFieldMask(),Ve.now())):a.set(h.key,Vt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>{var g;return c.set(h,new Cw(d,(g=a.get(h))!==null&&g!==void 0?g:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=Ys();let s=new Oe(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Vt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const g=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,g=fg();d.forEach((y=>{if(!i.has(y)){const b=yg(n.get(y),r.get(y));b!==null&&g.set(y,b),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(fr());let c=ci,l=i;return a.next((h=>k.forEach(h,((d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{l=l.insert(d,y)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:hg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next((r=>{let s=Fs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Fs();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(l=>{const h=(function(g,y){return new da(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((g,y)=>{a=a.insert(g,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,at.newInvalidDocument(d)))}));let c=Fs();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&Zs(d.mutation,h,Vt.empty(),Ve.now()),ga(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return k.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}})(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:vw(s.bundledQuery),readTime:Ht(s.readTime)}})(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.overlays=new Oe(X.comparator),this.kr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return k.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=fr(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=fr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return k.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new JI(n,r));let i=this.kr.get(n);i===void 0&&(i=fe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.qr=new He(ze.Qr),this.$r=new He(ze.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new ze(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new X(new Pe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new X(new Pe([])),r=new ze(n,e),s=new ze(n,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new ze(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return X.comparator(e.key,n.key)||ue(e.Hr,n.Hr)}static Ur(e,n){return ue(e.Hr,n.Hr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new He(ze.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new QI(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,n){return k.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?El:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(ue);return n.forEach((s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new ze(new X(i),0);let c=new He(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),k.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ie(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(n.mutations,(s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new ze(n,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.ni=e,this.docs=(function(){return new Oe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||lI(cI(d),r)<=0||(s.has(d.key)||ga(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ri(e,n){return k.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new xw(this)}getSize(e){return k.resolve(this.size)}}class xw extends Rw{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.persistence=e,this.ii=new Cr((n=>wl(n)),Al),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new Vl,this.targetCount=0,this._i=ss.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),k.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.hr(n),k.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.ai={},this.overlays={},this.ui=new ua(0),this.ci=!1,this.ci=!0,this.li=new Dw,this.referenceDelegate=e(this),this.hi=new Mw(this),this.indexManager=new Ew,this.remoteDocumentCache=(function(s){return new Nw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new yw(n),this.Ti=new Vw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Ow(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new Lw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class Lw extends hI{constructor(e){super(),this.currentSequenceNumber=e}}class kl{constructor(e){this.persistence=e,this.Ai=new Vl,this.Ri=null}static Vi(e){return new kl(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),k.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return k.or([()=>k.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Bo{constructor(e,n){this.persistence=e,this.gi=new Cr((r=>pI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Sw(this,n)}static Vi(e,n){return new Bo(e,n)}Ii(){}di(e){return k.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,n).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),k.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),k.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ho(e.data.value)),n}Sr(e,n,r){return k.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Dl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return OE()?8:fI(ut())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Fw;return this.ws(e,n,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,a,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ur()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Br(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Ur()<=he.DEBUG&&W("QueryEngine","Query:",Br(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ur()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Br(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):k.resolve())}ps(e,n){if(cf(n))return k.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=xc(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(n,c);return this.Ds(n,h,a,l.readTime)?this.ps(e,xc(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ys(e,n,r,s){return cf(n)||s.isEqual(se.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(n,i);return this.Ds(n,a,r,s)?k.resolve(null):(Ur()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Br(n)),this.vs(e,a,n,aI(s,ci)).next((c=>c)))}))}bs(e,n){let r=new He(lg(e));return n.forEach(((s,i)=>{ga(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ur()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Br(n)),this.gs.getDocumentsMatchingQuery(e,n,Wn.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="LocalStore",Bw=3e8;class jw{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Oe(ue),this.Ms=new Cr((i=>wl(i)),Al),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function $w(t,e,n,r){return new jw(t,e,n,r)}async function Og(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function qw(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const g=h.batch,y=g.keys();let b=k.resolve();return y.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((M=>{const L=h.docVersions.get(V);Ie(L!==null,48541),M.version.compareTo(L)<0&&(g.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),d.addEntry(M)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,g)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Ng(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function Hw(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((d,g)=>{const y=s.get(g);if(!y)return;c.push(n.hi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,g))));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Ze.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),(function(M,L,z){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Bw?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(y,b,d)&&c.push(n.hi.updateTargetData(i,b))}));let l=vn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(zw(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((g=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function zw(t,e,n){let r=fe(),s=fe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=vn();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Ol,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function Ww(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=El),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Kw(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):n.hi.allocateTargetId(r).next((a=>(s=new Mn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Bc(t,e,n){const r=ie(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!fs(a))throw a;W(Ol,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Tf(t,e,n){const r=ie(t);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const g=ie(l),y=g.Ms.get(d);return y!==void 0?k.resolve(g.Fs.get(y)):g.hi.getTargetData(h,d)})(r,a,qt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:fe()))).next((c=>(Gw(r,NI(e),c),{documents:c,qs:i})))))}function Gw(t,e,n){let r=t.xs.get(e)||se.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class If{constructor(){this.activeTargetIds=BI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qw{constructor(){this.Fo=new If,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new If,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="ConnectivityMonitor";class Af{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(wf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(wf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro=null;function jc(){return ro===null?ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():ro++,"0x"+ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="RestConnection",Xw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const a=jc(),c=this.Go(e,n.toUriEncodedString());W(ic,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=cs(h);return this.jo(e,c,l,r,d).then((g=>(W(ic,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw zn(ic,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Jo(e,n,r,s,i,a){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+us})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=Xw[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class eA extends Yw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const a=jc();return new Promise(((c,l)=>{const h=new Mp;h.setWithCredentials(!0),h.listenOnce(Lp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case uo.NO_ERROR:const g=h.getResponseJson();W(rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case uo.TIMEOUT:W(rt,`RPC '${e}' ${a} timed out`),l(new Q(D.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const y=h.getStatus();if(W(rt,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const M=(function(z){const K=z.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(K)>=0?K:D.UNKNOWN})(V.status);l(new Q(M,V.message))}else l(new Q(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(D.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(rt,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(rt,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=jc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bp(),c=Up(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(rt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const g=a.createWebChannel(d,l);this.T_(g);let y=!1,b=!1;const V=new Zw({Ho:L=>{b?W(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(W(rt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),W(rt,`RPC '${e}' stream ${s} sending:`,L),g.send(L))},Yo:()=>g.close()}),M=(L,z,K)=>{L.listen(z,(G=>{try{K(G)}catch(H){setTimeout((()=>{throw H}),0)}}))};return M(g,Ls.EventType.OPEN,(()=>{b||(W(rt,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),M(g,Ls.EventType.CLOSE,(()=>{b||(b=!0,W(rt,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(g))})),M(g,Ls.EventType.ERROR,(L=>{b||(b=!0,zn(rt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),V.__(new Q(D.UNAVAILABLE,"The operation could not be completed")))})),M(g,Ls.EventType.MESSAGE,(L=>{var z;if(!b){const K=L.data[0];Ie(!!K,16349);const G=K,H=(G==null?void 0:G.error)||((z=G[0])===null||z===void 0?void 0:z.error);if(H){W(rt,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let ve=(function(_){const T=Le[_];if(T!==void 0)return Tg(T)})(oe),I=H.message;ve===void 0&&(ve=D.INTERNAL,I="Unknown error status: "+oe+" with message "+H.message),b=!0,V.__(new Q(ve,I)),g.close()}else W(rt,`RPC '${e}' stream ${s} received:`,K),V.a_(K)}})),M(c,Fp.STAT_EVENT,(L=>{L.stat===Pc.PROXY?W(rt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Pc.NOPROXY&&W(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new sw(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="PersistentStream";class Mg{constructor(e,n,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new xg(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new Q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(bf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(W(bf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tA extends Mg{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=aw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Ht(a.readTime):se.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Uc(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=Nc(l)?{documents:uw(i,l)}:{query:hw(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ag(i,a.resumeToken);const h=Mc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Uo(i,a.snapshotVersion.toTimestamp());const h=Mc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=dw(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Uc(this.serializer),n.removeTarget=e,this.k_(n)}}class nA extends Mg{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=lw(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Uc(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>cw(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{}class sA extends rA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new Q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Lc(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(D.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Lc(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class iA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(yn(n),this._a=!1):W("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="RemoteStore";class oA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Vr(this)&&(W(wr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Si(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Ea(h)})(this))}))})),this.Aa=new iA(r,s)}}async function Ea(t){if(Vr(t))for(const e of t.da)await e(!0)}async function Si(t){for(const e of t.da)await e(!1)}function Lg(t,e){const n=ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ll(n)?Ml(n):ds(n).x_()&&xl(n,e))}function Nl(t,e){const n=ie(t),r=ds(n);n.Ta.delete(e),r.x_()&&Fg(n,e),n.Ta.size===0&&(r.x_()?r.B_():Vr(n)&&n.Aa.set("Unknown"))}function xl(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).H_(e)}function Fg(t,e){t.Ra.$e(e),ds(t).Y_(e)}function Ml(t){t.Ra=new ew({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.Aa.aa()}function Ll(t){return Vr(t)&&!ds(t).M_()&&t.Ta.size>0}function Vr(t){return ie(t).Ia.size===0}function Ug(t){t.Ra=void 0}async function aA(t){t.Aa.set("Online")}async function cA(t){t.Ta.forEach(((e,n)=>{xl(t,e)}))}async function lA(t,e){Ug(t),Ll(t)?(t.Aa.la(e),Ml(t)):t.Aa.set("Unknown")}async function uA(t,e,n){if(t.Aa.set("Online"),e instanceof wg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){W(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jo(t,r)}else if(e instanceof go?t.Ra.Ye(e):e instanceof Ig?t.Ra.it(e):t.Ra.et(e),!n.isEqual(se.min()))try{const r=await Ng(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(Ze.EMPTY_BYTE_STRING,d.snapshotVersion)),Fg(i,l);const g=new Mn(d.target,l,h,d.sequenceNumber);xl(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){W(wr,"Failed to raise snapshot:",r),await jo(t,r)}}async function jo(t,e,n){if(!fs(e))throw e;t.Ia.add(1),await Si(t),t.Aa.set("Offline"),n||(n=()=>Ng(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{W(wr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ea(t)}))}function Bg(t,e){return e().catch((n=>jo(t,n,e)))}async function Ta(t){const e=ie(t),n=Jn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:El;for(;hA(e);)try{const s=await Ww(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,fA(e,s)}catch(s){await jo(e,s)}jg(e)&&$g(e)}function hA(t){return Vr(t)&&t.Pa.length<10}function fA(t,e){t.Pa.push(e);const n=Jn(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function jg(t){return Vr(t)&&!Jn(t).M_()&&t.Pa.length>0}function $g(t){Jn(t).start()}async function dA(t){Jn(t).na()}async function pA(t){const e=Jn(t);for(const n of t.Pa)e.X_(n.mutations)}async function gA(t,e,n){const r=t.Pa.shift(),s=Rl.from(r,e,n);await Bg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ta(t)}async function mA(t,e){e&&Jn(t).Z_&&await(async function(r,s){if((function(a){return YI(a)&&a!==D.ABORTED})(s.code)){const i=r.Pa.shift();Jn(r).N_(),await Bg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ta(r)}})(t,e),jg(t)&&$g(t)}async function Sf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W(wr,"RemoteStore received new credentials");const r=Vr(n);n.Ia.add(3),await Si(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ea(n)}async function _A(t,e){const n=ie(t);e?(n.Ia.delete(2),await Ea(n)):e||(n.Ia.add(2),await Si(n),n.Aa.set("Unknown"))}function ds(t){return t.Va||(t.Va=(function(n,r,s){const i=ie(n);return i.ia(),new tA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:aA.bind(null,t),e_:cA.bind(null,t),n_:lA.bind(null,t),J_:uA.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Ll(t)?Ml(t):t.Aa.set("Unknown")):(await t.Va.stop(),Ug(t))}))),t.Va}function Jn(t){return t.ma||(t.ma=(function(n,r,s){const i=ie(n);return i.ia(),new nA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:dA.bind(null,t),n_:mA.bind(null,t),ea:pA.bind(null,t),ta:gA.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Ta(t)):(await t.ma.stop(),t.Pa.length>0&&(W(wr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Fl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ul(t,e){if(yn("AsyncQueue",`${e}: ${t}`),fs(t))return new Q(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{static emptySet(e){return new Gr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.fa=new Oe(X.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class is{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new is(e,n,Gr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vA{constructor(){this.queries=Cf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=Cf(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new Q(D.ABORTED,"Firestore shutting down"))}}function Cf(){return new Cr((t=>cg(t)),pa)}async function qg(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new yA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Ul(a,`Initialization of query '${Br(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Bl(n)}async function Hg(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EA(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Bl(n)}function TA(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Bl(t){t.Da.forEach((e=>{e.next()}))}var $c,Pf;(Pf=$c||($c={})).Fa="default",Pf.Cache="cache";class zg{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==$c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.key=e}}class Kg{constructor(e){this.key=e}}class IA{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=lg(e),this.eu=new Gr(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Rf,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const y=s.get(d),b=ga(this.query,g)?g:null,V=!!y&&this.mutatedKeys.has(y.key),M=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let L=!1;y&&b?y.data.isEqual(b.data)?V!==M&&(r.track({type:3,doc:b}),L=!0):this.iu(y,b)||(r.track({type:2,doc:b}),L=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!y&&b?(r.track({type:0,doc:b}),L=!0):y&&!b&&(r.track({type:1,doc:y}),L=!0,(l||h)&&(c=!0)),L&&(b?(a=a.add(b),i=M?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,g)=>(function(b,V){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:L})}};return M(b)-M(V)})(d.type,g.type)||this.Xa(d.doc,g.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new is(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Rf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Kg(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Wg(r))})),n}uu(e){this.Ha=e.qs,this.Za=fe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return is.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const jl="SyncEngine";class wA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AA{constructor(e){this.key=e,this.lu=!1}}class bA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Cr((c=>cg(c)),pa),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(X.comparator),this.Eu=new Map,this.Au=new Vl,this.Ru={},this.Vu=new Map,this.mu=ss.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function SA(t,e,n=!0){const r=Zg(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Gg(r,e,n,!0),s}async function RA(t,e){const n=Zg(t);await Gg(n,e,!0,!1)}async function Gg(t,e,n,r){const s=await Kw(t.localStore,qt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await CA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Lg(t.remoteStore,s),c}async function CA(t,e,n,r,s){t.gu=(g,y,b)=>(async function(M,L,z,K){let G=L.view.nu(z);G.Ds&&(G=await Tf(M.localStore,L.query,!1).then((({documents:I})=>L.view.nu(I,G))));const H=K&&K.targetChanges.get(L.targetId),oe=K&&K.targetMismatches.get(L.targetId)!=null,ve=L.view.applyChanges(G,M.isPrimaryClient,H,oe);return kf(M,L.targetId,ve._u),ve.snapshot})(t,g,y,b);const i=await Tf(t.localStore,e,!0),a=new IA(e,i.qs),c=a.nu(i.documents),l=bi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);kf(t,n,h._u);const d=new wA(e,n,a);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function PA(t,e,n){const r=ie(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!pa(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nl(r.remoteStore,s.targetId),qc(r,s.targetId)})).catch(hs)):(qc(r,s.targetId),await Bc(r.localStore,s.targetId,!0))}async function VA(t,e){const n=ie(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nl(n.remoteStore,r.targetId))}async function kA(t,e,n){const r=FA(t);try{const s=await(function(a,c){const l=ie(a),h=Ve.now(),d=c.reduce(((b,V)=>b.add(V.key)),fe());let g,y;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=vn(),M=fe();return l.Os.getEntries(b,d).next((L=>{V=L,V.forEach(((z,K)=>{K.isValidDocument()||(M=M.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((L=>{g=L;const z=[];for(const K of c){const G=KI(K,g.get(K.key).overlayedDocument);G!=null&&z.push(new Pr(K.key,G,tg(G.value.mapValue),fn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,z,c)})).next((L=>{y=L;const z=L.applyToLocalDocumentSet(g,M);return l.documentOverlayCache.saveOverlays(b,L.batchId,z)}))})).then((()=>({batchId:y.batchId,changes:hg(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Oe(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,n),await Ri(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=Ul(s,"Failed to persist write");n.reject(i)}}async function Qg(t,e){const n=ie(t);try{const r=await Hw(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Eu.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ie(a.lu,14607):s.removedDocuments.size>0&&(Ie(a.lu,42227),a.lu=!1))})),await Ri(n,r,e)}catch(r){await hs(r)}}function Vf(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,g)=>{for(const y of g.wa)y.va(c)&&(h=!0)})),h&&Bl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DA(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Oe(X.comparator);a=a.insert(i,at.newNoDocument(i,se.min()));const c=fe().add(i),l=new ya(se.min(),new Map,new Oe(ue),a,c);await Qg(r,l),r.du=r.du.remove(i),r.Eu.delete(e),$l(r)}else await Bc(r.localStore,e,!1).then((()=>qc(r,e,n))).catch(hs)}async function OA(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await qw(n.localStore,e);Xg(n,r,null),Jg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ri(n,s)}catch(s){await hs(s)}}async function NA(t,e,n){const r=ie(t);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((g=>(Ie(g!==null,37113),d=g.keys(),l.mutationQueue.removeMutationBatch(h,g)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);Xg(r,e,n),Jg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ri(r,s)}catch(s){await hs(s)}}function Jg(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Xg(t,e,n){const r=ie(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Yg(t,r)}))}function Yg(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Nl(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),$l(t))}function kf(t,e,n){for(const r of n)r instanceof Wg?(t.Au.addReference(r.key,e),xA(t,r)):r instanceof Kg?(W(jl,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Yg(t,r.key)):ee(19791,{yu:r})}function xA(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(W(jl,"New document in limbo: "+n),t.Iu.add(r),$l(t))}function $l(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Pe.fromString(e)),r=t.mu.next();t.Eu.set(r,new AA(n)),t.du=t.du.insert(n,r),Lg(t.remoteStore,new Mn(qt(bl(n.path)),r,"TargetPurposeLimboResolution",ua.ue))}}async function Ri(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,n).then((h=>{var d;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Dl.Es(l.targetId,h);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>k.forEach(h,(y=>k.forEach(y.Is,(b=>d.persistence.referenceDelegate.addReference(g,y.targetId,b))).next((()=>k.forEach(y.ds,(b=>d.persistence.referenceDelegate.removeReference(g,y.targetId,b)))))))))}catch(g){if(!fs(g))throw g;W(Ol,"Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const b=d.Fs.get(y),V=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(y,M)}}})(r.localStore,i))}async function MA(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W(jl,"User change. New user:",e.toKey());const r=await Og(n.localStore,e);n.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new Q(D.CANCELLED,a))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ri(n,r.Bs)}}function LA(t,e){const n=ie(t),r=n.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=n.Tu.get(e);if(!i)return s;for(const a of i){const c=n.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Zg(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DA.bind(null,e),e.hu.J_=EA.bind(null,e.eventManager),e.hu.pu=TA.bind(null,e.eventManager),e}function FA(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NA.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return $w(this.persistence,new Uw,e.initialUser,this.serializer)}Du(e){return new Dg(kl.Vi,this.serializer)}bu(e){return new Qw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class UA extends $o{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ie(this.persistence.referenceDelegate instanceof Bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Aw(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new Dg((r=>Bo.Vi(r,n)),this.serializer)}}class Hc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MA.bind(null,this.syncEngine),await _A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vA})()}createDatastore(e){const n=va(e.databaseInfo.databaseId),r=(function(i){return new eA(i)})(e.databaseInfo);return(function(i,a,c,l){return new sA(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,c){return new oA(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Vf(this.syncEngine,n,0)),(function(){return Af.C()?new Af:new Jw})())}createSyncEngine(e,n){return(function(s,i,a,c,l,h,d){const g=new bA(s,i,a,c,l,h);return d&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ie(s);W(wr,"RemoteStore shutting down."),i.Ia.add(5),await Si(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hc.provider={build:()=>new Hc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="FirestoreClient";class BA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=yl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(Xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(Xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ul(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ac(t,e){t.asyncQueue.verifyOperationInProgress(),W(Xn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Og(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{zn("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{zn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Df(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jA(t);W(Xn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Sf(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Sf(e.remoteStore,s))),t._onlineComponents=e}async function jA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Xn,"Using user provided OfflineComponentProvider");try{await ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;zn("Error using user provided cache. Falling back to memory cache: "+n),await ac(t,new $o)}}else W(Xn,"Using default OfflineComponentProvider"),await ac(t,new UA(void 0));return t._offlineComponents}async function tm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Xn,"Using user provided OnlineComponentProvider"),await Df(t,t._uninitializedComponentsProvider._online)):(W(Xn,"Using default OnlineComponentProvider"),await Df(t,new Hc))),t._onlineComponents}function $A(t){return tm(t).then((e=>e.syncEngine))}async function zc(t){const e=await tm(t),n=e.eventManager;return n.onListen=SA.bind(null,e.syncEngine),n.onUnlisten=PA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VA.bind(null,e.syncEngine),n}function qA(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new em({next:y=>{d.Ou(),a.enqueueAndForget((()=>Hg(i,g))),y.fromCache&&l.source==="server"?h.reject(new Q(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new zg(c,d,{includeMetadataChanges:!0,ka:!0});return qg(i,g)})(await zc(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="firestore.googleapis.com",Nf=!0;class xf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rm,this.ssl=Nf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Nf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Iw)throw new Q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new XT;switch(r.type){case"firstParty":return new tI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Of.get(n);r&&(W("ComponentProvider","Removing Datastore"),Of.delete(n),r.terminate())})(this),Promise.resolve()}}function HA(t,e,n,r={}){var s;t=mr(t,Ia);const i=cs(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(Rp(`https://${l}`),Cp("Firestore",!0)),a.host!==rm&&a.host!==l&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Er(h,c)&&(t._setSettings(h),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=it.MOCK_USER;else{d=AE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new Q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new it(y)}t._authCredentials=new YT(new $p(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wi(n,We._jsonSchema))return new We(e,r||null,new X(Pe.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Ue("string",We._jsonSchemaVersion),referencePath:Ue("string")};class qn extends Ci{constructor(e,n,r){super(e,n,bl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new X(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function Os(t,e,...n){if(t=_t(t),Hp("collection","path",e),t instanceof Ia){const r=Pe.fromString(e,...n);return Gh(r),new qn(t,null,r)}{if(!(t instanceof We||t instanceof qn))throw new Q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Gh(r),new qn(t.firestore,null,r)}}function zA(t,e,...n){if(t=_t(t),arguments.length===1&&(e=yl.newId()),Hp("doc","path",e),t instanceof Ia){const r=Pe.fromString(e,...n);return Kh(r),new We(t,null,new X(r))}{if(!(t instanceof We||t instanceof qn))throw new Q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Kh(r),new We(t.firestore,t instanceof qn?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="AsyncQueue";class Lf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new xg(this,"async_queue_retry"),this.oc=()=>{const r=oc();r&&W(Mf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new $n;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!fs(e))throw e;W(Mf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,yn("INTERNAL UNHANDLED ERROR: ",Ff(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Fl.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ee(47125,{hc:Ff(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ff(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class pi extends Ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Lf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lf(e),this._firestoreClient=void 0,await e}}}function WA(t,e){const n=typeof t=="object"?t:Dp(),r=typeof t=="string"?t:Oo,s=ml(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=IE("firestore");i&&HA(s,...i)}return s}function ql(t){if(t._terminated)throw new Q(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||KA(t),t._firestoreClient}function KA(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,h,d){return new _I(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St(Ze.fromBase64String(e))}catch(n){throw new Q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new St(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wi(e,St._jsonSchema))return St.fromBase64String(e.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:Ue("string",St._jsonSchemaVersion),bytes:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(e){if(wi(e,zt._jsonSchema))return new zt(e.latitude,e.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:Ue("string",zt._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wi(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Wt(e.vectorValues);throw new Q(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:Ue("string",Wt._jsonSchemaVersion),vectorValues:Ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=/^__.*__$/;class QA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ai(e,this.data,n,this.fieldTransforms)}}function im(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:t})}}class zl{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new zl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return qo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(im(this.Ec)&&GA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class JA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||va(e)}Dc(e,n,r,s=!1){return new zl({Ec:e,methodName:n,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XA(t){const e=t._freezeSettings(),n=va(t._databaseId);return new JA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YA(t,e,n,r,s,i={}){const a=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);lm("Data must be an object, but it was:",a,r);const c=am(r,a);let l,h;if(i.merge)l=new Vt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const y=ZA(e,g,n);if(!a.contains(y))throw new Q(D.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);tb(d,y)||d.push(y)}l=new Vt(d),h=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,h=a.fieldTransforms;return new QA(new bt(c),l,h)}function om(t,e){if(cm(t=_t(t)))return lm("Unsupported field value:",e,t),am(t,e);if(t instanceof sm)return(function(r,s){if(!im(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=om(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Ag(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wt)return(function(a,c){return{mapValue:{fields:{[Zp]:{stringValue:eg},[No]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Sl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${vl(r)}`)})(t,e)}function am(t,e){const n={};return Kp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,((r,s)=>{const i=om(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function cm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof zt||t instanceof St||t instanceof We||t instanceof sm||t instanceof Wt)}function lm(t,e,n){if(!cm(n)||!zp(n)){const r=vl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ZA(t,e,n){if((e=_t(e))instanceof Hl)return e._internalPath;if(typeof e=="string")return um(t,e);throw qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const eb=new RegExp("[~\\*/\\[\\]]");function um(t,e,n){if(e.search(eb)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hl(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Q(D.INVALID_ARGUMENT,c+t+l)}function tb(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nb extends hm{data(){return super.data()}}function fm(t,e){return typeof e=="string"?um(t,e):e instanceof Hl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rb{convertValue(e,n="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[No].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Me(a.doubleValue)));return new Wt(i)}convertGeoPoint(e){return new zt(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ie(Vg(r),9688,{name:e});const s=new ui(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _r extends hm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=_r._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}_r._jsonSchemaVersion="firestore/documentSnapshot/1.0",_r._jsonSchema={type:Ue("string",_r._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class mo extends _r{data(e={}){return super.data(e)}}class yr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new mo(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:ib(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ib(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}yr._jsonSchemaVersion="firestore/querySnapshot/1.0",yr._jsonSchema={type:Ue("string",yr._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Wl extends rb{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function cc(t){t=mr(t,Ci);const e=mr(t.firestore,pi),n=ql(e),r=new Wl(e);return dm(t._query),qA(n,t._query).then((s=>new yr(e,r,t,s)))}function ob(t,e){const n=mr(t.firestore,pi),r=zA(t),s=sb(t.converter,e);return cb(n,[YA(XA(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then((()=>r))}function ab(t,...e){var n,r,s;t=_t(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Uf(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Uf(e[a])){const g=e[a];e[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,h,d;if(t instanceof We)h=mr(t.firestore,pi),d=bl(t._key.path),l={next:g=>{e[a]&&e[a](lb(h,t,g))},error:e[a+1],complete:e[a+2]};else{const g=mr(t,Ci);h=mr(g.firestore,pi),d=g._query;const y=new Wl(h);l={next:b=>{e[a]&&e[a](new yr(h,y,g,b))},error:e[a+1],complete:e[a+2]},dm(t._query)}return(function(y,b,V,M){const L=new em(M),z=new zg(b,L,V);return y.asyncQueue.enqueueAndForget((async()=>qg(await zc(y),z))),()=>{L.Ou(),y.asyncQueue.enqueueAndForget((async()=>Hg(await zc(y),z)))}})(ql(h),d,c,l)}function cb(t,e){return(function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget((async()=>kA(await $A(r),s,i))),i.promise})(ql(t),e)}function lb(t,e,n){const r=n.docs.get(e._key),s=new Wl(t);return new _r(t,s,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){us=s})(ls),es(new Tr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new pi(new ZT(r.getProvider("auth-internal")),new nI(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Bn($h,qh,e),Bn($h,qh,"esm2017")})();function Kl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function pm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ub=pm,gm=new Ti("auth","Firebase",pm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new pl("@firebase/auth");function hb(t,...e){Ho.logLevel<=he.WARN&&Ho.warn(`Auth (${ls}): ${t}`,...e)}function _o(t,...e){Ho.logLevel<=he.ERROR&&Ho.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Ql(t,...e)}function Ot(t,...e){return Ql(t,...e)}function Gl(t,e,n){const r=Object.assign(Object.assign({},ub()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return Gl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),Gl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ql(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gm.create(t,...e)}function ne(t,e,...n){if(!t)throw Ql(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function En(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function db(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(db()||VE()||"connection"in navigator)?navigator.onLine:!0}function gb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=RE()||kE()}get(){return pb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yb=new Pi(3e4,6e4);function Xl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,r,s={}){return _m(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ii(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return PE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&cs(t.emulatorConfig.host)&&(h.credentials="include"),mm.fetch()(await ym(t,t.config.apiHost,n,c),h)})}async function _m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mb),e);try{const s=new Eb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw so(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw so(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw so(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Gl(t,d,h);Xt(t,d)}}catch(s){if(s instanceof In)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function vb(t,e,n,r,s={}){const i=await ps(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ym(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Jl(t.config,s):`${t.config.apiScheme}://${s}`;return _b.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Eb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),yb.get())})}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ot(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function zo(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ib(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=Yl(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(lc(s.auth_time)),issuedAtTime:ei(lc(s.iat)),expirationTime:ei(lc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lc(t){return Number(t)*1e3}function Yl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=wp(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jf(t){const e=Yl(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gi(t,zo(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vm(i.providerUserInfo):[],c=Sb(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Kc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function bb(t){const e=_t(t);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vm(t){return t.map(e=>{var{providerId:n}=e,r=Kl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e){const n=await _m(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await ym(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&cs(t.emulatorConfig.host)&&(l.credentials="include"),mm.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cb(t,e){return ps(t,"POST","/v2/accounts:revokeToken",Xl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=jf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Rb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Qr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ib(this,e)}reload(){return bb(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await gi(this,Tb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,d;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,K=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:H,isAnonymous:oe,providerData:ve,stsTokenManager:I}=n;ne(G&&I,e,"internal-error");const m=Qr.fromJSON(this.name,I);ne(typeof G=="string",e,"internal-error"),Rn(g,e.name),Rn(y,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),Rn(b,e.name),Rn(V,e.name),Rn(M,e.name),Rn(L,e.name),Rn(z,e.name),Rn(K,e.name);const _=new kt({uid:G,auth:e,email:y,emailVerified:H,displayName:g,isAnonymous:oe,photoURL:V,phoneNumber:b,tenantId:M,stsTokenManager:m,createdAt:z,lastLoginAt:K});return ve&&Array.isArray(ve)&&(_.providerData=ve.map(T=>Object.assign({},T))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?vm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Qr;c.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;function un(t){En(t instanceof Function,"Expected a class definition");let e=$f.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$f.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Em.type="NONE";const qf=Em;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zo(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(un(qf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||un(qf);const a=yo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let g;if(typeof d=="string"){const y=await zo(e,{idToken:d}).catch(()=>{});if(!y)break;g=await kt._fromGetAccountInfoResponse(e,y,d)}else g=kt._fromJSON(e,d);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sm(e))return"Blackberry";if(Rm(e))return"Webos";if(Im(e))return"Safari";if((e.includes("chrome/")||wm(e))&&!e.includes("edge/"))return"Chrome";if(bm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tm(t=ut()){return/firefox\//i.test(t)}function Im(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wm(t=ut()){return/crios\//i.test(t)}function Am(t=ut()){return/iemobile/i.test(t)}function bm(t=ut()){return/android/i.test(t)}function Sm(t=ut()){return/blackberry/i.test(t)}function Rm(t=ut()){return/webos/i.test(t)}function Zl(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pb(t=ut()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vb(){return DE()&&document.documentMode===10}function Cm(t=ut()){return Zl(t)||bm(t)||Rm(t)||Sm(t)||/windows phone/i.test(t)||Am(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e=[]){let n;switch(t){case"Browser":n=Hf(ut());break;case"Worker":n=`${Hf(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e={}){return ps(t,"GET","/v2/passwordPolicy",Xl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=6;class Nb{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Ob,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zf(this),this.idTokenSubscription=new zf(this),this.beforeStateQueue=new kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zo(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(vr(this));const n=e?_t(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Db(this),n=new Nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wa(t){return _t(t)}class zf{constructor(e){this.auth=e,this.observer=null,this.addObserver=BE(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mb(t){eu=t}function Lb(t){return eu.loadJS(t)}function Fb(){return eu.gapiScript}function Ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e){const n=ml(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function jb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $b(t,e,n){const r=wa(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vm(e),{host:a,port:c}=qb(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Er(h,r.config.emulator)&&Er(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,cs(a)?(Rp(`${i}//${a}${l}`),Cp("Auth",!0)):Hb()}function Vm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qb(t){const e=Vm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Wf(a)}}}function Wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){return vb(t,"POST","/v1/accounts:signInWithIdp",Xl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="http://localhost";class Ar extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Kl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends tu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Vi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Vi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Vi{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=Kf(r);return new os({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kf(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends In{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ko(e,n,r,s)}}function Dm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,i,e,r):i})}async function Wb(t,e,n=!1){const r=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await gi(t,Dm(r,s,e,t),n);ne(i.idToken,r,"internal-error");const a=Yl(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(t.uid===c,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e,n=!1){if(Pt(t.app))return Promise.reject(vr(t));const r="signIn",s=await Dm(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Qb(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function Jb(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function Xb(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}function Yb(t){return _t(t).signOut()}const Go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=1e3,e0=10;class Nm extends Om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Vb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,e0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nm.type="LOCAL";const t0=Nm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends Om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xm.type="SESSION";const Mm=xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await n0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=nu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function s0(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function i0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a0(){return Lm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="firebaseLocalStorageDb",c0=1,Qo="firebaseLocalStorage",Um="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ba(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function l0(){const t=indexedDB.deleteDatabase(Fm);return new ki(t).toPromise()}function Gc(){const t=indexedDB.open(Fm,c0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qo,{keyPath:Um})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qo)?e(r):(r.close(),await l0(),e(await Gc()))})})}async function Gf(t,e,n){const r=ba(t,!0).put({[Um]:e,value:n});return new ki(r).toPromise()}async function u0(t,e){const n=ba(t,!1).get(e),r=await new ki(n).toPromise();return r===void 0?null:r.value}function Qf(t,e){const n=ba(t,!0).delete(e);return new ki(n).toPromise()}const h0=800,f0=3;class Bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>f0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(a0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await i0(),!this.activeServiceWorker)return;this.sender=new r0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await Gf(e,Go,"1"),await Qf(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>u0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ba(s,!1).getAll();return new ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bm.type="LOCAL";const d0=Bm;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e){return e?un(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p0(t){return Gb(t.auth,new ru(t),t.bypassAuthState)}function g0(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Kb(n,new ru(t),t.bypassAuthState)}async function m0(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Wb(n,new ru(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p0;case"linkViaPopup":case"linkViaRedirect":return m0;case"reauthViaPopup":case"reauthViaRedirect":return g0;default:Xt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new Pi(2e3,1e4);async function y0(t,e,n){if(Pt(t.app))return Promise.reject(Ot(t,"operation-not-supported-in-this-environment"));const r=wa(t);fb(t,e,tu);const s=jm(r,n);return new dr(r,"signInViaPopup",e,s).executeNotNull()}class dr extends $m{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_0.get())};e()}}dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="pendingRedirect",vo=new Map;class E0 extends $m{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await T0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function T0(t,e){const n=A0(e),r=w0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function I0(t,e){vo.set(t._key(),e)}function w0(t){return un(t._redirectPersistence)}function A0(t){return yo(v0,t.config.apiKey,t.name)}async function b0(t,e,n=!1){if(Pt(t.app))return Promise.reject(vr(t));const r=wa(t),s=jm(r,e),a=await new E0(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=600*1e3;class R0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jf(e))}saveEventToCache(e){this.cachedEventUids.add(Jf(e)),this.lastProcessedEventTime=Date.now()}}function Jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k0=/^https?/;async function D0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P0(t);for(const n of e)try{if(O0(n))return}catch{}Xt(t,"unauthorized-domain")}function O0(t){const e=Wc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!k0.test(n))return!1;if(V0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new Pi(3e4,6e4);function Xf(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x0(t){return new Promise((e,n)=>{var r,s,i;function a(){Xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xf(),n(Ot(t,"network-request-failed"))},timeout:N0.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)a();else{const c=Ub("iframefcb");return Kt()[c]=()=>{gapi.load?a():n(Ot(t,"network-request-failed"))},Lb(`${Fb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function M0(t){return Eo=Eo||x0(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new Pi(5e3,15e3),F0="__/auth/iframe",U0="emulator/auth/iframe",B0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $0(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jl(e,U0):`https://${t.config.authDomain}/${F0}`,r={apiKey:e.apiKey,appName:t.name,v:ls},s=j0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function q0(t){const e=await M0(t),n=Kt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:$0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(t,"network-request-failed"),c=Kt().setTimeout(()=>{i(a)},L0.get());function l(){Kt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z0=500,W0=600,K0="_blank",G0="http://localhost";class Yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q0(t,e,n,r=z0,s=W0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},H0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();n&&(c=wm(h)?K0:n),Tm(h)&&(e=e||G0,l.scrollbars="yes");const d=Object.entries(l).reduce((y,[b,V])=>`${y}${b}=${V},`,"");if(Pb(h)&&c!=="_self")return J0(e||"",c),new Yf(null);const g=window.open(e||"",c,d);ne(g,t,"popup-blocked");try{g.focus()}catch{}return new Yf(g)}function J0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="__/auth/handler",Y0="emulator/auth/handler",Z0=encodeURIComponent("fac");async function Zf(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(e instanceof tu){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",UE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Vi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${Z0}=${encodeURIComponent(l)}`:"";return`${eS(t)}?${Ii(c).slice(1)}${h}`}function eS({config:t}){return t.emulator?Jl(t,Y0):`https://${t.authDomain}/${X0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="webStorageSupport";class tS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mm,this._completeRedirectFn=b0,this._overrideRedirectResult=I0}async _openPopup(e,n,r,s){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Zf(e,n,r,Wc(),s);return Q0(e,a,nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zf(e,n,r,Wc(),s);return s0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await q0(e),r=new R0(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[uc];a!==void 0&&n(!!a),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cm()||Im()||Zl()}}const nS=tS;var ed="@firebase/auth",td="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iS(t){es(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pm(t)},h=new xb(r,s,i,l);return jb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new Tr("auth-internal",e=>{const n=wa(e.getProvider("auth").getImmediate());return(r=>new rS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(ed,td,sS(t)),Bn(ed,td,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=300,aS=Sp("authIdTokenMaxAge")||oS;let nd=null;const cS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aS)return;const s=n==null?void 0:n.token;nd!==s&&(nd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lS(t=Dp()){const e=ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bb(t,{popupRedirectResolver:nS,persistence:[d0,t0,Mm]}),r=Sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=cS(i.toString());Jb(n,a,()=>a(n.currentUser)),Qb(n,c=>a(c))}}const s=Ap("auth");return s&&$b(n,`http://${s}`),n}function uS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Mb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iS("Browser");var hS="firebase",fS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(hS,fS,"app");const dS={apiKey:"AIzaSyAwRx-X0Y6AgookvlrUmJbIl2JUFr2Y5z8",authDomain:"cis371-assignment4-89bab.firebaseapp.com",projectId:"cis371-assignment4-89bab",storageBucket:"cis371-assignment4-89bab.appspot.com",messagingSenderId:"795359785134",appId:"1:795359785134:web:1ad0ef65b45507d8a2fd3f"},Hm=kp(dS),Ns=WA(Hm),hc=lS(Hm),pS=new cn,Sa=Hv("BeverageStore",{state:()=>({temps:["Hot","Cold"],bases:[],creamers:[],syrups:[],currentTemp:"Hot",currentBase:null,currentCreamer:null,currentSyrup:null,beverages:[],currentBeverage:null,beverageName:"",user:null,message:"",beveragesUnsubscribe:null}),actions:{async init(){const t=await cc(Os(Ns,"bases"));this.bases=t.docs.map(r=>r.data());const e=await cc(Os(Ns,"creamers"));this.creamers=e.docs.map(r=>r.data());const n=await cc(Os(Ns,"syrups"));this.syrups=n.docs.map(r=>r.data()),this.currentBase=this.bases[0]||null,this.currentCreamer=this.creamers[0]||null,this.currentSyrup=this.syrups[0]||null,Xb(hc,r=>{this.setUser(r)})},setUser(t){if(this.user=t,this.beveragesUnsubscribe&&(this.beveragesUnsubscribe(),this.beveragesUnsubscribe=null),!t){this.beverages=[],this.currentBeverage=null;return}const e=Os(Ns,"users",t.uid,"beverages");this.beveragesUnsubscribe=ab(e,n=>{this.beverages=n.docs.map(r=>({id:r.id,...r.data()}))})},async withGoogle(){try{await y0(hc,pS)}catch{this.message="Login failed."}},async signOut(){await Yb(hc),this.user=null,this.beverages=[],this.currentBeverage=null},async makeBeverage(){if(!this.user){this.message="Please sign in first.";return}if(!this.beverageName.trim()||!this.currentBase||!this.currentCreamer||!this.currentSyrup){this.message="Please complete all fields.";return}const t={uid:this.user.uid,name:this.beverageName.trim(),temp:this.currentTemp,base:this.currentBase,creamer:this.currentCreamer,syrup:this.currentSyrup};await ob(Os(Ns,"users",this.user.uid,"beverages"),t),this.beverageName="",this.message="Beverage created!"},showBeverage(t){this.currentBeverage=t,this.currentTemp=t.temp,this.currentBase=t.base,this.currentCreamer=t.creamer,this.currentSyrup=t.syrup}}}),gS={key:0,class:"froth"},mS=yi({__name:"Creamer",props:{type:{}},setup(t){const e=t,n=Sa(),r=Ei(()=>{const s=n.creamers.find(i=>i.name===e.type);return s?s.color:"#e4e0d2"});return(s,i)=>t.type!=="No Cream"?(ge(),ke("div",gS,[(ge(),ke(Fe,null,Dn(5,a=>Ae("div",{key:a,class:"foam",style:as({backgroundColor:r.value})},null,4)),64))])):ii("",!0)}}),_S=Sr(mS,[["__scopeId","data-v-6dbee547"]]),yS=yi({__name:"Syrup",props:{type:{}},setup(t){const e=t,n=Sa(),r=Ei(()=>{const s=n.syrups.find(i=>i.name===e.type);return s?s.color:"transparent"});return(s,i)=>t.type!=="No Syrup"?(ge(),ke("div",{key:0,class:"syrup",style:as({"--texture-color":r.value})},null,4)):ii("",!0)}}),rd=Sr(yS,[["__scopeId","data-v-960baf51"]]),vS=yi({__name:"Base",props:{type:{}},setup(t){const e=t,n=Sa(),r=Ei(()=>{const s=n.bases.find(i=>i.name===e.type);return s?s.color:"#6F4E37"});return(s,i)=>(ge(),ke("div",{class:"baseBeverage",style:as({backgroundColor:r.value})},null,4))}}),ES=Sr(vS,[["__scopeId","data-v-2043e346"]]),TS=yi({__name:"Beverage",props:{isIced:{type:Boolean},base:{},creamer:{},syrup:{}},setup(t){return(e,n)=>(ge(),sn(Zv,null,{default:xs(()=>[t.isIced?(ge(),sn(sE,{key:0})):(ge(),sn(lE,{key:1})),It(dE,null,{top:xs(()=>[t.creamer&&t.creamer!=="No Cream"?(ge(),sn(_S,{key:0,type:t.creamer},null,8,["type"])):t.syrup&&t.syrup!=="No Syrup"?(ge(),sn(rd,{key:1,type:t.syrup},null,8,["type"])):ii("",!0)]),mid:xs(()=>[t.creamer&&t.creamer!=="No Cream"&&t.syrup&&t.syrup!=="No Syrup"?(ge(),sn(rd,{key:0,type:t.syrup},null,8,["type"])):ii("",!0)]),bottom:xs(()=>[It(ES,{type:t.base||""},null,8,["type"])]),_:1})]),_:1}))}}),IS=["value"],wS={class:"options-row"},AS=["value"],bS={class:"options-row"},SS=["value"],RS={class:"options-row"},CS=["value"],PS={style:{margin:"1rem 0"}},VS={key:1},kS=["disabled"],DS=["disabled"],OS={key:0,id:"beverage-container",style:{"margin-top":"20px"}},NS=["onChange"],xS=yi({__name:"App",setup(t){const e=Sa();return $d(()=>{e.init()}),(n,r)=>{var s,i,a;return ge(),ke("div",null,[It(TS,{isIced:Ee(e).currentTemp==="Cold",base:((s=Ee(e).currentBase)==null?void 0:s.name)||"",creamer:((i=Ee(e).currentCreamer)==null?void 0:i.name)||"",syrup:((a=Ee(e).currentSyrup)==null?void 0:a.name)||""},null,8,["isIced","base","creamer","syrup"]),Ae("ul",null,[Ae("li",null,[(ge(!0),ke(Fe,null,Dn(Ee(e).temps,c=>(ge(),ke("label",{key:c},[ks(Ae("input",{type:"radio",name:"temp",value:c,"onUpdate:modelValue":r[0]||(r[0]=l=>Ee(e).currentTemp=l)},null,8,IS),[[Yi,Ee(e).currentTemp]]),lr(" "+ar(c),1)]))),128))])]),Ae("ul",wS,[(ge(!0),ke(Fe,null,Dn(Ee(e).bases,c=>(ge(),ke("li",{key:c.id},[Ae("label",null,[ks(Ae("input",{type:"radio",name:"base",value:c,"onUpdate:modelValue":r[1]||(r[1]=l=>Ee(e).currentBase=l)},null,8,AS),[[Yi,Ee(e).currentBase]]),lr(" "+ar(c.name),1)])]))),128))]),Ae("ul",bS,[(ge(!0),ke(Fe,null,Dn(Ee(e).creamers,c=>(ge(),ke("li",{key:c.id},[Ae("label",null,[ks(Ae("input",{type:"radio",name:"creamer",value:c,"onUpdate:modelValue":r[2]||(r[2]=l=>Ee(e).currentCreamer=l)},null,8,SS),[[Yi,Ee(e).currentCreamer]]),lr(" "+ar(c.name),1)])]))),128))]),Ae("ul",RS,[(ge(!0),ke(Fe,null,Dn(Ee(e).syrups,c=>(ge(),ke("li",{key:c.id},[Ae("label",null,[ks(Ae("input",{type:"radio",name:"syrup",value:c,"onUpdate:modelValue":r[3]||(r[3]=l=>Ee(e).currentSyrup=l)},null,8,CS),[[Yi,Ee(e).currentSyrup]]),lr(" "+ar(c.name),1)])]))),128))]),Ae("div",PS,[Ee(e).user?(ge(),ke("div",VS,[Ae("p",null,[r[8]||(r[8]=lr("Signed in as: ",-1)),Ae("strong",null,ar(Ee(e).user.email),1)]),Ae("button",{onClick:r[5]||(r[5]=c=>Ee(e).signOut())},"Sign Out")])):(ge(),ke("button",{key:0,onClick:r[4]||(r[4]=c=>Ee(e).withGoogle())}," Sign in with Google "))]),ks(Ae("input",{type:"text",placeholder:"Beverage Name","onUpdate:modelValue":r[6]||(r[6]=c=>Ee(e).beverageName=c),disabled:!Ee(e).user},null,8,kS),[[kv,Ee(e).beverageName]]),Ae("button",{onClick:r[7]||(r[7]=c=>Ee(e).makeBeverage()),disabled:!Ee(e).user}," 🍺 Make Beverage ",8,DS),Ee(e).user?(ge(),ke("div",OS,[r[9]||(r[9]=Ae("h3",null,"Your Saved Beverages",-1)),Ae("ul",null,[(ge(!0),ke(Fe,null,Dn(Ee(e).beverages,c=>(ge(),ke("li",{key:c.id},[Ae("label",null,[Ae("input",{type:"radio",name:"saved-bevs",onChange:l=>Ee(e).showBeverage(c)},null,40,NS),lr(" "+ar(c.name),1)])]))),128))])])):ii("",!0)])}}}),zm=Fv();zm.use(Qv);xv(xS).use(zm).mount("#app");
