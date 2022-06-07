import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
    get: state => state.ui.confirmContactInfo,
    preferenceChanges: state => state.ui.confirmContactInfo.preferenceChanges
};

export default selectors;
