(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QeBL:function(n,t,e){"use strict";e.r(t);var r=e("qKvR"),o=e("8sVr"),i=e("jxKE"),c=e("7vrA"),a=e("eZYV"),u=e("5D9J"),s=e("q1tI"),l=e("wEEd"),b=e("0lfv");function f(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  text-indent: -9999px;\n  border-top: 2px solid ",";\n  border-left: 2px solid ",";\n  transition: all 0.3s ease-in-out;\n  color: transparent;\n  text-decoration: none;\n  transform: ",";\n  cursor: pointer;\n  &:hover {\n    border-color: ",";\n    border-width: 5px;\n  }\n  &:before {\n    display: block;\n    height: 200%;\n    width: 200%;\n    margin-left: -50%;\n    margin-top: -50%;\n    content: '';\n    transform: rotate(45deg);\n  }\n"]);return f=function(){return n},n}var d={left:"-45deg",right:"135deg",up:"45deg",down:"-135deg"},p=u.a.a(f(),(function(n){var t=n.size;return void 0===t?60:t}),(function(n){var t=n.size;return void 0===t?60:t}),i.e.Grey500,i.e.Grey500,(function(n){var t=n.direction;return"rotate("+d[void 0===t?"down":t]+")"}),i.e.Grey900);function m(){var n=y(["\n  text-align: right;\n  font-weight: 200;\n  font-size: 1.4rem;\n  font-style: italic;\n"]);return m=function(){return n},n}function h(){var n=y(["\n  font-style: italic;\n  font-size: 3.5rem;\n  text-align: center;\n  white-space: nowrap;\n  "," {\n    font-size: 2rem;\n  }\n  span {\n    color: ",";\n  }\n"]);return h=function(){return n},n}function g(){var n=y(["\n          position: absolute;\n          bottom: 20%;\n          left: 50%;\n          transform: translateX(-50%);\n        "]);return g=function(){return n},n}function v(){var n=y(["\n              color: #ff0000;\n            "]);return v=function(){return n},n}function j(){var n=y(["\n          position: absolute;\n          top: 40%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n        "]);return j=function(){return n},n}function O(){var n=y(["\n        position: relative;\n        height: 100vh;\n      "]);return O=function(){return n},n}function y(n,t){return t||(t=n.slice(0)),n.raw=t,n}var w=function(){var n=Object(s.useRef)(null),t=Object(s.useState)(0),e=t[0],o=t[1],i=Object(l.b)({from:{opacity:0,transform:"translateX(-30px)"},to:{opacity:1,transform:"translateX(0)"}}),c=Object(l.b)({from:{opacity:0,transform:"translateX(30px)"},to:{opacity:1,transform:"translateX(0)"}}),a=Object(l.b)({from:{opacity:0,transform:"translateY(-30px)"},to:{opacity:1,transform:"translateY(0)"},delay:300}),u=Object(s.useCallback)((function(){window.scroll({top:e,behavior:"smooth"})}),[e]),b=Object(s.useCallback)((function(){if(n.current){var t=n.current.clientHeight;o(t)}}),[o]);return Object(s.useLayoutEffect)((function(){b()}),[b]),Object(s.useEffect)((function(){return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}}),[b]),Object(r.c)("div",{ref:n,css:Object(r.b)(O())},Object(r.c)("div",{css:Object(r.b)(j())},Object(r.c)(x,{style:i},"Growth",Object(r.c)("span",{css:Object(r.b)(v())},".")," ","And Share"),Object(r.c)(k,{style:c},"This is ",Object(r.c)("strong",null,"Lubycon"))),Object(r.c)("div",{css:Object(r.b)(g())},Object(r.c)(l.a.div,{style:a},Object(r.c)(p,{onClick:u}))))},x=Object(u.a)(l.a.h1)(h(),b.a.mobile,i.e.Red500),k=Object(u.a)(l.a.h2)(m()),L=(e("tUrg"),e("3Z9Z")),z=e("JI6e"),I=e("cWnB"),E=e("Wbzz");function T(){var n=H(["\n            padding-bottom: 50%;\n            background-size: cover;\n            background-image: url(",");\n            "," {\n              margin-bottom: 1rem;\n            }\n          "]);return T=function(){return n},n}function S(){var n=H(["\n            font-size: 1.2rem;\n            line-height: 1.8;\n            "," {\n              font-size: 1rem;\n            }\n          "]);return S=function(){return n},n}function G(){var n=H(["\n          margin-bottom: 2rem;\n        "]);return G=function(){return n},n}function R(){var n=H(["\n        padding: 3rem 0;\n      "]);return R=function(){return n},n}function X(){var n=H(["\n  background-color: ",";\n  border: none;\n  border-radius: 0;\n  padding: 1rem 1.5rem;\n  background-color: ",";\n  transition: transform 0.3s ease-out;\n  color: ",";\n  text-decoration: none;\n  &:hover,\n  &:active {\n    background-color: "," !important;\n    transform: scale(1.1);\n    color: ",";\n  }\n"]);return X=function(){return n},n}function H(n,t){return t||(t=n.slice(0)),n.raw=t,n}var J=Object(r.b)(X(),i.e.Grey900,i.e.Red500,i.e.White,i.e.Red500,i.e.White),W=function(n){var t=n.children,e=n.link,o=n.isExternal;return void 0!==o&&o?Object(r.c)("a",{href:e,target:"_blank",rel:"noopener noreferrer"},t):Object(r.c)(E.Link,{to:e},t)},B=function(n){var t=n.title,e=n.direction,o=n.description,i=n.buttonTitle,c=n.menu,a=n.photo;return Object(r.c)(L.a,{as:"section",css:Object(r.b)(R())},Object(r.c)(z.a,{as:"h2",xs:12,css:Object(r.b)(G())},t),Object(r.c)(z.a,{xs:{span:12,order:1},md:{span:6,order:"left"===e?1:0}},Object(r.c)("p",{dangerouslySetInnerHTML:{__html:o},css:Object(r.b)(S(),b.a.mobile)}),Object(r.c)(W,{isExternal:c.externalLink,link:c.link},Object(r.c)(I.a,{css:J},i))),Object(r.c)(z.a,{xs:{span:12,order:0},md:{span:6,order:"left"===e?0:1}},Object(r.c)("div",{css:Object(r.b)(T(),a,b.a.mobile)})))};t.default=function(){var n=Object(a.c)(),t=[{title:"Lubycon",description:"\n        <strong>Lubycon</strong>은 2014년에 결성된 개발자와 디자이너들의 토이 프로젝트 팀입니다. 멤버들은 일상 속의 아이디어나 새롭게 해보고 싶은 기술을 들고와서 다른 멤버들과 공유하고, 매일 새로운 것들에 도전하면서 프로젝트를 진행하고 있습니다.\n      ",menu:i.i,buttonTitle:"멤버들 보러가기",photo:n.memberImage.childImageSharp.fluid.src},{title:"매거진",description:"\n        <strong>Lubycon</strong>은 자체적인 매거진을 출판하고 있습니다. 이 매거진에는 멤버들이 평소에 나누던 생각이나 함께 프로젝트를 진행하며 생기는 다양한 에피소드들이 담겨 있습니다.\n      ",menu:i.h,buttonTitle:"매거진 보러가기",photo:n.magazineImage.childImageSharp.fluid.src},{title:"블로그 포스팅",description:"\n        멤버들은 각자 블로그에도 포스팅을 하고 있습니다. <strong>Lubycon</strong>의 멤버들은 웹, 영상처리, 머신러닝 등 다양한 분야에서 활동하고 있기 때문에 다양한 내용과 견해에 대한 포스팅을 구경할 수 있습니다. 아래 버튼을 클릭하시면 멤버들의 블로그 포스팅을 한 눈에 보실 수 있습니다.\n      ",menu:i.c,buttonTitle:"멤버들 블로그 보러가기",photo:n.blogImage.childImageSharp.fluid.src},{title:"Lubycon의 프로젝트",description:"\n        Lubycon의 프로젝트는 주로 Github를 사용하여 진행되며, 외부로 알려지고 싶지않은 프로젝트의 경우에는 Bitbucket을 사용합니다. 프로젝트는 하나의 서비스를 만드는 대형 프로젝트일 수도 있고 간단한 기능만 가진 어플리케이션을 개발하는 작은 프로젝트일 수도 있습니다. \n      ",menu:i.f,buttonTitle:"루비콘 깃허브 구경하기",photo:n.githubImage.childImageSharp.fluid.src}];return Object(r.c)(o.a,{pageName:"Home",showHead:!1},Object(r.c)(w,null),Object(r.c)(c.a,null,t.map((function(n,t){var e=n.title,o=n.description,i=n.menu,c=n.buttonTitle,a=n.photo;return Object(r.c)(B,{key:t,title:e,description:o,buttonTitle:c,menu:i,photo:a,direction:t%2?"right":"left"})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-28e342a1308edf9e9ef8.js.map