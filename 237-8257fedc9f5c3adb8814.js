(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{1026:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),r=p(n(2)),i=p(n(4)),s=n(19),l=p(n(771)),u=p(n(121)),c=p(n(32)),d=p(n(817)),g=n(818);function p(e){return e&&e.__esModule?e:{default:e}}function h(e){return(h="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=i.default.bind(d.default),v={onPageChange:r.default.func.isRequired,selectedPage:r.default.number.isRequired,totalCount:r.default.number.isRequired,itemCountPerPage:r.default.number.isRequired,intl:s.intlShape.isRequired},C=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=m(t).call(this,e))||"object"!==h(o)&&"function"!=typeof o?b(a):o).handlePageChange=n.handlePageChange.bind(b(n)),n.handleOnKeyDown=n.handleOnKeyDown.bind(b(n)),n.hasNavContext=n.hasNavContext.bind(b(n)),n.buildPageButtons=n.buildPageButtons.bind(b(n)),n.reducedPaginator=n.reducedPaginator.bind(b(n)),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o.default.Component),n=t,(a=[{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),!1)}}},{key:"handleOnKeyDown",value:function(e){var t=this;return function(n){if(n.nativeEvent.keyCode===c.default.KEY_RETURN||n.nativeEvent.keyCode===c.default.KEY_SPACE){if(n.preventDefault(),Number.isNaN(Number(e)))return t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1;t.props.onPageChange(e)}return!1}}},{key:"buildPageButtons",value:function(e,t){var n=this,a=this.props,r=a.totalCount,i=a.itemCountPerPage,s=a.selectedPage,l=a.intl,u=(0,g.pageSet)(s,(0,g.calculatePages)(r,i)),c=[];return u.forEach(function(a){var r=y(["nav-link",a===s?"is-selected":null]);a>e||c.push(o.default.createElement("button",{"aria-label":l.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:a}),"aria-current":a===s&&"page",className:r,tabIndex:a===s?null:"0",key:"pageButton_".concat(a),onClick:t(a),onKeyDown:n.handleOnKeyDown(a),type:"button"},a))}),c}},{key:"hasNavContext",value:function(){return this.props.totalCount&&this.props.itemCountPerPage}},{key:"defaultPaginator",value:function(){var e=(0,g.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,a=t.intl,r=1===n?1:n-1,i=n===e?e:n+1;return o.default.createElement("div",{className:y(["paginator",!this.hasNavContext()&&"pageless"])},this.hasNavContext()&&o.default.createElement("button",{"aria-disabled":1===n,"aria-label":a.formatMessage({id:"Terra.paginator.first"}),className:y(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},a.formatMessage({id:"Terra.paginator.first"})),o.default.createElement("button",{"aria-disabled":1===n,"aria-label":a.formatMessage({id:"Terra.paginator.previous"}),className:y(["nav-link","left-controls","previous",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(r),onKeyDown:this.handleOnKeyDown(r),type:"button"},o.default.createElement("span",{className:y("icon")}),a.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&this.buildPageButtons(e,this.handlePageChange),o.default.createElement("button",{"aria-disabled":n===e,"aria-label":a.formatMessage({id:"Terra.paginator.next"}),className:y(["nav-link","right-controls","next",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(i),onKeyDown:this.handleOnKeyDown(i),type:"button"},a.formatMessage({id:"Terra.paginator.next"}),o.default.createElement("span",{className:y("icon")})),this.hasNavContext()&&o.default.createElement("button",{"aria-disabled":n===e,"aria-label":a.formatMessage({id:"Terra.paginator.last"}),className:y(["nav-link","right-controls",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(e),onKeyDown:this.handleOnKeyDown(e),type:"button"},a.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=(0,g.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,a=t.intl,r=1===n?1:n-1,i=n===e?e:n+1;return o.default.createElement("div",{className:y(["paginator",!this.hasNavContext()&&"pageless"]),role:"navigation","aria-label":"pagination"},this.hasNavContext()&&o.default.createElement("button",{"aria-disabled":1===n,"aria-label":a.formatMessage({id:"Terra.paginator.first"}),className:y(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},a.formatMessage({id:"Terra.paginator.first"})),o.default.createElement("button",{"aria-disabled":1===n,"aria-label":a.formatMessage({id:"Terra.paginator.previous"}),className:y(["nav-link","left-controls","previous","icon-only",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(r),onKeyDown:this.handleOnKeyDown(r),type:"button"},o.default.createElement(u.default,{text:a.formatMessage({id:"Terra.paginator.previous"})}),o.default.createElement("span",{className:y("icon")})),this.hasNavContext()&&a.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),o.default.createElement("button",{"aria-disabled":n===e,"aria-label":a.formatMessage({id:"Terra.paginator.next"}),className:y(["nav-link","right-controls","next","icon-only",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(i),onKeyDown:this.handleOnKeyDown(i),type:"button"},o.default.createElement(u.default,{text:a.formatMessage({id:"Terra.paginator.next"})}),o.default.createElement("span",{className:y("icon")})),this.hasNavContext()&&o.default.createElement("button",{"aria-disabled":n===e,"aria-label":a.formatMessage({id:"Terra.paginator.last"}),className:y(["nav-link","right-controls",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(e),onKeyDown:this.handleOnKeyDown(e),type:"button"},a.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return o.default.createElement(l.default,{tiny:this.reducedPaginator(),small:this.defaultPaginator()})}}])&&f(n.prototype,a),r&&f(n,r),t}();C.propTypes=v;var x=(0,s.injectIntl)(C);t.default=x},1027:function(e,t,n){e.exports={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___2k9ks"}},2296:function(e,t,n){"use strict";n.r(t),t.default="# Terra Controlled Paginator\n\nControlled version of the [Paginator](https://github.com/cerner/terra-core/packages/terra-paginator/docs/README.md) for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-paginator`\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\n\nclass ControlledPaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={450} itemCountPerPage={10} />\n    );\n  }\n}\n```\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2297:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport { injectIntl, intlShape } from 'react-intl';\nimport ResponsiveElement from 'terra-responsive-element';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport KeyCode from 'keycode-js';\nimport styles from './Paginator.module.scss';\nimport { calculatePages, pageSet } from './_paginationUtils';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Function to be executed when a navigation element is selected.\n   */\n  onPageChange: PropTypes.func.isRequired,\n  /**\n   * The active/selected page. Used to set the default selected page or maintain selection across renders.\n   * Required when using totalCount and itemCountPerPage.\n   */\n  selectedPage: PropTypes.number.isRequired,\n  /**\n   * Total number of all items being paginated.\n   * Required when using itemCountPerPage and selectedPage.\n   */\n  totalCount: PropTypes.number.isRequired,\n  /**\n   * Total number of items per page.\n   * Required when using selectedPage and totalCount.\n   */\n  itemCountPerPage: PropTypes.number.isRequired,\n  /**\n   * @private\n   * The intl object to be injected for translations.\n   */\n  intl: intlShape.isRequired,\n};\n\nclass Paginator extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handlePageChange = this.handlePageChange.bind(this);\n    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);\n    this.hasNavContext = this.hasNavContext.bind(this);\n    this.buildPageButtons = this.buildPageButtons.bind(this);\n    this.reducedPaginator = this.reducedPaginator.bind(this);\n  }\n\n  handlePageChange(index) {\n    return (event) => {\n      event.preventDefault();\n\n      if (Number.isNaN(Number(index))) {\n        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);\n\n        return false;\n      }\n\n      this.props.onPageChange(index);\n\n      return false;\n    };\n  }\n\n  handleOnKeyDown(index) {\n    return (event) => {\n      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {\n        event.preventDefault();\n\n        if (Number.isNaN(Number(index))) {\n          this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);\n\n          return false;\n        }\n\n        this.props.onPageChange(index);\n      }\n\n      return false;\n    };\n  }\n\n  buildPageButtons(totalPages, onClick) {\n    const {\n      totalCount,\n      itemCountPerPage,\n      selectedPage,\n      intl,\n    } = this.props;\n    const pageSequence = pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage));\n    const pageButtons = [];\n\n    pageSequence.forEach((val) => {\n      const paginationLinkClassNames = cx([\n        'nav-link',\n        val === selectedPage ? 'is-selected' : null,\n      ]);\n\n      if (val > totalPages) {\n        return;\n      }\n      pageButtons.push((\n        <button\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: val })}\n          aria-current={val === selectedPage && 'page'}\n          className={paginationLinkClassNames}\n          tabIndex={val === selectedPage ? null : '0'}\n          key={`pageButton_${val}`}\n          onClick={onClick(val)}\n          onKeyDown={this.handleOnKeyDown(val)}\n          type=\"button\"\n        >\n          {val}\n        </button>));\n    });\n\n    return pageButtons;\n  }\n\n  hasNavContext() {\n    return this.props.totalCount && this.props.itemCountPerPage;\n  }\n\n  defaultPaginator() {\n    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);\n    const { selectedPage, intl } = this.props;\n    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;\n    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;\n\n    const fullView = (\n      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])}>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === 1}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}\n            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}\n            tabIndex={selectedPage === 1 ? null : '0'}\n            onClick={this.handlePageChange(1)}\n            onKeyDown={this.handleOnKeyDown(1)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.first' })}\n          </button>\n          )\n        }\n        <button\n          aria-disabled={selectedPage === 1}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}\n          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}\n          tabIndex={selectedPage === 1 ? null : '0'}\n          onClick={this.handlePageChange(previousPageIndex)}\n          onKeyDown={this.handleOnKeyDown(previousPageIndex)}\n          type=\"button\"\n        >\n          <span className={cx('icon')} />\n          {intl.formatMessage({ id: 'Terra.paginator.previous' })}\n        </button>\n        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}\n        <button\n          aria-disabled={selectedPage === totalPages}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}\n          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}\n          tabIndex={selectedPage === totalPages ? null : '0'}\n          onClick={this.handlePageChange(nextPageIndex)}\n          onKeyDown={this.handleOnKeyDown(nextPageIndex)}\n          type=\"button\"\n        >\n          {intl.formatMessage({ id: 'Terra.paginator.next' })}\n          <span className={cx('icon')} />\n        </button>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === totalPages}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}\n            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}\n            tabIndex={selectedPage === totalPages ? null : '0'}\n            onClick={this.handlePageChange(totalPages)}\n            onKeyDown={this.handleOnKeyDown(totalPages)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.last' })}\n          </button>\n          )\n        }\n      </div>\n    );\n\n    return fullView;\n  }\n\n  reducedPaginator() {\n    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);\n    const { selectedPage, intl } = this.props;\n    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;\n    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;\n\n    const reducedView = (\n      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role=\"navigation\" aria-label=\"pagination\">\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === 1}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}\n            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}\n            tabIndex={selectedPage === 1 ? null : '0'}\n            onClick={this.handlePageChange(1)}\n            onKeyDown={this.handleOnKeyDown(1)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.first' })}\n          </button>\n          )\n        }\n        <button\n          aria-disabled={selectedPage === 1}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}\n          className={cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled'])}\n          tabIndex={selectedPage === 1 ? null : '0'}\n          onClick={this.handlePageChange(previousPageIndex)}\n          onKeyDown={this.handleOnKeyDown(previousPageIndex)}\n          type=\"button\"\n        >\n          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.previous' })} />\n          <span className={cx('icon')} />\n        </button>\n        {this.hasNavContext() && intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}\n        <button\n          aria-disabled={selectedPage === totalPages}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}\n          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}\n          tabIndex={selectedPage === totalPages ? null : '0'}\n          onClick={this.handlePageChange(nextPageIndex)}\n          onKeyDown={this.handleOnKeyDown(nextPageIndex)}\n          type=\"button\"\n        >\n          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />\n          <span className={cx('icon')} />\n        </button>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === totalPages}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}\n            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}\n            tabIndex={selectedPage === totalPages ? null : '0'}\n            onClick={this.handlePageChange(totalPages)}\n            onKeyDown={this.handleOnKeyDown(totalPages)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.last' })}\n          </button>\n          )\n        }\n      </div>\n    );\n\n    return reducedView;\n  }\n\n  render() {\n    return <ResponsiveElement tiny={this.reducedPaginator()} small={this.defaultPaginator()} />;\n  }\n}\n\nPaginator.propTypes = propTypes;\n\nexport default injectIntl(Paginator);\n"},2298:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(834)),i=c(n(52)),s=c(n(1026)),l=c(n(4)),u=c(n(1027));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=l.default.bind(u.default),b=function(){return function(e,t){for(var n=[],a=0;a<t;a+=1)n.push(o.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},P=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=p(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?h(a):o).state={content:b(),currentPage:1},n.changePages=n.changePages.bind(h(n)),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.default.Component),n=t,(a=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:m("paginator-wrapper")},o.default.createElement(r.default,{header:o.default.createElement("h1",null,"Page",this.state.currentPage),footer:o.default.createElement(s.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10})},o.default.createElement("div",null,o.default.createElement(i.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),o.default.createElement(i.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),o.default.createElement(i.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&g(n.prototype,a),l&&g(n,l),t}();t.default=P},2299:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n"},2739:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(756)),r=c(n(2296)),i=n(966),s=c(n(2297)),l=c(n(2298)),u=c(n(2299));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(o.default,{packageName:i.name,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),examples:[{title:"Controlled Paginator Example",example:a.default.createElement(l.default,null),source:u.default}],propsTables:[{componentName:"Controlled Paginator",componentSrc:s.default}]})};t.default=d}}]);
//# sourceMappingURL=237-8257fedc9f5c3adb8814.js.map