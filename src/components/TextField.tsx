import * as React from 'react';
import {ChangeEvent, useEffect} from 'react';
import './TextField.scss'

interface Props {
    handlerUpdateContents: Function;
    value: string;
    handlerUpdateValue: Function;
    focus: boolean;
    toggleFocus: Function;
}

export function TextField(props: Props) {

    const ref = React.useRef<HTMLTextAreaElement>(null);

    function handlerResize(el: HTMLElement): void {
        el.style.height = '24px';
        el.style.height = el.scrollHeight + 'px'
    }

    useEffect(() => {
        if (!ref.current) return
        handlerResize(ref.current)
        if(props.focus) {
             ref.current.focus()
            props.toggleFocus()
        }
    })

    return (
        <textarea
            ref={ref}
            className="text-field"
            onInput={(event: ChangeEvent<HTMLTextAreaElement>) => handlerResize(event.target)}
            value={props.value}
            onKeyDown={(event) => {
                if ((event.key === 'Enter' && !event.shiftKey) || (event.key === 'Backspace' && props.value === '')) {
                    event.preventDefault();
                    props.handlerUpdateContents(event.key)
                }
            }}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                props.handlerUpdateValue(event.target.value)
            }}
        >
        </textarea>
    );
}
