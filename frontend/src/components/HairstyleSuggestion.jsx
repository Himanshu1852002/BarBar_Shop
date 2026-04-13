import React, { useState } from "react";

function HairstyleSuggestion() {

  const [faceShape, setFaceShape] = useState("");
  const [result, setResult] = useState("");

  const getSuggestion = async () => {

    const res = await fetch("/api/ai/suggest-hairstyle", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        faceShape
      })

    });

    const data = await res.json();

    setResult(data.suggestion);

  };

  return (

    <div>

      <h2>Find Best Hairstyle</h2>

      <input
        placeholder="Enter face shape"
        onChange={(e) => setFaceShape(e.target.value)}
      />

      <button onClick={getSuggestion}>
        Suggest
      </button>

      <p>{result}</p>

    </div>

  );

}

export default HairstyleSuggestion;