import SingleBook from "./SingleBook";
import { Component } from "react";
import filterBookList from "../utilities/filterBookList";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books,
  };

  handleOnChange = (e) => {
    const filteredBooks = filterBookList(e.target.value, this.props.books);
    this.setState({ filteredBooks });
  };

  render() {
    const list = this.state.filteredBooks.map((book) => (
      <SingleBook book={book} key={book.asin} />
    ));

    return (
      <>
        <input onChange={this.handleOnChange}></input>
        {list}
      </>
    );
  }
}

export default BookList;
