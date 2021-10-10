/*! For license information please see component---src-pages-index-tsx-99a3c978a649c0b8922b.js.LICENSE.txt */
"use strict";(self.webpackChunklubycon_home=self.webpackChunklubycon_home||[]).push([[691],{664:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7462),i=n(3366),o=n(7294),a=n(5505),c=n(600),s=n(8348),l=n(7761),u=n(8953),d=n(2717);function h(e){return(0,d.Z)("MuiCard",e)}(0,n(5495).Z)("MuiCard",["root"]);var f=n(5893),m=["className","raised"],p=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),v=o.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCard"}),o=n.className,s=n.raised,u=void 0!==s&&s,d=(0,i.Z)(n,m),v=(0,r.Z)({},n,{raised:u}),b=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},h,t)}(v);return(0,f.jsx)(p,(0,r.Z)({className:(0,a.Z)(b.root,o),elevation:u?8:void 0,ref:t,ownerState:v},d))}))},6961:function(e,t,n){var r=(0,n(4040).Z)();t.Z=r},2846:function(e,t,n){var r=n(3366),i=n(7294),o=n(4010),a=n(6226),c=["children","delay"];t.Z=function(e){var t=e.children,n=e.delay,s=(0,r.Z)(e,c),l=(0,o.zj)(),u=l[0],d=l[1];return i.createElement(o.mU,{onImpressionStart:d},i.createElement("div",s,i.createElement(a.E.div,{variants:{hidden:{opacity:0,y:"10%",visibility:"hidden"},visible:{opacity:1,y:0,visibility:"visible"}},initial:"hidden",animate:u?"visible":"hidden",transition:{delay:null!=n?n:Math.random()/1.5}},t)))}},1004:function(e,t,n){var r=n(664),i=n(7951),o=n(9308),a=n(7294);t.Z=function(e){var t=e.title,n=e.description,c=e.image,s=e.onClick;return a.createElement(r.Z,{sx:{border:"none",padding:2,display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",transition:"transform .2s ease-in","&:hover":{transform:"translateY(-10px)"}},onClick:s},a.createElement(i.Z,{component:"img",src:c,alt:t,sx:{width:140,marginBottom:2}}),a.createElement(o.Z,{variant:"h6",sx:{marginBottom:"16px",fontSize:{md:20,xs:18},textAlign:"center",whiteSpace:"pre-line"}},t),n?a.createElement(o.Z,{sx:{whiteSpace:"pre-line",fontSize:14}},n):null)}},865:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),i=n(6449),o=n(7951),a=n(9308),c=n(6961),s=function(e){var t=e.size,n=e.imageSrc,i=e.backgroundColor,o=t/3;return r.createElement(r.Fragment,null,r.createElement(c.Z,{component:"svg",width:t,height:t,xmlns:"http://www.w3.org/2000/svg",version:"1.1",sx:{verticalAlign:"top"}},r.createElement("g",null,r.createElement("clipPath",{id:"member-profile-clippath"},r.createElement("circle",{cx:t/2,cy:t-o,r:o})),r.createElement("circle",{cx:t/2,cy:t-o,r:o,fill:i,stroke:"none"})),r.createElement("image",{clipPath:"url(#member-profile-clippath)",height:"100%",width:"100%",href:n})),r.createElement(c.Z,{sx:{position:"absolute",width:"100%",padding:"25%",backgroundPosition:"top",backgroundRepeat:"no-repeat",backgroundSize:"100% auto",top:0,left:0},style:{backgroundImage:"url("+n+")"}}))},l=n(4942),u=n(885),d=n(7757),h=n.n(d),f=(n(5523),n(834)),m=(n(7154),n(5706),n(4418),n(5893));m.Fragment;function p(e,t,n){return f.h.call(t,"css")?(0,m.jsx)(f.E,(0,f.c)(e,t),n):(0,m.jsx)(e,t,n)}var v=n(4010);function b(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))}function g(e){return b(this,void 0,void 0,h().mark((function t(){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(y(e));case 2:return n=t.sent,t.next=5,n.text();case 5:if(r=t.sent,!n.ok){t.next=10;break}return t.abrupt("return",r);case 10:throw new Error(r);case 11:case"end":return t.stop()}}),t)})))}function y(e){return"https://icons.lubycon.io/".concat(e,".svg")}var E={},_=function(e){var t,n=e.name,i=e.size,o=void 0===i?16:i,a=e.type,c=void 0===a?"filled":a,s=e.color,d=void 0===s?"#000000":s,_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["name","size","type","color"]),x=function(e,t){return"logo-apple-ar"===e?"outline":/^logo-.+/.test(e)?"filled":t}(n,c),w="outline"===x?"stroke":"fill",Z=function(e,t){return"logo-apple-ar"===e||"filled"===t?e:"".concat(e,"-").concat(t)}(n,x),k=(0,r.useState)(E[Z]),O=(0,u.Z)(k,2),S=O[0],z=O[1],M=(0,v.zj)(!1),A=(0,u.Z)(M,2),C=A[0],j=A[1],T=(0,v.zj)(!1),R=(0,u.Z)(T,2),I=R[0],P=R[1];(0,r.useEffect)((function(){if(null==S&&!1!==I){var e=!1;return function(){b(this,void 0,void 0,h().mark((function t(){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(Z);case 3:n=t.sent,e||(z(n),E[Z]=n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),j();case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}(),function(){e=!0}}}),[I,S]);var B=(0,v.on)({onImpressionStart:P});return function(e,t,n){return f.h.call(t,"css")?(0,m.jsxs)(f.E,(0,f.c)(e,t),n):(0,m.jsxs)(e,t,n)}("span",Object.assign({ref:B,css:{width:o,height:o,display:"inline-block",fill:"currentColor","& svg":{width:"100%",verticalAlign:"top"}}},_,{children:[p("span",{css:(t={display:C?"none":"inline-block",width:o,height:o},(0,l.Z)(t,w,d),(0,l.Z)(t,"color",d),t),"aria-label":n,"aria-hidden":null==S,dangerouslySetInnerHTML:S?{__html:S}:void 0,role:"img"},void 0),p("img",{src:y(Z),css:{display:C?"inline-block":"none",verticalAlign:"top"},alt:n},void 0)]}),void 0)},x=n(6991),w={github:"logo-github",blog:"logo-rss",linkedin:"logo-linkedin",unsplash:"camera"},Z=function(e){var t=e.name,n=e.url,a=(0,i.Z)().spacing,c=w[t];return r.createElement(o.Z,{component:"li",sx:{listStyle:"none",margin:"0 "+a(1),"& i":{color:"text.secondary",transition:"transform 0.2s ease-in-out, opacity 0.2s ease-in-out","&:hover":{transform:"translate(0, -5px)",opacity:.8}}}},r.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.createElement(_,{name:c,color:x.Z[600]})))},k=function(e){var t=e.member,n=e.backgroundColor,c=void 0===n?"transparent":n,l=(0,i.Z)().spacing,u=t.profileImg,d=(0,r.useState)(0),h=d[0],f=d[1],m=(0,r.useCallback)((function(e){null!=e&&f(e.clientWidth)}),[]),p=(0,r.useMemo)((function(){return Object.entries(t.social).filter((function(e){var t=e[1];return Boolean(t)}))}),[t.social]);return r.createElement(o.Z,{sx:{position:"relative"}},r.createElement(o.Z,{ref:m},r.createElement(s,{size:h,imageSrc:u,backgroundColor:c})),r.createElement(o.Z,{sx:{marginTop:2,textAlign:"center"}},r.createElement(a.Z,{display:"block",component:"h3",variant:"subtitle1",sx:{fontWeight:"bold"}},t.name.ko," / ",t.name.en),t.company&&r.createElement(a.Z,{variant:"caption"},t.company),r.createElement(a.Z,{display:"block",variant:"caption"},t.role)),r.createElement(o.Z,null,r.createElement(o.Z,{component:"ul",sx:{margin:l(2)+" 0 0 0",padding:0,display:"flex",justifyContent:"center"}},p.length>0?p.map((function(e){var t=e[0],n=e[1];return r.createElement(Z,{key:t,name:t,url:null!=n?n:"#"})})):r.createElement(o.Z,{component:"li",sx:{listStyle:"none"}}))))}},751:function(e,t,n){n.d(t,{d:function(){return i}});var r=n(5444);function i(e){var t=(0,r.useStaticQuery)("1101686144").allMembersJson.nodes;return null==e?t:t.filter((function(t){return t.group===e}))}},5477:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(7294),i=n(3547),o=n(3366),a=n(7951),c=["size","direction"],s={left:"-45deg",right:"135deg",up:"45deg",down:"-135deg"},l=function(e){var t=e.size,n=void 0===t?40:t,i=e.direction,l=void 0===i?"down":i,u=(0,o.Z)(e,c);return r.createElement(a.Z,Object.assign({component:"a",sx:{display:"inline-block",width:n+"px",height:n+"px",textIndent:"-9999px",borderTop:2,borderLeft:2,borderColor:"InfoText",transition:"all 0.3s ease-in-out",color:"transparent",textDecoration:"none",transform:"rotate("+s[l]+")",cursor:"pointer","&:hover":{borderColor:"palette.text.primary",borderWidth:5},"&::before":{display:"block",height:"200%",width:"200%",marginLeft:"50%",marginTop:"-50%",content:'""',transform:"rotate(45deg)"}}},u))},u=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),d="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,h=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),f="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(h):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var m=["top","right","bottom","left","width","height","size","weight"],p="undefined"!=typeof MutationObserver,v=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&c()}function a(){f(o)}function c(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),p?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;m.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),b=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},g=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||h},y=k(0,0,0,0);function E(e){return parseFloat(e)||0}function _(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+E(e["border-"+n+"-width"])}),0)}function x(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return y;var r=g(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=E(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,c=E(r.width),s=E(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==t&&(c-=_(r,"left","right")+o),Math.round(s+a)!==n&&(s-=_(r,"top","bottom")+a)),!function(e){return e===g(e).document.documentElement}(e)){var l=Math.round(c+o)-t,u=Math.round(s+a)-n;1!==Math.abs(l)&&(c-=l),1!==Math.abs(u)&&(s-=u)}return k(i.left,i.top,c,s)}var w="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof g(e).SVGGraphicsElement}:function(e){return e instanceof g(e).SVGElement&&"function"==typeof e.getBBox};function Z(e){return d?w(e)?function(e){var t=e.getBBox();return k(0,0,t.width,t.height)}(e):x(e):y}function k(e,t,n,r){return{x:e,y:t,width:n,height:r}}var O=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=k(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=Z(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),S=function(e,t){var n,r,i,o,a,c,s,l=(r=(n=t).x,i=n.y,o=n.width,a=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(c.prototype),b(s,{x:r,y:i,width:o,height:a,top:i,right:r+o,bottom:a+i,left:r}),s);b(this,{target:e,contentRect:l})},z=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new u,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof g(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new O(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof g(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new S(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),M="undefined"!=typeof WeakMap?new WeakMap:new u,A=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=v.getInstance(),r=new z(t,n,this);M.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){A.prototype[e]=function(){var t;return(t=M.get(this))[e].apply(t,arguments)}}));var C=void 0!==h.ResizeObserver?h.ResizeObserver:A;function j(e,t){var n=(null!=t?t:{}).gutter,i=void 0===n?0:n,o=(0,r.useState)(0),a=o[0],c=o[1],s=(0,r.useCallback)((function(){window.scroll({top:a+i,behavior:"smooth"})}),[i,a]),l=(0,r.useCallback)((function(){if(e.current){var t=e.current,n=t.offsetTop+t.clientHeight;c(n)}}),[e]);return function(e,t){var n=(0,r.useRef)(null),i=(0,r.useRef)(t);(0,r.useEffect)((function(){if(null!==e.current)return n.current=new C((function(e){i.current(e[0].contentRect)})),n.current.observe(e.current),function(){var e;return null===(e=n.current)||void 0===e?void 0:e.disconnect()}}),[e])}(e,l),s}var T=n(6226),R=function(){var e=(0,r.useRef)(null),t=j(e);return r.createElement(a.Z,{ref:e,sx:{position:"relative",height:"100vh"}},r.createElement(a.Z,{sx:{position:"absolute",top:{md:"45%",xs:"30%"},left:"50%",transform:"translate(-50%, -50%)"}},r.createElement(a.Z,{component:T.E.h1,initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.5},sx:{fontStyle:"italic",fontSize:{md:"3.5rem",xs:"2rem"},textAlign:"center",whiteSpace:"nowrap"}},"Growth",r.createElement(a.Z,{component:"span",sx:{color:"secondary.main"}},".")," ","And Share"),r.createElement(a.Z,{component:T.E.h2,initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:.3,duration:.5},sx:{textAlign:"center",fontWeight:200,fontSize:"1.4rem",fontStyle:"italic"}},"This is ",r.createElement("strong",null,"Lubycon"))),r.createElement(a.Z,{sx:{position:"absolute",bottom:"20%",left:"50%",transform:"translateX(-50%)"}},r.createElement(T.E.div,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5}},r.createElement(l,{onClick:t}))))},I=n(6449),P=n(5616),B=n(9308),W=n(4320),D=n(751),L=n(865),H=n(2235),F=n(2846),G=function(){var e=(0,I.Z)().spacing,t=(0,D.d)("lubycon");return r.createElement(a.Z,{component:"section",sx:{padding:{md:e(15)+" 0",xs:e(10)+" 0"}}},r.createElement(P.Z,null,r.createElement(B.Z,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",textAlign:"center",fontSize:{md:"h4.fontSize",xs:"h6.fontSize"}}},"루비콘 팀의 멤버들이에요"),r.createElement(B.Z,{sx:{marginBottom:10}}),r.createElement(W.ZP,{container:!0,spacing:2},t.map((function(e){return r.createElement(W.ZP,{item:!0,key:e.id,xs:6,sm:3},r.createElement(F.Z,null,r.createElement(L.Z,{member:e,backgroundColor:H.Z[100]})))})))))},q=n(1004),N=n(4010),U=n(6991),V=[{title:"스터디",image:"https://assets.lubycon.io/illusts/books.png",description:'우리는 관심있는 분야가 있다면 함께 스터디하고 싶은 멤버들을 모아서 자체 스터디를 하고 있어요.\n최근 팀 내에서 가장 핫한 주제는 "나의 성장 뿐 아니라 팀의 성장을 이끌 수 있는 사람이 되는 것"입니다.'},{title:"멘토링",image:"https://assets.lubycon.io/illusts/roadsign.png",description:"우리는 멘토링을 통해 아직 성장의 방향을 잡지 못한 분들을 도와드리고 있어요.\n\n우리가 지금까지 쌓아왔던 모든 경험들이 다른 사람들에게 분명 도움이 될 것이라고 믿거든요."},{title:"커뮤니티",image:"https://assets.lubycon.io/illusts/networking.png",description:"루비콘 팀이 운영하는 커뮤니티인 루비콘 허브는 함께 프로젝트를 진행하는 팀과 같은 직군이 모인 챕터로 구성되어 있어요.\n많은 사람들이 빠른 정보 공유와 투명한 커뮤니케이션을 통해 성장하기를 바라요."},{title:"프로젝트",image:"https://assets.lubycon.io/illusts/laptop.png",description:"루비콘 팀의 프로젝트는 스스로 필요한 제품을 개발하는 것 뿐만 아니라 UI Kit처럼 다른 사람들의 생산성을 높힐 수 있는 제품을 개발하기도 해요."}],X=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,I.Z)().spacing;return r.createElement(a.Z,{component:"section",sx:{padding:{md:i(15)+" 0",xs:i(10)+" 0"},backgroundColor:U.Z[100]}},r.createElement(P.Z,null,r.createElement(N.mU,{onImpressionStart:function(){return n(!0)}},r.createElement(T.E.div,{variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:50}},initial:"hidden",animate:t?"visible":"hidden"},r.createElement(B.Z,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",fontSize:{md:"h4.fontSize",xs:"h6.fontSize"}}},"함께 성장하고 공유하기")),r.createElement(a.Z,{component:T.E.div,variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:50}},initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.3},sx:{marginBottom:5}},r.createElement(B.Z,null,"루비콘 팀의 이니셔티브는 ",r.createElement("strong",null,"성장과 공유"),"에요. 루비콘 팀은 이 이니셔티브를 달성하기 위한 여러가지 활동을 하고 있어요.",r.createElement("br",null))),r.createElement(W.ZP,{container:!0,spacing:2},V.map((function(e,t){var n=e.title,i=e.image,o=e.description;return r.createElement(W.ZP,{key:t,item:!0,xs:12,sm:3},r.createElement(F.Z,null,r.createElement(q.Z,{title:n,image:i,description:o})))}))))))},J=n(78),K=function(){var e=(0,I.Z)().spacing;return r.createElement(a.Z,{sx:{padding:{md:e(15)+" 0",xs:e(10)+" 0"},backgroundColor:U.Z[100],textAlign:"center"}},r.createElement(P.Z,null,r.createElement(B.Z,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",fontSize:{md:"h4.fontSize",xs:"h6.fontSize"}}},"문의하기"),r.createElement(B.Z,{sx:{marginBottom:10}},"제휴 문의나 루비콘이 진행하고 있는 프로젝트에 대한 문의는 help@lubycon.io로 보내주세요!"),r.createElement(J.Z,{href:"mailto:help@lubycon.io",target:"_blank",variant:"contained",color:"primary",size:"large"},"지금 바로 문의하기")))},Q=n(7753),Y={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},$=function(){var e=(0,r.useRef)(null),t=(0,r.useState)(!1),n=t[0],i=t[1];console.log(n);var o=j(e);return r.createElement(P.Z,{component:"section"},r.createElement(W.ZP,{ref:e,container:!0,justifyContent:"center",alignItems:"center",sx:{position:"relative",height:"100vh"}},r.createElement(W.ZP,{item:!0,xs:12,sm:!0,sx:{paddingTop:0}},r.createElement(N.mU,{onImpressionStart:function(){return i(!0)}},r.createElement(T.E.div,{variants:Y,initial:"hidden",animate:n?"visible":"hidden"},r.createElement(B.Z,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",fontSize:{md:"h4.fontSize",xs:"h6.fontSize"}}},"안녕하세요. 우리는 루비콘 입니다 ",r.createElement(Q.Z,{emoji:"👋",name:"Hi"}))),r.createElement(T.E.div,{variants:Y,initial:"hidden",animate:n?"visible":"hidden",transition:{delay:.3}},r.createElement(B.Z,{sx:{marginBottom:10}},"루비콘은 국내 IT업계에 선한 영향을 만들어내고 싶은 개발자들과 디자이너들이 모인 팀이에요.",r.createElement("br",null),"우리는 지속적으로 새로운 것들에 도전하며 실패하고, 그 과정 속에서 배운 것들을 공유해요. 그리고 이런 공유 활동은 루비콘 팀 뿐만 아니라 팀 외부에서도 이루어지고 있어요.")))),r.createElement(a.Z,{sx:{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)"}},r.createElement(l,{onClick:o}))))},ee=n(939),te=function(){return(0,r.useEffect)((function(){ee.C3.view()}),[]),r.createElement(i.Z,null,r.createElement(R,null),r.createElement($,null),r.createElement(X,null),r.createElement(G,null),r.createElement(K,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-99a3c978a649c0b8922b.js.map