import store from "@/app/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

type cellSize = {
  width: string;
  height: string;
} | {};

export default function Square({ className }: Readonly<{className:string }>) {
  const [cellStyle, setCellStyle] = useState<cellSize>({});
  const [disabled, setDisabled] = useState<boolean>(false);
  const [cell, setCell] = useState<string>('');

  const cellElm = useRef<HTMLButtonElement>(null);
  const turn = useSelector((state: { ticTacToe: { turn: number } }) => state.ticTacToe.turn);

  const onCellClick = () => {
    setDisabled(true);
    setCell(turn % 2 === 0 ? 'X' : 'O');
    store.dispatch({ type: 'ticTacToe/updateGame', payload: cell });
  }

  useEffect(() => {
    const width = '100%';
    const height = cellElm.current?.clientWidth + 'px';
    const fontSize = (cellElm.current?.clientWidth || 0) / 2 + 'px';
    setCellStyle({ width, height, fontSize });
  }, []);

  return (
    <button
      onClick={onCellClick}
      style={cellStyle}
      disabled={disabled}
      ref={cellElm}
      className={className}
    >
      {cell}
    </button>
  )
}