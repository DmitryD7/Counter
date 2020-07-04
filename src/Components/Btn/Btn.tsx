import React from 'react';
import s from './Btn.module.css';

type ButtonsTypes = {
    onClick: () => void,
    isDisabled?: string|boolean
}

const Btn: React.FC<ButtonsTypes> = (
    {
        onClick,
        isDisabled,
        ...props
    }
) => {
    if (isDisabled){
    }
    return <button
            className={s.Btn}
            disabled={(isDisabled)?true:false}
            onClick={onClick}
            {...props}
        />
}

export default Btn;