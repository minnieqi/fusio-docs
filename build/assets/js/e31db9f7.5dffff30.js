"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6915],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={},c="Serialization",p={unversionedId:"concepts/serialization",id:"concepts/serialization",title:"Serialization",description:"Fusio has a general mechanism to serialize the action response to the fitting format for a client. The serializer is",source:"@site/docs/concepts/serialization.md",sourceDirName:"concepts",slug:"/concepts/serialization",permalink:"/docs/concepts/serialization",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/concepts/serialization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SDK Generation",permalink:"/docs/concepts/sdk_generation"},next:{title:"Social Login",permalink:"/docs/concepts/social_login"}},l={},u=[{value:"Custom writer",id:"custom-writer",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serialization"},"Serialization"),(0,a.kt)("p",null,"Fusio has a general mechanism to serialize the action response to the fitting format for a client. The serializer is\nused in case the action returns an array or stdClass. It is also possible to return a string as response body but in\nthis case Fusio simply redirects this response."),(0,a.kt)("p",null,"Fusio respects also the HTTP ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept")," header. This means if the HTTP request contains i.e. the header\n",(0,a.kt)("inlineCode",{parentName:"p"},"Accept: application/xml")," Fusio uses the XML serializer to generate a XML response from the data. By default Fusio uses\nthe JSON serializer. Besides the Accept header it is also possible to explicit define a serializer by using the format\nquery parameter i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"?format=xml")),(0,a.kt)("h2",{id:"custom-writer"},"Custom writer"),(0,a.kt)("p",null,"If you want to develop a custom serializer you can create a class which implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSX\\Data\\WriterInterface"),". This\nclass receives the raw data and needs to return a string. To add your custom class you need to add the writer to the io\nservice at the container.php file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/** @var PSX\\Data\\Processor */\n$container->set('io', function($c){\n    $config = \\PSX\\Data\\Configuration::createDefault(\n        $c->get('annotation_reader'),\n        $c->get('schema_manager'),\n        $c->get('config')->get('psx_soap_namespace')\n    );\n\n    $phpWriter = new \\App\\Writer\\Php();\n\n    $config->getWriterFactory()->addWriter($phpWriter);\n\n    return new \\PSX\\Data\\Processor($config);\n});\n")),(0,a.kt)("p",null,"As example we develop a custom writer which serializes the response data using the native PHP serialize function. In\nreality this is not really useful since the format is not language independent but it shows the general mechanism:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Writer;\n\nclass Php implements \\PSX\\Data\\WriterInterface\n{\n    public function write($data)\n    {\n        return serialize($data);\n    }\n\n    public function isContentTypeSupported(\\PSX\\Http\\MediaType $contentType)\n    {\n        return $contentType->getName() == 'application/php';\n    }\n\n    public function getContentType()\n    {\n        return 'application/php';\n    }\n}\n")),(0,a.kt)("p",null,"Also at the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.php")," file you need to add the class to the allowed writer classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"'psx_supported_writer'    => [\n    \\PSX\\Data\\Writer\\Json::class,\n    \\PSX\\Data\\Writer\\Jsonp::class,\n    \\PSX\\Data\\Writer\\Jsonx::class,\n    \\App\\Writer\\Php::class,\n],\n")),(0,a.kt)("p",null,"Then it would be possible to use the writer by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept: application/php")," header or the query parameter\n",(0,a.kt)("inlineCode",{parentName:"p"},"?format=php"),"."))}d.isMDXComponent=!0}}]);