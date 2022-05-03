import {StateContext} from "./state";
import {nanoid} from "nanoid"
import {Reducer} from "react";

export enum ActionType {
    ADD_BLOCK = 'Add block',
    REMOVE_BLOCK = 'Remove block'
}

export type Payload = {
    id?: string;
    value?: string;
}

export type Action =
    | { type: ActionType.ADD_BLOCK, payload?: Payload }
    | { type: ActionType.REMOVE_BLOCK, payload?: Payload }

export const reducer: Reducer<StateContext, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.ADD_BLOCK: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload?.id)
            const newContent = [...state.content]
            newContent.splice(indexEvent + 1, 0, {id: nanoid()})
            return {
                ...state,
                content: newContent
            }
        }
        case ActionType.REMOVE_BLOCK: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload?.id)
            const newContent = [...state.content]
            newContent.splice(indexEvent, 1)
            return {
                ...state,
                content: newContent
            }
        }
        default:
            new Error('Not among actions!')
            return state;
    }
}

