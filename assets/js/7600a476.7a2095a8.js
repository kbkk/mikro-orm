(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,f=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return t?i.a.createElement(f,a(a({ref:n},p),{},{components:t})):i.a.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<o;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},510:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(8),o=(t(0),t(1048)),c={id:"knex.knex.sqlite3connectionconfig",title:"Interface: Sqlite3ConnectionConfig",sidebar_label:"Sqlite3ConnectionConfig",hide_title:!0},a={unversionedId:"api/interfaces/knex.knex.sqlite3connectionconfig",id:"version-4.4/api/interfaces/knex.knex.sqlite3connectionconfig",isDocsHomePage:!1,title:"Interface: Sqlite3ConnectionConfig",description:"Interface: Sqlite3ConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.sqlite3connectionconfig.md",slug:"/api/interfaces/knex.knex.sqlite3connectionconfig",permalink:"/docs/api/interfaces/knex.knex.sqlite3connectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.sqlite3connectionconfig.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612893806,sidebar_label:"Sqlite3ConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: SqlNative",permalink:"/docs/api/interfaces/knex.knex.sqlnative"},next:{title:"Interface: StringTagSupport",permalink:"/docs/api/interfaces/knex.knex.stringtagsupport"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"debug",id:"debug",children:[]},{value:"filename",id:"filename",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-sqlite3connectionconfig"},"Interface: Sqlite3ConnectionConfig"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Sqlite3ConnectionConfig"),Object(o.b)("p",null,"Used with SQLite3 adapter"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Sqlite3ConnectionConfig"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"debug"},"debug"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"debug"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2059"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"filename"},"filename"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"filename"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2058"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"expirationChecker"),":"))}s.isMDXComponent=!0}}]);