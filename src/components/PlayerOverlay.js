import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function PlayerOverlay() {
  const {
    currentEpisode,
    setCurrentEpisode,
    progress,
    setProgress
  } = useContext(AppContext);

  if (!currentEpisode) return null;

  return (
    <div className="overlay">
      <video
        src={currentEpisode.video}
        autoPlay
        controls
        onTimeUpdate={e => {
          const time = e.target.currentTime;
          setProgress(prev => {
            const updated = { ...prev, [currentEpisode.id]: time };
            localStorage.setItem("progress", JSON.stringify(updated));
            return updated;
          });
        }}
      />
      <button onClick={() => setCurrentEpisode(null)}>Fechar</button>
    </div>
  );
}
