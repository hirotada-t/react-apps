import store from "@/app/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { gameEnd } from "../utils";
import { GameResultArr } from "../types";

const cellStyle = {
  width: '100%',
  aspectRatio: '1 / 1'
};

export default function Square({ className, index }: Readonly<{ className: string, index: number }>) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [cell, setCell] = useState<string>('');

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
      className={className}
    >
      {cell}
    </button>
  )
}