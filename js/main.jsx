import React from 'react';
import Theader from './theader.jsx';
import Tfooter from './tfooter.jsx';
import Tbody from './tbody.jsx';
import ExchangeValue from './exchangeValue.jsx';
import SelectDay from './selectDay.jsx';


export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            amount: '',
            option: "buy",
            selectedDay: this.props.todayDate.toISOString().split('T')[0]
        }
    }

    changeInput = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    };

    radioChange=(event)=>{
        this.setState({
            option:  event.target.value
        })
    };

    render() {
        return (
            <div>
                <h1>
                    Kurs względem złotego NBP
                </h1>
                <SelectDay
                    changeInput={this.changeInput}
                    selectedDay={this.state.selectedDay}
                />
                <ExchangeValue
                    changeInput = {this.changeInput}
                    amount={this.state.amount}
                    option={this.state.option}
                    radioChange = {this.radioChange}
                />
                <p>Stan na: {this.state.selectedDay}</p>
                <table>
                    <Theader option={this.state.option}/>
                    <Tbody
                        option={this.state.option}
                        amount={this.state.amount}
                        currencies={this.props.currencies}
                        selectedDay = {this.state.selectedDay}
                    />
                    <Tfooter/>
                </table>

            </div>

        );
    }
}

