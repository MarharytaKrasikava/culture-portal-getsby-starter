import React, { Component } from 'react';
import AuthorListItem from '../AuthorListItem/authorListItem';

class Search extends Component {
  state = {
    search: '',
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }

  render() {
    const filteredContacts = this.props.authors.filter(
      author => author.name.toLowerCase().indexOf(this.state.search) !== -1,
    );
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <ul>
          { filteredContacts.map(author => <AuthorListItem author={author} key={author.id} />) }
        </ul>
      </div>
    );
  }
}

export default Search;
