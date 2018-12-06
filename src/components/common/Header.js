import React from 'react';
import { NavLink } from 'react-router-dom';
//import LoadingDots from './LoadingDots';
/*{loading && <LoadingDots interval={100} dots={20}/>}*/

const Header = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/books" activeClassName="active">Books</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
};

export default Header;
