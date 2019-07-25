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

function Tag({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
