/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../redux/modules/counter'
import Styles from './SearchView.scss'

type Props = {

};

//"title": "Cats: Glowing eyes, puffy tails and secret purrs",
//    "description": "Why do cat eyes look the way they do? Can cats really see in the dark? And what are they trying to tell us with that purr (you know the one)? \n\nWe've got the answers -- cat behavior expert Mikel Delgado helps us decode cat quirks and producer Sanden Totten teaches us what's behind cats' glowing eyes. Plus: We learn about other cool powers that animal eyes have, that ours don't.",
//    "date_created": "2015-07-27",
//    "date_added": "2015-07-28T09:04:43.223Z",
//    "identifier": "https://api.soundcloud.com/tracks/216582092",
//    "show_id": 123,
//    "show_title": "Brains On!",
export class Search extends React.Component {
  props: Props;

  render () {
    return (
      <div className='SearchView'>
        <div>
          <h1>Audio Search</h1>
          <div className="SearchInput">
            <input/>
          </div>
          <div className="ResultList">
            <ul>
              <li>
                <h3>Cats: Glowing eyes, puffy tails and secret purrs</h3>
                <p>
                  category
                </p>
                <p className="description"> "Why do cat eyes look the way they do? Can cats really see in the dark?
                  And what are they trying to tell us with that purr (you know the one)? \n\n
                  We've got the answers -- cat behavior expert Mikel Delgado helps us decode cat quirks
                  and producer Sanden Totten teaches us what's behind cats' glowing eyes. Plus: We learn about
                  other cool powers that animal eyes have, that ours don't.",
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Search


//const mapStateToProps = (state) => ({
//  counter: state.counter
//})
//export default connect((mapStateToProps), {
//      increment: () => increment(1),
//    doubleAsync
//})(HomeView)