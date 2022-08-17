import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.main}>
            <div className={s.linkItem}>
                <NavLink to='/pre-junior'
                         className={(navData) => navData.isActive ? s.active : ""}> Pre-Junior </NavLink>
            </div>
            <div className={s.linkItem}>
                <NavLink to='/junior'
                         className={(navData) => navData.isActive ? s.active : ""}> Junior </NavLink>
            </div>
            <div className={s.linkItem}>
                <NavLink to='/junior-plus'
                         className={(navData) => navData.isActive ? s.active : ""}> Junior+ </NavLink>
            </div>
        </div>

    )
}

export default Header
