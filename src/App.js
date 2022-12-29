import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListOfBook from "./ListOfBook";
import AddAndSearch from "./AddAndSearch";
import * as BooksAPI from "./BooksAPI";

function App() {
  let navigate = useNavigate();


  const bookShelfs = [
    { name: "Currently Reading", id: 1, shelfname: "currentlyReading" },
    { name: "Want to Read", id: 2, shelfname: "wantToRead" },
    { name: "Read", id: 3, shelfname: "read" },
  ];

  //updating the shelf of the book when selected another one
  const handleupdate = (b, event) => {
    b.shelf = event;
    updateShelf(b, event);
  };
  const updateShelf = (b, s) => {
    const newshelf = async () => {
      await BooksAPI.update(b, s);
    };
    newshelf();
    navigate("/");
  };

 
  //initilaize list of books to empty arry
  const [listBook, setListBook] = useState([]);
  //get all books and set the list of book with results
  useEffect(() => {
    const book = async () => {
      const result = await BooksAPI.getAll();
     
      setListBook(result);
    };
    book();
    return()=>{
    setListBook([])}
  },[]);

  return (
    //using routes to navigate between pages and updating the url
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListOfBook
            bookShelfs={bookShelfs}
            listBook={listBook}
            handleupdate={handleupdate}
          />
        }
      />
      <Route
        path="/search"
        element={
          <AddAndSearch   listBook={listBook} handleupdate={handleupdate} 
          />
        }
      />
    </Routes>
  );
}

export default App;
