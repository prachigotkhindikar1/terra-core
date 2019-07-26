import React from 'react';
import PropTypes from 'prop-types';
import Option from './_Option';

const propTypes = {
  /**
   * The value of the option.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const contextTypes = {
  intl: context => (context.intl === undefined
    ? new Error('Component is internationalized, and must be wrapped in terra-base')
    : undefined
  ),
};

const AddOption = ({ value, ...customProps }, context) => (
  <Option
    {...customProps}
    isAddOption
    value={value}
    display={context.intl.formatMessage({ id: 'Terra.form.select.add' }, { text: value })}
    data-terra-select-add-option
  />
);

AddOption.propTypes = propTypes;
AddOption.contextTypes = contextTypes;
AddOption.isOption = true;

export default AddOption;
