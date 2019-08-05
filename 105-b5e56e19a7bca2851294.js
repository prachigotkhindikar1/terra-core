(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};var a=function(e){return o.default.createElement("div",null,o.default.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),e.children,o.default.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))};t.default=a},1825:function(e,t,n){"use strict";n.r(t),t.default="# Terra Divider\n\nThe divider component is used to visually separate content on a layout.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-divider`\n  - `yarn add terra-divider`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Divider from 'terra-divider';\n\n<Divider />\n```\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},1826:function(e){e.exports=JSON.parse('{"name":"terra-divider","main":"lib/Divider.js","version":"3.14.0","description":"The divider component is used to visually separate content on a layout.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-divider","Divider","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1827:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport PropTypes from 'prop-types';\nimport styles from './Divider.module.scss';\n\nconst propTypes = {\n  /**\n  * String to be displayed inline with the divider.\n  */\n  text: PropTypes.string,\n};\n\nconst cx = classNames.bind(styles);\n\nconst Divider = (props) => {\n  const { text, ...customProps } = props;\n\n  const dividerClassNames = cx([\n    'divider',\n    customProps.className,\n  ]);\n\n  if (!text) {\n    return <hr {...customProps} className={dividerClassNames} aria-hidden=\"true\" />;\n  }\n  return (\n    <div className={cx(['divider-container'])}>\n      <span className={cx(['divider-text'])}>{text}</span>\n    </div>\n  );\n};\n\nDivider.propTypes = propTypes;\nexport default Divider;\n"},1828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(260)),a=l(n(1015));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,null,r.default.createElement(o.default,null))};t.default=i},1829:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Divider from 'terra-divider/lib/Divider';\nimport DividerExampleTemplate from './DividerExampleTemplate';\n\nconst DividerExample = () => (\n  <DividerExampleTemplate>\n    <Divider />\n  </DividerExampleTemplate>\n);\n\nexport default DividerExample;\n"},1830:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(260)),a=l(n(1015));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,null,r.default.createElement(o.default,{text:"November 12, 1955"}))};t.default=i},1831:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Divider from 'terra-divider/lib/Divider';\nimport DividerExampleTemplate from './DividerExampleTemplate';\n\nconst currentDate = 'November 12, 1955';\n\nconst DividerCustomExample = () => (\n  <DividerExampleTemplate>\n    <Divider text={currentDate} />\n  </DividerExampleTemplate>\n);\n\nexport default DividerCustomExample;\n"},1832:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(260)),a=l(n(1015));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,null,r.default.createElement(o.default,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor leo ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar."}))};t.default=i},1833:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Divider from 'terra-divider/lib/Divider';\nimport DividerExampleTemplate from './DividerExampleTemplate';\n\nconst content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor leo ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar.';\n\nconst DividerWithWrappingText = () => (\n  <DividerExampleTemplate>\n    <Divider text={content} />\n  </DividerExampleTemplate>\n);\n\nexport default DividerWithWrappingText;\n"},2669:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(0)),o=f(n(756)),a=f(n(1825)),l=n(1826),i=f(n(1827)),s=f(n(1828)),u=f(n(1829)),d=f(n(1830)),c=f(n(1831)),p=f(n(1832)),m=f(n(1833));function f(e){return e&&e.__esModule?e:{default:e}}var g=function(){return r.default.createElement(o.default,{packageName:l.name,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Default",example:r.default.createElement(s.default,null),source:u.default},{title:"Custom Text",example:r.default.createElement(d.default,null),source:c.default},{title:"Custom Text",example:r.default.createElement(p.default,null),source:m.default}],propsTables:[{componentName:"Divider",componentSrc:i.default}]})};t.default=g},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(2)),a=d(n(761)),l=d(n(248)),i=d(n(4)),s=d(n(757)),u=d(n(760));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=i.default.bind(u.default),f={children:o.default.node,packageName:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,propsResolution:o.default.string}))},g=function(e){for(var t=e.packageName,n=e.readme,o=e.srcPath,i=e.examples,u=e.propsTables,d=e.children,f=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),g=0,v=i,b=u,h=0;h<v.length;h+=1)v[h].id=g,g+=1;for(var y=0;y<b.length;y+=1)b[y].id=g,g+=1;var x,_=m(["doc-template",f.className]);if(v.length>0){var E=v.length>1?"Examples":"Example";x=r.default.createElement("h1",{className:m("examples-header")},E)}var T=r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return r.default.createElement("div",c({},f,{className:_}),r.default.createElement("div",{className:m("doc-card")},t&&T,n&&r.default.createElement(l.default,{src:n}),o&&r.default.createElement("a",{href:o},"View component source code")),x,v.map(function(e){return r.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),r.default.createElement("div",{className:m("doc-card")},b.map(function(e){return r.default.createElement(a.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),d&&r.default.createElement("div",{className:m("doc-card")},d))};g.propTypes=f,g.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var v=g;t.default=v},757:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),a=c(n(2)),l=c(n(762)),i=c(n(763)),s=c(n(4)),u=c(n(758)),d=c(n(759));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var y=s.default.bind(u.default),x={example:a.default.element,exampleSrc:a.default.string,title:a.default.string,description:a.default.node,children:a.default.element},_={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=v(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?b(r):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(b(n)),n.handleCodeToggle=n.handleCodeToggle.bind(b(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.default.Component),n=t,(r=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,r=e.exampleSrc,a=e.children,i=e.description,s=f(e,["title","example","exampleSrc","children","description"]),u=this.state,c=u.isExpanded,p={};return u.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},s,{className:y("template",s.className)}),t&&o.default.createElement("div",{className:y("header")},o.default.createElement("h2",{className:y("title")},t)),o.default.createElement("div",{className:y("content"),style:p},i&&o.default.createElement("div",{className:y("description")},i),n,a),r&&o.default.createElement("div",{className:y("footer")},o.default.createElement("div",{className:y("button-container")},o.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:y("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:y("chevron-right")}))),o.default.createElement("div",{className:y("code",{"is-expanded":c}),"aria-hidden":!c},c?o.default.createElement(l.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&g(n.prototype,r),a&&g(n,a),t}();E.propTypes=x,E.defaultProps=_;var T=E;t.default=T},758:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="#D8DEE9",o="#B2B2B2",a="#c5a5c5",l="#5a9bcf",i="#8dc891",s="#d7deea",u="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:a},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:i},keyword:{color:a},"at-rule":{color:u},"class-name":{color:u},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},760:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}}}]);
//# sourceMappingURL=105-b5e56e19a7bca2851294.js.map