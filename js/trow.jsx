import React from 'react';

export default class Trow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currencyToCountBid : '',
            currencyToCountAsk : ''
        }
        this.newFetch(this.props.currencyToShow, this.props.selectedDay)
    }
    componentWillReceiveProps(nextProps){
        this.newFetch(this.props.currencyToShow, nextProps.selectedDay)
    }
    newFetch(element, newDay) {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/c/${element}/${newDay}/?format=json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('err');
                }
            })

            .then(data => {
                this.setState({
                    currencyToCountBid: data.rates[0].bid,
                    currencyToCountAsk: data.rates[0].ask
                });

            });
    }

    render() {
        //obliczanie ilości waluty wymienionej na złotówki
        let amountCounted;

        if (this.props.option==="buy"){
            amountCounted = Math.round(100*this.props.amount*this.props.currToChangeValue/this.state.currencyToCountBid)/100;
        }
        else if (this.props.option==="sell"){
            amountCounted = Math.round(100*this.props.amount*this.props.currToChangeValue/this.state.currencyToCountAsk)/100;
        }


           return (
            <tr>
                <td>{this.props.currencyToShow}</td>
                <td>{Math.round(10000*this.state.currencyToCountBid)/10000}</td>
                <td>{Math.round(10000*this.state.currencyToCountAsk)/10000}</td>
                <td>{this.props.amount==='' ? "-" : amountCounted}</td>
            </tr>
        );
    }
}
