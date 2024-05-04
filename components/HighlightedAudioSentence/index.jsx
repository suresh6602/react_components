/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const HighlightedAudioSentence = ({ sentence }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [words, setWords] = useState([]);
    useEffect(() => {
        // Split the sentence into words
        const sentenceWords = sentence.split(' ');
        setWords(sentenceWords);
    }, [sentence]);

    useEffect(() => {
        const audioElement = document.getElementById('audio');

        const updateWordHighlight = () => {
            // Calculate the current time of the audio
            const currentTime = audioElement.currentTime;
            // Find the index of the word to highlight based on the current time
            let wordIndex = 0;
            let cumulativeDuration = 0;
            for (let i = 0; i < words.length; i++) {
                const wordDuration = words[i].length * 0.1; // Adjust this multiplier as needed
                cumulativeDuration += wordDuration;
                if (currentTime < cumulativeDuration) {
                    wordIndex = i;
                    break;
                }
            }
            setCurrentWordIndex(wordIndex);
        };

        // Add event listener to update word highlight during audio playback
        audioElement.addEventListener('timeupdate', updateWordHighlight);

        return () => {
            // Cleanup: remove event listener when component unmounts
            audioElement.removeEventListener('timeupdate', updateWordHighlight);
            audioElement.removeEventListener('ended', setCurrentWordIndex(-1));
        };
    }, [words]);

    return (
        <>
            {words.map((word, index) => (
                <span
                    key={index}
                    style={{
                        fontWeight:
                            currentWordIndex === index ? 'bold' : 'normal',
                        color: currentWordIndex === index ? 'purple' : 'grey',
                    }}
                >
                    {word}{' '}
                </span>
            ))}
        </>
    );
};

export default HighlightedAudioSentence;
