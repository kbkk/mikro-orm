(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(c,".").concat(m)]||s[m]||O[m]||a;return r?o.a.createElement(d,b(b({ref:t},p),{},{components:r})):o.a.createElement(d,b({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},629:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(1253)),c={id:"onetooneoptions",title:"Interface: OneToOneOptions<T, O>",sidebar_label:"OneToOneOptions"},b={unversionedId:"api/interfaces/onetooneoptions",id:"version-4.3/api/interfaces/onetooneoptions",isDocsHomePage:!1,title:"Interface: OneToOneOptions<T, O>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/interfaces/onetooneoptions.md",slug:"/api/interfaces/onetooneoptions",permalink:"/docs/4.3/api/interfaces/onetooneoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/onetooneoptions.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611736712,sidebar_label:"OneToOneOptions",sidebar:"version-4.3/API",previous:{title:"Interface: Node",permalink:"/docs/4.3/api/interfaces/node"},next:{title:"Interface: PoolConfig",permalink:"/docs/4.3/api/interfaces/poolconfig"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"inversedBy",id:"inversedby",children:[]},{value:"mapToPk",id:"maptopk",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdateIntegrity",id:"onupdateintegrity",children:[]},{value:"owner",id:"owner",children:[]},{value:"primary",id:"primary",children:[]},{value:"wrappedReference",id:"wrappedreference",children:[]}]}],p={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"type-parameters"},"Type parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"T"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"O"))))),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{}"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"OneToOneOptions")))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"inversedby"},"inversedBy"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inversedBy"),": string & keyof T ","|"," (e: T) => any"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/decorators/OneToOne.ts#L15"}),"packages/core/src/decorators/OneToOne.ts:15"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"maptopk"},"mapToPk"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"mapToPk"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/decorators/OneToOne.ts#L18"}),"packages/core/src/decorators/OneToOne.ts:18"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ondelete"},"onDelete"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onDelete"),": ",'"',"cascade",'"'," ","|"," ",'"',"no action",'"'," ","|"," ",'"',"set null",'"'," ","|"," ",'"',"set default",'"'," ","|"," string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/decorators/OneToOne.ts#L19"}),"packages/core/src/decorators/OneToOne.ts:19"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onupdateintegrity"},"onUpdateIntegrity"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onUpdateIntegrity"),": ",'"',"cascade",'"'," ","|"," ",'"',"no action",'"'," ","|"," ",'"',"set null",'"'," ","|"," ",'"',"set default",'"'," ","|"," string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/decorators/OneToOne.ts#L20"}),"packages/core/src/decorators/OneToOne.ts:20"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"owner"},"owner"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"owner"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/decorators/OneToOne.ts#L14"}),"packages/core/src/decorators/OneToOne.ts:14"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"primary"},"primary"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"primary"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/decorators/OneToOne.ts#L17"}),"packages/core/src/decorators/OneToOne.ts:17"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"wrappedreference"},"wrappedReference"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"wrappedReference"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/decorators/OneToOne.ts#L16"}),"packages/core/src/decorators/OneToOne.ts:16"))))}l.isMDXComponent=!0}}]);