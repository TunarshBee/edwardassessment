import React, { useContext } from 'react'
import { stateContext } from "../../App";
import { Link } from 'react-router-dom';

const Button = ({ text, handleClick }) => {
  const states = useContext(stateContext);
  return (
    <Link
      to="/"
      onClick={states.handleClick}
      className="bg-dark px-3 py-2 rounded mx-2 text-light text-decoration-none"
    >
      {text}
    </Link>
  );
};

export default React.memo(Button)