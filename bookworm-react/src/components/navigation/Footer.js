import React from 'react'
import { Container,  Grid, Header, List,  Segment, Icon } from 'semantic-ui-react'
import './Footer.css'

const Footer = () => (
  <Segment className='footer' inverted vertical style={{ padding: '1.5em 0em' }}>
    <Container>
      <Grid divided centered inverted stackable>
        <Grid.Row>
          <Grid.Column floated="left" textAlign='left' width={4}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a'>Sitemap</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>Religious Ceremonies</List.Item>
              <List.Item as='a'>Gazebo Plans</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column textAlign='center' verticalAlign='top' width={8}>
            <Header as='h2' style={{fontFamily:"'Lobster', cursive"}} inverted>Passage</Header>
            <Header as='h5' inverted>Follow Us</Header>

            <Icon size='large' name='facebook'/>
                <Icon size='large'  name='instagram'/>
                    <Icon  size='large'  name='twitter'/>
                      <Icon  size='large'  name='github'/>



          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Services' />
            <List link inverted>
              <List.Item as='a'>Banana Pre-Order</List.Item>
              <List.Item as='a'>DNA FAQ</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
