/* @flow */
import React from 'react';

type Props = {
  createPlaylist: Function.isRequired
}
export class FormPlaylist extends React.Component {
  props: Props;

  constructor(props){
    super(props);
    this.state = {titleField: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleChange(){
    this.setState({titleField: this.refs.titleInput.value})
  }

  handleCreate(){
    const title = this.refs.titleInput.value;
    this.props.createPlaylist(title)
  }

  render() {
    return (
      <div className="FormPlayList">
        <input value={this.state.titleField} onChange={this.handleChange} ref="titleInput" placeholder="Create New Playlist" />
        <button onClick={this.handleCreate}>Create</button>
      </div>
    )
  }
}

export default FormPlaylist
