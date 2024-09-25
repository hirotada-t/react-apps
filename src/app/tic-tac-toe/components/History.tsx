import { useAppDispatch, useAppSelector } from "@/store"
import { jumpTo } from "@/store/tic-tac-toe/slice"

export default function History() {
  const history = useAppSelector((state) => state.ticTacToe.history)
  const dispatch = useAppDispatch();

  return (
    <div className="w-full sm:max-w-48 sm:px-4 max-h-36 sm:max-h-[60vh] min-h-36 overflow-y-auto bg-slate-50 dark:bg-slate-500 rounded-lg">
      <div className="flex justify-center border-t sm:border-none py-3 ">
        <ol className="flex flex-col-reverse">
          {history.map((_, index:number) => (
            <li className="mb-1" key={index}>
              <button onClick={() => { dispatch(jumpTo(index)) }} className="bg-slate-600 rounded-md px-2 border border-black min-w-36">
                {index === 0 ? 'Go to game start' : `Go to move #${index + 1}`}
              </button>
            </li>
          ))
          }
        </ol>
      </div>
    </div>
  );
}