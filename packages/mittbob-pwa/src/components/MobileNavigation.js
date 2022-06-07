import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import HomeButton from './mobileNavigation/HomeButton';
import PATHS from '../router/paths';
import {
  Container,
  NavigationButton,
  OuterContainer,
} from './mobileNavigation/mobileNavigation.styles';
import { Icon } from './atomic';
import { useFeatureFlags } from '../app/helpers';

const MobileNavigation = ({ animationState, handleFindApartmentComingSoon }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuthenticated = useSelector(store => store.auth0.isAuthenticated);
  const { t } = useTranslation();
  const { findHome } = useFeatureFlags();
  const handleNavigate = ({ currentTarget }) => {
    const { path } = currentTarget.dataset;
    if (path) dispatch(push(path));
  };
  const handleFindApartment = e => {
    if (findHome) {
      const { path } = e.currentTarget.dataset;
      if (path) dispatch(push(path));
    } else {
      handleFindApartmentComingSoon(e);
    }
  }
  return (
    <OuterContainer animationState={animationState}>
      <Container animationState={animationState}>
        <NavigationButton
          selected={location.pathname.startsWith(PATHS.APARTMENTS)}
          onClick={handleFindApartment}
          data-path={PATHS.APARTMENTS}
          disabled
        >
          <Icon name="SearchOutlined" color="tertiary" />
          <Icon name="Search" />
          <span>{t('Finn bolig')}</span>
        </NavigationButton>
        <NavigationButton
          selected={location.pathname.startsWith(PATHS.BENEFITS)}
          onClick={handleNavigate}
          data-path={PATHS.BENEFITS}
          disabled
        >
          <Icon name="PiggyBankOutlined" color="tertiary" />
          <Icon name="PiggyBank" />
          <span>{t('Fordeler')}</span>
        </NavigationButton>
        <HomeButton selected={location.pathname.startsWith(PATHS.HOME)} onClick={handleNavigate} />
        <NavigationButton
          selected={location.pathname.startsWith(PATHS.INVOICES)}
          onClick={handleNavigate}
          data-path={PATHS.INVOICES}
          disabled
        >
          <Icon name="DocumentOutlined" color="tertiary" />
          <Icon name="Document" />
          <span>{t('Faktura')}</span>
        </NavigationButton>
        <NavigationButton
          selected={
            !location.pathname.startsWith(PATHS.BENEFITS) && location.pathname.startsWith(PATHS.ME)
          }
          onClick={handleNavigate}
          data-path={PATHS.ME}
          disabled
        >
          <Icon name="ProfileOutlined" color="tertiary" />
          <Icon name="Profile" />
          <span>{t('Meg')}</span>
        </NavigationButton>
      </Container>
    </OuterContainer>
  );
};

MobileNavigation.propTypes = {
  handleFindApartmentComingSoon: PropTypes.func.isRequired,
  animationState: PropTypes.string.isRequired,
};

export default MobileNavigation;
