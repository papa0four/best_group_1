import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchGuest } from '../../actions/guestActions';

const SearchBar = ({ searchGuest }) => {
  const text = useRef('');

  const onChange = (e) => {
    searchGuest(text.current.value);
  };
  return (
    <div>
      <div div className="nav-wrapper">
        <form>
          <div div className="input-field">
            <input id="search" type="search" placeholder="Search Guest" ref={text} onChange={onChange} />
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

export default connect(null, { searchGuest })(SearchBar);
