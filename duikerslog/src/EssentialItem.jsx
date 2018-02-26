import React, { Component } from 'react'

class EssentialItem extends Component {

    constructor(props){
        super(props);
        this.state = {showing: false};
    }

    render() {
        const {datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind} = this.props;
        return(
            <table>
                <thead>
                    <tr>
                        <th className="tdHead">Datum</th>
                        <th className="thHead">Locatie</th>
                        <th className="tdHead">Diepte</th>
                        <th className="tdHead">temperatuur</th>
                        <th className="tdHead">Buddy</th>
                        <th className="tdHead">Lucht Start</th>
                        <th className="tdHead">Lucht Eind</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">{datum}</td>
                        <td className="td">{locatie}</td>
                        <td className="td">{diepte}</td>
                        <td className="td">{temperatuur}</td>
                        <td className="td">{buddy}</td>
                        <td className="td">{luchtStart}</td>
                        <td className="td">{luchtEind}</td>
                    </tr>
                </tbody>
            </table>
    );
    }
}

export default EssentialItem;