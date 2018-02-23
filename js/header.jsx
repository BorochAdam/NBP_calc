import React from 'react';

export default class Header extends React.Component {
    click(event){
        event.preventDefault();
        console.log('klik');
    }
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h1>NBP Calc</h1>
                    <div className="headerContent">
                        <div className="leftSection">
                            <h2>Przeliczaj wartości oraz waluty <span>szybko</span> i intuicyjnie.</h2>
                            <p>NBP Calc - internetowy przelicznik cen materiałów oraz walut
                                oparty o bieżące oraz historyczne notowania</p>
                            <a
                                href="#"
                                onClick={this.click}
                            >
                                przelicz ➞
                            </a>
                        </div>
                        <div className="rightSection">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


