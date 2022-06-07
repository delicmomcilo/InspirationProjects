import {
  SCROLL_DIRECTION,
  CHANGE_SCROLL_DIRECTION,
  CHANGE_FEATURE_FLAGS,
  CHANGE_BROWSER_THEME_COLOR,
  SET_COMING_SOON_MODAL,
  TOGGLE_FEATURE_FLAGS_MODAL,
} from './constants';
import featureFlags from '../../../../config/featureFlags';

export const initialState = {
  scrollOffset: 0,
  scrollDirection: SCROLL_DIRECTION.UP,
  featureFlags,
  browserThemeColor: '#eee',
  featureFlagsModalOpen: false,
  comingSoonModal: {
    open: false,
    text: '',
    title: '',
  },
};

export default (state = initialState, action) => {
  const { payload = {} } = action;
  const { scrollOffset, color, open, text, title } = payload;

  switch (action.type) {
    case CHANGE_SCROLL_DIRECTION:
      return {
        ...state,
        scrollOffset,
        scrollDirection: scrollOffset < 0 ? SCROLL_DIRECTION.UP : SCROLL_DIRECTION.DOWN,
      };
    case CHANGE_FEATURE_FLAGS:
      return {
        ...state,
        featureFlags: { ...state.featureFlags, ...payload.featureFlags },
      };
    case TOGGLE_FEATURE_FLAGS_MODAL:
      return {
        ...state,
        featureFlagsModalOpen: !state.featureFlagsModalOpen,
      };
    case CHANGE_BROWSER_THEME_COLOR:
      document.body.style.backgroundColor = color; // Prevent flashing and rerenders of global styles by just changing the body style inline
      document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
      return {
        ...state,
        browserThemeColor: color,
      };

    case SET_COMING_SOON_MODAL:
      return { ...state, comingSoonModal: { open, text, title } };
    default:
      return state;
  }
};
