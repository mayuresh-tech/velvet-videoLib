import React from "react";
import { useNavigate } from "react-router";
import { useData } from "../../context/DataContext/DataContext";
import { addHistory } from "../../services";
import PrimaryButton from "../primary-button/PrimaryButton";

import "./VideoCard.css";

const VideoCard = ({ item }) => {
  const loginToken = localStorage.getItem("login");
  const navigate = useNavigate();
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

  return (
    <div className="video-card" key={item._id}>
      <img className="video-image" src={item.imagePath} alt="Video Thumbnail" />
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

export default VideoCard;
