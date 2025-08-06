import React from 'react';

export default function Button({ buttonName, buttonColor, handleOnClick }) {
    return (
        <button className={`btn btn-${buttonColor} w-100`} onClick={handleOnClick}>
            {buttonName}
        </button>
    );
}
