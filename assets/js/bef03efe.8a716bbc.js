(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{1253:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),u=function(e){var r=c.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return c.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},f=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,m=p["".concat(a,".").concat(f)]||p[f]||b[f]||o;return t?c.a.createElement(m,i(i({ref:r},s),{},{components:t})):c.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},927:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),c=t(7),o=(t(0),t(1253)),a={id:"cli.cliconfigurator",title:"Class: CLIConfigurator",sidebar_label:"CLIConfigurator",hide_title:!0},i={unversionedId:"api/classes/cli.cliconfigurator",id:"api/classes/cli.cliconfigurator",isDocsHomePage:!1,title:"Class: CLIConfigurator",description:"Class: CLIConfigurator",source:"@site/docs/api/classes/cli.cliconfigurator.md",slug:"/api/classes/cli.cliconfigurator",permalink:"/docs/next/api/classes/cli.cliconfigurator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/cli.cliconfigurator.md",version:"current",sidebar_label:"CLIConfigurator",sidebar:"API",previous:{title:"Enumeration: QueryType",permalink:"/docs/next/api/enums/knex.querytype"},next:{title:"Class: CLIHelper",permalink:"/docs/next/api/classes/cli.clihelper"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"configure",id:"configure",children:[]}]}],s={toc:l};function u(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"class-cliconfigurator"},"Class: CLIConfigurator"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/cli"}),"cli"),".CLIConfigurator"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLIConfigurator"))),Object(o.b)("h2",{id:"constructors"},"Constructors"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("p",null,"+"," ",Object(o.b)("strong",{parentName:"p"},"new CLIConfigurator"),"(): ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/cli.cliconfigurator"}),Object(o.b)("em",{parentName:"a"},"CLIConfigurator"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/cli.cliconfigurator"}),Object(o.b)("em",{parentName:"a"},"CLIConfigurator"))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"configure"},"configure"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("inlineCode",{parentName:"p"},"Static"),Object(o.b)("strong",{parentName:"p"},"configure"),"(): ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("em",{parentName:"p"},"Argv"),"<{}",">",">"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("em",{parentName:"p"},"Argv"),"<{}",">",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0ac7369/packages/cli/src/CLIConfigurator.ts#L14"}),"packages/cli/src/CLIConfigurator.ts:14")))}u.isMDXComponent=!0}}]);