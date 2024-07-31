'use client';

import Image from "next/image";
import Board from "./components/Board";
import { useState } from "react";
import Button from "./components/Button";

export default function Home() {
  const [history, setHistory] = useState<string[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white w-11/12 rounded-lg text-black p-4 flex gap-10">
        <Board />
        <div className="">
          <ol className="list-decimal	">
            <li>
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
