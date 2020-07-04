import React, {ChangeEvent, useState} from 'react';
import s from './SettingsForCounter.module.css';
import ss from '../Counter/Counter.module.css';
import Btn from "../Btn/Btn";
import Setboard from "../SetBoard/Setboard";

function SettingsForCounter() {
    let [maxVal, setMaxVal] = useState<number>(1);
    let [minVal, setMinVal] = useState<number>(0);
    let [error, setError] = useState<string>("");

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxVal(+(e.currentTarget.value));
        setError("");
    }
    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinVal(+(e.currentTarget.value));
        setError("");
    }

    /*if (maxVal < 0 || minVal < 0 || maxVal <= minVal){
        setError("Incorrect value")
    }*/

    const onClickHandler = () => {
        console.log(maxVal)
        console.log(minVal)
    };

    return (
        <div className={ss.Counter}>
            <Setboard setMinValue={setMaxValue} setMaxValue={setMinValue} error={error}/>
            <Btn onClick={onClickHandler} isDisabled={error}>Set</Btn>
        </div>
    );
}

export default SettingsForCounter;
