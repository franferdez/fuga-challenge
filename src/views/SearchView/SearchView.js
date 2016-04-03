/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { doSearch } from '../../redux/modules/Search'
import Styles from './SearchView.scss'

type Props = {
  results: Array
};

export class Search extends React.Component {
  props: Props;

  componentDidMount(){
    setTimeout(()=>{this.props.doSearch("query")},1000);
  }

  render () {
    const {results, page} = this.props;
    console.log('results', page, results);
    return (
      <div className='SearchView'>
        <div>
          <h1>Audio Search</h1>
          <div className="SearchInput">
            <input/>
          </div>
          <div className="ResultList">
            <ul>
              <li>
                <h3>Cats: Glowing eyes, puffy tails and secret purrs</h3>
                <p>
                  category
                </p>
                <p className="description"> "Why do cat eyes look the way they do? Can cats really see in the dark?
                  And what are they trying to tell us with that purr (you know the one)? \n\n
                  We've got the answers -- cat behavior expert Mikel Delgado helps us decode cat quirks
                  and producer Sanden Totten teaches us what's behind cats' glowing eyes. Plus: We learn about
                  other cool powers that animal eyes have, that ours don't.",
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    ...state.Search
})
export default connect((mapStateToProps), {
  doSearch: doSearch
})(Search)