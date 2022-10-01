import {Box, Slider} from '@mui/material'
import React from 'react'


type SuperDoubleRangePropsType = {

    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
}

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
         ...restProps
    }
) => {


        const handleChange = (event: Event, newVal: number | number[]) => {

            if (onChangeRange) {
                onChangeRange(newVal as [number, number])
            }
        };


        return (
            <Box sx={{width: 200}}>
                <Slider
                    getAriaLabel={() => 'Range'}
                    value={restProps.value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        );
}


export default SuperDoubleRange
