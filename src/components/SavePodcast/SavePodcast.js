import React from 'react'

type Props = {
  playLists: Array.isRequired,
  addPodcastToPlayList: Function.isRequired
};

export class SavePodcast extends React.Component {
  props: Props;

  render () {
    const {playLists} = this.props;
    console.log('playLists', playLists);
    return (
      <div className="SavePodcast">
        <select>
          <option>Select...</option>
          {playLists.map(playlist => {
            return <option>{playlist.title}</option>
          })}
        </select>
        <button>Add</button>
      </div>
    )
  }
}

export default SavePodcast

