import { useSelector } from "react-redux";
import { PLAYERS } from "../constant";
import { GameResultArr } from "../types";
import Square from "./Square";
import { useEffect, useState } from "react";

export default function Board() {
  const [loading, setLoading] = useState(true);

  const game = useSelector((state: { ticTacToe: { game: GameResultArr } }) => state.ticTacToe.game);
  const turn = useSelector((state: { ticTacToe: { turn: number } }) => state.ticTacToe.turn);
  const boardSize = useSelector((state: { ticTacToe: { boardSize: number } }) => state.ticTacToe.boardSize);
  const currPlayer = PLAYERS[turn % 2];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <p className="mb-3">
        Next player: {currPlayer}
      </p>
      <div className={`grid grid-cols-${boardSize} min-h-80 font-bold mx-auto mb-3`}>
        {loading && <div>Loading...</div>}
        {[...Array(boardSize ** 2)].map((_, index) => {
          const cell = game[index] === null ? '' : PLAYERS[game[index]];
          if (loading) return;
          return (
            <Square cell={cell} key={index} />
          )
        })}
      </div>
    </div>
  );
}