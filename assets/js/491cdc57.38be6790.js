(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(t),s=r,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},333:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(1048)),o={id:"knex.knex-1.migration",title:"Interface: Migration",sidebar_label:"Migration",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.migration",id:"api/interfaces/knex.knex-1.migration",isDocsHomePage:!1,title:"Interface: Migration",description:"Interface: Migration",source:"@site/docs/api/interfaces/knex.knex-1.migration.md",slug:"/api/interfaces/knex.knex-1.migration",permalink:"/docs/next/api/interfaces/knex.knex-1.migration",editUrl:null,version:"current",sidebar_label:"Migration",sidebar:"API",previous:{title:"Interface: MariaSslConfiguration",permalink:"/docs/next/api/interfaces/knex.knex-1.mariasslconfiguration"},next:{title:"Interface: MigrationSource<TMigrationSpec>",permalink:"/docs/next/api/interfaces/knex.knex-1.migrationsource"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"down",id:"down",children:[]},{value:"up",id:"up",children:[]}]}],l={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migration"},"Interface: Migration"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".Migration"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Migration"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"down"},"down"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"down"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(i.b)("inlineCode",{parentName:"p"},"kenx"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("em",{parentName:"p"},"unknown"),"[]",">",") => ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2111"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"up"},"up"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"up"),": (",Object(i.b)("inlineCode",{parentName:"p"},"knex"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("em",{parentName:"p"},"unknown"),"[]",">",") => ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2110"))}b.isMDXComponent=!0}}]);