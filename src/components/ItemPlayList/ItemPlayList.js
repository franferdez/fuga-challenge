import React from 'react'
import BasicList from 'components/BasicList/BasicList'
import PodcastResult from 'components/PodcastResult/PodcastResult'

type Props = {
  data: Object.isRequired,
  podcasts: Array.isRequired,
  deletePlayList: Function.isRequired,
  removePodcastToPlayList: Function.isRequired
};

function RemovePodcast(props) {
  return  <button onClick={props.handleRemovePodcast} data-idplaylist={props.idPlaylist} data-idpodcast={props.data.id} >Remove</button>;
}

export class ItemPlayList extends React.Component {
  props:Props;

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemovePodcast = this.handleRemovePodcast.bind(this);
  }

  handleDelete() {
    const {id,title} = this.props.data;
    if (window.confirm('Are you sure you want to delete ' + title + ' playlist?')) {
      this.props.deletePlayList(id);
    }
  }

  handleRemovePodcast(e){
    if (window.confirm('Are you sure you want to delete the podcast?')) {
      this.props.removePodcastToPlayList(parseInt(e.target.dataset.idplaylist,10), parseInt(e.target.dataset.idpodcast,10));
    }
  }

  render() {
    const {id, title, podcasts} = this.props.data;
    const podcastList = _.filter(this.props.podcasts,(elem)=>{
      return (_.indexOf(podcasts, elem.id) >= 0);
    });

    return (
      <div>
        <h2>{title}</h2>
        <button onClick={this.handleDelete}>Delete</button>
        <BasicList list={podcastList}>
          <PodcastResult />
          <RemovePodcast handleRemovePodcast={this.handleRemovePodcast} idPlaylist={id} removePodcastToPlayList={this.props.removePodcastToPlayList}/>
        </BasicList>
      </div>
    )
  }
}

export default ItemPlayList

