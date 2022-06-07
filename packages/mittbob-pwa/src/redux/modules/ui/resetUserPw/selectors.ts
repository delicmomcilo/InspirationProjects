import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  stage: ({ ui: { resetUserPw } }) => resetUserPw.stage,
  landcode: ({ ui: { resetUserPw } }) => resetUserPw.landcode,
  errors: ({ ui: { resetUserPw } }) => resetUserPw.errors,
  hasSpecialLandcode: ({ ui: { resetUserPw } }) => resetUserPw.hasSpecialLandcode,
};

export default selectors;
