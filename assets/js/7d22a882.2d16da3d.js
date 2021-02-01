(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{1254:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),i=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=i(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),O=i(a),d=n,o=O["".concat(c,".").concat(d)]||O[d]||j[d]||r;return a?b.a.createElement(o,l(l({ref:t},m),{},{components:a})):b.a.createElement(o,l({ref:t},m))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var m=2;m<r;m++)c[m]=a[m];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},639:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(3),b=a(7),r=(a(0),a(1254)),c={id:"knex.knex.batchinsertbuilder",title:"Interface: BatchInsertBuilder<TRecord, TResult>",sidebar_label:"BatchInsertBuilder",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.batchinsertbuilder",id:"version-4.4/api/interfaces/knex.knex.batchinsertbuilder",isDocsHomePage:!1,title:"Interface: BatchInsertBuilder<TRecord, TResult>",description:"Interface: BatchInsertBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.batchinsertbuilder.md",slug:"/api/interfaces/knex.knex.batchinsertbuilder",permalink:"/docs/api/interfaces/knex.knex.batchinsertbuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.batchinsertbuilder.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612172014,sidebar_label:"BatchInsertBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",permalink:"/docs/api/interfaces/knex.knex.asymmetricaggregation"},next:{title:"Interface: ChainableInterface<T>",permalink:"/docs/api/interfaces/knex.knex.chainableinterface"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"Symbol.toStringTag",id:"symboltostringtag",children:[]}]},{value:"Methods",id:"methods",children:[{value:"catch",id:"catch",children:[]},{value:"finally",id:"finally",children:[]},{value:"returning",id:"returning",children:[]},{value:"then",id:"then",children:[]},{value:"transacting",id:"transacting",children:[]}]}],m={toc:p};function i(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-batchinsertbuildertrecord-tresult"},"Interface: BatchInsertBuilder<TRecord, TResult",">"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".BatchInsertBuilder"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"number"),"[]")))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Promise"),"<",Object(r.b)("em",{parentName:"p"},"ResolveResult"),"<TResult",">",">"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"BatchInsertBuilder")))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"symboltostringtag"},"[Symbol.toStringTag]"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"[Symbol.toStringTag]"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"catch"},"catch"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"catch"),"<TResult",">","(",Object(r.b)("inlineCode",{parentName:"p"},"onrejected?"),": ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," (",Object(r.b)("inlineCode",{parentName:"p"},"reason"),": ",Object(r.b)("em",{parentName:"p"},"any"),") => TResult ","|"," ",Object(r.b)("em",{parentName:"p"},"PromiseLike"),"<TResult",">","): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<",Object(r.b)("em",{parentName:"p"},"Resolve"),"<TResult",">"," ","|"," TResult",">"),Object(r.b)("p",null,"Attaches a callback for only the rejection of the Promise."),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"never"))))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onrejected?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"null")," ","|"," (",Object(r.b)("inlineCode",{parentName:"td"},"reason"),": ",Object(r.b)("em",{parentName:"td"},"any"),") => TResult ","|"," ",Object(r.b)("em",{parentName:"td"},"PromiseLike"),"<TResult",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback to execute when the Promise is rejected.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<",Object(r.b)("em",{parentName:"p"},"Resolve"),"<TResult",">"," ","|"," TResult",">"),Object(r.b)("p",null,"A Promise for the completion of the callback."),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:1448"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"finally"},"finally"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"finally"),"(",Object(r.b)("inlineCode",{parentName:"p"},"onfinally?"),": ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," () => ",Object(r.b)("em",{parentName:"p"},"void"),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<",Object(r.b)("em",{parentName:"p"},"Resolve"),"<TResult",">",">"),Object(r.b)("p",null,"Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\nresolved value cannot be modified from the callback."),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onfinally?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"null")," ","|"," () => ",Object(r.b)("em",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback to execute when the Promise is settled (fulfilled or rejected).")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<",Object(r.b)("em",{parentName:"p"},"Resolve"),"<TResult",">",">"),Object(r.b)("p",null,"A Promise for the completion of the callback."),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es2018.promise.d.ts:31"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"returning"},"returning"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"returning"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("em",{parentName:"p"},"**): ["),"BatchInsertBuilder",Object(r.b)("em",{parentName:"p"},"](/docs/api/interfaces/knex.knex.batchinsertbuilder)<TRecord, "),"DeferredKeySelection",Object(r.b)("em",{parentName:"p"},"<TRecord, "),"never",Object(r.b)("em",{parentName:"p"},", "),"false",Object(r.b)("em",{parentName:"p"},", {}, "),"false",Object(r.b)("em",{parentName:"p"},", {}, "),"never*",">","[]",">"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"***")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"DeferredKeySelection"),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"never"),", ",Object(r.b)("em",{parentName:"p"},"false"),", {}, ",Object(r.b)("em",{parentName:"p"},"false"),", {}, ",Object(r.b)("em",{parentName:"p"},"never"),">","[]",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1541"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"returning"),"<TKey, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": TKey): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TKey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"SetSingle"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, TKey","\\",">, ",Object(r.b)("em",{parentName:"td"},"true"),"\\",">[]")))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TKey")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1542"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"returning"),"<TKey, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columns"),": readonly TKey[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TKey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"SetSingle"),"<",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, TKey","\\",">, {}","\\",">, ",Object(r.b)("em",{parentName:"td"},"false"),"\\",">[]")))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columns")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readonly TKey[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1552"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"returning"),"<TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("em",{parentName:"p"},"unknown")," ",Object(r.b)("em",{parentName:"p"},"extends")," TRecord ? ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(r.b)("em",{parentName:"p"},"string"),"[] : ",Object(r.b)("em",{parentName:"p"},"never"),"): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Partial"),"<",Object(r.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">[]")))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown")," ",Object(r.b)("em",{parentName:"td"},"extends")," TRecord ? ",Object(r.b)("em",{parentName:"td"},"string")," ","|"," readonly ",Object(r.b)("em",{parentName:"td"},"string"),"[] : ",Object(r.b)("em",{parentName:"td"},"never"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1562"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then"},"then"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"then"),"<TResult1, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"onfulfilled?"),": ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," (",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"Resolve"),"<TResult",">",") => TResult1 ","|"," ",Object(r.b)("em",{parentName:"p"},"PromiseLike"),"<TResult1",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"onrejected?"),": ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," (",Object(r.b)("inlineCode",{parentName:"p"},"reason"),": ",Object(r.b)("em",{parentName:"p"},"any"),") => TResult2 ","|"," ",Object(r.b)("em",{parentName:"p"},"PromiseLike"),"<TResult2",">","): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<TResult1 ","|"," TResult2",">"),Object(r.b)("p",null,"Attaches callbacks for the resolution and/or rejection of the Promise."),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Resolve"),"<TResult","\\",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"never"))))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onfulfilled?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"null")," ","|"," (",Object(r.b)("inlineCode",{parentName:"td"},"value"),": ",Object(r.b)("em",{parentName:"td"},"Resolve"),"<TResult",">",") => TResult1 ","|"," ",Object(r.b)("em",{parentName:"td"},"PromiseLike"),"<TResult1",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback to execute when the Promise is resolved.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onrejected?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"null")," ","|"," (",Object(r.b)("inlineCode",{parentName:"td"},"reason"),": ",Object(r.b)("em",{parentName:"td"},"any"),") => TResult2 ","|"," ",Object(r.b)("em",{parentName:"td"},"PromiseLike"),"<TResult2",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback to execute when the Promise is rejected.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<TResult1 ","|"," TResult2",">"),Object(r.b)("p",null,"A Promise for the completion of which ever callback is executed."),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:1441"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transacting"},"transacting"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"transacting"),"(",Object(r.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.transaction"}),Object(r.b)("em",{parentName:"a"},"Transaction")),"<",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("em",{parentName:"p"},"any"),">","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"trx")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.transaction"}),Object(r.b)("em",{parentName:"a"},"Transaction")),"<",Object(r.b)("em",{parentName:"td"},"any"),", ",Object(r.b)("em",{parentName:"td"},"any"),">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}),Object(r.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1539"))}i.isMDXComponent=!0}}]);