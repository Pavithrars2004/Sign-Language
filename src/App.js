import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Translate from "./components/Translate";
import VideoCall from "./components/VideoCall";
import More from "./components/More";
import TextToSign from "./components/TextToSign";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import VoiceToSign from "./components/VoiceToSign"; ; // Ensure exact casing
//import ARSignLearning from "../components/ARSignLearning";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/more" element={<More />} />
        <Route path="/texttosign" element = {<TextToSign/>}/>
      </Routes>
    </div>
  );
}

export default App;
