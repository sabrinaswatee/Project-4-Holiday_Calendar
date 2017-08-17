
import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import Events from './Events.js';

import 'react-datepicker/dist/react-datepicker.css'

class App extends React.Component {

  constructor (props) {
    super (props)
    this.handleButtonClick1 = this.handleButtonClick1.bind(this);
    this.handleButtonClick3 = this.handleButtonClick3.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    // this.createDatesArray = this.createDatesArray.bind(this);
    this.state = {
      startDate: Moment(),
      endDate: Moment(),
      showPage1: 'block',
      showPage3: 'none',
      showPage3DateList: 'none'
    };
  }
  handleButtonClick1 () {
    this.setState({
      showPage1: 'none',
      showPage3: 'block'
    });
  }

  handleButtonClick3 () {
    this.setState({showPage3DateList : 'block'});
  }

  handleStartDate (date) {
    this.setState({
      startDate: date,
      endDate: date,
      showDateList: 'none'
    });
  }

  handleEndDate (date) {
    this.setState({
      endDate: date,
      showDateList: 'none'
    });
  }

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
    const visibilityPage3 = this.state.showPage3;
    const visibilityPage3DateList = this.state.showPage3DateList;
    // const dates = this.createDatesArray;
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
      <div id="page-1" style={{display: visibilityPage1}}>
        <h6>Dive in along with your friends or family to create custom itineraries</h6>
        <button onClick={this.handleButtonClick1}>Get Started</button>
      </div>

      <div id="page-3" style={{display: visibilityPage3}}>
        <div id="start">
          <label htmlFor="startDate">Start date</label>
          <DatePicker
            id="startDate"
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleStartDate}
          />
        </div>

        <div id="end">
          <label htmlFor="endDate">End date</label>
          <DatePicker
            id="endDate"
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleEndDate}
          />
        </div>

        <button onClick={this.handleButtonClick3}>Confirm Dates</button>
      </div>

      <div style={{display: visibilityPage3DateList}} id="eventsOnDates">
        {dates.map((date, index) => (
          <div key={index}>
            <label>{date}</label>
            <Events />
          </div>))
        }
      </div>

    </div>
  }

}

export default App;
