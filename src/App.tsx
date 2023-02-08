import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueTC, setValueFromLSTC} from "./bll/counterReducer";

export const App = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()
    const onClickInc = () => {
        // @ts-ignore
        dispatch(incValueTC())
    }
    useEffect(() => {
        // @ts-ignore
        dispatch(setValueFromLSTC())
    }, [])


    return (
        <>
            <div style={{margin: "30% 50%"}}>
                <h1>{value}</h1>
                <button onClick={onClickInc}>inc</button>
            </div>
        </>
    );
};

export default App;
