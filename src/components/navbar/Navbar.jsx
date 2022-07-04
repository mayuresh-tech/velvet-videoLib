import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useData } from "../../context/DataContext/DataContext";
import PrimaryButton from "../primary-button/PrimaryButton";

import "./Navbar.css";

const Navbar = () => {
  const { token, setToken } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();

  const doLogout = async () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("liked");
    localStorage.removeItem("watchlater");
    localStorage.removeItem("history");
    localStorage.removeItem("playlist");
    dispatch({
      type: "LOGOUT",
    });
    setToken(false);
    navigate("/");
  };

  return (
    <nav className="nav-box-bar desktop-nav">
      <div id="nav-section-bar">
        <div onClick={() => navigate("/")} id="logo-bar">
          <p className="logo-text">
            <span>Velvet</span> Videos
          </p>
        </div>
      </div>

      <div className="login-nav-box">
        <div id="social-links-bar">
          <button className="no-bg hov user-icon">
            <i className="fa-solid fa-user"></i>
          </button>
          {token ? (
            <PrimaryButton
              item={{
                logicFunction: doLogout,
                buttonName: "Logout",
                class: "no-bg hov logout btn-solid-primary",
              }}
            />
          ) : (
            <PrimaryButton
              item={{
                logicFunction: () => {
                  navigate("/login");
                },
                buttonName: "Login",
                class: "no-bg hov btn-solid-primary",
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
