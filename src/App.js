import { AppProvider } from "./context/AppContext";
import Card from "./components/Card";
import SerieModal from "./components/SerieModal";
import PlayerOverlay from "./components/PlayerOverlay";
import series from "./data/series";

export default function App() {
  return (
    <AppProvider>
      <h2>Séries</h2>

      <div className="row">
        {series.map(serie => (
          <Card key={serie.id} serie={serie} />
        ))}
      </div>

      <SerieModal />
      <PlayerOverlay />
    </AppProvider>
  );
}
