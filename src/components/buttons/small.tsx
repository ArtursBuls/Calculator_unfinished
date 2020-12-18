import React from 'react';
import '../buttons/buttons.css';

type Props = {
    label: any
}
export function Small({ label }: Props) {
    return (
        <div>
            <button
                className="rounded-button-small"
            >
                {label}
            </button>
        </div>
    );
}
