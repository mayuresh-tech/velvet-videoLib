import React from "react";
import { useNavigate } from "react-router";
import { useData } from "../../context/DataContext/DataContext";
import Heading from "../heading/Heading";
import MyPlaylistBox from "../my-playlist-box/MyPlaylistBox";
import SideContent from "../side-content/SideContent";

import "./MyPlaylist.css";

const MyPlaylist = () => {
  const navigate = useNavigate();
  const { data } = useData();

  return (
    <section className="playlist-section">
      <div className="side-context-box">
        <SideContent />
        <div className="main-content">
          <div className="side-ways">
            <Heading heading={{ title: "My Playlist" }} />
            <button
              onClick={() => {
                navigate("/createplaylist");
              }}
              id="delete-playlist-btn"
              className="btn-solid-primary"
            >
              Create new Playlist
            </button>
          </div>
          <div className="flex-center">
            {data.playlist.map((playlist) => {
              return (
                <MyPlaylistBox
                  key={playlist._id}
                  item={{
                    id: playlist._id,
                    _id: playlist._id,
                    playlistName: playlist.title,
                    playlistVideoCount: playlist.videos.length,
                    playlistDescription: playlist.description,
                    playlistVideos: playlist.videos,
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

export default MyPlaylist;
