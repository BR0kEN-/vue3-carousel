import{d as he,p,h as W,a1 as L,V as O,v as Ue,P as ze,x as We,q as me,a2 as Ne,a3 as x,L as h,F as T,o as b,b as ne,w as f,k as _,G as v,c as k,C as D,j as d,t as $,a4 as oe,a5 as le,_ as Me,B,a6 as Xe,a7 as Fe,K as Oe,a as I}from"./chunks/framework.BE4B_uXE.js";/**
 * Vue 3 Carousel 0.4.0
 * (c) 2024
 * @license MIT
 */const Ie=["center","start","end","center-even","center-odd"],Be=["viewport","carousel"],Le=["ltr","rtl"],Ye={ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"},g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,throttle:16,wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,snapAlign:Ie[0],dir:Le[0],breakpointMode:Be[0],breakpoints:void 0,i18n:Ye},Pe={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},throttle:{default:g.throttle,type:Number},snapAlign:{default:g.snapAlign,validator(a){return Ie.includes(a)}},transition:{default:g.transition,type:Number},breakpointMode:{default:g.breakpointMode,validator(a){return Be.includes(a)}},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(a){return Le.includes(a)}},i18n:{default:g.i18n,type:Object}};function He({config:a,slidesCount:e}){const{snapAlign:t,wrapAround:o,itemsToShow:n=1}=a;if(o)return Math.max(e-1,0);let r;switch(t){case"start":r=e-n;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((n-.5)/2);break;case"center-even":r=e-Math.ceil(n/2);break;default:r=0;break}return Math.max(r,0)}function Ke({config:a,slidesCount:e}){const{wrapAround:t,snapAlign:o,itemsToShow:n=1}=a;let r=0;if(t||n>e)return r;switch(o){case"start":r=0;break;case"end":r=n-1;break;case"center":case"center-odd":r=Math.floor((n-1)/2);break;case"center-even":r=Math.floor((n-2)/2);break;default:r=0;break}return r}function fe({val:a,max:e,min:t}){return e<t?a:Math.min(Math.max(a,t),e)}function qe({config:a,currentSlide:e,slidesCount:t}){const{snapAlign:o,wrapAround:n,itemsToShow:r=1}=a;let c=e;switch(o){case"center":case"center-odd":c-=(r-1)/2;break;case"center-even":c-=(r-2)/2;break;case"end":c-=r-1;break}return n?c:fe({val:c,max:t-r,min:0})}function De(a){return a?a.reduce((e,t)=>{var o;return t.type===T?[...e,...De(t.children)]:((o=t.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function $e({val:a,max:e,min:t=0}){const o=e-t+1;return((a-t)%o+o)%o+t}function Je(a,e){let t;return e?function(...o){const n=this;t||(a.apply(n,o),t=!0,setTimeout(()=>t=!1,e))}:a}function Qe(a,e){let t;return function(...o){t&&clearTimeout(t),t=setTimeout(()=>{a(...o),t=null},e)}}function Ve(a="",e={}){return Object.entries(e).reduce((t,[o,n])=>t.replace(`{${o}}`,String(n)),a)}var Ze=he({name:"ARIA",setup(){const a=h("config",L(Object.assign({},g))),e=h("currentSlide",p(0)),t=h("slidesCount",p(0));return()=>x("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ve(a.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),V=he({name:"Carousel",props:Pe,setup(a,{slots:e,emit:t,expose:o}){var n;const r=p(null),c=p([]),s=p(0),u=p(0),S=W(()=>Object.assign(Object.assign(Object.assign({},g),a),{i18n:Object.assign(Object.assign({},g.i18n),a.i18n),breakpoints:void 0})),i=L(Object.assign({},S.value)),m=p((n=a.modelValue)!==null&&n!==void 0?n:0),C=p(0),Y=p(0),P=p(0),R=p(0);let X=null,re=null,H=null;O("config",i),O("slidesCount",u),O("currentSlide",m),O("maxSlide",P),O("minSlide",R),O("slideWidth",s);function J(){var l;if(!a.breakpoints)return;const w=(i.breakpointMode==="carousel"?(l=r.value)===null||l===void 0?void 0:l.getBoundingClientRect().width:window.innerWidth)||0,A=Object.keys(a.breakpoints||{}).map(E=>Number(E)).sort((E,N)=>+N-+E);let M=Object.assign({},S.value);A.some(E=>{var N;return w>=E?(M=Object.assign(Object.assign({},M),(N=a.breakpoints)===null||N===void 0?void 0:N[E]),!0):!1}),Object.assign(i,M)}const ie=Qe(()=>{J(),Q(),K()},16);function K(){if(!r.value)return;const l=r.value.getBoundingClientRect();s.value=l.width/i.itemsToShow}function Q(){u.value<=0||(Y.value=Math.ceil((u.value-1)/2),P.value=He({config:i,slidesCount:u.value}),R.value=Ke({config:i,slidesCount:u.value}),i.wrapAround||(m.value=fe({val:m.value,max:P.value,min:R.value})))}Ue(()=>{ze(()=>K()),setTimeout(()=>K(),1e3),J(),we(),window.addEventListener("resize",ie,{passive:!0}),H=new ResizeObserver(ie),r.value&&H.observe(r.value),t("init")}),We(()=>{re&&clearTimeout(re),X&&clearInterval(X),H&&r.value&&(H.unobserve(r.value),H=null),window.removeEventListener("resize",ie,{passive:!0})});let y=!1;const Z={x:0,y:0},ee={x:0,y:0},G=L({x:0,y:0}),te=p(!1),se=p(!1),je=()=>{te.value=!0},Re=()=>{te.value=!1};function xe(l){["INPUT","TEXTAREA","SELECT"].includes(l.target.tagName)||(y=l.type==="touchstart",y||l.preventDefault(),!(!y&&l.button!==0||U.value)&&(Z.x=y?l.touches[0].clientX:l.clientX,Z.y=y?l.touches[0].clientY:l.clientY,document.addEventListener(y?"touchmove":"mousemove",be),document.addEventListener(y?"touchend":"mouseup",Se)))}const be=Je(l=>{se.value=!0,ee.x=y?l.touches[0].clientX:l.clientX,ee.y=y?l.touches[0].clientY:l.clientY;const w=ee.x-Z.x,A=ee.y-Z.y;G.y=A,G.x=w},i.throttle);function Se(){const l=i.dir==="rtl"?-1:1,w=Math.sign(G.x)*.4,A=Math.round(G.x/s.value+w)*l;if(A&&!y){const M=E=>{E.preventDefault(),window.removeEventListener("click",M)};window.addEventListener("click",M)}z(m.value-A),G.x=0,G.y=0,se.value=!1,document.removeEventListener(y?"touchmove":"mousemove",be),document.removeEventListener(y?"touchend":"mouseup",Se)}function we(){!i.autoplay||i.autoplay<=0||(X=setInterval(()=>{i.pauseAutoplayOnHover&&te.value||ae()},i.autoplay))}function ye(){X&&(clearInterval(X),X=null),we()}const U=p(!1);function z(l){const w=i.wrapAround?l:fe({val:l,max:P.value,min:R.value});m.value===w||U.value||(t("slide-start",{slidingToIndex:l,currentSlideIndex:m.value,prevSlideIndex:C.value,slidesCount:u.value}),U.value=!0,C.value=m.value,m.value=w,re=setTimeout(()=>{if(i.wrapAround){const A=$e({val:w,max:P.value,min:0});A!==m.value&&(m.value=A,t("loop",{currentSlideIndex:m.value,slidingToIndex:l}))}t("update:modelValue",m.value),t("slide-end",{currentSlideIndex:m.value,prevSlideIndex:C.value,slidesCount:u.value}),U.value=!1,ye()},i.transition))}function ae(){z(m.value+i.itemsToScroll)}function ue(){z(m.value-i.itemsToScroll)}const Ae={slideTo:z,next:ae,prev:ue};O("nav",Ae),O("isSliding",U);const ke=W(()=>qe({config:i,currentSlide:m.value,slidesCount:u.value}));O("slidesToScroll",ke);const Ge=W(()=>{const l=i.dir==="rtl"?-1:1,w=ke.value*s.value*l;return{transform:`translateX(${G.x-w}px)`,transition:`${U.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${u.value*s.value}px`:"",width:"100%"}});function Te(){J(),Q(),K(),ye()}Object.keys(Pe).forEach(l=>{["modelValue"].includes(l)||me(()=>a[l],Te)}),me(()=>a.modelValue,l=>{l!==m.value&&z(Number(l))}),me(u,Q),t("before-init");const Ce={config:i,slidesCount:u,slideWidth:s,next:ae,prev:ue,slideTo:z,currentSlide:m,maxSlide:P,minSlide:R,middleSlide:Y};o({updateBreakpointsConfig:J,updateSlidesData:Q,updateSlideWidth:K,restartCarousel:Te,slideTo:z,next:ae,prev:ue,nav:Ae,data:Ce});const ce=e.default||e.slides,de=e.addons,Ee=L(Ce);return()=>{const l=De(ce==null?void 0:ce(Ee)),w=(de==null?void 0:de(Ee))||[];l.forEach((N,ve)=>N.props.index=ve);let A=l;if(i.wrapAround){const N=l.map((pe,q)=>Ne(pe,{index:-l.length+q,isClone:!0,key:`clone-before-${q}`})),ve=l.map((pe,q)=>Ne(pe,{index:l.length+q,isClone:!0,key:`clone-after-${q}`}));A=[...N,...l,...ve]}c.value=l,u.value=Math.max(l.length,1);const M=x("ol",{class:"carousel__track",style:Ge.value,onMousedownCapture:i.mouseDrag?xe:null,onTouchstartPassiveCapture:i.touchDrag?xe:null},A),E=x("div",{class:"carousel__viewport"},M);return x("section",{ref:r,class:{carousel:!0,"is-sliding":U.value,"is-dragging":se.value,"is-hover":te.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:je,onMouseleave:Re},[E,w,x(Ze)])}}}),_e;(function(a){a.arrowUp="arrowUp",a.arrowDown="arrowDown",a.arrowRight="arrowRight",a.arrowLeft="arrowLeft"})(_e||(_e={}));const et={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function tt(a){return a in _e}const ge=a=>{const e=h("config",L(Object.assign({},g))),t=String(a.name),o=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!tt(t))return;const n=et[t],r=x("path",{d:n}),c=e.i18n[o]||a.title||t,s=x("title",c);return x("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":c},[s,r])};ge.props={name:String,title:String};const F=(a,{slots:e,attrs:t})=>{const{next:o,prev:n}=e||{},r=h("config",L(Object.assign({},g))),c=h("maxSlide",p(1)),s=h("minSlide",p(1)),u=h("currentSlide",p(1)),S=h("nav",{}),{dir:i,wrapAround:m,i18n:C}=r,Y=i==="rtl",P=x("button",{type:"button",class:["carousel__prev",!m&&u.value<=s.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":C.ariaPreviousSlide,title:C.ariaPreviousSlide,onClick:S.prev},(n==null?void 0:n())||x(ge,{name:Y?"arrowRight":"arrowLeft"})),R=x("button",{type:"button",class:["carousel__next",!m&&u.value>=c.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":C.ariaNextSlide,title:C.ariaNextSlide,onClick:S.next},(o==null?void 0:o())||x(ge,{name:Y?"arrowLeft":"arrowRight"}));return[P,R]},at=()=>{const a=h("config",L(Object.assign({},g))),e=h("maxSlide",p(1)),t=h("minSlide",p(1)),o=h("currentSlide",p(1)),n=h("nav",{}),r=s=>$e({val:o.value,max:e.value,min:0})===s,c=[];for(let s=t.value;s<e.value+1;s++){const u=Ve(a.i18n.ariaNavigateToSlide,{slideNumber:s+1}),S=x("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(s)},"aria-label":u,title:u,onClick:()=>n.slideTo(s)}),i=x("li",{class:"carousel__pagination-item",key:s},S);c.push(i)}return x("ol",{class:"carousel__pagination"},c)};var j=he({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(a,{slots:e}){const t=h("config",L(Object.assign({},g))),o=h("currentSlide",p(0)),n=h("slidesToScroll",p(0)),r=h("isSliding",p(!1)),c=W(()=>a.index===o.value),s=W(()=>a.index===o.value-1),u=W(()=>a.index===o.value+1),S=W(()=>{const i=Math.floor(n.value),m=Math.ceil(n.value+t.itemsToShow-1);return a.index>=i&&a.index<=m});return()=>{var i;return x("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":a.isClone,"carousel__slide--visible":S.value,"carousel__slide--active":c.value,"carousel__slide--prev":s.value,"carousel__slide--next":u.value,"carousel__slide--sliding":r.value},"aria-hidden":!S.value},(i=e.default)===null||i===void 0?void 0:i.call(e,{isActive:c.value,isClone:a.isClone,isPrev:s.value,isNext:u.value,isSliding:r.value,isVisible:S.value}))}}});const nt={class:"carousel__item"},ot={__name:"ExampleBasic",setup(a){return(e,t)=>(b(),ne(_(V),null,{addons:f(()=>[v(_(F)),v(_(at))]),default:f(()=>[(b(),k(T,null,D(10,o=>v(_(j),{key:o},{default:f(()=>[d("div",nt,$(o),1)]),_:2},1024)),64))]),_:1}))}},lt={class:"carousel__item"},rt={__name:"ExampleWrapAround",setup(a){const e={itemsToShow:2.5,wrapAround:!0};return(t,o)=>(b(),ne(_(V),oe(le(e)),{addons:f(()=>[v(_(F))]),default:f(()=>[(b(),k(T,null,D(10,n=>v(_(j),{key:n},{default:f(()=>[d("div",lt,$(n),1)]),_:2},1024)),64))]),_:1},16))}},it={style:{resize:"horizontal",border:"2px dashed gray",overflow:"auto"}},st={class:"carousel__item"},ut={__name:"ExampleBreakpoints",setup(a){const e={itemsToShow:1,snapAlign:"center",breakpointMode:"carousel",breakpoints:{300:{itemsToShow:2,snapAlign:"center"},400:{itemsToShow:3,snapAlign:"start"},500:{itemsToShow:4,snapAlign:"start"}}};return(t,o)=>(b(),k("div",it,[v(_(V),oe(le(e)),{addons:f(()=>[v(_(F))]),default:f(()=>[(b(),k(T,null,D(10,n=>v(_(j),{key:n},{default:f(()=>[d("div",st,$(n),1)]),_:2},1024)),64))]),_:1},16)]))}},ct={class:"carousel__item"},dt={__name:"ExampleAutoplay",setup(a){const e={autoplay:2e3,wrapAround:!0,pauseAutoplayOnHover:!0};return(t,o)=>(b(),ne(_(V),oe(le(e)),{addons:f(()=>[v(_(F))]),default:f(()=>[(b(),k(T,null,D(10,n=>v(_(j),{key:n},{default:f(()=>[d("div",ct,$(n),1)]),_:2},1024)),64))]),_:1},16))}},vt={class:"carousel__item"},pt={__name:"ExampleActiveClasses",setup(a){const e={itemsToShow:3.95,wrapAround:!0,transition:500};return(t,o)=>(b(),ne(_(V),oe(le(e)),{addons:f(()=>[v(_(F))]),default:f(()=>[(b(),k(T,null,D(10,n=>v(_(j),{key:n},{default:f(()=>[d("div",vt,$(n),1)]),_:2},1024)),64))]),_:1},16))}},mt=Me(pt,[["__scopeId","data-v-4c39cc47"]]),ft={class:"carousel__item"},_t={__name:"ExampleCustomNavigation",setup(a){const e=p(),t=p(0),o=()=>e.value.next(),n=()=>e.value.prev();return(r,c)=>{const s=B("Navigation");return b(),k(T,null,[v(_(V),{ref_key:"carouselRef",ref:e,modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=u=>t.value=u),snapAlign:"start"},{addons:f(()=>[v(s)]),default:f(()=>[(b(),k(T,null,D(10,u=>v(_(j),{key:u},{default:f(()=>[d("div",ft,$(u-1),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),d("div",null,[d("button",{onClick:n},"Prev"),Xe(d("input",{type:"number",min:"0",max:"9","onUpdate:modelValue":c[1]||(c[1]=u=>t.value=u)},null,512),[[Fe,t.value]]),d("button",{onClick:o},"Next")])],64)}}},gt={class:"carousel__item"},ht=["onClick"],xt={__name:"ExampleGallery",setup(a){const e=p(0),t=r=>e.value=r,o={itemsToShow:1,mouseDrag:!1,touchDrag:!1,wrapAround:!1},n={itemsToShow:4,wrapAround:!0};return(r,c)=>(b(),k(T,null,[v(_(V),Oe({id:"gallery"},o,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=s=>e.value=s)}),{default:f(()=>[(b(),k(T,null,D(10,s=>v(_(j),{key:s},{default:f(()=>[d("div",gt,$(s),1)]),_:2},1024)),64))]),_:1},16,["modelValue"]),v(_(V),Oe({id:"thumbnails"},n,{modelValue:e.value,"onUpdate:modelValue":c[1]||(c[1]=s=>e.value=s)}),{addons:f(()=>[v(_(F))]),default:f(()=>[(b(),k(T,null,D(10,s=>v(_(j),{key:s},{default:f(()=>[d("div",{class:"carousel__item",onClick:u=>t(s-1)},$(s),9,ht)]),_:2},1024)),64))]),_:1},16,["modelValue"])],64))}},bt={components:{ExampleBasic:ot,ExampleWrapAround:rt,ExampleBreakpoints:ut,ExampleAutoplay:dt,ExampleActiveClasses:mt,ExampleCustomNavigation:_t,ExampleGallery:xt}},yt=JSON.parse('{"title":"Test","description":"","frontmatter":{},"headers":[],"relativePath":"test.md","filePath":"test.md"}');function St(a,e,t,o,n,r){const c=B("ExampleBasic"),s=B("ExampleWrapAround"),u=B("ExampleBreakpoints"),S=B("ExampleAutoplay"),i=B("ExampleActiveClasses"),m=B("ExampleCustomNavigation"),C=B("ExampleGallery");return b(),k("div",null,[e[0]||(e[0]=d("h1",{id:"test",tabindex:"-1"},[I("Test "),d("a",{class:"header-anchor",href:"#test","aria-label":'Permalink to "Test"'},"​")],-1)),e[1]||(e[1]=d("h2",{id:"basic",tabindex:"-1"},[I("Basic "),d("a",{class:"header-anchor",href:"#basic","aria-label":'Permalink to "Basic"'},"​")],-1)),v(c),e[2]||(e[2]=d("h2",{id:"wrap-around",tabindex:"-1"},[I("Wrap Around "),d("a",{class:"header-anchor",href:"#wrap-around","aria-label":'Permalink to "Wrap Around"'},"​")],-1)),v(s),e[3]||(e[3]=d("h2",{id:"breakpoints",tabindex:"-1"},[I("Breakpoints "),d("a",{class:"header-anchor",href:"#breakpoints","aria-label":'Permalink to "Breakpoints"'},"​")],-1)),v(u),e[4]||(e[4]=d("h2",{id:"autoplay",tabindex:"-1"},[I("Autoplay "),d("a",{class:"header-anchor",href:"#autoplay","aria-label":'Permalink to "Autoplay"'},"​")],-1)),v(S),e[5]||(e[5]=d("h2",{id:"active-classes",tabindex:"-1"},[I("Active Classes "),d("a",{class:"header-anchor",href:"#active-classes","aria-label":'Permalink to "Active Classes"'},"​")],-1)),v(i),e[6]||(e[6]=d("h2",{id:"custom-navigation",tabindex:"-1"},[I("Custom Navigation "),d("a",{class:"header-anchor",href:"#custom-navigation","aria-label":'Permalink to "Custom Navigation"'},"​")],-1)),v(m),e[7]||(e[7]=d("h2",{id:"gallery",tabindex:"-1"},[I("Gallery "),d("a",{class:"header-anchor",href:"#gallery","aria-label":'Permalink to "Gallery"'},"​")],-1)),v(C)])}const At=Me(bt,[["render",St]]);export{yt as __pageData,At as default};
