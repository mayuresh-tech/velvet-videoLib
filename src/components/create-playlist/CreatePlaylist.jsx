import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useData } from "../../context/DataContext/DataContext";
import { addPlaylist } from "../../services";

import "./CreatePlaylist.css";

const CreatePlaylist = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("login");
  const [playlistName, setPlaylistName] = useState("");
  const [playlistNameError, setPlaylistNameError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const createNewPlaylist = async (name) => {
    if ("login" in localStorage) {
      setLoginError(false);
      try {
        let serverResponse = await addPlaylist({
          title: name,
          description: "Playlist",
          encodedToken: loginToken,
        });
        dispatch({
          type: "LOAD_PLAYLIST",
          payload: serverResponse.data.playlists,
        });
        navigate("/myplaylist");
      } catch (e) {
        console.log(e);
      }
    } else {
      setLoginError(true);
    }
  };

  const callLoginErrorFunc = () => {
    return (
      <div className="toast-box toast-error">
        <p>Please login first!</p>
        <button className="no-bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => setLoginError(false), 5000);
  }, [loginError]);

  return (
    <>
      {loginError ? callLoginErrorFunc() : null}
      <section className="create-playlist-section">
        <div className="create-box">
          <h4 id="h4" className="">
            Create New Playlist
          </h4>
          <form className="validate">
            <label className="form-input-label required">Playlist name</label>
            <input
              type="text"
              className="form-input-field"
              placeholder="My Playlist"
              required
              onChange={(event) => {
                setPlaylistName(event.target.value);
              }}
            />
            <button
              onClick={() => {
                createNewPlaylist(playlistName);
              }}
              id="create-playlist-btn"
              type="button"
              className="btn-submit btn-solid-primary"
            >
              Create Playlist
            </button>
            {playlistNameError ? (
              <span className="validation-errors error-msg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
                </svg>
                Playlist Name cannot be empty!
              </span>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePlaylist;
