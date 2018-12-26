import React, { Component } from 'react'
import Footer from './Footer.js'
import { Dropdown, Menu, Container, Icon, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const Contact = () => (
  <div className='contact'>
    <Container style={{ margin: '5em 0em 5em' }}>
      <Grid verticalAlign='middle'>
        <Grid.Row columns='equal'>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Header as='h3'>
              <Icon name='mail' />
              <Header.Content>
                Email
            <Header.Subheader>seanslee92@gmail.com</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h3'>
              <Icon name='linkedin' />
              <Header.Content>
                LinkedIn
            <Header.Subheader>linkedin.com/in/seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h3'>
              <Icon name='github' />
              <Header.Content>
                Github
            <Header.Subheader>github.com/seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h3'>
              <Icon name='medium' />
              <Header.Content>
                Medium
            <Header.Subheader>medium.com/@seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h3'>
              <Icon name='instagram' />
              <Header.Content>
                Instagram
            <Header.Subheader>instagram.com/seanslee92</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h5'>
              Thanks for checking out my website!
            </Header>
            <Header as='h5'>
              The best way to reach me is email.
            </Header>
            <Header as='h5'>
              Feel free to reach out!
            </Header>
            <Header textAlign='center' as='h2'>
              —S
          </Header>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default Contact;