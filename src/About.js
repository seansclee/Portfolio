import React, { Component } from 'react'
import avatar from './avatar.jpeg'
import Footer from './Footer.js'
import { Container, List, Image } from 'semantic-ui-react'

const About = () => (
  <div className='about'>
    <Container style={{ padding: '4em 28em 2em' }}>
      <Image src={avatar} size='large' circular centered style={{ padding: '0em 0em 2em' }}/>
      <List>
        <List.Item>
          <List.Icon name='user' />
          <List.Content>Sean S. Lee</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='marker' />
          <List.Content>Greater New York City Area</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='graduation' />
          <List.Content>
            <a href='https://umich.edu/'>University of Michigan</a> & <a href='https://www.fullstackacademy.com/'>Fullstack Academy</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href='mailto:seanslee92@gmail.com'>seanslee92@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='linkify' />
          <List.Content>
            <a href='http://www.sean-lee.com/'>sean-lee.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='basketball ball' />
          <List.Content>LA Lakers</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='game' />
          <List.Content>CS:GO</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='tv' />
          <List.Content>Mr. Robot</List.Content>
        </List.Item>
      </List>
    </Container>
    <Footer />
  </div>
)

export default About;