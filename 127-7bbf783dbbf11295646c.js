(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1928:function(e,t,n){"use strict";n.r(t),t.default="# Terra Form Field\n\nThe Form Field component handles the layout of the label, help text and error text associated with a form element. Additionally, it provides required, optional, and invalid indicators.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-field`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Implementation Notes:\nThe Form-Field component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.\n\n[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Field from 'terra-form-field';\n\n<Field\n  label=\"Do you have any Children?\"\n  labelAttrs={{ className: 'healtheintent-application' }}\n  error=\"This field is required\"\n  help=\"Families are eligible for family package plans\"\n  required\n  isInvalid={this.state.isInvalid}\n >\n   {this.props.children}\n</Field>\n```\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},1929:function(e){e.exports=JSON.parse('{"name":"terra-form-field","main":"lib/Field.js","version":"3.19.0","description":"The Form Field component handles the layout of the label, help text and error text associated with a form element.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-form-field","Field","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-icon":"^3.16.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1930:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport IconError from 'terra-icon/lib/icon/IconError';\nimport styles from './Field.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The form control elements the Field contains.\n   */\n  children: PropTypes.node,\n  /**\n   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.\n   */\n  error: PropTypes.node,\n  /**\n   * Error Icon to display when the input is invalid.\n   */\n  errorIcon: PropTypes.element,\n  /**\n   * Help element to display with the input.\n   */\n  help: PropTypes.node,\n  /**\n   * Whether or not to hide the required indicator on the label.\n   */\n  hideRequired: PropTypes.bool,\n  /**\n   * The htmlFor attribute on the field label.\n   */\n  htmlFor: PropTypes.string,\n  /**\n   * Whether or not the field is invalid.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * Whether or not the field is an inline field.\n   */\n  isInline: PropTypes.bool,\n  /**\n   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.\n   */\n  isLabelHidden: PropTypes.bool,\n  /**\n   * The label of the form control children.\n   */\n  label: PropTypes.node.isRequired,\n  /**\n   * Attributes to attach to the label.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  labelAttrs: PropTypes.object,\n  /**\n   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed\n   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_\n   */\n  maxWidth: PropTypes.string,\n  /**\n   * Whether or not the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * Whether or not to append the 'optional' label to a non-required field label.\n   */\n  showOptional: PropTypes.bool,\n  /**\n   *  Provides first class prop for custom inline styles\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  style: PropTypes.object,\n};\n\nconst defaultProps = {\n  children: null,\n  error: null,\n  errorIcon: <IconError />,\n  help: null,\n  hideRequired: false,\n  htmlFor: undefined,\n  isInvalid: false,\n  isInline: false,\n  isLabelHidden: false,\n  labelAttrs: {},\n  maxWidth: undefined,\n  required: false,\n  showOptional: false,\n};\n\nconst contextTypes = {\n  /* eslint-disable consistent-return */\n  intl: (context) => {\n    if (context.intl === undefined) {\n      return new Error('Component is internationalized, and must be wrapped in terra-base');\n    }\n  },\n};\n\nconst hasWhiteSpace = s => /\\s/g.test(s);\n// Detect IE 10 or IE 11\n// TODO - Delete detection logic when we drop support for IE\nconst isIE = () => (window.navigator.userAgent.indexOf('Trident/6.0') > -1 || window.navigator.userAgent.indexOf('Trident/7.0') > -1);\n\nconst Field = (props, { intl }) => {\n  const {\n    children,\n    error,\n    errorIcon,\n    help,\n    hideRequired,\n    htmlFor,\n    isInvalid,\n    isInline,\n    isLabelHidden,\n    label,\n    labelAttrs,\n    maxWidth,\n    required,\n    showOptional,\n    style,\n    ...customProps\n  } = props;\n\n  const customStyles = maxWidth ? Object.assign({ maxWidth }, style) : style;\n\n  const fieldClasses = cx([\n    'field',\n    { 'field-inline': isInline },\n    customProps.className,\n  ]);\n\n  const labelClassNames = cx([\n    'label',\n    labelAttrs.className,\n  ]);\n\n  // Checks to run when not in production\n  // TODO - Remove this once we make this a required prop.\n  // More info: https://github.com/cerner/terra-core/issues/2290\n  if (process.env.NODE_ENV !== 'production') {\n    if (!htmlFor) {\n      // eslint-disable-next-line\n      console.warn('The htmlFor prop will be required in the next major version bump of terra-form-field. It is needed for creating an accessible mapping from the form field to its related error and help text.');\n    }\n\n    if (htmlFor && hasWhiteSpace(htmlFor)) {\n      // eslint-disable-next-line\n      console.warn('The htmlFor prop should be a string without white spaces as it will be used as an HTML attribute value. Use - or _ in place of white space characters.');\n    }\n  }\n\n\n  /**\n   * IE + JAWS has trouble reading aria-describedby content with our form components.\n   * Using feature detect for Microsoft browsers and injecting the help and error messages\n   * into the label as visually hidden text so JAWS can announce them correctly in IE.\n   */\n  const IEDescriptionText = (\n    isIE()\n      ? (\n        <div className={cx('visually-hidden-text')}>\n          {isInvalid && error ? error : null}\n          {help}\n        </div>\n      ) : null\n  );\n\n  const content = React.Children.map(children, (child) => {\n    if ((required || isInvalid) && child && (child.type.isInput || child.type.isSelect || child.type.isTextarea)) {\n      return React.cloneElement(child, {\n        ...required && { required: true },\n        ...isInvalid && { isInvalid: true },\n      });\n    }\n    return child;\n  });\n\n  const labelGroup = (\n    <div className={cx(['label-group', { 'label-group-hidden': isLabelHidden }])}>\n      {isInvalid && <div className={cx('error-icon')}>{errorIcon}</div>}\n      {\n        <label htmlFor={htmlFor} {...labelAttrs} className={labelClassNames}>\n          {required && (isInvalid || !hideRequired) && <div className={cx('required')}>*</div>}\n          {label}\n          {required && !isInvalid && hideRequired && <div className={cx('required-hidden')}>*</div>}\n          {showOptional && !required && <div className={cx('optional')}>{intl.formatMessage({ id: 'Terra.form.field.optional' })}</div>}\n          {IEDescriptionText}\n        </label>\n      }\n      {!isInvalid && <div className={cx('error-icon-hidden')}>{errorIcon}</div>}\n    </div>\n  );\n\n  return (\n    <div style={customStyles} {...customProps} className={fieldClasses}>\n      {labelGroup}\n      {content}\n      {isInvalid && error && <div tabIndex=\"-1\" id={htmlFor ? `${htmlFor}-error` : undefined} className={cx('error-text')}>{error}</div>}\n      {help && <div tabIndex=\"-1\" id={htmlFor ? `${htmlFor}-help` : undefined} className={cx('help-text')}>{help}</div>}\n    </div>\n  );\n};\n\nField.propTypes = propTypes;\nField.defaultProps = defaultProps;\nField.contextTypes = contextTypes;\n\nexport default Field;\n"},1931:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(0)),l=s(n(249)),a=s(n(4)),i=s(n(1932));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=a.default.bind(i.default),h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=u(t).call(this,e))||"object"!==c(o)&&"function"!=typeof o?p(r):o).state={isInvalid:!1},n.toggleIsInvalid=n.toggleIsInvalid.bind(p(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.default.Component),n=t,(r=[{key:"toggleIsInvalid",value:function(){this.setState(function(e){return{isInvalid:!e.isInvalid}})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h2",null," Field Examples "),o.default.createElement(l.default,{label:"Field Label",help:"This is a standard, non-required field.",error:"Error Message",isInvalid:this.state.isInvalid},o.default.createElement("div",{className:f("field-content")},"Control Placeholder")),o.default.createElement(l.default,{label:"Field Label",help:"This is an optional field.",error:"Error Message",isInvalid:this.state.isInvalid,isInline:!0,showOptional:!0},o.default.createElement("div",{className:f("field-content")},"Control Placeholder")),o.default.createElement(l.default,{label:"Field Label",help:"This is a required field.",error:"Error Message",isInvalid:this.state.isInvalid,isInline:!0,required:!0},o.default.createElement("div",{className:f("field-content")},"Control Placeholder")),o.default.createElement(l.default,{label:"Field Label",help:"This is a required field, but the required indicator is hidden until the field is in error.",error:"Now the required indicator is showing because the field is in error.",isInvalid:this.state.isInvalid,isInline:!0,required:!0,hideRequired:!0},o.default.createElement("div",{className:f("field-content")},"Control Placeholder")),o.default.createElement("hr",null),o.default.createElement("p",null,"If a field is invalid, an error icon will be displayed.",o.default.createElement("button",{type:"button",onClick:this.toggleIsInvalid},"Toggle Invalid State")))}}])&&d(n.prototype,r),a&&d(n,a),t}();t.default=h},1932:function(e,t,n){e.exports={"field-content":"FieldExamples-module__field-content___Ani65"}},2684:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(756)),l=c(n(1928)),a=n(1929),i=c(n(1930)),s=c(n(1931));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement(o.default,{packageName:a.name,readme:l.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(a.name),examples:[{example:r.default.createElement(s.default,null)}],propsTables:[{componentName:"Field",componentSrc:i.default}]})};t.default=d},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(2)),l=d(n(761)),a=d(n(248)),i=d(n(4)),s=d(n(757)),c=d(n(760));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=i.default.bind(c.default),f={children:o.default.node,packageName:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,propsResolution:o.default.string}))},h=function(e){for(var t=e.packageName,n=e.readme,o=e.srcPath,i=e.examples,c=e.propsTables,d=e.children,f=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),h=0,b=i,g=c,y=0;y<b.length;y+=1)b[y].id=h,h+=1;for(var v=0;v<g.length;v+=1)g[v].id=h,h+=1;var _,x=m(["doc-template",f.className]);if(b.length>0){var E=b.length>1?"Examples":"Example";_=r.default.createElement("h1",{className:m("examples-header")},E)}var T=r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return r.default.createElement("div",u({},f,{className:x}),r.default.createElement("div",{className:m("doc-card")},t&&T,n&&r.default.createElement(a.default,{src:n}),o&&r.default.createElement("a",{href:o},"View component source code")),_,b.map(function(e){return r.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),r.default.createElement("div",{className:m("doc-card")},g.map(function(e){return r.default.createElement(l.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),d&&r.default.createElement("div",{className:m("doc-card")},d))};h.propTypes=f,h.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;t.default=b},757:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),l=u(n(2)),a=u(n(762)),i=u(n(763)),s=u(n(4)),c=u(n(758)),d=u(n(759));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.default.registerLanguage("jsx",i.default);var v=s.default.bind(c.default),_={example:l.default.element,exampleSrc:l.default.string,title:l.default.string,description:l.default.node,children:l.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=b(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?g(r):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(g(n)),n.handleCodeToggle=n.handleCodeToggle.bind(g(n)),n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.default.Component),n=t,(r=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,r=e.exampleSrc,l=e.children,i=e.description,s=f(e,["title","example","exampleSrc","children","description"]),c=this.state,u=c.isExpanded,p={};return c.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},s,{className:v("template",s.className)}),t&&o.default.createElement("div",{className:v("header")},o.default.createElement("h2",{className:v("title")},t)),o.default.createElement("div",{className:v("content"),style:p},i&&o.default.createElement("div",{className:v("description")},i),n,l),r&&o.default.createElement("div",{className:v("footer")},o.default.createElement("div",{className:v("button-container")},o.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:v("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:v("chevron-right")}))),o.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?o.default.createElement(a.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&h(n.prototype,r),l&&h(n,l),t}();E.propTypes=_,E.defaultProps=x;var T=E;t.default=T},758:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="#D8DEE9",o="#B2B2B2",l="#c5a5c5",a="#5a9bcf",i="#8dc891",s="#d7deea",c="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:l},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:a},number:{color:a},"function-name":{color:a},constant:{color:a},symbol:{color:a},deleted:{color:a},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:i},keyword:{color:l},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},760:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}}}]);
//# sourceMappingURL=127-7bbf783dbbf11295646c.js.map