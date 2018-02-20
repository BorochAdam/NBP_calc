import React from 'react';
import Theader from './theader.jsx';
import Tfooter from './tfooter.jsx';
import Tbody from './tbody.jsx';


export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Kurs względem złotego NBP
                </h1>
                <table>
                    <Theader/>
                    <Tbody currencies={this.props.currencies}/>
                    <Tfooter/>
                </table>
            </div>

        );
    }
}

