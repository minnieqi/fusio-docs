"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[412],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},p="Setup Monetization",u={unversionedId:"use_cases/setup_monetization",id:"use_cases/setup_monetization",title:"Setup Monetization",description:"Fusio helps you to monetize your API. It has a concept of points which each user can buy. A user can then spend those",source:"@site/docs/use_cases/setup_monetization.md",sourceDirName:"use_cases",slug:"/use_cases/setup_monetization",permalink:"/docs/use_cases/setup_monetization",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/use_cases/setup_monetization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup Developer-Portal",permalink:"/docs/use_cases/setup_developer_portal"},next:{title:"Setup Swagger-UI",permalink:"/docs/use_cases/setup_swagger_ui"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Flow",id:"flow",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-monetization"},"Setup Monetization"),(0,a.kt)("p",null,"Fusio helps you to monetize your API. It has a concept of points which each user can buy. A user can then spend those\npoints by calling specific routes which cost a specific amount of points. The API developer can simply add a cost to\nevery route and request method."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"At first you need to create a plan at the Fusio backend. A plan has a name, a specific amount of points and a price\nassigned."),(0,a.kt)("p",null,"Then you need to configure a payment provider. For this you need to include i.e. the stripe or paypal adapter which\nconfigures a payment provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'composer require fusio/adapter-stripe\nphp bin/fusio system:register "Fusio\\Adapter\\Stripe\\Adapter"\n')),(0,a.kt)("p",null,'Then you need to create a new connection at the Fusio backend. This connection must be named "stripe" and you need to\nprovide your app credentials.'),(0,a.kt)("h2",{id:"flow"},"Flow"),(0,a.kt)("p",null,"If a user of your API wants to obtain points he has to use a configured payment provider. To start the payment process\nyour app has to send a POST request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/consumer/transaction/prepare/stripe")," endpoint (in this example we use\nstripe as provider) with the following payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "planId": 1,\n  "returnUrl": "http://my-app.com/payment/return?transaction_id={transaction_id}"\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"planId")," is the id of a plan which was configured at the backend. The return url is the url of your app where the\nuser returns after the payment was completed. If everything is valid the endpoint returns an approval url of the payment\nprovider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "approvalUrl": ""\n}\n')),(0,a.kt)("p",null,"Your app has to simply redirect the user to this approval url. Then the user authenticates at the payment provider and\napproves the payment. Then the user gets redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/consumer/transaction/execute/{transaction_id}")," endpoint\nwhere Fusio checks whether the payment was accepted. If yes Fusio credits the amount of points to the user."),(0,a.kt)("p",null,"Then it redirects the user to the return url which was provided in the initial prepare call. You app can then lookup the\nstatus of the transaction and display a fitting message."),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"It is also easy to implement a custom payment provider. It is important that the provider supports a redirect based\nflow. It is currently not possible to simply enter the credit card number. To create a new payment provider you need to\ncreate a class which implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fusio\\Engine\\Payment\\ProviderInterface")))}m.isMDXComponent=!0}}]);