import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@bob/core-components';
import { useSelector, useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ENTERED } from 'react-transition-group/Transition';
import parse from 'html-react-parser';
import { history } from './redux/store';
import { routes, RouteWithSubRoutes } from './router';
import PATHS from './router/paths';
import siteMap from './router/siteMap';
import {
  changeScrollDirection,
  setComingSoonModal,
  toggleFeatureFlagsModal,
} from './redux/modules/ui/app/actions';
import { AppContainer, RoutesContainer, RoutesWrapper } from './app/app.styles';
import { MobileNavigation, DesktopNavigation } from './components';
import { useGestureDirectionListener, useGetAllComingSoonUmbracos } from './app/helpers';
import BreadCrumbs from './components/Breadcrumbs';
import BuildVersion from './app/BuildVersion';
import InstallAppPrompt from './app/InstallAppPrompt';
import ModalDialog from './components/ModalDialog';
import withClearCache from './app/ClearCache';
import {
  UMBRACO_COMING_SOON_PROPERTIES,
  UMBRACO_PROPERTIES,
} from './redux/modules/umbraco/constants';
import FeatureFlagPreview from './app/FeatureFlagsPreview';
import OnBoardingDialog from './components/OnBoardingDialog';
import ConfirmContactInfoDialog from './components/ConfirmContactInfoDialog';

const MainApp = () => {
  const mode = useSelector(store => store.ui.theme.mode);
  const comingSoonModal = useSelector(store => store.ui.app.comingSoonModal);
  const dispatch = useDispatch();
  useGestureDirectionListener(({ scrollOffset }) =>
    dispatch(changeScrollDirection({ scrollOffset })),
  );
  useGetAllComingSoonUmbracos(dispatch);
  if (!window.__PREVIEW_FEATURES__)
    window.__PREVIEW_FEATURES__ = () => dispatch(toggleFeatureFlagsModal());
  const comingSoonUmbraco = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.COMING_SOON] || {},
  );

  React.useEffect(() => {
    const tim = setTimeout(() => {
      window.location.href = 'https://bob.no'
    }, 10000);
    return () => clearTimeout(tim);
  })

  const handleFindApartmentComingSoon = () => {
    const findApartment = comingSoonUmbraco?._embedded?.content?.find(
      u => u.name === UMBRACO_COMING_SOON_PROPERTIES.FIND_APARTMENT,
    );
    if (!findApartment) return;
    dispatch(
      setComingSoonModal({
        open: !!findApartment,
        text: findApartment?.props?.text?.value,
        title: findApartment?.props?.title?.value,
      }),
    );
  };

  return (
    <ThemeProvider theme={{ mode }}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <div id="app-background-container" />
          <DesktopNavigation handleFindApartmentComingSoon={handleFindApartmentComingSoon} />
          <FeatureFlagPreview />
          <ModalDialog
            title={comingSoonModal.title}
            open={comingSoonModal.open}
            onClose={() => dispatch(setComingSoonModal({ ...comingSoonModal, open: false }))}
          >
            {parse(comingSoonModal?.text || '')}
          </ModalDialog>

          <BreadCrumbs routes={routes} siteMap={siteMap} />
          <RoutesContainer>
            <RoutesWrapper>
              <Switch>
                {routes.filter(r => r.path === '/hjem').map(route => (
                  <RouteWithSubRoutes key={route.path} {...route} />
                ))}
                <Route path="*">
                  <Redirect to={PATHS.HOME} />
                </Route>
              </Switch>
            </RoutesWrapper>
          </RoutesContainer>
          <BuildVersion />
          <MobileNavigation
            animationState={ENTERED}
            handleFindApartmentComingSoon={handleFindApartmentComingSoon}
          />
          {/*<OnBoardingDialog />*/}
          {/*<ConfirmContactInfoDialog />*/}
          {/*<InstallAppPrompt />*/}
        </AppContainer>
      </ConnectedRouter>
    </ThemeProvider>
  );
};

const ClearCacheComponent = withClearCache(MainApp);

const App = () => {
  return <ClearCacheComponent />;
}

export default App;
