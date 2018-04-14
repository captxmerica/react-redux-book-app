import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allBooksSelector } from "../../reducers/books";
import { fetchBooks } from "../../actions/books";
import {Card, Image, Rating, Container, Header, Divider, Grid, Icon, Segment} from 'semantic-ui-react'
import './DashBoardPage.css';
import SuccessMessage from '../messages/SuccessMessage';
import Sidebar from '../navigation/Sidebar';
import { Link } from "react-router-dom";


class DashboardPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchBooks();

  render() {
    const { isConfirmed, books } = this.props;
    const bookArr = books.map((book, i) => (
        <Card key={i} className="flex-card" centered fluid raised color='violet'>
        <Image className="cardimg" src={book.cover} size="small" centered bordered />
        <Card.Content header={book.title}
         description={book.authors}
         meta={`Pages: ${book.pages}`}/>
           <Card.Content extra>
           Rating
           <Rating icon='star' defaultRating={0} maxRating={4} />
           </Card.Content>
        </Card>

    ))
    return (
      <div >
<div className='bodycount'></div>

      <Container style={{marginTop: "3em"}} >

       <Sidebar />
          <Divider/>
          <Grid centered>

          <Grid.Row verticalAlign='middle' centered stackable='true' >

                  {isConfirmed ? <ConfirmEmailMessage /> : <SuccessMessage /> }
                  <Card centered style={{width: '10em', textAlign: 'center', marginBottom: '1em', background: 'none', color:'white' }} >

                  <Card.Content style={{fontSize: "1.1em", fontWeight: 'bold'}}>
                  Add New Book
                  <Link to="/books/new"><Icon style={{ padding: '5px'}} color='green' inverted name="plus" size="huge"/></Link>
                      </Card.Content>
                  </Card>

      </Grid.Row>

          </Grid>
<Card.Group itemsPerRow={4} stackable doubling className="card-div">

{bookArr}
</Card.Group>
      </Container>

      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  };
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);
