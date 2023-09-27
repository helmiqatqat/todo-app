import { createContext, useState } from "react";

export const SettingsContext = createContext()

export default function SettingsProvider(props) {
  const [offset, setOffset] = useState(3);
  const [isCompleted, setIsCompleted] = useState(false);
  const [difficulty, setDifficulty] = useState(4);
  return (
    <SettingsContext.Provider value={{offset: [offset, setOffset], isCompleted: [isCompleted, setIsCompleted], difficulty: [difficulty, setDifficulty]}}>
      {props.children}
    </SettingsContext.Provider>
  )
  /*
  Display three items.
  Hide completed items using a boolean.
  Define “difficulty” as a default sort word to optionally use in the stretch goal.
  */
}