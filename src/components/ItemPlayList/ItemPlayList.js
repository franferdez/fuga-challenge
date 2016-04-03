import React from 'react'

type
Props = {
  result: Object.isRequired,
  deletePlayList: Function.isRequired
};
export class ItemPlayList extends React.Component {
  props:Props;

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    const {id,title} = this.props.result;
    if (window.confirm('Are you sure you want to delete ' + title + ' playlist?')) {
      this.props.deletePlayList(id);
    }
  }

  render() {
    const {title, podcasts} = this.props.result;
    return (
      <div>
        <h2>{title}</h2>
        <button onClick={this.handleDelete}>Remove</button>
        <ul>
          <li>podcast
            <button>Remove</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ItemPlayList

