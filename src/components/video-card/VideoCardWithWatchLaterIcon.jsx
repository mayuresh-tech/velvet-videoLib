import React from "react";

import "./VideoCardWithWatchLaterIcon.css";

const VideoCardWithWatchLaterIcon = ({ item }) => {
  return (
    <div class="video-card-watch-later-icon">
      <div class="relative-box">
        <div class="image">
          <img class="video-image" src={item.imagePath} alt="Video Thumbnail" />
        </div>
        <button class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
          </svg>
        </button>
      </div>
      <p class="video-name">{item.videoName}</p>
      <p class="video-details">
        <span class="video-views">{item.views}</span> |
        <span class="video-hours-ago"> {item.hoursAgo}</span>
      </p>
      <button class="btn-solid-secondary video-watch-btn">Watch now</button>
    </div>
  );
};

export default VideoCardWithWatchLaterIcon;
