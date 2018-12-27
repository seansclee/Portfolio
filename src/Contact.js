import React, { Component } from 'react'
import Footer from './Footer.js'
import Graphic0 from './contact-graphic0.png'
import Graphic from './contact-graphic.png'
import { Dropdown, Menu, Container, Icon, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const Contact = () => (
  <div className='contact'>
    <Container style={{ padding: '8em 0em 8em' }}>
      <Grid verticalAlign='middle'>
        <Grid.Row columns='equal'>
          <Grid.Column>
            <Image centered size='mini' src={Graphic0}/>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'>
              <Icon name='mail' />
              <Header.Content>
                Email
            <Header.Subheader>seanslee92@gmail.com</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='linkedin' />
              <Header.Content>
                LinkedIn
            <Header.Subheader>linkedin.com/in/seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='github' />
              <Header.Content>
                Github
            <Header.Subheader>github.com/seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='medium' />
              <Header.Content>
                Medium
            <Header.Subheader>medium.com/@seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='instagram' />
              <Header.Content>
                Instagram
            <Header.Subheader>instagram.com/seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h4'>
              Thanks for checking out my website!
            </Header>
            <Header as='h4'>
              Best way to contact me is by email.
            </Header>
            <Header as='h4'>
              Feel free to reach out!
            </Header>
            <Header textAlign='center' as='h2'>
              —S
          </Header>
          </Grid.Column>
          <Grid.Column>
            <Image centered size='tiny' src={Graphic}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default Contact;