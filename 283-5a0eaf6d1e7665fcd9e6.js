(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{2923:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(l(0)),n=i(l(773));function i(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(n.default,{id:"first",labelText:"First Checkbox",defaultChecked:!0}),a.default.createElement(n.default,{id:"second",labelText:"Second Checkbox"}),a.default.createElement(n.default,{id:"third",labelText:"Third Checkbox"}))};t.default=d},773:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(0)),n=u(l(2)),i=u(l(4)),d=u(l(808)),o=u(l(809));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var r=i.default.bind(d.default),b={checked:n.default.bool,defaultChecked:n.default.bool,id:n.default.string,inputAttrs:n.default.object,disabled:n.default.bool,isInline:n.default.bool,isLabelHidden:n.default.bool,labelText:n.default.node.isRequired,labelTextAttrs:n.default.object,name:n.default.string,onBlur:n.default.func,onChange:n.default.func,onFocus:n.default.func,value:n.default.string},f={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},h=function(e){var t=e.checked,l=e.defaultChecked,n=e.inputAttrs,i=e.id,d=e.disabled,u=e.isInline,b=e.isLabelHidden,f=e.labelText,h=e.labelTextAttrs,_=e.name,m=e.onBlur,v=e.onChange,x=e.onFocus,p=e.value,k=s(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),C=c({},n);void 0!==t?C.checked=t:C.defaultChecked=l;var w=r(["checkbox",{"is-inline":u},k.className]),g=r(["label",{"is-disabled":d},{"is-mobile":o.default.isConsideredMobileDevice()},h.className]),T=r(["native-input",n.className]),y=r(["label-text",{"is-hidden":b},{"is-mobile":o.default.isConsideredMobileDevice()}]),O=null;return b?(C["aria-label"]=f,O=a.default.createElement("span",c({},h,{className:y}))):O=a.default.createElement("span",c({},h,{className:y}),f),a.default.createElement("div",c({},k,{className:w}),a.default.createElement("label",{htmlFor:i,className:g},a.default.createElement("input",c({},C,{type:"checkbox",id:i,disabled:d,name:_,value:p,onChange:v,onFocus:x,onBlur:m,className:T})),O))};h.propTypes=b,h.defaultProps=f,h.isCheckbox=!0;var _=h;t.default=_},808:function(e,t,l){e.exports={checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},809:function(e,t,l){"use strict";var a={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=a}}]);
//# sourceMappingURL=283-5a0eaf6d1e7665fcd9e6.js.map