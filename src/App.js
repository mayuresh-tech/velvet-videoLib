import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import Mockman from 'mockman-js';

import WelcomePage from './components/welcome-page/WelcomePage';
import Navbar from './components/navbar/Navbar';
import TrendingPage from './components/trending-page/TrendingPage';
import ExplorePage from './components/explore-page/ExplorePage';
import LoginBox from './components/auth/login-box/LoginBox';
import SignupBox from './components/auth/signup-box/SignupBox';
import CreatePlaylist from './components/create-playlist/CreatePlaylist';
import MyPlaylist from './components/my-playlist/MyPlaylist';
import PlaylistDetails from './components/playlist-details/PlaylistDetails';
import HistoryPage from './components/history-page/HistoryPage';
import WatchlaterPage from './components/watchlater-page/WatchlaterPage';
import VideoDetailPage from './components/video-detail-page/VideoDetailPage';
import LikedVideos from './components/liked-videos-page/LikedVideos';

function App() {
  // const { token } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/signup" element={<SignupBox />} />
        <Route path="/createplaylist" element={<CreatePlaylist />} />
        <Route path="/myplaylist" element={<MyPlaylist />} />
        <Route path="/playlistdetails" element={<PlaylistDetails />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/watchlater" element={<WatchlaterPage />} />
        <Route path="/videodetail" element={<VideoDetailPage />} />
        <Route path="/liked" element={<LikedVideos />} />
      </Routes>
    </>
  );
}

export default App;
