import React from "react";
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
            <p class="heading-section">My Playlist</p>
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
