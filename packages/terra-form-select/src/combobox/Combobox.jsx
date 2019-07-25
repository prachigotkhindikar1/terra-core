import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The dropdown menu options.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

function Combobox({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Combobox.propTypes = propTypes;
Combobox.defaultProps = defaultProps;

export default Combobox;
