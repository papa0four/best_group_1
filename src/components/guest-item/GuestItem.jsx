import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setCurrent, deleteGuest } from '../../actions/guestActions';
const GuestItem = ({ guest, setCurrent, deleteGuest }) => {
  return (
    <Fragment>
      <i className="medium material-icons"> person </i>
      <span className="title">
        {guest.firstname} {guest.lastname}
      </span>
      <p> {guest.phone} </p> <p> {guest.email} </p>
      <div className="secondary-content">
        <a href="#edit-customer-modal" onClick={() => setCurrent(guest)} className="modal-trigger">
          <i className="material-icons"> edit </i>
        </a>
        <a onClick={() => deleteGuest(guest._id)}>
          <i className="material-icons"> delete </i>
        </a>
      </div>
    </Fragment>
  );
};

export default connect(null, {
  setCurrent,
  deleteGuest,
})(GuestItem);
