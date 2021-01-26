(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{1253:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return j}));var n=t(0),b=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,b=function(e,a){if(null==e)return{};var t,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(b[t]=e[t]);return b}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(b[t]=e[t])}return b}var l=b.a.createContext({}),m=function(e){var a=b.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=m(e.components);return b.a.createElement(l.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return b.a.createElement(b.a.Fragment,{},a)}},O=b.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=m(t),O=n,j=i["".concat(r,".").concat(O)]||i[O]||o[O]||c;return t?b.a.createElement(j,s(s({ref:a},l),{},{components:t})):b.a.createElement(j,s({ref:a},l))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,r=new Array(c);r[0]=O;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<c;l++)r[l]=t[l];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},666:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return m}));var n=t(3),b=t(7),c=(t(0),t(1253)),r={id:"knex.databaseschema",title:"Class: DatabaseSchema",sidebar_label:"DatabaseSchema",hide_title:!0},s={unversionedId:"api/classes/knex.databaseschema",id:"api/classes/knex.databaseschema",isDocsHomePage:!1,title:"Class: DatabaseSchema",description:"Class: DatabaseSchema",source:"@site/docs/api/classes/knex.databaseschema.md",slug:"/api/classes/knex.databaseschema",permalink:"/docs/next/api/classes/knex.databaseschema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/knex.databaseschema.md",version:"current",sidebar_label:"DatabaseSchema",sidebar:"API",previous:{title:"Class: CriteriaNodeFactory",permalink:"/docs/next/api/classes/knex.criterianodefactory"},next:{title:"Class: DatabaseTable",permalink:"/docs/next/api/classes/knex.databasetable"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"tables",id:"tables",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addTable",id:"addtable",children:[]},{value:"getTable",id:"gettable",children:[]},{value:"getTables",id:"gettables",children:[]},{value:"create",id:"create",children:[]}]}],l={toc:p};function m(e){var a=e.components,t=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-databaseschema"},"Class: DatabaseSchema"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".DatabaseSchema"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"DatabaseSchema"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new DatabaseSchema"),"(): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databaseschema"}),Object(c.b)("em",{parentName:"a"},"DatabaseSchema"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databaseschema"}),Object(c.b)("em",{parentName:"a"},"DatabaseSchema"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"tables"},"tables"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"tables"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(c.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/schema/DatabaseSchema.ts#L9"}),"packages/knex/src/schema/DatabaseSchema.ts:9")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"addtable"},"addTable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"addTable"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," | ",Object(c.b)("em",{parentName:"p"},"null")," | ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(c.b)("em",{parentName:"a"},"DatabaseTable"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"undefined"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(c.b)("em",{parentName:"a"},"DatabaseTable"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/schema/DatabaseSchema.ts#L11"}),"packages/knex/src/schema/DatabaseSchema.ts:11")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gettable"},"getTable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getTable"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"undefined")," | ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(c.b)("em",{parentName:"a"},"DatabaseTable"))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"undefined")," | ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(c.b)("em",{parentName:"a"},"DatabaseTable"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/schema/DatabaseSchema.ts#L22"}),"packages/knex/src/schema/DatabaseSchema.ts:22")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gettables"},"getTables"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getTables"),"(): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(c.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(c.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/schema/DatabaseSchema.ts#L18"}),"packages/knex/src/schema/DatabaseSchema.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"connection"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(c.b)("em",{parentName:"a"},"AbstractSqlConnection")),", ",Object(c.b)("inlineCode",{parentName:"p"},"helper"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.schemahelper"}),Object(c.b)("em",{parentName:"a"},"SchemaHelper")),", ",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(c.b)("em",{parentName:"a"},"Configuration")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databaseschema"}),Object(c.b)("em",{parentName:"a"},"DatabaseSchema")),">"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"connection")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(c.b)("em",{parentName:"a"},"AbstractSqlConnection")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"helper")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.schemahelper"}),Object(c.b)("em",{parentName:"a"},"SchemaHelper")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.configuration"}),Object(c.b)("em",{parentName:"a"},"Configuration")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databaseschema"}),Object(c.b)("em",{parentName:"a"},"DatabaseSchema")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/knex/src/schema/DatabaseSchema.ts#L26"}),"packages/knex/src/schema/DatabaseSchema.ts:26")))}m.isMDXComponent=!0}}]);