import React, { FC,useState } from 'react';
import '../inputs/userInput.css';

type Props = {
 
    value:string
}
export function UserInput () {

    const [inputText, setInputText] = useState('');
    console.log(inputText)

    return (
        <div >
            <input
                type="text"
                value={inputText}
                placeholder='Show User Input'
                className='input'
                onChange={(e) => setInputText(e.target.value)}
            />
       
        </div>
    );
}