(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{2240:function(e,t,n){"use strict";n.r(t),t.default="# List Item\n\nThe list item provides a pattern for selection/selectability for li surrounded child content. The onSelect event is the primary means for interaction, as it yeilds the associated metaData when valid selection occurs, though individual onClick and onKeyDown events can be applied through the use of customProps if greated granularity is required.\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport List, { Item } from 'terra-list/lib/List';\n\n<Item\n  key={itemData.key}\n  isSelectable\n  isSelected={false}\n  metaData={{ key: 'my-item-key' }}\n  onSelect={this.handleItemSelection}\n>\n  <p>List item text</p>\n</Item>\n\n\n```\n"},2241:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport ChevronRight from 'terra-icon/lib/icon/IconChevronRight';\nimport ListUtils from './ListUtils';\nimport styles from './List.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The content element to be placed inside the list item for display.\n   */\n  children: PropTypes.node,\n  /**\n   * Whether or not the list item has a disclosure indicator presented.\n   */\n  hasChevron: PropTypes.bool,\n  /**\n   * Whether or not the list item should have selection styles applied.\n   */\n  isSelected: PropTypes.bool,\n  /**\n   * Whether or not the list item should have styles to indicate the item is selectable.\n   */\n  isSelectable: PropTypes.bool,\n  /**\n   * The associated metaData to be provided in the onSelect callback.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  metaData: PropTypes.object,\n  /**\n   * Function callback for when the appropriate click or key action is performed.\n   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)\n   */\n  onSelect: PropTypes.func,\n  /**\n   * Function callback for the ref of the li.\n   */\n  refCallback: PropTypes.func,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onBlur: PropTypes.func,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onClick: PropTypes.func,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onKeyDown: PropTypes.func,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onMouseDown: PropTypes.func,\n};\n\nconst defaultProps = {\n  children: [],\n  hasChevron: false,\n  isSelected: false,\n  isSelectable: false,\n};\n\nconst ListItem = ({\n  children,\n  hasChevron,\n  isSelected,\n  isSelectable,\n  metaData,\n  onBlur,\n  onClick,\n  onKeyDown,\n  onMouseDown,\n  onSelect,\n  refCallback,\n  ...customProps\n}) => {\n  const listItemClassNames = cx([\n    'list-item',\n    { selected: isSelected && isSelectable },\n    { 'is-selectable': isSelectable },\n    customProps.className,\n  ]);\n\n  const attrSpread = {};\n  if (isSelectable) {\n    attrSpread.onClick = ListUtils.wrappedOnClickForItem(onClick, onSelect, metaData);\n    attrSpread.onKeyDown = ListUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);\n    attrSpread.tabIndex = '0';\n    attrSpread.role = 'option';\n    attrSpread['aria-selected'] = isSelected;\n    attrSpread['data-item-show-focus'] = 'true';\n    attrSpread.onBlur = ListUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-item-show-focus', 'true'));\n    attrSpread.onMouseDown = ListUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-item-show-focus', 'false'));\n  }\n\n  return (\n    <li {...customProps} {...attrSpread} className={listItemClassNames} ref={refCallback}>\n      <div className={cx('item-fill')} key=\"item-fill\">{children}</div>\n      {hasChevron && <div className={cx('item-end')} key=\"item-end\">{<span className={cx('chevron')}><ChevronRight height=\"1em\" width=\"1em\" /></span>}</div>}\n    </li>\n  );\n};\n\nListItem.propTypes = propTypes;\nListItem.defaultProps = defaultProps;\n\nexport default ListItem;\n"},2242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(96)),o=i(n(769)),l=i(n(4)),s=i(n(796));function i(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(s.default),d=function(){return a.default.createElement(r.default,{role:"listbox"},a.default.createElement(r.Item,{key:"default"},a.default.createElement(o.default,{title:"Default ListItem",className:c("placeholder")})),a.default.createElement(r.Item,{key:"chevron",hasChevron:!0},a.default.createElement(o.default,{title:"Chevron ListItem",className:c("placeholder")})),a.default.createElement(r.Item,{key:"selectable",isSelectable:!0},a.default.createElement(o.default,{title:"Selectable ListItem",className:c("placeholder")})),a.default.createElement(r.Item,{key:"selected",isSelectable:!0,isSelected:!0},a.default.createElement(o.default,{title:"Selected ListItem",className:c("placeholder")})))};t.default=d},2243:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport List, { Item } from 'terra-list/lib/index';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport styles from './ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List role=\"listbox\">\n    <Item\n      key=\"default\"\n    >\n      <Placeholder title=\"Default ListItem\" className={cx('placeholder')} />\n    </Item>\n    <Item\n      key=\"chevron\"\n      hasChevron\n    >\n      <Placeholder title=\"Chevron ListItem\" className={cx('placeholder')} />\n    </Item>\n    <Item\n      key=\"selectable\"\n      isSelectable\n    >\n      <Placeholder title=\"Selectable ListItem\" className={cx('placeholder')} />\n    </Item>\n    <Item\n      key=\"selected\"\n      isSelectable\n      isSelected\n    >\n      <Placeholder title=\"Selected ListItem\" className={cx('placeholder')} />\n    </Item>\n  </List>\n);\n\nexport default ListSectionExample;\n"},2723:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(756)),o=d(n(2240)),l=n(790),s=d(n(2241)),i=d(n(2242)),c=d(n(2243));function d(e){return e&&e.__esModule?e:{default:e}}var u=function(){return a.default.createElement(r.default,{packageName:l.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{example:a.default.createElement(i.default,null),source:c.default}],propsTables:[{componentName:"List-Item",componentSrc:s.default}]})};t.default=u},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),o=d(n(761)),l=d(n(248)),s=d(n(4)),i=d(n(757)),c=d(n(760));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=s.default.bind(c.default),f={children:r.default.node,packageName:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,propsResolution:r.default.string}))},h=function(e){for(var t=e.packageName,n=e.readme,r=e.srcPath,s=e.examples,c=e.propsTables,d=e.children,f=p(e,["packageName","readme","srcPath","examples","propsTables","children"]),h=0,b=s,g=c,y=0;y<b.length;y+=1)b[y].id=h,h+=1;for(var v=0;v<g.length;v+=1)g[v].id=h,h+=1;var _,x=m(["doc-template",f.className]);if(b.length>0){var S=b.length>1?"Examples":"Example";_=a.default.createElement("h1",{className:m("examples-header")},S)}var k=a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}));return a.default.createElement("div",u({},f,{className:x}),a.default.createElement("div",{className:m("doc-card")},t&&k,n&&a.default.createElement(l.default,{src:n}),r&&a.default.createElement("a",{href:r},"View component source code")),_,b.map(function(e){return a.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})}),a.default.createElement("div",{className:m("doc-card")},g.map(function(e){return a.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})})),d&&a.default.createElement("div",{className:m("doc-card")},d))};h.propTypes=f,h.defaultProps={packageName:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;t.default=b},757:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),l=u(n(762)),s=u(n(763)),i=u(n(4)),c=u(n(758)),d=u(n(759));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",s.default);var v=i.default.bind(c.default),_={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},S=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=b(t).call(this,e))||"object"!==p(r)&&"function"!=typeof r?g(a):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(g(n)),n.handleCodeToggle=n.handleCodeToggle.bind(g(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.default.Component),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState(function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}})}},{key:"handleCodeToggle",value:function(){this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,o=e.children,s=e.description,i=f(e,["title","example","exampleSrc","children","description"]),c=this.state,u=c.isExpanded,p={};return c.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",m({},i,{className:v("template",i.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:p},s&&r.default.createElement("div",{className:v("description")},s),n,o),a&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?r.default.createElement(l.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&h(n.prototype,a),o&&h(n,o),t}();S.propTypes=_,S.defaultProps=x;var k=S;t.default=k},758:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",r="#B2B2B2",o="#c5a5c5",l="#5a9bcf",s="#8dc891",i="#d7deea",c="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:s},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:s},keyword:{color:o},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},760:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe"}},769:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),r=s(n(2)),o=s(n(4)),l=s(n(777));function s(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.default.bind(l.default),u={variant:r.default.oneOf(["light","dark"]),title:r.default.string},p=function(e){var t=e.variant,n=e.title,r=c(e,["variant","title"]),o=d(["placeholder",r.className]),l=d(["inner","is-".concat(t)]);return a.default.createElement("div",i({},r,{className:o}),a.default.createElement("div",{className:l},a.default.createElement("h2",null,n)))};p.propTypes=u,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},777:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},790:function(e){e.exports=JSON.parse('{"name":"terra-list","main":"lib/index.js","version":"4.14.0","description":"The Terra List is a structural component to arrange content within list/listitems.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-list","List","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^1.0.4","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-icon":"^3.16.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},796:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=106-444e696cfff7b399a5a9.js.map