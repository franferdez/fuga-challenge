/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { doSearch } from '../../redux/modules/Search'
import Styles from './SearchView.scss'
import SearchInput from 'components/SearchInput/SearchInput'
import ResultList from 'components/ResultList/ResultList'
import PodcastResult from 'components/PodcastResult/PodcastResult'

type Props = {
  results: Array
};

export class Search extends React.Component {
  props: Props;

  render () {
    const {results, page, doSearch} = this.props;
    console.log('results', page, results);
    return (
      <div className='SearchView'>
          <h1>Audio Search</h1>
          <SearchInput doSearch={doSearch} />
          <ResultList results={results}>
              <PodcastResult />
          </ResultList>
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