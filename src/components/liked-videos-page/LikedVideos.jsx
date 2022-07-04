import React from "react";
import { useData } from "../../context/DataContext/DataContext";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import VideoCardWithHeartIcon from "../video-card/VideoCardWithHeartIcon";

import "./LikedVideos.css";

const LikedVideos = () => {
  const { data } = useData();
  return (
    <section className="liked-videos-section">
      <div className="side-context-box">
        <SideContent />
        <div className="main-content">
          <Heading heading={{ title: "Liked Videos" }} />
          <div className="flex-center">
            {data.liked.map((video) => {
              return (
                <VideoCardWithHeartIcon
                  key={video._id}
                  item={{
                    _id: video._id,
                    id: video._id,
                    videoName: video.videoName,
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

export default LikedVideos;
