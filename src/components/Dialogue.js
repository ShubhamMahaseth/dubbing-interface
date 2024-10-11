import React, { useContext } from 'react';
import { DialogueContext } from '../context/DialogueContext';

const Dialogue = () => {
  const { dialogues, currentDialogueIndex, setCurrentDialogue, updateDialogueText } = useContext(DialogueContext);
  
  const handleNext = () => {
    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogue(currentDialogueIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentDialogueIndex > 0) {
      setCurrentDialogue(currentDialogueIndex - 1);
    }
  };

  const handleTextChange = (e) => {
    updateDialogueText(e.target.name, e.target.value);
  };

  return (
    <div className="mt-4">
      <div className="mb-4">
        <label>Original Text:</label>
        <input
          type="text"
          name="originalText"
          className="border p-2 w-full"
          value={dialogues[currentDialogueIndex].originalText}
          onChange={handleTextChange}
        />
      </div>
      <div className="mb-4">
        <label>Translated Text:</label>
        <input
          type="text"
          name="translatedText"
          className="border p-2 w-full"
          value={dialogues[currentDialogueIndex].translatedText}
          onChange={handleTextChange}
        />
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrevious} className="p-2 bg-gray-500 text-white">Previous</button>
        <button onClick={handleNext} className="p-2 bg-blue-500 text-white">Next</button>
      </div>
    </div>
  );
};

export default Dialogue;
