"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5469],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6005:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},p="Worker-Java",s={unversionedId:"backend/api/action/worker-java",id:"backend/api/action/worker-java",title:"Worker-Java",description:"The Worker-Java executes the provided Java code at the remote worker. Note the",source:"@site/docs/backend/api/action/worker-java.md",sourceDirName:"backend/api/action",slug:"/backend/api/action/worker-java",permalink:"/docs/backend/api/action/worker-java",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/backend/api/action/worker-java.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Util Static Response",permalink:"/docs/backend/api/action/util-static-response"},next:{title:"Worker-Javascript",permalink:"/docs/backend/api/action/worker-javascript"}},u={},l=[{value:"Example",id:"example",level:2}],m={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"worker-java"},"Worker-Java"),(0,a.kt)("p",null,"The Worker-Java executes the provided Java code at the remote worker. Note the\nclass name must be the same as the action name. More information about the\nworker at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apioo/fusio-worker-java"},"https://github.com/apioo/fusio-worker-java")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.fusioproject.worker.ActionAbstract;\nimport org.fusioproject.worker.Connector;\nimport org.fusioproject.worker.Dispatcher;\nimport org.fusioproject.worker.Logger;\nimport org.fusioproject.worker.generated.Context;\nimport org.fusioproject.worker.generated.Request;\nimport org.fusioproject.worker.generated.Response;\nimport java.sql.Connection;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\n\npublic class MyJavaAction extends ActionAbstract {\n\n    public MyJavaAction(Connector connector, Dispatcher dispatcher, Logger logger) {\n        super(connector, dispatcher, logger);\n    }\n\n    public Response handle(Request request, Context context) throws Exception {\n\n        Connection connection = (Connection) this.connector.getConnection("my_db");\n        Statement stmt = connection.createStatement();\n        ResultSet result = stmt.executeQuery("SELECT * FROM app_todo");\n\n        List<HashMap<String, String>> rows = new ArrayList<HashMap<String, String>>();\n        while (result.next()) {\n            HashMap<String, String> row = new HashMap<String, String>();\n            row.put("id", result.getString(1));\n            row.put("title", result.getString(3));\n            rows.add(row);\n        }\n\n        HashMap<String, Object> body = new HashMap<String, Object>();\n        body.put("hello", "foobar");\n        body.put("result", rows);\n\n        return this.response.build(200, null, body);\n\n    }\n\n}\n')))}d.isMDXComponent=!0}}]);