"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[412],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c="Setup Monetization",u={unversionedId:"use_cases/setup_monetization",id:"use_cases/setup_monetization",title:"Setup Monetization",description:"Fusio helps you to monetize your API. It has a concept of points which each user can buy. A user can then spend those",source:"@site/docs/use_cases/setup_monetization.md",sourceDirName:"use_cases",slug:"/use_cases/setup_monetization",permalink:"/docs/use_cases/setup_monetization",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/use_cases/setup_monetization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup Developer-Portal",permalink:"/docs/use_cases/setup_developer_portal"},next:{title:"Setup Swagger-UI",permalink:"/docs/use_cases/setup_swagger_ui"}},p={},l=[{value:"Installation",id:"installation",level:2},{value:"Video",id:"video",level:2}],d={toc:l};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-monetization"},"Setup Monetization"),(0,i.kt)("p",null,"Fusio helps you to monetize your API. It has a concept of points which each user can buy. A user can then spend those\npoints by calling specific routes which cost a specific amount of points. The API developer can simply add a cost to\nevery route and request method."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"At first you need to create a plan at the Fusio backend. A plan has a name, a specific amount of points and a price\nassigned."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"plan",src:n(5840).Z,width:"1317",height:"396"})),(0,i.kt)("p",null,"Then you need to configure a payment provider. For this you need to include i.e. the stripe or paypal adapter which\nconfigures a payment provider."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'composer require fusio/adapter-stripe\nphp bin/fusio system:register "Fusio\\Adapter\\Stripe\\Adapter"\n')),(0,i.kt)("p",null,'Then you need to create a new connection at the Fusio backend. This connection must be named "stripe" and you need to\nprovide your app credentials. At the connection you need to provide the credentials and now your users can purchase a\nplan.'),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/AsyLUdz9oOU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}f.isMDXComponent=!0},5840:function(e,t,n){t.Z=n.p+"assets/images/plan-ac0a51d9ec10867013c840eee5cd88f3.png"}}]);