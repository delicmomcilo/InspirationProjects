import reducer, { initialState } from '../reducer';
import { TOGGLE_MODAL } from '../constants';
import { toggleModal } from '../actions';

describe('modules/ui/me/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${TOGGLE_MODAL}`, () => {
    expect(reducer(initialState, toggleModal('propertyName'))).toEqual({
      ...initialState,
      openModal: 'propertyName',
    });
  });
});
