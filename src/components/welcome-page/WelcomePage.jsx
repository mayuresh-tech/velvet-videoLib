import React from "react";
import Heading from "../heading/Heading";
import PrimaryButton from "../primary-button/PrimaryButton";
import VideoCard from "../video-card/VideoCard";

import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <>
      <section class="banner-section">
        <div class="banner-intro">
          <img src="./assets/banner.jpg" alt="Banner" />
        </div>
        <div class="layout-above">
          <p>Experience the Himalayas!</p>
          <PrimaryButton
            item={{ buttonName: "Explore", class: "btn-solid-primary" }}
          />
        </div>
      </section>

      <section class="must-watch-section">
        {<Heading heading={{ title: "Must Watch Videos" }} />}
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
      </section>
    </>
  );
};

export default WelcomePage;
