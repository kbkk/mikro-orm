(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),l=function(e){var n=c.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return c.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},u=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),u=r,f=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return t?c.a.createElement(f,a(a({ref:n},b),{},{components:t})):c.a.createElement(f,a({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var b=2;b<o;b++)i[b]=t[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),c=t(8),o=(t(0),t(1048)),i={id:"knex.knex-1.socketconnectionconfig",title:"Interface: SocketConnectionConfig",sidebar_label:"SocketConnectionConfig",custom_edit_url:null,hide_title:!0},a={unversionedId:"api/interfaces/knex.knex-1.socketconnectionconfig",id:"api/interfaces/knex.knex-1.socketconnectionconfig",isDocsHomePage:!1,title:"Interface: SocketConnectionConfig",description:"Interface: SocketConnectionConfig",source:"@site/docs/api/interfaces/knex.knex-1.socketconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.socketconnectionconfig",permalink:"/docs/next/api/interfaces/knex.knex-1.socketconnectionconfig",editUrl:null,version:"current",sidebar_label:"SocketConnectionConfig",sidebar:"API",previous:{title:"Interface: Select<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.select"},next:{title:"Interface: Sql",permalink:"/docs/next/api/interfaces/knex.knex-1.sql"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"password",id:"password",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],b={toc:p};function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-socketconnectionconfig"},"Interface: SocketConnectionConfig"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".SocketConnectionConfig"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SocketConnectionConfig"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"database"},"database"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"database"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2073"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"debug"},"debug"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"debug"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2074"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"password"},"password"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"password"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2072"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"socketpath"},"socketPath"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"socketPath"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2070"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"user"},"user"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"user"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2071"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional"),Object(o.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2075"))}l.isMDXComponent=!0}}]);