import React from "react";
import { useData } from "../../context/DataContext/DataContext";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import HistoryPageVideoCard from "../video-card/HistoryPageVideoCard";

import "./HistoryPage.css";

const HistoryPage = () => {
  const { data, dispatch } = useData();

  const clearFullHistory = () => {
    localStorage.removeItem("history");
    localStorage.setItem("history", JSON.stringify([]));
    data.history = [];
    dispatch({
      type: "LOAD_HISTORY",
      payload: JSON.parse(localStorage.getItem("history")),
    });
  };

  return (
    <section className="history-section">
      <div className="side-context-box">
        <SideContent />
        <div className="main-content">
          <div className="side-ways">
            <Heading heading={{ title: "History" }} />
            <button
              onClick={() => {
                clearFullHistory();
              }}
              id="clear-history-btn"
              className="btn-solid-primary"
            >
              Clear full history
            </button>
          </div>
          <div className="flex-center">
            {data.history.map((video) => {
              return (
                <HistoryPageVideoCard
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

export default HistoryPage;
