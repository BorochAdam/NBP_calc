import React from 'react';
import ReactDOM from 'react-dom';

class HelloName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'xd',
            surname: 'dx'
        };
    }

    // changeName = (event)=>{
    //   console.log(event.target.value)
    //   this.setState({
    //     name: event.target.value
    //   })
    // }
    //
    // changeSurname = (event)=>{
    //   console.log(event.target.value)
    //   this.setState({
    //     surname: event.target.value
    //   })
    // }

    changeInput = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    };

    render() {
        return (
            <div>
                <h1>{this.state.name} {this.state.surname}</h1>
                <input id="name" type="text" onChange={this.changeInput} value={this.state.name}/>
                <input id="surname" type="text" onChange={this.changeInput} value={this.state.surname}/>
            </div>
        )
    }
}


class TextField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message : '',
            isHappy : false,
            number : undefined
        }
    }
    changeFormElement = (event)=>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    //checkbox musi mieć osobną metodę
    changeCheckbox = (event)=>{
        this.setState({
            [event.target.id] : event.target.checked
        });
    };
    render() {
        return(
            <div>
                    <textarea
                        onChange={this.changeFormElement}
                        value={this.state.message}
                        id="message" >
                    </textarea>

                <p>{this.state.message.length}</p>

                <div>
                    <label htmlFor="">Happy :)</label>
                    <input type="checkbox"
                           id="isHappy"
                           checked={this.state.isHappy}
                           onChange={this.changeCheckbox}
                    />
                </div>

                <div>
                    <select id="number"
                            onChange={this.changeFormElement}>
                        <option value={1}>Jeden</option>
                        <option value={2}>Dwa</option>
                        <option value={5}>Pięć</option>
                    </select>
                    <p>{this.state.number}</p>
                </div>
            </div>
        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <HelloName/>
                <hr />
                <TextField />
            </div>
                );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});