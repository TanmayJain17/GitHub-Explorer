import React from 'react';

export default function RepoCard(props) {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <a href={props.repoData.html_url} target="_blank">
                    <strong>{props.repoData.name} &nbsp;</strong></a>
                    <small>{props.repoData.visibility}</small>
                    <br></br>
                    <small><i><b>Language: </b></i><span>{props.repoData.language} &nbsp;</span></small>
                    <small><i><b>Updated On: </b></i><span>{props.repoData.updated_at}</span></small>
                    <br></br>
                    
                </div>
            </div>
        </div>
    )

}