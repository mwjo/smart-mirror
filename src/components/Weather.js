import React from 'react';
import axios from 'axios';

export class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            icons: ["clear-day", "cloudy", "clear-day", "clear-night", "cloudy-night"],
            temp: ["10", "10", "10", "10", "10"],
            rain: ["0.1", "0.1", "0.1", "0.1", "0.1"],
            time: ["9AM", "12PM", "3PM", "6PM", "9PM"]
        };
    }

    /*initIcons() {
        let list = 
        this.setState({
            icons: list
        });
    }*/

    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        //var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        //var year = a.getFullYear();
        //var month = months[a.getMonth()];
        //var date = a.getDate();
        var hour = a.getHours();

        if (hour > 11) {
            hour = hour - 12;
            hour = hour + " pm";
        } else {
            hour = hour + " am"
        }

        if (hour === "0 am") {
            hour = "12 am"
        }
        //var min = a.getMinutes();
        //var sec = a.getSeconds();
        //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

        //var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
        //var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();

        return hour;
    }
      

    componentDidMount() {
        //this.initIcons();

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a8deb7086d8b0a4584ce78ecc82c05cc/53.283818,-6.205588?units=si&exclude=minutely,currently,daily,alerts,flags`)
        .then(res => {
            console.log(res);
            
            let icons = [];
            let temps = [];
            let rains = [];
            let times = []
            let hourInterval = 3;
            for (var i = 0; i < 5; ++i) {
                let hour = i*hourInterval;
                let data = res.data.hourly.data[hour];
                let icon = data.icon;
                let temp = data.temperature;
                let rain = data.precipProbability;
                let time = data.time;

                icons.push(icon);
                temps.push(temp);
                rains.push(rain);
                times.push(time);
            }

            //format values
            for (var i = 0; i < 5; ++i) {

                //temperature
                let temp = temps[i];
                temp = Math.round(temp);
                temps[i] = temp + "°C";

                //rain percentage
                let rain = rains[i];
                rain = rain * 100;
                rain = Math.ceil(rain / 10) * 10;
                rains[i] = rain + "%";

                let time = times[i];
                time = this.timeConverter(time);
                times[i] = time;
            }

            this.setState({
                icons: icons,
                temp: temps,
                rain: rains,
                time: times
            });

        })
        .catch(err => {
            // Something went wrong. Save the error in state and re-render.
            console.log(err);
        });
      }

    render() {
        return (
            <div className="new-weather">
                <ul className="info">
                    <li></li>
                    <li>Time</li>
                    <li>Temp (°C)</li>
                    <li>Rain (%)</li>
                </ul>
                <ul>
                    <li className="time">{this.state.time[0]}</li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[0] + ".png"}/></li>
                    <li className="temp">{this.state.temp[0]}</li>
                    <li className="rain">{this.state.rain[0]}</li>
                </ul>
                <ul>
                    <li className="time">{this.state.time[1]}</li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[1] + ".png"}/></li>
                    <li className="temp">{this.state.temp[1]}</li>
                    <li className="rain">{this.state.rain[1]}</li>
                </ul>
                <ul>
                    <li className="time">{this.state.time[2]}</li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[2] + ".png"}/></li>
                    <li className="temp">{this.state.temp[2]}</li>
                    <li className="rain">{this.state.rain[2]}</li>
                </ul>
                <ul>
                    <li className="time">{this.state.time[3]}</li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[3] + ".png"}/></li>
                    <li className="temp">{this.state.temp[3]}</li>
                    <li className="rain">{this.state.rain[3]}</li>
                </ul>
                <ul>
                    <li className="time">{this.state.time[4]}</li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[4] + ".png"}/></li>
                    <li className="temp">{this.state.temp[4]}</li>
                    <li className="rain">{this.state.rain[4]}</li>
                </ul>
            </div>
            /*<div className="weather">
                <ul>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[0] + ".png"}/></li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[1] + ".png"}/></li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[2] + ".png"}/></li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[3] + ".png"}/></li>
                    <li><img className="icon" alt="clear-day" src={"https://darksky.net/images/weather-icons/" + this.state.icons[4] + ".png"}/></li>
                </ul>
                <ul className="temp">
                    <li>{this.state.temp[0]}</li>
                    <li>{this.state.temp[1]}</li>
                    <li>{this.state.temp[2]}</li>
                    <li>{this.state.temp[3]}</li>
                    <li>{this.state.temp[4]}</li>
                </ul>
                <ul className="rain">
                    <li>{this.state.rain[0]}</li>
                    <li>{this.state.rain[1]}</li>
                    <li>{this.state.rain[2]}</li>
                    <li>{this.state.rain[3]}</li>
                    <li>{this.state.rain[4]}</li>
                </ul>
            </div>*/
        )
    }
}