(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{2444:function(e,t,n){"use strict";n.r(t),t.default="# Terra Status View\n\nPresents an icon, title, message, and/or buttons based on a status type scenario. Scenarios include `no-data`, `no-matching-results`, `not-authorized`, `error`, or a custom scenario.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-status-view`\n  - `yarn add terra-status-view`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Implementation Notes:\n\nThe Status-View component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.\n\n[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2445:function(e){e.exports=JSON.parse('{"name":"terra-status-view","main":"lib/StatusView.js","version":"4.4.0","description":"The status view component provides an icon, title, message, and buttons inside a view.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-status-view","StatusView","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"},"peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","lodash.uniqueid":"^4.0.1","prop-types":"^15.5.8","terra-button":"^3.19.0","terra-divider":"^3.14.0","terra-doc-template":"^2.15.0","terra-icon":"^3.16.0","terra-mixins":"^1.33.0"}}')},2446:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport { FormattedMessage } from 'react-intl';\nimport Button from 'terra-button';\nimport Divider from 'terra-divider';\nimport styles from './StatusView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst StatusViewVariants = {\n  NODATA: 'no-data',\n  NOMATCHINGRESULTS: 'no-matching-results',\n  NOTAUTHORIZED: 'not-authorized',\n  ERROR: 'error',\n};\n\n/* eslint-disable react/forbid-foreign-prop-types */\nconst propTypes = {\n  /**\n   * An array of objects containing terra-button properties. A key attribute is required for each object.\n   * This array is used to render buttons in the bottom section.\n   * Example:`[{ text: 'Button 1', key: 1, size: 'medium', variant: 'action', onClick: onClickFunction}]`\n   */\n  buttonAttrs: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),\n\n  /**\n   * Display a custom glyph. Overrides a variant's default glyph.\n   */\n  customGlyph: PropTypes.node,\n\n  /**\n   *  Aligns the component at the top of the container rather than \"centered\"\n   */\n  isAlignedTop: PropTypes.bool,\n\n  /**\n   * Determines if the glyph should be displayed.\n   */\n  isGlyphHidden: PropTypes.bool,\n\n  /**\n   * The descriptive text, displayed under the title.\n   */\n  message: PropTypes.string,\n\n  /**\n   * The title displayed under the glyph. Variants contain default titles that can be overriden by this prop.\n   */\n  title: PropTypes.string,\n\n  /**\n   * Sets the glyph and title using a pre-baked variant. One of the following: `no-data`,\n   * `no-matching-results`, `not-authorized`, or `error`\n   */\n  variant: PropTypes.oneOf(Object.values(StatusViewVariants)),\n};\n/* eslint-enable react/forbid-foreign-prop-types */\n\nconst defaultProps = {\n  buttonAttrs: [],\n  customGlyph: undefined,\n  isAlignedTop: false,\n  isGlyphHidden: false,\n  message: undefined,\n  title: undefined,\n  variant: undefined,\n};\n\nconst generateButtons = (buttonAttrsArray) => {\n  if (!buttonAttrsArray.length) {\n    return undefined;\n  }\n\n  return buttonAttrsArray.map(button => <Button {...button} className={cx(['button', button.className])} />);\n};\n\nconst StatusView = ({\n  buttonAttrs,\n  customGlyph,\n  isAlignedTop,\n  isGlyphHidden,\n  message,\n  title,\n  variant,\n  ...customProps\n}) => {\n  let glyphSection;\n  if (customGlyph && !isGlyphHidden) {\n    glyphSection = (\n      <div className={cx('glyph')}>\n        {customGlyph}\n      </div>\n    );\n  } else if (variant && !isGlyphHidden) {\n    glyphSection = (\n      <div className={cx('glyph')}>\n        <svg className={cx(variant)} />\n      </div>\n    );\n  }\n\n  let defaultTitle;\n  if (variant) {\n    defaultTitle = <FormattedMessage id={`Terra.status-view.${variant}`} />;\n  }\n\n  // Custom title takes precedence\n  let titleSection;\n  if (title || defaultTitle) {\n    titleSection = (\n      <div className={cx('title')}>\n        {title || defaultTitle}\n      </div>\n    );\n  }\n\n  let messageSection;\n  if (message) {\n    messageSection = (\n      <div className={cx('message')}>\n        {message}\n      </div>\n    );\n  }\n\n  let actionSection;\n  const buttons = generateButtons(buttonAttrs);\n  if (buttons) {\n    actionSection = (\n      <div className={cx('actions')}>\n        {buttons}\n      </div>\n    );\n  }\n\n  let dividerSection;\n  if (titleSection && (messageSection || actionSection)) {\n    dividerSection = (\n      <div className={cx('divider')}>\n        <Divider />\n      </div>\n    );\n  }\n\n  const outerViewClassNames = cx([\n    'outer-view',\n    { 'is-aligned-top': isAlignedTop },\n    customProps.className,\n  ]);\n\n  const innerViewClassNames = cx([\n    'inner-view',\n  ]);\n\n  return (\n    <div {...customProps} className={outerViewClassNames}>\n      <div className={cx('top-space')} />\n      <div className={innerViewClassNames}>\n        {glyphSection}\n        {titleSection}\n        {dividerSection}\n        {messageSection}\n        {actionSection}\n      </div>\n      <div className={cx('bottom-space')} />\n    </div>\n  );\n};\n\nStatusView.propTypes = propTypes;\nStatusView.defaultProps = defaultProps;\nexport default StatusView;\nexport { StatusViewVariants };\n"},2447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),o=(a=n(125))&&a.__esModule?a:{default:a};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){var e=i((0,r.useState)("error"),2),t=e[0],n=e[1];return r.default.createElement("div",null,r.default.createElement(o.default,{variant:t}),r.default.createElement("fieldset",null,r.default.createElement("legend",null,"Change Variant"),r.default.createElement("select",{id:"statusViewVariant",name:"statusViewVariant",value:t,onChange:function(e){n(e.target.value)}},r.default.createElement("option",{value:"error"},"Error"),r.default.createElement("option",{value:"no-data"},"No Data"),r.default.createElement("option",{value:"no-matching-results"},"No Matching Results"),r.default.createElement("option",{value:"not-authorized"},"Not Authorized"))))};t.default=l},2448:function(e,t,n){"use strict";n.r(t),t.default='import React, { useState } from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport StatusView from \'terra-status-view/lib/StatusView\';\n\nconst ToggleVariants = () => {\n  const [variant, setVariant] = useState(\'error\');\n\n  const handleOnSelect = (event) => {\n    setVariant(event.target.value);\n  };\n\n  return (\n    <div>\n      <StatusView variant={variant} />\n      <fieldset>\n        <legend>Change Variant</legend>\n        <select id="statusViewVariant" name="statusViewVariant" value={variant} onChange={handleOnSelect}>\n          <option value="error">Error</option>\n          <option value="no-data">No Data</option>\n          <option value="no-matching-results">No Matching Results</option>\n          <option value="not-authorized">Not Authorized</option>\n        </select>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleVariants;\n'},2449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),o=(a=n(125))&&a.__esModule?a:{default:a};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){var e=i((0,r.useState)(!1),2),t=e[0],n=e[1],a=i((0,r.useState)(!1),2),l=a[0],s=a[1];return r.default.createElement("div",null,r.default.createElement("div",{style:{height:"400px",border:"1px dashed black"}},r.default.createElement(o.default,{variant:"error",isAlignedTop:t,isGlyphHidden:l})),r.default.createElement("fieldset",null,r.default.createElement("legend",null,"Toggle alignment and glyph"),r.default.createElement("div",null,r.default.createElement("input",{id:"isAlignedTop",type:"checkbox",onChange:function(){n(!t)}}),r.default.createElement("label",{htmlFor:"isAlignedTop"},"isAlignedTop")),r.default.createElement("div",null,r.default.createElement("input",{id:"isGlyphHidden",type:"checkbox",onChange:function(){s(!l)}}),r.default.createElement("label",{htmlFor:"isGlyphHidden"},"isGlyphHidden"))))};t.default=l},2450:function(e,t,n){"use strict";n.r(t),t.default='import React, { useState } from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport StatusView from \'terra-status-view/lib/StatusView\';\n\nconst ToggleAlignmentAndGlyph = () => {\n  const [isAlignedTop, setIsAlignedTop] = useState(false);\n  const [isGlyphHidden, setIsGlyphHidden] = useState(false);\n\n  const handleOnAlignChange = () => {\n    setIsAlignedTop(!isAlignedTop);\n  };\n\n  const handleOnGlyphChange = () => {\n    setIsGlyphHidden(!isGlyphHidden);\n  };\n\n  /* eslint-disable react/forbid-dom-props */\n  return (\n    <div>\n      <div style={{ height: \'400px\', border: \'1px dashed black\' }}>\n        <StatusView variant="error" isAlignedTop={isAlignedTop} isGlyphHidden={isGlyphHidden} />\n      </div>\n      <fieldset>\n        <legend>Toggle alignment and glyph</legend>\n        <div>\n          <input id="isAlignedTop" type="checkbox" onChange={handleOnAlignChange} />\n          <label htmlFor="isAlignedTop">isAlignedTop</label>\n        </div>\n        <div>\n          <input id="isGlyphHidden" type="checkbox" onChange={handleOnGlyphChange} />\n          <label htmlFor="isGlyphHidden">isGlyphHidden</label>\n        </div>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleAlignmentAndGlyph;\n'},2451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(903)),o=i(n(125));function i(e){return e&&e.__esModule?e:{default:e}}var l=a.default.createElement(o.default,{message:"Custom Message",customGlyph:a.default.createElement(r.default,null),title:"Custom Title",buttonAttrs:[{text:"Action 1",size:"medium",key:1},{text:"Action 2",size:"medium",key:2}]});t.default=l},2452:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport IconDiamond from 'terra-icon/lib/icon/IconDiamond';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport StatusView from 'terra-status-view/lib/StatusView';\n\nconst StatusViewButtons = [\n  {\n    text: 'Action 1',\n    size: 'medium',\n    key: 1,\n  }, {\n    text: 'Action 2',\n    size: 'medium',\n    key: 2,\n  },\n];\n\nconst Custom = (\n  <StatusView\n    message=\"Custom Message\"\n    customGlyph={<IconDiamond />}\n    title=\"Custom Title\"\n    buttonAttrs={StatusViewButtons}\n  />\n);\n\nexport default Custom;\n"},2768:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(0)),r=f(n(756)),o=f(n(2444)),i=n(2445),l=f(n(2446)),s=f(n(2447)),c=f(n(2448)),u=f(n(2449)),d=f(n(2450)),p=f(n(2451)),m=f(n(2452));function f(e){return e&&e.__esModule?e:{default:e}}var g=function(){return a.default.createElement(r.default,{packageName:i.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),examples:[{title:"Variants",example:a.default.createElement(s.default,null),source:c.default},{title:"Custom: Icon + message + buttons",example:p.default,source:m.default},{title:"Toggle Alignment and Glyph",example:a.default.createElement(u.default,null),source:d.default}],propsTables:[{componentName:"Status View",componentSrc:l.default}]})};t.default=g},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(2)),o=u(n(761)),i=u(n(248)),l=u(n(4)),s=u(n(757)),c=u(n(760));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(c.default),f={children:r.default.node,packageName:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,propsResolution:r.default.string}))},g=function(e){for(var t=e.packageName,n=e.readme,r=e.srcPath,l=e.examples,c=e.propsTables,u=e.children,f=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),g=0,h=l,y=c,b=0;b<h.length;b+=1)h[b].id=g,g+=1;for(var v=0;v<y.length;v+=1)y[v].id=g,g+=1;var _,x=m(["doc-template",f.className]);if(h.length>0){var w=h.length>1?"Examples":"Example";_=a.default.createElement("h1",{className:m("examples-header")},w)}var T=a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return a.default.createElement("div",d({},f,{className:x}),a.default.createElement("div",{className:m("doc-card")},t&&T,n&&a.default.createElement(i.default,{src:n}),r&&a.default.createElement("a",{href:r},"View component source code")),_,h.map(function(e){return a.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),a.default.createElement("div",{className:m("doc-card")},y.map(function(e){return a.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),u&&a.default.createElement("div",{className:m("doc-card")},u))};g.propTypes=f,g.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=g;t.default=h},757:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(2)),i=d(n(762)),l=d(n(763)),s=d(n(4)),c=d(n(758)),u=d(n(759));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}i.default.registerLanguage("jsx",l.default);var v=s.default.bind(c.default),_={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},w=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=h(t).call(this,e))||"object"!==p(r)&&"function"!=typeof r?y(a):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(y(n)),n.handleCodeToggle=n.handleCodeToggle.bind(y(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.default.Component),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,o=e.children,l=e.description,s=f(e,["title","example","exampleSrc","children","description"]),c=this.state,d=c.isExpanded,p={};return c.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",m({},s,{className:v("template",s.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:p},l&&r.default.createElement("div",{className:v("description")},l),n,o),a&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":d}),"aria-hidden":!d},d?r.default.createElement(i.default,{language:"jsx",style:u.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(n.prototype,a),o&&g(n,o),t}();w.propTypes=_,w.defaultProps=x;var T=w;t.default=T},758:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",r="#B2B2B2",o="#c5a5c5",i="#5a9bcf",l="#8dc891",s="#d7deea",c="#FAC863",u={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:i},number:{color:i},"function-name":{color:i},constant:{color:i},symbol:{color:i},deleted:{color:i},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:l},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:l},keyword:{color:o},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=u},760:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}},903:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(4)),o=l(n(28)),i=l(n(934));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=r.default.bind(i.default),u=function(e){var t=s({},e),n=c(["IconDiamond",e.className]);return a.default.createElement(o.default,s({className:n},t),a.default.createElement("path",{fill:"#78288C",d:"M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};u.displayName="IconDiamond",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=u;t.default=d},934:function(e,t,n){e.exports={IconDiamond:"IconDiamond-module__IconDiamond___3CLAn"}}}]);
//# sourceMappingURL=99-78a247ca7ef240874961.js.map