import React, { Component } from 'react';
import Pusher from 'pusher-js';
import Grid from './Grid';

class Map extends Component {
  constructor(props) {
    super(props);

    const pusher = new Pusher('486260c7fadf87293227', {
      cluster: 'us2',
      forceTLS: true
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      let noteMessage = document.createElement("p");
      let a = document.createTextNode(JSON.stringify(data.description));
      noteMessage.appendChild(a);
      document.querySelector("#note-feed").appendChild(noteMessage);
      document.querySelector("#note-feed").scrollTo(0, 235);
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
        <Grid />
        <div style={side_panel}>
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
      style={container}
      id="note-feed"
    >
      <h1>Notifications</h1>
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

export default Map