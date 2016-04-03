/* @flow */
import React from 'react';

type Props = {
  doSearch: Function.isRequired
}
export class SearchInput extends React.Component {
  props: Props;

  constructor(props){
    super(props);
    this.state = {searchField: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange(){
    this.setState({searchField: this.refs.searchInput.value})
  }

  handleSearch(){
    const query = this.refs.searchInput.value;
    this.props.doSearch(query)
  }

  render() {
    return (
      <div className="SearchInput">
        <input value={this.state.searchField} onChange={this.handleChange} ref="searchInput" placeholder="Search phrases, shows, topics, networks, or people" />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
}

export default SearchInput
