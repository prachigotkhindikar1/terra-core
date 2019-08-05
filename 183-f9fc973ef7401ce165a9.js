(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{2062:function(e,r,t){"use strict";t.r(r),r.default="# Terra Form Textarea Upgrade Guide\n\n## Changes from version 2 to version 3\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-form-textarea-focus-animation-background | --terra-form-textarea-background-image |\n| --terra-form-textarea-focus-background-start | --terra-form-textarea-background-size |\n| --terra-form-textarea-focus-keyboard-animation-size | --terra-form-textarea-focus-background-size |\n| --terra-form-textarea-focus-keyboard-border-color | --terra-form-textarea-focus-border-color |\n| --terra-form-textarea-focus-keyboard-border-style | --terra-form-textarea-focus-border-style |\n| --terra-form-textarea-focus-keyboard-border-width | --terra-form-textarea-focus-border-width |\n| --terra-form-textarea-focus-keyboard-opacity | --terra-form-textarea-focus-opacity |\n| --terra-form-textarea-focus-keyboard-box-shadow-ltr | --terra-form-textarea-focus-ltr-box-shadow |\n| --terra-form-textarea-focus-keyboard-box-shadow-rtl | --terra-form-textarea-focus-rtl-box-shadow |\n| --terra-form-textarea-error-focus-animation-background | --terra-form-textarea-error-background-image |\n| --terra-form-textarea-error-focus-keyboard-animation-size | --terra-form-textarea-error-focus-background-size |\n| --terra-form-textarea-error-focus-keyboard-border-color | --terra-form-textarea-error-focus-border-color |\n| --terra-form-textarea-error-focus-keyboard-border-style | --terra-form-textarea-error-focus-border-style |\n| --terra-form-textarea-error-focus-keyboard-border-width | --terra-form-textarea-error-focus-border-width |\n| --terra-form-textarea-error-focus-keyboard-opacity | --terra-form-textarea-error-focus-opacity |\n| --terra-form-textarea-error-focus-keyboard-box-shadow-ltr | --terra-form-textarea-error-focus-ltr-box-shadow |\n| --terra-form-textarea-error-focus-keyboard-box-shadow-rtl | --terra-form-textarea-error-focus-rtl-box-shadow |\n\n#### Added\n* --terra-form-textarea-hover-background-color\n* --terra-form-textarea-hover-color\n* --terra-form-textarea-focus-background-color\n* --terra-form-textarea-focus-color\n* --terra-form-textarea-error-background-color\n* --terra-form-textarea-error-hover-background-color\n* --terra-form-textarea-error-hover-color\n* --terra-form-textarea-error-focus-background-color\n* --terra-form-textarea-error-focus-color\n\n#### Removed\n* --terra-form-textarea-cursor\n"},2703:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=l(t(0)),a=l(t(756)),n=l(t(2062));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return o.default.createElement(a.default,{packageName:"terra-form-textarea",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-textarea",readme:n.default})};r.default=c},756:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=s(t(0)),a=s(t(2)),n=s(t(761)),l=s(t(248)),c=s(t(4)),d=s(t(757)),u=s(t(760));function s(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=c.default.bind(u.default),p={children:a.default.node,packageName:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,propsResolution:a.default.string}))},b=function(e){for(var r=e.packageName,t=e.readme,a=e.srcPath,c=e.examples,u=e.propsTables,s=e.children,p=i(e,["packageName","readme","srcPath","examples","propsTables","children"]),b=0,g=c,h=u,y=0;y<g.length;y+=1)g[y].id=b,b+=1;for(var x=0;x<h.length;x+=1)h[x].id=b,b+=1;var _,v=m(["doc-template",p.className]);if(g.length>0){var k=g.length>1?"Examples":"Example";_=o.default.createElement("h1",{className:m("examples-header")},k)}var E=o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(r)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(r),alt:"NPM version"}));return o.default.createElement("div",f({},p,{className:v}),o.default.createElement("div",{className:m("doc-card")},r&&E,t&&o.default.createElement(l.default,{src:t}),a&&o.default.createElement("a",{href:a},"View component source code")),_,g.map(function(e){return o.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),o.default.createElement("div",{className:m("doc-card")},h.map(function(e){return o.default.createElement(n.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),s&&o.default.createElement("div",{className:m("doc-card")},s))};b.propTypes=p,b.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=b;r.default=g},757:function(e,r,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=f(t(0)),n=f(t(2)),l=f(t(762)),c=f(t(763)),d=f(t(4)),u=f(t(758)),s=f(t(759));function f(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function b(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,r){return(y=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}l.default.registerLanguage("jsx",c.default);var x=d.default.bind(u.default),_={example:n.default.element,exampleSrc:n.default.string,title:n.default.string,description:n.default.node,children:n.default.element},v={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function r(e){var t,o,a;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),o=this,(t=!(a=g(r).call(this,e))||"object"!==i(a)&&"function"!=typeof a?h(o):a).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(h(t)),t.handleCodeToggle=t.handleCodeToggle.bind(h(t)),t}var t,o,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&y(e,r)}(r,a.default.Component),t=r,(o=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,r=e.title,t=e.example,o=e.exampleSrc,n=e.children,c=e.description,d=p(e,["title","example","exampleSrc","children","description"]),u=this.state,f=u.isExpanded,i={};return u.isBackgroundTransparent&&(i={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",m({},d,{className:x("template",d.className)}),r&&a.default.createElement("div",{className:x("header")},a.default.createElement("h2",{className:x("title")},r)),a.default.createElement("div",{className:x("content"),style:i},c&&a.default.createElement("div",{className:x("description")},c),t,n),o&&a.default.createElement("div",{className:x("footer")},a.default.createElement("div",{className:x("button-container")},a.default.createElement("button",{type:"button",className:x("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:x("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:x("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:x("chevron-right")}))),a.default.createElement("div",{className:x("code",{"is-expanded":f}),"aria-hidden":!f},f?a.default.createElement(l.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&b(t.prototype,o),n&&b(t,n),r}();k.propTypes=_,k.defaultProps=v;var E=k;r.default=E},758:function(e,r,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o="#D8DEE9",a="#B2B2B2",n="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",u="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:n},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:n},"at-rule":{color:u},"class-name":{color:u},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};r.default=s},760:function(e,r,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}}}]);
//# sourceMappingURL=183-f9fc973ef7401ce165a9.js.map