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
         <div className="container">
            <h1 className="header">Kitaplar</h1>
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
                     <h2 className="book">{book.book}</h2>
                     <p className="author">{book.author} tarafından yazıldı</p>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default List;
