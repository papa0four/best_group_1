import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getGuests } from '../../actions/guestActions';
import GuestItem from '../../components/guest-item/GuestItem';
import EditModal from '../../components/guest-item/EditModal';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddButton from '../../components/add-button/AddButton';
import AddModal from '../../components/guest-item/AddModal';
import SearchBar from '../../components/guest-item/SearchBar';
import Pagination from '../../components/pagination/Pagination';

const Guests = ({ guest: { guests, loading }, getGuests }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [guestsPerPage] = useState(5);

  useEffect(() => {
    M.AutoInit();
    getGuests();
    //eslint-disable-next-line
  }, [getGuests]);

  //get current customers
  const indexOfLastGuest = currentPage * guestsPerPage;
  const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
  const currentGuests = guests.slice(indexOfFirstGuest, indexOfLastGuest);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading || guests === null) {
    return <h1> Loading.... </h1>;
  }

  return (
    <div className="container">
      <SearchBar />
      <ul className="collection">
        {currentGuests.map((guest) => (
          <li key={guest.id} className="collection-item avatar">
            <GuestItem guest={guest} />
          </li>
        ))}
      </ul>
      <AddButton />
      <EditModal />
      <AddModal />
      <Pagination itemsPerPage={guestsPerPage} totalItems={guests.length} paginate={paginate} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  guest: state.guest,
});

export default connect(mapStateToProps, {
  getGuests,
})(Guests);
