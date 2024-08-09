import store from "@/app/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { gameEnd } from "../utils";
import { GameResultArr } from "../types";

type cellSize = {
  width: string;
  height: string;
} | {};

export default function Square({ className, index }: Readonly<{ className: string, index: number }>) {
  const [cellStyle, setCellStyle] = useState<cellSize>({});
  const [clicked, setClicked] = useState<boolean>(false);
  const [cell, setCell] = useState<string>('');

  const cellElm = useRef<HTMLButtonElement>(null);
  const boardSize = useSelector((state: { ticTacToe: { boardSize: number } }) => state.ticTacToe.boardSize);
  const game = useSelector((state: { ticTacToe: { game: GameResultArr } }) => state.ticTacToe.game);
  const history = useSelector((state: { ticTacToe: { history: number[] } }) => state.ticTacToe.history);
  const judgeCount = useSelector((state: { ticTacToe: { judgeCount: number } }) => state.ticTacToe.judgeCount);
  const turn = useSelector((state: { ticTacToe: { turn: number } }) => state.ticTacToe.turn);

  const onCellClick = (index: number) => {
    setClicked(true);
    setCell(turn % 2 === 0 ? 'X' : 'O');
    store.dispatch({ type: 'ticTacToe/updateGame', payload: index });
  }

  useEffect(() => {
    const width = '100%';
    const height = cellElm.current?.clientWidth + 'px';
    const fontSize = (cellElm.current?.clientWidth || 0) / 2 + 'px';
    setCellStyle({ width, height, fontSize });
    setClicked(false);
    setCell('');
  }, [boardSize]);

  useEffect(() => {
    setClicked(game[index] !== null);

    if (game[index] === null) setCell('');
    else setCell(game[index] === 0 ? 'X' : 'O');
    if ((history[history.length - 1] === index) && gameEnd(game, index, judgeCount)) {
      alert('Game Over');
    }

  }, [game, index, history, judgeCount]);

  return (
    <button
      onClick={() => onCellClick(index)}
      style={cellStyle}
      disabled={clicked}
      ref={cellElm}
      className={className}
    >
      {cell}
    </button>
  )
}