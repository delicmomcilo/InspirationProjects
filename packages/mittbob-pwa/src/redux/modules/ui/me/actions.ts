import { TOGGLE_MODAL } from './constants';
import { Name } from './types/actions.types';

export const toggleModal = (name: Name) =>
  ({
    type: TOGGLE_MODAL,
    payload: {
      openModal: name,
    },
  } as const);

export default toggleModal;
