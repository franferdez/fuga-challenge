import React from 'react'
import moment from 'moment'

type Props = {
  data: Object.isRequired
};
export class PodcastResult extends React.Component {
  props: Props;

  showCategories(categories){
    categories.map((category)=>{
      category.name
    })
  }

  render () {
    const {
        title,
        description,
        categories,
        show_title,
        date_created,
        date_added
        } = this.props.data

    return (
      <div className="PodcastResult">
        <h3>{title}</h3>
        <p>
          <span>{this.showCategories(categories)}</span>
          <span> {show_title}</span>
          <span> {moment(date_added).fromNow()}</span>
        </p>
        <p>
          <span>{date_created}</span>
          {description}
        </p>
      </div>
    )
  }
}

export default PodcastResult

