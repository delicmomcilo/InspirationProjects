import reducer, { initialState } from '../reducer';
import {
  SCROLL_DIRECTION,
  CHANGE_SCROLL_DIRECTION,
  CHANGE_FEATURE_FLAGS,
} from '../constants';
import * as actions from '../actions';

jest.mock('../../../../../config/featureFlags', () => {
  return { findHome: false };
});

describe('modules/ui/app/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${CHANGE_SCROLL_DIRECTION}`, () => {
    expect(
      reducer(
        initialState,
        actions.changeScrollDirection({ scrollOffset: -1 }),
      ),
    ).toEqual({
      ...initialState,
      scrollOffset: -1,
      scrollDirection: SCROLL_DIRECTION.UP,
    });
    expect(
      reducer(
        { ...initialState, scrollOffset: 0 },
        actions.changeScrollDirection({ scrollOffset: 1 }),
      ),
    ).toEqual({
      ...initialState,
      scrollOffset: 1,
      scrollDirection: SCROLL_DIRECTION.DOWN,
    });
  });

  it(`should handle ${CHANGE_FEATURE_FLAGS}`, () => {
    expect(
      reducer(initialState, actions.changeFeatureFlags({ profile: true })),
    ).toEqual({
      ...initialState,
      featureFlags: { ...initialState.featureFlags, profile: true },
    });
  });
});
