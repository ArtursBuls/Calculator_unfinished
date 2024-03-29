import React from 'react';
import './moon.css';

export function Moon() {
    return (
        <div >
            <svg
                width="25px"
                height="25px"
                viewBox="0 0 16 16"
                className="moon"
                fill="rgba(0, 0, 0, 0.3)"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z">
                </path>
            </svg>
        </div>
    );
}