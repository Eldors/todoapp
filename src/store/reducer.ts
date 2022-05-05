import {StateContext} from "./state";
import {nanoid} from "nanoid"
import {Reducer} from "react";

export enum ActionType {
    ADD_BLOCK = 'Add block',
    REMOVE_BLOCK = 'Remove block',
    HANDLER_UPDATE_VALUE = 'Handler update block',
    TOGGLE_FOCUS = 'Toggle focus',
}

export type Payload = {
    id?: string;
    value?: string;
}

export type Action =
    | { type: ActionType.ADD_BLOCK, payload: Payload }
    | { type: ActionType.REMOVE_BLOCK, payload: Payload }
    | { type: ActionType.HANDLER_UPDATE_VALUE, payload: Payload }
    | { type: ActionType.TOGGLE_FOCUS, payload: Payload }

export const reducer: Reducer<StateContext, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.ADD_BLOCK: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload.id)
            const newContent = [...state.content]
            newContent.splice(indexEvent + 1, 0, {id: nanoid(), focus: true})
            return {
                ...state,
                content: newContent
            }
        }
        case ActionType.REMOVE_BLOCK: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload.id)
            const newContent = [...state.content]
            newContent.splice(indexEvent, 1)
            newContent[indexEvent - 1].focus = true;
            return {
                ...state,
                content: newContent
            }
        }
        case ActionType.HANDLER_UPDATE_VALUE: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload.id)
            const newContent = [...state.content]
            newContent[indexEvent].value = action.payload.value;
            return {
                ...state,
                content: newContent
            }
        }
        case ActionType.TOGGLE_FOCUS: {
            const indexEvent = state.content.findIndex((i) => i.id === action.payload.id)
            const newContent = [...state.content];
            newContent[indexEvent].focus = false;
            return {
                ...state,
                content: newContent
            }
        }
        default:
            new Error('Not among actions!')
            return state
    }
}

