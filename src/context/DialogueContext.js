import React, { createContext, useState } from "react";

const initialDialogues = [
  { originalText: "Hello, how are you?", translatedText: "Hola, ¿cómo estás?" },
  {
    originalText: "I am fine, thank you.",
    translatedText: "Estoy bien, gracias.",
  },
  { originalText: "Goodbye!", translatedText: "¡Adiós!" },
];

export const DialogueContext = createContext();

export const DialogueProvider = ({ children }) => {
  const [dialogues, setDialogues] = useState(initialDialogues);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const setCurrentDialogue = (index) => {
    setCurrentDialogueIndex(index);
  };

  const updateDialogueText = (field, value) => {
    const updatedDialogues = dialogues.map((dialogue, index) =>
      index === currentDialogueIndex
        ? { ...dialogue, [field]: value }
        : dialogue
    );
    setDialogues(updatedDialogues);
  };

  return (
    <DialogueContext.Provider
      value={{
        dialogues,
        currentDialogueIndex,
        currentDialogue: dialogues[currentDialogueIndex],
        setCurrentDialogue,
        updateDialogueText,
      }}
    >
      {children}
    </DialogueContext.Provider>
  );
};
