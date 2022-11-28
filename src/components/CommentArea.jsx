import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class CommentArea extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.state.comments.slice(0, 12).map((comment) => (
            <Col md={6}>
              <Card key={this.props.comment.asin}>
                <Card.Body>
                  <Card.Subtitle className="text-muted">
                    Book Rating:{this.props.comment.rate}
                  </Card.Subtitle>
                  <Card.Text>
                    User Comments:{this.props.comment.author}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
