import React, { FC } from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    color: string,
    fontSize: string,
    setNumbers: () => void
}

export const Rounded: FC<Props> = ({
    backgroundColor,
    color,
    fontSize,
    setNumbers,
    children
}) => {

    return (
        <button
            className="rounded-button"
            style={{ backgroundColor, color, fontSize }}
            onClick={() => setNumbers()}
        >
            {children}
        </button>
    );
}
