import React from 'react';
import s from './Btn.module.css';

type ButtonsTypes = {
    onClick: () => void,
    isDisabled?: boolean
}

const Btn: React.FC<ButtonsTypes> = (
    {
        onClick,
        isDisabled,
        ...props
    }
) => {
    return <button
            className={s.Btn}
            disabled={isDisabled}
            onClick={onClick}
            {...props}
        />
}

export default Btn;