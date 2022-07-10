import React, { useEffect, useState } from "react";
import Heading from "../heading/Heading";
import VideoBox from "../video-box/VideoBox";
import VideoCard from "../video-card/VideoCard";
import { useLocation } from "react-router-dom";
//import { useAuth } from "../../context/AuthContext/AuthContext";

import "./VideoDetailPage.css";
import { useData } from "../../context/DataContext/DataContext";
import { addLikedVideo, addPlaylistVideo, addWatchLater } from "../../services";

const VideoDetailPage = () => {
  const loginToken = localStorage.getItem("login");
  const { data, dispatch } = useData();
  const location = useLocation();

  const [loginError, setLoginError] = useState(false);

  let mustWatchDisplay = data.videos
    .sort(() => Math.random() - Math.random())
    .slice(2, Math.floor(Math.random() * 10));

  const addVideoToLiked = async (video) => {
    if ("login" in localStorage) {
      setLoginError(false);
      try {
        let serverResponse = await addLikedVideo({
          video: video,
          encodedToken: loginToken,
        });
        dispatch({
          type: "LOAD_LIKED",
          payload: serverResponse.data.likes,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setLoginError(true);
    }
  };

  const addVideoToWatchLater = async (video) => {
    if ("login" in localStorage) {
      setLoginError(false);
      try {
        let serverResponse = await addWatchLater({
          video: video,
          encodedToken: loginToken,
        });
        dispatch({
          type: "LOAD_WATCHLATER",
          payload: serverResponse.data.watchlater,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setLoginError(true);
    }
  };

  const addVideoToPlaylist = async (video, playlistId) => {
    if ("login" in localStorage) {
      setLoginError(false);
      try {
        let serverResponse = await addPlaylistVideo({
          video: video,
          playlistId: playlistId,
          encodedToken: loginToken,
        });
        let storagePlaylists = JSON.parse(localStorage.getItem("playlist"));
        storagePlaylists = storagePlaylists.filter(
          (item) => item._id !== playlistId
        );
        storagePlaylists.push(serverResponse.data.playlist);
        dispatch({
          type: "LOAD_PLAYLIST",
          payload: storagePlaylists,
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

  const state = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoginError(false), 5000);
  }, [loginError]);

  return (
    <>
      {loginError ? callLoginErrorFunc() : null}
      <section className="video-detail-section">
        <div className="main-box">
          <div className="video-box" key={state.id}>
            <Heading heading={{ title: state.videoName }} />
            <p className="author-name">By {state.creator}</p>
            <VideoBox
              item={{
                videoURL: state.link,
              }}
            />
            <div className="icon-detail-box">
              <div className="icon-box">
                <button
                  className="no-bg"
                  onClick={() => {
                    addVideoToLiked(state);
                  }}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="label-icon">Like</span>
                </button>
                <button className="no-bg">
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="label-icon">Dislike</span>
                </button>
                <button
                  className="no-bg"
                  onClick={() => {
                    addVideoToWatchLater(state);
                  }}
                >
                  <i className="fa-solid fa-clock"></i>
                  <span className="label-icon">Watch Later</span>
                </button>
                <button
                  className="no-bg"
                  onClick={() => {
                    //addVideoToPlaylist(state, "404327b6-0cf0-488a-81fb-a9d3cc30064b");
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                  <span className="label-icon">Add to Playlist</span>
                </button>
              </div>
              <div className="details-box">
                <p className="video-details">
                  <span className="video-views">{state.views} | </span>
                  <span className="video-hours-ago">{state.since}</span>
                </p>
              </div>
            </div>
            <div className="description-box">
              <p className="heading">Description</p>
              <p className="description">{state.description}</p>
            </div>
            <div className="comment-box">
              <p className="heading">Comments</p>
              <div className="side-ways">
                <div className="avatar avatar-text avatar-text-xs" role="img">
                  MM
                </div>
                <textarea id="comment-input" type="text" rows="1"></textarea>
                <button className="btn-solid-primary">Comment</button>
              </div>
              <div className="user-comment-box">
                <div className="side-ways">
                  <div className="avatar avatar-text avatar-text-xs" role="img">
                    MM
                  </div>
                  <p className="comment">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="side-ways">
                  <div className="avatar avatar-text avatar-text-xs" role="img">
                    MM
                  </div>
                  <p className="comment">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="must-watch-box">
            <Heading heading={{ title: "Must Watch" }} />
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
        </div>
      </section>
    </>
  );
};

export default VideoDetailPage;
