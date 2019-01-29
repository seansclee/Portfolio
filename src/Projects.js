import React, { Component } from 'react'
import courtdude from './courtdude.png'
import splitsease from './splits-ease.png'
import ecommerce from './ecommerce.png'
import portfolio from './logo1.png'
import weather from './concept.png'
import Footer from './Footer.js'
import { Container, Grid, Image } from 'semantic-ui-react'

const Projects = () => (
  <div className='projects'>
    <Container style={{ padding: '3em 6em 3em' }}>
      <Grid relaxed columns={2}>
        <Grid.Column>
          <Image
            as='a'
            href='http://funweather.herokuapp.com'
            bordered
            rounded
            fluid
            label={{ as: 'a', corner: 'right', icon: 'github', href: 'https://github.com/seanslee92/funweather' }}
            src={weather}
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            as='a' 
            href='https://www.youtube.com/watch?v=vr8mT5GgUQM&t=3s'
            bordered
            rounded
            fluid
            label={{ as: 'a', corner: 'right', icon: 'github', href: 'https://github.com/FullstackBallerz/courtdude' }}
            src={courtdude}
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            as='a' 
            href='https://youtu.be/SlQjxJhYrzk'
            bordered
            rounded
            fluid
            label={{ as: 'a', corner: 'right', icon: 'github', href: 'https://github.com/the-hateful-eight/splits-ease' }}
            src={splitsease}
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            bordered
            rounded
            fluid
            label={{ as: 'a', corner: 'right', icon: 'github', href: 'https://github.com/seanslee92/FPD-Materialized' }}
            src={ecommerce}
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            as='a'
            href='http://www.sean-lee.com'
            bordered
            rounded
            fluid
            label={{ as: 'a', corner: 'right', icon: 'github', href: 'https://github.com/seanslee92/Portfolio' }}
            src={portfolio}
          />
        </Grid.Column>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default Projects;