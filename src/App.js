import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import Mockman from 'mockman-js';

import WelcomePage from './components/welcome-page/WelcomePage';
import Navbar from './components/navbar/Navbar';

function App() {
  // const { token } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
