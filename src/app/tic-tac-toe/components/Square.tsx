import store from "@/app/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

type cellSize = {
  width: string;
  height: string;
} | {};

export default function Square({ className, index }: Readonly<{className:string, index:number }>) {
  const [cellStyle, setCellStyle] = useState<cellSize>({});
  const [disabled, setDisabled] = useState<boolean>(false);
  const [cell, setCell] = useState<string>('');

  const cellElm = useRef<HTMLButtonElement>(null);
  const turn = useSelector((state: { ticTacToe: { turn: number } }) => state.ticTacToe.turn);
  const boardSize = useSelector((state: { ticTacToe: { boardSize: number } }) => state.ticTacToe.boardSize);
  const game = useSelector((state: { ticTacToe: { game: number[] } }) => state.ticTacToe.game);

  const onCellClick = (index:number) => {
    setDisabled(true);
    setCell(turn % 2 === 0 ? 'X' : 'O');
    store.dispatch({ type: 'ticTacToe/updateGame', payload: index });
  }

  useEffect(() => {
    const width = '100%';
    const height = cellElm.current?.clientWidth + 'px';
    const fontSize = (cellElm.current?.clientWidth || 0) / 2 + 'px';
    setCellStyle({ width, height, fontSize });
    setDisabled(false);
    setCell('');
  }, [boardSize]);

  useEffect(() => {
    setDisabled(game[index] !== null);

    if (game[index] === null) setCell('');
    else setCell(game[index] === 0 ? 'X' : 'O');
    
  }, [game, index]);

  return (
    <button
      onClick={()=>onCellClick(index)}
      style={cellStyle}
      disabled={disabled}
      ref={cellElm}
      className={className}
    >
      {cell}
    </button>
  )
}