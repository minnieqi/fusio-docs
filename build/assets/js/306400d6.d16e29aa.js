"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[754],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3619:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={},s="PHP Sandbox",p={unversionedId:"backend/api/action/php-sandbox",id:"backend/api/action/php-sandbox",title:"PHP Sandbox",description:"The sandbox action provides a simple way to write PHP code which gets directly executed on the server. This can be",source:"@site/docs/backend/api/action/php-sandbox.md",sourceDirName:"backend/api/action",slug:"/backend/api/action/php-sandbox",permalink:"/docs/backend/api/action/php-sandbox",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/backend/api/action/php-sandbox.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PHP Processor",permalink:"/docs/backend/api/action/php-processor"},next:{title:"Redis Hash Delete",permalink:"/docs/backend/api/action/redis-hash-delete"}},u={},l=[{value:"Video",id:"video",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"php-sandbox"},"PHP Sandbox"),(0,a.kt)("p",null,"The sandbox action provides a simple way to write PHP code which gets directly executed on the server. This can be\nuseful if you want to build fast a first prototype endpoint. Note by default the sandbox action is deactivated, to\nactivate the action you need to set the env ",(0,a.kt)("inlineCode",{parentName:"p"},"FUSIO_PHP_SANDBOX")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"on"),". The following shows a simple action which\nreturns all data from the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$method = $request->getMethod();\n$headers = $request->getHeaders();\n$uriFragments = $request->getUriFragments();\n$body = $request->getBody();\n\n// returns a configured connection, in case of a SQL connection this returns a doctrine DBAL instance which you could\n// now use to query the database\n//$connection = $connector->getConnection('mysql');\n\nreturn $response->build(200, [], [\n    'method' => $method,\n    'headers' => $headers,\n    'uriFragments' => $uriFragments,\n    'body' => get_class($body),\n]);\n\n")),(0,a.kt)("p",null,"Please take a look at our ",(0,a.kt)("a",{parentName:"p",href:"https://www.fusio-project.org/documentation/php"},"PHP API")," to get a complete overview about\nall available functions. "),(0,a.kt)("p",null,"Note at the sandbox action we use for security reasons also a sandbox which allows you to use only specific whitelisted\nfunctions and classes. Please take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apioo/psx-sandbox"},"Sandbox")," component for more\ninformation. In general if your logic is more complex it is recommended to ",(0,a.kt)("a",{parentName:"p",href:"./../../../use_cases/develop_custom_action"},"develop a custom action"),"."),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Bho2cpIn3_k",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}f.isMDXComponent=!0}}]);