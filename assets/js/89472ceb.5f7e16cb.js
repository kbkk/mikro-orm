(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},l=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(a),O=r,j=l["".concat(o,".").concat(O)]||l[O]||m[O]||c;return a?n.a.createElement(j,b(b({ref:t},p),{},{components:a})):n.a.createElement(j,b({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var p=2;p<c;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},691:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),c=(a(0),a(1253)),o={id:"core.constraintviolationexception",title:"Class: ConstraintViolationException",sidebar_label:"ConstraintViolationException",hide_title:!0},b={unversionedId:"api/classes/core.constraintviolationexception",id:"api/classes/core.constraintviolationexception",isDocsHomePage:!1,title:"Class: ConstraintViolationException",description:"Class: ConstraintViolationException",source:"@site/docs/api/classes/core.constraintviolationexception.md",slug:"/api/classes/core.constraintviolationexception",permalink:"/docs/next/api/classes/core.constraintviolationexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.constraintviolationexception.md",version:"current",sidebar_label:"ConstraintViolationException",sidebar:"API",previous:{title:"Class: ConnectionException",permalink:"/docs/next/api/classes/core.connectionexception"},next:{title:"Class: DatabaseDriver<C>",permalink:"/docs/next/api/classes/core.databasedriver"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-constraintviolationexception"},"Class: ConstraintViolationException"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".ConstraintViolationException"),Object(c.b)("p",null,"Base class for all constraint violation related errors detected in the driver."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),Object(c.b)("em",{parentName:"a"},"ServerException"))),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ConstraintViolationException")),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.foreignkeyconstraintviolationexception"}),Object(c.b)("em",{parentName:"a"},"ForeignKeyConstraintViolationException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.notnullconstraintviolationexception"}),Object(c.b)("em",{parentName:"a"},"NotNullConstraintViolationException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.uniqueconstraintviolationexception"}),Object(c.b)("em",{parentName:"a"},"UniqueConstraintViolationException"))))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ConstraintViolationException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),Object(c.b)("em",{parentName:"a"},"ConstraintViolationException"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"previous")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Error")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),Object(c.b)("em",{parentName:"a"},"ConstraintViolationException"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/1efaff8/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"code"},"code"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"code"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#code"}),"code")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/1efaff8/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errmsg"},"errmsg"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errmsg"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#errmsg"}),"errmsg")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/1efaff8/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errno"},"errno"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errno"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#errno"}),"errno")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/1efaff8/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"message"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#message"}),"message")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#name"}),"name")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"prepareStackTrace"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(c.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Optional override for formatting stack traces"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces"}),"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#preparestacktrace"}),"prepareStackTrace")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#sqlmessage"}),"sqlMessage")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/1efaff8/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlstate"},"sqlState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlState"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#sqlstate"}),"sqlState")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/1efaff8/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stack"},"stack"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"stack"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#stack"}),"stack")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#stacktracelimit"}),"stackTraceLimit")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(c.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(c.b)("em",{parentName:"p"},"object"),", ",Object(c.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Create .stack property on a target object"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"targetObject")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}s.isMDXComponent=!0}}]);