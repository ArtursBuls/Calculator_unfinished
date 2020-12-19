import React, { FC } from 'react';
import '../buttons/buttons.css';

type Props = {
    label: string,
    isFocused: boolean
}
export const Rectangle: FC<Props> = ({ label, isFocused }) => {
    return (
        <button
            className="rectangle-button"
            autoFocus={isFocused}
        >
            {label}
        </button>
    );
}