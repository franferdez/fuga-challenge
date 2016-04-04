/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { doSearch } from '../../redux/modules/Search'
import { addPodcastToPlayList } from '../../redux/modules/PLayLists'
import Styles from './SearchView.scss'
import SearchInput from 'components/SearchInput/SearchInput'
import ResultList from 'components/ResultList/ResultList'
import PodcastResult from 'components/PodcastResult/PodcastResult'
import SavePodcast from 'components/SavePodcast/SavePodcast'

type Props = {
  results: Array.isRequired,
  playLists: Array.isRequired
};

export class Search extends React.Component {
  props: Props;

  render () {
    const {results, page, doSearch,playLists,addPodcastToPlayList} = this.props;

    return (
      <div className='SearchView'>
          <h1>Audio Search</h1>
          <SearchInput doSearch={doSearch} />
          <ResultList results={results}>
              <PodcastResult />
              <SavePodcast playLists={playLists} addPodcastToPlayList={addPodcastToPlayList} />
          </ResultList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    ...state.Search,
    playLists: state.PlayLists.playLists
})
export default connect((mapStateToProps), {
  doSearch: doSearch,
  addPodcastToPlayList: addPodcastToPlayList
})(Search)