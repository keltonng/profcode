import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [modules, setModules] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/modules", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        setModules(res.data.modules);
        setVideos(res.data.videos);
      });
  }, []);

  return (
    <div>
      {modules.map(m => (
        <div key={m._id}>
          <h2>{m.title}</h2>
          {videos
            .filter(v => v.moduleId === m._id)
            .map(v => (
              <div key={v._id}>▶ {v.title}</div>
            ))}
        </div>
      ))}
    </div>
  );
}
