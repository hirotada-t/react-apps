'use client';

import Board from "./components/Board";
import { useEffect, useState } from "react";
import { GameCell, GameResultArr } from "./types";
import { PLAYERS } from "./constant";

export default function Home() {
  const [game, setGame] = useState<GameResultArr>(Array(9).fill(null));
  const [history, setHistory] = useState<GameResultArr[]>([]);
  const [turn, setTurn] = useState(0);

  const gameProgress = (index: number) => {
    const newArr = game.slice();
    newArr[index] = turn % 2 as GameCell;
    setGame(newArr);
    setHistory([...history, newArr]);
  }
  const handleGamePlay = (index: number) => {
    setTurn(turn + 1);
    gameProgress(index);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10 sm:px-24">
      <div className="bg-white w-full rounded-lg text-black max-w-xl p-5 sm:flex sm:gap-10">
        <Board game={game} currPlayer={PLAYERS[turn % 2]} onPlay={handleGamePlay} />
        <div className="max-h-36 sm:max-h-none min-h-36 sm:min-h-none overflow-y-scroll">
          <div className="flex justify-center border-t sm:border-none py-3 sm:py-0">
            <ol className="list-decimal flex flex-col-reverse">
              {history.map((_, index) => (
                <li className="mb-1" key={index}>
                  <button onClick={() => { setGame(history[index]) }} className="bg-slate-200 rounded-md px-3 border border-black">
                    {index === 0 ? 'Go to game start' : `Go to move #${index}`}
                  </button>
                </li>
              ))
              }
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
