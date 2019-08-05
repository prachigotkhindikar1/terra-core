(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1704:function(e,t,n){"use strict";n.r(t),t.default="# Terra Badge\n\nThe badge component displays content classification.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-badge`\n  - `yarn add terra-badge`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Badge from 'terra-badge';\n\n<Badge text=\"Default\" />\n```\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1705:function(e){e.exports=JSON.parse('{"name":"terra-badge","main":"lib/Badge.js","version":"3.19.0","description":"The terra-badge component displays content classification.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-badge","Badge","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"},"peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-icon":"^3.16.0","terra-visually-hidden-text":"^2.14.0"}}')},1706:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport styles from './Badge.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst BadgeIntent = {\n  DEFAULT: 'default',\n  PRIMARY: 'primary',\n  SECONDARY: 'secondary',\n  INFO: 'info',\n  WARNING: 'warning',\n  POSITIVE: 'positive',\n  NEGATIVE: 'negative',\n};\n\nconst BadgeSize = {\n  TINY: 'tiny',\n  SMALL: 'small',\n  MEDIUM: 'medium',\n  LARGE: 'large',\n  HUGE: 'huge',\n};\n\nconst propTypes = {\n  /**\n   * Child Nodes.\n   */\n  children: PropTypes.node,\n  /**\n   * An optional icon. Nested inline with the text when provided.\n   */\n  icon: PropTypes.element,\n  /**\n   * Sets the badge color scheme. One of `default`, `primary`, `secondary`, `positive`, `negative`, `warning`, `info`.\n   */\n  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'warning', 'positive', 'negative']),\n  /**\n   * Reverses the position of the icon and text.\n   */\n  isReversed: PropTypes.bool,\n  /**\n   * Sets the badge size. One of `tiny`, `small`, `medium`, `large`, `huge`.\n   */\n  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),\n  /**\n   * Sets the badge text.\n   */\n  text: PropTypes.string,\n  /**\n   * Text that describes the badge to a screen reader. Use this\n   * for creating an accessible badge.\n   */\n  visuallyHiddenText: PropTypes.string,\n};\n\nconst defaultProps = {\n  children: null,\n  icon: null,\n  intent: 'default',\n  isReversed: false,\n  size: 'small',\n  text: null,\n  visuallyHiddenText: undefined,\n};\n\nconst Badge = ({\n  size,\n  intent,\n  isReversed,\n  text,\n  icon,\n  visuallyHiddenText,\n  ...customProps\n}) => {\n  const badgeClassNames = cx(\n    'badge',\n    { 'has-icon': icon },\n    { 'is-reversed': isReversed },\n    size,\n    intent,\n    customProps.className,\n  );\n\n  const textContent = text ? <span className={styles.text} aria-hidden=\"true\">{text}</span> : null;\n  const visuallyHiddenTextContent = visuallyHiddenText ? <VisuallyHiddenText text={visuallyHiddenText} /> : null;\n  const content = isReversed ? [visuallyHiddenTextContent, textContent, icon, customProps.children] : [icon, visuallyHiddenTextContent, textContent, customProps.children];\n  return React.createElement('span', { ...customProps, className: badgeClassNames }, ...content);\n};\n\nBadge.propTypes = propTypes;\nBadge.defaultProps = defaultProps;\n\nexport default Badge;\nexport { BadgeIntent, BadgeSize };\n"},1707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(816));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Default"})," ",a.default.createElement(r.default,{intent:"primary",text:"Primary"})," ",a.default.createElement(r.default,{intent:"secondary",text:"Secondary"})," ",a.default.createElement(r.default,{intent:"positive",text:"Positive"})," ",a.default.createElement(r.default,{intent:"negative",text:"Negative"})," ",a.default.createElement(r.default,{intent:"warning",text:"Warning"})," ",a.default.createElement(r.default,{intent:"info",text:"Info"}))};t.default=l},1708:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Badge from \'terra-badge/lib/Badge\';\n\nconst BadgeIntent = () => (\n  <div>\n    <Badge text="Default" />\n    {\' \'}\n    <Badge intent="primary" text="Primary" />\n    {\' \'}\n    <Badge intent="secondary" text="Secondary" />\n    {\' \'}\n    <Badge intent="positive" text="Positive" />\n    {\' \'}\n    <Badge intent="negative" text="Negative" />\n    {\' \'}\n    <Badge intent="warning" text="Warning" />\n    {\' \'}\n    <Badge intent="info" text="Info" />\n  </div>\n);\n\nexport default BadgeIntent;\n'},1709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(816));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{size:"tiny",text:"Tiny"})," ",a.default.createElement(r.default,{size:"small",text:"Small"})," ",a.default.createElement(r.default,{size:"medium",text:"Medium"})," ",a.default.createElement(r.default,{size:"large",text:"Large"})," ",a.default.createElement(r.default,{size:"huge",text:"Huge"}))};t.default=l},1710:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Badge from \'terra-badge/lib/Badge\';\n\nconst BadgeSize = () => (\n  <div>\n    <Badge size="tiny" text="Tiny" />\n    {\' \'}\n    <Badge size="small" text="Small" />\n    {\' \'}\n    <Badge size="medium" text="Medium" />\n    {\' \'}\n    <Badge size="large" text="Large" />\n    {\' \'}\n    <Badge size="huge" text="Huge" />\n  </div>\n);\n\nexport default BadgeSize;\n'},1711:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(959)),o=l(n(816));function l(e){return e&&e.__esModule?e:{default:e}}var i=a.default.createElement(r.default,null),d=function(){return a.default.createElement("div",null,a.default.createElement(o.default,{icon:i,text:"icon"})," ",a.default.createElement(o.default,{icon:i,text:"icon",isReversed:!0})," ",a.default.createElement(o.default,{icon:i}))};t.default=d},1712:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport IconBookmark from 'terra-icon/lib/icon/IconBookmark';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Badge from 'terra-badge/lib/Badge';\n\nconst Icon = <IconBookmark />;\n\nconst BadgeIcon = () => (\n  <div>\n    <Badge icon={Icon} text=\"icon\" />\n    {' '}\n    <Badge icon={Icon} text=\"icon\" isReversed />\n    {' '}\n    <Badge icon={Icon} />\n  </div>\n);\n\nexport default BadgeIcon;\n"},1713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(816));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Low",visuallyHiddenText:"Risk Factor Low"})," ",a.default.createElement(r.default,{text:"Medium",visuallyHiddenText:"Risk Factor Medium"})," ",a.default.createElement(r.default,{text:"High",visuallyHiddenText:"Risk Factor High"})," ",a.default.createElement(r.default,{text:"Critical",visuallyHiddenText:"Risk Factor Critical"}))};t.default=l},1714:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Badge from \'terra-badge/lib/Badge\';\n\nconst BadgeVisuallyHiddenText = () => (\n  <div>\n    <Badge text="Low" visuallyHiddenText="Risk Factor Low" />\n    {\' \'}\n    <Badge text="Medium" visuallyHiddenText="Risk Factor Medium" />\n    {\' \'}\n    <Badge text="High" visuallyHiddenText="Risk Factor High" />\n    {\' \'}\n    <Badge text="Critical" visuallyHiddenText="Risk Factor Critical" />\n  </div>\n);\n\nexport default BadgeVisuallyHiddenText;\n'},2645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=y(n(0)),r=y(n(756)),o=y(n(1704)),l=n(1705),i=y(n(1706)),d=y(n(1707)),s=y(n(1708)),c=y(n(1709)),u=y(n(1710)),p=y(n(1711)),f=y(n(1712)),m=y(n(1713)),g=y(n(1714));function y(e){return e&&e.__esModule?e:{default:e}}var _=function(){return a.default.createElement(r.default,{packageName:l.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Intent",example:a.default.createElement(d.default,null),source:s.default},{title:"Size",example:a.default.createElement(c.default,null),source:u.default},{title:"Icon",example:a.default.createElement(p.default,null),source:f.default},{title:"Visually Hidden Text",example:a.default.createElement(m.default,null),source:g.default}],propsTables:[{componentName:"Badge",componentSrc:i.default}]})};t.default=_},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=c(n(2)),o=c(n(761)),l=c(n(248)),i=c(n(4)),d=c(n(757)),s=c(n(760));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=i.default.bind(s.default),m={children:r.default.node,packageName:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,propsResolution:r.default.string}))},g=function(e){for(var t=e.packageName,n=e.readme,r=e.srcPath,i=e.examples,s=e.propsTables,c=e.children,m=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),g=0,y=i,_=s,b=0;b<y.length;b+=1)y[b].id=g,g+=1;for(var v=0;v<_.length;v+=1)_[v].id=g,g+=1;var x,h=f(["doc-template",m.className]);if(y.length>0){var E=y.length>1?"Examples":"Example";x=a.default.createElement("h1",{className:f("examples-header")},E)}var T=a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return a.default.createElement("div",u({},m,{className:h}),a.default.createElement("div",{className:f("doc-card")},t&&T,n&&a.default.createElement(l.default,{src:n}),r&&a.default.createElement("a",{href:r},"View component source code")),x,y.map(function(e){return a.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),a.default.createElement("div",{className:f("doc-card")},_.map(function(e){return a.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),c&&a.default.createElement("div",{className:f("doc-card")},c))};g.propTypes=m,g.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var y=g;t.default=y},757:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),l=u(n(762)),i=u(n(763)),d=u(n(4)),s=u(n(758)),c=u(n(759));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var v=d.default.bind(s.default),x={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},h={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=y(t).call(this,e))||"object"!==p(r)&&"function"!=typeof r?_(a):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(_(n)),n.handleCodeToggle=n.handleCodeToggle.bind(_(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.default.Component),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,o=e.children,i=e.description,d=m(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",f({},d,{className:v("template",d.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:p},i&&r.default.createElement("div",{className:v("description")},i),n,o),a&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?r.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(n.prototype,a),o&&g(n,o),t}();E.propTypes=x,E.defaultProps=h;var T=E;t.default=T},758:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",r="#B2B2B2",o="#c5a5c5",l="#5a9bcf",i="#8dc891",d="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:i},keyword:{color:o},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},760:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}},816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BadgeSize=t.BadgeIntent=t.default=void 0;var a=d(n(0)),r=d(n(2)),o=d(n(4)),l=d(n(121)),i=d(n(833));function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(i.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var m={children:r.default.node,icon:r.default.element,intent:r.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:r.default.bool,size:r.default.oneOf(["tiny","small","medium","large","huge"]),text:r.default.string,visuallyHiddenText:r.default.string},g={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},y=function(e){var t=e.size,n=e.intent,r=e.isReversed,o=e.text,d=e.icon,s=e.visuallyHiddenText,u=p(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),m=f("badge",{"has-icon":d},{"is-reversed":r},t,n,u.className),g=o?a.default.createElement("span",{className:i.default.text,"aria-hidden":"true"},o):null,y=s?a.default.createElement(l.default,{text:s}):null,_=r?[y,g,d,u.children]:[d,y,g,u.children];return a.default.createElement.apply(a.default,["span",c({},u,{className:m})].concat(_))};y.propTypes=m,y.defaultProps=g;var _=y;t.default=_},833:function(e,t,n){e.exports={badge:"Badge-module__badge___20KZ3","is-reversed":"Badge-module__is-reversed___2z3k1","has-icon":"Badge-module__has-icon___2R0fy",text:"Badge-module__text___2Y8yP",tiny:"Badge-module__tiny___1mem2",small:"Badge-module__small___ow-O5",medium:"Badge-module__medium___1w1TM",large:"Badge-module__large___2dMPP",huge:"Badge-module__huge___29Jcf",default:"Badge-module__default___3JkGW",primary:"Badge-module__primary___WLzak",secondary:"Badge-module__secondary___2Eyvs",positive:"Badge-module__positive___17Lg_",negative:"Badge-module__negative___3GJ0z",warning:"Badge-module__warning___Gqrsa",info:"Badge-module__info___1RQe6"}},959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(28));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};i.displayName="IconBookmark",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=i;t.default=d}}]);
//# sourceMappingURL=84-0696e5950528295fa921.js.map