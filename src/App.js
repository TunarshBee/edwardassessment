import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { filmAction } from "./actions/filmAction";
import { useAlert } from "react-alert";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import { Navigate, Route, Routes } from "react-router";
import FilmDetails from "./components/films/FilmDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchContainer, setSearchContainer] = useState("");
  const [containers, setcontainers] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });
  // const [Searches, setSearches] = useState([...containers]);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(containers));
  }, [containers]);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { films, error } = useSelector((state) => state.films);
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
    if (searchTerm) {
      if (containers.length > 4) {
        containers.splice(0, 1)
        setcontainers([...containers, searchTerm]);
      }
      setcontainers([...containers, searchTerm]);
    }
    
    dispatch(filmAction(searchContainer));
  };
  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              films={films}
              handleChange={handleChange}
              searchTerm={searchTerm}
              handleClick={handleClick}
            />
          }
          exact
        />
        <Route
          path="/film/details/:id"
          element={<FilmDetails films={films} />}
          exact
        />
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
