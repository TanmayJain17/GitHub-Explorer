import React from 'react';
export default function UserCard(props){
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.userDetails.avatar_url}/>
                <h1>{props.userDetails.name}</h1>
            </div>
        </div>
    )
}