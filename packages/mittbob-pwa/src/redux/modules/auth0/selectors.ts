import { Selectors } from './types/selectors.types';
import { RootState } from '../../rootState';

const selectors: Selectors = {
  nameId: (state: RootState) => state.auth0.user && state.auth0.user.nameId,
  loading: (state: RootState) => state.auth0.loading,
};

export default selectors;
