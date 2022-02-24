"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2802],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||l[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},p="App",s={unversionedId:"backend/consumer/app",id:"backend/consumer/app",title:"App",description:"An app enables the consumer to request an access token through the app key and",source:"@site/docs/backend/consumer/app.md",sourceDirName:"backend/consumer",slug:"/backend/consumer/app",permalink:"/docs/backend/consumer/app",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/backend/consumer/app.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Consumer",permalink:"/docs/backend/consumer/"},next:{title:"Scope",permalink:"/docs/backend/consumer/scope"}},u=[{value:"Authorization code",id:"authorization-code",children:[],level:2},{value:"Implicit",id:"implicit",children:[],level:2},{value:"Password",id:"password",children:[],level:2}],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app"},"App"),(0,a.kt)("p",null,"An app enables the consumer to request an access token through the app key and\nsecret. With the access token it is possible to request protected API\nendpoints. There is a default consumer implementation located at ",(0,a.kt)("inlineCode",{parentName:"p"},"developer/"),"\nwhich enables a user to manage their apps. The consumer can use any OAuth2 client\nto request an access token. Fusio supports by default the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization_code"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"implicit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," grant type. Please take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"OAuth2")," RFC for\nmore information about the flow."),(0,a.kt)("h2",{id:"authorization-code"},"Authorization code"),(0,a.kt)("p",null,"At first you have to redirect the client to the consumer endpoint containing\nthe app key, redirect uri and the needed scopes i.e.:\n",(0,a.kt)("inlineCode",{parentName:"p"},"/developer/auth?response_type=code&client_id=[key]&redirect_uri=[url]&scope=foo,bar"),".\nAfter the user has authenticated he approves or denies the access. If he accepts\nthe user gets redirected to the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect_uri"),". Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect_uri"),"\nmust have the same host as the url which was provided for the app. The callback\ncontains a GET parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," which can be ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749#section-4.1.3"},"exchanged")," for an access token at\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"/authorization/token")," endpoint."),(0,a.kt)("h2",{id:"implicit"},"Implicit"),(0,a.kt)("p",null,"Mostly used for javascript apps. Like in the authorization code flow the app\nredirects the user to the consumer endpoint i.e.:\n",(0,a.kt)("inlineCode",{parentName:"p"},"/developer/auth?response_type=token&client_id=[key]&redirect_uri=[url]&scope=foo,bar"),"\nIf the user has authenticated and approved the app the user gets redirected to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect_uri"),". The callback contains the access token in the ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749#section-4.2.2"},"fragment"),"\ncomponent. The access tokens which are issued through the implicit grant have\nusually a much shorter life time because they are more insecure. It is also\npossible to deactivate the implicit grant through the configuration."),(0,a.kt)("h2",{id:"password"},"Password"),(0,a.kt)("p",null,"A user can use the password grant to obtain directly an access token with\ntheir username and password. Therefor he has to send a ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749#section-4.3.2"},"direct")," request to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"/authorization/token")," endpoint."))}d.isMDXComponent=!0}}]);