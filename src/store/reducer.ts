// import { useReducer } from "react";
// import {AppState} from "./state";
//
// type Reducer<State, Action> = (state: State, action: Action) => State;
// type State<>
// export const [state, dispatch] = useReducer(reducer, initialState)

import {StateContext} from "./state";
import {IBlock} from "../components/Block";
import {Reducer} from "react";

export enum ActionType {
    ADD_BLOCK = 'Add block',
    REMOVE_BLOCK = 'Remove block',
}

export type Action =
    | { type: ActionType.ADD_BLOCK, payload: IBlock }
    | { type: ActionType.REMOVE_BLOCK, payload: IBlock };

export const reducer: Reducer<any, any> = (state: StateContext, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_BLOCK: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload.id)
            return {
                ...state,
                content: state.content.splice(
                    indexEvent + 1,
                    0,
                    {
                        value: 'someBlock',
                        id: `${indexEvent}`
                    })
            }
        }
        case ActionType.REMOVE_BLOCK: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload.id)
            return { ...state, content: state.content.splice(indexEvent, 1) }
        }
        default: new Error('Not among actions!')
    }
}
