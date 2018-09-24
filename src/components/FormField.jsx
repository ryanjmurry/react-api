import React from 'react';
import { connect } from 'react-redux';
import { fetchAddressRate } from './../actions';
import PropTypes from 'prop-types';

function FormField({ dispatch }) {
  let address;
  let rate;
  return(
    <div>
      <h3>Enter Address</h3>
      <form onSubmit={e => {
          e.preventDefault();
          if (!address.value.trim()) {
            return;
          }
          console.log(address.value.trim())
          console.log(rate.value)
          dispatch(fetchAddressRate(address.value.trim(), rate.value))
        }}>
        <input ref={node =>{ address = node;}} placeholder="Address"></input>
        <br></br>
        <select ref={node =>{ rate = node;}}>
          <option value='residential'>Residential</option>
          <option value='commercial'>Commercial</option>
          <option value='industrial'>Industrial</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

FormField.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(FormField);
