import { useSelector } from "react-redux";
import { GameResultArr } from "../types";

export default function History() {
  const history = useSelector((state: { ticTacToe: { history: GameResultArr[] } }) => state.ticTacToe.history);

  return (
    <div className="max-h-36 sm:max-h-none min-h-36 sm:min-h-none overflow-y-auto bg-slate-100 rounded-lg">
      <div className="flex justify-center border-t sm:border-none py-3 sm:py-0">
        <ol className="list-decimal flex flex-col-reverse">
          {history.map((_, index) => (
            <li className="mb-1" key={index}>
              <button onClick={() => { }} className="bg-slate-200 rounded-md px-3 border border-black">
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