/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createPlayList, deletePlayList } from '../../redux/modules/PlayLists'
import ResultList from 'components/ResultList/ResultList'

type Props = {
  results: Array
};

export class PlayLists extends React.Component {
  props: Props;

  render () {
    const {playLists} = this.props;

    return (
        <div className='SearchView'>
          <h1>Playlists</h1>
          <ResultList results={playLists}>
            <h2>Playlist</h2>
          </ResultList>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  playLists: state.PlayLists.playLists
})
export default connect((mapStateToProps), {
  createPlayList: createPlayList,
  deletePlayList: deletePlayList
})(PlayLists)