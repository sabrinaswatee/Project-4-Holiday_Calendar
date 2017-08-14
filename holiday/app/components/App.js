
import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css'

class App extends React.Component {

  constructor (props) {
    super (props)
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.state = {
      startDate: Moment(),
      endDate: Moment()
    };
  }

  handleStart (date) {
    this.setState({
      startDate: date,
      endDate: date
    });
  }

  handleEnd (date) {
    this.setState({
      endDate: date
    });
  }

  buttonClicked () {
    // want to clear the dates
    // isClearable={true}
    // placeholderText=""

    // create elements of all the days
  }

  render () {
    return <div>
      <label htmlFor="startDate">Start date</label>
      <DatePicker
        id="startDate"
        selected={this.state.startDate}
        selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleStart}
      />

      <label htmlFor="endDate">End date</label>
      <DatePicker
        id="endDate"
        selected={this.state.endDate}
        selectsEnd
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleEnd}
      />

      <button onChange={this.buttonClicked}>Pick Dates</button>
    </div>
  }

}

export default App;
