(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(17),r=a.n(i),s=(a(25),a(2)),l=a(3),u=a(5),h=a(4),c=a(7),m=a(6),d=a(18),y=a.n(d),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={icons:["","","","",""],temp:["","","","",""],rain:["","","","",""],time:["","","","",""]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"timeConverter",value:function(e){var t=new Date(1e3*e).getHours();return t>11?(t-=12,t+=" pm"):t+=" am","0 am"===t&&(t="12 am"),t}},{key:"componentDidMount",value:function(){var e=this;y.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a8deb7086d8b0a4584ce78ecc82c05cc/53.283818,-6.205588?units=si&exclude=minutely,currently,daily,alerts,flags").then(function(t){console.log(t);for(var a=[],o=[],n=[],i=[],r=0;r<5;++r){var s=3*r,l=t.data.hourly.data[s],u=l.icon,h=l.temperature,c=l.precipProbability,m=l.time;a.push(u),o.push(h),n.push(c),i.push(m)}for(r=0;r<5;++r){var d=o[r];d=Math.round(d),o[r]=d+"\xb0C";var y=n[r];y*=100,y=10*Math.ceil(y/10),n[r]=y+"%";var f=i[r];f=e.timeConverter(f),i[r]=f}e.setState({icons:a,temp:o,rain:n,time:i})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return n.a.createElement("div",{className:"new-weather"},n.a.createElement("ul",{className:"info"},n.a.createElement("li",null),n.a.createElement("li",null,"Time"),n.a.createElement("li",null,"Temp (\xb0C)"),n.a.createElement("li",null,"Rain (%)")),n.a.createElement("ul",null,n.a.createElement("li",{className:"time"},this.state.time[0]),n.a.createElement("li",null,n.a.createElement("img",{className:"icon",alt:"clear-day",src:"https://darksky.net/images/weather-icons/"+this.state.icons[0]+".png"})),n.a.createElement("li",{className:"temp"},this.state.temp[0]),n.a.createElement("li",{className:"rain"},this.state.rain[0])),n.a.createElement("ul",null,n.a.createElement("li",{className:"time"},this.state.time[1]),n.a.createElement("li",null,n.a.createElement("img",{className:"icon",alt:"clear-day",src:"https://darksky.net/images/weather-icons/"+this.state.icons[1]+".png"})),n.a.createElement("li",{className:"temp"},this.state.temp[1]),n.a.createElement("li",{className:"rain"},this.state.rain[1])),n.a.createElement("ul",null,n.a.createElement("li",{className:"time"},this.state.time[2]),n.a.createElement("li",null,n.a.createElement("img",{className:"icon",alt:"clear-day",src:"https://darksky.net/images/weather-icons/"+this.state.icons[2]+".png"})),n.a.createElement("li",{className:"temp"},this.state.temp[2]),n.a.createElement("li",{className:"rain"},this.state.rain[2])),n.a.createElement("ul",null,n.a.createElement("li",{className:"time"},this.state.time[3]),n.a.createElement("li",null,n.a.createElement("img",{className:"icon",alt:"clear-day",src:"https://darksky.net/images/weather-icons/"+this.state.icons[3]+".png"})),n.a.createElement("li",{className:"temp"},this.state.temp[3]),n.a.createElement("li",{className:"rain"},this.state.rain[3])),n.a.createElement("ul",null,n.a.createElement("li",{className:"time"},this.state.time[4]),n.a.createElement("li",null,n.a.createElement("img",{className:"icon",alt:"clear-day",src:"https://darksky.net/images/weather-icons/"+this.state.icons[4]+".png"})),n.a.createElement("li",{className:"temp"},this.state.temp[4]),n.a.createElement("li",{className:"rain"},this.state.rain[4])))}}]),t}(n.a.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={time:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),daydate:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},6e4),this.tick()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=new Date;this.setState({time:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})});var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),o=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];this.setState({daydate:t+" "+a+" "+o})}},{key:"render",value:function(){return n.a.createElement("div",{className:"clock"},n.a.createElement("h2",null,this.state.time),n.a.createElement("h4",null,this.state.daydate))}}]),t}(n.a.Component),g=(a(43),[{quote:"He who has a \u2018why\u2019 can live to bear almost any \u2018how\u2019",author:"Friedrich Nietzsche"},{quote:"\u201cIf we do not feel grateful for what we already have, what makes us think we\u2019d be\xa0happy with\xa0more?\u201d",author:""},{quote:"A character is what a character does",author:""},{quote:"Act such that if your action became a universal maxim that that would be of universal benefit",author:"Immanuel Kant"},{quote:"If you don\u2019t prioritise your life, someone else will",author:""},{quote:"Spend less time studying your investments and more time studying yourself",author:"Jason Zweig"},{quote:"In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to\xa0you",author:"Mortimer J. Adler"},{quote:"What you are afraid to do is a clear indication of the next thing you need to do",author:"Ralph Waldo Emerson"},{quote:"You all laugh at me because I\u2019m different. I laugh at you because you\u2019re all the same.",author:"John Davis"},{quote:"In a room full of shouting people, the one who whispers becomes interesting",author:"Peter Schmidt"},{quote:"What is more mortifying than to feel that you have missed the plum for want of courage to shake the tree?",author:"Logan Pearsall Smith"},{quote:"The person who doesn't read is no better off than the person who can't read",author:""},{quote:"Simplicity is the ultimate sophistication",author:"Leonardo DiVinci"},{quote:"How would the person I wish to be act today?",author:""},{quote:"Human beings are born with different capacities, if they are free, they are not equal. And if they are equal, they are not free",author:"Aleksandr Solzhenitsyn"},{quote:"todo",author:"todo"},{quote:"We must all suffer one of two things, the pain of discipline or the pain of regret",author:""},{quote:"Action expresses priorities",author:"Mahatma Gandhi"},{quote:"The line dividing good and evil cuts through the heart of every human being",author:"Aleksandr Solzhenitsyn"},{quote:"Tell the truth, or at least don't lie",author:"Jordan Peterson"},{quote:"And this too shall pass",author:""},{quote:"When things go viral, it\u2019s because they touch upon emotion, not logic. This is actually a big message most people forget\u2019",author:""},{quote:"Everyone thinks of changing the world, but nobody thinks of changing himself",author:"Leo Tolstoy"},{quote:"Stop saying things that make you feel weak",author:"Jordan Peterson"},{quote:"Act such that if your action became a universal maxim that that would be of universal benefit",author:"Immanuel Kant"},{quote:"If you don\u2019t prioritise your life, someone else will",author:""},{quote:"Money is coined freedom",author:"Fyodor Dostoevsky"},{quote:"What you are afraid to do is a clear indication of the next thing you need to do",author:"Ralph Waldo Emerson"},{quote:"Humour is a rubber sword - it allows you to make a point without drawing blood.",author:"Mary Hirsh"},{quote:"If you want to tell people the truth, make them laugh, otherwise they'll kill you.",author:"Oscar Wildes"},{quote:"We overestimate what we can do in a month and underestimate what we can do in a year",author:""},{quote:"Don't be too busy making a living, that you forget to make a life.",author:""},{quote:"You all laugh at me because I\u2019m different. I laugh at you because you\u2019re all the same.",author:"John Davis"},{quote:"All things excellent are as difficult as they are rare",author:"Spinoza"},{quote:"The worst form of inequality is to try to make unequal things equal",author:"Aristotle"},{quote:"One of the advantages of telling the truth is that you don't have to remember what you said.",author:"Mark Twain"},{quote:"If people can't control their own emotions, then they have to start trying to control other people's behaviour.",author:"John Cleese"},{quote:"Whenever you find yourself on the side of the majority, it is time to pause and reflect",author:"Mark Twain"},{quote:"If you can't explain it simply, you don't understand it well enough",author:"Albert Einstein"},{quote:"Be kind, for everyone you meet is fighting a hard battle",author:"Plato"},{quote:"What the human being is best at doing is interpreting all new information so that their prior conclusions remain intact.",author:"Warren Buffett"},{quote:"Be fearful when others are greedy, and be greedy when others are fearful",author:"Warren Buffett"},{quote:"You can get in way more trouble with a\xa0good idea\xa0than a\xa0bad idea, because you forget that the\xa0good idea\xa0has limits",author:"Benjamin Graham"},{quote:"One of history's few iron laws is that luxuries tend to become necessities and to spawn new obligations. Once people get used to a certain luxury, they take it for granted. Then they begin to count on it. Finally they reach a point where they can't live without it",author:"Yuval Noah Harari"},{quote:"Praise by name, criticize by category",author:"Warren Buffett"},{quote:'When asked what keeps most individual investors from succeeding, Graham had a concise answer: "The primary cause of failure is that they pay too much attention to what the stock market is doing currently."',author:"Benjamin Graham"},{quote:"'What is more mortifying than to feel that you have missed the plum for want of courage to shake the tree?'",author:" Logan Pearsall Smith"}]),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={quote:"",quoteAuthor:""},a.updateQuote=a.updateQuote.bind(Object(c.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateQuote()}},{key:"updateQuote",value:function(){var e=g.length,t=g[Math.floor(Math.random()*e)];this.setState({quote:t.quote,quoteAuthor:t.author})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"clock"},n.a.createElement(p,null)),n.a.createElement("div",{className:"weather"},n.a.createElement(f,null)),n.a.createElement("p",{className:"quote"},'"',this.state.quote,'"'),n.a.createElement("p",{className:"author"},this.state.quoteAuthor)))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.e5e1a6d6.chunk.js.map