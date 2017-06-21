import React, { Component } from 'react';


class PasswordCheacked extends Component {
  constructor(props) {
    super();
    this.state = {text: '', count: 0, width: 10};
    this.handleChange = this.handleChange.bind(this);
    this.checkChar = this.checkChar.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  tick() {
    this.setState({count: (this.state.count + 1)})
  }
  restartTimer() {
    this.setState({count: (0)})
  }
stopTimer() {
clearInterval(this.timer)
}

handleChange(e){
  this.setState({
    text: e.target.value
  });
}

checkChar() {
  return this.state.text.length >=6;
}

checkBigLetter() {
  let a = this.state.text;
  return (a.match(/[A-Z]/g));
}

checkSmallLetter() {
  let a = this.state.text;
  return (a.match(/[a-z]/g));
}


big() {
  return (this.state.width+10);
}


render () {
  return(
    <div className="App">
      <input
        type="text"
        placeholder="username"
        onChange={this.handleChange}
      />
      <div className="">
        <ul>
          <li className={this.checkChar() ? "passed" : "missing"}>Minimum 6 letter</li>
          <li className={this.checkBigLetter() ? "passed" : "missing"}>More then one big letter</li>
          <li className={this.checkSmallLetter() ? "passed" : "missing"}>More then one small letter</li>
        </ul>
      </div>
      <button> Submit </button>
      <h1>Уже прошло {this.state.count} секунд</h1>
      <button onClick={this.componentWillUnmount.bind(this)}>Start</button>
      <button onClick={this.stopTimer.bind(this)}>Stop</button>
      <button onClick={this.restartTimer.bind(this)}>Restart</button>

<div className="d1">
  <div className="d2" style = {{width:{this.state.width}%}}>
    <p></p>
  </div>
</div>
<button className="d3" onClick={this.big.bind(this)}><h1>+</h1></button>

    </div>

  );
}
}

export default PasswordCheacked;
