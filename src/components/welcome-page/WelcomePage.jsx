import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useData } from "../../context/DataContext/DataContext";
import Heading from "../heading/Heading";
import PrimaryButton from "../primary-button/PrimaryButton";
import VideoCard from "../video-card/VideoCard";

import "./WelcomePage.css";

const WelcomePage = () => {
  const { data } = useData();
  const naviagte = useNavigate();
  const [loginError, setLoginError] = useState(false);

  let mustWatchDisplay = data.videos
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

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

  return (
    <>
      <section className="banner-section" key="1">
        <div className="banner-intro">
          <img src="./assets/banner.jpg" alt="Banner" />
        </div>
        <div className="layout-above">
          <p>Experience the Himalayas!</p>
          <PrimaryButton
            item={{
              logicFunction: () => {
                naviagte("/explore");
              },
              buttonName: "Explore",
              class: "btn-solid-primary",
            }}
          />
        </div>
      </section>

      <section className="must-watch-section" key="2">
        {<Heading key="welcomePage" heading={{ title: "Must Watch Videos" }} />}
        <div className="flex-center">
          {mustWatchDisplay.map((video) => {
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
      </section>
    </>
  );
};

export default WelcomePage;
