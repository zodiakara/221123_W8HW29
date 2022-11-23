import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleOnClick() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const book = this.props.book;
    const isSelected = this.state.selected ? "lightgrey" : "";

    return (
      <Card
        onClick={this.handleOnClick}
        style={{
          width: "18rem",
          backgroundColor: isSelected,
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
