import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddBookCtA = () => (
  <Card centered raised color='violet'>
    <Card.Content textAlign="center" style={{marginTop: '15%'}} fluid='true' >
      <Card.Header style={{marginBottom: '10%'}}>Add New Book</Card.Header>
      <Link to="/books/new">
        <Icon color='violet' name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddBookCtA;
