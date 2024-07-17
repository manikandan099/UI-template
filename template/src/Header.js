import React from "react";
import logo from "./img/logo.png";

function Header() {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <a hrex="#">Home</a>
          <a hrex="#">About</a>
          <a hrex="#">Programs</a>
          <a hrex="#">Blog</a>
          <a hrex="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
