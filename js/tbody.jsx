import React from 'react';
import Trow from './trow.jsx';

export default class Tbody extends React.Component {
    render() {
        let rows = [];
        this.props.currencies.forEach((item, index) => {
           rows.push(<Trow option={this.props.option} amount={this.props.amount} currencyToShow={item} key={index}/>);
        });
        return (
            <tbody>
            {rows}
            </tbody>
        );
    }
}
