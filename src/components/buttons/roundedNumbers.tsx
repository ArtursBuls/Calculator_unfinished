import React, { useState } from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    label: string,
    color: string,
    fontSize: string,
    setNumbers: (label:string) => void
}

export function RoundedNumbers({ backgroundColor, label, color, fontSize, setNumbers }: Props) {

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