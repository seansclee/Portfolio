import React, { Component, Fragment } from 'react'
import Splash from './logo1.png'
import './App.css'
import { Dropdown, Menu, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

class App extends Component {
  state = { splash: true, visible: false, activeItem: 'account' }

  componentDidMount() {
    this.setState({ splash: true, visible: true, activeItem: 'account' })
    setTimeout(() => this.setState({ splash: true, visible: false, activeItem: 'account' }), 3000)
    setTimeout(() => this.setState({ splash: false, visible: true, activeItem: 'account' }), 3500)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { splash, visible, activeItem } = this.state

    return (
      splash
        ?
        <div className='login-form'>
          <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column>
              <Transition visible={visible} animation='scale' duration={500}>
                <Image src={Splash} size='medium' centered />
              </Transition>
            </Grid.Column>
          </Grid>
        </div>
        :
        <Transition visible={visible} animation='scale' duration={500}>
          <Fragment>
            <Menu secondary vertical fixed='right'>
              <Menu.Item
                name='account'
                active={activeItem === 'account'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='settings'
                active={activeItem === 'settings'}
                onClick={this.handleItemClick}
              />
              <Dropdown item text='Display Options'>
                <Dropdown.Menu>
                  <Dropdown.Header>Text Size</Dropdown.Header>
                  <Dropdown.Item>Small</Dropdown.Item>
                  <Dropdown.Item>Medium</Dropdown.Item>
                  <Dropdown.Item>Large</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Fragment>
        </Transition>
    );
  }
}

export default App;
