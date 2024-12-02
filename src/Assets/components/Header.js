import React from "react";
import logo from "../images/file.png";
const Header = () => {
  // const openNav = () => {
  //   document.getElementById("mySidenav").style.width = "100%";
  // };

  // const closeNav = () => {
  //   document.getElementById("mySidenav").style.width = "0";
  // };

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav class="navbar">
          {" "}
          <a href="/" className="navbar-brand">
            <img src={logo} class="navbar-logo" alt=""></img>
          </a>
          {/* Sidebar */}
          <div id="mySidenav" className="sidenav banner_text">
            <a href="/" className="sidenav-link">
              Mahmoud & Nour's Engagement Memories
            </a>
          </div>
          {/* Navbar Items */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
