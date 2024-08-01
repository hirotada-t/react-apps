import Button from "./Button";

export default function Square({cell, onCellClick}: Readonly<{ cell: string, onCellClick:(index:number)=>void }>) {
    const disabled = cell !== '';
    return (
        <Button
            onClick={onCellClick}
            className="w-10 h-10 border border-gray-400"
            disabled={disabled}
        >
            {cell}
        </Button>
    )
}