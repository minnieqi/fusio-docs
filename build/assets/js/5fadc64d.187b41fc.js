"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8207],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Create API from MongoDB",c={unversionedId:"use_cases/create_api_from_mongodb",id:"use_cases/create_api_from_mongodb",title:"Create API from MongoDB",description:"Fusio provides a way to automatically create a REST API based on a MongoDB collection. It creates automatically the",source:"@site/docs/use_cases/create_api_from_mongodb.md",sourceDirName:"use_cases",slug:"/use_cases/create_api_from_mongodb",permalink:"/docs/use_cases/create_api_from_mongodb",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/use_cases/create_api_from_mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create API from ElasticSearch",permalink:"/docs/use_cases/create_api_from_elasticsearch"},next:{title:"Deployment system",permalink:"/docs/use_cases/deployment_system"}},d={},p=[{value:"Provider",id:"provider",level:2},{value:"Example",id:"example",level:2},{value:"/v1/product",id:"v1product",level:3},{value:"<code>GET</code>",id:"get",level:4},{value:"Parameters",id:"parameters",level:5},{value:"<code>POST</code>",id:"post",level:4},{value:"Request",id:"request",level:5},{value:"Response",id:"response",level:5},{value:"/v1/product/:id",id:"v1productid",level:3},{value:"<code>GET</code>",id:"get-1",level:4},{value:"Response",id:"response-1",level:5},{value:"<code>PUT</code>",id:"put",level:4},{value:"Request",id:"request-1",level:5},{value:"Response",id:"response-2",level:5},{value:"<code>DELETE</code>",id:"delete",level:4},{value:"Response",id:"response-3",level:5},{value:"Video",id:"video",level:2}],u={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-api-from-mongodb"},"Create API from MongoDB"),(0,o.kt)("p",null,"Fusio provides a way to automatically create a REST API based on a MongoDB collection. It creates automatically the\nfitting routes, actions and schemas. This can be useful if you want to quickly create a CRUD API."),(0,o.kt)("h2",{id:"provider"},"Provider"),(0,o.kt)("p",null,"Go to the routes panel and click there on the top right briefcase button, then you should see the following dialog:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"routes_provider_sql_table",src:n(5885).Z,width:"1564",height:"720"})),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," you need to select the MongoDB connection which you want to use for the API and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),"\nmust contain a valid collection name. With a click on the Save Button you can start the import. Since MongoDB is by\ndefault schemaless Fusio is not able to automatically generate a schema like for the database provider, but it is\nrecommended that you manually create a schema for your endpoint."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The provider will create two routes below your ",(0,o.kt)("inlineCode",{parentName:"p"},"Base-Path"),". If your ",(0,o.kt)("inlineCode",{parentName:"p"},"Base-Path")," is i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/product")," for a collection\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"app_product"),":"),(0,o.kt)("h3",{id:"v1product"},"/v1/product"),(0,o.kt)("h4",{id:"get"},(0,o.kt)("inlineCode",{parentName:"h4"},"GET")),(0,o.kt)("p",null,"Returns a collection response of all products"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "totalResults": 2,\n  "itemsPerPage": 16,\n  "startIndex": 0,\n  "entry": [\n    {\n      "_id": "507f191e810c19729de860ea",\n      "title": "foo bar",\n      "description": "lorem ipsum",\n      "details": {\n        "price": 10\n      }\n    },\n    {\n      "_id": "507f1f77bcf86cd799439011",\n      "title": "hello world",\n      "description": "lorem ipsum",\n      "details": {\n        "price": 10\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The endpoint supports the following query parameters:"),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"startIndex")),(0,o.kt)("td",{parentName:"tr",align:null},"The start index of the collection")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"count")),(0,o.kt)("td",{parentName:"tr",align:null},"The count of results per page")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sortBy")),(0,o.kt)("td",{parentName:"tr",align:null},"A field name to sort")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sortOrder")),(0,o.kt)("td",{parentName:"tr",align:null},"The sort order either ",(0,o.kt)("inlineCode",{parentName:"td"},"ASC")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"DESC"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"filterBy")),(0,o.kt)("td",{parentName:"tr",align:null},"A field name to filter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"filterValue")),(0,o.kt)("td",{parentName:"tr",align:null},"The filter value")))),(0,o.kt)("h4",{id:"post"},(0,o.kt)("inlineCode",{parentName:"h4"},"POST")),(0,o.kt)("p",null,"Create a new product by sending the following JSON request to the endpoint:"),(0,o.kt)("h5",{id:"request"},"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "another entry",\n  "description": "lorem ipsum",\n  "details": {\n    "price": 10\n  }\n}\n')),(0,o.kt)("h5",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "Document successfully created",\n  "id": "507f191e810c19729de860ea"\n}\n')),(0,o.kt)("h3",{id:"v1productid"},"/v1/product/:id"),(0,o.kt)("h4",{id:"get-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"GET")),(0,o.kt)("p",null,"Returns a single product entry"),(0,o.kt)("h5",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": "507f191e810c19729de860ea",\n  "title": "hello world",\n  "description": "lorem ipsum",\n  "details": {\n    "price": 10\n  }\n}\n')),(0,o.kt)("h4",{id:"put"},(0,o.kt)("inlineCode",{parentName:"h4"},"PUT")),(0,o.kt)("p",null,"Updates a single product entity"),(0,o.kt)("h5",{id:"request-1"},"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "test world",\n  "description": "lorem ipsum",\n  "details": {\n    "price": 19\n  }\n}\n')),(0,o.kt)("h5",{id:"response-2"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "Document successfully updated"\n}\n')),(0,o.kt)("h4",{id:"delete"},(0,o.kt)("inlineCode",{parentName:"h4"},"DELETE")),(0,o.kt)("p",null,"Deletes a single product entry"),(0,o.kt)("h5",{id:"response-3"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "Document successfully deleted"\n}\n')),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/G2Qge5OlJ24",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0},5885:function(e,t,n){t.Z=n.p+"assets/images/routes_provider_mongodb_collection-597517fb65aeea276c3f15d9d4b5825b.png"}}]);