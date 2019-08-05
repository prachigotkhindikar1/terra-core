(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{2620:function(n,e,r){"use strict";r.r(e),e.default='### scss\n```scss\n@import "compass/reset";\n\n// variables\n$colorGreen: #008000;\n$colorGreenDark: darken($colorGreen, 10);\n\ndiv,\n.navbar,\n#header,\ninput[type="input"] {\n    font-family: "Helvetica Neue", Arial, sans-serif;\n    width: auto;\n    margin: 0 auto;\n    display: block;\n    &:hover { color: $colorGreenDark; }\n    .home {\n          background: url(\'http://placehold.it/20\') scroll no-repeat 0 0;\n    }\n    padding: {\n        left: 5px; right: 5px;\n    }\n}\n\n@for $i from 1 through 5 {\n    .span#{$i} {\n        width: 20px*$i;\n    }\n}\n\n@mixin mobile {\n  @media screen and (max-width : 600px) {\n    @content;\n  }\n}\n```'},3068:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(r(0)),o=i(r(248)),a=i(r(2620));function i(n){return n&&n.__esModule?n:{default:n}}var l=function(){return t.default.createElement(o.default,{src:a.default})};e.default=l}}]);
//# sourceMappingURL=468-643810a4aa9d924c3828.js.map