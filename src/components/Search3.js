import React from 'react';
export default class Search3 extends React.Component {
    keyPress = (e) => {
        if (e.keyCode === 13) {
            const value = e.target.value;
            alert(`The value is ${value}`);
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.keyPress} type="text" placeholder="username" name="username"></input>

            </div>
        )
    }
}