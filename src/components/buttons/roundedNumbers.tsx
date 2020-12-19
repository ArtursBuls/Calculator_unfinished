import React, { FC } from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    label: string,
    color: string,
    fontSize: string,
    setNumbers: (label: string) => void
}

export const RoundedNumbers: FC<Props> = ({
    backgroundColor,
    label,
    color,
    fontSize,
    setNumbers
}) => {

    return (
        <button
            className="rounded-button"
            style={{ backgroundColor, color, fontSize }}
            onClick={() => setNumbers(label)}
        >
            {label}
        </button>
    );
}