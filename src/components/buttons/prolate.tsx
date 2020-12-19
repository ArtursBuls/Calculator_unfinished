import React, { FC } from 'react';
import '../buttons/buttons.css';

type Props = {
    backgroundColor: string,
    label: string,
    setNumbers: () => void
}
export const Prolate: FC<Props> = ({ backgroundColor, label, setNumbers }) => {

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