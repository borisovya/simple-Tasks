export type ThemeType = 'dark'| 'red'| 'some'

export type StateType = {
    currentTheme: ThemeType
}


const initState:StateType = {
    currentTheme: 'some'
};

export const themeReducer = (state = initState, action: changeThemeType): StateType => {

    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, currentTheme: action.currentValue};
        }
        default: return state;
    }
};


type changeThemeType = ReturnType<typeof changeThemeC>
export const changeThemeC = (currentValue: ThemeType) => {
    return {type: 'CHANGE-THEME', currentValue} as const
};