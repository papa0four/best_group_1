import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCustomers } from '../../actions/customerActions';
import CustomerItem from '../../components/customer-item/CustomerItem';
import EditModal from '../../components/customer-item/EditModal';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddButton from '../../components/add-button/AddButton';
import AddModal from '../../components/customer-item/AddModal';
import SearchBar from '../../components/customer-item/SearchBar';
import Pagination from '../../components/pagination/Pagination';

const Customers = ({ customer: { customers, loading }, getCustomers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);

  useEffect(() => {
    M.AutoInit();
    getCustomers();
    //eslint-disable-next-line
  }, [getCustomers]);

  //get current customers
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading || customers === null) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="container">
      <SearchBar />
      <ul className="collection">
        {currentCustomers.map((customer) => (
          <li key={customer.id} className="collection-item avatar">
            <CustomerItem customer={customer} />
          </li>
        ))}
      </ul>
      <AddButton />
      <EditModal />
      <AddModal />
      <Pagination itemsPerPage={customersPerPage} totalItems={customers.length} paginate={paginate} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps, { getCustomers })(Customers);
