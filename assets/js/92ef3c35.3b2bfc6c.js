(window.webpackJsonp=window.webpackJsonp||[]).push([[542],{1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,O=m["".concat(i,".").concat(d)]||m[d]||s[d]||b;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},614:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(1048)),i={id:"migrations",title:"Module: migrations",sidebar_label:"migrations",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/modules/migrations",id:"api/modules/migrations",isDocsHomePage:!1,title:"Module: migrations",description:"Module: migrations",source:"@site/docs/api/modules/migrations.md",slug:"/api/modules/migrations",permalink:"/docs/next/api/modules/migrations",editUrl:null,version:"current",sidebar_label:"migrations",sidebar:"API",previous:{title:"Module: knex",permalink:"/docs/next/api/modules/knex"},next:{title:"Module: reflection",permalink:"/docs/next/api/modules/reflection"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Classes",id:"classes",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"MigrateOptions",id:"migrateoptions",children:[]},{value:"MigrationResult",id:"migrationresult",children:[]},{value:"MigrationRow",id:"migrationrow",children:[]},{value:"Query",id:"query",children:[]},{value:"UmzugMigration",id:"umzugmigration",children:[]}]}],o={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"module-migrations"},"Module: migrations"),Object(b.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(b.b)("h3",{id:"classes"},"Classes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migration"},"Migration")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrationgenerator"},"MigrationGenerator")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrationrunner"},"MigrationRunner")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrationstorage"},"MigrationStorage")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrator"},"Migrator"))),Object(b.b)("h2",{id:"type-aliases"},"Type aliases"),Object(b.b)("h3",{id:"migrateoptions"},"MigrateOptions"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"MigrateOptions"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"from?"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"migrations?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[] ; ",Object(b.b)("inlineCode",{parentName:"p"},"to?"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"transaction?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#transaction"},Object(b.b)("em",{parentName:"a"},"Transaction")),"  }"),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"from?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"migrations?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"to?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"transaction?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#transaction"},Object(b.b)("em",{parentName:"a"},"Transaction")))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/migrations/src/typings.ts#L4"},"packages/migrations/src/typings.ts:4")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"migrationresult"},"MigrationResult"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"MigrationResult"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"code"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"diff"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[] ; ",Object(b.b)("inlineCode",{parentName:"p"},"fileName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  }"),Object(b.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"code")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"diff")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"fileName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/migrations/src/typings.ts#L5"},"packages/migrations/src/typings.ts:5")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"migrationrow"},"MigrationRow"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"MigrationRow"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"executed_at"),": Date ; ",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  }"),Object(b.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"executed_at")),Object(b.b)("td",{parentName:"tr",align:null},"Date")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/migrations/src/typings.ts#L6"},"packages/migrations/src/typings.ts:6")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"query"},"Query"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"Query"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/migrations/src/Migration.ts#L4"},"packages/migrations/src/Migration.ts:4")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"umzugmigration"},"UmzugMigration"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"UmzugMigration"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"file"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"name?"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"path?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  }"),Object(b.b)("h4",{id:"type-declaration-3"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"file")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"name?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"path?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/852ffbb/packages/migrations/src/typings.ts#L3"},"packages/migrations/src/typings.ts:3")))}p.isMDXComponent=!0}}]);