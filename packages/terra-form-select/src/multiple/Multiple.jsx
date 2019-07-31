import React from 'react';
import PropTypes from 'prop-types';
import Frame from './Frame';
import Option from '../shared/_Option';
import OptGroup from '../shared/_OptGroup';
import Tag from '../shared/_Tag';
import SelectUtil from '../shared/_SelectUtil';

const propTypes = {
  /**
   * Whether a clear option is available to clear the selection, will use placeholder text if provided.
   * This is not applicable to the `multiple` or `tag` variants since the selection can already be deselected using the tag.
   */
  allowClear: PropTypes.bool,
  /**
   * The dropdown menu options.
   */
  children: PropTypes.node,
  /**
   * The default selected value.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * Whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Additional attributes to spread onto the dropdown. ( Style, ClassNames, etc.. )
   */
  // eslint-disable-next-line react/forbid-prop-types
  dropdownAttrs: PropTypes.object,
  /**
   * Whether the select is in an invalid state.
   */
  isInvalid: PropTypes.bool,
  /**
   * The max height of the dropdown.
   */
  maxHeight: PropTypes.number,
  /**
   * @private The maximum number of options that can be selected. A value less than 2 will be ignored.
   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).
   */
  maxSelectionCount: PropTypes.number,
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when the select loses focus. function(event)
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when the value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Callback function triggered when the select is clicked. function(event)
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when an option is deselected. function(value)
   */
  onDeselect: PropTypes.func,
  /**
   * Callback function triggered when the select receives focus. function(event)
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when the search criteria changes. function(searchValue)
   */
  onSearch: PropTypes.func,
  /**
   * Callback function triggered when an option is selected. function(value)
   */
  onSelect: PropTypes.func,
  /**
   * Callback function invoked for each option on search change. function(searchValue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * The selected value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

const defaultProps = {
  allowClear: false,
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isInvalid: false,
  maxSelectionCount: undefined,
  noResultContent: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  required: false,
  value: undefined,
};

const contextTypes = {
  intl: context => (context.intl === undefined
    ? new Error('Component is internationalized, and must be wrapped in terra-base')
    : undefined
  ),
};

class Multiple extends React.Component {
  static defaultValue(props) {
    if (props.value !== undefined) {
      return null;
    }

    return props.defaultValue ? [props.defaultValue].flatten() : [];
  }

  constructor(props) {
    super(props);

    this.state = {
      value: Multiple.defaultValue(props),
    };

    this.display = this.display.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  /**
   * Returns the appropriate variant display
   */
  display() {
    const selectValue = SelectUtil.value(this.props, this.state);

    return selectValue.map(tag => (
      <Tag value={tag} key={tag} onDeselect={this.handleDeselect}>
        {SelectUtil.valueDisplay(this.props, tag)}
      </Tag>
    ));
  }

  /**
   * Communicates changes to the value.
   * @param {array|number|string} value - The value resulting from a change.
   */
  handleChange(value) {
    if (this.props.value === undefined) {
      this.setState({ value });
    }

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  /**
   * Communicates the removal of a value from the selected options.
   * @param {number|string} value - The value to be removed.
   */
  handleDeselect(value) {
    this.handleChange(SelectUtil.deselect(this.props, this.state, value));

    if (this.props.onDeselect) {
      this.props.onDeselect(value);
    }
  }

  /**
   * Communicates the selection of a value.
   * @param {number|string} value - The value of the selected option.
   * @param {ReactNode} option - The selected option.
   */
  handleSelect(value, option) {
    const newValue = [...SelectUtil.value(this.props, this.state), value];
    this.handleChange(newValue);

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  render() {
    const { intl } = this.context;
    const {
      allowClear, children, defaultValue, onChange, placeholder, required, value, ...otherProps
    } = this.props;

    const defaultPlaceholder = intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });
    const selectPlaceholder = placeholder === undefined ? defaultPlaceholder : placeholder;
    let clearOptionDisplay;

    if (allowClear) {
      if (selectPlaceholder.length === 0) {
        clearOptionDisplay = defaultPlaceholder;
      } else {
        clearOptionDisplay = selectPlaceholder;
      }
    }

    return (
      <Frame
        {...otherProps}
        variant="multiple" // TODO: remove me
        data-terra-select
        value={SelectUtil.value(this.props, this.state)}
        display={this.display()}
        onDeselect={this.handleDeselect}
        onSelect={this.handleSelect}
        placeholder={selectPlaceholder}
        required={required}
        totalOptions={SelectUtil.getTotalNumberOfOptions(children)}
        clearOptionDisplay={clearOptionDisplay}
      >
        {children}
      </Frame>
    );
  }
}

Multiple.Option = Option;
Multiple.OptGroup = OptGroup;
Multiple.propTypes = propTypes;
Multiple.defaultProps = defaultProps;
Multiple.contextTypes = contextTypes;
Multiple.isSelect = true;

export default Multiple;
