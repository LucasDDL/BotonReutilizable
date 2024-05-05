import React, { ComponentProps, useId } from 'react'

export type InputProps = ComponentProps<'input'> & {
    label?: String,
    error?: String,
    info?: String,
    inputSize?: 'sm' | 'md' | 'lg'
}



export default function Input({ label, error, info, inputSize, ...props }: InputProps) {
    const id = useId()

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className={`input input-${inputSize}`} id={id} {...props}/>
            <span>{info}</span> 
            <span>{error}</span>
        </>
    )
}
