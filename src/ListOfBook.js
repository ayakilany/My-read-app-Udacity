import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ShelfMain from "./ShelfMain";
const ListOfBook = ({ bookShelfs, listBook, handleupdate }) => {
  //this is the main page
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {bookShelfs.map((s) => (
          <ShelfMain
            shelf={s}
            key={s.id}
            listBook={listBook}
            handleupdate={handleupdate}
          />
        ))}
        <div className="open-search">
          <Link to="/search">Add</Link>
        </div>
      </div>
    </div>
  );
};
ListOfBook.protoTypes = {
  handleupdate: PropTypes.func.isRequired,
};
export default ListOfBook;
