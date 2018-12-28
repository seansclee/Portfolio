import React, { Component } from 'react'
import Graphic from './home-graphic.png'
import './App.css'
import Footer from './Footer.js'
import { Container, Grid, Header, Image } from 'semantic-ui-react'

const Home = () => (
  <div className='home'>
    <Container style={{ padding: '10em 0em 12em' }}>
      <Grid verticalAlign='middle'>
        <Grid.Row columns='equal'>
          <Grid.Column>
            <Header as='h1' style={{ marginLeft: '1em' }}>
              <Header.Content>
                Hello World, I'm Sean
                <Header.Subheader><p style={{ marginTop: '1.5em', marginBottom: '0.5em' }}>I'm a full-stack developer from New Jersey.</p></Header.Subheader>
                <Header.Subheader><p style={{ marginBottom: '0.5em' }}>I design, code, dabble, hone and iterate.</p></Header.Subheader>
                <Header.Subheader><p style={{ marginBottom: '0.5em' }}>I believe in breaking things to make them better.</p></Header.Subheader>
                <Header.Subheader><p style={{ marginBottom: '0.5em' }}>I'm inspired by work that combines minimalist and functional design.</p></Header.Subheader>
                <Header.Subheader><p style={{ marginBottom: '0.5em' }}>I'm an enthusiast of all things tech.</p></Header.Subheader>
                <Header.Subheader><p>I'm a lifelong student and learner.</p></Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column verticalAlign='center'><Image src={Graphic} size='large'/></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default Home;