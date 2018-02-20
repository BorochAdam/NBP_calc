import React from 'react';

class Trow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currencyToCountRate : ''
        }
        this.newFetch(this.props.currencyToShow)
    }

    newFetch(element) {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${element}/2018-02-20/?format=json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('err');
                }
            })

            .then(data => {
                this.setState({
                    currencyToCountRate: data.rates[0].mid
                });

            });
    }

    render() {

           return (
            <tr>
                <td>{this.props.currencyToShow}</td>
                <td>{this.state.currencyToCountRate}</td>
            </tr>
        );
    }
}

export default class Tbody extends React.Component {
    render() {
        let rows = [];
        this.props.currencies.forEach((item, index) => {
           rows.push(<Trow currencyToShow={item} key={index}/>);
        });
        return (
            <tbody>
            {rows}
            </tbody>
        );
    }
}
