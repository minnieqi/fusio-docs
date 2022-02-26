"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5509],{3905:function(e,A,n){n.d(A,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function r(e,A,n){return A in e?Object.defineProperty(e,A,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[A]=n,e}function a(e,A){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var A=1;A<arguments.length;A++){var n=null!=arguments[A]?arguments[A]:{};A%2?a(Object(n),!0).forEach((function(A){r(e,A,n[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(n,A))}))}return e}function c(e,A){if(null==e)return{};var n,t,r=function(e,A){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],A.indexOf(n)>=0||(r[n]=e[n]);return r}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],A.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),l=function(e){var A=t.useContext(u),n=A;return e&&(n="function"==typeof e?e(A):o(o({},A),e)),n},s=function(e){var A=l(e.components);return t.createElement(u.Provider,{value:A},e.children)},p={inlineCode:"code",wrapper:function(e){var A=e.children;return t.createElement(t.Fragment,{},A)}},i=t.forwardRef((function(e,A){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=l(n),f=r,v=i["".concat(u,".").concat(f)]||i[f]||p[f]||a;return n?t.createElement(v,o(o({ref:A},s),{},{components:n})):t.createElement(v,o({ref:A},s))}));function f(e,A){var n=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=i;var c={};for(var u in A)hasOwnProperty.call(A,u)&&(c[u]=A[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}i.displayName="MDXCreateElement"},1337:function(e,A,n){n.r(A),n.d(A,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return f}});var t=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],c={},u="File Uploads",l={unversionedId:"use_cases/file_uploads",id:"use_cases/file_uploads",title:"File Uploads",description:"This chapter explains how to handle file uploads at an action. To handle file uploads your route must have as request",source:"@site/docs/use_cases/file_uploads.md",sourceDirName:"use_cases",slug:"/use_cases/file_uploads",permalink:"/docs/use_cases/file_uploads",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/use_cases/file_uploads.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Develop custom action",permalink:"/docs/use_cases/develop_custom_action"},next:{title:"Import external specification",permalink:"/docs/use_cases/import_external_specification"}},s={},p=[],i={toc:p};function f(e){var A=e.components,c=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},i,c,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-uploads"},"File Uploads"),(0,a.kt)("p",null,'This chapter explains how to handle file uploads at an action. To handle file uploads your route must have as request\nschema "Passthru" selected, this means that Fusio does not try to validate your request via a schema and simply passes\nthe data to your action.'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"routes_file_upload",src:n(220).Z,width:"919",height:"732"})),(0,a.kt)("p",null,"If you upload a file PHP always moves the upload to a temp file, then you need to move this temp file to your target\ndirectory. In the following a simple example which shows how to handle a file upload."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$body = $request->getBody();\n\nif (!$body instanceof \\Fusio\\Engine\\Record\\PassthruRecord) {\n    // this means we have not set the body to Passthru\n    throw new \\PSX\\Http\\Exception\\BadRequestException('Provided an invalid body');\n}\n\n$payload = $body->getPayload();\nif (!$payload instanceof \\PSX\\Data\\Multipart\\Body) {\n    // this means our request is not a multipart request\n    throw new \\PSX\\Http\\Exception\\BadRequestException('Provided no multipart body');\n}\n\n// we can now move the file to our target location, in this case we use simply the Fusio cache folder\n$payload->getFile('my_file')->moveTo(PSX_PATH_CACHE . '/my_file.tmp');\n\n// we can also access other values from the request\n$bar = $payload->getPart('foo');\n\nreturn $response->build(200, [], [\n    'success' => true,\n    'foo' => $bar,\n]);\n\n")),(0,a.kt)("p",null,"If we add a route for this action and use a rest client to send a ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," request to the endpoint."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"upload_file_request.png",src:n(9249).Z,width:"837",height:"223"})),(0,a.kt)("p",null,"Then we would get the following response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "foo": "bar"\n}\n')),(0,a.kt)("p",null,"Now we should see the file ",(0,a.kt)("inlineCode",{parentName:"p"},"my_file.tmp")," at the ",(0,a.kt)("inlineCode",{parentName:"p"},"cache/")," directory of Fusio with the content which you have send to\nthe endpoint."))}f.isMDXComponent=!0},220:function(e,A,n){A.Z=n.p+"assets/images/routes_file_upload-d4b46148869cbf2ca7a7ff26d3219c05.png"},9249:function(e,A){A.Z="data:image/png;base64,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"}}]);