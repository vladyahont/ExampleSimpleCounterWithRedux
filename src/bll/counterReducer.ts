import {Dispatch} from "redux";
import {AppStateType} from "./store";


type InitialStateType = typeof initialState
export const initialState = {
    value: 0
}
type IncValueType = ReturnType<typeof incValue>
type setValueType = ReturnType<typeof setValue>
type ActionType = IncValueType | setValueType
export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE": {
            return {...state, value: state.value+1}
        }
        case "SET-VALUE": {
            return {...state, value: action.value}
        }
        default: return state
    }

};

export const incValue = () => {
    return {
        type: 'INC-VALUE',
    } as const
}
export const setValue = (value: number) => {
    return {
        type: 'SET-VALUE',
        value
    } as const
}
export const incValueTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
    const value = getState().counter.value
    localStorage.setItem('counterValue', JSON.stringify(value+1))
    dispatch(incValue())
}

export const setValueFromLSTC = () => (dispatch: Dispatch) => {
    const valueFLS = localStorage.getItem('counterValue')
    if (valueFLS) {
        dispatch(setValue(JSON.parse(valueFLS)))
    }
}
