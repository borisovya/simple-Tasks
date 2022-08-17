import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number)=> void //
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div className={s.affairBlock}>
            <div className={s.affairs}>Affair {props.affair._id} - {props.affair.name} - priority: {props.affair.priority}</div>
            <button onClick={deleteCallback} className={s.deleteButton}>X</button>
        </div>
    )
}

export default Affair
