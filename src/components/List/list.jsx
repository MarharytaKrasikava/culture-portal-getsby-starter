// import PropTypes from 'prop-types';
import React from 'react';
import './list.css';

const List = ({ value }) => (
  <select value={value} className="list__lang">
    <option value="en">EN</option>
    <option value="be">BE</option>
    <option value="ru">RU</option>
  </select>
);

export default List;
