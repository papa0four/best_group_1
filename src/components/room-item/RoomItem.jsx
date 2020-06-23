import React from 'react';
import { Link } from 'react-router-dom';

const RoomItem = ({ room }) => {
  return (
    <div className="card">
      <div className="card-content center-align">
        <h2 className="card-title">{room.title}</h2>
        <p>
          Beds: {room.beds} Price: ${room.price}
        </p>
      </div>
      <div className="card-action center-align">
        <Link className="waves-effect waves-light btn-large" to={'/bookroom'}>
          Book Room For Customer
        </Link>
      </div>
    </div>
  );
};

export default RoomItem;
