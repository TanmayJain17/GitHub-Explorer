import React from 'react';

export default class Search2 extends React.Component {
     inputRef =  React.createRef()
     handleClick = ()=>{
        const value=this.inputRef.current.value
        alert(`Your Value is ${value}`)
     }
    render(){
        return(
            <div>
                <input ref={this.inputRef} name="username" type="text" placeholder="username"></input>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}