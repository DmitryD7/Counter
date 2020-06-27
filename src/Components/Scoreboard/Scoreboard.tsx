import React from 'react';
import s from './Scoreboard.module.css';

type ScoreboardTypes = {
    numbers: number
};

function Scoreboard(props: ScoreboardTypes) {

    const cls = [s.Scoreboard];

    if (props.numbers === 5) {
        cls.push(s.ScoreboardBoundary)
    };

    return (
        <div className={cls.join(' ')}>
            {props.numbers}
        </div>
    );
}

export default Scoreboard;