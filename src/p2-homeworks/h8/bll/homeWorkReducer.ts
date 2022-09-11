import {UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a,b)=>a.age-b.age)
            }
            if (action.payload === 'down') {
                return [...state].sort((a,b)=>b.age-a.age)
            }
            return state
        }

        case 'check': {
            return [...state].filter(el=>el.age>=18)
        }
        default: return state
    }
}

type ActionType = sortUpACType | sortDownACType | checkACType

type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    }as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    }as const
}

type checkACType = ReturnType<typeof checkAC>
export const checkAC = () => {
    return {
        type: 'check',
        payload: 18
    }as const
}
