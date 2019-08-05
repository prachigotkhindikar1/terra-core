(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{3011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),a=n(r(764));function n(e){return e&&e.__esModule?e:{default:e}}var i=function(){return o.default.createElement(a.default,{size:"small"})};t.default=i},764:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var a=l(r(0)),n=l(r(2)),i=l(r(4)),u=l(r(766));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function h(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=i.default.bind(u.default),v=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)};t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var y={small:2,medium:5,large:10},g={defaultValue:n.default.string,disabled:n.default.bool,isAutoResizable:n.default.bool,isInvalid:n.default.bool,name:n.default.string,onChange:n.default.func,onFocus:n.default.func,required:n.default.bool,rows:n.default.number,size:n.default.oneOf(["small","medium","large","full"]),value:n.default.string,refCallback:n.default.func},x={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isInvalid:!1,onChange:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0},w=function(e){function t(e){var r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(r=!(a=d(t).call(this,e))||"object"!==s(a)&&"function"!=typeof a?p(o):a).isMobileDevice=v(),r.onChange=r.onChange.bind(p(r)),r.onFocus=r.onFocus.bind(p(r)),r}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.default.Component),r=t,(o=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||y[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e=this,t=this.props,r=t.name,o=t.required,n=(t.onChange,t.onFocus,t.isAutoResizable),i=t.isInvalid,u=t.value,l=t.defaultValue,s=t.rows,h=t.size,d=t.refCallback,p=c({},f(t,["name","required","onChange","onFocus","isAutoResizable","isInvalid","value","defaultValue","rows","size","refCallback"])),b=m(["textarea",{"form-error":i},{"full-size":"full"===h},{resizable:n&&!this.isMobileDevice},p.className]);o&&(p["aria-required"]="true");var v=s||y[h];return void 0!==u?p.value=u:p.defaultValue=l,a.default.createElement("textarea",c({},p,{ref:function(t){e.textarea=t,d&&d(t)},name:r,onFocus:this.onFocus,onChange:this.onChange,required:o,rows:v,className:b}))}}])&&h(r.prototype,o),n&&h(r,n),t}();w.propTypes=g,w.defaultProps=x,w.isTextarea=!0;var _=w;t.default=_},766:function(e,t,r){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI"}}}]);
//# sourceMappingURL=336-55736ebe35bc6455584a.js.map