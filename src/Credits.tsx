import React from "react";

const Credits: React.FC = () => {
    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h2>Integrantes </h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ fontSize: "18px", marginBottom: "10px" }}>Andrea Realpe</li>
                <li style={{ fontSize: "18px", marginBottom: "10px" }}>Daniel Ceron</li>
                <li style={{ fontSize: "18px", marginBottom: "10px" }}>Juan Ruiz</li>
            </ul>
        </div>
    );
};

export default Credits;