import React, { Component } from 'react';

class AuthorListItem extends Component {
  x = [];

  render() {
    return (
      <li>
        {this.props.author.name}
      </li>
    );
  }
}
export default AuthorListItem;
