(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{2948:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(847));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}function u(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){var e,n,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(l=d(t).call(this))||"object"!==i(l)&&"function"!=typeof l?f(n):l).state={isInvalid:!1},e.toggleInvalid=e.toggleInvalid.bind(f(e)),e}var n,l,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.default.Component),n=t,(l=[{key:"toggleInvalid",value:function(){this.setState(function(e){return{isInvalid:!e.isInvalid}})}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),r.default.createElement(o.default,{inputId:"test-input",defaultValue:"Value",error:"Error message.",help:"Help message.",hideRequired:!0,inputAttrs:{name:"test",type:"text"},isInvalid:this.state.isInvalid,label:"Label Text",labelAttrs:{className:"label"},showOptional:!0}))}}])&&u(n.prototype,l),a&&u(n,a),t}();t.default=c},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(0)),r=u(n(2)),o=u(n(249)),a=u(n(256)),i=u(n(251));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={inputId:r.default.string.isRequired,label:r.default.node.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,error:r.default.node,errorIcon:r.default.element,help:r.default.node,hideRequired:r.default.bool,inputAttrs:r.default.object,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,refCallback:r.default.func,required:r.default.bool,showOptional:r.default.bool,type:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number])},c={defaultValue:void 0,disabled:!1,error:null,errorIcon:l.default.createElement(a.default,null),help:null,hideRequired:!1,inputAttrs:{},isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},p=function(e){var t,n=e.defaultValue,r=e.disabled,a=e.error,u=e.errorIcon,s=e.help,c=e.hideRequired,p=e.inputAttrs,b=e.inputId,y=e.isInline,v=e.isInvalid,h=e.isLabelHidden,m=e.label,g=e.labelAttrs,O=e.maxWidth,I=e.onChange,w=e.refCallback,j=e.required,_=e.showOptional,S=e.type,q=e.value,C=f(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","refCallback","required","showOptional","type","value"]);s&&a&&v?t="".concat(b,"-error ").concat(b,"-help"):(s&&(t="".concat(b,"-help")),a&&v&&(t="".concat(b,"-error")));var k=S||p.type;return l.default.createElement(o.default,d({label:m,labelAttrs:g,error:a,errorIcon:u,help:s,hideRequired:c,required:j,showOptional:_,isInvalid:v,isInline:y,isLabelHidden:h,htmlFor:b,maxWidth:O},C),l.default.createElement(i.default,d({},p,{disabled:p.disabled||r,id:b,type:k,onChange:I,value:q,defaultValue:n,refCallback:w,"aria-describedby":t})))};p.propTypes=s,p.defaultProps=c;var b=p;t.default=b}}]);
//# sourceMappingURL=456-cf5c23284cb240bc7e8b.js.map