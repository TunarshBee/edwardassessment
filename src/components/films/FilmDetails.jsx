import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { filmDetailsAction } from "../../actions/filmAction";
import Loader from "../layouts/Loader";
import { useAlert } from 'react-alert';
import { Link } from "react-router-dom";
import MeteData from "../layouts/MetaData";

const FilmDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert()
  const { loading, error, film } = useSelector((state) => state.filmDetails);
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (film) {
      dispatch(filmDetailsAction(params.id));
    }
  }, [dispatch, params.id, error, alert]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <MeteData title='Film Detail' />
          {film && (
            <div className="d-flex mx-5 my-3 flex-column align-items-center">
              <Link
                to="/home"
                className="bg-dark px-3 py-2 rounded mx-2 text-light
              text-decoration-none"
              >
                Go Back
              </Link>
              <div className="row f-flex justify-content-between">
                <div className="col-12 col-lg-5 img-fluid" id="film_image">
                  <img
                    src={film.Poster}
                    className="mt-3 pt-lg-5 position-lg-fixed"
                    alt="sdf"
                    height="500"
                    width="500"
                  />
                </div>

                <div className="col-12 col-lg-5 " style={{ marginTop: "7%" }}>
                  <h3>
                    {film.Title} ({film.Year})
                  </h3>
                  <hr />
                  <h4 className="">Imdb Rating</h4>
                  <div className="rating-outer">
                    <div className="">
                      <div
                        className="rating-inner d-inline"
                        style={{ width: film.imdbRating * 10 + "%" }}
                      ></div>
                      <h5 className="d-inline text-dark">
                        ({film.imdbRating})
                      </h5>
                    </div>
                  </div>
                  <hr />
                  <div id="no_of_reviews">
                    {" "}
                    <h4>Rated </h4>
                    <p>{film.Rated}</p>
                  </div>

                  <hr />

                  <div>
                    <h4> Released: </h4>
                    <span id="stock_status">{film.Released}</span>
                  </div>

                  <hr />

                  <h4 className="mt-2">Director:</h4>
                  <p>{film.Director}</p>
                  <hr />
                  <div>
                    <h4 id="film_seller mb-3">Actors:</h4>
                    <p>{film.Actors}</p>
                  </div>
                  <hr />
                  <div>
                    <h4 id="film_seller mb-3">Runtime:</h4>
                    <p>{film.Runtime}</p>
                  </div>
                  <hr />
                  <div>
                    <h4 id="film_seller text-align-justify mb-3">Plot:</h4>
                    <p>{film.Plot}</p>
                  </div>
                  <hr />
                  <div>
                    <h4 id="film_seller mb-3">Country:</h4>
                    <p>{film.Country}</p>
                  </div>
                  <hr />
                  <div>
                    <h4 id="film_seller mb-3">Language:</h4>
                    <p>{film.Language}</p>
                  </div>
                  <hr />
                  <div>
                    <h4 id="film_seller mb-3">Awards:</h4>
                    <p>{film.Awards}</p>
                  </div>
                  <hr />
                  <div>
                    <h4 id="film_seller mb-3">Imdb Votes:</h4>
                    <p>{film.imdbVotes}</p>
                  </div>
                  <hr />
                  <div>
                    <h4 id="film_seller mb-5">Box Office:</h4>
                    <p>{film.BoxOffice}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default FilmDetails;
