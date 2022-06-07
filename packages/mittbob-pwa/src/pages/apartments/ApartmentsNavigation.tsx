import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'src/redux/selectors';
import { useMedia } from 'src/app/app.styles';
import PATHS from 'src/router/paths';
import { Grid, Button } from '@bob/core-components';
import { Link, useLocation } from 'react-router-dom';
import { toggleShowSidebar } from '../../redux/modules/ui/apartments/actions';

const ApartmentsNavigation: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useMedia();
  const dispatch = useDispatch();
  const handleShowFiltersSidebar = () => {
    dispatch(toggleShowSidebar());
  };
  const numPreemptions = useSelector(selectors.preemption.preemptionCount);
  const numFavorites = useSelector(selectors.person.favoriteCount);
  const numInterests = useSelector(selectors.preemption.interestCount);
  const location = useLocation();

  return (
    <Grid
      container
      alignItems={isMobile ? 'center' : 'baseline'}
      justifyContent="space-around"
      direction={isMobile ? 'row' : 'column'}
      spacing={isMobile ? 0 : 2}
    >
      {isMobile && (
        <Grid item>
          <Button
            disabled={location.pathname !== PATHS.APARTMENTS}
            variant="icon"
            iconName="SlidersOutlined"
            onClick={handleShowFiltersSidebar}
          />
        </Grid>
      )}
      <Grid item>
        <Button
          as={location.pathname !== PATHS.APARTMENTS && Link}
          disabled={location.pathname === PATHS.APARTMENTS}
          variant={isMobile ? 'icon' : 'tertiary'}
          iconName="SearchOutlined"
          to={PATHS.APARTMENTS}

        >
          {isMobile ? `${numPreemptions}` : t('Boliger')}
        </Button>
      </Grid>
      <Grid item>
        <Button
          as={location.pathname !== PATHS.APARTMENTS_FAVORITES && Link}
          disabled={location.pathname === PATHS.APARTMENTS_FAVORITES}
          variant={isMobile ? 'icon' : 'tertiary'}
          iconName="Heart"
          to={PATHS.APARTMENTS_FAVORITES}
        >
          {isMobile ? `${numFavorites}` : t('Favoritter')}
        </Button>
      </Grid>
      <Grid item>
        <Button
          as={location.pathname !== PATHS.APARTMENTS_INTERESTS && Link}
          disabled={location.pathname === PATHS.APARTMENTS_INTERESTS}
          variant={isMobile ? 'icon' : 'tertiary'}
          iconName="DocumentOutlined"
          to={PATHS.APARTMENTS_INTERESTS}
        >
          {isMobile ? `${numInterests}` : t('Mine meldte forkjøp')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ApartmentsNavigation;
