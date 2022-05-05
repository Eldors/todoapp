import * as React from 'react';
import {useStateContext} from "../store/state";
import {Block} from "./Block";
import {Fragment} from "react";

export const Page = () => {
    const {state, dispatch} = useStateContext()
    console.log("=>(Page.tsx:9) state", state);
    return (
        <Fragment>
            {state.title}
            <pre>
                {JSON.stringify(state, null, 4)}
            </pre>
            {
                state.content.map(value => <Block
                    key={value.id}
                    dispatch={dispatch}
                    id={value.id}
                    value={value.value}
                    focus={value.focus}
                />)
            }

        </Fragment>
    );
};
