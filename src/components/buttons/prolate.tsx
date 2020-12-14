import React from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    label: string
}
export function Prolate({ backgroundColor, label }: Props) {
    return (
        <div >
            <button
                className="prolate-button"
                style={{ backgroundColor }}>
                {label}
            </button>
        </div>
    );
}