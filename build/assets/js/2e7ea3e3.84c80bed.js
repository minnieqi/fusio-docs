"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8765],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},184:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return k}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Invoke protected route",p={unversionedId:"use_cases/invoke_protected_route",id:"use_cases/invoke_protected_route",title:"Invoke protected route",description:"By default every route is private unless you explicit mark it as public. In order to access a private route a user needs",source:"@site/docs/use_cases/invoke_protected_route.md",sourceDirName:"use_cases",slug:"/use_cases/invoke_protected_route",permalink:"/docs/use_cases/invoke_protected_route",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/use_cases/invoke_protected_route.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Invoke async action",permalink:"/docs/use_cases/invoke_async_action"},next:{title:"Setup Developer-Portal",permalink:"/docs/use_cases/setup_developer_portal"}},l={},u=[{value:"Assign scope to user",id:"assign-scope-to-user",level:2},{value:"Obtain access token",id:"obtain-access-token",level:2},{value:"Basic",id:"basic",level:3},{value:"OAuth2",id:"oauth2",level:3},{value:"Client credentials",id:"client-credentials",level:4},{value:"Refresh token",id:"refresh-token",level:4},{value:"Invoke a protected endpoint",id:"invoke-a-protected-endpoint",level:2},{value:"Video",id:"video",level:2}],d={toc:u};function k(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"invoke-protected-route"},"Invoke protected route"),(0,a.kt)("p",null,"By default every route is private unless you explicit mark it as public. In order to access a private route a user needs\nto provide an access token."),(0,a.kt)("h2",{id:"assign-scope-to-user"},"Assign scope to user"),(0,a.kt)("p",null,"Before obtaining an access token it is important that scopes are assigned to the user. The scopes which are assigned to\nthe user depended on the role of the user. If you create a new role you can select the scopes s."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"role_create",src:n(4706).Z,width:"1308",height:"696"})),(0,a.kt)("p",null,"At the system setting you can also configure a default role, this role gets then assigned to every new user which\nregisters at the developer portal, by default this is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," role."),(0,a.kt)("h2",{id:"obtain-access-token"},"Obtain access token"),(0,a.kt)("h3",{id:"basic"},"Basic"),(0,a.kt)("p",null,"The most basic way to obtain an access token is to use your personal credentials i.e."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /consumer/login\nContent-Type: application/json\n\n{\n  "username": "[username]",\n  "password": "[password]",\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "token": "",\n  "expires_in": "",\n  "refresh_token": ""\n}\n')),(0,a.kt)("h3",{id:"oauth2"},"OAuth2"),(0,a.kt)("p",null,"It is also possible to use our ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"OAuth2")," authorization endpoint."),(0,a.kt)("h4",{id:"client-credentials"},"Client credentials"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /authorization/token\nAuthorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=client_credentials\n")),(0,a.kt)("p",null,"As Basic authorization header you need to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},'[app key] + ":" + [app secret]')," as base64 encoded string. It is\nalso possible to provide your username and password but in general it is recommended to use the app key and secret since\nthe app access can always be revoked later on."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "access_token": "",\n  "token_type": "bearer",\n  "expires_in": 3600,\n  "refresh_token": ""\n}\n')),(0,a.kt)("h4",{id:"refresh-token"},"Refresh token"),(0,a.kt)("p",null,"Most token responses always include a refresh token. You can use this refresh token to extend an access token before it\nexpires."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /authorization/token\nAuthorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=refresh_token&refresh_token=[refresh_token]\n")),(0,a.kt)("p",null,"Like at the client credentials call the Basic header must contain the base64 encode app key and secret."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "access_token": "",\n  "token_type": "bearer",\n  "expires_in": 3600,\n  "refresh_token": ""\n}\n')),(0,a.kt)("h2",{id:"invoke-a-protected-endpoint"},"Invoke a protected endpoint"),(0,a.kt)("p",null,"If we have obtained an access token we can now invoke a protected endpoint. Therefor we only need to add the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header to a request containing he access token as ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer")," token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /protected_endpoint HTTP/1.1\nAuthorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5N2JkNDUzYjdlMDZlOWFlMDQxNi00YmY2MWFiYjg4MDJjZmRmOWZmN2UyNDg4OTNmNzYyYmU5Njc5MGUzYTk4NDQ3MDEtYjNkYTk1MDYyNCIsImlhdCI6MTQ5MTE2NzIzNiwiZXhwIjoxNDkxMTcwODM2LCJuYW1lIjoidGVzdCJ9.T49Af5wnPIFYbPer3rOn-KV5PcN0FLcBVykUMCIAuwI\nContent-Type: application/json\n\n{\n  "title": "lorem ipsum"\n}\n')),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/DkZAB9FHack",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}k.isMDXComponent=!0},4706:function(e,t,n){t.Z=n.p+"assets/images/role_create-d6229b53eb4875b5565c85fb7dfe155c.png"}}]);