import { TOGGLE_MODAL } from '../constants';
import { toggleModal } from '../actions';

describe('modules/ui/me/actions', () => {
  it(`should toggleModal`, () => {
    expect(toggleModal('propertyName')).toEqual({
      type: TOGGLE_MODAL,
      payload: { openModal: 'propertyName' },
    });
  });
});
