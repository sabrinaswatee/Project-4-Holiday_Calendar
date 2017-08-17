// <PlacesAutocomplete inputProps={inputProps} />
// <input placeholder="Search for a place" onChange={this.handleChange} value={this.state.text} />

import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export default class Events extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { items: [], text: '' };
    this.onChange = (text) => this.setState({ text });
  }

  render() {
    const inputProps = {
      value: this.state.text,
      onChange: this.onChange,
    }

    return (
      <div id="eventsList">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Search for a place" onChange={this.handleChange} value={this.state.text} />
        </form>
        <div id="events">
          <EventsList items={this.state.items} />
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  //   geocodeByAddress(this.state.text)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error))
  }
}

class EventsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
