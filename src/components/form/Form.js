import { useState, useEffect } from "react";

function Form({ books, setBooks }) {
   const [book, setBook] = useState("");
   const [author, setAuthor] = useState("");

   const add = (e) => {
      const form = { book, author };
      setBooks([...books, form]);
      e.preventDefault();
   };

   useEffect(() => {
      setBook("");
      setAuthor("");
      console.log(books);
   }, [books]);

   return (
      <div>
         <div id="form">
            <h1 className="header">Yeni kitap ekle</h1>
            <form onSubmit={(e) => add(e)}>
               <div>
                  <input
                     required
                     name="book"
                     value={book}
                     placeholder="Kitap Adı"
                     onChange={(e) => setBook(e.target.value)}
                  ></input>
               </div>
               <div>
                  <input
                     required
                     name="author"
                     value={author}
                     placeholder="Yazar Adı"
                     onChange={(e) => setAuthor(e.target.value)}
                  ></input>
               </div>
               <div className="button">
                  <button type="submit">Ekle</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Form;
