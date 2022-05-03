import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {IBlock} from "../components/Block";
import {Action, reducer} from "./reducer";

export interface StateContext {
    title: string;
    content: Array<IBlock>;
}

export interface Store {
    state: StateContext;
    dispatch?: Dispatch<Action>
}

export interface Children {
    children: React.ReactNode;
}

const data: Array<IBlock> = [
    {
        id: '1520eb3a-60a5-47f1-9066-96142a121cf6',
        value: 'firstBlock',
    },
    {
        id: '76e2290a-b29f-4df0-b792-493c51376316',
        value: 'secondBlock',
    }
]

const defaultState: StateContext = {title: 'firstPage', content: data}
const myContext = createContext<Store>({state: defaultState})

export const useStateContext = () => useContext(myContext)

export const StateProvider = ({children}: Children) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return (
        <myContext.Provider value={{state, dispatch}} children={children}/>
    )
}
