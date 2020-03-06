import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Grid from './Grid';
import PanelItem from './PanelItem';

export default class extends Component {
  state = {
    players: {
      doug: null,
      mike: null,
      miguel: null,
      dustin: null
    },
    init: false,
    notifications: []
  }

  componentDidMount() {
    const pusher = new Pusher('486260c7fadf87293227', {
      cluster: 'us2',
      forceTLS: true
    });

    const channel = pusher.subscribe("my-channel");

    if(!this.state.init) {
      axios
        .get('https://alabastra-reborn.herokuapp.com/start/')
        .then(res => console.log(res))
        .catch(err => console.log(err))

      channel.bind('init', data => {
        console.log("In Init: ", data)
        this.setState({
          players: {
            doug: data.doug_room,
            mike: data.mike_room,
            miguel: data.miguel_room
          }
        })
      })

      this.setState({ init: true })
    }

    channel.bind("my-event", data => {
      console.log("Data:", data)
      this.setState({ 
        players: {
          ...this.state.players,
          [data.player]: data.room
        },
        notifications: [...this.state.notifications, data.message],
        init: true
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
          <PanelItem
            panel_type="notifications"
            notifications = { this.state.notifications }
          />
          <PanelItem 
            panel_type="chat"
          />
        </div>
      </div>
    )
  }
}