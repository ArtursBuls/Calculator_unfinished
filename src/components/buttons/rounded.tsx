import React from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    label: any,
    color: string,
    fontSize: string
}
export function Rounded({ backgroundColor, label, color, fontSize }: Props) {
    return (
        <div>
            <button
                className="rounded-button"
                style={{ backgroundColor, color, fontSize }}>
                {label}
            </button>
        </div>
    );
}
