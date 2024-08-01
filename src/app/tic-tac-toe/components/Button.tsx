export default function Button({
    className,
    onClick,
    children,
    disabled
}: Readonly<{
    className: string,
    onClick: (value:any) => void,
    children: string,
    disabled?: boolean
}>) {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled !== undefined ? disabled : true}
        >
            {children}
        </button>
    );
}