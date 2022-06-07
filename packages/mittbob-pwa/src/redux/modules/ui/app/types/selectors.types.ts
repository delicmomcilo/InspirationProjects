import { RootState } from '../../../../rootState';

export interface Selectors {
  featureFlags: (state: RootState) => { [key: string]: boolean};
}
