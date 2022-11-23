export default function filterBookList(titleToSearch, books) {
  const titleSearch = titleToSearch.toLowerCase();

  return books.filter((book) => book.title.toLowerCase().includes(titleSearch));
}
