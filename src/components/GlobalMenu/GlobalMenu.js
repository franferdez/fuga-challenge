import React from 'react'
import {Link} from 'react-router'

type Props = {

};
export class GlobalMenu extends React.Component {
  props: Props;

  render () {
    return (
        <nav className="global-menu">
          <Link to="/">Search</Link>
          <Link to="/playlist">Playlist</Link>
        </nav>
    )
  }
}

export default GlobalMenu

