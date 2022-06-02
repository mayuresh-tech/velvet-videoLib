import React from "react";
import CategoriesBox from "../categories-box/CategoriesBox";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import VideoCard from "../video-card/VideoCard";

import "./ExplorePage.css";

const ExplorePage = ({ item }) => {
  return (
    <>
      <section class="explore-section">
        <div class="side-context-box">
          <SideContent />
          <div class="main-content">
            <Heading heading={{ title: "All Videos" }} />
            <CategoriesBox />
            <div class="flex-center">
              <VideoCard
                item={{
                  imagePath: "./assets/video.jpg",
                  videoName: "SEN Sinatara leaks his Team",
                  views: "6K views",
                  hoursAgo: "4 hours ago",
                }}
              />
              <VideoCard
                item={{
                  imagePath: "./assets/video.jpg",
                  videoName: "SEN Sinatara leaks his Team",
                  views: "6K views",
                  hoursAgo: "4 hours ago",
                }}
              />
              <VideoCard
                item={{
                  imagePath: "./assets/video.jpg",
                  videoName: "SEN Sinatara leaks his Team",
                  views: "6K views",
                  hoursAgo: "4 hours ago",
                }}
              />
              <VideoCard
                item={{
                  imagePath: "./assets/video.jpg",
                  videoName: "SEN Sinatara leaks his Team",
                  views: "6K views",
                  hoursAgo: "4 hours ago",
                }}
              />
              <VideoCard
                item={{
                  imagePath: "./assets/video.jpg",
                  videoName: "SEN Sinatara leaks his Team",
                  views: "6K views",
                  hoursAgo: "4 hours ago",
                }}
              />
              <VideoCard
                item={{
                  imagePath: "./assets/video.jpg",
                  videoName: "SEN Sinatara leaks his Team",
                  views: "6K views",
                  hoursAgo: "4 hours ago",
                }}
              />
              <VideoCard
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
    </>
  );
};

export default ExplorePage;
