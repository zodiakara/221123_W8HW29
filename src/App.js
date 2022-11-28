import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import CommentsList from "./components/CommentsList";
import books from "./assets/romance.json";
import { Col, Container } from "react-bootstrap";

import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <WarningSign text="Welcome to Strive Bookstore!" />
      <MyBadge text="badge" color="bg-success" />

      <Container className="fluid">
        <Col className="col-6">
          <BookList books={books} />
        </Col>
        <Col className="col-6"></Col>
        <CommentsList />
      </Container>
    </div>
  );
}

export default App;
