import React, { useContext } from 'react'
import { stateContext } from "../../App";
import { Link } from 'react-router-dom';

const Button = ({ text }) => {
  const { handleClick } = useContext(stateContext);
  return (
    <Link
      to="/"
      onClick={handleClick}
      className="bg-dark px-3 py-2 rounded mx-2 text-light text-decoration-none"
      data-testid='button'
    >
      {text}
    </Link>
  );
};

export default React.memo(Button)