import { useState, useEffect } from 'react';

import './_Button.scss'

//------------------------------------------------

function Button({ label, onClick, variant, disabled }) {

    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;