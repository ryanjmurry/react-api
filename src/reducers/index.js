import React from 'react';
import addressReducer from './addressReducer';
import currentAddressReducer from './currentAddressReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    addressReducer: addressReducer,
    currentAddressReducer: currentAddressReducer
  }
)

export default rootReducer
