//------------------------------------------------

import './_Button.scss';

const DEFAULT_VARIANT = 'default';

export default function Button({
    onClick,
    variant = DEFAULT_VARIANT,
    disabled = false,
    href = '',
    target = '',
    download,
    children,
}) {
    // Determine if the element should be an anchor element
    const isAnchorElement = !!href;

    if (isAnchorElement) {
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
