import{N as y,C as v,S as x,_ as V}from"./chunks/ExampleBasic.Bf8QP3Fu.js";import{o as r,b as w,w as o,a1 as A,a2 as E,k as s,G as t,c as p,C as h,F as c,j as e,t as g,_ as B,p as C,B as f,a3 as G,a4 as W,K as $,a as _}from"./chunks/framework.CH_Jd00V.js";const D={class:"carousel__item"},U={__name:"ExampleWrapAround",setup(k){const a={itemsToShow:2.5,wrapAround:!0};return(i,m)=>(r(),w(s(v),A(E(a)),{addons:o(()=>[t(s(y))]),default:o(()=>[(r(),p(c,null,h(10,n=>t(s(x),{key:n},{default:o(()=>[e("div",D,g(n),1)]),_:2},1024)),64))]),_:1},16))}},z={style:{resize:"horizontal",border:"2px dashed gray",overflow:"auto"}},R={class:"carousel__item"},F={__name:"ExampleBreakpoints",setup(k){const a={itemsToShow:1,snapAlign:"center",breakpointMode:"carousel",breakpoints:{300:{itemsToShow:2,snapAlign:"center"},400:{itemsToShow:3,snapAlign:"start"},500:{itemsToShow:4,snapAlign:"start"}}};return(i,m)=>(r(),p("div",z,[t(s(v),A(E(a)),{addons:o(()=>[t(s(y))]),default:o(()=>[(r(),p(c,null,h(10,n=>t(s(x),{key:n},{default:o(()=>[e("div",R,g(n),1)]),_:2},1024)),64))]),_:1},16)]))}},M={class:"carousel__item"},O={__name:"ExampleAutoplay",setup(k){const a={autoplay:2e3,wrapAround:!0,pauseAutoplayOnHover:!0};return(i,m)=>(r(),w(s(v),A(E(a)),{addons:o(()=>[t(s(y))]),default:o(()=>[(r(),p(c,null,h(10,n=>t(s(x),{key:n},{default:o(()=>[e("div",M,g(n),1)]),_:2},1024)),64))]),_:1},16))}},j={class:"carousel__item"},H={__name:"ExampleActiveClasses",setup(k){const a={itemsToShow:3.95,wrapAround:!0,transition:500};return(i,m)=>(r(),w(s(v),A(E(a)),{addons:o(()=>[t(s(y))]),default:o(()=>[(r(),p(c,null,h(10,n=>t(s(x),{key:n},{default:o(()=>[e("div",j,g(n),1)]),_:2},1024)),64))]),_:1},16))}},I=B(H,[["__scopeId","data-v-4c39cc47"]]),J={class:"carousel__item"},K={__name:"ExampleCustomNavigation",setup(k){const a=C(),i=C(0),m=()=>a.value.next(),n=()=>a.value.prev();return(b,u)=>{const l=f("Navigation");return r(),p(c,null,[t(s(v),{ref_key:"carouselRef",ref:a,modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=d=>i.value=d),snapAlign:"start"},{addons:o(()=>[t(l)]),default:o(()=>[(r(),p(c,null,h(10,d=>t(s(x),{key:d},{default:o(()=>[e("div",J,g(d-1),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e("div",null,[e("button",{onClick:n},"Prev"),G(e("input",{type:"number",min:"0",max:"9","onUpdate:modelValue":u[1]||(u[1]=d=>i.value=d)},null,512),[[W,i.value]]),e("button",{onClick:m},"Next")])],64)}}},L={class:"carousel__item"},q=["onClick"],Q={__name:"ExampleGallery",setup(k){const a=C(0),i=b=>a.value=b,m={itemsToShow:1,mouseDrag:!1,touchDrag:!1,wrapAround:!1},n={itemsToShow:4,wrapAround:!0};return(b,u)=>(r(),p(c,null,[t(s(v),$({id:"gallery"},m,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=l=>a.value=l)}),{default:o(()=>[(r(),p(c,null,h(10,l=>t(s(x),{key:l},{default:o(()=>[e("div",L,g(l),1)]),_:2},1024)),64))]),_:1},16,["modelValue"]),t(s(v),$({id:"thumbnails"},n,{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=l=>a.value=l)}),{addons:o(()=>[t(s(y))]),default:o(()=>[(r(),p(c,null,h(10,l=>t(s(x),{key:l},{default:o(()=>[e("div",{class:"carousel__item",onClick:d=>i(l-1)},g(l),9,q)]),_:2},1024)),64))]),_:1},16,["modelValue"])],64))}},X={components:{ExampleBasic:V,ExampleWrapAround:U,ExampleBreakpoints:F,ExampleAutoplay:O,ExampleActiveClasses:I,ExampleCustomNavigation:K,ExampleGallery:Q}},ea=JSON.parse('{"title":"Test","description":"","frontmatter":{},"headers":[],"relativePath":"test.md","filePath":"test.md"}');function Y(k,a,i,m,n,b){const u=f("ExampleBasic"),l=f("ExampleWrapAround"),d=f("ExampleBreakpoints"),N=f("ExampleAutoplay"),P=f("ExampleActiveClasses"),S=f("ExampleCustomNavigation"),T=f("ExampleGallery");return r(),p("div",null,[a[0]||(a[0]=e("h1",{id:"test",tabindex:"-1"},[_("Test "),e("a",{class:"header-anchor",href:"#test","aria-label":'Permalink to "Test"'},"​")],-1)),a[1]||(a[1]=e("h2",{id:"basic",tabindex:"-1"},[_("Basic "),e("a",{class:"header-anchor",href:"#basic","aria-label":'Permalink to "Basic"'},"​")],-1)),t(u),a[2]||(a[2]=e("h2",{id:"wrap-around",tabindex:"-1"},[_("Wrap Around "),e("a",{class:"header-anchor",href:"#wrap-around","aria-label":'Permalink to "Wrap Around"'},"​")],-1)),t(l),a[3]||(a[3]=e("h2",{id:"breakpoints",tabindex:"-1"},[_("Breakpoints "),e("a",{class:"header-anchor",href:"#breakpoints","aria-label":'Permalink to "Breakpoints"'},"​")],-1)),t(d),a[4]||(a[4]=e("h2",{id:"autoplay",tabindex:"-1"},[_("Autoplay "),e("a",{class:"header-anchor",href:"#autoplay","aria-label":'Permalink to "Autoplay"'},"​")],-1)),t(N),a[5]||(a[5]=e("h2",{id:"active-classes",tabindex:"-1"},[_("Active Classes "),e("a",{class:"header-anchor",href:"#active-classes","aria-label":'Permalink to "Active Classes"'},"​")],-1)),t(P),a[6]||(a[6]=e("h2",{id:"custom-navigation",tabindex:"-1"},[_("Custom Navigation "),e("a",{class:"header-anchor",href:"#custom-navigation","aria-label":'Permalink to "Custom Navigation"'},"​")],-1)),t(S),a[7]||(a[7]=e("h2",{id:"gallery",tabindex:"-1"},[_("Gallery "),e("a",{class:"header-anchor",href:"#gallery","aria-label":'Permalink to "Gallery"'},"​")],-1)),t(T)])}const ta=B(X,[["render",Y]]);export{ea as __pageData,ta as default};
