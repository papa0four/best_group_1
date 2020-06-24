import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setCurrent, deleteCustomer } from '../../actions/customerActions';
const CustomerItem = ({ customer, setCurrent, deleteCustomer }) => {
  return (
    <Fragment>
      <i className="medium material-icons">person</i>
      <span className="title">
        {customer.first} {customer.last}
      </span>
      <p>{customer.number}</p>
      <p>{customer.email}</p>
      <div className="secondary-content">
        <a href="#edit-customer-modal" onClick={() => setCurrent(customer)} className="modal-trigger">
          <i className="material-icons"> edit </i>
        </a>
        <a onClick={() => deleteCustomer(customer.id)}>
          <i className="material-icons"> delete </i>
        </a>
      </div>
    </Fragment>
  );
};

export default connect(null, { setCurrent, deleteCustomer })(CustomerItem);
