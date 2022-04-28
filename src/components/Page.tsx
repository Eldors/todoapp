import * as React from 'react';
import {useStateContext} from "../store/state";
import {Block} from "./Block";

export const Page = () => {
    const {state} = useStateContext()
    return (
        <div>
            {
                state.content.map(value => <Block
                    key={value.id}
                />)
            }
        </div>
    );
};
