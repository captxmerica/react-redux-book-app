import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import './HomePage.css';
import Footer from '../navigation/Footer';
import ResponsiveContainer from '../messages/HomepageHeading'
import TopNavigation from '../navigation/Footer.js'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

//fix logout thing

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */


const HomepageLayout = ({isAuthenticated, logout}) => (

  <ResponsiveContainer className='rc' logout={logout} isAuthenticated={isAuthenticated}>

    <Segment style={{ padding: '8em 0em 5em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row style={{marginBottom: '3em'}}>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}><Icon name='plus square'/> Quickly Add Books </Header>
            <p style={{ fontSize: '1.33em' }}>
              It is fast and easy to add new books to the robust Passager Dashboard, Just enter the book Title, Author, and date read and youre good to go!
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}><Icon name='picture'/> Book Covers</Header>
            <p style={{ fontSize: '1.33em' }}>
          Passager allows you to upload book cover art when you enter a title and author. Keep this picture or swap it out whenever you want.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='huge'
              src='https://images.unsplash.com/photo-1517329813204-32a25f5e1b50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=247642d2ffc55af7d041aa94498f90ea&auto=format&fit=crop&w=700&q=60'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign='bottom'>
          <Grid.Column textAlign='center'>
            <Button color='violet' size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>Sort Your List</Header>
            <p style={{ fontSize: '1.33em' }}>View the books youve read by Title, Author, or date completed. Now its super easy to find specific books or view your entire reading history.</p>
      <Icon name='bar chart' size='huge'/>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>Great Reference</Header>
            <p style={{ fontSize: '1.33em' }}>

              Perfect for recommending books to friends. Flip through a list of all the books youve read and find the perfect recommendation for anyone who asks.
            </p>
            <Icon name='folder open' size='huge'/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em 4em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>Lightweight and Reliable</Header>
        <p style={{ fontSize: '1.33em' }}>
    Passager makes it insanely easy to organize, sort, and view the books you read. Take control of your library.
        </p>

        <Button as='a' size='large'>Read More</Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a style={{color: '#6435c9'}} href='google.com'>Reviews</a>
        </Divider>
        <Header as='h4' style={{ fontSize: '1.5em' }}>"Great selection, all the books I've read on are on Passenger "</Header>
        <p style={{ fontSize: '1em', marginBottom: '2em' }}>
          -Floyd Mayweather
        </p>
        <Header as='h4' style={{ fontSize: '1.5em' }}>"Better than Facebook "</Header>
        <p style={{ fontSize: '1em', marginBottom: '2em' }}>
          -Mark Cuban
        </p>
        <Button as='a' size='large'>Im Still Quite Interested</Button>
      </Container>
    </Segment>
        <Footer/>
  </ResponsiveContainer>

)

HomepageLayout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {logout})(HomepageLayout)
