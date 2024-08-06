import store from "@/app/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

type cellSize = {
  width: string;
  height: string;
} | {};

export default function Square({ cell }: Readonly<{ cell: string }>) {
  const [cellSize, setCellSize] = useState<cellSize>({});

  const disabled = cell !== '';
  const boardSize = useSelector((state: { ticTacToe: { boardSize: number } }) => state.ticTacToe.boardSize);
  const cellElm = useRef<HTMLButtonElement>(null);

  const onCellClick = () => {
    store.dispatch({ type: 'ticTacToe/updateGame', payload: cell });
  }

  useEffect(() => {
    const width = '100%';
    const height = cellElm.current?.clientWidth + 'px';
    setCellSize({ width, height });
  }, []);

  return (
    <button
      onClick={onCellClick}
      className="border border-gray-400"
      style={cellSize}
      disabled={disabled}
      ref={cellElm}
    >
      {cell}
    </button>
  )
}