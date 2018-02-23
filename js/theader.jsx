import React from 'react';

export default class Theader extends React.Component {
    render() {
        return (
            <thead>
            <tr>
                <th>Waluta</th>
                <th>Kupno</th>
                <th>Sprzedaż</th>
                <th>{this.props.option==="buy" ? "Otrzymasz tyle:":"Kupisz tyle:"  }</th>
            </tr>
            </thead>
        );
    }
}
