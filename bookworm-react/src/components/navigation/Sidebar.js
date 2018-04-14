
import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import './Footer.js'
import * as actions from "../../actions/auth";
export default class Sidebar extends Component {
  state = { activeItem: 'Overview' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu borderless stackable inverted fluid style={{background: '#300032', boxShadow: 'none', border: 'none', marginBottom: '-10px', fontSize: '1.15em', color: 'white'}} >
          <Button basic color="blue"><Menu.Item name='Dashboard' header style={{fontWeight: 'bold', fontSize: '1.25em'}}/>  </Button>
          <Button basic active={activeItem === 'Overview'} color="violet"><Menu.Item   name='Overview'  onClick={this.handleItemClick} /></Button>
          <Button basic active={activeItem === 'Progress'} color="blue"><Menu.Item name='Progress'  onClick={this.handleItemClick} /></Button>
        <Button basic active={activeItem === 'Analytics'} color="teal">  <Menu.Item name='Analytics'  onClick={this.handleItemClick} /></Button>
            <Button basic active={activeItem === 'Suggested Books'} color="yellow"><Menu.Item name='Suggested Books'  onClick={this.handleItemClick} /></Button>
              <Button basic active={activeItem === 'Trending'} color="orange"><Menu.Item name='Trending'  onClick={this.handleItemClick} /></Button>
              <Button basic  color='red'  ><Menu.Item >Home</Menu.Item></Button>
        </Menu>
      </div>
    )
  }
}
