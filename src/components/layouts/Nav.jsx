import React from 'react'
import Search from './Search';

const Nav = () => {
  return (
    <div className="bg-primary rounded d-flex justify-content-around align-items-center">
      <h3 className="text-center pt-2 pb-2 text-light d-inline ">
        {" "}
        Get movie details from OMDB website{" "}
      </h3>
      <Search />
    </div>
  );
}

export default Nav
