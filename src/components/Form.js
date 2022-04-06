import { useState, useEffect } from "react";

function Form({ books, setBooks }) {
   const initialFormValues = { bookName: "", authorName: "" };
   const [form, setForm] = useState(initialFormValues);
   const changeFormValue = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };
   const add = () => {
      if (form.bookName.trim() !== "" && form.authorName.trim() !== "") {
         setBooks([...books, form]);
      } else {
         console.log("boş bırakmayınız");
      }
   };
   const controlAdd = (e) => {
      if (e.key == "Enter") {
         add();
      }
   };

   useEffect(() => {
      setForm(initialFormValues);
      console.log(books);
   }, [books]);

   return (
      <div>
         <div className="form">
            <input
               name="bookName"
               value={form.bookName}
               placeholder="Kitap Adı"
               onChange={(e) => changeFormValue(e)}
               onKeyPress={(e) => controlAdd(e)}
            ></input>
         </div>
         <div>
            <input
               name="authorName"
               value={form.authorName}
               placeholder="Yazar Adı"
               onChange={(e) => changeFormValue(e)}
               onKeyPress={(e) => controlAdd(e)}
            ></input>
         </div>
         <div className="button">
            <button onClick={() => add()}>Ekle</button>
         </div>
      </div>
   );
}

export default Form;
