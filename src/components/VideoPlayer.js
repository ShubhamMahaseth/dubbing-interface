import React, { useRef, useContext } from 'react';
import { DialogueContext } from '../context/DialogueContext';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const { currentDialogue } = useContext(DialogueContext);

  const playPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="mb-4">
      <video
        ref={videoRef}
        className="w-full"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
      />
      <button onClick={playPause} className="mt-2 p-2 bg-blue-500 text-white">
        Play/Pause
      </button>
      <p className="mt-2">Current Dialogue: {currentDialogue.originalText}</p>
    </div>
  );
};

export default VideoPlayer;
