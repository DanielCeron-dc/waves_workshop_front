import { useState } from "react";
import Credits from "./Credits";
import SlideBar from "./SliderBar";

function App() {
  const [outputUrl, setOutputUrl] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        minHeight: "100vh", // Permite que el contenido crezca dinámicamente
        overflowY: "auto", // Habilita el scroll vertical
      }}
    >
      {/* SlideBar a la izquierda */}
      <SlideBar setOutputUrl={setOutputUrl} />

      {/* Contenedor principal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1, // Ocupa el espacio restante
          padding: "10px",
        }}
      >
        <h1>Ondas Trabajo Final</h1>
        <Credits />

        {/* Contenedor para el video generado */}
        {outputUrl && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <h2>Resultado</h2>
            <video src={outputUrl} controls width="600"></video>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
