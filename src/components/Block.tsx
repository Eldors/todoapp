import * as React from 'react';
import './Block.scss'
import {TextField} from "./TextField";

export interface IBlock {
    value?: string;
    id: string;
    key?: string;
}

export function Block() {
    return (
        <div>
            <TextField />
        </div>
    );
}
