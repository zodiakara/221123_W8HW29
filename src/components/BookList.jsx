import SingleBook from "./SingleBook";

function BookList({ books }) {
  return books.map((book) => <SingleBook book={book} key={book.asin} />);
}

export default BookList;
