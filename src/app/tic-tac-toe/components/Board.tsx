import { GameResultArr } from "../types";
import Square from "./Square";

export default function Board({game}:Readonly<{game:GameResultArr}>) {
    return (
        <div>
            <p className="mb-3">
                Next player: {"X"}
            </p>
            <div className="grid grid-cols-3 font-bold w-fit mx-auto mb-3">
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
        </div>
    );
}