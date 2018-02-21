import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';

const currencies = ['USD','EUR','GBP','CHF', 'JPY'];
const todayDate = new Date();
class App extends React.Component {
    render() {
        return <Main todayDate={this.props.todayDate} currencies={this.props.currencies}/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App todayDate={todayDate} currencies={currencies}/>,
        document.getElementById('app')
    );
});