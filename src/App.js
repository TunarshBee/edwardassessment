import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { filmAction } from "./actions/filmAction";
import { useAlert } from "react-alert";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Nav from "./components/layouts/Nav";
import { Route, Routes } from "react-router";
import FilmDetails from './components/films/FilmDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchContainer, setSearchContainer] = useState("");

  const alert = useAlert()
  const dispatch = useDispatch();
  const { loading, films, error } = useSelector((state) => state.films);
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (searchContainer) {
      dispatch(filmAction(searchContainer));
    }
  }, [dispatch, searchContainer, alert, error]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    setSearchContainer(searchTerm);
    dispatch(filmAction(searchContainer));
  };
  return (
    <div className="App container container-fluid">
      <Nav
        handleChange={handleChange}
        searchTerm={searchTerm}
        handleClick={handleClick}
      />
      <Routes >
        <Route path="/" element={<Home films={films} />} exact />
        <Route
          path="/film/details/:id"
          element={<FilmDetails films={films} />}
          exact
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
