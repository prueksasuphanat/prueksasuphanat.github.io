import{s as f}from"./Djom6ppP.js";import{s as y,a as b}from"./Dqme8RxB.js";import{s as O}from"./ByiReGL2.js";import{s as v}from"./CGLsRH6x.js";import{Q as P,S as $,g as B,W as k,I as u,x as i,B as C,G as d,y as g,X as s,E as c,v as m,D as j,Y as D,P as A,_ as T}from"./DINBRRAG.js";import{s as E}from"./yNl2pqR5.js";import"./BLjQKPuH.js";var N={root:function(t){var o=t.props;return"p-message p-component p-message-"+o.severity},wrapper:"p-message-wrapper",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close p-link",closeIcon:"p-message-close-icon"},L=P.extend({name:"message",classes:N}),M={name:"BaseMessage",extends:E,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:L,provide:function(){return{$parentInstance:this}}},K={name:"Message",extends:M,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},watch:{sticky:function(t){t||this.closeAfterDelay()}},mounted:function(){this.sticky||this.closeAfterDelay()},methods:{close:function(t){this.visible=!1,this.$emit("close",t)},closeAfterDelay:function(){var t=this;setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)}},computed:{iconComponent:function(){return{info:b,success:f,warn:y,error:v}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:$},components:{TimesIcon:O,InfoCircleIcon:b,CheckIcon:f,ExclamationTriangleIcon:y,TimesCircleIcon:v}};function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(e)}function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?h(Object(o),!0).forEach(function(r){V(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function V(e,t,o){return t=G(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function G(e){var t=Q(e,"string");return l(t)=="symbol"?t:String(t)}function Q(e,t){if(l(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t);if(l(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var R=["aria-label"];function W(e,t,o,r,p,a){var I=B("TimesIcon"),w=k("ripple");return i(),u(T,s({name:"p-message",appear:""},e.ptmi("transition")),{default:C(function(){return[d(g("div",s({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root")),[e.$slots.container?c(e.$slots,"container",{key:0,onClose:a.close,closeCallback:a.close}):(i(),m("div",s({key:1,class:e.cx("wrapper")},e.ptm("wrapper")),[c(e.$slots,"messageicon",{class:"p-message-icon"},function(){return[(i(),u(D(e.icon?"span":a.iconComponent),s({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),g("div",s({class:["p-message-text",e.cx("text")]},e.ptm("text")),[c(e.$slots,"default")],16),e.closable?d((i(),m("button",s({key:0,class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(S){return a.close(S)})},n(n(n({},e.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[c(e.$slots,"closeicon",{},function(){return[e.closeIcon?(i(),m("i",s({key:0,class:[e.cx("closeIcon"),e.closeIcon]},n(n({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16)):(i(),u(I,s({key:1,class:[e.cx("closeIcon"),e.closeIcon]},n(n({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))]})],16,R)),[[w]]):j("",!0)],16))],16),[[A,p.visible]])]}),_:3},16)}K.render=W;export{K as default};
