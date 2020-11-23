import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends React.Component {
  render() {
    return (
      <Container id="commentArea">
        <Row>
          <Col xs={6} className="offset-3">
            <img src={this.props.bookImg} alt="" width="100%" />
          </Col>
        </Row>
        <Row>
          <CommentList bookId={this.props.bookId} />
          <AddComment bookId={this.props.bookId} />
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
