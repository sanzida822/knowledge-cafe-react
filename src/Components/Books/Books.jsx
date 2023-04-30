import React, { useEffect, useState } from "react";
import Book from "../Book/book";
import "./Books.css";
import SideRight from "../SideRight/SideRight";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  //load data
  useEffect(() => {
    fetch("cafe.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  let bookmarked = [];
  let time=0;
  const CountBookMark = (book) => {
   // console.log(book.time)
    time+=book.time;
   bookmarked=[...bookMark,book]
   setBookMark(bookmarked); 
   // console.log(bookMark);
  };
  
console.log(time)
  return (
    <div className="books-container">
      <div>
        {books.map((book) => (
          <Book
            bookMark={bookMark}
            CountBookMark={CountBookMark}
            book={book}
            key={book.id}
          >
            {" "}
          </Book>
        ))}
      </div>
      <div className="rightside">
      {
       bookMark.map((mark =>{
        time+=mark.time;
      }))}
          <h2>Spend time on read:{time} </h2>
          <h2>BookMarked Blogs:           
            <div>
              
           {
           
            //  [1,2,3,4].map(el => <p key={el} > {el} </p>)
         bookMark.map((mark =><p key={mark.id}>{mark.category}</p>))
        // console.log(bookMark.length)
      }
            </div>           
          </h2>
        </div>
      
    </div>
  );
};

export default Books;
