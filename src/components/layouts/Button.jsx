import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ text, handleClick }) => {
  return (
    <Link
      to="/"
      onClick={handleClick}
      className="bg-dark px-3 py-2 rounded mx-2 text-light text-decoration-none"
    >
      {text}
    </Link>
  );
};

export default Button