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
  console.log(states);
  return (
    <div className="container-fluid pt-2">
      <Nav />
      <SearchesHistory />
      {loading ? (
        <Loader />
      ) : (
        <>
          <MeteData title="Jean Edward Assessment" />
          <ul className="d-flex flex-column mt-2">
            {states.films &&
              states.films.map((film) => (
                <Films film={film} key={film.imdbID} />
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default React.memo(Home);
