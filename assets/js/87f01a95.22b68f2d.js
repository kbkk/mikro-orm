(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{1254:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=s(n),u=r,O=l["".concat(a,".").concat(u)]||l[u]||m[u]||i;return n?o.a.createElement(O,c(c({ref:t},p),{},{components:n})):o.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},684:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(1254)),a={id:"connectionoptions",title:"Interface: ConnectionOptions",sidebar_label:"ConnectionOptions"},c={unversionedId:"api/interfaces/connectionoptions",id:"version-4.3/api/interfaces/connectionoptions",isDocsHomePage:!1,title:"Interface: ConnectionOptions",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/connectionoptions.md",slug:"/api/interfaces/connectionoptions",permalink:"/docs/4.3/api/interfaces/connectionoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/connectionoptions.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612172014,sidebar_label:"ConnectionOptions",sidebar:"version-4.3/API",previous:{title:"Interface: ConnectionConfig",permalink:"/docs/4.3/api/interfaces/connectionconfig"},next:{title:"Interface: CountOptions<T>",permalink:"/docs/4.3/api/interfaces/countoptions"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"charset",id:"charset",children:[]},{value:"clientUrl",id:"clienturl",children:[]},{value:"dbName",id:"dbname",children:[]},{value:"host",id:"host",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"name",id:"name",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"user",id:"user",children:[]}]}],p={toc:b};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"ConnectionOptions")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/mikroormoptions"}),"MikroORMOptions")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"charset"},"charset"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"charset"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L287"}),"packages/core/src/utils/Configuration.ts:287"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"clienturl"},"clientUrl"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"clientUrl"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L282"}),"packages/core/src/utils/Configuration.ts:282"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dbname"},"dbName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"dbName"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L280"}),"packages/core/src/utils/Configuration.ts:280"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"host"},"host"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"host"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L283"}),"packages/core/src/utils/Configuration.ts:283"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"multipleStatements"),": boolean"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L288"}),"packages/core/src/utils/Configuration.ts:288"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"name"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L281"}),"packages/core/src/utils/Configuration.ts:281"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"password"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L286"}),"packages/core/src/utils/Configuration.ts:286"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"pool"},"pool"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"pool"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/poolconfig"}),"PoolConfig")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L289"}),"packages/core/src/utils/Configuration.ts:289"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"port"},"port"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"port"),": number"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L284"}),"packages/core/src/utils/Configuration.ts:284"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"user"},"user"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"user"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/Configuration.ts#L285"}),"packages/core/src/utils/Configuration.ts:285"))))}s.isMDXComponent=!0}}]);