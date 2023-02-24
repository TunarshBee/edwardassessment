import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { filmDetailsAction } from "../../actions/filmAction";

const FilmDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error, film } = useSelector((state) => state.filmDetails);
  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (film) {
      dispatch(filmDetailsAction(params.id));
    }
  }, [dispatch, params.id, error, alert]);
  return <>
    <span>Film Details</span>
  </>;
};

export default FilmDetails;
