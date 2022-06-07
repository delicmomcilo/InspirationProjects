import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  loading: state => state.person.loading,
  favorite: id => state => state.person.configuration?.favoritePreemptions?.[id] ? id : undefined,
  favoriteList: state => {
    const favs = state.person.configuration?.favoritePreemptions || {};
    return Object.keys(favs).filter(k => favs[k])},
  favoriteCount: state =>
    Object.values(state.person.configuration?.favoritePreemptions || {}).length,
  getConfigurationError: state => state.person.configurationError,
  configuration: (state) => state.person.configuration,
  person: (state) => state.person.person
};

export default selectors;
