/*! For license information please see 348.9647f10f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontier=self.webpackChunkfrontier||[]).push([[348],{2348:(n,e,t)=>{t.r(e),t.d(e,{mdTransitionAnimation:()=>a});var o=t(9392),i=t(6322);const a=(n,e)=>{var t,a,r;const c="40px",l="back"===e.direction,s=e.enteringEl,d=e.leavingEl,u=(0,i.g)(s),m=u.querySelector("ion-toolbar"),f=(0,o.c)();if(f.addElement(u).fill("both").beforeRemoveClass("ion-page-invisible"),l?f.duration((null!==(t=e.duration)&&void 0!==t?t:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):f.duration((null!==(a=e.duration)&&void 0!==a?a:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(".concat(c,")"),"translateY(".concat("0px",")")).fromTo("opacity",.01,1),m){const n=(0,o.c)();n.addElement(m),f.addAnimation(n)}if(d&&l){f.duration((null!==(r=e.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,o.c)();n.addElement((0,i.g)(d)).onFinish((e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(".concat("0px",")"),"translateY(".concat(c,")")).fromTo("opacity",1,0),f.addAnimation(n)}return f}}}]);