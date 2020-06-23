import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRooms } from '../../actions/roomActions';
import RoomItem from '../../components/room-item/RoomItem';
import './home.styles.scss';
import ReactCalendar from '../../components/react-calendar/ReactCalendar';
import Pagination from '../../components/pagination/Pagination';

const Home = ({ room: { rooms, loading }, getRooms }) => {
  useEffect(() => {
    getRooms();
  }, [getRooms]);

  return (
    <div className="container">
      <div className="row valign-wrapper">
        <div className="col s6">
          <h3 className="center-block">Available Dates</h3>
          <div className="center-align">
            <ReactCalendar />
          </div>
        </div>
        <div className="col s6">
          <ul className="collection">
            {rooms.map((room) => (
              <li key={room.id} className="collection-item">
                <RoomItem room={room} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  room: state.room,
});

export default connect(mapStateToProps, { getRooms })(Home);
