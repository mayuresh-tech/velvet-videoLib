import React from "react";

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
          <button class="btn-solid-primary">Explore</button>
        </div>
      </section>

      <section class="must-watch-section">
        <p class="heading-section">Must Watch Videos</p>
        <div class="flex-center">
          <div class="video-card">
            <img class="video-image" src="./assets/video.jpg" alt="Video" />
            <p class="video-name">SEN Sinatara leaks his Team</p>
            <p class="video-details">
              <span class="video-views">6K views</span> |{" "}
              <span class="video-hours-ago">4 hours ago</span>
            </p>
            <button class="btn-solid-secondary video-watch-btn">
              Watch now
            </button>
          </div>
          <div class="video-card">
            <img class="video-image" src="./assets/video.jpg" alt="Video" />
            <p class="video-name">SEN Sinatara leaks his Team</p>
            <p class="video-details">
              <span class="video-views">6K views</span> |{" "}
              <span class="video-hours-ago">4 hours ago</span>
            </p>
            <button class="btn-solid-secondary video-watch-btn">
              Watch now
            </button>
          </div>
          <div class="video-card">
            <img class="video-image" src="./assets/video.jpg" alt="Video" />
            <p class="video-name">SEN Sinatara leaks his Team</p>
            <p class="video-details">
              <span class="video-views">6K views</span> |{" "}
              <span class="video-hours-ago">4 hours ago</span>
            </p>
            <button class="btn-solid-secondary video-watch-btn">
              Watch now
            </button>
          </div>
          <div class="video-card">
            <img class="video-image" src="./assets/video.jpg" alt="Video" />
            <p class="video-name">SEN Sinatara leaks his Team</p>
            <p class="video-details">
              <span class="video-views">6K views</span> |{" "}
              <span class="video-hours-ago">4 hours ago</span>
            </p>
            <button class="btn-solid-secondary video-watch-btn">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomePage;
