import React, { FC } from 'react';
import '../buttons/buttons.css';

type Props = {
    label: string,
}
export const Rectangle: FC<Props> = ({ label }) => {
    return (
        <button
            className="rectangle-button"
            autoFocus>
            {label}
        </button>
    );
}