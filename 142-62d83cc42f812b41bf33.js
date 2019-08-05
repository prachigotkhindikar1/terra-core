(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1652:function(e,t,r){"use strict";r.r(t),t.default="# Terra Alert Upgrade Guide\n\n## Changes from version 3 to version 4\n\n### Props\n#### Removed\n* `customStatusColor` prop. The prop was used to set the cutom alert color as inline style.\n\n#### Added\n* `customColorClass` prop. This prop allows user to provide their own CSS and bind the className to that in CSS.\n\n\n### Changes to CSS Custom Properties\n\n#### Removed\n* --terra-alert-alert-shadow-color\n* --terra-alert-error-shadow-color\n* --terra-alert-warning-shadow-color\n* --terra-alert-advisory-shadow-color\n* --terra-alert-info-shadow-color\n* --terra-alert-success-shadow-color\n* --terra-alert-custom-shadow-color\n\n#### Added\n* --terra-alert-color\n* --terra-alert-min-height\n* --terra-alert-icon-margin-left\n* --terra-alert-icon-margin-right\n* --terra-alert-icon-margin-top\n* --terra-alert-body-margin-left\n* --terra-alert-body-margin-right\n* --terra-alert-body-margin-top\n* --terra-alert-std-margin-bottom\n* --terra-alert-std-margin-right\n* --terra-alert-section-padding-bottom\n* --terra-alert-section-padding-top\n* --terra-alert-title-display\n* --terra-alert-title-float\n* --terra-alert-title-margin-bottom\n* --terra-alert-title-margin-right\n* --terra-alert-actions-margin-bottom\n* --terra-alert-actions-margin-left\n* --terra-alert-actions-margin-right\n* --terra-alert-actions-margin-top\n* --terra-alert-alert-box-shadow\n* --terra-alert-error-box-shadow\n* --terra-alert-warning-box-shadow\n* --terra-alert-advisory-box-shadow\n* --terra-alert-info-box-shadow\n* --terra-alert-success-box-shadow\n* --terra-alert-custom-box-shadow\n* --terra-alert-custom-default-color\n\n### Steps to uplift to V4\n1. import `classNames/bind` and `CSS`. \n2. Use `ClassNames.bind()` function to bind `CSS` to the `ClassName`.\n\n#### V3 Code\n```javascript\nimport Alert from 'terra-alert';\n\n<Alert type=\"custom\" customStatusColor=\"orange\" />\n```\n\n#### V4 Code\n##### CSS\n```CSS\n:local {\n  .my-app-alert-attention-example {\n    color: var(--terra-alert-attention-example-color, #fa0000);\n  }\n```\n##### JavaScript\n```javascript\nimport Alert from 'terra-alert';\nimport classNames from 'ClassNames/bind';\nimport styles from './CSS';\n\nconst cx = classNames.bind(styles);\n\n<Alert type=\"custom\" customColorClass={cx(['my-app-alert-attention-example'])} />\n\n```"},2635:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(0)),o=l(r(756)),n=l(r(1652));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement(o.default,{packageName:"terra-alert",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-alert",readme:n.default})};t.default=c},756:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(r(0)),o=d(r(2)),n=d(r(761)),l=d(r(248)),c=d(r(4)),i=d(r(757)),s=d(r(760));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=c.default.bind(s.default),f={children:o.default.node,packageName:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,propsResolution:o.default.string}))},g=function(e){for(var t=e.packageName,r=e.readme,o=e.srcPath,c=e.examples,s=e.propsTables,d=e.children,f=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),g=0,h=c,b=s,y=0;y<h.length;y+=1)h[y].id=g,g+=1;for(var _=0;_<b.length;_+=1)b[_].id=g,g+=1;var v,x=m(["doc-template",f.className]);if(h.length>0){var S=h.length>1?"Examples":"Example";v=a.default.createElement("h1",{className:m("examples-header")},S)}var E=a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return a.default.createElement("div",u({},f,{className:x}),a.default.createElement("div",{className:m("doc-card")},t&&E,r&&a.default.createElement(l.default,{src:r}),o&&a.default.createElement("a",{href:o},"View component source code")),v,h.map(function(e){return a.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),a.default.createElement("div",{className:m("doc-card")},b.map(function(e){return a.default.createElement(n.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),d&&a.default.createElement("div",{className:m("doc-card")},d))};g.propTypes=f,g.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=g;t.default=h},757:function(e,t,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(r(0)),n=u(r(2)),l=u(r(762)),c=u(r(763)),i=u(r(4)),s=u(r(758)),d=u(r(759));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",c.default);var _=i.default.bind(s.default),v={example:n.default.element,exampleSrc:n.default.string,title:n.default.string,description:n.default.node,children:n.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},S=function(e){function t(e){var r,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(r=!(o=h(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?b(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},r.handleBgToggle=r.handleBgToggle.bind(b(r)),r.handleCodeToggle=r.handleCodeToggle.bind(b(r)),r}var r,a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.default.Component),r=t,(a=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.example,a=e.exampleSrc,n=e.children,c=e.description,i=f(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},i,{className:_("template",i.className)}),t&&o.default.createElement("div",{className:_("header")},o.default.createElement("h2",{className:_("title")},t)),o.default.createElement("div",{className:_("content"),style:p},c&&o.default.createElement("div",{className:_("description")},c),r,n),a&&o.default.createElement("div",{className:_("footer")},o.default.createElement("div",{className:_("button-container")},o.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:_("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:_("chevron-right")}))),o.default.createElement("div",{className:_("code",{"is-expanded":u}),"aria-hidden":!u},u?o.default.createElement(l.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(r.prototype,a),n&&g(r,n),t}();S.propTypes=v,S.defaultProps=x;var E=S;t.default=E},758:function(e,t,r){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",n="#c5a5c5",l="#5a9bcf",c="#8dc891",i="#d7deea",s="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:n},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:c},keyword:{color:n},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},760:function(e,t,r){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}}}]);
//# sourceMappingURL=142-62d83cc42f812b41bf33.js.map