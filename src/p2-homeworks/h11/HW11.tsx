import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './hw11.module.css'

function HW11() {


    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)



    let setValueOne = (value: number) => {
        setValue1(value)
    }

    let setValueTwo = (value: [number, number]) => {
        setValue2(value[1])
        setValue1(value[0])
    }

    return (
        <div className={s.container}>
            <hr/>
            homeworks 11

            <div className={s.singleSliderContainer}>
                <div className={s.value}>{value1}</div>
                <SuperRange
                    onChangeRange = {setValueOne}
                    value={value1}
                />
            </div>

            <div className={s.sliderContainer}>
                <div className={s.value}>{value1}</div>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={setValueTwo}
                />
                <div className={s.value}>{value2}</div>
            </div>

            <hr/>

        </div>
    )
}

export default HW11
