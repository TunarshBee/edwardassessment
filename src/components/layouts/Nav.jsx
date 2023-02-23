import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { filmAction } from './../actions/filmAction';
import Search from './Search';

const Nav = () => {
  const { searchTerm, setSearchTerm } = useState("");
  const dispatch = useDispatch();
  const {loading, films, error} = useSelector(state => state.films)
  useEffect(()=>{
    
      dispatch(filmAction(searchTerm))
  },[searchTerm])

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(filmAction(searchTerm));
  };
  return (
    <div className="bg-primary rounded d-flex justify-content-around align-items-center">
      <h3 className="text-center pt-2 pb-2 text-light d-inline ">
        {" "}
        Get movie details from OMDB website{" "}
      </h3>
      <Search handleChange={handleChange} handleClick={handleClick} />
    </div>
  );
}

export default Nav
