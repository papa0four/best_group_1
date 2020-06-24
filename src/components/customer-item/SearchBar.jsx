import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchCustomer } from '../../actions/customerActions';

const SearchBar = ({ searchCustomer }) => {
  const text = useRef('');

  const onChange = (e) => {
    searchCustomer(text.current.value);
  };
  return (
    <div>
      <div div className="nav-wrapper">
        <form>
          <div div className="input-field">
            <input id="search" type="search" placeholder="Search Customers" ref={text} onChange={onChange} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { searchCustomer })(SearchBar);
