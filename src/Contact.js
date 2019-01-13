import React, { Component } from 'react'
import Footer from './Footer.js'
import Graphic from './contact-graphic.png'
import { Container, Icon, Grid, Header, Image } from 'semantic-ui-react'

const Contact = () => (
  <div className='contact'>
    <Container style={{ padding: '10em 10em 10em'}}>
      <Grid verticalAlign='middle'>
        <Grid.Row columns='equal'>
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
            <Header textAlign='center' as='h1'>
              —S
          </Header>
          </Grid.Column>
          <Grid.Column>
            <Image fluid src={Graphic}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default Contact;