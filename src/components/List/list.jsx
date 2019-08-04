// import PropTypes from 'prop-types';
import React from 'react';

const listStyles = {
  position: 'absolute',
  top: '200px',
  left: '200px',
  width: '50px',
  height: ' 50px',
};

const List = ({ value }) => (
  <select style={listStyles} value={value}>
    <option value="en">EN</option>
    <option value="be">BE</option>
    <option value="ru">RU</option>
  </select>
);

export default List;
