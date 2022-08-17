import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number)=> void //
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div>
            Affair {props.affair._id} - {props.affair.name} - priority: {props.affair.priority}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
