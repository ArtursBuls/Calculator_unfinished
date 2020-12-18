import React, { useState } from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    label: any,
    color: string,
    fontSize: string,
    setNumbers: (label:string) => void
}

export function Rounded({ backgroundColor, label, color, fontSize, setNumbers }: Props) {

    return (
        <div>
            <button
                className="rounded-button"
                style={{ backgroundColor, color, fontSize }}
                onClick={()=>setNumbers(label)}
               
            >
                {label}

            </button>
        </div>
    );
}
