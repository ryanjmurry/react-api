import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export function fetchAddressRate(address, type) {
  return function (dispatch) {
    const localAddressId = v4();
    dispatch(requestAddressRate(address, localAddressId))
    return fetch('https://developer.nrel.gov/api/utility_rates/v3.json?address=' + address + '&limit=1&api_key=3ud60MvOOaTPrfQrkoPyemwoSSfRPC0lvStkoPj7').then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      let rate = json.outputs[type];
      let provider = json.outputs.utility_name;
      dispatch(receiveAddressRate(address, rate, provider, localAddressId));
      dispatch(updateCurrentAddressId(localAddressId));
    });
  }
}

export const requestAddressRate = (address, localAddressId) => ({
  type: types.REQUEST_RATE,
  address,
  localAddressId
});

export const receiveAddressRate = (address, rate, provider, localAddressId) => ({
  type: types.RECEIVE_RATE,
  address,
  rate,
  provider,
  localAddressId
});

export const updateCurrentAddressId = (localAddressId) => ({
  type: types.CURRENT_ADDRESS_ID,
  localAddressId
})
