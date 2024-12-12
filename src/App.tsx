import { useState } from "react";
import Credits from "./Credits";
import ButtonGroup from "./ButtonGroup";

function App() {
  const [time, setTime] = useState(5);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);

  const generateAnimation = async () => {
    try {
      const response = await fetch("http://localhost:5000/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      } else {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setOutputUrl(url);
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100vw",
      maxHeight: "100vh",
      overflow: "hidden",
    }}>
      <div style={{
        display: "flex",
        width: "40%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h1>Ondas trabajo final</h1>
        <Credits />
        <ButtonGroup />
      </div>
      {outputUrl && (
        <div>
          <h2>Resultado</h2>
          <video src={outputUrl} controls width="600"></video>
        </div>
      )}
    </div>
  );
}

export default App;