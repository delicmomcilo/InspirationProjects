import { LIBRARY_NAME } from '../constants';

export const NAME = `${LIBRARY_NAME}__button`;

export const ARROW_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
};

export const ARROW_DIRECTION = {
  ...ARROW_POSITION,
  UP: 'up',
  DOWN: 'down',
};

export const ARROW_LENGTH = {
  SHORT: 'short',
  MEDIUM: 'medium',
  LONG: 'long',
};

export const BUTTON_SIZES = { medium: '1.7rem', large: '3.5rem' };

export default NAME;
