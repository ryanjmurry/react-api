import constants from "./../../src/constants";
import addressReducer from './../../src/reducers/addressReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

const testState = {
  1: {
    isFetching: true,
    address: '4830 NE 11th Ave, Portland, Or',
    localAddressId: 1
  }
}
describe('API App', () => {
  const { initialState, types } = constants;
  const store = createStore(addressReducer, initialState);

  describe('addressReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(addressReducer(initialState, { type: null })).toEqual(initialState);
    })

    it('Should update state when API data is being requested', () => {
      const action = actions.requestAddressRate("123 NW Portland Ave, Portland, OR");
      const newStateEntry = {
        isFetching: true,
        address: action.address,
        localAddressId: action.localAddressId
      };
      expect(addressReducer(initialState, action)[action.localAddressId]).toEqual(newStateEntry);
      console.log(action.localAddressId)
    })

    it('Should update state on receive address rate', () =>{
      const action = actions.receiveAddressRate('4830 NE 11th Ave, Portland, Or', 0.1, 'PGE', 1);
      const newObject = {
        isFetching: false,
        address: action.address,
        rate: action.rate,
        provider: action.provider,
        localAddressId: action.localAddressId
      };
      expect(addressReducer(testState, action)[action.localAddressId]).toEqual(newObject);
    });
  });

  describe('currentAddressReducer', () => {
    it('Should set current address Id to localAddressId', () => {
      expect(currentAddressReducer(initialState, actions.updateCurrentAddressId(1))).toEqual(1);
    });
  });
});
