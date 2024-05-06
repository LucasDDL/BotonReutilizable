import React, { ComponentProps, ReactNode, useId } from 'react'

export type InputProps = ComponentProps<'input'> & {
    label?: String,
    error?: String,
    info?: String,
    inputSize?: 'sm' | 'md' | 'lg',
    startIcon?: ReactNode,
    endIcon?: ReactNode
}

export default function Input({ startIcon, endIcon, label, error, info, inputSize, ...props }: InputProps) {
    const id = useId()

    return (
        <div className={`input input-${inputSize}`}>
            <label className='text-lbl text-neutral-65' htmlFor={id}>{label}</label>
            <div className='field'>
                {startIcon}
                <input id={id} {...props} />
                {endIcon}
            </div>
            <span>{info}</span>
            <span>{error}</span>
        </div>
    )
}
