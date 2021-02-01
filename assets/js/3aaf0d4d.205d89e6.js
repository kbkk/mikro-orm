(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1254:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,y=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return t?i.a.createElement(y,c(c({ref:n},s),{},{components:t})):i.a.createElement(y,c({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},321:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),a=(t(0),t(1254)),o={title:"Using native BigInt PKs (MySQL and PostgreSQL)"},c={unversionedId:"using-bigint-pks",id:"version-4.4/using-bigint-pks",isDocsHomePage:!1,title:"Using native BigInt PKs (MySQL and PostgreSQL)",description:"You can use BigIntType to support bigints. By default it will represent the value as",source:"@site/versioned_docs/version-4.4/using-bigint-pks.md",slug:"/using-bigint-pks",permalink:"/docs/using-bigint-pks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/using-bigint-pks.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612172014,sidebar:"version-4.4/docs",previous:{title:"Using Multiple Schemas",permalink:"/docs/multiple-schemas"},next:{title:"Using AsyncLocalStorage",permalink:"/docs/async-local-storage"}},p=[],s={toc:p};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"BigIntType")," to support ",Object(a.b)("inlineCode",{parentName:"p"},"bigint"),"s. By default it will represent the value as\na ",Object(a.b)("inlineCode",{parentName:"p"},"string"),".  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: BigIntType })\n  id: string;\n\n}\n")),Object(a.b)("p",null,"If you want to use native ",Object(a.b)("inlineCode",{parentName:"p"},"bigint")," type, you will need to create new type based on the\n",Object(a.b)("inlineCode",{parentName:"p"},"BigIntType"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class NativeBigIntType extends BigIntType {\n\n  convertToJSValue(value: any): any {\n    if (!value) {\n      return value;\n    }\n\n    return BigInt(value);\n  }\n\n}\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: NativeBigIntType })\n  id: bigint;\n\n}\n")))}l.isMDXComponent=!0}}]);