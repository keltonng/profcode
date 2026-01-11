import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SerieModal() {
  const { currentSerie, setCurrentEpisode, setCurrentSerie } =
    useContext(AppContext);

  if (!currentSerie) return null;

  return (
    <div className="modal">
      <h2>{currentSerie.title}</h2>

      {currentSerie.episodes.map(ep => (
        <button
          key={ep.id}
          onClick={() => setCurrentEpisode(ep)}
        >
          ▶ {ep.title}
        </button>
      ))}

      <button onClick={() => setCurrentSerie(null)}>Fechar</button>
    </div>
  );
}
