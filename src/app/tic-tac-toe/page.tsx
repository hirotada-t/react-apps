'use client';

import Board from "./components/Board";
import { useState } from "react";
import Button from "./components/Button";
import { GameResultArr } from "./types";

export default function Home() {
  const [game, setGame] = useState<GameResultArr>([1, 0, 1, 0, 0]);
  const [history, setHistory] = useState<GameResultArr[]>([]);

  const handleGamePlay = (index: number) => {
    alert(`You clicked on cell ${index}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10 sm:px-24">
      <div className="bg-white w-full rounded-lg text-black max-w-xl p-5 sm:flex sm:gap-10">
        <Board game={game} onPlay={ handleGamePlay } />
        <div className="flex justify-center border-t sm:border-none py-3 sm:py-0">
          <ol className="list-decimal">
            <li className="mb-1">
              <Button onClick={() => { }} className="bg-slate-200 rounded-md px-3 border border-black">
                Go to game start
              </Button>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
