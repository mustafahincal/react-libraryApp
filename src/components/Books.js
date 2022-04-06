import List from "./List";
import Form from "./Form";
import { useState } from "react";
import "./style.css";

function Books() {
   const [books, setBooks] = useState([]);

   return (
      <div>
         <div className="container">
            <div className="inner-container">
               <div className="title">Books</div>
               <Form books={books} setBooks={setBooks} />
               <List books={books} />
            </div>
         </div>
      </div>
   );
}

export default Books;
