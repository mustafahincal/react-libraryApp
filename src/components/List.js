import { useState } from "react";

function List({ books }) {
   const [filterText, setFilterText] = useState("");
   const filtered = books.filter((book) => {
      return Object.keys(book).some((key) => {
         return book[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase());
      });
   });
   return (
      <div>
         <div>
            <input
               name="filterText"
               value={filterText}
               onChange={(e) => setFilterText(e.target.value)}
               placeholder="Kitap/Yazar Ara"
            ></input>
         </div>
         <ul className="list">
            {filtered.map((book, index) => (
               <li className="list-item" key={index}>
                  <span>{book.bookName}</span>
                  <span>{book.authorName}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default List;
