import * as React from 'react';
import {Dispatch} from 'react';
import './Block.scss'
import {TextField} from "./TextField";
import {Action, ActionType} from "../store/reducer";

export interface IBlock {
    value?: string;
    id: string;
    key?: string;
    dispatch?: Dispatch<Action>
}

export function Block(props: IBlock) {

    const t = (key: string) => {
        if (!props.dispatch) return;

        if (key === 'Enter') props.dispatch({type: ActionType.ADD_BLOCK, payload: {id: props.id}})
        else if (key === 'Backspace') props.dispatch({type: ActionType.REMOVE_BLOCK, payload: {id: props.id}})
    }
    return (
        <div>
            <TextField test={t}/>
        </div>

    );
}
