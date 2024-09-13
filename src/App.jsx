// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import characters from "./characters";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>sasa</h1>
      <div className="flex">
        {characters.map((c) => (
          <Card key={c.id} src={c.src}>
            {c.name}
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
