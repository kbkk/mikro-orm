(window.webpackJsonp=window.webpackJsonp||[]).push([[706],{1048:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,O=m["".concat(o,".").concat(s)]||m[s]||d[s]||b;return r?n.a.createElement(O,c(c({ref:t},l),{},{components:r})):n.a.createElement(O,c({ref:t},l))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,o=new Array(b);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<b;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},777:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(8),b=(r(0),r(1048)),o={id:"core.commitordercalculator",title:"Class: CommitOrderCalculator",sidebar_label:"CommitOrderCalculator",hide_title:!0},c={unversionedId:"api/classes/core.commitordercalculator",id:"version-4.4/api/classes/core.commitordercalculator",isDocsHomePage:!1,title:"Class: CommitOrderCalculator",description:"Class: CommitOrderCalculator",source:"@site/versioned_docs/version-4.4/api/classes/core.commitordercalculator.md",slug:"/api/classes/core.commitordercalculator",permalink:"/docs/api/classes/core.commitordercalculator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.commitordercalculator.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612893806,sidebar_label:"CommitOrderCalculator",sidebar:"version-4.4/API",previous:{title:"Class: Collection<T, O>",permalink:"/docs/api/classes/core.collection"},next:{title:"Class: Configuration<D>",permalink:"/docs/api/classes/core.configuration"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"nodes",id:"nodes",children:[]},{value:"sortedNodeList",id:"sortednodelist",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addDependency",id:"adddependency",children:[]},{value:"addNode",id:"addnode",children:[]},{value:"discoverProperty",id:"discoverproperty",children:[]},{value:"hasNode",id:"hasnode",children:[]},{value:"sort",id:"sort",children:[]},{value:"visit",id:"visit",children:[]},{value:"visitOpenNode",id:"visitopennode",children:[]}]}],l={toc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-commitordercalculator"},"Class: CommitOrderCalculator"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".CommitOrderCalculator"),Object(b.b)("p",null,"CommitOrderCalculator implements topological sorting, which is an ordering\nalgorithm for directed graphs (DG) and/or directed acyclic graphs (DAG) by\nusing a depth-first searching (DFS) to traverse the graph built in memory.\nThis algorithm have a linear running time based on nodes (V) and dependency\nbetween the nodes (E), resulting in a computational complexity of O(V + E)."),Object(b.b)("p",null,"Based on ",Object(b.b)("a",{parentName:"p",href:"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php"},"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CommitOrderCalculator"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new CommitOrderCalculator"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.commitordercalculator"},Object(b.b)("em",{parentName:"a"},"CommitOrderCalculator"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.commitordercalculator"},Object(b.b)("em",{parentName:"a"},"CommitOrderCalculator"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"nodes"},"nodes"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"nodes"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},Object(b.b)("em",{parentName:"a"},"Node")),">"),Object(b.b)("p",null,"Matrix of nodes, keys are provided hashes and values are the node definition objects."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L34"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sortednodelist"},"sortedNodeList"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"sortedNodeList"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Volatile variable holding calculated nodes during sorting process."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L37"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:37")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"adddependency"},"addDependency"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDependency"),"(",Object(b.b)("inlineCode",{parentName:"p"},"from"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"to"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"weight"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Adds a new dependency (edge) to the graph using their hashes."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"from")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"to")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"number"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L56"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:56")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"addnode"},"addNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Adds a new node to the graph, assigning its hash."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L49"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:49")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"discoverproperty"},"discoverProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"discoverProperty"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L60"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:60")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hasnode"},"hasNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Checks for node existence in graph."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L42"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:42")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sort"},"sort"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sort"),"(): ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Return a valid order list of all current nodes.\nThe desired topological sorting is the reverse post order of these searches."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L81"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:81")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visit"},"visit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},Object(b.b)("em",{parentName:"a"},"Node")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Visit a given node definition for reordering."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.node"},Object(b.b)("em",{parentName:"a"},"Node")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L102"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:102")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visitopennode"},"visitOpenNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visitOpenNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},Object(b.b)("em",{parentName:"a"},"Node")),", ",Object(b.b)("inlineCode",{parentName:"p"},"target"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},Object(b.b)("em",{parentName:"a"},"Node")),", ",Object(b.b)("inlineCode",{parentName:"p"},"edge"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.edge"},Object(b.b)("em",{parentName:"a"},"Edge")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Visits all target's dependencies if in cycle with given node"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.node"},Object(b.b)("em",{parentName:"a"},"Node")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"target")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.node"},Object(b.b)("em",{parentName:"a"},"Node")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"edge")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.edge"},Object(b.b)("em",{parentName:"a"},"Edge")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L124"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:124")))}p.isMDXComponent=!0}}]);