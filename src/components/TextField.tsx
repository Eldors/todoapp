import * as React from 'react';
import {ChangeEvent} from 'react';
import './TextField.scss'

export function TextField() {

    function handlerResize(event: ChangeEvent<HTMLTextAreaElement>): void {
        event.target.style.height = '24px';
        event.target.style.height = event.target.scrollHeight + 'px'
    }

    return (
        <textarea
            className="text-field"
            onInput={handlerResize}
            onKeyDown={(event) => {
                if(event.key === 'Enter' && !event.shiftKey) {
                    console.log("-> hi");
                }
            }}>
        </textarea>
    );
}
