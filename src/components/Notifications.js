import React, { Component } from 'react'
import styled from 'styled-components'
import ee from 'event-emitter'

const Container = styled.div`
  background-color: green;
  color: white;
  width: 250px;
  padding: 16px;
  positioned: fixed;
  top: ${(props) => props.top}px;
  right: 0px;
  z-index: 999;
  transition: top 0.5s ease;
`
const emitter = new ee()

export const notify = (msg) => {
  emitter.emit('notification', msg)
}

export default class Notifications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: -100,
      msg: '',
    }

    this.timeOut = null

    emitter.on('notification', (msg) => {
      this.onShow(msg)
    })
  }

  onShow = (msg) => {
    if (this.timeOut) {
      clearTimeout(this.timeOut)
      this.setState({ top: -100 }, () => {
        this.timeOut = setTimeout(() => {
          this.showNotification(msg)
        }, 500)
      })
    } else {
      this.showNotification(msg)
    }
  }

  showNotification = (msg) => {
    this.setState(
      {
        top: 0,
        msg,
      },
      () => {
        this.timeOut = setTimeout(() => {
          this.setState({
            top: -150,
          })
        }, 3000)
      },
    )
  }

  render() {
    return <Container top={this.state.top}>Successful</Container>
  }
}
