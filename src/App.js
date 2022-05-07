import List from "./components/list/List";
import Form from "./components/form/Form";
import Error404 from "./components/Error404";
import "./style-app.css";
import "./components/form/style-form.css";
import "./components/list/style-list.css";

import { useState, useEffect } from "react";
import {
   NavLink,
   BrowserRouter as Router,
   Routes,
   Route,
} from "react-router-dom";

function App() {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3000/books")
         .then((res) => res.json())
         .then((data) => setBooks(data))
         .catch((err) => console.log(err.message));
   }, []);

   return (
      <Router>
         <div>
            <nav className="navbar">
               <div className="nav-item">
                  <NavLink className="navlink" to="/">
                     Kütüphanem
                  </NavLink>
               </div>
               <div className="nav-item">
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? "navlink active" : "navlink"
                     }
                     to="/addBook"
                  >
                     Kitap Ekle
                  </NavLink>
               </div>
            </nav>

            <Routes>
               <Route path="/" element={<List books={books} />} />
               <Route
                  path="/addBook"
                  element={<Form books={books} setBooks={setBooks} />}
               />
               <Route path="*" element={<Error404 />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
