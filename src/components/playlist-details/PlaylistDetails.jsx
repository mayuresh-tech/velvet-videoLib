import React from "react";
import SideContent from "../side-content/SideContent";
import VideoCardWithDeleteIcon from "../video-card/VideoCardWithDeleteIcon";

import "./PlaylistDetails.css";

const PlaylistDetails = () => {
  return (
    <section class="playlist-detail-section">
      <div class="side-context-box">
        <SideContent />
        <div class="main-content">
          <div class="side-ways">
            <p class="heading-section">Playlist #1</p>
            <button id="delete-playlist-btn" class="btn-solid-primary">
              Delete this Playlist
            </button>
          </div>
          <div class="flex-center">
            <VideoCardWithDeleteIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithDeleteIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithDeleteIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithDeleteIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistDetails;
