import React from 'react';

export default class ExchangeValue extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Wymieniarka</legend>
                    <input type="radio"
                           name="radio"
                           value="buy"
                           checked={this.props.option==="buy"}
                           onChange={this.props.radioChange}
                    />
                        Chcę sprzedać {this.props.amount!=='' ? "za "+this.props.amount+" "+this.props.currUnit+" - "+this.props.currToChange : ""}
                    <br/>

                    <input
                        type="radio"
                        name="radio"
                        value="sell"
                        checked={this.props.option==="sell"}
                        onChange={this.props.radioChange}
                    />
                        Chcę kupić {this.props.amount!=='' ? "za "+this.props.amount+" "+this.props.currUnit+" - "+this.props.currToChange : ""}
                    <br/>

                    <input
                        id="amount"
                        type="number"
                        onChange={this.props.changeInput}
                        value={this.props.amount}
                        placeholder="Tu wpisz ilość jednostek"
                    />
                    </fieldset>
                </form>
            </div>
        );
    }
}

