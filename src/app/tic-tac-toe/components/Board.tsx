import { useSelector } from "react-redux";
import { PLAYERS } from "../constant";
import { GameCell, GameResultArr } from "../types";
import Square from "./Square";
import { useEffect, useState } from "react";

export default function Board() {
  const [loading, setLoading] = useState(true);
  const [gameArea, setGameArea] = useState<GameCell[][]>([]);

  const game = useSelector((state: { ticTacToe: { game: GameResultArr } }) => state.ticTacToe.game);
  const turn = useSelector((state: { ticTacToe: { turn: number } }) => state.ticTacToe.turn);
  const boardSize = useSelector((state: { ticTacToe: { boardSize: number } }) => state.ticTacToe.boardSize);
  const currPlayer = PLAYERS[turn % 2];

  useEffect(() => {
    const array = game.flatMap((_, i, arr) => (i % boardSize === 0 ? [arr.slice(i, i + boardSize)] : []));
    setGameArea(array);
    setLoading(false);
  }, [boardSize, game]);

  return (
    <div className="sm:w-2/3">
      <p className="mb-3">
        Next player: {currPlayer}
      </p>
      <div className={`min-h-80 sm:min-h-64 font-bold mx-auto mb-3 border border-gray-400`}>
        {loading && <div>Loading...</div>}
        {gameArea.map((cols, i) => {
          const border_b = i === boardSize - 1 ? '' : 'border-b';
          return (
            <div className={`${border_b} border-gray-400 grid grid-cols-${boardSize}`} key={i}>
              {cols.map((_, j) => {
                const border_r = j === boardSize - 1 ? '' : 'border-r';
                return <Square key={j} className={`${border_r} border-gray-400 w-full`} index={i * boardSize + j} />
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}