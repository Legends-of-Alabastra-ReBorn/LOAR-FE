import React, { Component } from 'react';
import Pusher from 'pusher-js';
import Grid from './Grid';

class Map extends Component {
  state = {
    players: {
      doug: null,
      mike: null,
      miguel: null,
      dustin: null
    },
    notifications: []
  }

  componentDidMount() {
    const pusher = new Pusher('486260c7fadf87293227', {
      cluster: 'us2',
      forceTLS: true
    });

    const channel = pusher.subscribe("my-channel");

    channel.bind("my-event", data => {
      this.setState({ 
        players: {
          ...this.state.players,
          [data.player]: data.room,
          notifications: [...this.state.notifications, data]
        }
      })
    });
  }

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
        style={page}
      >
        <Grid 
          players = { this.state.players }
        />
        <div style={side_panel}>
          <Notifications 
            notifications = { this.state.notifications }
          />
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
    height: '50%',
    overflow: 'scroll'
  }

  return (
    <div
      style = { container }
    >
      <h1>Notifications</h1>
      <ul>
        { props.notifications && props.notifications.map(notification => (
          <li>
            { notification }
          </li>
        )) }
      </ul>
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
      style={container}
    >
      Chat
    </div>
  )
}

// let noteMessage = document.createElement("p");
      // let a = document.createTextNode(JSON.stringify(data.description));
      // noteMessage.appendChild(a);
      // document.querySelector("#note-feed").appendChild(noteMessage);
      // document.querySelector("#note-feed").scrollTo(0, 235);


export default Map