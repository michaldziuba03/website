import React, { HTMLInputTypeAttribute } from "react";

export interface InputProps {
    name: string;
    label?: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute | 'textarea'
}

export const Input: React.FC<InputProps> = ({ name, label, type= 'text', required }) => (
    <div>
        <label className='flex flex-col'>
            { label }
            <InputOrTextArea name={name} type={type} />
        </label>
    </div>
);

const InputOrTextArea: React.FC<InputProps> = (props) => {
    if (props.type === 'textarea') {
        return (
            <textarea
                className='px-3 py-3 h-40 rounded text-black border resize-none border-2 border'
                name={props.name}
                required={props.required}
            />
        )
    }

    return (
        <input
            className='px-3 py-3 rounded text-black border-2 border'
            type={props.type}
            name={props.name}
            required={props.required}
        />
    )
}
