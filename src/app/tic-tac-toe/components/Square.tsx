import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { gameEnd } from "../utils";
import { updateGame } from "@/store/tic-tac-toe/slice";

const cellStyle = {
  width: '100%',
  aspectRatio: '1 / 1'
};

export default function Square({ className, index }: Readonly<{ className: string, index: number }>) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [cell, setCell] = useState<string>('');
  const dispatch = useAppDispatch();

  const game = useAppSelector((state) => state.ticTacToe.game)
  const history = useAppSelector((state) => state.ticTacToe.history)
  const judgeCount = useAppSelector((state) => state.ticTacToe.judgeCount)
  const turn = useAppSelector((state) => state.ticTacToe.turn)

  const onCellClick = (index: number) => {
    setClicked(true);
    setCell(turn % 2 === 0 ? 'X' : 'O');
    dispatch(updateGame(index))
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