
import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import DateList from './DateList.js'

import 'react-datepicker/dist/react-datepicker.css'

class App extends React.Component {

  constructor (props) {
    super (props)
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.state = {
      startDate: Moment(),
      endDate: Moment(),
      showDateList: 'none'
    };
  }

  handleStart (date) {
    this.setState({
      startDate: date,
      endDate: date,
      showDateList: 'none'
    });
  }

  handleEnd (date) {
    this.setState({
      endDate: date,
      showDateList: 'none'
    });
  }

  buttonClicked () {
    this.setState({showDateList : 'block'});
  }

  render () {

    const visibility = this.state.showDateList;

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

      <button onClick={this.buttonClicked}>Pick Dates</button>

      <div style={{display: visibility}}>
        <DateList date={this.state} />
      </div>
    </div>
  }

}

export default App;
