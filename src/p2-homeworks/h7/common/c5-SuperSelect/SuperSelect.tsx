import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from '@mui/material'
import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => {
        return <option
            key={i}
            value={o}
            selected={restProps.value === o}> {o} </option>
    }) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let onChange = e.currentTarget.value
        if (onChangeOption) {
            onChangeOption(onChange)
        }
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
