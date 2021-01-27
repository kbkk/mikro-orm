(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),o=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=o(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=o(a),j=b,d=l["".concat(c,".").concat(j)]||l[j]||O[j]||n;return a?r.a.createElement(d,p(p({ref:t},m),{},{components:a})):r.a.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:b,c[1]=p;for(var m=2;m<n;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},500:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var b=a(3),r=a(7),n=(a(0),a(1253)),c={id:"core.entityfactory",title:"Class: EntityFactory",sidebar_label:"EntityFactory",hide_title:!0},p={unversionedId:"api/classes/core.entityfactory",id:"version-4.4/api/classes/core.entityfactory",isDocsHomePage:!1,title:"Class: EntityFactory",description:"Class: EntityFactory",source:"@site/versioned_docs/version-4.4/api/classes/core.entityfactory.md",slug:"/api/classes/core.entityfactory",permalink:"/docs/api/classes/core.entityfactory",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.entityfactory.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611736712,sidebar_label:"EntityFactory",sidebar:"version-4.4/API",previous:{title:"Class: EntityComparator",permalink:"/docs/api/classes/core.entitycomparator"},next:{title:"Class: EntityHelper",permalink:"/docs/api/classes/core.entityhelper"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"eventManager",id:"eventmanager",children:[]},{value:"hydrator",id:"hydrator",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createEntity",id:"createentity",children:[]},{value:"createReference",id:"createreference",children:[]},{value:"denormalizePrimaryKey",id:"denormalizeprimarykey",children:[]},{value:"extractConstructorParams",id:"extractconstructorparams",children:[]},{value:"findEntity",id:"findentity",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"processDiscriminatorColumn",id:"processdiscriminatorcolumn",children:[]}]}],m={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-entityfactory"},"Class: EntityFactory"),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".EntityFactory"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"EntityFactory"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new EntityFactory"),"(",Object(n.b)("inlineCode",{parentName:"p"},"unitOfWork"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.unitofwork"}),Object(n.b)("em",{parentName:"a"},"UnitOfWork")),", ",Object(n.b)("inlineCode",{parentName:"p"},"em"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymanager"}),Object(n.b)("em",{parentName:"a"},"EntityManager")),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"unitOfWork")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.unitofwork"}),Object(n.b)("em",{parentName:"a"},"UnitOfWork")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"em")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymanager"}),Object(n.b)("em",{parentName:"a"},"EntityManager")),"<",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"config"},"config"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"config"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L19"}),"packages/core/src/entity/EntityFactory.ts:19")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"driver"},"driver"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"driver"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L17"}),"packages/core/src/entity/EntityFactory.ts:17")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"eventmanager"},"eventManager"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"eventManager"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.eventmanager"}),Object(n.b)("em",{parentName:"a"},"EventManager"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrator"},"hydrator"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"hydrator"),": IHydrator"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L21"}),"packages/core/src/entity/EntityFactory.ts:21")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L20"}),"packages/core/src/entity/EntityFactory.ts:20")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"platform"},"platform"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L18"}),"packages/core/src/entity/EntityFactory.ts:18")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"create"},"create"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"create"),"<T, P",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entityname"}),Object(n.b)("em",{parentName:"a"},"EntityName")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions")),"): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#loaded"}),Object(n.b)("em",{parentName:"a"},"Loaded")),"<T, P",">"),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"P")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#populate"}),Object(n.b)("em",{parentName:"a"},"Populate")),"<T",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entityName")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entityname"}),Object(n.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions"))),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"...")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#loaded"}),Object(n.b)("em",{parentName:"a"},"Loaded")),"<T, P",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L27"}),"packages/core/src/entity/EntityFactory.ts:27")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"createentity"},"createEntity"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"createEntity"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"options"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions")),"): T"),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L88"}),"packages/core/src/entity/EntityFactory.ts:88")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"createreference"},"createReference"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"createReference"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entityname"}),Object(n.b)("em",{parentName:"a"},"EntityName")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"id"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#primary"}),Object(n.b)("em",{parentName:"a"},"Primary")),"<T",">"," ","|"," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#primary"}),Object(n.b)("em",{parentName:"a"},"Primary")),"<T",">","[] ","|"," ",Object(n.b)("em",{parentName:"p"},"Record"),"<",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#primary"}),Object(n.b)("em",{parentName:"a"},"Primary")),"<T",">",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(n.b)("em",{parentName:"p"},"Pick"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions")),", ",Object(n.b)("em",{parentName:"p"},"convertCustomTypes")," ","|"," ",Object(n.b)("em",{parentName:"p"},"merge"),">","): T"),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entityName")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entityname"}),Object(n.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"id")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#primary"}),Object(n.b)("em",{parentName:"a"},"Primary")),"<T",">"," ","|"," ",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#primary"}),Object(n.b)("em",{parentName:"a"},"Primary")),"<T",">","[] ","|"," ",Object(n.b)("em",{parentName:"td"},"Record"),"<",Object(n.b)("em",{parentName:"td"},"string"),", ",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#primary"}),Object(n.b)("em",{parentName:"a"},"Primary")),"<T",">",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Pick"),"<",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions")),", ",Object(n.b)("em",{parentName:"td"},"convertCustomTypes")," ","|"," ",Object(n.b)("em",{parentName:"td"},"merge"),">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"...")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L64"}),"packages/core/src/entity/EntityFactory.ts:64")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"denormalizeprimarykey"},"denormalizePrimaryKey"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"denormalizePrimaryKey"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"primaryKey"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"denormalize PK to value required by driver (e.g. ObjectId)"),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"primaryKey")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L153"}),"packages/core/src/entity/EntityFactory.ts:153")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"extractconstructorparams"},"extractConstructorParams"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"extractConstructorParams"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">","): T","[keyof T][]"),Object(n.b)("p",null,"returns parameters for entity constructor, creating references from plain ids"),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T","[keyof T][]"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L171"}),"packages/core/src/entity/EntityFactory.ts:171")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findentity"},"findEntity"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"findEntity"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," T"),Object(n.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes?")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," T"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L118"}),"packages/core/src/entity/EntityFactory.ts:118")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrate"},"hydrate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"hydrate"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"options"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions")),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.factoryoptions"}),Object(n.b)("em",{parentName:"a"},"FactoryOptions")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L110"}),"packages/core/src/entity/EntityFactory.ts:110")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processdiscriminatorcolumn"},"processDiscriminatorColumn"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"processDiscriminatorColumn"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">","): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-7"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L132"}),"packages/core/src/entity/EntityFactory.ts:132")))}o.isMDXComponent=!0}}]);