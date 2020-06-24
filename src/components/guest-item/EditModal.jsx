import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editGuest } from '../../actions/guestActions';

const EditModal = ({ guest, editGuest }) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (guest) {
      setFirst(guest.first);
      setLast(guest.last);
      setNumber(guest.number);
      setEmail(guest.email);
    }
  }, [guest]);

  const onSubmit = () => {
    const updatedGuest = {
      id: guest.id,
      first,
      last,
      number,
      email,
    };

    editGuest(updatedGuest);

    //clear fields
    setFirst('');
    setLast('');
    setNumber('');
    setEmail('');
  };

  return (
    <div id="edit-customer-modal" className="modal" style={{ width: '50%', height: '70%' }}>
      <div className="modal-content">
        <h4 className="center-align">Edit Guest</h4>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="First name"
              id="first"
              type="text"
              name="first"
              value={first}
              className="validate"
              onChange={(e) => setFirst(e.target.value)}
              required
            />
            <label htmlFor="first">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Last name"
              id="last"
              type="text"
              name="last"
              value={last}
              className="validate"
              onChange={(e) => setLast(e.target.value)}
              required
            />
            <label htmlFor="last"> Last Name </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Phone number"
              id="number"
              type="text"
              name="number"
              value={number}
              className="validate"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <label htmlFor="number"> Number </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              value={email}
              className="validate"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="modal-footer">
          <a className="modal-close waves-effect blue waves-light btn" onClick={onSubmit} href="#">
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  guest: state.guest.current,
});

export default connect(mapStateToProps, { editGuest })(EditModal);
