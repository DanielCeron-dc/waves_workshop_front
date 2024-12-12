import React from "react";

const Credits: React.FC = () => {
    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h2>Integrantes</h2>
            <ul
                style={{
                    listStyleType: "none",
                    padding: 0,
                    display: "flex", // Coloca los elementos en fila
                    justifyContent: "center", // Centra los elementos horizontalmente
                    gap: "20px", // Espacio entre los nombres
                }}
            >
                <li style={{ fontSize: "18px" }}>Andrea Realpe</li>
                <li style={{ fontSize: "18px" }}>Daniel Ceron</li>
                <li style={{ fontSize: "18px" }}>Juan Ruiz</li>
            </ul>
        </div>
    );
};


export default Credits;