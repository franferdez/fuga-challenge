/* @flow */
import React from 'react'

type Props = {
  results: Array.isRequired
};
export class ResultList extends React.Component {
  props: Props;

  render () {
    const results = this.props.results;
    return (
      <div className="ResultList">
        <ul>
          {results.map(result => {
            const newChildren = React.Children.map(this.props.children, function(child) {
              return React.cloneElement(child, { result: result })
            });
            return <li>{newChildren}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default ResultList

