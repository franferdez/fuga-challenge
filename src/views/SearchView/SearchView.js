/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { doSearch } from '../../redux/modules/Search'
import { addPodcastToPlayList } from '../../redux/modules/PlayLists'
import Styles from './SearchView.scss'
import SearchInput from 'components/SearchInput/SearchInput'
import BasicList from 'components/BasicList/BasicList'
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
          <BasicList list={results}>
              <PodcastResult />
              <SavePodcast playLists={playLists} addPodcastToPlayList={addPodcastToPlayList} />
          </BasicList>
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