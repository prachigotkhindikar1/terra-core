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

function Multiple({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Multiple.propTypes = propTypes;
Multiple.defaultProps = defaultProps;

export default Multiple;
