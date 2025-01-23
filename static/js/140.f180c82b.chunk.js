/*! For license information please see 140.f180c82b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontier=self.webpackChunkfrontier||[]).push([[140],{6140:(t,e,c)=>{c.r(e),c.d(e,{scopeCss:()=>A});var n="-shadowcsshost",s="-shadowcssslotted",r="-shadowcsscontext",o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+n+o,"gim"),a=new RegExp("("+r+o,"gim"),i=new RegExp("("+s+o,"gim"),p=n+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,g=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,d=t=>new RegExp("((?<!(^@supports(.*)))|(?<={.*))(".concat(t,"\\b)"),"gim"),f=d("::slotted"),m=d(":host"),x=d(":host-context"),w=/\/\*\s*[\s\S]*?\*\//g,S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,b=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,_=/(^.*?[^\\])??((:+)(.*)|$)/,k="%BLOCK%",E=t=>{const e=t.split(v),c=[],n=[];let s=0,r=[];for(let o=0;o<e.length;o++){const t=e[o];"}"===t&&s--,s>0?r.push(t):(r.length>0&&(n.push(r.join("")),c.push(k),r=[]),c.push(t)),"{"===t&&s++}r.length>0&&(n.push(r.join("")),c.push(k));return{escapedString:c.join(""),blocks:n}},O=(t,e,c)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){const t=e[2].split(","),n=[];for(let s=0;s<t.length;s++){const r=t[s].trim();if(!r)break;n.push(c(p,r,e[3]))}return n.join(",")}return p+e[3]})),$=(t,e,c)=>t+e.replace(n,"")+c,R=(t,e,c)=>e.indexOf(n)>-1?$(t,e,c):t+e+c+", "+e+" "+t+c,j=(t,e)=>{const c=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!c.test(t)},C=(t,e)=>t.replace(_,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),W=(t,e,c)=>{const n="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),s=t=>{let s=t.trim();if(!s)return"";if(t.indexOf(p)>-1)s=((t,e,c)=>{if(u.lastIndex=0,u.test(t)){const e=".".concat(c);return t.replace(h,((t,c)=>C(c,e))).replace(u,e+" ")}return e+" "+t})(t,e,c);else{const e=t.replace(u,"");e.length>0&&(s=C(e,n))}return s},r=(t=>{const e=[];let c=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,n)=>{const s="__ph-".concat(c,"__");return e.push(n),c++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,n,s)=>{const r="__ph-".concat(c,"__");return e.push(s),c++,n+r})),placeholders:e}})(t);let o,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let g=!((t=r.content).indexOf(p)>-1);for(;null!==(o=i.exec(t));){const e=o[1],c=t.slice(a,o.index).trim();g=g||c.indexOf(p)>-1;const n=g?s(c):c;l+="".concat(n," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return g=g||d.indexOf(p)>-1,l+=g?s(d):d,f=r.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>f[+e]));var f},T=(t,e,c,n)=>((t,e)=>{const c=E(t);let n=0;return c.escapedString.replace(b,(function(){const t=arguments.length<=2?void 0:arguments[2];let s="",r=arguments.length<=4?void 0:arguments[4],o="";r&&r.startsWith("{"+k)&&(s=c.blocks[n++],r=r.substring(8),o="{");const l=e({selector:t,content:s});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(o).concat(l.content).concat(r)}))})(t,(t=>{let s=t.selector,r=t.content;"@"!==t.selector[0]?s=((t,e,c,n)=>t.split(",").map((t=>n&&t.indexOf("."+n)>-1?t.trim():j(t,e)?W(t,e,c).trim():t.trim())).join(", "))(t.selector,e,c,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(r=T(t.content,e,c,n));return{selector:s.replace(/\s{2,}/g," ").trim(),content:r}})),L=(t,e,c,o)=>{const h=((t,e)=>{const c="."+e+" > ",n=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];if(e[2]){const t=e[2].trim(),s=e[3],r=c+t+s;let o="";for(let c=e[4]-1;c>=0;c--){const t=e[5][c];if("}"===t||","===t)break;o=t+o}const l=(o+r).trim(),a="".concat(o.trimEnd()).concat(r.trim()).trim();if(l!==a){const t="".concat(a,", ").concat(l);n.push({orgSelector:l,updatedSelector:t})}return r}return p+e[3]})),{selectors:n,cssText:t}})(t=(t=>O(t,a,R))(t=(t=>O(t,l,$))(t=(t=>t.replace(x,"$1".concat(r)).replace(m,"$1".concat(n)).replace(f,"$1".concat(s)))(t))),o);return t=(t=>g.reduce(((t,e)=>t.replace(e," ")),t))(t=h.cssText),e&&(t=T(t,e,c,o)),{cssText:(t=(t=y(t,c)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors.map((t=>({orgSelector:y(t.orgSelector,c),updatedSelector:y(t.updatedSelector,c)})))}},y=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,".".concat(e)),A=(t,e)=>{const c=e+"-h",n=e+"-s",s=t.match(S)||[];t=(t=>t.replace(w,""))(t);const r=L(t,e,c,n);return t=[r.cssText,...s].join("\n"),r.slottedSelectors.forEach((e=>{const c=new RegExp(e.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");t=t.replace(c,e.updatedSelector)})),t}}}]);