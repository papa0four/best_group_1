import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGuest } from '../../actions/guestActions';

const AddModal = ({ addGuest }) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  //form submit
  const onSubmit = () => {
    const newGuest = {
      first,
      last,
      number,
      email,
    };

    addGuest(newGuest);

    //clear fields
    setFirst('');
    setLast('');
    setNumber('');
    setEmail('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        id="add-customer.modal"
        className="modal"
        style={{
          width: '50%',
          height: '70%',
        }}
      >
        <div className="modal-content">
          <h4 className="center-align"> Add Guest </h4>{' '}
          <div className="row">
            <div className="input-field">
              <input
                placeholder="First name"
                id="first"
                type="text"
                name="first"
                className="validate"
                onChange={(e) => setFirst(e.target.value)}
                required
              />
              <label htmlFor="first"> First Name </label>{' '}
            </div>{' '}
          </div>{' '}
          <div className="row">
            <div className="input-field">
              <input
                placeholder="Last name"
                id="last"
                type="text"
                name="last"
                className="validate"
                onChange={(e) => setLast(e.target.value)}
                required
              />
              <label htmlFor="last"> Last Name </label>{' '}
            </div>
            <div className="row">
              <div className="input-field">
                <input
                  placeholder="Phone number"
                  id="number"
                  type="text"
                  name="number"
                  className="validate"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
                <label htmlFor="number"> Number </label>{' '}
              </div>{' '}
            </div>{' '}
            <div className="row">
              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  name="email"
                  className="validate"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email"> Email </label>{' '}
              </div>{' '}
            </div>{' '}
            <div
              className="row center-align"
              style={{
                marginTop: '3rem',
              }}
            >
              <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit <i className="material-icons right"> send </i>{' '}
              </button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </form>
  );
};

export default connect(null, {
  addGuest,
})(AddModal);
