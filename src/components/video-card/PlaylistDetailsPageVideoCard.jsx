import React from "react";
import { useNavigate } from "react-router";
import { useData } from "../../context/DataContext/DataContext";
import { addHistory, deleteHistory, deletePlaylistVideo } from "../../services";
import PrimaryButton from "../primary-button/PrimaryButton";

import "./PlaylistDetailsPageVideoCard.css";

const PlaylistDetailsPageVideoCard = ({ item }) => {
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("login");
  const { dispatch } = useData();

  const addVideoToHistory = async (video) => {
    let serverResponse = await addHistory({
      video: video,
      encodedToken: loginToken,
    });
    dispatch({
      type: "LOAD_HISTORY",
      payload: serverResponse.data.history,
    });
  };

  const deleteVideoFromPlaylist = async (video, playlistId) => {
    let serverResponse = await deletePlaylistVideo({
      videoId: video,
      playlistId: playlistId,
      encodedToken: loginToken,
    });
    let storagePlaylists = JSON.parse(localStorage.getItem("playlist"));
    storagePlaylists = storagePlaylists.filter(
      (item) => item._id !== playlistId
    );
    storagePlaylists.push(serverResponse.data.playlist);
    dispatch({
      type: "LOAD_PLAYLIST",
      payload: storagePlaylists,
    });
    navigate("/myplaylist");
  };

  return (
    <div className="video-card-delete-icon" key={item._id}>
      <div className="relative-box">
        <div className="image">
          <img
            className="video-image"
            src={item.imagePath}
            alt="Video Thumbnail"
          />
        </div>
        <button
          onClick={() => {
            deleteVideoFromPlaylist(item._id, item.playlistId);
          }}
          className="icon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
          </svg>
        </button>
      </div>
      <p className="video-name overflow-wrap">{item.videoName}</p>
      <p className="video-details">
        <span className="video-views">{item.views}</span> |
        <span className="video-hours-ago"> {item.since}</span>
      </p>
      <PrimaryButton
        item={{
          id: item.id,
          buttonName: "Watch now",
          class: "btn-solid-secondary video-watch-btn",
          logicFunction: () => {
            addVideoToHistory(item);
            navigate("/videodetail", { state: item });
          },
        }}
      />
    </div>
  );
};

export default PlaylistDetailsPageVideoCard;
