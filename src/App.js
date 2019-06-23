import React, { Component } from 'react';
import { Weather } from "./components/Weather"
import { Clock } from "./components/Clock"
import './App.css';
import { jsonData } from './data/quotes'; // or './module'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {quote: '', quoteAuthor: ''};

    // This binding is necessary to make `this` work in the callback
    this.updateQuote = this.updateQuote.bind(this);
  }

  componentDidMount() {
    this.updateQuote();
  }

  updateQuote() {
    //console.log(jsonData.data);
    var length = jsonData.data.length;
    var quotes = jsonData.data;
    
    /*for (var i = 0; i < length; i++) {
        var quote = quotes[i];
        console.log(quote);
    }*/

    var item = quotes[Math.floor(Math.random()*length)];
    //console.log(item);

    this.setState({
      quote: item.quote,
      quoteAuthor: item.author
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <Weather />
          <p>"{this.state.quote}"</p>
          <p className="author">{this.state.quoteAuthor}</p>
        </header>
      </div>
    )  
  }
}

export default App;
