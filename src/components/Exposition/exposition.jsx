// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../variables.css';
import './exposition.css';
import OutlineButton from '../OutlinedButton/OutlineButton';

const Exposition = ({ mainTitle, buttonText }) => (
  <section className="section section--exposition">
    <div className="container exposition__container">
      <h1 className="title exposition__title">
        {mainTitle}
      </h1>
      <OutlineButton
        to="/AuthorsPage"
        css="link navigation__link"
        text={buttonText}
      />
    </div>
  </section>
);

Exposition.propTypes = {
  mainTitle: PropTypes.string,
  buttonText: PropTypes.string,
};

Exposition.defaultProps = {
  mainTitle: '',
  buttonText: '',
};

export default Exposition;
