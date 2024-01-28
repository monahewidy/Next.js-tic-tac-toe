"use client";
import { useEffect, useState } from "react";
import Cell from "./components/cell";
// all possiblities of winning
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");

  // change in state and track state use useEffect
  // check score all changes on cells
  useEffect(() => {
    winningCombos.forEach((combo) => {
      // every means the rsult will return true if every cell in the cells array = circle & it gives boolean result true or false
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");
      if (circleWins) {
        setWinningMessage("Circle Win!");
      } else if (crossWins) {
        setWinningMessage("Cross Win!");
      }
    });
    // here useEffect depents on cells , if all cells are filled
  }, [cells]);

  useEffect(() => {
    // the idea of logic here are there are not empty all cells are full and there is not winner
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("Draw!");
    }
    // here useEffect depents on cells , if all cells are filled and there is winningMessage
  }, [cells, winningMessage]);
  return (
    <div className="container">
      <h1 className="heading">Tic-Tac-Toe</h1>
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
            // i need to add it in cell props to stop the clicking on cell if there is winner
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <div>{winningMessage}</div>
      {/* i want the turn message hidde if there is the winner  */}
      {!winningMessage && <div>{`It's now ${go} turn!`}</div>}
    </div>
  );
}
