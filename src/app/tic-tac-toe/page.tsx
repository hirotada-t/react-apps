'use client';

import { Provider } from "react-redux";
import Board from "./components/Board";
import GameSettings from "./components/GameSettings";
import store from "../store";
import History from "./components/History";

export default function Home() {

  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-center px-5 sm:px-24">
        <GameSettings />
        <div className="bg-white w-full rounded-lg text-black max-w-xl sm:max-w-4xl py-5 sm:flex sm:gap-10">
          <Board />
          <History />
        </div>
      </main>
    </Provider>
  );
}
