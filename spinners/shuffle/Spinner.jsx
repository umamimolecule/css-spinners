import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = (props) => {
  const { size, theme } = props;

  return (
    <div className={`spinner__shuffle spinner__shuffle--${size} spinner__shuffle--${theme}`}>
      <div className="spinner__shuffle__el spinner__shuffle__el--1"></div>
      <div className="spinner__shuffle__el spinner__shuffle__el--2"></div>
      <div className="spinner__shuffle__el spinner__shuffle__el--3"></div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  theme: PropTypes.oneOf(['dark', 'light']),
};

Spinner.defaultProps = {
  size: 'md',
  theme: 'light',
};

export default Spinner;
