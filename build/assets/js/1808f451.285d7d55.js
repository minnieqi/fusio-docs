"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6828],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5531:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return f}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={},c="SQL Builder",u={unversionedId:"backend/api/action/sql-builder",id:"backend/api/action/sql-builder",title:"SQL Builder",description:"Through the SQL builder action you can create complex nested queries using a JSON",source:"@site/docs/backend/api/action/sql-builder.md",sourceDirName:"backend/api/action",slug:"/backend/api/action/sql-builder",permalink:"/docs/backend/api/action/sql-builder",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/backend/api/action/sql-builder.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SMTP Send",permalink:"/docs/backend/api/action/smtp-send"},next:{title:"SQL Delete",permalink:"/docs/backend/api/action/sql-delete"}},p={},s=[{value:"Example",id:"example",level:2}],d={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sql-builder"},"SQL Builder"),(0,o.kt)("p",null,"Through the SQL builder action you can create complex nested queries using a JSON\nnotation. The following example provides a first overview:"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "totalEntries": {\n    "$value": "SELECT COUNT(*) AS cnt FROM psx_sql_provider_news",\n    "$definition": {\n      "$key": "cnt",\n      "$field": "integer"\n    }\n  },\n  "entries": {\n    "$collection": "SELECT id, authorId, title, createDate FROM psx_sql_provider_news ORDER BY id ASC LIMIT :startIndex, 8",\n    "$params": {\n      "startIndex": 0\n    },\n    "$definition": {\n      "id": {\n        "$key": "id",\n        "$field": "integer"\n      },\n      "title": "title",\n      "tags": {\n        "$column": "SELECT title FROM psx_sql_provider_news",\n        "$definition": "title"\n      },\n      "author": {\n        "$entity": "SELECT id, name, uri FROM psx_sql_provider_author WHERE id = :id",\n        "$params": {\n          "id": {\n            "$ref": "authorId"\n          }\n        },\n        "$definition": {\n          "displayName": "name",\n          "uri": "uri"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"It generates the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "totalEntries": 2,\n  "entries": [\n    {\n      "id": 1,\n      "title": "foo",\n      "tags": [\n        "foo",\n        "bar"\n      ],\n      "author": {\n        "displayName": "Foo Bar",\n        "uri": "http:\\/\\/phpsx.org"\n      }\n    },\n    {\n      "id": 2,\n      "title": "bar",\n      "tags": [\n        "foo",\n        "bar"\n      ],\n      "author": {\n        "displayName": "Foo Bar",\n        "uri": "http:\\/\\/phpsx.org"\n      }\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);