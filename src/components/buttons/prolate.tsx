import React, { useState } from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    label: string,
    setNumbers: () => void
}
export function Prolate({ backgroundColor, label, setNumbers }: Props) {
  
    return (
        <div >
            <button
                className="prolate-button"
                style={{ backgroundColor }}
                onClick={setNumbers}
                >
                {label}
            </button>
        </div>
    );
}