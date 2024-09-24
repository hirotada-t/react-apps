import { useSelector } from "react-redux";
import { GameResultArr } from "../types";
import store from "@/app/store";

export default function History() {
  const history = useSelector((state: { ticTacToe: { history: GameResultArr[] } }) => state.ticTacToe.history);
  const game = useSelector((state: { ticTacToe: { game: GameResultArr } }) => state.ticTacToe.game);

  const jumpTo = (step: number) => {
    store.dispatch({ type: 'ticTacToe/jumpTo', payload: step });
  };

  return (
    <div className="w-full sm:max-w-48 sm:px-4 max-h-36 sm:max-h-[60vh] min-h-36 overflow-y-auto bg-slate-50 dark:bg-slate-500 rounded-lg">
      <div className="flex justify-center border-t sm:border-none py-3 ">
        <ol className="flex flex-col-reverse">
          {history.map((_, index) => (
            <li className="mb-1" key={index}>
              <button onClick={() => { jumpTo(index) }} className="bg-slate-600 rounded-md px-2 border border-black min-w-36">
                {index === 0 ? 'Go to game start' : `Go to move #${index+1}`}
              </button>
            </li>
          ))
          }
        </ol>
      </div>
    </div>
  );
}