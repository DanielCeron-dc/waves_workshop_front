import React, { useState } from "react";

const SlideBar = ({ setOutputUrl } : any) => {
  const [time, setTime] = useState(Number); // Tiempo configurado por el usuario
  const [frecuency, setFrecuency] = useState(Number);
  const [time_wave, setTimeWave] = useState(Number);
  const [range_x, setRangeX] = useState(Number);


  const generateAnimation1 = async () => {
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
        setOutputUrl(url); // Llamamos al callback para enviar el resultado al componente principal
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  const generateAnimation2 = async () => {
    try {
      const response = await fetch("http://localhost:5000/vibration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ frecuency }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      } else {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setOutputUrl(url); // Llamamos al callback para enviar el resultado al componente principal
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  const generateAnimation3 = async () => {
    try {
      const response = await fetch("http://localhost:5000/wave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time_wave, range_x }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      } else {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setOutputUrl(url); // Llamamos al callback para enviar el resultado al componente principal
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  const generateAnimation4 = async () => {
    try {
      const response = await fetch("http://localhost:5000/doppler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      } else {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setOutputUrl(url); // Llamamos al callback para enviar el resultado al componente principal
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        backgroundColor: "#202020",
        padding: "10px",
        color: "#fff",
        overflowY: "auto",
      }}
    >
      <h2>Scripts</h2>

      {/* Script 1 */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#333",
          borderRadius: "8px",
        }}
      >
        <h3>Taller 1. Punto 5</h3>
        <div style={{ marginBottom: "10px" }}>
          <h5>Tiempo: </h5>
          <input
            type="number"
            defaultValue={0}
            onChange={(e) => setTime(Number(e.target.value))}
            style={{
              width: "95%",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #555",
              backgroundColor: "#444",
              color: "#fff",
            }}
          />
        </div>
        <button
          onClick={generateAnimation1}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run
        </button>
      </div>
      {/* Script 2 */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#333",
          borderRadius: "8px",
        }}
      >
        <h3>Taller 1. Punto 6</h3>
        <div style={{ marginBottom: "10px" }}>
          <h5>Frecuencia (Hz): </h5>
          <input
            type="number"
            defaultValue={0}
            onChange={(e) => setFrecuency(Number(e.target.value))}
            style={{
              width: "95%",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #555",
              backgroundColor: "#444",
              color: "#fff",
            }}
          />
        </div>
        <button
          onClick={generateAnimation2}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run
        </button>
      </div>
      {/* Script 3 */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#333",
          borderRadius: "8px",
        }}
      >
        <h3>Taller 2. Punto 1</h3>
        <div style={{ marginBottom: "10px" }}>
          <h5>Tiempo (s): </h5>
          <input
            type="number"
            defaultValue={0}
            onChange={(e) => setTimeWave(Number(e.target.value))}
            style={{
              width: "95%",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #555",
              backgroundColor: "#444",
              color: "#fff",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <h5>Rango en X (m): </h5>
          <input
            type="number"
            defaultValue={0}
            onChange={(e) => setRangeX(Number(e.target.value))}
            style={{
              width: "95%",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #555",
              backgroundColor: "#444",
              color: "#fff",
            }}
          />
        </div>
        
        <button
          onClick={generateAnimation3}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run
        </button>
      </div>

      {/* Script 4 */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#333",
          borderRadius: "8px",
        }}
      >
        <h3>Taller 2. Punto 7</h3>
        <div style={{ marginBottom: "10px" }}>
          <h5>Simulación: </h5>
        </div>

        <button
          onClick={generateAnimation4}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default SlideBar;
