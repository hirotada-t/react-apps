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
    <div className="sm:w-1/3 max-h-36 sm:max-h-[60vh] min-h-36 sm:min-h-none overflow-y-auto bg-slate-50 rounded-lg">
      <div className="flex justify-center border-t sm:border-none py-3 sm:p-5">
        <ol className="list-decimal flex flex-col-reverse">
          {history.map((_, index) => (
            <li className="mb-1" key={index}>
              <button onClick={() => { jumpTo(index) }} className="bg-slate-200 rounded-md px-3 border border-black">
                {index === 0 ? 'Go to game start' : `Go to move #${index}`}
              </button>
            </li>
          ))
          }
        </ol>
      </div>
    </div>
  );
}