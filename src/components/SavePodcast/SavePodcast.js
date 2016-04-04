import React from 'react'

type Props = {
  playLists: Array.isRequired,
  data: Object.isRequired,
  addPodcastToPlayList: Function.isRequired
};

export class SavePodcast extends React.Component {
  props: Props;

  render () {
    const {playLists, data} = this.props;
    let i = 0;

    return (
      <div className="SavePodcast">
        <select>
          <option>Select...</option>
          {playLists.map(playlist => {
            i++;
            return <option key={data.id +'-option-' + i }>{playlist.title}</option>
          })}
        </select>
        <button>Add</button>
      </div>
    )
  }
}

export default SavePodcast

