import React from "react";
import logo from "../asset/logo.png";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="todo Frontendgyaan logo" />
        <span>Tasktodo</span>
      </div>
      <div className="themSelector"></div>
    </header>
  );
};

export default Header;
