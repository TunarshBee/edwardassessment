import { useSelector } from "react-redux";
import Films from "./films/Films";
import Loader from "./layouts/Loader";
import Nav from "./layouts/Nav";

const Home = ({ films, handleChange, searchTerm, handleClick }) => {
  const { loading, film } = useSelector((state) => state.films);
  return (
    <div className="container-fluid pt-2">
      <Nav
        handleChange={handleChange}
        searchTerm={searchTerm}
        handleClick={handleClick}
      />
      {loading ? (
        <Loader />
      ) : (
        <ul className="d-flex flex-column mt-5">
          {films &&
            films.map((film) => <Films film={film} key={film.imdbID} />)}
        </ul>
      )}
    </div>
  );
};

export default Home;
