import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useData } from "../../context/DataContext/DataContext";
import { deletePlaylist } from "../../services";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import PlaylistDetailsPageVideoCard from "../video-card/PlaylistDetailsPageVideoCard";

import "./PlaylistDetails.css";

const PlaylistDetails = () => {
  const { dispatch } = useData();
  const loginToken = localStorage.getItem("login");
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  const deleteFullPlaylist = async (playlistId) => {
    let serverResponse = await deletePlaylist({
      playlistId: playlistId,
      encodedToken: loginToken,
    });
    dispatch({
      type: "LOAD_PLAYLIST",
      payload: serverResponse.data.playlists,
    });
    navigate("/myplaylist");
  };

  return (
    <section className="playlist-detail-section">
      <div className="side-context-box">
        <SideContent />
        <div className="main-content">
          <div className="side-ways">
            <Heading heading={{ title: state.playlistName }} />
            <button
              id="delete-playlist-btn"
              className="btn-solid-primary"
              onClick={() => {
                deleteFullPlaylist(state._id);
              }}
            >
              Delete this Playlist
            </button>
          </div>
          <div className="flex-center">
            {state.playlistVideos.map((video) => {
              return (
                <PlaylistDetailsPageVideoCard
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
                    playlistName: state.playlistName,
                    playlistId: state._id,
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

export default PlaylistDetails;
