import React from "react";
import Heading from "../heading/Heading";
import VideoCard from "../video-card/VideoCard";
import SideContent from "../side-content/SideContent";

import "./TrendingPage.css";
import { useData } from "../../context/DataContext/DataContext";

const TrendingPage = ({ item }) => {
  const { data } = useData();

  let trendingVideosArr = data.videos
    .sort(() => Math.random() - Math.random())
    .slice(2, Math.floor(Math.random() * 10 + 2));

  return (
    <section className="trending-section">
      <div className="side-context-box">
        <SideContent />
        <div className="main-content">
          <Heading heading={{ title: "Trending Videos" }} />
          <div className="flex-center">
            {trendingVideosArr.map((video) => {
              return (
                <VideoCard
                key={video._id}
                item={{
                  _id: video._id,
                  id: video._id,
                  videoName: video.title,
                  description: video.description,
                  creator: video.creator,
                  link: video.link,
                  category: video.category,
                  imagePath: video.imagePath,
                  views: video.views,
                  since: video.since,
                }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPage;
