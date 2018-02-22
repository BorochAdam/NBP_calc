import React from 'react';

    export default class SelectDay extends React.Component {

    render(){
        let currOptions = [];
        let eggAmount = " ";
        this.props.tradeCurrencies.forEach((item, index) => {
            currOptions.push(
                <option
                    value={item.name}
                    key={index}
                >
                    {item.name} - kurs {item.valuePln} zł / {item.unit}
                </option>
            )
        });
        if (this.props.currToChange==="jajka"){
           eggAmount=
               <select
                   id="eggsNumber"
                   onChange={this.props.changeEggs}>
               >
                   <option value={1}>sztuka</option>
                   <option value={60}>kopa</option>
                   <option value={15}>mendel</option>
                   <option value={16}>mendel chłopski</option>
                   <option value={12}>tuzin</option>
                   <option value={144}>gros</option>
                </select>;
        }
            //SPRAWDZENIE DATY, czy pasuje do zadanego zakresu
            this.props.checkDate();


        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Wybierz dzień dla jakiego sprawdzić kurs.</legend>
                <input
                    id="selectedDay"
                    type="date"
                    onChange={this.props.changeInput}
                    value={this.props.selectedDay}
                    placeholder="Tu wpisz datę"
                />
                        <br/>
                        <select id="number"
                                onChange={this.props.changeFormElement}>
                            {currOptions}
                        </select>
                        <div>{eggAmount}</div>
                    </fieldset>
                </form>
            </div>

        );
    }
}