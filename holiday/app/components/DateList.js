
import React from 'react';
import Events from './Events.js'

export default function DateList(props) {

  var startCount = props.date.startDate.toString().slice(8, 10);
  var endCount = props.date.endDate.toString().slice(8, 10);
  console.log(startCount, endCount);

  var list = [];
  for (var i = startCount; i <= endCount; i++ ) {
    var element = (
      <div key={i}>
        <label htmlFor={i}>{i} August</label>
        <Events id={i} />
      </div>
    );
    list.push(element);
  }

  return <div>{list}</div>;

}
