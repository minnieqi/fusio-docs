"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6243],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2557:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Integration",u={unversionedId:"concepts/integration",id:"concepts/integration",title:"Integration",description:"Fusio is often used to create a REST API beside an existing web app. This chapter describes best practices how you can",source:"@site/docs/concepts/integration.md",sourceDirName:"concepts",slug:"/concepts/integration",permalink:"/docs/concepts/integration",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/concepts/integration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/docs/concepts/event"},next:{title:"JsonRPC",permalink:"/docs/concepts/jsonrpc"}},l={},p=[{value:"HTTP",id:"http",level:2},{value:"RPC",id:"rpc",level:2},{value:"Message-Queue",id:"message-queue",level:2},{value:"SQL",id:"sql",level:2},{value:"Include",id:"include",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration"},"Integration"),(0,a.kt)("p",null,"Fusio is often used to create a REST API beside an existing web app. This chapter describes best practices how you can\nintegrate your app without ignoring the business logic."),(0,a.kt)("p",null,"At first we should distinguish between read and write requests. A read request is a request which does not modify the\nstate (database) of your app. For this case you can also connect directly to your app database. A write request modifies\nthe state (database) of your app i.e. it creates a new record. In this case you most likely want to run the business\nlogic of your app so that all data gets validated and all depending mechanisms are executed. For this case there are\nmultiple ways to run your business logic:"),(0,a.kt)("h2",{id:"http"},"HTTP"),(0,a.kt)("p",null,"Your app provides an internal API which gets called by Fusio. In this case your action uses a HTTP connection to call\nthe internal API of your app. The internal API also does not need to have a great design since the user only faces the\nFusio endpoints. I.e. you could create a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"api.php")," script which bootstraps your app and invokes a specific\nmethod."),(0,a.kt)("h2",{id:"rpc"},"RPC"),(0,a.kt)("p",null,"Your app provides an RPC service (i.e. Apache Thrift or GRPC) which can be called by Fusio. This has also the advantage\nthat the performance is much better then an internal HTTP API because modern RPC services mostly serialize the data into\nan optimized binary format instead of JSON or XML."),(0,a.kt)("h2",{id:"message-queue"},"Message-Queue"),(0,a.kt)("p",null,"Your app provides a message queue which Fusio can use. This has also great performance but it is a unidirectional\nconnection, this means the message queue can never return a response to Fusio. In most cases the response message must\nbe defined in the action. Fusio has connections to connect to a AMQP or Beanstalk message queue."),(0,a.kt)("h2",{id:"sql"},"SQL"),(0,a.kt)("p",null,"In case you have no additional business logic which needs to be executed you can also directly connect to the database\nand insert a new entry."),(0,a.kt)("h2",{id:"include"},"Include"),(0,a.kt)("p",null,"Another (but not recommended) solution is to include your app bootstrap code inside an action. This is possible but\nthen you are mixing the context between your existing app and Fusio. In most cases it is recommended to use one of the\napproaches described above. But for some small apps it might be also feasible since this has basically no performance\npenalty."))}h.isMDXComponent=!0}}]);