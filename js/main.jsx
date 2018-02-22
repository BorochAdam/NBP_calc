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
            selectedDay: this.props.todayDate.toISOString().split('T')[0],
            currToChange: 'PLN',
            currToChangeValue: 1,
            currUnit: " "
        }
    }

    changeEggs = (event)=>{
        this.setState({
            currUnit : event.target.options[event.target.selectedIndex].text,
            currToChangeValue : event.target.value*this.state.currToChangeValue
        })
    }

    changeFormElement = (event)=>{
        //podstawienie wartości valuePln z obiektu tradeCurrencies jako wartość do kursu
        let newValuePln = undefined;
        let newUnit = undefined;
        for (let i =0; i < this.props.tradeCurrencies.length; i++){
            this.props.tradeCurrencies[i].name === event.target.value &&
            (newValuePln = this.props.tradeCurrencies[i].valuePln);

            this.props.tradeCurrencies[i].name === event.target.value &&
            (newUnit = this.props.tradeCurrencies[i].unit);
        }


        this.setState({
            [event.target.id] : event.target.value,
            currToChange: event.target.value,
            currToChangeValue : newValuePln,
            currUnit : newUnit
        })
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
                    tradeCurrencies={this.props.tradeCurrencies}
                    changeFormElement={this.changeFormElement}
                    currToChange={this.state.currToChange}
                    changeEggs={this.changeEggs}
                />
                <ExchangeValue
                    changeInput = {this.changeInput}
                    amount={this.state.amount}
                    option={this.state.option}
                    radioChange = {this.radioChange}
                    currToChange = {this.state.currToChange}
                    currUnit={this.state.currUnit}
                />
                <p>Stan na: {this.state.selectedDay}</p>
                <table>
                    <Theader option={this.state.option}/>
                    <Tbody
                        currToChangeValue = {this.state.currToChangeValue}
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

