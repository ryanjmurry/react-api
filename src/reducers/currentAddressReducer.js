import constants from '../constants';
const { types, initialState} = constants;

export const currentAddressReducer = (state = initialState, action) =>{
  switch(action.type){
    case types.CURRENT_ADDRESS_ID:
    return action.localAddressId;
  default:
    return state
  }
}
