import React, { useState } from 'react';
import If from './If';
import { Redirect } from 'react-router-dom';

// props.history

function History(props) {
    const [redirect, setRedirect] = useState(false);

    function onRerun(request) {
        props.onRerun(request);
        setRedirect(true);
    }

    let historyElements = [];
    for (let i = 0; i < props.history.length; i++) {
        if (props.size === 'light') {
            historyElements.push(
                <div key={i}>
                    <span className='url'>{props.history[i].url}</span>
                    <span className='method'>{props.history[i].method}</span>
                    <button
                        onClick={(e) => {
                            onRerun(props.history[i]);
                        }}
                    >
                        Rerun
                    </button>
                </div>,
            );
        } else {
            historyElements.push(
                <div key={i}>
                    <span className='url'>{props.history[i].url}</span>
                    <span className='method'>{props.history[i].method}</span>
                    <button
                        onClick={(e) => {
                            onRerun(props.history[i]);
                        }}
                    >
                        Rerun
                    </button>
                    <div>
                        <span>{props.history[i].body}</span>
                        <span>{props.history[i].headers}</span>
                    </div>
                </div>,
            );
        }
    }

    return (
        <>
            <If condition={redirect}>
                <Redirect push to='/' />
            </If>
            <If condition={!redirect}>
                <div className={props.className} style={props.style}>
                    {historyElements}
                </div>
            </If>
        </>
    );
}

export default History;
