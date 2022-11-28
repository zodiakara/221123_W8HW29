import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  // handleOnClick() {
  //   this.setState({ selected: !this.state.selected });
  // }

  render() {
    const book = this.props.book;

    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          backgroundColor: this.state.selected ? "lightgrey" : "",
        }}
        className="my-4 justify-content-center"
      >
        <Card.Img variant="top" src={book.img} className="img-fluid" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
