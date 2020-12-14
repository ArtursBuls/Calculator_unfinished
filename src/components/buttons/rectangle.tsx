import React from 'react';
import '../buttons/buttons.css';

type Props = {
    label: string,
}
export function Rectangle({ label }: Props) {
    return (
        <div>
            <button
                className="rectangle-button"
                autoFocus>
                {label}
            </button>
        </div>
    );
}