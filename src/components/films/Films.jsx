import { Link } from "react-router-dom";

const Films = ({ film }) => {
  return (
    <Link to={`/film/details/${film.imdbID}`} className="w-75 text-decoration-none">
      <li className="d-flex flex-row justify-content-start my-1 p-3 rounded bg-dark text-light align-items-center w-100">
        <img
          src={film.Poster}
          alt={film.Title}
          className=" rounded"
          style={{ width: "10%", height: "100px", marginRight: "2%" }}
          data-testid='film-poster'
        />
        <h3>
          {film.Title} ({film.Year})
        </h3>
      </li>
    </Link>
  );
};

export default Films;
