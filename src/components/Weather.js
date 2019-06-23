import React from 'react';
import axios from 'axios';

export class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { one: '', two: '', three: '', four: '', five: ''};
    }

    initIcons() {
        this.setState({
            one: "https://darksky.net/images/weather-icons/clear-day.png",
            two: "https://darksky.net/images/weather-icons/cloudy.png",
            three: "https://darksky.net/images/weather-icons/clear-day.png",
            four: "https://darksky.net/images/weather-icons/clear-night.png",
            five: "https://darksky.net/images/weather-icons/clear-night.png"
        });
    }

    componentDidMount() {
        this.initIcons();

        //https://api.darksky.net/forecast/a8deb7086d8b0a4584ce78ecc82c05cc/53.283818,-6.205588

        /*axios.get(``)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            // Something went wrong. Save the error in state and re-render.
            console.log(err);
        });*/

      }

    render() {
        return (
            <div className="weather">
                <ul>
                    <li><img className="icon" alt="clear-day" src={this.state.one}/></li>
                    <li><img className="icon" alt="clear-day" src={this.state.two}/></li>
                    <li><img className="icon" alt="clear-day" src={this.state.three}/></li>
                    <li><img className="icon" alt="clear-day" src={this.state.four}/></li>
                    <li><img className="icon" alt="clear-day" src={this.state.five}/></li>
                </ul>
            </div>
        )
    }
}