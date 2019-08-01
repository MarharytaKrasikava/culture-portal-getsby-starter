/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';
import './title.css';
import authors from '../authors';
import authorImage from '../../images/Authors/KorshSablin/KorshSablin.jpg';

export default function TitleTwoPage() {
  return (
    <React.Fragment>
      <div className="title">

        <div className="image-title"><img src={authorImage} alt="1" /></div>
        <div className="name-title">
          {authors.KorshSablin.name}
          {' '}

          {' '}
          {authors.KorshSablin.surname}
        </div>
        <div className="age-title">
(
          {authors.KorshSablin.birthDate}
          {' '}
-
          {' '}
          {authors.KorshSablin.deathDate}
)
        </div>
        <div className="information-title">{authors.KorshSablin.litleText}</div>
      </div>

    </React.Fragment>
  );
}
