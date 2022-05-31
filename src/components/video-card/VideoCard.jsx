import React from "react";
import PrimaryButton from "../primary-button/PrimaryButton";

import "./VideoCard.css";

const VideoCard = ({ item }) => {
  return (
    <>
      <div class="video-card">
        <img class="video-image" src={item.imagePath} alt="Video" />
        <p class="video-name">{item.videoName}</p>
        <p class="video-details">
          <span class="video-views">{item.views}</span> |
          <span class="video-hours-ago"> {item.hoursAgo}</span>
        </p>
        <PrimaryButton
          item={{
            buttonName: "Watch now",
            class: "btn-solid-secondary video-watch-btn",
          }}
        />
      </div>
    </>
  );
};

export default VideoCard;
