import './_Button.scss';

//------------------------------------------------

export default function Button({
    onClick,
    variant = 'default',
    disabled = false,
    href = '',
    target = '',
    download,
    children,
}) {
    const isLink = !!href;

    if (isLink) {
        return (
            <a
                className={`btn btn-${variant}`}
                href={href}
                target={target} // Open in a new tab if target = "_blank"
                rel={target === '_blank' ? 'noopener noreferrer' : undefined} // for security purposes in new tabs
                download={download} // if downloading a file
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
