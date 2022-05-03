import * as React from 'react';
import {ChangeEvent} from 'react';
import './TextField.scss'

interface Props {
    test: Function;
}

export function TextField(props: Props) {

    function handlerResize(event: ChangeEvent<HTMLTextAreaElement>): void {
        event.target.style.height = '24px';
        event.target.style.height = event.target.scrollHeight + 'px'
    }

    return (
        <textarea
            className="text-field"
            onInput={handlerResize}
            onKeyDown={(event) => {
                if ((event.key === 'Enter' && !event.shiftKey) || event.key === 'Backspace') {
                    event.preventDefault();
                    props.test(event.key)
                }
            }}>
        </textarea>
    );
}
