import React from 'react';

export default class Header extends React.Component {
    click=(event)=>{
        event.preventDefault();
        console.log('klik');
        window.scrollTo(0, 1000);
    }
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h1>NBP Calc</h1>
                    <div className="headerContent">
                        <div className="leftSection">
                            <h2>Przeliczaj wartości oraz waluty <span>szybko</span> i intuicyjnie.
                            </h2>


                            <figure>
                                <blockquote>
                                NBP Calc - najdynamiczniej rozwijająca się aplikacja biznesowa wyznaczająca trendy w branży banking/currency XXI wieku.
                                </blockquote>
                                <figcaption>~ moja mama</figcaption>
                            </figure>







                            <a
                                href="#klik"
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


