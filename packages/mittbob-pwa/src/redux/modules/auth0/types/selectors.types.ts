import { RootState } from 'src/redux/rootState';

export interface Selectors {
  nameId: (state: RootState) => string | undefined;
  loading: (state: RootState) => boolean | undefined;
}
