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

function Search({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
