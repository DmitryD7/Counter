import React from 'react';
import s from './Buttons.module.css';
import Btn from "../Btn/Btn";

type ButtonsTypes = {
    increase: () => void,
    reset: () => void,
    numbers: number
}

function Buttons(props:ButtonsTypes) {

    const onClick = () => {
        alert("Hey")
    };

    return (
        <div className={s.Buttons}>
            <Btn onClick={props.increase} isDisabled={props.numbers === 5}>Increase</Btn>
            <Btn onClick={props.reset}>Reset</Btn>
        </div>
    );
}

export default Buttons;