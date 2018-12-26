import React, { Component } from 'react'
import avatar from './avatar.jpeg'
import Footer from './Footer.js'
import { Dropdown, Menu, Container, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const About = () => (
  <div className='about'>
    <Container>
      <Grid>
        <Grid.Row columns='equal'>
          <Grid.Column>
            <Header size='huge' textAlign='center'>About</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Image src={avatar} size='small' circular />
    <Footer />
  </div>
)

export default About;