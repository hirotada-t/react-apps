export default function Button({
    className,
    onClick,
    children,
    disabled
}: Readonly<{
    className: string,
    onClick: () => void,
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