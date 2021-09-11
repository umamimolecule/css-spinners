import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Spinner = (props) => {
  const { size, theme } = props;

  return (
    <div className={`spinner__wave spinner__wave--${size} spinner__wave--${theme}`}>
      <div className="spinner__wave__el spinner__wave__el--1"></div>
      <div className="spinner__wave__el spinner__wave__el--2"></div>
      <div className="spinner__wave__el spinner__wave__el--3"></div>
      <div className="spinner__wave__el spinner__wave__el--4"></div>
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
