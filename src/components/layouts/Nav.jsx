import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmAction } from "../../actions/filmAction";
import Search from "./Search";
import { useAlert } from "react-alert";

const Nav = () => {
  // const alert = useAlert();
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchContainer, setSearchContainer ] = useState("");
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
    console.log(searchContainer);
    dispatch(filmAction(searchContainer));
  };
  if(films.length){
    console.log(films);
  }
  return (
    <div className="bg-primary rounded d-flex justify-content-around align-items-center">
      <h3 className="text-center pt-2 pb-2 text-light d-inline ">
        {" "}
        Get movie details from OMDB website{" "}
      </h3>
      <Search
        handleChange={handleChange}
        searchTerm={searchTerm}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Nav;
