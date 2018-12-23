import React, { Component, Fragment } from 'react'
import Splash from './logo1.png'
import Logo from './logo.png'
import './App.css'
import Home from './Home.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import { Dropdown, Menu, Button, Form, Grid, Header, Image, Message, Segment, Transition, Input, Container } from 'semantic-ui-react'

const pages = { 'home': <Home/>, 'about me': <About/>, 'projects': <Projects/>, 'contact': <Contact/> }

class App extends Component {
  state = { splash: true, visible: false }

  componentDidMount() {
    this.setState({ splash: true, visible: true })
    setTimeout(() => this.setState({ splash: true, visible: false }), 2500)
    setTimeout(() => this.setState({ splash: false, visible: false, activeItem: 'home', currentView: <Home /> }), 3000)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name, currentView: pages[name] })

  render() {
    const { splash, visible, activeItem, currentView } = this.state
    return (
      splash
        ?
        <div className='splash'>
          <style>{`body > div, body > div > div, body > div > div > div.splash { height: 100%; }`}</style>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column>
              <Transition visible={visible} animation='scale' duration={500}>
                <Image src={Splash} size='large' centered />
              </Transition>
            </Grid.Column>
          </Grid>
        </div>
        :
        <div className='main'>
          <style>{`body > div, body > div > div, body > div > div > div.main { height: 100%; }`}</style>
          <Container>
            <Menu size='huge' secondary style={{ paddingTop: '1em' }}>
              <Menu.Item>
                <Image width='80em' height='80em' src={Logo} href='/' />
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='projects'
                  active={activeItem === 'projects'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='about me'
                  active={activeItem === 'about me'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='contact'
                  active={activeItem === 'contact'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
            {currentView}
          </Container>
        </div>
    );
  }
}

export default App;
