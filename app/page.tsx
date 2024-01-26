"use client";
import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");

  console.log(cells);
  return (
    <div className="container">
      <div className="gameFrame">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            go={go}
            setGo={setGo}
            id={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
          />
        ))}
      </div>
    </div>
  );
}
