import React from 'react';
import './Controls.css';

export default function Controls(props){
    return (
        <div className="controls-container">
            <button onClick={props.prev}>{`< Previous`}</button>
            <button onClick={props.next}>{`Next >`}</button>
        </div>
    )
};