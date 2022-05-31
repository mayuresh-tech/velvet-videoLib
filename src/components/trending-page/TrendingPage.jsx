import React from "react";
import Heading from "../heading/Heading";
import VideoCard from "../video-card/VideoCard";

import "./TrendingPage.css";

const TrendingPage = ({ item }) => {
  return (
    <section class="trending-section">
      <div class="side-context-box">
        <div class="side-content">
          <ul>
            <li>
              <div class="side-ways">
                <i class="fa-solid fa-house"></i>
                <p>Home</p>
              </div>
            </li>
            <li>
              <div class="side-ways">
                <i class="fa-solid fa-globe"></i>
                <p>Explore</p>
              </div>
            </li>
            <li>
              <div class="side-ways">
                <i class="fa-solid fa-clock"></i>
                <p>Watch Later</p>
              </div>
            </li>
            <li>
              <div class="side-ways">
                <i class="fa-solid fa-circle-play"></i>
                <p>Playlist</p>
              </div>
            </li>
            <li>
              <div class="side-ways">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p>History</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="main-content">
          <Heading heading={{ title: "Trending Videos" }} />
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
          </div>
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
          </div>
          <div class="flex-center top-margin">
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
          <div class="flex-center top-margin">
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
  );
};

export default TrendingPage;
