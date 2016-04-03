import React from 'react'

type Props = {

};
export class GlobalMenu extends React.Component {
  props: Props;

  render () {
    return (
        <nav className="global-menu">
          <a>Search</a>
          <a>Playlist</a>
        </nav>
    )
  }
}

export default GlobalMenu

