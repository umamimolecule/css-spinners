import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = (props) => {
  const { size, theme } = props;

  return (
    <div className={`spinner__caterpillar spinner__caterpillar--${size} spinner__caterpillar--${theme}`}>
      <div className="spinner__caterpillar__el spinner__caterpillar__el--1"></div>
      <div className="spinner__caterpillar__el spinner__caterpillar__el--2"></div>
      <div className="spinner__caterpillar__el spinner__caterpillar__el--3"></div>
      <div className="spinner__caterpillar__el spinner__caterpillar__el--4"></div>
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
