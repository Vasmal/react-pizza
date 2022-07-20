import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Cart from "./components/Pages/Cart";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
