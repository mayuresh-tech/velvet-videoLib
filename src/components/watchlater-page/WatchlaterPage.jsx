import React from "react";
import { useData } from "../../context/DataContext/DataContext";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import VideoCardWithWatchLaterIcon from "../video-card/VideoCardWithWatchLaterIcon";

import "./WatchlaterPage.css";

const WatchlaterPage = () => {
  const { data } = useData();

  return (
    <section className="watch-later-section">
      <div className="side-context-box">
        <SideContent />
        <div className="main-content">
          <Heading heading={{ title: "Watch Later" }} />
          <div className="flex-center">
            {data.watchlater.map((video) => {
              return (
                <VideoCardWithWatchLaterIcon
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

export default WatchlaterPage;
