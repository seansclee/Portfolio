import React, { Component } from 'react'
import logo from './logo1.png'
import Footer from './Footer.js'
import { Dropdown, Menu, Embed, Modal, Icon, Container, Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react'

const Projects = () => (
  <div className='projects'>
    {/* <Container>
      <Embed id='vr8mT5GgUQM' source='youtube' />
      <Embed id='SlQjxJhYrzk' source='youtube' />
    </Container>   */}
    <Container style={{ padding: '6em 8em 6em' }}>
    <Grid relaxed columns={2}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid>
    <Modal trigger={<Button>Scrolling Content Modal</Button>}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src='/images/wireframe/image.png' wrapped />

        <Modal.Description>
          <Header>Modal Header</Header>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          <Embed id='vr8mT5GgUQM' source='youtube' />

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
    </Container>
    <Footer />
  </div>
)

export default Projects;