import React from 'react';

    export default class SelectDay extends React.Component {

    render(){
        return (
            <div>
                <form >
                    <fieldset>
                        <legend>Wybierz dzień dla jakiego sprawdzić kurs</legend>
                <input
                    id="selectedDay"
                    type="date"
                    onChange={this.props.changeInput}
                    value={this.props.selectedDay}
                    placeholder="Tu wpisz datę"
                />
                    </fieldset>
                </form>
            </div>

        );
    }
}