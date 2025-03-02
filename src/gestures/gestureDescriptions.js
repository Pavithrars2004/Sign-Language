// src/gestures/gestureDescriptions.js

import { GestureDescription, Finger, FingerCurl } from 'fingerpose';

// 1. Good Morning Gesture (Open Palm)
const goodMorning = new GestureDescription('Good Morning');
goodMorning.addCurl(Finger.All, FingerCurl.NoCurl, 1.0); // All fingers open

// 2. Good Night Gesture (Closed Fist)
const goodNight = new GestureDescription('Good Night');
goodNight.addCurl(Finger.All, FingerCurl.FullCurl, 1.0); // All fingers curled

// 3. Next Slide (Pointing Right)
const nextSlide = new GestureDescription('Next Slide');
nextSlide.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
nextSlide.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
nextSlide.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
nextSlide.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
nextSlide.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// 4. Break (Raised Hand)
const breakGesture = new GestureDescription('Break');
breakGesture.addCurl(Finger.All, FingerCurl.NoCurl, 1.0); // Open palm

// 5. Greetings (Handshake-like)
const greetings = new GestureDescription('Greetings');
greetings.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
greetings.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
greetings.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
greetings.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
greetings.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// 6. Stop Gesture (Palm Facing Forward)
const stopGesture = new GestureDescription('Stop');
stopGesture.addCurl(Finger.All, FingerCurl.NoCurl, 1.0); // All fingers open

// 7. Happy Gesture (Raised Open Hand)
const happyGesture = new GestureDescription('Happy');
happyGesture.addCurl(Finger.All, FingerCurl.NoCurl, 1.0); // Open palm, slightly tilted

// 8. Not Good (Thumb Down)
const notGood = new GestureDescription('Not Good');
notGood.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0); // Thumb extended
notGood.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
notGood.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
notGood.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
notGood.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// 9. Before Slide (Swipe Left)
const beforeSlide = new GestureDescription('Before Slide');
beforeSlide.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
beforeSlide.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
beforeSlide.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
beforeSlide.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
beforeSlide.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// 10. Explain (Circular Motion)
const explainGesture = new GestureDescription('Explain');
explainGesture.addCurl(Finger.All, FingerCurl.NoCurl, 1.0); // Open palm moving in circles

export const Gestures = {
    goodMorning,
    goodNight,
    nextSlide,
    breakGesture,
    greetings,
    stopGesture,
    happyGesture,
    notGood,
    beforeSlide,
    explainGesture
};
