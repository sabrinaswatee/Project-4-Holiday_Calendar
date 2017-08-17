
import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
// import User from './User.js';
import Event from './Event.js';

import 'react-datepicker/dist/react-datepicker.css'

class App extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      startDate: Moment(),
      endDate: Moment(),
      userName: '',
      passWord: '',
      users: [
        ['sabrina', '123456'],
        ['simon', '123456'],
        ['shawn', '123456']
      ],
      showPage1: 'block',
      showPage2: 'none',
      showPage3: 'none',
      showPage4: 'none',
      showPage4DateList: 'none'
    };

    this.handleStartDate = (date) => this.setState({ startDate: date });
    this.handleEndDate = (date) => this.setState({ endDate: date });
    this.handleUserName = (event) => this.setState({ userName: event.target.value });
    this.handlePassWord = (event) => this.setState({ passWord: event.target.value });
    this.handleButtonClick1 = () => this.setState({ showPage1: 'none', showPage2: 'block' });
    this.handleButtonClick5 = () => this.setState({ showPage3: 'none', showPage4: 'block' });
    this.handleButtonClick6 = () => this.setState({ showPage4DateList: 'block' });

    this.handleButtonClick2 = this.handleButtonClick2.bind(this);
    this.handleButtonClick3 = this.handleButtonClick3.bind(this);
    this.handleButtonClick4 = this.handleButtonClick4.bind(this);
  }

  handleButtonClick2 (event) {
    event.preventDefault();
    var userInput = JSON.stringify([this.state.userName, this.state.passWord]);
    if (JSON.stringify(this.state.users).indexOf(userInput) != -1) {
      this.setState({ showPage2: 'none', showPage3: 'block' });
    }
    else {
      console.log(userInput);
      alert('Incorrect username and or password');
      this.setState({ userName: '', passWord: '' });
    }
  }

  handleButtonClick3 (event) {
    event.preventDefault();
    console.log(this.state.users);
    var newUser = [this.state.userName, this.state.passWord];
    this.setState((prevState) => ({ users: prevState.users.concat(newUser) }) );
    this.setState({ userName: '', passWord: '' });
    alert('Please login with your username and password')
  }

  handleButtonClick4 () {
    alert('Under Construction');
  }

  // handleButtonClick3 () { this.setState({showPage3DateList : 'block'}); }
  // handleStartDate (date) { this.setState({ startDate: date }); }
  // handleEndDate (date) { this.setState({ endDate: date }); }

  // createDatesArray () {
  //   var startDate = this.state.startDate.toString();
  //   var endDate = this.state.endDate.toString();
  //   var startCount = this.state.startDate.toString().slice(8, 10);
  //   var endCount = this.state.endDate.toString().slice(8, 10);
  //
  //   var dates = [];
  //   dates.push (startDate.slice(0, 15));
  //   var iterateDate = new Date (startDate);
  //   for (var counter = 0; counter < endCount - startCount; counter++) {
  //     iterateDate.setDate(iterateDate.getDate() + 1);
  //     if (iterateDate !== new Date (endDate)) {
  //       dates.push (iterateDate.toString().slice(0, 15));
  //     }
  //   }
  //   return dates;
  // }

  render () {

    const visibilityPage1 = this.state.showPage1;
    const visibilityPage2 = this.state.showPage2;
    const visibilityPage3 = this.state.showPage3;
    const visibilityPage4 = this.state.showPage4;
    const visibilityPage4DateList = this.state.showPage4DateList;

    var startDate = this.state.startDate.toString();
    var endDate = this.state.endDate.toString();
    var startCount = this.state.startDate.toString().slice(8, 10);
    var endCount = this.state.endDate.toString().slice(8, 10);

    var dates = [];
    dates.push (startDate.slice(0, 15));
    var iterateDate = new Date (startDate);
    for (var counter = 0; counter < endCount - startCount; counter++) {
      iterateDate.setDate(iterateDate.getDate() + 1);
      if (iterateDate !== new Date (endDate)) {
        dates.push (iterateDate.toString().slice(0, 15));
      }
    }

    return <div>
      <div id="page-1" style={{ display: visibilityPage1 }}>
        <h6>Do you wish to have a holiday itinerary to fit everyone in a group?
        Are you fed up of planning them back and forth on whatsapp and messengers?<br/>
        Then dive in, collaborate with friends and family, and create customized itineraries</h6>
        <button onClick={this.handleButtonClick1}>Get Started</button>
      </div>

      <div id="page-2" style={{ display: visibilityPage2 }}>
        <form id="pageLoginSignup">
          <input placeholder="Enter Username" type="text" onChange={this.handleUserName} value={this.state.userName}/>
          <input placeholder="Enter Password" type="password" onChange={this.handlePassWord} value={this.state.passWord}/>
          <br/>
          <button onClick={this.handleButtonClick2}>Log In</button>
          <button onClick={this.handleButtonClick3}>Sign Up</button>
        </form>
      </div>

      <div id="page-3" style={{ display: visibilityPage3 }}>
        <h6>Welcome {this.state.userName}</h6>
        <button onClick={this.handleButtonClick4}>View Saved Itineraries</button><br/>
        <button onClick={this.handleButtonClick5}>Create New Itinerary</button>
      </div>

      <div id="page-4" style={{ display: visibilityPage4 }}>
        <div id="page-4-startDate">
          <label>Start date</label>
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleStartDate}
          />
        </div>

        <div id="page-4-endDate">
          <label>End date</label>
          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleEndDate}
          />
        </div>

        <button onClick={this.handleButtonClick6}>Confirm Dates</button>
      </div>

      <div id="page-4-dateList" style={{display: visibilityPage4DateList}}>
        {dates.map((date, index) => (
          <div id="page-4-dateListEvents" key={index}>
            <label>{date}</label>
            <Event id="page-4-events"/>
          </div>))
        }
      </div>

    </div>
  }

}

export default App;
