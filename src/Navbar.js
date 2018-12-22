import React, { Component } from 'react'
import logo from './logo1.png'
import { Dropdown, Menu, Container, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const Navbar = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
        Hi
        </Menu.Item>
      <Menu.Item as='a'>Home</Menu.Item>
    </Container>
  </Menu>
)

export default Navbar;