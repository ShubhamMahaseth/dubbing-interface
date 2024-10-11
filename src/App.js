import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import AudioRecorder from './components/AudioRecorder';
import Dialogue from './components/Dialogue';
import { DialogueProvider } from './context/DialogueContext';

const App = () => {
  return (
    <DialogueProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">Dubbing Interface</h1>
        <VideoPlayer />
        <AudioRecorder />
        <Dialogue />
      </div>
    </DialogueProvider>
  );
};

export default App;
