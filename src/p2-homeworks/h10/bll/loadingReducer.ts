

// type User = {
//     id: number
//     name: string
// }

const initState = {
    isLoading: false,
    // activeSatte: 0,
    // users: [{id: 1, name: 'Ivan'}] as Array<User>
}

export type isLoadingStateType = typeof initState

export const loadingReducer = (state = initState, action: loadingACType): isLoadingStateType => {
    switch (action.type) {
        case 'TOGGLE-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

type loadingACType = {
    type: 'TOGGLE-LOADING',
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): loadingACType => {
    return {type: 'TOGGLE-LOADING', isLoading: isLoading}
}