import Card from "react-bootstrap/Card";

function SingleBook({ book }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
