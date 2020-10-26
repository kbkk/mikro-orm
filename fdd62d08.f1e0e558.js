(window.webpackJsonp=window.webpackJsonp||[]).push([[735],{794:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(6),a=(n(0),n(806)),c={title:"Using AsyncLocalStorage"},i={unversionedId:"async-local-storage",id:"async-local-storage",isDocsHomePage:!1,title:"Using AsyncLocalStorage",description:"By default, domain api use used in the RequestContext helper. Since v4.0.3,",source:"@site/docs/async-local-storage.md",slug:"/async-local-storage",permalink:"/docs/next/async-local-storage",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/async-local-storage.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1603701871,sidebar:"docs",previous:{title:"Using native BigInt PKs (MySQL and PostgreSQL)",permalink:"/docs/next/using-bigint-pks"},next:{title:"Creating Custom Driver",permalink:"/docs/next/custom-driver"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, ",Object(a.b)("inlineCode",{parentName:"p"},"domain")," api use used in the ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," helper. Since v4.0.3,\nyou can use the new ",Object(a.b)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," too, if you are on up to date node version:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const storage = new AsyncLocalStorage<EntityManager>();\n\nconst orm = await MikroORM.init({\n  context: () => storage.getStore(),\n  // ...\n});\n\napp.use((req, res, next) => {\n  storage.run(orm.em.fork(true, true), next);\n});\n")))}l.isMDXComponent=!0},806:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);