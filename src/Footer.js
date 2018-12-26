import React, { Component } from 'react'
import logo from './logo1.png'
import { Dropdown, Menu, Icon, Container, Divider, List, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const Footer = () => (
  <Segment vertical>
    <Container textAlign='center'>
      <Divider section/>
      <List horizontal link>
        <List.Item as='a' href='https://www.instagram.com/seanslee92'>
          <Icon size='big' name='instagram'/>
        </List.Item>
        <List.Item as='a' href='https://www.linkedin.com/in/seanslee92'>
          <Icon size='big' name='linkedin'/>
        </List.Item>
        <List.Item as='a' href='https://github.com/seanslee92'>
          <Icon size='big' name='github'/>
        </List.Item>
        <List.Item as='a' href='https://www.medium.com/@seanslee92'>
          <Icon size='big' name='medium'/>
        </List.Item>
      </List>
    </Container>
  </Segment>
)

export default Footer;