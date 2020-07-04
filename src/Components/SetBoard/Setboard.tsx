import React, {ChangeEvent, useState} from 'react';
import s from './Setboard.module.css';
import EditableInput from "../EditableInput/EditableInput";

type SetboardType = {
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
}

function Setboard (props: SetboardType) {

    return (
        <div className={s.Setboard}>
            <EditableInput title={"Max"} onChange={props.setMaxValue} error={props.error}/>
            <EditableInput title={"Start"} onChange={props.setMinValue} error={props.error}/>
        </div>
    );
}

export default Setboard;