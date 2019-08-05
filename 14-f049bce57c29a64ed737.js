(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1013:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=o(0))&&r.__esModule?r:{default:r};function l(e){return(l="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){return function(t){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(t=!(r=u(o).call(this,e))||"object"!==l(r)&&"function"!=typeof r?s(n):r).handleOnSelect=t.handleOnSelect.bind(s(t)),t.state={colorVariant:"auto"},t}var n,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,a.default.Component),n=o,(r=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(e,c({color:this.state.colorVariant},this.props)),a.default.createElement("p",null,a.default.createElement("label",{htmlFor:"colorVariant"},"Select a color variant:")),a.default.createElement("select",{id:"colorVariant",name:"colorVariant",value:this.state.colorVariant,onChange:this.handleOnSelect},a.default.createElement("option",{value:"auto"},"Auto"),a.default.createElement("option",{value:"neutral"},"Neutral"),a.default.createElement("option",{value:"one"},"One"),a.default.createElement("option",{value:"two"},"Two"),a.default.createElement("option",{value:"three"},"Three"),a.default.createElement("option",{value:"four"},"Four"),a.default.createElement("option",{value:"five"},"Five"),a.default.createElement("option",{value:"six"},"Six"),a.default.createElement("option",{value:"seven"},"Seven"),a.default.createElement("option",{value:"eight"},"Eight"),a.default.createElement("option",{value:"nine"},"Nine"),a.default.createElement("option",{value:"ten"},"Ten")))}}])&&i(n.prototype,r),d&&i(n,d),o}()};t.default=d},756:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(o(0)),r=s(o(2)),a=s(o(761)),l=s(o(248)),c=s(o(4)),i=s(o(757)),u=s(o(760));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var f=c.default.bind(u.default),m={children:r.default.node,packageName:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,propsResolution:r.default.string}))},b=function(e){for(var t=e.packageName,o=e.readme,r=e.srcPath,c=e.examples,u=e.propsTables,s=e.children,m=d(e,["packageName","readme","srcPath","examples","propsTables","children"]),b=0,g=c,y=u,h=0;h<g.length;h+=1)g[h].id=b,b+=1;for(var _=0;_<y.length;_+=1)y[_].id=b,b+=1;var v,E=f(["doc-template",m.className]);if(g.length>0){var x=g.length>1?"Examples":"Example";v=n.default.createElement("h1",{className:f("examples-header")},x)}var S=n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return n.default.createElement("div",p({},m,{className:E}),n.default.createElement("div",{className:f("doc-card")},t&&S,o&&n.default.createElement(l.default,{src:o}),r&&n.default.createElement("a",{href:r},"View component source code")),v,g.map(function(e){return n.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),n.default.createElement("div",{className:f("doc-card")},y.map(function(e){return n.default.createElement(a.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),s&&n.default.createElement("div",{className:f("doc-card")},s))};b.propTypes=m,b.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=b;t.default=g},757:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(o(0)),a=p(o(2)),l=p(o(762)),c=p(o(763)),i=p(o(4)),u=p(o(758)),s=p(o(759));function p(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",c.default);var _=i.default.bind(u.default),v={example:a.default.element,exampleSrc:a.default.string,title:a.default.string,description:a.default.node,children:a.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=g(t).call(this,e))||"object"!==d(r)&&"function"!=typeof r?y(n):r).state={isExpanded:!1,isBackgroundTransparent:!1},o.handleBgToggle=o.handleBgToggle.bind(y(o)),o.handleCodeToggle=o.handleCodeToggle.bind(y(o)),o}var o,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.default.Component),o=t,(n=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,o=e.example,n=e.exampleSrc,a=e.children,c=e.description,i=m(e,["title","example","exampleSrc","children","description"]),u=this.state,p=u.isExpanded,d={};return u.isBackgroundTransparent&&(d={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",f({},i,{className:_("template",i.className)}),t&&r.default.createElement("div",{className:_("header")},r.default.createElement("h2",{className:_("title")},t)),r.default.createElement("div",{className:_("content"),style:d},c&&r.default.createElement("div",{className:_("description")},c),o,a),n&&r.default.createElement("div",{className:_("footer")},r.default.createElement("div",{className:_("button-container")},r.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:_("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:_("chevron-right")}))),r.default.createElement("div",{className:_("code",{"is-expanded":p}),"aria-hidden":!p},p?r.default.createElement(l.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},n):void 0)))}}])&&b(o.prototype,n),a&&b(o,a),t}();x.propTypes=v,x.defaultProps=E;var S=x;t.default=S},758:function(e,t,o){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="#D8DEE9",r="#B2B2B2",a="#c5a5c5",l="#5a9bcf",c="#8dc891",i="#d7deea",u="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:a},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:n},char:{color:n},builtin:{color:n},inserted:{color:n},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:c},keyword:{color:a},"at-rule":{color:u},"class-name":{color:u},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=s},760:function(e,t,o){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}},874:function(e){e.exports=JSON.parse('{"name":"terra-avatar","main":"lib/index.js","version":"2.23.0","description":"Contains components that represent a person, location or entity. Variants include Avatar, Facility, and SharedUser.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-avatar","Avatar","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-image":"^3.14.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')}}]);
//# sourceMappingURL=14-f049bce57c29a64ed737.js.map