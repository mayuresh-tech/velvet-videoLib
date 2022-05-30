import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import Mockman from 'mockman-js';

import { Navbar } from "./components/navbar/Navbar";

function App() {
  // const { token } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
