import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editCustomer } from '../../actions/customerActions';

const EditModal = ({ current, editCustomer }) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (current) {
      setFirst(current.first);
      setLast(current.last);
      setNumber(current.number);
      setEmail(current.email);
    }
  }, [current]);

  const onSubmit = () => {
    const updatedCustomer = {
      id: current.id,
      first,
      last,
      number,
      email,
    };

    editCustomer(updatedCustomer);

    //clear fields
    setFirst('');
    setLast('');
    setNumber('');
    setEmail('');
  };

  return (
    <div id="edit-customer-modal" className="modal" style={{ width: '50%', height: '70%' }}>
      <div className="modal-content">
        <h4 className="center-align">Edit Customer</h4>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="First name"
              id="first"
              type="text"
              name="first"
              value={first}
              className="validate"
              onChange={e => setFirst(e.target.value)}
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
              onChange={e => setLast(e.target.value)}
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
              onChange={e => setNumber(e.target.value)}
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
              onChange={e => setEmail(e.target.value)}
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

const mapStateToProps = state => ({
  current: state.customer.current,
});

export default connect(mapStateToProps, { editCustomer })(EditModal);
