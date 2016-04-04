import React from 'react'
import BasicList from 'components/BasicList/BasicList'
import PodcastResult from 'components/PodcastResult/PodcastResult'

type Props = {
  data: Object.isRequired,
  podcasts: Array.isRequired,
  deletePlayList: Function.isRequired
};
export class ItemPlayList extends React.Component {
  props:Props;

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    const {id,title} = this.props.data;
    if (window.confirm('Are you sure you want to delete ' + title + ' playlist?')) {
      this.props.deletePlayList(id);
    }
  }

  render() {
    const {title, podcasts} = this.props.data;
    const podcastList = _.filter(this.props.podcasts,(elem)=>{
      return (_.indexOf(podcasts, elem.id) >= 0);
    });

    return (
      <div>
        <h2>{title}</h2>
        <button onClick={this.handleDelete}>Remove</button>
        <BasicList list={podcastList}>
          <PodcastResult />
        </BasicList>
      </div>
    )
  }
}

export default ItemPlayList

