import React from "react";

import "./SideContent.css";

const SideContent = () => {
  return (
    <div class="side-content">
      <ul>
        <li>
          <div class="side-ways">
            <i class="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
        </li>
        <li>
          <div class="side-ways">
            <i class="fa-solid fa-globe"></i>
            <p>Explore</p>
          </div>
        </li>
        <li>
          <div class="side-ways">
            <i class="fa-solid fa-heart"></i>
            <p>Liked</p>
          </div>
        </li>
        <li>
          <div class="side-ways">
            <i class="fa-solid fa-clock"></i>
            <p>Watch Later</p>
          </div>
        </li>
        <li>
          <div class="side-ways">
            <i class="fa-solid fa-circle-play"></i>
            <p>Playlist</p>
          </div>
        </li>
        <li>
          <div class="side-ways">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>History</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideContent;
