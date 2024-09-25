import { PLAYERS } from "../constant";
import { GameCell } from "@/types/tic-tac-toe";
import Square from "./Square";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useAppSelector } from "@/store";

const initGameArea = (boardSize: number): GameCell[][] => {
  const arr: GameCell[][] = [];
  for (let i = 0; i < boardSize; i++) {
    arr.push(new Array(boardSize).fill(null));
  }
  return arr;
}

export default function Board() {
  const [loading, setLoading] = useState(true);
  const [gameArea, setGameArea] = useState<GameCell[][]>(initGameArea(3));
  const [fontSize, setFontSize] = useState({});

  const boardSize = useAppSelector((state) => state.ticTacToe.boardSize)
  const game = useAppSelector((state) => state.ticTacToe.game)
  const turn = useAppSelector((state) => state.ticTacToe.turn)

  const boardElm = useRef<HTMLDivElement>(null);
  const currPlayer = PLAYERS[turn % 2];

  useEffect(() => {
    const array = initGameArea(boardSize);
    const fontSize = (boardElm.current?.clientWidth || 0) / (2 * boardSize) + 'px';

    setFontSize({ fontSize });
    setGameArea(array);
    setLoading(false);
  }, [boardSize, game]);

  return (
    <div className="sm:w-2/3">
      <p className="mb-3">
        Next player: {currPlayer}
      </p>
      <div className={`relative min-h-80 sm:min-h-64 font-bold mx-auto mb-3 border border-gray-400`} ref={boardElm} style={fontSize}>
        {loading &&
          <div className="absolute top-0 w-full h-full bg-gray-200 bg-opacity-40 flex flex-col justify-center items-center">
            準備中...
            <Spinner size="large" />
          </div>
        }
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