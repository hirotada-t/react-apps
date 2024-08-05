
export default function Square({ cell, onCellClick }: Readonly<{ cell: string, onCellClick: () => void }>) {
    const disabled = cell !== '';
    return (
        <button
            onClick={onCellClick}
            className="w-10 h-10 border border-gray-400"
            disabled={disabled}
        >
            {cell}
        </button>
    )
}