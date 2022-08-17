import React, {ChangeEvent, MouseEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string //
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    error: string
    totalUsers: number //
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = !name ? s.error : s.greenBorder



        return (
            <div className={s.main}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <span>{error}</span>
                <button onClick={addUser} className={s.button}>+</button>
                <span>{totalUsers}</span>
            </div>
        )
    }


export default Greeting
