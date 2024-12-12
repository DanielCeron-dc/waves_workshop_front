import React, { useState } from "react";

const ButtonGroup: React.FC = () => {
    const [arg1, setArg1] = useState<string>("");
    const [arg2, setArg2] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const handleClick = async (script: string) => {
        if (!arg1 || !arg2) {
            alert("Please provide both arguments.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/run-script", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ script, arg1, arg2 }),
            });

            const data = await response.json();
            if (response.ok) {
                setOutput(data.output);
            } else {
                setOutput(`Error: ${data.error}`);
            }
        } catch (error) {
            setOutput(`Error: ${error}`);
        }
    };

    const scripts = [
        { id: 1, name: "Script 1" },
        { id: 2, name: "Script 2" },
        { id: 3, name: "Script 3" },
        { id: 4, name: "Script 4" },
        { id: 5, name: "Script 5" },
    ];

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Scripts</h2>
            <div style={{
                width: "45vw",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                position: "relative",
                justifyContent: "space-evenly",
            }}>
                {scripts.map((script) => (
                    <div
                        key={script.id}
                        style={{
                            marginBottom: "20px",
                            border: "1px solid #ccc",
                            width: "45%",
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                    >
                        <h3>{script.name}</h3>
                        <input
                            type="text"
                            placeholder="Argument 1"
                            value={arg1}
                            onChange={(e) => setArg1(e.target.value)}
                            style={{
                                marginRight: "10px",
                                padding: "5px",
                                border: "1px solid #ccc",
                                borderRadius: "3px",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Argument 2"
                            value={arg2}
                            onChange={(e) => setArg2(e.target.value)}
                            style={{
                                padding: "5px",
                                border: "1px solid #ccc",
                                borderRadius: "3px",
                            }}
                        />
                        <button
                            onClick={() => handleClick(script.name)}
                            style={{
                                marginTop: "10px",
                                marginLeft: "10px",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                                cursor: "pointer",
                            }}
                        >
                            Run
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ButtonGroup;