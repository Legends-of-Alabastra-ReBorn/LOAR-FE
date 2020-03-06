import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

export default class extends Component {
  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'list'
    })
  }

  render() {
    const container = {
      width: '100%',
      height: '50%',
      position: 'relative',
      border: '1px solid black'
    }

    const bg = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }

    const list = {
      zIndex: 1000,
      position: 'absolute',
      top: 60,
      left: 25,
      width: 'calc(100% - 50px)',
      height: 'calc(100% - 70px)',
      overflow: 'scroll',
      fontFamily: "'Uncial Antiqua', cursive",
      listStyle: 'circle'
    }

    const { panel_type } = this.props

    return (
      <div
        style = { container }
      >
        <img 
          src = { panel_type === 'notifications' ? require('./assets/notification-bg.jpg') : require('./assets/chat-bg.jpg') }
          style = { bg }
          alt = { panel_type === 'notifications' ? 'notification panel' : 'chat panel' }
        />
        { panel_type === 'notifications' ? 
          <ul 
            style = { list }
            id="list"
          >
            { this.props.notifications && this.props.notifications.map((notification, i) => (
              <li key = { i }>
                { notification }
              </li>
            )) }
          </ul>
        :
          null
        }
      </div>
    )
  }
}