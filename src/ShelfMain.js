import PropTypes from "prop-types";
import EachBook from "./EachBook";
const ShelfMain = ({ shelf, listBook, handleupdate }) => {
  //shelf page each shelf will be display with the map method using it in ListOfBook file
  //filtering the book to replace each one in his shelf
  //select option onchange will call the func handleupdate to update the shelf
  return (
    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {listBook
              .filter(
                (b) =>
                  b.shelf.replace(/ +/g, "").toLowerCase() ===
                  shelf.name.replace(/ +/g, "").toLowerCase()
              )
              .map((book) => (
                <EachBook  book={book} handleupdate={handleupdate} key={book.idustryIdentifiers}/>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
ShelfMain.protoTypes = {
  handleupdate: PropTypes.func.isRequired,
};
export default ShelfMain;
