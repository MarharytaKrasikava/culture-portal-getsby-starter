import _ from 'lodash';
import React, { Component } from 'react';
import {
  Search, Grid, Header, Segment,
} from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' };

const source = [
  {
    title: ' Egorov Egor',
    description: 'akaol',
  },
  {
    title: ' Egorov Andrei',
    description: 'akaol',
  },
];

const useStyles = () => {
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
  document.head.appendChild(styleLink);
};

export default class SearchExampleStandard extends Component {
  state = initialState

  componentDidMount() {
    useStyles();
  }


  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
              {console.log('elem', this.state)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
