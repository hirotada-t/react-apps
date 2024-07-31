export default function Board() {
    return (
        <div>
            Next player: {"X"}
            <div className="grid grid-cols-3 font-bold">
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
                <button className="w-10 h-10 border border-gray-400">X</button>
            </div>
        </div>
    );
}