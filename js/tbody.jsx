import React from 'react';
import Trow from './trow.jsx';

export default class Tbody extends React.Component {

    render() {
        // sprawdzenie, czy wartość, którą wprowadzamy nie jest ujemna
        if (this.props.amount<0) {
            this.props.checkNumber()
        }
        let rows = [];
        this.props.currencies.forEach((item, index) => {
           rows.push(<Trow
                       currToChangeValue={this.props.currToChangeValue}
                       option={this.props.option}
                       amount={this.props.amount}
                       currencyToShow={item}
                       key={index}
                       selectedDay = {this.props.selectedDay}
                    />
           );
        });
        return (
            <tbody>
            {rows}
            </tbody>
        );
    }
}
