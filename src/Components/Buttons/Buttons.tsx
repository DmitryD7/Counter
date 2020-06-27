import React from 'react';
import s from './Buttons.module.css';

type ButtonsTypes = {
    increase: () => void,
    reset: () => void,
    numbers: number
}

function Buttons(props:ButtonsTypes) {

    return (
        <div className={s.Buttons}>
            <button
                className={s.Button}
                onClick={props.increase}
                disabled={props.numbers === 5}
            >
                Increase
            </button>

            <button
                className={s.Button}
                onClick={props.reset}
            >
                Reset
            </button>
        </div>
    );
}

export default Buttons;