/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createPlayList, deletePlayList } from '../../redux/modules/PlayLists'
import BasicList from 'components/BasicList/BasicList'
import FormPlaylist from 'components/FormPlaylist/FormPlaylist'
import ItemPlaylist from 'components/ItemPlaylist/ItemPlaylist'

type Props = {
  playlists: Array.isRequired,
  podcasts: Array.isRequired
};

export class PlayLists extends React.Component {
  props:Props;

  render() {
    const {playlists, podcasts, createPlayList, deletePlayList} = this.props;

    return (
      <div className='SearchView'>
        <h1>Playlists</h1>
        <FormPlaylist createPlayList={createPlayList}/>
        <BasicList list={playlists}>
          <ItemPlaylist podcasts={podcasts} deletePlayList={deletePlayList}/>
        </BasicList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  playlists: state.PlayLists.playLists,
  // For this demo i'm passing the search as podcast list. In a real app it would be a different entity
  podcasts: state.Search.results
})
export default connect((mapStateToProps), {
  createPlayList: createPlayList,
  deletePlayList: deletePlayList
})(PlayLists)