/* @flow */
import React from 'react'

type Props = {
  list: Array.isRequired
};
export class BasicList extends React.Component {
  props: Props;

  render () {
    const list = this.props.list;
    let i = 0;
    return (
      <div className="ResultList">
        <ul>
          {list.map(item => {
            i++;
            const newChildren = React.Children.map(this.props.children, function(child) {
              return React.cloneElement(child, { data: item })
            });
            return <li key={'list-item-'+ i}>{newChildren}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default BasicList

