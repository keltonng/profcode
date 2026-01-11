import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentSerie, setCurrentSerie] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [progress, setProgress] = useState(
    JSON.parse(localStorage.getItem("progress")) || {}
  );

  return (
    <AppContext.Provider
      value={{
        currentSerie,
        setCurrentSerie,
        currentEpisode,
        setCurrentEpisode,
        progress,
        setProgress
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
