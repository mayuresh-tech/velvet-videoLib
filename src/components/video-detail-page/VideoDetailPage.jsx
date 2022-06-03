import React from "react";
import Heading from "../heading/Heading";
import VideoBox from "../video-box/VideoBox";
import VideoCard from "../video-card/VideoCard";

import "./VideoDetailPage.css";

const VideoDetailPage = ({ item }) => {
  return (
    <section class="video-detail-section">
      <div class="main-box">
        <div class="video-box">
          <Heading heading={{ title: "SEN Sintara leaks his Team" }} />
          <p class="author-name">By Sentinals</p>
          <VideoBox
            item={{
              videoURL: "https://www.youtube.com/embed/jl0id2MRlso",
            }}
          />
          <div class="icon-detail-box">
            <div class="icon-box">
              <button class="no-bg">
                <i class="fa-solid fa-thumbs-up"></i>
                <span class="label-icon">Like</span>
              </button>
              <button class="no-bg">
                <i class="fa-solid fa-thumbs-down"></i>
                <span class="label-icon">Dislike</span>
              </button>
              <button class="no-bg">
                <i class="fa-solid fa-heart"></i>
                <span class="label-icon">Watch Later</span>
              </button>
              <button class="no-bg">
                <i class="fa-solid fa-plus"></i>
                <span class="label-icon">Add to Playlist</span>
              </button>
            </div>
            <div class="details-box">
              <p class="video-details">
                <span class="video-views">6K views | </span>
                <span class="video-hours-ago">4 hours ago</span>
              </p>
            </div>
          </div>
          <div class="description-box">
            <p class="heading">Description</p>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div class="comment-box">
            <p class="heading">Comments</p>
            <div class="side-ways">
              <div class="avatar avatar-text avatar-text-xs" role="img">
                MM
              </div>
              <textarea id="comment-input" type="text" rows="1">
                {" "}
              </textarea>
              <button class="btn-solid-primary">Comment</button>
            </div>
            <div class="user-comment-box">
              <div class="side-ways">
                <div class="avatar avatar-text avatar-text-xs" role="img">
                  MM
                </div>
                <p class="comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div class="side-ways">
                <div class="avatar avatar-text avatar-text-xs" role="img">
                  MM
                </div>
                <p class="comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="must-watch-box">
          <Heading heading={{ title: "Must Watch" }} />
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
    </section>
  );
};

export default VideoDetailPage;
