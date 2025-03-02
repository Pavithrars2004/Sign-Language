// src/components/SignLanguageDetector.js

import React, { useRef, useEffect, useState } from 'react';
import * as handpose from '@tensorflow-models/handpose';
import * as fp from 'fingerpose';
import Webcam from 'react-webcam';
import { Gestures } from '../gestures/gestureDescriptions';

const SignLanguageDetector = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [gestureName, setGestureName] = useState('');
    const lastGesture = useRef('');
    const lastDetectionTime = useRef(0);

    useEffect(() => {
        const runHandpose = async () => {
            const net = await handpose.load();
            console.log('Handpose model loaded.');
            
            setInterval(async () => {
                if (webcamRef.current && webcamRef.current.video.readyState === 4) {
                    const video = webcamRef.current.video;
                    const hand = await net.estimateHands(video);

                    if (hand.length > 0) {
                        const GE = new fp.GestureEstimator(Object.values(Gestures));
                        const estimatedGestures = await GE.estimate(hand[0].landmarks, 8.5);

                        if (estimatedGestures.gestures.length > 0) {
                            const highestConfidenceGesture = estimatedGestures.gestures.reduce((p, c) => (p.confidence > c.confidence ? p : c));
                            const currentTime = Date.now();

                            if (highestConfidenceGesture.name !== lastGesture.current || currentTime - lastDetectionTime.current > 3000) {
                                setGestureName(highestConfidenceGesture.name);
                                lastGesture.current = highestConfidenceGesture.name;
                                lastDetectionTime.current = currentTime;
                            }
                        }
                    }
                }
            }, 500);
        };

        runHandpose();
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Sign Language Detector</h2>
            <Webcam ref={webcamRef} style={{ width: 640, height: 480 }} />
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
            <h3>Gesture Detected: {gestureName}</h3>
        </div>
    );
};

export default SignLanguageDetector;
