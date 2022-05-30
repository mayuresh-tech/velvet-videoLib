import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="nav-box-bar desktop-nav">
      <div id="nav-section-bar">
        <div id="logo-bar">
          <p class="logo-text">
            <span>Velvet</span> Videos
          </p>
        </div>
      </div>

      <div class="login-nav-box">
        <div id="social-links-bar">
          <button class="no-bg hov user-icon">
            <i class="fa-solid fa-user"></i>
          </button>
          <button class="no-bg hov btn-solid-primary">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
