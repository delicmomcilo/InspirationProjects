import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  loading: ({ resetUserPw }) => resetUserPw.loading,
};

export default selectors;
