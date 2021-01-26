(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(1253)),i={id:"knex.index",title:"Interface: Index",sidebar_label:"Index",hide_title:!0},o={unversionedId:"api/interfaces/knex.index",id:"api/interfaces/knex.index",isDocsHomePage:!1,title:"Interface: Index",description:"Interface: Index",source:"@site/docs/api/interfaces/knex.index.md",slug:"/api/interfaces/knex.index",permalink:"/docs/next/api/interfaces/knex.index",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/knex.index.md",version:"current",sidebar_label:"Index",sidebar:"API",previous:{title:"Interface: IQueryBuilder<T>",permalink:"/docs/next/api/interfaces/knex.iquerybuilder"},next:{title:"Interface: IndexDef",permalink:"/docs/next/api/interfaces/knex.indexdef"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"composite",id:"composite",children:[]},{value:"keyName",id:"keyname",children:[]},{value:"primary",id:"primary",children:[]},{value:"unique",id:"unique",children:[]}]}],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-index"},"Interface: Index"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".Index"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Index"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"columnname"},"columnName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"columnName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/typings.ts#L54"}),"packages/knex/src/typings.ts:54")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"composite"},"composite"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"composite"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," | ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/typings.ts#L58"}),"packages/knex/src/typings.ts:58")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"keyname"},"keyName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"keyName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/typings.ts#L55"}),"packages/knex/src/typings.ts:55")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"primary"},"primary"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"primary"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/typings.ts#L57"}),"packages/knex/src/typings.ts:57")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unique"},"unique"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"unique"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/typings.ts#L56"}),"packages/knex/src/typings.ts:56")))}l.isMDXComponent=!0}}]);