import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './TextToSign.css';

function TextToSign() {
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
            console.log(data.keyword_tokens);
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
            const playNextVideo = () => {
                const currentKeyword = keywordQueue[0];
                setURL(`/assets/${currentKeyword}.mp4`);
                console.log(`Playing video for keyword: ${currentKeyword}`);
            };

            playNextVideo();
        }
    }, [keywordQueue]);

    const handleEnded = () => {
        setKeywordQueue((prevQueue) => {
            const updatedQueue = prevQueue.slice(1);
            if (updatedQueue.length > 0) {
                const nextKeyword = updatedQueue[0];
                setURL(`/assets/${nextKeyword}.mp4`);
                console.log(`Playing next video for keyword: ${nextKeyword}`);
            }
            return updatedQueue;
        });
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    value={inputVal}
                    onChange={handleChange}
                    className="input-text"
                />
                
            </form>
            <button onClick={startListening} className="button">Record</button>
            <button onClick={stopListening} className="button">Stop Recording</button>
            <button type="submit" className="button">Submit</button>
            <ReactPlayer id="reactPlayer" url={URL} playing onEnded={handleEnded} className="react-player"/>
        </div>
    );

}

export default TextToSign;
