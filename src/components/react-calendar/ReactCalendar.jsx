import React, { useState } from 'react';
// import { render } from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isWithinInterval } from 'date-fns';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const testDate = date.setDate(date.getDate() + 29);

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const today = new Date();

  //Test range, can be replaced with dates from the data base
  const disabledRanges = [
    [addDays(today, 2), addDays(today, 5)],
    [addDays(today, 13), addDays(today, 15)],
  ];

  //Could be used to compare selected date to range
  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }

  //Used in tileDisabled to compare selected date to range
  function isWithinRanges(date, ranges) {
    return ranges.some((range) => isWithinRange(date, range));
  }

  function tileDisabled({ date, view }) {
    //Add class to tiles in month view only
    if (view === 'month') {
      //Check if a date React-Calendar wants to check is within any of the ranges
      return isWithinRanges(date, disabledRanges);
    }
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} tileDisabled={tileDisabled} />
      {console.log(date)}
      {console.log(testDate)}
    </div>
  );
};

export default ReactCalendar;
