(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1747:function(e,t,n){"use strict";n.r(t),t.default='# Terra Button Upgrade Guide\n\n## Changes from version 2 to version 3\n\n### Changes to CSS Custom Properties\n\n#### Removed\n* --terra-button-vertical-padding\n* --terra-button-text-only-horizontal-margin\n* --terra-button-icon-only-horizontal-margin\n* --terra-button-text-and-icon-horizontal-margin\n* --terra-button-text-and-icon-margin-between\n\n#### Added\n* --terra-button-padding-bottom\n* --terra-button-padding-top\n* --terra-button-text-only-margin-left\n* --terra-button-text-only-margin-right\n* --terra-button-icon-only-margin-left\n* --terra-button-icon-only-margin-right\n* --terra-button-text-and-icon-margin-left\n* --terra-button-text-and-icon-margin-right\n* --terra-button-text-first-margin-right\n* --terra-button-icon-first-margin-right\n\n## Changes from version 1 to version 2\nWith the release of terra-button v2.0.0, the button and\nbutton group components have been updated to align to the One Cerner\nStandard Design. With that alignment, there are some noted changes to these\ncomponents and components that depend on terra-button and\nterra-button-group.\n\nCheck out the [CHANGELOG for terra-button](https://github.com/cerner/terra-core/blob/master/packages/terra-button/CHANGELOG.md#200---february-12-2018) to view all the changes in the v2.0.0 release.\n\n## Noted Terra Button Changes\n### Variants/Types:\n\n* "Default" got remapped to "Neutral" (gray)\n* "Primary" got remapped to "Emphasis" (blue)\n* "Link"-style button is now gone, "De-Emphasis" will be your replacement\nfor the most part in most cases.\n  - The de-emphasis button does not include an underline on hover - that\n    is a hyperlink and you will need to use hyperlink to achieve that\n    styling. But Blue text (a de-decorated button with only a\n    "key-color" as the interaction indication) still remains, and while\n    apps are in a "hybrid" replacement mode (Orion TRVM, BlueSteel, etc)\n    for a period of time where parts are old and parts are new, we won\'t\n    do a hover background treatment but only a dark blue color change so\n    there isn\'t a super noticeable difference. Pressing on the\n    de-emphasis button will show what the hover may look like in the\n    future. Check with UX for guidance to appropriate usage.\n  - The OCS Clinical theme does not include this visual style of button,\n    so a future theme switch will need to be evaluated by UX before a\n    team does so.\n* The secondary variant has been removed.\n\n### New: "Action" variant\n  - Mainly added for OCS Consumer (Wellness, Patient Portal, etc), or\n    new designs needing "floating" action buttons\n  - Check with UX before using them in any existing projects\n\n### New: "Utility" variant\n  - Not used except for construction of re-usable components, think of\n    the close "X" in a dialog\n  - Check with UX before using them\n\n  \n**Others not included on initial 2.0 release: "Secondary"(green),\n"Outline", "Positive"(green), "Negative"(red)**\n\nThese can be added as requested, and made available in Terra even though\nthey are not OCS standard, mainly to assist in teams doing architecture\nreplacement (TRVM for React, BlueSteel for React, etc.) or teams in\nHybrid mode (some new React, some original app)\n\nThey will be documented as non-OCS, so that is clear teams using them\nwill require a UX eval before switching to an OCS theme (Clinical or\nConsumer) in the future.\n\n### Sizes variant changes:\n* "Tiny/Small/Medium/Large/Huge" : all the size varianets have been removed.\n* "Compact" : Still available with no change.\n\n  - May be needed for use in Tables, MPages Fusion compatibility, or a\n    terra-mpagestyle-theme, reach out to UX if you want to use this.\n'},2654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(756)),r=l(n(1747));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return o.default.createElement(a.default,{packageName:"terra-button",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-button",readme:r.default})};t.default=i},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(0)),a=s(n(2)),r=s(n(761)),l=s(n(248)),i=s(n(4)),c=s(n(757)),u=s(n(760));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.default.bind(u.default),f={children:a.default.node,packageName:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,propsResolution:a.default.string}))},h=function(e){for(var t=e.packageName,n=e.readme,a=e.srcPath,i=e.examples,u=e.propsTables,s=e.children,f=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),h=0,g=i,b=u,y=0;y<g.length;y+=1)g[y].id=h,h+=1;for(var v=0;v<b.length;v+=1)b[v].id=h,h+=1;var _,x=m(["doc-template",f.className]);if(g.length>0){var w=g.length>1?"Examples":"Example";_=o.default.createElement("h1",{className:m("examples-header")},w)}var E=o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return o.default.createElement("div",d({},f,{className:x}),o.default.createElement("div",{className:m("doc-card")},t&&E,n&&o.default.createElement(l.default,{src:n}),a&&o.default.createElement("a",{href:a},"View component source code")),_,g.map(function(e){return o.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),o.default.createElement("div",{className:m("doc-card")},b.map(function(e){return o.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),s&&o.default.createElement("div",{className:m("doc-card")},s))};h.propTypes=f,h.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=h;t.default=g},757:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),l=d(n(762)),i=d(n(763)),c=d(n(4)),u=d(n(758)),s=d(n(759));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var v=c.default.bind(u.default),_={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},w=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=g(t).call(this,e))||"object"!==p(a)&&"function"!=typeof a?b(o):a).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(b(n)),n.handleCodeToggle=n.handleCodeToggle.bind(b(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.default.Component),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,r=e.children,i=e.description,c=f(e,["title","example","exampleSrc","children","description"]),u=this.state,d=u.isExpanded,p={};return u.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",m({},c,{className:v("template",c.className)}),t&&a.default.createElement("div",{className:v("header")},a.default.createElement("h2",{className:v("title")},t)),a.default.createElement("div",{className:v("content"),style:p},i&&a.default.createElement("div",{className:v("description")},i),n,r),o&&a.default.createElement("div",{className:v("footer")},a.default.createElement("div",{className:v("button-container")},a.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:v("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:v("chevron-right")}))),a.default.createElement("div",{className:v("code",{"is-expanded":d}),"aria-hidden":!d},d?a.default.createElement(l.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&h(n.prototype,o),r&&h(n,r),t}();w.propTypes=_,w.defaultProps=x;var E=w;t.default=E},758:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",a="#B2B2B2",r="#c5a5c5",l="#5a9bcf",i="#8dc891",c="#d7deea",u="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:c},entity:{color:c,cursor:"help"},url:{color:c},".language-css .token.string":{color:c},".style .token.string":{color:c},variable:{color:c},"attr-value":{color:i},keyword:{color:r},"at-rule":{color:u},"class-name":{color:u},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=s},760:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}}}]);
//# sourceMappingURL=154-b5525b824303c22aa7ab.js.map