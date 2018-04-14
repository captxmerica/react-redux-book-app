import React from "react";
import PropTypes from "prop-types";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth";
import { allBooksSelector } from "../../reducers/books";
import './Footer.css'

const TopNavigation = ({ user, logout, hasBooks, isAuthenticated, fixed }) => (
  <Menu
    inverted
    size='large'

  >
    <Container fluid>
    <Menu.Item style={{fontFamily: "'Lobster', cursive", fontSize: '1.5em', width: '7.12em'}} header> Passager </Menu.Item>
      <Menu.Item ><Link to="/">Home</Link></Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>

      {isAuthenticated ? (
        <Menu.Item position='right'>
        <Menu.Item className='dashbutton' as={Link} to="/dashboard" style={{padding: '0px 2.5em 5px ', fontSize:"1.25em", alignSelf: 'center'}}>
          <Icon style={{marginBottom: '.25em'}} name='dashboard'/>Dashboard
          </Menu.Item>

        <Button inverted={!fixed} onClick={() => logout()}>Logout</Button></Menu.Item> )
      : (
        <Menu.Item position='right'>
        <Button ><Link to="/login">Login</Link></Button>
        <Button  style={{ marginLeft: '0.5em' }}><Link to='/signup'>Sign Up</Link></Button>
        </Menu.Item>
      )}

    </Container>
  </Menu>

);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string
  }),
  hasBooks: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0,
    isAuthenticated: !!state.user.token,
    fixed: state.fixed
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
