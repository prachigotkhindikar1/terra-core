(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{3129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=i(n(791));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return o.default.createElement(r.default,{title:"Transparent Section Header",isTransparent:!0})}},791:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),i=s(n(2)),a=s(n(4)),c=s(n(32)),l=s(n(161)),u=s(n(792));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=a.default.bind(u.default),O={title:i.default.string.isRequired,onClick:i.default.func,isOpen:i.default.bool,level:i.default.oneOf([1,2,3,4,5,6]),isTransparent:i.default.bool},w={onClick:void 0,isOpen:!1,isTransparent:!1,level:2},h=function(e){return e.nativeEvent.keyCode===c.default.KEY_RETURN||e.nativeEvent.keyCode===c.default.KEY_SPACE},S=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=_(t).call(this,e))||"object"!==f(r)&&"function"!=typeof r?b(o):r).state={isActive:!1},n.wrapOnKeyDown=n.wrapOnKeyDown.bind(b(n)),n.wrapOnKeyUp=n.wrapOnKeyUp.bind(b(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.default.Component),n=t,(o=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){h(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){h(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.onClick,o=e.isOpen,i=e.isTransparent,a=e.level,c=d(e,["title","onClick","isOpen","isTransparent","level"]);var u=p({},c);n&&(u.tabIndex="0",u.onKeyDown=this.wrapOnKeyDown(u.onKeyDown),u.onKeyUp=this.wrapOnKeyUp(u.onKeyUp),u.role="button");var s=m(["accordion-icon",{"is-open":n&&o}]),f=r.default.createElement("div",{className:m("accordion-icon-wrapper")},r.default.createElement("span",{className:s})),y=m(["section-header",{"is-interactable":n},{"is-active":this.state.isActive},{"is-transparent":i},c.className]),_="h".concat(a);return r.default.createElement("div",p({},u,{onClick:n,className:y}),r.default.createElement(l.default,{fitStart:n&&f,fill:r.default.createElement(_,{className:m("title")},t)}))}}])&&y(n.prototype,o),i&&y(n,i),t}();S.propTypes=O,S.defaultProps=w;var k=S;t.default=k},792:function(e,t,n){e.exports={"section-header":"SectionHeader-module__section-header___PT5gM","is-interactable":"SectionHeader-module__is-interactable___3N5_L","is-active":"SectionHeader-module__is-active___1XrZF","is-transparent":"SectionHeader-module__is-transparent___27OCV",title:"SectionHeader-module__title___3SaN6","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___3gLG0","accordion-icon":"SectionHeader-module__accordion-icon___1-oTK","is-open":"SectionHeader-module__is-open___3Bcmi"}}}]);
//# sourceMappingURL=370-ab0664f8ead4556c9da1.js.map