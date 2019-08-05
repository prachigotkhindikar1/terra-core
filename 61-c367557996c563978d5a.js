(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1765:function(e,t,n){"use strict";n.r(t),t.default="# Terra Card\n\nCard is a basic container with some base styling to help separate elements with different content\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-card`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Card from 'terra-card';\n\n// Just a Default Card\n<Card>\n\t...\n</Card>\n\n// A Raised Card variant\n<Card variant=\"raised\">\n\t...\n</Card>\n\n// Or we can selectively add padding to child elements\n<Card>\n\t<Card.Body>\n\t\t...\n\t</Card.Body>\n\t...\n\t<Card.Body>\n\t\t...\n\t</Card.Body>\n</Card>\n```\n\n## Expected Use\n\nThe expected use for a card would be to keep elements separated from each other with different content, for example one card could contain a graph while another could have text. Another use would be to help make some elements stand out on the screen with the use of the base styling.\n\n\n## Component Features\n\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1766:function(e){e.exports=JSON.parse('{"name":"terra-card","main":"lib/Card.js","version":"3.15.0","description":"Card is a basic container with some base styling to help seperate elements with different content","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-card","Card","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-visually-hidden-text":"^2.14.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1767:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport styles from './Card.module.scss';\nimport CardBody from './CardBody';\n\nconst cx = classNames.bind(styles);\n\nconst CardVariants = {\n  DEFAULT: 'default',\n  RAISED: 'raised',\n};\n\n\nconst propTypes = {\n  /**\n   * Child Nodes\n   */\n  children: PropTypes.node,\n  /**\n   * Sets the card variant to change the style for different use cases. One of `default`,  `raised`.\n   */\n  variant: PropTypes.oneOf([...Object.values(CardVariants)]),\n  /**\n   * Text that describes the badge to a screen reader. Use this\n   * if more information is needed to accurately describe\n   * this card to screen reader users.\n   */\n  visuallyHiddenText: PropTypes.string,\n};\n\nconst defaultProps = {\n  variant: CardVariants.DEFAULT,\n};\n\nconst Card = ({\n  children,\n  variant,\n  visuallyHiddenText,\n  ...customProps\n}) => {\n  const cardClassNames = cx([\n    'card',\n    variant,\n    customProps.className,\n  ]);\n\n  const visuallyHiddenTextContent = visuallyHiddenText ? <VisuallyHiddenText text={visuallyHiddenText} /> : null;\n\n  return (\n    <article {...customProps} className={cardClassNames}>\n      {visuallyHiddenTextContent}\n      {children}\n    </article>\n  );\n};\n\nCard.propTypes = propTypes;\nCard.defaultProps = defaultProps;\nCard.Body = CardBody;\nexport default Card;\n"},1768:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './CardBody.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Child Nodes\n   */\n  children: PropTypes.node,\n  /**\n   * Provides themeable padding vertical\n   */\n  hasPaddingVertical: PropTypes.bool,\n  /**\n   * Provides themeable padding horizontal\n   */\n  hasPaddingHorizontal: PropTypes.bool,\n  /**\n  * Sets the content of the card to be centered\n  */\n  isContentCentered: PropTypes.bool,\n};\n\nconst defaultProps = {\n  hasPaddingHorizontal: true,\n  hasPaddingVertical: true,\n  isContentCentered: false,\n};\n\nconst CardBody = ({\n  children,\n  hasPaddingVertical,\n  hasPaddingHorizontal,\n  isContentCentered,\n  ...customProps\n}) => {\n  const cardBodyClasses = cx([\n    { 'vertical-padding': hasPaddingVertical },\n    { 'horizontal-padding': hasPaddingHorizontal },\n    { 'center-content': isContentCentered },\n    customProps.className,\n  ]);\n  return <div {...customProps} className={cardBodyClasses}>{children}</div>;\n};\n\nCardBody.propTypes = propTypes;\nCardBody.defaultProps = defaultProps;\nexport default CardBody;\n"},1769:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,"Hello World!!"))};t.default=l},1770:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\n\n\nconst CardDefault = () => (\n  <div>\n    <Card>Hello World!!</Card>\n  </div>\n);\n\nexport default CardDefault;\n"},1771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{variant:"raised"},"Hello World!!"))};t.default=l},1772:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\n\n\nconst CardDefault = () => (\n  <div>\n    <Card variant=\"raised\">Hello World!!</Card>\n  </div>\n);\n\nexport default CardDefault;\n"},1773:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,r.default.createElement(a.default.Body,null,"Hello World!!")))};t.default=l},1774:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\n\nconst CardPadding = () => (\n  <div>\n    <Card>\n      <Card.Body>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPadding;\n"},1775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,r.default.createElement(a.default.Body,{hasPaddingHorizontal:!1},"Hello World!!")))};t.default=l},1776:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\n\nconst CardPaddingVertical = () => (\n  <div>\n    <Card>\n      <Card.Body hasPaddingHorizontal={false}>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingVertical;\n"},1777:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,r.default.createElement(a.default.Body,{hasPaddingVertical:!1},"Hello World!!")))};t.default=l},1778:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\n\nconst CardPaddingHorizontal = () => (\n  <div>\n    <Card>\n      <Card.Body hasPaddingVertical={false}>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingHorizontal;\n"},1779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(4)),o=d(n(783)),l=d(n(1780));function d(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(l.default),s=function(){return r.default.createElement("div",null,r.default.createElement(o.default,null,r.default.createElement(o.default.Body,null,"Hello World Above The Line!!"),r.default.createElement("hr",{className:i("horizontal-rule")}),r.default.createElement(o.default.Body,null,"Hello World Below The Line!!")))};t.default=s},1780:function(e,t,n){e.exports={"horizontal-rule":"CardPaddingHR__horizontal-rule___1isjM"}},1781:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport classNames from 'classnames/bind';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\nimport styles from './CardPaddingHR.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CardPaddingHR = () => (\n  <div>\n    <Card>\n      <Card.Body>Hello World Above The Line!!</Card.Body>\n      <hr className={cx('horizontal-rule')} />\n      <Card.Body>Hello World Below The Line!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingHR;\n"},1782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(a.default,null,r.default.createElement(a.default.Body,{isContentCentered:!0},"Content is centered"))};t.default=l},1783:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\n\nconst CardContentCentered = () => (\n  <Card>\n    <Card.Body isContentCentered>\n       Content is centered\n    </Card.Body>\n  </Card>\n);\n\nexport default CardContentCentered;\n"},1784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{visuallyHiddenText:"This is a Hello World Card Introduction"},"Hello World!!"))};t.default=l},1785:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Card from 'terra-card/lib/Card';\n\n\nconst CardVisuallyHiddenText = () => (\n  <div>\n    <Card visuallyHiddenText=\"This is a Hello World Card Introduction\">Hello World!!</Card>\n  </div>\n);\n\nexport default CardVisuallyHiddenText;\n"},2659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=P(n(0)),a=P(n(756)),o=P(n(1765)),l=n(1766),d=P(n(1767)),i=P(n(1768)),s=P(n(1769)),c=P(n(1770)),u=P(n(1771)),p=P(n(1772)),f=P(n(1773)),m=P(n(1774)),y=P(n(1775)),h=P(n(1776)),g=P(n(1777)),b=P(n(1778)),v=P(n(1779)),_=P(n(1781)),C=P(n(1782)),x=P(n(1783)),E=P(n(1784)),T=P(n(1785));function P(e){return e&&e.__esModule?e:{default:e}}var O=function(){return r.default.createElement(a.default,{packageName:l.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Card basic example",example:r.default.createElement(s.default,null),source:c.default},{title:"Card basic raised example",example:r.default.createElement(u.default,null),source:p.default},{title:"Card plus Card Body with default padding",example:r.default.createElement(f.default,null),source:m.default},{title:"Card plus Card Body with only vertical padding",example:r.default.createElement(y.default,null),source:h.default},{title:"Card plus Card Body with only horizontal padding",example:r.default.createElement(g.default,null),source:b.default},{title:"Card plus padded and non-padded children",example:r.default.createElement(v.default,null),source:_.default},{title:"Centered content inside card",example:r.default.createElement(C.default,null),source:x.default},{title:"Card with Visually Hidden Text",example:r.default.createElement(E.default,null),source:T.default}],propsTables:[{componentName:"Card",componentSrc:d.default},{componentName:"Card Body",componentSrc:i.default}]})};t.default=O},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(2)),o=c(n(761)),l=c(n(248)),d=c(n(4)),i=c(n(757)),s=c(n(760));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=d.default.bind(s.default),m={children:a.default.node,packageName:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,propsResolution:a.default.string}))},y=function(e){for(var t=e.packageName,n=e.readme,a=e.srcPath,d=e.examples,s=e.propsTables,c=e.children,m=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),y=0,h=d,g=s,b=0;b<h.length;b+=1)h[b].id=y,y+=1;for(var v=0;v<g.length;v+=1)g[v].id=y,y+=1;var _,C=f(["doc-template",m.className]);if(h.length>0){var x=h.length>1?"Examples":"Example";_=r.default.createElement("h1",{className:f("examples-header")},x)}var E=r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return r.default.createElement("div",u({},m,{className:C}),r.default.createElement("div",{className:f("doc-card")},t&&E,n&&r.default.createElement(l.default,{src:n}),a&&r.default.createElement("a",{href:a},"View component source code")),_,h.map(function(e){return r.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),r.default.createElement("div",{className:f("doc-card")},g.map(function(e){return r.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),c&&r.default.createElement("div",{className:f("doc-card")},c))};y.propTypes=m,y.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=y;t.default=h},757:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=u(n(2)),l=u(n(762)),d=u(n(763)),i=u(n(4)),s=u(n(758)),c=u(n(759));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",d.default);var v=i.default.bind(s.default),_={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},C={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=h(t).call(this,e))||"object"!==p(a)&&"function"!=typeof a?g(r):a).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(g(n)),n.handleCodeToggle=n.handleCodeToggle.bind(g(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.default.Component),n=t,(r=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,r=e.exampleSrc,o=e.children,d=e.description,i=m(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",f({},i,{className:v("template",i.className)}),t&&a.default.createElement("div",{className:v("header")},a.default.createElement("h2",{className:v("title")},t)),a.default.createElement("div",{className:v("content"),style:p},d&&a.default.createElement("div",{className:v("description")},d),n,o),r&&a.default.createElement("div",{className:v("footer")},a.default.createElement("div",{className:v("button-container")},a.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:v("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:v("chevron-right")}))),a.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?a.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&y(n.prototype,r),o&&y(n,o),t}();x.propTypes=_,x.defaultProps=C;var E=x;t.default=E},758:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="#D8DEE9",a="#B2B2B2",o="#c5a5c5",l="#5a9bcf",d="#8dc891",i="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:d},keyword:{color:o},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},760:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}},783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(2)),o=s(n(4)),l=s(n(121)),d=s(n(806)),i=s(n(803));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p,f=o.default.bind(d.default),m={DEFAULT:"default",RAISED:"raised"},y={children:a.default.node,variant:a.default.oneOf((p=Object.values(m),function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(p)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())),visuallyHiddenText:a.default.string},h={variant:m.DEFAULT},g=function(e){var t=e.children,n=e.variant,a=e.visuallyHiddenText,o=u(e,["children","variant","visuallyHiddenText"]),d=f(["card",n,o.className]),i=a?r.default.createElement(l.default,{text:a}):null;return r.default.createElement("article",c({},o,{className:d}),i,t)};g.propTypes=y,g.defaultProps=h,g.Body=i.default;var b=g;t.default=b},803:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(2)),o=d(n(4)),l=d(n(807));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.default.bind(l.default),u={children:a.default.node,hasPaddingVertical:a.default.bool,hasPaddingHorizontal:a.default.bool,isContentCentered:a.default.bool},p=function(e){var t=e.children,n=e.hasPaddingVertical,a=e.hasPaddingHorizontal,o=e.isContentCentered,l=s(e,["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"]),d=c([{"vertical-padding":n},{"horizontal-padding":a},{"center-content":o},l.className]);return r.default.createElement("div",i({},l,{className:d}),t)};p.propTypes=u,p.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};var f=p;t.default=f},806:function(e,t,n){e.exports={card:"Card-module__card___305sN",default:"Card-module__default___33BgI",raised:"Card-module__raised___10uGS"}},807:function(e,t,n){e.exports={"vertical-padding":"CardBody-module__vertical-padding___1KMz6","horizontal-padding":"CardBody-module__horizontal-padding___15gE8","center-content":"CardBody-module__center-content___mayp3"}}}]);
//# sourceMappingURL=61-c367557996c563978d5a.js.map