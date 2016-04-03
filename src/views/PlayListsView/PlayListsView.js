/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createPlayList, deletePlayList } from '../../redux/modules/PlayLists'
import ResultList from 'components/ResultList/ResultList'
import FormPlaylist from 'components/FormPlaylist/FormPlaylist'
import ItemPlaylist from 'components/ItemPlaylist/ItemPlaylist'

type Props = {
    playLists: Array
};

export class PlayLists extends React.Component {
  props: Props;

  render () {
    const {playLists,createPlayList} = this.props;

    return (
        <div className='SearchView'>
          <h1>Playlists</h1>
          <FormPlaylist createPlayList={createPlayList} />
          <ResultList results={playLists}>
            <ItemPlaylist />
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