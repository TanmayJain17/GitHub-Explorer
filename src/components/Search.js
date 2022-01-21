import React from 'react';

export default class Search extends React.Component {

    constructor(props) {
        super()
        this.state = {
            username: ''
        }
    }

    handleChange = (e) => {

        this.setState({
            username: e.target.value
        })
    }
    render() {
        const { username } = this.state
        return (
            <div className="bg-dark">
                {/*  */}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <div className="row">
                                <div className="col-9">
                                    <input
                                    className="form-control" 
                                    value={username} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter Username" />
                                </div>
                                <div className="col-3">
                                    <button onClick={()=>this.props.fetchData(username)} className="btn btn-large btn-success">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        )
    }
}