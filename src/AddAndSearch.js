import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchResult from "./SearchResult";
//the add button will display this page with a search bar
// when searching for a book with title or author will be shown on the page
//when select a different shelf will call the handleupdate func to update the shelf
const AddAndSearch = ({
  listBook, handleupdate

}) => {
  const [searches, setSearches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    let cleaner = true;
    const book = async () => {
      if (searchQuery !== "") {
        const result = await BooksAPI.search(searchQuery);
        if (result.error) {
          setSearches([])
        }
        else {
          if (cleaner) {
            setSearches(listBook.concat(result))
            console.log(result)
          }
        }
      }
    };
    book();
    return () => {
      cleaner = false;
      setSearches([])
    }
  }, [searchQuery]);

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, or author"
              value={searchQuery}
              onChange={(event) => {
                handleSearch(event);
              }}
            />
          </div>
        </div>
        <SearchResult searches={searches} handleupdate={handleupdate} searchQuery={searchQuery} listBook={listBook} />
      </div>
    </div>
  );
};
AddAndSearch.propTypes = {
  listBook: PropTypes.array.isRequired,
  handleupdate: PropTypes.func.isRequired,
};
export default AddAndSearch;
