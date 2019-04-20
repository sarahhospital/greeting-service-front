import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Жмякни кнопулю для приветствия..."
        };
        this.greet = this.greet.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.greet}>Поприветствовать</button>
                </div>
                <p>{this.state.message}</p>
            </div>
        );
    }

    greet() {
        console.log("Link was clicked");
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    this.setState({message: JSON.parse(request.responseText).message});
                } else {
                    console.log(`Request has failed with code ${request.status}`);
                }
            }
        };
        request.open("GET", "/greeter", true);
        request.send();
    }
}

export default App;
