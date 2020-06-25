import React, { Fragment } from 'react';
import ReactCalendar from '../../components/react-calendar/ReactCalendar';

const BookRoom = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h3> Available Dates </h3>{' '}
            <div className="center-block">
              <div className="center-align">
                <ReactCalendar />
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="col s6">
            <h1> Placeholder for list of customers with option to book room </h1>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </Fragment>
  );
};

export default BookRoom;
