import{d as oe,p as u,h as M,a5 as T,V as x,v as Ce,P as Oe,x as Me,q as Z,a6 as ge,a7 as m,L as p,F as be,o as he,b as Ie,w as ee,k as $,G as te,c as Le,C as Ee,j as De,t as je}from"./framework.CH_Jd00V.js";/**
 * Vue 3 Carousel 0.4.0
 * (c) 2024
 * @license MIT
 */const we=["center","start","end","center-even","center-odd"],_e=["viewport","carousel"],xe=["ltr","rtl"],Pe={ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"},d={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,throttle:16,wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,snapAlign:we[0],dir:xe[0],breakpointMode:_e[0],breakpoints:void 0,i18n:Pe},Se={itemsToShow:{default:d.itemsToShow,type:Number},itemsToScroll:{default:d.itemsToScroll,type:Number},wrapAround:{default:d.wrapAround,type:Boolean},throttle:{default:d.throttle,type:Number},snapAlign:{default:d.snapAlign,validator(e){return we.includes(e)}},transition:{default:d.transition,type:Number},breakpointMode:{default:d.breakpointMode,validator(e){return _e.includes(e)}},breakpoints:{default:d.breakpoints,type:Object},autoplay:{default:d.autoplay,type:Number},pauseAutoplayOnHover:{default:d.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:d.mouseDrag,type:Boolean},touchDrag:{default:d.touchDrag,type:Boolean},dir:{default:d.dir,validator(e){return xe.includes(e)}},i18n:{default:d.i18n,type:Object}};function Be({config:e,slidesCount:n}){const{snapAlign:t,wrapAround:l,itemsToShow:r=1}=e;if(l)return Math.max(n-1,0);let i;switch(t){case"start":i=n-r;break;case"end":i=n-1;break;case"center":case"center-odd":i=n-Math.ceil((r-.5)/2);break;case"center-even":i=n-Math.ceil(r/2);break;default:i=0;break}return Math.max(i,0)}function Re({config:e,slidesCount:n}){const{wrapAround:t,snapAlign:l,itemsToShow:r=1}=e;let i=0;if(t||r>n)return i;switch(l){case"start":i=0;break;case"end":i=r-1;break;case"center":case"center-odd":i=Math.floor((r-1)/2);break;case"center-even":i=Math.floor((r-2)/2);break;default:i=0;break}return i}function ne({val:e,max:n,min:t}){return n<t?e:Math.min(Math.max(e,t),n)}function Ve({config:e,currentSlide:n,slidesCount:t}){const{snapAlign:l,wrapAround:r,itemsToShow:i=1}=e;let f=n;switch(l){case"center":case"center-odd":f-=(i-1)/2;break;case"center-even":f-=(i-2)/2;break;case"end":f-=i-1;break}return r?f:ne({val:f,max:t-i,min:0})}function ye(e){return e?e.reduce((n,t)=>{var l;return t.type===be?[...n,...ye(t.children)]:((l=t.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...n,t]:n},[]):[]}function F({val:e,max:n,min:t=0}){return e>n?F({val:e-(n+1),max:n,min:t}):e<t?F({val:e+(n+1),max:n,min:t}):e}function ze(e,n){let t;return n?function(...l){const r=this;t||(e.apply(r,l),t=!0,setTimeout(()=>t=!1,n))}:e}function Ue(e,n){let t;return function(...l){t&&clearTimeout(t),t=setTimeout(()=>{e(...l),t=null},n)}}function Ae(e="",n={}){return Object.entries(n).reduce((t,[l,r])=>t.replace(`{${l}}`,String(r)),e)}var Xe=oe({name:"ARIA",setup(){const e=p("config",T(Object.assign({},d))),n=p("currentSlide",u(0)),t=p("slidesCount",u(0));return()=>m("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ae(e.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:t.value}))}}),$e=oe({name:"Carousel",props:Se,setup(e,{slots:n,emit:t,expose:l}){var r;const i=u(null),f=u([]),c=u(0),v=u(0),b=M(()=>Object.assign(Object.assign(Object.assign({},d),e),{i18n:Object.assign(Object.assign({},d.i18n),e.i18n),breakpoints:void 0})),o=T(Object.assign({},b.value)),s=u((r=e.modelValue)!==null&&r!==void 0?r:0),I=u(0),E=u(0),y=u(0),k=u(0);let L=null,G=null,D=null;x("config",o),x("slidesCount",v),x("currentSlide",s),x("maxSlide",y),x("minSlide",k),x("slideWidth",c);function B(){var a;if(!e.breakpoints)return;const g=(o.breakpointMode==="carousel"?(a=i.value)===null||a===void 0?void 0:a.getBoundingClientRect().width:window.innerWidth)||0,S=Object.keys(e.breakpoints||{}).map(w=>Number(w)).sort((w,_)=>+_-+w);let A=Object.assign({},b.value);S.some(w=>{var _;return g>=w?(A=Object.assign(Object.assign({},A),(_=e.breakpoints)===null||_===void 0?void 0:_[w]),!0):!1}),Object.assign(o,A)}const Y=Ue(()=>{B(),R(),j()},16);function j(){if(!i.value)return;const a=i.value.getBoundingClientRect();c.value=a.width/o.itemsToShow}function R(){v.value<=0||(E.value=Math.ceil((v.value-1)/2),y.value=Be({config:o,slidesCount:v.value}),k.value=Re({config:o,slidesCount:v.value}),o.wrapAround||(s.value=ne({val:s.value,max:y.value,min:k.value})))}Ce(()=>{Oe(()=>j()),setTimeout(()=>j(),1e3),B(),ue(),window.addEventListener("resize",Y,{passive:!0}),D=new ResizeObserver(Y),i.value&&D.observe(i.value),t("init")}),Me(()=>{G&&clearTimeout(G),L&&clearInterval(L),D&&i.value&&(D.unobserve(i.value),D=null),window.removeEventListener("resize",Y,{passive:!0})});let h=!1;const V={x:0,y:0},z={x:0,y:0},N=T({x:0,y:0}),U=u(!1),H=u(!1),Te=()=>{U.value=!0},ke=()=>{U.value=!1};function le(a){["INPUT","TEXTAREA","SELECT"].includes(a.target.tagName)||(h=a.type==="touchstart",h||a.preventDefault(),!(!h&&a.button!==0||C.value)&&(V.x=h?a.touches[0].clientX:a.clientX,V.y=h?a.touches[0].clientY:a.clientY,document.addEventListener(h?"touchmove":"mousemove",re),document.addEventListener(h?"touchend":"mouseup",se)))}const re=ze(a=>{H.value=!0,z.x=h?a.touches[0].clientX:a.clientX,z.y=h?a.touches[0].clientY:a.clientY;const g=z.x-V.x,S=z.y-V.y;N.y=S,N.x=g},o.throttle);function se(){const a=o.dir==="rtl"?-1:1,g=Math.sign(N.x)*.4,S=Math.round(N.x/c.value+g)*a;if(S&&!h){const A=w=>{w.preventDefault(),window.removeEventListener("click",A)};window.addEventListener("click",A)}O(s.value-S),N.x=0,N.y=0,H.value=!1,document.removeEventListener(h?"touchmove":"mousemove",re),document.removeEventListener(h?"touchend":"mouseup",se)}function ue(){!o.autoplay||o.autoplay<=0||(L=setInterval(()=>{o.pauseAutoplayOnHover&&U.value||X()},o.autoplay))}function ce(){L&&(clearInterval(L),L=null),ue()}const C=u(!1);function O(a){const g=o.wrapAround?a:ne({val:a,max:y.value,min:k.value});s.value===g||C.value||(t("slide-start",{slidingToIndex:a,currentSlideIndex:s.value,prevSlideIndex:I.value,slidesCount:v.value}),C.value=!0,I.value=s.value,s.value=g,G=setTimeout(()=>{if(o.wrapAround){const S=F({val:g,max:y.value,min:0});S!==s.value&&(s.value=S,t("loop",{currentSlideIndex:s.value,slidingToIndex:a}))}t("update:modelValue",s.value),t("slide-end",{currentSlideIndex:s.value,prevSlideIndex:I.value,slidesCount:v.value}),C.value=!1,ce()},o.transition))}function X(){O(s.value+o.itemsToScroll)}function W(){O(s.value-o.itemsToScroll)}const de={slideTo:O,next:X,prev:W};x("nav",de),x("isSliding",C);const ve=M(()=>Ve({config:o,currentSlide:s.value,slidesCount:v.value}));x("slidesToScroll",ve);const Ne=M(()=>{const a=o.dir==="rtl"?-1:1,g=ve.value*c.value*a;return{transform:`translateX(${N.x-g}px)`,transition:`${C.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${v.value*c.value}px`:"",width:"100%"}});function fe(){B(),R(),j(),ce()}Object.keys(Se).forEach(a=>{["modelValue"].includes(a)||Z(()=>e[a],fe)}),Z(()=>e.modelValue,a=>{a!==s.value&&O(Number(a))}),Z(v,R),t("before-init");const pe={config:o,slidesCount:v,slideWidth:c,next:X,prev:W,slideTo:O,currentSlide:s,maxSlide:y,minSlide:k,middleSlide:E};l({updateBreakpointsConfig:B,updateSlidesData:R,updateSlideWidth:j,restartCarousel:fe,slideTo:O,next:X,prev:W,nav:de,data:pe});const q=n.default||n.slides,K=n.addons,me=T(pe);return()=>{const a=ye(q==null?void 0:q(me)),g=(K==null?void 0:K(me))||[];a.forEach((_,J)=>_.props.index=J);let S=a;if(o.wrapAround){const _=a.map((Q,P)=>ge(Q,{index:-a.length+P,isClone:!0,key:`clone-before-${P}`})),J=a.map((Q,P)=>ge(Q,{index:a.length+P,isClone:!0,key:`clone-after-${P}`}));S=[..._,...a,...J]}f.value=a,v.value=Math.max(a.length,1);const A=m("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:o.mouseDrag?le:null,onTouchstartPassiveCapture:o.touchDrag?le:null},S),w=m("div",{class:"carousel__viewport"},A);return m("section",{ref:i,class:{carousel:!0,"is-sliding":C.value,"is-dragging":H.value,"is-hover":U.value,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":o.i18n.ariaGallery,tabindex:"0",onMouseenter:Te,onMouseleave:ke},[w,g,m(Xe)])}}}),ae;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(ae||(ae={}));const Fe={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Ge(e){return e in ae}const ie=e=>{const n=p("config",T(Object.assign({},d))),t=String(e.name),l=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Ge(t))return;const r=Fe[t],i=m("path",{d:r}),f=n.i18n[l]||e.title||t,c=m("title",f);return m("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":f},[c,i])};ie.props={name:String,title:String};const Ye=(e,{slots:n,attrs:t})=>{const{next:l,prev:r}=n||{},i=p("config",T(Object.assign({},d))),f=p("maxSlide",u(1)),c=p("minSlide",u(1)),v=p("currentSlide",u(1)),b=p("nav",{}),{dir:o,wrapAround:s,i18n:I}=i,E=o==="rtl",y=m("button",{type:"button",class:["carousel__prev",!s&&v.value<=c.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":I.ariaPreviousSlide,onClick:b.prev},(r==null?void 0:r())||m(ie,{name:E?"arrowRight":"arrowLeft"})),k=m("button",{type:"button",class:["carousel__next",!s&&v.value>=f.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":I.ariaNextSlide,onClick:b.next},(l==null?void 0:l())||m(ie,{name:E?"arrowLeft":"arrowRight"}));return[y,k]},He=()=>{const e=p("config",T(Object.assign({},d))),n=p("maxSlide",u(1)),t=p("minSlide",u(1)),l=p("currentSlide",u(1)),r=p("nav",{}),i=c=>F({val:l.value,max:n.value,min:0})===c,f=[];for(let c=t.value;c<n.value+1;c++){const v=m("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(c)},"aria-label":Ae(e.i18n.ariaNavigateToSlide,{slideNumber:c+1}),onClick:()=>r.slideTo(c)}),b=m("li",{class:"carousel__pagination-item",key:c},v);f.push(b)}return m("ol",{class:"carousel__pagination"},f)};var We=oe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=p("config",T(Object.assign({},d))),l=p("currentSlide",u(0)),r=p("slidesToScroll",u(0)),i=p("isSliding",u(!1)),f=M(()=>e.index===l.value),c=M(()=>e.index===l.value-1),v=M(()=>e.index===l.value+1),b=M(()=>{const o=Math.floor(r.value),s=Math.ceil(r.value+t.itemsToShow-1);return e.index>=o&&e.index<=s});return()=>{var o;return m("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":b.value,"carousel__slide--active":f.value,"carousel__slide--prev":c.value,"carousel__slide--next":v.value,"carousel__slide--sliding":i.value},"aria-hidden":!b.value},(o=n.default)===null||o===void 0?void 0:o.call(n,{isActive:f.value,isClone:e.isClone,isPrev:c.value,isNext:v.value,isSliding:i.value,isVisible:b.value}))}}});const qe={class:"carousel__item"},Je={__name:"ExampleBasic",setup(e){return(n,t)=>(he(),Ie($($e),null,{addons:ee(()=>[te($(Ye)),te($(He))]),default:ee(()=>[(he(),Le(be,null,Ee(10,l=>te($(We),{key:l},{default:ee(()=>[De("div",qe,je(l),1)]),_:2},1024)),64))]),_:1}))}};export{$e as C,Ye as N,We as S,Je as _};
