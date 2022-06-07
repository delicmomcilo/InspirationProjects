import { SET_ERRORS } from './constants';

export const setValidationErrors = ({ errors }) => ({
  type: SET_ERRORS,
  payload: { errors },
});

export default setValidationErrors;
