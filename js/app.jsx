import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';

const currencies = ['USD','EUR','GBP','CHF', 'JPY'];
const tradeCurrencies = [
                        {name: 'PLN', valuePln: 1, unit: " "},
                        {name: 'pszenica', valuePln: 700, unit: "tona"},
                        {name: 'owies', valuePln: 500, unit: "tona"},
                        {name: 'złom stal', valuePln: 0.5, unit: "kg"},
                        {name: 'jajka', valuePln: 0.7, unit: "sztuka"},
                        {name: 'puszka aluminium', valuePln: 3.5, unit: "kg"}];
const todayDate = new Date();

class App extends React.Component {
    render() {
        return <Main
                    todayDate={this.props.todayDate}
                    currencies={this.props.currencies}
                    tradeCurrencies={this.props.tradeCurrencies}
                />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App
            tradeCurrencies={tradeCurrencies}
            todayDate={todayDate}
            currencies={currencies}
        />,
        document.getElementById('app')
    );
});