(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5qrZ":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),l=a("H2TA"),c=i.forwardRef((function(e,t){var a=e.active,l=e.alternativeLabel,c=void 0!==l&&l,s=e.classes,m=e.className,d=e.completed,p=e.disabled,u=(e.index,e.orientation),f=void 0===u?"horizontal":u,v=Object(r.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return i.createElement("div",Object(n.a)({className:Object(o.a)(s.root,s[f],m,c&&s.alternativeLabel,a&&s.active,d&&s.completed,p&&s.disabled),ref:t},v),i.createElement("span",{className:Object(o.a)(s.line,{horizontal:s.lineHorizontal,vertical:s.lineVertical}[f])}))}));t.a=Object(l.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(c)},Ffwr:function(e,t,a){"use strict";var n=a("q1tI"),r=a("iuhU"),i=a("5AJ6"),o=Object(i.a)(n.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),l=Object(i.a)(n.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),c=a("H2TA"),s=a("HR5l"),m=n.createElement("circle",{cx:"12",cy:"12",r:"12"}),d=n.forwardRef((function(e,t){var a=e.completed,i=void 0!==a&&a,c=e.icon,d=e.active,p=void 0!==d&&d,u=e.error,f=void 0!==u&&u,v=e.classes;if("number"==typeof c||"string"==typeof c){var b=Object(r.a)(v.root,p&&v.active,f&&v.error,i&&v.completed);return f?n.createElement(l,{className:b,ref:t}):i?n.createElement(o,{className:b,ref:t}):n.createElement(s.a,{className:b,ref:t},m,n.createElement("text",{className:v.text,x:"12",y:"16",textAnchor:"middle"},c))}return c}));t.a=Object(c.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(d)},GNUg:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("wEEd"),o=a("R/WZ"),l=a("ZBNC"),c=a("ofer"),s=a("nxyq"),m=a("H2eU"),d=a("aslL"),p=Object(o.a)((function(e){var t;return Object(l.a)({root:{height:"100vh"},wrapper:(t={position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)"},t[e.breakpoints.down("md")]={top:"30%"},t),title:{whiteSpace:"nowrap",fontWeight:e.typography.fontWeightLight,"& strong":{color:e.palette.primary.main,fontWeight:e.typography.fontWeightBold}},description:{margin:0,fontWeight:e.typography.fontWeightMedium},bottomArrow:{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)"}})})),u=function(){var e=Object(n.useRef)(null),t=p(),a=Object(i.c)({from:{opacity:0,transform:"translateY(30px)"},to:{opacity:1,transform:"translateY(0)"},delay:300}),o=Object(i.c)({from:{opacity:0,transform:"translateY(30px)"},to:{opacity:1,transform:"translateY(0)"},delay:600}),l=Object(i.c)({from:{opacity:0,transform:"translateY(-30px)"},to:{opacity:1,transform:"translateY(0)"},delay:900}),u=Object(d.a)(e);return r.a.createElement("div",{ref:e,className:t.root},r.a.createElement("div",{className:t.wrapper},r.a.createElement(i.a.div,{style:a},r.a.createElement(c.a,{variant:"h3",component:"h1",gutterBottom:!0,className:t.title},"안녕하세요.",r.a.createElement("br",null),r.a.createElement("strong",null,"루비콘 멘토링 프로젝트"),"에 오신 것을 환영합니다 ",r.a.createElement(s.a,{emoji:"👋",name:"hi"}))),r.a.createElement(i.a.div,{style:o},r.a.createElement(c.a,null,r.a.createElement("strong",null,"루비콘 멘토링 프로젝트"),"는 개발자와 디자이너들이 모인 루비콘 팀의 멤버들이 자신이 쌓아온 지식과 경험을 다른 사람들에게 공유하고 IT 업계의 생태계에 선한 이펙트를 주고 싶다는 취지에서 출발한 프로젝트입니다.",r.a.createElement("br",null),"수많은 성장의 방향 속에서 길을 잃고 있는 분들에게 조금이나마 도움이 되었으면 합니다."))),r.a.createElement("div",{className:t.bottomArrow},r.a.createElement(i.a.div,{style:l},r.a.createElement(m.a,{onClick:u}))))},f=a("k0/U"),v=a("Ji2X"),b=a("tRbT"),g=a("Wbzz"),h=a("9eSz"),E=a.n(h),y=Object(o.a)((function(e){var t=e.spacing,a=e.typography;return{section:{position:"relative",height:"100vh"},header:{marginBottom:t(3)},title:{fontWeight:a.fontWeightBold},image:{width:550},bottomArrow:{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)"}}})),x=function(){var e=Object(n.useRef)(null),t=y(),a=Object(g.useStaticQuery)("3237440226").rocketImage,i=Object(d.a)(e);return r.a.createElement(v.a,null,r.a.createElement(b.a,{ref:e,container:!0,component:"section",className:t.section,alignItems:"center"},r.a.createElement(b.a,{item:!0,xs:12,sm:!0},r.a.createElement(c.a,{variant:"h4",component:"h2",gutterBottom:!0,className:t.whiteSpacePre+" "+t.title},"성장을 통해 나의 가치를 높혀보세요."),r.a.createElement(c.a,null,"나름 열심히 공부하고 있는데 내가 맞는 방향으로 가고 있는건지 궁금하신가요?",r.a.createElement("br",null),"좋은 동료들과 피드백을 주고받으며 건설적인 성장을 하고 싶은데, 그런 환경을 찾기가 어려운가요?",r.a.createElement("br",null),"도대체 어떻게 하면 좋은 제품을 만들 수 있을까요?",r.a.createElement("br",null),r.a.createElement("br",null),"여러분이 한번쯤은 고민해 보았던 이런 질문들에 대한 해답을 찾아나서는 여정을 루비콘이 도와드릴게요!")),r.a.createElement(b.a,{item:!0,xs:12,sm:"auto",className:t.image},r.a.createElement(E.a,{fluid:a.childImageSharp.fluid})),r.a.createElement("div",{className:t.bottomArrow},r.a.createElement(m.a,{onClick:i}))))},j=a("2p7l"),O=[{title:"🎓 Lesson",description:"멘토는 여러분에게 코드/디자인 리뷰, 커피챗 등 다양한 방법을 통해 하드 스킬과 소프트 스킬에 대한 전반적인 도움을 드릴거에요.\n한 달에 한번 있는 중간 회고에서는 멘토들이 직접 세미나 발표를 하기도 해요!"},{title:"🛰 Networking",description:'멘토링 프로젝트가 종료되어도 루비콘 팀의 커뮤니티인 "루비콘 허브"에서 멘토와 다른 멘티들과 계속 소통할 수 있어요.\n함께 일했던 팀 뿐만 아니라 챕터나 길드 같은 다양한 조직에 소속되어 지속적인 활동을 이어나가보세요!'},{title:"💼 Career",description:"취업이나 이직을 할 때 뭐부터 준비해야할지 막막하신가요? 그럼 멘토들의 이직/취업 경험과 면접관으로써의 입장을 한번 들어보고 도움을 받아보세요!"},{title:"✨ Experience",description:"프로덕트 아이데이션부터 릴리즈까지 내가 만들고 싶은 프로덕트를 만들어볼 수 있어요.\n물론 아이데이션 과정에서 함께 협업하는 동료들을 설득하는 과정은 필수겠죠?"}],N=Object(o.a)((function(e){var t=e.palette,a=e.spacing,n=e.typography;return{root:{backgroundColor:t.grey[100],padding:a(15)+"px 0"},title:{fontWeight:n.fontWeightBold},description:{marginBottom:a(10)}}})),w=function(){var e=N();return r.a.createElement("section",{className:e.root},r.a.createElement(v.a,null,r.a.createElement(c.a,{variant:"h4",component:"h2",gutterBottom:!0,className:e.title},"루비콘 팀과 함께 경험해보세요!"),r.a.createElement(c.a,{className:e.description},"루비콘 팀의 멘토들은 대학원, 외국계 기업, 대기업, 스타트업 등의 다양한 조직에서 일해본 경험을 토대로 멘티 여러분을 도와줄 준비가 되어있어요.",r.a.createElement("br",null),"멘토와 멘티가 서로 도움과 피드백을 주고받으며 함께 성장하는 문화를 만들어보아요."),r.a.createElement(b.a,{container:!0,spacing:2},O.map((function(e,t){var a=e.title,n=e.description;return r.a.createElement(b.a,{item:!0,xs:12,sm:3,key:t},r.a.createElement(j.a,{key:t,title:a,description:n}))})))))},L=a("olcQ"),S=a("KPTR"),C=a("P4MJ"),W=a("fg8p"),R=[{title:"킥오프 미팅",description:"멘토링 프로젝트 소개와 프로젝트 진행 때 정보 제공"},{title:"챕터 미팅",description:""},{title:"세션 1",description:"프로젝트 아이템 발표 및 회고"},{title:"",description:""},{title:"챕터 미팅",description:""},{title:"세션 2",description:"프로젝트 진행 상황 공유 및 회고"},{title:"",description:""},{title:"챕터 미팅",description:""},{title:"세션 3",description:"프로젝트 진행 상황 공유 및 회고"},{title:"",description:""},{title:"챕터 미팅",description:""},{title:"파이널 회고",description:"지난 프로젝트를 돌아보며 다 함께 진행하는 마지막 회고"}],T=Object(o.a)((function(e){var t=e.spacing,a=e.typography,n=e.palette;return{root:{padding:t(15)+"px 0"},title:{fontWeight:a.fontWeightBold,textAlign:"center"},description:{marginBottom:t(5),textAlign:"center"},stepperWrapper:{display:"flex",justifyContent:"center"},stepperRoot:{backgroundColor:"transparent",display:"inline-flex"},curriculumTitle:{fontWeight:a.fontWeightBold,color:n.primary.main},curriculumIcon:{width:15,height:15,border:"2px solid "+n.grey[800],borderRadius:"50%",marginLeft:5}}})),I=function(){var e=T();return r.a.createElement("div",{className:e.curriculumIcon})},k=function(){var e=T();return r.a.createElement("section",{className:e.root},r.a.createElement(v.a,null,r.a.createElement(c.a,{variant:"h4",component:"h2",gutterBottom:!0,className:e.title},"멘토링 프로젝트 커리큘럼"),r.a.createElement(c.a,{className:e.description},"멘토링 프로젝트는 총 12주 동안의 여정을 거쳐요"),r.a.createElement("div",{className:e.stepperWrapper},r.a.createElement(L.a,{orientation:"vertical",activeStep:R.length-1,className:e.stepperRoot},R.map((function(t,a){var n=t.title,i=t.description;return r.a.createElement(S.a,{key:a,expanded:!0,completed:!1,active:!0},r.a.createElement(C.a,{StepIconComponent:I},a+1,"주차"),r.a.createElement(W.a,null,r.a.createElement(c.a,{className:e.curriculumTitle},n),r.a.createElement(c.a,{variant:"body2"},i)))}))))))},A=a("8rdq"),z=a.n(A),H=a("TxQ5"),B=a("Db4T"),M=Object(o.a)((function(e){var t=e.spacing,a=e.typography,n=e.palette;return{root:{padding:t(15)+"px 0",backgroundColor:n.grey[100]},title:{fontWeight:a.fontWeightBold},description:{marginBottom:t(10)}}})),D=function(){var e=M(),t=Object(H.a)().filter((function(e){return["Evan","Daniel","Ryan","Yurim"].includes(e.id)}));return r.a.createElement("section",{className:e.root},r.a.createElement(v.a,null,r.a.createElement(c.a,{variant:"h4",component:"h2",gutterBottom:!0,className:e.title},"멘토링 프로젝트를 함께할 멘토들이에요"),r.a.createElement(c.a,{className:e.description},"멘토들은 각자 1개의 팀을 맡아서 3개월 동안 여러분을 도와줄 거에요. ",r.a.createElement(s.a,{emoji:"🙌",name:"hi"}),r.a.createElement("br",null),"아, 혹시 내 포지션과 멘토의 포지션이 다르더라도 걱정하지 마세요!",r.a.createElement("br",null),"프로젝트에 참여하는 모든 멘티는 하나의 슬랙 워크스페이스에서 활동하기 때문에 다른 팀의 멘토나 멘티들과도 자유롭게 소통할 수 있어요!"),r.a.createElement(b.a,{container:!0,spacing:2},t.map((function(e){return r.a.createElement(b.a,{item:!0,key:e.id,xs:12,sm:3},r.a.createElement(B.a,{member:e,backgroundColor:z.a[100]}))})))))},q=a("ih+B"),F=a("jxKE"),U=Object(o.a)((function(e){var t=e.spacing,a=e.typography;return{root:{padding:t(15)+"px 0"},title:{fontWeight:a.fontWeightBold,marginBottom:t(10),textAlign:"center"},button:{fontSize:"1.2rem"}}})),$=function(){var e=U();return r.a.createElement("section",{className:e.root},r.a.createElement(v.a,null,r.a.createElement(c.a,{variant:"h4",component:"h2",gutterBottom:!0,className:e.title},"지금 바로 신청하세요!"),r.a.createElement("div",null,r.a.createElement(q.a,{className:e.button,color:"primary",variant:"contained",href:"/mentoring/apply-forms/",size:"large",expiry:F.c},"멘토링 프로젝트 ",F.d,"기 신청하기"))))},P=a("jWrc"),J=Object(P.a)("mentoring_project_intro_page");t.default=function(){return Object(n.useEffect)((function(){J.view()}),[]),r.a.createElement(f.a,{pageName:"루비콘 멘토링 프로젝트"},r.a.createElement(u,null),r.a.createElement(x,null),r.a.createElement(w,null),r.a.createElement(k,null),r.a.createElement(D,null),r.a.createElement($,null))}},JQEk:function(e,t,a){"use strict";var n=a("wx14"),r=a("ODXe"),i=a("Ff2n"),o=a("q1tI"),l=a("iuhU"),c=a("dRu9"),s=a("H2TA"),m=a("wpWl"),d=a("4Hym"),p=a("tr08"),u=a("bfFb"),f=o.forwardRef((function(e,t){var a=e.children,s=e.classes,f=e.className,v=e.collapsedHeight,b=void 0===v?"0px":v,g=e.component,h=void 0===g?"div":g,E=e.disableStrictModeCompat,y=void 0!==E&&E,x=e.in,j=e.onEnter,O=e.onEntered,N=e.onEntering,w=e.onExit,L=e.onExited,S=e.onExiting,C=e.style,W=e.timeout,R=void 0===W?m.b.standard:W,T=e.TransitionComponent,I=void 0===T?c.a:T,k=Object(i.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),A=Object(p.a)(),z=o.useRef(),H=o.useRef(null),B=o.useRef(),M="number"==typeof b?"".concat(b,"px"):b;o.useEffect((function(){return function(){clearTimeout(z.current)}}),[]);var D=A.unstable_strictMode&&!y,q=o.useRef(null),F=Object(u.a)(t,D?q:void 0),U=function(e){return function(t,a){if(e){var n=D?[q.current,t]:[t,a],i=Object(r.a)(n,2),o=i[0],l=i[1];void 0===l?e(o):e(o,l)}}},$=U((function(e,t){e.style.height=M,j&&j(e,t)})),P=U((function(e,t){var a=H.current?H.current.clientHeight:0,n=Object(d.a)({style:C,timeout:R},{mode:"enter"}).duration;if("auto"===R){var r=A.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),B.current=r}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),N&&N(e,t)})),J=U((function(e,t){e.style.height="auto",O&&O(e,t)})),Y=U((function(e){var t=H.current?H.current.clientHeight:0;e.style.height="".concat(t,"px"),w&&w(e)})),Q=U(L),K=U((function(e){var t=H.current?H.current.clientHeight:0,a=Object(d.a)({style:C,timeout:R},{mode:"exit"}).duration;if("auto"===R){var n=A.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),B.current=n}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=M,S&&S(e)}));return o.createElement(I,Object(n.a)({in:x,onEnter:$,onEntered:J,onEntering:P,onExit:Y,onExited:Q,onExiting:K,addEndListener:function(e,t){var a=D?e:t;"auto"===R&&(z.current=setTimeout(a,B.current||0))},nodeRef:D?q:void 0,timeout:"auto"===R?null:R},k),(function(e,t){return o.createElement(h,Object(n.a)({className:Object(l.a)(s.container,f,{entered:s.entered,exited:!x&&"0px"===M&&s.hidden}[e]),style:Object(n.a)({minHeight:M},C),ref:F},t),o.createElement("div",{className:s.wrapper,ref:H},o.createElement("div",{className:s.wrapperInner},a)))}))}));f.muiSupportAuto=!0,t.a=Object(s.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(f)},KPTR:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=(a("USxY"),a("iuhU")),l=a("H2TA"),c=i.forwardRef((function(e,t){var a=e.active,l=void 0!==a&&a,c=e.alternativeLabel,s=e.children,m=e.classes,d=e.className,p=e.completed,u=void 0!==p&&p,f=e.connector,v=e.disabled,b=void 0!==v&&v,g=e.expanded,h=void 0!==g&&g,E=e.index,y=e.last,x=e.orientation,j=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),O=f?i.cloneElement(f,{orientation:x,alternativeLabel:c,index:E,active:l,completed:u,disabled:b}):null,N=i.createElement("div",Object(n.a)({className:Object(o.a)(m.root,m[x],d,c&&m.alternativeLabel,u&&m.completed),ref:t},j),O&&c&&0!==E?O:null,i.Children.map(s,(function(e){return i.isValidElement(e)?i.cloneElement(e,Object(n.a)({active:l,alternativeLabel:c,completed:u,disabled:b,expanded:h,last:y,icon:E+1,orientation:x},e.props)):null})));return O&&!c&&0!==E?i.createElement(i.Fragment,null,O,N):N}));t.a=Object(l.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(c)},P4MJ:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),l=a("H2TA"),c=a("ofer"),s=a("Ffwr"),m=i.forwardRef((function(e,t){var a=e.active,l=void 0!==a&&a,m=e.alternativeLabel,d=void 0!==m&&m,p=e.children,u=e.classes,f=e.className,v=e.completed,b=void 0!==v&&v,g=e.disabled,h=void 0!==g&&g,E=e.error,y=void 0!==E&&E,x=(e.expanded,e.icon),j=(e.last,e.optional),O=e.orientation,N=void 0===O?"horizontal":O,w=e.StepIconComponent,L=e.StepIconProps,S=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),C=w;return x&&!C&&(C=s.a),i.createElement("span",Object(n.a)({className:Object(o.a)(u.root,u[N],f,h&&u.disabled,d&&u.alternativeLabel,y&&u.error),ref:t},S),x||C?i.createElement("span",{className:Object(o.a)(u.iconContainer,d&&u.alternativeLabel)},i.createElement(C,Object(n.a)({completed:b,active:l,error:y,icon:x},L))):null,i.createElement("span",{className:u.labelContainer},p?i.createElement(c.a,{variant:"body2",component:"span",display:"block",className:Object(o.a)(u.label,d&&u.alternativeLabel,b&&u.completed,l&&u.active,y&&u.error)},p):null,j))}));m.muiName="StepLabel",t.a=Object(l.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(m)},fg8p:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),l=a("JQEk"),c=a("H2TA"),s=i.forwardRef((function(e,t){var a=e.active,c=(e.alternativeLabel,e.children),s=e.classes,m=e.className,d=(e.completed,e.expanded),p=e.last,u=(e.optional,e.orientation,e.TransitionComponent),f=void 0===u?l.a:u,v=e.transitionDuration,b=void 0===v?"auto":v,g=e.TransitionProps,h=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","expanded","last","optional","orientation","TransitionComponent","transitionDuration","TransitionProps"]);var E=b;return"auto"!==b||f.muiSupportAuto||(E=void 0),i.createElement("div",Object(n.a)({className:Object(o.a)(s.root,m,p&&s.last),ref:t},h),i.createElement(f,Object(n.a)({in:a||d,className:s.transition,timeout:E,unmountOnExit:!0},g),c))}));t.a=Object(c.a)((function(e){return{root:{marginTop:8,marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:"1px solid ".concat("light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600])},last:{borderLeft:"none"},transition:{}}}),{name:"MuiStepContent"})(s)},olcQ:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),l=a("H2TA"),c=a("kKAo"),s=a("5qrZ"),m=i.createElement(s.a,null),d=i.forwardRef((function(e,t){var a=e.activeStep,l=void 0===a?0:a,s=e.alternativeLabel,d=void 0!==s&&s,p=e.children,u=e.classes,f=e.className,v=e.connector,b=void 0===v?m:v,g=e.nonLinear,h=void 0!==g&&g,E=e.orientation,y=void 0===E?"horizontal":E,x=Object(r.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),j=i.isValidElement(b)?i.cloneElement(b,{orientation:y}):null,O=i.Children.toArray(p),N=O.map((function(e,t){var a={index:t,active:!1,completed:!1,disabled:!1};return l===t?a.active=!0:!h&&l>t?a.completed=!0:!h&&l<t&&(a.disabled=!0),i.cloneElement(e,Object(n.a)({alternativeLabel:d,connector:j,last:t+1===O.length,orientation:y},a,e.props))}));return i.createElement(c.a,Object(n.a)({square:!0,elevation:0,className:Object(o.a)(u.root,u[y],f,d&&u.alternativeLabel),ref:t},x),N)}));t.a=Object(l.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(d)}}]);
//# sourceMappingURL=component---src-pages-mentoring-intro-tsx-c7e182d52670b29009c7.js.map