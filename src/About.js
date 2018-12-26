import React, { Component } from 'react'
import avatar from './avatar.jpeg'
import Footer from './Footer.js'
import { Dropdown, Menu, Container, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const About = () => (
  <div className='about'>
    <Image src={avatar} size='medium' circular floated='left' />
    <Container style={{ margin: '6em 0em 6em' }}>
      Hello
    </Container>
    <Footer />
  </div>
)

export default About;