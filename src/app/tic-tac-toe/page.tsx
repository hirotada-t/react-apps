'use client';

import { Provider } from "react-redux";
import Board from "./components/Board";
import GameSettings from "./components/GameSettings";
import History from "./components/History";
import store from "@/store"

export default function Home() {

  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-center px-5 sm:px-10">
        <GameSettings />
        <div className="bg-white dark:bg-slate-800 w-full rounded-lg text-black dark:text-white max-w-xl sm:max-w-4xl p-5 sm:flex sm:gap-5 md:gap-10">
          <Board />
          <History />
        </div>
      </main>
    </Provider>
  );
}
