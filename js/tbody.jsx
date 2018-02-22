import React from 'react';
import Trow from './trow.jsx';

export default class Tbody extends React.Component {
    render() {
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
