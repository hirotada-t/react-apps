export default function Button({ className, onClick, children }: Readonly<{ className: string, onClick: () => void, children: string }>) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}