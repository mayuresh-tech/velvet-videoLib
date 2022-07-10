import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext/DataContext";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import HistoryPageVideoCard from "../video-card/HistoryPageVideoCard";

import "./HistoryPage.css";

const HistoryPage = () => {
  const { data, dispatch } = useData();
  const [loginError, setLoginError] = useState(false);

  const clearFullHistory = () => {
    if ("login" in localStorage) {
      setLoginError(false);
      try {
        localStorage.removeItem("history");
        localStorage.setItem("history", JSON.stringify([]));
        data.history = [];
        dispatch({
          type: "LOAD_HISTORY",
          payload: JSON.parse(localStorage.getItem("history")),
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setLoginError(true);
    }
  };

  const callLoginErrorFunc = () => {
    return (
      <div className="toast-box toast-error">
        <p>Please login first!</p>
        <button className="no-bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => setLoginError(false), 5000);
  }, [loginError]);

  return (
    <>
      {loginError ? callLoginErrorFunc() : null}
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
    </>
  );
};

export default HistoryPage;
