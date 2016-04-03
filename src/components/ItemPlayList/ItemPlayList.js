import React from 'react'

type Props = {
  result: Object.isRequired
};
export class ItemPlayList extends React.Component {
  props: Props;

  render () {
    const {title, podcasts} = this.props.result;
    return (
        <div>
          <h2>{title}</h2>
          <ul>
            <li>podcast</li>
          </ul>
        </div>
    )
  }
}

export default ItemPlayList

