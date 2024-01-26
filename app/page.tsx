"use client";
import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <div className="container">
      <div className="gameFrame">
        {cells.map((cell, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
}
