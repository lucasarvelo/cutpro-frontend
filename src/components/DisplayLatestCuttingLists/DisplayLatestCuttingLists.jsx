import React from 'react';
import { connect } from 'react-redux';

const DisplayLatestCuttingLists = props => {
  const handleProcess = poNumber => {
    props.history.push('/cuttinglist/' + poNumber);
  };

  const latestThreeCuttingLists = props.cuttingLists
    .slice(0, 3)
    .map((cuttingList, index) => {
      return (
        <tr key={index} onClick={() => handleProcess(cuttingList.poNumber)}>
          <td className="align-middle">{index + 1}</td>
          <td className="align-middle">{cuttingList.poNumber}</td>
          <td className="align-middle">{cuttingList.ordersTotal}</td>
          <td className="align-middle">{cuttingList.windowsTotal}</td>
          <td className="align-middle">{cuttingList.dateCreation}</td>
        </tr>
      );
    });

  return (
    <div className="card">
      <h1>Latest Cutting Lists</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PO Number</th>
            <th scope="col">Orders</th>
            <th scope="col">Windows</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {latestThreeCuttingLists.length > 0 ? (
            latestThreeCuttingLists
          ) : (
            <tr>
              <th colSpan="5">
                <h5>No Cutting Lists Available</h5>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => state.cuttingListReducer;

export default connect(mapStateToProps)(DisplayLatestCuttingLists);
