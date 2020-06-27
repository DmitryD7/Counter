import React, {useState} from 'react';
import s from './Counter.module.css';
import Scoreboard from "../Scoreboard/Scoreboard";
import Buttons from "../Buttons/Buttons";

function Counter() {
    let [numbers, setNumbers] = useState<number>(0);

    const increaseHandler = () => {
        setNumbers(++numbers);

    };

    const resetHandler = () => {
        setNumbers(0);
    };

    return (
        <div className={s.Counter}>
            <Scoreboard numbers={numbers}/>
            <Buttons increase={increaseHandler} reset={resetHandler} numbers={numbers}/>
        </div>
    );
}

export default Counter;
