import React from 'react';
import './Card.css';

export default function Card(props){
    const mappedUser = props.filteredUser.map(user => (
        <div>
            <div className="page-count-container">
                <h1>{user.id}/25</h1>
            </div>
        </div>
    ))

    return (
        <div className="card-container">
            {mappedUser}
        </div>
    )
};