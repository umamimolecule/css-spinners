import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const BandSpinner = (props) => {
  const { size, theme } = props;

  return (
    <div className={`spinner__band spinner__band--${size} spinner__band--${theme}`}>
      <div className="spinner__band__inner spinner__band__inner--1"></div>
      <div className="spinner__band__inner spinner__band__inner--2"></div>
      <div className="spinner__band__inner spinner__band__inner--3"></div>
      <div className="spinner__band__inner spinner__band__inner--4"></div>
    </div>
  );
}

BandSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  theme: PropTypes.oneOf(['dark', 'light']),
}

BandSpinner.defaultProps = {
  size: 'md',
  theme: 'light',
};

export default BandSpinner;