
import React from 'react';

export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      users: [
        ['sabrina', '123456'],
        ['simon', '123456'],
        ['shawn', '123456']
      ]
     };
    this.handleUserName = (event) => this.setState({ userName: event.target.value });
    this.handlePassWord = (event) => this.setState({ passWord: event.target.value });
    this.handleButtonClick2 = this.handleButtonClick2.bind(this);
    this.handleButtonClick3 = this.handleButtonClick3.bind(this);
  }

  handleButtonClick2 (event) {
    event.preventDefault();
    var userInput = [this.state.userName, this.state.passWord];
    if (this.state.users.includes(userInput)) {
      console.log('user exist');
    }
    else {
      console.log(userInput);
      console.log('need to sign up');
      this.setState({ userName: '', passWord: '' });
    }
  }

  handleButtonClick3 (event) {
    event.preventDefault();
    console.log(this.state.users);
    var newUser = [this.state.userName, this.state.passWord];
    this.setState((prevState) => ({ users: prevState.users.concat(newUser) }) );
    this.setState({ userName: '', passWord: '' });
  }

  render() {
    return (<form id="pageLoginSignup">
        <input placeholder="Enter Username" type="text" onChange={this.handleUserName} value={this.state.userName}/>
        <input placeholder="Enter Password" type="password" onChange={this.handlePassWord} value={this.state.passWord}/>
        <br/>
        <button onClick={this.handleButtonClick2}>Log In</button>
        <button onClick={this.handleButtonClick3}>Sign Up</button>
      </form>
    );
  }

}
