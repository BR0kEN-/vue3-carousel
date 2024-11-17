import{d as Se,p as v,h as I,a1 as X,V as O,v as We,P as He,x as qe,q as _e,a2 as De,a3 as y,L as h,F as N,o as x,b as le,w as f,a4 as te,a5 as ae,k as p,G as u,c as T,C as V,j as c,t as $,_ as $e,a6 as Ke,a7 as Je,K as Pe,a as P,B as G}from"./chunks/framework.BE4B_uXE.js";/**
 * Vue 3 Carousel 0.6.0
 * (c) 2024
 * @license MIT
 */const Be=["center","start","end","center-even","center-odd"],Le=["viewport","carousel"],Re=["ltr","left-to-right","rtl","right-to-left","ttb","top-to-bottom","btt","bottom-to-top"],Qe={ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"},_={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,gap:0,height:"auto",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,snapAlign:Be[0],dir:Re[0],breakpointMode:Le[0],breakpoints:void 0,i18n:Qe},Ve={itemsToShow:{default:_.itemsToShow,type:Number},itemsToScroll:{default:_.itemsToScroll,type:Number},wrapAround:{default:_.wrapAround,type:Boolean},gap:{default:_.gap,type:Number},height:{default:_.height,type:Number},snapAlign:{default:_.snapAlign,validator(a){return Be.includes(a)}},transition:{default:_.transition,type:Number},breakpointMode:{default:_.breakpointMode,validator(a){return Le.includes(a)}},breakpoints:{default:_.breakpoints,type:Object},autoplay:{default:_.autoplay,type:Number},pauseAutoplayOnHover:{default:_.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:_.mouseDrag,type:Boolean},touchDrag:{default:_.touchDrag,type:Boolean},dir:{default:_.dir,validator(a){return Re.includes(a)}},i18n:{default:_.i18n,type:Object}};function Ze({config:a,slidesCount:e}){var t;const{snapAlign:l="N/A",wrapAround:o,itemsToShow:s=1}=a;if(o)return Math.max(e-1,0);const r=(t={start:Math.ceil(e-s),end:Math.ceil(e-1),center:e-Math.ceil((s-.5)/2),"center-odd":e-Math.ceil((s-.5)/2),"center-even":e-Math.ceil(s/2)}[l])!==null&&t!==void 0?t:0;return Math.max(r,0)}function et({config:a,slidesCount:e}){var t;const{snapAlign:l="N/A",wrapAround:o,itemsToShow:s=1}=a;return o||s>e?0:(t={start:0,end:Math.floor(s-1),center:Math.floor((s-1)/2),"center-odd":Math.floor((s-1)/2),"center-even":Math.floor((s-2)/2)}[l])!==null&&t!==void 0?t:0}function he({val:a,max:e,min:t}){return e<t?a:Math.min(Math.max(a,t),e)}const tt=(a,e)=>{var t;return(t={start:0,center:(e-1)/2,"center-odd":(e-1)/2,"center-even":(e-2)/2,end:e-1}[a])!==null&&t!==void 0?t:0};function at({config:a,currentSlide:e,slidesCount:t}){const{snapAlign:l="N/A",wrapAround:o,itemsToShow:s=1}=a,d=tt(l,s);return o?e-d:he({val:e-d,max:t-s,min:0})}function je(a){return a?a.reduce((e,t)=>{var l;return t.type===N?[...e,...je(t.children)]:((l=t.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function ze({val:a,max:e,min:t=0}){const l=e-t+1;return((a-t)%l+l)%l+t}function nt(a){let e=!1;return function(...t){e||(e=!0,requestAnimationFrame(()=>{a.apply(this,t),e=!1}))}}function ot(a,e){let t;return function(...l){t&&clearTimeout(t),t=setTimeout(()=>{a(...l),t=null},e)}}function Ue(a="",e={}){return Object.entries(e).reduce((t,[l,o])=>t.replace(`{${l}}`,String(o)),a)}var lt=Se({name:"ARIA",setup(){const a=h("config",X(Object.assign({},_))),e=h("currentSlide",v(0)),t=h("slidesCount",v(0));return()=>y("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ue(a.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),B=Se({name:"Carousel",props:Ve,setup(a,{slots:e,emit:t,expose:l}){var o;const s=v(null),d=v(null),r=v([]),b=v(0),g=v(0),C=I(()=>Object.assign(Object.assign(Object.assign({},_),a),{i18n:Object.assign(Object.assign({},_.i18n),a.i18n),breakpoints:void 0})),i=X(Object.assign({},C.value)),m=v((o=a.modelValue)!==null&&o!==void 0?o:0),w=v(0),J=v(0),R=v(0),F=v(0);let j=null,de=null,ne=null;const ye=I(()=>b.value+i.gap),Q=I(()=>{const n=i.dir||"lrt";return{"left-to-right":"ltr","right-to-left":"rtl","top-to-bottom":"ttb","bottom-to-top":"btt"}[n]||n}),Z=I(()=>["ttb","btt"].includes(Q.value));O("config",i),O("slidesCount",g),O("currentSlide",m),O("maxSlide",R),O("minSlide",F),O("slideSize",b),O("isVertical",Z),O("normalizeDir",Q);function ie(){var n;if(!a.breakpoints)return;const S=(i.breakpointMode==="carousel"?(n=s.value)===null||n===void 0?void 0:n.getBoundingClientRect().width:window.innerWidth)||0,A=Object.keys(a.breakpoints||{}).map(E=>Number(E)).sort((E,D)=>+D-+E);let k=Object.assign({},C.value);A.some(E=>{var D;return S>=E?(k=Object.assign(Object.assign({},k),(D=a.breakpoints)===null||D===void 0?void 0:D[E]),!0):!1}),Object.assign(i,k)}const ve=ot(()=>{ie(),re(),oe()},16);function oe(){if(!d.value)return;const n=d.value.getBoundingClientRect(),S=(i.itemsToShow-1)*i.gap;Z.value?b.value=(n.height-S)/i.itemsToShow:b.value=(n.width-S)/i.itemsToShow}function re(){g.value<=0||(J.value=Math.ceil((g.value-1)/2),R.value=Ze({config:i,slidesCount:g.value}),F.value=et({config:i,slidesCount:g.value}),i.wrapAround||(m.value=he({val:m.value,max:R.value,min:F.value})))}We(()=>{He(()=>oe()),setTimeout(()=>oe(),1e3),ie(),Te(),window.addEventListener("resize",ve,{passive:!0}),ne=new ResizeObserver(ve),s.value&&ne.observe(s.value),t("init")}),qe(()=>{de&&clearTimeout(de),j&&clearInterval(j),ne&&s.value&&(ne.unobserve(s.value),ne=null),window.removeEventListener("resize",ve,{passive:!0})});let M=!1;const se={x:0,y:0},z=X({x:0,y:0}),ue=v(!1),pe=v(!1),Ge=()=>{ue.value=!0},Xe=()=>{ue.value=!1};function Ae(n){const S=n.target.tagName;if(["INPUT","TEXTAREA","SELECT"].includes(S)||W.value||(M=n.type==="touchstart",!M&&(n.preventDefault(),n.button!==0)))return;se.x=M?n.touches[0].clientX:n.clientX,se.y=M?n.touches[0].clientY:n.clientY;const A=M?"touchmove":"mousemove",k=M?"touchend":"mouseup";document.addEventListener(A,ke,{passive:!1}),document.addEventListener(k,Ee,{passive:!0})}const ke=nt(n=>{pe.value=!0;const S=M?n.touches[0].clientX:n.clientX,A=M?n.touches[0].clientY:n.clientY,k=S-se.x,E=A-se.y;z.x=k,z.y=E,t("drag",{deltaX:k,deltaY:E})});function Ee(){const n=Z.value?"y":"x",S=["rtl","btt"].includes(Q.value)?-1:1,A=Math.sign(z[n])*.4,k=Math.round(z[n]/ye.value+A)*S;if(k&&!M){const U=ee=>{ee.preventDefault(),window.removeEventListener("click",U)};window.addEventListener("click",U)}const E=m.value-k;H(E),z.x=0,z.y=0,pe.value=!1;const D=M?"touchmove":"mousemove",q=M?"touchend":"mouseup";document.removeEventListener(D,ke),document.removeEventListener(q,Ee)}function Te(){!i.autoplay||i.autoplay<=0||(j=setInterval(()=>{i.pauseAutoplayOnHover&&ue.value||ce()},i.autoplay))}function Ce(){j&&(clearInterval(j),j=null),Te()}const W=v(!1);function H(n){const S=i.wrapAround?n:he({val:n,max:R.value,min:F.value});m.value===S||W.value||(t("slide-start",{slidingToIndex:n,currentSlideIndex:m.value,prevSlideIndex:w.value,slidesCount:g.value}),W.value=!0,w.value=m.value,m.value=S,de=setTimeout(()=>{if(i.wrapAround){const A=ze({val:S,max:R.value,min:0});A!==m.value&&(m.value=A,t("loop",{currentSlideIndex:m.value,slidingToIndex:n}))}t("update:modelValue",m.value),t("slide-end",{currentSlideIndex:m.value,prevSlideIndex:w.value,slidesCount:g.value}),W.value=!1,Ce()},i.transition))}function ce(){H(m.value+i.itemsToScroll)}function me(){H(m.value-i.itemsToScroll)}const Ne={slideTo:H,next:ce,prev:me};O("nav",Ne),O("isSliding",W);function Me(){ie(),re(),oe(),Ce()}Object.keys(Ve).forEach(n=>{["modelValue"].includes(n)||_e(()=>a[n],Me)}),_e(()=>a.modelValue,n=>{n!==m.value&&H(Number(n))}),_e(g,re),t("before-init");const Oe={config:i,slidesCount:g,slideSize:b,next:ce,prev:me,slideTo:H,currentSlide:m,maxSlide:R,minSlide:F,middleSlide:J};l({updateBreakpointsConfig:ie,updateSlidesData:re,updateSlideSize:oe,restartCarousel:Me,slideTo:H,next:ce,prev:me,nav:Ne,data:Oe});const fe=e.default||e.slides,ge=e.addons,Ie=X(Oe);return()=>{const n=je(fe==null?void 0:fe(Ie)),S=(ge==null?void 0:ge(Ie))||[];n.forEach((q,U)=>q.props.index=U);let A=n;if(i.wrapAround){const q=n.map((ee,K)=>De(ee,{index:-n.length+K,isClone:!0,key:`clone-before-${K}`})),U=n.map((ee,K)=>De(ee,{index:n.length+K,isClone:!0,key:`clone-after-${K}`}));A=[...q,...n,...U]}r.value=n,g.value=Math.max(n.length,1);const k=I(()=>{const q=at({config:i,currentSlide:m.value,slidesCount:g.value}),U=i.wrapAround?g.value:0,K=["rtl","btt"].includes(Q.value)?-1:1,Ye=(q+U)*ye.value*K,Fe=Z.value?z.y:z.x;return`translate${Z.value?"Y":"X"}(${Fe-Ye}px)`}),E=y("ol",{class:"carousel__track",style:{transform:k.value,transition:`${W.value?i.transition:0}ms`,gap:`${i.gap}px`},onMousedownCapture:i.mouseDrag?Ae:null,onTouchstartPassiveCapture:i.touchDrag?Ae:null},A),D=y("div",{class:"carousel__viewport",ref:d},E);return y("section",{ref:s,class:["carousel",`is-${Q.value}`,{"is-vertical":Z.value,"is-sliding":W.value,"is-dragging":pe.value,"is-hover":ue.value}],style:{"--vc-trk-height":`${typeof i.height=="number"?`${i.height}px`:i.height}`},dir:Q.value,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:Ge,onMouseleave:Xe},[D,S,y(lt)])}}}),xe;(function(a){a.arrowUp="arrowUp",a.arrowDown="arrowDown",a.arrowRight="arrowRight",a.arrowLeft="arrowLeft"})(xe||(xe={}));const it={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function rt(a){return a in xe}const be=a=>{const e=h("config",X(Object.assign({},_))),t=String(a.name),l=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!rt(t))return;const o=it[t],s=y("path",{d:o}),d=e.i18n[l]||a.title||t,r=y("title",d);return y("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":d},[r,s])};be.props={name:String,title:String};const Y=(a,{slots:e,attrs:t})=>{const{next:l,prev:o}=e||{},s=h("config",X(Object.assign({},_))),d=h("maxSlide",v(1)),r=h("minSlide",v(1)),b=h("normalizeDir",v("ltr")),g=h("currentSlide",v(1)),C=h("nav",{}),{wrapAround:i,i18n:m}=s,w=()=>({ltr:"arrowLeft",rtl:"arrowRight",ttb:"arrowUp",btt:"arrowDown"})[b.value],J=()=>({ltr:"arrowRight",rtl:"arrowLeft",ttb:"arrowDown",btt:"arrowUp"})[b.value],R=y("button",{type:"button",class:["carousel__prev",!i&&g.value<=r.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":m.ariaPreviousSlide,title:m.ariaPreviousSlide,onClick:C.prev},(o==null?void 0:o())||y(be,{name:w()})),F=y("button",{type:"button",class:["carousel__next",!i&&g.value>=d.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":m.ariaNextSlide,title:m.ariaNextSlide,onClick:C.next},(l==null?void 0:l())||y(be,{name:J()}));return[R,F]},we=()=>{const a=h("config",X(Object.assign({},_))),e=h("maxSlide",v(1)),t=h("minSlide",v(1)),l=h("currentSlide",v(1)),o=h("nav",{}),s=r=>ze({val:l.value,max:e.value,min:0})===r,d=[];for(let r=t.value;r<e.value+1;r++){const b=Ue(a.i18n.ariaNavigateToSlide,{slideNumber:r+1}),g=y("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s(r)},"aria-label":b,title:b,onClick:()=>o.slideTo(r)}),C=y("li",{class:"carousel__pagination-item",key:r},g);d.push(C)}return y("ol",{class:"carousel__pagination"},d)};var L=Se({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(a,{slots:e}){const t=h("config",X(Object.assign({},_))),l=h("currentSlide",v(0)),o=h("slidesToScroll",v(0)),s=h("isSliding",v(!1)),d=h("isVertical",v(!1)),r=h("slideSize",v(0)),b=I(()=>a.index===l.value),g=I(()=>a.index===l.value-1),C=I(()=>a.index===l.value+1),i=I(()=>{const w=Math.floor(o.value),J=Math.ceil(o.value+t.itemsToShow-1);return a.index>=w&&a.index<=J}),m=I(()=>{const w=t.gap?`${r.value}px`:`${100/t.itemsToShow}%`;return d.value?{height:w,width:""}:{width:w,height:""}});return()=>{var w;return y("li",{style:m.value,class:{carousel__slide:!0,"carousel__slide--clone":a.isClone,"carousel__slide--visible":i.value,"carousel__slide--active":b.value,"carousel__slide--prev":g.value,"carousel__slide--next":C.value,"carousel__slide--sliding":s.value},"aria-hidden":!i.value},(w=e.default)===null||w===void 0?void 0:w.call(e,{isActive:b.value,isClone:a.isClone,isPrev:g.value,isNext:C.value,isSliding:s.value,isVisible:i.value}))}}});const st={class:"carousel__item"},ut={__name:"ExampleBasic",setup(a){const e={};return(t,l)=>(x(),le(p(B),te(ae(e)),{addons:f(()=>[u(p(Y)),u(p(we))]),default:f(()=>[(x(),T(N,null,V(10,o=>u(p(L),{key:o},{default:f(()=>[c("div",st,$(o),1)]),_:2},1024)),64))]),_:1},16))}},ct={class:"carousel__item"},dt={__name:"ExampleWrapAround",setup(a){const e={itemsToShow:3,wrapAround:!0,gap:20};return(t,l)=>(x(),le(p(B),te(ae(e)),{addons:f(()=>[u(p(Y)),u(p(we))]),default:f(()=>[(x(),T(N,null,V(10,o=>u(p(L),{key:o},{default:f(()=>[c("div",ct,$(o),1)]),_:2},1024)),64))]),_:1},16))}},vt={style:{resize:"horizontal",border:"2px dashed gray",overflow:"auto"}},pt={class:"carousel__item"},mt={__name:"ExampleBreakpoints",setup(a){const e={itemsToShow:1,snapAlign:"center",breakpointMode:"carousel",breakpoints:{300:{itemsToShow:2,snapAlign:"center"},400:{itemsToShow:3,snapAlign:"start"},500:{itemsToShow:4,snapAlign:"start"}}};return(t,l)=>(x(),T("div",vt,[u(p(B),te(ae(e)),{addons:f(()=>[u(p(Y))]),default:f(()=>[(x(),T(N,null,V(10,o=>u(p(L),{key:o},{default:f(()=>[c("div",pt,$(o),1)]),_:2},1024)),64))]),_:1},16)]))}},ft={class:"carousel__item"},gt={__name:"ExampleAutoplay",setup(a){const e={autoplay:2e3,wrapAround:!0,pauseAutoplayOnHover:!0};return(t,l)=>(x(),le(p(B),te(ae(e)),{addons:f(()=>[u(p(Y))]),default:f(()=>[(x(),T(N,null,V(10,o=>u(p(L),{key:o},{default:f(()=>[c("div",ft,$(o),1)]),_:2},1024)),64))]),_:1},16))}},_t={class:"carousel__item"},ht={__name:"ExampleActiveClasses",setup(a){const e={itemsToShow:3.95,wrapAround:!0,transition:500};return(t,l)=>(x(),le(p(B),te(ae(e)),{addons:f(()=>[u(p(Y))]),default:f(()=>[(x(),T(N,null,V(10,o=>u(p(L),{key:o},{default:f(()=>[c("div",_t,$(o),1)]),_:2},1024)),64))]),_:1},16))}},xt=$e(ht,[["__scopeId","data-v-304b324b"]]),bt={class:"carousel__item"},St={__name:"ExampleCustomNavigation",setup(a){const e=v(),t=v(0),l=()=>e.value.next(),o=()=>e.value.prev();return(s,d)=>(x(),T(N,null,[u(p(B),{ref_key:"carouselRef",ref:e,modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r),snapAlign:"start"},{addons:f(()=>[u(p(Y))]),default:f(()=>[(x(),T(N,null,V(10,r=>u(p(L),{key:r},{default:f(()=>[c("div",bt,$(r-1),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),c("div",null,[c("button",{onClick:o},"Prev"),Ke(c("input",{type:"number",min:"0",max:"9","onUpdate:modelValue":d[1]||(d[1]=r=>t.value=r)},null,512),[[Je,t.value]]),c("button",{onClick:l},"Next")])],64))}},wt={class:"carousel__item"},yt=["onClick"],At={__name:"ExampleGallery",setup(a){const e=v(0),t=s=>e.value=s,l={itemsToShow:1,mouseDrag:!1,touchDrag:!1,wrapAround:!1},o={itemsToShow:7,wrapAround:!0,height:100,gap:10};return(s,d)=>(x(),T(N,null,[u(p(B),Pe({id:"gallery"},l,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=r=>e.value=r)}),{default:f(()=>[(x(),T(N,null,V(10,r=>u(p(L),{key:r},{default:f(()=>[c("div",wt,$(r),1)]),_:2},1024)),64))]),_:1},16,["modelValue"]),u(p(B),Pe({id:"thumbnails"},o,{modelValue:e.value,"onUpdate:modelValue":d[1]||(d[1]=r=>e.value=r)}),{addons:f(()=>[u(p(Y))]),default:f(()=>[(x(),T(N,null,V(10,r=>u(p(L),{key:r},{default:f(()=>[c("div",{class:"carousel__item",onClick:b=>t(r-1)},$(r),9,yt)]),_:2},1024)),64))]),_:1},16,["modelValue"])],64))}},kt={class:"carousel__item"},Et={__name:"ExampleVertical",setup(a){const e={dir:"top-to-bottom",wrapAround:!0,itemsToShow:2,snapAlign:"center",gap:5,height:300};return(t,l)=>(x(),le(p(B),te(ae(e)),{addons:f(()=>[u(p(Y)),u(p(we))]),default:f(()=>[(x(),T(N,null,V(10,o=>u(p(L),{key:o},{default:f(()=>[c("div",kt,$(o),1)]),_:2},1024)),64))]),_:1},16))}},Tt={components:{ExampleBasic:ut,ExampleWrapAround:dt,ExampleBreakpoints:mt,ExampleAutoplay:gt,ExampleActiveClasses:xt,ExampleCustomNavigation:St,ExampleGallery:At,ExampleVertical:Et}},Ot=JSON.parse('{"title":"Test","description":"","frontmatter":{},"headers":[],"relativePath":"test.md","filePath":"test.md"}');function Ct(a,e,t,l,o,s){const d=G("ExampleBasic"),r=G("ExampleWrapAround"),b=G("ExampleVertical"),g=G("ExampleBreakpoints"),C=G("ExampleAutoplay"),i=G("ExampleActiveClasses"),m=G("ExampleCustomNavigation"),w=G("ExampleGallery");return x(),T("div",null,[e[0]||(e[0]=c("h1",{id:"test",tabindex:"-1"},[P("Test "),c("a",{class:"header-anchor",href:"#test","aria-label":'Permalink to "Test"'},"​")],-1)),e[1]||(e[1]=c("h2",{id:"basic",tabindex:"-1"},[P("Basic "),c("a",{class:"header-anchor",href:"#basic","aria-label":'Permalink to "Basic"'},"​")],-1)),u(d),e[2]||(e[2]=c("h2",{id:"wrap-around",tabindex:"-1"},[P("Wrap Around "),c("a",{class:"header-anchor",href:"#wrap-around","aria-label":'Permalink to "Wrap Around"'},"​")],-1)),u(r),e[3]||(e[3]=c("h2",{id:"vertical",tabindex:"-1"},[P("Vertical "),c("a",{class:"header-anchor",href:"#vertical","aria-label":'Permalink to "Vertical"'},"​")],-1)),u(b),e[4]||(e[4]=c("h2",{id:"breakpoints",tabindex:"-1"},[P("Breakpoints "),c("a",{class:"header-anchor",href:"#breakpoints","aria-label":'Permalink to "Breakpoints"'},"​")],-1)),u(g),e[5]||(e[5]=c("h2",{id:"autoplay",tabindex:"-1"},[P("Autoplay "),c("a",{class:"header-anchor",href:"#autoplay","aria-label":'Permalink to "Autoplay"'},"​")],-1)),u(C),e[6]||(e[6]=c("h2",{id:"active-classes",tabindex:"-1"},[P("Active Classes "),c("a",{class:"header-anchor",href:"#active-classes","aria-label":'Permalink to "Active Classes"'},"​")],-1)),u(i),e[7]||(e[7]=c("h2",{id:"custom-navigation",tabindex:"-1"},[P("Custom Navigation "),c("a",{class:"header-anchor",href:"#custom-navigation","aria-label":'Permalink to "Custom Navigation"'},"​")],-1)),u(m),e[8]||(e[8]=c("h2",{id:"gallery",tabindex:"-1"},[P("Gallery "),c("a",{class:"header-anchor",href:"#gallery","aria-label":'Permalink to "Gallery"'},"​")],-1)),u(w)])}const It=$e(Tt,[["render",Ct]]);export{Ot as __pageData,It as default};
