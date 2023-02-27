import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { stateContext } from "../App";
import Films from "./films/Films";
import Loader from "./layouts/Loader";
import MeteData from "./layouts/MetaData";
import Nav from "./layouts/Nav";
import SearchesHistory from "./SearchesHistory";

const Home = () => {
  const { loading } = useSelector((state) => state.films);
  const states = useContext(stateContext);
  let component = null;
  if (loading) {
    component = (
      <>
        <Nav />
        <SearchesHistory />
        <Loader />;
      </>
    );

    return component;
  } else if (!loading && states.films) {
    {
      component = (
        <>
          <Nav />
          <SearchesHistory />
          <MeteData title="Jean Edward Assessment" />
          <ul className="d-flex flex-column mt-2">
            {states.films &&
              states.films.map((film) => (
                <Films film={film} key={film.imdbID} />
              ))}
          </ul>
        </>
      );
      return component;
    }
  } 
  return (
    <div className="container-fluid pt-2">
      <Nav />
      <SearchesHistory />
      <h2 className="text-center text-danger" >Can not find the search term. Please try again later</h2>;
    </div>
  );
};

export default React.memo(Home);
