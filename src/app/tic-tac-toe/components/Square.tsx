import store from "@/app/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

type cellSize = {
  width: string;
  height: string;
} | {};

export default function Square({ cell, className }: Readonly<{ cell: string, className:string }>) {
  const [cellSize, setCellSize] = useState<cellSize>({});

  const disabled = cell !== '';
  const cellElm = useRef<HTMLButtonElement>(null);

  const onCellClick = () => {
    store.dispatch({ type: 'ticTacToe/updateGame', payload: cell });
  }

  useEffect(() => {
    console.log(cellElm.current?.clientWidth);
    const width = '100%';
    const height = cellElm.current?.clientWidth + 'px';
    setCellSize({ width, height });
  }, []);

  return (
    <button
      onClick={onCellClick}
      style={cellSize}
      disabled={disabled}
      ref={cellElm}
      className={className}
    >
      {cell}
    </button>
  )
}