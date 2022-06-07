import { useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { watchGetComingSoon } from '../redux/modules/umbraco/actions';

export const useGestureDirectionListener = callback => {
  const lastTouchY = useRef(0);
  const startTouchY = useRef(0);
  const touchHasEnded = useRef(false);
  const handleTouchStart = e => {
    touchHasEnded.current = false;
    if (e.touches && e.touches[0]) startTouchY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = e => {
    touchHasEnded.current = true;
  };
  const [handleWheel] = useDebouncedCallback(
    e => {
      const scrollOffset = e.deltaY < 0 ? -1 : 1;
      callback({ scrollOffset });
    },
    100,
    { maxWait: 100 },
  );
  const [handleTouchMove] = useDebouncedCallback(e => {
    if (e.touches && e.touches[0]) lastTouchY.current = e.touches[0].clientY;
    if (touchHasEnded) {
      const scrollOffset = startTouchY.current - lastTouchY.current < 0 ? -1 : 1;
      callback({ scrollOffset });
    }
  }, 100);

  // const handleScroll = e => {
  // Workaround for iOS PWA overscroll behavior. Prevent some side-effects when
  // html is in fixed position and prevents user from scrolling content "behind"
  // the html. Overscroll behaviour in iOS and especially PWA is a story in itself.
  // Good solutions are welcome.
  // Update: This solution prevents scrolling when its needed by keyboard. I.e. the keyboard
  // pops up but it covers the input field you are typing in to.
  // window.requestAnimationFrame(() => {
  //   if (
  //     e.target === document ||
  //     e.currentTarget === document ||
  //     e.target === window ||
  //     e.currentTarget === window
  //   ) {
  //     window.scrollTo(0, 0);
  //   }
  // });
  // };
  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchmove', handleTouchMove, false);
    window.addEventListener('touchend', handleTouchEnd, false);
    window.addEventListener('wheel', handleWheel, true);
    // window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove, true);
      window.removeEventListener('touchstart', handleTouchStart, true);
      window.removeEventListener('touchend', handleTouchEnd, true);
      window.removeEventListener('wheel', handleWheel, true);
      // window.removeEventListener('scroll', handleScroll, true);
    };
  });
};

export const useGetAllComingSoonUmbracos = dispatch => {
  useEffect(() => {
    dispatch(watchGetComingSoon());
    // dispatch(watchGetMyApartmentComingSoon());
    // dispatch(watchGetFindApartmentComingSoon());
    // dispatch(watchGetSavedSearchComingSoon());
    // dispatch(watchGetMyPreEmptionsComingSoon());
    // dispatch(watchGetFavoritesComingSoon());
  }, [dispatch]);
};

const FIND_APARTMENT_NAME = 'Finn bolig';

export const getUmbracoContentFindApartment = ({ _embedded: { content = [] } = {} }) => {
  const findApartment = content.find(c => c.name === FIND_APARTMENT_NAME);
  return [findApartment?.props?.title?.value, parse(findApartment?.props?.text?.value || '')];
};

const transformUserFeatureFlags = (flags = {}) => {
  const featureFlags = {};
  if (flags?.MittBobWebAppFFFindHome || flags?.Preemption) featureFlags.findHome = true;
  if (flags?.MittBobWebAppFFOnboardingDialog) featureFlags.onboardingDialog = true;
  if (flags?.MittBobWebAppFFThirdPartyInformation) featureFlags.thirdPartyInformation = true;
  if (flags?.MittBobWebAppFFConfirmContactInfoDialog) featureFlags.confirmContactInfoDialog = true;
  if (flags?.MittBobWebAppFFVipps) featureFlags.vippsCheckout = true;
  return featureFlags;
};
export const useFeatureFlags = () => {
  const ui = useSelector(state => state?.ui?.app?.featureFlags);
  const user = useSelector(state => state?.featureFlags?.flags);
  const transformed = transformUserFeatureFlags(user);
  return { ...ui, ...transformed };
};

export default useGestureDirectionListener;
