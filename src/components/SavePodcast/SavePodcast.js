import React from 'react'

type Props = {
  playLists: Array.isRequired,
  data: Object.isRequired,  // Podacast Object
  addPodcastToPlayList: Function.isRequired
};

export class SavePodcast extends React.Component {
  props: Props;

  constructor(props){
    super(props);
    this.state = {selectValue: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e){
    this.setState({selectValue: e.target.value})
  }

  handleAdd(){
    const podcast = this.props.data;
    const playlistId = parseInt(this.state.selectValue, 10);
    if(playlistId!==0){
      if (window.confirm('Are you sure you want to add this podcast to the playlist?')) {
        this.props.addPodcastToPlayList(playlistId,podcast.id);
      }
    }
  }

  render () {
    const {playLists, data} = this.props;
    let i = 0;

    return (
      <div className="SavePodcast" ref="SavePodcast">
        <select onChange={this.handleChange} value={this.state.selectValue}>
          <option value="0">Select...</option>
          {playLists.map(playlist => {
            i++;
            return <option key={data.id +'-option-' + i } value={playlist.id}>{playlist.title}</option>
          })}
        </select>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}

export default SavePodcast

