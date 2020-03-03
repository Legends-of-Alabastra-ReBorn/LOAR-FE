import React, { Component } from 'react';

export default class Landing extends Component {
  state = {
    api_key: null
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    localStorage.setItem('api_key', this.state.api_key)
    this.props.getKey()
  }

  render() {
    const flex = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    const page = {
      ...flex,
      height: '100vh',
      width: '100vw'
    }

    const form = {
      ...flex,
      flexDirection: 'column',
      border: '1px solid black',
      padding: '20px'
    }

    const { api_key } = this.state

    return (
      <div style = { page }>
        <form 
          style = { form }
          onSubmit = { this.handleSubmit }
        >
          <input 
            placeholder="Enter API Key"
            name="api_key"
            value = { api_key }
            style = {{ marginBottom: '10px' }}
            onChange = { this.handleChange }
          />
          <input 
            type="submit"
            style = {{ width: '100%' }}
          />
        </form>
      </div>
    )
  }
}