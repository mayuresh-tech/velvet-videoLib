import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import Mockman from 'mockman-js';

import WelcomePage from './components/welcome-page/WelcomePage';
import Navbar from './components/navbar/Navbar';
import TrendingPage from './components/trending-page/TrendingPage';
import ExplorePage from './components/explore-page/ExplorePage';

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
      </Routes>
    </>
  );
}

export default App;
