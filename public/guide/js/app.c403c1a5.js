(function(){"use strict";var i={141:function(i,n,s){var e=s(963),t=s(252),c=s(577),a=s.p+"img/img.02a1c5f1.png",r=s.p+"img/img_1.097595c9.png",l=s.p+"img/img_2.cd4c34db.png",o=s.p+"img/img_3.1ad5b474.png",u=s(262);const d={class:"guide-container"},v={class:"step0"},p=(0,t._)("div",{class:"title"},"您好，我叫 Qiko",-1),f=(0,t._)("div",{class:"desc"},[(0,t.Uk)("快捷键 "),(0,t._)("span",{class:"down-line"},"Alt + R"),(0,t.Uk)(" 可以快速打开我")],-1),g=(0,t._)("div",{class:"img-container"},[(0,t._)("img",{class:"img",src:a}),(0,t._)("div",{class:"info"},[(0,t._)("svg",{class:"top-icon",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"NorthIcon"},[(0,t._)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"})]),(0,t.Uk)(" 点击 logo 进入插件市场 ")])],-1),m=[p,f,g],w={class:"step0 step1"},_=(0,t.uE)('<div class="title">选择需要的插件安装</div><div class="desc">基于 <span class="down-line">npm</span> 的插件包管理，像小程序一样，用完即走</div><div class="img-container"><img class="img" src="'+r+'"></div>',3),h=[_],b={class:"step0"},y=(0,t.uE)('<div class="title"><span class="down-line">关键字</span>搜索应用和插件</div><div class="desc">搜索框内输入关键字可以搜索安装的应用和插件</div><div class="img-container"><img class="img" src="'+l+'"></div>',3),O=[y],k={class:"step0 step1"},j=(0,t.uE)('<div class="title">完全开源免费，支持内网部署</div><div class="desc">进入插件市场的 <span class="down-line">账户与设置</span> 菜单，进行内网部署设置</div><div class="img-container"><img class="img" src="'+o+'"></div>',3),x=[j],F={class:"footer"},E=(0,t._)("div",null,null,-1),z={class:"step"},C={class:"step-num"};var R={__name:"App",setup(i){const n=(0,u.iH)(0),{ipcRenderer:s}=window.require("electron"),a=()=>{if(n.value>=3)return s.send("guide:service",{type:"close"});n.value=n.value+1};return(i,s)=>((0,t.wg)(),(0,t.iD)("div",d,[(0,t.wy)((0,t._)("div",v,m,512),[[e.F8,0===n.value]]),(0,t.wy)((0,t._)("div",w,h,512),[[e.F8,1===n.value]]),(0,t.wy)((0,t._)("div",b,O,512),[[e.F8,2===n.value]]),(0,t.wy)((0,t._)("div",k,x,512),[[e.F8,3===n.value]]),(0,t._)("div",F,[E,(0,t._)("div",z,[(0,t._)("span",C,(0,c.zw)(n.value+1)+" / 4",1),(0,t._)("div",{class:"button",onClick:a},(0,c.zw)(n.value+1===4?"完成":"下一步"),1)])])]))}};const U=R;var A=U;(0,e.ri)(A).mount("#app")}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={exports:{}};return i[e](c,c.exports,s),c.exports}s.m=i,function(){var i=[];s.O=function(n,e,t,c){if(!e){var a=1/0;for(u=0;u<i.length;u++){e=i[u][0],t=i[u][1],c=i[u][2];for(var r=!0,l=0;l<e.length;l++)(!1&c||a>=c)&&Object.keys(s.O).every((function(i){return s.O[i](e[l])}))?e.splice(l--,1):(r=!1,c<a&&(a=c));if(r){i.splice(u--,1);var o=t();void 0!==o&&(n=o)}}return n}c=c||0;for(var u=i.length;u>0&&i[u-1][2]>c;u--)i[u]=i[u-1];i[u]=[e,t,c]}}(),function(){s.d=function(i,n){for(var e in n)s.o(n,e)&&!s.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:n[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){s.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)}}(),function(){s.p=""}(),function(){var i={143:0};s.O.j=function(n){return 0===i[n]};var n=function(n,e){var t,c,a=e[0],r=e[1],l=e[2],o=0;if(a.some((function(n){return 0!==i[n]}))){for(t in r)s.o(r,t)&&(s.m[t]=r[t]);if(l)var u=l(s)}for(n&&n(e);o<a.length;o++)c=a[o],s.o(i,c)&&i[c]&&i[c][0](),i[c]=0;return s.O(u)},e=self["webpackChunkguide"]=self["webpackChunkguide"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(141)}));e=s.O(e)})();