import React, { Component } from 'react';

import Landing from './Landing';
import Map from './Map';

export default class App extends Component {
  state = {
    api_key: null
  }

  componentDidMount() {
    this.getKey()
  }

  getKey = () => {
    const api_key = localStorage.getItem('api_key')

    if(api_key) {
      this.setState({ api_key })
    }
  }

  render() {
    const { api_key } = this.state

    return (
      api_key ? 
        <Map 
          api_key = { api_key }
        />
      :
        <Landing 
          getKey = { this.getKey }
        />
    )
  }
}