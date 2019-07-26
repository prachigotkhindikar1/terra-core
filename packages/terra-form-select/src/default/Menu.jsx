import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { polyfill } from 'react-lifecycles-compat';
import { injectIntl, intlShape } from 'react-intl';
import Variants from '../shared/_variants';
import AddOption from '../shared/_AddOption';
import ClearOption from '../shared/_ClearOption';
import MaxSelection from '../shared/_MaxSelection';
import NoResults from '../shared/_NoResults';
import MenuUtil from '../shared/_MenuUtil';
import SharedUtil from '../shared/_SharedUtil';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

/* Disabling this rule because props used in getDerivedStateFromProps return false positives. */
/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * The content of the menu.
   */
  children: PropTypes.node,
  /**
   * Select element ref.
   */
  select: PropTypes.instanceOf(Element),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  /**
   * Input element ref used in select component.
   */
  input: PropTypes.instanceOf(Element),
  /**
   * Text for the clear option.
   */
  clearOptionDisplay: PropTypes.string,
  /**
   * The maximum number of options that can be selected. A value less than 2 will be ignored.
   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).
   */
  maxSelectionCount: PropTypes.number,
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when an option is deselected.
   */
  onDeselect: PropTypes.func,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Callback function for option filtering. function(searchValue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * The search value to filter the available options.
   */
  searchValue: PropTypes.string,
  /**
   * The value of the selected options.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * The behavior of the select.
   */
  variant: PropTypes.oneOf([
    Variants.COMBOBOX,
    Variants.DEFAULT,
    Variants.MULTIPLE,
    Variants.SEARCH,
    Variants.TAG,
  ]).isRequired,
  /**
   * @private Visually hidden component designed to feed screen reader text to read.
   */
  visuallyHiddenComponent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

const defaultProps = {
  children: undefined,
  input: undefined,
  clearOptionDisplay: undefined,
  maxSelectionCount: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  optionFilter: undefined,
  searchValue: undefined,
  select: undefined,
  visuallyHiddenComponent: undefined,
  value: undefined,
};

const contextTypes = {
  intl: context => (context.intl === undefined
    ? new Error('Component is internationalized, and must be wrapped in terra-base')
    : undefined
  ),
};

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.searchString = '';
    this.clearSearch = this.clearSearch.bind(this);
    this.clearScrollTimeout = this.clearScrollTimeout.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
  }

  /**
   * Updates the component state when new props are received.
   * @param {Object} props - The received props.
   * @param {Object} state - The current state of the component.
   * @return {Object} - The new state object.
   */
  static getDerivedStateFromProps(props, state) {
    const {
      clearOptionDisplay, maxSelectionCount, searchValue, noResultContent,
    } = props;

    let children;
    let hasNoResults = false;
    let hasMaxSelection = false;
    let hasAddOption = false;

    if (searchValue && searchValue.length > 0 && MenuUtil.isMaxSelectionReached(props)) {
      children = [(<MaxSelection value={maxSelectionCount} />)];
      hasMaxSelection = true;
    } else {
      children = MenuUtil.filter(props.children, props.searchValue, props.optionFilter);
      children = MenuUtil.updateSelectionState(children, props);

      if (MenuUtil.shouldAllowFreeText(props, children)) {
        children.push(<AddOption value={searchValue} />);
        hasAddOption = true;
      }

      if (MenuUtil.shouldShowNoResults(props, children)) {
        children.push(<NoResults noResultContent={noResultContent} value={searchValue} />);
        hasNoResults = true;
      }

      if (MenuUtil.shouldShowClearOption(props, hasAddOption, hasNoResults)) {
        children.unshift(<ClearOption display={clearOptionDisplay} value="" />);
      }
    }

    return {
      children,
      searchValue,
      hasMaxSelection,
      hasNoResults,
      active: MenuUtil.getActiveOptionFromProps(props, children, state),
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    /**
     * Without this detection for ontouchstart and the early return, VoiceOver on iOS will read the
     * first option twice when the menu is opened. First due to aria-live update in componentDidMount
     * and another time because we shift focus to the dropdown and VoiceOver on iOS will read the
     * first option in the dropdown. To mitigate this, the following conditional
     * check opts-out of the aria-live update if browser supports ontouchstart which iOS supports.
     */
    if ('ontouchstart' in window) return;
    this.updateCurrentActiveScreenReader();
  }

  componentDidUpdate() {
    this.updateNoResultsScreenReader();
    this.scrollIntoView();
  }

  componentWillUnmount() {
    const { closedViaKeyEvent } = this.state;
    const { variant, select, input } = this.props;

    this.clearSearch();
    this.clearScrollTimeout();
    if (closedViaKeyEvent) {
      if (variant === Variants.DEFAULT) {
        if (select) {
          select.focus();
        }
        if (SharedUtil.isSafari()) {
          /**
           * Shifting focus back to the select specifically
           * when VoiceOver is on will sometimes trigger VO to shift focus
           * randomly to the root of document or the skip to main link
           * instead of the select and then break VoiceOver usage when navigating the
           * select options on subsequent opening of select
           * Refocusing on select seems to seems to mitigate this VO bug.
           */
          setTimeout(() => {
            if (select) {
              select.focus();
            }
          }, 300);
        }
      } else if (input) {
        input.focus();
      }
    }
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  isActiveSelected() {
    const { value } = this.props;
    const { active } = this.state;

    if (Array.isArray(value)) {
      return value.includes(active);
    }

    return active === value;
  }

  updateNoResultsScreenReader() {
    if (this.liveRegionTimeOut) {
      clearTimeout(this.liveRegionTimeOut);
    }

    this.liveRegionTimeOut = setTimeout(() => {
      const {
        hasMaxSelection,
        hasNoResults,
      } = this.state;

      const {
        intl,
        visuallyHiddenComponent,
        searchValue,
        maxSelectionCount,
      } = this.props;

      // Race condition can occur between calling timeout and unmounting this component.
      if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
        return;
      }

      if (hasNoResults) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: searchValue });
      } else if (hasMaxSelection) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.maxSelectionOption' }, { text: maxSelectionCount });
      } else {
        visuallyHiddenComponent.current.innerText = '';
      }
    }, 1000);
  }

  updateCurrentActiveScreenReader() {
    const {
      intl,
      variant,
      clearOptionDisplay,
      visuallyHiddenComponent,
      children,
    } = this.props;

    const { active } = this.state;

    const clearSelectTxt = intl.formatMessage({ id: 'Terra.form.select.clearSelect' });

    if (this.menu !== null) {
      this.menu.setAttribute('aria-activedescendant', `terra-select-option-${active}`);
    }

    // Announces options to screen readers as user navigates through them via keyboard
    if (visuallyHiddenComponent) {
      // Detects if option is clear option and provides accessible text
      if (clearOptionDisplay) {
        const element = this.menu.querySelector('[data-select-active]');
        if (element && element.hasAttribute('data-terra-select-clear-option')) {
          visuallyHiddenComponent.current.innerText = clearSelectTxt;
        }
      }

      // Detects if option is an "Add option" and provides accessible text
      if (variant === Variants.COMBOBOX || variant === Variants.TAG) {
        const element = this.menu.querySelector('[data-select-active]');

        if (element && element.hasAttribute('data-terra-select-add-option')) {
          const display = element.querySelector("[class*='display']").innerText;
          visuallyHiddenComponent.current.innerText = display;
        }
      }

      const element = MenuUtil.findByValue(children, active);
      if (element) {
        if (element.props.display === '' && element.props.value === '') {
          // Used for case where users selects clear option and opens
          // dropdown again and navigates to clear option
          visuallyHiddenComponent.current.innerText = clearSelectTxt;
        } else if (this.isActiveSelected()) {
          visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.selectedText' }, { text: element.props.display });
        } else {
          visuallyHiddenComponent.current.innerText = element.props.display;
        }
      }
    }
  }

  /**
   * Clears the default variant keyboard search.
   */
  clearSearch() {
    this.searchString = '';
    clearTimeout(this.searchTimeout);
    this.searchTimeout = null;
  }

  /**
   * Clears the scroll timeout.
   */
  clearScrollTimeout() {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = null;
  }

  /**
   * Clones the menu content with the necessary events.
   * @param {ReactNode} object - The node being cloned.
   * @return {array} - A cloned copy of the object.
   */
  clone(object) {
    const { variant, value } = this.props;
    const { active } = this.state;

    return React.Children.map(object, (option) => {
      if (option.type.isOption) {
        return React.cloneElement(option, {
          id: `terra-select-option-${option.props.value}`,
          isActive: option.props.value === active,
          isCheckable: MenuUtil.allowsMultipleSelections(variant),
          isSelected: MenuUtil.isSelected(value, option.props.value),
          variant,
          onMouseDown: () => { this.downOption = option; },
          onMouseUp: event => this.handleOptionClick(event, option),
          onMouseEnter: event => this.handleMouseEnter(event, option),
          ...(option.props.value === active) && { 'data-select-active': true },
        });
      } if (option.type.isOptGroup) {
        return React.cloneElement(option, {}, this.clone(option.props.children));
      }
      return option;
    });
  }

  /**
   * Handles keyboard interactions within the dropdown.
   * @param {event} event - The key down event.
   */
  handleKeyDown(event) {
    const { keyCode, key } = event;
    const { active, children } = this.state;
    const {
      intl,
      onSelect,
      onDeselect,
      value,
      variant,
      clearOptionDisplay,
      visuallyHiddenComponent,
    } = this.props;
    const isAlphanumericKey = keyCode >= 48 && keyCode <= 90;

    const selectedTxt = intl.formatMessage({ id: 'Terra.form.select.selected' });
    const unselectedTxt = intl.formatMessage({ id: 'Terra.form.select.unselected' });

    if (key === 'ArrowUp') {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: MenuUtil.findPrevious(children, active) });
      this.updateCurrentActiveScreenReader();
    } else if (key === 'ArrowDown') {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: MenuUtil.findNext(children, active) });
      this.updateCurrentActiveScreenReader();
    } else if (key === 'Enter' && active !== null && (!MenuUtil.allowsMultipleSelections(variant) || !MenuUtil.includes(value, active))) {
      event.preventDefault();

      if (!MenuUtil.allowsMultipleSelections(variant)) {
        this.setState({ closedViaKeyEvent: true });
      }
      const option = MenuUtil.findByValue(children, active);
      // Handles communicating the case where a clear option is selected to screen readers
      if (clearOptionDisplay) {
        const activeOption = this.menu.querySelector('[data-select-active]');
        if (activeOption && activeOption.hasAttribute('data-terra-select-clear-option')) {
          visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.selectCleared' });
        }
      }
      // Handles communicating the case where a regular option is selected to screen readers.
      /*
        Detecting if browser is not Safari before updating aria-live as there is some odd behaivor
        with VoiceOver on desktop, that causes the selected option to be read twice when this is
        is added to aria-live container.
        When we shift focus back to select, VoiceOver automatically reads the display text.
        Using aria-hidden on the display does not prevent VO from reading the display text and so it
        results in reading the display text followed by reading the aria-live message which is
        the display text + 'selected'
        */
      if (SharedUtil.isSafari()) {
        if (variant === Variants.MULTIPLE || variant === Variants.TAG) {
          visuallyHiddenComponent.current.innerText = `${option.props.display} ${selectedTxt}`;
        }
      } else {
        visuallyHiddenComponent.current.innerText = `${option.props.display} ${selectedTxt}`;
      }
      if (onSelect) {
        onSelect(option.props.value, option);
      }
    } else if (key === 'Enter' && active !== null && MenuUtil.allowsMultipleSelections(variant) && MenuUtil.includes(value, active)) {
      event.preventDefault();
      const option = MenuUtil.findByValue(children, active);
      // Handles communicating the case where a regular option is Unselected to screen readers.
      /*
        Detecting if browser is not Safari before updating aria-live as there is some odd behaivor
        with VoiceOver on desktop, that causes the selected option to be read twice when this is
        is added to aria-live container.
        When we shift focus back to select, VoiceOver automatically reads the display text.
        Using aria-hidden on the display does not prevent VO from reading the display text and so it
        results in reading the display text followed by reading the aria-live message which is
        the display text + 'Unselected'
        */
      if (SharedUtil.isSafari()) {
        if (variant === Variants.MULTIPLE || variant === Variants.TAG) {
          visuallyHiddenComponent.current.innerText = `${option.props.display} ${unselectedTxt}`;
        }
      } else {
        visuallyHiddenComponent.current.innerText = `${option.props.display} ${unselectedTxt}`;
      }
      onDeselect(option.props.value, option);
    } else if (key === 'Home') {
      event.preventDefault();
      this.setState({ active: MenuUtil.findFirst(children) });
    } else if (key === 'End') {
      event.preventDefault();
      this.setState({ active: MenuUtil.findLast(children) });
    } else if (variant === Variants.DEFAULT && isAlphanumericKey) {
      this.searchString = this.searchString.concat(key);
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(this.clearSearch, 500);
      this.setState(prevState => ({ active: MenuUtil.findWithStartString(prevState.children, this.searchString) || active }));
    }
  }

  /**
   * Communicates the selection or deselection of an option.
   * @param {event} event - The click event triggering the callback.
   * @param {ReactNode} option - The option that was clicked.
   */
  handleOptionClick(event, option) {
    if (option.props.disabled || option !== this.downOption) {
      return;
    }

    const {
      select, input, onDeselect, onSelect, value, variant,
    } = this.props;

    if (MenuUtil.allowsMultipleSelections(variant) && MenuUtil.includes(value, option.props.value)) {
      if (onDeselect) {
        onDeselect(option.props.value, option);
      }
    } else {
      if (onSelect) {
        onSelect(option.props.value, option);
      }
      if (variant === Variants.DEFAULT) {
        if (select) {
          select.focus();
        }
      } else if (input) {
        input.focus();
      }
    }
  }

  /**
   * Sets the hovered option as the active value.
   * @param {event} event - The mouse enter event.
   * @param {ReactNode} option - The option that received the mouse enter event.
   */
  handleMouseEnter(event, option) {
    // Prevents setting the active option on mouse enter if the keyboard scrolled the view.
    if (this.scrollTimeout) {
      return;
    }

    if (!option.props.disabled) {
      this.setState({ active: option.props.value });
    }

    if (option.props.onMouseEnter) {
      option.props.onMouseEnter(event);
    }
  }

  /**
   * Scrolls the active option into view.
   * Options already in view will not scroll.
   * Options above the dropdown will be scrolled to the top of the menu.
   * Options below the dropdown will be scrolled to the bottom of the menu.
   */
  scrollIntoView() {
    const { active } = this.state;
    const activeOption = this.menu.querySelector('[data-select-active]');
    if (!active || activeOption === null) {
      return;
    }

    const dropdownRect = this.menu.parentNode.getBoundingClientRect();
    const optionRect = activeOption.getBoundingClientRect();

    if (optionRect.top < dropdownRect.top) {
      activeOption.scrollIntoView();
    } else if (optionRect.bottom > dropdownRect.bottom) {
      activeOption.scrollIntoView(false);
    }
  }

  render() {
    const { active, children } = this.state;

    return (
      /**
       * Note: role="listbox" and aria-activedescendant needed for VoiceOver on iOS to properly
       * shift the virtual indicator to this DOM element when dropdown is rendered. If you modify these
       * attributes, you'll need to manually verify that the virtual indicator on iOS is still shifted
       * to the dropdown / the selected item in the dropdown if an item is selected when the dropdown
       * is opened.
       */
      <ul
        id="terra-select-menu"
        role="listbox"
        className={cx('menu')}
        ref={(menu) => { this.menu = menu; }}
        {...(active !== null ? { 'aria-activedescendant': `terra-select-option-${active}` } : {})}
        tabIndex="0"
      >
        {this.clone(children)}
      </ul>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.contextTypes = contextTypes;

/**
 * This polyfill enables backwards compatibility of features added in React 16.3.0.
 * More information is available at: https://github.com/reactjs/react-lifecycles-compat
 */
polyfill(Menu);

export default injectIntl(Menu);
