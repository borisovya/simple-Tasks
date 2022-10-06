import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, StateType, ThemeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state=>state.theme.currentTheme)

    let value = useSelector<AppStoreType, ThemeType>(state => state.theme.currentTheme)

    const dispatch = useDispatch()

    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeThemeC(theme))

    }


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <SuperRadio name={'radio'}
                            options={themes}
                            value={value}
                            onChangeOption={onChangeCallback}/>
            </span>


            <hr/>
        </div>
    );
}

export default HW12;
