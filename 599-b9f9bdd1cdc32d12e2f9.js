(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{3118:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n(0)),u=i(n(52)),c=i(n(252));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(r=f(e).call(this,t))||"object"!==a(r)&&"function"!=typeof r?s(o):r).onChange=n.onChange.bind(s(n)),n.handleButtonClick=n.handleButtonClick.bind(s(n)),n.state={searchText:""},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,r.default.Component),n=e,(o=[{key:"onChange",value:function(t,e){this.setState({searchText:e})}},{key:"handleButtonClick",value:function(){this.searchInput&&this.searchInput.focus()}},{key:"render",value:function(){var t=this;return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,{text:"Focus Me",onClick:this.handleButtonClick,id:"search-field-focus-button"}),r.default.createElement(c.default,{onChange:this.onChange,value:this.state.searchText,inputRefCallback:function(e){t.searchInput=e}}))}}])&&l(n.prototype,o),i&&l(n,i),e}();e.default=y}}]);
//# sourceMappingURL=599-b9f9bdd1cdc32d12e2f9.js.map