import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavigationHeader from 'src/components/atomic/NavigationHeader';
import actions from 'src/redux/actions';
import RouteWithSubRoutes from 'src/router/RouteWithSubRoutes';
import { useMedia } from 'src/app/app.styles';
import { push } from 'connected-react-router';
import { Grid, Drawer } from '@bob/core-components';
import AllPreemptions from './apartments/AllPreemptions';
import Favorites from './apartments/Favorites';
import ApartmentsFilters from './apartments/ApartmentsFilters';
import ApartmentsNavigation from './apartments/ApartmentsNavigation';
import MyPreemptions from './apartments/MyPreemptions';
import { Container } from './apartments/apartments.styles';
import { IProps } from './apartments/apartments.types';
import { Route } from '../router/types';
import selectors from '../redux/selectors';
import { toggleShowSidebar } from '../redux/modules/ui/apartments/actions';
import PATHS from "../router/paths";
import { useFeatureFlags } from '../app/helpers';

const Apartments: React.FC<IProps> = ({ routes }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const { isDesktop, isMobile } = useMedia();
  const showSidebar = useSelector(selectors.ui.apartments.showSidebar);
  const location = useLocation();
  const isApartmentsLocation = location.pathname === PATHS.APARTMENTS;
  const { findHome } = useFeatureFlags();

  const handleSidebarClose = () => {
    dispatch(toggleShowSidebar());
  };

  const goBack = () => dispatch(push(history.location.pathname.replace(/\/[^/]*$/, '')));

  React.useEffect(() => {
    dispatch(actions.preemption.getPreemptions());
    dispatch(actions.preemption.getMyPreemptions());
    dispatch(actions.preemption.getMyInterests());
    dispatch(actions.preemption.getFilters());
    dispatch(actions.person.getConfiguration());
  }, [dispatch]);
  if (!findHome) {
    dispatch(push(PATHS.HOME))
  }
  return (
    <NavigationHeader title={t('Forkjøp')} onClick={goBack}>
      <Container>
        {isMobile && isApartmentsLocation && (
          <Drawer open={showSidebar} onClose={handleSidebarClose}>
            <Grid container spacing={2}>
              <Grid item>
                <ApartmentsFilters />
              </Grid>
            </Grid>
          </Drawer>
        )}
        <Grid container spacing={2} direction={isDesktop ? 'row' : 'column'}>
          <Grid item>
            <ApartmentsNavigation />
            {isDesktop && isApartmentsLocation && <ApartmentsFilters />}
          </Grid>

          <Grid item xs>
            <Grid container spacing={3}>
              <Switch>
                {routes.map((route: Route) => (
                  <RouteWithSubRoutes key={route.path} {...route} />
                ))}
              </Switch>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </NavigationHeader>
  );
};

export const ApartmentsPages = {
  AllPreemptions,
  MyPreemptions,
  Favorites,
};

export default Apartments;
