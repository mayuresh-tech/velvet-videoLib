import React from "react";
import { useNavigate } from "react-router";

import "./SideContent.css";

const SideContent = () => {
  const navigate = useNavigate();
  return (
    <div className="side-content">
      <ul>
        <li>
          <div
            className="side-ways"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
        </li>
        <li>
          <div
            className="side-ways"
            onClick={() => {
              navigate("/explore");
            }}
          >
            <i className="fa-solid fa-globe"></i>
            <p>Explore</p>
          </div>
        </li>
        <li>
          <div className="side-ways"  onClick={() => {
              navigate("/liked");
            }}>
            <i className="fa-solid fa-heart"></i>
            <p>Liked</p>
          </div>
        </li>
        <li>
          <div
            className="side-ways"
            onClick={() => {
              navigate("/trending");
            }}
          >
            <i className="fa-solid fa-arrow-trend-up"></i>
            <p>Trending</p>
          </div>
        </li>
        <li>
          <div
            className="side-ways"
            onClick={() => {
              navigate("/watchlater");
            }}
          >
            <i className="fa-solid fa-clock"></i>
            <p>Watch Later</p>
          </div>
        </li>
        <li>
          <div
            className="side-ways"
            onClick={() => {
              navigate("/myplaylist");
            }}
          >
            <i className="fa-solid fa-circle-play"></i>
            <p>Playlist</p>
          </div>
        </li>
        <li>
          <div
            className="side-ways"
            onClick={() => {
              navigate("/history");
            }}
          >
            <i className="fa-solid fa-clock-rotate-left"></i>
            <p>History</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideContent;
