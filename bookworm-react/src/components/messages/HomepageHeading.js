import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'


import '../pages/HomePage.css';


const HomepageHeading = ({ mobile }) => (
  <Container   text style={{marginTop: '-1em', height: '100vh'}} >
    <Header
      as='h1'
      inverted
      style={{
        fontSize: mobile ? '2em' : '5em',
        fontWeight: 'normal',
        marginBottom: 0,
paddingTop: '2em',
fontFamily: "'Lobster', cursive"
      }}
    > Passager
    </Header>
    <Header
      as='h2'
      inverted
      className='lefty'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
      }}
    >Discover new books, organize your library, and improve your reading over time. </Header>
    <Button     className='lefty' primary size='huge'>
      Get Started
      <Icon style={{paddingLeft: '.75em'}} name='down arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props



    return (
    <div>

        <Visibility className='hero' once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
  <div className='background-image'  style={{backgroundImage: 'url("https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aee41664ed00498d58f651ebceb860b2&auto=format&fit=crop&w=2100&q=80")'}}></div>
          <Segment className='hero-content-area' textAlign='center' style={{ minHeight: 700, padding: '0em 0em' }}  vertical>

            <HomepageHeading />

          </Segment>
        </Visibility>

        {children}
        </div>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,

}

const ResponsiveContainer = ({children}) => (

  <div >

    <DesktopContainer >{children}</DesktopContainer>

  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,

}


export default ResponsiveContainer
