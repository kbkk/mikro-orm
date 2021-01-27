(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||a;return t?r.a.createElement(u,c(c({ref:n},b),{},{components:t})):r.a.createElement(u,c({ref:n},b))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var b=2;b<a;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},218:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var i=t(3),r=t(7),a=(t(0),t(1253)),o={id:"knex.knex.pgconnectionconfig",title:"Interface: PgConnectionConfig",sidebar_label:"PgConnectionConfig",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.pgconnectionconfig",id:"version-4.4/api/interfaces/knex.knex.pgconnectionconfig",isDocsHomePage:!1,title:"Interface: PgConnectionConfig",description:"Interface: PgConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.pgconnectionconfig.md",slug:"/api/interfaces/knex.knex.pgconnectionconfig",permalink:"/docs/api/interfaces/knex.knex.pgconnectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.pgconnectionconfig.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611736712,sidebar_label:"PgConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: OrderBy<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.orderby"},next:{title:"Interface: PoolConfig",permalink:"/docs/api/interfaces/knex.knex.poolconfig"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"application_name",id:"application_name",children:[]},{value:"connectionString",id:"connectionstring",children:[]},{value:"connectionTimeoutMillis",id:"connectiontimeoutmillis",children:[]},{value:"database",id:"database",children:[]},{value:"host",id:"host",children:[]},{value:"keepAlive",id:"keepalive",children:[]},{value:"keepAliveInitialDelayMillis",id:"keepaliveinitialdelaymillis",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"statement_timeout",id:"statement_timeout",children:[]},{value:"stream",id:"stream",children:[]},{value:"user",id:"user",children:[]}]}],b={toc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-pgconnectionconfig"},"Interface: PgConnectionConfig"),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".PgConnectionConfig"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PgConnectionConfig"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"application_name"},"application","_","name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"application","_","name"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2051"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"connectionstring"},"connectionString"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"connectionString"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2044"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"connectiontimeoutmillis"},"connectionTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"connectionTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2048"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"database"},"database"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"database"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2040"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"host"},"host"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"host"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2043"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"keepalive"},"keepAlive"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"keepAlive"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2045"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"keepaliveinitialdelaymillis"},"keepAliveInitialDelayMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"keepAliveInitialDelayMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2049"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"password"},"password"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"password"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2041"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"port"},"port"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"port"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2042"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ssl"},"ssl"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"ssl"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")," ","|"," ConnectionOptions"),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2050"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"statement_timeout"},"statement","_","timeout"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"statement","_","timeout"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")," ","|"," ",Object(a.b)("em",{parentName:"p"},"false")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2047"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"stream"},"stream"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"stream"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"Duplex")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2046"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"user"},"user"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"user"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2039"))}l.isMDXComponent=!0}}]);