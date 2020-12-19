import React, { FC } from 'react';
import '../buttons/buttons.css';

export const Small: FC = ({ children }) => {
    return (
        <button
            className="rounded-button-small"
        >
            {children}
        </button>
    );
}
