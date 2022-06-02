import React from "react";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import VideoCardWithDeleteIcon from "../video-card/VideoCardWithDeleteIcon";

import "./HistoryPage.css";

const HistoryPage = () => {
  return (
    <section class="history-section">
      <div class="side-context-box">
        <SideContent />
        <div class="main-content">
          <div class="side-ways">
            <Heading heading={{ title: "History" }} />
            <button id="clear-history-btn" class="btn-solid-primary">
              Clear full history
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

export default HistoryPage;
