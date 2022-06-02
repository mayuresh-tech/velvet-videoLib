import React from "react";
import Heading from "../heading/Heading";
import MyPlaylistBox from "../my-playlist-box/MyPlaylistBox";
import SideContent from "../side-content/SideContent";

import "./MyPlaylist.css";

const MyPlaylist = () => {
  return (
    <section class="playlist-section">
      <div class="side-context-box">
        <SideContent />
        <div class="main-content">
          <div class="side-ways">
            <Heading heading={{ title: "My Playlist" }} />
            <button id="delete-playlist-btn" class="btn-solid-primary">
              Create new Playlist
            </button>
          </div>
          <div class="flex-center">
            <MyPlaylistBox
              item={{
                playlistName: "My Playlist #1",
                playlistVideoCount: "10",
              }}
            />
            <MyPlaylistBox
              item={{
                playlistName: "My Playlist #1",
                playlistVideoCount: "10",
              }}
            />
            <MyPlaylistBox
              item={{
                playlistName: "My Playlist #1",
                playlistVideoCount: "10",
              }}
            />
            <MyPlaylistBox
              item={{
                playlistName: "My Playlist #1",
                playlistVideoCount: "10",
              }}
            />
            <MyPlaylistBox
              item={{
                playlistName: "My Playlist #1",
                playlistVideoCount: "10",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPlaylist;
