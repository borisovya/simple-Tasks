import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material'
import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, SyntheticEvent} from 'react'


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: React.SyntheticEvent) => {
        const target = e.currentTarget as HTMLInputElement;
        let onChange = target.value;
        if (onChangeOption) {
            onChangeOption(onChange)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (

        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value={o}
                                  control={<Radio/>}
                                  label={o} key={i}
                                  name={name}
                                  checked={o === value}
                                  onChange={onChangeCallback}
                                   />
            </RadioGroup>
        </FormControl>


    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
