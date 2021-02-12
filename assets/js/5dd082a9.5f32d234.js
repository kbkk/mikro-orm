(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1048:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),l=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(a,".").concat(m)]||s[m]||u[m]||o;return r?c.a.createElement(d,i(i({ref:t},b),{},{components:r})):c.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var b=2;b<o;b++)a[b]=r[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},412:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),c=r(8),o=(r(0),r(1048)),a={id:"core.factoryoptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.factoryoptions",id:"api/interfaces/core.factoryoptions",isDocsHomePage:!1,title:"Interface: FactoryOptions",description:"Interface: FactoryOptions",source:"@site/docs/api/interfaces/core.factoryoptions.md",slug:"/api/interfaces/core.factoryoptions",permalink:"/docs/next/api/interfaces/core.factoryoptions",editUrl:null,version:"current",sidebar_label:"FactoryOptions",sidebar:"API",previous:{title:"Interface: EventSubscriber<T>",permalink:"/docs/next/api/interfaces/core.eventsubscriber"},next:{title:"Interface: FindOneOptions<T, P>",permalink:"/docs/next/api/interfaces/core.findoneoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"merge",id:"merge",children:[]},{value:"newEntity",id:"newentity",children:[]},{value:"refresh",id:"refresh",children:[]}]}],b={toc:p};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-factoryoptions"},"Interface: FactoryOptions"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".FactoryOptions"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FactoryOptions"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cfbd462/packages/core/src/entity/EntityFactory.ts#L12"},"packages/core/src/entity/EntityFactory.ts:12")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"initialized"},"initialized"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"initialized"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cfbd462/packages/core/src/entity/EntityFactory.ts#L8"},"packages/core/src/entity/EntityFactory.ts:8")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"merge"},"merge"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"merge"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cfbd462/packages/core/src/entity/EntityFactory.ts#L10"},"packages/core/src/entity/EntityFactory.ts:10")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"newentity"},"newEntity"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"newEntity"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cfbd462/packages/core/src/entity/EntityFactory.ts#L9"},"packages/core/src/entity/EntityFactory.ts:9")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"refresh"},"refresh"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"refresh"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cfbd462/packages/core/src/entity/EntityFactory.ts#L11"},"packages/core/src/entity/EntityFactory.ts:11")))}l.isMDXComponent=!0}}]);