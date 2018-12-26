import React, { Component } from 'react'
import avatar from './avatar.jpeg'
import './App.css'
import Footer from './Footer.js'
import { Dropdown, Menu, Container, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const Home = () => (
  <div className='home'>
    <Header size='huge' textAlign='center'>
      Hello World...
    </Header>
    <Header size='big' textAlign='center'>
      I'm Sean
    </Header>
    <Header size='medium' textAlign='center'>
      I'm a Full Stack developer
    </Header>
    <Footer/>
  </div>
)

export default Home;