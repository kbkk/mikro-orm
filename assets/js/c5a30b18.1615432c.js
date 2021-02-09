(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,O=m["".concat(o,".").concat(u)]||m[u]||s[u]||a;return n?i.a.createElement(O,b(b({ref:t},l),{},{components:n})):i.a.createElement(O,b({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},814:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),a=(n(0),n(1048)),o={id:"core.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/core.poolconfig",id:"api/interfaces/core.poolconfig",isDocsHomePage:!1,title:"Interface: PoolConfig",description:"Interface: PoolConfig",source:"@site/docs/api/interfaces/core.poolconfig.md",slug:"/api/interfaces/core.poolconfig",permalink:"/docs/next/api/interfaces/core.poolconfig",editUrl:null,version:"current",sidebar_label:"PoolConfig",sidebar:"API",previous:{title:"Interface: OneToOneOptions<T, O>",permalink:"/docs/next/api/interfaces/core.onetooneoptions"},next:{title:"Interface: PrimaryKeyOptions<T>",permalink:"/docs/next/api/interfaces/core.primarykeyoptions"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"Promise",id:"promise",children:[]},{value:"acquireTimeoutMillis",id:"acquiretimeoutmillis",children:[]},{value:"afterCreate",id:"aftercreate",children:[]},{value:"autostart",id:"autostart",children:[]},{value:"evictionRunIntervalMillis",id:"evictionrunintervalmillis",children:[]},{value:"fifo",id:"fifo",children:[]},{value:"idleTimeoutMillis",id:"idletimeoutmillis",children:[]},{value:"log",id:"log",children:[]},{value:"max",id:"max",children:[]},{value:"maxWaitingClients",id:"maxwaitingclients",children:[]},{value:"min",id:"min",children:[]},{value:"name",id:"name",children:[]},{value:"numTestsPerRun",id:"numtestsperrun",children:[]},{value:"priorityRange",id:"priorityrange",children:[]},{value:"reapIntervalMillis",id:"reapintervalmillis",children:[]},{value:"refreshIdle",id:"refreshidle",children:[]},{value:"returnToHead",id:"returntohead",children:[]},{value:"softIdleTimeoutMillis",id:"softidletimeoutmillis",children:[]},{value:"testOnBorrow",id:"testonborrow",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-poolconfig"},"Interface: PoolConfig"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".PoolConfig"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PoolConfig"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"promise"},"Promise"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Promise"),": ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L329"},"packages/core/src/utils/Configuration.ts:329")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"acquiretimeoutmillis"},"acquireTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"acquireTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L323"},"packages/core/src/utils/Configuration.ts:323")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"aftercreate"},"afterCreate"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"afterCreate"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (...",Object(a.b)("inlineCode",{parentName:"p"},"a"),": ",Object(a.b)("em",{parentName:"p"},"unknown"),"[]) => ",Object(a.b)("em",{parentName:"p"},"unknown")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L310"},"packages/core/src/utils/Configuration.ts:310")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"autostart"},"autostart"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"autostart"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L325"},"packages/core/src/utils/Configuration.ts:325")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"evictionrunintervalmillis"},"evictionRunIntervalMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"evictionRunIntervalMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L326"},"packages/core/src/utils/Configuration.ts:326")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"fifo"},"fifo"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"fifo"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L324"},"packages/core/src/utils/Configuration.ts:324")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"idletimeoutmillis"},"idleTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"idleTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L314"},"packages/core/src/utils/Configuration.ts:314")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"log"},"log"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"log"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(a.b)("inlineCode",{parentName:"p"},"message"),": ",Object(a.b)("em",{parentName:"p"},"string"),", ",Object(a.b)("inlineCode",{parentName:"p"},"logLevel"),": ",Object(a.b)("em",{parentName:"p"},"string"),") => ",Object(a.b)("em",{parentName:"p"},"void")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L318"},"packages/core/src/utils/Configuration.ts:318")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"max"},"max"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"max"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L312"},"packages/core/src/utils/Configuration.ts:312")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"maxwaitingclients"},"maxWaitingClients"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"maxWaitingClients"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L321"},"packages/core/src/utils/Configuration.ts:321")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"min"},"min"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"min"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L311"},"packages/core/src/utils/Configuration.ts:311")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L309"},"packages/core/src/utils/Configuration.ts:309")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"numtestsperrun"},"numTestsPerRun"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"numTestsPerRun"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L327"},"packages/core/src/utils/Configuration.ts:327")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"priorityrange"},"priorityRange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"priorityRange"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L317"},"packages/core/src/utils/Configuration.ts:317")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reapintervalmillis"},"reapIntervalMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"reapIntervalMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L315"},"packages/core/src/utils/Configuration.ts:315")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"refreshidle"},"refreshIdle"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"refreshIdle"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L313"},"packages/core/src/utils/Configuration.ts:313")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"returntohead"},"returnToHead"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"returnToHead"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L316"},"packages/core/src/utils/Configuration.ts:316")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"softidletimeoutmillis"},"softIdleTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"softIdleTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L328"},"packages/core/src/utils/Configuration.ts:328")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"testonborrow"},"testOnBorrow"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"testOnBorrow"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/core/src/utils/Configuration.ts#L322"},"packages/core/src/utils/Configuration.ts:322")))}p.isMDXComponent=!0}}]);