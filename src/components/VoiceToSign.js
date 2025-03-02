import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './VoiceToSign.css';

function VoiceToSign() {
    const [inputVal, setInputVal] = useState("");
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [URL, setURL] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [keywordQueue, setKeywordQueue] = useState([]);

    const handleChange = (evt) => {
        setInputVal(evt.target.value);
    };

    const fetchApi = async (text) => {
        try {
            const response = await fetch("http://127.0.0.1:5000/extract_keywords", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input_text: text })
            });
            const data = await response.json();
            setKeywords(data.keyword_tokens);
        } catch (error) {
            console.error("Error fetching keywords:", error);
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const textToUse = isRecording ? transcript : inputVal;
        fetchApi(textToUse);
    };

    const startListening = () => {
        resetTranscript();
        setIsRecording(true);
        SpeechRecognition.startListening();
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setIsRecording(false);
    };

    useEffect(() => {
        if (transcript) {
            setInputVal(transcript);
        }
    }, [transcript]);

    useEffect(() => {
        if (keywords.length > 0) {
            setKeywordQueue([...keywords]);
        }
    }, [keywords]);

    useEffect(() => {
        if (keywordQueue.length > 0) {
            setURL(`/assets/${keywordQueue[0]}.mp4`);
        }
    }, [keywordQueue]);

    const handleEnded = () => {
        setKeywordQueue((prevQueue) => {
            const updatedQueue = prevQueue.slice(1);
            if (updatedQueue.length > 0) {
                setURL(`/assets/${updatedQueue[0]}.mp4`);
            }
            return updatedQueue;
        });
    };

    return (
        <div className="container">
            <h1 className="title">Voice to Sign Language</h1>
            <p className="description">
                Convert speech into sign language videos easily.
            </p>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    value={inputVal}
                    onChange={handleChange}
                    className="input-text"
                    placeholder="Enter text here..."
                />
                <div className="button-group">
                    <button onClick={startListening} className="button record">
                        🎤 Start Recording
                    </button>
                    <button onClick={stopListening} className="button stop">
                        ✋ Stop Recording
                    </button>
                    <button type="submit" className="button submit">
                        📤 Convert
                    </button>
                </div>
            </form>
            {URL && (
                <div className="video-container">
                    <ReactPlayer
                        url={URL}
                        playing
                        onEnded={handleEnded}
                        className="react-player"
                    />
                </div>
            )}
        </div>
    );
}

export default VoiceToSign;
