import { PLAYERS } from "../constant";
import { GameResultArr } from "../types";
import Square from "./Square";

export default function Board(
    { game, onPlay }: Readonly<{ game: GameResultArr, onPlay: (index:number) => void }>
) {
    return (
        <div>
            <pre>{game}</pre>
            <pre>{game.length}</pre>
            <p className="mb-3">
                Next player: {"X"}
            </p>
            <div className="grid grid-cols-3 font-bold w-fit mx-auto mb-3">
                {[...Array(9)].map((_, index) => {
                    const cell = PLAYERS[game[index]] || '';
                    return (
                        <Square cell={cell} key={index} onCellClick={()=>onPlay(index)} />
                    )
                })}
            </div>
        </div>
    );
}