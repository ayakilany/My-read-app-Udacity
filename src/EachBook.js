import PropTypes from "prop-types";
const EachBook = ({ handleupdate, book }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.thumbnail})`
                : "none",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf ? book.shelf : "none"}
              onChange={(e) => handleupdate(book, e.target.value)}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors ? (
          <div className="book-authors">{book.authors ? book.authors : ""}</div>
        ) : (
          <div className="book-authors"></div>
        )}
      </div>
    </li>
  );
};
EachBook.protoTypes = {
  handleupdate: PropTypes.func.isRequired,
  book: PropTypes.array.isRequired,
};
export default EachBook;
