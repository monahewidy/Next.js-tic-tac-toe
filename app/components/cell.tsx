import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
};
const Cell = ({ go, setGo, id, cells, setCells, cell }: CellProps) => {
  const handleClick = (e) => {
    const notTaken = !cells[id];
    if (notTaken) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (cellToChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };
  return (
    <div className="box" onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "circle" ? "0" : "X") : ""}</div>
    </div>
  );
};
export default Cell;
