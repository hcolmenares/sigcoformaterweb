import{a as E,b as T,e as V,f as N,g as $}from"./chunk-2UPWMUYX.js";import{d as g}from"./chunk-IS6KCLCK.js";import{$a as _,Da as b,Ga as r,Ha as v,La as p,Ma as c,Na as x,Oa as C,Q as B,Ra as d,Sa as s,U as f,X as P,Xa as h,Za as S,ab as w,ba as l,bb as M,ca as m,la as D,ua as t}from"./chunk-E2QLOL5D.js";var I=class i{transform(o,e){let n=o.replace(/\s+/g,"");n=n.replace(/-/g,""),n="Bio"+n;let a=this.formatearFecha(e);return`${n}_${a}`}formatearFecha(o){let e=o.getFullYear(),n=("0"+(o.getMonth()+1)).slice(-2),a=("0"+o.getDate()).slice(-2);return`${e}${n}${a}`}static \u0275fac=function(e){return new(e||i)};static \u0275pipe=P({name:"biocuponeCode",type:i,pure:!0,standalone:!0})};function j(i,o){if(i&1){let e=C();p(0,"shared-navigation-buttons",5),d("newIndex",function(a){l(e);let u=s();return m(u.navigation(a))}),c()}if(i&2){let e=s();r("currentIndex",e.currentIndex)("isPreviousDisabled",e.currentIndex===0)("isNextDisabled",e.currentIndex===e.biocoupons().length-1)}}var y=class i{biocoupons=D.required();currentIndex=0;get currentPoint(){return this.biocoupons()[this.currentIndex]}navigation(o){this.currentIndex=this.currentIndex+o}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=f({type:i,selectors:[["biocoupon-form"]],inputs:{biocoupons:[1,"biocoupons"]},standalone:!0,features:[_],decls:12,vars:17,consts:[[1,"biocupones","column","g-1"],[1,"text-center"],[1,"column"],[3,"label","value"],[3,"currentIndex","isPreviousDisabled","isNextDisabled"],[3,"newIndex","currentIndex","isPreviousDisabled","isNextDisabled"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"h3",1),h(2),w(3,"biocuponeCode"),c(),p(4,"div",2),x(5,"shared-input-field",3)(6,"shared-input-field",3)(7,"shared-input-field",3)(8,"shared-input-field",3)(9,"shared-input-field",3)(10,"shared-input-field",3),c()(),b(11,j,1,3,"shared-navigation-buttons",4)),e&2&&(t(2),S(" ",M(3,14,n.currentPoint.puntoMuestreo,n.currentPoint.fechaRetiro)," "),t(3),r("label","Fecha de instalaci\xF3n:")("value",n.currentPoint.fechaInstalacion),t(),r("label","Fecha de retiro:")("value",n.currentPoint.fechaRetiro),t(),r("label","D\xEDas de exposici\xF3n:")("value",n.currentPoint.diasExposicion),t(),r("label","Profundidad de picado:")("value",n.currentPoint.profundidadPicado+3),t(),r("label","VPM [mmy]:")("value",n.currentPoint.vpmMmy),t(),r("label","VPM [mpy]:")("value",n.currentPoint.vpmMpy),t(),v(n.biocoupons().length>1?11:-1))},dependencies:[g,I,$,N,V]})};function q(i,o){if(i&1){let e=C();p(0,"div",3)(1,"input",5,0),d("change",function(a){l(e);let u=s();return m(u.nuevaFilaInicial(a))}),c(),p(3,"shared-file",6),d("fileSelected",function(a){l(e);let u=s();return m(u.cargarArchivo(a))}),c()()}if(i&2){let e=s();t(),r("value",e.filaInicial)}}function O(i,o){if(i&1&&x(0,"biocoupon-form",4),i&2){let e=s();r("biocoupons",e.biocupones)}}var F=class i{biocupones=[];filaInicial=34;excelService=B(E);nuevaFilaInicial(o){let e=o.target.valueAsNumber;this.filaInicial=e}cargarArchivo(o,e=this.filaInicial){o&&this.excelService.callBiocupone(o,e).subscribe(n=>{this.biocupones=n},n=>console.error("Error reading Excel file:",n))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=f({type:i,selectors:[["app-biocoupons"]],standalone:!0,features:[_],decls:5,vars:1,consts:[["filaInicialInput",""],[1,"biocupone","column","g-1"],[1,"text-center"],[1,"column","g-1"],[3,"biocoupons"],["type","number","placeholder","Fila inicial",3,"change","value"],[3,"fileSelected"]],template:function(e,n){e&1&&(p(0,"section",1)(1,"h1",2),h(2,"Informaci\xF3n BioCupones"),c(),b(3,q,4,1,"div",3)(4,O,1,1,"biocoupon-form",4),c()),e&2&&(t(3),v(n.biocupones.length<=0?3:4))},dependencies:[g,T,y],styles:[".biocupone[_ngcontent-%COMP%]{padding:2rem}"]})};export{F as default};
