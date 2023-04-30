import React from "react";
import "./Book.css";
import img from "../../assets/OIP (1).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faBookmark} />;
const Book = (props) => {
const book=props.book;

const CountBookMark=props.CountBookMark;

  return (
    
    <div>
      <div className="book-container">     
        <img src={img} alt="" />
        <div className="bottom-element">
          <p>{book.writer}</p>
          <p>bookmark <button onClick={()=>CountBookMark(book)}>{element}</button> </p>
        </div>
        <h2>{book.category}</h2>
       <a href="">mark as read</a>
    
       
      </div>
    </div>
  );
};

export default Book;
