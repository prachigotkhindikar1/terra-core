(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{1694:function(e,t,r){"use strict";r.r(t),t.default="# Shared User\n\nThe `SharedUser` variant represents multiple users - it displays a shared user icon in a circular frame.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-avatar`\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport { SharedUser } from 'terra-avatar';\n\n<SharedUser\n  alt=\"shared users\"\n/>\n```\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1695:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from '../common/Avatar.module.scss';\nimport {\n  AVATAR_VARIANTS, setColor,\n} from '../common/AvatarUtils';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Specifies the alternative text for the image.\n   */\n  alt: PropTypes.string.isRequired,\n  /**\n   * Sets the background color. Defaults to `auto`. Accepted color variants are theme specific.\n   * One of: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.\n   */\n  color: PropTypes.oneOf(['auto', 'neutral', 'one', 'two', 'three', 'four',\n    'five', 'six', 'seven', 'eight', 'nine', 'ten']),\n  /**\n   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.\n   */\n  hashValue: PropTypes.string,\n  /**\n   * Whether to hide avatar from the accessiblity tree.\n   */\n  isAriaHidden: PropTypes.bool,\n  /**\n   * Overrides the default size.\n   */\n  size: PropTypes.string,\n};\n\nconst defaultProps = {\n  color: 'auto',\n  hashValue: undefined,\n  isAriaHidden: false,\n  size: undefined,\n};\n\nconst SharedUser = ({\n  alt,\n  color,\n  hashValue,\n  isAriaHidden,\n  size,\n  ...customProps\n}) => {\n  const colorVariant = setColor(alt, color, hashValue);\n  const attributes = { ...customProps };\n  const customStyles = size ? Object.assign({ fontSize: size }, attributes.style) : attributes.style;\n  const multiUserClassNames = cx([\n    'avatar',\n    `${colorVariant}`,\n    attributes.className,\n  ]);\n\n  const multiUserIconClassNames = cx(['icon', AVATAR_VARIANTS.SHARED_USER]);\n  const multiUserContent = <span className={multiUserIconClassNames} role=\"img\" aria-label={alt} alt={alt} aria-hidden={isAriaHidden} />;\n\n  return (\n    <div {...attributes} className={multiUserClassNames} style={customStyles}>\n      {multiUserContent}\n    </div>\n  );\n};\n\nSharedUser.propTypes = propTypes;\nSharedUser.defaultProps = defaultProps;\n\nexport default SharedUser;\n"},1696:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(0))&&n.__esModule?n:{default:n},s=r(122);var o=function(){return a.default.createElement(s.SharedUser,{alt:"Shared User"})};t.default=o},1697:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport { SharedUser } from 'terra-avatar/lib/index';\n\nconst AvatarSharedUser = () => (\n  <SharedUser alt=\"Shared User\" />\n);\n\nexport default AvatarSharedUser;\n"},1698:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(0))&&n.__esModule?n:{default:n},s=r(122);var o=function(){return a.default.createElement(s.SharedUser,{alt:"Shared User",size:"2em"})};t.default=o},1699:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport { SharedUser } from 'terra-avatar/lib/index';\n\nconst AvatarSize = () => (\n  <SharedUser alt=\"Shared User\" size=\"2em\" />\n);\n\nexport default AvatarSize;\n"},1700:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),a=i(r(2)),s=r(122),o=i(r(1013));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u={color:a.default.string},d=function(e){var t=l({},e);return n.default.createElement(s.SharedUser,{alt:"Shared User",color:t.color})};d.propTypes=u;var c=(0,o.default)(d);t.default=c},1701:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport { SharedUser } from 'terra-avatar/lib/index';\nimport ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';\n\nconst propTypes = { color: PropTypes.string };\n\nconst SharedUserColorVariants = ({\n  ...props\n}) => (\n  <SharedUser alt=\"Shared User\" color={props.color} />\n);\n\nSharedUserColorVariants.propTypes = propTypes;\nexport default ColorVariantsWrapper(SharedUserColorVariants);\n"},2642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(0)),a=f(r(756)),s=f(r(1694)),o=r(874),i=f(r(1695)),l=f(r(1696)),u=f(r(1697)),d=f(r(1698)),c=f(r(1699)),p=f(r(1700)),m=f(r(1701));function f(e){return e&&e.__esModule?e:{default:e}}var h=function(){return n.default.createElement(a.default,{packageName:o.name,readme:s.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(o.name),examples:[{title:"Default",example:n.default.createElement(l.default,null),source:u.default},{title:"Override Size",example:n.default.createElement(d.default,null),source:c.default},{title:"Toggle Color Variants - Theme Specific",example:n.default.createElement(p.default,null),source:m.default}],propsTables:[{componentName:"Shared User",componentSrc:i.default}]})};t.default=h}}]);
//# sourceMappingURL=145-a6a3bd30ffb66ce767b2.js.map