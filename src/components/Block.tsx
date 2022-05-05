import * as React from 'react';
import {Dispatch} from 'react';
import './Block.scss'
import {TextField} from "./TextField";
import {Action, ActionType} from "../store/reducer";

export interface IBlock {
    value?: string;
    id: string;
    key?: string;
    dispatch?: Dispatch<Action>;
    focus?: boolean;
}

export function Block(props: IBlock) {
    const handlerUpdateContents = (key: string) => {
        if (!props.dispatch) return;

        if (key === 'Enter') props.dispatch({
            type: ActionType.ADD_BLOCK,
            payload: {id: props.id}
        })
        else if (key === 'Backspace') props.dispatch({
            type: ActionType.REMOVE_BLOCK,
            payload: {id: props.id}
        })
    }
    const handlerUpdateValue = (value: string) => {
        if (!props.dispatch) return;
        props.dispatch(
            {
                type: ActionType.HANDLER_UPDATE_VALUE,
                payload: {value: value, id: props.id}
            })
    }

    const toggleFocus = () => {
        if(!props.dispatch) return
        props.dispatch({
            type: ActionType.TOGGLE_FOCUS, payload: {id: props.id}
        })
    }
    return (
        <div>
            <TextField
                handlerUpdateContents={handlerUpdateContents}
                handlerUpdateValue={handlerUpdateValue}
                value={props.value ? props.value : ''}
                focus={props.focus? props.focus : false}
                toggleFocus={toggleFocus}
            />
        </div>
    );
}
