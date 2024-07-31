import Button from "./Button";

export default function Square(cell: Readonly<{ cell: string }>) {
    const disabled = cell.cell !== '';
    return (
        <Button
            onClick={() => { alert('ss')}}
            className="w-10 h-10 border border-gray-400"
            disabled={disabled}
        >
            {cell.cell}
        </Button>
    )
}