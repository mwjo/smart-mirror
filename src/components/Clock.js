import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                      daydate: ''};
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 60000); // once a minute
      this.tick();
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      var date = new Date();
  
      this.setState({
        time: date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      })
  
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
      var myDay = days[date.getDay()];
      var myDate = date.getDate();
      var myMonth = months[date.getMonth()];
  
      this.setState({
        daydate: myDay + ' ' + myDate + ' ' + myMonth
      })
    }

    render() {
        return (
            <div className="clock">
              <h2>{this.state.time}</h2>
              <h4>{this.state.daydate}</h4>
            </div>
        )
    }
}