import React, { Component } from 'react';

import Grid from './Grid';

class Map extends Component {
  render() {
    const page = {
      height: '100vh',
      width: '100vw',
      display: 'flex'
    }

    const side_panel = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }

    return (
      <div
        style = { page }
      >
        <Grid />
        <div style = { side_panel }>
          <Notifications />
          <Chat />
        </div>
      </div>
    )
  }
}

const Notifications = props => {
  const container = {
    border: '2px solid red',
    width: '100%',
    height: '50%'
  }

  return (
    <div
      style = { container }
    >
      Notifications
    </div>
  )
}

const Chat = props => {
  const container = {
    border: '2px solid green',
    width: '100%',
    height: '50%'
  }

  return (
    <div
      style = { container }
    >
      Chat
    </div>
  )
}

export default Map