import{a as P,b as T,e as M,f as N,g as B}from"./chunk-2UPWMUYX.js";import{d as u}from"./chunk-IS6KCLCK.js";import{$a as d,Da as b,Ga as o,Ha as F,Ia as I,Ja as S,Ka as q,La as l,Ma as a,Na as s,Oa as w,Q as g,Ra as m,Sa as v,U as c,Xa as p,_a as D,ba as _,ca as x,la as E,ua as r}from"./chunk-E2QLOL5D.js";function R(i,t){if(i&1&&s(0,"shared-input-field",4)(1,"shared-input-field",4)(2,"shared-input-field",4)(3,"shared-input-field",4)(4,"shared-input-field",4)(5,"shared-input-field",4),i&2){let e=t.$implicit;o("label","Bc:")("value",e.bc),r(),o("label","Ba:")("value",e.ba),r(),o("label","B:")("value",e.b),r(),o("label","Rp:")("value",e.rp),r(),o("label","icorr:")("value",e.icorr),r(),o("label","velcorr:")("value",e.velcorr)}}var f=class i{points=E.required();currentIndex=0;get currentPoint(){return this.points()[this.currentIndex]}copyToClipboard(t){navigator.clipboard.writeText(t.toString()).catch(e=>console.error("Failed to copy:",e))}navigation(t){this.currentIndex=this.currentIndex+t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["eq-form"]],inputs:{points:[1,"points"]},standalone:!0,features:[d],decls:7,vars:5,consts:[[1,"eq-form","column","g-2"],[1,"text-center"],[1,"column"],[3,"newIndex","currentIndex","isPreviousDisabled","isNextDisabled"],[3,"label","value"]],template:function(e,n){e&1&&(l(0,"div",0)(1,"h3",1),p(2),a(),l(3,"div",2),S(4,R,6,12,null,null,I),a(),l(6,"shared-navigation-buttons",3),m("newIndex",function(h){return n.navigation(h)}),a()()),e&2&&(r(2),D(" Punto de extracci\xF3n: ",n.currentPoint.point," (",n.currentPoint.sampleDate,") "),r(2),q(n.currentPoint.measurements),r(2),o("currentIndex",n.currentIndex)("isPreviousDisabled",n.currentIndex===0)("isNextDisabled",n.currentIndex===n.points().length-1))},dependencies:[u,B,N,M]})};function $(i,t){if(i&1){let e=w();l(0,"shared-file",3),m("fileSelected",function(C){_(e);let h=v();return x(h.onFileChange(C))}),a()}}function j(i,t){if(i&1&&s(0,"eq-form",2),i&2){let e=v();o("points",e.points)}}var y=class i{excelService=g(P);points=[];images=[];onFileChange(t){t&&this.excelService.callElectrochemistry(t).then(e=>{this.points=e}).catch(e=>console.error(e))}downloadImage(t,e){let n=document.createElement("a");n.href=t,n.download=`image.${e}`,n.click()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-electrochemistry"]],standalone:!0,features:[d],decls:5,vars:1,consts:[[1,"electrochemistry","column","g-2"],[1,"text-center"],[3,"points"],[3,"fileSelected"]],template:function(e,n){e&1&&(l(0,"section",0)(1,"h1",1),p(2,"Revisi\xF3n EQ"),a(),b(3,$,1,0,"shared-file")(4,j,1,1,"eq-form",2),a()),e&2&&(r(3),F(n.points.length<=0?3:4))},dependencies:[u,T,f],styles:[".electrochemistry[_ngcontent-%COMP%]{padding:2rem}"]})};export{y as default};
