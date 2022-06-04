import React from "react";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import VideoCardWithWatchLaterIcon from "../video-card/VideoCardWithWatchLaterIcon";

import "./WatchlaterPage.css";

const WatchlaterPage = () => {
  return (
    <section class="watch-later-section">
      <div class="side-context-box">
        <SideContent />
        <div class="main-content">
          <Heading heading={{ title: "Watch Later" }} />
          <div class="flex-center">
            <VideoCardWithWatchLaterIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithWatchLaterIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithWatchLaterIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithWatchLaterIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithWatchLaterIcon
              item={{
                imagePath: "./assets/video.jpg",
                videoName: "SEN Sinatara leaks his Team",
                views: "6K views",
                hoursAgo: "4 hours ago",
              }}
            />
            <VideoCardWithWatchLaterIcon
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

export default WatchlaterPage;
