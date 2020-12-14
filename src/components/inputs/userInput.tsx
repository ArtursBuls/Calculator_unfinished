import React from 'react';
import '../inputs/userInput.css';


export function UserInput() {
    return (
        <div >
            <input
                type="text"
                placeholder='Show User Input'
                className='input'
            />
        </div>
    );
}