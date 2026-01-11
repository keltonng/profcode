import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Card({ serie }) {
  const { setCurrentSerie } = useContext(AppContext);

  return (
    <img
      src={serie.cover}
      alt={serie.title}
      onClick={() => setCurrentSerie(serie)}
      style={{ cursor: "pointer" }}
    />
  );
}
