import React from 'react';
import { connect } from 'react-redux';

const DisplayList = ({object}) => {
  const { address, provider, rate } = object;
  console.log(address);
  return(
    <div>
      Address: {address}
      Provider: {provider}
      Rate: ${rate} / kWh
    </div>
  );
}

const mapStateToProps = state => {
  let info;
  const object = state.objectList[state.currentAddressId];
  if(!state.objectList[state.currentAddressId].isFetching) {
    info = {
      id: state.currentAddressId,
      address: object.address,
      provider: object.provider,
      rate: object.rate
    }
  } else {
    info = {
      address: '',
      provider: '',
      rate: ''
    }
  }
  return {
    object: info
  };
};

export default connect(mapStateToProps)(DisplayList);
