(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),O=r,u=l["".concat(c,".").concat(O)]||l[O]||m[O]||i;return n?a.a.createElement(u,o(o({ref:t},p),{},{components:n})):a.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=O;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(1253)),c={id:"core.assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",hide_title:!0},o={unversionedId:"api/interfaces/core.assignoptions",id:"api/interfaces/core.assignoptions",isDocsHomePage:!1,title:"Interface: AssignOptions",description:"Interface: AssignOptions",source:"@site/docs/api/interfaces/core.assignoptions.md",slug:"/api/interfaces/core.assignoptions",permalink:"/docs/next/api/interfaces/core.assignoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/core.assignoptions.md",version:"current",sidebar_label:"AssignOptions",sidebar:"API",previous:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/next/api/classes/reflection.tsmorphmetadataprovider"},next:{title:"Interface: CacheAdapter",permalink:"/docs/next/api/interfaces/core.cacheadapter"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"em",id:"em",children:[]},{value:"merge",id:"merge",children:[]},{value:"mergeObjects",id:"mergeobjects",children:[]},{value:"onlyProperties",id:"onlyproperties",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-assignoptions"},"Interface: AssignOptions"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".AssignOptions"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"AssignOptions"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," | ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/core/src/entity/EntityAssigner.ts#L167"}),"packages/core/src/entity/EntityAssigner.ts:167")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"em"},"em"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"em"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," | ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(i.b)("em",{parentName:"a"},"EntityManager")),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(i.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(i.b)("em",{parentName:"a"},"Connection")),">",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/core/src/entity/EntityAssigner.ts#L170"}),"packages/core/src/entity/EntityAssigner.ts:170")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"merge"},"merge"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"merge"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," | ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/core/src/entity/EntityAssigner.ts#L169"}),"packages/core/src/entity/EntityAssigner.ts:169")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mergeobjects"},"mergeObjects"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"mergeObjects"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," | ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/core/src/entity/EntityAssigner.ts#L168"}),"packages/core/src/entity/EntityAssigner.ts:168")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onlyproperties"},"onlyProperties"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"onlyProperties"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," | ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/core/src/entity/EntityAssigner.ts#L166"}),"packages/core/src/entity/EntityAssigner.ts:166")))}b.isMDXComponent=!0}}]);