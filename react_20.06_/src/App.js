import React, { Component } from 'react';
import PasswordCheacked from './password-cheacked';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    text: 'stranger!'

  }

  handleChange = e => {
    this.setState({ text: e.target.value })
    console.log(e.target.value );
  }
 handelBackground = (e) => {
   let color = e.target.value;
   this.setState({'className' :  color});
   console.log(color);
 }


  render() {
    return (
      <div className={this.state.className} style={{textAlign: 'center'}} >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={{color: '{color}'}}>Welcome to React</h2>
        </div>
            <input
              type="text"
              name=""
              onChange={this.handleChange}
              value={this.state.text}
              autoFocus="true"
            />
            <p>Hello,{this.state.text}</p>
            <button
              type="button"
              onClick={this.handelBackground}
              name="button" value="red">RED</button>
            <button
              type="button"
              onClick={this.handelBackground}
              name="button" value="green">GREEN</button>
            <button
              type="button"
              onClick={this.handelBackground}
              name="button" value="orange">ORANGE</button>
              <PasswordCheacked/>
      </div>
    );
  }
}

export default App;
