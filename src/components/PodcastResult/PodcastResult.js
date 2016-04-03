import React from 'react'

type Props = {

};
export class PodcastResult extends React.Component {
  props: Props;

  render () {
    console.log('results: ',this.props.results);
    const {title} =this.props.results
    return (
      <div className="PodcastResult">
        <h3>{title}</h3>
        <p>
          category
        </p>
        <p className="PodcastResult"> "Why do cat eyes look the way they do? Can cats really see in the dark?
          And what are they trying to tell us with that purr (you know the one)? \n\n
          We've got the answers -- cat behavior expert Mikel Delgado helps us decode cat quirks
          and producer Sanden Totten teaches us what's behind cats' glowing eyes. Plus: We learn about
          other cool powers that animal eyes have, that ours don't.",
        </p>
      </div>
    )
  }
}

export default PodcastResult

