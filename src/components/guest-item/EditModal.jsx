import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editGuest } from '../../actions/guestActions';

const EditModal = ({ guest, editGuest }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('')
  const [PaymentMethod, setPaymentMethod] = useState('')

  useEffect(() => {
    if (guest) {
      setFirstname(guest.firstname);
      setLastname(guest.lastname);
      setPhone(guest.phone);
      setEmail(guest.email);
      setAddress(guest.address);
      setPaymentMethod(guest.PaymentMethod);
    }
  }, [guest]);

  const onSubmit = () => {
    const updatedGuest = {
      id: guest._id,
      firstname,
      lastname,
      phone,
      email,
      address,
      PaymentMethod
    };

    editGuest(updatedGuest);

    //clear fields
    setFirstname('');
    setLastname('');
    setPhone('');
    setEmail('');
    setAddress('');
    setPaymentMethod('');
  };

  return (
    <div
      id="edit-customer-modal"
      className="modal"
      style={{
        width: '50%',
        height: '70%',
      }}
    >
      <div className="modal-content">
        <h4 className="center-align"> Edit Guest </h4>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="First name"
              id="first"
              type="text"
              name="first"
              value={firstname}
              className="validate"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <label htmlFor="first"> First Name </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Last name"
              id="last"
              type="text"
              name="last"
              value={lastname}
              className="validate"
              onChange={(e) => setLastname(e.target.value)}
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
              value={phone}
              className="validate"
              onChange={(e) => setPhone(e.target.value)}
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
            <label htmlFor="email"> Email </label>
          </div>
        </div>
        <div className="row">
              <div className="input-field">
                <input
                  placeholder="Address"
                  id="address"
                  type="text"
                  name="address"
                  className="validate"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <label htmlFor="address"> Address </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <input
                  placeholder="Payment Method"
                  id="paymentMethod"
                  type="text"
                  name="paymentMethod"
                  className="validate"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                <label htmlFor="address"> Address </label>
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

export default connect(mapStateToProps, {
  editGuest,
})(EditModal);
