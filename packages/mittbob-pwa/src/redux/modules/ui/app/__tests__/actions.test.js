import { changeScrollDirection, changeFeatureFlags } from '../actions';
import { CHANGE_FEATURE_FLAGS, CHANGE_SCROLL_DIRECTION } from '../constants';

describe('modules/ui/app/actions', () => {
  it('changeScrollDirection', () => {
    expect(changeScrollDirection({ scrollOffset: 123 })).toEqual({
      type: CHANGE_SCROLL_DIRECTION,
      payload: {
        scrollOffset: 123,
      },
    });
  });

  it('changeFeatureFlags', () => {
    expect(changeFeatureFlags({ profile: true })).toEqual({
      type: CHANGE_FEATURE_FLAGS,
      payload: {
        featureFlags: {
          profile: true,
        },
      },
    });
  });
});
