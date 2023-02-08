import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>