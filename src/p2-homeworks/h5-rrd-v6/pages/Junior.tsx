import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from '../../h9/HW9';
import HW10 from "../../h10/HW10";
import s from './GeneralStyle.module.css'

function Junior() {
    return (
        <div className={s.main}>
            <HW7 />
            <HW8 />
            <HW9 />
            <HW10 />
        </div>
    )
}

export default Junior
