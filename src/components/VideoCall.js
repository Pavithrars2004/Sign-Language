import React, { useState } from "react";
import SignLanguageDetector from "./SignLanguageDetector";
import "./VideoCall.css";

function VideoCall() {
  const [inCall, setInCall] = useState(false);
  const [detectedText, setDetectedText] = useState("");

  return (
    <div className="page-container">
      {!inCall ? (
        <>
          <h1>📞 Video Call with an Interpreter</h1>
          <p>Connect with sign language interpreters for real-time communication.</p>
          <img
            src="https://www.trsinterpreting.com/wp-content/uploads/2021/08/Interpreting-Services.png"
            alt="Sign Language Interpreter"
            className="image"
          />
          <button className="gradient-button" onClick={() => setInCall(true)}>
            Start a Video Call
          </button>
        </>
      ) : (
        <div className="video-container">
          <SignLanguageDetector setDetectedText={setDetectedText} />
          <h2>Detected Text: {detectedText}</h2>
          <button className="end-call-button" onClick={() => setInCall(false)}>
            End Call
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoCall;
