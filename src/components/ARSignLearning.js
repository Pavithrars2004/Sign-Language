import React, { useRef, useEffect, useState } from "react";
import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { drawHand } from "../utils/drawHand";
import { Link } from "react-router-dom";

function ARSignLearning() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [sign, setSign] = useState("Detecting...");

  useEffect(() => {
    const runHandpose = async () => {
      const net = await handpose.load();
      console.log("Handpose model loaded.");

      setInterval(() => {
        detect(net);
      }, 100);
    };

    const detect = async (net) => {
      if (
        webcamRef.current &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;
        const hand = await net.estimateHands(video);

        if (hand.length > 0) {
          // Logic to identify sign (Replace with ML model)
          setSign("✋ Hand Detected");
        } else {
          setSign("No hand detected");
        }

        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }
    };

    runHandpose();
  }, []);

  return (
    <div className="page-container">
      <h1>🎮 AR Sign Language Learning</h1>
      <p>Show a sign with your hand, and the AI will detect it.</p>

      <Webcam ref={webcamRef} className="webcam" />
      <canvas ref={canvasRef} className="overlay" />

      <h2>{sign}</h2>
      <Link to="/">🔙 Go Back</Link>
    </div>
  );
}

export default ARSignLearning;
