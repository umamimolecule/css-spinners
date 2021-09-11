import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Spinner = (props) => {
  const { size, theme } = props;

  return (
    <div className={`spinner__chase spinner__chase--${size} spinner__chase--${theme}`}>
      <div className="spinner__chase__outer spinner__chase__outer--1">
        <div className="spinner__chase__inner spinner__chase__inner--1">
          <div className="spinner__chase__el"></div>
        </div>
      </div>
      <div className="spinner__chase__outer spinner__chase__outer--2">
        <div className="spinner__chase__inner spinner__chase__inner--2">
          <div className="spinner__chase__el"></div>
        </div>
      </div>
      <div className="spinner__chase__outer spinner__chase__outer--3">
        <div className="spinner__chase__inner spinner__chase__inner--3">
          <div className="spinner__chase__el"></div>
        </div>
      </div>
      <div className="spinner__chase__outer spinner__chase__outer--4">
        <div className="spinner__chase__inner spinner__chase__inner--4">
          <div className="spinner__chase__el"></div>
        </div>
      </div>
      <div className="spinner__chase__outer spinner__chase__outer--5">
        <div className="spinner__chase__inner spinner__chase__inner--5">
          <div className="spinner__chase__el"></div>
        </div>
      </div>
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
