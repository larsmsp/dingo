import React, { useState } from 'react';
import './Cell.css';

type CellProps = {
  text: string,
  marked: boolean
}

const Cell = ({ text, marked= false }: CellProps) => {
  const [cellState, setCellState] = useState({
    text,
    marked
  });

  const toggleMarked = () => {
    setCellState({
          text: cellState.text, marked: !cellState.marked
        })
  };

  return (
      <div className="Cell" onClick={toggleMarked}>{text}
        {cellState.marked ? <div className="marked"></div> : ''}
      </div>
  )};
export default Cell;
