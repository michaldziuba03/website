import React, { HTMLInputTypeAttribute } from "react";
import classNames from "classnames";

export interface InputProps {
    name: string;
    label?: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute | 'textarea'
}

export const Input: React.FC<InputProps> = ({ name, label, type= 'text', required }) => (
    <div>
        <label className='flex flex-col'>
            <span className='font-medium'>{ label }</span>
            <InputOrTextArea name={name} type={type} required={required} />
        </label>
    </div>
);

const inputStyle = 'px-3 py-3 mt-2 rounded text-black border-2 border border-gray-300 dark:border-gray-600 dark:bg-body-dark text-heading focus:outline-none focus:border-primary focus:ring-primary transition-colors dark:focus:outline-none dark:focus:border-primary dark:focus:ring-primary'

const InputOrTextArea: React.FC<InputProps> = (props) => {
    if (props.type === 'textarea') {
        return (
            <textarea
                className={classNames(inputStyle, 'resize-none h-64')}
                name={props.name}
                required={props.required}
            />
        )
    }

    return (
        <input
            className={inputStyle}
            type={props.type}
            name={props.name}
            required={props.required}
        />
    )
}
