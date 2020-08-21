import React from 'react';
import { Link } from 'react-router-dom';
import './elements.css';
const NavLink = ({ to, children }) => {
  return (
    <Link className='link' to={to}>
      {children}
    </Link>
  );
};

export default NavLink;
