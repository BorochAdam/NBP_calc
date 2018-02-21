import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';

const currencies = ['USD','EUR','GBP','CHF', 'JPY'];

class App extends React.Component {
    render() {
        return <Main currencies={this.props.currencies}/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App currencies={currencies}/>,
        document.getElementById('app')
    );
});