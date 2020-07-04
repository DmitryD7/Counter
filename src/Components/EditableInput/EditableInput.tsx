import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './EditableInput.module.css'

type EditableInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    title: string,
    error?: string
}

const EditableInput: React.FC<EditableInputType> = (
    {
        title,
        error,
        ...props
    }
) => {

    const cls = [s.Setboard];

    if (error) {
        cls.push(s.Error)
    };

    return (
        <div className={cls.join(' ')}>
            <span>{title}</span>
            <input
                {...props}
                type="number"
            />
        </div>
    )
};

export default EditableInput;