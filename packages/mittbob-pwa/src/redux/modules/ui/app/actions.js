import {
  CHANGE_BROWSER_THEME_COLOR,
  CHANGE_FEATURE_FLAGS,
  CHANGE_SCROLL_DIRECTION,
  SET_COMING_SOON_MODAL,
  TOGGLE_FEATURE_FLAGS_MODAL,
} from './constants';

export const changeScrollDirection = ({ scrollOffset }) => ({
  type: CHANGE_SCROLL_DIRECTION,
  payload: { scrollOffset },
});

export const changeFeatureFlags = featureFlags => ({
  type: CHANGE_FEATURE_FLAGS,
  payload: { featureFlags },
});

export const toggleFeatureFlagsModal = featureFlags => ({
  type: TOGGLE_FEATURE_FLAGS_MODAL,
});

export const changeBrowserThemeColor = color => ({
  type: CHANGE_BROWSER_THEME_COLOR,
  payload: { color },
});

export const setComingSoonModal = ({ open, title, text }) => ({
  type: SET_COMING_SOON_MODAL,
  payload: { open, title, text },
});
